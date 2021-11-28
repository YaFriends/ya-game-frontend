import { MiniGame as MiniGameProps } from '../@types/GameSet';
import { Team } from '../@types/MiniGame';

import MiniGame from './MiniGame';
import { MINI_GAME_CONTROLLER_BY_ID } from './constants';

export default class GameSetCoordinator {
  teams: Team[];
  miniGames: MiniGameProps[];
  currentMiniGameIndex: number;
  currentMiniGame: MiniGameProps;
  canvasId: string;

  constructor(miniGames: MiniGameProps[], teams: Team[]) {
    this.miniGames = miniGames;
    this.teams = teams;
    this.currentMiniGameIndex = 0;
    this.currentMiniGame = this.miniGames[this.currentMiniGameIndex];
    this.canvasId = 'canvas';
  }

  init(): Promise<void> {
    return this.loadCurrentGame();
  }

  setCanvas(canvasId: string) {
    this.canvasId = canvasId;
  }

  async loadNextGame(): Promise<void> {
    this.currentMiniGameIndex++;

    return this.setCurrentGame();
  }

  _currentGameController(): MiniGame {
    return new MINI_GAME_CONTROLLER_BY_ID[this.currentMiniGame.id]({
      teams: this.teams,
      canvasId: this.canvasId,
    });
  }

  setCurrentGame(): Promise<void> {
    this.currentMiniGame = this.miniGames[this.currentMiniGameIndex];
    return this.loadCurrentGame();
  }

  async loadCurrentGame(): Promise<void> {
    return new Promise(res => {
      setTimeout(res, 4000);
    });
  }

  async waitForEndOfCurrentGame(): Promise<void> {
    return new Promise(async res => {
      await this._currentGameController().run();
      res();
    });
  }
}
