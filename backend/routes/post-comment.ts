import { Express } from 'express';
import { PostCommentController } from '../controllers/PostCommentController';
import userMiddleware from '../middleware/user';
import authMiddleware from '../middleware/auth';

export const registerRoutes = (app: Express) => {
  app.delete('/api/comments/:id', [
    userMiddleware,
    authMiddleware,
    PostCommentController.deleteById,
  ]);
};
