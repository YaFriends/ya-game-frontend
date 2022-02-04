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

export interface PostCommentAttributes {
  id: number;
  content: string;
  userId: number;
  parentId?: number;
  postId: number;
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
  userId: number;

  @ForeignKey(() => PostComment)
  @Column(DataType.INTEGER)
  parentId: number;

  @BelongsTo(() => PostComment)
  parent: PostComment;

  @ForeignKey(() => Post)
  @AllowNull(false)
  @Column
  postId: number;

  @BelongsTo(() => Post)
  post: Post;
}
