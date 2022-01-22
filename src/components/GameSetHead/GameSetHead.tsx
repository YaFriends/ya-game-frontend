import React, { FC } from 'react';

import { MiniGame } from '../../@types/GameSet';
import { UserData } from '../../@types/UserTypes';
import { useAuth } from '../../hooks/use-auth';
import { DUMMY_STATS } from '../../pages/MOCKS/ProfileHistory';
import { MiniGamePreviews } from '../MiniGamePreviews/MiniGamePreviews';
import { UserInfo } from '../UserInfo/UserInfo';
import { Title } from '../ui/Title/Title';

import './game-set-head.scss';

type GameSetHeadProps = {
  title?: string;
  miniGames?: MiniGame[];
  rival: UserData | null;
};

export const GameSetHead: FC<GameSetHeadProps> = ({ title, miniGames, rival }) => {
  const { currentUser } = useAuth();
  let gameInfo;
  if (miniGames) {
    gameInfo = <MiniGamePreviews miniGames={miniGames} className="mini-game__top-preview" />;
  } else if (title) {
    gameInfo = <Title text={title} />;
  }
  if (currentUser) {
    return (
      <div className="game-set-head">
        <UserInfo user={currentUser} stats={DUMMY_STATS} />
        {gameInfo}
        {rival && <UserInfo user={rival} stats={DUMMY_STATS} />}
      </div>
    );
  }

  return <div className="game-set-top" />;
};
