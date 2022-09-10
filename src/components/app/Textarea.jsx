import React from 'react';

const Textarea = ({
  value,
  onChange,
  placeholder,
  rows = 1,
  disabled,
}) => (
  <textarea
    className="outline-none rounded-lg border border-black-400 px-3 py-1"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    readOnly={disabled}
  />
);

export default Textarea;
