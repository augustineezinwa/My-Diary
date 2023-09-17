"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _PhotoUploadController = _interopRequireDefault(require("../Controllers/PhotoUploadController"));

// instantiate router from express
var PhotoUploadRouter = _express["default"].Router();

PhotoUploadRouter.post('/api/v1/image/upload', _PhotoUploadController["default"].uploadPhoto);
var _default = PhotoUploadRouter;
exports["default"] = _default;