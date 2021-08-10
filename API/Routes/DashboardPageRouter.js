import express from 'express';
import DashboardPageController from '../Controllers/DashboardPageController';
import Gate from '../Gates/Gate';

// instantiate router from express
const DashboardPageRouter = express.Router();
DashboardPageRouter.get('/dashboard', Gate.blockInvasion, DashboardPageController.fetchDashboardPage);

export default DashboardPageRouter;
