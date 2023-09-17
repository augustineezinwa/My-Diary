"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _MemoryViewController = _interopRequireDefault(require("../Controllers/MemoryViewController"));

var _Gate = _interopRequireDefault(require("../Gates/Gate"));

// instantiate router from express
var MemoryViewRouter = _express["default"].Router();

MemoryViewRouter.get('/api/v1/memories/:id', _Gate["default"].blockInvasion, _Gate["default"].blockAccessToAnotherUserResource, _MemoryViewController["default"].viewMemory);
var _default = MemoryViewRouter;
exports["default"] = _default;