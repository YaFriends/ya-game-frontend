import React, { FC } from 'react';

import { UserData } from '../../@types/UserTypes';
import { TRANSLATION } from '../../lang/ru/translation';
import { DEFAULT_PROFILE_IMAGE_PATH } from '../constants';
import { Text } from '../ui/Text/Text';

import './UserInfo.scss';

type ProfileProps = {
  reversed?: boolean;
  user: UserData;
  stats: {
    wins: number;
  };
};

export const UserInfo: FC<ProfileProps> = ({ user, stats, reversed }) => {
  return (
    <div className="user-info">
      <div className={reversed ? 'user-info__line user-info__line--reversed' : 'user-info__line'}>
        <div className="user-info__line-item">
          <div className="user-info__avatar">
            <img
              src={
                user.avatar
                  ? `https://ya-praktikum.tech/api/v2/resources${user.avatar}`
                  : DEFAULT_PROFILE_IMAGE_PATH
              }
              alt={user.login}
            />
          </div>
        </div>
        <div className="user-info__line-item">
          <Text extendClass="user-info__login" text={user.login} />
          <Text
            extendClass="user-info__win-stat"
            text={`${TRANSLATION.Game.Wins}: ${stats.wins}`}
          />
        </div>
      </div>
    </div>
  );
};
