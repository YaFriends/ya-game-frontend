import React, { FC, useEffect, useState } from 'react';

import { GameSet } from '../../@types/GameSet';
import { MiniGamePickInfo } from '../../@types/MiniGame';
import { UserData } from '../../@types/UserTypes';
import { MINI_GAMES } from '../../core/constants';
import { UseGameSetSession } from '../../hooks/use-game-set-session';
import { TRANSLATION } from '../../lang/ru/translation';
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
  const [miniGamesToPick, setMiniGamesToPick] = useState<MiniGamePickInfo[]>(MINI_GAMES);
  const [bannedByCurrentUser, setBannerByCurrentUser] = useState<MiniGamePickInfo[]>([]);
  const [bannedByRival, setBannerByRival] = useState<MiniGamePickInfo[]>([]);
  const areGamesPicked = gameSet?.miniGames.length === totalMiniGames;

  const banGame = (game: MiniGamePickInfo) => {
    setMiniGamesToPick(miniGamesToPick.filter(({ id }) => id !== game.id));

    //todo: пка нет сокета, приходится так
    if (true) {
      setBannerByCurrentUser([...bannedByCurrentUser, game]);
    } else {
      setBannerByRival([...bannedByRival, game]);
    }
  };

  useEffect(() => {
    if (totalMiniGames >= MINI_GAMES.length && !areGamesPicked) {
      addMiniGames(MINI_GAMES);
    }

    if (miniGamesToPick.length === totalMiniGames && !areGamesPicked) {
      addMiniGames(miniGamesToPick);
    }
  }, [gameSet, miniGamesToPick, totalMiniGames, areGamesPicked]);

  const miniGames = miniGamesToPick.map(({ id, name, icon, pick, miniGame }, i) => (
    <div
      className="game-set-pick__game"
      key={i}
      onClick={() => banGame({ id, name, icon, pick, miniGame })}>
      <div className="game-set-pick__game-image">
        <img src={pick || icon} alt={name} />
      </div>
    </div>
  ));

  const bannedGamesByCurrentUser = bannedByCurrentUser.map(({ name, icon }, i) => (
    <div className="game-set-pick__ban" key={i} title={name}>
      <img src={icon} alt={name} />
      <div className="game-set-pick__ban-title">{TRANSLATION.GameSetPick.ban}</div>
    </div>
  ));

  const bannedGamesByRival = bannedByRival.map(({ name, icon }, i) => (
    <div className="game-set-pick__ban" key={i} title={name}>
      <img src={icon} alt={name} />
      <div className="game-set-pick__ban-title">{TRANSLATION.GameSetPick.ban}</div>
    </div>
  ));

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
