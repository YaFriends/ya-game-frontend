import React, { FC, useState } from 'react';
import { Redirect } from 'react-router-dom';

import './GameCreation.scss';

import { Button } from '../../components/ui/Button/Button';
import { MainLink } from '../../components/ui/Link/Link';
import { Select, OptionProps, SelectedChangeType } from '../../components/ui/Select/Select';
import { Title } from '../../components/ui/Title/Title';
import { MINI_GAMES } from '../../core/constants';
import { TRANSLATION } from '../../lang/ru/translation';
import { useGenerateLinkQuery } from '../../services/GameSetAPI';

const numberOfGames: OptionProps[] = [
  { value: 1, label: '1', disabled: MINI_GAMES.length < 1 },
  { value: 3, label: '3', disabled: MINI_GAMES.length < 3 },
  { value: 5, label: '5', disabled: MINI_GAMES.length < 5 },
];

export const GameCreation: FC<Record<string, never>> = () => {
  const [skip, setSkip] = useState<boolean>(true);
  const [totalMiniGames, setTotalMiniGames] = useState<number>(0);
  const { data: gameSet } = useGenerateLinkQuery(totalMiniGames, { skip });
  const selected = numberOfGames.find(({ value }) => value === totalMiniGames);
  const changeGameCount: SelectedChangeType = ({ value }: OptionProps) => setTotalMiniGames(value);

  const onButtonClick = () => {
    setSkip(false);
  };

  if (gameSet?.link) {
    return <Redirect to={`/game/${gameSet.link}`} />;
  }

  return (
    <section className="game-creation">
      <div className="game-creation__header">
        <MainLink text={TRANSLATION.GameCreation.BackLink} href="/" />
        <Title text={TRANSLATION.GameCreation.CreateSession} />
      </div>
      <div className="game-creation__select">
        <Select
          label={TRANSLATION.GameCreation.SelectLabel}
          options={numberOfGames}
          selected={selected}
          onSelectedChange={changeGameCount}
          placeholder={TRANSLATION.GameCreation.SelectPlaceholder}
        />
      </div>
      <Button
        type="button"
        text={TRANSLATION.GameCreation.ButtonText}
        typeAction="success"
        click={onButtonClick}
      />
    </section>
  );
};
