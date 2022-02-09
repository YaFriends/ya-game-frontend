import { renderObject } from '../renderObject';

describe('renderObject', () => {
  test('should return serialized data', () => {
    const receivedValue = renderObject('<script></script>');
    expect(receivedValue).toBe('"\\u003Cscript\\u003E\\u003C\\u002Fscript\\u003E"');
  });

  test('should return string', () => {
    const receivedValueIsUndefined = renderObject(undefined);
    expect(receivedValueIsUndefined).toBe('undefined');

    const receivedValueIsNull = renderObject(null);
    expect(receivedValueIsNull).toBe('null');
  });
});
