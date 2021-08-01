import express from 'express';
import IndexRouter from './IndexRouter';
import MemoriesRouter from './MemoriesRouter';
import MemoryDeleteRouter from './MemoryDeleteRouter';
import HomePageRouter from './HomePageRouter';
import SignupRouter from './SignupRouter';
import MemoryCreateRouter from './MemoryCreateRouter';
import LoginRouter from './LoginRouter';
import MemoryUpdateRouter from './MemoryUpdateRouter';
import MemoryViewRouter from './MemoryViewRouter';

const index = express.Router();

index.use(express.json());
index.use(
  HomePageRouter,
  IndexRouter,
  MemoriesRouter,
  MemoryDeleteRouter,
  SignupRouter,
  MemoryCreateRouter,
  LoginRouter,
  MemoryUpdateRouter,
  MemoryDeleteRouter,
  MemoryViewRouter
);

export default index;
