import React, { FC, PropsWithChildren } from 'react';

import { OptionsProps, SelectedChangeType } from './Select';

export const Option: FC<
  PropsWithChildren<{
    option: OptionsProps;
    onSelectedChange: SelectedChangeType;
  }>
> = ({ option, onSelectedChange }) => {
  const DEFAULT_CLASSES = [
    'bg-black',
    'text-white',
    'px-3',
    'font-light',
    'p-1',
    'hover:font-bold',
    'hover:cursor-pointer',
    'hover:text-blue',
    'last:rounded-b-12px',
    'last:h-[50px]',
  ];
  return (
    <div className={DEFAULT_CLASSES.join(' ')} onClick={() => onSelectedChange(option)}>
      {option.label}
    </div>
  );
};
