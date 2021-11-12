import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { MainLink } from '../../components/ui/Link/Link';

import { Info } from './Info';
import { Password } from './Password';

export const Profile: FC<Record<string, never>> = () => {
  const { path, url } = useRouteMatch();
  return (
    <section className="flex justify-center space-x-16">
      <div className="w-1/6 flex flex-col items-center justify-center">
        тут аватарка и тд
        <button form="profile-password">тык</button>
        <MainLink text="Изменить данные" href={`${url}/info`} extendClass="ui-link--button mb-6" />
        <MainLink text="Изменить пароль" href={`${url}/password`} extendClass="ui-link--button" />
        <MainLink text="Назад" href="/" />
      </div>
      <div className="w-1/3">
        <Switch>
          <Route path={path} exact>
            <Info disabled={true} />
          </Route>
          <Route path={`${path}/info`}>
            <Info disabled={false} />
          </Route>
          <Route path={`${path}/password`}>
            <Password />
          </Route>
        </Switch>
      </div>
    </section>
  );
};
