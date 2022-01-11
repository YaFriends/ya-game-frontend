import React, { FC } from 'react';

import { useAppSelector } from '../hooks/redux';
import { TRANSLATION } from '../lang/ru/translation';
import { currentTheme } from '../store/slices/themeSlice';

import { MainLink } from './ui/Link/Link';
import { Title } from './ui/Title/Title';

export const Menu: FC<Record<string, never>> = () => {
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  return (
    <div className="menu">
      <div className="menu__title">
        <Title text="YaFriends" theme={currentTheme} />
      </div>
      <nav className="menu__nav">
        <ul>
          <li className="menu__link">
            <MainLink
              extendClass="ui-link--button-success"
              href="/game/create"
              text={TRANSLATION.GameCreation.label}
              theme={currentTheme}
            />
          </li>
          <li className="menu__link">
            <MainLink
              extendClass="ui-link--button"
              href="/profile"
              text={TRANSLATION.Profile.label}
              theme={currentTheme}
            />
          </li>
          <li className="menu__link">
            <MainLink
              extendClass="ui-link--button"
              href="/forum"
              text={TRANSLATION.Forum.label}
              theme={currentTheme}
            />
          </li>
          <li className="menu__link">
            <MainLink
              extendClass="ui-link--button"
              href="/leaderboard"
              text={TRANSLATION.Leaderboard.label}
              theme={currentTheme}
            />
          </li>
          <li className="menu__link">
            <MainLink
              extendClass="ui-link--warning"
              href="/logout"
              text={TRANSLATION.Logout.label}
              theme={currentTheme}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
