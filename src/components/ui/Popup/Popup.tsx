import React, { FC, useMemo } from 'react';

import { Button } from '../Button/Button';
import { Subtitle } from '../Subtitle/Subtitle';

import './Popup.scss';

interface PopupProps {
  title: string;
  textButton: string;
  isShown?: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

const DEFAULT_CLASSES: string[] = ['ui-popup'];

export const Popup: FC<PopupProps> = ({
  title,
  textButton,
  isShown = false,
  onClose,
  onSubmit,
  children,
}) => {
  const classesMemo = useMemo(
    () => [...DEFAULT_CLASSES, isShown ? 'ui-popup--show' : ''],
    [isShown]
  );

  return (
    <div className={classesMemo.join(' ')}>
      <div className="ui-popup__inner">
        <div className="ui-popup__wrapper">
          <header className="ui-popup__header">
            <Subtitle text={title} />
            <Button type="button" extendClass="ui-button__close" click={onClose} />
          </header>
          {children}
          <footer className="ui-popup__footer">
            <Button type="button" text={textButton} click={onSubmit} />
          </footer>
        </div>
      </div>
    </div>
  );
};
