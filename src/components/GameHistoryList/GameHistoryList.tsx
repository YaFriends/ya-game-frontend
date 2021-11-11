import React, { FC, ReactNode } from 'react';

import { TRANSLATION } from '../../lang/ru/translation';
import { GameHistoryItem, GameHistoryProps } from '../GameHistoryItem/GameHistoryItem';
import { Title } from '../ui/Title/Title';

import './game-history-list.scss';

export type GameHistoryListProps = {
  link: ReactNode;
  items: GameHistoryProps[];
};

export const GameHistoryList: FC<GameHistoryListProps> = ({ items, link }) => {
  const gameHistoryItems = items.map(item => <GameHistoryItem key={item.id} {...item} />);

  return (
    <div className="game-history-list">
      <div className="game-history-list__head">
        {link}
        <Title text={TRANSLATION.Dashboard.LastGames} />
      </div>
      <div className="game-history-list__body">
        <div className="game-history-list__body-inner">{gameHistoryItems}</div>
      </div>
    </div>
  );
};
