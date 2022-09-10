import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../app/Dropdown';

const DropdownFilter = ({
  label,
  children,
  value,
  className,
}) => (
  <Dropdown
    className={className}
    trigger={(
      <div className="text-black-400 space-x-2 flex items-center w-full">
        <div>{value || label}</div>
        <div className="flex justify-end w-full">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    )}
  >
    {children}
  </Dropdown>
);

export default DropdownFilter;
