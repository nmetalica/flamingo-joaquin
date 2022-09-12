import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/app/Button';
import ProfileImg from '../components/app/ProfileImg';
import { Heading, Subheading } from '../components/typography/Index';
import { AppContext } from '../contexts/AppProvider';

const Profile = () => {
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="h-full w-full">
      <div className="w-full flex justify-between items-center">
        <div className="flex space-x-6 items-center">
          <ProfileImg src={user.profilePic} size="32"/>
          <Heading className="space-x-2">
            <span>
              {user.name}
            </span>
            <span>
              {user.lastname}
            </span>
          </Heading>
        </div>
        <Button type="primary" onClick={handleLogout} className="h-10 w-32">Cerrar Sesión</Button>
      </div>
      <div className="w-full flex space-x-2 mb-3 items-center">
        <Subheading className="text-black-400">
          Usuario:
        </Subheading>
        <div className="text-black-400">
          {/* {user.username} */}
          Test
        </div>
      </div>
      <div className="w-full flex space-x-2 mb-3 items-center">
        <Subheading className="text-black-400">
          Email:
        </Subheading>
        <div className="text-black-400">
          {/* {user.email} */}
          test@test.com
        </div>
      </div>
      <div className="w-full flex space-x-2 mb-3 items-center">
        <Subheading className="text-black-400">
          Teléfono:
        </Subheading>
        <div className="text-black-400">
          {/* {user.phone} */}
          111 111 111
        </div>
      </div>
    </div>
  );
};

export default Profile;
