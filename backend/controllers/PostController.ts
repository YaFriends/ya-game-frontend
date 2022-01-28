import { Request, Response } from 'express';

import Post from '../models/Post';
import { LikeController } from './LikeController';
import { PostCommentController } from './PostCommentController';

export const PostController = {
  getAll(req: Request, res: Response) {
    return Post.findAll().then(result => {
      res.status(200).send(result);
    });
  },
  getById(req: Request, res: Response) {
    return Post.findOne({ where: { id: req.params.id } }).then(result => {
      res.status(200).send(result);
    });
  },
  create(req: Request, res: Response) {
    return Post.create(req.body).then(result => {
      res.status(201).send(result);
    });
  },
  deleteById(req: Request, res: Response) {
    return Post.destroy({ where: { id: req.params.id } }).then(result => {
      res.status(200).send(result);
    });
  },
  like(req: Request, res: Response) {
    return LikeController.create({ post_id: Number(req.params.id), user_id: req.body.id }).then(
      result => {
        res.status(201).send(result);
      }
    );
  },
  async comment(req: Request, res: Response) {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (post) {
      return PostCommentController.new({ post, ...req.body }).then(result => {
        res.status(201).send(result);
      });
    }

    return res.status(404).send({ message: 'Post not found' });
  },
};
