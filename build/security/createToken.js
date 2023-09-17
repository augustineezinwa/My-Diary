"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

_dotenv["default"].config();

var JWT_SECRET = process.env.PRIVATE_KEY;

var createToken = function createToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, JWT_SECRET, {
    expiresIn: 60 * 60
  });
};

var _default = createToken;
exports["default"] = _default;