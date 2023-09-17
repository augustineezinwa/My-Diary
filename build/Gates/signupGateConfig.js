"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _isEmail = _interopRequireDefault(require("validator/lib/isEmail"));

var _models = _interopRequireDefault(require("../models"));

var User = _models["default"].User;
var signupGateConfig = {
  email: {
    isEmail: {
      errorMessage: 'Please provide a valid email'
    },
    custom: {
      options: function () {
        var _options = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(value) {
          var existingUser;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  existingUser = null;

                  if (!(0, _isEmail["default"])(value)) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return User.findOne({
                    where: {
                      email: value
                    }
                  });

                case 4:
                  existingUser = _context.sent;

                case 5:
                  if (!existingUser) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt("return", Promise.reject(new Error('email already exists')));

                case 7:
                  return _context.abrupt("return", Promise.resolve());

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function options(_x) {
          return _options.apply(this, arguments);
        }

        return options;
      }()
    }
  },
  password: {
    notEmpty: {
      errorMessage: 'Please enter password'
    },
    isLength: {
      errorMessage: 'Your password must be at least 8 characters',
      options: {
        min: 8
      }
    },
    custom: {
      options: function options(value) {
        if (!/^((?=.*\d))(?=.*[a-zA-Z])/.test(value)) {
          return Promise.reject(new Error('Your password must contain a letter and a number'));
        }

        if (!/^\S*$/.test(value)) return Promise.reject(new Error('Your password must not contain space'));
        return Promise.resolve();
      }
    }
  },
  name: {
    notEmpty: {
      errorMessage: 'Please provide a name'
    },
    isAlpha: {
      errorMessage: 'Name must contain only letters'
    },
    custom: {
      options: function options(value) {
        if (value && value.length < 5) return Promise.reject(new Error('name is too short'));
        if (value && value.length > 20) return Promise.reject(new Error('name is too long'));
        return Promise.resolve();
      }
    }
  }
};
var _default = signupGateConfig;
exports["default"] = _default;