import React, { FC } from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { DUMMY_STATS } from '../../pages/MOCKS/ProfileHistory';
import { Title } from '../ui/Title/Title';
import { MiniGame } from '../../@types/GameSet';

type GameSetHeadProps = {
  title?: string;
  miniGames: MiniGame[];
};

export const GameSetHead: FC<GameSetHeadProps> = ({ title, miniGames }) => {
  return (
    <div className="game-set-top">
      <UserInfo user={firstPlayerInFirstTeam} stats={DUMMY_STATS} />
      {miniGames ? <Title text={title} /> : <Title text={title} />}
      <UserInfo user={firstPlayerInSecondTeam} stats={DUMMY_STATS} />
    </div>
  );
};
