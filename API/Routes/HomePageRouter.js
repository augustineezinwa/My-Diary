import express from 'express';
import path from 'path';
import HomePageController from '../Controllers/HomePageController';

// instantiate router from express
const HomePageRouter = express.Router();

HomePageRouter.use(express.static(path.join(__dirname, '/../../UI')));
HomePageRouter.get('/', HomePageController.fetchHomePage);

export default HomePageRouter;
