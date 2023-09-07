"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var IndexController = /*#__PURE__*/function () {
  function IndexController() {
    (0, _classCallCheck2["default"])(this, IndexController);
  }

  (0, _createClass2["default"])(IndexController, null, [{
    key: "fetchWelcomeMessage",
    value: function fetchWelcomeMessage(request, response) {
      return response.json({
        message: 'Welcome to My Diary API',
        status: 'success'
      });
    }
  }]);
  return IndexController;
}();

var _default = IndexController;
exports["default"] = _default;