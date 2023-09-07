"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _MemoriesController = _interopRequireDefault(require("../Controllers/MemoriesController"));

var _Gate = _interopRequireDefault(require("../Gates/Gate"));

// instantiate router from express
var MemoriesRouter = _express["default"].Router();

MemoriesRouter.get('/api/v1/memories', _Gate["default"].blockInvasion, _MemoriesController["default"].fetchMemories);
var _default = MemoriesRouter;
exports["default"] = _default;