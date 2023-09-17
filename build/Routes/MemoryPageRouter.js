"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _MemoryPageController = _interopRequireDefault(require("../Controllers/MemoryPageController"));

var _Gate = _interopRequireDefault(require("../Gates/Gate"));

// instantiate router from express
var MemoryPageRouter = _express["default"].Router();

MemoryPageRouter.get('/memories/:id', _Gate["default"].blockInvasion, _MemoryPageController["default"].fetchMemoryPage);
var _default = MemoryPageRouter;
exports["default"] = _default;