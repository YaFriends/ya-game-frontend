import PostComment, { PostCommentCreationAttributes } from '../models/PostComment';
import { Request, Response } from 'express';

export const PostCommentController = {
  new(postCommentInfo: PostCommentCreationAttributes) {
    return PostComment.create(postCommentInfo);
  },

  create(req: Request, res: Response) {
    return PostCommentController.new(req.body).then(result => {
      res.status(201).send(result);
    });
  },
  deleteById(req: Request, res: Response) {
    return PostComment.destroy({ where: { id: req.params.id } }).then(result => {
      res.status(200).send(result);
    });
  },
};
