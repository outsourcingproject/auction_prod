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
 * relation model
 */
var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
   * init
   * @param  {} args []
   * @return {}         []
   */
  _class.prototype.init = function init() {
    var _Base$prototype$init;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_Base$prototype$init = _Base.prototype.init).call.apply(_Base$prototype$init, [this].concat(args));

    this.relation = {
      article: {
        type: think.model.HAS_MANY,
        key: "id",
        fKey: "type"

        // field:"id,title"
      }
    };
  };

  _class.prototype.getList = function getList() {
    return this.setRelation(false).select();
  };

  //根据文章类别id 读取文章


  _class.prototype.selectData = function selectData(id) {
    id.toString();
    return this.setRelation(true).where("id = " + id).order("createAt DESC").find();
  };

  //查询文章类别和文章详情页


  _class.prototype.getArticle = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var articles, typeList, t, a;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              articles = [];
              _context.next = 3;
              return this.getList();

            case 3:
              typeList = _context.sent;
              _context.t0 = _regenerator2.default.keys(typeList);

            case 5:
              if ((_context.t1 = _context.t0()).done) {
                _context.next = 13;
                break;
              }

              t = _context.t1.value;
              _context.next = 9;
              return this.selectData(typeList[t]["id"]);

            case 9:
              a = _context.sent;

              articles.push(a);
              _context.next = 5;
              break;

            case 13:
              return _context.abrupt('return', articles);

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getArticle() {
      return _ref.apply(this, arguments);
    }

    return getArticle;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=article_type.js.map