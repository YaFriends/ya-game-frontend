import { cloneDeep } from 'lodash';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { CurrentUser } from '../@types/AuthTypes';
import { GameSet, MiniGame } from '../@types/GameSet';
import { UserData } from '../@types/UserTypes';
import { useFetchSessionQuery } from '../services/GameSetAPI';

import { useAppSelector } from './redux';

export type UseGameSetSession = {
  currentUser: UserData | null;
  rival: UserData | null;
  gameSet: GameSet | null;
  isGameSetLoading: boolean;
  totalMiniGames: number;
  setTotalMiniGames: Dispatch<SetStateAction<number>>;
  addMiniGame: (miniGame: MiniGame) => void;
  addMiniGames: (miniGames: MiniGame[]) => void;
};

type PageParams = {
  id: string;
};

export const useGameSetSession = (): UseGameSetSession => {
  const [totalMiniGames, setTotalMiniGames] = useState<number>(1);
  const { id: setId }: PageParams = useParams();
  const { data: gameSet = null, isLoading } = useFetchSessionQuery(setId);
  const [localGameSet, setLocalGameSet] = useState<GameSet | null>(cloneDeep(gameSet));
  const currentUser: CurrentUser = useAppSelector(({ auth }) => auth.currentUser);
  // todo: get from socket
  const [rival, setRival] = useState<CurrentUser>(null);

  // todo: send it to server cause of possible disconnect
  const addMiniGame = (miniGame: MiniGame) => {
    if (localGameSet) {
      const newSet = cloneDeep(localGameSet);
      newSet.miniGames = [...newSet.miniGames, miniGame];

      setLocalGameSet(newSet);
    }
  };
  // todo: send it to server cause of possible disconnect
  const addMiniGames = (miniGames: MiniGame[]) => {
    if (localGameSet) {
      const newSet = cloneDeep(localGameSet);
      newSet.miniGames = [...newSet.miniGames, ...miniGames];
      setLocalGameSet(newSet);
    }
  };

  useEffect(() => {
    setLocalGameSet(gameSet);
  }, [gameSet]);

  useEffect(() => {
    const t = setTimeout(() => {
      setRival(currentUser);
    }, 3000);

    return () => clearTimeout(t);
  }, []);

  return {
    currentUser,
    rival,
    gameSet: localGameSet,
    isGameSetLoading: isLoading,
    totalMiniGames,
    setTotalMiniGames,
    addMiniGame,
    addMiniGames,
  };
};
