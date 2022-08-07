import { Request, Response } from 'express';
import httpStatusCode from '../helpers/httpStatusCode';
import services from '../services/index.services';

async function postProducts(req: Request, res: Response) {
  try {
    const { name, amount } = req.body;
    const post = await services.postProducts({ name, amount });
    return res.status(httpStatusCode.CREATED).json(post);
  } catch (error) {
    return res.status(httpStatusCode.BAD_REQUEST).json({ message: error });
  }
}

async function getProducts(_req: Request, res: Response) {
  try {
    const get = await services.getProducts();
    return res.status(httpStatusCode.OK).json(get);
  } catch (error) {
    return res.status(httpStatusCode.BAD_REQUEST).json({ message: error });
  }
}

export { postProducts, getProducts };
