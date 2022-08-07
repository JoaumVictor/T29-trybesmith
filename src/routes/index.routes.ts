import { Router } from 'express';
import productsRouter from './products.routes';

const appRoutes = Router();

appRoutes.use('/products', productsRouter);

export default appRoutes;
