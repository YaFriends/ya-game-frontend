import { UseAuth, CurrentUser } from '../@types/AuthTypes';

import { useAppSelector } from './redux';

export const useAuth = (): UseAuth => {
  const currentUser: CurrentUser = useAppSelector(state => state.auth.currentUser);
  const isAuth =
    Boolean(currentUser) ||
    (typeof window !== 'undefined' && localStorage.getItem('isAuth') === 'true');

  if (typeof window !== 'undefined') {
    localStorage.setItem('isAuth', String(isAuth));
  }

  return {
    isAuth,
    currentUser,
  };
};
