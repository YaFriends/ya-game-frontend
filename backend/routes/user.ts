import { Express } from 'express';
import { UserController } from '../controllers/UserController';

export const registerRoutes = (app: Express) => {
  app.post('/user', [UserController.create]);
  app.patch('/user', [UserController.updateById]);
};
