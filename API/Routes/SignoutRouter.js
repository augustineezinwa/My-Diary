import express from 'express';
import SignoutController from '../Controllers/SignoutController';

// instantiate router from express
const SignoutRouter = express.Router();

SignoutRouter.get('/signout', SignoutController.signout);

export default SignoutRouter;
