import { MiniGameConfig, MiniGameFinishResponse, Team } from '../@types/MiniGame';

import { GameLoop } from './GameLoop';

export default abstract class MiniGame {
  icon: string;
  name: string;
  teams: Team[];
  GameLoop: GameLoop;

  protected constructor({ icon, name, teams, canvasId }: MiniGameConfig) {
    this.icon = icon;
    this.name = name;
    this.teams = teams;
    this.GameLoop = new GameLoop(canvasId);
  }

  abstract draw(): void;

  abstract finish(): MiniGameFinishResponse;

  abstract makeTurn(): void;

  // abstract waitForRivalTurn(): void;
  abstract run(): Promise<void>;
}
