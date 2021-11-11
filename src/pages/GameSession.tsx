import React, { FC, useState } from 'react';

import { Select, SelectedChangeType, OptionProps } from '../components/ui/Select/Select';

const numberOfGames: OptionProps[] = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
];

export const GameSession: FC<Record<string, never>> = () => {
  const [gameCount, setGameCount] = useState<OptionProps>(numberOfGames[0]);

  const changeGameCount: SelectedChangeType = count => {
    setGameCount(count);
  };

  return (
    <section>
      <Select
        label="Количество игр"
        options={numberOfGames}
        selected={gameCount}
        onSelectedChange={changeGameCount}
        defaultValue="Выбрать количество игр"
      />
    </section>
  );
};
