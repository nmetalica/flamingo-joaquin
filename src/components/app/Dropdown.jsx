import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react';
import Button from './Button';

const Dropdown = ({
  label,
  trigger,
  children,
  className,
}) => {
  const [opened, updateOpened] = useState(false);
  const listRef = useRef();

  const openStatus = useMemo(
    () => {
      if (opened) {
        return 'block';
      }

      return 'hidden';
    },
    [opened],
  );

  const handleClickOutside = (event) => {
    if (!listRef || !listRef.current) {
      return;
    }

    if (!listRef.current.contains(event.target)) {
      updateOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, [listRef]);

  return (
    <div className={`dropdown cursor-pointer ${className}`} onClick={() => updateOpened(!opened)} ref={listRef}>
      {
        trigger
        || (
          <Button type="primary" className="dropbtn">
            {label}
          </Button>
        )
      }
      <div className={`dropdown-content shadow-xl rounded-b-lg p-2 ${openStatus}`}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
