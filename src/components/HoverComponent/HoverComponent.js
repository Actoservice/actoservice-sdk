import React, { cloneElement } from 'react';

import { isInIframe } from '../../utils/iframe';

class AbstractHoverComponent extends React.PureComponent {
  onMouseOver() {
    console.log('Hover');
  }
  render() {
    const actoservice = this.props.actoservice;

    const enhancedElement = cloneElement(this.props.children, {
      actoservice
    });

    if (!isInIframe()) {
      return enhancedElement;
    }
    return (
      <div onMouseOver={this.onMouseOver}>
        {enhancedElement}
      </div>
    );
  }
}
export default AbstractHoverComponent;