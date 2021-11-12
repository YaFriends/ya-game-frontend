import { UserData } from '../../api/UserAPI';
import { GameSetHistoryProps } from '../../components/GameSetHistoryItem/GameSetHistoryItem';

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

export const DUMMY_GAME_LIST: GameSetHistoryProps[] = [
  {
    id: 1,
    miniGames: [{ id: 1, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' }],
    date: '2021-04-11',
    teams: [{ players: ['Player 1'] }, { players: ['Player 2'] }],
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
    teams: [{ players: ['Player 2'] }, { players: ['Player 3'] }],
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
    teams: [{ players: ['Player 5'] }, { players: ['Player 6'] }],
    result: {
      id: 1,
      type: 'win',
    },
  },
  {
    id: 4,
    miniGames: [{ id: 1, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' }],
    date: '2021-04-11',
    teams: [{ players: ['Player 1'] }, { players: ['Player 2'] }],
    result: {
      id: 1,
      type: 'win',
    },
  },
  {
    id: 5,
    miniGames: [{ id: 1, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' }],
    date: '2021-04-11',
    teams: [{ players: ['Player 1'] }, { players: ['Player 2'] }],
    result: {
      id: 1,
      type: 'win',
    },
  },
  {
    id: 6,
    miniGames: [
      { id: 1, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 2, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 3, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
    ],
    date: '2021-04-11',
    teams: [{ players: ['Player 2'] }, { players: ['Player 3'] }],
    result: {
      id: 1,
      type: 'win',
    },
  },
  {
    id: 7,
    miniGames: [
      { id: 1, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 2, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 3, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 4, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
      { id: 5, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' },
    ],
    date: '2021-04-11',
    teams: [{ players: ['Player 5'] }, { players: ['Player 6'] }],
    result: {
      id: 1,
      type: 'lose',
    },
  },
  {
    id: 8,
    miniGames: [{ id: 1, name: 'Test', icon: '/static/img/games/click_more/icon.jpg' }],
    date: '2021-04-11',
    teams: [{ players: ['Player 1'] }, { players: ['Player 2'] }],
    result: {
      id: 1,
      type: 'lose',
    },
  },
];
