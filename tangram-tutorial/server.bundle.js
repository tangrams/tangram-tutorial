/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use((0, _compression2.default)());

	// serve our static stuff like index.css
	app.use(_express2.default.static(_path2.default.join(__dirname, 'public'), { index: false }));

	// send all requests to index.html so browserHistory works
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // hey we made it!
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _Main = __webpack_require__(8);

	var _Main2 = _interopRequireDefault(_Main);

	var _Tutorial1Intro = __webpack_require__(69);

	var _Tutorial1Intro2 = _interopRequireDefault(_Tutorial1Intro);

	var _Tutorial2Min = __webpack_require__(71);

	var _Tutorial3Styling = __webpack_require__(79);

	var _Tutorial3Styling2 = _interopRequireDefault(_Tutorial3Styling);

	var _Tutorial4Filters = __webpack_require__(82);

	var _Tutorial4Filters2 = _interopRequireDefault(_Tutorial4Filters);

	var _TutorialConclusion = __webpack_require__(84);

	var _TutorialConclusion2 = _interopRequireDefault(_TutorialConclusion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _Main2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: '/intro', component: _Tutorial1Intro2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/minimum-map/min', component: _Tutorial2Min.Tutorial21 }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/minimum-map/data', component: _Tutorial2Min.Tutorial22 }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/styling', component: _Tutorial3Styling2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/filters', component: _Tutorial4Filters2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/conclusion', component: _TutorialConclusion2.default })
	);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _Grid = __webpack_require__(9);

	var _Grid2 = _interopRequireDefault(_Grid);

	var _Col = __webpack_require__(30);

	var _Col2 = _interopRequireDefault(_Col);

	var _Row = __webpack_require__(38);

	var _Row2 = _interopRequireDefault(_Row);

	var _Panel = __webpack_require__(39);

	var _Panel2 = _interopRequireDefault(_Panel);

	var _ListGroup = __webpack_require__(66);

	var _ListGroup2 = _interopRequireDefault(_ListGroup);

	var _ListGroupItem = __webpack_require__(67);

	var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Main = function (_React$Component) {
	    _inherits(Main, _React$Component);

	    function Main() {
	        _classCallCheck(this, Main);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
	    }

	    _createClass(Main, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                _Grid2.default,
	                { className: 'test' },
	                _react2.default.createElement(
	                    _Row2.default,
	                    { className: 'row-menu' },
	                    _react2.default.createElement(_Col2.default, { md: 2 }),
	                    _react2.default.createElement(
	                        _Col2.default,
	                        { md: 10 },
	                        _react2.default.createElement(
	                            'h1',
	                            { className: 'title' },
	                            'Tangram Tutorial'
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement('br', null)
	                    )
	                ),
	                _react2.default.createElement(
	                    _Row2.default,
	                    { className: 'full-height row-content' },
	                    _react2.default.createElement(
	                        _Col2.default,
	                        { md: 2, className: 'full-column-height' },
	                        _react2.default.createElement(
	                            _ListGroup2.default,
	                            { fill: true },
	                            _react2.default.createElement(_Panel2.default, { bsStyle: 'primary', collapsible: true, defaultExpanded: true, header: 'Intro', onClick: function onClick() {
	                                    _this2.context.router.push('/intro');
	                                } }),
	                            _react2.default.createElement(
	                                _Panel2.default,
	                                { bsStyle: 'primary', collapsible: true, defaultExpanded: true, header: 'A Basic Map' },
	                                _react2.default.createElement(
	                                    _ListGroupItem2.default,
	                                    null,
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { to: '/minimum-map/min' },
	                                        'A minimum map'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    _ListGroupItem2.default,
	                                    null,
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { to: '/minimum-map/data' },
	                                        'Data interpretation and styling'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(_Panel2.default, { bsStyle: 'primary', collapsible: true, defaultExpanded: true, header: 'Styling', onClick: function onClick() {
	                                    _this2.context.router.push('/styling');
	                                } }),
	                            _react2.default.createElement(_Panel2.default, { bsStyle: 'primary', collapsible: true, defaultExpanded: true, header: 'Filters', onClick: function onClick() {
	                                    _this2.context.router.push('/filters');
	                                } }),
	                            _react2.default.createElement(_Panel2.default, { bsStyle: 'primary', collapsible: true, defaultExpanded: true, header: 'Conclusion', onClick: function onClick() {
	                                    _this2.context.router.push('/conclusion');
	                                } })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _Col2.default,
	                        { md: 10, className: 'style-column' },
	                        _react2.default.createElement(
	                            _Grid2.default,
	                            { className: 'content' },
	                            this.props.children
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Main;
	}(_react2.default.Component);

	exports.default = Main;


	Main.contextTypes = {
	    router: _react2.default.PropTypes.object.isRequired
	};

	// onClick={() => {this.context.router.push('/minimum-map')}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(10)['default'];

	var _interopRequireDefault = __webpack_require__(26)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(27);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactPropTypesLibElementType = __webpack_require__(28);

	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

	var Grid = _react2['default'].createClass({
	  displayName: 'Grid',

	  propTypes: {
	    /**
	     * Turn any fixed-width grid layout into a full-width layout by this property.
	     *
	     * Adds `container-fluid` class.
	     */
	    fluid: _react2['default'].PropTypes.bool,
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _reactPropTypesLibElementType2['default']
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      componentClass: 'div',
	      fluid: false
	    };
	  },

	  render: function render() {
	    var ComponentClass = this.props.componentClass;
	    var className = this.props.fluid ? 'container-fluid' : 'container';

	    return _react2['default'].createElement(
	      ComponentClass,
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, className) }),
	      this.props.children
	    );
	  }
	});

	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(11)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	module.exports = __webpack_require__(16).Object.assign;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(14);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(19)});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(16)
	  , ctx       = __webpack_require__(17)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(20)
	  , toObject = __webpack_require__(21)
	  , IObject  = __webpack_require__(23);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(25)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 20 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(22);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(24);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _common = __webpack_require__(29);

	/**
	 * Checks whether a prop provides a type of element.
	 *
	 * The type of element can be provided in two forms:
	 * - tag name (string)
	 * - a return value of React.createClass(...)
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */

	function validate(props, propName, componentName) {
	  var errBeginning = _common.errMsg(props, propName, componentName, '. Expected an Element `type`');

	  if (typeof props[propName] !== 'function') {
	    if (_react2['default'].isValidElement(props[propName])) {
	      return new Error(errBeginning + ', not an actual Element');
	    }

	    if (typeof props[propName] !== 'string') {
	      return new Error(errBeginning + ' such as a tag name or return value of React.createClass(...)');
	    }
	  }
	}

	exports['default'] = _common.createChainableTypeChecker(validate);
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.errMsg = errMsg;
	exports.createChainableTypeChecker = createChainableTypeChecker;

	function errMsg(props, propName, componentName, msgContinuation) {
	  return 'Invalid prop \'' + propName + '\' of value \'' + props[propName] + '\'' + (' supplied to \'' + componentName + '\'' + msgContinuation);
	}

	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || '<<anonymous>>';
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(10)['default'];

	var _Object$keys = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(26)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(27);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _styleMaps = __webpack_require__(35);

	var _styleMaps2 = _interopRequireDefault(_styleMaps);

	var _reactPropTypesLibElementType = __webpack_require__(28);

	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

	var Col = _react2['default'].createClass({
	  displayName: 'Col',

	  propTypes: {
	    /**
	     * The number of columns you wish to span
	     *
	     * for Extra small devices Phones (<768px)
	     *
	     * class-prefix `col-xs-`
	     */
	    xs: _react2['default'].PropTypes.number,
	    /**
	     * The number of columns you wish to span
	     *
	     * for Small devices Tablets (≥768px)
	     *
	     * class-prefix `col-sm-`
	     */
	    sm: _react2['default'].PropTypes.number,
	    /**
	     * The number of columns you wish to span
	     *
	     * for Medium devices Desktops (≥992px)
	     *
	     * class-prefix `col-md-`
	     */
	    md: _react2['default'].PropTypes.number,
	    /**
	     * The number of columns you wish to span
	     *
	     * for Large devices Desktops (≥1200px)
	     *
	     * class-prefix `col-lg-`
	     */
	    lg: _react2['default'].PropTypes.number,
	    /**
	     * Hide column
	     *
	     * on Extra small devices Phones
	     *
	     * adds class `hidden-xs`
	     */
	    xsHidden: _react2['default'].PropTypes.bool,
	    /**
	     * Hide column
	     *
	     * on Small devices Tablets
	     *
	     * adds class `hidden-sm`
	     */
	    smHidden: _react2['default'].PropTypes.bool,
	    /**
	     * Hide column
	     *
	     * on Medium devices Desktops
	     *
	     * adds class `hidden-md`
	     */
	    mdHidden: _react2['default'].PropTypes.bool,
	    /**
	     * Hide column
	     *
	     * on Large devices Desktops
	     *
	     * adds class `hidden-lg`
	     */
	    lgHidden: _react2['default'].PropTypes.bool,
	    /**
	     * Move columns to the right
	     *
	     * for Extra small devices Phones
	     *
	     * class-prefix `col-xs-offset-`
	     */
	    xsOffset: _react2['default'].PropTypes.number,
	    /**
	     * Move columns to the right
	     *
	     * for Small devices Tablets
	     *
	     * class-prefix `col-sm-offset-`
	     */
	    smOffset: _react2['default'].PropTypes.number,
	    /**
	     * Move columns to the right
	     *
	     * for Medium devices Desktops
	     *
	     * class-prefix `col-md-offset-`
	     */
	    mdOffset: _react2['default'].PropTypes.number,
	    /**
	     * Move columns to the right
	     *
	     * for Large devices Desktops
	     *
	     * class-prefix `col-lg-offset-`
	     */
	    lgOffset: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Extra small devices Phones
	     *
	     * class-prefix `col-xs-push-`
	     */
	    xsPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Small devices Tablets
	     *
	     * class-prefix `col-sm-push-`
	     */
	    smPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Medium devices Desktops
	     *
	     * class-prefix `col-md-push-`
	     */
	    mdPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Large devices Desktops
	     *
	     * class-prefix `col-lg-push-`
	     */
	    lgPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Extra small devices Phones
	     *
	     * class-prefix `col-xs-pull-`
	     */
	    xsPull: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Small devices Tablets
	     *
	     * class-prefix `col-sm-pull-`
	     */
	    smPull: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Medium devices Desktops
	     *
	     * class-prefix `col-md-pull-`
	     */
	    mdPull: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Large devices Desktops
	     *
	     * class-prefix `col-lg-pull-`
	     */
	    lgPull: _react2['default'].PropTypes.number,
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _reactPropTypesLibElementType2['default']
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      componentClass: 'div'
	    };
	  },

	  render: function render() {
	    var _this = this;

	    var ComponentClass = this.props.componentClass;
	    var classes = {};

	    _Object$keys(_styleMaps2['default'].SIZES).forEach(function (key) {
	      var size = _styleMaps2['default'].SIZES[key];
	      var prop = size;
	      var classPart = size + '-';

	      if (_this.props[prop]) {
	        classes['col-' + classPart + _this.props[prop]] = true;
	      }

	      classes['hidden-' + size] = _this.props[size + 'Hidden'];

	      prop = size + 'Offset';
	      classPart = size + '-offset-';
	      if (_this.props[prop] >= 0) {
	        classes['col-' + classPart + _this.props[prop]] = true;
	      }

	      prop = size + 'Push';
	      classPart = size + '-push-';
	      if (_this.props[prop] >= 0) {
	        classes['col-' + classPart + _this.props[prop]] = true;
	      }

	      prop = size + 'Pull';
	      classPart = size + '-pull-';
	      if (_this.props[prop] >= 0) {
	        classes['col-' + classPart + _this.props[prop]] = true;
	      }
	    }, this);

	    return _react2['default'].createElement(
	      ComponentClass,
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  }
	});

	exports['default'] = Col;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33);
	module.exports = __webpack_require__(16).Object.keys;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(21);

	__webpack_require__(34)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(14)
	  , core    = __webpack_require__(16)
	  , fails   = __webpack_require__(25);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$assign = __webpack_require__(11)['default'];

	var _Object$create = __webpack_require__(36)['default'];

	var _Object$keys = __webpack_require__(31)['default'];

	exports.__esModule = true;

	var constant = function constant(obj) {
	  return _Object$assign(_Object$create({
	    values: function values() {
	      var _this = this;

	      return _Object$keys(this).map(function (k) {
	        return _this[k];
	      });
	    }
	  }), obj);
	};

	var styleMaps = {

	  SIZES: {
	    'large': 'lg',
	    'medium': 'md',
	    'small': 'sm',
	    'xsmall': 'xs',
	    'lg': 'lg',
	    'md': 'md',
	    'sm': 'sm',
	    'xs': 'xs'
	  },
	  GRID_COLUMNS: 12
	};

	var Sizes = constant({
	  LARGE: 'large',
	  MEDIUM: 'medium',
	  SMALL: 'small',
	  XSMALL: 'xsmall'
	});

	exports.Sizes = Sizes;
	var State = constant({
	  SUCCESS: 'success',
	  WARNING: 'warning',
	  DANGER: 'danger',
	  INFO: 'info'
	});

	exports.State = State;
	var DEFAULT = 'default';
	exports.DEFAULT = DEFAULT;
	var PRIMARY = 'primary';
	exports.PRIMARY = PRIMARY;
	var LINK = 'link';
	exports.LINK = LINK;
	var INVERSE = 'inverse';

	exports.INVERSE = INVERSE;
	exports['default'] = styleMaps;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(20);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(10)['default'];

	var _interopRequireDefault = __webpack_require__(26)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(27);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactPropTypesLibElementType = __webpack_require__(28);

	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

	var Row = _react2['default'].createClass({
	  displayName: 'Row',

	  propTypes: {
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _reactPropTypesLibElementType2['default']
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      componentClass: 'div'
	    };
	  },

	  render: function render() {
	    var ComponentClass = this.props.componentClass;

	    return _react2['default'].createElement(
	      ComponentClass,
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'row') }),
	      this.props.children
	    );
	  }
	});

	exports['default'] = Row;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _objectWithoutProperties = __webpack_require__(40)['default'];

	var _extends = __webpack_require__(10)['default'];

	var _interopRequireDefault = __webpack_require__(26)['default'];

	exports.__esModule = true;

	var _classnames = __webpack_require__(27);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _styleMaps = __webpack_require__(35);

	var _utilsBootstrapUtils = __webpack_require__(41);

	var _Collapse = __webpack_require__(43);

	var _Collapse2 = _interopRequireDefault(_Collapse);

	var Panel = _react2['default'].createClass({
	  displayName: 'Panel',

	  propTypes: {
	    collapsible: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    header: _react2['default'].PropTypes.node,
	    id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
	    footer: _react2['default'].PropTypes.node,
	    defaultExpanded: _react2['default'].PropTypes.bool,
	    expanded: _react2['default'].PropTypes.bool,
	    eventKey: _react2['default'].PropTypes.any,
	    headerRole: _react2['default'].PropTypes.string,
	    panelRole: _react2['default'].PropTypes.string,

	    onEnter: _Collapse2['default'].propTypes.onEnter,
	    onEntering: _Collapse2['default'].propTypes.onEntering,
	    onEntered: _Collapse2['default'].propTypes.onEntered,
	    onExit: _Collapse2['default'].propTypes.onExit,
	    onExiting: _Collapse2['default'].propTypes.onExiting,
	    onExited: _Collapse2['default'].propTypes.onExited
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultExpanded: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      expanded: this.props.defaultExpanded
	    };
	  },

	  handleSelect: function handleSelect(e) {
	    e.persist();
	    e.selected = true;

	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }

	    if (e.selected) {
	      this.handleToggle();
	    }
	  },

	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },

	  isExpanded: function isExpanded() {
	    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
	  },

	  render: function render() {
	    var _props = this.props;
	    var headerRole = _props.headerRole;
	    var panelRole = _props.panelRole;

	    var props = _objectWithoutProperties(_props, ['headerRole', 'panelRole']);

	    return _react2['default'].createElement(
	      'div',
	      _extends({}, props, {
	        className: _classnames2['default'](this.props.className, _utilsBootstrapUtils.getClassSet(this.props)),
	        id: this.props.collapsible ? null : this.props.id, onSelect: null
	      }),
	      this.renderHeading(headerRole),
	      this.props.collapsible ? this.renderCollapsibleBody(panelRole) : this.renderBody(),
	      this.renderFooter()
	    );
	  },

	  renderCollapsibleBody: function renderCollapsibleBody(panelRole) {
	    var collapseProps = {
	      onEnter: this.props.onEnter,
	      onEntering: this.props.onEntering,
	      onEntered: this.props.onEntered,
	      onExit: this.props.onExit,
	      onExiting: this.props.onExiting,
	      onExited: this.props.onExited,
	      'in': this.isExpanded()
	    };
	    var props = {
	      className: _utilsBootstrapUtils.prefix(this.props, 'collapse'),
	      id: this.props.id,
	      ref: 'panel',
	      'aria-hidden': !this.isExpanded()
	    };
	    if (panelRole) {
	      props.role = panelRole;
	    }

	    return _react2['default'].createElement(
	      _Collapse2['default'],
	      collapseProps,
	      _react2['default'].createElement(
	        'div',
	        props,
	        this.renderBody()
	      )
	    );
	  },

	  renderBody: function renderBody() {
	    var _this = this;

	    var allChildren = this.props.children;
	    var bodyElements = [];
	    var panelBodyChildren = [];
	    var bodyClass = _utilsBootstrapUtils.prefix(this.props, 'body');

	    function getProps() {
	      return { key: bodyElements.length };
	    }

	    function addPanelChild(child) {
	      bodyElements.push(_react.cloneElement(child, getProps()));
	    }

	    function addPanelBody(children) {
	      bodyElements.push(_react2['default'].createElement(
	        'div',
	        _extends({ className: bodyClass }, getProps()),
	        children
	      ));
	    }

	    function maybeRenderPanelBody() {
	      if (panelBodyChildren.length === 0) {
	        return;
	      }

	      addPanelBody(panelBodyChildren);
	      panelBodyChildren = [];
	    }

	    // Handle edge cases where we should not iterate through children.
	    if (!Array.isArray(allChildren) || allChildren.length === 0) {
	      if (this.shouldRenderFill(allChildren)) {
	        addPanelChild(allChildren);
	      } else {
	        addPanelBody(allChildren);
	      }
	    } else {
	      allChildren.forEach(function (child) {
	        if (_this.shouldRenderFill(child)) {
	          maybeRenderPanelBody();

	          // Separately add the filled element.
	          addPanelChild(child);
	        } else {
	          panelBodyChildren.push(child);
	        }
	      });

	      maybeRenderPanelBody();
	    }

	    return bodyElements;
	  },

	  shouldRenderFill: function shouldRenderFill(child) {
	    return _react2['default'].isValidElement(child) && child.props.fill != null;
	  },

	  renderHeading: function renderHeading(headerRole) {
	    var header = this.props.header;

	    if (!header) {
	      return null;
	    }

	    if (!_react2['default'].isValidElement(header) || Array.isArray(header)) {
	      header = this.props.collapsible ? this.renderCollapsibleTitle(header, headerRole) : header;
	    } else {
	      var className = _classnames2['default'](_utilsBootstrapUtils.prefix(this.props, 'title'), header.props.className);

	      if (this.props.collapsible) {
	        header = _react.cloneElement(header, {
	          className: className,
	          children: this.renderAnchor(header.props.children, headerRole)
	        });
	      } else {
	        header = _react.cloneElement(header, { className: className });
	      }
	    }

	    return _react2['default'].createElement(
	      'div',
	      { className: _utilsBootstrapUtils.prefix(this.props, 'heading') },
	      header
	    );
	  },

	  renderAnchor: function renderAnchor(header, headerRole) {
	    return _react2['default'].createElement(
	      'a',
	      {
	        href: '#' + (this.props.id || ''),
	        'aria-controls': this.props.collapsible ? this.props.id : null,
	        className: this.isExpanded() ? null : 'collapsed',
	        'aria-expanded': this.isExpanded(),
	        'aria-selected': this.isExpanded(),
	        onClick: this.handleSelect,
	        role: headerRole
	      },
	      header
	    );
	  },

	  renderCollapsibleTitle: function renderCollapsibleTitle(header, headerRole) {
	    return _react2['default'].createElement(
	      'h4',
	      { className: _utilsBootstrapUtils.prefix(this.props, 'title'), role: 'presentation' },
	      this.renderAnchor(header, headerRole)
	    );
	  },

	  renderFooter: function renderFooter() {
	    if (!this.props.footer) {
	      return null;
	    }

	    return _react2['default'].createElement(
	      'div',
	      { className: _utilsBootstrapUtils.prefix(this.props, 'footer') },
	      this.props.footer
	    );
	  }
	});

	var PANEL_STATES = _styleMaps.State.values().concat(_styleMaps.DEFAULT, _styleMaps.PRIMARY);

	exports['default'] = _utilsBootstrapUtils.bsStyles(PANEL_STATES, _styleMaps.DEFAULT, _utilsBootstrapUtils.bsClass('panel', Panel));
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(10)['default'];

	var _interopRequireDefault = __webpack_require__(26)['default'];

	exports.__esModule = true;
	exports.prefix = prefix;
	exports.getClassSet = getClassSet;
	exports.addStyle = addStyle;

	var _react = __webpack_require__(4);

	var _styleMaps = __webpack_require__(35);

	var _styleMaps2 = _interopRequireDefault(_styleMaps);

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	function curry(fn) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var last = args[args.length - 1];
	    if (typeof last === 'function') {
	      return fn.apply(undefined, args);
	    }
	    return function (Component) {
	      return fn.apply(undefined, args.concat([Component]));
	    };
	  };
	}

	function prefix(props, variant) {
	  if (props === undefined) props = {};

	  !(props.bsClass || '').trim() ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'A `bsClass` prop is required for this component') : _invariant2['default'](false) : undefined;
	  return props.bsClass + (variant ? '-' + variant : '');
	}

	var bsClass = curry(function (defaultClass, Component) {
	  var propTypes = Component.propTypes || (Component.propTypes = {});
	  var defaultProps = Component.defaultProps || (Component.defaultProps = {});

	  propTypes.bsClass = _react.PropTypes.string;
	  defaultProps.bsClass = defaultClass;

	  return Component;
	});

	exports.bsClass = bsClass;
	var bsStyles = curry(function (styles, defaultStyle, Component) {
	  if (typeof defaultStyle !== 'string') {
	    Component = defaultStyle;
	    defaultStyle = undefined;
	  }

	  var existing = Component.STYLES || [];
	  var propTypes = Component.propTypes || {};

	  styles.forEach(function (style) {
	    if (existing.indexOf(style) === -1) {
	      existing.push(style);
	    }
	  });

	  var propType = _react.PropTypes.oneOf(existing);

	  // expose the values on the propType function for documentation
	  Component.STYLES = propType._values = existing;

	  Component.propTypes = _extends({}, propTypes, {
	    bsStyle: propType
	  });

	  if (defaultStyle !== undefined) {
	    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
	    defaultProps.bsStyle = defaultStyle;
	  }

	  return Component;
	});

	exports.bsStyles = bsStyles;
	var bsSizes = curry(function (sizes, defaultSize, Component) {
	  if (typeof defaultSize !== 'string') {
	    Component = defaultSize;
	    defaultSize = undefined;
	  }

	  var existing = Component.SIZES || [];
	  var propTypes = Component.propTypes || {};

	  sizes.forEach(function (size) {
	    if (existing.indexOf(size) === -1) {
	      existing.push(size);
	    }
	  });

	  var values = [];
	  existing.forEach(function (size) {
	    var mappedSize = _styleMaps2['default'].SIZES[size];
	    if (mappedSize && mappedSize !== size) {
	      values.push(mappedSize);
	    }

	    values.push(size);
	  });

	  var propType = _react.PropTypes.oneOf(values);
	  propType._values = values;

	  // expose the values on the propType function for documentation
	  Component.SIZES = existing;

	  Component.propTypes = _extends({}, propTypes, {
	    bsSize: propType
	  });

	  if (defaultSize !== undefined) {
	    if (!Component.defaultProps) {
	      Component.defaultProps = {};
	    }
	    Component.defaultProps.bsSize = defaultSize;
	  }

	  return Component;
	});

	exports.bsSizes = bsSizes;

	function getClassSet(props) {
	  var _classes;

	  var classes = (_classes = {}, _classes[prefix(props)] = true, _classes);

	  if (props.bsSize) {
	    var bsSize = _styleMaps2['default'].SIZES[props.bsSize] || bsSize;
	    classes[prefix(props, bsSize)] = true;
	  }

	  if (props.bsStyle) {
	    classes[prefix(props, props.bsStyle)] = true;
	  }

	  return classes;
	}

	/**
	 * Add a style variant to a Component. Mutates the propTypes of the component
	 * in order to validate the new variant.
	 */

	function addStyle(Component) {
	  for (var _len2 = arguments.length, styleVariant = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    styleVariant[_key2 - 1] = arguments[_key2];
	  }

	  bsStyles(styleVariant, Component);
	}

	var _curry = curry;
	exports._curry = _curry;

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("invariant");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(44)['default'];

	var _classCallCheck = __webpack_require__(51)['default'];

	var _extends = __webpack_require__(10)['default'];

	var _interopRequireDefault = __webpack_require__(26)['default'];

	exports.__esModule = true;

	var _domHelpersStyle = __webpack_require__(52);

	var _domHelpersStyle2 = _interopRequireDefault(_domHelpersStyle);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(27);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactOverlaysLibTransition = __webpack_require__(60);

	var _reactOverlaysLibTransition2 = _interopRequireDefault(_reactOverlaysLibTransition);

	var _utilsCreateChainedFunction = __webpack_require__(65);

	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

	var capitalize = function capitalize(str) {
	  return str[0].toUpperCase() + str.substr(1);
	};

	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	var triggerBrowserReflow = function triggerBrowserReflow(node) {
	  return node.offsetHeight;
	};

	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};

	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + capitalize(dimension)];
	  var margins = MARGINS[dimension];

	  return value + parseInt(_domHelpersStyle2['default'](elem, margins[0]), 10) + parseInt(_domHelpersStyle2['default'](elem, margins[1]), 10);
	}

	var Collapse = (function (_React$Component) {
	  _inherits(Collapse, _React$Component);

	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);

	    _React$Component.call(this, props, context);

	    this.onEnterListener = this.handleEnter.bind(this);
	    this.onEnteringListener = this.handleEntering.bind(this);
	    this.onEnteredListener = this.handleEntered.bind(this);
	    this.onExitListener = this.handleExit.bind(this);
	    this.onExitingListener = this.handleExiting.bind(this);
	  }

	  // Explicitly copied from Transition for doc generation.
	  // TODO: Remove duplication once #977 is resolved.

	  Collapse.prototype.render = function render() {
	    var enter = _utilsCreateChainedFunction2['default'](this.onEnterListener, this.props.onEnter);
	    var entering = _utilsCreateChainedFunction2['default'](this.onEnteringListener, this.props.onEntering);
	    var entered = _utilsCreateChainedFunction2['default'](this.onEnteredListener, this.props.onEntered);
	    var exit = _utilsCreateChainedFunction2['default'](this.onExitListener, this.props.onExit);
	    var exiting = _utilsCreateChainedFunction2['default'](this.onExitingListener, this.props.onExiting);

	    return _react2['default'].createElement(
	      _reactOverlaysLibTransition2['default'],
	      _extends({
	        ref: 'transition'
	      }, this.props, {
	        'aria-expanded': this.props.role ? this.props['in'] : null,
	        className: _classnames2['default'](this.props.className, { width: this._dimension() === 'width' }),
	        exitedClassName: 'collapse',
	        exitingClassName: 'collapsing',
	        enteredClassName: 'collapse in',
	        enteringClassName: 'collapsing',
	        onEnter: enter,
	        onEntering: entering,
	        onEntered: entered,
	        onExit: exit,
	        onExiting: exiting,
	        onExited: this.props.onExited
	      }),
	      this.props.children
	    );
	  };

	  /* -- Expanding -- */

	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };

	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();

	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };

	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };

	  /* -- Collapsing -- */

	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();

	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	  };

	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();

	    triggerBrowserReflow(elem);
	    elem.style[dimension] = '0';
	  };

	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };

	  // for testing

	  Collapse.prototype._getTransitionInstance = function _getTransitionInstance() {
	    return this.refs.transition;
	  };

	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + capitalize(dimension)] + 'px';
	  };

	  return Collapse;
	})(_react2['default'].Component);

	Collapse.propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  'in': _react2['default'].PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _react2['default'].PropTypes.bool,

	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2['default'].PropTypes.bool,

	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _react2['default'].PropTypes.number,

	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _react2['default'].PropTypes.func,

	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['height', 'width']), _react2['default'].PropTypes.func]),

	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _react2['default'].PropTypes.func,

	  /**
	   * ARIA role of collapsible element
	   */
	  role: _react2['default'].PropTypes.string
	};

	Collapse.defaultProps = {
	  'in': false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false,

	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};

	exports['default'] = Collapse;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(36)["default"];

	var _Object$setPrototypeOf = __webpack_require__(45)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47);
	module.exports = __webpack_require__(16).Object.setPrototypeOf;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(14);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(48).set});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(20).getDesc
	  , isObject = __webpack_require__(49)
	  , anObject = __webpack_require__(50);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(17)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(49);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var camelize = __webpack_require__(53),
	    hyphenate = __webpack_require__(55),
	    _getComputedStyle = __webpack_require__(57),
	    removeStyle = __webpack_require__(59);

	var has = Object.prototype.hasOwnProperty;

	module.exports = function style(node, property, value) {
	  var css = '',
	      props = property;

	  if (typeof property === 'string') {

	    if (value === undefined) return node.style[camelize(property)] || _getComputedStyle(node).getPropertyValue(hyphenate(property));else (props = {})[property] = value;
	  }

	  for (var key in props) if (has.call(props, key)) {
	    !props[key] && props[key] !== 0 ? removeStyle(node, hyphenate(key)) : css += hyphenate(key) + ':' + props[key] + ';';
	  }

	  node.style.cssText += ';' + css;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	 */

	'use strict';
	var camelize = __webpack_require__(54);
	var msPattern = /^-ms-/;

	module.exports = function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";

	var rHyphen = /-(.)/g;

	module.exports = function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	 */

	"use strict";

	var hyphenate = __webpack_require__(56);
	var msPattern = /^ms-/;

	module.exports = function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, "-ms-");
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	var rUpper = /([A-Z])/g;

	module.exports = function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var babelHelpers = __webpack_require__(58);

	var _utilCamelizeStyle = __webpack_require__(53);

	var _utilCamelizeStyle2 = babelHelpers.interopRequireDefault(_utilCamelizeStyle);

	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

	module.exports = function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;

	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : { //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;

	      prop = (0, _utilCamelizeStyle2['default'])(prop);

	      if (prop == 'float') prop = 'styleFloat';

	      var current = node.currentStyle[prop] || null;

	      if (current == null && style && style[prop]) current = style[prop];

	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;

	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;

	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';

	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }

	      return current;
	    }
	  };
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === "object") {
	    factory(exports);
	  } else {
	    factory(root.babelHelpers = {});
	  }
	})(this, function (global) {
	  var babelHelpers = global;

	  babelHelpers.interopRequireDefault = function (obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  };

	  babelHelpers._extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	})

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(61);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _properties = __webpack_require__(62);

	var _properties2 = _interopRequireDefault(_properties);

	var _on = __webpack_require__(64);

	var _on2 = _interopRequireDefault(_on);

	var _classnames = __webpack_require__(27);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var transitionEndEvent = _properties2.default.end;

	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;

	/**
	 * The Transition component lets you define and run css transitions with a simple declarative api.
	 * It works similar to React's own [CSSTransitionGroup](http://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup)
	 * but is specifically optimized for transitioning a single child "in" or "out".
	 *
	 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
	 * The extensive set of lifecyle callbacks means you have control over
	 * the transitioning now at each step of the way.
	 */

	var Transition = function (_React$Component) {
	  _inherits(Transition, _React$Component);

	  function Transition(props, context) {
	    _classCallCheck(this, Transition);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Transition).call(this, props, context));

	    var initialStatus = void 0;
	    if (props.in) {
	      // Start enter transition in componentDidMount.
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };

	    _this.nextCallback = null;
	    return _this;
	  }

	  _createClass(Transition, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.transitionAppear && this.props.in) {
	        this.performEnter(this.props);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.in && this.props.unmountOnExit) {
	        if (this.state.status === UNMOUNTED) {
	          // Start enter transition in componentDidUpdate.
	          this.setState({ status: EXITED });
	        }
	      } else {
	        this._needsUpdate = true;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var status = this.state.status;

	      if (this.props.unmountOnExit && status === EXITED) {
	        // EXITED is always a transitional state to either ENTERING or UNMOUNTED
	        // when using unmountOnExit.
	        if (this.props.in) {
	          this.performEnter(this.props);
	        } else {
	          this.setState({ status: UNMOUNTED });
	        }

	        return;
	      }

	      // guard ensures we are only responding to prop changes
	      if (this._needsUpdate) {
	        this._needsUpdate = false;

	        if (this.props.in) {
	          if (status === EXITING) {
	            this.performEnter(this.props);
	          } else if (status === EXITED) {
	            this.performEnter(this.props);
	          }
	          // Otherwise we're already entering or entered.
	        } else {
	          if (status === ENTERING || status === ENTERED) {
	            this.performExit(this.props);
	          }
	          // Otherwise we're already exited or exiting.
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.cancelNextCallback();
	    }
	  }, {
	    key: 'performEnter',
	    value: function performEnter(props) {
	      var _this2 = this;

	      this.cancelNextCallback();
	      var node = _reactDom2.default.findDOMNode(this);

	      // Not this.props, because we might be about to receive new props.
	      props.onEnter(node);

	      this.safeSetState({ status: ENTERING }, function () {
	        _this2.props.onEntering(node);

	        _this2.onTransitionEnd(node, function () {
	          _this2.safeSetState({ status: ENTERED }, function () {
	            _this2.props.onEntered(node);
	          });
	        });
	      });
	    }
	  }, {
	    key: 'performExit',
	    value: function performExit(props) {
	      var _this3 = this;

	      this.cancelNextCallback();
	      var node = _reactDom2.default.findDOMNode(this);

	      // Not this.props, because we might be about to receive new props.
	      props.onExit(node);

	      this.safeSetState({ status: EXITING }, function () {
	        _this3.props.onExiting(node);

	        _this3.onTransitionEnd(node, function () {
	          _this3.safeSetState({ status: EXITED }, function () {
	            _this3.props.onExited(node);
	          });
	        });
	      });
	    }
	  }, {
	    key: 'cancelNextCallback',
	    value: function cancelNextCallback() {
	      if (this.nextCallback !== null) {
	        this.nextCallback.cancel();
	        this.nextCallback = null;
	      }
	    }
	  }, {
	    key: 'safeSetState',
	    value: function safeSetState(nextState, callback) {
	      // This shouldn't be necessary, but there are weird race conditions with
	      // setState callbacks and unmounting in testing, so always make sure that
	      // we can cancel any pending setState callbacks after we unmount.
	      this.setState(nextState, this.setNextCallback(callback));
	    }
	  }, {
	    key: 'setNextCallback',
	    value: function setNextCallback(callback) {
	      var _this4 = this;

	      var active = true;

	      this.nextCallback = function (event) {
	        if (active) {
	          active = false;
	          _this4.nextCallback = null;

	          callback(event);
	        }
	      };

	      this.nextCallback.cancel = function () {
	        active = false;
	      };

	      return this.nextCallback;
	    }
	  }, {
	    key: 'onTransitionEnd',
	    value: function onTransitionEnd(node, handler) {
	      this.setNextCallback(handler);

	      if (node) {
	        (0, _on2.default)(node, transitionEndEvent, this.nextCallback);
	        setTimeout(this.nextCallback, this.props.timeout);
	      } else {
	        setTimeout(this.nextCallback, 0);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var status = this.state.status;
	      if (status === UNMOUNTED) {
	        return null;
	      }

	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;

	      var childProps = _objectWithoutProperties(_props, ['children', 'className']);

	      Object.keys(Transition.propTypes).forEach(function (key) {
	        return delete childProps[key];
	      });

	      var transitionClassName = void 0;
	      if (status === EXITED) {
	        transitionClassName = this.props.exitedClassName;
	      } else if (status === ENTERING) {
	        transitionClassName = this.props.enteringClassName;
	      } else if (status === ENTERED) {
	        transitionClassName = this.props.enteredClassName;
	      } else if (status === EXITING) {
	        transitionClassName = this.props.exitingClassName;
	      }

	      var child = _react2.default.Children.only(children);
	      return _react2.default.cloneElement(child, _extends({}, childProps, {
	        className: (0, _classnames2.default)(child.props.className, className, transitionClassName)
	      }));
	    }
	  }]);

	  return Transition;
	}(_react2.default.Component);

	Transition.propTypes = {
	  /**
	   * Show the component; triggers the enter or exit animation
	   */
	  in: _react2.default.PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is not shown
	   */
	  unmountOnExit: _react2.default.PropTypes.bool,

	  /**
	   * Run the enter animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2.default.PropTypes.bool,

	  /**
	   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
	   * transition indefinately if the browser transitionEnd events are
	   * canceled or interrupted.
	   *
	   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
	   * setting this to the duration of your animation (or a bit above it).
	   */
	  timeout: _react2.default.PropTypes.number,

	  /**
	   * CSS class or classes applied when the component is exited
	   */
	  exitedClassName: _react2.default.PropTypes.string,
	  /**
	   * CSS class or classes applied while the component is exiting
	   */
	  exitingClassName: _react2.default.PropTypes.string,
	  /**
	   * CSS class or classes applied when the component is entered
	   */
	  enteredClassName: _react2.default.PropTypes.string,
	  /**
	   * CSS class or classes applied while the component is entering
	   */
	  enteringClassName: _react2.default.PropTypes.string,

	  /**
	   * Callback fired before the "entering" classes are applied
	   */
	  onEnter: _react2.default.PropTypes.func,
	  /**
	   * Callback fired after the "entering" classes are applied
	   */
	  onEntering: _react2.default.PropTypes.func,
	  /**
	   * Callback fired after the "enter" classes are applied
	   */
	  onEntered: _react2.default.PropTypes.func,
	  /**
	   * Callback fired before the "exiting" classes are applied
	   */
	  onExit: _react2.default.PropTypes.func,
	  /**
	   * Callback fired after the "exiting" classes are applied
	   */
	  onExiting: _react2.default.PropTypes.func,
	  /**
	   * Callback fired after the "exited" classes are applied
	   */
	  onExited: _react2.default.PropTypes.func
	};

	// Name the function so it is clearer in the documentation
	function noop() {}

	Transition.displayName = 'Transition';

	Transition.defaultProps = {
	  in: false,
	  unmountOnExit: false,
	  transitionAppear: false,

	  timeout: 5000,

	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,

	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};

	exports.default = Transition;

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(63);

	var has = Object.prototype.hasOwnProperty,
	    transform = 'transform',
	    transition = {},
	    transitionTiming,
	    transitionDuration,
	    transitionProperty,
	    transitionDelay;

	if (canUseDOM) {
	  transition = getTransitionProperties();

	  transform = transition.prefix + transform;

	  transitionProperty = transition.prefix + 'transition-property';
	  transitionDuration = transition.prefix + 'transition-duration';
	  transitionDelay = transition.prefix + 'transition-delay';
	  transitionTiming = transition.prefix + 'transition-timing-function';
	}

	module.exports = {
	  transform: transform,
	  end: transition.end,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};

	function getTransitionProperties() {
	  var endEvent,
	      prefix = '',
	      transitions = {
	    O: 'otransitionend',
	    Moz: 'transitionend',
	    Webkit: 'webkitTransitionEnd',
	    ms: 'MSTransitionEnd'
	  };

	  var element = document.createElement('div');

	  for (var vendor in transitions) if (has.call(transitions, vendor)) {
	    if (element.style[vendor + 'TransitionProperty'] !== undefined) {
	      prefix = '-' + vendor.toLowerCase() + '-';
	      endEvent = transitions[vendor];
	      break;
	    }
	  }

	  if (!endEvent && element.style.transitionProperty !== undefined) endEvent = 'transitionend';

	  return { end: endEvent, prefix: prefix };
	}

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(63);
	var on = function on() {};

	if (canUseDOM) {
	  on = (function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, handler);
	    };
	  })();
	}

	module.exports = on;

/***/ },
/* 65 */
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} functions to chain
	 * @returns {function|null}
	 */
	'use strict';

	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }

	    if (acc === null) {
	      return f;
	    }

	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}

	exports['default'] = createChainedFunction;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(44)['default'];

	var _classCallCheck = __webpack_require__(51)['default'];

	var _extends = __webpack_require__(10)['default'];

	var _interopRequireDefault = __webpack_require__(26)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _ListGroupItem = __webpack_require__(67);

	var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

	var _classnames = __webpack_require__(27);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsValidComponentChildren = __webpack_require__(68);

	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

	var ListGroup = (function (_React$Component) {
	  _inherits(ListGroup, _React$Component);

	  function ListGroup() {
	    _classCallCheck(this, ListGroup);

	    _React$Component.apply(this, arguments);
	  }

	  ListGroup.prototype.render = function render() {
	    var _this = this;

	    var items = _utilsValidComponentChildren2['default'].map(this.props.children, function (item, index) {
	      return _react.cloneElement(item, { key: item.key ? item.key : index });
	    });

	    if (this.areCustomChildren(items)) {
	      var Component = this.props.componentClass;
	      return _react2['default'].createElement(
	        Component,
	        _extends({}, this.props, {
	          className: _classnames2['default'](this.props.className, 'list-group') }),
	        items
	      );
	    }

	    var shouldRenderDiv = false;

	    if (!this.props.children) {
	      shouldRenderDiv = true;
	    } else {
	      _utilsValidComponentChildren2['default'].forEach(this.props.children, function (child) {
	        if (_this.isAnchorOrButton(child.props)) {
	          shouldRenderDiv = true;
	        }
	      });
	    }

	    return shouldRenderDiv ? this.renderDiv(items) : this.renderUL(items);
	  };

	  ListGroup.prototype.isAnchorOrButton = function isAnchorOrButton(props) {
	    return props.href || props.onClick;
	  };

	  ListGroup.prototype.areCustomChildren = function areCustomChildren(children) {
	    var customChildren = false;

	    _utilsValidComponentChildren2['default'].forEach(children, function (child) {
	      if (child.type !== _ListGroupItem2['default']) {
	        customChildren = true;
	      }
	    }, this);

	    return customChildren;
	  };

	  ListGroup.prototype.renderUL = function renderUL(items) {
	    var listItems = _utilsValidComponentChildren2['default'].map(items, function (item) {
	      return _react.cloneElement(item, { listItem: true });
	    });

	    return _react2['default'].createElement(
	      'ul',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, 'list-group') }),
	      listItems
	    );
	  };

	  ListGroup.prototype.renderDiv = function renderDiv(items) {
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, 'list-group') }),
	      items
	    );
	  };

	  return ListGroup;
	})(_react2['default'].Component);

	ListGroup.defaultProps = {
	  componentClass: 'div'
	};

	ListGroup.propTypes = {
	  className: _react2['default'].PropTypes.string,
	  /**
	   * The element for ListGroup if children are
	   * user-defined custom components.
	   * @type {("ul"|"div")}
	   */
	  componentClass: _react2['default'].PropTypes.oneOf(['ul', 'div']),
	  id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])
	};

	exports['default'] = ListGroup;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(44)['default'];

	var _classCallCheck = __webpack_require__(51)['default'];

	var _extends = __webpack_require__(10)['default'];

	var _interopRequireDefault = __webpack_require__(26)['default'];

	exports.__esModule = true;

	var _classnames = __webpack_require__(27);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _styleMaps = __webpack_require__(35);

	var _utilsBootstrapUtils = __webpack_require__(41);

	var ListGroupItem = (function (_React$Component) {
	  _inherits(ListGroupItem, _React$Component);

	  function ListGroupItem() {
	    _classCallCheck(this, ListGroupItem);

	    _React$Component.apply(this, arguments);
	  }

	  ListGroupItem.prototype.render = function render() {
	    var classes = _utilsBootstrapUtils.getClassSet(this.props);

	    classes.active = this.props.active;
	    classes.disabled = this.props.disabled;

	    if (this.props.href) {
	      return this.renderAnchor(classes);
	    } else if (this.props.onClick) {
	      return this.renderButton(classes);
	    } else if (this.props.listItem) {
	      return this.renderLi(classes);
	    }

	    return this.renderSpan(classes);
	  };

	  ListGroupItem.prototype.renderLi = function renderLi(classes) {
	    return _react2['default'].createElement(
	      'li',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.header ? this.renderStructuredContent() : this.props.children
	    );
	  };

	  ListGroupItem.prototype.renderAnchor = function renderAnchor(classes) {
	    return _react2['default'].createElement(
	      'a',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, classes)
	      }),
	      this.props.header ? this.renderStructuredContent() : this.props.children
	    );
	  };

	  ListGroupItem.prototype.renderButton = function renderButton(classes) {
	    return _react2['default'].createElement(
	      'button',
	      _extends({
	        type: 'button'
	      }, this.props, {
	        className: _classnames2['default'](this.props.className, classes) }),
	      this.props.header ? this.renderStructuredContent() : this.props.children
	    );
	  };

	  ListGroupItem.prototype.renderSpan = function renderSpan(classes) {
	    return _react2['default'].createElement(
	      'span',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.header ? this.renderStructuredContent() : this.props.children
	    );
	  };

	  ListGroupItem.prototype.renderStructuredContent = function renderStructuredContent() {
	    var header = undefined;
	    var headingClass = _utilsBootstrapUtils.prefix(this.props, 'heading');

	    if (_react2['default'].isValidElement(this.props.header)) {
	      header = _react.cloneElement(this.props.header, {
	        key: 'header',
	        className: _classnames2['default'](this.props.header.props.className, headingClass)
	      });
	    } else {
	      header = _react2['default'].createElement(
	        'h4',
	        { key: 'header', className: headingClass },
	        this.props.header
	      );
	    }

	    var content = _react2['default'].createElement(
	      'p',
	      { key: 'content', className: _utilsBootstrapUtils.prefix(this.props, 'text') },
	      this.props.children
	    );

	    return [header, content];
	  };

	  return ListGroupItem;
	})(_react2['default'].Component);

	ListGroupItem.propTypes = {
	  className: _react2['default'].PropTypes.string,
	  active: _react2['default'].PropTypes.any,
	  disabled: _react2['default'].PropTypes.any,
	  header: _react2['default'].PropTypes.node,
	  listItem: _react2['default'].PropTypes.bool,
	  onClick: _react2['default'].PropTypes.func,
	  eventKey: _react2['default'].PropTypes.any,
	  href: _react2['default'].PropTypes.string,
	  target: _react2['default'].PropTypes.string
	};

	ListGroupItem.defaultTypes = {
	  listItem: false
	};

	exports['default'] = _utilsBootstrapUtils.bsStyles(_styleMaps.State.values(), _utilsBootstrapUtils.bsClass('list-group-item', ListGroupItem));
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(26)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	// FIXME: This should really be ValidElementChildren.

	/**
	 * Iterates through children that are typically specified as `props.children`,
	 * but only maps over children that are "valid components".
	 *
	 * The mapFunction provided index will be normalised to the components mapped,
	 * so an invalid component would not increase the index.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func.
	 * @param {*} context Context for func.
	 * @return {object} Object containing the ordered map of results.
	 */
	function map(children, func, context) {
	  var index = 0;

	  return _react2['default'].Children.map(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return child;
	    }

	    return func.call(context, child, index++);
	  });
	}

	/**
	 * Iterates through children that are "valid components".
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child with the index reflecting the position relative to "valid components".
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func.
	 * @param {*} context Context for context.
	 */
	function forEach(children, func, context) {
	  var index = 0;

	  _react2['default'].Children.forEach(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }

	    func.call(context, child, index++);
	  });
	}

	/**
	 * Count the number of "valid components" in the Children container.
	 *
	 * @param {?*} children Children tree container.
	 * @returns {number}
	 */
	function count(children) {
	  var result = 0;

	  _react2['default'].Children.forEach(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }

	    ++result;
	  });

	  return result;
	}

	/**
	 * Finds children that are typically specified as `props.children`,
	 * but only iterates over children that are "valid components".
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child with the index reflecting the position relative to "valid components".
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func.
	 * @param {*} context Context for func.
	 * @returns {array} of children that meet the func return statement
	 */
	function filter(children, func, context) {
	  var index = 0;
	  var result = [];

	  _react2['default'].Children.forEach(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }

	    if (func.call(context, child, index++)) {
	      result.push(child);
	    }
	  });

	  return result;
	}

	function find(children, func, context) {
	  var index = 0;
	  var result = undefined;

	  _react2['default'].Children.forEach(children, function (child) {
	    if (result) {
	      return;
	    }
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }

	    if (func.call(context, child, index++)) {
	      result = child;
	    }
	  });

	  return result;
	}

	function some(children, func, context) {
	  var index = 0;
	  var result = false;

	  _react2['default'].Children.forEach(children, function (child) {
	    if (result) {
	      return;
	    }
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }

	    if (func.call(context, child, index++)) {
	      result = true;
	    }
	  });

	  return result;
	}

	exports['default'] = {
	  map: map,
	  forEach: forEach,
	  count: count,
	  find: find,
	  filter: filter,
	  some: some
	};
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Row = __webpack_require__(38);

	var _Row2 = _interopRequireDefault(_Row);

	var _intro = __webpack_require__(70);

	var _intro2 = _interopRequireDefault(_intro);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(4);

	var Tutorial1 = function (_React$Component) {
	    _inherits(Tutorial1, _React$Component);

	    function Tutorial1() {
	        _classCallCheck(this, Tutorial1);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tutorial1).apply(this, arguments));
	    }

	    _createClass(Tutorial1, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _Row2.default,
	                { className: 'show-grid' },
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _intro2.default } })
	            );
	        }
	    }]);

	    return Tutorial1;
	}(React.Component);

	exports.default = Tutorial1;

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<h2 id=\"how-do-we-style-a-map-\">How do we style a map?</h2>\n<p>Tangram maps are styled using a custom styling syntax inside of a <strong>scene file</strong>. The scene file is a YAML document which organizes all of the elements Tangram uses to draw a map. This file describes a hierarchy of objects which control every aspect of your map, including data sources, feature layers, lights, cameras, textures, and more.</p>\n<p>Why YAML? Well, YAML is a data format similar in many ways to JSON, but it has some unique features which we thought made it more friendly and easy to use for our purposes.</p>\n<p>Im this tutorial, you will become familiar with the syntax, rules, and capabilities of the Tangram rendering engine, meaning you&#39;ll be able to write valid YAML documents that contain the rules required to style 2D and 3D maps.</p>\n<div class='alert-message'>\nYellow call-outs like this are meant to draw your attention to an important idea or distinction you should keep in mind.\n</div>\n";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Tutorial22 = exports.Tutorial21 = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Row = __webpack_require__(38);

	var _Row2 = _interopRequireDefault(_Row);

	var _TangramPlay = __webpack_require__(72);

	var _TangramPlay2 = _interopRequireDefault(_TangramPlay);

	var _min = __webpack_require__(73);

	var _min2 = _interopRequireDefault(_min);

	var _min3 = __webpack_require__(74);

	var _min4 = _interopRequireDefault(_min3);

	var _min5 = __webpack_require__(75);

	var _min6 = _interopRequireDefault(_min5);

	var _min7 = __webpack_require__(76);

	var _min8 = _interopRequireDefault(_min7);

	var _min9 = __webpack_require__(77);

	var _min10 = _interopRequireDefault(_min9);

	var _links = __webpack_require__(78);

	var _links2 = _interopRequireDefault(_links);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(4);

	var Tutorial21 = exports.Tutorial21 = function (_React$Component) {
	    _inherits(Tutorial21, _React$Component);

	    function Tutorial21() {
	        _classCallCheck(this, Tutorial21);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tutorial21).apply(this, arguments));
	    }

	    _createClass(Tutorial21, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _Row2.default,
	                { className: 'show-grid' },
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _min2.default } }),
	                React.createElement(_TangramPlay2.default, { url: _links2.default.min }),
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _min4.default } })
	            );
	        }
	    }]);

	    return Tutorial21;
	}(React.Component);

	var Tutorial22 = exports.Tutorial22 = function (_React$Component2) {
	    _inherits(Tutorial22, _React$Component2);

	    function Tutorial22() {
	        _classCallCheck(this, Tutorial22);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tutorial22).apply(this, arguments));
	    }

	    _createClass(Tutorial22, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _Row2.default,
	                { className: 'show-grid' },
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _min6.default } }),
	                React.createElement(_TangramPlay2.default, { url: _links2.default.layers }),
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _min8.default } }),
	                React.createElement(_TangramPlay2.default, { url: _links2.default.layers2 }),
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _min10.default } }),
	                React.createElement(_TangramPlay2.default, { url: _links2.default.layers3 }),
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _min10.default } })
	            );
	        }
	    }]);

	    return Tutorial22;
	}(React.Component);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Represents an icon that receives a 'type' prop indicating how it should look
	 * as well as an optional 'active' prop indicating whether icon should be active
	 */

	var TangramPlay = function (_React$Component) {
	    _inherits(TangramPlay, _React$Component);

	    function TangramPlay() {
	        _classCallCheck(this, TangramPlay);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TangramPlay).apply(this, arguments));
	    }

	    _createClass(TangramPlay, [{
	        key: "render",

	        /**
	         * Official React lifecycle method
	         * Called every time state or props are changed
	         */
	        value: function render() {
	            return _react2.default.createElement("iframe", { width: "100%", height: "700px", frameborder: "0", allowfullscreen: true, src: this.props.url });
	        }
	    }]);

	    return TangramPlay;
	}(_react2.default.Component);

	/**
	 * Prop validation required by React
	 */


	exports.default = TangramPlay;
	TangramPlay.propTypes = {
	    url: _react2.default.PropTypes.string
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<h2 id=\"what-is-the-minimum-map-i-can-build-\">What is the minimum map I can build?</h2>\n<p>Let&#39;s get right to it and style the most basic map we can build with Tangram.</p>\n<p>To create a map, the scene file requires only:</p>\n<ul>\n<li>a data source (vector tiles)</li>\n<li>data interpretation rules (filters)</li>\n<li>styling rules (how the data should look on the map)</li>\n</ul>\n<div class='alert-message'>\nWe&#39;ll be using a special app that embeds Tangram code on the right and a Leaflet/Tangram map on the left to instantly view the results of our scene file. Take a look below!\n</div>\n";

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<p>Let&#39;s unpack this example. First of all, note that our <code>sources</code> and <code>layers</code> blocks are required elements for all valid Tangram scene files. Try commenting them out with <code>#</code> to see what happens. You should see the map on the left go black.</p>\n<h3 id=\"data-sources\">Data sources</h3>\n<p>Let&#39;s talk about the <code>sources</code> block first. As the word indicates, this is the place where we define our data sources and tell the Tangram engine where to get its vector tiles from. The block takes only one type of parameter, a <strong>source name</strong>.</p>\n<pre><code class=\"language-yaml\">sources:\n    &#95;mapzen: # A source name\n        type: GeoJSON\n        url: https://tangrams.github.io/tangram-tutorial/tangram-tutorial-files/countries.geojson\n</code></pre>\n\n<p>The source name is important because you will need to use it elsewhere in the Tangram scene file. Think of it as a variable name that you can refer to again and again throughout the scene file. The <code>sources</code> block can take any number of source names, and each of those can be named anyway you&#39;d like.</p>\n<pre><code class=\"language-yaml\">sources:\n    &#95;stamen: # A source name\n        type: Raster\n        url: http://a.tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg\n    &#95;mapzen: # Another source name\n        type: GeoJSON\n        url: https://tangrams.github.io/tangram-tutorial/tangram-tutorial-files/countries.geojson\n</code></pre>\n\n<div class='alert-message'>For this tutorial, non-required variable names will be prepended with a <code>_</code> to avoid confusion with reserved keywords.\nIn the example above <code>_stamen</code> and <code>_mapzen</code> can be thought of as variable names. Instead, <code>sources</code> and <code>layers</code> are reserved keywords.</div>\n\n<p>Each source name in turn requires two pieces of information:</p>\n<ul>\n<li>a <code>type</code>: the type of the datasource. It can be any one of four options:<ul>\n<li><code>TopoJSON</code></li>\n<li><code>GeoJSON</code></li>\n<li><code>MVT</code> (Mapbox Vector Tiles)</li>\n<li><code>Raster</code></li>\n</ul>\n</li>\n<li>a <code>url</code>: the data source&#39;s url</li>\n</ul>\n<p><br></p>\n";

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<h3 id=\"data-interpretation-and-styling\">Data interpretation and styling</h3>\n<p>So how will we be using the data we just imported? Let&#39;s start by unpacking what we&#39;ve written in the <code>layers</code> block. Vector tiles typically contain top-level structures which can be thought of as “layers” – inside a GeoJSON file, these would be the FeatureCollection objects. Inside a Tangram scene file, the layers object allows you to split the data by layer, by matching against the layer name.</p>\n";

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<p>Now let&#39;s actually take a look at our data source, in this case\n<a href='https://tangrams.github.io/tangram-tutorial/tangram-tutorial-files/countries-data.geojson'\ntarget='&#95;blank'>https://tangrams.github.io/tangram-tutorial/tangram-tutorial-files/countries-data.geojson</a>. This is just a simple geojson file that represents every country in the world as a polygon or multipolygon. This code shows a small part of the file (note replacements where we&#39;ve simplified the file with <code>[...]</code>):</p>\n<p><pre><code class=\"language-json\">{\n    &quot;countries&quot;: {\n        &quot;type&quot;: &quot;FeatureCollection&quot;,\n        &quot;features&quot;: [\n            {\n                &quot;type&quot;: &quot;Feature&quot;,\n                &quot;id&quot;: &quot;ARG&quot;,\n                &quot;properties&quot;: {\n                    &quot;name&quot;: &quot;Argentina&quot;,\n                    [...more properties...]\n                },\n                &quot;geometry&quot;: {\n                    &quot;type&quot;: &quot;MultiPolygon&quot;,\n                    &quot;coordinates&quot;: [...coordinates...]\n                }\n            },\n            {\n                &quot;type&quot;: &quot;Feature&quot;,\n                &quot;id&quot;: &quot;AUS&quot;,\n                &quot;properties&quot;: {\n                    &quot;name&quot;: &quot;Australia&quot;,\n                    [...more properties...]\n                },\n                &quot;geometry&quot;: {\n                    &quot;type&quot;: &quot;MultiPolygon&quot;,\n                    &quot;coordinates&quot;: [...coordinates...]\n                }\n            },\n            [...other countries...]\n        ]\n    }\n}\n</pre></code></p>\n<div class='alert-message'>\nAn explanation of the GeoJSON and TopoJSON standards is beyond the scope of this tutorial. For a good resource check out: <a href=\"http://www.macwright.org/2015/03/23/geojson-second-bite.html\">http://www.macwright.org/2015/03/23/geojson-second-bite.html</a>\n</div>\n\n<p>Note that we are specifying what layer name to match against on the highlighted line 12 in the next example. Try editing the Tangram scene file yourself on lines 8 and 12.</p>\n<p><pre><code class=\"language-yaml\">&#95;countryLayer:\n        data:\n            source: &#95;mapzen\n            layer: countries # matching to the &#39;countries&#39; layer in the geojson file\n</pre></code></p>\n";

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<p>What else is going on here? How are we styling the countries layer? We are specifying how to display the countries layer within the <code>draw</code> element.</p>\n<p><pre><code class=\"language-yaml\">draw:\n    &#95;countryStyle: # We&#39;re giving this draw group a name &#39;&#95;countryStyle&#39;\n        style: polygons # Tangram comes with a prebuilt set of styles for different data types: points, polygons, lines, text, and raster\n        color: darkgreen # The color of the layer we are drawing\n</pre></code></p>\n<p>How do we know what style to apply to what data? Well our geojson file contains some clues. Take another look at the file:</p>\n<p><pre><code class=\"language-json\">[...]\n{\n    &quot;type&quot;: &quot;Feature&quot;,\n    &quot;id&quot;: &quot;ARG&quot;,\n    &quot;properties&quot;: {\n        &quot;name&quot;: &quot;Argentina&quot;,\n        [...more properties...]\n    },\n    &quot;geometry&quot;: {\n        &quot;type&quot;: &quot;MultiPolygon&quot;,\n        &quot;coordinates&quot;: [...coordinates...]\n    }\n}\n[...]\n</pre></code></p>\n<p>Each country is composed of a geometry which in this case is of type <code>MultiPolygon</code> but following the geojson specs could be a <code>Point</code>, <code>LineString</code>, <code>Polygon</code>, <code>MultiPoint</code>, or <code>MultiLineString</code>. Since each country is a multipolygon, we&#39;re styling the &#39;countries&#39; layer with a <code>polygon</code> style. Try changing the styles in the following scene file to see what happens:</p>\n";

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var tangramplayurl = 'https://precog.mapzen.com/tangrams/tangram-play/tangram-tutorial/?scene=';
	var tutorialurl = 'https://tangrams.github.io/tangram-tutorial/tangram-tutorial-files/';
	var baseurl = tangramplayurl + tutorialurl;

	var examples = {
	    min: baseurl + 'min.yaml',
	    layers: baseurl + 'layers.yaml',
	    layers2: baseurl + 'layers2.yaml' + '&lines=12',
	    layers3: baseurl + 'layers3.yaml' + '&lines=13',
	    styling: baseurl + 'styling.yaml' + '&lines=18-19',
	    styling2: baseurl + 'styling2.yaml' + '&lines=15',
	    filters: baseurl + 'filters.yaml' + '&lines=11-17'
	};

	exports.default = examples;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Row = __webpack_require__(38);

	var _Row2 = _interopRequireDefault(_Row);

	var _TangramPlay = __webpack_require__(72);

	var _TangramPlay2 = _interopRequireDefault(_TangramPlay);

	var _styling = __webpack_require__(80);

	var _styling2 = _interopRequireDefault(_styling);

	var _styling3 = __webpack_require__(81);

	var _styling4 = _interopRequireDefault(_styling3);

	var _links = __webpack_require__(78);

	var _links2 = _interopRequireDefault(_links);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(4);

	var Tutorial3 = function (_React$Component) {
	    _inherits(Tutorial3, _React$Component);

	    function Tutorial3() {
	        _classCallCheck(this, Tutorial3);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tutorial3).apply(this, arguments));
	    }

	    _createClass(Tutorial3, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _Row2.default,
	                { className: 'show-grid' },
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _styling2.default } }),
	                React.createElement(_TangramPlay2.default, { url: _links2.default.styling }),
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _styling4.default } }),
	                React.createElement(_TangramPlay2.default, { url: _links2.default.styling2 })
	            );
	        }
	    }]);

	    return Tutorial3;
	}(React.Component);

	exports.default = Tutorial3;

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "<h2 id=\"a-few-more-styling-rules\">A few more styling rules</h2>\n<p>Let&#39;s talk about styling with <code>lines</code> by adding country borders. Since our geojson represents each country as a polygon or multipolygon, we know that there are edges (or lines) in between each vertex (or point). We can use the <code>lines</code> style to draw these borders. And since we&#39;re using the same layer of data (&#39;countries&#39;), we can simply declare a new style under the <code>draw</code> block.</p>\n";

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<p>Let&#39;s introduce one more styling rule before we jump into data filters. <code>order</code> is a parameter that sets the drawing order of the draw style. It is meant to be used in cases where layers cover the same pixel space, meaning that one layer will take precedence over another when they get drawn. You can use the <code>order</code> parameter to specify which higher-ordered layers should be drawn over lower-ordered layers. Try the exercise below:</p>\n";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Row = __webpack_require__(38);

	var _Row2 = _interopRequireDefault(_Row);

	var _TangramPlay = __webpack_require__(72);

	var _TangramPlay2 = _interopRequireDefault(_TangramPlay);

	var _filters = __webpack_require__(83);

	var _filters2 = _interopRequireDefault(_filters);

	var _links = __webpack_require__(78);

	var _links2 = _interopRequireDefault(_links);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(4);

	var Tutorial4 = function (_React$Component) {
	    _inherits(Tutorial4, _React$Component);

	    function Tutorial4() {
	        _classCallCheck(this, Tutorial4);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tutorial4).apply(this, arguments));
	    }

	    _createClass(Tutorial4, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _Row2.default,
	                { className: 'show-grid' },
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _filters2.default } }),
	                React.createElement(_TangramPlay2.default, { url: _links2.default.filters })
	            );
	        }
	    }]);

	    return Tutorial4;
	}(React.Component);

	exports.default = Tutorial4;

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<h2 id=\"data-filters\">Data filters</h2>\n<p>Great, so we have a map that displays all the countries in the world. We can add some data filters and more styling rules to make the map more interesting. To do this, we&#39;ll add a <code>filter</code> block to our <code>layer</code>. Each feature in a <code>layer</code> is first tested against each top-level <code>filter</code>, and if the feature’s data matches the filter, that feature will be assigned any associated draw styles. </p>\n";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Row = __webpack_require__(38);

	var _Row2 = _interopRequireDefault(_Row);

	var _TangramPlay = __webpack_require__(72);

	var _TangramPlay2 = _interopRequireDefault(_TangramPlay);

	var _tiles = __webpack_require__(85);

	var _tiles2 = _interopRequireDefault(_tiles);

	var _conclusion = __webpack_require__(86);

	var _conclusion2 = _interopRequireDefault(_conclusion);

	var _links = __webpack_require__(78);

	var _links2 = _interopRequireDefault(_links);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(4);

	var Tutorial4 = function (_React$Component) {
	    _inherits(Tutorial4, _React$Component);

	    function Tutorial4() {
	        _classCallCheck(this, Tutorial4);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tutorial4).apply(this, arguments));
	    }

	    _createClass(Tutorial4, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                _Row2.default,
	                { className: 'show-grid' },
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _tiles2.default } }),
	                React.createElement('div', { dangerouslySetInnerHTML: { __html: _conclusion2.default } })
	            );
	        }
	    }]);

	    return Tutorial4;
	}(React.Component);

	exports.default = Tutorial4;

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "<h2 id=\"vector-vs-raster-tiles\">Vector vs. Raster Tiles</h2>\n";

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "<p>TODO:</p>\n<ul>\n<li>how do i know they are polygons?</li>\n<li>filter other things that are not &#39;properties&#39; - like id in this example</li>\n<li>include something about inheritance</li>\n<li>order doesn&#39;t seem to matter within a group. why do we use order:</li>\n</ul>\n<h2 id=\"concluding-thoughts\">Concluding Thoughts</h2>\n<ul>\n<li>clarify that available for ES and JS flavors - same grammar</li>\n<li>link to other examples/demos</li>\n<li>link to how to host a map or Mapzen JS? --&gt; critical next steps</li>\n<li>a note about API keys</li>\n</ul>\n";

/***/ }
/******/ ]);