import { UserData } from './UserTypes';
import { SubclassOfMiniGame } from '../core/constants';

export type MiniGameConfig = MiniGameInfo & {
  canvasId: string;
  players: Rivals;
};

export type MiniGameInfo = {
  icon: string;
  name: string;
};

export type MiniGamePickInfo = MiniGameInfo & {
  pick?: string;
  miniGame: SubclassOfMiniGame;
};

export type MiniGameFinishResponse = {
  winner: UserData;
};

export type Rivals = [UserData, UserData];

export type FinishFn = (finish: MiniGameFinishResponse) => void;
