import { Request, Response } from 'express';

import MiniGame from '../models/MiniGame';

export const MiniGameController = {
  getAll(req: Request, res: Response) {
    return MiniGame.findAll().then(result => {
      res.status(200).send(result);
    });
  },
  getById(req: Request, res: Response) {
    return MiniGame.findOne({ where: { id: req.params.id } }).then(result => {
      res.status(200).send(result);
    });
  },
};
