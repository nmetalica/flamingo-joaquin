import React from 'react';
import { Subheading } from '../typography/Index';

const OpportunityDetails = () => {
  console.log('detail');

  return (
    <div className="m-auto sm:w-[90%] sm:h-[75%] overflow-hidden sm:overflow-auto flex-col">
      <div className="w-full xl:flex text-center xl:text-left justify-between py-2 px-2">
        <div className="font-light text-black-400 text-base"> Ronda </div>
        <div className="font-medium text-base xl:text-right">Serie A</div>
      </div>
      <hr className='my-1 mx-8 sm:mx-0'></hr>
      <div className="w-full xl:flex text-center xl:text-left justify-between py-2 px-2">
        <div className="font-light text-black-400 text-base">Tamaño</div>
        <div className="font-medium text-base xl:text-right">€2M</div>
      </div>
      <hr className='my-1 mx-8 sm:mx-0'></hr>
      <div className="w-full xl:flex text-center xl:text-left justify-between py-2 px-2">
        <div className="font-light text-black-400 text-base">Instrumento</div>
        <div className="font-medium text-base xl:text-right">Equity</div>
      </div>
      <hr className='my-1 mx-8 sm:mx-0'></hr>
      <div className="w-full xl:flex text-center xl:text-left justify-between py-2 px-2">
        <div className="font-light text-black-400 text-base">Valoración</div>
        <div className="font-medium text-base xl:text-right">€10M pre-money</div>
      </div>
      <hr className='my-1 mx-8 sm:mx-0'></hr>
      <div className="w-full xl:flex text-center xl:text-left justify-between py-2 px-2">
        <div className="font-light text-black-400 text-base">Cierre</div>
        <div className="font-medium text-base xl:text-right">12/09/2022</div>
      </div>
      <hr className='my-1 mx-8 sm:mx-0'></hr>
      <div className="w-full xl:flex text-center xl:text-left justify-between py-2 px-2">
        <div className="font-light text-black-400 text-base">Co-inversiones</div>
        <div className="font-medium text-base xl:text-right">JME Ventures</div>
      </div>
      <hr className='my-1 mx-8 sm:mx-0'></hr>
      <div className="w-full xl:flex text-center xl:text-left justify-between py-2 px-2">
        <div className="font-light text-black-400 text-base">País</div>
        <div className="font-medium text-base xl:text-right">España</div>
      </div>
    </div>
  );
};

export default OpportunityDetails;
