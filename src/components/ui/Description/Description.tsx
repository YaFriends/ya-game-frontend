import React, { FC, useMemo } from 'react';
import './Description.scss';

interface DescriptionProps {
  extendClass?: string;
  text: string;
}

const DEFAULT_CLASSES: string[] = ['ui-description', 'text-xs'];

const classes = (extendClass?: string): string[] => {
  const result = [...DEFAULT_CLASSES];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const Description: FC<DescriptionProps> = ({ extendClass = '', text }: DescriptionProps) => {
  const classesMemo = useMemo(() => classes(extendClass), [extendClass]);

  return <p className={classesMemo.join(' ')}>{text}</p>;
};
