import React, { FC } from 'react';

import { UserData } from '../../api/UserAPI';
import { TRANSLATION } from '../../lang/ru/translation';
import { DEFAULT_PROFILE_IMAGE_PATH } from '../constants';

import './profile.scss';

type ProfileProps = {
  reversed?: boolean;
  user: UserData;
  stats: {
    wins: number;
  };
};

export const Profile: FC<ProfileProps> = ({ user, stats, reversed }) => {
  return (
    <div className="profile">
      <div className={reversed ? 'profile__line profile__line--reversed' : 'profile__line'}>
        <div className="profile__line-item">
          <div className="profile__avatar">
            <img src={user.avatar || DEFAULT_PROFILE_IMAGE_PATH} alt={user.login} />
          </div>
        </div>
        <div className="profile__line-item">
          <p className="profile__login">{user.login}</p>
          <p className="profile__win-stat">
            {TRANSLATION.Game.Wins}: {stats.wins}
          </p>
        </div>
      </div>
    </div>
  );
};
