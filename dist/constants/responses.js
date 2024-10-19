"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var responses = {
  100: function _() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Success";
    return {
      responseCode: 0,
      message: message
    };
  },
  101: function _() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Success";
    return {
      responseCode: 0,
      message: message
    };
  }
};
var _default = exports["default"] = responses;