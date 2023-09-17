"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _DashboardPageController = _interopRequireDefault(require("../Controllers/DashboardPageController"));

var _Gate = _interopRequireDefault(require("../Gates/Gate"));

// instantiate router from express
var DashboardPageRouter = _express["default"].Router();

DashboardPageRouter.get('/dashboard', _Gate["default"].blockInvasion, _DashboardPageController["default"].fetchDashboardPage);
var _default = DashboardPageRouter;
exports["default"] = _default;