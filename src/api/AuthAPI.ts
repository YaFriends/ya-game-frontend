import { AxiosPromise } from 'axios';

import { UserData } from './UserAPI';
import { httpExternal } from './http';

export interface LoginData {
  login: string;
  password: string;
}

export type SignUpData = Omit<UserData, 'id' | 'display_name' | 'avatar'> & { password: string };

export class AuthAPI {
  protected endpoint: string;

  constructor() {
    this.endpoint = '/auth';
  }

  signUp(data: SignUpData): AxiosPromise<{ id: number }> {
    return httpExternal.post(`${this.endpoint}/signup`, data);
  }

  login(data: LoginData): AxiosPromise<void> {
    return httpExternal.post(`${this.endpoint}/signin`, data);
  }

  logout(): AxiosPromise<void> {
    return httpExternal.post(`${this.endpoint}/logout`);
  }

  read(): AxiosPromise<UserData> {
    return httpExternal.get(`${this.endpoint}/user`);
  }
}
