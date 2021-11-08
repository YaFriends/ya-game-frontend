import React, { FC, useMemo } from 'react';
import './Subtitle.scss';

interface SubtitleProps {
  extendClass?: string;
  text: string;
  theme?: 'dark' | 'light';
}

const DEFAULT_CLASSES: string[] = ['ui-subtitle', 'text-center', 'text-lg', 'font-bold'];

const classes = (theme: 'dark' | 'light', extendClass?: string): string[] => {
  const result = [...DEFAULT_CLASSES, `ui-subtitle--${theme}`];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const Subtitle: FC<SubtitleProps> = ({
  extendClass = '',
  text,
  theme = 'light',
}: SubtitleProps) => {
  const classesMemo = useMemo(() => classes(theme, extendClass), [theme, extendClass]);

  return <h2 className={classesMemo.join(' ')}>{text}</h2>;
};
