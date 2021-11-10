import React, { FC, FormEvent, useMemo } from 'react';

interface FormProps {
  name: string;
  extendClass?: string;
  submit?: (e: FormEvent) => void;
}

const DEFAULT_CLASSES: string[] = ['ui-form', 'w-full'];
const classes = (extendClass?: string): string[] => {
  const result = [...DEFAULT_CLASSES];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const Form: FC<FormProps> = ({ name, extendClass = '', submit, children }) => {
  const classesMemo = useMemo(() => classes(extendClass), [extendClass]);
  return (
    <form name={name} className={classesMemo.join(' ')} onSubmit={submit}>
      {React.Children.map(children, child => child)}
    </form>
  );
};