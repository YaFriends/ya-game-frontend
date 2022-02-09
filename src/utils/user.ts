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
    fullName.push(first_name);
  }
  if (display_name && showNickname) {
    if (first_name || second_name) {
      fullName.push(`aka ${display_name}`);
    } else {
      fullName.push(display_name);
    }
  }
  if (!second_name && !first_name && !display_name) {
    fullName.push('Me');
  }

  return fullName.join(' ');
};
