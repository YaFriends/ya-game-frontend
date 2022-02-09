import { Express } from 'express';
import { GameSetController } from '../controllers/GameSetController';
import userMiddleware from '../middleware/user';
import authMiddleware from '../middleware/auth';

export const registerRoutes = (app: Express) => {
  app.post('/api/game-set', [userMiddleware, authMiddleware, GameSetController.create]);
  app.get('/api/game-set/:id', [userMiddleware, authMiddleware, GameSetController.getById]);
  app.patch('/api/game-set/:id', [userMiddleware, authMiddleware, GameSetController.update]);
  app.get('/api/game-set/by-link/:link', [
    userMiddleware,
    authMiddleware,
    GameSetController.getByLink,
  ]);
};
