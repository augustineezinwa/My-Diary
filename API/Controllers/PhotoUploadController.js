import {
  PutObjectCommand,
  S3,
} from "@aws-sdk/client-s3";

import dotenv from "dotenv";

dotenv.config();

const REGION = "us-east-1";
const s3Client = new S3({
  region: REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

class PhotoUploadController {
  static async uploadPhoto(request, response) {
    try {
      const bucketName = process.env.AWS_BUCKET_NAME;
      const fileName = `${Date.now().toString()}_${request.body.fileName}`;

      const fileUniqueKey = fileName.replace(/\s/g, '_').replace(/\.[^.]*$/, '');
      const matches = request.body.picture.match(/^data:(.+);base64,(.+)$/);
      const type = matches[1];

      await s3Client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: fileUniqueKey,
          Body: Buffer.from(matches[2], 'base64'),
          ContentEncoding: 'base64',
          ContentType: type,
        })
      );

      console.log(`https://${bucketName}.s3.${REGION}.amazonaws.com/${fileUniqueKey}`);
      return response.json({ url: `/api/v1/image/${fileUniqueKey}` });
    } catch (e) {
      console.log(e);
      return response.status(500).json({
        error: e.toString(),
      });
    }
  }

  static async getPhoto(request, response) {
    try {
      const bucketName = process.env.AWS_BUCKET_NAME;
      const { id } = request.params;

      // Set the desired request headers

      const res = await s3Client.getObject({
        Bucket: bucketName,
        Key: id,
      });
      const bodyStream = res.Body;

      response.setHeader('Content-Type', res.ContentType);
      response.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year (adjust the max-age value as needed)
      response.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString()); // Expires in 1 year

      return bodyStream.pipe(response);
    } catch (e) {
      // console.log(e, 'error');
      // console.log(request.body);
      return response.status(500).json({
        error: e.toString(),
      });
    }
  }
}

export default PhotoUploadController;
