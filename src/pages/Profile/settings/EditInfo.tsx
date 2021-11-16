import React, { FC } from 'react';

import { UserData } from '../../../api/UserAPI';
import { Button } from '../../../components/ui/Button/Button';
import { MainLink } from '../../../components/ui/Link/Link';
import { TRANSLATION } from '../../../lang/ru/translation';
import { InformationForm } from '../InformationForm';
import { UserThumbnail } from '../UserThumbnail';

const { LinkToBack, SaveButton } = TRANSLATION.Profile;

interface EditProps {
  userInfo: UserData;
  url: string;
}

export const EditInfo: FC<EditProps> = ({ url, userInfo }) => {
  return (
    <>
      <div className="profile__menu">
        <UserThumbnail avatar={userInfo.avatar} login={userInfo.login} />
        <Button
          form="profile-edit"
          type="submit"
          text={SaveButton}
          typeAction="success"
          extendClass="mb-4"
        />
        <MainLink text={LinkToBack} href={`${url}`} />
      </div>
      <div className="profile__inputs">
        <InformationForm disabled={false} userInfo={userInfo} />
      </div>
    </>
  );
};
