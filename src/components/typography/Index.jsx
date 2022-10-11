import React from 'react';

const Heading = ({ children, className }) => (
  <div className={`text-3xl md:text-5xl font-extrabold ${className}`}>
    {children}
  </div>
);

const Subheading = ({ children, className }) => (
  <div className={`text-md md:text-xl font-base ${className}`}>
    {children}
  </div>
);

const BigTitle = ({ children, className }) => (
  <div className={`text-2xl md:text-4xl font-extrabold ${className}`}>
    {children}
  </div>
);

const BigSubtitle = ({ children, className }) => (
  <div className={`text-base md:text-xl font-base ${className}`}>
    {children}
  </div>
);


const MediumTitle = ({ children, className }) => (
  <div className={`text-xl md:text-3xl font-base ${className}`}>
    {children}
  </div>
);

const LinkText = ({ children, className }) => (
  <span className={`text-primary underline cursor-pointer ${className}`}>
    {children}
  </span>
);

export { Heading, Subheading, BigTitle, BigSubtitle, MediumTitle, LinkText };
