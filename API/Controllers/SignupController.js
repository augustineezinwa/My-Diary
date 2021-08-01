import bcrypt from 'bcrypt-nodejs';
import db from '../models';
import createToken from '../security/createToken';

const { User } = db;

class SignupController {
  static async signup(request, response) {
    try {
      const newUser = await User.create({
        name: request.body.name,
        email: request.body.email,
        password: bcrypt.hashSync(request.body.password),
      });

      return response.status(201).json({
        message: 'You have signed up',
        token: createToken(newUser.id),
      });
    } catch (e) {
      return response.status(500).json({ message: e.toString() });
    }
  }
}

export default SignupController;
