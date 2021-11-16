import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './Profile.scss';
import { DUMMY_USER } from '../MOCKS/Dashboard';

import { ChangePassword } from './settings/ChangePassword';
import { EditInfo } from './settings/EditInfo';
import { Settings } from './settings/Settings';

export const Profile: FC<Record<string, never>> = () => {
  const { path, url } = useRouteMatch();

  return (
    <section className="profile">
      <Switch>
        <Route path={path} exact>
          <Settings url={url} userInfo={DUMMY_USER} />
        </Route>
        <Route path={`${path}/edit`}>
          <EditInfo userInfo={DUMMY_USER} url={url} />
        </Route>
        <Route path={`${path}/password`}>
          <ChangePassword url={url} userInfo={DUMMY_USER} />
        </Route>
      </Switch>
    </section>
  );
};
