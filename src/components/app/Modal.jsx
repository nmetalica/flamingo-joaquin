import { createPortal } from 'react-dom';
import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Heading } from '../typography/Index';

const ModalMask = styled.div`
  position: absolute;
  background: rgba(0,0,0,0.3);
`;

const Modal = ({
  opened,
  onClose,
  header,
  children,
  className,
}) => {
  if (!opened) {
    return null;
  }

  let closeModal = () => {};

  const handleEscape = (event) => {
    if (event.code === 'Escape' || event.keyCode === 27) {
      closeModal();
    }
  };

  closeModal = () => {
    document.removeEventListener('keydown', handleEscape);
    onClose();
  };

  document.addEventListener('keydown', handleEscape);

  return createPortal(
    (
      <ModalMask className="w-screen h-screen flex items-center justify-center animation-fadeIn z-10">
        <div className={`bg-white rounded-lg border border-1 px-7 py-3 shadow-xl border border-black-600 ${className}`}>
          <div className="w-full relative pr-2">
            <Heading>
              {header}
            </Heading>
            <FontAwesomeIcon
              size="lg"
              icon={faCircleXmark}
              onClick={closeModal}
              className="absolute -top-1 -right-6 cursor-pointer text-primary-400 shadow-xl"
            />
          </div>
          <div className="w-full">
            { children }
          </div>
        </div>
      </ModalMask>
    ),
    document.getElementById('portal'),
  );
};

export default Modal;
