import React, { FC } from 'react';

import './ButtonClose.scss';

interface ButtonCloseProps {
  click: () => void;
}

export const ButtonClose: FC<ButtonCloseProps> = ({ click }) => {
  return (
    <button type="button" className="ui-button-close" onClick={click}>
      {' '}
    </button>
  );
};
