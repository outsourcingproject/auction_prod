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

var fs = require('fs');
var path = require('path');
var uuid = require("uuid");

var renameAsync = think.promisify(fs.rename, fs);
var existsAsync = think.promisify(fs.exists, fs);
var readFileAsync = think.promisify(fs.readFile, fs);

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
  _class.prototype.__before = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:

              this.modelInstance = think.model('image', null, 'api');
              _context.next = 3;
              return this.modelInstance.getPk();

            case 3:
              this.modelPk = _context.sent;

              this.needPaging = false;
              _context.next = 7;
              return _Base.prototype.__before.call(this);

            case 7:
              return _context.abrupt('return', _context.sent);

            case 8:
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

  _class.prototype.postAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var files, picInfos, f, file, filepath, fileType, baseName, subpath, basePath, imageModel, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //这里的 key 需要和 form 表单里的 name 值保持一致
              files = think.extend({}, this.file('files'));

              if (!think.isEmpty(files)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return', this.fail('NO_UPLOAD_FILE'));

            case 3:

              if (!files["0"]) files = { '0': files };

              picInfos = [];
              _context2.t0 = _regenerator2.default.keys(files);

            case 6:
              if ((_context2.t1 = _context2.t0()).done) {
                _context2.next = 20;
                break;
              }

              f = _context2.t1.value;
              file = files[f];
              filepath = file.path;
              fileType = /\.[^\.]+$/.exec(file.originalFilename); // 判断后缀名
              //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件


              baseName = uuid.v1() + fileType;
              subpath = 'images';
              basePath = path.join(think.UPLOAD_PATH, subpath);

              think.mkdir(basePath);
              _context2.next = 17;
              return renameAsync(filepath, path.join(basePath, baseName));

            case 17:
              picInfos.push({
                "originName": file.originalFilename,
                "path": "file://" + 'UPLOAD_PATH' + '/' + subpath + '/' + baseName
              });
              _context2.next = 6;
              break;

            case 20:
              imageModel = think.model("image", null, 'api');
              _context2.next = 23;
              return imageModel.addMany(picInfos);

            case 23:
              result = _context2.sent;
              return _context2.abrupt('return', think.isEmpty(result) ? this.fail("Failed to upload!") : this.success(result));

            case 25:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function postAction() {
      return _ref2.apply(this, arguments);
    }

    return postAction;
  }();

  _class.prototype.getAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var imageModel, images, file;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (this.id) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt('return', this.fail('NO_IMAGE_ID'));

            case 2:
              imageModel = think.model('image', null, 'api');
              _context3.prev = 3;

              console.log(this.id);
              _context3.next = 7;
              return imageModel.getImages(this.id);

            case 7:
              images = _context3.sent;
              _context3.next = 10;
              return readFileAsync(images[0].realPath);

            case 10:
              file = _context3.sent;


              this.type('image/*');
              return _context3.abrupt('return', this.end(file));

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3['catch'](3);
              return _context3.abrupt('return', this.fail('NO_THIS_IMAGE'));

            case 18:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[3, 15]]);
    }));

    function getAction() {
      return _ref3.apply(this, arguments);
    }

    return getAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=image.js.map