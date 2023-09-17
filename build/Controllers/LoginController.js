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

var LoginController = /*#__PURE__*/function () {
  function LoginController() {
    (0, _classCallCheck2["default"])(this, LoginController);
  }

  (0, _createClass2["default"])(LoginController, null, [{
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
        var _request$body, email, password, userFound, isUserFound, token;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _request$body = request.body, email = _request$body.email, password = _request$body.password;
                _context.next = 3;
                return User.findOne({
                  where: {
                    email: email
                  }
                });

              case 3:
                userFound = _context.sent;
                isUserFound = userFound && _bcryptNodejs["default"].compareSync(password, userFound.password);

                if (!isUserFound) {
                  _context.next = 9;
                  break;
                }

                token = (0, _createToken["default"])(userFound.id);
                response.cookie('token', token, {
                  httpOnly: true
                });
                return _context.abrupt("return", response.json({
                  message: 'you are signed in!'
                }));

              case 9:
                return _context.abrupt("return", response.status(401).json({
                  message: 'Invalid email or password'
                }));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);
  return LoginController;
}();

var _default = LoginController;
exports["default"] = _default;