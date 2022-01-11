import React, { FC } from 'react';

import { MainLink } from '../../components/ui/Link/Link';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Title } from '../../components/ui/Title/Title';
import './Error404.scss';
import { useAppSelector } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { currentTheme } from '../../store/slices/themeSlice';

export const Error404: FC<Record<string, never>> = () => {
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  return (
    <section className="error404">
      <Title text={TRANSLATION.Error404.label} extendClass="text-9xl" theme={currentTheme} />
      <Subtitle text={TRANSLATION.Error404.subtitle} extendClass="text-2xl" theme={currentTheme} />
      <div className="error404__link">
        <MainLink text={TRANSLATION.Error404.link} href="/" theme={currentTheme} />
      </div>
    </section>
  );
};
