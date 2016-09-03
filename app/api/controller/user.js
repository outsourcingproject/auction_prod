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

var User = function (_Base) {
  (0, _inherits3.default)(User, _Base);

  function User() {
    (0, _classCallCheck3.default)(this, User);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  User.prototype.init = function init() {
    var _Base$prototype$init;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_Base$prototype$init = _Base.prototype.init).call.apply(_Base$prototype$init, [this].concat(args));
    this.userModel = this.model('user');
  };
  //获取当前用户


  User.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var user, userDetail;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.session('user');

            case 2:
              user = _context.sent;

              if (!think.isEmpty(user)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return', this.fail("未登录", {}));

            case 5:
              _context.next = 7;
              return this.userModel.field("desc,level,creditLines,lastLogin").where({ id: user.id }).find();

            case 7:
              userDetail = _context.sent;
              _context.t0 = think;
              _context.t1 = user;
              _context.t2 = userDetail;
              _context.next = 13;
              return this.userModel.getTotalVolume(user.id);

            case 13:
              _context.t3 = _context.sent;
              _context.next = 16;
              return this.userModel.getTotalTurnover(user.id);

            case 16:
              _context.t4 = _context.sent;
              _context.t5 = {
                totalVolume: _context.t3,
                totalTurnover: _context.t4
              };
              userDetail = _context.t0.extend.call(_context.t0, _context.t1, _context.t2, _context.t5);
              return _context.abrupt('return', this.success(userDetail));

            case 20:
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

  User.prototype.signupAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var username, password, email, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              username = this.param('username');
              password = this.param('password');
              email = this.param('email');
              _context2.next = 5;
              return this.userModel.createUser(username, password, email);

            case 5:
              result = _context2.sent;

              if (!think.isString(result)) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt('return', this.fail(result));

            case 10:
              _context2.t0 = this;
              _context2.next = 13;
              return this._login(result);

            case 13:
              _context2.t1 = _context2.sent;
              return _context2.abrupt('return', _context2.t0.success.call(_context2.t0, _context2.t1));

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function signupAction() {
      return _ref2.apply(this, arguments);
    }

    return signupAction;
  }();

  User.prototype.loginAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var username, password, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              username = this.param('username');
              password = this.param('password');
              _context3.next = 4;
              return this.userModel.checkUser(username, password);

            case 4:
              result = _context3.sent;

              if (!think.isString(result)) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt('return', this.fail(result));

            case 7:
              _context3.t0 = this;
              _context3.next = 10;
              return this._login(result);

            case 10:
              _context3.t1 = _context3.sent;
              return _context3.abrupt('return', _context3.t0.success.call(_context3.t0, _context3.t1));

            case 12:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function loginAction() {
      return _ref3.apply(this, arguments);
    }

    return loginAction;
  }();

  User.prototype.logoutAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.session();

            case 2:
              return _context4.abrupt('return', this.success({}));

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function logoutAction() {
      return _ref4.apply(this, arguments);
    }

    return logoutAction;
  }();

  User.prototype._login = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(user) {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              delete user.password;
              _context5.next = 3;
              return this.session('user', user);

            case 3:
              return _context5.abrupt('return', this.indexAction());

            case 4:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function _login(_x) {
      return _ref5.apply(this, arguments);
    }

    return _login;
  }();

  User.prototype.pwdResetAction = function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
      var user, oldPassword, newPassword, truePassword, res;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.session('user');

            case 2:
              user = _context6.sent;
              oldPassword = this.param('password');
              newPassword = this.param('pwdReset');

              console.log(oldPassword, ' ', newPassword);

              _context6.next = 8;
              return this.model("user").field("password").where({ id: user['id'] }).find();

            case 8:
              truePassword = _context6.sent;

              if (!(oldPassword == truePassword["password"])) {
                _context6.next = 16;
                break;
              }

              _context6.next = 12;
              return this.model("user").where({ id: user["id"] }).update({ password: newPassword });

            case 12:
              res = _context6.sent;

              if (think.isEmpty(res)) {
                _context6.next = 15;
                break;
              }

              return _context6.abrupt('return', this.success("修改成功"));

            case 15:
              return _context6.abrupt('return', this.fail("修改失败"));

            case 16:
              return _context6.abrupt('return', this.fail("PASSWORD_WORRY"));

            case 17:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function pwdResetAction() {
      return _ref6.apply(this, arguments);
    }

    return pwdResetAction;
  }();

  User.prototype.infoAction = function () {
    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
      var user, userId, resultMessages, resultPriceOver, auctionConfirm, resultAuctionConfirm, waitPay, resultWaitPay, result;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.session('user');

            case 2:
              user = _context7.sent;
              userId = user["id"];

              // get messages

              _context7.next = 6;
              return this.model("message").getList(userId);

            case 6:
              resultMessages = _context7.sent;
              _context7.next = 9;
              return this._getPriceOver(userId);

            case 9:
              resultPriceOver = _context7.sent;
              _context7.next = 12;
              return this.model("order").getConfirmedAuction(userId);

            case 12:
              auctionConfirm = _context7.sent;
              resultAuctionConfirm = auctionConfirm.map(function (r) {
                return { "name": r["name"], "id": r["id"], "price": r["currentPrice"] };
              });
              //git items waiting paying

              _context7.next = 16;
              return this.model("order").getWaitPay(userId);

            case 16:
              waitPay = _context7.sent;
              resultWaitPay = waitPay.map(function (w) {
                return { "name": w["name"], "id": w["id"], "price": w["currentPrice"] };
              });
              result = {
                "messages": resultMessages,
                "priceOver": resultPriceOver,
                "auctionConfirm": resultAuctionConfirm,
                "waitPay": resultWaitPay
              };
              //

              console.log(result);
              return _context7.abrupt('return', this.success(result));

            case 21:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function infoAction() {
      return _ref7.apply(this, arguments);
    }

    return infoAction;
  }();

  User.prototype.orderAction = function () {
    var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
      var user, userId;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.session("user");

            case 2:
              user = _context8.sent;
              userId = user["id"];
              _context8.t0 = this;
              _context8.next = 7;
              return this.model("order").getList(userId);

            case 7:
              _context8.t1 = _context8.sent;
              return _context8.abrupt('return', _context8.t0.success.call(_context8.t0, _context8.t1));

            case 9:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function orderAction() {
      return _ref8.apply(this, arguments);
    }

    return orderAction;
  }();

  User.prototype.bidAction = function () {
    var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
      var user, userId, bids;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.session("user");

            case 2:
              user = _context9.sent;
              userId = user["id"];
              _context9.next = 6;
              return this.model("bid").getList(userId);

            case 6:
              bids = _context9.sent;
              return _context9.abrupt('return', this.success(bids));

            case 8:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function bidAction() {
      return _ref9.apply(this, arguments);
    }

    return bidAction;
  }();

  //get following items


  User.prototype.followAction = function () {
    var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
      var user, userId, followings;
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.session("user");

            case 2:
              user = _context10.sent;

              console.log(user);
              userId = user["id"];
              _context10.next = 7;
              return this.model("follow").getFollowing(userId);

            case 7:
              followings = _context10.sent;
              return _context10.abrupt('return', this.success(followings));

            case 9:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function followAction() {
      return _ref10.apply(this, arguments);
    }

    return followAction;
  }();

  User.prototype._getPriceOver = function () {
    var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(userId) {
      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.model("bid").getPriceOver(userId);

            case 2:
              return _context11.abrupt('return', _context11.sent);

            case 3:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function _getPriceOver(_x2) {
      return _ref11.apply(this, arguments);
    }

    return _getPriceOver;
  }();

  return User;
}(_base2.default); /**
                    * Created by zl on 16/2/23.
                    */


exports.default = User;
//# sourceMappingURL=user.js.map