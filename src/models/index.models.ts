import { postProducts, getProducts } from './products.models';
import { createNewUser, getUserByUsername } from './users.models';
import getAllOrders from './orders.models';

const models = {
  postProducts,
  getProducts,
  createNewUser,
  getUserByUsername,
  getAllOrders,
};

export default models;