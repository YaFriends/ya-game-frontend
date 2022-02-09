import fetchMock from 'jest-fetch-mock';

import { UserAPI } from '../UserAPI';

import { userDummy } from './utils/mock';
import {
  mutationCorrectRequest,
  mutationSuccessfulResponse,
  mutationUnsuccessfulResponse,
} from './utils/queryService';

fetchMock.enableMocks();

describe('UpdateProfile', () => {
  const url = '/user/profile';
  const endpoint = UserAPI.endpoints.updateProfile.initiate;
  const dummy = userDummy.profileResponse;
  const responseDummy = userDummy.profileRequest;

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  test('request is correct', () => {
    mutationCorrectRequest(UserAPI, endpoint, 'PUT', url, dummy);
  });

  test('successful response', () => {
    mutationSuccessfulResponse(UserAPI, endpoint, responseDummy, dummy);
  });

  test('unsuccessful response', () => {
    mutationUnsuccessfulResponse(UserAPI, endpoint, dummy);
  });
});

describe('UpdatePassword', () => {
  const url = '/user/password';
  const endpoint = UserAPI.endpoints.updatePassword.initiate;
  const dummy = userDummy.password;

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  test('request is correct', () => {
    mutationCorrectRequest(UserAPI, endpoint, 'PUT', url, dummy);
  });

  test('unsuccessful response', () => {
    mutationUnsuccessfulResponse(UserAPI, endpoint, dummy);
  });
});

describe('UpdateAvatar', () => {
  const url = '/user/profile/avatar';
  const endpoint = UserAPI.endpoints.updateAvatar.initiate;
  const dummy = userDummy.profileRequest;

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  test('request is correct', () => {
    mutationCorrectRequest(UserAPI, endpoint, 'PUT', url, dummy);
  });

  test('unsuccessful response', () => {
    mutationUnsuccessfulResponse(UserAPI, endpoint, dummy);
  });
});
