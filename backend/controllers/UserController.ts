import { Request, Response } from 'express';

import User from '../models/User';

export const UserController = {
  create(req: Request, res: Response) {
    return User.create(req.body).then(result => {
      res.status(201).send(result);
    });
  },
  updateById(req: Request, res: Response) {
    return User.update(req.body, { where: { id: req.body.id } }).then(result => {
      res.status(204).send(result);
    });
  },
  getById(req: Request, res: Response) {
    return User.findOne({ where: { id: req.body.id } }).then(result => {
      res.status(200).send(result);
    });
  },
  getByExternalId(req: Request, res: Response) {
    return User.findOne({ where: { external_id: req.body.id } }).then(result => {
      res.status(200).send(result);
    });
  },
};
