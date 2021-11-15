import { GameSet } from '../@types/GameSet';

import { httpInternal } from './http';

export class GameSetAPI {
  protected endpoint: string;

  constructor() {
    this.endpoint = '/session';
  }

  read(id: number): Promise<GameSet> {
    return httpInternal.get<GameSet>(`${this.endpoint}/${id}`).then(response => response.data);
  }
}
