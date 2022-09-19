import React from 'react';

const Button = ({
  children,
  disabled,
  type,
  size = 'base',
  className,
  onClick,
}) => {
  const buttonStyle = () => {
    if (disabled) {
      return 'bg-black-200 text-black border border-black-200 text-black';
    }
    switch (type) {
      case 'primary':
        return 'bg-primary hover:bg-primary-200 border border-primary hover:border-primary-200';
      case 'green':
        return 'bg-green hover:bg-green-200 border border-green hover:border-green-200';
      case 'purple':
        return 'bg-purple hover:bg-purple-200 text-white hover:text-black border border-purple hover:border-purple-200';
      case 'yellow':
        return 'bg-yellow hover:bg-yellow-200 border border-yellow hover:border-yellow-200';
      case 'blue':
        return 'bg-blue hover:bg-blue-200 text-white hover:text-black border border-blue hover:border-blue-200';
      default:
        return 'bg-white hover:bg-gray-300 border border-gray hover:border-gray-300';
    }
  };

  const SizeStyle = () => `text-${size}`;

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div
      className={`
        ${className}
        ${disabled ? 'cursor-default' : 'cursor-pointer'}
        ${buttonStyle()}
        ${SizeStyle()}
        rounded-lg
        flex
        items-center
        justify-center
        select-none
        py-4
        px-2
        transition-all
    `}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Button;
