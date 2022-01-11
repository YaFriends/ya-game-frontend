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

export const GameSet: FC<Record<string, never>> = () => {
  const { rival, gameSet, isGameSetLoading, totalMiniGames, addMiniGames } = useGameSetSession();
  const [gameCoordinator, setGameCoordinator] = useState<GameSetCoordinator | null>(null);
  useEffect(() => {
    if (gameSet) {
      const miniGamesHadPicked = gameSet.miniGames.length === totalMiniGames;
      if (miniGamesHadPicked) {
        setGameCoordinator(new GameSetCoordinator(gameSet.miniGames, gameSet.players));
      }
    }
  }, [gameSet]);

  const miniGamePreviews = useMemo(
    () =>
      gameSet?.miniGames.map(({ id, name, icon }) => (
        <MiniGamePreview key={id} id={id} name={name} icon={icon} classes="game-set__mini-game" />
      )),
    [gameSet]
  );

  if (isGameSetLoading || !gameSet) {
    return (
      <section className="game-set">
        <Subtitle text={TRANSLATION.Loading.label} />
      </section>
    );
  }

  if (!rival) {
    return (
      <section className="game-set">
        <InvitationLink />
      </section>
    );
  }
  if (totalMiniGames !== gameSet.miniGames.length) {
    return (
      <GameSetPick
        gameSet={gameSet}
        totalMiniGames={totalMiniGames}
        rival={rival}
        addMiniGames={addMiniGames}
      />
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
