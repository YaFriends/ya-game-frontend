import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import MiniGame from './MiniGame';
import GameSet from './GameSet';

@Table
export default class GameSetMiniGame extends Model {
  @ForeignKey(() => GameSet)
  @Column
  gameSetId: number;

  @ForeignKey(() => MiniGame)
  @Column
  miniGameId: number;
}
