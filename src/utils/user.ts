import { UserData } from '../@types/UserTypes';

export const getUserFullName = (
  { second_name = '', first_name = '', display_name = '' }: UserData,
  showNickname: boolean
): string => {
  const fullName = [];
  if (second_name) {
    fullName.push(second_name);
  }
  if (first_name) {
    fullName.push(name);
  }
  if (display_name && showNickname) {
    fullName.push(`aka ${display_name}`);
  }

  return fullName.join(' ');
};
