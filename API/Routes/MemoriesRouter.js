import express from 'express';
import MemoriesController from '../Controllers/MemoriesController';
import Gate from '../Gates/Gate';

// instantiate router from express
const MemoriesRouter = express.Router();

MemoriesRouter.get('/api/v1/memories', Gate.blockInvasion, MemoriesController.fetchMemories);


export default MemoriesRouter;
