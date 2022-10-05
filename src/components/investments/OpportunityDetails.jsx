import React from 'react';
import { Subheading } from '../typography/Index';

const OpportunityDetails = () => {
  console.log('detail');

  return (
    <div className="w-[32rem]">
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="text-black-400 text-xl"> Ronda </div>
        <Subheading className="font-bold xl:text-right">Serie A</Subheading>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="text-black-400 text-xl">Tamaño</div>
        <Subheading className="font-bold xl:text-right">€2M</Subheading>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="text-black-400 text-xl">Instrumento</div>
        <Subheading className="font-bold xl:text-right">Equity</Subheading>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="text-black-400 text-xl">Valoración</div>
        <Subheading className="font-bold xl:text-right">€10M pre-money</Subheading>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="text-black-400 text-xl">Cierre</div>
        <Subheading className="font-bold xl:text-right">12/09/2022</Subheading>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="text-black-400 text-xl">Co-inversiones</div>
        <Subheading className="font-bold xl:text-right">JME Ventures, Sabadell Ventures</Subheading>
      </div>
      <div className="w-full xl:flex text-center xl:text-left justify-between mb-6 border-black-200 py-2 px-4 border-b">
        <div className="text-black-400 text-xl">País</div>
        <Subheading className="font-bold xl:text-right">España</Subheading>
      </div>
    </div>
  );
};

export default OpportunityDetails;
