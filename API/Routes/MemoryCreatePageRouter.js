import express from 'express';
import MemoryCreatePageController from '../Controllers/MemoryCreatePageController';
import Gate from '../Gates/Gate';

// instantiate router from express
const MemoryCreatePageRouter = express.Router();
MemoryCreatePageRouter.get('/memory/create', Gate.blockInvasion, MemoryCreatePageController.fetchMemoryCreatePage);

export default MemoryCreatePageRouter;
