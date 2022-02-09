import fetchMock from 'jest-fetch-mock';
import React from 'react';
import { Provider } from 'react-redux';

import {
  UserAPI,
  useUpdateAvatarMutation,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from '../UserAPI';

import { userDummy } from './utils/mock';
import { mutationHooks } from './utils/generatedHooks';
import { setupApiStore } from './utils/setupApiStore';

export const wrapper: React.FC = ({ children }) => {
  const storeRef = setupApiStore(UserAPI);
  return <Provider store={storeRef.store}>{children}</Provider>;
};

describe('AuthAPI hooks', () => {
  fetchMock.enableMocks();

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  describe('useUpdateAvatarMutation', () => {
    test('success', async () => {
      await mutationHooks(useUpdateAvatarMutation, true, userDummy.profileResponse);
    });

    test('internal server error', async () => {
      await mutationHooks(useUpdateAvatarMutation, false, userDummy.profileResponse);
    });
  });

  describe('useUpdatePasswordMutation', () => {
    test('success', async () => {
      await mutationHooks(useUpdatePasswordMutation, true, userDummy.password);
    });

    test('internal server error', async () => {
      await mutationHooks(useUpdatePasswordMutation, false, userDummy.password);
    });
  });

  describe('useUpdateProfileMutation', () => {
    test('success', async () => {
      await mutationHooks(useUpdateProfileMutation, true, userDummy.password);
    });

    test('internal server error', async () => {
      await mutationHooks(useUpdateProfileMutation, false, userDummy.password);
    });
  });
});
