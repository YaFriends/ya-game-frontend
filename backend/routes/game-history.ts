import { Express } from 'express';
import { GameHistoryController } from '../controllers/GameHistoryController';

export const registerRoutes = (app: Express) => {
  app.post('/game-history', [GameHistoryController.create]);
  app.get('/game-history', [GameHistoryController.getByUserId]);
};
