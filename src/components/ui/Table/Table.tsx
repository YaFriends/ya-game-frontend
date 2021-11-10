import React, { FC } from 'react';

import { TableHead, TableHeadProps } from './ElementTableHead';
import { TableBody, TableBodyProps } from './ElementTableBody';

interface TableProps {
  headers: TableHeadProps;
  body?: TableBodyProps;
}

const DEFAULT_CLASSES: string[] = ['ui-table'];
const HEADERS = ['tets', 'test', 'test'];

export const Table: FC<TableProps> = ({ headers, body }: TableProps) => {
  return (
    <table className={ DEFAULT_CLASSES.join(' ') }>
      <TableHead headers={ HEADERS }/>
      <TableBody />
    </table>
  );
};
