import React, { FC, MouseEvent, useEffect } from 'react';

import './SwitchTheme.scss';
import { useAppDispatch } from '../../../hooks/redux';
import { currentTheme, themeActions } from '../../../store/slices/themeSlice';

export const SwitchTheme: FC = () => {
  const dispatch = useAppDispatch();
  let currentTheme = 'dark';

  if (typeof window !== 'undefined') {
    useEffect(() => {
      currentTheme = (localStorage.getItem('theme') as currentTheme) || 'dark';

      document
        .querySelectorAll('.switch-theme__button')
        .forEach(i =>
          (i as HTMLElement).dataset.theme === currentTheme
            ? i.classList.add('switch-theme__button--active')
            : i.classList.remove('switch-theme__button--active')
        );
    }, []);
  }

  const handleToggleThemesList = () => {
    document.querySelector('.switch-theme')!.classList.toggle('switch-theme--open');
  };

  const handleToggleTheme = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const changeTheme: currentTheme = (target.dataset.theme as currentTheme) || 'dark';

    document
      .querySelectorAll('.switch-theme__button')
      .forEach(i => i.classList.remove('switch-theme__button--active'));

    target.classList.add('switch-theme__button--active');

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', changeTheme);
    }

    currentTheme = changeTheme;

    dispatch(themeActions.setCurrentTheme(changeTheme as currentTheme));
  };

  return (
    <div className="switch-theme">
      <button className="switch-theme__button" onClick={handleToggleThemesList}>
        <img src="/static/img/icon-switch-theme.png" alt="icon-switch-theme" />
      </button>
      <div className="switch-theme__themes-list">
        <button
          className="switch-theme__button switch-theme__button-black"
          data-theme="dark"
          onClick={handleToggleTheme}
        />
        <button
          className="switch-theme__button switch-theme__button-white"
          data-theme="light"
          onClick={handleToggleTheme}
        />
      </div>
    </div>
  );
};
