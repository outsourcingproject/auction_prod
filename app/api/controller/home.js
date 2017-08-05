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

   _class.prototype.indexAction = function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
         var detailNum, articles, groups, services, _iterator, _isArray, _i, _ref2, a, _iterator2, _isArray2, _i2, _ref3, g, result;

         return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
               switch (_context.prev = _context.next) {
                  case 0:
                     detailNum = 6; //文章数量
                     // get article on home page

                     _context.next = 3;
                     return this.model('article_type').getArticle();

                  case 3:
                     articles = _context.sent;
                     _context.next = 6;
                     return this.model('item_group').getGroupItem();

                  case 6:
                     groups = _context.sent;
                     _context.next = 9;
                     return this.model('service').selectData(4);

                  case 9:
                     services = _context.sent;
                     _iterator = articles, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                  case 11:
                     if (!_isArray) {
                        _context.next = 17;
                        break;
                     }

                     if (!(_i >= _iterator.length)) {
                        _context.next = 14;
                        break;
                     }

                     return _context.abrupt('break', 25);

                  case 14:
                     _ref2 = _iterator[_i++];
                     _context.next = 21;
                     break;

                  case 17:
                     _i = _iterator.next();

                     if (!_i.done) {
                        _context.next = 20;
                        break;
                     }

                     return _context.abrupt('break', 25);

                  case 20:
                     _ref2 = _i.value;

                  case 21:
                     a = _ref2;

                     a["article"].map(function (aa) {
                        aa["date"] = aa["createAt"], delete aa["createAt"];
                     });

                  case 23:
                     _context.next = 11;
                     break;

                  case 25:
                     _iterator2 = groups, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                  case 26:
                     if (!_isArray2) {
                        _context.next = 32;
                        break;
                     }

                     if (!(_i2 >= _iterator2.length)) {
                        _context.next = 29;
                        break;
                     }

                     return _context.abrupt('break', 44);

                  case 29:
                     _ref3 = _iterator2[_i2++];
                     _context.next = 36;
                     break;

                  case 32:
                     _i2 = _iterator2.next();

                     if (!_i2.done) {
                        _context.next = 35;
                        break;
                     }

                     return _context.abrupt('break', 44);

                  case 35:
                     _ref3 = _i2.value;

                  case 36:
                     g = _ref3;

                     g["item"].map(function (i) {
                        i["price"] = i["currentPrice"], delete i["currentPrice"];
                     });
                     g["title"] = g["name"];delete g["name"];
                     g["auctions"] = g["item"];delete g["item"];

                  case 42:
                     _context.next = 26;
                     break;

                  case 44:
                     result = {
                        "lefttab": {
                           "tabs": [articles[0]["name"]],
                           "details": [articles[0]["article"].slice(0, 6)]
                        },
                        "righttab": {
                           "tabs": [articles[1]["name"], articles[2]["name"], articles[3]["name"]],
                           "details": [articles[1]["article"].slice(0, 6), articles[2]["article"].slice(0, 6), articles[3]["article"].slice(0, 6)]
                        },
                        "auctionGroups": groups,
                        "service": services
                     };

                     if (!(result != null)) {
                        _context.next = 49;
                        break;
                     }

                     return _context.abrupt('return', this.success(result));

                  case 49:
                     return _context.abrupt('return', this.fail("无相关数据！"));

                  case 50:
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

   return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=home.js.map