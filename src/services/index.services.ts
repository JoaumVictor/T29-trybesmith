import { postProducts, getProducts } from './products.services';
import createNewUser from './users.services';
import getAllOrders from './orders.services';

const services = {
  postProducts,
  getProducts,
  createNewUser,
  getAllOrders,
};

export default services;
