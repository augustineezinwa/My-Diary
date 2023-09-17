"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../models"));

var Memory = _models["default"].Memory;

var MemoriesController = /*#__PURE__*/function () {
  function MemoriesController() {
    (0, _classCallCheck2["default"])(this, MemoriesController);
  }

  (0, _createClass2["default"])(MemoriesController, null, [{
    key: "fetchMemories",
    value: function () {
      var _fetchMemories = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
        var memories;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Memory.findAll({
                  where: {
                    userId: request.userWallet.id
                  }
                })["catch"](function (error) {
                  return response.status(500).json(error);
                });

              case 2:
                memories = _context.sent;
                return _context.abrupt("return", response.json(memories));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetchMemories(_x, _x2) {
        return _fetchMemories.apply(this, arguments);
      }

      return fetchMemories;
    }()
  }]);
  return MemoriesController;
}();

var _default = MemoriesController;
exports["default"] = _default;