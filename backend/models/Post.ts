import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  ForeignKey,
  HasMany,
  DataType,
} from 'sequelize-typescript';
import User from './User';
import { Optional } from 'sequelize';
import PostComment from './PostComment';

interface PostAttributes {
  id: number;
  title: number;
  description: string;
  created_by: number;
}

export interface PostCreationAttributes extends Optional<PostAttributes, 'id'> {}

@Table({
  timestamps: true,
  tableName: 'posts',
})
export default class Post extends Model<PostAttributes, PostCreationAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.STRING)
  description: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  created_by: number;

  @HasMany(() => PostComment)
  comments: PostComment[];
}
