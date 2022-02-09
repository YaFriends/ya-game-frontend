const authDummy = {
  signUp: {
    first_name: 'string',
    second_name: 'string',
    login: 'string',
    email: 'string',
    password: 'string',
    phone: 'string',
  },

  user: {
    id: 123,
    first_name: 'Petya',
    second_name: 'Pupkin',
    display_name: 'Petya Pupkin',
    login: 'userLogin',
    email: 'my@email.com',
    phone: '89223332211',
    avatar: '/path/to/avatar.jpg',
  },

  login: {
    login: 'string',
    password: 'string',
  },
};

const gameSetDummy = {
  session: {
    id: 1,
    miniGames: [],
    bans: [],
    totalGames: 2,
    date: '2020-02-02',
    link: 'testLinkIsHere',
    players: [
      {
        login: 'Player 1',
        id: 1,
        first_name: 'Test',
        second_name: 'test 1',
        display_name: 'Testovich',
        email: 'string',
        phone: 'string',
        avatar: '',
      },
      {
        login: 'Player 2',
        id: 2,
        first_name: 'Test',
        second_name: 'test 1',
        display_name: 'Testovich',
        email: 'string',
        phone: 'string',
        avatar: '',
      },
    ],
  },
};

const userDummy = {
  profileRequest: {
    first_name: 'string',
    second_name: 'string',
    display_name: 'string',
    login: 'string',
    email: 'string',
    phone: 'string',
  },
  profileResponse: {
    id: 123,
    first_name: 'Petya',
    second_name: 'Pupkin',
    display_name: 'Petya Pupkin',
    login: 'userLogin',
    email: 'my@email.com',
    phone: '89223332211',
    avatar: '/path/to/avatar.jpg',
  },
  password: {
    oldPassword: 'string',
    newPassword: 'string',
  },
};

export { authDummy, gameSetDummy, userDummy };
