import { Express } from 'express';
import { PostController } from '../controllers/PostController';
import { PostCommentController } from '../controllers/PostCommentController';

export const registerRoutes = (app: Express) => {
  app.post('/posts', [PostController.create]);
  app.get('/posts', [PostController.getAll]);
  app.get('/posts/:id/comments', [PostCommentController.getByPostId]);
  app.get('/posts/:id', [PostController.getById]);
  app.delete('/posts/:id', [PostController.deleteById]);
  app.post('/posts/:id/like', [PostController.like]);
  app.delete('/posts/:id/like', [PostController.unlike]);
  app.post('/posts/:id/comment', [PostController.comment]);
};
