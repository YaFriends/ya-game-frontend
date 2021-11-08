import React, { FC } from 'react';

import { Title } from '../../components/ui/Title/Title';

import './Leaderboard.scss';

export const Leaderboard: FC<Record<string, never>> = () => {
  return (
    <section className="leaderboard">
      <Title text="Таблица лидеров" />
      <div className="leaderboard__table-wrapper">
        <Title text="Тут будет таблица с результатами" theme="dark" />
      </div>
    </section>
  );
};
