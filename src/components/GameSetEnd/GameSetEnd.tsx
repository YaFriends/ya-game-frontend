import React, { memo } from 'react';

import { MiniGame } from '../../@types/GameSet';
import { UserData } from '../../@types/UserTypes';
import { useAuth } from '../../hooks/use-auth';
import { TRANSLATION } from '../../lang/ru/translation';
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

  return (
    <div className="game-set-end">
      <Title
        extendClass="mb-6"
        text={isCurrentUserWinner ? TRANSLATION.GameSetEnd.you : TRANSLATION.GameSetEnd.notYou}
      />
      <Subtitle extendClass="mb-2" text={TRANSLATION.GameSetEnd.winner} />
      <p className="game-set-end__winner">{getUserFullName(winner, true)}</p>
      <Subtitle extendClass="mb-2" text={TRANSLATION.GameSetEnd.played} />
      <div className="game-set-end__mini-games">{miniGamePreviews}</div>
      <div className="game-set-end__links">
        <MainLink
          extendClass="ui-link--button ui-link--button-success"
          href="/"
          text={TRANSLATION.GameSetEnd.backToMain}
        />
        <MainLink
          extendClass="ui-link--button"
          href="/game/create"
          text={TRANSLATION.GameSetEnd.playAgain}
        />
      </div>
    </div>
  );
});
