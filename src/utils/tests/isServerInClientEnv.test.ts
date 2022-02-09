/**
 * @jest-environment jsdom
 */

import { isServer } from '../isServer';

test('isServer works correctly on the client environment', () => {
  expect(isServer).toBe(false);
});
