import fetchMock from 'jest-fetch-mock';

import { GameSetAPI } from '../GameSetAPI';

import { gameSetDummy } from './utils/mock';
import { querySuccessResponse, queryUnsuccessfulResponse } from './utils/queryService';

fetchMock.enableMocks();

describe('FetchSession', () => {
  const endpoint = GameSetAPI.endpoints.fetchSession.initiate;
  const dummy = gameSetDummy.session;

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  test('successful response', () => {
    querySuccessResponse(GameSetAPI, endpoint, dummy);
  });

  test('unsuccessful response', () => {
    queryUnsuccessfulResponse(GameSetAPI, endpoint);
  });
});

describe('GenerateLink', () => {
  const endpoint = GameSetAPI.endpoints.generateLink.initiate;
  const dummy = gameSetDummy.session;

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  test('successful response', () => {
    querySuccessResponse(GameSetAPI, endpoint, dummy);
  });

  test('unsuccessful response', () => {
    queryUnsuccessfulResponse(GameSetAPI, endpoint);
  });
});
