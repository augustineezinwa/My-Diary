"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var decodeToken = function decodeToken(token) {
  return _jsonwebtoken["default"].verify(token, process.env.PRIVATE_KEY);
};

var _default = decodeToken;
exports["default"] = _default;