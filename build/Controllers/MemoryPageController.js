"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _path = _interopRequireDefault(require("path"));

var MemoryPageController = /*#__PURE__*/function () {
  function MemoryPageController() {
    (0, _classCallCheck2["default"])(this, MemoryPageController);
  }

  (0, _createClass2["default"])(MemoryPageController, null, [{
    key: "fetchMemoryPage",
    value: function fetchMemoryPage(request, response) {
      return response.sendFile(_path["default"].join("".concat(__dirname, "'../../../Client/memory/index.html")));
    }
  }]);
  return MemoryPageController;
}();

var _default = MemoryPageController;
exports["default"] = _default;