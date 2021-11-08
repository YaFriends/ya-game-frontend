import { UserData } from './UserAPI';
import { http } from './http';

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

  signUp(data: SignUpData): Promise<{ id: number }> {
    return http.post(`${this.endpoint}/signup`, data);
  }

  login(data: LoginData): Promise<void> {
    return http.post(`${this.endpoint}/signin`, data);
  }

  logout(): Promise<void> {
    return http.post(`${this.endpoint}/logout`);
  }

  read(): Promise<UserData> {
    return http.get(`${this.endpoint}/user`);
  }
}
