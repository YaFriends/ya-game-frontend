import React, { FC, useMemo } from 'react';
import './Text.scss';

interface TextProps {
  extendClass?: string;
  text: string;
}

const DEFAULT_CLASSES: string[] = ['ui-text'];

const classes = (extendClass?: string): string[] => {
  const result = [...DEFAULT_CLASSES];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const Text: FC<TextProps> = ({ extendClass = '', text }) => {
  const classesMemo = useMemo(() => classes(extendClass), [extendClass]);

  return <p className={classesMemo.join(' ')}>{text}</p>;
};
