"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _MemoryDeleteController = _interopRequireDefault(require("../Controllers/MemoryDeleteController"));

var _Gate = _interopRequireDefault(require("../Gates/Gate"));

// instantiate router from express
var MemoryDeleteRouter = _express["default"].Router();

MemoryDeleteRouter["delete"]('/api/v1/memories/:id', _Gate["default"].blockInvasion, _Gate["default"].blockAccessToAnotherUserResource, _MemoryDeleteController["default"].deleteMemory);
var _default = MemoryDeleteRouter;
exports["default"] = _default;