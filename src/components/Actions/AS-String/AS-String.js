import React from 'react';

const PropTypes = require('prop-types');

function ASString({ title, value, onChange }) {
  return (
    <div>
      <span>{title}</span>
      <input
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

ASString.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default ASString;