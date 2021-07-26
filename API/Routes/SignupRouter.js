import express from 'express';
import SignupController from '../Controllers/SignupController';

// instantiate router from express
const SignupRouter = express.Router();

SignupRouter.post('/api/v1/signup', SignupController.signup);

export default SignupRouter;


