import fetchMock from 'jest-fetch-mock';
import React from 'react';
import { Provider } from 'react-redux';

import {
  GameSetAPI,
  useFetchSessionQuery,
  useGenerateLinkQuery,
  useUpdateGameSetMutation,
} from '../GameSetAPI';

import { gameSetDummy } from './utils/mock';
import { queryHooks, mutationHooks } from './utils/generatedHooks';
import { setupApiStore } from './utils/setupApiStore';

export const wrapper: React.FC = ({ children }) => {
  const storeRef = setupApiStore(GameSetAPI);
  return <Provider store={storeRef.store}>{children}</Provider>;
};

describe('GameSetAPI hooks', () => {
  fetchMock.enableMocks();

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  describe('useFetchUserQuery', () => {
    test('success', async () => {
      await queryHooks(useFetchSessionQuery, false, gameSetDummy.session);
    });

    test('internal server error', async () => {
      await queryHooks(useFetchSessionQuery, false, gameSetDummy.session);
    });
  });

  describe('useFetchUserQuery', () => {
    test('success', async () => {
      await queryHooks(useGenerateLinkQuery, false, gameSetDummy.session);
    });

    test('internal server error', async () => {
      await queryHooks(useGenerateLinkQuery, false, gameSetDummy.session);
    });
  });

  describe('useUpdateGameSetMutation', () => {
    test('success', async () => {
      await mutationHooks(useUpdateGameSetMutation, true, gameSetDummy.session);
    });

    test('internal server error', async () => {
      await mutationHooks(useUpdateGameSetMutation, false, gameSetDummy.session);
    });
  });
});
