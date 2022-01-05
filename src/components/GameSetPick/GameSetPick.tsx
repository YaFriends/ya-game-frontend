import React, { FC } from 'react';

import { GameSet } from '../../@types/GameSet';
import { TRANSLATION } from '../../lang/ru/translation';
import { DUMMY_STATS } from '../../pages/MOCKS/ProfileHistory';
import { UserInfo } from '../UserInfo/UserInfo';
import { Title } from '../ui/Title/Title';

import './game-set-pick.scss';

export type GameSetPickProps = {
  gameSet: GameSet;
};

export const GameSetPick: FC<Record<string, never>> = () => {
  const { title } = TRANSLATION.GameSetPick;

  const gameSet: GameSet = {
    id: 1,
    miniGames: [],
    date: '2020-02-02',
    teams: [
      {
        players: [
          {
            login: 'Player 1',
            id: 1,
            first_name: 'Test',
            second_name: 'test 1',
            display_name: 'Testovich',
            email: 'string',
            phone: 'string',
            avatar: '',
          },
        ],
      },
      {
        players: [
          {
            login: 'Player 2',
            id: 2,
            first_name: 'Test',
            second_name: 'test 1',
            display_name: 'Testovich',
            email: 'string',
            phone: 'string',
            avatar: '',
          },
        ],
      },
    ],
  };

  const firstPlayerInFirstTeam = gameSet.teams[0].players[0];
  const firstPlayerInSecondTeam = gameSet.teams[1].players[0];

  return (
    <div className="game-set-pick">
      <div className="game-set-pick__top">
        <UserInfo user={firstPlayerInFirstTeam} stats={DUMMY_STATS} />
        <Title text={title} />
        <UserInfo user={firstPlayerInSecondTeam} stats={DUMMY_STATS} />
      </div>
    </div>
  );
};
