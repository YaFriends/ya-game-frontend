import { GameSetHistory } from '../../@types/GameSet';
import { UserData } from '../../@types/UserTypes';

export const DUMMY_USER: UserData = {
  id: 1,
  first_name: 'Test',
  second_name: 'Testov',
  display_name: 'Testovich',
  login: 'testLogin',
  email: 'test@test.com',
  phone: '8 925 562 16 59',
  avatar: '',
};

export const DUMMY_STATS = {
  wins: 0,
};

export const DUMMY_GAME_LIST: GameSetHistory[] = [
  {
    id: 1,
    miniGames: [{ id: 1, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' }],
    date: '2021-04-11',
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
        id: 1,
        first_name: 'Test',
        second_name: 'test 1',
        display_name: 'Testovich',
        email: 'string',
        phone: 'string',
        avatar: '',
      },
    ],
    result: {
      id: 1,
      type: 'win',
    },
  },
  {
    id: 2,
    miniGames: [
      { id: 1, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 2, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 3, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
    ],
    date: '2021-04-11',
    players: [
      {
        login: 'Player 2',
        id: 1,
        first_name: 'Test',
        second_name: 'test 1',
        display_name: 'Testovich',
        email: 'string',
        phone: 'string',
        avatar: '',
      },
      {
        login: 'Player 3',
        id: 1,
        first_name: 'Test',
        second_name: 'test 1',
        display_name: 'Testovich',
        email: 'string',
        phone: 'string',
        avatar: '',
      },
    ],
    result: {
      id: 1,
      type: 'win',
    },
  },
  {
    id: 3,
    miniGames: [
      { id: 1, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 2, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 3, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 4, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 5, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
    ],
    date: '2021-04-11',
    players: [
      {
        login: 'Player 5',
        id: 1,
        first_name: 'Test',
        second_name: 'test 1',
        display_name: 'Testovich',
        email: 'string',
        phone: 'string',
        avatar: '',
      },
      {
        login: 'Player 6',
        id: 1,
        first_name: 'Test',
        second_name: 'test 1',
        display_name: 'Testovich',
        email: 'string',
        phone: 'string',
        avatar: '',
      },
    ],
    result: {
      id: 2,
      type: 'lose',
    },
  },
  {
    id: 4,
    miniGames: [{ id: 1, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' }],
    date: '2021-04-11',
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
        id: 1,
        first_name: 'Test',
        second_name: 'test 1',
        display_name: 'Testovich',
        email: 'string',
        phone: 'string',
        avatar: '',
      },
    ],
    result: {
      id: 1,
      type: 'win',
    },
  },
];
