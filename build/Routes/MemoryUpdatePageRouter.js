"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _MemoryUpdatePageController = _interopRequireDefault(require("../Controllers/MemoryUpdatePageController"));

var _Gate = _interopRequireDefault(require("../Gates/Gate"));

// instantiate router from express
var MemoryUpdatePageRouter = _express["default"].Router();

MemoryUpdatePageRouter.get('/memory/update/:id', _Gate["default"].blockInvasion, _Gate["default"].blockAccessToAnotherUserResource, _MemoryUpdatePageController["default"].fetchMemoryUpdatePage);
var _default = MemoryUpdatePageRouter;
exports["default"] = _default;