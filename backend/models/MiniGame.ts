import { Model, Table, Column, AutoIncrement, PrimaryKey, DataType } from 'sequelize-typescript';

interface LikeAttributes {
  id: number;
  name: string;
  icon: string;
  pick_image_url: string;
}

@Table({
  timestamps: true,
  tableName: 'mini_games',
})
export default class MiniGame extends Model<LikeAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  icon: string;

  @Column(DataType.STRING)
  pick_image_url: string;
}
