import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { faHourglassHalf } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading, Subheading, BigTitle } from '../components/typography/Index';
import InvestmentsFilter from '../components/investments/InvestmentsFilter';
import Card from '../components/app/Card';
import { QueryContext } from '../contexts/QueryProvider';
import noPreview from '../assets/no-preview.png';
import background from '../assets/Flamingo_Background.svg';

const Investments = () => {
  const navigate = useNavigate();

  const { getInvestments } = useContext(QueryContext);

  const [investments, updateInvestments] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);

  const fetchInvestments = async (filters) => {
    setFetchLoading(true);
    const investmentsAPI = await getInvestments(filters);
    updateInvestments(investmentsAPI);
    setFetchLoading(false);
  };

  const handleClick = (id) => navigate(`/show-interest?id=${id}`);

  return (
    <div className="h-full w-full overflow-auto px-4 sm:px-8 sm:pt-8 max-w-screen-xl m-auto">
      <div className="relative flex-column sm:flex z-[1] sm:mb-20 w-[100%] h-[80%] sm:h-[75%]">
        <div className="m-auto ml-0 block pt-[25%] sm:pt-0">
          <Heading className="m-[auto]">
            Invierte ahora
          </Heading>
          <Subheading className="mb-6 text-black-400">
            Descubre las oportunidades de inversión que tenemos abiertas
            <br />
            Todas las oportunidades han sido curadas por nuestro equipo de análisis
          </Subheading>
        </div>
        <div className="sm:absolute flex z-[0] w-[100%] sm:w-[75%] h-[auto] opacity-20 sm:right-[0] inset-y-0 xl:inset-y-auto xl:bottom-[0]">
          <img src={background} alt="" className="sm:margin-auto"/>
        </div>
      </div>
      <hr className='my-10 mx-10'></hr>
      <BigTitle className="mt-20 mb-4">Oportunidades Abiertas</BigTitle>
      <div className="mb-10 text-md md:text-2xl font-normal text-black-400">Estas son las oportunidades más importantes del momento:</div>
      <InvestmentsFilter onChange={(filters) => fetchInvestments(filters)} />
      <div className="w-full mt-3 investments-container">
        {fetchLoading && (
          <>
            <Heading className="mb-4">
              <div className="h-4 bg-slate-700 rounded w-40 animate-pulse" />
            </Heading>
            <Card
              disabled
              preview={<div className="animate-pulse rounded-t-lg bg-slate-700 h-full w-full" />}
              content={(
                <div className="animate-pulse space-y-3">
                  <div className="h-2 bg-slate-700 rounded" />
                  <div className="h-2 bg-slate-700 rounded" />
                  <div className="h-2 bg-slate-700 rounded" />
                  <div className="h-2 bg-slate-700 rounded" />
                </div>
              )}
              title={<div className="animate-pulse h-2 bg-slate-700 rounded w-32" />}
            />
          </>
        )}
        {!fetchLoading && investments.map(({ name, oportunities }) => (
          <div key={name} className="my-4">
            <div className="mb-4 text-xl md:text-3xl text-black-600 font-bold py-3">
              {name}
            </div>
            <div className="flex space-x-6 overflow-x-auto">
              {!oportunities.length && <Subheading className="text-black-400">No hay resultados disponibles</Subheading>}
              {oportunities.map(({
                id,
                image,
                imageType,
                logo,
                logoType,
                title,
                slogan,
                location,
                tags,
                disabled,
              }) => (
                <Card
                  onClick={() => handleClick(id)}
                  key={id}
                  disabled={disabled}
                  logo={(
                    <div className="w-full h-full text-primary rounded-lg">
                      <img alt="" src={logo ? `${logoType},${logo}` : noPreview} className="w-full h-full" />
                    </div>
                  )}
                  preview={(
                    <div className="w-full h-full text-white rounded-t-lg">
                      <img alt="" src={image ? `${imageType},${image}` : noPreview} className="w-full h-full" />
                    </div>
                  )}
                  content={
                    (
                      <span className="multiline-ellipsis text-sm text-justify leading-4 text-black-400">
                        {slogan}
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
            </div>
            <hr className='my-10 mx-10'></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investments;
