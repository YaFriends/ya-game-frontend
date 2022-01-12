import React, { FC } from 'react';

import { UserData } from '../../@types/UserTypes';
import { GameSetHistoryList } from '../../components/GameSetHistoryList/GameSetHistoryList';
import { Menu } from '../../components/Menu';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { MainLink } from '../../components/ui/Link/Link';
import { useAuth } from '../../hooks/use-auth';
import { TRANSLATION } from '../../lang/ru/translation';
import { DUMMY_GAME_LIST, DUMMY_STATS } from '../MOCKS/Dashboard';

import './Dashboard.scss';

export const Dashboard: FC<Record<string, never>> = () => {
  const { currentUser } = useAuth();
  const link = <MainLink text={TRANSLATION.Dashboard.WatchAllGames} href="/profile/history" />;
  return (
    currentUser && (
      <section className="dashboard">
        <div className="dashboard__top">
          <UserInfo user={currentUser as UserData} stats={DUMMY_STATS} />
        </div>
        <div className="dashboard__body">
          <Menu />
          <div className="dashboard__body-games">
            <GameSetHistoryList items={DUMMY_GAME_LIST} link={link} />
          </div>
        </div>
      </section>
    )
  );
};
