import { getData } from './getData';
import { httpInternal } from '../api/http';

describe('Test getData fn', () => {
  it('Should return inner data field', async () => {
    const FAKE_DATA = 'string';

    const response = await httpInternal.get(`/test/${FAKE_DATA}`).then(getData);

    expect(response).toMatchObject({ res: FAKE_DATA });
  });
});
