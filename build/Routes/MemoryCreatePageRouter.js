"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _MemoryCreatePageController = _interopRequireDefault(require("../Controllers/MemoryCreatePageController"));

var _Gate = _interopRequireDefault(require("../Gates/Gate"));

// instantiate router from express
var MemoryCreatePageRouter = _express["default"].Router();

MemoryCreatePageRouter.get('/memory/create', _Gate["default"].blockInvasion, _MemoryCreatePageController["default"].fetchMemoryCreatePage);
var _default = MemoryCreatePageRouter;
exports["default"] = _default;