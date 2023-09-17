"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressValidator = require("express-validator");

var _LoginController = _interopRequireDefault(require("../Controllers/LoginController"));

var _loginGateConfig = _interopRequireDefault(require("../Gates/loginGateConfig"));

var _Gate = _interopRequireDefault(require("../Gates/Gate"));

// instantiate router from express
var LoginRouter = _express["default"].Router();

LoginRouter.post('/api/v1/login', (0, _expressValidator.checkSchema)(_loginGateConfig["default"]), _Gate["default"].collectErrors, _LoginController["default"].login);
var _default = LoginRouter;
exports["default"] = _default;