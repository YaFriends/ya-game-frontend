import React, { FC } from 'react';

import { MainLink } from '../../components/ui/Link/Link';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Title } from '../../components/ui/Title/Title';
import './Error404.scss';
import { TRANSLATION } from '../../lang/ru/translation';

export const Error404: FC<Record<string, never>> = () => {
  return (
    <section className="error404">
      <Title text={TRANSLATION.Error404.label} extendClass="text-9xl" />
      <Subtitle text={TRANSLATION.Error404.subtitle} extendClass="text-2xl" />
      <div className="error404__link">
        <MainLink text={TRANSLATION.Error404.link} href="/" />
      </div>
    </section>
  );
};
