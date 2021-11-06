import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { TRANSLATION } from '../lang/ru/translation';

export const Menu: FC<{}> = () => {
  return <nav>
    <ul>
      <li>
        <Link to="/">{ TRANSLATION.Dashboard }</Link>
      </li>
      <li>
        <Link to="/forum">{ TRANSLATION.Forum }</Link>
      </li>
      <li>
        <Link to="/game/create">{ TRANSLATION.GameCreation }</Link>
      </li>
      <li>
        <Link to="/game/lobby">{ TRANSLATION.GameLobby }</Link>
      </li>
      <li>
        <Link to="/game/1234">{ TRANSLATION.GameSession }</Link>
      </li>
      <li>
        <Link to="/leaderboard">{ TRANSLATION.Leaderboard }</Link>
      </li>
      <li>
        <Link to="/login">{ TRANSLATION.Login }</Link>
      </li>
      <li>
        <Link to="/register">{ TRANSLATION.Register }</Link>
      </li>
      <li>
        <Link to="/profile">{ TRANSLATION.Profile }</Link>
      </li>
      <li>
        <Link to="/profile/history">{ TRANSLATION.ProfileHistory }</Link>
      </li>
      <li>
        <Link to="/abrakadabra">404</Link>
      </li>
    </ul>
  </nav>
};
