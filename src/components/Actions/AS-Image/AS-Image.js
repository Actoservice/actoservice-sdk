import React from 'react';
import cancelIcon from '../../../assets/cancel.png';
import ActoserviceApi from '../../../api';
const PropTypes = require('prop-types');

class ASImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      error: false
    };
    this._mounted = false;

    this.fileInputRef = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
    this.remove = this.remove.bind(this);
  }
  componentDidMount() {
    this._mounted = true;
  }
  componentWillUnmount() {
    this._mounted = false;
  }

  onChange(e) {
    const { array, apiKey } = this.props;
    const reader = new FileReader();

    const file = e.target.files[0];

    if (this._mounted) {
      this.setState({ uploading: true });
    }

    ActoserviceApi
      .key(apiKey)
      .uploadThemeResource(this.props.path, file)
      .then((res) => {
        if (this._mounted) {
          this.setState({ uploading: false });
        }

        const updates = {
          target: {
            value: array
              ? [...this.props.value, res]
              : res
          }
        };

        this.props.onChange(updates);
      })
      .catch(() => {
        if (this._mounted) {
          this.setState({ error: true, loading: false });
        }
      });
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
    const { uploading } = this.state;
    const iconSize = 20;

    const tiles = value.map((img, i) => (
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
    ));
    if (uploading) {
      tiles.push(
        <div className={'lds-ripple'} key={`uploading-loader-${tiles.length}`}>
          <div></div>
          <div></div>
        </div>
      );
    }
    return (
      <React.Fragment>
        {tiles}
      </React.Fragment>
    );
  }

  onSelect() {
    this.fileInputRef.current.click();
  }
  render() {
    const { title, value, array } = this.props;
    const { uploading } = this.state;

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
        {!array && uploading && (
          <div className={'lds-ripple'} key={`uploading-loader`}>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    );
  }
}

ASImage.propTypes = {
  path: PropTypes.string,
  array: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  onChange: PropTypes.func.isRequired
};

export default ASImage;