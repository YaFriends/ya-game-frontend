import React, { FC } from 'react';
import './Description.scss';

interface DescriptionProps {
  extendClass?: string,
  text: string,
  theme?: 'dark' | 'light',
}

export const Description: FC<DescriptionProps> = ({
                                                    extendClass = '',
                                                    text,
                                                    theme = 'light' }: DescriptionProps) => {
  return (
    <p
      className={
        'text-xs'
        + ` ui-description--${theme}`
        + `${extendClass ? ` ${extendClass}` : ''}`
      }
    >
      { text }
    </p>
  );
};
