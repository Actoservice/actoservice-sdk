import React from 'react';
import HoverComponent from '../HoverComponent';
import set from 'lodash/set';

import { Consumer } from '../../context';
import {
  getValue,
  getType,
  getTitle
} from '../../utils/values';

export default function withBind(paths) {
  function BindASValue(Component) {
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
          <HoverComponent
            actoservice={{
              paths,
              scheme,
              updateConfig,
              isEditing
            }}
          >
            <Component />
          </HoverComponent>
        );
      }}
      </Consumer>
    );
  }
  return BindASValue;
}
