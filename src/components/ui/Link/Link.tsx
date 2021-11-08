import React, { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Link.scss';

interface LinkProps {
  extendClass?: string;
  text: string;
  href?: string;
  theme?: 'dark' | 'light';
}

const DEFAULT_CLASSES: string[] = [
  'ui-link',
  'underline',
  'text-base',
  'duration-300',
  'ease-in-out',
];

const classes = (theme: 'dark' | 'light', extendClass: string | undefined): string[] => {
  const result = [...DEFAULT_CLASSES, `ui-link--${theme}`];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const MainLink: FC<LinkProps> = ({
  extendClass = '',
  text,
  href = '#',
  theme = 'light',
}: LinkProps) => {
  const classesMemo = useMemo(() => classes(theme, extendClass), [theme, extendClass]);

  return (
    <Link className={classesMemo.join(' ')} to={href}>
      {text}
    </Link>
  );
};
