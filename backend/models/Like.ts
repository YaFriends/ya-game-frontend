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
import Post from './Post';
import { Optional } from 'sequelize';

interface LikeAttributes {
  id: number;
  post_id: number;
  user_id: number;
}

export interface LikeCreationAttributes extends Optional<LikeAttributes, 'id'> {}

@Table({
  timestamps: true,
  tableName: 'likes',
})
export default class Like extends Model<LikeAttributes, LikeCreationAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Post)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  post_id: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id: number;
}
