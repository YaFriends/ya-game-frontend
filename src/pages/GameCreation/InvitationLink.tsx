import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { Button } from '../../components/ui/Button/Button';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Text } from '../../components/ui/Text/Text';
import { Title } from '../../components/ui/Title/Title';
import { useGameSetSession } from '../../hooks/use-game-set-session';
import { TRANSLATION } from '../../lang/ru/translation';
import { useGenerateLinkQuery } from '../../services/GameSetAPI';

export const InvitationLink: FC = () => {
  const { data: link } = useGenerateLinkQuery(null);
  const { rival } = useGameSetSession();

  if (rival && link) {
    return <Redirect to={`/game/${link}`} />;
  }

  const copyLink = async () => {
    if (link) {
      await navigator.clipboard.writeText(link);
    }
  };

  return (
    <section>
      <Title text={TRANSLATION.InvitationLink.label} extendClass="mb-6" />
      <Subtitle text={link || TRANSLATION.InvitationLink.defaultLink} extendClass="mb-6" />
      <Text text={TRANSLATION.InvitationLink.awaiting} extendClass="mb-10" />
      <Button type="button" text={TRANSLATION.InvitationLink.ButtonText} click={copyLink} />
    </section>
  );
};
