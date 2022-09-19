import React, { useState } from 'react';

const Input = ({
  value,
  onChange,
  placeholder,
  disabled,
  label = '',
  type = 'text',
  className,
  borderless,
  rows = 1,
  error = '',
}) => {
  const [inputKey, updateInputKey] = useState(Math.random());

  const bordered = () => {
    if (error) {
      return 'border border-red-600';
    }

    if (borderless) {
      return '';
    }

    return 'border border-black-400';
  };

  const handleInput = (e) => {
    if (rows === 1 && /\n/g.test(e.target.value)) {
      updateInputKey(Math.random());
      return;
    }

    onChange(e.target.value);
  };

  return (
    <div className={`leading-6 ${className}`}>
      <div className="text-black-400 text-md">
        {label}
      </div>
      <textarea
        key={inputKey}
        type={type}
        className={`outline-none rounded-lg p-3 w-full resize-none ${rows === 1 ? 'overflow-hidden' : ''} ${bordered()}`}
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
        rows={rows}
        readOnly={disabled}
      />
      <div className="text-red-600 text-sm">
        {error}
      </div>
    </div>
  );
};
export default Input;
