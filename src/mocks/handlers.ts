import { rest } from 'msw';

import { MiniGame } from '../@types/GameSet';
import { INTERNAL_API_URL } from '../config';
import { Team } from '../core/MiniGame';

export const handlers = [
  rest.get(`${INTERNAL_API_URL}/test/:data`, (req, res, ctx) => {
    const { data } = req.params;
    const body = {
      res: data,
    };

    return res(ctx.json(body), ctx.status(200));
  }),
  rest.get('/session/:id', (req, res, ctx) => {
    const body: { id: number; miniGames: MiniGame[]; date: string; teams: Team[] } = {
      id: 1,
      miniGames: [
        {
          id: 1,
          name: 'Крестики-нолики',
          icon: '/static/img/games/tic_tac_toe/icon.jpg',
        },
      ],
      date: '2020-02-02',
      teams: [
        {
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
          ],
        },
        {
          players: [
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
      ],
    };
    return res(ctx.json(body), ctx.status(200));
  }),
];
