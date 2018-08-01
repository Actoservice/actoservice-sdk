import React from 'react';
import cancelIcon from '../../../assets/cancel.png';

const PropTypes = require('prop-types');

class ASImage extends React.Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
    this.remove = this.remove.bind(this);
  }
  onChange(e) {
    const { array } = this.props;
    const reader = new FileReader();

    reader.onload = (data) => this.props.onChange({
      target: {
        value: array
          ? [...this.props.value, reader.result]
          : reader.result
      }
    });

    reader.readAsDataURL(e.target.files[0]);
  };

  remove(index) {
    const newArray = [...this.props.value];

    newArray.splice(index, 1);

    this.props.onChange({
      target: {
        value: newArray
      }
    });
  }

  renderTiles() {
    const { value } = this.props;
    const iconSize = 20;

    return (
      <React.Fragment>
        {value.map((img, i) => (
          <div
            key={i}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundImage: `url(${img})`,
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',
              width: '100px',
              height: '100px',
              position: 'relative',
              marginRight: '10px'
            }}
          >
            <img
              src={cancelIcon.src}
              onClick={() => this.remove(i)}
              style={{
                cursor: 'pointer',
                position: 'absolute',
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                padding: '5px',
                backgroundColor: 'white',
                borderRadius: iconSize,
                top: -(iconSize / 2),
                right: -(iconSize / 2)
              }}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }

  onSelect() {
    this.fileInputRef.current.click();
  }
  render() {
    const { title, value, array } = this.props;

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
        {array && this.renderTiles()}
      </div>
    );
  }
}

ASImage.propTypes = {
  array: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  onChange: PropTypes.func.isRequired
};

export default ASImage;