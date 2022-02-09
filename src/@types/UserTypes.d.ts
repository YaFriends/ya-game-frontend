import { currentTheme } from '../store/slices/themeSlice';

export interface UserData {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
  theme: currentTheme;
  status?: unknown;
}

export interface UserUpdatePasswordProps {
  oldPassword: string;
  newPassword: string;
}

export interface SearchUsersProps {
  login: string;
}

export interface ChangePasswordResponse {
  data: 'OK' | { reason: string };
}

export type UserUpdateProfileProps = Omit<UserData, 'avatar' | 'id'>;
