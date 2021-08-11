import express from 'express';
import MemoryPageController from '../Controllers/MemoryPageController';
import Gate from '../Gates/Gate';

// instantiate router from express
const MemoryPageRouter = express.Router();
MemoryPageRouter.get('/memories/:id', Gate.blockInvasion, MemoryPageController.fetchMemoryPage);

export default MemoryPageRouter;
