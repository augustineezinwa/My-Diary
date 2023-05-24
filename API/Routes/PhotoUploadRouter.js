import express from 'express';
import PhotoUploadController from '../Controllers/PhotoUploadController.js';

// instantiate router from express
const PhotoUploadRouter = express.Router();

PhotoUploadRouter.post('/api/v1/image/upload', PhotoUploadController.uploadPhoto);
PhotoUploadRouter.get('/api/v1/image/:id', PhotoUploadController.getPhoto);

export default PhotoUploadRouter;
