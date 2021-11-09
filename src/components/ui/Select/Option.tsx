import React, { FC, PropsWithChildren } from 'react';

import { OptionsProps, SelectedChangeType } from './SelectTypes';

const Option: FC<
  PropsWithChildren<{
    option: OptionsProps;
    onSelectedChange: SelectedChangeType;
  }>
> = ({ option, onSelectedChange }) => {
  const DEFAULT_CLASSES = [
    'bg-black',
    'text-white',
    'px-3',
    'hover:cursor-pointer',
    'hover:text-blue',
    'last:rounded-b-12px',
  ];
  return (
    <div className={DEFAULT_CLASSES.join(' ')} onClick={() => onSelectedChange(option)}>
      {option.label}
    </div>
  );
};

export { Option };
