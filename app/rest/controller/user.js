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

var User = function (_Base) {
  (0, _inherits3.default)(User, _Base);

  function User() {
    (0, _classCallCheck3.default)(this, User);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  User.prototype.__before = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.modelInstance = think.model('user', null, 'api');
              _context.next = 3;
              return this.modelInstance.getPk();

            case 3:
              this.modelPk = _context.sent;
              _context.next = 6;
              return think.model('config', null, 'api').get('pageCount.user');

            case 6:
              _context.t0 = _context.sent;

              if (_context.t0) {
                _context.next = 11;
                break;
              }

              _context.next = 10;
              return think.model('config', null, 'api').get('pageCount.default');

            case 10:
              _context.t0 = _context.sent;

            case 11:
              this.pageCount = _context.t0;
              _context.next = 14;
              return _Base.prototype.__before.call(this);

            case 14:
              return _context.abrupt('return', _context.sent);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function __before() {
      return _ref.apply(this, arguments);
    }

    return __before;
  }();

  return User;
}(_base2.default);

exports.default = User;
//# sourceMappingURL=user.js.map