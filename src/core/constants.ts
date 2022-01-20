import MiniGame from './MiniGame';
import { ClickMoreMiniGame } from './MiniGames/ClickMoreMiniGame';
import { TicTacToeMiniGame } from './MiniGames/TicTacToeMiniGame';

export const TIC_TAC_TOE_GAME_ID = 1;
export const CLICK_MORE_GAME_ID = 2;

export type SubclassOfMiniGame = (new (x: any) => MiniGame) & {
  [K in keyof typeof MiniGame]: typeof MiniGame[K];
};

export const MINI_GAME_CONTROLLER_BY_ID: { [x: number]: SubclassOfMiniGame } = {
  [TIC_TAC_TOE_GAME_ID]: TicTacToeMiniGame,
  [CLICK_MORE_GAME_ID]: ClickMoreMiniGame,
};
