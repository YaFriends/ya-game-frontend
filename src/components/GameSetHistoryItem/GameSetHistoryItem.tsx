import React, { memo } from 'react';

import { GameSetHistory } from '../../@types/GameSet';
import { useAppSelector } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { currentTheme } from '../../store/slices/themeSlice';
import { getRivals } from '../../utils/game';
import { MiniGamePreview } from '../MiniGamePreview/MiniGamePreview';
import { Text } from '../ui/Text/Text';

import './game-set-history-item.scss';

type Props = GameSetHistory;

export const GameSetHistoryItem = memo(function GameSetHistoryItem({
  miniGames,
  date,
  players,
  result,
}: Props) {
  const miniGameGroup = miniGames.map(({ id, name, icon }) => (
    <MiniGamePreview
      key={id}
      id={id}
      name={name}
      icon={icon}
      classes="game-set-history-item__info-round"
    />
  ));

  const rivals = getRivals(players);
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  return (
    <div className="game-set-history-item">
      <div className="game-set-history-item__info">
        <div className="game-set-history-item__info-item game-set-history-item__info-item--flexed">
          {miniGameGroup}
        </div>
        <div className="game-set-history-item__info-item">
          <Text text={`${TRANSLATION.Game.Date}: ${date}`} theme={currentTheme} />
          <Text text={rivals} theme={currentTheme} />
        </div>
      </div>
      <Text
        extendClass={`game-set-history-item__result game-set-history-item__result--${result.type}`}
        text={TRANSLATION.GameResult[result.type]}
        theme={currentTheme}
      />
    </div>
  );
});
