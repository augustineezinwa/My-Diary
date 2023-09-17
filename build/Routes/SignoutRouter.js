"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _SignoutController = _interopRequireDefault(require("../Controllers/SignoutController"));

// instantiate router from express
var SignoutRouter = _express["default"].Router();

SignoutRouter.get('/signout', _SignoutController["default"].signout);
var _default = SignoutRouter;
exports["default"] = _default;