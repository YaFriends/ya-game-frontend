import React, { FC } from 'react';

import { TRANSLATION } from '../../lang/ru/translation';
import { GameHistoryItem, GameHistoryProps } from '../GameHistoryItem/GameHistoryItem';
import { Title } from '../ui/Title/Title';

import './game-history-list.scss';

export type LeaderboardListProps = {
  link: JSX.Element;
  items: GameHistoryProps[];
};

export const GameHistoryList: FC<LeaderboardListProps> = ({ items, link }) => {
  return (
    <div className="game-history-list">
      <div className="game-history-list__head">
        {link}
        <Title text={TRANSLATION.Dashboard.LastGames} />
      </div>
      <div className="game-history-list__body">
        <div className="game-history-list__body-inner">
          {items.map(item => (
            <GameHistoryItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
