const loginGateConfig = {
  email: {
    notEmpty: {
      errorMessage: 'Please enter email'
    }
  },

  password: {
    notEmpty: {
      errorMessage: 'Please enter password',
    }
  }
};

export default loginGateConfig;
