import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { SelectProps } from '../../types';

import classes from './Select.module.scss';

const Select = ({ options, value, onChange }:SelectProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => { if (collapsed) setCollapsed(false); });

  return (
    <div className={classes.container}>
      <button type="button" className={classes.placeholder} onClick={() => { setCollapsed(!collapsed); }}>
        <span>{value.label}</span>
        <Icon icon={faCaretDown} />
      </button>
      <div ref={ref} className={`${classes.dropdown} ${collapsed ? classes.collapsed : ''}`}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${classes.item} ${option.value === value.value ? classes.selected : ''}`}
            onClick={() => {
              if (value.value !== option.value) onChange(option);
              setCollapsed(false);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Select;
