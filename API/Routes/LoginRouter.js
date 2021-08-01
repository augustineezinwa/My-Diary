import express from 'express';
import { checkSchema } from 'express-validator';
import LoginController from '../Controllers/LoginController';
import loginGateConfig from '../Gates/loginGateConfig';
import Gate from '../Gates/Gate';

// instantiate router from express
const LoginRouter = express.Router();

LoginRouter.post('/api/v1/login', checkSchema(loginGateConfig), Gate.collectErrors, LoginController.login);

export default LoginRouter;
