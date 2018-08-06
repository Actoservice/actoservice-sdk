import React from 'react';

const PropTypes = require('prop-types');

function ASNumber({ title, value, onChange }) {
  return (
    <div>
      <span>{title}</span>
      <input
        type={'number'}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

ASNumber.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default ASNumber;