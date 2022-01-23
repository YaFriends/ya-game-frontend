import { MiniGamePickInfo } from '../@types/MiniGame';

import MiniGame from './MiniGame';
import { CircleTriangleSquareMiniGame } from './MiniGames/CircleTriangleSquareMiniGame';
import { ClickMoreMiniGame } from './MiniGames/ClickMoreMiniGame';
import { TicTacToeMiniGame } from './MiniGames/TicTacToeMiniGame';

export const TIC_TAC_TOE_GAME_ID = 1;
export const CLICK_MORE_GAME_ID = 2;
export const CIRCLE_TRIANGLE_SQUARE_GAME_ID = 3;

export type SubclassOfMiniGame = (new (x: any) => MiniGame) & {
  [K in keyof typeof MiniGame]: typeof MiniGame[K];
};

export const MINI_GAME_CONTROLLER_BY_ID: { [x: number]: SubclassOfMiniGame } = {
  [TIC_TAC_TOE_GAME_ID]: TicTacToeMiniGame,
  [CLICK_MORE_GAME_ID]: ClickMoreMiniGame,
  [CIRCLE_TRIANGLE_SQUARE_GAME_ID]: CircleTriangleSquareMiniGame,
};

export const MINI_GAMES: MiniGamePickInfo[] = [
  TicTacToeMiniGame.config,
  ClickMoreMiniGame.config,
  CircleTriangleSquareMiniGame.config,
];
