import React, { FC } from 'react';

import { HeadItem } from './Table';

export interface TableHeadCellProps {
  item: HeadItem;
}

export const TableHeadCell: FC<TableHeadCellProps> = ({ item }: TableHeadCellProps) => {
  return <th className={item[1]}>{item[0]}</th>;
};
