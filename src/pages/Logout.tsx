import React, { FC } from 'react';
import { useHistory } from 'react-router';

import { AuthController } from '../controllers/AuthController';
import { useAppDispatch } from '../hooks/redux-hooks';
import { authActions } from '../store/slices/authSlice';

export const Logout: FC<Record<string, never>> = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  AuthController.logout().then(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isAuth', 'false');
    }

    dispatch(authActions.setCurrentUser(null));
    history.push('/login');
  });

  return <section className="logout">Logout...</section>;
};
