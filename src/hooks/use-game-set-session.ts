import { CurrentUser } from '../@types/AuthTypes';
import { UserData } from '../@types/UserTypes';

import { useAppSelector } from './redux';

type UseGameSetSession = {
  currentUser: UserData | null;
  rival: UserData | null;
};

export const useGameSetSession = (): UseGameSetSession => {
  const currentUser: CurrentUser = useAppSelector(({ auth }) => auth.currentUser);

  return { currentUser, rival: currentUser };
};
