import MiniGame from './MiniGame';

export default class MiniGamePicker {
  miniGames: MiniGame[];

  constructor(miniGames: MiniGame[]) {
    this.miniGames = miniGames;
  }
}
