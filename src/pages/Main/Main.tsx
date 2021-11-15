import React, { FC } from 'react';

import { MainLink } from '../../components/ui/Link/Link';
import { Title } from '../../components/ui/Title/Title';
import './Main.scss';
import { TRANSLATION } from '../../lang/ru/translation';

export const Main: FC<Record<string, never>> = () => {
  return (
    <section className="main">
      <Title text={TRANSLATION.Main.label} />
      <div className="main__link">
        <MainLink text={TRANSLATION.Main.linkToRegister} href="/register" />
        <MainLink text={TRANSLATION.Main.linkToLogin} href="/login" />
        <MainLink text={TRANSLATION.Main.linkToDashboard} href="/" />
      </div>
    </section>
  );
};
