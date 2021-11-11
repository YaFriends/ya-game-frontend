import React, { FC, PropsWithChildren } from 'react';

//TODO поменять в Input локальный Label на этот

type LabelProps = {
  name: string;
  id?: string;
  label?: string;
};

const DEFAULT_CLASSES: string[] = ['font-bold', 'text-lg', 'text-black', 'mb-1'];

export const Label: FC<PropsWithChildren<LabelProps>> = ({ name, id, label }: LabelProps) => {
  return (
    <label className={DEFAULT_CLASSES.join(' ')} htmlFor={id || name}>
      {label}
    </label>
  );
};
