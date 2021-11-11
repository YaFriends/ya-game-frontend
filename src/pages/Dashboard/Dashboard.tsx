import React, { FC } from 'react';

import { GameHistoryList } from '../../components/GameHistoryList/GameHistoryList';
import { Menu } from '../../components/Menu';
import { Profile } from '../../components/Profile/Profile';
import { MainLink } from '../../components/ui/Link/Link';
import { TRANSLATION } from '../../lang/ru/translation';
import { DUMMY_GAME_LIST, DUMMY_STATS, DUMMY_USER } from '../MOCKS/Dashboard';

import './dashboard.scss';

export const Dashboard: FC<Record<string, never>> = () => {
  const link = <MainLink text={TRANSLATION.Dashboard.WatchAllGames} href="/profile/history" />;
  return (
    <section className="dashboard">
      <div className="dashboard__top">
        <Profile user={DUMMY_USER} stats={DUMMY_STATS} />
      </div>
      <div className="dashboard__body">
        <Menu />
        <div className="dashboard__body-games">
          <GameHistoryList items={DUMMY_GAME_LIST} link={link} />
        </div>
      </div>
    </section>
  );
};
