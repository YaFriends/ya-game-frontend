import { Express } from 'express';

import { PostController } from '../controllers/PostController';
import { PostCommentController } from '../controllers/PostCommentController';
import authMiddleware from '../middleware/auth';

export const registerRoutes = (app: Express) => {
  app.post('/api/posts', [PostController.create]);
  app.get('/api/posts', [authMiddleware, PostController.getAll]);
  app.get('/api/posts/:id/comments', [PostCommentController.getByPostId]);
  app.get('/api/posts/:id', [PostController.getById]);
  app.delete('/api/posts/:id', [PostController.deleteById]);
  app.post('/api/posts/:id/like', [PostController.like]);
  app.delete('/api/posts/:id/like', [PostController.unlike]);
  app.post('/api/posts/:id/comment', [PostController.comment]);
};
