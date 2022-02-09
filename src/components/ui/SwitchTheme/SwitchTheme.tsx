import React, { FC, MouseEvent, useMemo, useState, useCallback } from 'react';

import './SwitchTheme.scss';
import { useAppDispatch } from '../../../hooks/redux';
import { currentTheme, themeActions } from '../../../store/slices/themeSlice';
import { useAuth } from '../../../hooks/use-auth';
import { useUpdateUserMutation } from '../../../services/AuthAPI';

const darkTheme = 'dark';
const lightTheme = 'light';

export const SwitchTheme: FC = () => {
  const { currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const dispatch = useAppDispatch();
  const [updateUser] = useUpdateUserMutation();

  const handleToggleThemesList = useCallback(() => {
    if (typeof window !== 'undefined') {
      setCurrentTheme(
        currentUser?.theme || (localStorage.getItem('theme') as currentTheme) || darkTheme
      );
    }

    setIsOpen(!isOpen);
  }, [currentUser]);

  const handleToggleTheme = useCallback(
    async (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const changedTheme: currentTheme = (target.dataset.theme as currentTheme) || darkTheme;

      setCurrentTheme(changedTheme);
      dispatch(themeActions.setCurrentTheme(changedTheme as currentTheme));

      if (currentUser) {
        await updateUser({ id: currentUser.id, theme: changedTheme });
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', changedTheme);
      }
    },
    [currentUser]
  );

  const classesMemoSwitchControl = useMemo(() => {
    if (isOpen) {
      return ['switch-theme', 'switch-theme--open'];
    }

    return ['switch-theme'];
  }, [isOpen]);

  const classesMemoSwitchButtonTheme = useCallback(
    (buttonTheme: string): string[] => {
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
    },
    [currentTheme]
  );

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
