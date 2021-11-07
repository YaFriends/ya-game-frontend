import React, { FC } from 'react';
import { Link } from 'react-router-dom';
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
    <Link
      className={
        'ui-link underline text-base duration-300 ease-in-out'
        + ` ui-link--${theme}`
        + `${extendClass ? ` ${extendClass}` : ''}`
      }
      to={ href }
    >
      { text }
    </Link>
  );
};
