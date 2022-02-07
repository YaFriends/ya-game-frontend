import { Express } from 'express';
import { PostCommentController } from '../controllers/PostCommentController';

export const registerRoutes = (app: Express) => {
  app.delete('/comments/:id', [PostCommentController.deleteById]);
};
