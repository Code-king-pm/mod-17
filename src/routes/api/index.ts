import { Router } from 'express';
const router = Router();
import appRoutes from './appRoutes.js';
import userRoutes from './userRoutes.js';

router.use('/reaction', appRoutes);
router.use('/users', userRoutes);

export default router;
