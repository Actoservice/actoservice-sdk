import React from 'react';
import AbstractWrapper from '../AbstractWrapper';
import set from 'lodash/set';

import { Consumer } from '../../context';
import {
  getValue,
  getType,
  getTitle
} from '../../utils/values';

export default function withBind(paths) {
  return function(Component) {
    class WithASBind extends React.Component {
      render() {
        return (
          <Consumer>
            {({ configMap, isEditing, updateConfig }) => {
              const scheme = {};
              paths.forEach((path) => {
                set(scheme, `${path}.value`, getValue(path)({ configMap }));
                set(scheme, `${path}.title`, getTitle(path)({ configMap }));
                set(scheme, `${path}.type`, getType(path)({ configMap }));
              });
              return (
                <AbstractWrapper
                  classes={this.props.classes}
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

    WithASBind.displayName = `withBind [${Component.displayName || Component.name}]`;

    return WithASBind;
  }
}
