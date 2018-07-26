import React from 'react';

const PropTypes = require('prop-types');

function ASColor({ title, value, onChange }) {
  return (
    <div>
      <span>{title}</span>
      <input
        type={'color'}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

ASColor.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default ASColor;