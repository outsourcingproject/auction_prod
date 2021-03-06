'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
   * index action
   * @return {Promise} []
   */
  _class.prototype.indexAction = function indexAction() {
    //auto render template file index_index.html
    return this.display();
  };

  _class.prototype.orderAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.model("order").getListAdmin();

            case 2:
              result = _context.sent;
              return _context.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function orderAction() {
      return _ref.apply(this, arguments);
    }

    return orderAction;
  }();

  _class.prototype.groupAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.model("item_group").getListAdmin();

            case 2:
              result = _context2.sent;
              return _context2.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function groupAction() {
      return _ref2.apply(this, arguments);
    }

    return groupAction;
  }();

  _class.prototype.itemAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.model("item").getListAdmin();

            case 2:
              result = _context3.sent;
              return _context3.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function itemAction() {
      return _ref3.apply(this, arguments);
    }

    return itemAction;
  }();

  _class.prototype.articleAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.model("article").getListAdmin();

            case 2:
              result = _context4.sent;
              return _context4.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function articleAction() {
      return _ref4.apply(this, arguments);
    }

    return articleAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=admin.js.map