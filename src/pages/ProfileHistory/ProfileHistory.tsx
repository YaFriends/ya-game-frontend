import React, { FC } from 'react';

import { GameSetHistoryList } from '../../components/GameSetHistoryList/GameSetHistoryList';
import { MainLink } from '../../components/ui/Link/Link';
import { useAppSelector } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { currentTheme } from '../../store/slices/themeSlice';
import { DUMMY_GAME_LIST } from '../MOCKS/ProfileHistory';

import './profile-history.scss';

export const ProfileHistory: FC<Record<string, never>> = () => {
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);
  const link = (
    <MainLink text={TRANSLATION.ProfileHistory.ReturnToMain} href="/" theme={currentTheme} />
  );
  return (
    <section className="profile-history">
      <GameSetHistoryList items={DUMMY_GAME_LIST} link={link} />
    </section>
  );
};
