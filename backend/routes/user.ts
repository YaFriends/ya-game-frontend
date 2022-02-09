import { Express } from 'express';
import { AuthController } from '../controllers/AuthController';
import { UserController } from '../controllers/UserController';
import userMiddleware from '../middleware/user';

export const registerRoutes = (app: Express) => {
  app.post('/api/auth/signup', [AuthController.signUp]);
  app.post('/api/auth/signin', [AuthController.signIn]);
  app.post('/api/auth/logout', [AuthController.logout]);
  app.get('/api/auth/user', [AuthController.getUser]);
  app.patch('/api/auth/user/:id', [userMiddleware, UserController.updateById]);
};
