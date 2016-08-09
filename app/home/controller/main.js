'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by zl on 2015/12/31.
 */
var Main = function (_Base) {
  (0, _inherits3.default)(Main, _Base);

  function Main() {
    (0, _classCallCheck3.default)(this, Main);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  Main.prototype.indexAction = function indexAction() {
    var options = this.config('tpl');
    options = think.extend({}, options, { type: 'ejs' });
    var file = _path2.default.resolve(think.ROOT_PATH, 'www/static/index.html');
    return this.display(file, options);
  };

  return Main;
}(_base2.default);

exports.default = Main;
//# sourceMappingURL=main.js.map