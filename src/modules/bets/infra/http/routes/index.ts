import { Router } from 'express';
import { CreatePlayController } from '../controllers/CreateUserController';
import { DeletePlayController } from '../controllers/DeletePlayController copy';
import { EditPlayController } from '../controllers/EditPlayController';
import { GetPlayController } from '../controllers/GetPlayController';

const userRoutes = Router();

const createPlayController = new CreatePlayController();
const deletePlayController = new DeletePlayController();
const editPlayController = new EditPlayController();
const getPlayController = new GetPlayController();

userRoutes.post('/create', createPlayController.handle);
userRoutes.delete('/delete/:id', deletePlayController.handle);
userRoutes.patch('/edit', editPlayController.handle);
userRoutes.get('/', getPlayController.handle);

export default userRoutes;
