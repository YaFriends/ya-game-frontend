import React, { FC } from 'react';

import { UserData } from '../../../api/UserAPI';
import { DEFAULT_PROFILE_IMAGE_PATH } from '../../../components/constants';
import { Button } from '../../../components/ui/Button/Button';
import { MainLink } from '../../../components/ui/Link/Link';
import { TRANSLATION } from '../../../lang/ru/translation';
import { PasswordForm } from '../PasswordForm';
import { UserThumbnail } from '../UserThumbnail';

const { LinkToBack, SaveButton } = TRANSLATION.Profile;

interface PasswordPageProps {
  userInfo: UserData;
  url: string;
}

export const ChangePassword: FC<PasswordPageProps> = ({ url, userInfo }) => {
  return (
    <div className="profile">
      <div className="profile__menu">
        <UserThumbnail
          avatar={userInfo?.avatar || DEFAULT_PROFILE_IMAGE_PATH}
          login={userInfo?.login}
        />
        <Button
          form="profilePassword"
          type="submit"
          text={SaveButton}
          typeAction="success"
          extendClass="mb-4"
        />
        <MainLink text={LinkToBack} href={`${url}`} />
      </div>
      <div className="profile__inputs">
        <PasswordForm />
      </div>
    </div>
  );
};
