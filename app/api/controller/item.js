'use strict';

exports.__esModule = true;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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
  _class.prototype.init = function init() {
    var _Base$prototype$init;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_Base$prototype$init = _Base.prototype.init).call.apply(_Base$prototype$init, [this].concat(args));
    this.itemModel = this.model('item');
  };

  _class.prototype.auctioningAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var _this2 = this;

      var itemModel, items, user;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              itemModel = this.model("item");
              _context2.next = 3;
              return this.model("item").setRelation(false).join("item_group on item.group = item_group.id").join("item_type on item.type = item_type.id").where({ status: itemModel.AUCTIONING }).where("item_group.isOpen = 1").field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, item.image, item_type.name as type").select();

            case 3:
              items = _context2.sent;
              _context2.next = 6;
              return this.session("user");

            case 6:
              user = _context2.sent;

              if (think.isEmpty(user)) {
                _context2.next = 11;
                break;
              }

              return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                var followingItems, itemIds;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _this2.model("follow").field("item").where({ user: user["id"] }).select();

                      case 2:
                        followingItems = _context.sent;
                        itemIds = followingItems.map(function (f) {
                          return f["item"];
                        });

                        items.map(function (i) {
                          return itemIds.indexOf(i["id"]) !== -1 ? i["following"] = true : i["following"] = false;
                        });

                      case 5:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this2);
              })(), 't0', 9);

            case 9:
              _context2.next = 12;
              break;

            case 11:
              items.map(function (i) {
                return i["following"] = null;
              });

            case 12:
              return _context2.abrupt('return', this.success(items));

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function auctioningAction() {
      return _ref.apply(this, arguments);
    }

    return auctioningAction;
  }();

  _class.prototype.auctionedAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var _this3 = this;

      var itemModel, items, user;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              itemModel = this.model("item");
              _context4.next = 3;
              return this.model("item").setRelation(false).join("item_group on item.group = item_group.id").join("item_type on item.type = item_type.id").where({ status: [itemModel.AUCTION_ENDED, itemModel.AUCTION_FAILED] }).where("item_group.isOpen = 1").field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, item.image, item_type.name as type").select();

            case 3:
              items = _context4.sent;
              _context4.next = 6;
              return this.session("user");

            case 6:
              user = _context4.sent;

              if (think.isEmpty(user)) {
                _context4.next = 11;
                break;
              }

              return _context4.delegateYield(_regenerator2.default.mark(function _callee3() {
                var followingItems, itemIds;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _this3.model("follow").field("item").where({ user: user["id"] }).select();

                      case 2:
                        followingItems = _context3.sent;
                        itemIds = followingItems.map(function (f) {
                          return f["item"];
                        });

                        items.map(function (i) {
                          return itemIds.indexOf(i["id"]) !== -1 ? i["following"] = true : i["following"] = false;
                        });

                      case 5:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee3, _this3);
              })(), 't0', 9);

            case 9:
              _context4.next = 12;
              break;

            case 11:
              items.map(function (i) {
                return i["following"] = null;
              });

            case 12:
              return _context4.abrupt('return', this.success(items));

            case 13:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function auctionedAction() {
      return _ref2.apply(this, arguments);
    }

    return auctionedAction;
  }();

  _class.prototype.auctionNotStartAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
      var _this4 = this;

      var itemModel, items, user;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              itemModel = this.model("item");
              _context6.next = 3;
              return this.model("item").setRelation(false).join("item_group on item.group = item_group.id").join("item_type on item.type = item_type.id").where({ status: itemModel.AUCTION_NOT_STARTED }).where("item_group.isOpen = 1").field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, item.image, item_type.name as type").select();

            case 3:
              items = _context6.sent;
              _context6.next = 6;
              return this.session("user");

            case 6:
              user = _context6.sent;

              if (think.isEmpty(user)) {
                _context6.next = 11;
                break;
              }

              return _context6.delegateYield(_regenerator2.default.mark(function _callee5() {
                var followingItems, itemIds;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return _this4.model("follow").field("item").where({ user: user["id"] }).select();

                      case 2:
                        followingItems = _context5.sent;
                        itemIds = followingItems.map(function (f) {
                          return f["item"];
                        });

                        items.map(function (i) {
                          return itemIds.indexOf(i["id"]) !== -1 ? i["following"] = true : i["following"] = false;
                        });

                      case 5:
                      case 'end':
                        return _context5.stop();
                    }
                  }
                }, _callee5, _this4);
              })(), 't0', 9);

            case 9:
              _context6.next = 12;
              break;

            case 11:
              items.map(function (i) {
                return i["following"] = null;
              });

            case 12:
              return _context6.abrupt('return', this.success(items));

            case 13:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function auctionNotStartAction() {
      return _ref3.apply(this, arguments);
    }

    return auctionNotStartAction;
  }();

  //返回某个拍品的所有竞拍记录


  _class.prototype.getBidAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
      var itemId, res;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              itemId = this.param("id");
              _context7.next = 3;
              return this.model("bid").getItemBids(itemId);

            case 3:
              res = _context7.sent;
              return _context7.abrupt('return', this.success(res));

            case 5:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getBidAction() {
      return _ref4.apply(this, arguments);
    }

    return getBidAction;
  }();

  //竞拍某样物品
  //传入参数 auctionPrice：竞拍价格，itemId: 竞拍物品；


  _class.prototype.bidAction = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
      var now, config, user, userId, value, itemid, res, item, time, need_delay_time, auto_delay_time, newStage;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              now = +new Date();
              config = think.model('config', null, 'api');
              _context8.next = 4;
              return this.session("user");

            case 4:
              user = _context8.sent;

              if (!think.isEmpty(user)) {
                _context8.next = 7;
                break;
              }

              return _context8.abrupt('return', this.fail());

            case 7:
              userId = user["id"];
              value = this.param("auctionPrice");
              itemid = this.param("itemId");
              _context8.next = 12;
              return this.model("bid").addOne({
                user: userId,
                item: itemid,
                value: value,
                status: this.model("bid").LEADING
              });

            case 12:
              res = _context8.sent;
              _context8.next = 15;
              return this.model("item").where({ id: itemid }).update({
                currentBidder: userId
              });

            case 15:
              _context8.next = 17;
              return this.model("user").where({ id: userId }).find();

            case 17:
              user = _context8.sent;
              _context8.next = 20;
              return this.model("user").where({ id: userId }).update({
                remainCreditLines: user.remainCreditLines - value
              });

            case 20:
              _context8.next = 22;
              return this.model("item").setRelation(false).where({ id: itemid }).find();

            case 22:
              item = _context8.sent;

              if (!(item.auctionType == 0)) {
                _context8.next = 32;
                break;
              }

              time = config.get('auction.ahead_time.time');

              if (!(item.auctionEndTime < now + time)) {
                _context8.next = 30;
                break;
              }

              item.auctionEndTime = now + time;
              _context8.next = 29;
              return this.model("item").where({ id: itemid }).update({
                auctionEndTime: item.auctionEndTime
              });

            case 29:
              this.model("item").setCheckStatusTimer(item.auctionEndTime - now);

            case 30:
              _context8.next = 40;
              break;

            case 32:
              if (!(item.auctionType == 1)) {
                _context8.next = 40;
                break;
              }

              need_delay_time = config.get('auction.fix_time.need_delay_time');
              auto_delay_time = config.get('auction.fix_time.auto_delay_time');

              if (!(now + need_delay_time > item.auctionEndTime)) {
                _context8.next = 40;
                break;
              }

              item.auctionEndTime += auto_delay_time;
              _context8.next = 39;
              return this.model("item").where({ id: itemid }).update({
                auctionEndTime: item.auctionEndTime
              });

            case 39:
              this.model("item").setCheckStatusTimer(item.auctionEndTime - now);

            case 40:
              _context8.next = 42;
              return this.model("item").getStage(item["currentPrice"]);

            case 42:
              newStage = _context8.sent;
              return _context8.abrupt('return', this.success({ id: res, newPrice: item["currentPrice"], newStage: newStage }));

            case 44:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function bidAction() {
      return _ref5.apply(this, arguments);
    }

    return bidAction;
  }();

  _class.prototype.followAction = function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
      var user, userId, itemId, state;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.session("user");

            case 2:
              user = _context9.sent;

              if (!think.isEmpty(user)) {
                _context9.next = 5;
                break;
              }

              return _context9.abrupt('return', this.fail());

            case 5:
              userId = user.id;
              itemId = this.param("itemId");
              state = this.param("state");

              if (!state) {
                _context9.next = 16;
                break;
              }

              _context9.t0 = this;
              _context9.next = 12;
              return this.model("follow").add({ user: userId, item: itemId });

            case 12:
              _context9.t1 = _context9.sent;
              return _context9.abrupt('return', _context9.t0.success.call(_context9.t0, _context9.t1));

            case 16:
              _context9.t2 = this;
              _context9.next = 19;
              return this.model("follow").where({ user: userId, item: itemId }).delete();

            case 19:
              _context9.t3 = _context9.sent;
              return _context9.abrupt('return', _context9.t2.success.call(_context9.t2, _context9.t3));

            case 21:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function followAction() {
      return _ref6.apply(this, arguments);
    }

    return followAction;
  }();

  _class.prototype.groupAction = function () {
    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
      var groupId, group, data;
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              groupId = this.param("id");
              _context10.next = 3;
              return this.model("item_group").selectData(groupId);

            case 3:
              group = _context10.sent;
              _context10.next = 6;
              return this.model("item").setRelation(false).join("item_group on item.group = item_group.id").join("item_type on item.type = item_type.id").where({ "item_group.id": groupId }).where("item_group.isOpen = 1").field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, item.image, item_type.name as type").select();

            case 6:
              data = _context10.sent;
              return _context10.abrupt('return', this.success({ group: group, items: data }));

            case 8:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function groupAction() {
      return _ref7.apply(this, arguments);
    }

    return groupAction;
  }();

  _class.prototype.detailAction = function () {
    var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
      var itemId, resItemInfo, resRelatedItems, user, userId, _iterator, _isArray, _i, _ref9, r, _iterator2, _isArray2, _i2, _ref10, _r;

      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              itemId = this.param("id"); //获取item id;

              _context11.next = 3;
              return this._detailHelper(itemId);

            case 3:
              resItemInfo = _context11.sent;
              _context11.next = 6;
              return this._relatedItemHelper(itemId);

            case 6:
              resRelatedItems = _context11.sent;
              _context11.next = 9;
              return this.session("user");

            case 9:
              user = _context11.sent;

              if (think.isEmpty(user)) {
                _context11.next = 34;
                break;
              }

              userId = user["id"];
              _context11.next = 14;
              return this._followingHelper(userId, itemId);

            case 14:
              resItemInfo["following"] = _context11.sent;
              _iterator = resRelatedItems, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 16:
              if (!_isArray) {
                _context11.next = 22;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context11.next = 19;
                break;
              }

              return _context11.abrupt('break', 32);

            case 19:
              _ref9 = _iterator[_i++];
              _context11.next = 26;
              break;

            case 22:
              _i = _iterator.next();

              if (!_i.done) {
                _context11.next = 25;
                break;
              }

              return _context11.abrupt('break', 32);

            case 25:
              _ref9 = _i.value;

            case 26:
              r = _ref9;
              _context11.next = 29;
              return this._followingHelper(userId, r["id"]);

            case 29:
              r["following"] = _context11.sent;

            case 30:
              _context11.next = 16;
              break;

            case 32:
              _context11.next = 50;
              break;

            case 34:
              resItemInfo["following"] = null;
              _iterator2 = resRelatedItems, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

            case 36:
              if (!_isArray2) {
                _context11.next = 42;
                break;
              }

              if (!(_i2 >= _iterator2.length)) {
                _context11.next = 39;
                break;
              }

              return _context11.abrupt('break', 50);

            case 39:
              _ref10 = _iterator2[_i2++];
              _context11.next = 46;
              break;

            case 42:
              _i2 = _iterator2.next();

              if (!_i2.done) {
                _context11.next = 45;
                break;
              }

              return _context11.abrupt('break', 50);

            case 45:
              _ref10 = _i2.value;

            case 46:
              _r = _ref10;

              _r["following"] = null;

            case 48:
              _context11.next = 36;
              break;

            case 50:
              resItemInfo["relatedItems"] = resRelatedItems;
              return _context11.abrupt('return', this.success(resItemInfo));

            case 52:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function detailAction() {
      return _ref8.apply(this, arguments);
    }

    return detailAction;
  }();

  _class.prototype._relatedItemHelper = function () {
    var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12(id, userId) {
      var itemInfo, relatedItems, res, _iterator3, _isArray3, _i3, _ref12, r, rDetail;

      return _regenerator2.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this.itemModel.setRelation(false).where({ "id": id }).find();

            case 2:
              itemInfo = _context12.sent;
              _context12.next = 5;
              return this.itemModel.setRelation(false).where({ "group": itemInfo["group"] }).field("id").limit(10).select();

            case 5:
              relatedItems = _context12.sent;
              res = [];
              _iterator3 = relatedItems, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

            case 8:
              if (!_isArray3) {
                _context12.next = 14;
                break;
              }

              if (!(_i3 >= _iterator3.length)) {
                _context12.next = 11;
                break;
              }

              return _context12.abrupt('break', 25);

            case 11:
              _ref12 = _iterator3[_i3++];
              _context12.next = 18;
              break;

            case 14:
              _i3 = _iterator3.next();

              if (!_i3.done) {
                _context12.next = 17;
                break;
              }

              return _context12.abrupt('break', 25);

            case 17:
              _ref12 = _i3.value;

            case 18:
              r = _ref12;
              _context12.next = 21;
              return this._detailHelper(r["id"], userId);

            case 21:
              rDetail = _context12.sent;

              res.push(rDetail);

            case 23:
              _context12.next = 8;
              break;

            case 25:
              return _context12.abrupt('return', res);

            case 26:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function _relatedItemHelper(_x, _x2) {
      return _ref11.apply(this, arguments);
    }

    return _relatedItemHelper;
  }();

  _class.prototype._detailHelper = function () {
    var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13(id) {
      var itemInfo, imageIds;
      return _regenerator2.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this.itemModel.setRelation(false).where({ "id": id }).find();

            case 2:
              itemInfo = _context13.sent;
              imageIds = JSON.parse(itemInfo["image"]);
              _context13.next = 6;
              return this.model("bid").where({ "item": id }).count();

            case 6:
              itemInfo["bidCount"] = _context13.sent;
              _context13.next = 9;
              return this.model("follow").where({ "item": id }).count();

            case 9:
              itemInfo["followCount"] = _context13.sent;

              itemInfo.beginPrice = +itemInfo.beginPrice;
              itemInfo.currentPrice = +itemInfo.currentPrice;
              _context13.next = 14;
              return this.model("item").getStage(itemInfo["currentPrice"]);

            case 14:
              itemInfo["stage"] = _context13.sent;
              return _context13.abrupt('return', itemInfo);

            case 16:
            case 'end':
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function _detailHelper(_x3) {
      return _ref13.apply(this, arguments);
    }

    return _detailHelper;
  }();

  _class.prototype._followingHelper = function () {
    var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14(userId, itemId) {
      return _regenerator2.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return this.model("follow").isFollowing(userId, itemId);

            case 2:
              return _context14.abrupt('return', _context14.sent);

            case 3:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function _followingHelper(_x4, _x5) {
      return _ref14.apply(this, arguments);
    }

    return _followingHelper;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=item.js.map