import { UserData } from '../api/UserAPI';

export type MiniGameConfig = {
  icon: string;
  name: string;
  teams: Team[];
};

export type Team = {
  players: UserData[];
};

type MiniGameFinishResponse = {
  winner: Team;
};

export default abstract class MiniGame {
  icon: string;
  name: string;
  teams: Team[];

  protected constructor({ icon, name, teams }: MiniGameConfig) {
    this.icon = icon;
    this.name = name;
    this.teams = teams;
  }

  abstract gameLoop(): Promise<void>;

  abstract draw(): void;

  abstract finish(): MiniGameFinishResponse;

  abstract makeTurn(): void;

  // abstract waitForRivalTurn(): void;
}
