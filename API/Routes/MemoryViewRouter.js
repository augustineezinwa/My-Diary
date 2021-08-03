import express from 'express';
import MemoryViewController from '../Controllers/MemoryViewController';
import Gate from '../Gates/Gate';

// instantiate router from express
const MemoryViewRouter = express.Router();

MemoryViewRouter.get('/api/v1/memories/:id', Gate.blockInvasion, Gate.blockAccessToAnotherUserResource, MemoryViewController.viewMemory);

export default MemoryViewRouter;
