import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';
import { EXTERNAL_API_URL } from '../../src/config';

export const http = axios.create({
  baseURL: EXTERNAL_API_URL,
  withCredentials: true,
});

export const AuthController = {
  signIn: async (req: Request, res: Response) => {
    try {
      const { headers } = await http.post('/auth/signin', req.body);
      res.setHeader('set-cookie', headers['set-cookie']!);
      res.sendStatus(200);
    } catch (e: unknown) {
      const { response: er } = e as AxiosError;
      if (er !== undefined) {
        res.sendStatus(er.status);
      } else {
        res.sendStatus(500);
      }
    }
  },

  signUp: async (req: Request, res: Response) => {
    try {
      const { data } = await http.post('/auth/signup', req.body);
      return res.status(201).send(data);
    } catch (e: unknown) {
      const { response: er } = e as AxiosError;
      if (er !== undefined) {
        return res.sendStatus(er.status);
      }

      return res.sendStatus(500);
    }
  },

  logout: async (req: Request, res: Response) => {
    try {
      const { headers } = await http.post('/auth/logout', null, {
        headers: { cookie: req.headers.cookie! },
      });

      res.setHeader('set-cookie', headers['set-cookie']!);
      return res.sendStatus(200);
    } catch (e: unknown) {
      const { response: er } = e as AxiosError;
      if (er !== undefined) {
        res.sendStatus(er.status);
      } else {
        res.sendStatus(500);
      }
    }
  },

  getUser: async (req: Request, res: Response) => {
    const { cookie } = req.headers;
    try {
      if (cookie === undefined) {
        res.status(401);
      } else {
        const { data } = await http.get('/auth/user', { headers: { Cookie: cookie } });

        return res.status(200).send(data);
      }
    } catch (e: unknown) {
      const { response: er } = e as AxiosError;
      if (er !== undefined) {
        return res.sendStatus(er.status);
      } else {
        return res.sendStatus(500);
      }
    }
  },
};
