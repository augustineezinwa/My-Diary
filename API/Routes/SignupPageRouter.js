import express from 'express';
import SignupPageController from '../Controllers/SignupPageController';

// instantiate router from express
const SignupPageRouter = express.Router();

SignupPageRouter.get('/signup', SignupPageController.fetchSignupPage);

export default SignupPageRouter;
