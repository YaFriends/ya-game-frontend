import React, { FC, useMemo } from 'react';
import './Title.scss';

interface TitleProps {
  extendClass?: string;
  text: string;
}

const DEFAULT_CLASSES: string[] = ['ui-title', 'text-center', 'font-bold'];

const classes = (extendClass?: string): string[] => {
  const result = [...DEFAULT_CLASSES];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const Title: FC<TitleProps> = ({ extendClass = '', text }: TitleProps) => {
  const classesMemo = useMemo(() => classes(extendClass), [extendClass]);

  return <h1 className={classesMemo.join(' ')}>{text}</h1>;
};
