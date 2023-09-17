"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _path = _interopRequireDefault(require("path"));

var MemoryUpdatePageController = /*#__PURE__*/function () {
  function MemoryUpdatePageController() {
    (0, _classCallCheck2["default"])(this, MemoryUpdatePageController);
  }

  (0, _createClass2["default"])(MemoryUpdatePageController, null, [{
    key: "fetchMemoryUpdatePage",
    value: function fetchMemoryUpdatePage(request, response) {
      return response.sendFile(_path["default"].join("".concat(__dirname, "'../../../Client/memorychange/index.html")));
    }
  }]);
  return MemoryUpdatePageController;
}();

var _default = MemoryUpdatePageController;
exports["default"] = _default;