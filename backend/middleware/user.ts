import { NextFunction, Request, Response } from 'express';
const axios = require('axios');

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const res = await axios.get('https://ya-praktikum.tech/api/v2/auth/user', {
      withCredentials: true,
      headers: {
        Cookie: req.headers.cookie || '',
      },
    });
    console.log(res);
    res.user = res.data;

    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).send();
  }
};

export default middleware;
