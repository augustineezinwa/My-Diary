import express from 'express';
import IndexRouter from './indexRouter';

const index = express.Router();

index.use(IndexRouter);


export default index;


