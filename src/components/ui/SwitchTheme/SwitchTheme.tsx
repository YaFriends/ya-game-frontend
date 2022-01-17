import React, { FC, MouseEvent, useRef } from 'react';

import './SwitchTheme.scss';
import { useAppDispatch } from '../../../hooks/redux';
import { currentTheme, themeActions } from '../../../store/slices/themeSlice';

export const SwitchTheme: FC = () => {
  const switchControl = useRef(null);
  const switchButton = useRef(null);
  const switchDark = useRef(null);
  const switchLight = useRef(null);
  const allButtons: HTMLElement[] = [
    switchButton.current as unknown as HTMLElement,
    switchDark.current as unknown as HTMLElement,
    switchLight.current as unknown as HTMLElement,
  ];
  const dispatch = useAppDispatch();
  let currentTheme = 'dark';

  const handleToggleThemesList = () => {
    (switchControl.current as unknown as HTMLElement).classList.toggle('switch-theme--open');

    if (typeof window !== 'undefined') {
      currentTheme = (localStorage.getItem('theme') as currentTheme) || 'dark';
    }

    allButtons.forEach(i =>
      (i as HTMLElement).dataset.theme === currentTheme
        ? i.classList.add('switch-theme__button--active')
        : i.classList.remove('switch-theme__button--active')
    );
  };

  const handleToggleTheme = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const changeTheme: currentTheme = (target.dataset.theme as currentTheme) || 'dark';

    currentTheme = changeTheme;
    dispatch(themeActions.setCurrentTheme(changeTheme as currentTheme));

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', currentTheme);
    }

    allButtons.forEach(i => i.classList.remove('switch-theme__button--active'));
    target.classList.add('switch-theme__button--active');
  };

  return (
    <div ref={switchControl} className="switch-theme">
      <button ref={switchButton} className="switch-theme__button" onClick={handleToggleThemesList}>
        <img src="/static/img/icon-switch-theme.png" alt="icon-switch-theme" />
      </button>
      <div className="switch-theme__themes-list">
        <button
          ref={switchDark}
          className="switch-theme__button switch-theme__button-black"
          data-theme="dark"
          onClick={handleToggleTheme}
        />
        <button
          ref={switchLight}
          className="switch-theme__button switch-theme__button-white"
          data-theme="light"
          onClick={handleToggleTheme}
        />
      </div>
    </div>
  );
};
