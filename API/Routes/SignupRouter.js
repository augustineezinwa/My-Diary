import express from 'express';
import { checkSchema } from 'express-validator';
import SignupController from '../Controllers/SignupController';
import Gate from '../Gates/Gate';
import signupGateConfig from '../Gates/signupGateConfig';

// instantiate router from express
const SignupRouter = express.Router();

SignupRouter.post('/api/v1/signup', checkSchema(signupGateConfig), Gate.collectErrors, SignupController.signup);

export default SignupRouter;
