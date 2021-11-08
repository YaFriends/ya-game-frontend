import React, { FC, useState, useEffect } from 'react';

import { LeaderboardData } from '../../api/LeaderboardAPI';
import { Title } from '../../components/ui/Title/Title';
import { LeaderboardController } from '../../controllers/LeaderboardController';

import './Leaderboard.scss';

export const Leaderboard: FC<Record<string, never>> = () => {
  const [leaderboards, setLeaderboard] = useState<LeaderboardData>({
    data: {
      teamName: '',
      yaFriendsScore: 0,
    },
  });
  const mockGetAll = {
    ratingFieldName: 'yaFriendsScore',
    cursor: 0,
    limit: 50,
  };

  useEffect(() => {
    LeaderboardController.getAllLeaderboards(mockGetAll).then(data =>
      setLeaderboard(data as LeaderboardData)
    );
  }, [leaderboards.data.teamName]);

  return (
    <section className="leaderboard">
      <Title text="Таблица лидеров" />
      <div className="leaderboard__table-wrapper">
        <Title text="Тут будет таблица с результатами" theme="dark" />
        <pre>{JSON.stringify(leaderboards.data)}</pre>
      </div>
    </section>
  );
};
