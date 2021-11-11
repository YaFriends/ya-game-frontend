import React, { FC, ReactNode } from 'react';

import { TableHeadProps, HeadItem } from './Table';

const DEFAULT_CLASSES: string[] = ['ui-table__head'];

export const TableHead: FC<TableHeadProps> = ({ headers }: TableHeadProps) => {
  const createHead = (item: HeadItem, index: number): ReactNode => (
    <th key={index} className={item[1]}>
      {item[0]}
    </th>
  );
  const getHeaders = headers.map((item, index) => createHead(item, index));
  return (
    <thead className={DEFAULT_CLASSES.join(' ')}>
      <tr className="h-[50px]">{getHeaders}</tr>
    </thead>
  );
};
