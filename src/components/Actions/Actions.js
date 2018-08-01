import React from 'react';
import types, {
  ASColor,
  ASNumber,
  ASPhone,
  ASString,
  ASImage,

  ASArrayImage,
  ASArrayNumber,
  ASArrayString
} from '../../types';

import ASStringComponent from './AS-String';
import ASColorComponent from './AS-Color';
import ASImageComponent from './AS-Image';
import ASNumberComponent from './AS-Number';
import ASPhoneComponent from './AS-Phone';

const PropTypes = require('prop-types');

const actionTypeComponent = {
  [ASColor]: { component: ASColorComponent },
  [ASString]: { component: ASStringComponent },
  [ASImage]: { component: ASImageComponent },
  [ASNumber]: { component: ASNumberComponent },
  [ASPhone]: { component: ASPhoneComponent },

  [ASArrayImage]: {
    component: ASImageComponent,
    props: { array: true }
  },
  [ASArrayNumber]: {
    component: ASNumberComponent,
    props: { array: true }
  },
  [ASArrayString]: {
    component: ASStringComponent,
    props: { array: true }
  }
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
    const renderObject = actionTypeComponent[type];
    if (!renderObject) {
      throw new Error(`Wrong action type: ${type}`);
    }

    const { props, component: Component } = renderObject;

    Object.assign(passProps, props);

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