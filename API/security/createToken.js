import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.PRIVATE_KEY;

const createToken = (id) => jwt.sign({ id }, JWT_SECRET, { expiresIn: 60 * 60 });

export default createToken;
