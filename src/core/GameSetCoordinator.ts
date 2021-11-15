import { MiniGame } from '../@types/GameSet';

export default class GameSetCoordinator {
  miniGames: MiniGame[];
  currentMiniGameIndex: number;
  currentMiniGame: MiniGame;

  constructor(miniGames: MiniGame[]) {
    this.miniGames = miniGames;
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

  setCurrentGame(): Promise<void> {
    this.currentMiniGame = this.miniGames[this.currentMiniGameIndex];
    return this.loadCurrentGame();
  }

  async loadCurrentGame(): Promise<void> {
    return new Promise(res => {
      setTimeout(res, 4000);
    });
  }
}
