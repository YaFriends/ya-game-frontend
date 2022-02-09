import { Request, Response } from 'express';

import Like, { LikeCreationAttributes } from '../models/Like';

export const LikeController = {
  create(likeInfo: LikeCreationAttributes) {
    return Like.create(likeInfo);
  },
  deleteById(req: Request, res: Response) {
    return Like.destroy({ where: { id: req.params.id } }).then(result => {
      res.status(200).send(result);
    });
  },
  deleteByPostId(req: Request, res: Response) {
    return Like.destroy({ where: { post_id: req.params.id } }).then(result => {
      res.status(200).send(result);
    });
  },
  getByUserId(req: Request, res: Response) {
    return Like.findAll({ where: { user_id: req.params.id } }).then(result => {
      res.status(200).send(result);
    });
  },
  getByPostId(req: Request, res: Response) {
    return Like.findAll({ where: { post_id: req.params.id } }).then(result => {
      res.status(200).send(result);
    });
  },
};
