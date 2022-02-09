import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';

import User from './User';
import GameSet from './GameSet';
import { Optional } from 'sequelize';

interface GameHistoryAttributes {
  id: number;
  user_id: number;
  gameset_id: number;
}

export interface GameHistoryCreationAttributes extends Optional<GameHistoryAttributes, 'id'> {}

@Table({
  timestamps: false,
  tableName: 'game_set_history',
  modelName: 'GameHistory',
})
export default class GameSetHistory extends Model<
  GameHistoryAttributes,
  GameHistoryCreationAttributes
> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id: number;

  @ForeignKey(() => GameSet)
  @Column(DataType.INTEGER)
  gameset_id: number;
}
