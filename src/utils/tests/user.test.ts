import { UserData } from '../../@types/UserTypes';
import { getUserFullName } from '../user';

describe('getUserFullName', () => {
  const user: UserData = {
    login: 'user',
    id: 1,
    first_name: 'name',
    second_name: 'surname',
    display_name: 'nickname',
    email: 'string',
    phone: 'string',
    avatar: '',
  };
  it('should return name, surname and display name', () => {
    const receivedFullName = getUserFullName(user, true);
    expect(receivedFullName).toBe('surname name aka nickname');
  });

  it('should return surname and nickname', () => {
    user.first_name = '';

    const receivedSurnameNickname = getUserFullName(user, true);
    expect(receivedSurnameNickname).toBe('surname aka nickname');
  });

  it('should return nickname', () => {
    user.second_name = '';

    const receivedNickname = getUserFullName(user, true);
    expect(receivedNickname).toBe('nickname');
  });

  it('should return dummy', () => {
    user.display_name = '';

    const receivedNickname = getUserFullName(user, false);
    expect(receivedNickname).toBe('Me');
  });
});
