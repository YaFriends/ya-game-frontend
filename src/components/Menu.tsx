import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { TRANSLATION } from '../lang/ru/translation';

export const Menu: FC<Record<string, never>> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{TRANSLATION.Dashboard.label}</Link>
        </li>
        <li>
          <Link to="/forum">{TRANSLATION.Forum.label}</Link>
        </li>
        <li>
          <Link to="/game/create">{TRANSLATION.GameCreation.label}</Link>
        </li>
        <li>
          <Link to="/game/lobby">{TRANSLATION.GameLobby.label}</Link>
        </li>
        <li>
          <Link to="/game/1234">{TRANSLATION.GameSession.label}</Link>
        </li>
        <li>
          <Link to="/leaderboard">{TRANSLATION.Leaderboard.label}</Link>
        </li>
        <li>
          <Link to="/login">{TRANSLATION.Login.label}</Link>
        </li>
        <li>
          <Link to="/register">{TRANSLATION.Register.label}</Link>
        </li>
        <li>
          <Link to="/profile">{TRANSLATION.Profile.label}</Link>
        </li>
        <li>
          <Link to="/profile/history">{TRANSLATION.ProfileHistory.label}</Link>
        </li>
        <li>
          <Link to="/abrakadabra">404</Link>
        </li>
      </ul>
    </nav>
  );
};
