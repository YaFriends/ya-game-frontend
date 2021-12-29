import {
  GameSetFinishFn,
  GameSetFinishResponse,
  GameSetFinishStat,
  MiniGame as MiniGameProps,
} from '../@types/GameSet';
import { MiniGameFinishResponse, Rivals } from '../@types/MiniGame';
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
  finishCb: GameSetFinishFn | null;
  results: GameSetFinishStat;

  constructor(miniGames: MiniGameProps[], players: Rivals) {
    this.miniGames = miniGames;
    this.players = players;
    this.currentMiniGameIndex = 0;
    this.currentMiniGame = this.miniGames[this.currentMiniGameIndex];
    this.canvasId = 'canvas';
    this.currentMiniGameController = null;
    this.finishCb = () => null;
    this.results = Object.fromEntries(players.map(({ id }) => [id, 0]));
  }

  init(): Promise<GameSetFinishResponse> {
    return new Promise<GameSetFinishResponse>(async res => {
      this.finishCb = res;
      await this.loadAndStartCurrentGame();
    });
  }

  setCanvas(canvasId: string) {
    this.canvasId = canvasId;
  }

  get currentPlayer(): UserData | null | undefined {
    return this.currentMiniGameController?.currentPlayer;
  }

  async loadNextGame(): Promise<void> {
    this.currentMiniGameIndex++;

    return this.loadAndStartCurrentGame();
  }

  _setCurrentGameController() {
    this.currentMiniGameController = new MINI_GAME_CONTROLLER_BY_ID[this.currentMiniGame.id]({
      players: this.players,
      canvasId: this.canvasId,
    });
  }

  setCurrentGame(): void {
    this.currentMiniGame = this.miniGames[this.currentMiniGameIndex];
  }

  prepareResult(): GameSetFinishResponse {
    const ids = Object.keys(this.results);
    const firstPlayerId = Number(ids[0]);
    const secondPlayerId = Number(ids[1]);
    const maxWinsId =
      this.results[firstPlayerId] > this.results[secondPlayerId] ? firstPlayerId : secondPlayerId;
    const winner = this.players.find(({ id }) => id === maxWinsId) as UserData;
    return { winner };
  }

  async loadAndStartCurrentGame(): Promise<void> {
    this.setCurrentGame();
    const { winner } = await this.waitForEndOfCurrentGame();
    this.results[winner.id]++;
    if (this.currentMiniGameIndex === this.miniGames.length - 1) {
      this.finishCb!(this.prepareResult());
    } else {
      await this.loadNextGame();
    }
  }

  async waitForEndOfCurrentGame(): Promise<MiniGameFinishResponse> {
    return new Promise(async res => {
      this._setCurrentGameController();
      const response = await this.currentMiniGameController!.run();
      res(response);
    });
  }
}
