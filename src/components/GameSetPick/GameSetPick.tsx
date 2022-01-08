import React, { FC, useState } from 'react';

import { GameSet } from '../../@types/GameSet';
import { MiniGamePickInfo } from '../../@types/MiniGame';
import { MINI_GAMES } from '../../core/constants';
import { useGameSetSession } from '../../hooks/use-game-set-session';
import { TRANSLATION } from '../../lang/ru/translation';
import { GameSetHead } from '../GameSetHead/GameSetHead';

import './game-set-pick.scss';

export type GameSetPickProps = {
  gameSet: GameSet;
};

export const GameSetPick: FC<Record<string, never>> = () => {
  const { rival } = useGameSetSession();
  const gamesToChoose = 1;

  if (gamesToChoose === MINI_GAMES.length) {
    console.log('total equal count');
  }

  const [bannedByCurrentUser, setBannerByCurrentUser] = useState<MiniGamePickInfo[]>([]);

  const [bannedByRival, setBannerByRival] = useState<MiniGamePickInfo[]>([]);

  const banGame = (game: MiniGamePickInfo) => {
    if (true) {
      setBannerByCurrentUser([...bannedByCurrentUser, game]);
    } else {
      setBannerByRival([...bannedByRival, game]);
    }
  };

  const miniGames = MINI_GAMES.filter(game => {
    return (
      !bannedByCurrentUser.some(({ name }) => name === game.name) &&
      !bannedByRival.some(({ name }) => name === game.name)
    );
  }).map(({ name, icon, pick, miniGame }, i) => (
    <div
      className="game-set-pick__game"
      key={i}
      onClick={() => banGame({ name, icon, pick, miniGame })}>
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
