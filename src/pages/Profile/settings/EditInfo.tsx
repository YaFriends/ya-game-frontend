import React, { FC } from 'react';

import { SettingsProps } from '../../../@types/ProfileTypes';
import { Button } from '../../../components/ui/Button/Button';
import { MainLink } from '../../../components/ui/Link/Link';
import { TRANSLATION } from '../../../lang/ru/translation';
import { InformationForm } from '../InformationForm';
import { UserThumbnail } from '../UserThumbnail';

const { LinkToBack, SaveButton } = TRANSLATION.Profile;

export const EditInfo: FC<SettingsProps> = ({ url, userInfo }) => {
  return (
    <div className="profile">
      <div className="profile__menu">
        <UserThumbnail avatar={userInfo?.avatar} login={userInfo?.login} />
        <Button
          form="profileEdit"
          type="submit"
          text={SaveButton}
          typeAction="success"
          extendClass="mb-4"
        />
        <MainLink text={LinkToBack} href={`${url}`} />
      </div>
      <div className="profile__inputs">
        <InformationForm userInfo={userInfo} />
      </div>
    </div>
  );
};
