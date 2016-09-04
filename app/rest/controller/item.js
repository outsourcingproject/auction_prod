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

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function (_Base) {
  (0, _inherits3.default)(Item, _Base);

  function Item() {
    (0, _classCallCheck3.default)(this, Item);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  Item.prototype.__before = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.modelInstance = think.model('item', null, 'api');
              _context.next = 3;
              return this.modelInstance.getPk();

            case 3:
              this.modelPk = _context.sent;

              this.needPaging = false;
              this.listOrder = { 'createAt': 'desc' };
              _context.next = 8;
              return _Base.prototype.__before.call(this);

            case 8:
              return _context.abrupt('return', _context.sent);

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function __before() {
      return _ref.apply(this, arguments);
    }

    return __before;
  }();

  Item.prototype.postAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var data, user, insertId, now, item;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = this.post();

              delete data[this.modelPk];

              if (!think.isEmpty(data)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt('return', this.fail("data is empty"));

            case 4:
              _context2.next = 6;
              return this.session('user');

            case 6:
              user = _context2.sent;

              if (!think.isEmpty(user)) {
                data.user = user.id;
                data.author = user.id;
                data.publisher = user.id;
              }

              _context2.next = 10;
              return this.modelInstance.add(data);

            case 10:
              insertId = _context2.sent;
              _context2.next = 13;
              return this.modelInstance.checkStatus();

            case 13:
              now = +new Date();
              item = this.param();


              if (item.auctionBeginTime - now > 0) this.modelInstance.setCheckStatusTimer(item.auctionBeginTime - now);
              if (item.auctionEndTime - now > 0) this.modelInstance.setCheckStatusTimer(item.auctionEndTime - now);

              return _context2.abrupt('return', this.success({ id: insertId }));

            case 18:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function postAction() {
      return _ref2.apply(this, arguments);
    }

    return postAction;
  }();

  Item.prototype.putAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var _modelInstance$where;

      var data, rows, now, item;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (this.id) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt('return', this.fail("params error"));

            case 2:
              data = this.post();

              delete data[this.modelPk];

              if (!think.isEmpty(data)) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt('return', this.fail("data is empty"));

            case 6:
              _context3.next = 8;
              return this.modelInstance.where((_modelInstance$where = {}, _modelInstance$where[this.modelPk] = this.id, _modelInstance$where)).update(data);

            case 8:
              rows = _context3.sent;
              _context3.next = 11;
              return this.modelInstance.checkStatus();

            case 11:
              now = +new Date();
              item = this.param();


              if (item.auctionBeginTime - now > 0) this.modelInstance.setCheckStatusTimer(item.auctionBeginTime - now);
              if (item.auctionEndTime - now > 0) this.modelInstance.setCheckStatusTimer(item.auctionEndTime - now);

              return _context3.abrupt('return', this.success({ affectedRows: rows }));

            case 16:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function putAction() {
      return _ref3.apply(this, arguments);
    }

    return putAction;
  }();

  return Item;
}(_base2.default);

exports.default = Item;
//# sourceMappingURL=item.js.map