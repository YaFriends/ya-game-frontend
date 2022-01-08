import { MiniGameFinishResponse, Rivals } from './MiniGame';
import { UserData } from './UserTypes';

export type GameSet = {
  id: number;
  date: string;
  players: Rivals;
};

export type GameSetInGame = GameSet & {
  miniGames: MiniGame[];
};

export type MiniGame = {
  id: number;
  name: string;
  icon: string;
  pick?: string;
};

export type ResultType = 'win' | 'lose';

export type GameSetResult = {
  id: number;
  type: ResultType;
};

export type GameSetHistory = GameSetInGame & { result: GameSetResult };

export type GameSetFinishFn = (finish: MiniGameFinishResponse) => void;

export type GameSetFinishResponse = { winner: UserData };

export type GameSetFinishStat = {
  [key: UserData['id']]: number;
};
