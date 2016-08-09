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

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = require('uuid');

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
  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var images, services, article_types, authorities, role_authorities, users, articles, addresses, messages, item_types, item_groups, items, follows, orders, bids;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this._imageHelper();

            case 2:
              images = _context.sent;
              _context.next = 5;
              return this._serviceHelper();

            case 5:
              services = _context.sent;
              _context.next = 8;
              return this._articleTypesHelper();

            case 8:
              article_types = _context.sent;
              _context.next = 11;
              return this._authorityHelper();

            case 11:
              authorities = _context.sent;
              _context.next = 14;
              return this._roleAuthorityHelper();

            case 14:
              role_authorities = _context.sent;
              _context.next = 17;
              return this._userHelper();

            case 17:
              users = _context.sent;
              _context.next = 20;
              return this._articleHelper();

            case 20:
              articles = _context.sent;
              _context.next = 23;
              return this._addressHelper();

            case 23:
              addresses = _context.sent;
              _context.next = 26;
              return this._messageHelper();

            case 26:
              messages = _context.sent;
              _context.next = 29;
              return this._itemTypeHelper();

            case 29:
              item_types = _context.sent;
              _context.next = 32;
              return this._itemGroupHelper();

            case 32:
              item_groups = _context.sent;
              _context.next = 35;
              return this._itemHelper();

            case 35:
              items = _context.sent;
              _context.next = 38;
              return this._followHelper();

            case 38:
              follows = _context.sent;
              _context.next = 41;
              return this._orderHelper();

            case 41:
              orders = _context.sent;
              _context.next = 44;
              return this._bidHelper();

            case 44:
              bids = _context.sent;
              return _context.abrupt('return', this.success({
                "article_type": article_types,
                "authority": authorities,
                "role_authority": role_authorities,
                "image": images,
                "user": users,
                "article": articles,
                "address": addresses,
                "message": messages,
                "item_type": item_types,
                "item_group": item_groups,
                "item": items,
                "follow": follows,
                "order": orders,
                "bid": bids,
                "service": services
              }));

            case 46:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function indexAction() {
      return _ref.apply(this, arguments);
    }

    return indexAction;
  }();

  _class.prototype._articleTypesHelper = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var article_types, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              article_types = [{ "name": "系统公告", "desc": "系统发布的公告", "createAt": new Date().getTime(), "updateAt": new Date().getTime() }, { "name": "新闻动态", "desc": "系统发布的公告", "createAt": new Date().getTime(), "updateAt": new Date().getTime() }, { "name": "行业动态", "desc": "系统发布的公告", "createAt": new Date().getTime(), "updateAt": new Date().getTime() }, { "name": "知识荟萃", "desc": "系统发布的公告", "createAt": new Date().getTime(), "updateAt": new Date().getTime() }];
              _context2.next = 3;
              return this.model("article_type").addMany(article_types);

            case 3:
              result = _context2.sent;
              return _context2.abrupt('return', result);

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function _articleTypesHelper() {
      return _ref2.apply(this, arguments);
    }

    return _articleTypesHelper;
  }();

  _class.prototype.articleTypeAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _articleTypesHelper;

            case 2:
              result = _context3.sent;
              return _context3.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function articleTypeAction() {
      return _ref3.apply(this, arguments);
    }

    return articleTypeAction;
  }();

  _class.prototype._userHelper = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var users, i, result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              users = [];

              for (i = 0; i < 10; i++) {
                users.push({ "username": "zhangle" + i,
                  "password": "zlpwd" + i,
                  "email": i + "573328344@qq.com",
                  "emailValidate": 1,
                  "desc": "I'm zhangle",
                  "avatar": 1,
                  "creditLines": i,
                  "level": i + 1,
                  "role": 1,
                  "lastLogin": new Date().getTime(),
                  "createAt": new Date().getTime(),
                  "updateAt": new Date().getTime()
                });
              }_context4.next = 4;
              return this.model("user").addMany(users);

            case 4:
              result = _context4.sent;
              return _context4.abrupt('return', result);

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function _userHelper() {
      return _ref4.apply(this, arguments);
    }

    return _userHelper;
  }();

  _class.prototype.userAction = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      var result;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _userHelper();

            case 2:
              result = _context5.sent;
              return _context5.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function userAction() {
      return _ref5.apply(this, arguments);
    }

    return userAction;
  }();

  _class.prototype._addressHelper = function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
      var addresses, i, result;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              addresses = [];

              for (i = 1; i <= 20; i++) {
                addresses.push({
                  "user": Math.ceil(i / 2),
                  "isDefault": i % 2,
                  "content": "这是第" + i + "条地址",
                  "province": "重庆市",
                  "city": "重庆市",
                  "area": "沙坪坝区",
                  "detail": "沙正街1号",
                  "createAt": new Date().getTime(),
                  "updateAt": new Date().getTime()
                });
              }
              _context6.next = 4;
              return this.model("address").addMany(addresses);

            case 4:
              result = _context6.sent;
              return _context6.abrupt('return', result);

            case 6:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function _addressHelper() {
      return _ref6.apply(this, arguments);
    }

    return _addressHelper;
  }();

  _class.prototype.addressAction = function () {
    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
      var result;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this._addressHelper();

            case 2:
              result = _context7.sent;
              return _context7.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function addressAction() {
      return _ref7.apply(this, arguments);
    }

    return addressAction;
  }();

  _class.prototype._articleHelper = function () {
    var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
      var articles, i, result;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              articles = [];

              for (i = 1; i <= 28; i++) {
                articles.push({
                  "title": "这是第" + i + "篇文章的题目",
                  "image": i % 10 + 1,
                  "content": "这是第" + i + "篇文章的内容，写的真精彩",
                  "author": Math.ceil(i / 5),
                  "type": i % 4 + 1,
                  "createAt": new Date().getTime(),
                  "updateAt": new Date().getTime()
                });
              }
              result = this.model("article").addMany(articles);
              return _context8.abrupt('return', result);

            case 4:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function _articleHelper() {
      return _ref8.apply(this, arguments);
    }

    return _articleHelper;
  }();

  _class.prototype.articleAction = function () {
    var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
      var result;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this._articleHelper();

            case 2:
              result = _context9.sent;
              return _context9.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function articleAction() {
      return _ref9.apply(this, arguments);
    }

    return articleAction;
  }();

  _class.prototype._authorityHelper = function () {
    var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
      var authorities, result;
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              authorities = [{ "name": "浏览拍品", "desc": "描述浏览拍品", "allows": "允许浏览拍品", "createAt": new Date().getTime(), "updateAt": new Date().getTime() }, { "name": "参与竞标", "desc": "描述参与竞标", "allows": "允许参与竞标", "createAt": new Date().getTime(), "updateAt": new Date().getTime() }, { "name": "送货上门", "desc": "描述送货上门", "allows": "允许送货上门", "createAt": new Date().getTime(), "updateAt": new Date().getTime() }];
              _context10.next = 3;
              return this.model("authority").addMany(authorities);

            case 3:
              result = _context10.sent;
              return _context10.abrupt('return', result);

            case 5:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function _authorityHelper() {
      return _ref10.apply(this, arguments);
    }

    return _authorityHelper;
  }();

  _class.prototype.authorityAction = function () {
    var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
      var result;
      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this._authorityHelper();

            case 2:
              result = _context11.sent;
              return _context11.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function authorityAction() {
      return _ref11.apply(this, arguments);
    }

    return authorityAction;
  }();

  _class.prototype._itemGroupHelper = function () {
    var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
      var groups, i, result;
      return _regenerator2.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              groups = [];

              for (i = 0; i < 8; i++) {
                groups.push({
                  "name": "专场" + i,
                  "image": "[" + i + "]",
                  "desc": "这是第" + "i" + "个专场",
                  "isOpen": i % 2,
                  "createAt": new Date().getTime(),
                  "updateAt": new Date().getTime()
                });
              }
              _context12.next = 4;
              return this.model("item_group").addMany(groups);

            case 4:
              result = _context12.sent;
              return _context12.abrupt('return', result);

            case 6:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function _itemGroupHelper() {
      return _ref12.apply(this, arguments);
    }

    return _itemGroupHelper;
  }();

  _class.prototype.itemGroupAction = function () {
    var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
      var result;
      return _regenerator2.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this._itemGroupHelper();

            case 2:
              result = _context13.sent;
              return _context13.abrupt('return', result);

            case 4:
            case 'end':
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function itemGroupAction() {
      return _ref13.apply(this, arguments);
    }

    return itemGroupAction;
  }();

  _class.prototype._itemTypeHelper = function () {
    var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14() {
      var types, i, result;
      return _regenerator2.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              types = [];

              for (i = 0; i < 5; i++) {
                types.push({
                  "name": "古玩类型" + i,
                  "desc": "这是古玩类型" + i
                });
              }
              _context14.next = 4;
              return this.model("item_type").addMany(types);

            case 4:
              result = _context14.sent;
              return _context14.abrupt('return', result);

            case 6:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function _itemTypeHelper() {
      return _ref14.apply(this, arguments);
    }

    return _itemTypeHelper;
  }();

  _class.prototype.itemTypeAction = function () {
    var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15() {
      var result;
      return _regenerator2.default.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return this._itemTypeHelper();

            case 2:
              result = _context15.sent;
              return _context15.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function itemTypeAction() {
      return _ref15.apply(this, arguments);
    }

    return itemTypeAction;
  }();

  _class.prototype._messageHelper = function () {
    var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee16() {
      var messages, i, result;
      return _regenerator2.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              messages = [];

              for (i = 1; i < 10; i++) {
                messages.push({
                  "from": i,
                  "to": i + 1,
                  "title": "这是user" + i + "发给user" + (i + 1) + "的消息",
                  "content": "Hello, user" + i + ", I'm user " + (i + 1),
                  "read": i % 2,
                  "createAt": new Date().getTime(),
                  "updateAt": new Date().getTime()
                });
              }
              _context16.next = 4;
              return this.model("message").addMany(messages);

            case 4:
              result = _context16.sent;
              return _context16.abrupt('return', result);

            case 6:
            case 'end':
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function _messageHelper() {
      return _ref16.apply(this, arguments);
    }

    return _messageHelper;
  }();

  _class.prototype.messageAction = function () {
    var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee17() {
      var result;
      return _regenerator2.default.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return this._messageHelper();

            case 2:
              result = _context17.sent;
              return _context17.abrupt('return', result);

            case 4:
            case 'end':
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    function messageAction() {
      return _ref17.apply(this, arguments);
    }

    return messageAction;
  }();

  _class.prototype._roleAuthorityHelper = function () {
    var _ref18 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee18() {
      var ras, i, result;
      return _regenerator2.default.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              ras = [];

              for (i = 0; i < 10; i++) {
                ras.push({
                  "role": i % 2 + 1,
                  "authority": i % 3 + 1,
                  "createAt": new Date().getTime(),
                  "updateAt": new Date().getTime()
                });
              }
              _context18.next = 4;
              return this.model("role_authority").addMany(ras);

            case 4:
              result = _context18.sent;
              return _context18.abrupt('return', result);

            case 6:
            case 'end':
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));

    function _roleAuthorityHelper() {
      return _ref18.apply(this, arguments);
    }

    return _roleAuthorityHelper;
  }();

  _class.prototype.roleAuthorityAction = function () {
    var _ref19 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee19() {
      var result;
      return _regenerator2.default.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return this._roleAuthorityHelper;

            case 2:
              result = _context19.sent;
              return _context19.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));

    function roleAuthorityAction() {
      return _ref19.apply(this, arguments);
    }

    return roleAuthorityAction;
  }();

  _class.prototype._orderHelper = function () {
    var _ref20 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee20() {
      var orders, i, result;
      return _regenerator2.default.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              orders = [];

              for (i = 0; i < 10; i++) {
                orders.push({
                  "user": i + 1,
                  "item": i + 1,
                  "address": i + 1,
                  "status": i % 5,
                  "createAt": new Date().getTime(),
                  "updateAt": new Date().getTime()
                });
              }
              _context20.next = 4;
              return this.model("order").addMany(orders);

            case 4:
              result = _context20.sent;
              return _context20.abrupt('return', result);

            case 6:
            case 'end':
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));

    function _orderHelper() {
      return _ref20.apply(this, arguments);
    }

    return _orderHelper;
  }();

  _class.prototype.orderAction = function () {
    var _ref21 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee21() {
      var result;
      return _regenerator2.default.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              _context21.next = 2;
              return this._orderHelper();

            case 2:
              result = _context21.sent;
              return _context21.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));

    function orderAction() {
      return _ref21.apply(this, arguments);
    }

    return orderAction;
  }();

  _class.prototype._itemHelper = function () {
    var _ref22 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee22() {
      var items, i, result;
      return _regenerator2.default.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              items = [];

              for (i = 1; i <= 20; i++) {
                items.push({
                  "name": "item" + i,
                  "foundTime": new Date().toString(),
                  "foundLocation": "河北省邯郸市",
                  "desc": "赵国国宝",
                  "image": "[" + i + "]",
                  "status": i % 4,
                  "publisher": i % 10 + 1,
                  "currentBidder": i % 10 + 1,
                  "group": i % 8 + 1,
                  "beginPrice": 50,
                  "stage": 50,
                  "currentPrice": 50 * i,
                  "auctionType": i % 2,
                  "auctionBeginTime": new Date().getTime(),
                  "auctionEndTime": new Date().getTime(),
                  "watchCount": 100 * i,
                  "createAt": new Date().getTime(),
                  "updateAt": new Date().getTime(),
                  "type": i % 4 + 1
                });
              }

              _context22.next = 4;
              return this.model("item").addMany(items);

            case 4:
              result = _context22.sent;
              return _context22.abrupt('return', result);

            case 6:
            case 'end':
              return _context22.stop();
          }
        }
      }, _callee22, this);
    }));

    function _itemHelper() {
      return _ref22.apply(this, arguments);
    }

    return _itemHelper;
  }();

  _class.prototype.itemAction = function () {
    var _ref23 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee23() {
      var result;
      return _regenerator2.default.wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return this._itemHelper();

            case 2:
              result = _context23.sent;
              return _context23.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context23.stop();
          }
        }
      }, _callee23, this);
    }));

    function itemAction() {
      return _ref23.apply(this, arguments);
    }

    return itemAction;
  }();

  _class.prototype._bidHelper = function () {
    var _ref24 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee24() {
      var bids, i, result;
      return _regenerator2.default.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              bids = [];

              for (i = 1; i <= 30; i++) {
                bids.push({
                  "item": i % 10 + 1,
                  "user": i % 10 + 1,
                  "value": (i + 1) * 50,
                  "status": i % 4,
                  "createAt": new Date().getTime(),
                  "updateAt": new Date().getTime()
                });
              }
              _context24.next = 4;
              return this.model("bid").addMany(bids);

            case 4:
              result = _context24.sent;
              return _context24.abrupt('return', result);

            case 6:
            case 'end':
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));

    function _bidHelper() {
      return _ref24.apply(this, arguments);
    }

    return _bidHelper;
  }();

  _class.prototype.bidAction = function () {
    var _ref25 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee25() {
      var result;
      return _regenerator2.default.wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              _context25.next = 2;
              return this._bidHelper();

            case 2:
              result = _context25.sent;
              return _context25.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context25.stop();
          }
        }
      }, _callee25, this);
    }));

    function bidAction() {
      return _ref25.apply(this, arguments);
    }

    return bidAction;
  }();

  _class.prototype._imageHelper = function () {
    var _ref26 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee26() {
      var images, i, result;
      return _regenerator2.default.wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              images = [];

              for (i = 1; i <= 20; i++) {
                images.push({
                  "uuid": uuid.v1(),
                  "originName": "image" + i,
                  "path": "file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-" + i + ".JPG"
                });
              }
              _context26.next = 4;
              return this.model("image").addMany(images);

            case 4:
              result = _context26.sent;
              return _context26.abrupt('return', result);

            case 6:
            case 'end':
              return _context26.stop();
          }
        }
      }, _callee26, this);
    }));

    function _imageHelper() {
      return _ref26.apply(this, arguments);
    }

    return _imageHelper;
  }();

  _class.prototype.imageAction = function () {
    var _ref27 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee27() {
      var result;
      return _regenerator2.default.wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              _context27.next = 2;
              return this._imageHelper();

            case 2:
              result = _context27.sent;
              return _context27.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context27.stop();
          }
        }
      }, _callee27, this);
    }));

    function imageAction() {
      return _ref27.apply(this, arguments);
    }

    return imageAction;
  }();

  _class.prototype._followHelper = function () {
    var _ref28 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee28() {
      var follows, i, result;
      return _regenerator2.default.wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              follows = [];

              for (i = 0; i < 20; i++) {
                follows.push({
                  "user": i % 10 + 1,
                  "item": i + 1
                });
              }
              _context28.next = 4;
              return this.model("follow").addMany(follows);

            case 4:
              result = _context28.sent;
              return _context28.abrupt('return', result);

            case 6:
            case 'end':
              return _context28.stop();
          }
        }
      }, _callee28, this);
    }));

    function _followHelper() {
      return _ref28.apply(this, arguments);
    }

    return _followHelper;
  }();

  _class.prototype.followAction = function () {
    var _ref29 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee29() {
      var result;
      return _regenerator2.default.wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              _context29.next = 2;
              return this._followHelper();

            case 2:
              result = _context29.sent;
              return _context29.abrupt('return', this.success(result));

            case 4:
            case 'end':
              return _context29.stop();
          }
        }
      }, _callee29, this);
    }));

    function followAction() {
      return _ref29.apply(this, arguments);
    }

    return followAction;
  }();

  _class.prototype._serviceHelper = function () {
    var _ref30 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee30() {
      var services, result;
      return _regenerator2.default.wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              services = [{ "title": "如实描述", "image": 1, "content": "是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给", "createAt": new Date().getTime(), "updateAt": new Date().getTime() }, { "title": "快速上拍", "image": 2, "content": "是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给", "createAt": new Date().getTime(), "updateAt": new Date().getTime() }, { "title": "24小时发货", "image": 3, "content": "是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给", "createAt": new Date().getTime(), "updateAt": new Date().getTime() }, { "title": "诚信服务", "image": 4, "content": "是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给", "createAt": new Date().getTime(), "updateAt": new Date().getTime() }];
              _context30.next = 3;
              return this.model("service").addMany(services);

            case 3:
              result = _context30.sent;
              return _context30.abrupt('return', result);

            case 5:
            case 'end':
              return _context30.stop();
          }
        }
      }, _callee30, this);
    }));

    function _serviceHelper() {
      return _ref30.apply(this, arguments);
    }

    return _serviceHelper;
  }();

  _class.prototype.serviceAction = function () {
    var _ref31 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee31() {
      var result;
      return _regenerator2.default.wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              _context31.next = 2;
              return this._serviceHelper();

            case 2:
              result = _context31.sent;
              return _context31.abrupt('return', result);

            case 4:
            case 'end':
              return _context31.stop();
          }
        }
      }, _callee31, this);
    }));

    function serviceAction() {
      return _ref31.apply(this, arguments);
    }

    return serviceAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=data.js.map