import { Request, Response } from 'express';
import httpStatusCodes from '../helpers/httpStatusCode';
import services from '../services/index.services';

async function createNewUser(req: Request, res: Response) {
  try {
    const response = await services.createNewUser(req.body);
    return res.status(httpStatusCodes.CREATED).json({ token: response });
  } catch (error: any) {
    return res.status(error.status).json({ message: error.message });
  }
}

export default createNewUser;
