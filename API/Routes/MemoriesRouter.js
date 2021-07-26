import express from 'express';
import MemoriesController from '../Controllers/MemoriesController';

// instantiate router from express
const MemoriesRouter = express.Router();

MemoriesRouter.get('/api/v1/memories', MemoriesController.fetchMemories);


export default MemoriesRouter;