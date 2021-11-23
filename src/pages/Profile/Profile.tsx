import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './Profile.scss';
import { UserData } from '../../api/UserAPI';
import { useAuth } from '../../hooks/use-auth';

import { ChangePassword } from './settings/ChangePassword';
import { EditInfo } from './settings/EditInfo';
import { Settings } from './settings/Settings';

export const Profile: FC<Record<string, never>> = () => {
  const { path, url } = useRouteMatch();
  const { currentUser } = useAuth();

  return (
    <Switch>
      <Route path={path} exact>
        <Settings url={url} userInfo={currentUser as UserData} />
      </Route>
      <Route path={`${path}/edit`}>
        <EditInfo userInfo={currentUser as UserData} url={url} />
      </Route>
      <Route path={`${path}/password`}>
        <ChangePassword url={url} userInfo={currentUser as UserData} />
      </Route>
    </Switch>
  );
};
