import React, { FC } from 'react';

import { SettingsProps } from '../../../@types/ProfileTypes';
import { DEFAULT_PROFILE_IMAGE_PATH } from '../../../components/constants';
import { MainLink } from '../../../components/ui/Link/Link';
import { TRANSLATION } from '../../../lang/ru/translation';
import { InformationForm } from '../InformationForm';
import { UserThumbnail } from '../UserThumbnail';

const { LinkToBack, LinkToChangeInfo, LinkToChangePassword } = TRANSLATION.Profile;

export const Settings: FC<SettingsProps> = ({ url, userInfo }) => {
  return (
    <div className="profile">
      <div className="profile__menu">
        <UserThumbnail
          avatar={userInfo?.avatar || DEFAULT_PROFILE_IMAGE_PATH}
          login={userInfo?.login}
        />
        <MainLink text={LinkToChangeInfo} href={`${url}/edit`} extendClass="ui-link--button mb-6" />
        <MainLink
          text={LinkToChangePassword}
          href={`${url}/password`}
          extendClass="ui-link--button mb-4"
        />
        <MainLink text={LinkToBack} href="/" />
      </div>
      <div className="profile__inputs">
        <InformationForm disabled userInfo={userInfo} />
      </div>
    </div>
  );
};
