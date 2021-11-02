import express from 'express';
import MemoryUpdatePageController from '../Controllers/MemoryUpdatePageController';
import Gate from '../Gates/Gate';

// instantiate router from express
const MemoryUpdatePageRouter = express.Router();
MemoryUpdatePageRouter.get('/memory/update/:id', Gate.blockInvasion, Gate.blockAccessToAnotherUserResource, MemoryUpdatePageController.fetchMemoryUpdatePage);

export default MemoryUpdatePageRouter;
