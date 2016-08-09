"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var Item = function (_Base) {
  (0, _inherits3.default)(Item, _Base);

  function Item() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Base.call.apply(_Base, [this].concat(args))), _this), _this.AUCTION_NOT_STARTED = 0, _this.AUCTIONING = 1, _this.AUCTION_ENDED = 2, _this.AUCTION_FAILED = 3, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  //流拍

  Item.prototype.init = function init() {
    var _Base$prototype$init;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    (_Base$prototype$init = _Base.prototype.init).call.apply(_Base$prototype$init, [this].concat(args));
    this.relation = {
      item_group: {
        type: think.model.BELONG_TO,
        key: "group",
        fKey: "id",
        order: "createAt DESC",
        relation: false
      }
    };
  };

  Item.prototype.beforeAdd = function beforeAdd(data) {
    data = _Base.prototype.beforeAdd.call(this, data);
    data.auctionBeginTime = data.auctionBeginTime || new Date();
    return data;
  };

  Item.prototype.getStage = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(currPrice) {
      var configModel, configStage, res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(currPrice);
              configModel = think.model("config", null, "api");
              _context.next = 4;
              return configModel.get("auction.bid_increasment");

            case 4:
              configStage = _context.sent;
              res = configStage.filter(function (i) {
                return i[0] <= currPrice;
              }).sort(function (i, j) {
                return i[0] < j[0];
              })[0][1];
              return _context.abrupt("return", res);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getStage(_x) {
      return _ref.apply(this, arguments);
    }

    return getStage;
  }();

  //check and change item status


  Item.prototype.checkStatus = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var currentTime, bidModel, orderModel, itemModel, items_end, _iterator, _isArray, _i, _ref3, i, boolBid, items_auctioning, _iterator2, _isArray2, _i2, _ref4, _i3;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              currentTime = new Date().getTime();
              bidModel = think.model("bid", null, "api");
              orderModel = think.model("order", null, "api");
              itemModel = think.model("item", null, "api");


              console.log("========================");
              _context2.next = 7;
              return this.where({
                auctionEndTime: { "<": currentTime },
                status: ["NOTIN", [this.AUCTION_FAILED, this.AUCTION_ENDED]]
              }).select();

            case 7:
              items_end = _context2.sent;
              _iterator = items_end, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 9:
              if (!_isArray) {
                _context2.next = 15;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("break", 45);

            case 12:
              _ref3 = _iterator[_i++];
              _context2.next = 19;
              break;

            case 15:
              _i = _iterator.next();

              if (!_i.done) {
                _context2.next = 18;
                break;
              }

              return _context2.abrupt("break", 45);

            case 18:
              _ref3 = _i.value;

            case 19:
              i = _ref3;
              _context2.next = 22;
              return bidModel.where({ item: i["id"] }).count();

            case 22:
              boolBid = _context2.sent;

              if (!(boolBid == 0)) {
                _context2.next = 28;
                break;
              }

              _context2.next = 26;
              return this.where({ id: i["id"] }).update({ status: this.AUCTION_FAILED });

            case 26:
              _context2.next = 43;
              break;

            case 28:
              _context2.prev = 28;
              _context2.next = 31;
              return this.startTrans();

            case 31:
              _context2.next = 33;
              return orderModel.addOne(i["currentBidder"], i["id"]);

            case 33:
              _context2.next = 35;
              return this.where({ id: i["id"] }).update({ status: this.AUCTION_ENDED });

            case 35:
              _context2.next = 37;
              return this.commit();

            case 37:
              _context2.next = 43;
              break;

            case 39:
              _context2.prev = 39;
              _context2.t0 = _context2["catch"](28);
              _context2.next = 43;
              return this.rollback();

            case 43:
              _context2.next = 9;
              break;

            case 45:

              console.log("========================");

              _context2.next = 48;
              return itemModel.where({
                auctionBeginTime: { "<": currentTime },
                auctionEndTime: { ">": currentTime },
                status: ["NOTIN", [this.AUCTIONING]]
              }).select();

            case 48:
              items_auctioning = _context2.sent;
              _iterator2 = items_auctioning, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

            case 50:
              if (!_isArray2) {
                _context2.next = 56;
                break;
              }

              if (!(_i2 >= _iterator2.length)) {
                _context2.next = 53;
                break;
              }

              return _context2.abrupt("break", 65);

            case 53:
              _ref4 = _iterator2[_i2++];
              _context2.next = 60;
              break;

            case 56:
              _i2 = _iterator2.next();

              if (!_i2.done) {
                _context2.next = 59;
                break;
              }

              return _context2.abrupt("break", 65);

            case 59:
              _ref4 = _i2.value;

            case 60:
              _i3 = _ref4;
              _context2.next = 63;
              return itemModel.where({ id: _i3["id"] }).update({ status: this.AUCTIONING });

            case 63:
              _context2.next = 50;
              break;

            case 65:
              return _context2.abrupt("return", true);

            case 66:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[28, 39]]);
    }));

    function checkStatus() {
      return _ref2.apply(this, arguments);
    }

    return checkStatus;
  }();

  Item.prototype.autoProcessItem = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function autoProcessItem() {
      return _ref5.apply(this, arguments);
    }

    return autoProcessItem;
  }();

  Item.prototype.getListAdmin = function getListAdmin() {
    return this.order("item.createAt DESC").select();
  };

  return Item;
}(_base2.default);

exports.default = Item;
//# sourceMappingURL=item.js.map