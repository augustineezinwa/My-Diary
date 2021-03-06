import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

class PhotoUploadController {
  static async uploadPhoto(request, response) {
    try {
      const result = await cloudinary.v2.uploader.upload(request.body.picture);

      return response.json({ url: result.secure_url });
    } catch (e) {
      return response.status(500).json({

        error: e.toString(),
      });
    }
  }
}

export default PhotoUploadController;
