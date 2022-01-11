import React, { FC, useEffect, useState } from 'react';

import { GameSet } from '../../@types/GameSet';
import { UserData } from '../../@types/UserTypes';
import GameSetCoordinator from '../../core/GameSetCoordinator';
import { useAppSelector } from '../../hooks/redux';
import { DUMMY_STATS } from '../../pages/MOCKS/ProfileHistory';
import { currentTheme } from '../../store/slices/themeSlice';
import { GameSetEnd } from '../GameSetEnd/GameSetEnd';
import { MiniGamePreview } from '../MiniGamePreview/MiniGamePreview';
import { UserInfo } from '../UserInfo/UserInfo';
import { Title } from '../ui/Title/Title';

import './mini-game.scss';

type GameSetProps = {
  GameSetCoordinator: GameSetCoordinator;
  gameSet: GameSet;
};

const canvasId = 'canvas';

export const MiniGame: FC<GameSetProps> = ({ GameSetCoordinator, gameSet }) => {
  const [winner, setWinner] = useState<UserData | null>(null);
  const miniGamePreviews = gameSet.miniGames.map(({ id, name, icon }) => (
    <MiniGamePreview key={id} id={id} name={name} icon={icon} classes="mini-game__top-preview" />
  ));
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  useEffect(() => {
    GameSetCoordinator.init().then(({ winner }) => {
      setWinner(winner);
    });
  }, [gameSet]);

  const firstPlayerInFirstTeam = gameSet.players[0];
  const firstPlayerInSecondTeam = gameSet.players[1];

  if (winner) {
    return <GameSetEnd winner={winner} miniGames={gameSet.miniGames} />;
  }

  return (
    <div className="mini-game">
      <div className="mini-game__top">
        <UserInfo user={firstPlayerInFirstTeam} stats={DUMMY_STATS} />
        <div className="mini-game__top-previews">{miniGamePreviews}</div>
        <UserInfo user={firstPlayerInSecondTeam} stats={DUMMY_STATS} />
      </div>
      <div className="mini-game__body">
        <Title
          extendClass="mb-6"
          text={GameSetCoordinator.currentMiniGame.name}
          theme={currentTheme}
        />
        <div className="mini-game__canvas">
          <canvas className="mini-game__canvas-inner" id={canvasId} width={500} height={500} />
        </div>
      </div>
    </div>
  );
};
