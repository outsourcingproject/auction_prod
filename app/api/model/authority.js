'use strict';

exports.__esModule = true;

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

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Authority = function (_Base) {
  (0, _inherits3.default)(Authority, _Base);

  function Authority() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Authority);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Base.call.apply(_Base, [this].concat(args))), _this), _this.indexeses = {
      name: { $unique: 1 }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  // schemas = {
  //   name: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //     default: ''
  //   },
  //   desc: {
  //     type: String,
  //     required: true,
  //     default: ''
  //   },
  //   paths: {
  //     type: [String|RegExp],
  //     required: true,
  //     default: []
  //   },
  //   createAt: {
  //     type:Date,
  //     required: true,
  //     default: ()=>new Date()
  //   },
  //   updateAt: {
  //     type:Date,
  //     required: true,
  //     default: ()=>new Date()
  //   }
  // };

  /**
   *
   * @param name
   * @param desc
   * @param allows {[String|RegExp]}
   * @returns {*} true if success, otherwise err string
   */
  Authority.prototype.addAuthority = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(name) {
      var desc = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
      var allows = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:

              allows = (0, _stringify2.default)(allows);
              _context.next = 3;
              return this.thenAdd({ name: name, desc: desc, allows: allows, createAt: new Date(), updateAt: new Date() }, { name: name });

            case 3:
              result = _context.sent;

              if (!(result.type == 'add')) {
                _context.next = 8;
                break;
              }

              return _context.abrupt('return', true);

            case 8:
              return _context.abrupt('return', 'AUTHORITY_ALREADY_EXIST');

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function addAuthority(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return addAuthority;
  }();

  /**
   *
   * @param name
   * @returns {Promise}
   */


  Authority.prototype.delAuthority = function delAuthority(name) {
    return this.where({ name: name }).delete();
  };

  return Authority;
}(_base2.default);

exports.default = Authority;
//# sourceMappingURL=authority.js.map