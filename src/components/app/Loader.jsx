import React from 'react';

const Loader = ({
  size = '5',
  color = 'primary',
  className = '',
}) => (
  <svg viewBox="0 0 50 50" className={`spinner h-${size} ${className}`}>
    <circle className={`path stroke-${color}`} cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
  </svg>
);

export default Loader;
