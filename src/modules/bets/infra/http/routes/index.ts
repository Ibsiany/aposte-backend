import { Router } from 'express';
import { CreateBetsInThePlayController } from '../controllers/CreateBetsInThePlayController';
import { CreateBetsInTheScoreController } from '../controllers/CreateBetsInTheScoreController';
import { DeleteBetsInThePlayController } from '../controllers/DeleteBetsInThePlayController';
import { DeleteBetsInTheScoreController } from '../controllers/DeleteBetsInTheScoreController';
import { EditBetsInThePlayController } from '../controllers/EditBetsInThePlayController';
import { EditBetsInTheScoreController } from '../controllers/EditBetsInTheScoreController';
import { GetBetsInThePlayController } from '../controllers/GetBetsInThePlayController copy';
import { GetBetsInTheScoreController } from '../controllers/GetBetsInTheScoreController';

const betsRoutes = Router();

const createBetsInThePlayController = new CreateBetsInThePlayController();
const deleteBetsInThePlayController = new DeleteBetsInThePlayController();
const editBetsInThePlayController = new EditBetsInThePlayController();
const getBetsInThePlayController = new GetBetsInThePlayController();

const createBetsInTheScoreController = new CreateBetsInTheScoreController();
const deleteBetsInTheScoreController = new DeleteBetsInTheScoreController();
const editBetsInTheScoreController = new EditBetsInTheScoreController();
const getBetsInTheScoreController = new GetBetsInTheScoreController();

betsRoutes.post('/play/create', createBetsInThePlayController.handle);
betsRoutes.delete('/play/delete/:id', deleteBetsInThePlayController.handle);
betsRoutes.patch('/play/edit', editBetsInThePlayController.handle);
betsRoutes.get('/play', getBetsInThePlayController.handle);

betsRoutes.post('/score/create', createBetsInTheScoreController.handle);
betsRoutes.delete('/score/delete/:id', deleteBetsInTheScoreController.handle);
betsRoutes.patch('/score/edit', editBetsInTheScoreController.handle);
betsRoutes.get('/score', getBetsInTheScoreController.handle);

export default betsRoutes;
