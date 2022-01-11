import React, { memo } from 'react';

import { Rivals } from '../../@types/MiniGame';
import { useAppSelector } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { currentTheme } from '../../store/slices/themeSlice';
import { getRivals } from '../../utils/game';
import { Text } from '../ui/Text/Text';

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
  players: Rivals;
  result: {
    id: number;
    type: ResultType;
  };
};

export const GameHistoryItem = memo(function GameHistoryItem({
  games,
  date,
  players,
  result,
}: GameHistoryProps) {
  const gameGroup = games.map(({ id, name, icon }) => (
    <div key={id} className="game-history-item__info-round">
      <img src={icon} alt={name} />
    </div>
  ));

  const rivals = getRivals(players);
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  return (
    <div className="game-history-item">
      <div className="game-history-item__info">
        <div className="game-history-item__info-item game-history-item__info-item--flexed">
          {gameGroup}
        </div>
        <div className="game-history-item__info-item">
          <Text text={`${TRANSLATION.Game.Date}: ${date}`} theme={currentTheme} />
          <Text text={rivals} theme={currentTheme} />
        </div>
      </div>
      <Text
        extendClass={`game-history-item__result game-history-item__result--${result.type}`}
        text={TRANSLATION.GameResult[result.type]}
        theme={currentTheme}
      />
    </div>
  );
});
