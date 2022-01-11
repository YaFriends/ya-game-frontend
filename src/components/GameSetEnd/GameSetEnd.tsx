import React, { memo } from 'react';

import { MiniGame } from '../../@types/GameSet';
import { UserData } from '../../@types/UserTypes';
import { useAppSelector } from '../../hooks/redux';
import { useAuth } from '../../hooks/use-auth';
import { TRANSLATION } from '../../lang/ru/translation';
import { currentTheme } from '../../store/slices/themeSlice';
import { getUserFullName } from '../../utils/user';
import { MiniGamePreview } from '../MiniGamePreview/MiniGamePreview';
import { MainLink } from '../ui/Link/Link';
import { Subtitle } from '../ui/Subtitle/Subtitle';
import { Title } from '../ui/Title/Title';

import './game-set-end.scss';

type GameSetEndProps = {
  winner: UserData;
  miniGames: MiniGame[];
};

export const GameSetEnd = memo(function GameSetEnd({ winner, miniGames }: GameSetEndProps) {
  const { currentUser } = useAuth();
  const isCurrentUserWinner = currentUser?.id === winner.id;
  const miniGamePreviews = miniGames.map(({ id, name, icon }) => (
    <MiniGamePreview key={id} id={id} name={name} icon={icon} classes="game-set-end__mini-game" />
  ));
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  return (
    <div className="game-set-end">
      <Title
        extendClass="mb-6"
        text={isCurrentUserWinner ? TRANSLATION.GameSetEnd.you : TRANSLATION.GameSetEnd.notYou}
        theme={currentTheme}
      />
      <Subtitle extendClass="mb-2" text={TRANSLATION.GameSetEnd.winner} theme={currentTheme} />
      <p className="game-set-end__winner">{getUserFullName(winner, true)}</p>
      <Subtitle extendClass="mb-2" text={TRANSLATION.GameSetEnd.played} theme={currentTheme} />
      <div className="game-set-end__mini-games">{miniGamePreviews}</div>
      <div className="game-set-end__links">
        <MainLink
          extendClass="ui-link--button ui-link--button-success"
          href="/"
          text={TRANSLATION.GameSetEnd.backToMain}
          theme={currentTheme}
        />
        <MainLink
          extendClass="ui-link--button"
          href="/game/create"
          text={TRANSLATION.GameSetEnd.playAgain}
          theme={currentTheme}
        />
      </div>
    </div>
  );
});
