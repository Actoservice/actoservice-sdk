import React from 'react';

const PropTypes = require('prop-types');

class ASImage extends React.Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }
  onChange(e) {
    const reader = new FileReader();
    reader.onload = (data) => this.props.onChange({
      target: { value: reader.result }
    });

    reader.readAsDataURL(e.target.files[0]);
  };

  onSelect() {
    this.fileInputRef.current.click();
  }
  render() {
    const { title, value } = this.props;
    return (
      <div>
        <span>{title}</span>
        <button onClick={this.onSelect}>
          Select File
        </button>
        <input
          ref={this.fileInputRef}
          style={{ display: 'none' }}
          type={'file'}
          name={''}
          multiple={false}
          accept={'image/x-png,image/gif,image/jpeg'}
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