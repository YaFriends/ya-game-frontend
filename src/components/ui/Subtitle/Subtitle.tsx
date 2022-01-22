import React, { FC, useMemo } from 'react';
import './Subtitle.scss';

interface SubtitleProps {
  extendClass?: string;
  text: string;
}

const DEFAULT_CLASSES: string[] = ['ui-subtitle', 'text-center', 'font-bold'];

const classes = (extendClass?: string): string[] => {
  const result = [...DEFAULT_CLASSES];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const Subtitle: FC<SubtitleProps> = ({ extendClass = '', text }: SubtitleProps) => {
  const classesMemo = useMemo(() => classes(extendClass), [extendClass]);

  return <h2 className={classesMemo.join(' ')}>{text}</h2>;
};
