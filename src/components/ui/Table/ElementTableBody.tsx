import React, { FC } from 'react';
type BodyItem = (string | number | null)[];

export interface TableBodyProps {
  body?: BodyItem[];
}

const DEFAULT_CLASSES: string[] = ['ui-table__body'];

export const TableBody: FC<TableBodyProps> = ({ body}: TableBodyProps) => {
  return (
    <tbody className={ DEFAULT_CLASSES.join(' ') }>

    </tbody>
  );
};
