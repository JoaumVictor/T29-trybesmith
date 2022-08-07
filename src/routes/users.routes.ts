import { Router } from 'express';
import controllers from '../controllers/index.controller';

const userRouter = Router();

userRouter.post('/', controllers.createNewUser);

export default userRouter;
