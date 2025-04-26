import { Router } from 'express';
import DashboardRoute from './dashboard.mjs';

const router = Router();

router
  .use(DashboardRoute);

router
  .use((req, res) => {
    res.render('notFound')
  })

export default router;