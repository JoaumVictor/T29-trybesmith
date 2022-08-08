import models from '../models/index.models';

const getAllOrders = async () => {
  const { orders, products } = await models.getAllOrders();

  const result = orders.map((order) => {
    const productsIds = products.filter((product) => product.orderId === order.id);

    const formattedIds = productsIds.map((product) => product.id);

    return { ...order, productsIds: formattedIds };
  });

  return result;
};

export default getAllOrders;