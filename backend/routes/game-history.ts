import { Express } from 'express';
import { GameHistoryController } from '../controllers/GameHistoryController';
import userMiddleware from '../middleware/user';
import authMiddleware from '../middleware/auth';

export const registerRoutes = (app: Express) => {
  app.post('/api/game-history', [userMiddleware, authMiddleware, GameHistoryController.create]);
  app.get('/api/game-history', [userMiddleware, authMiddleware, GameHistoryController.getByUserId]);
};
