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

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var PhotoUploadController = /*#__PURE__*/function () {
  function PhotoUploadController() {
    (0, _classCallCheck2["default"])(this, PhotoUploadController);
  }

  (0, _createClass2["default"])(PhotoUploadController, null, [{
    key: "uploadPhoto",
    value: function () {
      var _uploadPhoto = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _cloudinary["default"].v2.uploader.upload(request.body.picture);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", response.json({
                  url: result.secure_url
                }));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", response.status(500).json({
                  error: _context.t0.toString()
                }));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function uploadPhoto(_x, _x2) {
        return _uploadPhoto.apply(this, arguments);
      }

      return uploadPhoto;
    }()
  }]);
  return PhotoUploadController;
}();

var _default = PhotoUploadController;
exports["default"] = _default;