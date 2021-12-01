import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { Spinner } from '../../components/ui/Spinner/Spinner';
import { useAuth } from '../../hooks/use-auth';

import { ChangePassword } from './settings/ChangePassword';
import { EditInfo } from './settings/EditInfo';
import { Settings } from './settings/Settings';
import './Profile.scss';

export const Profile: FC<Record<string, never>> = () => {
  const { path, url } = useRouteMatch();
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Spinner />;
  }

  return (
    <Switch>
      <Route path={path} exact>
        <Settings url={url} userInfo={currentUser} />
      </Route>
      <Route path={`${path}/edit`} exact>
        <EditInfo url={url} userInfo={currentUser} />
      </Route>
      <Route path={`${path}/password`} exact>
        <ChangePassword url={url} userInfo={currentUser} />
      </Route>
    </Switch>
  );
};
