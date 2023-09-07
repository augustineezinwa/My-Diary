"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var SignoutController = /*#__PURE__*/function () {
  function SignoutController() {
    (0, _classCallCheck2["default"])(this, SignoutController);
  }

  (0, _createClass2["default"])(SignoutController, null, [{
    key: "signout",
    value: function signout(request, response) {
      response.cookie('token', null);
      return response.redirect('/login');
    }
  }]);
  return SignoutController;
}();

var _default = SignoutController;
exports["default"] = _default;