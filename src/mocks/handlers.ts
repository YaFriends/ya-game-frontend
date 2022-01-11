import { rest } from 'msw';

import { MiniGame } from '../@types/GameSet';
import { Rivals } from '../@types/MiniGame';
import { INTERNAL_API_URL } from '../config';

export const handlers = [
  rest.get(`${INTERNAL_API_URL}/test/:data`, (req, res, ctx) => {
    const { data } = req.params;
    const body = {
      res: data,
    };

    return res(ctx.json(body), ctx.status(200));
  }),
  rest.get('/session/create', (req, res, ctx) => {
    const body = 'testLinkIsHere';
    return res(ctx.json(body), ctx.status(200));
  }),
  rest.get('/session/:id', (req, res, ctx) => {
    const body: { id: number; miniGames: MiniGame[]; date: string; players: Rivals } = {
      id: 1,
      miniGames: [],
      date: '2020-02-02',
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
    };
    return res(ctx.json(body), ctx.status(200));
  }),
];
