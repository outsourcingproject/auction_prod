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
    return this.add({ user: userId, item: itemId, status: 0 });
  };

  //确认订单：买家确定地址等信息，订单更新状态
  //未测试


  Order.prototype.confirmOrder = function confirmOrder(order) {
    order.status = 1;
    return this.where({ id: order.id }).update(order);
  };

  Order.prototype.finishOrder = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(order) {
      var userModel, data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userModel = think.model("user", null, "api");
              _context.prev = 1;
              _context.next = 4;
              return this.startTrans();

            case 4:
              this.where({ id: order }).update({ status: this.FINISHED });
              data = this.where({ id: order }).field("user", "price").find();
              //更新信用值
              // await userModel.where({id:data.user}).increment("creditLines",data.price);

              _context.next = 8;
              return this.commit();

            case 8:
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              _context.next = 14;
              return this.rollback();

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 10]]);
    }));

    function finishOrder(_x) {
      return _ref.apply(this, arguments);
    }

    return finishOrder;
  }();
  //更改订单状态
  // async changeStatus(orderId){
  //   let status = (await this.where({id:orderId}).find())["status"];
  //   switch(status){
  //     case WAIT_CONFIRM:
  //       return this.where({id:orderId}).update({status:WAIT_PAY});
  //     case  WAIT_PAY:
  //       return this.where({id:orderId}).update({status:WAIT_CHECK});
  //     case WAIT_CHECK:
  //       return this.where({id:orderId}).update({status:WAIT_DELIEVER});
  //     case WAIT_DELIEVER:
  //       return this.where({id:orderId}).update({status:DELIEVERED});
  //     case DELIEVERED:
  //       return this.where({id:orderId}).update({status:FINISHED});
  //     default:
  //       return this.where({id:orderId}).update();
  //   }
  // }
  //取消订单，改变订单状态为取消


  Order.prototype.cancelOne = function cancelOne(orderId) {
    return this.where({ id: orderId }).update({ status: CANCELED });
  };

  Order.prototype.getList = function getList(userId) {
    return this.join("item on order.item = item.id").field("order.id, item.name,item.currentPrice as price,order.createAt,order.status,expressName,expressNo").where({ user: userId }).order("order.createAt DESC").select();
  };

  Order.prototype.getConfirmedAuction = function getConfirmedAuction(userId) {
    return this.join("item on order.item = item.id").field("item.name, order.id, item.currentPrice").where("user = " + userId + " and order.status = " + this.WAIT_CONFIRM).order("order.createAt DESC").select();
  };

  Order.prototype.getWaitPay = function getWaitPay(userId) {
    return this.where({ user: userId }).where("order.status = " + this.WAIT_PAY).field("item.name, order.id, item.currentPrice").join("item on order.item = item.id").order("order.createAt DESC").select();
  };

  Order.prototype.getListAdmin = function getListAdmin() {
    return this.join("item on order.item = item.id").join("user on order.user = user.id").field("item.id, item.name, item.currentPrice, user.username, order.createAt, order.status").order("order.createAt DESC").select();
  };

  return Order;
}(_base2.default);

exports.default = Order;
//# sourceMappingURL=order.js.map