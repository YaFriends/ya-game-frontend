import React, { FC } from 'react';

import { TableRow } from './ElementTableRow';
import { TableBodyProps } from './Table';

const DEFAULT_CLASSES: string[] = ['ui-table__body'];

export const TableBody: FC<TableBodyProps> = ({ body }: TableBodyProps) => {
  const getBody = body?.map((row, index) => <TableRow key={index} row={row} />);
  return <tbody className={DEFAULT_CLASSES.join(' ')}>{getBody}</tbody>;
};
