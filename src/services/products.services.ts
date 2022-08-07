import models from '../models/index.models';
import { TpostProducts } from '../@types/Tproducts';

async function postProducts(obj: TpostProducts) {
  const post = await models.postProducts(obj);
  return post;
}

async function getProducts() {
  const post = await models.getProducts();
  return post;
}

export { postProducts, getProducts };
