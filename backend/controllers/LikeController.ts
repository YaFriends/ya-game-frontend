import Like, { LikeCreationAttributes } from '../models/Like';

export const LikeController = {
  create(likeInfo: LikeCreationAttributes) {
    return Like.create(likeInfo);
  },
  deleteById(id: number) {
    return Like.destroy({ where: { id } });
  },
  deleteByPostId(post_id: number) {
    return Like.destroy({ where: { post_id } });
  },
  getByUserId(user_id: number) {
    return Like.findAll({ where: { user_id } });
  },
  getByPostId(post_id: number) {
    return Like.findAll({ where: { post_id } });
  },
};
