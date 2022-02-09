import { Request, Response } from 'express';

import Post from '../models/Post';
import { LikeController } from './LikeController';
import { PostCommentController } from './PostCommentController';
import Like from '../models/Like';
import PostComment from '../models/PostComment';

export const PostController = {
  getAll(req: Request, res: Response) {
    return Post.findAll({ include: [Like] }).then(result => {
      res.status(200).send(result);
    });
  },
  getById(req: Request, res: Response) {
    return Post.findOne({ where: { id: req.params.id }, include: [Like, PostComment] }).then(
      result => {
        res.status(200).send(result);
      }
    );
  },
  create(req: Request, res: Response) {
    return Post.create(req.body).then(result => {
      res.status(201).send(result);
    });
  },
  async deleteById(req: Request, res: Response) {
    const post = await Post.findOne({ where: { id: req.params.id } });
    if (post) {
      await post.destroy();
      return res.status(200).send();
    }

    return res.status(404).send();
  },
  like(req: Request, res: Response) {
    return LikeController.create({
      post_id: Number(req.params.id),
      user_id: req.body.user_id,
    }).then(result => {
      res.status(201).send(result);
    });
  },
  async unlike(req: Request, res: Response) {
    const like = await Like.findOne({
      where: { post_id: req.params.id, user_id: req.body.user_id },
    });

    if (like) {
      await like.destroy();
    }
    return res.status(200).send();
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
