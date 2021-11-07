import React, { FC, ButtonHTMLAttributes, MouseEvent } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'button' | 'reset',
  name?: string,
  extendClass?: string,
  typeAction?: 'success' | 'error' | undefined,
  disabled?: boolean,
  text: string,
  click: (e: MouseEvent) => void,
}

export const Button: FC<ButtonProps> = ({
                                          type,
                                          name,
                                          extendClass = '',
                                          typeAction,
                                          disabled,
                                          text,
                                          click,
                                        }: ButtonProps) => {
  const defaultClassNames = [
    'ui-button',
    'flex',
    'items-center',
    'justify-center',
    'mx-auto',
    'rounded-xl',
    'border-2',
    'text-base',
    'bg-blue',
    'text-white',
    'h-[34px]',
    'border-blue',
    'duration-300',
    'ease-in-out',
  ];
  return (
    <button
      type={ type }
      name={ name }
      className={
        defaultClassNames.join(' ')
        + `${ typeAction ? ` ui-button--${ typeAction }` : '' }`
        + `${ extendClass ? `${ extendClass }` : '' }`
      }
      disabled={ disabled }
      onClick={ click }
    >
      <span className={ 'container' }>{ text }</span>
    </button>
  );
};
