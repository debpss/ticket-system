import { Router } from 'express';
import { dashboardController } from '../controllers/dashboard.mjs';

const router = Router();

router
  .route('/dashboard/:section')
  .get(dashboardController)

router
  .route('/dashboard')
  .get(dashboardController)

export default router;