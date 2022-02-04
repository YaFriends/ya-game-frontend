import { Rivals } from '../../@types/MiniGame';
import { UserData } from '../../@types/UserTypes';
import { getRivals } from '../game';

describe('getRivals', () => {
  const firstUser: UserData = {
    login: 'firstPlayer',
    id: 1,
    first_name: 'Test',
    second_name: 'test 1',
    display_name: 'Testovich',
    email: 'string',
    phone: 'string',
    avatar: '',
  };

  const secondUser: UserData = {
    login: 'secondPlayer',
    id: 1,
    first_name: 'Test',
    second_name: 'test 1',
    display_name: 'Testovich',
    email: 'string',
    phone: 'string',
    avatar: '',
  };

  it('should return a string of opponents', () => {
    const rivals: Rivals = [firstUser, secondUser];

    const receivedValue = getRivals(rivals);
    expect(receivedValue).toBe('firstPlayer vs secondPlayer');
  });
});
