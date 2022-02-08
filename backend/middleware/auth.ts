import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  console.log('wtf', req.user);
  // @ts-ignore
  if (req.user) {
    return next();
  }

  return res.status(401).send();
};
