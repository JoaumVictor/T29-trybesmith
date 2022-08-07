import { Router } from 'express';
import controllers from '../controllers/index.controller';

const productsRouter = Router();

productsRouter.post('/', controllers.postProducts);

productsRouter.get('/', controllers.getProducts);

export default productsRouter;
