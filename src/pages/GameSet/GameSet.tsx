import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { MiniGame } from '../../components/MiniGame/MiniGame';
import { MiniGamePreview } from '../../components/MiniGamePreview/MiniGamePreview';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Title } from '../../components/ui/Title/Title';
import { GameSetController } from '../../controllers/GameSetController';
import GameSetCoordinator from '../../core/GameSetCoordinator';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { setGameSet } from '../../store/slices/GameSetSlice';

import './game-set.scss';

type PageParams = {
  id?: string;
};

export const GameSet: FC<Record<string, never>> = () => {
  const { id: setId }: PageParams = useParams();

  const dispatch = useAppDispatch();
  const { gameSet } = useAppSelector(({ gameSet }) => gameSet);
  useEffect(() => {
    GameSetController.loadSession(Number(setId)).then(gameSetResponse => {
      dispatch(setGameSet(gameSetResponse));
    });
  }, [setId]);

  const [gameCoordinator, setGameCoordinator] = useState<GameSetCoordinator | null>(null);

  useEffect(() => {
    if (gameSet) {
      setTimeout(() => {
        setGameCoordinator(new GameSetCoordinator(gameSet.miniGames, gameSet.teams));
      }, 3000);
    }
  }, [gameSet]);

  const miniGamePreviews = gameSet?.miniGames.map(({ id, name, icon }) => (
    <MiniGamePreview key={id} id={id} name={name} icon={icon} classes="game-set__mini-game" />
  ));

  if (!gameSet) {
    return (
      <section className="game-set">
        <Subtitle text="Загрузка..." />
      </section>
    );
  }

  if (!gameCoordinator) {
    return (
      <section className="game-set">
        <Title text="Выбранные игры" extendClass="mb-6" />
        <div className="game-set__mini-games">{miniGamePreviews}</div>
        <Subtitle text="Загрузка..." />
      </section>
    );
  }

  return (
    <section className="game-set">
      <MiniGame GameSetCoordinator={gameCoordinator} gameSet={gameSet} />
    </section>
  );
};
