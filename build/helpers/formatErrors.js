"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var formatErrors = function formatErrors(errors) {
  var formattedErrors = {};
  errors.array({
    onlyFirstError: true
  }).forEach(function (error) {
    if (!formattedErrors[error.param]) formattedErrors[error.param] = [];
    formattedErrors[error.param].push({
      message: error.msg
    });
  });
  return formattedErrors;
};

var _default = formatErrors;
exports["default"] = _default;