import React from 'react';
import get from 'lodash/get';
import omit from 'lodash/omit';
import isObject from 'lodash/isObject';
import merge from 'lodash/merge';
import assign from 'lodash/assign';

import { getValue } from './utils/values';
import { isInIframe } from './utils/iframe';
import HoverComponent from './components/HoverComponent';
import { Provider, Consumer } from './context';
import {
  actionIdentifier,
  changeEditing,
  updateConfig,
  notifyUpdates
} from './ipc';

const PropTypes = require('prop-types');

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
    stylesheet.innerHTML = `
      .body {
        padding: 0;
        margin: 0;
      }
      .Popover {
        z-index: 22;
      }
      .Popover-body {
        display: inline-flex;
        flex-direction: column;
        padding: 2rem 4rem;
        background: hsl(0, 0%, 27%);
        color: white;
        border-radius: 0.3rem;
      }
      
      .Popover-tipShape {
        fill: hsl(0, 0%, 27%);
      }
      .Target {
        -webkit-user-select: none;
        position: relative;
        display: inline-block;
        color: hsla(0, 0%, 0%, 0.45);
        color: white;
        white-space: pre-wrap;
        text-align: center;
        text-transform: uppercase;
        border-radius: 0.2rem;
        overflow: hidden;
      }
      
      .Target-Move {
        padding: 1rem;
        cursor: move;
        border-bottom: 1px solid white;
        background: hsl(173, 69%, 48%);
      }
      
      .Target-Toggle {
        display: block;
        padding: 1rem;
        cursor: pointer;
        background: hsl(346, 62%, 55%);
      }
      .Target.is-open .Target-Toggle {
        background: hsl(346, 80%, 50%);
      }
    `;
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
    const newConfig = merge(
      this.state.configMap,
      configuration,
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
