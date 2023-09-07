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

var MemoryDeleteController = /*#__PURE__*/function () {
  function MemoryDeleteController() {
    (0, _classCallCheck2["default"])(this, MemoryDeleteController);
  }

  (0, _createClass2["default"])(MemoryDeleteController, null, [{
    key: "deleteMemory",
    value: function () {
      var _deleteMemory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Memory.destroy({
                  where: {
                    id: request.params.id,
                    userId: request.userWallet.id
                  }
                });

              case 3:
                return _context.abrupt("return", response.json({
                  message: 'memory deleted'
                }));

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", response.json({
                  message: _context.t0.toString()
                }));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function deleteMemory(_x, _x2) {
        return _deleteMemory.apply(this, arguments);
      }

      return deleteMemory;
    }()
  }]);
  return MemoryDeleteController;
}();

var _default = MemoryDeleteController;
exports["default"] = _default;