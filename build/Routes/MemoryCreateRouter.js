"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressValidator = require("express-validator");

var _MemoryCreateController = _interopRequireDefault(require("../Controllers/MemoryCreateController"));

var _Gate = _interopRequireDefault(require("../Gates/Gate"));

var _createMemoryGateConfig = _interopRequireDefault(require("../Gates/createMemoryGateConfig"));

// instantiate router from express
var MemoryCreateRouter = _express["default"].Router();

MemoryCreateRouter.post('/api/v1/memories', _Gate["default"].blockInvasion, (0, _expressValidator.checkSchema)(_createMemoryGateConfig["default"]), _Gate["default"].collectErrors, _MemoryCreateController["default"].createMemory);
var _default = MemoryCreateRouter;
exports["default"] = _default;