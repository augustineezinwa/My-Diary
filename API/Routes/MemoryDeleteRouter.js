import express from 'express';
import MemoryDeleteController from '../Controllers/MemoryDeleteController';

// instantiate router from express
const MemoryDeleteRouter = express.Router();

MemoryDeleteRouter.delete('/api/v1/memories/:id', MemoryDeleteController.deleteMemory);


export default MemoryDeleteRouter;