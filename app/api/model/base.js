"use strict";

exports.__esModule = true;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = function (_think$model$relation) {
  (0, _inherits3.default)(Base, _think$model$relation);

  function Base() {
    (0, _classCallCheck3.default)(this, Base);
    return (0, _possibleConstructorReturn3.default)(this, _think$model$relation.apply(this, arguments));
  }

  Base.prototype.beforeUpdate = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data.updateAt = new Date().getTime();
              return _context.abrupt("return", data);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function beforeUpdate(_x) {
      return _ref.apply(this, arguments);
    }

    return beforeUpdate;
  }();

  Base.prototype.beforeAdd = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(data) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:

              data.createAt = data.updateAt = new Date().getTime();
              return _context2.abrupt("return", data);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function beforeAdd(_x2) {
      return _ref2.apply(this, arguments);
    }

    return beforeAdd;
  }();

  return Base;
}(think.model.relation);

exports.default = Base;
//# sourceMappingURL=base.js.map