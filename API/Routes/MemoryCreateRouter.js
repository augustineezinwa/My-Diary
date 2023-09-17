import express from 'express';
import { checkSchema } from 'express-validator';
import MemoryCreateController from '../Controllers/MemoryCreateController';
import Gate from '../Gates/Gate';
import createMemoryGateConfig from '../Gates/createMemoryGateConfig';

// instantiate router from express
const MemoryCreateRouter = express.Router();

MemoryCreateRouter.post('/api/v1/memories', Gate.blockInvasion, checkSchema(createMemoryGateConfig), Gate.collectErrors, MemoryCreateController.createMemory);

export default MemoryCreateRouter;
