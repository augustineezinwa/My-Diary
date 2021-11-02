import express from 'express';
import LoginPageController from '../Controllers/LoginPageController';

// instantiate router from express
const LoginPageRouter = express.Router();

LoginPageRouter.get('/login', LoginPageController.fetchLoginPage);

export default LoginPageRouter;
