import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './Profile.scss';

import { Button } from '../../components/ui/Button/Button';
import { MainLink } from '../../components/ui/Link/Link';
import { TRANSLATION } from '../../lang/ru/translation';
import { DUMMY_USER } from '../MOCKS/Dashboard';

import { Info } from './Info';
import { Password } from './Password';
import { UserThumbnail } from './UserThumbnail';

const { LinkToBack, LinkToChangeInfo, SaveButton, LinkToChangePassword } = TRANSLATION.Profile;

export const Profile: FC<Record<string, never>> = () => {
  const { path, url } = useRouteMatch();

  const { avatar, ...userInfo } = DUMMY_USER;

  const saveButton = (formId: string) => {
    return (
      <Button
        form={formId}
        type="submit"
        text={SaveButton}
        typeAction="success"
        extendClass="mb-4"
      />
    );
  };

  return (
    <section className="profile">
      <Switch>
        <Route path={path} exact>
          <div className="profile__menu">
            <UserThumbnail avatar={avatar} login={userInfo.login} />
            <MainLink
              text={LinkToChangeInfo}
              href={`${url}/edit`}
              extendClass="ui-link--button mb-6"
            />
            <MainLink
              text={LinkToChangePassword}
              href={`${url}/password`}
              extendClass="ui-link--button mb-4"
            />
            <MainLink text={LinkToBack} href="/" />
          </div>
          <div className="profile__inputs">
            <Info disabled={true} userInfo={userInfo} />
          </div>
        </Route>
        <Route path={`${path}/edit`}>
          <div className="profile__menu">
            <UserThumbnail avatar={avatar} login={userInfo.login} />
            {saveButton('profile-edit')}
            <MainLink text={LinkToBack} href={`${url}`} />
          </div>
          <div className="profile__inputs">
            <Info disabled={false} userInfo={userInfo} />
          </div>
        </Route>
        <Route path={`${path}/password`}>
          <div className="profile__menu">
            <UserThumbnail avatar={avatar} login={userInfo.login} />
            {saveButton('profile-password')}
            <MainLink text={LinkToBack} href={`${url}`} />
          </div>
          <div className="profile__inputs">
            <Password />
          </div>
        </Route>
      </Switch>
    </section>
  );
};
