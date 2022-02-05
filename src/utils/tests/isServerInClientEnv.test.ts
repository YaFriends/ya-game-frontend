/**
 * @jest-environment jsdom
 */

import { isServer } from '../isServer';

it('isServer works correctly on the client environment', () => {
  expect(isServer).toBe(false);
});
