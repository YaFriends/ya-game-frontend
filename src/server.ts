import path from 'path';

import express, { RequestHandler } from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import clientConfig from '../webpack/client.config';
import { IS_DEV } from '../webpack/env';

import 'babel-polyfill';
import serverRenderMiddleware from './server-render-middleware';

const app = express();

function getWebpackMiddlewares(config: any): RequestHandler[] {
  const compiler = webpack(config);

  return [
    devMiddleware(compiler, {
      publicPath: config.output?.publicPath,
    }),
    hotMiddleware(compiler, { path: `/__webpack_hmr` }),
  ];
}

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/mockServiceWorker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/mockServiceWorker.js'));
});

app.get('/*', IS_DEV ? getWebpackMiddlewares(clientConfig) : [], serverRenderMiddleware);

export { app };
