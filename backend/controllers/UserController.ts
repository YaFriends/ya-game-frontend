import { Request, Response } from 'express';

import User from '../models/User';
import { RequestWithUser } from '../middleware/user';

export const UserController = {
  create(req: Request, res: Response) {
    return User.create(req.body).then(result => {
      res.status(201).send(result);
    });
  },
  async updateById(req: RequestWithUser, res: Response) {
    const user = await UserController.getByExternalId(req);
    if (user) {
      return user.update(req.body).then(({ theme }) => {
        res.status(204).send({ ...req.user, theme });
      });
    }
    return res.status(404).send();
  },
  getByExternalId(req: Request): Promise<User | null> {
    return User.findOne({ where: { external_id: req.body.id } });
  },
};
