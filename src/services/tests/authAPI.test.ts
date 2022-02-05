import fetchMock from 'jest-fetch-mock';

import { EXTERNAL_API_URL } from '../../config';
import { AuthAPI } from '../AuthAPI';

import { authDummy } from './mock';
import { setupApiStore } from './utils/setupApiStore';

describe('FetchUser', () => {
  beforeEach((): void => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
  });

  afterEach((): void => {
    fetchMock.disableMocks();
  });

  it('request is correct', () => {
    const storeRef = setupApiStore(AuthAPI);
    fetchMock.mockResponse(JSON.stringify({}));
    return storeRef.store.dispatch<any>(AuthAPI.endpoints.fetchUser.initiate()).then(() => {
      expect(fetchMock).toBeCalledTimes(1);
      const { method, url } = fetchMock.mock.calls[0][0] as Request;

      expect(method).toBe('GET');
      expect(url).toBe(`${EXTERNAL_API_URL}/auth/user`);
    });
  });

  it('successful response', () => {
    const storeRef = setupApiStore(AuthAPI);
    fetchMock.mockResponse(JSON.stringify(authDummy.user));

    return storeRef.store
      .dispatch<any>(AuthAPI.endpoints.fetchUser.initiate())
      .then((action: any) => {
        const { status, data, isSuccess } = action;
        expect(status).toBe('fulfilled');
        expect(isSuccess).toBe(true);
        expect(data).toStrictEqual(authDummy.user);
      });
  });

  it('unsuccessful response', () => {
    const storeRef = setupApiStore(AuthAPI);
    fetchMock.mockReject(new Error('Internal Server Error'));

    return storeRef.store
      .dispatch<any>(AuthAPI.endpoints.fetchUser.initiate())
      .then((action: any) => {
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
  });
});

describe('SignUp', () => {
  beforeEach((): void => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
  });

  afterEach((): void => {
    fetchMock.disableMocks();
  });

  it('request is correct', function () {
    const storeRef = setupApiStore(AuthAPI);

    fetchMock.mockResponse(JSON.stringify({}));
    return storeRef.store
      .dispatch<any>(AuthAPI.endpoints.signUp.initiate(authDummy.signUp))
      .then(() => {
        expect(fetchMock).toBeCalledTimes(1);
        const request = fetchMock.mock.calls[0][0] as Request;
        const { method, url } = request;

        void request.json().then(data => {
          expect(data).toStrictEqual(authDummy.signUp);
        });

        expect(method).toBe('POST');
        expect(url).toBe(`${EXTERNAL_API_URL}/auth/signup`);
      });
  });

  it('successful response', () => {
    const storeRef = setupApiStore(AuthAPI);
    const responseData = { id: 123 };
    fetchMock.mockResponse(JSON.stringify(responseData));
    return storeRef.store
      .dispatch<any>(AuthAPI.endpoints.signUp.initiate(authDummy.signUp))
      .then((action: any) => {
        const { data } = action;
        expect(data).toStrictEqual(responseData);
      });
  });

  it('unsuccessful response', () => {
    const storeRef = setupApiStore(AuthAPI);
    fetchMock.mockReject(new Error('Internal Server Error'));

    return storeRef.store
      .dispatch<any>(AuthAPI.endpoints.signUp.initiate(authDummy.signUp))
      .then((action: any) => {
        const {
          error: { error },
        } = action;

        expect(error).toBe('Error: Internal Server Error');
      });
  });
});
