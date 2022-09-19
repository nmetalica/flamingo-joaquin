import React from 'react';

const TabItem = ({
  label,
  active,
  disabled,
  className,
  onClick,
}) => {
  const dynamicClasses = () => {
    if (disabled) {
      return 'cursor-default text-black opacity-50 border-transparent';
    }
    if (active) {
      return 'text-primary border-b-4 border-primary cursor-pointer';
    }
    return 'cursor-pointer border-transparent hover:border-black hover:text-black';
  };

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div
      className={`font-bold text-lg px-4 py-1 border-b-4 hover:opacity-50 transition-all ${dynamicClasses()} ${className}`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default TabItem;
