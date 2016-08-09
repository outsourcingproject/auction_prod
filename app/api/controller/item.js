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
              return this.model("item").setRelation(false).where({ status: itemModel.AUCTIONING }).join("item_type on item.type = item_type.id").field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, image, item_type.name as type").limit(10).select();

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
              return this.model("item").setRelation(false).where({ status: itemModel.AUCTION_ENDED }).join("item_type on item.type = item_type.id").field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, image, item_type.name as type").limit(10).select();

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

  //返回某个拍品的所有竞拍记录


  _class.prototype.getBidAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      var itemId, res;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              itemId = this.param("id");
              _context5.next = 3;
              return this.model("bid").getItemBids(itemId);

            case 3:
              res = _context5.sent;
              return _context5.abrupt('return', this.success(res));

            case 5:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getBidAction() {
      return _ref3.apply(this, arguments);
    }

    return getBidAction;
  }();

  //竞拍某样物品
  //传入参数 auctionPrice：竞拍价格，itemId: 竞拍物品；


  _class.prototype.bidAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
      var user, userId, value, item, res, newPrice, newStage;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.session("user");

            case 2:
              user = _context6.sent;
              userId = user["id"];
              value = this.param("auctionPrice");
              item = this.param("itemId");
              _context6.next = 8;
              return this.model("bid").add({ user: userId, item: item, value: value, status: this.model("item").AUCTIONING });

            case 8:
              res = _context6.sent;

              //将新的价格数据返回给前端。
              console.log(res);
              _context6.next = 12;
              return this.model("item").setRelation(false).where({ id: item }).field("currentPrice").find();

            case 12:
              newPrice = _context6.sent;
              _context6.next = 15;
              return this.model("item").getStage(newPrice["currentPrice"]);

            case 15:
              newStage = _context6.sent;
              return _context6.abrupt('return', this.success({ id: res, newPrice: newPrice["currentPrice"], newStage: newStage }));

            case 17:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function bidAction() {
      return _ref4.apply(this, arguments);
    }

    return bidAction;
  }();

  _class.prototype.detailAction = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
      var itemId, resItemInfo, resRelatedItems, user, userId, _iterator, _isArray, _i, _ref6, r, _iterator2, _isArray2, _i2, _ref7, _r;

      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              itemId = this.param("id"); //获取item id;

              _context7.next = 3;
              return this._detailHelper(itemId);

            case 3:
              resItemInfo = _context7.sent;
              _context7.next = 6;
              return this._relatedItemHelper(itemId);

            case 6:
              resRelatedItems = _context7.sent;
              _context7.next = 9;
              return this.session("user");

            case 9:
              user = _context7.sent;

              if (!(user != null)) {
                _context7.next = 34;
                break;
              }

              userId = user["id"];
              _context7.next = 14;
              return this._followingHelper(userId, itemId);

            case 14:
              resItemInfo["following"] = _context7.sent;
              _iterator = resRelatedItems, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 16:
              if (!_isArray) {
                _context7.next = 22;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context7.next = 19;
                break;
              }

              return _context7.abrupt('break', 32);

            case 19:
              _ref6 = _iterator[_i++];
              _context7.next = 26;
              break;

            case 22:
              _i = _iterator.next();

              if (!_i.done) {
                _context7.next = 25;
                break;
              }

              return _context7.abrupt('break', 32);

            case 25:
              _ref6 = _i.value;

            case 26:
              r = _ref6;
              _context7.next = 29;
              return this._followingHelper(userId, itemId);

            case 29:
              r["isFollowing"] = _context7.sent;

            case 30:
              _context7.next = 16;
              break;

            case 32:
              _context7.next = 50;
              break;

            case 34:
              resItemInfo["following"] = null;
              _iterator2 = resRelatedItems, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

            case 36:
              if (!_isArray2) {
                _context7.next = 42;
                break;
              }

              if (!(_i2 >= _iterator2.length)) {
                _context7.next = 39;
                break;
              }

              return _context7.abrupt('break', 50);

            case 39:
              _ref7 = _iterator2[_i2++];
              _context7.next = 46;
              break;

            case 42:
              _i2 = _iterator2.next();

              if (!_i2.done) {
                _context7.next = 45;
                break;
              }

              return _context7.abrupt('break', 50);

            case 45:
              _ref7 = _i2.value;

            case 46:
              _r = _ref7;

              _r["isFollowing"] = null;

            case 48:
              _context7.next = 36;
              break;

            case 50:
              resItemInfo["relatedItems"] = resRelatedItems;
              return _context7.abrupt('return', this.success(resItemInfo));

            case 52:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function detailAction() {
      return _ref5.apply(this, arguments);
    }

    return detailAction;
  }();

  _class.prototype._relatedItemHelper = function () {
    var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(id, userId) {
      var itemInfo, relatedItems, res, _iterator3, _isArray3, _i3, _ref9, r, rDetail;

      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.itemModel.setRelation(false).where({ "id": id }).find();

            case 2:
              itemInfo = _context8.sent;
              _context8.next = 5;
              return this.itemModel.setRelation(false).where({ "group": itemInfo["group"] }).field("id").select();

            case 5:
              relatedItems = _context8.sent;
              res = [];
              _iterator3 = relatedItems, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

            case 8:
              if (!_isArray3) {
                _context8.next = 14;
                break;
              }

              if (!(_i3 >= _iterator3.length)) {
                _context8.next = 11;
                break;
              }

              return _context8.abrupt('break', 25);

            case 11:
              _ref9 = _iterator3[_i3++];
              _context8.next = 18;
              break;

            case 14:
              _i3 = _iterator3.next();

              if (!_i3.done) {
                _context8.next = 17;
                break;
              }

              return _context8.abrupt('break', 25);

            case 17:
              _ref9 = _i3.value;

            case 18:
              r = _ref9;
              _context8.next = 21;
              return this._detailHelper(r["id"], userId);

            case 21:
              rDetail = _context8.sent;

              res.push(rDetail);

            case 23:
              _context8.next = 8;
              break;

            case 25:
              return _context8.abrupt('return', res);

            case 26:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function _relatedItemHelper(_x, _x2) {
      return _ref8.apply(this, arguments);
    }

    return _relatedItemHelper;
  }();

  _class.prototype._detailHelper = function () {
    var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(id) {
      var itemInfo, imageIds;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.itemModel.setRelation(false).where({ "id": id }).find();

            case 2:
              itemInfo = _context9.sent;

              console.log(itemInfo);
              imageIds = JSON.parse(itemInfo["image"]);
              _context9.next = 7;
              return this.model("bid").where({ "item": id }).count();

            case 7:
              itemInfo["bidCount"] = _context9.sent;
              _context9.next = 10;
              return this.model("follow").where({ "item": id }).count();

            case 10:
              itemInfo["followCount"] = _context9.sent;

              itemInfo.beginPrice = +itemInfo.beginPrice;
              itemInfo.currentPrice = +itemInfo.currentPrice;
              _context9.next = 15;
              return this.model("item").getStage(itemInfo["currentPrice"]);

            case 15:
              itemInfo["stage"] = _context9.sent;
              return _context9.abrupt('return', itemInfo);

            case 17:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function _detailHelper(_x3) {
      return _ref10.apply(this, arguments);
    }

    return _detailHelper;
  }();

  _class.prototype._followingHelper = function () {
    var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(userId, itemId) {
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.model("follow").isFollowing(userId, itemId);

            case 2:
              itemInfo["following"] = _context10.sent;

            case 3:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function _followingHelper(_x4, _x5) {
      return _ref11.apply(this, arguments);
    }

    return _followingHelper;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=item.js.map