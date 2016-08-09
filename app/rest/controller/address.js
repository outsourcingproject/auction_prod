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

var Address = function (_Base) {
  (0, _inherits3.default)(Address, _Base);

  function Address() {
    (0, _classCallCheck3.default)(this, Address);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  Address.prototype.__before = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var user;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.modelInstance = think.model('address', null, 'api');
              _context.next = 3;
              return this.modelInstance.getPk();

            case 3:
              this.modelPk = _context.sent;

              this.needPaging = false;

              _context.next = 7;
              return this.session('user');

            case 7:
              user = _context.sent;


              if (!think.isEmpty(user)) {
                this.filter = { user: user.id };
              }
              _context.next = 11;
              return _Base.prototype.__before.call(this);

            case 11:
              return _context.abrupt('return', _context.sent);

            case 12:
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

  return Address;
}(_base2.default);

exports.default = Address;
//# sourceMappingURL=address.js.map