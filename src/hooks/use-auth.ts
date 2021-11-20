import { UserData } from '../api/UserAPI';

import { useAppSelector } from './redux-hooks';

interface UseAuth {
  isAuth: boolean;
  currentUser: UserData | null;
}

export const useAuth = (): UseAuth => {
  const currentUser: UserData | null = useAppSelector(state => state.auth.currentUser);
  const isAuth =
    Boolean(currentUser) || typeof window !== 'undefined'
      ? localStorage.getItem('isAuth') === 'true'
      : false;

  if (typeof window !== 'undefined') {
    localStorage.setItem('isAuth', String(isAuth));
  }

  return {
    isAuth,
    currentUser,
  };
};
