import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import IndexRouter from './IndexRouter';
import MemoriesRouter from './MemoriesRouter';
import MemoryDeleteRouter from './MemoryDeleteRouter';
import HomePageRouter from './HomePageRouter';
import SignupRouter from './SignupRouter';
import MemoryCreateRouter from './MemoryCreateRouter';
import LoginRouter from './LoginRouter';
import MemoryUpdateRouter from './MemoryUpdateRouter';
import MemoryViewRouter from './MemoryViewRouter';
import LoginPageRouter from './LoginPageRouter';
import DashboardPageRouter from './DashboardPageRouter';
import SignoutRouter from './SignoutRouter';
import MemoryPageRouter from './MemoryPageRouter';
import MemoryCreatePageRouter from './MemoryCreatePageRouter';
import MemoryUpdatePageRouter from './MemoryUpdatePageRouter';
import PhotoUploadRouter from './PhotoUploadRouter';

const index = express.Router();
index.use(express.static(path.join(__dirname, '/../../assets')));
index.use(express.json());
index.use(cookieParser());
index.use(
  HomePageRouter,
  LoginPageRouter,
  IndexRouter,
  MemoriesRouter,
  MemoryDeleteRouter,
  SignupRouter,
  MemoryCreateRouter,
  LoginRouter,
  MemoryUpdateRouter,
  MemoryDeleteRouter,
  MemoryViewRouter,
  DashboardPageRouter,
  SignoutRouter,
  MemoryPageRouter,
  MemoryCreatePageRouter,
  MemoryUpdatePageRouter,
  PhotoUploadRouter
);

export default index;
