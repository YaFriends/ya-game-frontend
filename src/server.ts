import crypto from 'crypto';
import path from 'path';

import express, { RequestHandler, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import clientConfig from '../webpack/client.config';
import { IS_DEV } from '../webpack/env';
import { connect, dbConnect } from '../backend/index';

import 'babel-polyfill';
import serverRenderMiddleware from './server-render-middleware';

const app = express();
export const NONCE = 'nonce';

function getWebpackMiddlewares(config: typeof clientConfig): RequestHandler[] {
  const compiler = webpack(config);
  if (!IS_DEV) {
    return [];
  }
  return [
    devMiddleware(compiler, {
      publicPath: config.output?.publicPath,
    }),
    hotMiddleware(compiler, { path: `/__webpack_hmr` }),
  ];
}

app.use((_: Request, res: Response, next: NextFunction) => {
  res.set(NONCE, crypto.randomBytes(16).toString('hex'));
  next();
});

app.use((_: Request, res: Response, next: NextFunction) => {
  const nonce = res.get(NONCE);
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", '*.ya-praktikum.tech'],
      imgSrc: ["'self'", 'ya-praktikum.tech'],
      scriptSrc: ["'self'", `'nonce-${nonce}'`],
      connectSrc: ["'self'", 'ya-praktikum.tech'],
      workerSrc: ["'self'"],
    },
  });
  next();
});

app.use(helmet.xssFilter());

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/cache-service-worker', (req, res) => {
  res.sendFile(path.resolve(__dirname, './cacheServiceWorker.js'));
});

app.get('/mockServiceWorker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/mockServiceWorker.js'));
});

connect(app);
app.get('/*', getWebpackMiddlewares(clientConfig), serverRenderMiddleware);
dbConnect().then(() => {});
export { app };
