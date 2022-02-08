import fetchMock from 'jest-fetch-mock';

import { AuthAPI } from '../AuthAPI';

import { authDummy } from './mock';
import {
  mutationCorrectRequest,
  mutationSuccessfulResponse, mutationUnsuccessfulResponse,
  queryCorrectRequest,
  querySuccessResponse,
  queryUnsuccessfulResponse,
} from './utils/response';

fetchMock.enableMocks();

describe('FetchUser', () => {
  const url = '/auth/user';
  const endpoint = AuthAPI.endpoints.fetchUser.initiate;
  const dummy = authDummy.user;

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  test('request is correct', () => {
    queryCorrectRequest(AuthAPI, endpoint, 'GET', url);
  });

  test('successful response', () => {
    querySuccessResponse(AuthAPI, endpoint, dummy);
  });

  test('unsuccessful response', () => {
    queryUnsuccessfulResponse(AuthAPI, endpoint);
  });
});

describe('SignUp', () => {
  const url = '/auth/signup';
  const endpoint = AuthAPI.endpoints.signUp.initiate;
  const dummy = authDummy.signUp;

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  test('request is correct', function () {
    mutationCorrectRequest(AuthAPI, endpoint, dummy, 'POST', url);
  });

  test('successful response', () => {
    mutationSuccessfulResponse(AuthAPI, endpoint, dummy, { id: 111 });
  });

  test('unsuccessful response', () => {
    mutationUnsuccessfulResponse(AuthAPI, endpoint, dummy);
  });
});
