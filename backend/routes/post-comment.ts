import { Express } from 'express';
import { PostCommentController } from '../controllers/PostCommentController';

export const registerRoutes = (app: Express) => {
  app.delete('/api/comments/:id', [PostCommentController.deleteById]);
};
