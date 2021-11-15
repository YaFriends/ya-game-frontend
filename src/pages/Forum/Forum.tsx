import React, { FC } from 'react';

import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Title } from '../../components/ui/Title/Title';
import './Main.scss';
import { TRANSLATION } from '../../lang/ru/translation';

export const Forum: FC<Record<string, never>> = () => {
  return (
    <section className="main">
      <Title text={TRANSLATION.Forum.label} />
      <Subtitle text={TRANSLATION.Forum.subtitle} />
    </section>
  );
};
