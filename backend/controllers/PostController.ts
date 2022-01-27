import Post, { PostCreationAttributes } from '../models/Post';
import { LikeController } from './LikeController';
import { PostCommentController } from './PostCommentController';

export const PostController = {
  getAll() {
    return Post.findAll();
  },
  getById(id: number) {
    return Post.findOne({ where: { id } });
  },
  create(postInfo: PostCreationAttributes) {
    return Post.create(postInfo);
  },
  deleteById(id: number) {
    return Post.destroy({ where: { id } });
  },
  like(post_id: number, user_id: number) {
    return LikeController.create({ post_id, user_id });
  },
  async comment(post_id: number, content: string, user_id: number, parent_id?: number) {
    const post = await PostController.getById(post_id);
    if (post) {
      return PostCommentController.create({ post, content, user_id, parent_id });
    }

    return false;
  },
};
