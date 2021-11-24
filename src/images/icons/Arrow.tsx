import React, { FC } from 'react';

interface ArrowProps {
  degree?: string;
}

export const Arrow: FC<ArrowProps> = ({ degree = '0' }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      transform={`rotate(${degree})`}
      xmlns="http://www.w3.org/2000/svg">
      <line
        y1="-1"
        x2="8.31193"
        y2="-1"
        transform="matrix(0.712321 -0.701854 0.712321 0.701854 6.07928 8.00006)"
        stroke="white"
        strokeWidth="2"
      />
      <line
        y1="-1"
        x2="8.31188"
        y2="-1"
        transform="matrix(0.712325 0.70185 -0.712325 0.70185 0 1.99994)"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};
