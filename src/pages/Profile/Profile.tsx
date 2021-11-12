import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import { MainLink } from '../../components/ui/Link/Link';

import { Info } from './Info';
import { Password } from './Password';

export const Profile: FC<Record<string, never>> = () => {
  const { path, url } = useRouteMatch();

  return (
    <Router>
      <section className="flex">
        <div>
          тут аватарка и тд
          <MainLink
            text="Изменить данные"
            href={`${url}/info`}
            extendClass="ui-link--button mb-6"
          />
          <MainLink text="Изменить пароль" href={`${url}/password`} extendClass="ui-link--button" />
          <MainLink text="Назад" href="/" />
        </div>
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
      </section>
    </Router>
  );
};
