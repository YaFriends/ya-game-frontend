import { UserData } from '../api/UserAPI';

import { useAppSelector } from './redux-hooks';

interface UseAuth {
  isAuth: boolean;
  currentUser: UserData | null;
}

export const useAuth = (): UseAuth => {
  const currentUser: UserData | null = useAppSelector(state => state.auth.currentUser);
  const isAuth = !!currentUser?.id || localStorage.getItem('isAuth') === 'true';

  localStorage.setItem('isAuth', String(isAuth));

  return {
    isAuth,
    currentUser,
  };
};
