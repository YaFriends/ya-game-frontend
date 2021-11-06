import React, { FC } from 'react';
import { ButtonProps } from './types';
import './index.scss';

export const Button: FC<ButtonProps> = ({ type, extendClass = '', text, action }: ButtonProps) => {
  return (
    <button
      type={ type }
      className={ 'ui-button container flex' + ` ${extendClass}` }
      onClick={ action }
    >
      <span className={ 'ui-button__text container' }>{ text }</span>
    </button>
  );
};
