import React, { FC, MouseEvent, useMemo, useState } from 'react';

import './SwitchTheme.scss';
import { useAppDispatch } from '../../../hooks/redux';
import { currentTheme, themeActions } from '../../../store/slices/themeSlice';

const darkTheme = 'dark';
const lightTheme = 'light';

export const SwitchTheme: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const dispatch = useAppDispatch();

  const handleToggleThemesList = () => {
    if (typeof window !== 'undefined') {
      setCurrentTheme((localStorage.getItem('theme') as currentTheme) || darkTheme);
    }

    setIsOpen(!isOpen);
  };

  const handleToggleTheme = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const changeTheme: currentTheme = (target.dataset.theme as currentTheme) || darkTheme;

    setCurrentTheme(changeTheme);
    dispatch(themeActions.setCurrentTheme(changeTheme as currentTheme));

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', changeTheme);
    }
  };

  const classesMemoSwitchControl = useMemo(() => {
    if (isOpen) {
      return ['switch-theme', 'switch-theme--open'];
    }

    return ['switch-theme'];
  }, [isOpen]);

  const classesMemoSwitchButtonTheme = (buttonTheme: string): string[] => {
    return useMemo(() => {
      const classes = ['switch-theme__button'];

      if (buttonTheme === darkTheme) {
        classes.push('switch-theme__button-black');
      }

      if (buttonTheme === lightTheme) {
        classes.push('switch-theme__button-white');
      }

      if (buttonTheme === currentTheme) {
        classes.push('switch-theme__button--active');
      }

      return classes;
    }, [currentTheme]);
  };

  return (
    <div className={classesMemoSwitchControl.join(' ')}>
      <button className="switch-theme__button" onClick={handleToggleThemesList}>
        <img src="/static/img/icon-switch-theme.png" alt="icon-switch-theme" />
      </button>
      <div className="switch-theme__themes-list">
        <button
          className={classesMemoSwitchButtonTheme(darkTheme).join(' ')}
          data-theme={darkTheme}
          onClick={handleToggleTheme}
        />
        <button
          className={classesMemoSwitchButtonTheme(lightTheme).join(' ')}
          data-theme={lightTheme}
          onClick={handleToggleTheme}
        />
      </div>
    </div>
  );
};
