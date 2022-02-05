import { Express } from 'express';
import { MiniGameController } from '../controllers/MiniGameController';

export const registerRoutes = (app: Express) => {
  app.get('/mini-games', [MiniGameController.getAll]);
};
