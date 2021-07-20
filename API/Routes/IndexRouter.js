import express from 'express';
import IndexController from '../Controllers/IndexController';

// instantiate router from express
const IndexRouter = express.Router();

IndexRouter.get('/api/v1', IndexController.fetchWelcomeMessage);


export default IndexRouter;

