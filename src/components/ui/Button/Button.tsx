import React, { FC, ButtonHTMLAttributes, MouseEvent} from 'react';
import './index.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'button' | 'reset',
  extendClass?: string,
  typeAction?: 'success' | 'error' | undefined,
  disabled?: boolean,
  text: string,
  click: (e: MouseEvent) => void,
}

export const Button: FC<ButtonProps> = ({
                                          type,
                                          extendClass = '',
                                          typeAction,
                                          disabled,
                                          text,
                                          click }: ButtonProps) => {
  return (
    <button
      type={ type }
      className={
        'ui-button container flex items-center justify-items-center mx-auto rounded-xl border-2'
        + `${typeAction ? ` ui-button--${typeAction}` : ''}`
        + `${extendClass ? `${extendClass}` : ''}`
      }
      disabled={ disabled }
      onClick={ click }
    >
      <span className={ 'container' }>{ text }</span>
    </button>
  );
};
