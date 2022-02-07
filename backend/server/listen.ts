import { Express } from 'express';
// import cors from 'cors';
import cookieParser from 'cookie-parser';

import { registerRoutes } from './register';

// const corsOptions = {
//   origin: [
//     'http://localhost:8000',
//     'http://yafriends.lo',
//     'http://tarifa-yafriends-9.ya-praktikum.tech',
//     'https://tarifa-yafriends-9.ya-praktikum.tech',
//   ],
//   optionsSuccessStatus: 200,
//   credentials: true,
//   preflightContinue: true,
// };

// app.use(cors(corsOptions));

export const connect = (app: Express) => {
  app.use(cookieParser());
  registerRoutes(app);
};
