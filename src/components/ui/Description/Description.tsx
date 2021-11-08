import React, {FC, useMemo} from 'react';
import './Description.scss';

interface DescriptionProps {
  extendClass?: string;
  text: string;
  theme?: 'dark' | 'light';
}

const DEFAULT_CLASSES: string[] = [
  'ui-description',
  'text-xs',
];

const classes = (
  theme: 'dark' | 'light',
  extendClass: string | undefined,
): string[] => {
  const result = [...DEFAULT_CLASSES, `ui-description--${theme}`];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const Description: FC<DescriptionProps> = ({
                                                    extendClass = '',
                                                    text,
                                                    theme = 'light',
                                                  }: DescriptionProps) => {

  const classesMemo = useMemo(() => classes(theme, extendClass), [theme, extendClass]);

  return (
    <p className={classesMemo.join(' ')}>
      {text}
    </p>
  );
};
