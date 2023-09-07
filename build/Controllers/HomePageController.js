"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _path = _interopRequireDefault(require("path"));

var HomePageController = /*#__PURE__*/function () {
  function HomePageController() {
    (0, _classCallCheck2["default"])(this, HomePageController);
  }

  (0, _createClass2["default"])(HomePageController, null, [{
    key: "fetchHomePage",
    value: function fetchHomePage(request, response) {
      return response.sendFile(_path["default"].join("".concat(__dirname, "'../../../Client/landing/index.html")));
    }
  }]);
  return HomePageController;
}();

var _default = HomePageController;
exports["default"] = _default;