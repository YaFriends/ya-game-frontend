import React, { FC, useState, useEffect } from 'react';

import { LeaderboardData } from '../../api/LeaderboardAPI';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Table } from '../../components/ui/Table/Table';
import { Title } from '../../components/ui/Title/Title';
import { LeaderboardController } from '../../controllers/LeaderboardController';

import './Leaderboard.scss';

type PositionLeaderboard = number | null;
type PositionLeaderboardText = string;

const HEADERS = [
  ['Позиция #', 'border w-[150px] bg-grey40'],
  ['Имя', 'border w-[420px] bg-grey40'],
  ['Победы', 'border w-[150px] bg-grey40'],
];

export const Leaderboard: FC<Record<string, never>> = () => {
  const [leaderboards, setLeaderboard] = useState<LeaderboardData[]>([]);
  const [positionOnLeaderboard, setPositionOnLeaderboard] = useState<PositionLeaderboard>(null);
  const [positionOnLeaderboardText, setPositionOnLeaderboardText] =
    useState<PositionLeaderboardText>('Тебя нет в таблице');
  const mockGetAll = {
    ratingFieldName: 'yaFriendsScore',
    cursor: 0,
    limit: 50,
  };

  useEffect(() => {
    LeaderboardController.getAllLeaderboards(mockGetAll).then(response => {
      const result: LeaderboardData[] = [
        ...leaderboards,
        (response as unknown as LeaderboardData[])[0],
      ];
      setLeaderboard(result);
      getPositionForCurrentUserOnLeaderboard();
    });
  }, []);

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

  const body = leaderboards.map(({ data }) => Object.values(data));

  // TODO: после добавления функции sort в utils, отсортировать массив и потом добавить индекс элементов
  body.forEach((item, index) => item.unshift(index + 1));

  return (
    <section className="leaderboard">
      <div className="leaderboard__header">
        <Subtitle text={positionOnLeaderboardText} />
        <Title text="Таблица лидеров" />
      </div>

      <Table headers={HEADERS} body={body} />
    </section>
  );
};
