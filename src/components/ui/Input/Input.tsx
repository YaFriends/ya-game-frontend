import React, { FC, useMemo } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

import { Label } from '../Label/Label';

import './Input.scss';

export interface InputProps {
  register: UseFormRegister<Record<string, unknown>>;
  error?: FieldError;
  label?: string;
  type?: string;
  id?: string;
  name: string;
  placeholder?: string;
}

const DEFAULT_CLASSES: string[] = [
  'ui-input',
  'block',
  'h-[38px]',
  'w-full',
  'rounded-12px',
  'border-2',
  'border-opacity-40',
  'placeholder-white',
  'px-3',
  'py-2',
  'focus:outline-none',
];

const classes = (error?: string): string[] => {
  const result = [...DEFAULT_CLASSES];

  if (error) {
    result.push('ui-input--error');
  }

  return result;
};

const Error: FC<{ text: string | undefined }> = ({ text }) => {
  return <p className="text-red text-sm">{text}</p>;
};

export const Input: FC<InputProps> = ({
  register,
  error,
  label,
  type = 'text',
  id,
  name,
  placeholder,
}) => {
  const classesMemo = useMemo(() => classes(error?.message), [error?.message]);
  return (
    <div className="block relative mb-6 last:mb-0">
      {label && <Label name={name} id={id || name} label={label} />}
      <input
        {...register(name)}
        className={classesMemo.join(' ')}
        name={name}
        type={type}
        id={id || name}
        placeholder={placeholder}
      />
      {error && <Error text={error?.message} />}
    </div>
  );
};
