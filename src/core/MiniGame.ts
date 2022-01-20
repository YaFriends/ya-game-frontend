import { MiniGameConfig, MiniGameFinishResponse, Rivals } from '../@types/MiniGame';
import { UserData } from '../@types/UserTypes';

import { GameLoop } from './GameLoop';

export default abstract class MiniGame {
  icon: string;
  name: string;
  players: Rivals;
  GameLoop: GameLoop;
  currentPlayer: UserData | null;

  protected constructor({ icon, name, players, canvasId }: MiniGameConfig) {
    this.icon = icon;
    this.name = name;
    this.players = players;
    this.GameLoop = new GameLoop(canvasId);
    this.currentPlayer = null;
  }

  abstract draw(): void;

  abstract finish(player: UserData): void;

  abstract run(): Promise<MiniGameFinishResponse>;
}
