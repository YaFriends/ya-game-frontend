import { UserData } from './UserTypes';

export type MiniGameConfig = {
  icon: string;
  name: string;
  canvasId: string;
  players: Rivals;
};

export type MiniGameFinishResponse = {
  winner: UserData;
};

export type Rivals = [UserData, UserData];

export type FinishFn = (finish: MiniGameFinishResponse) => void;
