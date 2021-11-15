import { rest } from 'msw';

import { INTERNAL_API_URL } from '../config';

export const handlers = [
  rest.get(`${INTERNAL_API_URL}/test/:data`, (req, res, ctx) => {
    const { data } = req.params;
    const body = {
      res: data,
    };

    return res(ctx.json(body), ctx.status(200));
  }),
  rest.get('/session/:id', (req, res, ctx) => {
    const body = {
      id: 1,
      miniGames: [
        {
          id: 1,
          name: 'tic tac toe',
          icon: '/static/img/games/tic_tac_toe/icon.jpg',
        },
      ],
      date: '2020-02-02',
      teams: [{ players: ['Player 1'] }, { players: ['Player 2'] }],
    };
    return res(ctx.json(body), ctx.status(200));
  }),
];
