import { Router } from 'express';
import DashboardRoute from './dashboard.mjs';

const router = Router();

router
  .use(DashboardRoute);

// router
//   .route('*')
//   .get((req, res) => {
//     res.render('index')
//   })

export default router;