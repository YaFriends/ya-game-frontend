import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

import { Info } from './Info';
import { Password } from './Password';

type stepTypes = 'profile' | 'edit-profile' | 'password';

export const Profile: FC<Record<string, never>> = () => {
  const [step, setStep] = useState<stepTypes>('profile');

  const { path, url } = useRouteMatch();

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <section>
      <Router>
        <div>
          тут аватарка и тд
          <button onClick={() => setStep('edit-profile')}>поменять на изменяемую область</button>
          <Link to={`${url}/password`}>Изменить пароль</Link>
        </div>
        <Switch>
          <Route path={`${path}`} exact>
            <Info disabled={true} />
          </Route>
          <Route path={`${path}/edit-profile`}>
            <Info disabled={true} />
          </Route>
          <Route path={`${path}/password`} exact>
            <Password />
          </Route>
        </Switch>
      </Router>
    </section>
  );
};
