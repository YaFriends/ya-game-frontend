import React, { FC } from 'react';

type InputProps = {
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  success?: boolean;
  id?: string;
  label?: string;
  error?: string;
}

export const Input: FC<InputProps> = props => {
  const { name, id, required, label, error, placeholder, disabled, success } = props;
  const defaultClasses = 'block h-[38px] rounded-12px border-2 border-opacity-40 border-white text-white placeholder-white px-3 py-2 focus:outline-none focus:border-blue';
  const labelClasses = 'font-bold text-lg text-black mb-1';
  const disabledClasses = disabled
                          ? 'bg-grey bg-opacity-40 cursor-not-allowed'
                          : 'bg-black placeholder-opacity-40';
  const errorClasses = error ? 'bg-red' : '';
  const successClasses = success ? 'bg-green' : '';
  const classes = [defaultClasses, errorClasses || successClasses || disabledClasses].join(' ');

  return (
    <div className="block relative">
      { label && <label className={ labelClasses } htmlFor={ id || name }>{ label } </label> }
      <input
        className={ classes }
        name={ name }
        id={ id || name }
        required={ required }
        placeholder={ placeholder }
        disabled={ disabled }
      />
      { error && <p className="absolute top-full left-0 text-red text-sm">{ error }</p> }
    </div>
  );
};
