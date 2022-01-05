import React, { FC } from 'react';

import { MiniGame } from '../../@types/GameSet';
import { UserData } from '../../@types/UserTypes';
import { useAuth } from '../../hooks/use-auth';
import { DUMMY_STATS } from '../../pages/MOCKS/ProfileHistory';
import { MiniGamePreview } from '../MiniGamePreview/MiniGamePreview';
import { UserInfo } from '../UserInfo/UserInfo';
import { Title } from '../ui/Title/Title';

import './game-set-head.scss';

type GameSetHeadProps = {
  title?: string;
  miniGames?: MiniGame[];
  rival: UserData;
};

export const GameSetHead: FC<GameSetHeadProps> = ({ title, miniGames, rival }) => {
  const { currentUser } = useAuth();
  let gameInfo;
  if (miniGames) {
    gameInfo = miniGames.map(({ id, name, icon }) => (
      <MiniGamePreview key={id} id={id} name={name} icon={icon} classes="mini-game__top-preview" />
    ));
  } else if (title) {
    gameInfo = <Title text={title} />;
  }
  if (currentUser) {
    return (
      <div className="game-set-head">
        <UserInfo user={currentUser} stats={DUMMY_STATS} />
        {gameInfo}
        <UserInfo user={rival} stats={DUMMY_STATS} />
      </div>
    );
  }

  return <div className="game-set-top"></div>;
};
