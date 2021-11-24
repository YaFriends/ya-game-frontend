import { MiniGame as MiniGameProps } from '../@types/GameSet';

import MiniGame, { Team } from './MiniGame';
import { MINI_GAME_CONTROLLER_BY_ID } from './constants';

export default class GameSetCoordinator {
  teams: Team[];
  miniGames: MiniGameProps[];
  currentMiniGameIndex: number;
  currentMiniGame: MiniGameProps;

  constructor(miniGames: MiniGameProps[], teams: Team[]) {
    this.miniGames = miniGames;
    this.teams = teams;
    this.currentMiniGameIndex = 0;
    this.currentMiniGame = this.miniGames[this.currentMiniGameIndex];
  }

  init(): Promise<void> {
    return this.loadCurrentGame();
  }

  async loadNextGame(): Promise<void> {
    this.currentMiniGameIndex++;

    return this.setCurrentGame();
  }

  _currentGameController(): MiniGame {
    return new MINI_GAME_CONTROLLER_BY_ID[this.currentMiniGame.id](this.teams);
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
      await this._currentGameController().gameLoop();
      res();
    });
  }
}
