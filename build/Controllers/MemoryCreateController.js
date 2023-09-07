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

var MemoryCreateController = /*#__PURE__*/function () {
  function MemoryCreateController() {
    (0, _classCallCheck2["default"])(this, MemoryCreateController);
  }

  (0, _createClass2["default"])(MemoryCreateController, null, [{
    key: "createMemory",
    value: function () {
      var _createMemory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
        var id, newMemory;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = request.userWallet.id;
                _context.prev = 1;
                _context.next = 4;
                return Memory.create({
                  title: request.body.title,
                  story: request.body.story,
                  picture: request.body.picture,
                  mood: request.body.mood,
                  userId: id.toString()
                });

              case 4:
                newMemory = _context.sent;

                if (!newMemory.dataValues) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", response.status(201).json({
                  message: 'New memory created',
                  memory: newMemory.dataValues
                }));

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", response.status(500).json(_context.t0));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      function createMemory(_x, _x2) {
        return _createMemory.apply(this, arguments);
      }

      return createMemory;
    }()
  }]);
  return MemoryCreateController;
}();

var _default = MemoryCreateController;
exports["default"] = _default;