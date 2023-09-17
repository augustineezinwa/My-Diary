"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _HomePageController = _interopRequireDefault(require("../Controllers/HomePageController"));

// instantiate router from express
var HomePageRouter = _express["default"].Router();

HomePageRouter.get('/', _HomePageController["default"].fetchHomePage);
var _default = HomePageRouter;
exports["default"] = _default;