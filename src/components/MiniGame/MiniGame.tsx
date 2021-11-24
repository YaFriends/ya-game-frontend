import React, { FC, useEffect } from 'react';

import { GameSet } from '../../@types/GameSet';
import GameSetCoordinator from '../../core/GameSetCoordinator';
import { DUMMY_STATS } from '../../pages/MOCKS/ProfileHistory';
import { MiniGamePreview } from '../MiniGamePreview/MiniGamePreview';
import { Profile } from '../Profile/Profile';
import { Title } from '../ui/Title/Title';

import './mini-game.scss';

type GameSetProps = {
  GameSetCoordinator: GameSetCoordinator;
  gameSet: GameSet;
};

export const MiniGame: FC<GameSetProps> = ({ GameSetCoordinator, gameSet }) => {
  const miniGamePreviews = gameSet?.miniGames.map(({ id, name, icon }) => (
    <MiniGamePreview key={id} id={id} name={name} icon={icon} classes="mini-game__top-preview" />
  ));

  useEffect(() => {
    GameSetCoordinator.waitForEndOfCurrentGame().then(() => {
      console.log('ended');
    });
  }, [gameSet]);

  return (
    <div className="mini-game">
      <div className="mini-game__top">
        <Profile user={gameSet.teams[0].players[0]} stats={DUMMY_STATS} />
        <div className="mini-game__top-previews">{miniGamePreviews}</div>
        <Profile user={gameSet.teams[1].players[0]} stats={DUMMY_STATS} />
      </div>
      <div className="mini-game__body">
        <Title extendClass="mb-6" text={GameSetCoordinator.currentMiniGame.name} />
        <canvas className="mini-game__canvas" id="canvas" />
      </div>
    </div>
  );
};