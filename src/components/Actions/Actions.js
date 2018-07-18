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

const actionTypeComponent = {
  [ASColor]: ASColorComponent,
  [ASString]: ASStringComponent
};

class ASAction extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(this.props.path, e.target.value);
  }
  render() {
    const { type } = this.props;
    const passProps = {
      title: this.props.title,
      value: this.props.value,
      onChange: this.onChange
    };
    const Component = actionTypeComponent[type];
    if (!Component) {
      throw new Error('Wrong action type');
    }

    return <Component {...passProps} />
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