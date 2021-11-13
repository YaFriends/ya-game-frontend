import React, { FC } from 'react';

import { TableBody } from './ElementTableBody';
import { TableHead } from './ElementTableHead';
import './Table.scss';

export type HeadItem = [string, string];
type HeadItems = HeadItem[];
type BodyItem = string | number | null;
type BodyItems = BodyItem[];

export interface TableHeadProps {
  headers: HeadItems;
}

export interface TableHeadCellProps {
  item: HeadItem;
}

export interface TableBodyProps {
  body?: BodyItems[];
}

export interface TableBodyRowProps {
  row: BodyItems;
}

export interface TableBodyCellProps {
  text: BodyItem;
}

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
