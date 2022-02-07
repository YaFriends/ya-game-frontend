import { Express } from 'express';
import { MiniGameController } from '../controllers/MiniGameController';

export const registerRoutes = (app: Express) => {
  app.get('/api/mini-games', [MiniGameController.getAll]);
};
