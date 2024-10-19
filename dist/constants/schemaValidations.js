"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserSchema = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var createUserSchema = exports.createUserSchema = _joi["default"].object({
  firstName: _joi["default"].string().min(3).max(30).required(),
  lastName: _joi["default"].string().min(3).max(30).required(),
  email: _joi["default"].string().email().required()
});