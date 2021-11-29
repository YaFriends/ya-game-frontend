import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { UserData } from '../../@types/UserTypes';
import { useAuth } from '../../hooks/use-auth';

import { ChangePassword } from './settings/ChangePassword';
import { EditInfo } from './settings/EditInfo';
import { Settings } from './settings/Settings';
import './Profile.scss';

export const Profile: FC<Record<string, never>> = () => {
  const { path, url } = useRouteMatch();
  const { currentUser } = useAuth();

  return (
    currentUser && (
      <Switch>
        <Route path={path} exact>
          <Settings url={url} userInfo={currentUser as UserData} />
        </Route>
        <Route path={`${path}/edit`}>
          <EditInfo url={url} userInfo={currentUser as UserData} />
        </Route>
        <Route path={`${path}/password`}>
          <ChangePassword url={url} userInfo={currentUser as UserData} />
        </Route>
      </Switch>
    )
  );
};
