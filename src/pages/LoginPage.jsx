import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Heading, Subheading } from '../components/typography/Index';
import Modal from '../components/app/Modal';
import eventBus from '../hooks/Eventbus';
import background from '../assets/Flamingo_Background.svg';
import Login from '../components/login/Login';

const LoginPage = () => {
  const [showLogin, updateLogin] = useState(false);
  const [showModal, updateModal] = useState(false);

  useEffect(() => {
    eventBus.on('initiateLogin', () => updateLogin(true));
    return () => {
      eventBus.remove('initiateLogin', () => updateLogin(false));
    };
  }, []);

  return (
    <div className="relative">
      <div className="w-full h-full flex flex-col pt-10 ml-20 relative z-[1]">
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
        {showLogin && (
          <div className="mt-[6rem] flex justify-center -ml-28">
            <Login />
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 z-[0] w-screen h-screen opacity-25">
        <img src={background} alt="" className="w-full h-full"/>
      </div>
    </div>
  );
};

export default LoginPage;
