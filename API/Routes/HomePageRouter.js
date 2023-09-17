import express from 'express';
import HomePageController from '../Controllers/HomePageController';

// instantiate router from express
const HomePageRouter = express.Router();
HomePageRouter.get('/', HomePageController.fetchHomePage);

export default HomePageRouter;
