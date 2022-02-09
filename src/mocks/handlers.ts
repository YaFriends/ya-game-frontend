import { rest } from 'msw';

import { GameSet } from '../@types/GameSet';
import { INTERNAL_API_URL } from '../config';

const setupGameSet = (totalGames: number): GameSet => ({
  id: 1,
  miniGames: [],
  bans: [],
  totalGames,
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
      theme: 'dark',
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
      theme: 'dark',
    },
  ],
});

let currentGameSet = setupGameSet(0);

export const handlers = [
  rest.get(`${INTERNAL_API_URL}/test/:data`, (req, res, ctx) => {
    const { data } = req.params;
    const body = {
      res: data,
    };

    return res(ctx.json(body), ctx.status(200));
  }),
  rest.post<{ totalGames: number }>(`${INTERNAL_API_URL}/session/create`, (req, res, ctx) => {
    const { totalGames } = req.body;

    currentGameSet = setupGameSet(totalGames);
    return res(ctx.json(currentGameSet), ctx.status(200));
  }),
  rest.get(`${INTERNAL_API_URL}/session/:id`, (req, res, ctx) => {
    return res(ctx.json(currentGameSet), ctx.status(200));
  }),
  rest.patch<Partial<GameSet> & Pick<GameSet, 'id'>>(
    `${INTERNAL_API_URL}/session/:id`,
    (req, res, ctx) => {
      currentGameSet = { ...currentGameSet, ...req.body };
      return res(ctx.json(currentGameSet), ctx.status(200));
    }
  ),
];
