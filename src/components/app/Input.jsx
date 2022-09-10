import React from 'react';

const Input = ({
  value,
  onChange,
  placeholder,
  disabled,
  label = '',
  type = 'text',
  className,
  borderless,
}) => {
  const bordered = () => {
    if (borderless) {
      return '';
    }

    return 'border border-black-400';
  };

  return (
    <div className={`leading-6 ${className}`}>
      <div className="text-black-400 text-md">
        {label}
      </div>
      <input
        className={`outline-none rounded-lg p-3 w-full ${bordered()}`}
        value={value}
        type={type}
        onInput={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={disabled}
      />
    </div>
  );
};
export default Input;
