import React, { FC, ReactNode } from 'react';

type HeadItem = string[];
export interface TableHeadProps {
  headers: HeadItem[];
}

const DEFAULT_CLASSES: string[] = ['ui-table__head'];

export const TableHead: FC<TableHeadProps> = ({ headers }: TableHeadProps) => {
  const createHead = (item: HeadItem, index: number): ReactNode => (
    <th key={index} className={item[1]}>
      {item[0]}
    </th>
  );
  const getHeaders = (): ReactNode => headers.map((item, index) => createHead(item, index));
  return (
    <thead className={DEFAULT_CLASSES.join(' ')}>
      <tr className="h-[50px]">{getHeaders()}</tr>
    </thead>
  );
};
