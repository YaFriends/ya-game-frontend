import React, { FC } from 'react';

import { SettingsProps } from '../../../@types/ProfileTypes';
import { DEFAULT_PROFILE_IMAGE_PATH } from '../../../components/constants';
import { Button } from '../../../components/ui/Button/Button';
import { MainLink } from '../../../components/ui/Link/Link';
import { useAppSelector } from '../../../hooks/redux';
import { TRANSLATION } from '../../../lang/ru/translation';
import { currentTheme } from '../../../store/slices/themeSlice';
import { PasswordForm } from '../PasswordForm';
import { UserThumbnail } from '../UserThumbnail';

const { LinkToBack, SaveButton } = TRANSLATION.Profile;

export const ChangePassword: FC<SettingsProps> = ({ url, userInfo }) => {
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

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
        <MainLink text={LinkToBack} href={`${url}`} theme={currentTheme} />
      </div>
      <div className="profile__inputs">
        <PasswordForm />
      </div>
    </div>
  );
};
