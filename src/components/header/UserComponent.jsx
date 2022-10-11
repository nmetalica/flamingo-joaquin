import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import eventBus from '../../hooks/Eventbus';
import Button from '../app/Button';
import { AppContext } from '../../contexts/AppProvider';
import ProfileImg from '../app/ProfileImg';

const UserComponent = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const login = () => {
    eventBus.dispatch('initiateLogin');
  };

  const profileClick = () => {
    navigate('/profile');
  };

  return (
    <div>
      {!user && (
        <Button className="w-32 h-10 text-primary hover:bg-primary hover:text-white hover:font-bold border-none" onClick={login}>
          Entrar
        </Button>
      )}
      {user && (
        <span className="cursor-pointer" onClick={profileClick}>
          <ProfileImg size="10" src={user.profilePic} />
        </span>
      )}
    </div>
  );
};

export default UserComponent;
