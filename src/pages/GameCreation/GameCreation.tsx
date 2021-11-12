import React, { FC, useState } from 'react';

import './GameCreation.scss';
import { Button } from '../../components/ui/Button/Button';
import { MainLink } from '../../components/ui/Link/Link';
import { Select, OptionProps, SelectedChangeType } from '../../components/ui/Select/Select';
import { Title } from '../../components/ui/Title/Title';
import { TRANSLATION } from '../../lang/ru/translation';

const numberOfGames: OptionProps[] = [
  { value: '1', label: '1' },
  { value: '2', label: '2', disabled: true },
  { value: '3', label: '3', disabled: true },
];

export const GameCreation: FC<Record<string, never>> = () => {
  const [gameCount, setGameCount] = useState<OptionProps>(numberOfGames[0]);

  const changeGameCount: SelectedChangeType = count => {
    setGameCount(count);
  };

  return (
    <section className="game-creation">
      <div className="game-creation__header">
        <MainLink text="Назад" href="/" />
        <Title text={TRANSLATION.GameCreation.CreateSession} />
      </div>
      <div className="game-creation__select">
        <Select
          label={TRANSLATION.GameCreation.SelectLabel}
          options={numberOfGames}
          selected={gameCount}
          onSelectedChange={changeGameCount}
          placeholder={TRANSLATION.GameCreation.SelectPlaceholder}
        />
      </div>
      <Button
        name="button-create-session"
        type="button"
        typeAction="success"
        text={TRANSLATION.GameCreation.ButtonText}
      />
    </section>
  );
};
