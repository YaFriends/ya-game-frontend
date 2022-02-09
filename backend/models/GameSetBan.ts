import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import MiniGame from './MiniGame';
import GameSet from './GameSet';

@Table({
  tableName: 'game_set_ban',
  modelName: 'GameSetBan',
})
export default class GameSetBan extends Model {
  @ForeignKey(() => GameSet)
  @Column
  gameSetId: number;

  @ForeignKey(() => MiniGame)
  @Column
  miniGameId: number;
}
