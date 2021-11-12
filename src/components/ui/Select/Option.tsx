import React, { FC, PropsWithChildren } from 'react';

import { OptionProps, SelectedChangeType } from './Select';

export const Option: FC<
  PropsWithChildren<{
    option: OptionProps;
    onSelectedChange: SelectedChangeType;
    disabled?: boolean;
  }>
> = ({ option, onSelectedChange, disabled = false }) => {
  const DEFAULT_CLASSES = [
    'bg-black',
    'text-white',
    'px-3',
    'font-light',
    'p-1',
    'last:rounded-b-12px',
    'last:h-[50px]',
  ].join(' ');

  const ACTIVE = ['hover:font-bold', 'hover:cursor-pointer', 'hover:text-blue'].join(' ');
  const DISABLED = ['text-opacity-40'].join(' ');
  const OPTION_CLASSES = disabled ? [DEFAULT_CLASSES, DISABLED] : [DEFAULT_CLASSES, ACTIVE];

  return (
    <div className={OPTION_CLASSES.join(' ')} onClick={() => disabled || onSelectedChange(option)}>
      {option.label}
    </div>
  );
};
