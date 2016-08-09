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

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URI = require("uri-js");
/**
 * model
 */

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  _class.prototype.getImages = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(imageId) {
      var images, _iterator, _isArray, _i, _ref2, i;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              images = void 0;

              if (!(imageId instanceof Array)) imageId = [imageId];
              _context.next = 4;
              return this.where({ id: ["IN", imageId] }).select();

            case 4:
              images = _context.sent;
              _iterator = images, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 6:
              if (!_isArray) {
                _context.next = 12;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('break', 20);

            case 9:
              _ref2 = _iterator[_i++];
              _context.next = 16;
              break;

            case 12:
              _i = _iterator.next();

              if (!_i.done) {
                _context.next = 15;
                break;
              }

              return _context.abrupt('break', 20);

            case 15:
              _ref2 = _i.value;

            case 16:
              i = _ref2;

              i["realPath"] = this.translatePath(i["path"]);

            case 18:
              _context.next = 6;
              break;

            case 20:
              return _context.abrupt('return', images);

            case 21:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getImages(_x) {
      return _ref.apply(this, arguments);
    }

    return getImages;
  }();

  _class.prototype.translatePath = function translatePath(oldPath) {
    var res = URI.parse(oldPath);
    if (res["scheme"].toLowerCase() == "file") {
      if (res["host"].toLowerCase() == "upload_path") {
        return _path2.default.join(think.UPLOAD_PATH, res["path"]);
      }
    }
    return res;
  };

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=image.js.map