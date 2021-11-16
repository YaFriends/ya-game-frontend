import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthController } from '../controllers/AuthController';
import { useAppDispatch } from '../hooks/redux-hooks';
import { TRANSLATION } from '../lang/ru/translation';
import { authActions } from '../store/slices/authSlice';

import { Button } from './ui/Button/Button';
import { MainLink } from './ui/Link/Link';
import { Title } from './ui/Title/Title';

export const Menu: FC<Record<string, never>> = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const handleLogout = () =>
    AuthController.logout().then(() => {
      localStorage.setItem('isAuth', 'false');
      dispatch(authActions.resetCurrentUser());
      history.push('/login');
    });

  return (
    <div className="menu">
      <div className="menu__title">
        <Title text="YaFriends" />
      </div>
      <nav className="menu__nav">
        <ul>
          <li className="menu__link">
            <MainLink
              extendClass="ui-link--button-success"
              href="/game/create"
              text={TRANSLATION.GameCreation.label}
            />
          </li>
          <li className="menu__link">
            <MainLink
              extendClass="ui-link--button"
              href="/profile"
              text={TRANSLATION.Profile.label}
            />
          </li>
          <li className="menu__link">
            <MainLink extendClass="ui-link--button" href="/forum" text={TRANSLATION.Forum.label} />
          </li>
          <li className="menu__link">
            <MainLink
              extendClass="ui-link--button"
              href="/leaderboard"
              text={TRANSLATION.Leaderboard.label}
            />
          </li>
          <li className="menu__link">
            <Button
              extendClass="ui-button--error"
              type="button"
              text={TRANSLATION.Logout.label}
              click={handleLogout}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
