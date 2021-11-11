import React, { FC, useMemo } from 'react';

import { Error } from './ElementError';
import { Label } from './ElementLabel';
// TODO: Добавить hint к input
export interface InputProps {
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  success?: boolean;
  id?: string;
  label?: string;
  error?: string;
}

const DEFAULT_CLASSES: string[] = [
  'ui-input',
  'block',
  'h-[38px]',
  'w-full',
  'rounded-12px',
  'border-2',
  'border-opacity-40',
  'border-white',
  'text-white',
  'placeholder-white',
  'px-3',
  'py-2',
  'focus:outline-none',
  'focus:border-blue',
];
const classes = (error?: string, success?: boolean, disabled?: boolean): string[] => {
  const result = [...DEFAULT_CLASSES];

  if (error) {
    result.push('bg-red');
  } else if (success) {
    result.push('bg-green');
  } else if (disabled) {
    result.push('bg-grey bg-opacity-40 cursor-not-allowed');
  } else {
    result.push('bg-black placeholder-opacity-40');
  }

  return result;
};

export const Input: FC<InputProps> = ({
      name,
      id,
      required,
      label,
      error,
      placeholder,
      disabled,
      success,
    }: InputProps) => {
  const classesMemo = useMemo(() => classes(error, success, disabled), [error, success, disabled]);

  return (
      <div className="block relative mb-6 last:mb-0">
        {label && <Label name={name} id={id} label={label} />}
        <input
            className={classesMemo.join(' ')}
            name={name}
            id={id || name}
            required={required}
            placeholder={placeholder}
            disabled={disabled}
        />
        {error && <Error error={error} />}
      </div>
  );
};