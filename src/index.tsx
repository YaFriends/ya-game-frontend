import { StartReturnType } from 'msw/lib/types/setupWorker/glossary';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ErrorContainer } from './components/ErrorBoundary/ErrorContainer';
import { worker } from './mocks/browser';
import { store } from './store';

import './index.scss';

function prepare(): StartReturnType | Promise<void> {
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

prepare().then(() => {
  ReactDOM.render(
    <ErrorBoundary
      fallbackRender={props => {
        return <ErrorContainer {...props} />;
      }}>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ErrorBoundary>,
    document.getElementById('root')
  );
});
