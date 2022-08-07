import { NextFunction, Request, Response } from 'express';
import CustomError from '../helpers/customError';
import httpStatusCodes from '../helpers/httpStatusCode';

function productsRequired(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  if (!name || !amount) {
    throw new CustomError(httpStatusCodes.BAD_REQUEST, 'Name and amount are required');
  }
  next();
}

export default productsRequired;
