import { isServer } from '../isServer';

describe('isServer', () => {
  it('works correctly on the server environment', () => {
    expect(isServer).toBe(true);
  });

  //TODO mock window for testing isServer in client env.
});
