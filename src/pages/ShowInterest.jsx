import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../components/app/Loader';
import { Heading, BigSubtitle } from '../components/typography/Index';
import OpportunityDetails from '../components/investments/OpportunityDetails';
import SubmitInterest from '../components/investments/SubmitInterest';
import Button from '../components/app/Button';
import InvestmentDetail from '../components/investments/InvestmentDetail';
import noPreview from '../assets/no-preview.png';
import { QueryContext } from '../contexts/QueryProvider';
import styled from 'styled-components';

const ShowInterest = () => {
  const [loading, updateLoading] = useState(true);
  const [interest, updateInterest] = useState(null);
  const [showInterest, updateShowInterest] = useState(false);
  const [investmentId, updateId] = useState(null);
  const [searchParams] = useSearchParams();

  const { getInvestment } = useContext(QueryContext);

  const fetchInvestment = async () => {
    if (!investmentId) {
      return;
    }
    const res = await getInvestment(investmentId);
    updateInterest(res);
    updateLoading(false);
  };

  useEffect(
    () => {
      fetchInvestment();
    },
    [investmentId],
  );

  useEffect(
    () => {
      updateLoading(true);
      updateId(searchParams.get('id'));
    },
    [],
  );

  const StyledContainer = styled.div`
  height: calc(100% - 7rem);
`;

  const pitches = [
    // {
    //   title: 'Resumen de la inversión',
    //   description: '* Weroiwjeoiwejr',
    // },
    {
      title: 'Problema y oportunidad',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Solución y producto',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Proposición de valor',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Modelo de negocio',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Ventaja competitiva',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Factores exponenciales',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ];

  return (
    <div className="flex pt-5 px-5 sm:p-10 h-[99%] justify-center max-w-screen-xl m-auto">
      {loading && <Loader className="stroke-primary" size="14" />}
      {!loading && (
        <div className="flex-column sm:flex sm:flex-wrap">
          <div className="w-[100%] mb-4">
            <div className="flex space-x-2 items-center">
              <div className="flex w-10 h-10 md:w-12 md:h-12 rounded-lg border cursor-pointer border-black-200 bg-white">
                <img src={(interest.logo && `${interest.logoType},${interest.logo}`) || noPreview} alt="" className="w-auto h-auto m-auto" onClick={() => updateShowInterest(false)}/>
              </div>
              <Heading>
                {interest.title}
              </Heading>
            </div>
            <BigSubtitle className="pt-2 sm:pt-4 text-black-400">
              {interest.slogan}
            </BigSubtitle>
          </div>
          <div className="hidden sm:flex h-[100%] w-[70%] pr-8">
            {showInterest && <SubmitInterest oportunity={interest} />}
            {!showInterest && <InvestmentDetail pitches={pitches} oportunity={interest} />}
          </div>
          <div className="hidden sm:block h-[100%] sm:w-[30%]">
            <StyledContainer>
              {/* <StyledContainer className="w-full flex justify-end space-x-5 mb-4">
                <FontAwesomeIcon className="cursor-pointer text-black-400" icon={faStar} size="xl" />
                <FontAwesomeIcon className="cursor-pointer text-black-400" icon={faArrowUpFromBracket} size="xl" />
              </div> */}
              {!showInterest && (
                <Button className="bg-primary hover:bg-primary-200 border text-white border-primary hover:border-primary-200 font-bold w-[75%] mx-auto mt-5 mb-6" onClick={() => updateShowInterest(true)}>Mostrar interés</Button>
              )}
              <OpportunityDetails />
            </StyledContainer>
          </div>
          <StyledContainer className="flex-column sm:hidden h-[100%] overflow-auto">
            {!showInterest && (
              <div>
                <OpportunityDetails />
                <Button className="bg-primary hover:bg-primary-200 border text-white border-primary hover:border-primary-200 font-bold w-[75%] mx-auto mt-5 mb-10" onClick={() => updateShowInterest(true)}>Mostrar interés</Button>
              </div>
            )}
            {showInterest && <SubmitInterest oportunity={interest} />}
            {!showInterest && <InvestmentDetail pitches={pitches} oportunity={interest} />}
          </StyledContainer>
        </div>
      )}
    </div>
  );
};

export default ShowInterest;
