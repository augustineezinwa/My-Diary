import path from 'path';

class SignupPageController {
  static fetchSignupPage(request, response) {
    return response.sendFile(
      path.join(`${__dirname}'../../../Client/signup/index.html`)
    );
  }
}

export default SignupPageController;
