import db from '../models';

const { User } = db;

class SignupController {
  static async signup(request, response) {
    try {
      const newUser = await User.create({ name: 'fish', email: 'donkey@fish.com', password: 'fishesdfetet' });

            return response.json({
                message: 'You have signed up',
                newUser,
            });
        } catch (e) {
            return response.status(500).json({ message: e.toString() });
        }
    }
}

export default SignupController;
