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

  //获取文章详情页侧栏数据
  _class.prototype.tabAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var articles, _iterator, _isArray, _i, _ref2, a, result;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.model('article_type').getArticle();

            case 2:
              articles = _context.sent;
              _iterator = articles, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 4:
              if (!_isArray) {
                _context.next = 10;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('break', 18);

            case 7:
              _ref2 = _iterator[_i++];
              _context.next = 14;
              break;

            case 10:
              _i = _iterator.next();

              if (!_i.done) {
                _context.next = 13;
                break;
              }

              return _context.abrupt('break', 18);

            case 13:
              _ref2 = _i.value;

            case 14:
              a = _ref2;

              a["article"].map(function (aa) {
                aa["date"] = aa["createAt"], delete aa["createAt"];
              });

            case 16:
              _context.next = 4;
              break;

            case 18:
              result = {
                "lefttab": {
                  "tabs": [articles[0]["name"]],
                  "details": [articles[0]["article"].slice(0, 6)]
                },
                "righttab": {
                  "tabs": [articles[1]["name"], articles[2]["name"], articles[3]["name"]],
                  "details": [articles[1]["article"].slice(0, 6), articles[2]["article"].slice(0, 6), articles[3]["article"].slice(0, 6)]
                }
              };
              return _context.abrupt('return', this.success(result));

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function tabAction() {
      return _ref.apply(this, arguments);
    }

    return tabAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=article_type.js.map