import React, { FC, useEffect, useState } from 'react';

import { Button } from '../../components/ui/Button/Button';
import { Title } from '../../components/ui/Title/Title';
import { TRANSLATION } from '../../lang/ru/translation';

export const InvitationLink: FC = () => {
  const [link, setLink] = useState('');

  useEffect(() => {
    //TODO заменить заглушку на сгенерированную ссылку
    setLink('some-link');
  }, []);

  const copyLink = async () => {
    await navigator.clipboard.writeText(link);
  };

  return (
    <>
      <Title text={TRANSLATION.InvitationLink.label} extendClass="mb-6" />
      <div className="mb-14 text-center">{link}</div>
      <Button type="button" text={TRANSLATION.InvitationLink.ButtonText} click={copyLink} />
    </>
  );
};
