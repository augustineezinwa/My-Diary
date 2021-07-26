import express from 'express';
import IndexRouter from './IndexRouter';
import MemoriesRouter from './MemoriesRouter';
import MemoryDeleteRouter from './MemoryDeleteRouter';
import HomePageRouter from './HomePageRouter';
import SignupRouter from './SignupRouter';

const index = express.Router();

index.use(HomePageRouter, IndexRouter, MemoriesRouter, MemoryDeleteRouter, SignupRouter);

export default index;
