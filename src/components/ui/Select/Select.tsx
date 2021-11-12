import React, {
  useState,
  useEffect,
  useRef,
  FC,
  SetStateAction,
  SelectHTMLAttributes,
} from 'react';

import './Select.scss';

import { Arrow } from '../../../images/icons/Arrow';
import { Label } from '../Label/Label';

import { Option } from './Option';

export type SelectedChangeType = (option: SetStateAction<OptionProps>) => void;

export interface OptionProps {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: OptionProps[];
  selected: OptionProps;
  onSelectedChange: SelectedChangeType;
  placeholder?: string;
}

export const Select: FC<SelectProps> = ({
  label,
  options,
  selected,
  onSelectedChange,
  placeholder,
}) => {
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
    if (dropDownRef.current?.contains(target)) {
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

  const renderedOptions = options?.map(({ value, label, disabled }) => {
    if (value === selected.value) {
      return null;
    }
    return (
      <Option
        key={value}
        option={{ value, label }}
        disabled={disabled}
        onSelectedChange={onSelectedChange}>
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

  return (
    <div ref={dropDownRef} className="select">
      <Label name={label} label={label} />
      <div onClick={toggleOpen}>
        <div className={open ? SELECT_CLASSES_OPEN : SELECT_CLASSES_CLOSE}>
          <div className={holderIsActive ? 'select__label_active' : 'select__label'}>
            {localHolder || selected.label}
          </div>
          <Arrow degree={open ? '180' : '0'} />
        </div>
        <div onClick={toggleOpen} className={open ? 'select__options' : 'hidden'}>
          {renderedOptions}
        </div>
      </div>
    </div>
  );
};
