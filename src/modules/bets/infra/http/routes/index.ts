import { Router } from 'express';
import { CreateBetsInThePlayController } from '../controllers/CreateBetsInThePlayController';
import { CreateBetsInTheScoreController } from '../controllers/CreateBetsInTheScoreController';
import { DeleteBetsInThePlayController } from '../controllers/DeleteBetsInThePlayController';
import { DeleteBetsInTheScoreController } from '../controllers/DeleteBetsInTheScoreController';
import { EditBetsInThePlayController } from '../controllers/EditBetsInThePlayController';
import { EditBetsInTheScoreController } from '../controllers/EditBetsInTheScoreController';
import { GetBetsInThePlayController } from '../controllers/GetBetsInThePlayController copy';
import { GetBetsInTheScoreController } from '../controllers/GetBetsInTheScoreController';

const userRoutes = Router();

const createBetsInThePlayController = new CreateBetsInThePlayController();
const deleteBetsInThePlayController = new DeleteBetsInThePlayController();
const editBetsInThePlayController = new EditBetsInThePlayController();
const getBetsInThePlayController = new GetBetsInThePlayController();

const createBetsInTheScoreController = new CreateBetsInTheScoreController();
const deleteBetsInTheScoreController = new DeleteBetsInTheScoreController();
const editBetsInTheScoreController = new EditBetsInTheScoreController();
const getBetsInTheScoreController = new GetBetsInTheScoreController();

userRoutes.post('/play/create', createBetsInThePlayController.handle);
userRoutes.delete('/play/delete/:id', deleteBetsInThePlayController.handle);
userRoutes.patch('/play/edit', editBetsInThePlayController.handle);
userRoutes.get('/play', getBetsInThePlayController.handle);

userRoutes.post('/score/create', createBetsInTheScoreController.handle);
userRoutes.delete('/score/delete/:id', deleteBetsInTheScoreController.handle);
userRoutes.patch('/score/edit', editBetsInTheScoreController.handle);
userRoutes.get('/score', getBetsInTheScoreController.handle);

export default userRoutes;
