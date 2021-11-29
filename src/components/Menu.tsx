import React, { FC } from 'react';

import { TRANSLATION } from '../lang/ru/translation';

import { MainLink } from './ui/Link/Link';
import { Title } from './ui/Title/Title';

export const Menu: FC<Record<string, never>> = () => {
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
              href="/game/234234"
              // href="/game/create"
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
            <MainLink
              extendClass="ui-link--warning"
              href="/logout"
              text={TRANSLATION.Logout.label}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
