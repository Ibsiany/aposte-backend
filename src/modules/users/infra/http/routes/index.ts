import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { DeleteUserController } from '../controllers/DeleteUserController copy';
import { EditUserController } from '../controllers/EditUserController';
import { SessionController } from '../controllers/SessionController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const editUserController = new EditUserController();
const sessionController = new SessionController();

userRoutes.post('/create', createUserController.handle);
userRoutes.delete('/delete', deleteUserController.handle);
userRoutes.patch('/edit', editUserController.handle);
userRoutes.post('/session', sessionController.handle);

export default userRoutes;
