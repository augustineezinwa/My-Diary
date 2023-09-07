"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _expressValidator = require("express-validator");

var _decodeToken = _interopRequireDefault(require("../security/decodeToken"));

var _formatErrors = _interopRequireDefault(require("../helpers/formatErrors"));

var _models = _interopRequireDefault(require("../models"));

var Gate = /*#__PURE__*/function () {
  function Gate() {
    (0, _classCallCheck2["default"])(this, Gate);
  }

  (0, _createClass2["default"])(Gate, null, [{
    key: "collectErrors",
    value: function collectErrors(request, response, next) {
      var errors = (0, _expressValidator.validationResult)(request);

      if (!errors.isEmpty()) {
        return response.status(422).json({
          errors: (0, _formatErrors["default"])(errors)
        });
      }

      return next();
    }
  }, {
    key: "blockInvasion",
    value: function blockInvasion(request, response, next) {
      var tokenInBrowser = request.cookies.token;
      var isApi = request.path.includes('api');

      if (!tokenInBrowser) {
        return Gate.getResponse(isApi, response);
      }

      try {
        request.userWallet = (0, _decodeToken["default"])(tokenInBrowser);
        return next();
      } catch (e) {
        return Gate.getResponse(isApi, response);
      }
    }
  }, {
    key: "getResponse",
    value: function getResponse(isApi, response) {
      if (isApi) {
        return response.status(401).json({
          message: 'Not authorized!, Invalid credentials'
        });
      }

      return response.redirect('/login');
    }
  }, {
    key: "blockAccessToAnotherUserResource",
    value: function () {
      var _blockAccessToAnotherUserResource = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response, next) {
        var _yield$models$sequeli, _yield$models$sequeli2, _yield$models$sequeli3, result;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].sequelize.query('SELECT * FROM "Memories" WHERE id = :memoryId AND "userId" = :userId LIMIT 1', {
                  replacements: {
                    memoryId: request.params.id,
                    userId: request.userWallet.id
                  }
                });

              case 3:
                _yield$models$sequeli = _context.sent;
                _yield$models$sequeli2 = (0, _slicedToArray2["default"])(_yield$models$sequeli, 1);
                _yield$models$sequeli3 = (0, _slicedToArray2["default"])(_yield$models$sequeli2[0], 1);
                result = _yield$models$sequeli3[0];

                if (result) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", response.status(403).json({
                  message: 'You don\'t have access to this resource'
                }));

              case 9:
                request.resourceBag = result;
                return _context.abrupt("return", next());

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", response.status(500).json({
                  message: 'Internal server error',
                  error: _context.t0.toString()
                }));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));

      function blockAccessToAnotherUserResource(_x, _x2, _x3) {
        return _blockAccessToAnotherUserResource.apply(this, arguments);
      }

      return blockAccessToAnotherUserResource;
    }()
  }]);
  return Gate;
}();

var _default = Gate;
exports["default"] = _default;