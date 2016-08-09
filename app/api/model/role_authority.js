'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var RoleAuthority = function (_Base) {
  (0, _inherits3.default)(RoleAuthority, _Base);

  function RoleAuthority() {
    (0, _classCallCheck3.default)(this, RoleAuthority);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
     *
     * @param roleName {String} name of role
     * @param authorities {ObjectID} authorities' name
     * @returns {Promise}
     */
  RoleAuthority.prototype.addRoleAuthorities = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(roleName) {
      for (var _len = arguments.length, authorities = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        authorities[_key - 1] = arguments[_key];
      }

      var authorityModel, roleModel, role, _iterator, _isArray, _i, _ref2, an, authority;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              authorityModel = think.model('authority', null, 'api');
              roleModel = think.model('role', null, 'api');
              _context.next = 4;
              return roleModel.where({ name: roleName }).find();

            case 4:
              role = _context.sent;

              if (!think.isEmpty(role)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return');

            case 7:
              _iterator = authorities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 8:
              if (!_isArray) {
                _context.next = 14;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context.next = 11;
                break;
              }

              return _context.abrupt('break', 28);

            case 11:
              _ref2 = _iterator[_i++];
              _context.next = 18;
              break;

            case 14:
              _i = _iterator.next();

              if (!_i.done) {
                _context.next = 17;
                break;
              }

              return _context.abrupt('break', 28);

            case 17:
              _ref2 = _i.value;

            case 18:
              an = _ref2;
              _context.next = 21;
              return authorityModel.where({ name: an }).find();

            case 21:
              authority = _context.sent;

              if (!think.isEmpty(authority)) {
                _context.next = 24;
                break;
              }

              return _context.abrupt('continue', 26);

            case 24:
              _context.next = 26;
              return this.thenAdd({ role: role.id, authority: authority.id }, { role: role.id, authority: authority.id });

            case 26:
              _context.next = 8;
              break;

            case 28:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function addRoleAuthorities(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return addRoleAuthorities;
  }();

  return RoleAuthority;
}(_base2.default);

exports.default = RoleAuthority;
//# sourceMappingURL=role_authority.js.map