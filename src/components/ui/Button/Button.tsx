import React, { FC, ButtonHTMLAttributes, MouseEvent, useMemo } from 'react';
import './Button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'button' | 'reset';
  name?: string;
  extendClass?: string;
  typeAction?: 'success' | 'error';
  disabled?: boolean;
  text?: string;
  click?: (e: MouseEvent) => void;
  form?: string;
}

const DEFAULT_CLASSES: string[] = [
  'ui-button',
  'flex',
  'items-center',
  'justify-center',
  'mx-auto',
  'rounded-xl',
  'border-2',
  'text-base',
  'duration-300',
  'ease-in-out',
];
const classes = (typeAction?: 'success' | 'error', extendClass?: string): string[] => {
  const result = [...DEFAULT_CLASSES];

  if (typeAction) {
    result.push(`ui-button--${typeAction}`);
  }

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const Button: FC<ButtonProps> = ({
  type,
  name,
  extendClass = '',
  typeAction,
  disabled,
  text,
  click,
  form,
}: ButtonProps) => {
  const classesMemo = useMemo(() => classes(typeAction, extendClass), [typeAction, extendClass]);

  return (
    <button
      type={type}
      name={name}
      className={classesMemo.join(' ')}
      disabled={disabled}
      form={form}
      onClick={click}>
      {text && <span className="w-full">{text}</span>}
    </button>
  );
};
