import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserComponent from '../header/UserComponent';

const logoIcon = require('../../assets/Flamingo_LogoIcon.png');
const logoText = require('../../assets/Flamingo_LogoText.png');

const Header = () => {
  const navigate = useNavigate();

  const HeaderDiv = styled.div`
    height: 4rem;
  `;

  const goHome = () => {
    navigate('/investments');
  };

  return (
    <HeaderDiv className="w-full flex justify-between items-center">
      <div onClick={goHome} className="flex cursor-pointer">
        <img width={156} src={logoIcon} alt="Flamenco" className="h-8 sm:h-10 w-auto"/>
        <img width={156} src={logoText} alt="Flamingo" className="h-8 sm:h-10 w-auto"/>
      </div>
      <UserComponent />
    </HeaderDiv>
  );
};

export default Header;
