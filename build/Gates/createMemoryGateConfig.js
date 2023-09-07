"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isURL = _interopRequireDefault(require("validator/lib/isURL"));

var createMemoryGateConfig = {
  title: {
    notEmpty: {
      errorMessage: 'Please enter a title'
    },
    isLength: {
      errorMessage: 'Title should not be more than 100 characters',
      options: {
        max: 100
      }
    }
  },
  story: {
    notEmpty: {
      errorMessage: 'Please tell a story'
    }
  },
  picture: {
    custom: {
      errorMessage: 'Please enter a valid url',
      options: function options(value) {
        return value ? (0, _isURL["default"])(value) : true;
      }
    }
  },
  mood: {
    notEmpty: {
      errorMessage: 'Please enter a valid mood'
    },
    custom: {
      errorMessage: 'Please select a predefined mood, [happy, sad, excited]',
      options: function options(value) {
        return ['happy', 'sad', 'excited'].includes(value);
      }
    }
  }
};
var _default = createMemoryGateConfig;
exports["default"] = _default;