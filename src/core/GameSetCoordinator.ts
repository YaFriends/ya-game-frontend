import { MiniGame as MiniGameProps } from '../@types/GameSet';
import { Rivals } from '../@types/MiniGame';
import { UserData } from '../@types/UserTypes';

import MiniGame from './MiniGame';
import { MINI_GAME_CONTROLLER_BY_ID } from './constants';

export default class GameSetCoordinator {
  players: Rivals;
  miniGames: MiniGameProps[];
  currentMiniGameIndex: number;
  currentMiniGame: MiniGameProps;
  currentMiniGameController: MiniGame | null;
  canvasId: string;

  constructor(miniGames: MiniGameProps[], players: Rivals) {
    this.miniGames = miniGames;
    this.players = players;
    this.currentMiniGameIndex = 0;
    this.currentMiniGame = this.miniGames[this.currentMiniGameIndex];
    this.canvasId = 'canvas';
    this.currentMiniGameController = null;
  }

  init(): Promise<void> {
    return this.loadCurrentGame();
  }

  setCanvas(canvasId: string) {
    this.canvasId = canvasId;
  }

  get currentPlayer(): UserData | null | undefined {
    return this.currentMiniGameController?.currentPlayer;
  }

  async loadNextGame(): Promise<void> {
    this.currentMiniGameIndex++;

    return this.setCurrentGame();
  }

  _setCurrentGameController() {
    this.currentMiniGameController = new MINI_GAME_CONTROLLER_BY_ID[this.currentMiniGame.id]({
      players: this.players,
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
      this._setCurrentGameController();
      await this.currentMiniGameController?.run();
      res();
    });
  }
}
