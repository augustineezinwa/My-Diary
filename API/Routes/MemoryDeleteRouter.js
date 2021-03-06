import express from 'express';
import MemoryDeleteController from '../Controllers/MemoryDeleteController';
import Gate from '../Gates/Gate';

// instantiate router from express
const MemoryDeleteRouter = express.Router();

MemoryDeleteRouter.delete('/api/v1/memories/:id', Gate.blockInvasion, Gate.blockAccessToAnotherUserResource, MemoryDeleteController.deleteMemory);

export default MemoryDeleteRouter;
