'use strict';

exports.__esModule = true;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var Role = function (_Base) {
  (0, _inherits3.default)(Role, _Base);

  function Role() {
    (0, _classCallCheck3.default)(this, Role);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  // schemas = {
  //   name: {
  //     required: true,
  //     default: '',
  //     unique: true
  //   },
  //   desc: {
  //     required: true,
  //     default: ''
  //   },
  //   //继承那些角色的权限
  //   extend: {
  //     //ref to collection Role.name
  //     type: [String],
  //     required: true,
  //     default: []
  //   },
  //   authorities: {
  //     default: [],
  //     type: [ObjectID]
  //   },
  //   createAt: {
  //     type: Date,
  //     required: true,
  //     default: ()=>new Date()
  //   },
  //   updateAt: {
  //     type: Date,
  //     required: true,
  //     default: ()=>new Date()
  //   }
  // };

  // indexeses={
  //   name:{$unique: 1}
  // };

  /**
   *
   * @param name
   * @param desc
   * @param extend {[String]}
   * @param authorities {[String]} authority name list
   * @returns {*} true if success, otherwise err string
   */
  Role.prototype.addRole = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(name) {
      var desc = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
      var extend = arguments.length <= 2 || arguments[2] === undefined ? ['anonymous', 'registered'] : arguments[2];
      var authorities = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];
      var roleAuthorityModel, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              roleAuthorityModel = think.model('role_authority', null, 'api');


              extend = (0, _stringify2.default)(extend);
              _context.next = 4;
              return this.thenAdd({ name: name, desc: desc, extend: extend }, { name: name });

            case 4:
              result = _context.sent;

              if (!(result.type == 'add')) {
                _context.next = 11;
                break;
              }

              _context.next = 8;
              return roleAuthorityModel.addRoleAuthorities.apply(roleAuthorityModel, [name].concat(authorities));

            case 8:
              return _context.abrupt('return', true);

            case 11:
              return _context.abrupt('return', 'ROLE_ALREADY_EXIST');

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function addRole(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    }

    return addRole;
  }();

  /**
   * TODO: del other role's extend
   * TODO: del user's role, if none, should assign to what
   * @param name {String}
   * @returns {Promise}
   */


  Role.prototype.delRole = function delRole(name) {
    return this.where({ name: name }).delete();
  };

  /**
   *
   * @param name {String} name of role
   * @param authorities {String} authorities' name
   * @returns {Promise}
   */


  Role.prototype.rmAuthorities = function rmAuthorities(name) {
    for (var _len = arguments.length, authorities = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      authorities[_key - 1] = arguments[_key];
    }

    var role = this.where({ name: name }).find();
    for (var _iterator = authorities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var authority = _ref2;

      var index = role.authorities.indexOf(authority);
      if (index >= 0) {
        role.authorities.slice(index, 1);
      }
    }
    return this.where({ name: name }).update({ authorities: authorities });
  };

  /**
   *
   * @param name {String}
   * @param newName {String}
   * @returns {Promise}
   */


  Role.prototype.changeName = function changeName(name, newName) {
    return this.where({ name: name }).update({ name: newName });
  };

  /**
   *
   * @param name {String}
   * @param desc {desc}
   * @returns {Promise}
   */


  Role.prototype.changeDesc = function changeDesc(name, desc) {
    return this.where({ name: name }).update({ desc: desc });
  };

  /**
   *
   * @param name {String} name of role
   * @returns {Promise<[Authority]>} authority's array
   */


  Role.prototype.getRoleAuthorities = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(name) {
      var _this2 = this;

      var authorityModel, getAuthorities;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              authorityModel = think.model('authority', null, 'api');

              getAuthorities = function () {
                var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(name) {
                  var role, authorities, _iterator2, _isArray2, _i2, _ref5, e, roleAuthorityModel;

                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _this2.where({ name: name }).find();

                        case 2:
                          role = _context2.sent;

                          if (!think.isEmpty(role)) {
                            _context2.next = 5;
                            break;
                          }

                          return _context2.abrupt('return', []);

                        case 5:
                          authorities = [];
                          _iterator2 = JSON.parse(role.extend), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 7:
                          if (!_isArray2) {
                            _context2.next = 13;
                            break;
                          }

                          if (!(_i2 >= _iterator2.length)) {
                            _context2.next = 10;
                            break;
                          }

                          return _context2.abrupt('break', 25);

                        case 10:
                          _ref5 = _iterator2[_i2++];
                          _context2.next = 17;
                          break;

                        case 13:
                          _i2 = _iterator2.next();

                          if (!_i2.done) {
                            _context2.next = 16;
                            break;
                          }

                          return _context2.abrupt('break', 25);

                        case 16:
                          _ref5 = _i2.value;

                        case 17:
                          e = _ref5;
                          _context2.t0 = authorities;
                          _context2.next = 21;
                          return getAuthorities(e);

                        case 21:
                          _context2.t1 = _context2.sent;

                          _context2.t0.push.call(_context2.t0, _context2.t1);

                        case 23:
                          _context2.next = 7;
                          break;

                        case 25:
                          roleAuthorityModel = think.model('role_authority', null, 'api');
                          _context2.t2 = authorities;
                          _context2.next = 29;
                          return roleAuthorityModel.where({ role: role.id }).find();

                        case 29:
                          _context2.t3 = _context2.sent;

                          _context2.t2.push.call(_context2.t2, _context2.t3);

                          return _context2.abrupt('return', authorities);

                        case 32:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this2);
                }));

                return function getAuthorities(_x9) {
                  return _ref4.apply(this, arguments);
                };
              }();

              return _context3.abrupt('return', getAuthorities(name));

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getRoleAuthorities(_x8) {
      return _ref3.apply(this, arguments);
    }

    return getRoleAuthorities;
  }();

  return Role;
}(_base2.default);

exports.default = Role;
//# sourceMappingURL=role.js.map