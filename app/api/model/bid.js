"use strict";

exports.__esModule = true;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

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

var Bid = function (_Base) {
  (0, _inherits3.default)(Bid, _Base);

  function Bid() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Bid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Base.call.apply(_Base, [this].concat(args))), _this), _this.WINNING = 0, _this.FAILING = 1, _this.LEADING = 2, _this.FALLING = 3, _this.STATUS = ["得标", "竞标失败", "暂时领先", "被超越"], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  } // 得标
  //失败
  //领先
  //落后

  // init(...args){
  //   super.init(...args);
  //   this.systemUser = User.systemUser;
  // }


  Bid.prototype.getList = function getList(userId) {
    return this.join("item on bid.item=item.id").field("bid.id as bid,value as price,bid.createAt,item.name as name,item.id as id,item.status as itemStatus, bid.status as bidStatus").where({ user: userId }).select();
  };

  Bid.prototype.getDistinctList = function getDistinctList(userId) {
    return this.where({ user: userId }).distinct("item").select();
  };

  Bid.prototype.getPriceOver = function getPriceOver(userId) {
    return this.join("item on bid.item = item.id").field("bid.createAt as time, bid.item as id, bid.value as price, item.name").where("user =" + userId + " and bid.status = " + this.FALLING).order("bid.createAt DESC").find();
  };
  // 查询某件物品的所有竞标记录
  // 返回值 id, userId, username, value, status


  Bid.prototype.getItemBids = function getItemBids(itemId) {
    return this.model("bid").join("user on bid.user = user.id").field("bid.id as id, bid.user as userId, user.username as username, bid.value as price, bid.status as status,bid.createAt").where("bid.item = " + itemId).select();
  };
  //Object:{user:userId, item:item, value:value, status:this.model("bid").LEADING}


  Bid.prototype.addOne = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(bid) {
      var _this2 = this;

      var userModel, messageModel, itemModel, _ret2;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userModel = think.model("user", null, "api");
              messageModel = think.model("message", null, "api");
              itemModel = think.model("item", null, "api");
              _context2.prev = 3;
              return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                var bidId, item, bids, messages;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _this2.startTrans();

                      case 2:
                        _context.next = 4;
                        return _this2.add(bid);

                      case 4:
                        bidId = _context.sent;
                        _context.next = 7;
                        return itemModel.where({ id: bid.item }).find();

                      case 7:
                        item = _context.sent;
                        _context.next = 10;
                        return messageModel.sendSystemMessage([{ from: userModel.systemUser, to: bid.user, title: "系统消息：您的出价领先", content: "您的商品" + item.name + _this2.STATUS[bid.status], read: 0 }]);

                      case 10:
                        _context.next = 12;
                        return _this2.where({ value: { "<": bid.value }, item: bid.item, user: { "!=": bid.user }, status: { "!=": _this2.FALLING } }).distinct("user").select();

                      case 12:
                        bids = _context.sent;

                        console.log(bids);
                        _context.next = 16;
                        return _this2.where({ value: { "<": bid.value }, item: bid.item }).update({ status: _this2.FALLING });

                      case 16:
                        //给被超越竞标记录的用户发送消息
                        messages = bids.map(function (b) {
                          return { from: userModel.systemUser, to: b.user, title: "系统消息：您的出价被超越", content: "您的商品" + item.name + _this2.STATUS[3], read: 0 };
                        });

                        if (think.isEmpty(messages)) {
                          _context.next = 20;
                          break;
                        }

                        _context.next = 20;
                        return messageModel.sendSystemMessage(messages);

                      case 20:
                        _context.next = 22;
                        return _this2.commit();

                      case 22:
                        return _context.abrupt("return", {
                          v: bidId
                        });

                      case 23:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, _this2);
              })(), "t0", 5);

            case 5:
              _ret2 = _context2.t0;

              if (!((typeof _ret2 === "undefined" ? "undefined" : (0, _typeof3.default)(_ret2)) === "object")) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", _ret2.v);

            case 8:
              _context2.next = 15;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t1 = _context2["catch"](3);
              _context2.next = 14;
              return this.rollback();

            case 14:
              return _context2.abrupt("return", 0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[3, 10]]);
    }));

    function addOne(_x) {
      return _ref.apply(this, arguments);
    }

    return addOne;
  }();

  // 查询竞标状态：'得标', '失败', '领先', '被超'
  // async getStatus(bidId){
  //   console.log(bidId);
  //   let res = 3;
  //   let bid = await this.where({id:bidId}).find();
  //   let itemId = bid["item"];
  //   let userId = bid["user"];
  //   let itemModel = think.model("item",null,"api");
  //   let item = (await itemModel.where({id:itemId}).select())[0];
  //   console.log(item);
  //   if(item["status"] == itemModel.AUCTION_ENDED && item["currentBidder"] == userId)
  //     res = 0;
  //   else if(item["status"] == itemModel.AUCTION_ENDED || item["status"] == itemModel.AUCTION_FAILED)
  //     res = 1;
  //   else if(item["status"] == itemModel.AUCTIONING){
  //     let maxPrice = await this.where({item:itemId}).max("value");
  //     console.log(maxPrice);
  //     if(maxPrice == bid["value"])
  //       res = 2;
  //     else res = 3;
  //   }
  //   return res;
  // }


  return Bid;
}(_base2.default);

exports.default = Bid;
//# sourceMappingURL=bid.js.map