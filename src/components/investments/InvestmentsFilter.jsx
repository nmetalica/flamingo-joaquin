import React, { useEffect, useState } from 'react';
import DropdownFilter from '../filters/DropdownFilter';
import Searchbar from '../filters/Searchbar';

const InvestmentsFilter = ({
  onChange,
}) => {
  const [filters, updateFilters] = useState({});

  const onFiltersChange = ({ type, value }) => {
    updateFilters({ ...filters, [type]: value });
  };

  useEffect(
    () => {
      onChange(filters);
    },
    [filters],
  );

  const filtersOptions = [
    {
      label: 'Tipo',
      value: 'type',
      options: [
        {
          key: 'A',
          optionLabel: 'A',
        },
        {
          key: 'B',
          optionLabel: 'B',
        },
      ],
    },
    {
      label: 'Sector',
      value: 'sector',
      options: [
        {
          key: 'C',
          optionLabel: 'C',
        },
        {
          key: 'D',
          optionLabel: 'D',
        },
      ],
    },
    {
      label: 'Tecnología',
      value: 'tech',
      options: [
        {
          key: 'E',
          optionLabel: 'E',
        },
        {
          key: 'F',
          optionLabel: 'F',
        },
      ],
    },
    {
      label: 'Facturación',
      value: 'invoice',
      options: [
        {
          key: 'G',
          optionLabel: 'G',
        },
        {
          key: 'H',
          optionLabel: 'H',
        },
      ],
    },
  ];

  return (
    <div className="flex items-center ml-3 h-8">
      <Searchbar value={filters.search} onSearch={(value) => onFiltersChange({ type: 'search', value })}/>
      {filtersOptions.map(({ label, value, options }) => (
        <DropdownFilter key={label} label={label} value={filters[value]} className="w-32 mx-4">
          {options.map(({ key, optionLabel }) => (
            <div className="cursor-pointer px-4 py-2 hover:bg-black-200 text-black-400" key={key} onClick={() => onFiltersChange({ type: value, value: key })}>
              {optionLabel}
            </div>
          ))}
        </DropdownFilter>
      ))}
      <div className="border-r-2 border-gray-400 w-1 h-full ml-0" />
      <div className="flex space-x-2 mx-4">
        <span className="text-gray-400">
          Ordenar por:
        </span>
        <DropdownFilter label="fecha" />
      </div>
    </div>
  );
};

export default InvestmentsFilter;
