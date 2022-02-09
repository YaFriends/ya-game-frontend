import express, { Express } from 'express';
import cookieParser from 'cookie-parser';

import { registerRoutes } from './register';

export const connect = (app: Express) => {
  app.use(cookieParser());
  app.use(express.json());
  registerRoutes(app);
};
