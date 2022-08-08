import { Router } from 'express';
import controllers from '../controllers/index.controller';

const ordersRoute = Router();

ordersRoute.get('/', controllers.getAllOrders);

export default ordersRoute;