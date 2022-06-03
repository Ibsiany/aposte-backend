import userRoutes from '../../../../modules/users/infra/http/routes';
import { Router } from 'express';
import playRoutes from '@modules/play/infra/http/routes';
import betsRoutes from '@modules/bets/infra/http/routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/play', playRoutes);
router.use('/bets', betsRoutes);

export default router;
