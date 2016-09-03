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

var Message = function (_Base) {
	(0, _inherits3.default)(Message, _Base);

	function Message() {
		(0, _classCallCheck3.default)(this, Message);
		return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
	}

	Message.prototype.getList = function getList(userId) {
		return this.where({ to: userId, read: 0 }).order({ createAt: "DESC" }).limit(10).select();
	};

	//messages: an array of message object


	Message.prototype.sendSystemMessage = function sendSystemMessage(messages) {
		return this.addMany(messages);
	};

	return Message;
}(_base2.default);

exports.default = Message;
//# sourceMappingURL=message.js.map