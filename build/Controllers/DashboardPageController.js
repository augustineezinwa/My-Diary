"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _path = _interopRequireDefault(require("path"));

var DashboardPageController = /*#__PURE__*/function () {
  function DashboardPageController() {
    (0, _classCallCheck2["default"])(this, DashboardPageController);
  }

  (0, _createClass2["default"])(DashboardPageController, null, [{
    key: "fetchDashboardPage",
    value: function fetchDashboardPage(request, response) {
      return response.sendFile(_path["default"].join("".concat(__dirname, "'../../../Client/dashboard/index.html")));
    }
  }]);
  return DashboardPageController;
}();

var _default = DashboardPageController;
exports["default"] = _default;