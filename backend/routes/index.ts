import { Express } from 'express';

import { registerRoutes as registerUserRoutes } from './user';
import { registerRoutes as registerGameHistoryRoutes } from './game-history';
import { registerRoutes as registerGameSetRoutes } from './game-set';
import { registerRoutes as registerMiniGameRoutes } from './mini-game';
import { registerRoutes as registerPostRoutes } from './post';
import { registerRoutes as registerPostCommentRoutes } from './post-comment';

export const register = (app: Express) => {
  registerUserRoutes(app);
  registerGameHistoryRoutes(app);
  registerGameSetRoutes(app);
  registerMiniGameRoutes(app);
  registerPostRoutes(app);
  registerPostCommentRoutes(app);
};
