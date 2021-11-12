import React, { FC, useMemo } from 'react';

import { TableBodyCell } from './ElementTableBodyCell';
import { BodyItem } from './Table';

export interface TableBodyRowProps {
  row: BodyItem[];
}

const DEFAULT_CLASSES: string[] = ['ui-table__row', 'h-[50px]'];

export const TableBodyRow: FC<TableBodyRowProps> = ({ row }: TableBodyRowProps) => {
  const getRow = useMemo(() => {
    return row.map((text, index) => <TableBodyCell key={index} text={text} />);
  }, [row]);

  return <tr className={DEFAULT_CLASSES.join(' ')}>{getRow}</tr>;
};
