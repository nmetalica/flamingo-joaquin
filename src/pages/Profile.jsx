import { faHourglassHalf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/app/Button';
import Card from '../components/app/Card';
import ProfileImg from '../components/app/ProfileImg';
import { Heading, Subheading } from '../components/typography/Index';
import { AppContext } from '../contexts/AppProvider';

const Profile = () => {
  const { user, logout } = useContext(AppContext);
  const {
    name,
    profilePic,
    lastname,
    username,
    email,
    phone,
    interests = [],
  } = user;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="h-full w-full">
      <div className="w-full flex justify-between items-center">
        <div className="flex space-x-6 items-center">
          <ProfileImg src={profilePic} size="32"/>
          <Heading className="space-x-2">
            <span>
              {name}
            </span>
            <span>
              {lastname}
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
          {username}
        </div>
      </div>
      <div className="w-full flex space-x-2 mb-3 items-center">
        <Subheading className="text-black-400">
          Email:
        </Subheading>
        <div className="text-black-400">
          {email}
        </div>
      </div>
      <div className="w-full flex space-x-2 mb-3 items-center">
        <Subheading className="text-black-400">
          Teléfono:
        </Subheading>
        <div className="text-black-400">
          {phone}
        </div>
      </div>
      <Heading className="mb-4">
        Muestras de interés
      </Heading>
      <div className="flex space-x-6">
        { interests.map(({
          title,
          description,
          location,
          tags,
          disabled,
        }) => (
          <Card
            key={title}
            disabled={disabled}
            logo={(
              <div className="w-full h-full text-primary bg-white rounded-lg p-4 border">
                <FontAwesomeIcon icon={faHourglassHalf} className="h-full w-full"/>
              </div>
            )}
            preview={(
              <div className="w-full h-full text-white bg-primary p-4 rounded-t-lg">
                <FontAwesomeIcon icon={faHourglassHalf} className="w-full h-full"/>
              </div>
            )}
            content={
              (
                <span className="multiline-ellipsis text-sm text-justify leading-4 text-black-400">
                  {description}
                </span>
              )
            }
            title={title}
            footer={
              (
                <div className="leading-4">
                  <p className="text-black-400">
                    {location}
                  </p>
                  {tags && tags.map((tag) => (
                    <span key={tag} className="text-white bg-black-400 rounded-sm px-2 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )
            }
          />
        ))}
        { !interests.length && (
          <Subheading className="w-full flex justify-center text-black-400 mt-5">
            Aún no se han registrado muestras de interés.
          </Subheading>
        )}
      </div>
    </div>
  );
};

export default Profile;
