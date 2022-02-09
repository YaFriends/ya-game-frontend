import { SubclassOfMiniGame } from '../core/constants';

import { UserData } from './UserTypes';

export type MiniGameConfig = MiniGameInfo & {
  canvasId: string;
  players: Rivals;
};

export type MiniGameInfo = {
  icon: string;
  name: string;
};

export type MiniGamePickInfo = MiniGameInfo & {
  id: number;
  pick_image_url?: string;
  miniGame: SubclassOfMiniGame;
};

export type MiniGameFinishResponse = {
  winner: UserData;
};

export type Rivals = [UserData, UserData];

export type FinishFn = (finish: MiniGameFinishResponse) => void;
