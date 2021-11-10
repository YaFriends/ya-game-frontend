import React, { useState, useEffect, useRef, FC } from 'react';

import { Arrow } from '../../../images/icons/Arrow';
import { Label } from '../Input/ElementLabel';

import { Option } from './Option';
import { SelectProps } from './SelectTypes';

const Select: FC<SelectProps> = ({ label, options, selected, onSelectedChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [localHolder, setLocalHolder] = useState<string | null | undefined>(placeholder);

  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const holderIsActive = typeof localHolder === 'string';

  useEffect(() => {
    window.addEventListener('click', onBodyClick);
    return () => {
      window.removeEventListener('click', onBodyClick);
    };
  }, []);

  const onBodyClick = (event: Event): void => {
    if (dropDownRef.current === null) {
      return;
    }
    const target = event.target as HTMLElement;
    if (dropDownRef.current && dropDownRef.current.contains(target)) {
      return;
    }
    setOpen(false);
  };

  const toggleOpen = () => {
    if (holderIsActive) {
      setLocalHolder(null);
    }
    setOpen(prevState => !prevState);
  };

  const renderedOptions = options.map(option => {
    if (option.value === selected.value) {
      return null;
    }
    const { value, label } = option;
    return (
      <Option key={value} option={option} onSelectedChange={onSelectedChange}>
        {label}
      </Option>
    );
  });

  const SELECT_CLASSES: string[] = [
    'bg-black',
    'h-[38px]',
    'flex',
    'items-center',
    'justify-between',
    'w-full',
    'rounded-12px',
    'border-2',
    'text-white',
    'placeholder-white',
    'px-3',
    'py-2',
    'hover:cursor-pointer',
  ];
  const SELECT_CLASSES_OPEN = [
    ...SELECT_CLASSES,
    'outline-none',
    'border-blue',
    'rounded-b-none',
  ].join(' ');
  const SELECT_CLASSES_CLOSE = [...SELECT_CLASSES, 'border-white', 'border-opacity-40'].join(' ');
  const SELECTED_LABEL = ['font-normal', 'text-white mb-1', 'leading-none'];
  if (holderIsActive) {
    SELECTED_LABEL.push('opacity-40');
  }

  return (
    <div ref={dropDownRef}>
      <Label name={label} label={label} />
      <div onClick={toggleOpen}>
        <div className={open ? SELECT_CLASSES_OPEN : SELECT_CLASSES_CLOSE}>
          <div className={SELECTED_LABEL.join(' ')}>{localHolder || selected.label}</div>
          <Arrow degree={open ? '180' : '0'} />
        </div>
        <div onClick={toggleOpen} className={open ? 'block' : 'hidden'}>
          {renderedOptions}
        </div>
      </div>
    </div>
  );
};

export { Select };
