import React, { FC, useMemo } from 'react';

import { TableBodyProps, TableBodyRowProps, TableBodyCellProps } from './Table';

const DEFAULT_CLASSES: string[] = ['ui-table__body', 'dark:text-white'];
const DEFAULT_CLASSES_BODY_ROW: string[] = ['ui-table__body-row', 'h-[50px]'];
const DEFAULT_CLASSES_BODY_CELL: string[] = [
  'ui-table__body-cell',
  'border',
  'text-center',
  'first:border-l-0',
  'last:border-r-0',
];

const TableBodyCell: FC<TableBodyCellProps> = ({ text }: TableBodyCellProps) => {
  return <td className={DEFAULT_CLASSES_BODY_CELL.join(' ')}>{text}</td>;
};

const TableBodyRow: FC<TableBodyRowProps> = ({ row }: TableBodyRowProps) => {
  const cells = useMemo(() => {
    return row.map((text, index) => <TableBodyCell key={index} text={text} />);
  }, [row]);

  return <tr className={DEFAULT_CLASSES_BODY_ROW.join(' ')}>{cells}</tr>;
};

export const TableBody: FC<TableBodyProps> = ({ body }: TableBodyProps) => {
  const rows = useMemo(() => {
    return body?.map((row, index) => <TableBodyRow key={index} row={row} />);
  }, [body]);

  return <tbody className={DEFAULT_CLASSES.join(' ')}>{rows}</tbody>;
};
