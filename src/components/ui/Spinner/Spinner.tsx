import React, { FC } from 'react';

import { Subtitle } from '../Subtitle/Subtitle';

import './Spinner.scss';

export const Spinner: FC<Record<string, never>> = () => {
  return (
    <section className="ui-spinner">
      <div className="loading">
        <div className="arc" />
        <div className="arc" />
        <div className="arc" />
      </div>
      <Subtitle text="Загружаем..." />
    </section>
  );
};
