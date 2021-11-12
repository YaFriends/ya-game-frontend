import React, { FC, ReactNode } from 'react';

import { TRANSLATION } from '../../lang/ru/translation';
import { GameSetHistoryItem, GameSetHistoryProps } from '../GameSetHistoryItem/GameSetHistoryItem';
import { Title } from '../ui/Title/Title';

import './game-set-history-list.scss';

export type GameSetHistoryListProps = {
  link: ReactNode;
  items: GameSetHistoryProps[];
};

export const GameSetHistoryList: FC<GameSetHistoryListProps> = ({ items, link }) => {
  const gameSetHistoryItems = items.map(item => <GameSetHistoryItem key={item.id} {...item} />);

  return (
    <div className="game-set-history-list">
      <div className="game-set-history-list__head">
        {link}
        <Title text={TRANSLATION.Dashboard.LastGames} />
      </div>
      <div className="game-set-history-list__body">
        <div className="game-set-history-list__body-inner">{gameSetHistoryItems}</div>
      </div>
    </div>
  );
};
