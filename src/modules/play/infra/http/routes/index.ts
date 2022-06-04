import { Router } from 'express';
import { CreatePlayController } from '../controllers/CreatePlayController';
import { DeletePlayController } from '../controllers/DeletePlayController copy';
import { FinishedPlayController } from '../controllers/FinishedPlayController';
import { GetPlayController } from '../controllers/GetPlayController';

const playRoutes = Router();

const createPlayController = new CreatePlayController();
const deletePlayController = new DeletePlayController();
const finishedPlayController = new FinishedPlayController();
const getPlayController = new GetPlayController();

playRoutes.post('/create', createPlayController.handle);
playRoutes.delete('/delete/:id', deletePlayController.handle);
playRoutes.patch('/edit', finishedPlayController.handle);
playRoutes.get('/', getPlayController.handle);

export default playRoutes;
