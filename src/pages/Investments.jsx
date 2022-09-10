import React, { useState } from 'react';

import { faHourglassHalf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading, Subheading } from '../components/typography/Index';
import InvestmentsFilter from '../components/investments/InvestmentsFilter';
import Card from '../components/app/Card';

const Investments = () => {
  const defaultInvestments = [
    {
      investmentsType: 'Startups',
      cards: [
        {
          title: 'Chekin',
          description: 'Chekin automatiza el proceso "Check-in" a cualquier tipo de estancia vacacional incluyendo el pago de tasas turísticas y reporte a las autoridades locales.',
          location: 'Sevilla, España',
          tags: ['Onboarding'],
        },
        {
          title: 'ONiAd',
          description: 'ONiAd permite crear campañas de marketing automáticas a través de una plataforma en más de 6 mil medios verificados (publicidad programática).',
          location: 'Zaragoza, España',
          tags: ['Publicidad'],
        },
        {
          title: 'Coming soon...',
          description: 'Estamos buscando y analizando nuevas oportunidades para ofrecer a los miembros de Flamingo.',
          disabled: true,
        },
      ],
    },
    {
      investmentsType: 'Real Estate',
      cards: [
        {
          title: 'Propiedades Civitas',
          description: 'Prim 34 se encuentra en el centro de Badajoz, calle Prim, que conecta Puerta Palma con la calle Mayor, y la calle Gabriel. Cuenta con todos los equipamientos necesarios para hacerte la vida más fácil.',
          location: 'Badajoz, España',
          tags: ['New Development'],
        },
        {
          title: 'Coming soon...',
          description: 'Estamos buscando y analizando nuevas oportunidades para ofrecer a los miembros de Flamingo.',
        },
      ],
    },
  ];

  const [investments, updateInvestments] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);

  const fetchInvestments = (filters) => {
    console.log(filters);
    setFetchLoading(true);
    updateInvestments(defaultInvestments);
    setFetchLoading(false);
  };

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
        {!fetchLoading && investments.map(({ investmentsType, cards }) => (
          <div key={investmentsType} className="my-4">
            <Heading className="mb-4">
              {investmentsType}
            </Heading>
            <div className="flex space-x-6">
              {cards.map(({
                title,
                description,
                location,
                tags,
                disabled,
              }) => (
                <Card
                  key={title}
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
