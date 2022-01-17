import { MiniGameFinishResponse, Rivals } from './MiniGame';
import { UserData } from './UserTypes';

export type GameSet = {
  id: number;
  date: string;
  players: Rivals;
  totalGames: number;
  miniGames: MiniGame[];
  bans: BannedMiniGame[];
};

export type MiniGame = {
  id: number;
  name: string;
  icon: string;
  pick_image?: string;
};

export type BannedMiniGame = MiniGame & { banned_by: UserData['id'] };

export type ResultType = 'win' | 'lose';

export type GameSetResult = {
  id: number;
  type: ResultType;
};

export type GameSetHistory = GameSet & { result: GameSetResult };

export type GameSetFinishFn = (finish: MiniGameFinishResponse) => void;

export type GameSetFinishResponse = { winner: UserData };

export type GameSetFinishStat = {
  [key: UserData['id']]: number;
};

export type MiniGamePreviewsProps = {
  miniGames: MiniGame[];
  className: string;
};
