import fetchMock from 'jest-fetch-mock';

import { setupApiStore } from './setupApiStore';

export const queryCorrectRequest = (
  api: any,
  endpoint: any,
  expectMethod: string,
  expectUrl: string
) => {
  const storeRef = setupApiStore(api);
  fetchMock.mockResponse(JSON.stringify({}));
  return storeRef.store.dispatch<any>(endpoint()).then(() => {
    expect(fetchMock).toBeCalledTimes(1);
    const { method, url } = fetchMock.mock.calls[0][0] as Request;

    expect(method).toBe(expectMethod);
    expect(url).toBe(`${expectUrl}`);
  });
};

export const querySuccessResponse = async (api: any, endpoint: any, dummy?: any) => {
  const storeRef = setupApiStore(api);
  fetchMock.mockResponse(JSON.stringify(dummy));

  return storeRef.store.dispatch<any>(endpoint()).then((action: any) => {
    const { status, data, isSuccess } = action;
    expect(status).toBe('fulfilled');
    expect(isSuccess).toBe(true);
    expect(data).toStrictEqual(dummy);
  });
};

export const queryUnsuccessfulResponse = (api: any, endpoint: any) => {
  const storeRef = setupApiStore(api);
  fetchMock.mockReject(new Error('Internal Server Error'));

  return storeRef.store.dispatch<any>(endpoint()).then((action: any) => {
    const {
      status,
      error: { error },
      isError,
      isLoading,
    } = action;

    expect(isLoading).toBe(false);
    expect(status).toBe('rejected');
    expect(isError).toBe(true);
    expect(error).toBe('Error: Internal Server Error');
  });
};

export const mutationCorrectRequest = (
  api: any,
  endpoint: any,
  expectMethod: string,
  expectUrl: string,
  dummy?: any
) => {
  const storeRef = setupApiStore(api);

  fetchMock.mockResponse(JSON.stringify({}));
  return storeRef.store.dispatch<any>(endpoint(dummy)).then(() => {
    expect(fetchMock).toBeCalledTimes(1);
    const request = fetchMock.mock.calls[0][0] as Request;
    const { method, url } = request;

    void request.json().then(data => {
      expect(data).toStrictEqual(dummy);
    });

    expect(method).toBe(expectMethod);
    expect(url).toBe(`${expectUrl}`);
  });
};

export const mutationSuccessfulResponse = (
  api: any,
  endpoint: any,
  responseData: any,
  dummy?: any
) => {
  const storeRef = setupApiStore(api);
  fetchMock.mockResponse(JSON.stringify(responseData));
  return storeRef.store.dispatch<any>(endpoint(dummy)).then((action: any) => {
    const { data } = action;
    expect(data).toStrictEqual(responseData);
  });
};

export const mutationUnsuccessfulResponse = (api: any, endpoint: any, dummy?: any) => {
  const storeRef = setupApiStore(api);
  fetchMock.mockReject(new Error('Internal Server Error'));

  return storeRef.store.dispatch<any>(endpoint(dummy)).then((action: any) => {
    const {
      error: { error },
    } = action;

    expect(error).toBe('Error: Internal Server Error');
  });
};
