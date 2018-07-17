import React from 'react';
import HoverComponent from '../HoverComponent';
import set from 'lodash/set';

import { Consumer } from '../../context';
import { getValue } from '../../utils/values';

export default function withBind({ paths }) {
  function BindASValue(Component) {
    return (
      <Consumer>
      {({ configMap }) => {
        const asProps = {};

        paths.forEach((path) => {
          const val = getValue(path)({ configMap });
          set(asProps, path, val);
        });

        return (
          <HoverComponent
            actoservice={{
              values: asProps
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
