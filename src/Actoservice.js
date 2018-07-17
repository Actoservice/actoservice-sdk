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

const actionIdentifier = '__ACTOSERVICE__ACTION__';

class Actoservice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      configMap: window.__ACTOSERVICE__SCHEME__
    };
    window.__ACTOSERVICE__SCHEME__ = null;
  }

  componentDidMount() {
    const { scheme } = this.props;
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

  _isASAction(action) {
    return get(action, actionIdentifier);
  }

  _registerListener() {
    window.onmessage = ({ origin, data }) => {
      console.log('message received', origin, data);
      if (this._isASAction(data)) {
        this.updateConfig(get(data, 'payload'));
      } else {
        console.warn('invalid update');
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
    });
  }

  render() {
    const { configMap } = this.state;
    const { children } = this.props;
    return (
      <Provider
        value={{ configMap }}
      >
        {React.Children.only(children)}
      </Provider>
    );
  }
}

export function bind(key) {
  return (
    <Consumer>
      {getValue(key)}
    </Consumer>
  );
}

export default Actoservice;
