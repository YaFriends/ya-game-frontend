import User from '../../backend/models/User';

export type Post = {
  id: number;
  title: string;
  description: string;
  created_by: number;
  likes: Like[];
  comments: PostComment[];
};

export type PostComment = {
  id: number;
  content: string;
  userId: number;
  parentId?: number;
  parent?: PostComment;
  postId: number;
  post?: Post;
  children?: PostComment[];
};

export type Like = {
  id: number;
  post_id: number;
  user_id: number;
};
