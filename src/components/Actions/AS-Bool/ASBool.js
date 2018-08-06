import React from 'react';

const PropTypes = require('prop-types');

class ASBool extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange({
      target: {
        value: !Boolean(this.props.value)
      }
    });
  }
  render() {
    const { title, value } = this.props;

    return (
      <div>
        <span>{title}</span>
        <input
          type={'checkbox'}
          onChange={this.onChange}
          checked={value}
        />
      </div>
    );
  }
}

ASBool.propTypes = {
  title: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default ASBool;