import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './Profile.scss';
import { DUMMY_USER } from '../MOCKS/Dashboard';

import { ChangePassword } from './settings/ChangePassword';
import { Main } from './settings/Main';
import { ModifyData } from './settings/ModifyData';

export const Profile: FC<Record<string, never>> = () => {
  const { path, url } = useRouteMatch();

  return (
    <section className="profile">
      <Switch>
        <Route path={path} exact>
          <Main url={url} userInfo={DUMMY_USER} />
        </Route>
        <Route path={`${path}/edit`}>
          <ModifyData userInfo={DUMMY_USER} url={url} />
        </Route>
        <Route path={`${path}/password`}>
          <ChangePassword url={url} userInfo={DUMMY_USER} />
        </Route>
      </Switch>
    </section>
  );
};
