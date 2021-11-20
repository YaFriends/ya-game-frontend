import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';

interface PrivateRouteProps {
  path: string;
  exact?: boolean;
  component: FC;
  redirect?: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  path,
  exact = false,
  component,
  redirect = '/login',
}) => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to={redirect} />
  );
};
