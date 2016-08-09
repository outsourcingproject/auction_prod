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

var Bid = function (_Base) {
  (0, _inherits3.default)(Bid, _Base);

  function Bid() {
    (0, _classCallCheck3.default)(this, Bid);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  Bid.prototype.getList = function getList(userId) {
    return this.join("item on bid.item=item.id").field("bid.id as bid,value as price,bid.createAt,item.name as name,item.id as id,item.status as itemStatus").where({ user: userId }).select();
  };

  Bid.prototype.getDistinctList = function getDistinctList(userId) {
    return this.where({ user: userId }).distinct("item").select();
  };

  Bid.prototype.getPriceOver = function getPriceOver(itemId, price) {
    return this.join("item on bid.item = item.id").field("bid.createAt as time, bid.item as id, bid.value as price, item.name").where({ item: itemId, value: { ">": price } }).order("bid.createAt DESC").find();
  };
  // 查询某件物品的所有竞标记录
  // 返回值 id, userId, username, value, status


  Bid.prototype.getItemBids = function getItemBids(itemId) {
    return this.model("bid").join("user on bid.user = user.id").field("bid.id as id, bid.user as userId, user.username as username, bid.value as price, bid.status as status,bid.createAt").where("bid.item = " + itemId).select();
  };
  // 查询竞标状态：'得标', '失败', '领先', '被超'


  Bid.prototype.getStatus = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(bidId) {
      var res, bid, itemId, userId, itemModel, item, maxPrice;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(bidId);
              res = 3;
              _context.next = 4;
              return this.where({ id: bidId }).select();

            case 4:
              bid = _context.sent[0];
              itemId = bid["item"];
              userId = bid["user"];
              itemModel = think.model("item", null, "api");
              _context.next = 10;
              return itemModel.where({ id: itemId }).select();

            case 10:
              item = _context.sent[0];

              console.log(item);

              if (!(item["status"] == itemModel.AUCTION_ENDED && item["currentBidder"] == userId)) {
                _context.next = 16;
                break;
              }

              res = 0;
              _context.next = 26;
              break;

            case 16:
              if (!(item["status"] == itemModel.AUCTION_ENDED || item["status"] == itemModel.AUCTION_FAILED)) {
                _context.next = 20;
                break;
              }

              res = 1;
              _context.next = 26;
              break;

            case 20:
              if (!(item["status"] == itemModel.AUCTIONING)) {
                _context.next = 26;
                break;
              }

              _context.next = 23;
              return this.where({ item: itemId }).max("value");

            case 23:
              maxPrice = _context.sent;

              console.log(maxPrice);
              if (maxPrice == bid["value"]) res = 2;else res = 3;

            case 26:
              return _context.abrupt("return", res);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getStatus(_x) {
      return _ref.apply(this, arguments);
    }

    return getStatus;
  }();

  return Bid;
}(_base2.default);

exports.default = Bid;
//# sourceMappingURL=bid.js.map