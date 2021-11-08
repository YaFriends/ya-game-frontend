import React, { FC, useMemo } from 'react';
import './Title.scss';

interface TitleProps {
  extendClass?: string;
  text: string;
  theme?: 'dark' | 'light';
}

const DEFAULT_CLASSES: string[] = ['ui-title', 'text-center', 'text-2xl', 'font-bold'];

const classes = (theme: 'dark' | 'light', extendClass: string | undefined): string[] => {
  const result = [...DEFAULT_CLASSES, `ui-title--${theme}`];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const Title: FC<TitleProps> = ({ extendClass = '', text, theme = 'light' }: TitleProps) => {
  const classesMemo = useMemo(() => classes(theme, extendClass), [theme, extendClass]);

  return <h1 className={classesMemo.join(' ')}>{text}</h1>;
};
