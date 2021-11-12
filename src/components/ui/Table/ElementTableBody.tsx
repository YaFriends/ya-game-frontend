import React, { FC, useMemo } from 'react';

import { TableBodyRow } from './ElementTableBodyRow';
import { TableBodyProps } from './Table';

const DEFAULT_CLASSES: string[] = ['ui-table__body'];

export const TableBody: FC<TableBodyProps> = ({ body }: TableBodyProps) => {
  const getBody = useMemo(() => {
    return body?.map((row, index) => <TableBodyRow key={index} row={row} />);
  }, [body]);

  return <tbody className={DEFAULT_CLASSES.join(' ')}>{getBody}</tbody>;
};
