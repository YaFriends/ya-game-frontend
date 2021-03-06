import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  Default,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';

import User from './User';
import MiniGame from './MiniGame';
import GameSetPlayer from './GameSetPlayer';
import GameSetMiniGame from './GameSetMiniGame';
import GameSetBan from './GameSetBan';

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
  modelName: 'GameSet',
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

  @BelongsToMany(() => User, () => GameSetPlayer)
  players: User;

  @BelongsToMany(() => MiniGame, () => GameSetMiniGame)
  miniGames: MiniGame;

  @BelongsToMany(() => MiniGame, () => GameSetBan)
  bans: MiniGame;

  get date() {
    return this.getDataValue('updatedAt');
  }
}
