import { Express } from 'express';

import { PostController } from '../controllers/PostController';
import { PostCommentController } from '../controllers/PostCommentController';
import userMiddleware from '../middleware/user';
import authMiddleware from '../middleware/auth';

export const registerRoutes = (app: Express) => {
  app.post('/api/posts', [userMiddleware, authMiddleware, PostController.create]);
  app.get('/api/posts', [userMiddleware, authMiddleware, PostController.getAll]);
  app.get('/api/posts/:id/comments', [
    userMiddleware,
    authMiddleware,
    PostCommentController.getByPostId,
  ]);
  app.get('/api/posts/:id', [userMiddleware, authMiddleware, PostController.getById]);
  app.delete('/api/posts/:id', [userMiddleware, authMiddleware, PostController.deleteById]);
  app.post('/api/posts/:id/like', [userMiddleware, authMiddleware, PostController.like]);
  app.delete('/api/posts/:id/like', [userMiddleware, authMiddleware, PostController.unlike]);
  app.post('/api/posts/:id/comment', [userMiddleware, authMiddleware, PostController.comment]);
};
