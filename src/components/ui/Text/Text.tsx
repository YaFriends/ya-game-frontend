import React, { FC, useMemo } from 'react';
import './Text.scss';

interface TextProps {
  extendClass?: string;
  text: string;
  theme?: 'dark' | 'light';
}

const DEFAULT_CLASSES: string[] = ['ui-text', 'text-base'];

const classes = (theme: 'dark' | 'light', extendClass: string | undefined): string[] => {
  const result = [...DEFAULT_CLASSES, `ui-text--${theme}`];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const Text: FC<TextProps> = ({ extendClass = '', text, theme = 'light' }: TextProps) => {
  const classesMemo = useMemo(() => classes(theme, extendClass), [theme, extendClass]);

  return <p className={classesMemo.join(' ')}>{text}</p>;
};
