import MiniGame from './MiniGame';
import { CircleTriangleSquareMiniGame } from './MiniGames/CircleTriangleSquareMiniGame';

export const CIRCLE_TRIANGLE_SQUARE_ID = 1;

export type SubclassOfMiniGame = (new (x: any) => MiniGame) & {
  [K in keyof typeof MiniGame]: typeof MiniGame[K];
};

export const MINI_GAME_CONTROLLER_BY_ID: { [x: number]: SubclassOfMiniGame } = {
  [CIRCLE_TRIANGLE_SQUARE_ID]: CircleTriangleSquareMiniGame,
};
