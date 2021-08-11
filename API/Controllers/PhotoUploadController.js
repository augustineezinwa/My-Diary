import { Cloudinary } from "@cloudinary/base";



class PhotoUploadController {
  static uploadPhoto(request, response) {
    
    const cloud = new Cloudinary({
        cloud: {
          cloudName: 'my-diary'
        }
      });


  }
}

export default PhotoUploadController;
