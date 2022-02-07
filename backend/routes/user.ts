import { Express } from 'express';
import { UserController } from '../controllers/UserController';

export const registerRoutes = (app: Express) => {
  app.post('/api/auth/signup', [UserController.signUp]);
  app.post('/api/auth/signin', [UserController.signIn]);
  app.patch('/api/user', [UserController.updateById]);
  app.post('/api/auth/logout', [UserController.logout]);
  app.get('/api/auth/user', [UserController.getUser]);
};
