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

var ItemGroup = function (_Base) {
  (0, _inherits3.default)(ItemGroup, _Base);

  function ItemGroup() {
    (0, _classCallCheck3.default)(this, ItemGroup);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  ItemGroup.prototype.init = function init() {
    var _Base$prototype$init;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_Base$prototype$init = _Base.prototype.init).call.apply(_Base$prototype$init, [this].concat(args));
    this.relation = {
      item: {
        type: think.model.HAS_MANY,
        key: "id",
        fKey: "group",
        order: "createAt DESC",
        relation: false
      }
    };
  };

  ItemGroup.prototype.selectData = function selectData(id) {
    id.toString();
    return this.setRelation(true).where("id = " + id).limit(8).find();
  };

  //获取首页显示的列表


  ItemGroup.prototype.getList = function getList() {
    return this.setRelation(false).where({ isOpen: 1 }).order("createAt DESC").select();
  };
  //显示在首页的拍卖物品信息


  ItemGroup.prototype.getGroupItem = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var groups, itemGroup, i, g;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              groups = [];
              _context.next = 3;
              return this.getList();

            case 3:
              itemGroup = _context.sent;
              _context.t0 = _regenerator2.default.keys(itemGroup);

            case 5:
              if ((_context.t1 = _context.t0()).done) {
                _context.next = 13;
                break;
              }

              i = _context.t1.value;
              _context.next = 9;
              return this.selectData(itemGroup[i]["id"]);

            case 9:
              g = _context.sent;

              groups.push(g);
              _context.next = 5;
              break;

            case 13:
              return _context.abrupt("return", groups);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getGroupItem() {
      return _ref.apply(this, arguments);
    }

    return getGroupItem;
  }();

  //管理员获取物品列表


  ItemGroup.prototype.getListAdmin = function getListAdmin() {
    return this.setRelation(false).order("createAt DESC").select();
  };

  ItemGroup.prototype.beforeAdd = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(data) {
      var groups;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = _Base.prototype.beforeAdd.call(this, data);
              _context2.next = 3;
              return this.select();

            case 3:
              groups = _context2.sent;

              data.no = groups.reduce(function (pre, curr) {
                return pre > +curr.no ? pre : +curr.no || pre;
              }, 0) + 1;
              return _context2.abrupt("return", data);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function beforeAdd(_x) {
      return _ref2.apply(this, arguments);
    }

    return beforeAdd;
  }();

  return ItemGroup;
}(_base2.default);

exports.default = ItemGroup;
//# sourceMappingURL=item_group.js.map