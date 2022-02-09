import React, { FC, FormEventHandler, useMemo } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

import { Label } from '../Label/Label';

import './Textarea.scss';

export interface TextareaProps {
  register: UseFormRegister<Record<string, unknown>>;
  error?: FieldError;
  label?: string;
  id?: string;
  name: string;
  extendClass?: string;
  placeholder?: string;
  disabled?: boolean;
  onInput?: FormEventHandler<HTMLTextAreaElement>;
}

const DEFAULT_CLASSES: string[] = [
  'ui-textarea',
  'block',
  'w-full',
  'rounded-12px',
  'border-2',
  'border-opacity-40',
  'placeholder-white',
  'px-3',
  'py-2',
  'focus:outline-none',
  'w-full',
];

const classes = (error?: string, disabled?: boolean): string[] => {
  const result = [...DEFAULT_CLASSES];

  if (error) {
    result.push('ui-textarea--error');
  }

  if (disabled) {
    result.push('bg-grey bg-opacity-40 cursor-not-allowed');
  }
  return result;
};

const Error: FC<{ text: string | undefined }> = ({ text }) => {
  return <p className="text-red text-sm">{text}</p>;
};

export const Textarea: FC<TextareaProps> = ({
  register,
  error,
  label,
  id,
  name,
  placeholder,
  extendClass,
  disabled = false,
  onInput = () => {},
}) => {
  const classesMemo = useMemo(() => classes(error?.message, disabled), [error?.message]);
  return (
    <div className={`block relative mb-6 last:mb-0 ${extendClass}`}>
      {label && <Label name={name} id={id || name} label={label} />}
      <textarea
        {...register(name)}
        className={classesMemo.join(' ')}
        name={name}
        id={id || name}
        placeholder={placeholder}
        disabled={disabled}
        onInput={onInput}
      />
      {error && <Error text={error?.message} />}
    </div>
  );
};
