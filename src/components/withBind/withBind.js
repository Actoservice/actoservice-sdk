import React from 'react';
import HoverComponent from '../HoverComponent';

import { Consumer } from '../../context';
import { getValue } from '../../utils/values';

export default function withBind(valuePath) {
  function BindASValue(Component) {
    return (
      <Consumer>
      {({ configMap }) => (
        <HoverComponent
          actoservice={{
            value: getValue(valuePath)({ configMap })
          }}
        >
          <Component />
        </HoverComponent>
      )}
      </Consumer>
    );
  }
  return BindASValue;
}
