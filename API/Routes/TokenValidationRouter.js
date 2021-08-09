import express from 'express';
import TokenValidationController from '../Controllers/TokenValidationController';
import Gate from '../Gates/Gate';

// instantiate router from express
const TokenValidationRouter = express.Router();

TokenValidationRouter.post('/api/v1/tokenvalidate', Gate.blockInvasion, TokenValidationController.validateToken);

export default TokenValidationRouter;
