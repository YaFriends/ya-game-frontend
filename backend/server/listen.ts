import express from 'express';
import cors from 'cors';

import { registerRoutes } from './register';

const app = express();
const corsOptions = {
  origin: [
    'http://localhost:8000',
    'http://yafriends.lo',
    'http://tarifa-yafriends-9.ya-praktikum.tech',
    'https://tarifa-yafriends-9.ya-praktikum.tech',
  ],
  optionsSuccessStatus: 200,
  credentials: true,
  preflightContinue: true,
};

app.use(cors(corsOptions));

app.use(express.json());
registerRoutes(app);

export const listen = () => {
  app.listen(process.env.BACKEND_PORT, function () {
    console.log('app listening at port %s', process.env.BACKEND_PORT);
  });
};
