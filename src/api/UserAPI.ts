import http from './http';

export interface UserData {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UserUpdatePasswordProps {
  oldPassword: string;
  newPassword: string;
}

export interface SearchUsersProps {
  login: string;
}

export type UserUpdateProfileProps = Omit<UserData, 'avatar' | 'id'>;

export class UserAPI {
  protected endpoint: string;

  protected constructor() {
    this.endpoint = '/user';
  }

  updateProfile(data: UserUpdateProfileProps): Promise<UserData> {
    return http.put(`${this.endpoint}/profile`, data);
  }

  updateAvatar(data: FormData): Promise<UserData> {
    return http.put(`${this.endpoint}/profile/avatar`, data);
  }
  updatePassword(data: UserUpdatePasswordProps): Promise<void> {
    return http.put(`${this.endpoint}/password`, data);
  }

  searchUsers(data: SearchUsersProps): Promise<[UserData]> {
    return http.post(`${this.endpoint}/search`, data);
  }
}