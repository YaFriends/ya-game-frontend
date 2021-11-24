import React, { FC, useMemo } from 'react';

import { TableHeadProps, TableHeadCellProps } from './Table';

const DEFAULT_CLASSES: string[] = ['ui-table__head'];
const DEFAULT_CLASSES_HEAD_ROW: string[] = ['ui-table__head-row', 'h-[50px]'];

const TableHeadCell: FC<TableHeadCellProps> = ({ item }: TableHeadCellProps) => {
  return <th className={item[1]}>{item[0]}</th>;
};

export const TableHead: FC<TableHeadProps> = ({ headers }: TableHeadProps) => {
  const cells = useMemo(() => {
    return headers.map((item, index) => <TableHeadCell key={index} item={item} />);
  }, [headers]);

  return (
    <thead className={DEFAULT_CLASSES.join(' ')}>
      <tr className={DEFAULT_CLASSES_HEAD_ROW.join(' ')}>{cells}</tr>
    </thead>
  );
};
