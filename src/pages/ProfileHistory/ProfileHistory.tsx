import React, { FC } from 'react';

import { GameHistoryList } from '../../components/GameHistoryList/GameHistoryList';
import { MainLink } from '../../components/ui/Link/Link';
import { TRANSLATION } from '../../lang/ru/translation';
import { DUMMY_GAME_LIST } from '../MOCKS/ProfileHistory';

import './profile-history.scss';

export const ProfileHistory: FC<Record<string, never>> = () => {
  const link = <MainLink text={TRANSLATION.ProfileHistory.ReturnToMain} href="/" />;
  return (
    <section className="profile-history">
      <GameHistoryList items={DUMMY_GAME_LIST} link={link} />
    </section>
  );
};
