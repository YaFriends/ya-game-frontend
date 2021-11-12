import React, { FC } from 'react';

import { BodyItem } from './Table';

export interface TableBodyCellProps {
  text: BodyItem;
}

const DEFAULT_CLASSES: string[] = ['border', 'text-center', 'first:border-l-0', 'last:border-r-0'];

export const TableBodyCell: FC<TableBodyCellProps> = ({ text }: TableBodyCellProps) => {
  return <td className={DEFAULT_CLASSES.join(' ')}>{text}</td>;
};
