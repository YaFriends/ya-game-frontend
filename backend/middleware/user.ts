import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

import { http } from '../controllers/AuthController';
import { EXTERNAL_API_URL } from '../../src/config';

export default async (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  req.user = undefined;

  if (req.headers.cookie || true) {
    try {
      const response = await http.get(EXTERNAL_API_URL + '/auth/user');
      // @ts-ignore
      req.user = response.data;
    } catch (e) {
      if (!axios.isAxiosError(e)) {
        return res.status(500).send({ reason: 'Ошибка сервера' });
      }
    }
  }
  next();
};
