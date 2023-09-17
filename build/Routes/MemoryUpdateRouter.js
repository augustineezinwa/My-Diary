"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressValidator = require("express-validator");

var _MemoryUpdateController = _interopRequireDefault(require("../Controllers/MemoryUpdateController"));

var _createMemoryGateConfig = _interopRequireDefault(require("../Gates/createMemoryGateConfig"));

var _Gate = _interopRequireDefault(require("../Gates/Gate"));

// instantiate router from express
var MemoryUpdateRouter = _express["default"].Router();

MemoryUpdateRouter.put('/api/v1/memories/:id', _Gate["default"].blockInvasion, _Gate["default"].blockAccessToAnotherUserResource, (0, _expressValidator.checkSchema)(_createMemoryGateConfig["default"]), _Gate["default"].collectErrors, _MemoryUpdateController["default"].updateMemory);
var _default = MemoryUpdateRouter;
exports["default"] = _default;