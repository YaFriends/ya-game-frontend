import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { TRANSLATION } from '../lang/ru/translation';

export const Menu: FC<Record<string, never>> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{TRANSLATION.Dashboard.menuLabel}</Link>
        </li>
        <li>
          <Link to="/forum">{TRANSLATION.Forum.menuLabel}</Link>
        </li>
        <li>
          <Link to="/game/create">{TRANSLATION.GameCreation.menuLabel}</Link>
        </li>
        <li>
          <Link to="/game/lobby">{TRANSLATION.GameLobby.menuLabel}</Link>
        </li>
        <li>
          <Link to="/game/1234">{TRANSLATION.GameSession.menuLabel}</Link>
        </li>
        <li>
          <Link to="/leaderboard">{TRANSLATION.Leaderboard.menuLabel}</Link>
        </li>
        <li>
          <Link to="/login">{TRANSLATION.Login.menuLabel}</Link>
        </li>
        <li>
          <Link to="/register">{TRANSLATION.Register.menuLabel}</Link>
        </li>
        <li>
          <Link to="/profile">{TRANSLATION.Profile.menuLabel}</Link>
        </li>
        <li>
          <Link to="/profile/history">{TRANSLATION.ProfileHistory.menuLabel}</Link>
        </li>
        <li>
          <Link to="/abrakadabra">404</Link>
        </li>
      </ul>
    </nav>
  );
};
