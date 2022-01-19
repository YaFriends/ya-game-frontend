import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { Button } from '../../components/ui/Button/Button';
import { Subtitle } from '../../components/ui/Subtitle/Subtitle';
import { Text } from '../../components/ui/Text/Text';
import { Title } from '../../components/ui/Title/Title';
import { useGameSetSession } from '../../hooks/use-game-set-session';
import { TRANSLATION } from '../../lang/ru/translation';

export const InvitationLink: FC = () => {
  const { gameSet } = useGameSetSession();
  const { rival } = useGameSetSession();

  if (rival && gameSet?.link) {
    return <Redirect to={`/game/${gameSet.link}`} />;
  }

  const copyLink = async () => {
    if (gameSet?.link) {
      await navigator.clipboard.writeText(gameSet.link);
    }
  };

  return (
    <section>
      <Title text={TRANSLATION.InvitationLink.label} extendClass="mb-6" />
      <Subtitle text={gameSet?.link || TRANSLATION.InvitationLink.defaultLink} extendClass="mb-6" />
      <Text text={TRANSLATION.InvitationLink.awaiting} extendClass="mb-10" />
      <Button type="button" text={TRANSLATION.InvitationLink.ButtonText} click={copyLink} />
    </section>
  );
};
