import React, { useState } from 'react';
import styled from 'styled-components';
import TabItem from '../app/TabItem';
import noPreview from '../../assets/no-preview.png';

const InvestmentDetail = ({ oportunity, pitches = [] }) => {
  const [activeTab, updateActiveTab] = useState('pitch');

  const tabs = [
    {
      key: 'pitch',
      label: 'Pitch',
    },
    // {
    //   key: 'updates',
    //   label: 'Actualizaciones',
    //   disabled: true,
    // },
  ];

  const StyledContainer = styled.div`
    height: calc(100% - 7rem);
  `;

  return (
    <StyledContainer className="w-full mt-4 overflow-auto">
      <div className="h-[70%] overflow-hidden">
        <img
          className="w-full max-h-[100%] bg-cover h-auto object-center object-cover"
          src={(oportunity && oportunity.image && `${oportunity.imageType},${oportunity.image}`) || noPreview}
          alt=""
        />
      </div>
      <div className="w-full flex border-b border-black-200 mt-5 mb-5">
        {tabs.map(({ label, disabled, key }) => (
          <TabItem
            key={key}
            label={label}
            active={key === activeTab}
            onClick={() => updateActiveTab(key)}
            disabled={disabled}
          />
        ))}
      </div>
      <div className="h-auto px-3">
        <div className="flex-1 h-full">
          {/* ///////////////////////// */}
          <div className="mb-5" key="Resumen de la inversion">
            <div className="text-xl lg:text-2xl text-black-600 font-extrabold py-3">
              Resúmen de la inversión
            </div>
            <hr className='mt-2 mb-8 mr-[90%]'></hr>
            <div className="mb-10 text-base lg:text-lg text-black text-left">
              <div className='list-disc'>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              </div>
            </div>
          </div>
          {/* ///////////////////////// */}
          {pitches.map(({ title, description }) => (
            <div className="mb-5" key={title}>
              <div className="text-xl lg:text-2xl text-black-600 font-extrabold py-3">
                {title}
              </div>
              <hr className='mt-2 mb-8 mr-[90%]'></hr>
              <div className="mb-10 text-base lg:text-lg text-black text-left">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};

export default InvestmentDetail;
