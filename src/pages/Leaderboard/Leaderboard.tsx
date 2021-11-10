import React, { FC, useState, useEffect } from 'react';

import { LeaderboardData } from '../../api/LeaderboardAPI';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Title } from '../../components/ui/Title/Title';
import { LeaderboardController } from '../../controllers/LeaderboardController';

import './Leaderboard.scss';

type PositionLeaderboard = number | null;
type PositionLeaderboardText = string;

export const Leaderboard: FC<Record<string, never>> = () => {
  const [leaderboards, setLeaderboard] = useState<LeaderboardData>({
    data: {
      teamName: '',
      yaFriendsScore: 0,
    },
  });
  const [positionOnLeaderboard, setPositionOnLeaderboard] = useState<PositionLeaderboard>(null);
  const [positionOnLeaderboardText, setPositionOnLeaderboardText] =
    useState<PositionLeaderboardText>('Тебя нет в таблице');
  const mockGetAll = {
    ratingFieldName: 'yaFriendsScore',
    cursor: 0,
    limit: 50,
  };

  useEffect(() => {
    LeaderboardController.getAllLeaderboards(mockGetAll).then(data => {
      setLeaderboard(data as LeaderboardData);
      getPositionForCurrentUserOnLeaderboard();
    });
  }, [leaderboards.data.teamName]);

  const getPositionForCurrentUserOnLeaderboard = (): void => {
    // TODO: написать метод, которая получает из leaderboards.data позицию авторизованного пользователя(currentUser)
    // Если пользователь найден - отобразить "Твое место в таблице: #17"
    // Если нет - отобазить "Тебя нет в таблице"
    setPositionOnLeaderboard(null); // Временная заглушка, чтобы не ругался на unused-var
    if (positionOnLeaderboard) {
      setPositionOnLeaderboardText(`Твое место в таблице: ${positionOnLeaderboard}`);
    } else {
      setPositionOnLeaderboardText('Тебя нет в таблице');
    }
  };

  console.log('leaderboards', leaderboards.data);

  return (
    <section className="leaderboard">
      <div className="leaderboard__header">
        <Subtitle text={positionOnLeaderboardText} />
        <Title text="Таблица лидеров" />
      </div>

      <div className="leaderboard__table-wrapper">
        <Title text="Тут будет таблица с результатами" theme="dark" />
        <pre>{JSON.stringify(leaderboards.data)}</pre>
      </div>
    </section>
  );
};
