import React from 'react';

const Heading = ({ children, className }) => (
  <div className={`text-4xl font-bold ${className}`}>
    {children}
  </div>
);

const Subheading = ({ children, className }) => (
  <div className={`text-xl font-bold ${className}`}>
    {children}
  </div>
);

const LinkText = ({ children, className }) => (
  <span className={`text-primary underline cursor-pointer ${className}`}>
    {children}
  </span>
);

export { Heading, Subheading, LinkText };
