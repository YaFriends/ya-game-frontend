import PostComment, { PostCommentCreationAttributes } from '../models/PostComment';

export const PostCommentController = {
  create(postCommentInfo: PostCommentCreationAttributes) {
    return PostComment.create(postCommentInfo);
  },
  deleteById(id: number) {
    return PostComment.destroy({ where: { id } });
  },
};
