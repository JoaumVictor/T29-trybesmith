import { Request, Response } from 'express';
import services from '../services/index.services';
import httpStatusCodes from '../helpers/httpStatusCode';

const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await services.getAllOrders();
    return res.status(httpStatusCodes.OK).json(orders);
  } catch (error) {
    return res.status(httpStatusCodes.BAD_REQUEST).json({ message: error });
  }
};

export default getAllOrders;
