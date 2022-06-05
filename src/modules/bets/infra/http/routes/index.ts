import { Router } from 'express';
import { CreateBetsInThePlayController } from '../controllers/CreateBetsInThePlayController';
import { CreateBetsInTheScoreController } from '../controllers/CreateBetsInTheScoreController';
import { DeleteBetsController } from '../controllers/DeleteBetsController';
import { EditBetsInThePlayController } from '../controllers/EditBetsInThePlayController';
import { EditBetsInTheScoreController } from '../controllers/EditBetsInTheScoreController';
import { GetBetsByIdController } from '../controllers/GetBetsByIdController';
import { GetMyBetsController } from '../controllers/GetMyBetsController';

const betsRoutes = Router();

const createBetsInThePlayController = new CreateBetsInThePlayController();
const editBetsInThePlayController = new EditBetsInThePlayController();

const createBetsInTheScoreController = new CreateBetsInTheScoreController();
const deleteBetsController = new DeleteBetsController();
const editBetsInTheScoreController = new EditBetsInTheScoreController();

const getMyBetsController = new GetMyBetsController();
const getBetsByIdController = new GetBetsByIdController();

betsRoutes.post('/play/create', createBetsInThePlayController.handle);
betsRoutes.patch('/play/edit', editBetsInThePlayController.handle);

betsRoutes.post('/score/create', createBetsInTheScoreController.handle);
betsRoutes.delete('/delete/:id', deleteBetsController.handle);
betsRoutes.patch('/score/edit', editBetsInTheScoreController.handle);

betsRoutes.get('/user/:id', getMyBetsController.handle);
betsRoutes.get('/:id', getBetsByIdController.handle);

export default betsRoutes;
