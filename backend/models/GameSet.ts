import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  Default,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';

import User from './User';
import MiniGame from './MiniGame';

interface GameSetAttributes {
  id: number;
  totalGames: number;
  link: string;
  updatedAt?: string;
}

export interface GameSetCreationAttributes extends Optional<GameSetAttributes, 'id'> {}

@Table({
  timestamps: true,
  tableName: 'game_sets',
})
export default class GameSet extends Model<GameSetAttributes, GameSetCreationAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    field: 'total_games',
  })
  totalGames: number;

  @Column(DataType.STRING)
  link: string;

  @HasMany(() => User)
  players: User;

  @HasMany(() => MiniGame)
  miniGames: MiniGame;

  @HasMany(() => MiniGame)
  bans: MiniGame;

  get date() {
    return this.getDataValue('updatedAt');
  }
}
