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

/**
 * 成功时返回true或者具体对象
 * 失败时返回失败字符串,具体请参看 /src/common/config/local/en.js
 * 如果没有当前需要的失败字符串,请在该文件中定义
 */
var User = function (_Base) {
  (0, _inherits3.default)(User, _Base);

  function User() {
    (0, _classCallCheck3.default)(this, User);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
   *
   * @param username
   * @param password
   * @param email
   * @param role
   * @returns {*} user object if success, otherwise err string
   */
  User.prototype.createUser = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(username, password, email) {
      var role = arguments.length <= 3 || arguments[3] === undefined ? 2 : arguments[3];
      var creditLines, desc, level, lastLogin, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return think.model('config', null, 'api').get('user.default.creditLines');

            case 2:
              creditLines = _context.sent;
              _context.next = 5;
              return think.model('config', null, 'api').get('user.default.desc');

            case 5:
              desc = _context.sent;
              _context.next = 8;
              return think.model('config', null, 'api').get('user.default.level');

            case 8:
              level = _context.sent;
              lastLogin = +new Date();
              _context.next = 12;
              return this.where({ username: username }).select();

            case 12:
              result = _context.sent;

              if (think.isEmpty(result)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt('return', 'USER_ALREADY_EXIST');

            case 15:
              _context.next = 17;
              return this.where({ email: email }).select();

            case 17:
              result = _context.sent;

              if (think.isEmpty(result)) {
                _context.next = 20;
                break;
              }

              return _context.abrupt('return', 'EMAIL_ALREADY_USED');

            case 20:
              _context.next = 22;
              return this.add({ username: username, password: password, email: email, role: role, creditLines: creditLines, desc: desc, level: level, lastLogin: lastLogin });

            case 22:
              result = _context.sent;
              return _context.abrupt('return', this.where({ id: result }).find());

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createUser(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    }

    return createUser;
  }();

  /**
   *
   * @param username
   * @param password
   * @returns {*} user object if success, otherwise err string
   */


  User.prototype.checkUser = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(username, password) {
      var result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.where({ username: username }).find();

            case 2:
              result = _context2.sent;

              if (!think.isEmpty(result)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt('return', 'NO_THIS_USER');

            case 5:
              if (!(result.password != password)) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt('return', 'PASSWORD_WORRY');

            case 7:
              _context2.next = 9;
              return this.where({ id: result.id }).update({ lastLogin: +new Date() });

            case 9:
              return _context2.abrupt('return', result);

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function checkUser(_x6, _x7) {
      return _ref2.apply(this, arguments);
    }

    return checkUser;
  }();

  /**
   *
   * @param username
   * @returns {Promise}
   */


  User.prototype.delUser = function delUser(username) {
    return this.where({ username: username }).delete();
  };

  /**
   *
   * @param username
   * @returns {Promise<Role>}
   */


  User.prototype.getUserRole = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(username) {
      var user, roleModel;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.where({ username: username }).find();

            case 2:
              user = _context3.sent;

              console.log(user);
              roleModel = think.model('role', null, 'api');
              return _context3.abrupt('return', roleModel.where({ name: user.role }).find());

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getUserRole(_x8) {
      return _ref3.apply(this, arguments);
    }

    return getUserRole;
  }();

  /**
   *
   * @param username
   * @returns {Promise<[Authority]>}
   */


  User.prototype.getUserAuthorities = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(username) {
      var roleModel, user, role;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              roleModel = think.model('role', null, 'api');
              _context4.next = 3;
              return this.where({ username: username }).find();

            case 3:
              user = _context4.sent;
              _context4.next = 6;
              return roleModel.where({ id: user.role }).find();

            case 6:
              role = _context4.sent;
              return _context4.abrupt('return', roleModel.getRoleAuthorities(role.name));

            case 8:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getUserAuthorities(_x9) {
      return _ref4.apply(this, arguments);
    }

    return getUserAuthorities;
  }();

  User.prototype.getTotalVolume = function getTotalVolume(userId) {
    var orderModel = think.model("order", null, "api");
    return orderModel.where({ user: userId }).count();
  };

  User.prototype.getTotalTurnover = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(userId) {
      var orderModel, itemModel, itemIds, itemIdArray;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              orderModel = think.model("order", null, "api");
              itemModel = think.model("item", null, "api");
              _context5.next = 4;
              return orderModel.field("item").where({ user: userId }).select();

            case 4:
              itemIds = _context5.sent;

              if (!think.isEmpty(itemIds)) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt('return', 0);

            case 7:
              itemIdArray = itemIds.map(function (i) {
                return i["item"];
              });
              return _context5.abrupt('return', itemModel.where({ id: ["IN", itemIdArray] }).sum("currentPrice"));

            case 9:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getTotalTurnover(_x10) {
      return _ref5.apply(this, arguments);
    }

    return getTotalTurnover;
  }();

  return User;
}(_base2.default); /**
                    * Created by zl on 2015/12/30.
                    */


exports.default = User;
//# sourceMappingURL=user.js.map