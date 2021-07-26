import express from 'express';
import IndexRouter from './indexRouter';
import MemoriesRouter from './MemoriesRouter';
import MemoryDeleteRouter from './MemoryDeleteRouter';

const index = express.Router();

index.use(IndexRouter, MemoriesRouter, MemoryDeleteRouter);


export default index;


