import React, { FC, useMemo } from 'react';

import { TableHeadCell } from './ElementTableHeadCell';
import { TableHeadProps } from './Table';

const DEFAULT_CLASSES: string[] = ['ui-table__head'];

export const TableHead: FC<TableHeadProps> = ({ headers }: TableHeadProps) => {
  const getHeaders = useMemo(() => {
    return headers.map((item, index) => <TableHeadCell key={index} item={item} />);
  }, [headers]);

  return (
    <thead className={DEFAULT_CLASSES.join(' ')}>
      <tr className="h-[50px]">{getHeaders}</tr>
    </thead>
  );
};
