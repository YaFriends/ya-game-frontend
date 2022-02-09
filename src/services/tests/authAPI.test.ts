import fetchMock from 'jest-fetch-mock';

import { AuthAPI } from '../AuthAPI';

import { authDummy } from './utils/mock';
import {
  mutationCorrectRequest,
  mutationSuccessfulResponse,
  mutationUnsuccessfulResponse,
  queryCorrectRequest,
  querySuccessResponse,
  queryUnsuccessfulResponse,
} from './utils/queryService';

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

  test('request is correct', () => {
    mutationCorrectRequest(AuthAPI, endpoint, 'POST', url, dummy);
  });

  test('successful response', () => {
    mutationSuccessfulResponse(AuthAPI, endpoint, { id: 111 }, dummy);
  });

  test('unsuccessful response', () => {
    mutationUnsuccessfulResponse(AuthAPI, endpoint, dummy);
  });
});

describe('SignIn', () => {
  const url = '/auth/signin';
  const endpoint = AuthAPI.endpoints.login.initiate;
  const dummy = authDummy.login;

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  test('request is correct', () => {
    mutationCorrectRequest(AuthAPI, endpoint, 'POST', url, dummy);
  });

  test('successful response', () => {
    mutationSuccessfulResponse(AuthAPI, endpoint, 'ok', dummy);
  });

  test('unsuccessful response', () => {
    mutationUnsuccessfulResponse(AuthAPI, endpoint, dummy);
  });
});

describe('Logout', () => {
  const url = '/auth/logout';
  const endpoint = AuthAPI.endpoints.logout.initiate;

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  test('request is correct', () => {
    queryCorrectRequest(AuthAPI, endpoint, 'POST', url);
  });

  test('successful response', () => {
    mutationSuccessfulResponse(AuthAPI, endpoint, 'ok');
  });

  test('unsuccessful response', () => {
    mutationUnsuccessfulResponse(AuthAPI, endpoint);
  });
});


