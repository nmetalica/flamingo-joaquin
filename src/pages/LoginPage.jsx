import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/login/Login';
import { Heading, Subheading } from '../components/typography/Index';
import Modal from '../components/app/Modal';
import eventBus from '../hooks/Eventbus';
import { AppContext } from '../contexts/AppProvider';

const LoginPage = () => {
  const [showLogin, updateLogin] = useState(false);
  const [showModal, updateModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useContext(AppContext);

  const handleLogin = async (form) => {
    setLoading(true);
    await login(form);
    navigate('/');
  };

  useEffect(() => {
    eventBus.on('initiateLogin', () => updateLogin(true));
    return () => {
      eventBus.remove('initiateLogin', () => updateLogin(false));
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col mt-10 ml-20 relative">
      <Heading className="text-left">
        Conectando smart money
      </Heading>
      <Heading className="text-left">
        con oportunidades únicas
      </Heading>
      {!showLogin && (
        <>
          <div className="text-black-400 mt-10">
            <Subheading>Descubre y co-invierte en oportunidades</Subheading>
            <Subheading>basadas en la actividad de tus socios</Subheading>
          </div>
          <div className="mt-10">
            <div className="cursor-pointer font-bold flex items-center" onClick={() => !showModal && updateModal(true)}>
              <span className="mr-1">
                ¿Cómo funciona?
              </span>
              <FontAwesomeIcon icon={faCaretRight} className="text-primary" size="xl" />
              <Modal
                opened={showModal}
                onClose={() => updateModal(false)}
                header={(
                  <Heading className="mb-10">
                    ¿Qué es Flamingo?
                  </Heading>
                )}
                className="w-[55rem] px-16 pb-20 pt-5"
              >
                <Subheading className="text-black-600 text-2xl">
                  Flamingo es un club de inversión privado que te permite descubrir y
                  co-invertir en oportunidades basadas en la actividad de tus socios.
                </Subheading>
                <div className="text-xl mt-8">
                  Somos un club privado exclusivo al que sólo se puede acceder por invitación.
                  En él encontrarás oportunidades de inversión únicas y ya aprobadas por nuestro
                  equipo de análisis.
                </div>
                <div className="text-xl mt-3">
                  Las oportunidades van desde real estate, startups, pre-IPOs,
                  finaciación de proyectos (renovables, tecnológicos, etc...),
                  y también proyectos filantrópicos.
                </div>
              </Modal>
            </div>
          </div>
        </>
      )}
      {showLogin && <Login onLogin={handleLogin} className="absolute top-[25%] left-[30%]" loading={loading} />}
    </div>
  );
};

export default LoginPage;
