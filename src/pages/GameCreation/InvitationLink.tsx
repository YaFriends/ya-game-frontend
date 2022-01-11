import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/ui/Button/Button';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Title } from '../../components/ui/Title/Title';
import { useAppSelector } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { currentTheme } from '../../store/slices/themeSlice';

export const InvitationLink: FC = () => {
  const history = useHistory();
  const [link, setLink] = useState('');
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  useEffect(() => {
    //TODO заменить заглушку на сгенерированную ссылку
    setLink('Тут должна быть ссылка-приглашение на игру');

    // Временный переход по тайм-ауту на игру
    setTimeout(() => {
      history.push('/game/234234');
    }, 2000);
  }, []);

  const copyLink = async () => {
    await navigator.clipboard.writeText(link);
  };

  return (
    <section>
      <Title text={TRANSLATION.InvitationLink.label} extendClass="mb-6" theme={currentTheme} />
      <Subtitle text={link} extendClass="mb-6" theme={currentTheme} />
      <Button type="button" text={TRANSLATION.InvitationLink.ButtonText} click={copyLink} />
    </section>
  );
};
