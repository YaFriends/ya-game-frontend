import React, { FC } from 'react';

import { TableBody, TableBodyProps } from './ElementTableBody';
import { TableHead, TableHeadProps } from './ElementTableHead';
import './Table.scss';

interface TableProps extends TableHeadProps, TableBodyProps {}

const DEFAULT_CLASSES: string[] = ['ui-table', 'border-collapse'];

export const Table: FC<TableProps> = ({ headers, body }: TableProps) => {
  return (
    <table className={DEFAULT_CLASSES.join(' ')}>
      <TableHead headers={headers} />
      <TableBody body={body} />
    </table>
  );
};
