import { EXTERNAL_API_URL, INTERNAL_API_URL } from '../config';

export const internalApi = (path: string): string => new URL(path, INTERNAL_API_URL).toString();
export const externalApi = (path: string): string => new URL(path, EXTERNAL_API_URL).toString();
