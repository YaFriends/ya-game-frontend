import React, { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Link.scss';

interface LinkProps {
  extendClass?: string;
  text: string;
  href?: string;
}

const DEFAULT_CLASSES: string[] = [
  'ui-link',
  'underline',
  'text-base',
  'duration-300',
  'ease-in-out',
];

const classes = (extendClass?: string): string[] => {
  const result = [...DEFAULT_CLASSES];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const MainLink: FC<LinkProps> = ({ extendClass = '', text, href = '#' }: LinkProps) => {
  const classesMemo = useMemo(() => classes(extendClass), [extendClass]);

  return (
    <Link className={classesMemo.join(' ')} to={href}>
      {text}
    </Link>
  );
};
