import React, { FC, ReactNode } from 'react';

import { GameSetHistory } from '../../@types/GameSet';
import { useAppSelector } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { currentTheme } from '../../store/slices/themeSlice';
import { GameSetHistoryItem } from '../GameSetHistoryItem/GameSetHistoryItem';
import { Title } from '../ui/Title/Title';

import './game-set-history-list.scss';

export type GameSetHistoryListProps = {
  link: ReactNode;
  items: GameSetHistory[];
};

export const GameSetHistoryList: FC<GameSetHistoryListProps> = ({ items, link }) => {
  const gameSetHistoryItems = items.map(item => <GameSetHistoryItem key={item.id} {...item} />);
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  return (
    <div className="game-set-history-list">
      <div className="game-set-history-list__head">
        {link}
        <Title text={TRANSLATION.Dashboard.LastGames} theme={currentTheme} />
      </div>
      <div className="game-set-history-list__body">
        <div className="game-set-history-list__body-inner">{gameSetHistoryItems}</div>
      </div>
    </div>
  );
};
