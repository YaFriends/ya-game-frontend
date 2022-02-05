import { isServer } from '../isServer';

it('isServer works correctly on the server environment', () => {
  expect(isServer).toBe(true);
});
