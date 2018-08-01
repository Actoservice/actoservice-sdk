import React from 'react';
import types, {
  ASColor,
  ASNumber,
  ASPhone,
  ASString,
  ASImage
} from '../../types';

import ASStringComponent from './AS-String';
import ASColorComponent from './AS-Color';
import ASImageComponent from './AS-Image';
import ASNumberComponent from './AS-Number';
import ASPhoneComponent from './AS-Phone';

const PropTypes = require('prop-types');

const actionTypeComponent = {
  [ASColor]: ASColorComponent,
  [ASString]: ASStringComponent,
  [ASImage]: ASImageComponent,
  [ASNumber]: ASNumberComponent,
  [ASPhone]: ASPhoneComponent
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
      throw new Error(`Wrong action type: ${type}`);
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