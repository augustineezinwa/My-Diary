import express from 'express';
import path from 'path';
import LoginPageController from '../Controllers/LoginPageController';

// instantiate router from express
const LoginPageRouter = express.Router();
LoginPageRouter.use(express.static(path.join(__dirname, '/../../assets')));

LoginPageRouter.get('/login', LoginPageController.fetchLoginPage);

export default LoginPageRouter;
