import { MiniGameFinishResponse, Rivals } from './MiniGame';
import { UserData } from './UserTypes';

export type GameSet = {
  id: number;
  miniGames: MiniGame[];
  date: string;
  players: Rivals;
};

export type MiniGame = {
  id: number;
  name: string;
  icon: string;
};

export type ResultType = 'win' | 'lose';

export type GameSetResult = {
  id: number;
  type: ResultType;
};

export type GameSetHistory = GameSet & { result: GameSetResult };

export type GameSetFinishFn = (finish: MiniGameFinishResponse) => void;

export type GameSetFinishResponse = { winner: UserData };

export type GameSetFinishStat = {
  [key: number]: number;
};
