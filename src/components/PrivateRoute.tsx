import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';
import { useFetchUserQuery } from '../services/AuthAPI';

import { Spinner } from './ui/Spinner/Spinner';

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
  const { isError } = useFetchUserQuery();
  const { isAuth } = useAuth();

  if (isError) {
    return <Redirect to={redirect} />;
  }

  if (isAuth) {
    return <Route exact={exact} path={path} component={component} />;
  }

  return <Spinner />;
};
