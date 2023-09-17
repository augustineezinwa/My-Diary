class SignoutController {
  static signout(request, response) {
    response.cookie('token', null);

    return response.redirect('/login');
  }
}

export default SignoutController;
