"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require("./base.js");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function (_Base) {
	(0, _inherits3.default)(Article, _Base);

	function Article() {
		(0, _classCallCheck3.default)(this, Article);
		return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
	}

	Article.prototype.getListAdmin = function getListAdmin() {
		return this.order("createAt DESC").select();
	};

	Article.prototype.getDetailAdmin = function getDetailAdmin(articleId) {
		return this.where({ id: articleId }).select();
	};

	return Article;
}(_base2.default);

exports.default = Article;
//# sourceMappingURL=article.js.map