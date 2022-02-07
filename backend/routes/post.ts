import { Express } from 'express';
import { PostController } from '../controllers/PostController';

export const registerRoutes = (app: Express) => {
  app.post('/posts', [PostController.create]);
  app.get('/posts', [PostController.getAll]);
  app.get('/posts/:id', [PostController.getById]);
  app.delete('/posts/:id', [PostController.deleteById]);
  app.post('/posts/:id/like', [PostController.like]);
  app.post('/posts/:id/comment', [PostController.comment]);
};
