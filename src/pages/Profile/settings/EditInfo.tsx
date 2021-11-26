import React, { FC } from 'react';

import { UserData } from '../../../@types/UserTypes';
import { DEFAULT_PROFILE_IMAGE_PATH } from '../../../components/constants';
import { Button } from '../../../components/ui/Button/Button';
import { MainLink } from '../../../components/ui/Link/Link';
import { TRANSLATION } from '../../../lang/ru/translation';
import { InformationForm } from '../InformationForm';
import { UserThumbnail } from '../UserThumbnail';

const { LinkToBack, SaveButton } = TRANSLATION.Profile;

interface EditProps {
  url: string;
  userInfo: UserData;
}

export const EditInfo: FC<EditProps> = ({ url, userInfo }) => {
  return (
    <div className="profile">
      <div className="profile__menu">
        <UserThumbnail
          avatar={userInfo?.avatar || DEFAULT_PROFILE_IMAGE_PATH}
          login={userInfo?.login}
        />
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
