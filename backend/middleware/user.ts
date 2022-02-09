import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

import { http } from '../controllers/AuthController';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { cookie } = req.headers;
  // @ts-ignore
  delete req.user;

  if (cookie === undefined) {
    return res.status(401).send();
  }
  try {
    const { data } = await http.get('/auth/user', { headers: { Cookie: cookie } });
    // @ts-ignore
    req.user = data;
  } catch (e) {
    if (!axios.isAxiosError(e)) {
      return res.status(500).send({ reason: 'Ошибка сервера' });
    }
  }
  next();
};
