"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var MemoryViewController = /*#__PURE__*/function () {
  function MemoryViewController() {
    (0, _classCallCheck2["default"])(this, MemoryViewController);
  }

  (0, _createClass2["default"])(MemoryViewController, null, [{
    key: "viewMemory",
    value: function viewMemory(request, response) {
      return response.json(request.resourceBag);
    }
  }]);
  return MemoryViewController;
}();

var _default = MemoryViewController;
exports["default"] = _default;