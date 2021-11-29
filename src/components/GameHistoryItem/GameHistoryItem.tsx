import React, { memo } from 'react';

import { TRANSLATION } from '../../lang/ru/translation';
import { Text } from '../ui/Text/Text';
import { Team } from '../../@types/MiniGame';

import './game-history-item.scss';

export type Game = {
  id: number;
  name: string;
  icon: string;
};

export type ResultType = 'win' | 'lose';

export type GameHistoryProps = {
  id: number;
  games: Game[];
  date: string;
  teams: Team[];
  result: {
    id: number;
    type: ResultType;
  };
};

export const GameHistoryItem = memo(function GameHistoryItem({
  games,
  date,
  teams,
  result,
}: GameHistoryProps) {
  const gameGroup = games.map(({ id, name, icon }) => (
    <div key={id} className="game-history-item__info-round">
      <img src={icon} alt={name} />
    </div>
  ));

  const versus = teams.map(({ players }) => players.join(', ')).join(' vs ');

  return (
    <div className="game-history-item">
      <div className="game-history-item__info">
        <div className="game-history-item__info-item game-history-item__info-item--flexed">
          {gameGroup}
        </div>
        <div className="game-history-item__info-item">
          <Text text={`${TRANSLATION.Game.Date}: ${date}`} />
          <Text text={versus} />
        </div>
      </div>
      <Text
        extendClass={`game-history-item__result game-history-item__result--${result.type}`}
        text={TRANSLATION.GameResult[result.type]}
      />
    </div>
  );
});
