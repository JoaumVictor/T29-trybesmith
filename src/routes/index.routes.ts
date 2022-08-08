import { Router } from 'express';
import productsRouter from './products.routes';
import userRouter from './users.routes';
import ordersRoute from './orders.routes';

const appRoutes = Router();

appRoutes.use('/products', productsRouter);
appRoutes.use('/users', userRouter);
appRoutes.use('/orders', ordersRoute);

export default appRoutes;
