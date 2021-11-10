import React, { FC, ReactNode } from 'react';

import { TableRow } from './ElementTableRow';

export type BodyItem = string | number | null;
type BodyItems = BodyItem[];

export interface TableBodyProps {
  body?: BodyItems[];
}

const DEFAULT_CLASSES: string[] = ['ui-table__body'];

export const TableBody: FC<TableBodyProps> = ({ body }: TableBodyProps) => {
  const getBody = (): ReactNode => body?.map((row, index) => <TableRow key={index} row={row} />);
  return <tbody className={DEFAULT_CLASSES.join(' ')}>{getBody()}</tbody>;
};
