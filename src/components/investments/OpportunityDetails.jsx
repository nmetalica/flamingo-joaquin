import React from 'react';
import { Subheading } from '../typography/Index';

const OpportunityDetails = () => {
  console.log('detail');

  return (
    <div className="m-auto sm:w-[90%] sm:h-[75%] overflow-hidden sm:overflow-auto flex-col">
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="font-light text-black-400 text-base md:text-lg"> Ronda </div>
        <div className="font-medium text-base md:text-lg xl:text-right">Serie A</div>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="font-light text-black-400 text-base md:text-lg">Tamaño</div>
        <div className="font-medium text-base md:text-lg xl:text-right">€2M</div>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="font-light text-black-400 text-base md:text-lg">Instrumento</div>
        <div className="font-medium text-base md:text-lg xl:text-right">Equity</div>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="font-light text-black-400 text-base md:text-lg">Valoración</div>
        <div className="font-medium text-base md:text-lg xl:text-right">€10M pre-money</div>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="font-light text-black-400 text-base md:text-lg">Cierre</div>
        <div className="font-medium text-base md:text-lg xl:text-right">12/09/2022</div>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="font-light text-black-400 text-base md:text-lg">Co-inversiones</div>
        <div className="font-medium text-base md:text-lg xl:text-right">JME Ventures</div>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="font-light text-black-400 text-base md:text-lg">País</div>
        <div className="font-medium text-base md:text-lg xl:text-right">España</div>
      </div>
    </div>
  );
};

export default OpportunityDetails;
