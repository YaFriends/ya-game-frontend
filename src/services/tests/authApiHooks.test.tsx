import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { Provider } from 'react-redux';

import { AuthAPI } from '../AuthAPI';

import { setupApiStore } from './utils/setupApiStore';

const updateTimeout = 5000;

beforeEach((): void => {
  fetchMock.resetMocks();
});

const wrapper: React.FC = ({ children }) => {
  const storeRef = setupApiStore(AuthAPI);
  return <Provider store={storeRef.store}>{children}</Provider>;
};

describe()
