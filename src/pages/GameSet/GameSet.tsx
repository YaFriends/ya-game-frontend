import React, { FC, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';

import { MiniGame } from '../../components/MiniGame/MiniGame';
import { MiniGamePreview } from '../../components/MiniGamePreview/MiniGamePreview';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Title } from '../../components/ui/Title/Title';
import GameSetCoordinator from '../../core/GameSetCoordinator';
import { TRANSLATION } from '../../lang/ru/translation';
import { useFetchSessionQuery } from '../../services/GameSetAPI';

import './game-set.scss';

type PageParams = {
  id: string;
};

export const GameSet: FC<Record<string, never>> = () => {
  const { id: setId }: PageParams = useParams();
  const { data: gameSet = null, isLoading } = useFetchSessionQuery(setId);
  const [gameCoordinator, setGameCoordinator] = useState<GameSetCoordinator | null>(null);

  useEffect(() => {
    if (gameSet) {
      setTimeout(() => {
        setGameCoordinator(new GameSetCoordinator(gameSet.miniGames, gameSet.teams));
      }, 100);
    }
  }, [gameSet]);

  const miniGamePreviews = useMemo(
    () =>
      gameSet?.miniGames.map(({ id, name, icon }) => (
        <MiniGamePreview key={id} id={id} name={name} icon={icon} classes="game-set__mini-game" />
      )),
    [gameSet]
  );

  if (isLoading || !gameSet) {
    return (
      <section className="game-set">
        <Subtitle text={TRANSLATION.Loading.label} />
      </section>
    );
  }

  if (!gameCoordinator) {
    return (
      <section className="game-set">
        <Title text="Выбранные игры" extendClass="mb-6" />
        <div className="game-set__mini-games">{miniGamePreviews}</div>
        <Subtitle text={TRANSLATION.Loading.label} />
      </section>
    );
  }

  return (
    <section className="game-set">
      <MiniGame GameSetCoordinator={gameCoordinator} gameSet={gameSet} />
    </section>
  );
};
