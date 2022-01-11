import React, { FC, useEffect, useState } from 'react';

import { GameSet } from '../../@types/GameSet';
import { UserData } from '../../@types/UserTypes';
import GameSetCoordinator from '../../core/GameSetCoordinator';
import { GameSetEnd } from '../GameSetEnd/GameSetEnd';
import { GameSetHead } from '../GameSetHead/GameSetHead';
import { Title } from '../ui/Title/Title';

import './mini-game.scss';

type GameSetProps = {
  GameSetCoordinator: GameSetCoordinator;
  gameSet: GameSet;
};

const canvasId = 'canvas';

export const MiniGame: FC<GameSetProps> = ({ GameSetCoordinator, gameSet }) => {
  const [winner, setWinner] = useState<UserData | null>(null);

  useEffect(() => {
    GameSetCoordinator.init().then(({ winner }) => {
      setWinner(winner);
    });
  }, [gameSet]);

  if (winner) {
    return <GameSetEnd winner={winner} miniGames={gameSet.miniGames} />;
  }

  return (
    <div className="mini-game">
      <GameSetHead rival={gameSet.players[1]} miniGames={gameSet.miniGames} />
      <div className="mini-game__body">
        <Title extendClass="mb-6" text={GameSetCoordinator.currentMiniGame.name} />
        <div className="mini-game__canvas">
          <canvas className="mini-game__canvas-inner" id={canvasId} width={500} height={500} />
        </div>
      </div>
    </div>
  );
};
