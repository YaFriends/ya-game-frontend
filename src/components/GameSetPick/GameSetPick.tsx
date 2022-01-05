import React, { FC } from 'react';

import { GameSet } from '../../@types/GameSet';
import { UserData } from '../../@types/UserTypes';
import { MINI_GAMES } from '../../core/constants';
import { TRANSLATION } from '../../lang/ru/translation';
import { GameSetHead } from '../GameSetHead/GameSetHead';

import './game-set-pick.scss';
import { PICK_CHOOSES } from './constants';

export type GameSetPickProps = {
  gameSet: GameSet;
};

export const GameSetPick: FC<Record<string, never>> = () => {
  const rival: UserData = {
    login: 'Player 2',
    id: 2,
    first_name: 'Test',
    second_name: 'test 1',
    display_name: 'Testovich',
    email: 'string',
    phone: 'string',
    avatar: '',
  };

  const miniGames = MINI_GAMES.map(({ name, icon, pick }, i) => (
    <div className="game-set-pick__game" key={i}>
      <div className="game-set-pick__game-image">
        <img src={pick || icon} alt={name} />
      </div>
    </div>
  ));

  const chooses = PICK_CHOOSES.map(({ type, icon }, i) => (
    <div className="game-set-pick__choose" key={i}>
      <img src={icon} alt={type} />
    </div>
  ));

  return (
    <div className="game-set-pick">
      <GameSetHead rival={rival} title={TRANSLATION.GameSetPick.title} />
      <div className="game-set-pick__board">
        <div className="game-set-pick__board-chooses">{chooses}</div>
        <div className="game-set-pick__board-games">{miniGames}</div>
        <div className="game-set-pick__board-chooses">{chooses}</div>
      </div>
    </div>
  );
};
