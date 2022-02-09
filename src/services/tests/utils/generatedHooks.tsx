import { renderHook, act } from '@testing-library/react-hooks';
import fetchMock from 'jest-fetch-mock';
import React from 'react';
import { Provider } from 'react-redux';

import { AuthAPI } from '../../AuthAPI';

import { setupApiStore } from './setupApiStore';

const wrapper: React.FC = ({ children }) => {
  const storeRef = setupApiStore(AuthAPI);
  return <Provider store={storeRef.store}>{children}</Provider>;
};

export const queryHooks = async (hook: any, successResponse: boolean, dummy?: any) => {
  if (successResponse) {
    fetchMock.mockResponse(JSON.stringify(dummy));
  } else {
    fetchMock.mockReject(new Error('Internal Server Error'));
  }

  const { result, waitForNextUpdate } = renderHook(() => hook(), {
    wrapper,
  });

  const initialResponse = result.current;
  expect(initialResponse.data).toBeUndefined();
  expect(initialResponse.isLoading).toBe(true);
  await waitForNextUpdate();

  const nextResponse = result.current;
  if (successResponse) {
    expect(nextResponse.data).not.toBeUndefined();
  }
  expect(nextResponse.isLoading).toBe(false);
  expect(nextResponse.isSuccess).toBe(successResponse);
};

export const mutationHooks = async (hook: any, successResponse: boolean, dummy?: any) => {
  if (successResponse) {
    fetchMock.mockResponse(JSON.stringify(dummy));
  } else {
    fetchMock.mockReject(new Error('Internal Server Error'));
  }

  const { result, waitForNextUpdate } = renderHook(() => hook(), {
    wrapper,
  });
  const [create, initialResponse] = result.current;
  expect(initialResponse.data).toBeUndefined();
  expect(initialResponse.isLoading).toBe(false);

  act(() => {
    void create(dummy);
  });

  const loadingResponse = result.current[1];
  expect(loadingResponse.data).toBeUndefined();
  expect(loadingResponse.isLoading).toBe(true);

  await waitForNextUpdate();

  const loadedResponse = result.current[1];
  if (successResponse) {
    expect(loadedResponse.data).not.toBeUndefined();
  }
  expect(loadedResponse.isLoading).toBe(false);
  expect(loadedResponse.isSuccess).toBe(successResponse);
};
