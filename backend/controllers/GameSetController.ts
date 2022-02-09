import { Request, Response } from 'express';

import { nanoid } from 'nanoid';
import GameSet from '../models/GameSet';
import User from '../models/User';

export const GameSetController = {
  getById(req: Request, res: Response) {
    const { id } = req.params;
    return GameSet.findOne({ where: { id } }).then(result => {
      res.status(200).send(result);
    });
  },
  getByLink(req: Request, res: Response) {
    const { link } = req.params;
    return GameSet.findOne({ where: { link } }).then(result => {
      res.status(200).send(result);
    });
  },
  async create(req: Request, res: Response) {
    const { totalGames } = req.body;
    let link = nanoid();

    while (true) {
      const possibleExistedLink = await GameSet.findOne({ where: { link } });

      if (!possibleExistedLink) {
        return GameSet.create({ link, totalGames }).then(result => {
          res.status(200).send(result);
        });
      }

      link = nanoid();
    }
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    return User.update(req.body, { where: { id } }).then(result => {
      res.status(200).send(result);
    });
  },
};
