import React, { memo } from 'react';

import { TRANSLATION } from '../../lang/ru/translation';
import { MiniGamePreview, MiniGamePreviewProps } from '../MiniGamePreview/MiniGamePreview';
import { Text } from '../ui/Text/Text';
import { Title } from '../ui/Title/Title';

import './game-set-loading.scss';

type GameSetLoadingProps = {
  miniGames: MiniGamePreviewProps[];
};

export const GameSetLoading = memo(function GameSetLoading({ miniGames }: GameSetLoadingProps) {
  const { ChosenGames, ChosenGame, label } = TRANSLATION.Loading;
  const title = miniGames.length > 1 ? ChosenGames : ChosenGame;
  const miniGameGroup = miniGames.map(({ id, name, icon }) => (
    <MiniGamePreview
      key={id}
      id={id}
      name={name}
      icon={icon}
      classes="game-set-loading__mini-game"
    />
  ));

  return (
    <div className="game-set-loading">
      <div className="game-set-loading__head">
        <Title text={title} />
        {miniGameGroup}
      </div>
      <Text text={label} />
    </div>
  );
});
