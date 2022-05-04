import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { SessionController } from '../controllers/SessionController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const sessionController = new SessionController();

userRoutes.post('/create', createUserController.handle);
userRoutes.post('/session', sessionController.handle);

export default userRoutes;
