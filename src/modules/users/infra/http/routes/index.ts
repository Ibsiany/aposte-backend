import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { EditUserController } from '../controllers/EditUserController';
import { SessionController } from '../controllers/SessionController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const editUserController = new EditUserController();
const sessionController = new SessionController();

userRoutes.post('/create', createUserController.handle);
userRoutes.post('/edit', editUserController.handle);
userRoutes.post('/session', sessionController.handle);

export default userRoutes;
