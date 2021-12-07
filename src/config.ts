console.log('process', process);
console.log('process-EXTERNAL_API_URL', Object.assign({}, process.env?.API_EXTERNAL));
console.log('process-EXTERNAL_API_URL', process.env?.API_EXTERNAL);
console.log('process-INTERNAL_API_URL', process.env?.API_INTERNAL);

export const EXTERNAL_API_URL = process.env.API_EXTERNAL;
export const INTERNAL_API_URL = process.env.API_INTERNAL || 'http://localhost';

console.log('EXTERNAL_API_URL', EXTERNAL_API_URL);
console.log('INTERNAL_API_URL', INTERNAL_API_URL);
