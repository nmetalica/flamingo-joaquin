import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { faHourglassHalf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading, Subheading } from '../components/typography/Index';
import InvestmentsFilter from '../components/investments/InvestmentsFilter';
import Card from '../components/app/Card';
import { QueryContext } from '../contexts/QueryProvider';

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
    <div className="h-full w-full overflow-hidden px-8 pt-8">
      <Heading className="mb-2">
        Invierte ahora
      </Heading>
      <Subheading className="mb-4 text-black-400">
        Descubre las oportunidades de inversión que tenemos abiertas.
        <br />
        Todas las oportunidades han sido curadas por nuestro equipo de análisis.
      </Subheading>
      <InvestmentsFilter onChange={(filters) => fetchInvestments(filters)} />
      <div className="w-full overflow-auto mt-3 investments-container">
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
            <Heading className="mb-4">
              {name}
            </Heading>
            <div className="flex space-x-6">
              {!oportunities.length && <Subheading className="text-black-400">No hay resultados disponibles</Subheading>}
              {oportunities.map(({
                id,
                title,
                description,
                location,
                tags,
                disabled,
              }) => (
                <Card
                  onClick={() => handleClick(id)}
                  key={id}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investments;
