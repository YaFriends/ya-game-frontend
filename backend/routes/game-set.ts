import { Express } from 'express';
import { GameSetController } from '../controllers/GameSetController';

export const registerRoutes = (app: Express) => {
  app.post('/game-set', [GameSetController.create]);
  app.get('/game-set/:id', [GameSetController.getById]);
  app.patch('/game-set/:id', [GameSetController.update]);
  app.get('/game-set/by-link/:link', [GameSetController.getByLink]);
};
