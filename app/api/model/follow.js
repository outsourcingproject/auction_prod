"use strict";

exports.__esModule = true;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require("./base.js");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * model
 */
var _class = function (_Base) {
	(0, _inherits3.default)(_class, _Base);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);
		return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
	}

	_class.prototype.followToggle = function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(userId, itemId) {
			var f;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this.where({ user: userId, item: itemId }).select();

						case 2:
							f = _context.sent;

							if (!think.isEmpty(f)) {
								_context.next = 7;
								break;
							}

							return _context.abrupt("return", this.add({ user: userId, item: itemId }));

						case 7:
							return _context.abrupt("return", this.delete({ user: userId, item: itemId }));

						case 8:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function followToggle(_x, _x2) {
			return _ref.apply(this, arguments);
		}

		return followToggle;
	}();

	_class.prototype.isFollowing = function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(userId, itemId) {
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.t0 = think;
							_context2.next = 3;
							return this.model("follow").where({ "item": itemId, "user": userId }).select();

						case 3:
							_context2.t1 = _context2.sent;

							if (!_context2.t0.isEmpty.call(_context2.t0, _context2.t1)) {
								_context2.next = 8;
								break;
							}

							_context2.t2 = false;
							_context2.next = 9;
							break;

						case 8:
							_context2.t2 = true;

						case 9:
							return _context2.abrupt("return", _context2.t2);

						case 10:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		function isFollowing(_x3, _x4) {
			return _ref2.apply(this, arguments);
		}

		return isFollowing;
	}();

	_class.prototype.getFollowing = function () {
		var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(userId) {
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.abrupt("return", this.join("item on follow.item = item.id ").field("item.id as id, item.name as name, item.status as status, follow.createAt as createAt").where({ user: userId }).select());

						case 1:
						case "end":
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		function getFollowing(_x5) {
			return _ref3.apply(this, arguments);
		}

		return getFollowing;
	}();

	return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=follow.js.map