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

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Service = function (_Base) {
  (0, _inherits3.default)(Service, _Base);

  function Service() {
    (0, _classCallCheck3.default)(this, Service);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  Service.prototype.searchAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var keyword, segment, itemModel, allItems, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              keyword = this.param('keyword');
              segment = think.segment.doSegment(keyword, {
                simple: true,
                stripPunctuation: true
              });
              itemModel = think.model('item', null, 'api');
              _context.next = 5;
              return itemModel.join("item_type on item.type = item_type.id").field("item.id as id, currentPrice, item.name as name, followCount, auctionEndTime, image, item_type.name as type,item.createAt as createAt").select();

            case 5:
              allItems = _context.sent;
              result = allItems.map(function (item) {
                var titleHint = 0;
                var contentHint = 0;

                for (var _iterator = segment, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
                  var _ref2;

                  if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref2 = _iterator[_i++];
                  } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref2 = _i.value;
                  }

                  var i = _ref2;

                  titleHint += (item.name || '').split(i).length - 1;
                  contentHint += (item.desc || '').split(i).length - 1;
                }
                item.hintTimes = titleHint * 2 + contentHint;
                return item;
              }).filter(function (i) {
                return i.hintTimes;
              }).sort(function (x, y) {
                return y.hintTimes - x.hintTimes || y.createAt.valueOf() - x.createAt.valueOf();
              });
              return _context.abrupt('return', this.success(result));

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function searchAction() {
      return _ref.apply(this, arguments);
    }

    return searchAction;
  }();

  Service.prototype.testAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var config;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.session('test', { test: 'ok' });

            case 2:
              config = think.model('config', null, 'api');
              _context2.next = 5;
              return config.set('auction.bid_increasment', [{ '0': 50 }, { '1000': 100 }, { '5000': 200 }]);

            case 5:
              _context2.t0 = this;
              _context2.next = 8;
              return this.session('test');

            case 8:
              _context2.t1 = _context2.sent;
              return _context2.abrupt('return', _context2.t0.json.call(_context2.t0, _context2.t1));

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function testAction() {
      return _ref3.apply(this, arguments);
    }

    return testAction;
  }();

  return Service;
}(_base2.default);

exports.default = Service;
//# sourceMappingURL=service.js.map