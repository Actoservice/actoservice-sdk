import React from 'react';
import types, {
  ASColor,
  ASNumber,
  ASPhone,
  ASString
} from '../../types';

import ASStringComponent from './AS-String';
import ASColorComponent from './AS-Color';

const PropTypes = require('prop-types');

class ASAction extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderActionType = this.renderActionType.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(this.props.path, e.target.value);
  }
  renderActionType(type) {
    const passProps = {
      title: this.props.title,
      value: this.props.value,
      onChange: this.onChange
    };
    switch(type) {
      case ASString:
        return (
          <ASStringComponent {...passProps} />
        );
      case ASColor:
        return (
          <ASColorComponent {...passProps} />
        );
      default:
        break;
    }
  }
  render() {
    const { type } = this.props;
    return this.renderActionType(type);
  }
}

ASAction.propTypes = {
  path: PropTypes.string.isRequired,
  type: PropTypes.oneOf(types),
  value: PropTypes.any,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default ASAction;