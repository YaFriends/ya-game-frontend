import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router';

import { useLogoutMutation } from '../hooks/api';
import { useAppDispatch } from '../hooks/redux';
import { authActions } from '../store/slices/authSlice';

export const Logout: FC<Record<string, never>> = () => {
  const [attemptLogout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    attemptLogout().then(() => {
      dispatch(authActions.setCurrentUser(null));

      if (typeof window !== 'undefined') {
        localStorage.removeItem('isAuth');
      }

      history.push('/login');
    });
  }, []);

  return <section className="logout">Logout...</section>;
};
