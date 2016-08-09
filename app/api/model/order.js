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

var _base = require("./base.js");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Order = function (_Base) {
  (0, _inherits3.default)(Order, _Base);

  function Order() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Base.call.apply(_Base, [this].concat(args))), _this), _this.WAIT_CONFIRM = 0, _this.WAIT_PAY = 1, _this.WAIT_CHECK = 2, _this.WAIT_DELIEVER = 3, _this.DELIEVERED = 4, _this.FINISHED = 5, _this.CANCELED = 6, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  //添加新订单 地址为默认地址
  Order.prototype.addOne = function addOne(userId, itemId) {
    console.log("order");
    return this.add({ user: userId, item: itemId, status: 0 });
  };

  //确认订单：买家确定地址等信息，订单更新状态
  //未测试


  Order.prototype.confirmOrder = function confirmOrder(order) {
    order.status = 1;
    return this.where({ id: order.id }).update(order);
  };
  //更改订单状态


  Order.prototype.changeStatus = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(orderId) {
      var status;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.where({ id: orderId }).find();

            case 2:
              status = _context.sent["status"];
              _context.t0 = status;
              _context.next = _context.t0 === WAIT_CONFIRM ? 6 : _context.t0 === WAIT_PAY ? 7 : _context.t0 === WAIT_CHECK ? 8 : _context.t0 === WAIT_DELIEVER ? 9 : _context.t0 === DELIEVERED ? 10 : 11;
              break;

            case 6:
              return _context.abrupt("return", this.where({ id: orderId }).update({ status: WAIT_PAY }));

            case 7:
              return _context.abrupt("return", this.where({ id: orderId }).update({ status: WAIT_CHECK }));

            case 8:
              return _context.abrupt("return", this.where({ id: orderId }).update({ status: WAIT_DELIEVER }));

            case 9:
              return _context.abrupt("return", this.where({ id: orderId }).update({ status: DELIEVERED }));

            case 10:
              return _context.abrupt("return", this.where({ id: orderId }).update({ status: FINISHED }));

            case 11:
              return _context.abrupt("return", this.where({ id: orderId }).update());

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function changeStatus(_x) {
      return _ref.apply(this, arguments);
    }

    return changeStatus;
  }();
  //取消订单，改变订单状态为取消


  Order.prototype.cancelOne = function cancelOne(orderId) {
    return this.where({ id: orderId }).update({ status: CANCELED });
  };

  Order.prototype.getList = function getList(userId) {
    return this.join("item on order.item = item.id").field("order.id, item.name,item.currentPrice as price,order.createAt,order.status").where({ user: userId }).order("order.createAt DESC").select();
  };

  Order.prototype.getConfirmedAuction = function getConfirmedAuction(userId) {
    return this.join("item on order.item = item.id").field("item.name, order.id, item.currentPrice").where({ user: userId }).order("order.createAt DESC").select();
  };

  Order.prototype.getWaitPay = function getWaitPay(userId) {
    return this.where({ user: userId }).where("order.status = 1").field("item.name, order.id, item.currentPrice").join("item on order.item = item.id").order("order.createAt DESC").select();
  };

  Order.prototype.getListAdmin = function getListAdmin() {
    return this.join("item on order.item = item.id").join("user on order.user = user.id").field("item.id, item.name, item.currentPrice, user.username, order.createAt, order.status").order("order.createAt DESC").select();
  };

  return Order;
}(_base2.default);

exports.default = Order;
//# sourceMappingURL=order.js.map