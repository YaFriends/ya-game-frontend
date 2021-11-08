import React, { FC } from 'react';

type ErrorProps = {
  error?: string;
};

const DEFAULT_CLASSES: string[] = ['absolute', 'top-full', 'left-0', 'text-red', 'text-sm'];

export const Error: FC<ErrorProps> = ({ error }: ErrorProps) => {
  return <p className={DEFAULT_CLASSES.join(' ')}>{error}</p>;
};
