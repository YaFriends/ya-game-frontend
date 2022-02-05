import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import User from './User';
import GameSet from './GameSet';

@Table
export default class GameSetPlayer extends Model {
  @ForeignKey(() => GameSet)
  @Column
  gameSetId: number;

  @ForeignKey(() => User)
  @Column
  playerId: number;
}
