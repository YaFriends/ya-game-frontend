import { Request, Response, NextFunction } from 'express';
import { registerRoutes } from './register';

const express = require('express');
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header(
    'Access-Control-Allow-Headers',
    'Accept, Authorization, Content-Type, X-Requested-With, Range'
  );
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  } else {
    return next();
  }
});

app.use(express.json());
registerRoutes(app);

export const listen = () => {
  app.listen(process.env.BACKEND_PORT, function () {
    console.log('app listening at port %s', process.env.BACKEND_PORT);
  });
};
