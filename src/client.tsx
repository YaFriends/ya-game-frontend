// import { StartReturnType } from 'msw/lib/types/setupWorker/glossary';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ErrorContainer } from './components/ErrorBoundary/ErrorContainer';
// import { worker } from './mocks/browser';
import { store } from './store';

import './index.scss';

/*function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/cacheServiceWorker.js', { scope: 'cache-service-worker' })
        .then(registration => {
          console.log('ServiceWorker registration successful with  scope: ', registration.scope);
        })
        .catch((error: string) => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
}

function prepare(): StartReturnType | Promise<void> {
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

startServiceWorker();

prepare().then(() => {*/
ReactDOM.hydrate(
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
/*});*/
