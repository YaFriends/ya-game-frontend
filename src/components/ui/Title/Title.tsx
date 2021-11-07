import React, { FC,  } from 'react';
import './Title.scss';

interface TitleProps {
  extendClass?: string,
  text: string,
  theme?: 'dark' | 'light',
}

export const Title: FC<TitleProps> = ({
                                        extendClass = '',
                                        text,
                                        theme = 'light' }: TitleProps) => {
  return (
    <h1
      className={
        'ui-title text-center text-2xl font-bold'
        + ` ui-title--${theme}`
        + `${extendClass ? ` ${extendClass}` : ''}`
      }
    >
      { text }
    </h1>
  );
};
