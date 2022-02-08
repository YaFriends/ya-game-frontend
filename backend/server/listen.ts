import express, { Express } from 'express';
import cookieParser from 'cookie-parser';

import { registerRoutes } from './register';
import userMiddleware from '../middleware/user';

export const connect = (app: Express) => {
  app.use(cookieParser());
  app.use(express.json());
  app.use(userMiddleware);
  registerRoutes(app);
};
