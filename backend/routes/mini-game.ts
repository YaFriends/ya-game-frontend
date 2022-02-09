import { Express } from 'express';
import { MiniGameController } from '../controllers/MiniGameController';
import userMiddleware from '../middleware/user';
import authMiddleware from '../middleware/auth';

export const registerRoutes = (app: Express) => {
  app.get('/api/mini-games', [userMiddleware, authMiddleware, MiniGameController.getAll]);
};
