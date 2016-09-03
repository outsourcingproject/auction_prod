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
      var _this2 = this;

      var currentTime, bidModel, orderModel, itemModel, messageModel, userModel, items_end, _loop, _iterator, _isArray, _i, _ref3, _ret2, items_auctioning, _iterator2, _isArray2, _i2, _ref4, _i3;

      return _regenerator2.default.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              currentTime = new Date().getTime();
              bidModel = think.model("bid", null, "api");
              orderModel = think.model("order", null, "api");
              itemModel = think.model("item", null, "api");
              messageModel = think.model("message", null, "api");
              userModel = think.model("user", null, "api");
              _context3.next = 8;
              return this.where({
                auctionEndTime: { "<": currentTime },
                status: ["NOTIN", [this.AUCTION_FAILED, this.AUCTION_ENDED]]
              }).select();

            case 8:
              items_end = _context3.sent;
              _loop = _regenerator2.default.mark(function _loop() {
                var i, boolBid, userIds, messages;
                return _regenerator2.default.wrap(function _loop$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!_isArray) {
                          _context2.next = 6;
                          break;
                        }

                        if (!(_i >= _iterator.length)) {
                          _context2.next = 3;
                          break;
                        }

                        return _context2.abrupt("return", "break");

                      case 3:
                        _ref3 = _iterator[_i++];
                        _context2.next = 10;
                        break;

                      case 6:
                        _i = _iterator.next();

                        if (!_i.done) {
                          _context2.next = 9;
                          break;
                        }

                        return _context2.abrupt("return", "break");

                      case 9:
                        _ref3 = _i.value;

                      case 10:
                        i = _ref3;
                        _context2.next = 13;
                        return bidModel.where({ item: i["id"] }).count();

                      case 13:
                        boolBid = _context2.sent;

                        if (!(boolBid == 0 || think.isEmpty(i["currentBidder"]))) {
                          _context2.next = 19;
                          break;
                        }

                        _context2.next = 17;
                        return _this2.where({ id: i["id"] }).update({ status: _this2.AUCTION_FAILED });

                      case 17:
                        _context2.next = 33;
                        break;

                      case 19:
                        _context2.next = 21;
                        return _this2.where({ id: i["id"] }).update({ status: _this2.AUCTION_ENDED });

                      case 21:
                        _context2.next = 23;
                        return orderModel.addOne(i["currentBidder"], i["id"]);

                      case 23:
                        _context2.next = 25;
                        return bidModel.where({ item: i["id"], value: i["currentPrice"] }).update({ status: bidModel.WINNING });

                      case 25:
                        _context2.next = 27;
                        return bidModel.where({ item: i["id"], value: ["!=", i["currentPrice"]] }).update({ status: bidModel.FAILING });

                      case 27:
                        _context2.next = 29;
                        return messageModel.sendSystemMessage([{ from: userModel.systemUser, to: i["currentBidder"], title: "系统消息", content: "您的商品" + i["name"] + bidModel.STATUS[0], read: 0 }]);

                      case 29:
                        userIds = bidModel.where({ item: i["id"], status: bidModel.FAILING, user: { "!=": i["currentBidder"] } }).distinct("id").select();
                        messages = userIds.map(function (u) {
                          return { from: userModel.systemUser, to: u.user, title: "系统消息", content: "您的商品" + i["name"] + bidModel.STATUS[1], read: 0 };
                        });
                        _context2.next = 33;
                        return messageModel.sendSystemMessage(messages);

                      case 33:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _loop, _this2);
              });
              _iterator = items_end, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 11:
              return _context3.delegateYield(_loop(), "t0", 12);

            case 12:
              _ret2 = _context3.t0;

              if (!(_ret2 === "break")) {
                _context3.next = 15;
                break;
              }

              return _context3.abrupt("break", 17);

            case 15:
              _context3.next = 11;
              break;

            case 17:
              _context3.next = 19;
              return itemModel.where({
                auctionBeginTime: { "<": currentTime },
                auctionEndTime: { ">": currentTime },
                status: ["NOTIN", [this.AUCTIONING]]
              }).select();

            case 19:
              items_auctioning = _context3.sent;
              _iterator2 = items_auctioning, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

            case 21:
              if (!_isArray2) {
                _context3.next = 27;
                break;
              }

              if (!(_i2 >= _iterator2.length)) {
                _context3.next = 24;
                break;
              }

              return _context3.abrupt("break", 36);

            case 24:
              _ref4 = _iterator2[_i2++];
              _context3.next = 31;
              break;

            case 27:
              _i2 = _iterator2.next();

              if (!_i2.done) {
                _context3.next = 30;
                break;
              }

              return _context3.abrupt("break", 36);

            case 30:
              _ref4 = _i2.value;

            case 31:
              _i3 = _ref4;
              _context3.next = 34;
              return itemModel.where({ id: _i3["id"] }).update({ status: this.AUCTIONING });

            case 34:
              _context3.next = 21;
              break;

            case 36:
              return _context3.abrupt("return", true);

            case 37:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2, this);
    }));

    function checkStatus() {
      return _ref2.apply(this, arguments);
    }

    return checkStatus;
  }();

  Item.prototype.getListAdmin = function getListAdmin() {
    return this.order("item.createAt DESC").select();
  };

  return Item;
}(_base2.default);

exports.default = Item;
//# sourceMappingURL=item.js.map