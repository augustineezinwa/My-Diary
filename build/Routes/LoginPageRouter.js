"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _LoginPageController = _interopRequireDefault(require("../Controllers/LoginPageController"));

// instantiate router from express
var LoginPageRouter = _express["default"].Router();

LoginPageRouter.get('/login', _LoginPageController["default"].fetchLoginPage);
var _default = LoginPageRouter;
exports["default"] = _default;