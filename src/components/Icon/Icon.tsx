import React, { FC } from 'react';

type IconProps = {
  fill: string;
  width: number;
  height: number;
  viewBox?: string;
};

export const Icon: FC<IconProps> = props => {
  const { fill, width, height, viewBox, children } = props;
  const correctViewBox = viewBox || `0 0 ${width}px ${height}px`;

  return (
    <svg fill={fill} width={width} height={height} viewBox={correctViewBox}>
      {children}
    </svg>
  );
};
