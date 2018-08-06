import React from 'react';
import AbstractWrapper from '../AbstractWrapper';
import set from 'lodash/set';
import uniq from 'lodash/uniq';

import { Consumer } from '../../context';
import {
  getValue,
  getType,
  getTitle,
  getMax,
  getMin
} from '../../utils/values';

export default function withBind(paths) {
  return function(Component) {
    const name = Component.displayName || Component.name || 'Unknown';

    if (paths.length !== uniq(paths).length) {
      console.warn(`
        You're trying to get Actoservice value multiple times,
        Please restructure this to get it once in component: ${name}
      `);
    }

    class WithASBind extends React.Component {
      render() {
        return (
          <Consumer>
            {({ configMap, isEditing, updateConfig, apiKey }) => {
              const scheme = {};
              paths.forEach((path) => {
                set(scheme, `${path}.value`, getValue(path)({ configMap }));
                set(scheme, `${path}.title`, getTitle(path)({ configMap }));
                set(scheme, `${path}.type`, getType(path)({ configMap }));
                set(scheme, `${path}.max`, getMax(path)({ configMap }));
                set(scheme, `${path}.min`, getMin(path)({ configMap }));
              });
              return (
                <AbstractWrapper
                  classes={this.props.classes}
                  wrapper={this.props.wrapper}
                  apiKey={apiKey}
                  actoservice={{
                    paths,
                    scheme,
                    updateConfig,
                    isEditing
                  }}
                >
                <Component {...this.props} />
              </AbstractWrapper>
            );
          }}
          </Consumer>
        );
      }
    }

    WithASBind.displayName = `withBind [${name}]`;

    return WithASBind;
  }
}
