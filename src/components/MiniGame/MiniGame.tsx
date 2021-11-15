import React, { FC } from 'react';

import GameSetCoordinator from '../../core/GameSetCoordinator';
import { DUMMY_STATS } from '../../pages/MOCKS/ProfileHistory';
import { useAppSelector } from '../../store/hooks';
import { MiniGamePreview } from '../MiniGamePreview/MiniGamePreview';
import { Profile } from '../Profile/Profile';
import { Title } from '../ui/Title/Title';

import './mini-game.scss';

type GameSetProps = {
  GameSetCoordinator: GameSetCoordinator;
};

export const MiniGame: FC<GameSetProps> = ({ GameSetCoordinator }) => {
  const { gameSet } = useAppSelector(({ gameSet }) => gameSet);
  const miniGamePreviews = gameSet?.miniGames.map(({ id, name, icon }) => (
    <MiniGamePreview key={id} id={id} name={name} icon={icon} classes="mini-game__top-preview" />
  ));
  console.log(GameSetCoordinator);
  return (
    <div className="mini-game">
      {gameSet && GameSetCoordinator && (
        <>
          <div className="mini-game__top">
            <Profile user={gameSet.teams[0].players[0]} stats={DUMMY_STATS} />
            <div className="mini-game__top-previews">{miniGamePreviews}</div>
            <Profile user={gameSet.teams[1].players[0]} stats={DUMMY_STATS} />
          </div>
          <div className="mini-game__body">
            <Title extendClass="mb-6" text={GameSetCoordinator.currentMiniGame.name} />
            <div className="mini-game__canvas" id="canvas" />
          </div>
        </>
      )}
    </div>
  );
};
