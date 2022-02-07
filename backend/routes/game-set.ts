import { Express } from 'express';
import { GameSetController } from '../controllers/GameSetController';

export const registerRoutes = (app: Express) => {
  app.post('/api/game-set', [GameSetController.create]);
  app.get('/api/game-set/:id', [GameSetController.getById]);
  app.patch('/api/game-set/:id', [GameSetController.update]);
  app.get('/api/game-set/by-link/:link', [GameSetController.getByLink]);
};
