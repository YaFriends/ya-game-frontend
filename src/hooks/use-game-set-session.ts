import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { CurrentUser } from '../@types/AuthTypes';
import { GameSet, MiniGame } from '../@types/GameSet';
import { UserData } from '../@types/UserTypes';
import { useFetchSessionQuery, useUpdateGameSetMutation } from '../services/GameSetAPI';

import { useAppSelector } from './redux';

export type UseGameSetSession = {
  currentUser: UserData | null;
  rival: UserData | null;
  gameSet: GameSet | null;
  isGameSetLoading: boolean;
  bannedByCurrentUser: MiniGame[];
  bannedByRival: MiniGame[];
  addMiniGame: (miniGame: MiniGame) => void;
  addMiniGames: (miniGames: MiniGame[]) => void;
};

type PageParams = {
  id: string;
};

export const useGameSetSession = (): UseGameSetSession => {
  const { id: setId }: PageParams = useParams();
  const [updateGameSet] = useUpdateGameSetMutation();
  const { data: gameSet = null, isLoading } = useFetchSessionQuery(setId);
  const [bannedByCurrentUser, setBannedByCurrentUser] = useState<MiniGame[]>([]);
  const [bannedByRival, setBannedByRival] = useState<MiniGame[]>([]);
  const currentUser: CurrentUser = useAppSelector(({ auth }) => auth.currentUser);

  // todo: получать из сокета
  const [rival, setRival] = useState<CurrentUser>(null);

  const addMiniGames = (miniGames: MiniGame[]) => {
    if (gameSet) {
      updateGameSet({ id: gameSet.id, miniGames: [...gameSet.miniGames, ...miniGames] });
    }
  };

  const addMiniGame = (miniGame: MiniGame) => {
    addMiniGames([miniGame]);
  };

  useEffect(() => {
    if (gameSet) {
      const _bannedByCurrentUser = gameSet.bans.filter(
        ({ banned_by }) => banned_by === currentUser?.id
      );
      const _bannedByRival = gameSet.bans.filter(({ banned_by }) => banned_by !== currentUser?.id);

      setBannedByCurrentUser(_bannedByCurrentUser);
      setBannedByRival(_bannedByRival);
    }
  }, [gameSet]);

  // todo: уйдет, когда будет получение из сокета
  useEffect(() => {
    const t = setTimeout(() => {
      setRival(currentUser);
    }, 2000);

    return () => clearTimeout(t);
  }, []);

  return {
    currentUser,
    rival,
    gameSet,
    isGameSetLoading: isLoading,
    bannedByCurrentUser,
    bannedByRival,
    addMiniGame,
    addMiniGames,
  };
};
