import { Router } from 'express';
import { CreatePlayController } from '../controllers/CreatePlayController';
import { DeletePlayController } from '../controllers/DeletePlayController copy';
import { FinishedPlayController } from '../controllers/FinishedPlayController';
import { GetPlayByIdController } from '../controllers/GetPlayByIdController';
import { GetPlayController } from '../controllers/GetPlayController';
import { GetPlayResultsController } from '../controllers/GetPlayResultsController';

const playRoutes = Router();

const createPlayController = new CreatePlayController();
const deletePlayController = new DeletePlayController();
const finishedPlayController = new FinishedPlayController();
const getPlayController = new GetPlayController();
const getPlayResultsController = new GetPlayResultsController();
const getPlayByIdController = new GetPlayByIdController();

playRoutes.post('/create', createPlayController.handle);
playRoutes.delete('/delete/:id', deletePlayController.handle);
playRoutes.patch('/edit', finishedPlayController.handle);
playRoutes.get('/', getPlayController.handle);
playRoutes.get('/results', getPlayResultsController.handle);
playRoutes.get('/:id', getPlayByIdController.handle);

export default playRoutes;
