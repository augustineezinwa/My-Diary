"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _path = _interopRequireDefault(require("path"));

var MemoryCreatePageController = /*#__PURE__*/function () {
  function MemoryCreatePageController() {
    (0, _classCallCheck2["default"])(this, MemoryCreatePageController);
  }

  (0, _createClass2["default"])(MemoryCreatePageController, null, [{
    key: "fetchMemoryCreatePage",
    value: function fetchMemoryCreatePage(request, response) {
      return response.sendFile(_path["default"].join("".concat(__dirname, "'../../../Client/memorycreate/index.html")));
    }
  }]);
  return MemoryCreatePageController;
}();

var _default = MemoryCreatePageController;
exports["default"] = _default;