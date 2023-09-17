"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _IndexController = _interopRequireDefault(require("../Controllers/IndexController"));

// instantiate router from express
var IndexRouter = _express["default"].Router();

IndexRouter.get('/api/v1', _IndexController["default"].fetchWelcomeMessage);
var _default = IndexRouter;
exports["default"] = _default;