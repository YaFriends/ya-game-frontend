import React, { FC, ReactNode, useMemo } from 'react';

import { BodyItem } from './Table';

export interface TableRowProps {
  row: BodyItem[];
}

const DEFAULT_CLASSES: string[] = ['ui-table__row', 'h-[50px]'];

export const TableRow: FC<TableRowProps> = ({ row }: TableRowProps) => {
  const createCell = (text: BodyItem, index: number): ReactNode => (
    <td key={index} className="border text-center first:border-l-0 last:border-r-0">
      {text}
    </td>
  );
  const getRow = row.map((text, index) => useMemo(() => createCell(text, index), [text, index]));
  return <tr className={DEFAULT_CLASSES.join(' ')}>{getRow}</tr>;
};
