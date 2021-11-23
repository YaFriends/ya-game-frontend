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
