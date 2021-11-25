import { UserData } from './UserTypes';

export interface LoginData {
  login: string;
  password: string;
}

export type SignUpData = Omit<UserData, 'id' | 'display_name' | 'avatar'> & { password: string };

export type CurrentUser = UserData | null;

export interface UseAuth {
  isAuth: boolean;
  currentUser: CurrentUser;
}