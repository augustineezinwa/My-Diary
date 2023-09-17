"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var loginGateConfig = {
  email: {
    notEmpty: {
      errorMessage: 'Please enter email'
    }
  },
  password: {
    notEmpty: {
      errorMessage: 'Please enter password'
    }
  }
};
var _default = loginGateConfig;
exports["default"] = _default;