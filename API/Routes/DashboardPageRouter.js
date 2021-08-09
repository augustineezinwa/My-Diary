import express from 'express';
import DashboardPageController from '../Controllers/DashboardPageController';

// instantiate router from express
const DashboardPageRouter = express.Router();
DashboardPageRouter.get('/dashboard', DashboardPageController.fetchDashboardPage);

export default DashboardPageRouter;
