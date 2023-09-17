"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

var _models = _interopRequireDefault(require("../models"));

var _createToken = _interopRequireDefault(require("../security/createToken"));

var User = _models["default"].User;

var SignupController = /*#__PURE__*/function () {
  function SignupController() {
    (0, _classCallCheck2["default"])(this, SignupController);
  }

  (0, _createClass2["default"])(SignupController, null, [{
    key: "signup",
    value: function () {
      var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
        var newUser, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return User.create({
                  name: request.body.name,
                  email: request.body.email,
                  password: _bcryptNodejs["default"].hashSync(request.body.password)
                });

              case 3:
                newUser = _context.sent;
                token = (0, _createToken["default"])(newUser.id);
                response.cookie('token', token, {
                  httpOnly: true
                });
                return _context.abrupt("return", response.status(201).json({
                  message: 'You have signed up'
                }));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", response.status(500).json({
                  message: _context.t0.toString()
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function signup(_x, _x2) {
        return _signup.apply(this, arguments);
      }

      return signup;
    }()
  }]);
  return SignupController;
}();

var _default = SignupController;
exports["default"] = _default;