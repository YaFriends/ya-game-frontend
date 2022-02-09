import { isServer } from '../isServer';

test('isServer works correctly on the server environment', () => {
  expect(isServer).toBe(true);
});
