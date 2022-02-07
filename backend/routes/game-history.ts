import { Express } from 'express';
import { GameHistoryController } from '../controllers/GameHistoryController';

export const registerRoutes = (app: Express) => {
  app.post('/api/game-history', [GameHistoryController.create]);
  app.get('/api/game-history', [GameHistoryController.getByUserId]);
};
