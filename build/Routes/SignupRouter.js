"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressValidator = require("express-validator");

var _SignupController = _interopRequireDefault(require("../Controllers/SignupController"));

var _Gate = _interopRequireDefault(require("../Gates/Gate"));

var _signupGateConfig = _interopRequireDefault(require("../Gates/signupGateConfig"));

// instantiate router from express
var SignupRouter = _express["default"].Router();

SignupRouter.post('/api/v1/signup', (0, _expressValidator.checkSchema)(_signupGateConfig["default"]), _Gate["default"].collectErrors, _SignupController["default"].signup);
var _default = SignupRouter;
exports["default"] = _default;