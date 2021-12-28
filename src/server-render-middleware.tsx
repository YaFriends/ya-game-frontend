import { Request, Response } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouterContext } from 'react-router';
import { StaticRouter } from 'react-router-dom';

import App from './App';

export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};

  const jsx = (
    <StaticRouter context={context} location={location}>
      <App />
    </StaticRouter>
  );

  const reactHtml = renderToString(jsx);

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  res.status(context.statusCode || 200).send(getHtml(reactHtml));
};

function getHtml(reactHtml: string) {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="google-site-verification" content="nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
            <title>Yandex game</title>
            <link href="/main.css" rel="stylesheet" />
        </head>
        <body>
            <div id="mount">${reactHtml}</div>
            <script src="/main.js"></script>
        </body>
        </html>
    `;
}
