import { StartReturnType } from 'msw/lib/types/setupWorker/glossary';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { worker } from './mocks/browser';

import './index.scss';

function prepare(): StartReturnType | Promise<void> {
  if (process.env.NODE_ENV === 'development') {
    return worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
  return Promise.resolve();
}

prepare().then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
