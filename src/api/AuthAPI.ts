import { http } from './http';
import { AxiosPromise } from 'axios';
import { UserData } from './UserAPI';

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
    return http.post(`${this.endpoint}/signup`, data);
  }

  login(data: LoginData): AxiosPromise<void> {
    return http.post(`${this.endpoint}/signin`, data);
  }

  logout(): AxiosPromise<void> {
    return http.post(`${this.endpoint}/logout`);
  }

  read(): AxiosPromise<UserData> {
    return http.get(`${this.endpoint}/user`);
  }
}
