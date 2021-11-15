import { GameSet } from '../@types/GameSet';
import { GameSetAPI } from '../api/GameSetApi';

class Controller {
  private api: GameSetAPI;

  constructor() {
    this.api = new GameSetAPI();
  }

  async loadSession(id: number): Promise<GameSet> {
    return this.api.read(id);
  }
}

export const GameSetController = new Controller();
