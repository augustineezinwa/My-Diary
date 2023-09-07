"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _IndexRouter = _interopRequireDefault(require("./IndexRouter"));

var _MemoriesRouter = _interopRequireDefault(require("./MemoriesRouter"));

var _MemoryDeleteRouter = _interopRequireDefault(require("./MemoryDeleteRouter"));

var _HomePageRouter = _interopRequireDefault(require("./HomePageRouter"));

var _SignupRouter = _interopRequireDefault(require("./SignupRouter"));

var _MemoryCreateRouter = _interopRequireDefault(require("./MemoryCreateRouter"));

var _LoginRouter = _interopRequireDefault(require("./LoginRouter"));

var _MemoryUpdateRouter = _interopRequireDefault(require("./MemoryUpdateRouter"));

var _MemoryViewRouter = _interopRequireDefault(require("./MemoryViewRouter"));

var _LoginPageRouter = _interopRequireDefault(require("./LoginPageRouter"));

var _DashboardPageRouter = _interopRequireDefault(require("./DashboardPageRouter"));

var _SignoutRouter = _interopRequireDefault(require("./SignoutRouter"));

var _MemoryPageRouter = _interopRequireDefault(require("./MemoryPageRouter"));

var _MemoryCreatePageRouter = _interopRequireDefault(require("./MemoryCreatePageRouter"));

var _MemoryUpdatePageRouter = _interopRequireDefault(require("./MemoryUpdatePageRouter"));

var _PhotoUploadRouter = _interopRequireDefault(require("./PhotoUploadRouter"));

var _SignupPageRouter = _interopRequireDefault(require("./SignupPageRouter"));

var index = _express["default"].Router();

index.use(_express["default"]["static"](_path["default"].join(__dirname, '/../../assets')));
index.use(_express["default"].json({
  limit: '50mb'
}));
index.use((0, _cookieParser["default"])());
index.use(_HomePageRouter["default"], _LoginPageRouter["default"], _IndexRouter["default"], _MemoriesRouter["default"], _MemoryDeleteRouter["default"], _SignupRouter["default"], _MemoryCreateRouter["default"], _LoginRouter["default"], _MemoryUpdateRouter["default"], _MemoryDeleteRouter["default"], _MemoryViewRouter["default"], _DashboardPageRouter["default"], _SignoutRouter["default"], _MemoryPageRouter["default"], _MemoryCreatePageRouter["default"], _MemoryUpdatePageRouter["default"], _PhotoUploadRouter["default"], _SignupPageRouter["default"]);
var _default = index;
exports["default"] = _default;