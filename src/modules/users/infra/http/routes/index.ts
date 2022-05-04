import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { SessionController } from '../controllers/SessionController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const sessionController = new SessionController();

userRoutes.use('/create', createUserController.handle);
userRoutes.use('/session', sessionController.handle);

export default userRoutes;
