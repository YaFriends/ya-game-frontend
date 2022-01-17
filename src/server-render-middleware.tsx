import { Request, Response } from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouterContext } from 'react-router';
import { StaticRouter } from 'react-router-dom';

import 'whatwg-fetch';

import App from './App';
import { preparedState } from './store';
import { renderObject } from './utils/renderObject';

export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};
  const store = preparedState({});
  const jsx = (
    <Provider store={store}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  res.status(context.statusCode || 200).send(getHtml(jsx, store));
};

function getHtml(reactHtml: JSX.Element, store?: ReturnType<typeof preparedState>) {
  const html = renderToStaticMarkup(
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="google-site-verification"
          content="nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
        <title>Yandex game</title>
        <link href="/main.css" rel="stylesheet" />
      </head>
      <body>
        <div id="mount">{reactHtml}</div>
        <script src="/main.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${renderObject(store?.getState())}`,
          }}
        />
      </body>
    </html>
  );

  return `<!doctype html>${html}`;
}
