"use strict";

var _jetLogger = _interopRequireDefault(require("jet-logger"));
var _morgan = _interopRequireDefault(require("morgan"));
var _helmet = _interopRequireDefault(require("helmet"));
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _models = _interopRequireDefault(require("./models"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var port = 3002;
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])());
app.use("/api", require("./routes/routes"));

// Authenticate database connection and start the server
_models["default"].sequelize.authenticate().then(function () {
  app.listen(port, function () {
    var SERVER_START_MSG = "DB Activated and Server started on port: ".concat(port);
    _jetLogger["default"].info(SERVER_START_MSG);
  });
})["catch"](function (err) {
  _jetLogger["default"].err("Unable to connect DB: ".concat(err.message));
  process.exit(1);
});