import { Router } from 'express';
import productsRouter from './products.routes';
import userRouter from './users.routes';

const appRoutes = Router();

appRoutes.use('/products', productsRouter);
appRoutes.use('/users', userRouter);

export default appRoutes;
