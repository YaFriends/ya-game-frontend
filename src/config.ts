export const EXTERNAL_API_URL = process.env.API_EXTERNAL;
export const INTERNAL_API_URL = process.env.API_INTERNAL || 'http://localhost';

console.log('EXTERNAL_API_URL', EXTERNAL_API_URL);
console.log('NODE_ENV', process.env.NODE_ENV);
console.log('TEST_KEK', process.env.TEST_KEK);
console.log('TEST_PISJA', process.env.TEST_PISJA);
console.log('TEST_PISJA3', process.env.TEST_PISJA3);
console.log('INTERNAL_API_URL', INTERNAL_API_URL);
