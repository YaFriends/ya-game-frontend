import React, { FC } from 'react';

import { DEFAULT_PROFILE_IMAGE_PATH } from '../../components/constants';
import './Profile.scss';

interface AvatarWithLoginProps {
  avatar?: string;
  login: string;
}

export const UserThumbnail: FC<AvatarWithLoginProps> = ({ avatar, login }) => {
  return (
    <div className="user-thumbnail">
      <div className="user-thumbnail__avatar">
        <img
          className="user-thumbnail__image"
          src={avatar || DEFAULT_PROFILE_IMAGE_PATH}
          alt={login}
        />
      </div>
      <div className="user-thumbnail__login">{login}</div>
    </div>
  );
};
