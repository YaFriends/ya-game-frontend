import React, { FC, ReactNode } from 'react';

export interface TableHeadProps {
  headers: string[];
}

const DEFAULT_CLASSES: string[] = ['ui-table__head'];

export const TableHead: FC<TableHeadProps> = ({ headers }: TableHeadProps) => {
  const createHead = (text: string): ReactNode => <th>{ text }</th>;
  const getHeaders = (): ReactNode => headers.map(head => createHead(head));

  return (
    <thead className={ DEFAULT_CLASSES.join(' ') }>
      <tr>
        { getHeaders() }
      </tr>
    </thead>
  );
};
