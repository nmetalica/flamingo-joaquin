import React from 'react';

const ProfileImg = ({
  size = 'md',
  src,
}) => {
  const defaultProfilePic = require('../../assets/default-user-img.jpeg');

  return (
    <img src={src || defaultProfilePic} className={`rounded-full h-${size} w-${size}`} alt="" />
  );
};

export default ProfileImg;
