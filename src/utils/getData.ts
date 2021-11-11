import { AxiosResponse } from 'axios';
export const getData = (response: AxiosResponse): unknown => response.data;
