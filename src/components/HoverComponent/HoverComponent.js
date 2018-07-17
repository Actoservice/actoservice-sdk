import React from 'react';

import { isInIframe } from '../../utils/iframe';

class AbstractHoverComponent extends React.PureComponent {
  onMouseOver() {
    console.log('Hover');
  }
  render() {
    if (isInIframe()) {
      return React.Children.only(this.props.children);
    }
    return (
      <div onMouseOver={this.onMouseOver}>
        {React.Children.only(this.props.children)}
      </div>
    );
  }
}
export default AbstractHoverComponent;