import React from 'react';

const PropTypes = require('prop-types');

class ASImage extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const reader = new FileReader();
    reader.onload = (data) => this.props.onChange({
      target: { value: reader.result }
    });

    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { title, value } = this.props;
    return (
      <div>
        <span>{title}</span>
        <input
          type={'file'}
          name={''}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ASImage.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default ASImage;