import React from 'react';

const PropTypes = require('prop-types');

function ASPhone({ title, value, onChange }) {
  return (
    <div>
      <span>{title}</span>
      <input
        type={'phone'}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

ASPhone.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default ASPhone;