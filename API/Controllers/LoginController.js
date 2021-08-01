import bcrypt from 'bcrypt-nodejs';
import models from '../models';
import createToken from '../security/createToken';

const { User } = models;

class LoginController {
  static async login(request, response) {
    const { email, password } = request.body;

    const userFound = await User.findOne({ where: { email } });

    const isUserFound = userFound && bcrypt.compareSync(password, userFound.password);

    if (isUserFound) {
      return response.json({
        message: 'you are signed in!',
        token: createToken(userFound.id)
      });
    }

    return response.status(401).json({
        message: 'Invalid email or password',
    });
  }
}

export default LoginController;
