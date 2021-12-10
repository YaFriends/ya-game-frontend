import { UseAuth, CurrentUser } from '../@types/AuthTypes';

import { useAppSelector } from './redux';

export const useAuth = (): UseAuth => {
  const currentUser: CurrentUser = useAppSelector(state => state.auth.currentUser);
  const isAuth = Boolean(currentUser);

  return {
    isAuth,
    currentUser,
  };
};
