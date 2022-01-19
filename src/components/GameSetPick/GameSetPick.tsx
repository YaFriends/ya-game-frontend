import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { GameSet } from '../../@types/GameSet';
import { MiniGamePickInfo } from '../../@types/MiniGame';
import { UserData } from '../../@types/UserTypes';
import { MINI_GAMES } from '../../core/constants';
import { useAuth } from '../../hooks/use-auth';
import { useGameSetSession, UseGameSetSession } from '../../hooks/use-game-set-session';
import { TRANSLATION } from '../../lang/ru/translation';
import { useUpdateGameSetMutation } from '../../services/GameSetAPI';
import { GameSetHead } from '../GameSetHead/GameSetHead';

import './game-set-pick.scss';

type GameSetPickProps = {
  gameSet: GameSet;
  rival: UserData;
  totalMiniGames: number;
  addMiniGames: UseGameSetSession['addMiniGames'];
};

export const GameSetPick: FC<GameSetPickProps> = ({
  gameSet,
  rival,
  totalMiniGames,
  addMiniGames,
}) => {
  const { currentUser } = useAuth();
  const { bannedByCurrentUser, bannedByRival } = useGameSetSession();
  const [miniGamesToPick, setMiniGamesToPick] = useState<MiniGamePickInfo[]>(MINI_GAMES);
  const [updateGameSet] = useUpdateGameSetMutation();
  const areGamesPicked = useMemo(
    () => gameSet?.miniGames.length === totalMiniGames,
    [gameSet, totalMiniGames]
  );

  const banGame = useCallback((game: MiniGamePickInfo) => {
    setMiniGamesToPick(miniGamesToPick.filter(({ id }) => id !== game.id));
    if (gameSet && currentUser) {
      updateGameSet({
        id: gameSet.id,
        bans: [...gameSet.bans, { ...game, banned_by: currentUser?.id }],
      });
    }
  }, [miniGamesToPick, gameSet, currentUser]);

  useEffect(() => {
    if (totalMiniGames >= MINI_GAMES.length && !areGamesPicked) {
      addMiniGames(MINI_GAMES);
    }
    if (miniGamesToPick.length === totalMiniGames && !areGamesPicked) {
      addMiniGames(miniGamesToPick);
    }
  }, [gameSet, miniGamesToPick, totalMiniGames, areGamesPicked]);

  const miniGames = useMemo(
    () =>
      miniGamesToPick.map(({ id, name, icon, pick_image, miniGame }, i) => (
        <div
          className="game-set-pick__game"
          key={i}
          onClick={() => banGame({ id, name, icon, pick_image, miniGame })}>
          <div className="game-set-pick__game-image">
            <img src={pick_image || icon} alt={name} />
          </div>
        </div>
      )),
    [miniGamesToPick]
  );

  const bannedGamesByCurrentUser = useMemo(
    () =>
      bannedByCurrentUser.map(({ name, icon }, i) => (
        <div className="game-set-pick__ban" key={i} title={name}>
          <img src={icon} alt={name} />
          <div className="game-set-pick__ban-title">{TRANSLATION.GameSetPick.ban}</div>
        </div>
      )),
    [bannedByCurrentUser]
  );

  const bannedGamesByRival = useMemo(
    () =>
      bannedByRival.map(({ name, icon }, i) => (
        <div className="game-set-pick__ban" key={i} title={name}>
          <img src={icon} alt={name} />
          <div className="game-set-pick__ban-title">{TRANSLATION.GameSetPick.ban}</div>
        </div>
      )),
    [bannedByRival]
  );

  return (
    <div className="game-set-pick">
      <GameSetHead rival={rival} title={TRANSLATION.GameSetPick.title} />
      <div className="game-set-pick__board">
        <div className="game-set-pick__board-bans">{bannedGamesByCurrentUser}</div>
        <div className="game-set-pick__board-games">{miniGames}</div>
        <div className="game-set-pick__board-bans">{bannedGamesByRival}</div>
      </div>
    </div>
  );
};
