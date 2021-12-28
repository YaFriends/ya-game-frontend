import path from 'path';

import express from 'express';

import 'babel-polyfill';
import serverRenderMiddleware from './server-render-middleware';

const app = express();

app.use(express.static(path.join(__dirname, '/dist/')));

/*app.get('/mockServiceWorker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/mockServiceWorker.js'));
});

app.use('/!*', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});*/

app.use('/*', serverRenderMiddleware);

export { app };
