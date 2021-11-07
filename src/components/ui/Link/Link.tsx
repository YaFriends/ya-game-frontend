import React, { FC,  } from 'react';
import './Link.scss';

interface LinkProps {
  extendClass?: string,
  text: string,
  href?: string,
  theme?: 'dark' | 'light',
}

export const MainLink: FC<LinkProps> = ({
                                          extendClass = '',
                                          text,
                                          href = '#',
                                          theme = 'light' }: LinkProps) => {
  return (
    <a
      className={
        'ui-link underline text-base duration-300 ease-in-out'
        + ` ui-link--${theme}`
        + `${extendClass ? ` ${extendClass}` : ''}`
      }
      href={ href }
    >
      { text }
    </a>
  );
};
