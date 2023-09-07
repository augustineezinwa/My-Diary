"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _path = _interopRequireDefault(require("path"));

var SignupPageController = /*#__PURE__*/function () {
  function SignupPageController() {
    (0, _classCallCheck2["default"])(this, SignupPageController);
  }

  (0, _createClass2["default"])(SignupPageController, null, [{
    key: "fetchSignupPage",
    value: function fetchSignupPage(request, response) {
      return response.sendFile(_path["default"].join("".concat(__dirname, "'../../../Client/signup/index.html")));
    }
  }]);
  return SignupPageController;
}();

var _default = SignupPageController;
exports["default"] = _default;