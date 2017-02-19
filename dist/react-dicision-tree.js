(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactDicisionTree"] = factory(require("react"));
	else
		root["ReactDicisionTree"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DicisionTree = function (_React$Component) {
  _inherits(DicisionTree, _React$Component);

  function DicisionTree() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DicisionTree);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DicisionTree.__proto__ || Object.getPrototypeOf(DicisionTree)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showChildrenMap: {}
    }, _this.onChange = function (e) {
      _this.setState({
        tab: e.target.value
      });
    }, _this.renderTree = function () {
      var data = _this.props.data;

      return _this.recDicisionTree(data);
    }, _this.renderCondition = function (root) {
      var splitType = root.splitType,
          value = root.value;

      if (!splitType) return null;
      var cls = 'dtree-condition';
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('span', { className: 'dtree-condition-line' }),
        _react2.default.createElement(
          'span',
          { className: cls },
          splitType,
          ' ',
          value
        )
      );
    }, _this.toggleChildrenVisible = function (id) {
      var showChildrenMap = Object.assign({}, _this.state.showChildrenMap);
      showChildrenMap[id] = !showChildrenMap[id];
      _this.setState({
        showChildrenMap: showChildrenMap
      });
    }, _this.renderCaret = function (side, children, id, toggleChildrenVisible) {
      if (side === 1 || !children) return null;
      var visible = _this.state.showChildrenMap[id];
      var title = visible ? '收起' : '展开';
      var type = visible ? '▲' : '▼';
      return _react2.default.createElement(
        'span',
        {
          title: title,
          type: type,
          className: 'dtree-caret',
          onClick: function onClick() {
            return toggleChildrenVisible(id);
          }
        },
        type
      );
    }, _this.renderYesLabel = function (label) {
      return _react2.default.createElement(
        'span',
        { className: 'dtree-color-green' },
        label
      );
    }, _this.renderNoLabel = function (label) {
      return _react2.default.createElement(
        'span',
        { className: 'dtree-color-red' },
        label
      );
    }, _this.renderTitle = function (labelText, labelDom) {
      return _react2.default.createElement(
        'b',
        { title: labelText },
        labelDom
      );
    }, _this.recDicisionTree = function (root) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var side = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var parentId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var showChildrenMap = _this.state.showChildrenMap;
      var _this$props = _this.props,
          _this$props$renderNoL = _this$props.renderNoLabel,
          renderNoLabel = _this$props$renderNoL === undefined ? _this.renderNoLabel : _this$props$renderNoL,
          _this$props$renderYes = _this$props.renderYesLabel,
          renderYesLabel = _this$props$renderYes === undefined ? _this.renderYesLabel : _this$props$renderYes,
          _this$props$renderCar = _this$props.renderCaret,
          renderCaret = _this$props$renderCar === undefined ? _this.renderCaret : _this$props$renderCar,
          _this$props$renderTit = _this$props.renderTitle,
          renderTitle = _this$props$renderTit === undefined ? _this.renderTitle : _this$props$renderTit;

      var id = parentId + '-' + level + '_' + side;
      var children = root.children,
          label = root.label,
          splitType = root.splitType,
          value = root.value;

      var childrenVisible = showChildrenMap[id];
      var cls = 'dtree-cell ' + ('dtree-lv' + level) + (' ' + className + ' ' + (children ? 'has-children' : 'no-children')) + ('' + (childrenVisible ? ' dtree-children-visible' : ''));

      var labelDom = void 0;
      if (label === 'Y') {
        labelDom = renderYesLabel(label);
      } else if (label === 'N') {
        labelDom = renderNoLabel(label);
      } else {
        labelDom = label;
      }

      return _react2.default.createElement(
        'div',
        { className: cls },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { className: 'dtree-label' },
            _this.renderCondition(root),
            _react2.default.createElement(
              'span',
              { className: 'dtree-label-text' },
              renderCaret(side, children, id, _this.toggleChildrenVisible),
              renderTitle(label, labelDom)
            )
          )
        ),
        children ? _this.recDicisionTree(children[0], level + 1, 'dtree-child dtree-cell-0', 0, id) : null,
        children ? _this.recDicisionTree(children[1], level + 1, 'dtree-child dtree-cell-1', 1, id) : null
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DicisionTree, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'dtree-wrapper' },
        this.renderTree()
      );
    }
  }]);

  return DicisionTree;
}(_react2.default.Component);

DicisionTree.propTypes = {
  data: _react.PropTypes.object.isRequired,
  showAllChildren: _react.PropTypes.bool,
  caretRender: _react.PropTypes.func,
  conditionRender: _react.PropTypes.func,
  renderYesLabel: _react.PropTypes.func,
  renderNoLabel: _react.PropTypes.func,
  renderTitle: _react.PropTypes.func
};
DicisionTree.defaultProps = {
  showAllChildren: false
};


module.exports = exports.default = DicisionTree;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});