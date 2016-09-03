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

var Order = function (_Base) {
  (0, _inherits3.default)(Order, _Base);

  function Order() {
    (0, _classCallCheck3.default)(this, Order);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  Order.prototype.__before = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.modelInstance = think.model('order', null, 'api');
              _context.next = 3;
              return this.modelInstance.getPk();

            case 3:
              this.modelPk = _context.sent;

              this.needPaging = false;
              this.listOrder = { 'order.createAt': 'desc' };
              this.join = ["user on user.id=order.user", "item on item.id=order.item"];
              this.field = "order.id,order.address,order.status,order.createAt,order.updateAt,order.price,user.id as uid,user.username,item.name,item.id as iid,item.tag as tag,expressNo,expressName";
              _context.next = 10;
              return _Base.prototype.__before.call(this);

            case 10:
              return _context.abrupt('return', _context.sent);

            case 11:
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

  return Order;
}(_base2.default);

exports.default = Order;
//# sourceMappingURL=order.js.map