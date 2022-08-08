import { postProducts, getProducts } from './products.controller';
import createNewUser from './users.controller';
import getAllOrders from './orders.controller';

const controllers = {
  postProducts,
  getProducts,
  createNewUser,
  getAllOrders,
};

export default controllers;