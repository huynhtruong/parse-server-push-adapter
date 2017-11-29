"use strict";
// LezmeParsePushAdapter is the default implementation of
// PushAdapter, it uses GCM for android push and APNS
// for ios push.

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _npmlog = require('npmlog');

var _npmlog2 = _interopRequireDefault(_npmlog);

var _LezmeParsePushAdapter = require('./LezmeParsePushAdapter');

var _LezmeParsePushAdapter2 = _interopRequireDefault(_LezmeParsePushAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore if */
if (process.env.VERBOSE || process.env.VERBOSE_PARSE_SERVER_PUSH_ADAPTER) {
  _npmlog2.default.level = 'verbose';
}exports.default = _LezmeParsePushAdapter2.default;