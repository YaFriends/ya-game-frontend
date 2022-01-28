import { Request, Response } from 'express';

import GameHistory from '../models/GameHistory';

export const GameHistoryController = {
  create(req: Request, res: Response) {
    return GameHistory.create(req.body).then(result => {
      res.status(200).send(result);
    });
  },
  getByUserId(req: Request, res: Response) {
    const { user_id } = req.body;
    return GameHistory.findOne({ where: { user_id } }).then(result => {
      res.status(200).send(result);
    });
  },
};
