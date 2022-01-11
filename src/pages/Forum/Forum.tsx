import React, { FC } from 'react';

import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Title } from '../../components/ui/Title/Title';
import './Forum.scss';
import { useAppSelector } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { currentTheme } from '../../store/slices/themeSlice';

export const Forum: FC<Record<string, never>> = () => {
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  return (
    <section className="main">
      <Title text={TRANSLATION.Forum.label} theme={currentTheme} />
      <Subtitle text={TRANSLATION.Forum.subtitle} theme={currentTheme} />
    </section>
  );
};
