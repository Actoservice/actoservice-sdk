import React from 'react';
import get from 'lodash/get';
import isObject from 'lodash/isObject';
const assign = require('lodash/assign');
const actoserviceContext = React.createContext();
const { Provider, Consumer } = actoserviceContext;

class Actoservice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      configMap: window.__ACTOSERVICE__SCHEME__
    };
    delete window.__ACTOSERVICE__SCHEME__;
  }

  componentDidMount() {
    const { scheme } = this.props;
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

  updateConfig(configuration) {
    this.setState({ configMap: configuration });
  }

  render() {
    const { configMap } = this.state;
    return (
      React.createElement(Provider, {
        value: { configMap }
      }, [
        React.Children.only(this.props.children)
      ])
    );
  }
}

export function bind(key) {
  return (
    React.createElement(
      Consumer,
      null,
      ({ configMap }) => get(
        get(configMap, key),
        'defaultValue',
        get(configMap, key)
      )
    )
  );
}

export default Actoservice;
