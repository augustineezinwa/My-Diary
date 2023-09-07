"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Routes = _interopRequireDefault(require("./Routes"));

// instantiates our server from express, and name it server
var server = (0, _express["default"])();
server.use('/', _Routes["default"]); // a function that prints to the command line that our server is running

var displayServerMessage = function displayServerMessage() {
  return console.log('My Diary API server is listening on Port 8888');
};

var PORT = process.env.PORT || 8888; // we will make our server to listen on port 8888 and pass in the function displayServerMessage as second argument

server.listen(PORT, displayServerMessage); // export our server to the whole app

var _default = server;
exports["default"] = _default;