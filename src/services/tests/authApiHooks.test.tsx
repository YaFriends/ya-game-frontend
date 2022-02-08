import fetchMock from 'jest-fetch-mock';
import React from 'react';
import { Provider } from 'react-redux';

import { AuthAPI, useFetchUserQuery, useSignUpMutation } from '../AuthAPI';

import { authDummy } from './mock';
import { queryHooks, mutationHooks } from './utils/hooks';
import { setupApiStore } from './utils/setupApiStore';

export const wrapper: React.FC = ({ children }) => {
  const storeRef = setupApiStore(AuthAPI);
  return <Provider store={storeRef.store}>{children}</Provider>;
};

describe('AuthAPI hooks', () => {
  fetchMock.enableMocks();

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  describe('useFetchUserQuery', () => {
    test('success', async () => {
      await queryHooks(useFetchUserQuery, false, authDummy.user);
    });

    test('internal server error', async () => {
      await queryHooks(useFetchUserQuery, false, authDummy.user);
    });
  });

  describe('useSignUpMutation', () => {
    test('success', async () => {
      await mutationHooks(useSignUpMutation, true, authDummy.signUp);
    });

    test('internal server error', async () => {
      await mutationHooks(useSignUpMutation, false, authDummy.signUp);
    });
  });
});
