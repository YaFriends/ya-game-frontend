import React, {FC} from 'react';
import './Title.scss';

interface TitleProps {
  extendClass?: string;
  text: string;
  theme?: 'dark' | 'light';
}

export const Title: FC<TitleProps> = ({
                                        extendClass = '',
                                        text,
                                        theme = 'light',
                                      }: TitleProps) => {
  return (
    <h1
      className={
        'ui-title text-center'
        + ` ui-title--${theme}`
        + `${extendClass ? ` ${extendClass}` : ''}`
      }
    >
      {text}
    </h1>
  );
};
