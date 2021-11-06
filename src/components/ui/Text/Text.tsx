import React, { FC,  } from 'react';
import './Text.scss';

interface TextProps {
  extendClass?: string,
  text: string,
  theme?: 'dark' | 'light',
}

export const Text: FC<TextProps> = ({
                                      extendClass = '',
                                      text,
                                      theme = 'light' }: TextProps) => {
  return (
    <p
      className={
        'ui-text'
        + ` ui-text--${theme}`
        + `${extendClass ? ` ${extendClass}` : ''}`
      }
    >
      { text }
    </p>
  );
};
