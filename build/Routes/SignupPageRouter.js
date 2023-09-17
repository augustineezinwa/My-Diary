"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _SignupPageController = _interopRequireDefault(require("../Controllers/SignupPageController"));

// instantiate router from express
var SignupPageRouter = _express["default"].Router();

SignupPageRouter.get('/signup', _SignupPageController["default"].fetchSignupPage);
var _default = SignupPageRouter;
exports["default"] = _default;