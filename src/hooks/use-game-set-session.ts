import { useEffect, useState } from 'react';

import { CurrentUser } from '../@types/AuthTypes';
import { UserData } from '../@types/UserTypes';

import { useAppSelector } from './redux';

type UseGameSetSession = {
  currentUser: UserData | null;
  rival: UserData | null;
};

export const useGameSetSession = (): UseGameSetSession => {
  const currentUser: CurrentUser = useAppSelector(({ auth }) => auth.currentUser);
  // todo: get from socket
  const [rival, setRival] = useState<CurrentUser>(null);
  useEffect(() => {
    const t = setTimeout(() => {
      setRival(currentUser);
    }, 5000);

    return () => clearTimeout(t);
  }, []);
  return { currentUser, rival };
};
