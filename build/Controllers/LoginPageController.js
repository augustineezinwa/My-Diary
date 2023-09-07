"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _path = _interopRequireDefault(require("path"));

var LoginPageController = /*#__PURE__*/function () {
  function LoginPageController() {
    (0, _classCallCheck2["default"])(this, LoginPageController);
  }

  (0, _createClass2["default"])(LoginPageController, null, [{
    key: "fetchLoginPage",
    value: function fetchLoginPage(request, response) {
      return response.sendFile(_path["default"].join("".concat(__dirname, "'../../../Client/login/index.html")));
    }
  }]);
  return LoginPageController;
}();

var _default = LoginPageController;
exports["default"] = _default;