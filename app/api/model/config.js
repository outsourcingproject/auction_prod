'use strict';

exports.__esModule = true;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var config = function (_Base) {
  (0, _inherits3.default)(config, _Base);

  function config() {
    (0, _classCallCheck3.default)(this, config);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  // schemas = {
  //   config: {
  //     type:Object,
  //     required: true,
  //     default: ()=>think.config('site')
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
   * @param key {String} the path of config, e.g. 'foo.bar' will get config.foo.bar
   * @returns {*} val
   */
  config.prototype.get = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(key) {
      var config, keys, objectGet;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this._getDBConfig();

            case 2:
              config = _context.sent;

              if (!(typeof key == 'undefined')) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return', config);

            case 5:
              keys = key.split('.');

              objectGet = function objectGet(keys, obj) {
                if (keys.length != 0) {
                  var _key = keys[0];
                  if (typeof obj[_key] == 'undefined') {
                    return obj[_key];
                  }
                  keys.shift();
                  return objectGet(keys, obj[_key]);
                }
                return obj;
              };

              return _context.abrupt('return', objectGet(keys, config));

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function get(_x) {
      return _ref.apply(this, arguments);
    }

    return get;
  }();

  /**
   *
   * @param key {String} the path of config, e.g. 'foo.bar' indicates config.foo.bar
   * @param val {*} value of setting
   * @returns {*} old value
   */


  config.prototype.set = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(key, val) {
      var _this2 = this;

      var config, _ret;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (key) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt('return');

            case 2:
              config = void 0;

              if (!((typeof key === 'undefined' ? 'undefined' : (0, _typeof3.default)(key)) == 'object')) {
                _context3.next = 10;
                break;
              }

              config = (0, _stringify2.default)(key);
              _context3.next = 7;
              return this.save(config);

            case 7:
              return _context3.abrupt('return', config);

            case 10:
              return _context3.delegateYield(_regenerator2.default.mark(function _callee2() {
                var keys, objectSet, oldVal;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _this2._getDBConfig();

                      case 2:
                        config = _context2.sent;
                        keys = key.split('.');

                        objectSet = function objectSet(keys, val, obj) {
                          if (keys.length == 0) return;

                          var key = keys[0];
                          if (keys.length == 1) {
                            var _oldVal = obj[key];
                            obj[key] = val;
                            return _oldVal;
                          } else {
                            if ((0, _typeof3.default)(obj[key]) != 'object') {
                              obj[key] = {};
                            }
                            keys.shift();
                            return objectSet(keys, val, obj[key]);
                          }
                        };

                        oldVal = objectSet(keys, val, config);

                        config = (0, _stringify2.default)(config);
                        _context2.next = 9;
                        return _this2.where({ id: { '>': 0 } }).update({ config: config });

                      case 9:
                        return _context2.abrupt('return', {
                          v: oldVal
                        });

                      case 10:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this2);
              })(), 't0', 11);

            case 11:
              _ret = _context3.t0;

              if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                _context3.next = 14;
                break;
              }

              return _context3.abrupt('return', _ret.v);

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function set(_x2, _x3) {
      return _ref2.apply(this, arguments);
    }

    return set;
  }();

  /**
   * set all config to default
   * @returns {Promise}
   */


  config.prototype.setToDefault = function setToDefault() {
    return this.delete();
  };

  /**
   * if db is empty, it will auto save default config into db, which locals in common/config/site.js
   * @returns {*} config in db
   * @private
   */


  config.prototype._getDBConfig = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var config, defaultConfig;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.select();

            case 2:
              config = _context4.sent;
              defaultConfig = (0, _stringify2.default)(think.config('site'));

              if (!(config.length != 1)) {
                _context4.next = 10;
                break;
              }

              _context4.next = 7;
              return this.delete();

            case 7:
              _context4.next = 9;
              return this.add({ config: defaultConfig });

            case 9:
              return _context4.abrupt('return', JSON.parse(defaultConfig));

            case 10:
              return _context4.abrupt('return', JSON.parse(config[0].config));

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function _getDBConfig() {
      return _ref3.apply(this, arguments);
    }

    return _getDBConfig;
  }();

  return config;
}(_base2.default);

exports.default = config;
//# sourceMappingURL=config.js.map