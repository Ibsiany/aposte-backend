import userRoutes from '../../../../modules/users/infra/http/routes';
import { Router } from 'express';
const router = Router();

router.use('/user', userRoutes);

export default router;
