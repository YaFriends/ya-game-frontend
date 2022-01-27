import {
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import User from './User';
import { Optional } from 'sequelize';
import Post from './Post';

interface PostCommentAttributes {
  id: number;
  content: string;
  user_id: number;
  parent_id?: number;
  post: Post;
}

export interface PostCommentCreationAttributes extends Optional<PostCommentAttributes, 'id'> {}

@Table({
  timestamps: true,
  tableName: 'post_comments',
})
export default class PostComment extends Model<
  PostCommentAttributes,
  PostCommentCreationAttributes
> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  content: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id: number;

  @ForeignKey(() => PostComment)
  @Column(DataType.INTEGER)
  parent_id: number;

  @BelongsTo(() => Post)
  post: Post;
}
