import React from 'react';
import get from 'lodash/get';
import omit from 'lodash/omit';
import isObject from 'lodash/isObject';
import merge from 'lodash/merge';
import mergeWith from 'lodash/mergeWith';
import assign from 'lodash/assign';
import includes from 'lodash/includes';

import externalCSS from './externalCSS';
import { getValue, getType } from './utils/values';
import { isInIframe } from './utils/iframe';
import keyfiy from './utils/keyify';

import { Provider, Consumer } from './context';
import {
  actionIdentifier,
  changeEditing,
  updateConfig,
  notifyUpdates
} from './ipc';

const PropTypes = require('prop-types');

const base64Regexp = /^(data:\w+\/[a-zA-Z\+\-\.]+;base64,)?(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/gi;

class Actoservice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      configMap: window.__ACTOSERVICE__SCHEME__,
      isEditing: props.editing || isInIframe()
    };
    window.__ACTOSERVICE__SCHEME__ = null;

    this.updateConfig = this.updateConfig.bind(this);
  }

  componentDidMount() {
    const { scheme } = this.props;
    this.injectCSS();

    if (isInIframe()) {
      this._registerListener();
    }

    if (!this.props.scheme && !this.state.configMap) {
      console.error('Scheme is not specified');
      return;
    }
    if (this.state.configMap) {
      return;
    }
    if (isObject(scheme)) {
      this.setState({ configMap: scheme });
    }
    if (typeof scheme === 'string') {
      fetch(scheme)
        .then((res) => res.json())
        .then((configMap) => this.setState({ configMap }))
        .catch(e => console.error('Cant find configMap'));
    }
  }

  injectCSS() {
    const stylesheet = document.createElement('style');
    stylesheet.innerHTML = externalCSS;
    document.head.appendChild(stylesheet);
  }

  _isASAction(action) {
    const mAction = get(action, actionIdentifier);
    if (!mAction) {
      return false;
    }
    return [
      changeEditing,
      updateConfig,
    ].includes(mAction);
  }

  _registerListener() {
    window.onmessage = ({ origin, data }) => {
      console.log('message received', origin, data);
      if (!this._isASAction(data)) {
        return; 
      }
      const type = get(data, actionIdentifier);
      switch(type) {
        case changeEditing:
          this.setState({ editing: get(data, 'payload') });
          break;
        case updateConfig:
          this.updateConfig(get(data, 'payload'));
          break;
        default:
          console.warn('Wrong action received', data);
      }
    }
  }

  updateConfig(configuration) {
    const newConfig = mergeWith(
      this.state.configMap,
      configuration,
      (objVal, sourceVal) =>
        Array.isArray(sourceVal) ? sourceVal : void(0)
    );

    this.setState({
      configMap: newConfig
    }, () => {
      if ('parent' in window) {
        parent.postMessage({
          [actionIdentifier]: notifyUpdates,
          payload: {
            updates: configuration,
            result: this.state.configMap
          }
        }, '*');
      }
    });
  }

  render() {
    const { configMap, isEditing } = this.state;
    const { children } = this.props;
    return (
      <Provider
        value={{
          configMap,
          isEditing,
          apiKey: this.props.apiKey,
          updateConfig: this.updateConfig
        }}
      >
        {React.Children.only(children)}
      </Provider>
    );
  }
}

Actoservice.propTypes = {
  editing: PropTypes.bool,
  apiKey: PropTypes.string,
  scheme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export function bind(key) {
  return (
    <Consumer>
      {getValue(key)}
    </Consumer>
  );
}

export default Actoservice;