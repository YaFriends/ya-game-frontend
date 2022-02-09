import { Express } from 'express';
import { AuthController } from '../controllers/AuthController';

export const registerRoutes = (app: Express) => {
  app.post('/api/auth/signup', [AuthController.signUp]);
  app.post('/api/auth/signin', [AuthController.signIn]);
  app.post('/api/auth/logout', [AuthController.logout]);
  app.get('/api/auth/user', [AuthController.getUser]);
};
