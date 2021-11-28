import React, { FC, useMemo } from 'react';

import { Button } from '../Button/Button';
import { ButtonClose } from '../ButtonClose/ButtonClose';
import { Subtitle } from '../Subtitle/Subtitle';

import './Popup.scss';

interface PopupProps {
  title: string;
  textButton: string;
  show: boolean;
  click: () => void;
}

const DEFAULT_CLASSES: string[] = ['ui-popup'];

export const Popup: FC<PopupProps> = ({ title, textButton, show, click, children }) => {
  const classesMemo = useMemo(() => [...DEFAULT_CLASSES, 'ui-popup--show'], [show]);

  return (
    <div className={classesMemo.join(' ')}>
      <div className="ui-popup__inner">
        <div className="ui-popup__wrapper">
          <header className="ui-popup__header">
            <Subtitle text={title} />
            <ButtonClose click={click} />
          </header>
          {children && (
            <main className="ui-popup__main">{React.Children.map(children, child => child)}</main>
          )}
          <footer className="ui-popup__footer">
            <Button type="button" text={textButton} click={click} />
          </footer>
        </div>
      </div>
    </div>
  );
};
