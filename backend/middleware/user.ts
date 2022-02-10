import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

import { http } from '../controllers/AuthController';
import User, { UserTheme } from '../models/User';
import { UserData } from '../../src/@types/UserTypes';

export type RequestWithUser = Request & {
  user: UserData & { theme: UserTheme };
};

export default async (req: Request, res: Response, next: NextFunction) => {
  const { cookie } = req.headers;
  delete req.user;

  if (cookie === undefined) {
    return res.status(401).send();
  }
  try {
    const { data } = await http.get('/auth/user', { headers: { Cookie: cookie } });

    const [{ theme }] = await User.findOrCreate({
      where: { external_id: data.id },
      defaults: {
        external_id: data.id,
        avatar_path: data.avatar,
        display_name: data.display_name,
        theme: 'dark',
      },
    });
    req.user = { ...data, theme };
  } catch (e) {
    if (!axios.isAxiosError(e)) {
      return res.status(500).send({ reason: 'Ошибка сервера' });
    }
  }
  next();
};
