import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import MiniGame from './MiniGame';
import GameSet from './GameSet';

@Table({
  tableName: 'game_set_mini_game',
  modelName: 'GameSetMiniGame',
})
export default class GameSetMiniGame extends Model {
  @ForeignKey(() => GameSet)
  @Column
  gameSetId: number;

  @ForeignKey(() => MiniGame)
  @Column
  miniGameId: number;
}
