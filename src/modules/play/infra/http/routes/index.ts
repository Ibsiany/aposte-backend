import { Router } from 'express';
import { CreatePlayController } from '../controllers/CreateUserController';
import { DeletePlayController } from '../controllers/DeletePlayController copy';
import { EditPlayController } from '../controllers/EditPlayController';
import { GetPlayController } from '../controllers/GetPlayController';

const playRoutes = Router();

const createPlayController = new CreatePlayController();
const deletePlayController = new DeletePlayController();
const editPlayController = new EditPlayController();
const getPlayController = new GetPlayController();

playRoutes.post('/create', createPlayController.handle);
playRoutes.delete('/delete/:id', deletePlayController.handle);
playRoutes.patch('/edit', editPlayController.handle);
playRoutes.get('/', getPlayController.handle);

export default playRoutes;
