import React, { FC, useEffect, useMemo, useState } from 'react';

import { GameSetPick } from '../../components/GameSetPick/GameSetPick';
import { MiniGame } from '../../components/MiniGame/MiniGame';
import { MiniGamePreview } from '../../components/MiniGamePreview/MiniGamePreview';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Title } from '../../components/ui/Title/Title';
import GameSetCoordinator from '../../core/GameSetCoordinator';
import { useGameSetSession } from '../../hooks/use-game-set-session';
import { TRANSLATION } from '../../lang/ru/translation';
import { InvitationLink } from '../GameCreation/InvitationLink';

import './game-set.scss';

const GameSetLoading: FC = () => (
  <section className="game-set">
    <Subtitle text={TRANSLATION.Loading.label} />
  </section>
);

const GameSetLink: FC = () => (
  <section className="game-set">
    <InvitationLink />
  </section>
);

const GameSetRoundLoading: FC<{ miniGamePreviews: JSX.Element[] }> = ({ miniGamePreviews }) => (
  <section className="game-set">
    <Title text="Выбранные игры" extendClass="mb-6" />
    <div className="game-set__mini-games">{miniGamePreviews}</div>
    <Subtitle text={TRANSLATION.Loading.label} />
  </section>
);

export const GameSet: FC<Record<string, never>> = () => {
  const { rival, gameSet, isGameSetLoading, addMiniGames } = useGameSetSession();
  const [gameCoordinator, setGameCoordinator] = useState<GameSetCoordinator | null>(null);

  useEffect(() => {
    if (gameSet) {
      const miniGamesHadPicked = gameSet.miniGames.length === gameSet.totalGames;
      if (miniGamesHadPicked) {
        setGameCoordinator(new GameSetCoordinator(gameSet.miniGames, gameSet.players));
      }
    }
  }, [gameSet]);

  const miniGamePreviews = useMemo(
    () =>
      gameSet?.miniGames.map(({ id, name, icon }) => (
        <MiniGamePreview key={id} id={id} name={name} icon={icon} classes="game-set__mini-game" />
      )) || [],
    [gameSet]
  );

  if (isGameSetLoading || !gameSet) {
    return <GameSetLoading />;
  }

  if (!rival) {
    return <GameSetLink />;
  }

  if (gameSet.totalGames !== gameSet.miniGames.length) {
    return (
      <GameSetPick
        gameSet={gameSet}
        totalMiniGames={gameSet.totalGames}
        rival={rival}
        addMiniGames={addMiniGames}
      />
    );
  }

  if (!gameCoordinator) {
    return <GameSetRoundLoading miniGamePreviews={miniGamePreviews} />;
  }

  return (
    <section className="game-set">
      <MiniGame GameSetCoordinator={gameCoordinator} gameSet={gameSet} />
    </section>
  );
};
