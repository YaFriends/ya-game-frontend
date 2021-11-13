import React, { memo } from 'react';

import { TRANSLATION } from '../../lang/ru/translation';
import { Text } from '../ui/Text/Text';

import './game-set-history-item.scss';

export type MiniGame = {
  id: number;
  name: string;
  icon: string;
};

export type Team = {
  players: string[];
};

export type ResultType = 'win' | 'lose';

export type GameSetHistoryItemProps = {
  id: number;
  miniGames: MiniGame[];
  date: string;
  teams: Team[];
  result: {
    id: number;
    type: ResultType;
  };
};

export const GameSetHistoryItem = memo(function GameSetHistoryItem({
  miniGames,
  date,
  teams,
  result,
}: GameSetHistoryItemProps) {
  const miniGameGroup = miniGames.map(({ id, name, icon }) => (
    <div key={id} className="game-set-history-item__info-round">
      <img src={icon} alt={name} />
    </div>
  ));

  const versus = teams.map(({ players }) => players.join(', ')).join(' vs ');

  return (
    <div className="game-set-history-item">
      <div className="game-set-history-item__info">
        <div className="game-set-history-item__info-item game-set-history-item__info-item--flexed">
          {miniGameGroup}
        </div>
        <div className="game-set-history-item__info-item">
          <Text text={`${TRANSLATION.Game.Date}: ${date}`} />
          <Text text={versus} />
        </div>
      </div>
      <Text
        extendClass={`game-set-history-item__result game-set-history-item__result--${result.type}`}
        text={TRANSLATION.GameResult[result.type]}
      />
    </div>
  );
});
