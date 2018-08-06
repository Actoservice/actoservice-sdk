import React from 'react';
<<<<<<< HEAD
import AbstractWrapper from '../AbstractWrapper';
import set from 'lodash/set';
import uniq from 'lodash/uniq';
=======
import HoverComponent from '../HoverComponent';
import set from 'lodash/set';
>>>>>>> 390b25b2c27e0a7f51baee5f35d557263d02f330

import { Consumer } from '../../context';
import {
  getValue,
  getType,
<<<<<<< HEAD
  getTitle,
  getMax,
  getMin
=======
  getTitle
>>>>>>> 390b25b2c27e0a7f51baee5f35d557263d02f330
} from '../../utils/values';

export default function withBind(paths) {
  return function(Component) {
<<<<<<< HEAD
    const name = Component.displayName || Component.name || 'Unknown';

    if (paths.length !== uniq(paths).length) {
      console.warn(`
        You're trying to get Actoservice value multiple times,
        Please restructure this to get it once in component: ${name}
      `);
    }

=======
>>>>>>> 390b25b2c27e0a7f51baee5f35d557263d02f330
    class WithASBind extends React.Component {
      render() {
        return (
          <Consumer>
<<<<<<< HEAD
            {({ configMap, isEditing, updateConfig, apiKey }) => {
=======
            {({ configMap, isEditing, updateConfig }) => {
>>>>>>> 390b25b2c27e0a7f51baee5f35d557263d02f330
              const scheme = {};
              paths.forEach((path) => {
                set(scheme, `${path}.value`, getValue(path)({ configMap }));
                set(scheme, `${path}.title`, getTitle(path)({ configMap }));
                set(scheme, `${path}.type`, getType(path)({ configMap }));
<<<<<<< HEAD
                set(scheme, `${path}.max`, getMax(path)({ configMap }));
                set(scheme, `${path}.min`, getMin(path)({ configMap }));
              });
              return (
                <AbstractWrapper
                  classes={this.props.classes}
                  wrapper={this.props.wrapper}
                  apiKey={apiKey}
=======
              });
              return (
                <HoverComponent
>>>>>>> 390b25b2c27e0a7f51baee5f35d557263d02f330
                  actoservice={{
                    paths,
                    scheme,
                    updateConfig,
                    isEditing
                  }}
                >
                <Component {...this.props} />
<<<<<<< HEAD
              </AbstractWrapper>
=======
              </HoverComponent>
>>>>>>> 390b25b2c27e0a7f51baee5f35d557263d02f330
            );
          }}
          </Consumer>
        );
      }
    }

<<<<<<< HEAD
    WithASBind.displayName = `withBind [${name}]`;
=======
    WithASBind.displayName = `withBind [${Component.displayName || Component.name}]`;
>>>>>>> 390b25b2c27e0a7f51baee5f35d557263d02f330

    return WithASBind;
  }
}
