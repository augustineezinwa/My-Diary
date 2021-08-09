class TokenValidationController {
  static validateToken(request, response) {
    return response.json({ status: 'success' });
  }
}

export default TokenValidationController;
