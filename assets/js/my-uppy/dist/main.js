/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@uppy/companion-client/lib/Provider.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/Provider.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequestClient = __webpack_require__(/*! ./RequestClient */ "./node_modules/@uppy/companion-client/lib/RequestClient.js");

var _getName = function _getName(id) {
  return id.split('-').map(function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }).join(' ');
};

module.exports = function (_RequestClient) {
  _inherits(Provider, _RequestClient);

  function Provider(uppy, opts) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, _RequestClient.call(this, uppy, opts));

    _this.provider = opts.provider;
    _this.id = _this.provider;
    _this.authProvider = opts.authProvider || _this.provider;
    _this.name = _this.opts.name || _getName(_this.id);
    _this.tokenKey = 'companion-' + _this.id + '-auth-token';
    return _this;
  }

  // @todo(i.olarewaju) consider whether or not this method should be exposed
  Provider.prototype.setAuthToken = function setAuthToken(token) {
    // @todo(i.olarewaju) add fallback for OOM storage
    localStorage.setItem(this.tokenKey, token);
  };

  Provider.prototype.checkAuth = function checkAuth() {
    return this.get(this.id + '/authorized').then(function (payload) {
      return payload.authenticated;
    });
  };

  Provider.prototype.authUrl = function authUrl() {
    return this.hostname + '/' + this.id + '/connect';
  };

  Provider.prototype.fileUrl = function fileUrl(id) {
    return this.hostname + '/' + this.id + '/get/' + id;
  };

  Provider.prototype.list = function list(directory) {
    return this.get(this.id + '/list/' + (directory || ''));
  };

  Provider.prototype.logout = function logout() {
    var _this2 = this;

    var redirect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;

    return this.get(this.id + '/logout?redirect=' + redirect).then(function (res) {
      localStorage.removeItem(_this2.tokenKey);
      return res;
    });
  };

  Provider.initPlugin = function initPlugin(plugin, opts, defaultOpts) {
    plugin.type = 'acquirer';
    plugin.files = [];
    if (defaultOpts) {
      plugin.opts = _extends({}, defaultOpts, opts);
    }
    if (opts.serverPattern) {
      var pattern = opts.serverPattern;
      // validate serverPattern param
      if (typeof pattern !== 'string' && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
        throw new TypeError(plugin.id + ': the option "serverPattern" must be one of string, Array, RegExp');
      }
      plugin.opts.serverPattern = pattern;
    } else {
      // does not start with https://
      if (/^(?!https?:\/\/).*$/.test(opts.serverUrl)) {
        plugin.opts.serverPattern = location.protocol + '//' + opts.serverUrl.replace(/^\/\//, '');
      } else {
        plugin.opts.serverPattern = opts.serverUrl;
      }
    }
  };

  _createClass(Provider, [{
    key: 'defaultHeaders',
    get: function get() {
      return _extends({}, _RequestClient.prototype.defaultHeaders, { 'uppy-auth-token': localStorage.getItem(this.tokenKey) });
    }
  }]);

  return Provider;
}(RequestClient);

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/RequestClient.js":
/*!******************************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/RequestClient.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Remove the trailing slash so we can always safely append /xyz.

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function stripSlash(url) {
  return url.replace(/\/$/, '');
}

module.exports = function () {
  function RequestClient(uppy, opts) {
    _classCallCheck(this, RequestClient);

    this.uppy = uppy;
    this.opts = opts;
    this.onReceiveResponse = this.onReceiveResponse.bind(this);
  }

  RequestClient.prototype.onReceiveResponse = function onReceiveResponse(response) {
    var state = this.uppy.getState();
    var companion = state.companion || {};
    var host = this.opts.serverUrl;
    var headers = response.headers;
    // Store the self-identified domain name for the Companion instance we just hit.
    if (headers.has('i-am') && headers.get('i-am') !== companion[host]) {
      var _extends2;

      this.uppy.setState({
        companion: _extends({}, companion, (_extends2 = {}, _extends2[host] = headers.get('i-am'), _extends2))
      });
    }
    return response;
  };

  RequestClient.prototype._getUrl = function _getUrl(url) {
    if (/^(https?:|)\/\//.test(url)) {
      return url;
    }
    return this.hostname + '/' + url;
  };

  RequestClient.prototype.get = function get(path) {
    var _this = this;

    return fetch(this._getUrl(path), {
      method: 'get',
      headers: this.headers,
      credentials: 'same-origin'
    })
    // @todo validate response status before calling json
    .then(this.onReceiveResponse).then(function (res) {
      return res.json();
    }).catch(function (err) {
      throw new Error('Could not get ' + _this._getUrl(path) + '. ' + err);
    });
  };

  RequestClient.prototype.post = function post(path, data) {
    var _this2 = this;

    return fetch(this._getUrl(path), {
      method: 'post',
      headers: this.headers,
      credentials: 'same-origin',
      body: JSON.stringify(data)
    }).then(this.onReceiveResponse).then(function (res) {
      if (res.status < 200 || res.status > 300) {
        throw new Error('Could not post ' + _this2._getUrl(path) + '. ' + res.statusText);
      }
      return res.json();
    }).catch(function (err) {
      throw new Error('Could not post ' + _this2._getUrl(path) + '. ' + err);
    });
  };

  RequestClient.prototype.delete = function _delete(path, data) {
    var _this3 = this;

    return fetch(this.hostname + '/' + path, {
      method: 'delete',
      headers: this.headers,
      credentials: 'same-origin',
      body: data ? JSON.stringify(data) : null
    }).then(this.onReceiveResponse)
    // @todo validate response status before calling json
    .then(function (res) {
      return res.json();
    }).catch(function (err) {
      throw new Error('Could not delete ' + _this3._getUrl(path) + '. ' + err);
    });
  };

  _createClass(RequestClient, [{
    key: 'hostname',
    get: function get() {
      var _uppy$getState = this.uppy.getState(),
          companion = _uppy$getState.companion;

      var host = this.opts.serverUrl;
      return stripSlash(companion && companion[host] ? companion[host] : host);
    }
  }, {
    key: 'defaultHeaders',
    get: function get() {
      return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
    }
  }, {
    key: 'headers',
    get: function get() {
      return _extends({}, this.defaultHeaders, this.opts.serverHeaders || {});
    }
  }]);

  return RequestClient;
}();

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/Socket.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/Socket.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ee = __webpack_require__(/*! namespace-emitter */ "./node_modules/namespace-emitter/index.js");

module.exports = function () {
  function UppySocket(opts) {
    var _this = this;

    _classCallCheck(this, UppySocket);

    this.queued = [];
    this.isOpen = false;
    this.socket = new WebSocket(opts.target);
    this.emitter = ee();

    this.socket.onopen = function (e) {
      _this.isOpen = true;

      while (_this.queued.length > 0 && _this.isOpen) {
        var first = _this.queued[0];
        _this.send(first.action, first.payload);
        _this.queued = _this.queued.slice(1);
      }
    };

    this.socket.onclose = function (e) {
      _this.isOpen = false;
    };

    this._handleMessage = this._handleMessage.bind(this);

    this.socket.onmessage = this._handleMessage;

    this.close = this.close.bind(this);
    this.emit = this.emit.bind(this);
    this.on = this.on.bind(this);
    this.once = this.once.bind(this);
    this.send = this.send.bind(this);
  }

  UppySocket.prototype.close = function close() {
    return this.socket.close();
  };

  UppySocket.prototype.send = function send(action, payload) {
    // attach uuid

    if (!this.isOpen) {
      this.queued.push({ action: action, payload: payload });
      return;
    }

    this.socket.send(JSON.stringify({
      action: action,
      payload: payload
    }));
  };

  UppySocket.prototype.on = function on(action, handler) {
    this.emitter.on(action, handler);
  };

  UppySocket.prototype.emit = function emit(action, payload) {
    this.emitter.emit(action, payload);
  };

  UppySocket.prototype.once = function once(action, handler) {
    this.emitter.once(action, handler);
  };

  UppySocket.prototype._handleMessage = function _handleMessage(e) {
    try {
      var message = JSON.parse(e.data);
      this.emit(message.action, message.payload);
    } catch (err) {
      console.log(err);
    }
  };

  return UppySocket;
}();

/***/ }),

/***/ "./node_modules/@uppy/companion-client/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uppy/companion-client/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

'use-strict';
/**
 * Manages communications with Companion
 */

var RequestClient = __webpack_require__(/*! ./RequestClient */ "./node_modules/@uppy/companion-client/lib/RequestClient.js");
var Provider = __webpack_require__(/*! ./Provider */ "./node_modules/@uppy/companion-client/lib/Provider.js");
var Socket = __webpack_require__(/*! ./Socket */ "./node_modules/@uppy/companion-client/lib/Socket.js");

module.exports = {
  RequestClient: RequestClient,
  Provider: Provider,
  Socket: Socket
};

/***/ }),

/***/ "./node_modules/@uppy/core/lib/Plugin.js":
/*!***********************************************!*\
  !*** ./node_modules/@uppy/core/lib/Plugin.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var preact = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
var findDOMElement = __webpack_require__(/*! @uppy/utils/lib/findDOMElement */ "./node_modules/@uppy/utils/lib/findDOMElement.js");

/**
 * Defer a frequent call to the microtask queue.
 */
function debounce(fn) {
  var calling = null;
  var latestArgs = null;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    latestArgs = args;
    if (!calling) {
      calling = Promise.resolve().then(function () {
        calling = null;
        // At this point `args` may be different from the most
        // recent state, if multiple calls happened since this task
        // was queued. So we use the `latestArgs`, which definitely
        // is the most recent call.
        return fn.apply(undefined, latestArgs);
      });
    }
    return calling;
  };
}

/**
 * Boilerplate that all Plugins share - and should not be used
 * directly. It also shows which methods final plugins should implement/override,
 * this deciding on structure.
 *
 * @param {object} main Uppy core object
 * @param {object} object with plugin options
 * @return {array | string} files or success/fail message
 */
module.exports = function () {
  function Plugin(uppy, opts) {
    _classCallCheck(this, Plugin);

    this.uppy = uppy;
    this.opts = opts || {};

    this.update = this.update.bind(this);
    this.mount = this.mount.bind(this);
    this.install = this.install.bind(this);
    this.uninstall = this.uninstall.bind(this);
  }

  Plugin.prototype.getPluginState = function getPluginState() {
    var _uppy$getState = this.uppy.getState(),
        plugins = _uppy$getState.plugins;

    return plugins[this.id] || {};
  };

  Plugin.prototype.setPluginState = function setPluginState(update) {
    var _extends2;

    var _uppy$getState2 = this.uppy.getState(),
        plugins = _uppy$getState2.plugins;

    this.uppy.setState({
      plugins: _extends({}, plugins, (_extends2 = {}, _extends2[this.id] = _extends({}, plugins[this.id], update), _extends2))
    });
  };

  Plugin.prototype.update = function update(state) {
    if (typeof this.el === 'undefined') {
      return;
    }

    if (this._updateUI) {
      this._updateUI(state);
    }
  };

  /**
  * Called when plugin is mounted, whether in DOM or into another plugin.
  * Needed because sometimes plugins are mounted separately/after `install`,
  * so this.el and this.parent might not be available in `install`.
  * This is the case with @uppy/react plugins, for example.
  */


  Plugin.prototype.onMount = function onMount() {};

  /**
   * Check if supplied `target` is a DOM element or an `object`.
   * If it’s an object — target is a plugin, and we search `plugins`
   * for a plugin with same name and return its target.
   *
   * @param {String|Object} target
   *
   */


  Plugin.prototype.mount = function mount(target, plugin) {
    var _this = this;

    var callerPluginName = plugin.id;

    var targetElement = findDOMElement(target);

    if (targetElement) {
      this.isTargetDOMEl = true;

      // API for plugins that require a synchronous rerender.
      this.rerender = function (state) {
        // plugin could be removed, but this.rerender is debounced below,
        // so it could still be called even after uppy.removePlugin or uppy.close
        // hence the check
        if (!_this.uppy.getPlugin(_this.id)) return;
        _this.el = preact.render(_this.render(state), targetElement, _this.el);
      };
      this._updateUI = debounce(this.rerender);

      this.uppy.log('Installing ' + callerPluginName + ' to a DOM element');

      // clear everything inside the target container
      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = '';
      }

      this.el = preact.render(this.render(this.uppy.getState()), targetElement);

      this.onMount();
      return this.el;
    }

    var targetPlugin = void 0;
    if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target instanceof Plugin) {
      // Targeting a plugin *instance*
      targetPlugin = target;
    } else if (typeof target === 'function') {
      // Targeting a plugin type
      var Target = target;
      // Find the target plugin instance.
      this.uppy.iteratePlugins(function (plugin) {
        if (plugin instanceof Target) {
          targetPlugin = plugin;
          return false;
        }
      });
    }

    if (targetPlugin) {
      this.uppy.log('Installing ' + callerPluginName + ' to ' + targetPlugin.id);
      this.parent = targetPlugin;
      this.el = targetPlugin.addTarget(plugin);

      this.onMount();
      return this.el;
    }

    this.uppy.log('Not installing ' + callerPluginName);
    throw new Error('Invalid target option given to ' + callerPluginName + '. Please make sure that the element \n      exists on the page, or that the plugin you are targeting has been installed. Check that the <script> tag initializing Uppy \n      comes at the bottom of the page, before the closing </body> tag (see https://github.com/transloadit/uppy/issues/1042).');
  };

  Plugin.prototype.render = function render(state) {
    throw new Error('Extend the render method to add your plugin to a DOM element');
  };

  Plugin.prototype.addTarget = function addTarget(plugin) {
    throw new Error('Extend the addTarget method to add your plugin to another plugin\'s target');
  };

  Plugin.prototype.unmount = function unmount() {
    if (this.isTargetDOMEl && this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
  };

  Plugin.prototype.install = function install() {};

  Plugin.prototype.uninstall = function uninstall() {
    this.unmount();
  };

  return Plugin;
}();

/***/ }),

/***/ "./node_modules/@uppy/core/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@uppy/core/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");
var ee = __webpack_require__(/*! namespace-emitter */ "./node_modules/namespace-emitter/index.js");
var cuid = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
// const throttle = require('lodash.throttle')
var prettyBytes = __webpack_require__(/*! prettier-bytes */ "./node_modules/prettier-bytes/index.js");
var match = __webpack_require__(/*! mime-match */ "./node_modules/mime-match/index.js");
var DefaultStore = __webpack_require__(/*! @uppy/store-default */ "./node_modules/@uppy/store-default/lib/index.js");
var getFileType = __webpack_require__(/*! @uppy/utils/lib/getFileType */ "./node_modules/@uppy/utils/lib/getFileType.js");
var getFileNameAndExtension = __webpack_require__(/*! @uppy/utils/lib/getFileNameAndExtension */ "./node_modules/@uppy/utils/lib/getFileNameAndExtension.js");
var generateFileID = __webpack_require__(/*! @uppy/utils/lib/generateFileID */ "./node_modules/@uppy/utils/lib/generateFileID.js");
var getTimeStamp = __webpack_require__(/*! @uppy/utils/lib/getTimeStamp */ "./node_modules/@uppy/utils/lib/getTimeStamp.js");
var Plugin = __webpack_require__(/*! ./Plugin */ "./node_modules/@uppy/core/lib/Plugin.js"); // Exported from here.

/**
 * Uppy Core module.
 * Manages plugins, state updates, acts as an event bus,
 * adds/removes files and metadata.
 */

var Uppy = function () {
  /**
  * Instantiate Uppy
  * @param {object} opts — Uppy options
  */
  function Uppy(opts) {
    var _this = this;

    _classCallCheck(this, Uppy);

    var defaultLocale = {
      strings: {
        youCanOnlyUploadX: {
          0: 'You can only upload %{smart_count} file',
          1: 'You can only upload %{smart_count} files'
        },
        youHaveToAtLeastSelectX: {
          0: 'You have to select at least %{smart_count} file',
          1: 'You have to select at least %{smart_count} files'
        },
        exceedsSize: 'This file exceeds maximum allowed size of',
        youCanOnlyUploadFileTypes: 'You can only upload:',
        companionError: 'Connection with Companion failed',
        failedToUpload: 'Failed to upload %{file}',
        noInternetConnection: 'No Internet connection',
        connectedToInternet: 'Connected to the Internet',
        // Strings for remote providers
        noFilesFound: 'You have no files or folders here',
        selectXFiles: {
          0: 'Select %{smart_count} file',
          1: 'Select %{smart_count} files'
        },
        cancel: 'Cancel',
        logOut: 'Log out'
      }

      // set default options
    };var defaultOptions = {
      id: 'uppy',
      autoProceed: false,
      allowMultipleUploads: true,
      debug: false,
      restrictions: {
        maxFileSize: null,
        maxNumberOfFiles: null,
        minNumberOfFiles: null,
        allowedFileTypes: null
      },
      meta: {},
      onBeforeFileAdded: function onBeforeFileAdded(currentFile, files) {
        return currentFile;
      },
      onBeforeUpload: function onBeforeUpload(files) {
        return files;
      },
      locale: defaultLocale,
      store: DefaultStore()

      // Merge default options with the ones set by user
    };this.opts = _extends({}, defaultOptions, opts);
    this.opts.restrictions = _extends({}, defaultOptions.restrictions, this.opts.restrictions);

    // i18n
    this.translator = new Translator([defaultLocale, this.opts.locale]);
    this.locale = this.translator.locale;
    this.i18n = this.translator.translate.bind(this.translator);

    // Container for different types of plugins
    this.plugins = {};

    this.getState = this.getState.bind(this);
    this.getPlugin = this.getPlugin.bind(this);
    this.setFileMeta = this.setFileMeta.bind(this);
    this.setFileState = this.setFileState.bind(this);
    this.log = this.log.bind(this);
    this.info = this.info.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
    this.addFile = this.addFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.pauseResume = this.pauseResume.bind(this);
    this._calculateProgress = this._calculateProgress.bind(this);
    this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
    this.resetProgress = this.resetProgress.bind(this);

    this.pauseAll = this.pauseAll.bind(this);
    this.resumeAll = this.resumeAll.bind(this);
    this.retryAll = this.retryAll.bind(this);
    this.cancelAll = this.cancelAll.bind(this);
    this.retryUpload = this.retryUpload.bind(this);
    this.upload = this.upload.bind(this);

    this.emitter = ee();
    this.on = this.on.bind(this);
    this.off = this.off.bind(this);
    this.once = this.emitter.once.bind(this.emitter);
    this.emit = this.emitter.emit.bind(this.emitter);

    this.preProcessors = [];
    this.uploaders = [];
    this.postProcessors = [];

    this.store = this.opts.store;
    this.setState({
      plugins: {},
      files: {},
      currentUploads: {},
      allowNewUpload: true,
      capabilities: {
        resumableUploads: false
      },
      totalProgress: 0,
      meta: _extends({}, this.opts.meta),
      info: {
        isHidden: true,
        type: 'info',
        message: ''
      }
    });

    this._storeUnsubscribe = this.store.subscribe(function (prevState, nextState, patch) {
      _this.emit('state-update', prevState, nextState, patch);
      _this.updateAll(nextState);
    });

    // for debugging and testing
    // this.updateNum = 0
    if (this.opts.debug && typeof window !== 'undefined') {
      window['uppyLog'] = '';
      window[this.opts.id] = this;
    }

    this._addListeners();
  }

  Uppy.prototype.on = function on(event, callback) {
    this.emitter.on(event, callback);
    return this;
  };

  Uppy.prototype.off = function off(event, callback) {
    this.emitter.off(event, callback);
    return this;
  };

  /**
   * Iterate on all plugins and run `update` on them.
   * Called each time state changes.
   *
   */


  Uppy.prototype.updateAll = function updateAll(state) {
    this.iteratePlugins(function (plugin) {
      plugin.update(state);
    });
  };

  /**
   * Updates state with a patch
   *
   * @param {object} patch {foo: 'bar'}
   */


  Uppy.prototype.setState = function setState(patch) {
    this.store.setState(patch);
  };

  /**
   * Returns current state.
   * @return {object}
   */


  Uppy.prototype.getState = function getState() {
    return this.store.getState();
  };

  /**
  * Back compat for when uppy.state is used instead of uppy.getState().
  */


  /**
  * Shorthand to set state for a specific file.
  */
  Uppy.prototype.setFileState = function setFileState(fileID, state) {
    var _extends2;

    if (!this.getState().files[fileID]) {
      throw new Error('Can\u2019t set state for ' + fileID + ' (the file could have been removed)');
    }

    this.setState({
      files: _extends({}, this.getState().files, (_extends2 = {}, _extends2[fileID] = _extends({}, this.getState().files[fileID], state), _extends2))
    });
  };

  Uppy.prototype.resetProgress = function resetProgress() {
    var defaultProgress = {
      percentage: 0,
      bytesUploaded: 0,
      uploadComplete: false,
      uploadStarted: false
    };
    var files = _extends({}, this.getState().files);
    var updatedFiles = {};
    Object.keys(files).forEach(function (fileID) {
      var updatedFile = _extends({}, files[fileID]);
      updatedFile.progress = _extends({}, updatedFile.progress, defaultProgress);
      updatedFiles[fileID] = updatedFile;
    });

    this.setState({
      files: updatedFiles,
      totalProgress: 0
    });

    // TODO Document on the website
    this.emit('reset-progress');
  };

  Uppy.prototype.addPreProcessor = function addPreProcessor(fn) {
    this.preProcessors.push(fn);
  };

  Uppy.prototype.removePreProcessor = function removePreProcessor(fn) {
    var i = this.preProcessors.indexOf(fn);
    if (i !== -1) {
      this.preProcessors.splice(i, 1);
    }
  };

  Uppy.prototype.addPostProcessor = function addPostProcessor(fn) {
    this.postProcessors.push(fn);
  };

  Uppy.prototype.removePostProcessor = function removePostProcessor(fn) {
    var i = this.postProcessors.indexOf(fn);
    if (i !== -1) {
      this.postProcessors.splice(i, 1);
    }
  };

  Uppy.prototype.addUploader = function addUploader(fn) {
    this.uploaders.push(fn);
  };

  Uppy.prototype.removeUploader = function removeUploader(fn) {
    var i = this.uploaders.indexOf(fn);
    if (i !== -1) {
      this.uploaders.splice(i, 1);
    }
  };

  Uppy.prototype.setMeta = function setMeta(data) {
    var updatedMeta = _extends({}, this.getState().meta, data);
    var updatedFiles = _extends({}, this.getState().files);

    Object.keys(updatedFiles).forEach(function (fileID) {
      updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
        meta: _extends({}, updatedFiles[fileID].meta, data)
      });
    });

    this.log('Adding metadata:');
    this.log(data);

    this.setState({
      meta: updatedMeta,
      files: updatedFiles
    });
  };

  Uppy.prototype.setFileMeta = function setFileMeta(fileID, data) {
    var updatedFiles = _extends({}, this.getState().files);
    if (!updatedFiles[fileID]) {
      this.log('Was trying to set metadata for a file that’s not with us anymore: ', fileID);
      return;
    }
    var newMeta = _extends({}, updatedFiles[fileID].meta, data);
    updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
      meta: newMeta
    });
    this.setState({ files: updatedFiles });
  };

  /**
   * Get a file object.
   *
   * @param {string} fileID The ID of the file object to return.
   */


  Uppy.prototype.getFile = function getFile(fileID) {
    return this.getState().files[fileID];
  };

  /**
   * Get all files in an array.
   */


  Uppy.prototype.getFiles = function getFiles() {
    var _getState = this.getState(),
        files = _getState.files;

    return Object.keys(files).map(function (fileID) {
      return files[fileID];
    });
  };

  /**
  * Check if minNumberOfFiles restriction is reached before uploading.
  *
  * @private
  */


  Uppy.prototype._checkMinNumberOfFiles = function _checkMinNumberOfFiles(files) {
    var minNumberOfFiles = this.opts.restrictions.minNumberOfFiles;

    if (Object.keys(files).length < minNumberOfFiles) {
      throw new Error('' + this.i18n('youHaveToAtLeastSelectX', { smart_count: minNumberOfFiles }));
    }
  };

  /**
  * Check if file passes a set of restrictions set in options: maxFileSize,
  * maxNumberOfFiles and allowedFileTypes.
  *
  * @param {object} file object to check
  * @private
  */


  Uppy.prototype._checkRestrictions = function _checkRestrictions(file) {
    var _opts$restrictions = this.opts.restrictions,
        maxFileSize = _opts$restrictions.maxFileSize,
        maxNumberOfFiles = _opts$restrictions.maxNumberOfFiles,
        allowedFileTypes = _opts$restrictions.allowedFileTypes;


    if (maxNumberOfFiles) {
      if (Object.keys(this.getState().files).length + 1 > maxNumberOfFiles) {
        throw new Error('' + this.i18n('youCanOnlyUploadX', { smart_count: maxNumberOfFiles }));
      }
    }

    if (allowedFileTypes) {
      var isCorrectFileType = allowedFileTypes.filter(function (type) {
        // if (!file.type) return false

        // is this is a mime-type
        if (type.indexOf('/') > -1) {
          if (!file.type) return false;
          return match(file.type, type);
        }

        // otherwise this is likely an extension
        if (type[0] === '.') {
          if (file.extension === type.substr(1)) {
            return file.extension;
          }
        }
      }).length > 0;

      if (!isCorrectFileType) {
        var allowedFileTypesString = allowedFileTypes.join(', ');
        throw new Error(this.i18n('youCanOnlyUploadFileTypes') + ' ' + allowedFileTypesString);
      }
    }

    if (maxFileSize) {
      if (file.data.size > maxFileSize) {
        throw new Error(this.i18n('exceedsSize') + ' ' + prettyBytes(maxFileSize));
      }
    }
  };

  /**
  * Add a new file to `state.files`. This will run `onBeforeFileAdded`,
  * try to guess file type in a clever way, check file against restrictions,
  * and start an upload if `autoProceed === true`.
  *
  * @param {object} file object to add
  */


  Uppy.prototype.addFile = function addFile(file) {
    var _this2 = this,
        _extends3;

    var _getState2 = this.getState(),
        files = _getState2.files,
        allowNewUpload = _getState2.allowNewUpload;

    var onError = function onError(msg) {
      var err = (typeof msg === 'undefined' ? 'undefined' : _typeof(msg)) === 'object' ? msg : new Error(msg);
      _this2.log(err.message);
      _this2.info(err.message, 'error', 5000);
      throw err;
    };

    if (allowNewUpload === false) {
      onError(new Error('Cannot add new files: already uploading.'));
    }

    var onBeforeFileAddedResult = this.opts.onBeforeFileAdded(file, files);

    if (onBeforeFileAddedResult === false) {
      this.log('Not adding file because onBeforeFileAdded returned false');
      return;
    }

    if ((typeof onBeforeFileAddedResult === 'undefined' ? 'undefined' : _typeof(onBeforeFileAddedResult)) === 'object' && onBeforeFileAddedResult) {
      // warning after the change in 0.24
      if (onBeforeFileAddedResult.then) {
        throw new TypeError('onBeforeFileAdded() returned a Promise, but this is no longer supported. It must be synchronous.');
      }
      file = onBeforeFileAddedResult;
    }

    var fileType = getFileType(file);
    var fileName = void 0;
    if (file.name) {
      fileName = file.name;
    } else if (fileType.split('/')[0] === 'image') {
      fileName = fileType.split('/')[0] + '.' + fileType.split('/')[1];
    } else {
      fileName = 'noname';
    }
    var fileExtension = getFileNameAndExtension(fileName).extension;
    var isRemote = file.isRemote || false;

    var fileID = generateFileID(file);

    var meta = file.meta || {};
    meta.name = fileName;
    meta.type = fileType;

    var newFile = {
      source: file.source || '',
      id: fileID,
      name: fileName,
      extension: fileExtension || '',
      meta: _extends({}, this.getState().meta, meta),
      type: fileType,
      data: file.data,
      progress: {
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: file.data.size || 0,
        uploadComplete: false,
        uploadStarted: false
      },
      size: file.data.size || 0,
      isRemote: isRemote,
      remote: file.remote || '',
      preview: file.preview
    };

    try {
      this._checkRestrictions(newFile);
    } catch (err) {
      onError(err);
    }

    this.setState({
      files: _extends({}, files, (_extends3 = {}, _extends3[fileID] = newFile, _extends3))
    });

    this.emit('file-added', newFile);
    this.log('Added file: ' + fileName + ', ' + fileID + ', mime type: ' + fileType);

    if (this.opts.autoProceed && !this.scheduledAutoProceed) {
      this.scheduledAutoProceed = setTimeout(function () {
        _this2.scheduledAutoProceed = null;
        _this2.upload().catch(function (err) {
          console.error(err.stack || err.message || err);
        });
      }, 4);
    }
  };

  Uppy.prototype.removeFile = function removeFile(fileID) {
    var _this3 = this;

    var _getState3 = this.getState(),
        files = _getState3.files,
        currentUploads = _getState3.currentUploads;

    var updatedFiles = _extends({}, files);
    var removedFile = updatedFiles[fileID];
    delete updatedFiles[fileID];

    // Remove this file from its `currentUpload`.
    var updatedUploads = _extends({}, currentUploads);
    var removeUploads = [];
    Object.keys(updatedUploads).forEach(function (uploadID) {
      var newFileIDs = currentUploads[uploadID].fileIDs.filter(function (uploadFileID) {
        return uploadFileID !== fileID;
      });
      // Remove the upload if no files are associated with it anymore.
      if (newFileIDs.length === 0) {
        removeUploads.push(uploadID);
        return;
      }

      updatedUploads[uploadID] = _extends({}, currentUploads[uploadID], {
        fileIDs: newFileIDs
      });
    });

    this.setState({
      currentUploads: updatedUploads,
      files: updatedFiles
    });

    removeUploads.forEach(function (uploadID) {
      _this3._removeUpload(uploadID);
    });

    this._calculateTotalProgress();
    this.emit('file-removed', removedFile);
    this.log('File removed: ' + removedFile.id);
  };

  Uppy.prototype.pauseResume = function pauseResume(fileID) {
    if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) {
      return;
    }

    var wasPaused = this.getFile(fileID).isPaused || false;
    var isPaused = !wasPaused;

    this.setFileState(fileID, {
      isPaused: isPaused
    });

    this.emit('upload-pause', fileID, isPaused);

    return isPaused;
  };

  Uppy.prototype.pauseAll = function pauseAll() {
    var updatedFiles = _extends({}, this.getState().files);
    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });

    inProgressUpdatedFiles.forEach(function (file) {
      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: true
      });
      updatedFiles[file] = updatedFile;
    });
    this.setState({ files: updatedFiles });

    this.emit('pause-all');
  };

  Uppy.prototype.resumeAll = function resumeAll() {
    var updatedFiles = _extends({}, this.getState().files);
    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });

    inProgressUpdatedFiles.forEach(function (file) {
      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });
      updatedFiles[file] = updatedFile;
    });
    this.setState({ files: updatedFiles });

    this.emit('resume-all');
  };

  Uppy.prototype.retryAll = function retryAll() {
    var updatedFiles = _extends({}, this.getState().files);
    var filesToRetry = Object.keys(updatedFiles).filter(function (file) {
      return updatedFiles[file].error;
    });

    filesToRetry.forEach(function (file) {
      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });
      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles,
      error: null
    });

    this.emit('retry-all', filesToRetry);

    var uploadID = this._createUpload(filesToRetry);
    return this._runUpload(uploadID);
  };

  Uppy.prototype.cancelAll = function cancelAll() {
    var _this4 = this;

    this.emit('cancel-all');

    var files = Object.keys(this.getState().files);
    files.forEach(function (fileID) {
      _this4.removeFile(fileID);
    });

    this.setState({
      allowNewUpload: true,
      totalProgress: 0,
      error: null
    });
  };

  Uppy.prototype.retryUpload = function retryUpload(fileID) {
    var updatedFiles = _extends({}, this.getState().files);
    var updatedFile = _extends({}, updatedFiles[fileID], { error: null, isPaused: false });
    updatedFiles[fileID] = updatedFile;
    this.setState({
      files: updatedFiles
    });

    this.emit('upload-retry', fileID);

    var uploadID = this._createUpload([fileID]);
    return this._runUpload(uploadID);
  };

  Uppy.prototype.reset = function reset() {
    this.cancelAll();
  };

  Uppy.prototype._calculateProgress = function _calculateProgress(file, data) {
    if (!this.getFile(file.id)) {
      this.log('Not setting progress for a file that has been removed: ' + file.id);
      return;
    }

    this.setFileState(file.id, {
      progress: _extends({}, this.getFile(file.id).progress, {
        bytesUploaded: data.bytesUploaded,
        bytesTotal: data.bytesTotal,
        percentage: Math.floor((data.bytesUploaded / data.bytesTotal * 100).toFixed(2))
      })
    });

    this._calculateTotalProgress();
  };

  Uppy.prototype._calculateTotalProgress = function _calculateTotalProgress() {
    // calculate total progress, using the number of files currently uploading,
    // multiplied by 100 and the summ of individual progress of each file
    var files = this.getFiles();

    var inProgress = files.filter(function (file) {
      return file.progress.uploadStarted;
    });

    if (inProgress.length === 0) {
      this.setState({ totalProgress: 0 });
      return;
    }

    var sizedFiles = inProgress.filter(function (file) {
      return file.progress.bytesTotal != null;
    });
    var unsizedFiles = inProgress.filter(function (file) {
      return file.progress.bytesTotal == null;
    });

    if (sizedFiles.length === 0) {
      var progressMax = inProgress.length;
      var currentProgress = unsizedFiles.reduce(function (acc, file) {
        return acc + file.progress.percentage;
      }, 0);
      var _totalProgress = Math.round(currentProgress / progressMax * 100);
      this.setState({ totalProgress: _totalProgress });
      return;
    }

    var totalSize = sizedFiles.reduce(function (acc, file) {
      return acc + file.progress.bytesTotal;
    }, 0);
    var averageSize = totalSize / sizedFiles.length;
    totalSize += averageSize * unsizedFiles.length;

    var uploadedSize = 0;
    sizedFiles.forEach(function (file) {
      uploadedSize += file.progress.bytesUploaded;
    });
    unsizedFiles.forEach(function (file) {
      uploadedSize += averageSize * (file.progress.percentage || 0);
    });

    var totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);

    this.setState({ totalProgress: totalProgress });
  };

  /**
   * Registers listeners for all global actions, like:
   * `error`, `file-removed`, `upload-progress`
   */


  Uppy.prototype._addListeners = function _addListeners() {
    var _this5 = this;

    this.on('error', function (error) {
      _this5.setState({ error: error.message });
    });

    this.on('upload-error', function (file, error) {
      _this5.setFileState(file.id, { error: error.message });
      _this5.setState({ error: error.message });

      var message = _this5.i18n('failedToUpload', { file: file.name });
      if ((typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object' && error.message) {
        message = { message: message, details: error.message };
      }
      _this5.info(message, 'error', 5000);
    });

    this.on('upload', function () {
      _this5.setState({ error: null });
    });

    this.on('upload-started', function (file, upload) {
      if (!_this5.getFile(file.id)) {
        _this5.log('Not setting progress for a file that has been removed: ' + file.id);
        return;
      }
      _this5.setFileState(file.id, {
        progress: {
          uploadStarted: Date.now(),
          uploadComplete: false,
          percentage: 0,
          bytesUploaded: 0,
          bytesTotal: file.size
        }
      });
    });

    // upload progress events can occur frequently, especially when you have a good
    // connection to the remote server. Therefore, we are throtteling them to
    // prevent accessive function calls.
    // see also: https://github.com/tus/tus-js-client/commit/9940f27b2361fd7e10ba58b09b60d82422183bbb
    // const _throttledCalculateProgress = throttle(this._calculateProgress, 100, { leading: true, trailing: true })

    this.on('upload-progress', this._calculateProgress);

    this.on('upload-success', function (file, uploadResp, uploadURL) {
      var currentProgress = _this5.getFile(file.id).progress;
      _this5.setFileState(file.id, {
        progress: _extends({}, currentProgress, {
          uploadComplete: true,
          percentage: 100,
          bytesUploaded: currentProgress.bytesTotal
        }),
        uploadURL: uploadURL,
        isPaused: false
      });

      _this5._calculateTotalProgress();
    });

    this.on('preprocess-progress', function (file, progress) {
      if (!_this5.getFile(file.id)) {
        _this5.log('Not setting progress for a file that has been removed: ' + file.id);
        return;
      }
      _this5.setFileState(file.id, {
        progress: _extends({}, _this5.getFile(file.id).progress, {
          preprocess: progress
        })
      });
    });

    this.on('preprocess-complete', function (file) {
      if (!_this5.getFile(file.id)) {
        _this5.log('Not setting progress for a file that has been removed: ' + file.id);
        return;
      }
      var files = _extends({}, _this5.getState().files);
      files[file.id] = _extends({}, files[file.id], {
        progress: _extends({}, files[file.id].progress)
      });
      delete files[file.id].progress.preprocess;

      _this5.setState({ files: files });
    });

    this.on('postprocess-progress', function (file, progress) {
      if (!_this5.getFile(file.id)) {
        _this5.log('Not setting progress for a file that has been removed: ' + file.id);
        return;
      }
      _this5.setFileState(file.id, {
        progress: _extends({}, _this5.getState().files[file.id].progress, {
          postprocess: progress
        })
      });
    });

    this.on('postprocess-complete', function (file) {
      if (!_this5.getFile(file.id)) {
        _this5.log('Not setting progress for a file that has been removed: ' + file.id);
        return;
      }
      var files = _extends({}, _this5.getState().files);
      files[file.id] = _extends({}, files[file.id], {
        progress: _extends({}, files[file.id].progress)
      });
      delete files[file.id].progress.postprocess;
      // TODO should we set some kind of `fullyComplete` property on the file object
      // so it's easier to see that the file is upload…fully complete…rather than
      // what we have to do now (`uploadComplete && !postprocess`)

      _this5.setState({ files: files });
    });

    this.on('restored', function () {
      // Files may have changed--ensure progress is still accurate.
      _this5._calculateTotalProgress();
    });

    // show informer if offline
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('online', function () {
        return _this5.updateOnlineStatus();
      });
      window.addEventListener('offline', function () {
        return _this5.updateOnlineStatus();
      });
      setTimeout(function () {
        return _this5.updateOnlineStatus();
      }, 3000);
    }
  };

  Uppy.prototype.updateOnlineStatus = function updateOnlineStatus() {
    var online = typeof window.navigator.onLine !== 'undefined' ? window.navigator.onLine : true;
    if (!online) {
      this.emit('is-offline');
      this.info(this.i18n('noInternetConnection'), 'error', 0);
      this.wasOffline = true;
    } else {
      this.emit('is-online');
      if (this.wasOffline) {
        this.emit('back-online');
        this.info(this.i18n('connectedToInternet'), 'success', 3000);
        this.wasOffline = false;
      }
    }
  };

  Uppy.prototype.getID = function getID() {
    return this.opts.id;
  };

  /**
   * Registers a plugin with Core.
   *
   * @param {object} Plugin object
   * @param {object} [opts] object with options to be passed to Plugin
   * @return {Object} self for chaining
   */


  Uppy.prototype.use = function use(Plugin, opts) {
    if (typeof Plugin !== 'function') {
      var msg = 'Expected a plugin class, but got ' + (Plugin === null ? 'null' : typeof Plugin === 'undefined' ? 'undefined' : _typeof(Plugin)) + '.' + ' Please verify that the plugin was imported and spelled correctly.';
      throw new TypeError(msg);
    }

    // Instantiate
    var plugin = new Plugin(this, opts);
    var pluginId = plugin.id;
    this.plugins[plugin.type] = this.plugins[plugin.type] || [];

    if (!pluginId) {
      throw new Error('Your plugin must have an id');
    }

    if (!plugin.type) {
      throw new Error('Your plugin must have a type');
    }

    var existsPluginAlready = this.getPlugin(pluginId);
    if (existsPluginAlready) {
      var _msg = 'Already found a plugin named \'' + existsPluginAlready.id + '\'. ' + ('Tried to use: \'' + pluginId + '\'.\n') + 'Uppy plugins must have unique \'id\' options. See https://uppy.io/docs/plugins/#id.';
      throw new Error(_msg);
    }

    this.plugins[plugin.type].push(plugin);
    plugin.install();

    return this;
  };

  /**
   * Find one Plugin by name.
   *
   * @param {string} id plugin id
   * @return {object | boolean}
   */


  Uppy.prototype.getPlugin = function getPlugin(id) {
    var foundPlugin = null;
    this.iteratePlugins(function (plugin) {
      if (plugin.id === id) {
        foundPlugin = plugin;
        return false;
      }
    });
    return foundPlugin;
  };

  /**
   * Iterate through all `use`d plugins.
   *
   * @param {function} method that will be run on each plugin
   */


  Uppy.prototype.iteratePlugins = function iteratePlugins(method) {
    var _this6 = this;

    Object.keys(this.plugins).forEach(function (pluginType) {
      _this6.plugins[pluginType].forEach(method);
    });
  };

  /**
   * Uninstall and remove a plugin.
   *
   * @param {object} instance The plugin instance to remove.
   */


  Uppy.prototype.removePlugin = function removePlugin(instance) {
    this.log('Removing plugin ' + instance.id);
    this.emit('plugin-remove', instance);

    if (instance.uninstall) {
      instance.uninstall();
    }

    var list = this.plugins[instance.type].slice();
    var index = list.indexOf(instance);
    if (index !== -1) {
      list.splice(index, 1);
      this.plugins[instance.type] = list;
    }

    var updatedState = this.getState();
    delete updatedState.plugins[instance.id];
    this.setState(updatedState);
  };

  /**
   * Uninstall all plugins and close down this Uppy instance.
   */


  Uppy.prototype.close = function close() {
    var _this7 = this;

    this.log('Closing Uppy instance ' + this.opts.id + ': removing all files and uninstalling plugins');

    this.reset();

    this._storeUnsubscribe();

    this.iteratePlugins(function (plugin) {
      _this7.removePlugin(plugin);
    });
  };

  /**
  * Set info message in `state.info`, so that UI plugins like `Informer`
  * can display the message.
  *
  * @param {string | object} message Message to be displayed by the informer
  * @param {string} [type]
  * @param {number} [duration]
  */

  Uppy.prototype.info = function info(message) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;

    var isComplexMessage = (typeof message === 'undefined' ? 'undefined' : _typeof(message)) === 'object';

    this.setState({
      info: {
        isHidden: false,
        type: type,
        message: isComplexMessage ? message.message : message,
        details: isComplexMessage ? message.details : null
      }
    });

    this.emit('info-visible');

    clearTimeout(this.infoTimeoutID);
    if (duration === 0) {
      this.infoTimeoutID = undefined;
      return;
    }

    // hide the informer after `duration` milliseconds
    this.infoTimeoutID = setTimeout(this.hideInfo, duration);
  };

  Uppy.prototype.hideInfo = function hideInfo() {
    var newInfo = _extends({}, this.getState().info, {
      isHidden: true
    });
    this.setState({
      info: newInfo
    });
    this.emit('info-hidden');
  };

  /**
   * Logs stuff to console, only if `debug` is set to true. Silent in production.
   *
   * @param {String|Object} msg to log
   * @param {String} [type] optional `error` or `warning`
   */


  Uppy.prototype.log = function log(msg, type) {
    if (!this.opts.debug) {
      return;
    }

    var message = '[Uppy] [' + getTimeStamp() + '] ' + msg;

    window['uppyLog'] = window['uppyLog'] + '\n' + 'DEBUG LOG: ' + msg;

    if (type === 'error') {
      console.error(message);
      return;
    }

    if (type === 'warning') {
      console.warn(message);
      return;
    }

    if (msg === '' + msg) {
      console.log(message);
    } else {
      message = '[Uppy] [' + getTimeStamp() + ']';
      console.log(message);
      console.dir(msg);
    }
  };

  /**
   * Obsolete, event listeners are now added in the constructor.
   */


  Uppy.prototype.run = function run() {
    this.log('Calling run() is no longer necessary.', 'warning');
    return this;
  };

  /**
   * Restore an upload by its ID.
   */


  Uppy.prototype.restore = function restore(uploadID) {
    this.log('Core: attempting to restore upload "' + uploadID + '"');

    if (!this.getState().currentUploads[uploadID]) {
      this._removeUpload(uploadID);
      return Promise.reject(new Error('Nonexistent upload'));
    }

    return this._runUpload(uploadID);
  };

  /**
   * Create an upload for a bunch of files.
   *
   * @param {Array<string>} fileIDs File IDs to include in this upload.
   * @return {string} ID of this upload.
   */


  Uppy.prototype._createUpload = function _createUpload(fileIDs) {
    var _extends4;

    var _getState4 = this.getState(),
        allowNewUpload = _getState4.allowNewUpload,
        currentUploads = _getState4.currentUploads;

    if (!allowNewUpload) {
      throw new Error('Cannot create a new upload: already uploading.');
    }

    var uploadID = cuid();

    this.emit('upload', {
      id: uploadID,
      fileIDs: fileIDs
    });

    this.setState({
      allowNewUpload: this.opts.allowMultipleUploads !== false,

      currentUploads: _extends({}, currentUploads, (_extends4 = {}, _extends4[uploadID] = {
        fileIDs: fileIDs,
        step: 0,
        result: {}
      }, _extends4))
    });

    return uploadID;
  };

  Uppy.prototype._getUpload = function _getUpload(uploadID) {
    var _getState5 = this.getState(),
        currentUploads = _getState5.currentUploads;

    return currentUploads[uploadID];
  };

  /**
   * Add data to an upload's result object.
   *
   * @param {string} uploadID The ID of the upload.
   * @param {object} data Data properties to add to the result object.
   */


  Uppy.prototype.addResultData = function addResultData(uploadID, data) {
    var _extends5;

    if (!this._getUpload(uploadID)) {
      this.log('Not setting result for an upload that has been removed: ' + uploadID);
      return;
    }
    var currentUploads = this.getState().currentUploads;
    var currentUpload = _extends({}, currentUploads[uploadID], {
      result: _extends({}, currentUploads[uploadID].result, data)
    });
    this.setState({
      currentUploads: _extends({}, currentUploads, (_extends5 = {}, _extends5[uploadID] = currentUpload, _extends5))
    });
  };

  /**
   * Remove an upload, eg. if it has been canceled or completed.
   *
   * @param {string} uploadID The ID of the upload.
   */


  Uppy.prototype._removeUpload = function _removeUpload(uploadID) {
    var currentUploads = _extends({}, this.getState().currentUploads);
    delete currentUploads[uploadID];

    this.setState({
      currentUploads: currentUploads
    });
  };

  /**
   * Run an upload. This picks up where it left off in case the upload is being restored.
   *
   * @private
   */


  Uppy.prototype._runUpload = function _runUpload(uploadID) {
    var _this8 = this;

    var uploadData = this.getState().currentUploads[uploadID];
    var restoreStep = uploadData.step;

    var steps = [].concat(this.preProcessors, this.uploaders, this.postProcessors);
    var lastStep = Promise.resolve();
    steps.forEach(function (fn, step) {
      // Skip this step if we are restoring and have already completed this step before.
      if (step < restoreStep) {
        return;
      }

      lastStep = lastStep.then(function () {
        var _extends6;

        var _getState6 = _this8.getState(),
            currentUploads = _getState6.currentUploads;

        var currentUpload = _extends({}, currentUploads[uploadID], {
          step: step
        });
        _this8.setState({
          currentUploads: _extends({}, currentUploads, (_extends6 = {}, _extends6[uploadID] = currentUpload, _extends6))
        });

        // TODO give this the `currentUpload` object as its only parameter maybe?
        // Otherwise when more metadata may be added to the upload this would keep getting more parameters
        return fn(currentUpload.fileIDs, uploadID);
      }).then(function (result) {
        return null;
      });
    });

    // Not returning the `catch`ed promise, because we still want to return a rejected
    // promise from this method if the upload failed.
    lastStep.catch(function (err) {
      _this8.emit('error', err, uploadID);
      _this8._removeUpload(uploadID);
    });

    return lastStep.then(function () {
      // Set result data.
      var _getState7 = _this8.getState(),
          currentUploads = _getState7.currentUploads;

      var currentUpload = currentUploads[uploadID];
      if (!currentUpload) {
        _this8.log('Not setting result for an upload that has been removed: ' + uploadID);
        return;
      }

      var files = currentUpload.fileIDs.map(function (fileID) {
        return _this8.getFile(fileID);
      });
      var successful = files.filter(function (file) {
        return !file.error;
      });
      var failed = files.filter(function (file) {
        return file.error;
      });
      _this8.addResultData(uploadID, { successful: successful, failed: failed, uploadID: uploadID });
    }).then(function () {
      // Emit completion events.
      // This is in a separate function so that the `currentUploads` variable
      // always refers to the latest state. In the handler right above it refers
      // to an outdated object without the `.result` property.
      var _getState8 = _this8.getState(),
          currentUploads = _getState8.currentUploads;

      var currentUpload = currentUploads[uploadID];
      var result = currentUpload.result;
      _this8.emit('complete', result);

      _this8._removeUpload(uploadID);

      return result;
    });
  };

  /**
   * Start an upload for all the files that are not currently being uploaded.
   *
   * @return {Promise}
   */


  Uppy.prototype.upload = function upload() {
    var _this9 = this;

    if (!this.plugins.uploader) {
      this.log('No uploader type plugins are used', 'warning');
    }

    var files = this.getState().files;
    var onBeforeUploadResult = this.opts.onBeforeUpload(files);

    if (onBeforeUploadResult === false) {
      return Promise.reject(new Error('Not starting the upload because onBeforeUpload returned false'));
    }

    if (onBeforeUploadResult && (typeof onBeforeUploadResult === 'undefined' ? 'undefined' : _typeof(onBeforeUploadResult)) === 'object') {
      // warning after the change in 0.24
      if (onBeforeUploadResult.then) {
        throw new TypeError('onBeforeUpload() returned a Promise, but this is no longer supported. It must be synchronous.');
      }

      files = onBeforeUploadResult;
    }

    return Promise.resolve().then(function () {
      return _this9._checkMinNumberOfFiles(files);
    }).then(function () {
      var _getState9 = _this9.getState(),
          currentUploads = _getState9.currentUploads;
      // get a list of files that are currently assigned to uploads


      var currentlyUploadingFiles = Object.keys(currentUploads).reduce(function (prev, curr) {
        return prev.concat(currentUploads[curr].fileIDs);
      }, []);

      var waitingFileIDs = [];
      Object.keys(files).forEach(function (fileID) {
        var file = _this9.getFile(fileID);
        // if the file hasn't started uploading and hasn't already been assigned to an upload..
        if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
          waitingFileIDs.push(file.id);
        }
      });

      var uploadID = _this9._createUpload(waitingFileIDs);
      return _this9._runUpload(uploadID);
    }).catch(function (err) {
      var message = (typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object' ? err.message : err;
      var details = (typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object' ? err.details : null;
      _this9.log(message + ' ' + details);
      _this9.info({ message: message, details: details }, 'error', 4000);
      return Promise.reject((typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object' ? err : new Error(err));
    });
  };

  _createClass(Uppy, [{
    key: 'state',
    get: function get() {
      return this.getState();
    }
  }]);

  return Uppy;
}();

module.exports = function (opts) {
  return new Uppy(opts);
};

// Expose class constructor.
module.exports.Uppy = Uppy;
module.exports.Plugin = Plugin;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/ActionBrowseTagline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/ActionBrowseTagline.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require.h,
    Component = _require.Component;

var ActionBrowseTagline = function (_Component) {
  _inherits(ActionBrowseTagline, _Component);

  function ActionBrowseTagline(props) {
    _classCallCheck(this, ActionBrowseTagline);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  ActionBrowseTagline.prototype.handleClick = function handleClick(ev) {
    this.input.click();
  };

  ActionBrowseTagline.prototype.render = function render() {
    var _this2 = this;

    var browse = h(
      "button",
      { type: "button", "class": "uppy-Dashboard-browse", onclick: this.handleClick },
      this.props.i18n('browse')
    );

    // empty value="" on file input, so that the input is cleared after a file is selected,
    // because Uppy will be handling the upload and so we can select same file
    // after removing — otherwise browser thinks it’s already selected
    return h(
      "div",
      { "class": "uppy-Dashboard-dropFilesTitle" },
      this.props.acquirers.length === 0 ? this.props.i18nArray('dropPaste', { browse: browse }) : this.props.i18nArray('dropPasteImport', { browse: browse }),
      h("input", { "class": "uppy-Dashboard-input",
        hidden: true,
        "aria-hidden": "true",
        tabindex: -1,
        type: "file",
        name: "files[]",
        multiple: this.props.maxNumberOfFiles !== 1,
        onchange: this.props.handleInputChange,
        accept: this.props.allowedFileTypes,
        value: "",
        ref: function ref(input) {
          _this2.input = input;
        } })
    );
  };

  return ActionBrowseTagline;
}(Component);

module.exports = ActionBrowseTagline;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/AddFiles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/AddFiles.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionBrowseTagline = __webpack_require__(/*! ./ActionBrowseTagline */ "./node_modules/@uppy/dashboard/lib/components/ActionBrowseTagline.js");

var _require = __webpack_require__(/*! ./icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    localIcon = _require.localIcon;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require2.h,
    Component = _require2.Component;

var poweredByUppy = function poweredByUppy(props) {
  return h(
    'a',
    { tabindex: '-1', href: 'https://uppy.io', rel: 'noreferrer noopener', target: '_blank', 'class': 'uppy-Dashboard-poweredBy' },
    'Powered by ',
    h(
      'svg',
      { 'aria-hidden': 'true', 'class': 'UppyIcon uppy-Dashboard-poweredByIcon', width: '11', height: '11', viewBox: '0 0 11 11', xmlns: 'http://www.w3.org/2000/svg' },
      h('path', { d: 'M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z', 'fill-rule': 'evenodd' })
    ),
    h(
      'span',
      { 'class': 'uppy-Dashboard-poweredByUppy' },
      'Uppy'
    )
  );
};

var AddFiles = function (_Component) {
  _inherits(AddFiles, _Component);

  function AddFiles(props) {
    _classCallCheck(this, AddFiles);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  AddFiles.prototype.handleClick = function handleClick(ev) {
    this.input.click();
  };

  AddFiles.prototype.render = function render() {
    var _this2 = this;

    // const isHidden = Object.keys(this.props.files).length === 0
    var hasAcquirers = this.props.acquirers.length !== 0;

    if (!hasAcquirers) {
      return h(
        'div',
        { 'class': 'uppy-DashboarAddFiles' },
        h(
          'div',
          { 'class': 'uppy-DashboardTabs' },
          h(ActionBrowseTagline, {
            acquirers: this.props.acquirers,
            handleInputChange: this.props.handleInputChange,
            i18n: this.props.i18n,
            i18nArray: this.props.i18nArray,
            allowedFileTypes: this.props.allowedFileTypes,
            maxNumberOfFiles: this.props.maxNumberOfFiles
          })
        ),
        h(
          'div',
          { 'class': 'uppy-DashboarAddFiles-info' },
          this.props.note && h(
            'div',
            { 'class': 'uppy-Dashboard-note' },
            this.props.note
          ),
          this.props.proudlyDisplayPoweredByUppy && poweredByUppy(this.props)
        )
      );
    }

    // empty value="" on file input, so that the input is cleared after a file is selected,
    // because Uppy will be handling the upload and so we can select same file
    // after removing — otherwise browser thinks it’s already selected
    return h(
      'div',
      { 'class': 'uppy-DashboarAddFiles' },
      h(
        'div',
        { 'class': 'uppy-DashboardTabs' },
        h(ActionBrowseTagline, {
          acquirers: this.props.acquirers,
          handleInputChange: this.props.handleInputChange,
          i18n: this.props.i18n,
          i18nArray: this.props.i18nArray,
          allowedFileTypes: this.props.allowedFileTypes,
          maxNumberOfFiles: this.props.maxNumberOfFiles
        }),
        h(
          'div',
          { 'class': 'uppy-DashboardTabs-list', role: 'tablist' },
          h(
            'div',
            { 'class': 'uppy-DashboardTab', role: 'presentation' },
            h(
              'button',
              { type: 'button',
                'class': 'uppy-DashboardTab-btn',
                role: 'tab',
                tabindex: 0,
                onclick: this.handleClick },
              localIcon(),
              h(
                'div',
                { 'class': 'uppy-DashboardTab-name' },
                this.props.i18n('myDevice')
              )
            ),
            h('input', { 'class': 'uppy-Dashboard-input',
              hidden: true,
              'aria-hidden': 'true',
              tabindex: -1,
              type: 'file',
              name: 'files[]',
              multiple: this.props.maxNumberOfFiles !== 1,
              accept: this.props.allowedFileTypes,
              onchange: this.props.handleInputChange,
              value: '',
              ref: function ref(input) {
                _this2.input = input;
              } })
          ),
          this.props.acquirers.map(function (target) {
            return h(
              'div',
              { 'class': 'uppy-DashboardTab', role: 'presentation' },
              h(
                'button',
                { 'class': 'uppy-DashboardTab-btn',
                  type: 'button',
                  role: 'tab',
                  tabindex: 0,
                  'aria-controls': 'uppy-DashboardContent-panel--' + target.id,
                  'aria-selected': _this2.props.activePanel.id === target.id,
                  onclick: function onclick() {
                    return _this2.props.showPanel(target.id);
                  } },
                target.icon(),
                h(
                  'div',
                  { 'class': 'uppy-DashboardTab-name' },
                  target.name
                )
              )
            );
          })
        )
      ),
      h(
        'div',
        { 'class': 'uppy-DashboarAddFiles-info' },
        this.props.note && h(
          'div',
          { 'class': 'uppy-Dashboard-note' },
          this.props.note
        ),
        this.props.proudlyDisplayPoweredByUppy && poweredByUppy(this.props)
      )
    );
  };

  return AddFiles;
}(Component);

module.exports = AddFiles;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require.h;

var AddFiles = __webpack_require__(/*! ./AddFiles */ "./node_modules/@uppy/dashboard/lib/components/AddFiles.js");

var AddFilesPanel = function AddFilesPanel(props) {
  return h(
    'div',
    { 'class': 'uppy-Dashboard-AddFilesPanel',
      'aria-hidden': props.showAddFilesPanel },
    h(
      'div',
      { 'class': 'uppy-DashboardContent-bar' },
      h(
        'div',
        { 'class': 'uppy-DashboardContent-title', role: 'heading', 'aria-level': 'h1' },
        props.i18n('addingMoreFiles')
      ),
      h(
        'button',
        { 'class': 'uppy-DashboardContent-back',
          type: 'button',
          onclick: function onclick(ev) {
            return props.toggleAddFilesPanel(false);
          } },
        props.i18n('back')
      )
    ),
    h(AddFiles, props)
  );
};

module.exports = AddFilesPanel;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/Dashboard.js":
/*!******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/Dashboard.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FileList = __webpack_require__(/*! ./FileList */ "./node_modules/@uppy/dashboard/lib/components/FileList.js");
var AddFiles = __webpack_require__(/*! ./AddFiles */ "./node_modules/@uppy/dashboard/lib/components/AddFiles.js");
var AddFilesPanel = __webpack_require__(/*! ./AddFilesPanel */ "./node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js");
var PanelContent = __webpack_require__(/*! ./PanelContent */ "./node_modules/@uppy/dashboard/lib/components/PanelContent.js");
var PanelTopBar = __webpack_require__(/*! ./PanelTopBar */ "./node_modules/@uppy/dashboard/lib/components/PanelTopBar.js");
var FileCard = __webpack_require__(/*! ./FileCard */ "./node_modules/@uppy/dashboard/lib/components/FileCard.js");
var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
var isTouchDevice = __webpack_require__(/*! @uppy/utils/lib/isTouchDevice */ "./node_modules/@uppy/utils/lib/isTouchDevice.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require.h;

var PreactCSSTransitionGroup = __webpack_require__(/*! preact-css-transition-group */ "./node_modules/preact-css-transition-group/dist/preact-css-transition-group.js");

// http://dev.edenspiekermann.com/2016/02/11/introducing-accessible-modal-dialog
// https://github.com/ghosh/micromodal

module.exports = function Dashboard(props) {
  // if (!props.inline && props.modal.isHidden) {
  //   return <span />
  // }

  var noFiles = props.totalFileCount === 0;

  var dashboardClassName = classNames({ 'uppy-Root': props.isTargetDOMEl }, 'uppy-Dashboard', { 'Uppy--isTouchDevice': isTouchDevice() }, { 'uppy-Dashboard--animateOpenClose': props.animateOpenClose }, { 'uppy-Dashboard--isClosing': props.isClosing }, { 'uppy-Dashboard--modal': !props.inline }, { 'uppy-size--md': props.containerWidth > 576 }, { 'uppy-size--lg': props.containerWidth > 700 }, { 'uppy-Dashboard--isAddFilesPanelVisible': props.showAddFilesPanel });

  return h(
    'div',
    { 'class': dashboardClassName,
      'aria-hidden': props.inline ? 'false' : props.modal.isHidden,
      'aria-label': !props.inline ? props.i18n('dashboardWindowTitle') : props.i18n('dashboardTitle'),
      onpaste: props.handlePaste },
    h('div', { 'class': 'uppy-Dashboard-overlay', tabindex: -1, onclick: props.handleClickOutside }),
    h(
      'div',
      { 'class': 'uppy-Dashboard-inner',
        'aria-modal': !props.inline && 'true',
        role: !props.inline && 'dialog',
        style: {
          width: props.inline && props.width ? props.width : '',
          height: props.inline && props.height ? props.height : ''
        } },
      h(
        'button',
        { 'class': 'uppy-Dashboard-close',
          type: 'button',
          'aria-label': props.i18n('closeModal'),
          title: props.i18n('closeModal'),
          onclick: props.closeModal },
        h(
          'span',
          { 'aria-hidden': 'true' },
          '\xD7'
        )
      ),
      h(
        'div',
        { 'class': 'uppy-Dashboard-innerWrap' },
        !noFiles && props.showSelectedFiles && h(PanelTopBar, props),
        props.showSelectedFiles ? noFiles ? h(AddFiles, props) : h(FileList, props) : h(AddFiles, props),
        h(
          PreactCSSTransitionGroup,
          {
            transitionName: 'uppy-transition-slideDownUp',
            transitionEnterTimeout: 250,
            transitionLeaveTimeout: 250 },
          props.showAddFilesPanel ? h(AddFilesPanel, _extends({ key: 'AddFilesPanel' }, props)) : null
        ),
        h(
          PreactCSSTransitionGroup,
          {
            transitionName: 'uppy-transition-slideDownUp',
            transitionEnterTimeout: 250,
            transitionLeaveTimeout: 250 },
          props.fileCardFor ? h(FileCard, _extends({ key: 'FileCard' }, props)) : null
        ),
        h(
          PreactCSSTransitionGroup,
          {
            transitionName: 'uppy-transition-slideDownUp',
            transitionEnterTimeout: 250,
            transitionLeaveTimeout: 250 },
          props.activePanel ? h(PanelContent, _extends({ key: 'PanelContent' }, props)) : null
        ),
        h(
          'div',
          { 'class': 'uppy-Dashboard-progressindicators' },
          props.progressindicators.map(function (target) {
            return props.getPlugin(target.id).render(props.state);
          })
        )
      )
    )
  );
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileCard.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileCard.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFileTypeIcon = __webpack_require__(/*! ../utils/getFileTypeIcon */ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js");
var FilePreview = __webpack_require__(/*! ./FilePreview */ "./node_modules/@uppy/dashboard/lib/components/FilePreview.js");
var ignoreEvent = __webpack_require__(/*! ../utils/ignoreEvent.js */ "./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require.h,
    Component = _require.Component;

var FileCard = function (_Component) {
  _inherits(FileCard, _Component);

  function FileCard(props) {
    _classCallCheck(this, FileCard);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.meta = {};

    _this.tempStoreMetaOrSubmit = _this.tempStoreMetaOrSubmit.bind(_this);
    _this.renderMetaFields = _this.renderMetaFields.bind(_this);
    _this.handleSave = _this.handleSave.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  FileCard.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    setTimeout(function () {
      if (!_this2.firstInput) return;
      _this2.firstInput.focus({ preventScroll: true });
    }, 150);
  };

  FileCard.prototype.tempStoreMetaOrSubmit = function tempStoreMetaOrSubmit(ev) {
    var file = this.props.files[this.props.fileCardFor];

    if (ev.keyCode === 13) {
      ev.stopPropagation();
      ev.preventDefault();
      this.props.saveFileCard(this.meta, file.id);
      return;
    }

    var value = ev.target.value;
    var name = ev.target.dataset.name;
    this.meta[name] = value;
  };

  FileCard.prototype.renderMetaFields = function renderMetaFields(file) {
    var _this3 = this;

    var metaFields = this.props.metaFields || [];
    return metaFields.map(function (field, i) {
      return h(
        'fieldset',
        { 'class': 'uppy-DashboardFileCard-fieldset' },
        h(
          'label',
          { 'class': 'uppy-DashboardFileCard-label' },
          field.name
        ),
        h('input', { 'class': 'uppy-c-textInput uppy-DashboardFileCard-input',
          type: 'text',
          'data-name': field.id,
          value: file.meta[field.id],
          placeholder: field.placeholder,
          onkeyup: _this3.tempStoreMetaOrSubmit,
          onkeydown: _this3.tempStoreMetaOrSubmit,
          onkeypress: _this3.tempStoreMetaOrSubmit,
          ref: function ref(el) {
            if (i === 0) _this3.firstInput = el;
          } })
      );
    });
  };

  FileCard.prototype.handleSave = function handleSave(ev) {
    var fileID = this.props.fileCardFor;
    this.props.saveFileCard(this.meta, fileID);
  };

  FileCard.prototype.handleCancel = function handleCancel(ev) {
    this.meta = {};
    this.props.toggleFileCard();
  };

  FileCard.prototype.render = function render() {
    var file = this.props.files[this.props.fileCardFor];

    return h(
      'div',
      { 'class': 'uppy-DashboardFileCard',
        onDragOver: ignoreEvent,
        onDragLeave: ignoreEvent,
        onDrop: ignoreEvent,
        onPaste: ignoreEvent },
      h(
        'div',
        { 'class': 'uppy-DashboardContent-bar' },
        h(
          'div',
          { 'class': 'uppy-DashboardContent-title', role: 'heading', 'aria-level': 'h1' },
          this.props.i18nArray('editing', {
            file: h(
              'span',
              { 'class': 'uppy-DashboardContent-titleFile' },
              file.meta ? file.meta.name : file.name
            )
          })
        ),
        h(
          'button',
          { 'class': 'uppy-DashboardContent-back', type: 'button', title: this.props.i18n('finishEditingFile'),
            onclick: this.handleSave },
          this.props.i18n('done')
        )
      ),
      h(
        'div',
        { 'class': 'uppy-DashboardFileCard-inner' },
        h(
          'div',
          { 'class': 'uppy-DashboardFileCard-preview', style: { backgroundColor: getFileTypeIcon(file.type).color } },
          h(FilePreview, { file: file })
        ),
        h(
          'div',
          { 'class': 'uppy-DashboardFileCard-info' },
          this.renderMetaFields(file)
        ),
        h(
          'div',
          { 'class': 'uppy-Dashboard-actions' },
          h(
            'button',
            { 'class': 'uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-actionsBtn',
              type: 'button',
              onclick: this.handleSave },
            this.props.i18n('saveChanges')
          ),
          h(
            'button',
            { 'class': 'uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-actionsBtn',
              type: 'button',
              onclick: this.handleCancel },
            this.props.i18n('cancel')
          )
        )
      )
    );
  };

  return FileCard;
}(Component);

module.exports = FileCard;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileItem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileItem.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getFileNameAndExtension = __webpack_require__(/*! @uppy/utils/lib/getFileNameAndExtension */ "./node_modules/@uppy/utils/lib/getFileNameAndExtension.js");
var truncateString = __webpack_require__(/*! ../utils/truncateString */ "./node_modules/@uppy/dashboard/lib/utils/truncateString.js");
var copyToClipboard = __webpack_require__(/*! ../utils/copyToClipboard */ "./node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js");
var prettyBytes = __webpack_require__(/*! prettier-bytes */ "./node_modules/prettier-bytes/index.js");
var FileItemProgress = __webpack_require__(/*! ./FileItemProgress */ "./node_modules/@uppy/dashboard/lib/components/FileItemProgress.js");
var getFileTypeIcon = __webpack_require__(/*! ../utils/getFileTypeIcon */ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js");
var FilePreview = __webpack_require__(/*! ./FilePreview */ "./node_modules/@uppy/dashboard/lib/components/FilePreview.js");

var _require = __webpack_require__(/*! ./icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    iconCopy = _require.iconCopy,
    iconRetry = _require.iconRetry;

var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require2.h;

function FileItemProgressWrapper(props) {
  if (props.hideRetryButton && props.error) {
    return;
  }

  if (props.isUploaded || props.bundled || props.hidePauseResumeCancelButtons && !props.error) {
    return h(
      'div',
      { 'class': 'uppy-DashboardItem-progressIndicator' },
      h(FileItemProgress, {
        progress: props.file.progress.percentage,
        fileID: props.file.id,
        hidePauseResumeCancelButtons: props.hidePauseResumeCancelButtons,
        bundled: props.bundled
      })
    );
  }

  return h(
    'button',
    {
      'class': 'uppy-DashboardItem-progressIndicator',
      type: 'button',
      'aria-label': props.progressIndicatorTitle,
      title: props.progressIndicatorTitle,
      onclick: props.onPauseResumeCancelRetry },
    props.error ? props.hideRetryButton ? null : iconRetry() : h(FileItemProgress, {
      progress: props.file.progress.percentage,
      fileID: props.file.id,
      hidePauseResumeCancelButtons: props.hidePauseResumeCancelButtons
    })
  );
}

module.exports = function fileItem(props) {
  var file = props.file;
  var acquirers = props.acquirers;

  var isProcessing = file.progress.preprocess || file.progress.postprocess;
  var isUploaded = file.progress.uploadComplete && !isProcessing && !file.error;
  var uploadInProgressOrComplete = file.progress.uploadStarted || isProcessing;
  var uploadInProgress = file.progress.uploadStarted && !file.progress.uploadComplete || isProcessing;
  var isPaused = file.isPaused || false;
  var error = file.error || false;

  var fileName = getFileNameAndExtension(file.meta.name).name;
  var truncatedFileName = props.isWide ? truncateString(fileName, 30) : fileName;

  function onPauseResumeCancelRetry(ev) {
    if (isUploaded) return;

    if (error && !props.hideRetryButton) {
      props.retryUpload(file.id);
      return;
    }

    if (props.hidePauseResumeCancelButtons) {
      return;
    }

    if (props.resumableUploads) {
      props.pauseUpload(file.id);
    } else {
      props.cancelUpload(file.id);
    }
  }

  function progressIndicatorTitle(props) {
    if (isUploaded) {
      return props.i18n('uploadComplete');
    }

    if (error) {
      return props.i18n('retryUpload');
    }

    if (props.resumableUploads) {
      if (file.isPaused) {
        return props.i18n('resumeUpload');
      }
      return props.i18n('pauseUpload');
    } else {
      return props.i18n('cancelUpload');
    }
  }

  var dashboardItemClass = classNames('uppy-DashboardItem', { 'is-inprogress': uploadInProgress }, { 'is-processing': isProcessing }, { 'is-complete': isUploaded }, { 'is-paused': isPaused }, { 'is-error': error }, { 'is-resumable': props.resumableUploads }, { 'is-bundled': props.bundledUpload });

  return h(
    'li',
    { 'class': dashboardItemClass, id: 'uppy_' + file.id, title: file.meta.name },
    h(
      'div',
      { 'class': 'uppy-DashboardItem-preview' },
      h(
        'div',
        { 'class': 'uppy-DashboardItem-previewInnerWrap', style: { backgroundColor: getFileTypeIcon(file.type).color } },
        props.showLinkToFileUploadResult && file.uploadURL ? h('a', { 'class': 'uppy-DashboardItem-previewLink', href: file.uploadURL, rel: 'noreferrer noopener', target: '_blank' }) : null,
        h(FilePreview, { file: file })
      ),
      h(
        'div',
        { 'class': 'uppy-DashboardItem-progress' },
        h(FileItemProgressWrapper, _extends({
          progressIndicatorTitle: progressIndicatorTitle(props),
          onPauseResumeCancelRetry: onPauseResumeCancelRetry,
          file: file,
          error: error
        }, props))
      )
    ),
    h(
      'div',
      { 'class': 'uppy-DashboardItem-info' },
      h(
        'div',
        { 'class': 'uppy-DashboardItem-name', title: fileName },
        props.showLinkToFileUploadResult && file.uploadURL ? h(
          'a',
          { href: file.uploadURL, rel: 'noreferrer noopener', target: '_blank' },
          file.extension ? truncatedFileName + '.' + file.extension : truncatedFileName
        ) : file.extension ? truncatedFileName + '.' + file.extension : truncatedFileName
      ),
      h(
        'div',
        { 'class': 'uppy-DashboardItem-status' },
        file.data.size ? h(
          'div',
          { 'class': 'uppy-DashboardItem-statusSize' },
          prettyBytes(file.data.size)
        ) : null,
        file.source && file.source !== props.id && h(
          'div',
          { 'class': 'uppy-DashboardItem-sourceIcon' },
          acquirers.map(function (acquirer) {
            if (acquirer.id === file.source) {
              return h(
                'span',
                { title: props.i18n('fileSource', { name: acquirer.name }) },
                acquirer.icon()
              );
            }
          })
        ),
        !uploadInProgressOrComplete && props.metaFields && props.metaFields.length ? h(
          'button',
          { 'class': 'uppy-DashboardItem-edit',
            type: 'button',
            'aria-label': props.i18n('editFile'),
            title: props.i18n('editFile'),
            onclick: function onclick(e) {
              return props.toggleFileCard(file.id);
            } },
          props.i18n('edit')
        ) : null,
        props.showLinkToFileUploadResult && file.uploadURL ? h(
          'button',
          { 'class': 'uppy-DashboardItem-copyLink',
            type: 'button',
            'aria-label': props.i18n('copyLink'),
            title: props.i18n('copyLink'),
            onclick: function onclick() {
              copyToClipboard(file.uploadURL, props.i18n('copyLinkToClipboardFallback')).then(function () {
                props.log('Link copied to clipboard.');
                props.info(props.i18n('copyLinkToClipboardSuccess'), 'info', 3000);
              }).catch(props.log);
            } },
          iconCopy()
        ) : ''
      )
    ),
    h(
      'div',
      { 'class': 'uppy-DashboardItem-action' },
      !isUploaded && h(
        'button',
        { 'class': 'uppy-DashboardItem-remove',
          type: 'button',
          'aria-label': props.i18n('removeFile'),
          title: props.i18n('removeFile'),
          onclick: function onclick() {
            return props.removeFile(file.id);
          } },
        h(
          'svg',
          { 'aria-hidden': 'true', 'class': 'UppyIcon', width: '60', height: '60', viewBox: '0 0 60 60', xmlns: 'http://www.w3.org/2000/svg' },
          h('path', { stroke: '#FFF', 'stroke-width': '1', 'fill-rule': 'nonzero', 'vector-effect': 'non-scaling-stroke', d: 'M30 1C14 1 1 14 1 30s13 29 29 29 29-13 29-29S46 1 30 1z' }),
          h('path', { fill: '#FFF', 'vector-effect': 'non-scaling-stroke', d: 'M42 39.667L39.667 42 30 32.333 20.333 42 18 39.667 27.667 30 18 20.333 20.333 18 30 27.667 39.667 18 42 20.333 32.333 30z' })
        )
      )
    )
  );
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileItemProgress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileItemProgress.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require.h;

// http://codepen.io/Harkko/pen/rVxvNM
// https://css-tricks.com/svg-line-animation-works/
// https://gist.github.com/eswak/ad4ea57bcd5ff7aa5d42

// circle length equals 2 * PI * R


var circleLength = 2 * Math.PI * 15;

// stroke-dashoffset is a percentage of the progress from circleLength,
// substracted from circleLength, because its an offset
module.exports = function (props) {
  return h(
    "svg",
    { width: "70", height: "70", viewBox: "0 0 36 36", "class": "UppyIcon UppyIcon-progressCircle" },
    h(
      "g",
      { "class": "progress-group" },
      h("circle", { "class": "bg", r: "15", cx: "18", cy: "18", "stroke-width": "2", fill: "none" }),
      h("circle", { "class": "progress", r: "15", cx: "18", cy: "18", transform: "rotate(-90, 18, 18)", "stroke-width": "2", fill: "none",
        "stroke-dasharray": circleLength,
        "stroke-dashoffset": circleLength - circleLength / 100 * props.progress
      })
    ),
    !props.hidePauseResumeCancelButtons && !props.bundled ? h(
      "g",
      null,
      h("polygon", { "class": "play", transform: "translate(3, 3)", points: "12 20 12 10 20 15" }),
      h(
        "g",
        { "class": "pause", transform: "translate(14.5, 13)" },
        h("rect", { x: "0", y: "0", width: "2", height: "10", rx: "0" }),
        h("rect", { x: "5", y: "0", width: "2", height: "10", rx: "0" })
      ),
      h("polygon", { "class": "cancel", transform: "translate(2, 2)", points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12" })
    ) : null,
    h("polygon", { "class": "check", transform: "translate(2, 3)", points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634" })
  );
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FileList.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FileList.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FileItem = __webpack_require__(/*! ./FileItem */ "./node_modules/@uppy/dashboard/lib/components/FileItem.js");
var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require.h;

module.exports = function (props) {
  var noFiles = props.totalFileCount === 0;
  var dashboardFilesClass = classNames('uppy-Dashboard-files', { 'uppy-Dashboard-files--noFiles': noFiles });

  return h(
    'ul',
    { 'class': dashboardFilesClass },
    Object.keys(props.files).map(function (fileID) {
      return h(FileItem, _extends({}, props, {
        acquirers: props.acquirers,
        file: props.files[fileID]
      }));
    })
  );
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/FilePreview.js":
/*!********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/FilePreview.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getFileTypeIcon = __webpack_require__(/*! ../utils/getFileTypeIcon */ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require.h;

module.exports = function FilePreview(props) {
  var file = props.file;

  if (file.preview) {
    return h('img', { 'class': 'uppy-DashboardItem-previewImg', alt: file.name, src: file.preview });
  }

  var _getFileTypeIcon = getFileTypeIcon(file.type),
      color = _getFileTypeIcon.color,
      icon = _getFileTypeIcon.icon;

  return h(
    'div',
    { 'class': 'uppy-DashboardItem-previewIconWrap' },
    h(
      'span',
      { 'class': 'uppy-DashboardItem-previewIcon', style: { color: color } },
      icon
    ),
    h(
      'svg',
      { 'class': 'uppy-DashboardItem-previewIconBg', width: '72', height: '93', viewBox: '0 0 72 93' },
      h(
        'g',
        null,
        h('path', { d: 'M24.08 5h38.922A2.997 2.997 0 0 1 66 8.003v74.994A2.997 2.997 0 0 1 63.004 86H8.996A2.998 2.998 0 0 1 6 83.01V22.234L24.08 5z', fill: '#FFF' }),
        h('path', { d: 'M24 5L6 22.248h15.007A2.995 2.995 0 0 0 24 19.244V5z', fill: '#E4E4E4' })
      )
    )
  );
};

// <span class="uppy-DashboardItem-previewType">{file.extension && file.extension.length < 5 ? file.extension : null}</span>

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/PanelContent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/PanelContent.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require.h;

var ignoreEvent = __webpack_require__(/*! ../utils/ignoreEvent.js */ "./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js");

function PanelContent(props) {
  return h(
    'div',
    { 'class': 'uppy-DashboardContent-panel',
      role: 'tabpanel',
      id: props.activePanel && 'uppy-DashboardContent-panel--' + props.activePanel.id,
      onDragOver: ignoreEvent,
      onDragLeave: ignoreEvent,
      onDrop: ignoreEvent,
      onPaste: ignoreEvent },
    h(
      'div',
      { 'class': 'uppy-DashboardContent-bar' },
      h(
        'div',
        { 'class': 'uppy-DashboardContent-title', role: 'heading', 'aria-level': 'h1' },
        props.i18n('importFrom', { name: props.activePanel.name })
      ),
      h(
        'button',
        { 'class': 'uppy-DashboardContent-back',
          type: 'button',
          onclick: props.hideAllPanels },
        props.i18n('done')
      )
    ),
    h(
      'div',
      { 'class': 'uppy-DashboardContent-panelBody' },
      props.getPlugin(props.activePanel.id).render(props.state)
    )
  );
}

module.exports = PanelContent;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/PanelTopBar.js":
/*!********************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/PanelTopBar.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require.h;

var uploadStates = {
  'STATE_ERROR': 'error',
  'STATE_WAITING': 'waiting',
  'STATE_PREPROCESSING': 'preprocessing',
  'STATE_UPLOADING': 'uploading',
  'STATE_POSTPROCESSING': 'postprocessing',
  'STATE_COMPLETE': 'complete',
  'STATE_PAUSED': 'paused'
};

function getUploadingState(isAllErrored, isAllComplete, isAllPaused) {
  var files = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (isAllErrored) {
    return uploadStates.STATE_ERROR;
  }

  if (isAllComplete) {
    return uploadStates.STATE_COMPLETE;
  }

  if (isAllPaused) {
    return uploadStates.STATE_PAUSED;
  }

  var state = uploadStates.STATE_WAITING;
  var fileIDs = Object.keys(files);
  for (var i = 0; i < fileIDs.length; i++) {
    var progress = files[fileIDs[i]].progress;
    // If ANY files are being uploaded right now, show the uploading state.
    if (progress.uploadStarted && !progress.uploadComplete) {
      return uploadStates.STATE_UPLOADING;
    }
    // If files are being preprocessed AND postprocessed at this time, we show the
    // preprocess state. If any files are being uploaded we show uploading.
    if (progress.preprocess && state !== uploadStates.STATE_UPLOADING) {
      state = uploadStates.STATE_PREPROCESSING;
    }
    // If NO files are being preprocessed or uploaded right now, but some files are
    // being postprocessed, show the postprocess state.
    if (progress.postprocess && state !== uploadStates.STATE_UPLOADING && state !== uploadStates.STATE_PREPROCESSING) {
      state = uploadStates.STATE_POSTPROCESSING;
    }
  }
  return state;
}

function UploadStatus(props) {
  var uploadingState = getUploadingState(props.isAllErrored, props.isAllComplete, props.isAllPaused, props.files);

  switch (uploadingState) {
    case 'uploading':
      return props.i18n('uploadingXFiles', { smart_count: props.inProgressNotPausedFiles.length });
    case 'preprocessing':
    case 'postprocessing':
      return props.i18n('processingXFiles', { smart_count: props.processingFiles.length });
    case 'paused':
      return props.i18n('uploadPaused');
    case 'waiting':
      return props.i18n('xFilesSelected', { smart_count: props.newFiles.length });
    case 'complete':
      return props.i18n('uploadComplete');
  }
}

function PanelTopBar(props) {
  var allowNewUpload = props.allowNewUpload;
  // TODO maybe this should be done in ../index.js, then just pass that down as `allowNewUpload`
  if (allowNewUpload && props.maxNumberOfFiles) {
    allowNewUpload = props.totalFileCount < props.maxNumberOfFiles;
  }

  return h(
    'div',
    { 'class': 'uppy-DashboardContent-bar' },
    h(
      'div',
      null,
      !props.isAllComplete ? h(
        'button',
        { 'class': 'uppy-DashboardContent-back',
          type: 'button',
          onclick: props.cancelAll },
        props.i18n('cancel')
      ) : null
    ),
    h(
      'div',
      { 'class': 'uppy-DashboardContent-title', role: 'heading', 'aria-level': 'h1' },
      h(UploadStatus, props)
    ),
    allowNewUpload && h(
      'button',
      { 'class': 'uppy-DashboardContent-addMore',
        type: 'button',
        'aria-label': props.i18n('addMoreFiles'),
        title: props.i18n('addMoreFiles'),
        onclick: function onclick() {
          return props.toggleAddFilesPanel(true);
        } },
      h(
        'svg',
        { 'class': 'UppyIcon', width: '15', height: '15', viewBox: '0 0 13 13', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
        h('path', { d: 'M7,6 L13,6 L13,7 L7,7 L7,13 L6,13 L6,7 L0,7 L0,6 L6,6 L6,0 L7,0 L7,6 Z' })
      )
    )
  );
}

module.exports = PanelTopBar;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/components/icons.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/components/icons.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require.h;

// https://css-tricks.com/creating-svg-icon-system-react/

function defaultTabIcon() {
  return h(
    "svg",
    { "aria-hidden": "true", width: "30", height: "30", viewBox: "0 0 30 30" },
    h("path", { d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z" })
  );
}

function iconCopy() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "51", height: "51", viewBox: "0 0 51 51" },
    h("path", { d: "M17.21 45.765a5.394 5.394 0 0 1-7.62 0l-4.12-4.122a5.393 5.393 0 0 1 0-7.618l6.774-6.775-2.404-2.404-6.775 6.776c-3.424 3.427-3.424 9 0 12.426l4.12 4.123a8.766 8.766 0 0 0 6.216 2.57c2.25 0 4.5-.858 6.214-2.57l13.55-13.552a8.72 8.72 0 0 0 2.575-6.213 8.73 8.73 0 0 0-2.575-6.213l-4.123-4.12-2.404 2.404 4.123 4.12a5.352 5.352 0 0 1 1.58 3.81c0 1.438-.562 2.79-1.58 3.808l-13.55 13.55z" }),
    h("path", { d: "M44.256 2.858A8.728 8.728 0 0 0 38.043.283h-.002a8.73 8.73 0 0 0-6.212 2.574l-13.55 13.55a8.725 8.725 0 0 0-2.575 6.214 8.73 8.73 0 0 0 2.574 6.216l4.12 4.12 2.405-2.403-4.12-4.12a5.357 5.357 0 0 1-1.58-3.812c0-1.437.562-2.79 1.58-3.808l13.55-13.55a5.348 5.348 0 0 1 3.81-1.58c1.44 0 2.792.562 3.81 1.58l4.12 4.12c2.1 2.1 2.1 5.518 0 7.617L39.2 23.775l2.404 2.404 6.775-6.777c3.426-3.427 3.426-9 0-12.426l-4.12-4.12z" })
  );
}

function iconResume() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "25", height: "25", viewBox: "0 0 44 44" },
    h("polygon", { "class": "play", transform: "translate(6, 5.5)", points: "13 21.6666667 13 11 21 16.3333333" })
  );
}

function iconPause() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "25px", height: "25px", viewBox: "0 0 44 44" },
    h(
      "g",
      { transform: "translate(18, 17)", "class": "pause" },
      h("rect", { x: "0", y: "0", width: "2", height: "10", rx: "0" }),
      h("rect", { x: "6", y: "0", width: "2", height: "10", rx: "0" })
    )
  );
}

function localIcon() {
  return h(
    "svg",
    { "aria-hidden": "true", fill: "#607d8b", width: "27", height: "25", viewBox: "0 0 27 25" },
    h("path", { d: "M5.586 9.288a.313.313 0 0 0 .282.176h4.84v3.922c0 1.514 1.25 2.24 2.792 2.24 1.54 0 2.79-.726 2.79-2.24V9.464h4.84c.122 0 .23-.068.284-.176a.304.304 0 0 0-.046-.324L13.735.106a.316.316 0 0 0-.472 0l-7.63 8.857a.302.302 0 0 0-.047.325z" }),
    h("path", { d: "M24.3 5.093c-.218-.76-.54-1.187-1.208-1.187h-4.856l1.018 1.18h3.948l2.043 11.038h-7.193v2.728H9.114v-2.725h-7.36l2.66-11.04h3.33l1.018-1.18H3.907c-.668 0-1.06.46-1.21 1.186L0 16.456v7.062C0 24.338.676 25 1.51 25h23.98c.833 0 1.51-.663 1.51-1.482v-7.062L24.3 5.093z" })
  );
}

function iconRetry() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon retry", width: "28", height: "31", viewBox: "0 0 16 19", xmlns: "http://www.w3.org/2000/svg" },
    h("path", { d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z" }),
    h("path", { d: "M7.9 3H10v2H7.9z" }),
    h("path", { d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z" }),
    h("path", { d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z" })
  );
}

function checkIcon() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon UppyIcon-check", width: "13", height: "9", viewBox: "0 0 13 9" },
    h("polygon", { points: "5 7.293 1.354 3.647 0.646 4.354 5 8.707 12.354 1.354 11.646 0.647" })
  );
}

function iconAudio() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "55", height: "55", viewBox: "0 0 55 55" },
    h("path", { d: "M52.66.25c-.216-.19-.5-.276-.79-.242l-31 4.01a1 1 0 0 0-.87.992V40.622C18.174 38.428 15.273 37 12 37c-5.514 0-10 4.037-10 9s4.486 9 10 9 10-4.037 10-9c0-.232-.02-.46-.04-.687.014-.065.04-.124.04-.192V16.12l29-3.753v18.257C49.174 28.428 46.273 27 43 27c-5.514 0-10 4.037-10 9s4.486 9 10 9c5.464 0 9.913-3.966 9.993-8.867 0-.013.007-.024.007-.037V1a.998.998 0 0 0-.34-.75zM12 53c-4.41 0-8-3.14-8-7s3.59-7 8-7 8 3.14 8 7-3.59 7-8 7zm31-10c-4.41 0-8-3.14-8-7s3.59-7 8-7 8 3.14 8 7-3.59 7-8 7zM22 14.1V5.89l29-3.753v8.21l-29 3.754z" })
  );
}

function iconVideo() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", viewBox: "0 0 58 58" },
    h("path", { d: "M36.537 28.156l-11-7a1.005 1.005 0 0 0-1.02-.033C24.2 21.3 24 21.635 24 22v14a1 1 0 0 0 1.537.844l11-7a1.002 1.002 0 0 0 0-1.688zM26 34.18V23.82L34.137 29 26 34.18z" }),
    h("path", { d: "M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM10 28H2v-9h8v9zm-8 2h8v9H2v-9zm10 10V8h34v42H12V40zm44-12h-8v-9h8v9zm-8 2h8v9h-8v-9zm8-22v9h-8V8h8zM2 8h8v9H2V8zm0 42v-9h8v9H2zm54 0h-8v-9h8v9z" })
  );
}

function iconPDF() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", viewBox: "0 0 342 335" },
    h("path", { d: "M329.337 227.84c-2.1 1.3-8.1 2.1-11.9 2.1-12.4 0-27.6-5.7-49.1-14.9 8.3-.6 15.8-.9 22.6-.9 12.4 0 16 0 28.2 3.1 12.1 3 12.2 9.3 10.2 10.6zm-215.1 1.9c4.8-8.4 9.7-17.3 14.7-26.8 12.2-23.1 20-41.3 25.7-56.2 11.5 20.9 25.8 38.6 42.5 52.8 2.1 1.8 4.3 3.5 6.7 5.3-34.1 6.8-63.6 15-89.6 24.9zm39.8-218.9c6.8 0 10.7 17.06 11 33.16.3 16-3.4 27.2-8.1 35.6-3.9-12.4-5.7-31.8-5.7-44.5 0 0-.3-24.26 2.8-24.26zm-133.4 307.2c3.9-10.5 19.1-31.3 41.6-49.8 1.4-1.1 4.9-4.4 8.1-7.4-23.5 37.6-39.3 52.5-49.7 57.2zm315.2-112.3c-6.8-6.7-22-10.2-45-10.5-15.6-.2-34.3 1.2-54.1 3.9-8.8-5.1-17.9-10.6-25.1-17.3-19.2-18-35.2-42.9-45.2-70.3.6-2.6 1.2-4.8 1.7-7.1 0 0 10.8-61.5 7.9-82.3-.4-2.9-.6-3.7-1.4-5.9l-.9-2.5c-2.9-6.76-8.7-13.96-17.8-13.57l-5.3-.17h-.1c-10.1 0-18.4 5.17-20.5 12.84-6.6 24.3.2 60.5 12.5 107.4l-3.2 7.7c-8.8 21.4-19.8 43-29.5 62l-1.3 2.5c-10.2 20-19.5 37-27.9 51.4l-8.7 4.6c-.6.4-15.5 8.2-19 10.3-29.6 17.7-49.28 37.8-52.54 53.8-1.04 5-.26 11.5 5.01 14.6l8.4 4.2c3.63 1.8 7.53 2.7 11.43 2.7 21.1 0 45.6-26.2 79.3-85.1 39-12.7 83.4-23.3 122.3-29.1 29.6 16.7 66 28.3 89 28.3 4.1 0 7.6-.4 10.5-1.2 4.4-1.1 8.1-3.6 10.4-7.1 4.4-6.7 5.4-15.9 4.1-25.4-.3-2.8-2.6-6.3-5-8.7z" })
  );
}

function iconFile() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "44", height: "58", viewBox: "0 0 44 58" },
    h("path", { d: "M27.437.517a1 1 0 0 0-.094.03H4.25C2.037.548.217 2.368.217 4.58v48.405c0 2.212 1.82 4.03 4.03 4.03H39.03c2.21 0 4.03-1.818 4.03-4.03V15.61a1 1 0 0 0-.03-.28 1 1 0 0 0 0-.093 1 1 0 0 0-.03-.032 1 1 0 0 0 0-.03 1 1 0 0 0-.032-.063 1 1 0 0 0-.03-.063 1 1 0 0 0-.032 0 1 1 0 0 0-.03-.063 1 1 0 0 0-.032-.03 1 1 0 0 0-.03-.063 1 1 0 0 0-.063-.062l-14.593-14a1 1 0 0 0-.062-.062A1 1 0 0 0 28 .708a1 1 0 0 0-.374-.157 1 1 0 0 0-.156 0 1 1 0 0 0-.03-.03l-.003-.003zM4.25 2.547h22.218v9.97c0 2.21 1.82 4.03 4.03 4.03h10.564v36.438a2.02 2.02 0 0 1-2.032 2.032H4.25c-1.13 0-2.032-.9-2.032-2.032V4.58c0-1.13.902-2.032 2.03-2.032zm24.218 1.345l10.375 9.937.75.718H30.5c-1.13 0-2.032-.9-2.032-2.03V3.89z" })
  );
}

function iconText() {
  return h(
    "svg",
    { "aria-hidden": "true", "class": "UppyIcon", width: "62", height: "62", viewBox: "0 0 62 62", xmlns: "http://www.w3.org/2000/svg" },
    h("path", { d: "M4.309 4.309h24.912v53.382h-6.525v3.559h16.608v-3.559h-6.525V4.309h24.912v10.676h3.559V.75H.75v14.235h3.559z", "fill-rule": "nonzero", fill: "#000" })
  );
}

module.exports = {
  defaultTabIcon: defaultTabIcon,
  iconCopy: iconCopy,
  iconResume: iconResume,
  iconPause: iconPause,
  iconRetry: iconRetry,
  localIcon: localIcon,
  checkIcon: checkIcon,
  iconAudio: iconAudio,
  iconVideo: iconVideo,
  iconPDF: iconPDF,
  iconFile: iconFile,
  iconText: iconText
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");
var dragDrop = __webpack_require__(/*! drag-drop */ "./node_modules/drag-drop/index.js");
var DashboardUI = __webpack_require__(/*! ./components/Dashboard */ "./node_modules/@uppy/dashboard/lib/components/Dashboard.js");
var StatusBar = __webpack_require__(/*! @uppy/status-bar */ "./node_modules/@uppy/status-bar/lib/index.js");
var Informer = __webpack_require__(/*! @uppy/informer */ "./node_modules/@uppy/informer/lib/index.js");
var ThumbnailGenerator = __webpack_require__(/*! @uppy/thumbnail-generator */ "./node_modules/@uppy/thumbnail-generator/lib/index.js");
var findAllDOMElements = __webpack_require__(/*! @uppy/utils/lib/findAllDOMElements */ "./node_modules/@uppy/utils/lib/findAllDOMElements.js");
var toArray = __webpack_require__(/*! @uppy/utils/lib/toArray */ "./node_modules/@uppy/utils/lib/toArray.js");
// const prettyBytes = require('prettier-bytes')
var ResizeObserver = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js").default || __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");

var _require2 = __webpack_require__(/*! ./components/icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    defaultTabIcon = _require2.defaultTabIcon;

// Some code for managing focus was adopted from https://github.com/ghosh/micromodal
// MIT licence, https://github.com/ghosh/micromodal/blob/master/LICENSE.md
// Copyright (c) 2017 Indrashish Ghosh


var FOCUSABLE_ELEMENTS = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'input:not([disabled]):not([inert]):not([aria-hidden])', 'select:not([disabled]):not([inert]):not([aria-hidden])', 'textarea:not([disabled]):not([inert]):not([aria-hidden])', 'button:not([disabled]):not([inert]):not([aria-hidden])', 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];

var TAB_KEY = 9;
var ESC_KEY = 27;

/**
 * Dashboard UI with previews, metadata editing, tabs for various services and more
 */
module.exports = function (_Plugin) {
  _inherits(Dashboard, _Plugin);

  function Dashboard(uppy, opts) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.id = _this.opts.id || 'Dashboard';
    _this.title = 'Dashboard';
    _this.type = 'orchestrator';
    _this.modalName = 'uppy-Dashboard';

    var defaultLocale = {
      strings: {
        selectToUpload: 'Select files to upload',
        closeModal: 'Close Modal',
        upload: 'Upload',
        importFrom: 'Import from %{name}',
        addingMoreFiles: 'Adding more files',
        addMoreFiles: 'Add more files',
        dashboardWindowTitle: 'Uppy Dashboard Window (Press escape to close)',
        dashboardTitle: 'Uppy Dashboard',
        copyLinkToClipboardSuccess: 'Link copied to clipboard',
        copyLinkToClipboardFallback: 'Copy the URL below',
        copyLink: 'Copy link',
        fileSource: 'File source: %{name}',
        done: 'Done',
        back: 'Back',
        name: 'Name',
        removeFile: 'Remove file',
        editFile: 'Edit file',
        editing: 'Editing %{file}',
        edit: 'Edit',
        finishEditingFile: 'Finish editing file',
        saveChanges: 'Save changes',
        cancel: 'Cancel',
        localDisk: 'Local Disk',
        myDevice: 'My Device',
        dropPasteImport: 'Drop files here, paste, %{browse} or import from',
        dropPaste: 'Drop files here, paste or %{browse}',
        browse: 'browse',
        fileProgress: 'File progress: upload speed and ETA',
        numberOfSelectedFiles: 'Number of selected files',
        uploadAllNewFiles: 'Upload all new files',
        emptyFolderAdded: 'No files were added from empty folder',
        uploadComplete: 'Upload complete',
        uploadPaused: 'Upload paused',
        resumeUpload: 'Resume upload',
        pauseUpload: 'Pause upload',
        retryUpload: 'Retry upload',
        cancelUpload: 'Cancel upload',
        xFilesSelected: {
          0: '%{smart_count} file selected',
          1: '%{smart_count} files selected'
        },
        uploadXFiles: {
          0: 'Upload %{smart_count} file',
          1: 'Upload %{smart_count} files'
        },
        uploadingXFiles: {
          0: 'Uploading %{smart_count} file',
          1: 'Uploading %{smart_count} files'
        },
        processingXFiles: {
          0: 'Processing %{smart_count} file',
          1: 'Processing %{smart_count} files'
        },
        uploadXNewFiles: {
          0: 'Upload +%{smart_count} file',
          1: 'Upload +%{smart_count} files'
        },
        folderAdded: {
          0: 'Added %{smart_count} file from %{folder}',
          1: 'Added %{smart_count} files from %{folder}'
        }
      }

      // set default options
    };var defaultOptions = {
      target: 'body',
      metaFields: [],
      trigger: '#uppy-select-files',
      inline: false,
      width: 750,
      height: 550,
      thumbnailWidth: 280,
      defaultTabIcon: defaultTabIcon,
      showLinkToFileUploadResult: true,
      showProgressDetails: false,
      hideUploadButton: false,
      hideRetryButton: false,
      hidePauseResumeCancelButtons: false,
      hideProgressAfterFinish: false,
      note: null,
      closeModalOnClickOutside: false,
      closeAfterFinish: false,
      disableStatusBar: false,
      disableInformer: false,
      disableThumbnailGenerator: false,
      disablePageScrollWhenModalOpen: true,
      animateOpenClose: true,
      proudlyDisplayPoweredByUppy: true,
      onRequestCloseModal: function onRequestCloseModal() {
        return _this.closeModal();
      },
      showSelectedFiles: true,
      // locale: defaultLocale,
      browserBackButtonClose: false

      // merge default options with the ones set by user
    };_this.opts = _extends({}, defaultOptions, opts);

    // i18n
    _this.translator = new Translator([defaultLocale, _this.uppy.locale, _this.opts.locale]);
    _this.i18n = _this.translator.translate.bind(_this.translator);
    _this.i18nArray = _this.translator.translateArray.bind(_this.translator);

    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.requestCloseModal = _this.requestCloseModal.bind(_this);
    _this.isModalOpen = _this.isModalOpen.bind(_this);

    _this.addTarget = _this.addTarget.bind(_this);
    _this.removeTarget = _this.removeTarget.bind(_this);
    _this.hideAllPanels = _this.hideAllPanels.bind(_this);
    _this.showPanel = _this.showPanel.bind(_this);
    _this.getFocusableNodes = _this.getFocusableNodes.bind(_this);
    _this.setFocusToFirstNode = _this.setFocusToFirstNode.bind(_this);
    _this.handlePopState = _this.handlePopState.bind(_this);
    _this.maintainFocus = _this.maintainFocus.bind(_this);

    _this.initEvents = _this.initEvents.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleFileAdded = _this.handleFileAdded.bind(_this);
    _this.handleComplete = _this.handleComplete.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.toggleFileCard = _this.toggleFileCard.bind(_this);
    _this.toggleAddFilesPanel = _this.toggleAddFilesPanel.bind(_this);
    _this.handleDrop = _this.handleDrop.bind(_this);
    _this.handlePaste = _this.handlePaste.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.render = _this.render.bind(_this);
    _this.install = _this.install.bind(_this);
    return _this;
  }

  Dashboard.prototype.removeTarget = function removeTarget(plugin) {
    var pluginState = this.getPluginState();
    // filter out the one we want to remove
    var newTargets = pluginState.targets.filter(function (target) {
      return target.id !== plugin.id;
    });

    this.setPluginState({
      targets: newTargets
    });
  };

  Dashboard.prototype.addTarget = function addTarget(plugin) {
    var callerPluginId = plugin.id || plugin.constructor.name;
    var callerPluginName = plugin.title || callerPluginId;
    var callerPluginType = plugin.type;

    if (callerPluginType !== 'acquirer' && callerPluginType !== 'progressindicator' && callerPluginType !== 'presenter') {
      var msg = 'Dashboard: Modal can only be used by plugins of types: acquirer, progressindicator, presenter';
      this.uppy.log(msg);
      return;
    }

    var target = {
      id: callerPluginId,
      name: callerPluginName,
      type: callerPluginType
    };

    var state = this.getPluginState();
    var newTargets = state.targets.slice();
    newTargets.push(target);

    this.setPluginState({
      targets: newTargets
    });

    return this.el;
  };

  Dashboard.prototype.hideAllPanels = function hideAllPanels() {
    this.setPluginState({
      activePanel: false,
      showAddFilesPanel: false
    });
  };

  Dashboard.prototype.showPanel = function showPanel(id) {
    var _getPluginState = this.getPluginState(),
        targets = _getPluginState.targets;

    var activePanel = targets.filter(function (target) {
      return target.type === 'acquirer' && target.id === id;
    })[0];

    this.setPluginState({
      activePanel: activePanel
    });
  };

  Dashboard.prototype.requestCloseModal = function requestCloseModal() {
    if (this.opts.onRequestCloseModal) {
      return this.opts.onRequestCloseModal();
    } else {
      this.closeModal();
    }
  };

  Dashboard.prototype.getFocusableNodes = function getFocusableNodes() {
    var nodes = this.el.querySelectorAll(FOCUSABLE_ELEMENTS);
    return Object.keys(nodes).map(function (key) {
      return nodes[key];
    });
  };

  Dashboard.prototype.setFocusToFirstNode = function setFocusToFirstNode() {
    var focusableNodes = this.getFocusableNodes();
    if (focusableNodes.length) focusableNodes[0].focus();
  };

  Dashboard.prototype.updateBrowserHistory = function updateBrowserHistory() {
    // Ensure history state does not already contain our modal name to avoid double-pushing
    if (!history.state || !history.state[this.modalName]) {
      var _history$pushState;

      // Push to history so that the page is not lost on browser back button press
      history.pushState((_history$pushState = {}, _history$pushState[this.modalName] = true, _history$pushState), '');
    }

    // Listen for back button presses
    window.addEventListener('popstate', this.handlePopState, false);
  };

  Dashboard.prototype.handlePopState = function handlePopState(event) {
    // Close the modal if the history state no longer contains our modal name
    if (!event.state || !event.state[this.modalName]) {
      this.closeModal({ manualClose: false });
    }

    // When the browser back button is pressed and uppy is now the latest entry in the history but the modal is closed, fix the history by removing the uppy history entry
    // This occurs when another entry is added into the history state while the modal is open, and then the modal gets manually closed
    // Solves PR #575 (https://github.com/transloadit/uppy/pull/575)
    if (!this.isModalOpen() && event.state && event.state[this.modalName]) {
      history.go(-1);
    }
  };

  Dashboard.prototype.setFocusToBrowse = function setFocusToBrowse() {
    var browseBtn = this.el.querySelector('.uppy-Dashboard-browse');
    if (browseBtn) browseBtn.focus();
  };

  Dashboard.prototype.maintainFocus = function maintainFocus(event) {
    var focusableNodes = this.getFocusableNodes();
    var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

    if (event.shiftKey && focusedItemIndex === 0) {
      focusableNodes[focusableNodes.length - 1].focus();
      event.preventDefault();
    }

    if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
      focusableNodes[0].focus();
      event.preventDefault();
    }
  };

  Dashboard.prototype.openModal = function openModal() {
    var _this2 = this;

    // save scroll position
    this.savedScrollPosition = window.scrollY;
    // save active element, so we can restore focus when modal is closed
    this.savedActiveElement = document.activeElement;

    if (this.opts.disablePageScrollWhenModalOpen) {
      document.body.classList.add('uppy-Dashboard-isFixed');
    }

    if (this.opts.animateOpenClose && this.getPluginState().isClosing) {
      var handler = function handler() {
        _this2.setPluginState({
          isHidden: false
        });
        _this2.el.removeEventListener('animationend', handler, false);
      };
      this.el.addEventListener('animationend', handler, false);
    } else {
      this.setPluginState({
        isHidden: false
      });
    }

    if (this.opts.browserBackButtonClose) {
      this.updateBrowserHistory();
    }

    // handle ESC and TAB keys in modal dialog
    document.addEventListener('keydown', this.handleKeyDown);

    // this.rerender(this.uppy.getState())
    this.setFocusToBrowse();
  };

  Dashboard.prototype.closeModal = function closeModal() {
    var _this3 = this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _opts$manualClose = opts.manualClose,
        manualClose = _opts$manualClose === undefined ? true : _opts$manualClose;


    if (this.opts.disablePageScrollWhenModalOpen) {
      document.body.classList.remove('uppy-Dashboard-isFixed');
    }

    if (this.opts.animateOpenClose) {
      this.setPluginState({
        isClosing: true
      });
      var handler = function handler() {
        _this3.setPluginState({
          isHidden: true,
          isClosing: false
        });
        _this3.el.removeEventListener('animationend', handler, false);
      };
      this.el.addEventListener('animationend', handler, false);
    } else {
      this.setPluginState({
        isHidden: true
      });
    }

    // handle ESC and TAB keys in modal dialog
    document.removeEventListener('keydown', this.handleKeyDown);

    this.savedActiveElement.focus();

    if (manualClose) {
      if (this.opts.browserBackButtonClose) {
        // Make sure that the latest entry in the history state is our modal name
        if (history.state && history.state[this.modalName]) {
          // Go back in history to clear out the entry we created (ultimately closing the modal)
          history.go(-1);
        }
      }
    }
  };

  Dashboard.prototype.isModalOpen = function isModalOpen() {
    return !this.getPluginState().isHidden || false;
  };

  Dashboard.prototype.handleKeyDown = function handleKeyDown(event) {
    // close modal on esc key press
    if (event.keyCode === ESC_KEY) this.requestCloseModal(event);
    // maintainFocus on tab key press
    if (event.keyCode === TAB_KEY) this.maintainFocus(event);
  };

  Dashboard.prototype.handleClickOutside = function handleClickOutside() {
    if (this.opts.closeModalOnClickOutside) this.requestCloseModal();
  };

  Dashboard.prototype.handlePaste = function handlePaste(ev) {
    var _this4 = this;

    var files = toArray(ev.clipboardData.items);
    files.forEach(function (file) {
      if (file.kind !== 'file') return;

      var blob = file.getAsFile();
      if (!blob) {
        _this4.uppy.log('[Dashboard] File pasted, but the file blob is empty');
        _this4.uppy.info('Error pasting file', 'error');
        return;
      }
      _this4.uppy.log('[Dashboard] File pasted');
      try {
        _this4.uppy.addFile({
          source: _this4.id,
          name: file.name,
          type: file.type,
          data: blob
        });
      } catch (err) {
        // Nothing, restriction errors handled in Core
      }
    });
  };

  Dashboard.prototype.handleInputChange = function handleInputChange(ev) {
    var _this5 = this;

    ev.preventDefault();
    var files = toArray(ev.target.files);

    files.forEach(function (file) {
      try {
        _this5.uppy.addFile({
          source: _this5.id,
          name: file.name,
          type: file.type,
          data: file
        });
      } catch (err) {
        // Nothing, restriction errors handled in Core
      }
    });
  };

  Dashboard.prototype.initEvents = function initEvents() {
    var _this6 = this;

    // Modal open button
    var showModalTrigger = findAllDOMElements(this.opts.trigger);
    if (!this.opts.inline && showModalTrigger) {
      showModalTrigger.forEach(function (trigger) {
        return trigger.addEventListener('click', _this6.openModal);
      });
    }

    if (!this.opts.inline && !showModalTrigger) {
      this.uppy.log('Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options unless you are planning to call openModal() method yourself');
    }

    // Drag Drop
    this.removeDragDropListener = dragDrop(this.el, function (files) {
      _this6.handleDrop(files);
    });

    // Watch for Dashboard container (`.uppy-Dashboard-inner`) resize
    // and update containerWidth/containerHeight in plugin state accordingly
    this.ro = new ResizeObserver(function (entries, observer) {
      for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var entry = _ref;
        var _entry$contentRect = entry.contentRect,
            width = _entry$contentRect.width,
            height = _entry$contentRect.height;


        _this6.uppy.log('[Dashboard] resized: ' + width + ' / ' + height);

        _this6.setPluginState({
          containerWidth: width,
          containerHeight: height
        });
      }
    });
    this.ro.observe(this.el.querySelector('.uppy-Dashboard-inner'));

    this.uppy.on('plugin-remove', this.removeTarget);
    this.uppy.on('file-added', this.handleFileAdded);
    this.uppy.on('complete', this.handleComplete);
  };

  Dashboard.prototype.handleFileAdded = function handleFileAdded() {
    this.hideAllPanels();
  };

  Dashboard.prototype.handleComplete = function handleComplete(_ref2) {
    var failed = _ref2.failed,
        uploadID = _ref2.uploadID;

    if (this.opts.closeAfterFinish && failed.length === 0) {
      // All uploads are done
      this.requestCloseModal();
    }
  };

  Dashboard.prototype.removeEvents = function removeEvents() {
    var _this7 = this;

    var showModalTrigger = findAllDOMElements(this.opts.trigger);
    if (!this.opts.inline && showModalTrigger) {
      showModalTrigger.forEach(function (trigger) {
        return trigger.removeEventListener('click', _this7.openModal);
      });
    }

    this.ro.unobserve(this.el.querySelector('.uppy-Dashboard-inner'));

    this.removeDragDropListener();
    // window.removeEventListener('resize', this.throttledUpdateDashboardElWidth)
    window.removeEventListener('popstate', this.handlePopState, false);
    this.uppy.off('plugin-remove', this.removeTarget);
    this.uppy.off('file-added', this.handleFileAdded);
    this.uppy.off('complete', this.handleComplete);
  };

  Dashboard.prototype.toggleFileCard = function toggleFileCard(fileId) {
    this.setPluginState({
      fileCardFor: fileId || false
    });
  };

  Dashboard.prototype.toggleAddFilesPanel = function toggleAddFilesPanel(show) {
    this.setPluginState({
      showAddFilesPanel: show
    });
  };

  Dashboard.prototype.handleDrop = function handleDrop(files) {
    var _this8 = this;

    this.uppy.log('[Dashboard] Files were dropped');

    files.forEach(function (file) {
      try {
        _this8.uppy.addFile({
          source: _this8.id,
          name: file.name,
          type: file.type,
          data: file
        });
      } catch (err) {
        // Nothing, restriction errors handled in Core
      }
    });
  };

  Dashboard.prototype.render = function render(state) {
    var _this9 = this;

    var pluginState = this.getPluginState();
    var files = state.files,
        capabilities = state.capabilities,
        allowNewUpload = state.allowNewUpload;

    // TODO: move this to Core, to share between Status Bar and Dashboard
    // (and any other plugin that might need it, too)

    var newFiles = Object.keys(files).filter(function (file) {
      return !files[file].progress.uploadStarted;
    });

    var uploadStartedFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadStarted;
    });

    var pausedFiles = Object.keys(files).filter(function (file) {
      return files[file].isPaused;
    });

    var completeFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadComplete;
    });

    var erroredFiles = Object.keys(files).filter(function (file) {
      return files[file].error;
    });

    var inProgressFiles = Object.keys(files).filter(function (file) {
      return !files[file].progress.uploadComplete && files[file].progress.uploadStarted;
    });

    var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
      return !files[file].isPaused;
    });

    var processingFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.preprocess || files[file].progress.postprocess;
    });

    var isUploadStarted = uploadStartedFiles.length > 0;

    var isAllComplete = state.totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;

    var isAllErrored = isUploadStarted && erroredFiles.length === uploadStartedFiles.length;

    var isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;
    // const isAllPaused = inProgressNotPausedFiles.length === 0 &&
    //   !isAllComplete &&
    //   !isAllErrored &&
    //   uploadStartedFiles.length > 0

    // let inProgressNotPausedFilesArray = []
    // inProgressNotPausedFiles.forEach((file) => {
    //   inProgressNotPausedFilesArray.push(files[file])
    // })

    // let totalSize = 0
    // let totalUploadedSize = 0
    // inProgressNotPausedFilesArray.forEach((file) => {
    //   totalSize = totalSize + (file.progress.bytesTotal || 0)
    //   totalUploadedSize = totalUploadedSize + (file.progress.bytesUploaded || 0)
    // })
    // totalSize = prettyBytes(totalSize)
    // totalUploadedSize = prettyBytes(totalUploadedSize)

    var attachRenderFunctionToTarget = function attachRenderFunctionToTarget(target) {
      var plugin = _this9.uppy.getPlugin(target.id);
      return _extends({}, target, {
        icon: plugin.icon || _this9.opts.defaultTabIcon,
        render: plugin.render
      });
    };

    var isSupported = function isSupported(target) {
      var plugin = _this9.uppy.getPlugin(target.id);
      // If the plugin does not provide a `supported` check, assume the plugin works everywhere.
      if (typeof plugin.isSupported !== 'function') {
        return true;
      }
      return plugin.isSupported();
    };

    var acquirers = pluginState.targets.filter(function (target) {
      return target.type === 'acquirer' && isSupported(target);
    }).map(attachRenderFunctionToTarget);

    var progressindicators = pluginState.targets.filter(function (target) {
      return target.type === 'progressindicator';
    }).map(attachRenderFunctionToTarget);

    var startUpload = function startUpload(ev) {
      _this9.uppy.upload().catch(function (err) {
        // Log error.
        _this9.uppy.log(err.stack || err.message || err);
      });
    };

    var cancelUpload = function cancelUpload(fileID) {
      _this9.uppy.removeFile(fileID);
    };

    var saveFileCard = function saveFileCard(meta, fileID) {
      _this9.uppy.setFileMeta(fileID, meta);
      _this9.toggleFileCard();
    };

    return DashboardUI({
      state: state,
      modal: pluginState,
      files: files,
      newFiles: newFiles,
      uploadStartedFiles: uploadStartedFiles,
      completeFiles: completeFiles,
      erroredFiles: erroredFiles,
      inProgressFiles: inProgressFiles,
      inProgressNotPausedFiles: inProgressNotPausedFiles,
      processingFiles: processingFiles,
      isUploadStarted: isUploadStarted,
      isAllComplete: isAllComplete,
      isAllErrored: isAllErrored,
      isAllPaused: isAllPaused,
      totalFileCount: Object.keys(files).length,
      totalProgress: state.totalProgress,
      allowNewUpload: allowNewUpload,
      acquirers: acquirers,
      activePanel: pluginState.activePanel,
      animateOpenClose: this.opts.animateOpenClose,
      isClosing: pluginState.isClosing,
      getPlugin: this.uppy.getPlugin,
      progressindicators: progressindicators,
      autoProceed: this.uppy.opts.autoProceed,
      id: this.id,
      closeModal: this.requestCloseModal,
      handleClickOutside: this.handleClickOutside,
      handleInputChange: this.handleInputChange,
      handlePaste: this.handlePaste,
      inline: this.opts.inline,
      showPanel: this.showPanel,
      hideAllPanels: this.hideAllPanels,
      log: this.uppy.log,
      i18n: this.i18n,
      i18nArray: this.i18nArray,
      addFile: this.uppy.addFile,
      removeFile: this.uppy.removeFile,
      info: this.uppy.info,
      note: this.opts.note,
      metaFields: pluginState.metaFields,
      resumableUploads: capabilities.resumableUploads || false,
      bundled: capabilities.bundled || false,
      startUpload: startUpload,
      pauseUpload: this.uppy.pauseResume,
      retryUpload: this.uppy.retryUpload,
      cancelUpload: cancelUpload,
      cancelAll: this.uppy.cancelAll,
      fileCardFor: pluginState.fileCardFor,
      toggleFileCard: this.toggleFileCard,
      toggleAddFilesPanel: this.toggleAddFilesPanel,
      showAddFilesPanel: pluginState.showAddFilesPanel,
      saveFileCard: saveFileCard,
      width: this.opts.width,
      height: this.opts.height,
      showLinkToFileUploadResult: this.opts.showLinkToFileUploadResult,
      proudlyDisplayPoweredByUppy: this.opts.proudlyDisplayPoweredByUppy,
      currentWidth: pluginState.containerWidth,
      isWide: pluginState.containerWidth > 400,
      containerWidth: pluginState.containerWidth,
      isTargetDOMEl: this.isTargetDOMEl,
      allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
      maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
      showSelectedFiles: this.opts.showSelectedFiles
    });
  };

  Dashboard.prototype.discoverProviderPlugins = function discoverProviderPlugins() {
    var _this10 = this;

    this.uppy.iteratePlugins(function (plugin) {
      if (plugin && !plugin.target && plugin.opts && plugin.opts.target === _this10.constructor) {
        _this10.addTarget(plugin);
      }
    });
  };

  Dashboard.prototype.install = function install() {
    var _this11 = this;

    // Set default state for Dashboard
    this.setPluginState({
      isHidden: true,
      showFileCard: false,
      showAddFilesPanel: false,
      activePanel: false,
      metaFields: this.opts.metaFields,
      targets: []
    });

    var _opts = this.opts,
        inline = _opts.inline,
        closeAfterFinish = _opts.closeAfterFinish;

    if (inline && closeAfterFinish) {
      throw new Error('[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.');
    }

    var allowMultipleUploads = this.uppy.opts.allowMultipleUploads;

    if (allowMultipleUploads && closeAfterFinish) {
      this.uppy.log('[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploads` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true', 'warning');
    }

    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }

    var plugins = this.opts.plugins || [];
    plugins.forEach(function (pluginID) {
      var plugin = _this11.uppy.getPlugin(pluginID);
      if (plugin) {
        plugin.mount(_this11, plugin);
      }
    });

    if (!this.opts.disableStatusBar) {
      this.uppy.use(StatusBar, {
        id: this.id + ':StatusBar',
        target: this,
        hideUploadButton: this.opts.hideUploadButton,
        hideRetryButton: this.opts.hideRetryButton,
        hidePauseResumeButton: this.opts.hidePauseResumeButton,
        hideCancelButton: this.opts.hideCancelButton,
        showProgressDetails: this.opts.showProgressDetails,
        hideAfterFinish: this.opts.hideProgressAfterFinish,
        locale: this.opts.locale
      });
    }

    if (!this.opts.disableInformer) {
      this.uppy.use(Informer, {
        id: this.id + ':Informer',
        target: this
      });
    }

    if (!this.opts.disableThumbnailGenerator) {
      this.uppy.use(ThumbnailGenerator, {
        id: this.id + ':ThumbnailGenerator',
        thumbnailWidth: this.opts.thumbnailWidth
      });
    }

    this.discoverProviderPlugins();

    this.initEvents();
  };

  Dashboard.prototype.uninstall = function uninstall() {
    var _this12 = this;

    if (!this.opts.disableInformer) {
      var informer = this.uppy.getPlugin(this.id + ':Informer');
      // Checking if this plugin exists, in case it was removed by uppy-core
      // before the Dashboard was.
      if (informer) this.uppy.removePlugin(informer);
    }

    if (!this.opts.disableStatusBar) {
      var statusBar = this.uppy.getPlugin(this.id + ':StatusBar');
      if (statusBar) this.uppy.removePlugin(statusBar);
    }

    if (!this.opts.disableThumbnailGenerator) {
      var thumbnail = this.uppy.getPlugin(this.id + ':ThumbnailGenerator');
      if (thumbnail) this.uppy.removePlugin(thumbnail);
    }

    var plugins = this.opts.plugins || [];
    plugins.forEach(function (pluginID) {
      var plugin = _this12.uppy.getPlugin(pluginID);
      if (plugin) plugin.unmount();
    });

    this.unmount();
    this.removeEvents();
  };

  return Dashboard;
}(Plugin);

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies text to clipboard by creating an almost invisible textarea,
 * adding text there, then running execCommand('copy').
 * Falls back to prompt() when the easy way fails (hello, Safari!)
 * From http://stackoverflow.com/a/30810322
 *
 * @param {String} textToCopy
 * @param {String} fallbackString
 * @return {Promise}
 */
module.exports = function copyToClipboard(textToCopy, fallbackString) {
  fallbackString = fallbackString || 'Copy the URL below';

  return new Promise(function (resolve) {
    var textArea = document.createElement('textarea');
    textArea.setAttribute('style', {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '2em',
      height: '2em',
      padding: 0,
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      background: 'transparent'
    });

    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    var magicCopyFailed = function magicCopyFailed() {
      document.body.removeChild(textArea);
      window.prompt(fallbackString, textToCopy);
      resolve();
    };

    try {
      var successful = document.execCommand('copy');
      if (!successful) {
        return magicCopyFailed('copy command unavailable');
      }
      document.body.removeChild(textArea);
      return resolve();
    } catch (err) {
      document.body.removeChild(textArea);
      return magicCopyFailed(err);
    }
  });
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../components/icons */ "./node_modules/@uppy/dashboard/lib/components/icons.js"),
    iconText = _require.iconText,
    iconAudio = _require.iconAudio,
    iconVideo = _require.iconVideo,
    iconPDF = _require.iconPDF;

module.exports = function getIconByMime(fileType) {
  var defaultChoice = {
    color: '#cbcbcb',
    icon: ''
  };

  if (!fileType) return defaultChoice;

  var fileTypeGeneral = fileType.split('/')[0];
  var fileTypeSpecific = fileType.split('/')[1];

  if (fileTypeGeneral === 'text') {
    return {
      color: '#cbcbcb',
      icon: iconText()
    };
  }

  if (fileTypeGeneral === 'audio') {
    return {
      color: '#1abc9c',
      icon: iconAudio()
    };
  }

  if (fileTypeGeneral === 'video') {
    return {
      color: '#2980b9',
      icon: iconVideo()
    };
  }

  if (fileTypeGeneral === 'application' && fileTypeSpecific === 'pdf') {
    return {
      color: '#e74c3c',
      icon: iconPDF()
    };
  }

  if (fileTypeGeneral === 'image') {
    return {
      color: '#f2f2f2',
      icon: ''
    };
  }

  return defaultChoice;
};

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ignore drop/paste events if they are not in input or textarea —
// otherwise when Url plugin adds drop/paste listeners to this.el,
// draging UI elements or pasting anything into any field triggers those events —
// Url treats them as URLs that need to be imported

function ignoreEvent(ev) {
  var tagName = ev.target.tagName;
  if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
    ev.stopPropagation();
    return;
  }
  ev.preventDefault();
  ev.stopPropagation();
}

module.exports = ignoreEvent;

/***/ }),

/***/ "./node_modules/@uppy/dashboard/lib/utils/truncateString.js":
/*!******************************************************************!*\
  !*** ./node_modules/@uppy/dashboard/lib/utils/truncateString.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function truncateString(str, length) {
  if (str.length > length) {
    return str.substr(0, length / 2) + '...' + str.substr(str.length - length / 4, str.length);
  }
  return str;

  // more precise version if needed
  // http://stackoverflow.com/a/831583
};

/***/ }),

/***/ "./node_modules/@uppy/informer/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@uppy/informer/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require2.h;

/**
 * Informer
 * Shows rad message bubbles
 * used like this: `uppy.info('hello world', 'info', 5000)`
 * or for errors: `uppy.info('Error uploading img.jpg', 'error', 5000)`
 *
 */


module.exports = function (_Plugin) {
  _inherits(Informer, _Plugin);

  function Informer(uppy, opts) {
    _classCallCheck(this, Informer);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.type = 'progressindicator';
    _this.id = _this.opts.id || 'Informer';
    _this.title = 'Informer';

    // set default options
    var defaultOptions = {
      typeColors: {
        info: {
          text: '#fff',
          bg: '#000'
        },
        warning: {
          text: '#fff',
          bg: '#F6A623'
        },
        error: {
          text: '#fff',
          bg: '#D32F2F'
        },
        success: {
          text: '#fff',
          bg: '#1BB240'
        }
      }

      // merge default options with the ones set by user
    };_this.opts = _extends({}, defaultOptions, opts);

    _this.render = _this.render.bind(_this);
    return _this;
  }

  Informer.prototype.render = function render(state) {
    var _state$info = state.info,
        isHidden = _state$info.isHidden,
        message = _state$info.message,
        details = _state$info.details;
    // const style = {
    //   backgroundColor: this.opts.typeColors[type].bg,
    //   color: this.opts.typeColors[type].text
    // }

    return h(
      'div',
      { 'class': 'uppy uppy-Informer',
        'aria-hidden': isHidden },
      h(
        'p',
        { role: 'alert' },
        message,
        ' ',
        details && h(
          'span',
          {
            'aria-label': details,
            'data-microtip-position': 'top',
            'data-microtip-size': 'large',
            role: 'tooltip' },
          '?'
        )
      )
    );
  };

  Informer.prototype.install = function install() {
    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
  };

  return Informer;
}(Plugin);

/***/ }),

/***/ "./node_modules/@uppy/status-bar/lib/StatusBar.js":
/*!********************************************************!*\
  !*** ./node_modules/@uppy/status-bar/lib/StatusBar.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var throttle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
var statusBarStates = __webpack_require__(/*! ./StatusBarStates */ "./node_modules/@uppy/status-bar/lib/StatusBarStates.js");
var prettyBytes = __webpack_require__(/*! prettier-bytes */ "./node_modules/prettier-bytes/index.js");
var prettyETA = __webpack_require__(/*! @uppy/utils/lib/prettyETA */ "./node_modules/@uppy/utils/lib/prettyETA.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs"),
    h = _require.h;

function calculateProcessingProgress(files) {
  // Collect pre or postprocessing progress states.
  var progresses = [];
  Object.keys(files).forEach(function (fileID) {
    var progress = files[fileID].progress;

    if (progress.preprocess) {
      progresses.push(progress.preprocess);
    }
    if (progress.postprocess) {
      progresses.push(progress.postprocess);
    }
  });

  // In the future we should probably do this differently. For now we'll take the
  // mode and message from the first file…
  var _progresses$ = progresses[0],
      mode = _progresses$.mode,
      message = _progresses$.message;

  var value = progresses.filter(isDeterminate).reduce(function (total, progress, index, all) {
    return total + progress.value / all.length;
  }, 0);
  function isDeterminate(progress) {
    return progress.mode === 'determinate';
  }

  return {
    mode: mode,
    message: message,
    value: value
  };
}

function togglePauseResume(props) {
  if (props.isAllComplete) return;

  if (!props.resumableUploads) {
    return props.cancelAll();
  }

  if (props.isAllPaused) {
    return props.resumeAll();
  }

  return props.pauseAll();
}

module.exports = function (props) {
  props = props || {};

  var _props = props,
      newFiles = _props.newFiles,
      allowNewUpload = _props.allowNewUpload,
      isUploadInProgress = _props.isUploadInProgress,
      isAllPaused = _props.isAllPaused,
      resumableUploads = _props.resumableUploads,
      error = _props.error,
      hideUploadButton = _props.hideUploadButton,
      hidePauseResumeButton = _props.hidePauseResumeButton,
      hideCancelButton = _props.hideCancelButton,
      hideRetryButton = _props.hideRetryButton;


  var uploadState = props.uploadState;

  var progressValue = props.totalProgress;
  var progressMode = void 0;
  var progressBarContent = void 0;

  if (uploadState === statusBarStates.STATE_PREPROCESSING || uploadState === statusBarStates.STATE_POSTPROCESSING) {
    var progress = calculateProcessingProgress(props.files);
    progressMode = progress.mode;
    if (progressMode === 'determinate') {
      progressValue = progress.value * 100;
    }

    progressBarContent = ProgressBarProcessing(progress);
  } else if (uploadState === statusBarStates.STATE_COMPLETE) {
    progressBarContent = ProgressBarComplete(props);
  } else if (uploadState === statusBarStates.STATE_UPLOADING) {
    progressBarContent = ProgressBarUploading(props);
  } else if (uploadState === statusBarStates.STATE_ERROR) {
    progressValue = undefined;
    progressBarContent = ProgressBarError(props);
  }

  var width = typeof progressValue === 'number' ? progressValue : 100;
  var isHidden = uploadState === statusBarStates.STATE_WAITING && props.hideUploadButton || uploadState === statusBarStates.STATE_WAITING && !props.newFiles > 0 || uploadState === statusBarStates.STATE_COMPLETE && props.hideAfterFinish;

  var showUploadBtn = !error && newFiles && !isUploadInProgress && !isAllPaused && allowNewUpload && !hideUploadButton;
  var showCancelBtn = !hideCancelButton && uploadState !== statusBarStates.STATE_WAITING && uploadState !== statusBarStates.STATE_COMPLETE;
  var showPauseResumeBtn = resumableUploads && !hidePauseResumeButton && uploadState !== statusBarStates.STATE_WAITING && uploadState !== statusBarStates.STATE_PREPROCESSING && uploadState !== statusBarStates.STATE_POSTPROCESSING && uploadState !== statusBarStates.STATE_COMPLETE;
  var showRetryBtn = error && !hideRetryButton;

  var progressClassNames = 'uppy-StatusBar-progress\n                           ' + (progressMode ? 'is-' + progressMode : '');

  var statusBarClassNames = classNames({ 'uppy-Root': props.isTargetDOMEl }, 'uppy-StatusBar', 'is-' + uploadState);

  return h(
    'div',
    { 'class': statusBarClassNames, 'aria-hidden': isHidden },
    h('div', { 'class': progressClassNames,
      style: { width: width + '%' },
      role: 'progressbar',
      'aria-valuemin': '0',
      'aria-valuemax': '100',
      'aria-valuenow': progressValue }),
    progressBarContent,
    h(
      'div',
      { 'class': 'uppy-StatusBar-actions' },
      showUploadBtn ? h(UploadBtn, _extends({}, props, { uploadState: uploadState })) : null,
      showRetryBtn ? h(RetryBtn, props) : null,
      showPauseResumeBtn ? h(PauseResumeButton, props) : null,
      showCancelBtn ? h(CancelBtn, props) : null
    )
  );
};

var UploadBtn = function UploadBtn(props) {
  var uploadBtnClassNames = classNames('uppy-u-reset', 'uppy-c-btn', 'uppy-StatusBar-actionBtn', 'uppy-StatusBar-actionBtn--upload', { 'uppy-c-btn-primary': props.uploadState === statusBarStates.STATE_WAITING });

  return h(
    'button',
    { type: 'button',
      'class': uploadBtnClassNames,
      'aria-label': props.i18n('uploadXFiles', { smart_count: props.newFiles }),
      onclick: props.startUpload },
    props.newFiles && props.isUploadStarted ? props.i18n('uploadXNewFiles', { smart_count: props.newFiles }) : props.i18n('uploadXFiles', { smart_count: props.newFiles })
  );
};

var RetryBtn = function RetryBtn(props) {
  return h(
    'button',
    { type: 'button',
      'class': 'uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry',
      'aria-label': props.i18n('retryUpload'),
      onclick: props.retryAll },
    props.i18n('retry')
  );
};

var CancelBtn = function CancelBtn(props) {
  return h(
    'button',
    { type: 'button',
      'class': 'uppy-u-reset uppy-StatusBar-actionCircleBtn',
      title: props.i18n('cancel'),
      'aria-label': props.i18n('cancel'),
      onclick: props.cancelAll },
    h(
      'svg',
      { 'aria-hidden': 'true', 'class': 'UppyIcon', width: '8', height: '8', viewBox: '0 0 8 8', xmlns: 'http://www.w3.org/2000/svg' },
      h('path', { d: 'M5.21 4.104l1.658 1.658-1.106 1.106-1.658-1.659-1.659 1.659L1.34 5.762l1.658-1.658L1.34 2.445 2.445 1.34l1.659 1.658L5.762 1.34l1.106 1.105-1.659 1.659z', 'fill-rule': 'evenodd' })
    )
  );
};

var PauseResumeButton = function PauseResumeButton(props) {
  var isAllPaused = props.isAllPaused,
      i18n = props.i18n;

  var title = isAllPaused ? i18n('resume') : i18n('pause');

  return h(
    'button',
    { title: title, 'class': 'uppy-u-reset uppy-StatusBar-actionCircleBtn', type: 'button', onclick: function onclick() {
        return togglePauseResume(props);
      } },
    isAllPaused ? h(
      'svg',
      { 'aria-hidden': 'true', 'class': 'UppyIcon', width: '8', height: '8', viewBox: '0 0 8 8', xmlns: 'http://www.w3.org/2000/svg' },
      h('path', { d: 'M6.736 3.852l-4.472 2.84V1.075z', 'fill-rule': 'evenodd' })
    ) : h(
      'svg',
      { 'aria-hidden': 'true', 'class': 'UppyIcon', width: '8', height: '8', viewBox: '0 0 8 8', xmlns: 'http://www.w3.org/2000/svg' },
      h('path', { d: 'M1 1h2v6H1zM5 1h2v6H5z', 'fill-rule': 'evenodd' })
    )
  );
};

var LoadingSpinner = function LoadingSpinner(props) {
  return h(
    'svg',
    { 'class': 'uppy-StatusBar-spinner', width: '14', height: '14', xmlns: 'http://www.w3.org/2000/svg' },
    h('path', { d: 'M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0', 'fill-rule': 'evenodd' })
  );
};

var ProgressBarProcessing = function ProgressBarProcessing(props) {
  var value = Math.round(props.value * 100);

  return h(
    'div',
    { 'class': 'uppy-StatusBar-content' },
    h(LoadingSpinner, props),
    props.mode === 'determinate' ? value + '% \xB7 ' : '',
    props.message
  );
};

var ProgressDetails = function ProgressDetails(props) {
  return h(
    'div',
    { 'class': 'uppy-StatusBar-statusSecondary' },
    props.numUploads > 1 && props.i18n('filesUploadedOfTotal', { complete: props.complete, smart_count: props.numUploads }) + ' \xB7 ',
    props.i18n('dataUploadedOfTotal', {
      complete: prettyBytes(props.totalUploadedSize),
      total: prettyBytes(props.totalSize)
    }) + ' \xB7 ',
    props.i18n('xTimeLeft', { time: prettyETA(props.totalETA) })
  );
};

var UploadNewlyAddedFiles = function UploadNewlyAddedFiles(props) {
  var uploadBtnClassNames = classNames('uppy-u-reset', 'uppy-c-btn', 'uppy-StatusBar-actionBtn');

  return h(
    'div',
    { 'class': 'uppy-StatusBar-statusSecondary' },
    h(
      'div',
      { 'class': 'uppy-StatusBar-statusSecondaryHint' },
      props.i18n('xMoreFilesAdded', { smart_count: props.newFiles })
    ),
    h(
      'button',
      { type: 'button',
        'class': uploadBtnClassNames,
        'aria-label': props.i18n('uploadXFiles', { smart_count: props.newFiles }),
        onclick: props.startUpload },
      props.i18n('upload')
    )
  );
};

var ThrottledProgressDetails = throttle(ProgressDetails, 500, { leading: true, trailing: true });

var ProgressBarUploading = function ProgressBarUploading(props) {
  if (!props.isUploadStarted || props.isAllComplete) {
    return null;
  }

  var title = props.isAllPaused ? props.i18n('paused') : props.i18n('uploading');
  var showUploadNewlyAddedFiles = props.newFiles && props.isUploadStarted;

  return h(
    'div',
    { 'class': 'uppy-StatusBar-content', 'aria-label': title, title: title },
    !props.isAllPaused ? h(LoadingSpinner, props) : null,
    h(
      'div',
      { 'class': 'uppy-StatusBar-status' },
      h(
        'div',
        { 'class': 'uppy-StatusBar-statusPrimary' },
        title,
        ': ',
        props.totalProgress,
        '%'
      ),
      !props.isAllPaused && !showUploadNewlyAddedFiles && props.showProgressDetails ? h(ThrottledProgressDetails, props) : null,
      showUploadNewlyAddedFiles ? h(UploadNewlyAddedFiles, props) : null
    )
  );
};

var ProgressBarComplete = function ProgressBarComplete(_ref) {
  var totalProgress = _ref.totalProgress,
      i18n = _ref.i18n;

  return h(
    'div',
    { 'class': 'uppy-StatusBar-content', role: 'status', title: i18n('complete') },
    h(
      'svg',
      { 'aria-hidden': 'true', 'class': 'uppy-StatusBar-statusIndicator UppyIcon', width: '18', height: '17', viewBox: '0 0 23 17' },
      h('path', { d: 'M8.944 17L0 7.865l2.555-2.61 6.39 6.525L20.41 0 23 2.645z' })
    ),
    i18n('complete')
  );
};

var ProgressBarError = function ProgressBarError(_ref2) {
  var error = _ref2.error,
      retryAll = _ref2.retryAll,
      hideRetryButton = _ref2.hideRetryButton,
      i18n = _ref2.i18n;

  return h(
    'div',
    { 'class': 'uppy-StatusBar-content', role: 'alert' },
    h(
      'span',
      { 'class': 'uppy-StatusBar-contentPadding' },
      i18n('uploadFailed'),
      '.'
    ),
    h(
      'span',
      { 'class': 'uppy-StatusBar-details',
        'aria-label': error,
        'data-microtip-position': 'top',
        'data-microtip-size': 'large',
        role: 'tooltip' },
      '?'
    )
  );
};

/***/ }),

/***/ "./node_modules/@uppy/status-bar/lib/StatusBarStates.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uppy/status-bar/lib/StatusBarStates.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'STATE_ERROR': 'error',
  'STATE_WAITING': 'waiting',
  'STATE_PREPROCESSING': 'preprocessing',
  'STATE_UPLOADING': 'uploading',
  'STATE_POSTPROCESSING': 'postprocessing',
  'STATE_COMPLETE': 'complete'
};

/***/ }),

/***/ "./node_modules/@uppy/status-bar/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@uppy/status-bar/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");
var StatusBarUI = __webpack_require__(/*! ./StatusBar */ "./node_modules/@uppy/status-bar/lib/StatusBar.js");
var statusBarStates = __webpack_require__(/*! ./StatusBarStates */ "./node_modules/@uppy/status-bar/lib/StatusBarStates.js");
var getSpeed = __webpack_require__(/*! @uppy/utils/lib/getSpeed */ "./node_modules/@uppy/utils/lib/getSpeed.js");
var getBytesRemaining = __webpack_require__(/*! @uppy/utils/lib/getBytesRemaining */ "./node_modules/@uppy/utils/lib/getBytesRemaining.js");

/**
 * StatusBar: renders a status bar with upload/pause/resume/cancel/retry buttons,
 * progress percentage and time remaining.
 */
module.exports = function (_Plugin) {
  _inherits(StatusBar, _Plugin);

  function StatusBar(uppy, opts) {
    _classCallCheck(this, StatusBar);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.id = _this.opts.id || 'StatusBar';
    _this.title = 'StatusBar';
    _this.type = 'progressindicator';

    var defaultLocale = {
      strings: {
        uploading: 'Uploading',
        upload: 'Upload',
        complete: 'Complete',
        uploadFailed: 'Upload failed',
        pleasePressRetry: 'Please press Retry to upload again',
        paused: 'Paused',
        error: 'Error',
        retry: 'Retry',
        cancel: 'Cancel',
        pause: 'Pause',
        resume: 'Resume',
        pressToRetry: 'Press to retry',
        // retryUpload: 'Retry upload',
        // resumeUpload: 'Resume upload',
        // cancelUpload: 'Cancel upload',
        // pauseUpload: 'Pause upload',
        filesUploadedOfTotal: {
          0: '%{complete} of %{smart_count} file uploaded',
          1: '%{complete} of %{smart_count} files uploaded'
        },
        dataUploadedOfTotal: '%{complete} of %{total}',
        xTimeLeft: '%{time} left',
        uploadXFiles: {
          0: 'Upload %{smart_count} file',
          1: 'Upload %{smart_count} files'
        },
        uploadXNewFiles: {
          0: 'Upload +%{smart_count} file',
          1: 'Upload +%{smart_count} files'
        },
        xMoreFilesAdded: {
          0: '%{smart_count} more file added',
          1: '%{smart_count} more files added'
        }
      }

      // set default options
    };var defaultOptions = {
      target: 'body',
      hideUploadButton: false,
      hideRetryButton: false,
      hidePauseResumeButton: false,
      hideCancelButton: false,
      showProgressDetails: false,
      locale: defaultLocale,
      hideAfterFinish: true

      // merge default options with the ones set by user
    };_this.opts = _extends({}, defaultOptions, opts);

    _this.translator = new Translator([defaultLocale, _this.uppy.locale, _this.opts.locale]);
    _this.i18n = _this.translator.translate.bind(_this.translator);

    _this.startUpload = _this.startUpload.bind(_this);
    _this.render = _this.render.bind(_this);
    _this.install = _this.install.bind(_this);
    return _this;
  }

  StatusBar.prototype.getTotalSpeed = function getTotalSpeed(files) {
    var totalSpeed = 0;
    files.forEach(function (file) {
      totalSpeed = totalSpeed + getSpeed(file.progress);
    });
    return totalSpeed;
  };

  StatusBar.prototype.getTotalETA = function getTotalETA(files) {
    var totalSpeed = this.getTotalSpeed(files);
    if (totalSpeed === 0) {
      return 0;
    }

    var totalBytesRemaining = files.reduce(function (total, file) {
      return total + getBytesRemaining(file.progress);
    }, 0);

    return Math.round(totalBytesRemaining / totalSpeed * 10) / 10;
  };

  StatusBar.prototype.startUpload = function startUpload() {
    var _this2 = this;

    return this.uppy.upload().catch(function (err) {
      _this2.uppy.log(err.stack || err.message || err);
      // Ignore
    });
  };

  StatusBar.prototype.getUploadingState = function getUploadingState(isAllErrored, isAllComplete, files) {
    if (isAllErrored) {
      return statusBarStates.STATE_ERROR;
    }

    if (isAllComplete) {
      return statusBarStates.STATE_COMPLETE;
    }

    var state = statusBarStates.STATE_WAITING;
    var fileIDs = Object.keys(files);
    for (var i = 0; i < fileIDs.length; i++) {
      var progress = files[fileIDs[i]].progress;
      // If ANY files are being uploaded right now, show the uploading state.
      if (progress.uploadStarted && !progress.uploadComplete) {
        return statusBarStates.STATE_UPLOADING;
      }
      // If files are being preprocessed AND postprocessed at this time, we show the
      // preprocess state. If any files are being uploaded we show uploading.
      if (progress.preprocess && state !== statusBarStates.STATE_UPLOADING) {
        state = statusBarStates.STATE_PREPROCESSING;
      }
      // If NO files are being preprocessed or uploaded right now, but some files are
      // being postprocessed, show the postprocess state.
      if (progress.postprocess && state !== statusBarStates.STATE_UPLOADING && state !== statusBarStates.STATE_PREPROCESSING) {
        state = statusBarStates.STATE_POSTPROCESSING;
      }
    }
    return state;
  };

  StatusBar.prototype.render = function render(state) {
    var capabilities = state.capabilities,
        files = state.files,
        allowNewUpload = state.allowNewUpload,
        totalProgress = state.totalProgress,
        error = state.error;

    // TODO: move this to Core, to share between Status Bar and Dashboard
    // (and any other plugin that might need it, too)

    var newFiles = Object.keys(files).filter(function (file) {
      return !files[file].progress.uploadStarted && !files[file].progress.preprocess && !files[file].progress.postprocess;
    });

    var uploadStartedFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadStarted;
    });

    var pausedFiles = uploadStartedFiles.filter(function (file) {
      return files[file].isPaused;
    });

    var completeFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadComplete;
    });

    var erroredFiles = Object.keys(files).filter(function (file) {
      return files[file].error;
    });

    var inProgressFiles = Object.keys(files).filter(function (file) {
      return !files[file].progress.uploadComplete && files[file].progress.uploadStarted;
    });

    var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
      return !files[file].isPaused;
    });

    var startedFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.uploadStarted || files[file].progress.preprocess || files[file].progress.postprocess;
    });

    var processingFiles = Object.keys(files).filter(function (file) {
      return files[file].progress.preprocess || files[file].progress.postprocess;
    });

    var inProgressNotPausedFilesArray = inProgressNotPausedFiles.map(function (file) {
      return files[file];
    });

    var totalETA = this.getTotalETA(inProgressNotPausedFilesArray);

    // total size and uploaded size
    var totalSize = 0;
    var totalUploadedSize = 0;
    inProgressNotPausedFilesArray.forEach(function (file) {
      totalSize = totalSize + (file.progress.bytesTotal || 0);
      totalUploadedSize = totalUploadedSize + (file.progress.bytesUploaded || 0);
    });

    var isUploadStarted = uploadStartedFiles.length > 0;

    var isAllComplete = totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;

    var isAllErrored = isUploadStarted && erroredFiles.length === uploadStartedFiles.length;

    var isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;
    // const isAllPaused = inProgressFiles.length === 0 &&
    //   !isAllComplete &&
    //   !isAllErrored &&
    //   uploadStartedFiles.length > 0

    var isUploadInProgress = inProgressFiles.length > 0;

    var resumableUploads = capabilities.resumableUploads || false;

    return StatusBarUI({
      error: error,
      uploadState: this.getUploadingState(isAllErrored, isAllComplete, state.files || {}),
      allowNewUpload: allowNewUpload,
      totalProgress: totalProgress,
      totalSize: totalSize,
      totalUploadedSize: totalUploadedSize,
      isAllComplete: isAllComplete,
      isAllPaused: isAllPaused,
      isAllErrored: isAllErrored,
      isUploadStarted: isUploadStarted,
      isUploadInProgress: isUploadInProgress,
      complete: completeFiles.length,
      newFiles: newFiles.length,
      numUploads: startedFiles.length,
      totalETA: totalETA,
      files: files,
      i18n: this.i18n,
      pauseAll: this.uppy.pauseAll,
      resumeAll: this.uppy.resumeAll,
      retryAll: this.uppy.retryAll,
      cancelAll: this.uppy.cancelAll,
      startUpload: this.startUpload,
      resumableUploads: resumableUploads,
      showProgressDetails: this.opts.showProgressDetails,
      hideUploadButton: this.opts.hideUploadButton,
      hideRetryButton: this.opts.hideRetryButton,
      hidePauseResumeButton: this.opts.hidePauseResumeButton,
      hideCancelButton: this.opts.hideCancelButton,
      hideAfterFinish: this.opts.hideAfterFinish,
      isTargetDOMEl: this.isTargetDOMEl
    });
  };

  StatusBar.prototype.install = function install() {
    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
  };

  StatusBar.prototype.uninstall = function uninstall() {
    this.unmount();
  };

  return StatusBar;
}(Plugin);

/***/ }),

/***/ "./node_modules/@uppy/store-default/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/store-default/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Default store that keeps state in a simple object.
 */
var DefaultStore = function () {
  function DefaultStore() {
    _classCallCheck(this, DefaultStore);

    this.state = {};
    this.callbacks = [];
  }

  DefaultStore.prototype.getState = function getState() {
    return this.state;
  };

  DefaultStore.prototype.setState = function setState(patch) {
    var prevState = _extends({}, this.state);
    var nextState = _extends({}, this.state, patch);

    this.state = nextState;
    this._publish(prevState, nextState, patch);
  };

  DefaultStore.prototype.subscribe = function subscribe(listener) {
    var _this = this;

    this.callbacks.push(listener);
    return function () {
      // Remove the listener.
      _this.callbacks.splice(_this.callbacks.indexOf(listener), 1);
    };
  };

  DefaultStore.prototype._publish = function _publish() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.callbacks.forEach(function (listener) {
      listener.apply(undefined, args);
    });
  };

  return DefaultStore;
}();

module.exports = function defaultStore() {
  return new DefaultStore();
};

/***/ }),

/***/ "./node_modules/@uppy/thumbnail-generator/lib/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uppy/thumbnail-generator/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var dataURItoBlob = __webpack_require__(/*! @uppy/utils/lib/dataURItoBlob */ "./node_modules/@uppy/utils/lib/dataURItoBlob.js");
var isObjectURL = __webpack_require__(/*! @uppy/utils/lib/isObjectURL */ "./node_modules/@uppy/utils/lib/isObjectURL.js");
var isPreviewSupported = __webpack_require__(/*! @uppy/utils/lib/isPreviewSupported */ "./node_modules/@uppy/utils/lib/isPreviewSupported.js");

/**
 * The Thumbnail Generator plugin
 */

module.exports = function (_Plugin) {
  _inherits(ThumbnailGenerator, _Plugin);

  function ThumbnailGenerator(uppy, opts) {
    _classCallCheck(this, ThumbnailGenerator);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.type = 'thumbnail';
    _this.id = _this.opts.id || 'ThumbnailGenerator';
    _this.title = 'Thumbnail Generator';
    _this.queue = [];
    _this.queueProcessing = false;
    _this.defaultThumbnailDimension = 200;

    var defaultOptions = {
      thumbnailWidth: null,
      thumbnailHeight: null
    };

    _this.opts = _extends({}, defaultOptions, opts);

    _this.onFileAdded = _this.onFileAdded.bind(_this);
    _this.onFileRemoved = _this.onFileRemoved.bind(_this);
    _this.onRestored = _this.onRestored.bind(_this);
    return _this;
  }

  /**
   * Create a thumbnail for the given Uppy file object.
   *
   * @param {{data: Blob}} file
   * @param {number} width
   * @return {Promise}
   */


  ThumbnailGenerator.prototype.createThumbnail = function createThumbnail(file, targetWidth, targetHeight) {
    var _this2 = this;

    var originalUrl = URL.createObjectURL(file.data);

    var onload = new Promise(function (resolve, reject) {
      var image = new Image();
      image.src = originalUrl;
      image.addEventListener('load', function () {
        URL.revokeObjectURL(originalUrl);
        resolve(image);
      });
      image.addEventListener('error', function (event) {
        URL.revokeObjectURL(originalUrl);
        reject(event.error || new Error('Could not create thumbnail'));
      });
    });

    return onload.then(function (image) {
      var dimensions = _this2.getProportionalDimensions(image, targetWidth, targetHeight);
      var canvas = _this2.resizeImage(image, dimensions.width, dimensions.height);
      return _this2.canvasToBlob(canvas, 'image/png');
    }).then(function (blob) {
      return URL.createObjectURL(blob);
    });
  };

  /**
   * Get the new calculated dimensions for the given image and a target width
   * or height. If both width and height are given, only width is taken into
   * account. If neither width nor height are given, the default dimension
   * is used.
   */


  ThumbnailGenerator.prototype.getProportionalDimensions = function getProportionalDimensions(img, width, height) {
    var aspect = img.width / img.height;

    if (width != null) {
      return {
        width: width,
        height: Math.round(width / aspect)
      };
    }

    if (height != null) {
      return {
        width: Math.round(height * aspect),
        height: height
      };
    }

    return {
      width: this.defaultThumbnailDimension,
      height: Math.round(this.defaultThumbnailDimension / aspect)
    };
  };

  /**
   * Make sure the image doesn’t exceed browser/device canvas limits.
   * For ios with 256 RAM and ie
   */


  ThumbnailGenerator.prototype.protect = function protect(image) {
    // https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element

    var ratio = image.width / image.height;

    var maxSquare = 5000000; // ios max canvas square
    var maxSize = 4096; // ie max canvas dimensions

    var maxW = Math.floor(Math.sqrt(maxSquare * ratio));
    var maxH = Math.floor(maxSquare / Math.sqrt(maxSquare * ratio));
    if (maxW > maxSize) {
      maxW = maxSize;
      maxH = Math.round(maxW / ratio);
    }
    if (maxH > maxSize) {
      maxH = maxSize;
      maxW = Math.round(ratio * maxH);
    }
    if (image.width > maxW) {
      var canvas = document.createElement('canvas');
      canvas.width = maxW;
      canvas.height = maxH;
      canvas.getContext('2d').drawImage(image, 0, 0, maxW, maxH);
      image = canvas;
    }

    return image;
  };

  /**
   * Resize an image to the target `width` and `height`.
   *
   * Returns a Canvas with the resized image on it.
   */


  ThumbnailGenerator.prototype.resizeImage = function resizeImage(image, targetWidth, targetHeight) {
    // Resizing in steps refactored to use a solution from
    // https://blog.uploadcare.com/image-resize-in-browsers-is-broken-e38eed08df01

    image = this.protect(image);

    // Use the Polyfill for Math.log2() since IE doesn't support log2
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2#Polyfill
    var steps = Math.ceil(Math.log(image.width / targetWidth) * Math.LOG2E);
    if (steps < 1) {
      steps = 1;
    }
    var sW = targetWidth * Math.pow(2, steps - 1);
    var sH = targetHeight * Math.pow(2, steps - 1);
    var x = 2;

    while (steps--) {
      var canvas = document.createElement('canvas');
      canvas.width = sW;
      canvas.height = sH;
      canvas.getContext('2d').drawImage(image, 0, 0, sW, sH);
      image = canvas;

      sW = Math.round(sW / x);
      sH = Math.round(sH / x);
    }

    return image;
  };

  /**
   * Save a <canvas> element's content to a Blob object.
   *
   * @param {HTMLCanvasElement} canvas
   * @return {Promise}
   */


  ThumbnailGenerator.prototype.canvasToBlob = function canvasToBlob(canvas, type, quality) {
    if (canvas.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(resolve, type, quality);
      });
    }
    return Promise.resolve().then(function () {
      return dataURItoBlob(canvas.toDataURL(type, quality), {});
    });
  };

  /**
   * Set the preview URL for a file.
   */


  ThumbnailGenerator.prototype.setPreviewURL = function setPreviewURL(fileID, preview) {
    this.uppy.setFileState(fileID, { preview: preview });
  };

  ThumbnailGenerator.prototype.addToQueue = function addToQueue(item) {
    this.queue.push(item);
    if (this.queueProcessing === false) {
      this.processQueue();
    }
  };

  ThumbnailGenerator.prototype.processQueue = function processQueue() {
    var _this3 = this;

    this.queueProcessing = true;
    if (this.queue.length > 0) {
      var current = this.queue.shift();
      return this.requestThumbnail(current).catch(function (err) {}) // eslint-disable-line handle-callback-err
      .then(function () {
        return _this3.processQueue();
      });
    } else {
      this.queueProcessing = false;
      this.uppy.log('[ThumbnailGenerator] Emptied thumbnail queue');
      this.uppy.emit('thumbnail:all-generated');
    }
  };

  ThumbnailGenerator.prototype.requestThumbnail = function requestThumbnail(file) {
    var _this4 = this;

    if (isPreviewSupported(file.type) && !file.isRemote) {
      return this.createThumbnail(file, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then(function (preview) {
        _this4.setPreviewURL(file.id, preview);
        _this4.uppy.log('[ThumbnailGenerator] Generated thumbnail for ' + file.id);
        _this4.uppy.emit('thumbnail:generated', _this4.uppy.getFile(file.id), preview);
      }).catch(function (err) {
        _this4.uppy.log('[ThumbnailGenerator] Failed thumbnail for ' + file.id);
        _this4.uppy.log(err, 'warning');
        _this4.uppy.emit('thumbnail:error', _this4.uppy.getFile(file.id), err);
      });
    }
    return Promise.resolve();
  };

  ThumbnailGenerator.prototype.onFileAdded = function onFileAdded(file) {
    if (!file.preview) {
      this.addToQueue(file);
    }
  };

  ThumbnailGenerator.prototype.onFileRemoved = function onFileRemoved(file) {
    var index = this.queue.indexOf(file);
    if (index !== -1) {
      this.queue.splice(index, 1);
    }

    // Clean up object URLs.
    if (file.preview && isObjectURL(file.preview)) {
      URL.revokeObjectURL(file.preview);
    }
  };

  ThumbnailGenerator.prototype.onRestored = function onRestored() {
    var _this5 = this;

    var _uppy$getState = this.uppy.getState(),
        files = _uppy$getState.files;

    var fileIDs = Object.keys(files);
    fileIDs.forEach(function (fileID) {
      var file = _this5.uppy.getFile(fileID);
      if (!file.isRestored) return;
      // Only add blob URLs; they are likely invalid after being restored.
      if (!file.preview || isObjectURL(file.preview)) {
        _this5.addToQueue(file);
      }
    });
  };

  ThumbnailGenerator.prototype.install = function install() {
    this.uppy.on('file-added', this.onFileAdded);
    this.uppy.on('file-removed', this.onFileRemoved);
    this.uppy.on('restored', this.onRestored);
  };

  ThumbnailGenerator.prototype.uninstall = function uninstall() {
    this.uppy.off('file-added', this.onFileAdded);
    this.uppy.off('file-removed', this.onFileRemoved);
    this.uppy.off('restored', this.onRestored);
  };

  return ThumbnailGenerator;
}(Plugin);

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/Translator.js":
/*!****************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/Translator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Translates strings with interpolation & pluralization support.
 * Extensible with custom dictionaries and pluralization functions.
 *
 * Borrows heavily from and inspired by Polyglot https://github.com/airbnb/polyglot.js,
 * basically a stripped-down version of it. Differences: pluralization functions are not hardcoded
 * and can be easily added among with dictionaries, nested objects are used for pluralization
 * as opposed to `||||` delimeter
 *
 * Usage example: `translator.translate('files_chosen', {smart_count: 3})`
 *
 * @param {object|Array<object>} locale Locale or list of locales.
 */
module.exports = function () {
  function Translator(locales) {
    var _this = this;

    _classCallCheck(this, Translator);

    this.locale = {
      strings: {},
      pluralize: function pluralize(n) {
        if (n === 1) {
          return 0;
        }
        return 1;
      }
    };

    if (Array.isArray(locales)) {
      locales.forEach(function (locale) {
        return _this._apply(locale);
      });
    } else {
      this._apply(locales);
    }
  }

  Translator.prototype._apply = function _apply(locale) {
    if (!locale || !locale.strings) {
      return;
    }

    var prevLocale = this.locale;
    this.locale = _extends({}, prevLocale, {
      strings: _extends({}, prevLocale.strings, locale.strings)
    });
    this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
  };

  /**
   * Takes a string with placeholder variables like `%{smart_count} file selected`
   * and replaces it with values from options `{smart_count: 5}`
   *
   * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
   * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
   *
   * @param {string} phrase that needs interpolation, with placeholders
   * @param {object} options with values that will be used to replace placeholders
   * @return {string} interpolated
   */


  Translator.prototype.interpolate = function interpolate(phrase, options) {
    var _String$prototype = String.prototype,
        split = _String$prototype.split,
        replace = _String$prototype.replace;

    var dollarRegex = /\$/g;
    var dollarBillsYall = '$$$$';
    var interpolated = [phrase];

    for (var arg in options) {
      if (arg !== '_' && options.hasOwnProperty(arg)) {
        // Ensure replacement value is escaped to prevent special $-prefixed
        // regex replace tokens. the "$$$$" is needed because each "$" needs to
        // be escaped with "$" itself, and we need two in the resulting output.
        var replacement = options[arg];
        if (typeof replacement === 'string') {
          replacement = replace.call(options[arg], dollarRegex, dollarBillsYall);
        }
        // We create a new `RegExp` each time instead of using a more-efficient
        // string replace so that the same argument can be replaced multiple times
        // in the same phrase.
        interpolated = insertReplacement(interpolated, new RegExp('%\\{' + arg + '\\}', 'g'), replacement);
      }
    }

    return interpolated;

    function insertReplacement(source, rx, replacement) {
      var newParts = [];
      source.forEach(function (chunk) {
        split.call(chunk, rx).forEach(function (raw, i, list) {
          if (raw !== '') {
            newParts.push(raw);
          }

          // Interlace with the `replacement` value
          if (i < list.length - 1) {
            newParts.push(replacement);
          }
        });
      });
      return newParts;
    }
  };

  /**
   * Public translate method
   *
   * @param {string} key
   * @param {object} options with values that will be used later to replace placeholders in string
   * @return {string} translated (and interpolated)
   */


  Translator.prototype.translate = function translate(key, options) {
    return this.translateArray(key, options).join('');
  };

  /**
   * Get a translation and return the translated and interpolated parts as an array.
   * @param {string} key
   * @param {object} options with values that will be used to replace placeholders
   * @return {Array} The translated and interpolated parts, in order.
   */


  Translator.prototype.translateArray = function translateArray(key, options) {
    if (options && typeof options.smart_count !== 'undefined') {
      var plural = this.locale.pluralize(options.smart_count);
      return this.interpolate(this.locale.strings[key][plural], options);
    }

    return this.interpolate(this.locale.strings[key], options);
  };

  return Translator;
}();

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/dataURItoBlob.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/dataURItoBlob.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function dataURItoBlob(dataURI, opts, toFile) {
  // get the base64 data
  var data = dataURI.split(',')[1];

  // user may provide mime type, if not get it from data URI
  var mimeType = opts.mimeType || dataURI.split(',')[0].split(':')[1].split(';')[0];

  // default to plain/text if data URI has no mimeType
  if (mimeType == null) {
    mimeType = 'plain/text';
  }

  var binary = atob(data);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }

  // Convert to a File?
  if (toFile) {
    return new File([new Uint8Array(array)], opts.name || '', { type: mimeType });
  }

  return new Blob([new Uint8Array(array)], { type: mimeType });
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/emitSocketProgress.js":
/*!************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/emitSocketProgress.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var throttle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

function _emitSocketProgress(uploader, progressData, file) {
  var progress = progressData.progress,
      bytesUploaded = progressData.bytesUploaded,
      bytesTotal = progressData.bytesTotal;

  if (progress) {
    uploader.uppy.log('Upload progress: ' + progress);
    uploader.uppy.emit('upload-progress', file, {
      uploader: uploader,
      bytesUploaded: bytesUploaded,
      bytesTotal: bytesTotal
    });
  }
}

module.exports = throttle(_emitSocketProgress, 300, { leading: true, trailing: true });

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/findAllDOMElements.js":
/*!************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/findAllDOMElements.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isDOMElement = __webpack_require__(/*! ./isDOMElement */ "./node_modules/@uppy/utils/lib/isDOMElement.js");

/**
 * Find one or more DOM elements.
 *
 * @param {string} element
 * @return {Array|null}
 */
module.exports = function findAllDOMElements(element) {
  if (typeof element === 'string') {
    var elements = [].slice.call(document.querySelectorAll(element));
    return elements.length > 0 ? elements : null;
  }

  if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && isDOMElement(element)) {
    return [element];
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/findDOMElement.js":
/*!********************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/findDOMElement.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isDOMElement = __webpack_require__(/*! ./isDOMElement */ "./node_modules/@uppy/utils/lib/isDOMElement.js");

/**
 * Find a DOM element.
 *
 * @param {Node|string} element
 * @return {Node|null}
 */
module.exports = function findDOMElement(element) {
  if (typeof element === 'string') {
    return document.querySelector(element);
  }

  if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && isDOMElement(element)) {
    return element;
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/generateFileID.js":
/*!********************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/generateFileID.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Takes a file object and turns it into fileID, by converting file.name to lowercase,
 * removing extra characters and adding type, size and lastModified
 *
 * @param {Object} file
 * @return {String} the fileID
 *
 */
module.exports = function generateFileID(file) {
  // filter is needed to not join empty values with `-`
  return ['uppy', file.name ? file.name.toLowerCase().replace(/[^A-Z0-9]/ig, '') : '', file.type, file.data.size, file.data.lastModified].filter(function (val) {
    return val;
  }).join('-');
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getBytesRemaining.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getBytesRemaining.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function getBytesRemaining(fileProgress) {
  return fileProgress.bytesTotal - fileProgress.bytesUploaded;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getFileNameAndExtension.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getFileNameAndExtension.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Takes a full filename string and returns an object {name, extension}
*
* @param {string} fullFileName
* @return {object} {name, extension}
*/
module.exports = function getFileNameAndExtension(fullFileName) {
  var re = /(?:\.([^.]+))?$/;
  var fileExt = re.exec(fullFileName)[1];
  var fileName = fullFileName.replace('.' + fileExt, '');
  return {
    name: fileName,
    extension: fileExt
  };
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getFileType.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getFileType.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getFileNameAndExtension = __webpack_require__(/*! ./getFileNameAndExtension */ "./node_modules/@uppy/utils/lib/getFileNameAndExtension.js");
var mimeTypes = __webpack_require__(/*! ./mimeTypes */ "./node_modules/@uppy/utils/lib/mimeTypes.js");

module.exports = function getFileType(file) {
  var fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
  fileExtension = fileExtension ? fileExtension.toLowerCase() : null;

  if (file.isRemote) {
    // some remote providers do not support file types
    return file.type ? file.type : mimeTypes[fileExtension];
  }

  // check if mime type is set in the file object
  if (file.type) {
    return file.type;
  }

  // see if we can map extension to a mime type
  if (fileExtension && mimeTypes[fileExtension]) {
    return mimeTypes[fileExtension];
  }

  // if all fails, fall back to a generic byte stream type
  return 'application/octet-stream';
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getSocketHost.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getSocketHost.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function getSocketHost(url) {
  // get the host domain
  var regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/;
  var host = regex.exec(url)[1];
  var socketProtocol = location.protocol === 'https:' ? 'wss' : 'ws';

  return socketProtocol + '://' + host;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getSpeed.js":
/*!**************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getSpeed.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function getSpeed(fileProgress) {
  if (!fileProgress.bytesUploaded) return 0;

  var timeElapsed = new Date() - fileProgress.uploadStarted;
  var uploadSpeed = fileProgress.bytesUploaded / (timeElapsed / 1000);
  return uploadSpeed;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/getTimeStamp.js":
/*!******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/getTimeStamp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Returns a timestamp in the format of `hours:minutes:seconds`
*/
module.exports = function getTimeStamp() {
  var date = new Date();
  var hours = pad(date.getHours().toString());
  var minutes = pad(date.getMinutes().toString());
  var seconds = pad(date.getSeconds().toString());
  return hours + ':' + minutes + ':' + seconds;
};

/**
 * Adds zero to strings shorter than two characters
*/
function pad(str) {
  return str.length !== 2 ? 0 + str : str;
}

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isDOMElement.js":
/*!******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isDOMElement.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Check if an object is a DOM element. Duck-typing based on `nodeType`.
 *
 * @param {*} obj
 */
module.exports = function isDOMElement(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.nodeType === Node.ELEMENT_NODE;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isObjectURL.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isObjectURL.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Check if a URL string is an object URL from `URL.createObjectURL`.
 *
 * @param {string} url
 * @return {boolean}
 */
module.exports = function isObjectURL(url) {
  return url.indexOf('blob:') === 0;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isPreviewSupported.js":
/*!************************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isPreviewSupported.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isPreviewSupported(fileType) {
  if (!fileType) return false;
  var fileTypeSpecific = fileType.split('/')[1];
  // list of images that browsers can preview
  if (/^(jpe?g|gif|png|svg|svg\+xml|bmp)$/.test(fileTypeSpecific)) {
    return true;
  }
  return false;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/isTouchDevice.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/isTouchDevice.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isTouchDevice() {
  return 'ontouchstart' in window || // works on most browsers
  navigator.maxTouchPoints; // works on IE10/11 and Surface
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/limitPromises.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/limitPromises.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Limit the amount of simultaneously pending Promises.
 * Returns a function that, when passed a function `fn`,
 * will make sure that at most `limit` calls to `fn` are pending.
 *
 * @param {number} limit
 * @return {function()}
 */
module.exports = function limitPromises(limit) {
  var pending = 0;
  var queue = [];
  return function (fn) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var call = function call() {
        pending++;
        var promise = fn.apply(undefined, args);
        promise.then(onfinish, onfinish);
        return promise;
      };

      if (pending >= limit) {
        return new Promise(function (resolve, reject) {
          queue.push(function () {
            call().then(resolve, reject);
          });
        });
      }
      return call();
    };
  };
  function onfinish() {
    pending--;
    var next = queue.shift();
    if (next) next();
  }
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/mimeTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/mimeTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'md': 'text/markdown',
  'markdown': 'text/markdown',
  'mp4': 'video/mp4',
  'mp3': 'audio/mp3',
  'svg': 'image/svg+xml',
  'jpg': 'image/jpeg',
  'png': 'image/png',
  'gif': 'image/gif',
  'yaml': 'text/yaml',
  'yml': 'text/yaml',
  'csv': 'text/csv',
  'avi': 'video/x-msvideo',
  'mks': 'video/x-matroska',
  'mkv': 'video/x-matroska',
  'mov': 'video/quicktime',
  'doc': 'application/msword',
  'docm': 'application/vnd.ms-word.document.macroenabled.12',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'dot': 'application/msword',
  'dotm': 'application/vnd.ms-word.template.macroenabled.12',
  'dotx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  'xla': 'application/vnd.ms-excel',
  'xlam': 'application/vnd.ms-excel.addin.macroenabled.12',
  'xlc': 'application/vnd.ms-excel',
  'xlf': 'application/x-xliff+xml',
  'xlm': 'application/vnd.ms-excel',
  'xls': 'application/vnd.ms-excel',
  'xlsb': 'application/vnd.ms-excel.sheet.binary.macroenabled.12',
  'xlsm': 'application/vnd.ms-excel.sheet.macroenabled.12',
  'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'xlt': 'application/vnd.ms-excel',
  'xltm': 'application/vnd.ms-excel.template.macroenabled.12',
  'xltx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  'xlw': 'application/vnd.ms-excel'
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/prettyETA.js":
/*!***************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/prettyETA.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var secondsToTime = __webpack_require__(/*! ./secondsToTime */ "./node_modules/@uppy/utils/lib/secondsToTime.js");

module.exports = function prettyETA(seconds) {
  var time = secondsToTime(seconds);

  // Only display hours and minutes if they are greater than 0 but always
  // display minutes if hours is being displayed
  // Display a leading zero if the there is a preceding unit: 1m 05s, but 5s
  var hoursStr = time.hours ? time.hours + 'h ' : '';
  var minutesVal = time.hours ? ('0' + time.minutes).substr(-2) : time.minutes;
  var minutesStr = minutesVal ? minutesVal + 'm ' : '';
  var secondsVal = minutesVal ? ('0' + time.seconds).substr(-2) : time.seconds;
  var secondsStr = secondsVal + 's';

  return '' + hoursStr + minutesStr + secondsStr;
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/secondsToTime.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/secondsToTime.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function secondsToTime(rawSeconds) {
  var hours = Math.floor(rawSeconds / 3600) % 24;
  var minutes = Math.floor(rawSeconds / 60) % 60;
  var seconds = Math.floor(rawSeconds % 60);

  return { hours: hours, minutes: minutes, seconds: seconds };
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/settle.js":
/*!************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/settle.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function settle(promises) {
  var resolutions = [];
  var rejections = [];
  function resolved(value) {
    resolutions.push(value);
  }
  function rejected(error) {
    rejections.push(error);
  }

  var wait = Promise.all(promises.map(function (promise) {
    return promise.then(resolved, rejected);
  }));

  return wait.then(function () {
    return {
      successful: resolutions,
      failed: rejections
    };
  });
};

/***/ }),

/***/ "./node_modules/@uppy/utils/lib/toArray.js":
/*!*************************************************!*\
  !*** ./node_modules/@uppy/utils/lib/toArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts list into array
*/
module.exports = function toArray(list) {
  return Array.prototype.slice.call(list || [], 0);
};

/***/ }),

/***/ "./node_modules/@uppy/xhr-upload/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@uppy/xhr-upload/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"),
    Plugin = _require.Plugin;

var cuid = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
var Translator = __webpack_require__(/*! @uppy/utils/lib/Translator */ "./node_modules/@uppy/utils/lib/Translator.js");

var _require2 = __webpack_require__(/*! @uppy/companion-client */ "./node_modules/@uppy/companion-client/lib/index.js"),
    Provider = _require2.Provider,
    Socket = _require2.Socket;

var emitSocketProgress = __webpack_require__(/*! @uppy/utils/lib/emitSocketProgress */ "./node_modules/@uppy/utils/lib/emitSocketProgress.js");
var getSocketHost = __webpack_require__(/*! @uppy/utils/lib/getSocketHost */ "./node_modules/@uppy/utils/lib/getSocketHost.js");
var settle = __webpack_require__(/*! @uppy/utils/lib/settle */ "./node_modules/@uppy/utils/lib/settle.js");
var limitPromises = __webpack_require__(/*! @uppy/utils/lib/limitPromises */ "./node_modules/@uppy/utils/lib/limitPromises.js");

function buildResponseError(xhr, error) {
  // No error message
  if (!error) error = new Error('Upload error');
  // Got an error message string
  if (typeof error === 'string') error = new Error(error);
  // Got something else
  if (!(error instanceof Error)) {
    error = _extends(new Error('Upload error'), { data: error });
  }

  error.request = xhr;
  return error;
}

module.exports = function (_Plugin) {
  _inherits(XHRUpload, _Plugin);

  function XHRUpload(uppy, opts) {
    _classCallCheck(this, XHRUpload);

    var _this = _possibleConstructorReturn(this, _Plugin.call(this, uppy, opts));

    _this.type = 'uploader';
    _this.id = 'XHRUpload';
    _this.title = 'XHRUpload';

    var defaultLocale = {
      strings: {
        timedOut: 'Upload stalled for %{seconds} seconds, aborting.'
      }

      // Default options
    };var defaultOptions = {
      formData: true,
      fieldName: 'files[]',
      method: 'post',
      metaFields: null,
      responseUrlFieldName: 'url',
      bundle: false,
      headers: {},
      locale: defaultLocale,
      timeout: 30 * 1000,
      limit: 0,
      withCredentials: false,
      responseType: '',
      /**
       * @typedef respObj
       * @property {string} responseText
       * @property {number} status
       * @property {string} statusText
       * @property {Object.<string, string>} headers
       *
       * @param {string} responseText the response body string
       * @param {XMLHttpRequest | respObj} response the response object (XHR or similar)
       */
      getResponseData: function getResponseData(responseText, response) {
        var parsedResponse = {};
        try {
          parsedResponse = JSON.parse(responseText);
        } catch (err) {
          console.log(err);
        }

        return parsedResponse;
      },

      /**
       *
       * @param {string} responseText the response body string
       * @param {XMLHttpRequest | respObj} response the response object (XHR or similar)
       */
      getResponseError: function getResponseError(responseText, response) {
        return new Error('Upload error');
      }
    };

    // Merge default options with the ones set by user
    _this.opts = _extends({}, defaultOptions, opts);

    // i18n
    _this.translator = new Translator([defaultLocale, _this.uppy.locale, _this.opts.locale]);
    _this.i18n = _this.translator.translate.bind(_this.translator);
    _this.i18nArray = _this.translator.translateArray.bind(_this.translator);

    _this.handleUpload = _this.handleUpload.bind(_this);

    // Simultaneous upload limiting is shared across all uploads with this plugin.
    if (typeof _this.opts.limit === 'number' && _this.opts.limit !== 0) {
      _this.limitUploads = limitPromises(_this.opts.limit);
    } else {
      _this.limitUploads = function (fn) {
        return fn;
      };
    }

    if (_this.opts.bundle && !_this.opts.formData) {
      throw new Error('`opts.formData` must be true when `opts.bundle` is enabled.');
    }
    return _this;
  }

  XHRUpload.prototype.getOptions = function getOptions(file) {
    var overrides = this.uppy.getState().xhrUpload;
    var opts = _extends({}, this.opts, overrides || {}, file.xhrUpload || {});
    opts.headers = {};
    _extends(opts.headers, this.opts.headers);
    if (overrides) {
      _extends(opts.headers, overrides.headers);
    }
    if (file.xhrUpload) {
      _extends(opts.headers, file.xhrUpload.headers);
    }

    return opts;
  };

  // Helper to abort upload requests if there has not been any progress for `timeout` ms.
  // Create an instance using `timer = createProgressTimeout(10000, onTimeout)`
  // Call `timer.progress()` to signal that there has been progress of any kind.
  // Call `timer.done()` when the upload has completed.


  XHRUpload.prototype.createProgressTimeout = function createProgressTimeout(timeout, timeoutHandler) {
    var uppy = this.uppy;
    var self = this;
    var isDone = false;

    function onTimedOut() {
      uppy.log('[XHRUpload] timed out');
      var error = new Error(self.i18n('timedOut', { seconds: Math.ceil(timeout / 1000) }));
      timeoutHandler(error);
    }

    var aliveTimer = null;
    function progress() {
      // Some browsers fire another progress event when the upload is
      // cancelled, so we have to ignore progress after the timer was
      // told to stop.
      if (isDone) return;

      if (timeout > 0) {
        if (aliveTimer) clearTimeout(aliveTimer);
        aliveTimer = setTimeout(onTimedOut, timeout);
      }
    }

    function done() {
      uppy.log('[XHRUpload] timer done');
      if (aliveTimer) {
        clearTimeout(aliveTimer);
        aliveTimer = null;
      }
      isDone = true;
    }

    return {
      progress: progress,
      done: done
    };
  };

  XHRUpload.prototype.createFormDataUpload = function createFormDataUpload(file, opts) {
    var formPost = new FormData();

    var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields
    // Send along all fields by default.
    : Object.keys(file.meta);
    metaFields.forEach(function (item) {
      formPost.append(item, file.meta[item]);
    });

    if (file.name) {
      formPost.append(opts.fieldName, file.data, file.name);
    } else {
      formPost.append(opts.fieldName, file.data);
    }

    return formPost;
  };

  XHRUpload.prototype.createBareUpload = function createBareUpload(file, opts) {
    return file.data;
  };

  XHRUpload.prototype.upload = function upload(file, current, total) {
    var _this2 = this;

    var opts = this.getOptions(file);

    this.uppy.log('uploading ' + current + ' of ' + total);
    return new Promise(function (resolve, reject) {
      var data = opts.formData ? _this2.createFormDataUpload(file, opts) : _this2.createBareUpload(file, opts);

      var timer = _this2.createProgressTimeout(opts.timeout, function (error) {
        xhr.abort();
        _this2.uppy.emit('upload-error', file, error);
        reject(error);
      });

      var xhr = new XMLHttpRequest();
      if (opts.responseType !== '') {
        xhr.responseType = opts.responseType;
      }

      var id = cuid();

      xhr.upload.addEventListener('loadstart', function (ev) {
        _this2.uppy.log('[XHRUpload] ' + id + ' started');
        // Begin checking for timeouts when loading starts.
        timer.progress();
      });

      xhr.upload.addEventListener('progress', function (ev) {
        _this2.uppy.log('[XHRUpload] ' + id + ' progress: ' + ev.loaded + ' / ' + ev.total);
        timer.progress();

        if (ev.lengthComputable) {
          _this2.uppy.emit('upload-progress', file, {
            uploader: _this2,
            bytesUploaded: ev.loaded,
            bytesTotal: ev.total
          });
        }
      });

      xhr.addEventListener('load', function (ev) {
        _this2.uppy.log('[XHRUpload] ' + id + ' finished');
        timer.done();

        if (ev.target.status >= 200 && ev.target.status < 300) {
          var body = opts.getResponseData(xhr.responseText, xhr);
          var uploadURL = body[opts.responseUrlFieldName];

          var response = {
            status: ev.target.status,
            body: body,
            uploadURL: uploadURL
          };

          _this2.uppy.setFileState(file.id, { response: response });

          _this2.uppy.emit('upload-success', file, body, uploadURL);

          if (uploadURL) {
            _this2.uppy.log('Download ' + file.name + ' from ' + file.uploadURL);
          }

          return resolve(file);
        } else {
          var _body = opts.getResponseData(xhr.responseText, xhr);
          var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));

          var _response = {
            status: ev.target.status,
            body: _body
          };

          _this2.uppy.setFileState(file.id, { response: _response });

          _this2.uppy.emit('upload-error', file, error);
          return reject(error);
        }
      });

      xhr.addEventListener('error', function (ev) {
        _this2.uppy.log('[XHRUpload] ' + id + ' errored');
        timer.done();

        var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
        _this2.uppy.emit('upload-error', file, error);
        return reject(error);
      });

      xhr.open(opts.method.toUpperCase(), opts.endpoint, true);
      // IE10 does not allow setting `withCredentials` before `open()` is called.
      xhr.withCredentials = opts.withCredentials;

      Object.keys(opts.headers).forEach(function (header) {
        xhr.setRequestHeader(header, opts.headers[header]);
      });

      xhr.send(data);

      _this2.uppy.on('file-removed', function (removedFile) {
        if (removedFile.id === file.id) {
          timer.done();
          xhr.abort();
        }
      });

      _this2.uppy.on('cancel-all', function () {
        timer.done();
        xhr.abort();
      });
    });
  };

  XHRUpload.prototype.uploadRemote = function uploadRemote(file, current, total) {
    var _this3 = this;

    var opts = this.getOptions(file);
    return new Promise(function (resolve, reject) {
      var fields = {};
      var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields
      // Send along all fields by default.
      : Object.keys(file.meta);

      metaFields.forEach(function (name) {
        fields[name] = file.meta[name];
      });

      var provider = new Provider(_this3.uppy, file.remote.providerOptions);
      provider.post(file.remote.url, _extends({}, file.remote.body, {
        endpoint: opts.endpoint,
        size: file.data.size,
        fieldname: opts.fieldName,
        metadata: fields,
        headers: opts.headers
      })).then(function (res) {
        var token = res.token;
        var host = getSocketHost(file.remote.serverUrl);
        var socket = new Socket({ target: host + '/api/' + token });

        socket.on('progress', function (progressData) {
          return emitSocketProgress(_this3, progressData, file);
        });

        socket.on('success', function (data) {
          var resp = opts.getResponseData(data.response.responseText, data.response);
          var uploadURL = resp[opts.responseUrlFieldName];
          _this3.uppy.emit('upload-success', file, resp, uploadURL);
          socket.close();
          return resolve();
        });

        socket.on('error', function (errData) {
          var resp = errData.response;
          var error = resp ? opts.getResponseError(resp.responseText, resp) : _extends(new Error(errData.error.message), { cause: errData.error });
          _this3.uppy.emit('upload-error', file, error);
          reject(error);
        });
      });
    });
  };

  XHRUpload.prototype.uploadBundle = function uploadBundle(files) {
    var _this4 = this;

    return new Promise(function (resolve, reject) {
      var endpoint = _this4.opts.endpoint;
      var method = _this4.opts.method;

      var formData = new FormData();
      files.forEach(function (file, i) {
        var opts = _this4.getOptions(file);
        formData.append(opts.fieldName, file.data);
      });

      var xhr = new XMLHttpRequest();
      if (_this4.opts.responseType !== '') {
        xhr.responseType = _this4.opts.responseType;
      }

      var timer = _this4.createProgressTimeout(_this4.opts.timeout, function (error) {
        xhr.abort();
        emitError(error);
        reject(error);
      });

      var emitError = function emitError(error) {
        files.forEach(function (file) {
          _this4.uppy.emit('upload-error', file, error);
        });
      };

      xhr.upload.addEventListener('loadstart', function (ev) {
        _this4.uppy.log('[XHRUpload] started uploading bundle');
        timer.progress();
      });

      xhr.upload.addEventListener('progress', function (ev) {
        timer.progress();

        if (!ev.lengthComputable) return;

        files.forEach(function (file) {
          _this4.uppy.emit('upload-progress', file, {
            uploader: _this4,
            bytesUploaded: ev.loaded / ev.total * file.size,
            bytesTotal: file.size
          });
        });
      });

      xhr.addEventListener('load', function (ev) {
        timer.done();

        if (ev.target.status >= 200 && ev.target.status < 300) {
          var resp = _this4.opts.getResponseData(xhr.responseText, xhr);
          files.forEach(function (file) {
            _this4.uppy.emit('upload-success', file, resp);
          });
          return resolve();
        }

        var error = _this4.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        error.request = xhr;
        emitError(error);
        return reject(error);
      });

      xhr.addEventListener('error', function (ev) {
        timer.done();

        var error = _this4.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        emitError(error);
        return reject(error);
      });

      _this4.uppy.on('cancel-all', function () {
        timer.done();
        xhr.abort();
      });

      xhr.open(method.toUpperCase(), endpoint, true);
      // IE10 does not allow setting `withCredentials` before `open()` is called.
      xhr.withCredentials = _this4.opts.withCredentials;

      Object.keys(_this4.opts.headers).forEach(function (header) {
        xhr.setRequestHeader(header, _this4.opts.headers[header]);
      });

      xhr.send(formData);

      files.forEach(function (file) {
        _this4.uppy.emit('upload-started', file);
      });
    });
  };

  XHRUpload.prototype.uploadFiles = function uploadFiles(files) {
    var _this5 = this;

    var actions = files.map(function (file, i) {
      var current = parseInt(i, 10) + 1;
      var total = files.length;

      if (file.error) {
        return function () {
          return Promise.reject(new Error(file.error));
        };
      } else if (file.isRemote) {
        // We emit upload-started here, so that it's also emitted for files
        // that have to wait due to the `limit` option.
        _this5.uppy.emit('upload-started', file);
        return _this5.uploadRemote.bind(_this5, file, current, total);
      } else {
        _this5.uppy.emit('upload-started', file);
        return _this5.upload.bind(_this5, file, current, total);
      }
    });

    var promises = actions.map(function (action) {
      var limitedAction = _this5.limitUploads(action);
      return limitedAction();
    });

    return settle(promises);
  };

  XHRUpload.prototype.handleUpload = function handleUpload(fileIDs) {
    var _this6 = this;

    if (fileIDs.length === 0) {
      this.uppy.log('[XHRUpload] No files to upload!');
      return Promise.resolve();
    }

    this.uppy.log('[XHRUpload] Uploading...');
    var files = fileIDs.map(function (fileID) {
      return _this6.uppy.getFile(fileID);
    });

    if (this.opts.bundle) {
      return this.uploadBundle(files);
    }

    return this.uploadFiles(files).then(function () {
      return null;
    });
  };

  XHRUpload.prototype.install = function install() {
    if (this.opts.bundle) {
      this.uppy.setState({
        capabilities: _extends({}, this.uppy.getState().capabilities, {
          bundled: true
        })
      });
    }

    this.uppy.addUploader(this.handleUpload);
  };

  XHRUpload.prototype.uninstall = function uninstall() {
    if (this.opts.bundle) {
      this.uppy.setState({
        capabilities: _extends({}, this.uppy.getState().capabilities, {
          bundled: true
        })
      });
    }

    this.uppy.removeUploader(this.handleUpload);
  };

  return XHRUpload;
}(Plugin);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/cuid/index.js":
/*!************************************!*\
  !*** ./node_modules/cuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

var fingerprint = __webpack_require__(/*! ./lib/fingerprint.js */ "./node_modules/cuid/lib/fingerprint.browser.js");
var pad = __webpack_require__(/*! ./lib/pad.js */ "./node_modules/cuid/lib/pad.js");

var c = 0,
  blockSize = 4,
  base = 36,
  discreteValues = Math.pow(base, blockSize);

function randomBlock () {
  return pad((Math.random() *
    discreteValues << 0)
    .toString(base), blockSize);
}

function safeCounter () {
  c = c < discreteValues ? c : 0;
  c++; // this is not subliminal
  return c - 1;
}

function cuid () {
  // Starting with a lowercase letter makes
  // it HTML element ID friendly.
  var letter = 'c', // hard-coded allows for sequential access

    // timestamp
    // warning: this exposes the exact date and time
    // that the uid was created.
    timestamp = (new Date().getTime()).toString(base),

    // Prevent same-machine collisions.
    counter = pad(safeCounter().toString(base), blockSize),

    // A few chars to generate distinct ids for different
    // clients (so different computers are far less
    // likely to generate the same id)
    print = fingerprint(),

    // Grab some more chars from Math.random()
    random = randomBlock() + randomBlock();

  return letter + timestamp + counter + print + random;
}

cuid.slug = function slug () {
  var date = new Date().getTime().toString(36),
    counter = safeCounter().toString(36).slice(-4),
    print = fingerprint().slice(0, 1) +
      fingerprint().slice(-1),
    random = randomBlock().slice(-2);

  return date.slice(-2) +
    counter + print + random;
};

cuid.isCuid = function isCuid (stringToCheck) {
  if (typeof stringToCheck !== 'string') return false;
  if (stringToCheck.startsWith('c')) return true;
  return false;
};

cuid.isSlug = function isSlug (stringToCheck) {
  if (typeof stringToCheck !== 'string') return false;
  var stringLength = stringToCheck.length;
  if (stringLength >= 7 && stringLength <= 10) return true;
  return false;
};

cuid.fingerprint = fingerprint;

module.exports = cuid;


/***/ }),

/***/ "./node_modules/cuid/lib/fingerprint.browser.js":
/*!******************************************************!*\
  !*** ./node_modules/cuid/lib/fingerprint.browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pad = __webpack_require__(/*! ./pad.js */ "./node_modules/cuid/lib/pad.js");

var env = typeof window === 'object' ? window : self;
var globalCount = Object.keys(env).length;
var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
var clientId = pad((mimeTypesLength +
  navigator.userAgent.length).toString(36) +
  globalCount.toString(36), 4);

module.exports = function fingerprint () {
  return clientId;
};


/***/ }),

/***/ "./node_modules/cuid/lib/pad.js":
/*!**************************************!*\
  !*** ./node_modules/cuid/lib/pad.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function pad (num, size) {
  var s = '000000000' + num;
  return s.substr(s.length - size);
};


/***/ }),

/***/ "./node_modules/drag-drop/index.js":
/*!*****************************************!*\
  !*** ./node_modules/drag-drop/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = dragDrop

var flatten = __webpack_require__(/*! flatten */ "./node_modules/flatten/index.js")
var parallel = __webpack_require__(/*! run-parallel */ "./node_modules/run-parallel/index.js")

function dragDrop (elem, listeners) {
  if (typeof elem === 'string') {
    var selector = elem
    elem = window.document.querySelector(elem)
    if (!elem) {
      throw new Error('"' + selector + '" does not match any HTML elements')
    }
  }

  if (!elem) {
    throw new Error('"' + elem + '" is not a valid HTML element')
  }

  if (typeof listeners === 'function') {
    listeners = { onDrop: listeners }
  }

  var timeout

  elem.addEventListener('dragenter', onDragEnter, false)
  elem.addEventListener('dragover', onDragOver, false)
  elem.addEventListener('dragleave', onDragLeave, false)
  elem.addEventListener('drop', onDrop, false)

  // Function to remove drag-drop listeners
  return function remove () {
    removeDragClass()
    elem.removeEventListener('dragenter', onDragEnter, false)
    elem.removeEventListener('dragover', onDragOver, false)
    elem.removeEventListener('dragleave', onDragLeave, false)
    elem.removeEventListener('drop', onDrop, false)
  }

  function onDragEnter (e) {
    if (listeners.onDragEnter) {
      listeners.onDragEnter(e)
    }

    // Prevent event
    e.stopPropagation()
    e.preventDefault()
    return false
  }

  function onDragOver (e) {
    e.stopPropagation()
    e.preventDefault()
    if (e.dataTransfer.items) {
      // Only add "drag" class when `items` contains items that are able to be
      // handled by the registered listeners (files vs. text)
      var items = toArray(e.dataTransfer.items)
      var fileItems = items.filter(function (item) { return item.kind === 'file' })
      var textItems = items.filter(function (item) { return item.kind === 'string' })

      if (fileItems.length === 0 && !listeners.onDropText) return
      if (textItems.length === 0 && !listeners.onDrop) return
      if (fileItems.length === 0 && textItems.length === 0) return
    }

    elem.classList.add('drag')
    clearTimeout(timeout)

    if (listeners.onDragOver) {
      listeners.onDragOver(e)
    }

    e.dataTransfer.dropEffect = 'copy'
    return false
  }

  function onDragLeave (e) {
    e.stopPropagation()
    e.preventDefault()

    if (listeners.onDragLeave) {
      listeners.onDragLeave(e)
    }

    clearTimeout(timeout)
    timeout = setTimeout(removeDragClass, 50)

    return false
  }

  function onDrop (e) {
    e.stopPropagation()
    e.preventDefault()

    if (listeners.onDragLeave) {
      listeners.onDragLeave(e)
    }

    clearTimeout(timeout)
    removeDragClass()

    var pos = {
      x: e.clientX,
      y: e.clientY
    }

    // text drop support
    var text = e.dataTransfer.getData('text')
    if (text && listeners.onDropText) {
      listeners.onDropText(text, pos)
    }

    // file drop support
    if (e.dataTransfer.items) {
      // Handle directories in Chrome using the proprietary FileSystem API
      var items = toArray(e.dataTransfer.items).filter(function (item) {
        return item.kind === 'file'
      })

      if (items.length === 0) return

      parallel(items.map(function (item) {
        return function (cb) {
          processEntry(item.webkitGetAsEntry(), cb)
        }
      }), function (err, results) {
        // This catches permission errors with file:// in Chrome. This should never
        // throw in production code, so the user does not need to use try-catch.
        if (err) throw err
        if (listeners.onDrop) {
          listeners.onDrop(flatten(results), pos)
        }
      })
    } else {
      var files = toArray(e.dataTransfer.files)

      if (files.length === 0) return

      files.forEach(function (file) {
        file.fullPath = '/' + file.name
      })

      if (listeners.onDrop) {
        listeners.onDrop(files, pos)
      }
    }

    return false
  }

  function removeDragClass () {
    elem.classList.remove('drag')
  }
}

function processEntry (entry, cb) {
  var entries = []

  if (entry.isFile) {
    entry.file(function (file) {
      file.fullPath = entry.fullPath // preserve pathing for consumer
      cb(null, file)
    }, function (err) {
      cb(err)
    })
  } else if (entry.isDirectory) {
    var reader = entry.createReader()
    readEntries()
  }

  function readEntries () {
    reader.readEntries(function (entries_) {
      if (entries_.length > 0) {
        entries = entries.concat(toArray(entries_))
        readEntries() // continue reading entries until `readEntries` returns no more
      } else {
        doneEntries()
      }
    })
  }

  function doneEntries () {
    parallel(entries.map(function (entry) {
      return function (cb) {
        processEntry(entry, cb)
      }
    }), cb)
  }
}

function toArray (list) {
  return Array.prototype.slice.call(list || [], 0)
}


/***/ }),

/***/ "./node_modules/flatten/index.js":
/*!***************************************!*\
  !*** ./node_modules/flatten/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function flatten(list, depth) {
  depth = (typeof depth == 'number') ? depth : Infinity;

  if (!depth) {
    if (Array.isArray(list)) {
      return list.map(function(i) { return i; });
    }
    return list;
  }

  return _flatten(list, 1);

  function _flatten(list, d) {
    return list.reduce(function (acc, item) {
      if (Array.isArray(item) && d < depth) {
        return acc.concat(_flatten(item, d + 1));
      }
      else {
        return acc.concat(item);
      }
    }, []);
  }
};


/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mime-match/index.js":
/*!******************************************!*\
  !*** ./node_modules/mime-match/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wildcard = __webpack_require__(/*! wildcard */ "./node_modules/wildcard/index.js");
var reMimePartSplit = /[\/\+\.]/;

/**
  # mime-match

  A simple function to checker whether a target mime type matches a mime-type
  pattern (e.g. image/jpeg matches image/jpeg OR image/*).

  ## Example Usage

  <<< example.js

**/
module.exports = function(target, pattern) {
  function test(pattern) {
    var result = wildcard(pattern, target, reMimePartSplit);

    // ensure that we have a valid mime type (should have two parts)
    return result && result.length >= 2;
  }

  return pattern ? test(pattern.split(';')[0]) : test;
};


/***/ }),

/***/ "./node_modules/namespace-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/namespace-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Create an event emitter with namespaces
* @name createNamespaceEmitter
* @example
* var emitter = require('./index')()
*
* emitter.on('*', function () {
*   console.log('all events emitted', this.event)
* })
*
* emitter.on('example', function () {
*   console.log('example event emitted')
* })
*/
module.exports = function createNamespaceEmitter () {
  var emitter = {}
  var _fns = emitter._fns = {}

  /**
  * Emit an event. Optionally namespace the event. Handlers are fired in the order in which they were added with exact matches taking precedence. Separate the namespace and event with a `:`
  * @name emit
  * @param {String} event – the name of the event, with optional namespace
  * @param {...*} data – up to 6 arguments that are passed to the event listener
  * @example
  * emitter.emit('example')
  * emitter.emit('demo:test')
  * emitter.emit('data', { example: true}, 'a string', 1)
  */
  emitter.emit = function emit (event, arg1, arg2, arg3, arg4, arg5, arg6) {
    var toEmit = getListeners(event)

    if (toEmit.length) {
      emitAll(event, toEmit, [arg1, arg2, arg3, arg4, arg5, arg6])
    }
  }

  /**
  * Create en event listener.
  * @name on
  * @param {String} event
  * @param {Function} fn
  * @example
  * emitter.on('example', function () {})
  * emitter.on('demo', function () {})
  */
  emitter.on = function on (event, fn) {
    if (!_fns[event]) {
      _fns[event] = []
    }

    _fns[event].push(fn)
  }

  /**
  * Create en event listener that fires once.
  * @name once
  * @param {String} event
  * @param {Function} fn
  * @example
  * emitter.once('example', function () {})
  * emitter.once('demo', function () {})
  */
  emitter.once = function once (event, fn) {
    function one () {
      fn.apply(this, arguments)
      emitter.off(event, one)
    }
    this.on(event, one)
  }

  /**
  * Stop listening to an event. Stop all listeners on an event by only passing the event name. Stop a single listener by passing that event handler as a callback.
  * You must be explicit about what will be unsubscribed: `emitter.off('demo')` will unsubscribe an `emitter.on('demo')` listener,
  * `emitter.off('demo:example')` will unsubscribe an `emitter.on('demo:example')` listener
  * @name off
  * @param {String} event
  * @param {Function} [fn] – the specific handler
  * @example
  * emitter.off('example')
  * emitter.off('demo', function () {})
  */
  emitter.off = function off (event, fn) {
    var keep = []

    if (event && fn) {
      var fns = this._fns[event]
      var i = 0
      var l = fns ? fns.length : 0

      for (i; i < l; i++) {
        if (fns[i] !== fn) {
          keep.push(fns[i])
        }
      }
    }

    keep.length ? this._fns[event] = keep : delete this._fns[event]
  }

  function getListeners (e) {
    var out = _fns[e] ? _fns[e] : []
    var idx = e.indexOf(':')
    var args = (idx === -1) ? [e] : [e.substring(0, idx), e.substring(idx + 1)]

    var keys = Object.keys(_fns)
    var i = 0
    var l = keys.length

    for (i; i < l; i++) {
      var key = keys[i]
      if (key === '*') {
        out = out.concat(_fns[key])
      }

      if (args.length === 2 && args[0] === key) {
        out = out.concat(_fns[key])
        break
      }
    }

    return out
  }

  function emitAll (e, fns, args) {
    var i = 0
    var l = fns.length

    for (i; i < l; i++) {
      if (!fns[i]) break
      fns[i].event = e
      fns[i].apply(fns[i], args)
    }
  }

  return emitter
}


/***/ }),

/***/ "./node_modules/preact-css-transition-group/dist/preact-css-transition-group.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/preact-css-transition-group/dist/preact-css-transition-group.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs")) :
  undefined;
}(this, (function (preact) { 'use strict';

function getKey(vnode) {
	return vnode.attributes && vnode.attributes.key;
}

function getComponentBase(component) {
	return component.base;
}

function onlyChild(children) {
	return children && children[0];
}

function filterNullChildren(children) {
	return children && children.filter(function (i) {
		return i !== null;
	});
}

function find(arr, iter) {
	for (var i = arr.length; i--;) {
		if (iter(arr[i])) return true;
	}
	return false;
}

function inChildrenByKey(children, key) {
	return find(children, function (c) {
		return getKey(c) === key;
	});
}

function inChildren(children, child) {
	return inChildrenByKey(children, getKey(child));
}

function isShownInChildrenByKey(children, key, showProp) {
	return find(children, function (c) {
		return getKey(c) === key && c.props[showProp];
	});
}

function isShownInChildren(children, child, showProp) {
	return isShownInChildrenByKey(children, getKey(child), showProp);
}

function mergeChildMappings(prev, next) {
	var ret = [];

	var nextChildrenPending = {},
	    pendingChildren = [];
	prev.forEach(function (c) {
		var key = getKey(c);
		if (inChildrenByKey(next, key)) {
			if (pendingChildren.length) {
				nextChildrenPending[key] = pendingChildren;
				pendingChildren = [];
			}
		} else {
			pendingChildren.push(c);
		}
	});

	next.forEach(function (c) {
		var key = getKey(c);
		if (nextChildrenPending.hasOwnProperty(key)) {
			ret = ret.concat(nextChildrenPending[key]);
		}
		ret.push(c);
	});

	return ret.concat(pendingChildren);
}

var SPACE = ' ';
var RE_CLASS = /[\n\t\r]+/g;

var norm = function (elemClass) {
	return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
};

function addClass(elem, className) {
	if (elem.classList) {
		var _elem$classList;

		(_elem$classList = elem.classList).add.apply(_elem$classList, className.split(' '));
	} else {
		elem.className += ' ' + className;
	}
}

function removeClass(elem, needle) {
	needle = needle.trim();
	if (elem.classList) {
		var _elem$classList2;

		(_elem$classList2 = elem.classList).remove.apply(_elem$classList2, needle.split(' '));
	} else {
		var elemClass = elem.className.trim();
		var className = norm(elemClass);
		needle = SPACE + needle + SPACE;
		while (className.indexOf(needle) >= 0) {
			className = className.replace(needle, SPACE);
		}
		elem.className = className.trim();
	}
}

var EVENT_NAME_MAP = {
	transitionend: {
		transition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd',
		MozTransition: 'mozTransitionEnd',
		OTransition: 'oTransitionEnd',
		msTransition: 'MSTransitionEnd'
	},

	animationend: {
		animation: 'animationend',
		WebkitAnimation: 'webkitAnimationEnd',
		MozAnimation: 'mozAnimationEnd',
		OAnimation: 'oAnimationEnd',
		msAnimation: 'MSAnimationEnd'
	}
};

var endEvents = [];

function detectEvents() {
	var testEl = document.createElement('div'),
	    style = testEl.style;

	if (!('AnimationEvent' in window)) {
		delete EVENT_NAME_MAP.animationend.animation;
	}

	if (!('TransitionEvent' in window)) {
		delete EVENT_NAME_MAP.transitionend.transition;
	}

	for (var baseEventName in EVENT_NAME_MAP) {
		var baseEvents = EVENT_NAME_MAP[baseEventName];
		for (var styleName in baseEvents) {
			if (styleName in style) {
				endEvents.push(baseEvents[styleName]);
				break;
			}
		}
	}
}

if (typeof window !== 'undefined') {
	detectEvents();
}

function addEndEventListener(node, eventListener) {
	if (!endEvents.length) {
		return window.setTimeout(eventListener, 0);
	}
	endEvents.forEach(function (endEvent) {
		node.addEventListener(endEvent, eventListener, false);
	});
}

function removeEndEventListener(node, eventListener) {
	if (!endEvents.length) return;
	endEvents.forEach(function (endEvent) {
		node.removeEventListener(endEvent, eventListener, false);
	});
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var TICK = 17;

var CSSTransitionGroupChild = function (_Component) {
	inherits(CSSTransitionGroupChild, _Component);

	function CSSTransitionGroupChild() {
		var _temp, _this, _ret;

		classCallCheck(this, CSSTransitionGroupChild);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.flushClassNameQueue = function () {
			if (getComponentBase(_this)) {
				addClass(getComponentBase(_this), _this.classNameQueue.join(' '));
			}
			_this.classNameQueue.length = 0;
			_this.timeout = null;
		}, _temp), possibleConstructorReturn(_this, _ret);
	}

	CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
		var _this2 = this;

		var node = getComponentBase(this);

		var className = this.props.name[animationType] || this.props.name + '-' + animationType;
		var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
		var timer = null;

		if (this.endListener) {
			this.endListener();
		}

		this.endListener = function (e) {
			if (e && e.target !== node) return;

			clearTimeout(timer);
			removeClass(node, className);
			removeClass(node, activeClassName);
			removeEndEventListener(node, _this2.endListener);
			_this2.endListener = null;

			if (finishCallback) {
				finishCallback();
			}
		};

		if (timeout) {
			timer = setTimeout(this.endListener, timeout);
			this.transitionTimeouts.push(timer);
		} else {
			addEndEventListener(node, this.endListener);
		}

		addClass(node, className);

		this.queueClass(activeClassName);
	};

	CSSTransitionGroupChild.prototype.queueClass = function queueClass(className) {
		this.classNameQueue.push(className);

		if (!this.timeout) {
			this.timeout = setTimeout(this.flushClassNameQueue, TICK);
		}
	};

	CSSTransitionGroupChild.prototype.stop = function stop() {
		if (this.timeout) {
			clearTimeout(this.timeout);
			this.classNameQueue.length = 0;
			this.timeout = null;
		}
		if (this.endListener) {
			this.endListener();
		}
	};

	CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
		this.classNameQueue = [];
		this.transitionTimeouts = [];
	};

	CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		this.transitionTimeouts.forEach(function (timeout) {
			clearTimeout(timeout);
		});
	};

	CSSTransitionGroupChild.prototype.componentWillEnter = function componentWillEnter(done) {
		if (this.props.enter) {
			this.transition('enter', done, this.props.enterTimeout);
		} else {
			done();
		}
	};

	CSSTransitionGroupChild.prototype.componentWillLeave = function componentWillLeave(done) {
		if (this.props.leave) {
			this.transition('leave', done, this.props.leaveTimeout);
		} else {
			done();
		}
	};

	CSSTransitionGroupChild.prototype.render = function render() {
		return onlyChild(this.props.children);
	};

	return CSSTransitionGroupChild;
}(preact.Component);

var CSSTransitionGroup = function (_Component) {
	inherits(CSSTransitionGroup, _Component);

	function CSSTransitionGroup(props) {
		classCallCheck(this, CSSTransitionGroup);

		var _this = possibleConstructorReturn(this, _Component.call(this));

		_this.renderChild = function (child) {
			var _this$props = _this.props;
			var transitionName = _this$props.transitionName;
			var transitionEnter = _this$props.transitionEnter;
			var transitionLeave = _this$props.transitionLeave;
			var transitionEnterTimeout = _this$props.transitionEnterTimeout;
			var transitionLeaveTimeout = _this$props.transitionLeaveTimeout;
			var key = getKey(child);
			return preact.h(
				CSSTransitionGroupChild,
				{
					key: key,
					ref: function (c) {
						if (!(_this.refs[key] = c)) child = null;
					},
					name: transitionName,
					enter: transitionEnter,
					leave: transitionLeave,
					enterTimeout: transitionEnterTimeout,
					leaveTimeout: transitionLeaveTimeout },
				child
			);
		};

		_this.refs = {};
		_this.state = {
			children: (props.children || []).slice()
		};
		return _this;
	}

	CSSTransitionGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate(_, _ref) {
		var children = _ref.children;

		return children !== this.state.children;
	};

	CSSTransitionGroup.prototype.componentWillMount = function componentWillMount() {
		this.currentlyTransitioningKeys = {};
		this.keysToEnter = [];
		this.keysToLeave = [];
	};

	CSSTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref2) {
		var _this2 = this;

		var children = _ref2.children;
		var exclusive = _ref2.exclusive;
		var showProp = _ref2.showProp;

		var nextChildMapping = filterNullChildren(children || []).slice();

		var prevChildMapping = filterNullChildren(exclusive ? this.props.children : this.state.children);

		var newChildren = mergeChildMappings(prevChildMapping, nextChildMapping);

		if (showProp) {
			newChildren = newChildren.map(function (c) {
				if (!c.props[showProp] && isShownInChildren(prevChildMapping, c, showProp)) {
					var _cloneElement;

					c = preact.cloneElement(c, (_cloneElement = {}, _cloneElement[showProp] = true, _cloneElement));
				}
				return c;
			});
		}

		if (exclusive) {
			newChildren.forEach(function (c) {
				return _this2.stop(getKey(c));
			});
		}

		this.setState({ children: newChildren });
		this.forceUpdate();

		nextChildMapping.forEach(function (c) {
			var key = c.key;
			var hasPrev = prevChildMapping && inChildren(prevChildMapping, c);
			if (showProp) {
				if (hasPrev) {
					var showInPrev = isShownInChildren(prevChildMapping, c, showProp),
					    showInNow = c.props[showProp];
					if (!showInPrev && showInNow && !_this2.currentlyTransitioningKeys[key]) {
						_this2.keysToEnter.push(key);
					}
				}
			} else if (!hasPrev && !_this2.currentlyTransitioningKeys[key]) {
				_this2.keysToEnter.push(key);
			}
		});

		prevChildMapping.forEach(function (c) {
			var key = c.key;
			var hasNext = nextChildMapping && inChildren(nextChildMapping, c);
			if (showProp) {
				if (hasNext) {
					var showInNext = isShownInChildren(nextChildMapping, c, showProp);
					var showInNow = c.props[showProp];
					if (!showInNext && showInNow && !_this2.currentlyTransitioningKeys[key]) {
						_this2.keysToLeave.push(key);
					}
				}
			} else if (!hasNext && !_this2.currentlyTransitioningKeys[key]) {
				_this2.keysToLeave.push(key);
			}
		});
	};

	CSSTransitionGroup.prototype.performEnter = function performEnter(key) {
		var _this3 = this;

		this.currentlyTransitioningKeys[key] = true;
		var component = this.refs[key];
		if (component.componentWillEnter) {
			component.componentWillEnter(function () {
				return _this3._handleDoneEntering(key);
			});
		} else {
			this._handleDoneEntering(key);
		}
	};

	CSSTransitionGroup.prototype._handleDoneEntering = function _handleDoneEntering(key) {
		delete this.currentlyTransitioningKeys[key];
		var currentChildMapping = filterNullChildren(this.props.children),
		    showProp = this.props.showProp;
		if (!currentChildMapping || !showProp && !inChildrenByKey(currentChildMapping, key) || showProp && !isShownInChildrenByKey(currentChildMapping, key, showProp)) {
			this.performLeave(key);
		} else {
			this.setState({ children: currentChildMapping });
		}
	};

	CSSTransitionGroup.prototype.stop = function stop(key) {
		delete this.currentlyTransitioningKeys[key];
		var component = this.refs[key];
		if (component) component.stop();
	};

	CSSTransitionGroup.prototype.performLeave = function performLeave(key) {
		var _this4 = this;

		this.currentlyTransitioningKeys[key] = true;
		var component = this.refs[key];
		if (component && component.componentWillLeave) {
			component.componentWillLeave(function () {
				return _this4._handleDoneLeaving(key);
			});
		} else {
			this._handleDoneLeaving(key);
		}
	};

	CSSTransitionGroup.prototype._handleDoneLeaving = function _handleDoneLeaving(key) {
		delete this.currentlyTransitioningKeys[key];
		var showProp = this.props.showProp,
		    currentChildMapping = filterNullChildren(this.props.children);
		if (showProp && currentChildMapping && isShownInChildrenByKey(currentChildMapping, key, showProp)) {
			this.performEnter(key);
		} else if (!showProp && currentChildMapping && inChildrenByKey(currentChildMapping, key)) {
			this.performEnter(key);
		} else {
			this.setState({ children: currentChildMapping });
		}
	};

	CSSTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
		var _this5 = this;

		var keysToEnter = this.keysToEnter;
		var keysToLeave = this.keysToLeave;

		this.keysToEnter = [];
		keysToEnter.forEach(function (k) {
			return _this5.performEnter(k);
		});
		this.keysToLeave = [];
		keysToLeave.forEach(function (k) {
			return _this5.performLeave(k);
		});
	};

	CSSTransitionGroup.prototype.render = function render(_ref3, _ref4) {
		var Component = _ref3.component;
		var transitionName = _ref3.transitionName;
		var transitionEnter = _ref3.transitionEnter;
		var transitionLeave = _ref3.transitionLeave;
		var transitionEnterTimeout = _ref3.transitionEnterTimeout;
		var transitionLeaveTimeout = _ref3.transitionLeaveTimeout;
		var c = _ref3.children;
		var props = objectWithoutProperties(_ref3, ['component', 'transitionName', 'transitionEnter', 'transitionLeave', 'transitionEnterTimeout', 'transitionLeaveTimeout', 'children']);
		var children = _ref4.children;

		return preact.h(
			Component,
			props,
			filterNullChildren(children).map(this.renderChild)
		);
	};

	return CSSTransitionGroup;
}(preact.Component);
CSSTransitionGroup.defaultProps = {
	component: 'span',
	transitionEnter: true,
	transitionLeave: true
};

return CSSTransitionGroup;

})));
//# sourceMappingURL=preact-css-transition-group.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.mjs":
/*!*********************************************!*\
  !*** ./node_modules/preact/dist/preact.mjs ***!
  \*********************************************/
/*! exports provided: default, h, createElement, cloneElement, createRef, Component, render, rerender, options */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

function applyRef(ref, value) {
  if (ref != null) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p;
	while (p = items.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		applyRef(old, null);
		applyRef(value, node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.shift()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	applyRef(component.__ref, component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.push(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	applyRef(component.__ref, null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

function createRef() {
	return {};
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	createRef: createRef,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.mjs.map


/***/ }),

/***/ "./node_modules/prettier-bytes/index.js":
/*!**********************************************!*\
  !*** ./node_modules/prettier-bytes/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = prettierBytes

function prettierBytes (num) {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('Expected a number, got ' + typeof num)
  }

  var neg = num < 0
  var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  if (neg) {
    num = -num
  }

  if (num < 1) {
    return (neg ? '-' : '') + num + ' B'
  }

  var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1)
  num = Number(num / Math.pow(1000, exponent))
  var unit = units[exponent]

  if (num >= 10 || num % 1 === 0) {
    // Do not show decimals when the number is two-digit, or if the number has no
    // decimal component.
    return (neg ? '-' : '') + num.toFixed(0) + ' ' + unit
  } else {
    return (neg ? '-' : '') + num.toFixed(1) + ' ' + unit
  }
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/run-parallel/index.js":
/*!********************************************!*\
  !*** ./node_modules/run-parallel/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {module.exports = runParallel

function runParallel (tasks, cb) {
  var results, pending, keys
  var isSync = true

  if (Array.isArray(tasks)) {
    results = []
    pending = tasks.length
  } else {
    keys = Object.keys(tasks)
    results = {}
    pending = keys.length
  }

  function done (err) {
    function end () {
      if (cb) cb(err, results)
      cb = null
    }
    if (isSync) process.nextTick(end)
    else end()
  }

  function each (i, err, result) {
    results[i] = result
    if (--pending === 0 || err) {
      done(err)
    }
  }

  if (!pending) {
    // empty
    done(null)
  } else if (keys) {
    // object
    keys.forEach(function (key) {
      tasks[key](function (err, result) { each(key, err, result) })
    })
  } else {
    // array
    tasks.forEach(function (task, i) {
      task(function (err, result) { each(i, err, result) })
    })
  }

  isSync = false
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/wildcard/index.js":
/*!****************************************!*\
  !*** ./node_modules/wildcard/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node: true */


/**
  # wildcard

  Very simple wildcard matching, which is designed to provide the same
  functionality that is found in the
  [eve](https://github.com/adobe-webplatform/eve) eventing library.

  ## Usage

  It works with strings:

  <<< examples/strings.js

  Arrays:

  <<< examples/arrays.js

  Objects (matching against keys):

  <<< examples/objects.js

  While the library works in Node, if you are are looking for file-based
  wildcard matching then you should have a look at:

  <https://github.com/isaacs/node-glob>
**/

function WildcardMatcher(text, separator) {
  this.text = text = text || '';
  this.hasWild = ~text.indexOf('*');
  this.separator = separator;
  this.parts = text.split(separator);
}

WildcardMatcher.prototype.match = function(input) {
  var matches = true;
  var parts = this.parts;
  var ii;
  var partsCount = parts.length;
  var testParts;

  if (typeof input == 'string' || input instanceof String) {
    if (!this.hasWild && this.text != input) {
      matches = false;
    } else {
      testParts = (input || '').split(this.separator);
      for (ii = 0; matches && ii < partsCount; ii++) {
        if (parts[ii] === '*')  {
          continue;
        } else if (ii < testParts.length) {
          matches = parts[ii] === testParts[ii];
        } else {
          matches = false;
        }
      }

      // If matches, then return the component parts
      matches = matches && testParts;
    }
  }
  else if (typeof input.splice == 'function') {
    matches = [];

    for (ii = input.length; ii--; ) {
      if (this.match(input[ii])) {
        matches[matches.length] = input[ii];
      }
    }
  }
  else if (typeof input == 'object') {
    matches = {};

    for (var key in input) {
      if (this.match(key)) {
        matches[key] = input[key];
      }
    }
  }

  return matches;
};

module.exports = function(text, test, separator) {
  var matcher = new WildcardMatcher(text, separator || /[\/\.]/);
  if (typeof test != 'undefined') {
    return matcher.match(test);
  }

  return matcher;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Uppy = __webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js")
const XHRUpload = __webpack_require__(/*! @uppy/xhr-upload */ "./node_modules/@uppy/xhr-upload/lib/index.js")
const Dashboard = __webpack_require__(/*! @uppy/dashboard */ "./node_modules/@uppy/dashboard/lib/index.js")
const generateFileID = __webpack_require__(/*! @uppy/utils/lib/generateFileID */ "./node_modules/@uppy/utils/lib/generateFileID.js")

window.uppy =  Uppy()
.use(Dashboard, {
  inline: true,
  target: '#drag-drop-area',
  showLinkToFileUploadResult: true
})
// .use(Uppy.Tus, {endpoint: 'https://master.tus.io/files/'})
.use(XHRUpload, {
  endpoint: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media',
  formData: false,
  headers: {
    'Authorization': 'Bearer ' + accessToken
    // 'Content-Type': 'image/jpeg' /* FIXED! with file.xhrUpload.headers property.. :) {exist, but undocumented} TO DO: FIX THIS! It has to be different for every different filetype, so how? */
  }
})
.on('upload-success', function(file, response, uploadURL) {
  console.log('File uploaded! Now updating meta-data...')
  // we have file.name, response.id

  const url = 'https://www.googleapis.com/drive/v3/files/' + response.id + '?addParents=' + folderId;

  const fileRes = {
    name: file.name
  }

  uppy.setFileState(file.id, {uploadURL: base_url + 'pics/viewer/' + response.id})

  fetch(url, {
    method: 'PATCH',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fileRes)
  }).then(response => response.json())
  .then(function (json) {
    console.log('Finished updating metadata!', json)
  })

}).on('file-added', function(file) {
  console.log("added file of type: ", file.type)
  file.xhrUpload.headers = {
    'Content-Type': file.type
  }

  uppy.setFileState(file.id, file)
})

uppy.on('complete', (result) => {
console.log('Upload complete! We’ve uploaded these files:', result.successful)
})

// START FILE LISTING

let url = 'https://www.googleapis.com/drive/v3/files?q=\'' + folderId + '\' in parents';
url = encodeURI(url);
fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + accessToken
  }
})
.then(response => response.json())
.then( function (json) {
    console.log(json)
    // document.getElementById('loading-block').visibility = 'hidden'
    let filePromises = []
    json.files.forEach((file) => {
      filePromises.push(
        fetch('https://www.googleapis.com/drive/v3/files/' + file.id + "?fields=thumbnailLink,mimeType,id,name,fileExtension,size,modifiedTime", {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + accessToken
          }
        }).then(resp => resp.json())
      )
    })
    return Promise.all( filePromises )
  })
.then( function (files) {
    links = files.map(a => a.thumbnailLink)
    console.log("links", links)

    let filesList = {}
    files.forEach( (file) => {
      const newFile = {
        source: '',
        id: generateFileID({...file, data: {size: file.size, lastModified: file.modifiedTime}}),
        name: file.name,
        extension: file.fileExtension || '',
        meta: Object.assign({}, uppy.getState().meta, {name: file.name, type: file.mimeType}),
        type: file.mimeType,
        data: {
          size: parseInt(file.size),
          lastModified: file.modifiedTime
        },
        progress: {
          percentage: 100,
          bytesUploaded: file.size,
          bytesTotal: file.size || 0,
          uploadComplete: true,
          uploadStarted: true
        },
        size: file.size || 0,
        // isRemote: true,
        // remote: file.remote || '',
        preview: file.thumbnailLink,
        uploadURL: base_url + 'pics/viewer/' + file.id
      }
      filesList[newFile.id] = newFile
    })

    uppy.setState({
      files: {
        ...uppy.getState().files,
        ...filesList
      }
    })
})


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2NvbXBhbmlvbi1jbGllbnQvbGliL1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9jb21wYW5pb24tY2xpZW50L2xpYi9SZXF1ZXN0Q2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9jb21wYW5pb24tY2xpZW50L2xpYi9Tb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2NvbXBhbmlvbi1jbGllbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9jb3JlL2xpYi9QbHVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2NvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL2NvbXBvbmVudHMvQWN0aW9uQnJvd3NlVGFnbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi9jb21wb25lbnRzL0FkZEZpbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL2NvbXBvbmVudHMvQWRkRmlsZXNQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi9jb21wb25lbnRzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi9jb21wb25lbnRzL0ZpbGVDYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL2NvbXBvbmVudHMvRmlsZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2Rhc2hib2FyZC9saWIvY29tcG9uZW50cy9GaWxlSXRlbVByb2dyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL2NvbXBvbmVudHMvRmlsZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2Rhc2hib2FyZC9saWIvY29tcG9uZW50cy9GaWxlUHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi9jb21wb25lbnRzL1BhbmVsQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi9jb21wb25lbnRzL1BhbmVsVG9wQmFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL2NvbXBvbmVudHMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2Rhc2hib2FyZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2Rhc2hib2FyZC9saWIvdXRpbHMvY29weVRvQ2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL3V0aWxzL2dldEZpbGVUeXBlSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi91dGlscy9pZ25vcmVFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi91dGlscy90cnVuY2F0ZVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvaW5mb3JtZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9zdGF0dXMtYmFyL2xpYi9TdGF0dXNCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3N0YXR1cy1iYXIvbGliL1N0YXR1c0JhclN0YXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvc3RhdHVzLWJhci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3N0b3JlLWRlZmF1bHQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS90aHVtYm5haWwtZ2VuZXJhdG9yL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL1RyYW5zbGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9kYXRhVVJJdG9CbG9iLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvZW1pdFNvY2tldFByb2dyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvZmluZEFsbERPTUVsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvZmluZERPTUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9nZW5lcmF0ZUZpbGVJRC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2dldEJ5dGVzUmVtYWluaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9nZXRGaWxlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2dldFNvY2tldEhvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9nZXRTcGVlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2dldFRpbWVTdGFtcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2lzRE9NRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2lzT2JqZWN0VVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvaXNQcmV2aWV3U3VwcG9ydGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvaXNUb3VjaERldmljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2xpbWl0UHJvbWlzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9taW1lVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9wcmV0dHlFVEEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9zZWNvbmRzVG9UaW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvdG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkveGhyLXVwbG9hZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1aWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1aWQvbGliL2ZpbmdlcnByaW50LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1aWQvbGliL3BhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZHJhZy1kcm9wL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGF0dGVuL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pbWUtbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25hbWVzcGFjZS1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmVhY3QtY3NzLXRyYW5zaXRpb24tZ3JvdXAvZGlzdC9wcmVhY3QtY3NzLXRyYW5zaXRpb24tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0aWVyLWJ5dGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbC9kaXN0L1Jlc2l6ZU9ic2VydmVyLmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ydW4tcGFyYWxsZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2lsZGNhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxrSkFBa0o7QUFDbEo7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLFM7Ozs7Ozs7Ozs7O0FDdDJCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxD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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxVQUFVLEVBQUU7QUFDL0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGlFQUFpRSxhQUFhO0FBQzlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsRUFBRTtBQUNGO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxzRkFBc0Y7QUFDdEYsR0FBRztBQUNILDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxLQUFLO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7O0FBRUQ7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHFFQUFNLEVBQUM7QUFDMEU7QUFDaEc7Ozs7Ozs7Ozs7OztBQ250QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMvNUJyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EseUNBQXlDLHlCQUF5QjtBQUNsRSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQ0FBbUMsdUJBQXVCO0FBQzFELEtBQUs7QUFDTDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0NBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixNQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUZBLGFBQWEsbUJBQU8sQ0FBQywwREFBWTtBQUNqQyxrQkFBa0IsbUJBQU8sQ0FBQyxzRUFBa0I7QUFDNUMsa0JBQWtCLG1CQUFPLENBQUMsb0VBQWlCO0FBQzNDLHVCQUF1QixtQkFBTyxDQUFDLHdGQUFnQzs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxtQkFBbUIseUNBQXlDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsd0JBQXdCO0FBQ2pIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLG1EQUFtRDs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCLGtEQUFrRDtBQUM5RjtBQUNBO0FBQ0EsOEJBQThCLHlCQUF5QixxQ0FBcUM7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZXF1ZXN0Q2xpZW50ID0gcmVxdWlyZSgnLi9SZXF1ZXN0Q2xpZW50Jyk7XG5cbnZhciBfZ2V0TmFtZSA9IGZ1bmN0aW9uIF9nZXROYW1lKGlkKSB7XG4gIHJldHVybiBpZC5zcGxpdCgnLScpLm1hcChmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcbiAgfSkuam9pbignICcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX1JlcXVlc3RDbGllbnQpIHtcbiAgX2luaGVyaXRzKFByb3ZpZGVyLCBfUmVxdWVzdENsaWVudCk7XG5cbiAgZnVuY3Rpb24gUHJvdmlkZXIodXBweSwgb3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm92aWRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVxdWVzdENsaWVudC5jYWxsKHRoaXMsIHVwcHksIG9wdHMpKTtcblxuICAgIF90aGlzLnByb3ZpZGVyID0gb3B0cy5wcm92aWRlcjtcbiAgICBfdGhpcy5pZCA9IF90aGlzLnByb3ZpZGVyO1xuICAgIF90aGlzLmF1dGhQcm92aWRlciA9IG9wdHMuYXV0aFByb3ZpZGVyIHx8IF90aGlzLnByb3ZpZGVyO1xuICAgIF90aGlzLm5hbWUgPSBfdGhpcy5vcHRzLm5hbWUgfHwgX2dldE5hbWUoX3RoaXMuaWQpO1xuICAgIF90aGlzLnRva2VuS2V5ID0gJ2NvbXBhbmlvbi0nICsgX3RoaXMuaWQgKyAnLWF1dGgtdG9rZW4nO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8vIEB0b2RvKGkub2xhcmV3YWp1KSBjb25zaWRlciB3aGV0aGVyIG9yIG5vdCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgZXhwb3NlZFxuICBQcm92aWRlci5wcm90b3R5cGUuc2V0QXV0aFRva2VuID0gZnVuY3Rpb24gc2V0QXV0aFRva2VuKHRva2VuKSB7XG4gICAgLy8gQHRvZG8oaS5vbGFyZXdhanUpIGFkZCBmYWxsYmFjayBmb3IgT09NIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRva2VuS2V5LCB0b2tlbik7XG4gIH07XG5cbiAgUHJvdmlkZXIucHJvdG90eXBlLmNoZWNrQXV0aCA9IGZ1bmN0aW9uIGNoZWNrQXV0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5pZCArICcvYXV0aG9yaXplZCcpLnRoZW4oZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgIHJldHVybiBwYXlsb2FkLmF1dGhlbnRpY2F0ZWQ7XG4gICAgfSk7XG4gIH07XG5cbiAgUHJvdmlkZXIucHJvdG90eXBlLmF1dGhVcmwgPSBmdW5jdGlvbiBhdXRoVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmhvc3RuYW1lICsgJy8nICsgdGhpcy5pZCArICcvY29ubmVjdCc7XG4gIH07XG5cbiAgUHJvdmlkZXIucHJvdG90eXBlLmZpbGVVcmwgPSBmdW5jdGlvbiBmaWxlVXJsKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9zdG5hbWUgKyAnLycgKyB0aGlzLmlkICsgJy9nZXQvJyArIGlkO1xuICB9O1xuXG4gIFByb3ZpZGVyLnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24gbGlzdChkaXJlY3RvcnkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5pZCArICcvbGlzdC8nICsgKGRpcmVjdG9yeSB8fCAnJykpO1xuICB9O1xuXG4gIFByb3ZpZGVyLnByb3RvdHlwZS5sb2dvdXQgPSBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgcmVkaXJlY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGxvY2F0aW9uLmhyZWY7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5pZCArICcvbG9nb3V0P3JlZGlyZWN0PScgKyByZWRpcmVjdCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShfdGhpczIudG9rZW5LZXkpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfTtcblxuICBQcm92aWRlci5pbml0UGx1Z2luID0gZnVuY3Rpb24gaW5pdFBsdWdpbihwbHVnaW4sIG9wdHMsIGRlZmF1bHRPcHRzKSB7XG4gICAgcGx1Z2luLnR5cGUgPSAnYWNxdWlyZXInO1xuICAgIHBsdWdpbi5maWxlcyA9IFtdO1xuICAgIGlmIChkZWZhdWx0T3B0cykge1xuICAgICAgcGx1Z2luLm9wdHMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdHMsIG9wdHMpO1xuICAgIH1cbiAgICBpZiAob3B0cy5zZXJ2ZXJQYXR0ZXJuKSB7XG4gICAgICB2YXIgcGF0dGVybiA9IG9wdHMuc2VydmVyUGF0dGVybjtcbiAgICAgIC8vIHZhbGlkYXRlIHNlcnZlclBhdHRlcm4gcGFyYW1cbiAgICAgIGlmICh0eXBlb2YgcGF0dGVybiAhPT0gJ3N0cmluZycgJiYgIUFycmF5LmlzQXJyYXkocGF0dGVybikgJiYgIShwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHBsdWdpbi5pZCArICc6IHRoZSBvcHRpb24gXCJzZXJ2ZXJQYXR0ZXJuXCIgbXVzdCBiZSBvbmUgb2Ygc3RyaW5nLCBBcnJheSwgUmVnRXhwJyk7XG4gICAgICB9XG4gICAgICBwbHVnaW4ub3B0cy5zZXJ2ZXJQYXR0ZXJuID0gcGF0dGVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG9lcyBub3Qgc3RhcnQgd2l0aCBodHRwczovL1xuICAgICAgaWYgKC9eKD8haHR0cHM/OlxcL1xcLykuKiQvLnRlc3Qob3B0cy5zZXJ2ZXJVcmwpKSB7XG4gICAgICAgIHBsdWdpbi5vcHRzLnNlcnZlclBhdHRlcm4gPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBvcHRzLnNlcnZlclVybC5yZXBsYWNlKC9eXFwvXFwvLywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGx1Z2luLm9wdHMuc2VydmVyUGF0dGVybiA9IG9wdHMuc2VydmVyVXJsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoUHJvdmlkZXIsIFt7XG4gICAga2V5OiAnZGVmYXVsdEhlYWRlcnMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfUmVxdWVzdENsaWVudC5wcm90b3R5cGUuZGVmYXVsdEhlYWRlcnMsIHsgJ3VwcHktYXV0aC10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5LZXkpIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcm92aWRlcjtcbn0oUmVxdWVzdENsaWVudCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBSZW1vdmUgdGhlIHRyYWlsaW5nIHNsYXNoIHNvIHdlIGNhbiBhbHdheXMgc2FmZWx5IGFwcGVuZCAveHl6LlxuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBzdHJpcFNsYXNoKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZXF1ZXN0Q2xpZW50KHVwcHksIG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVxdWVzdENsaWVudCk7XG5cbiAgICB0aGlzLnVwcHkgPSB1cHB5O1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5vblJlY2VpdmVSZXNwb25zZSA9IHRoaXMub25SZWNlaXZlUmVzcG9uc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFJlcXVlc3RDbGllbnQucHJvdG90eXBlLm9uUmVjZWl2ZVJlc3BvbnNlID0gZnVuY3Rpb24gb25SZWNlaXZlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnVwcHkuZ2V0U3RhdGUoKTtcbiAgICB2YXIgY29tcGFuaW9uID0gc3RhdGUuY29tcGFuaW9uIHx8IHt9O1xuICAgIHZhciBob3N0ID0gdGhpcy5vcHRzLnNlcnZlclVybDtcbiAgICB2YXIgaGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XG4gICAgLy8gU3RvcmUgdGhlIHNlbGYtaWRlbnRpZmllZCBkb21haW4gbmFtZSBmb3IgdGhlIENvbXBhbmlvbiBpbnN0YW5jZSB3ZSBqdXN0IGhpdC5cbiAgICBpZiAoaGVhZGVycy5oYXMoJ2ktYW0nKSAmJiBoZWFkZXJzLmdldCgnaS1hbScpICE9PSBjb21wYW5pb25baG9zdF0pIHtcbiAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgIHRoaXMudXBweS5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbXBhbmlvbjogX2V4dGVuZHMoe30sIGNvbXBhbmlvbiwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbaG9zdF0gPSBoZWFkZXJzLmdldCgnaS1hbScpLCBfZXh0ZW5kczIpKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfTtcblxuICBSZXF1ZXN0Q2xpZW50LnByb3RvdHlwZS5fZ2V0VXJsID0gZnVuY3Rpb24gX2dldFVybCh1cmwpIHtcbiAgICBpZiAoL14oaHR0cHM/OnwpXFwvXFwvLy50ZXN0KHVybCkpIHtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmhvc3RuYW1lICsgJy8nICsgdXJsO1xuICB9O1xuXG4gIFJlcXVlc3RDbGllbnQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChwYXRoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBmZXRjaCh0aGlzLl9nZXRVcmwocGF0aCksIHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pXG4gICAgLy8gQHRvZG8gdmFsaWRhdGUgcmVzcG9uc2Ugc3RhdHVzIGJlZm9yZSBjYWxsaW5nIGpzb25cbiAgICAudGhlbih0aGlzLm9uUmVjZWl2ZVJlc3BvbnNlKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGdldCAnICsgX3RoaXMuX2dldFVybChwYXRoKSArICcuICcgKyBlcnIpO1xuICAgIH0pO1xuICB9O1xuXG4gIFJlcXVlc3RDbGllbnQucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiBwb3N0KHBhdGgsIGRhdGEpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiBmZXRjaCh0aGlzLl9nZXRVcmwocGF0aCksIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pLnRoZW4odGhpcy5vblJlY2VpdmVSZXNwb25zZSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA8IDIwMCB8fCByZXMuc3RhdHVzID4gMzAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHBvc3QgJyArIF90aGlzMi5fZ2V0VXJsKHBhdGgpICsgJy4gJyArIHJlcy5zdGF0dXNUZXh0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHBvc3QgJyArIF90aGlzMi5fZ2V0VXJsKHBhdGgpICsgJy4gJyArIGVycik7XG4gICAgfSk7XG4gIH07XG5cbiAgUmVxdWVzdENsaWVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gX2RlbGV0ZShwYXRoLCBkYXRhKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICByZXR1cm4gZmV0Y2godGhpcy5ob3N0bmFtZSArICcvJyArIHBhdGgsIHtcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIGJvZHk6IGRhdGEgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IG51bGxcbiAgICB9KS50aGVuKHRoaXMub25SZWNlaXZlUmVzcG9uc2UpXG4gICAgLy8gQHRvZG8gdmFsaWRhdGUgcmVzcG9uc2Ugc3RhdHVzIGJlZm9yZSBjYWxsaW5nIGpzb25cbiAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBkZWxldGUgJyArIF90aGlzMy5fZ2V0VXJsKHBhdGgpICsgJy4gJyArIGVycik7XG4gICAgfSk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFJlcXVlc3RDbGllbnQsIFt7XG4gICAga2V5OiAnaG9zdG5hbWUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF91cHB5JGdldFN0YXRlID0gdGhpcy51cHB5LmdldFN0YXRlKCksXG4gICAgICAgICAgY29tcGFuaW9uID0gX3VwcHkkZ2V0U3RhdGUuY29tcGFuaW9uO1xuXG4gICAgICB2YXIgaG9zdCA9IHRoaXMub3B0cy5zZXJ2ZXJVcmw7XG4gICAgICByZXR1cm4gc3RyaXBTbGFzaChjb21wYW5pb24gJiYgY29tcGFuaW9uW2hvc3RdID8gY29tcGFuaW9uW2hvc3RdIDogaG9zdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVmYXVsdEhlYWRlcnMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoZWFkZXJzJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5kZWZhdWx0SGVhZGVycywgdGhpcy5vcHRzLnNlcnZlckhlYWRlcnMgfHwge30pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZXF1ZXN0Q2xpZW50O1xufSgpOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBlZSA9IHJlcXVpcmUoJ25hbWVzcGFjZS1lbWl0dGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBVcHB5U29ja2V0KG9wdHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVwcHlTb2NrZXQpO1xuXG4gICAgdGhpcy5xdWV1ZWQgPSBbXTtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldChvcHRzLnRhcmdldCk7XG4gICAgdGhpcy5lbWl0dGVyID0gZWUoKTtcblxuICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICB3aGlsZSAoX3RoaXMucXVldWVkLmxlbmd0aCA+IDAgJiYgX3RoaXMuaXNPcGVuKSB7XG4gICAgICAgIHZhciBmaXJzdCA9IF90aGlzLnF1ZXVlZFswXTtcbiAgICAgICAgX3RoaXMuc2VuZChmaXJzdC5hY3Rpb24sIGZpcnN0LnBheWxvYWQpO1xuICAgICAgICBfdGhpcy5xdWV1ZWQgPSBfdGhpcy5xdWV1ZWQuc2xpY2UoMSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHRoaXMuX2hhbmRsZU1lc3NhZ2UgPSB0aGlzLl9oYW5kbGVNZXNzYWdlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLl9oYW5kbGVNZXNzYWdlO1xuXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVtaXQgPSB0aGlzLmVtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uID0gdGhpcy5vbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25jZSA9IHRoaXMub25jZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VuZCA9IHRoaXMuc2VuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVXBweVNvY2tldC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgfTtcblxuICBVcHB5U29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gc2VuZChhY3Rpb24sIHBheWxvYWQpIHtcbiAgICAvLyBhdHRhY2ggdXVpZFxuXG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5xdWV1ZWQucHVzaCh7IGFjdGlvbjogYWN0aW9uLCBwYXlsb2FkOiBwYXlsb2FkIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICBwYXlsb2FkOiBwYXlsb2FkXG4gICAgfSkpO1xuICB9O1xuXG4gIFVwcHlTb2NrZXQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oYWN0aW9uLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKGFjdGlvbiwgaGFuZGxlcik7XG4gIH07XG5cbiAgVXBweVNvY2tldC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoYWN0aW9uLCBwYXlsb2FkKSB7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoYWN0aW9uLCBwYXlsb2FkKTtcbiAgfTtcblxuICBVcHB5U29ja2V0LnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShhY3Rpb24sIGhhbmRsZXIpIHtcbiAgICB0aGlzLmVtaXR0ZXIub25jZShhY3Rpb24sIGhhbmRsZXIpO1xuICB9O1xuXG4gIFVwcHlTb2NrZXQucHJvdG90eXBlLl9oYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24gX2hhbmRsZU1lc3NhZ2UoZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbWVzc2FnZSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICAgIHRoaXMuZW1pdChtZXNzYWdlLmFjdGlvbiwgbWVzc2FnZS5wYXlsb2FkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBVcHB5U29ja2V0O1xufSgpOyIsIid1c2Utc3RyaWN0Jztcbi8qKlxuICogTWFuYWdlcyBjb21tdW5pY2F0aW9ucyB3aXRoIENvbXBhbmlvblxuICovXG5cbnZhciBSZXF1ZXN0Q2xpZW50ID0gcmVxdWlyZSgnLi9SZXF1ZXN0Q2xpZW50Jyk7XG52YXIgUHJvdmlkZXIgPSByZXF1aXJlKCcuL1Byb3ZpZGVyJyk7XG52YXIgU29ja2V0ID0gcmVxdWlyZSgnLi9Tb2NrZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJlcXVlc3RDbGllbnQ6IFJlcXVlc3RDbGllbnQsXG4gIFByb3ZpZGVyOiBQcm92aWRlcixcbiAgU29ja2V0OiBTb2NrZXRcbn07IiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgcHJlYWN0ID0gcmVxdWlyZSgncHJlYWN0Jyk7XG52YXIgZmluZERPTUVsZW1lbnQgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvZmluZERPTUVsZW1lbnQnKTtcblxuLyoqXG4gKiBEZWZlciBhIGZyZXF1ZW50IGNhbGwgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIGNhbGxpbmcgPSBudWxsO1xuICB2YXIgbGF0ZXN0QXJncyA9IG51bGw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGF0ZXN0QXJncyA9IGFyZ3M7XG4gICAgaWYgKCFjYWxsaW5nKSB7XG4gICAgICBjYWxsaW5nID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxpbmcgPSBudWxsO1xuICAgICAgICAvLyBBdCB0aGlzIHBvaW50IGBhcmdzYCBtYXkgYmUgZGlmZmVyZW50IGZyb20gdGhlIG1vc3RcbiAgICAgICAgLy8gcmVjZW50IHN0YXRlLCBpZiBtdWx0aXBsZSBjYWxscyBoYXBwZW5lZCBzaW5jZSB0aGlzIHRhc2tcbiAgICAgICAgLy8gd2FzIHF1ZXVlZC4gU28gd2UgdXNlIHRoZSBgbGF0ZXN0QXJnc2AsIHdoaWNoIGRlZmluaXRlbHlcbiAgICAgICAgLy8gaXMgdGhlIG1vc3QgcmVjZW50IGNhbGwuXG4gICAgICAgIHJldHVybiBmbi5hcHBseSh1bmRlZmluZWQsIGxhdGVzdEFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjYWxsaW5nO1xuICB9O1xufVxuXG4vKipcbiAqIEJvaWxlcnBsYXRlIHRoYXQgYWxsIFBsdWdpbnMgc2hhcmUgLSBhbmQgc2hvdWxkIG5vdCBiZSB1c2VkXG4gKiBkaXJlY3RseS4gSXQgYWxzbyBzaG93cyB3aGljaCBtZXRob2RzIGZpbmFsIHBsdWdpbnMgc2hvdWxkIGltcGxlbWVudC9vdmVycmlkZSxcbiAqIHRoaXMgZGVjaWRpbmcgb24gc3RydWN0dXJlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBtYWluIFVwcHkgY29yZSBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3Qgd2l0aCBwbHVnaW4gb3B0aW9uc1xuICogQHJldHVybiB7YXJyYXkgfCBzdHJpbmd9IGZpbGVzIG9yIHN1Y2Nlc3MvZmFpbCBtZXNzYWdlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQbHVnaW4odXBweSwgb3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQbHVnaW4pO1xuXG4gICAgdGhpcy51cHB5ID0gdXBweTtcbiAgICB0aGlzLm9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91bnQgPSB0aGlzLm1vdW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnN0YWxsID0gdGhpcy5pbnN0YWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy51bmluc3RhbGwgPSB0aGlzLnVuaW5zdGFsbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgUGx1Z2luLnByb3RvdHlwZS5nZXRQbHVnaW5TdGF0ZSA9IGZ1bmN0aW9uIGdldFBsdWdpblN0YXRlKCkge1xuICAgIHZhciBfdXBweSRnZXRTdGF0ZSA9IHRoaXMudXBweS5nZXRTdGF0ZSgpLFxuICAgICAgICBwbHVnaW5zID0gX3VwcHkkZ2V0U3RhdGUucGx1Z2lucztcblxuICAgIHJldHVybiBwbHVnaW5zW3RoaXMuaWRdIHx8IHt9O1xuICB9O1xuXG4gIFBsdWdpbi5wcm90b3R5cGUuc2V0UGx1Z2luU3RhdGUgPSBmdW5jdGlvbiBzZXRQbHVnaW5TdGF0ZSh1cGRhdGUpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgdmFyIF91cHB5JGdldFN0YXRlMiA9IHRoaXMudXBweS5nZXRTdGF0ZSgpLFxuICAgICAgICBwbHVnaW5zID0gX3VwcHkkZ2V0U3RhdGUyLnBsdWdpbnM7XG5cbiAgICB0aGlzLnVwcHkuc2V0U3RhdGUoe1xuICAgICAgcGx1Z2luczogX2V4dGVuZHMoe30sIHBsdWdpbnMsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3RoaXMuaWRdID0gX2V4dGVuZHMoe30sIHBsdWdpbnNbdGhpcy5pZF0sIHVwZGF0ZSksIF9leHRlbmRzMikpXG4gICAgfSk7XG4gIH07XG5cbiAgUGx1Z2luLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3VwZGF0ZVVJKSB7XG4gICAgICB0aGlzLl91cGRhdGVVSShzdGF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAqIENhbGxlZCB3aGVuIHBsdWdpbiBpcyBtb3VudGVkLCB3aGV0aGVyIGluIERPTSBvciBpbnRvIGFub3RoZXIgcGx1Z2luLlxuICAqIE5lZWRlZCBiZWNhdXNlIHNvbWV0aW1lcyBwbHVnaW5zIGFyZSBtb3VudGVkIHNlcGFyYXRlbHkvYWZ0ZXIgYGluc3RhbGxgLFxuICAqIHNvIHRoaXMuZWwgYW5kIHRoaXMucGFyZW50IG1pZ2h0IG5vdCBiZSBhdmFpbGFibGUgaW4gYGluc3RhbGxgLlxuICAqIFRoaXMgaXMgdGhlIGNhc2Ugd2l0aCBAdXBweS9yZWFjdCBwbHVnaW5zLCBmb3IgZXhhbXBsZS5cbiAgKi9cblxuXG4gIFBsdWdpbi5wcm90b3R5cGUub25Nb3VudCA9IGZ1bmN0aW9uIG9uTW91bnQoKSB7fTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgc3VwcGxpZWQgYHRhcmdldGAgaXMgYSBET00gZWxlbWVudCBvciBhbiBgb2JqZWN0YC5cbiAgICogSWYgaXTigJlzIGFuIG9iamVjdCDigJQgdGFyZ2V0IGlzIGEgcGx1Z2luLCBhbmQgd2Ugc2VhcmNoIGBwbHVnaW5zYFxuICAgKiBmb3IgYSBwbHVnaW4gd2l0aCBzYW1lIG5hbWUgYW5kIHJldHVybiBpdHMgdGFyZ2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHRhcmdldFxuICAgKlxuICAgKi9cblxuXG4gIFBsdWdpbi5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiBtb3VudCh0YXJnZXQsIHBsdWdpbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgY2FsbGVyUGx1Z2luTmFtZSA9IHBsdWdpbi5pZDtcblxuICAgIHZhciB0YXJnZXRFbGVtZW50ID0gZmluZERPTUVsZW1lbnQodGFyZ2V0KTtcblxuICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICB0aGlzLmlzVGFyZ2V0RE9NRWwgPSB0cnVlO1xuXG4gICAgICAvLyBBUEkgZm9yIHBsdWdpbnMgdGhhdCByZXF1aXJlIGEgc3luY2hyb25vdXMgcmVyZW5kZXIuXG4gICAgICB0aGlzLnJlcmVuZGVyID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIC8vIHBsdWdpbiBjb3VsZCBiZSByZW1vdmVkLCBidXQgdGhpcy5yZXJlbmRlciBpcyBkZWJvdW5jZWQgYmVsb3csXG4gICAgICAgIC8vIHNvIGl0IGNvdWxkIHN0aWxsIGJlIGNhbGxlZCBldmVuIGFmdGVyIHVwcHkucmVtb3ZlUGx1Z2luIG9yIHVwcHkuY2xvc2VcbiAgICAgICAgLy8gaGVuY2UgdGhlIGNoZWNrXG4gICAgICAgIGlmICghX3RoaXMudXBweS5nZXRQbHVnaW4oX3RoaXMuaWQpKSByZXR1cm47XG4gICAgICAgIF90aGlzLmVsID0gcHJlYWN0LnJlbmRlcihfdGhpcy5yZW5kZXIoc3RhdGUpLCB0YXJnZXRFbGVtZW50LCBfdGhpcy5lbCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fdXBkYXRlVUkgPSBkZWJvdW5jZSh0aGlzLnJlcmVuZGVyKTtcblxuICAgICAgdGhpcy51cHB5LmxvZygnSW5zdGFsbGluZyAnICsgY2FsbGVyUGx1Z2luTmFtZSArICcgdG8gYSBET00gZWxlbWVudCcpO1xuXG4gICAgICAvLyBjbGVhciBldmVyeXRoaW5nIGluc2lkZSB0aGUgdGFyZ2V0IGNvbnRhaW5lclxuICAgICAgaWYgKHRoaXMub3B0cy5yZXBsYWNlVGFyZ2V0Q29udGVudCkge1xuICAgICAgICB0YXJnZXRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsID0gcHJlYWN0LnJlbmRlcih0aGlzLnJlbmRlcih0aGlzLnVwcHkuZ2V0U3RhdGUoKSksIHRhcmdldEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLm9uTW91bnQoKTtcbiAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRQbHVnaW4gPSB2b2lkIDA7XG4gICAgaWYgKCh0eXBlb2YgdGFyZ2V0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0YXJnZXQpKSA9PT0gJ29iamVjdCcgJiYgdGFyZ2V0IGluc3RhbmNlb2YgUGx1Z2luKSB7XG4gICAgICAvLyBUYXJnZXRpbmcgYSBwbHVnaW4gKmluc3RhbmNlKlxuICAgICAgdGFyZ2V0UGx1Z2luID0gdGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gVGFyZ2V0aW5nIGEgcGx1Z2luIHR5cGVcbiAgICAgIHZhciBUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAvLyBGaW5kIHRoZSB0YXJnZXQgcGx1Z2luIGluc3RhbmNlLlxuICAgICAgdGhpcy51cHB5Lml0ZXJhdGVQbHVnaW5zKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgaWYgKHBsdWdpbiBpbnN0YW5jZW9mIFRhcmdldCkge1xuICAgICAgICAgIHRhcmdldFBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRQbHVnaW4pIHtcbiAgICAgIHRoaXMudXBweS5sb2coJ0luc3RhbGxpbmcgJyArIGNhbGxlclBsdWdpbk5hbWUgKyAnIHRvICcgKyB0YXJnZXRQbHVnaW4uaWQpO1xuICAgICAgdGhpcy5wYXJlbnQgPSB0YXJnZXRQbHVnaW47XG4gICAgICB0aGlzLmVsID0gdGFyZ2V0UGx1Z2luLmFkZFRhcmdldChwbHVnaW4pO1xuXG4gICAgICB0aGlzLm9uTW91bnQoKTtcbiAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxuICAgIHRoaXMudXBweS5sb2coJ05vdCBpbnN0YWxsaW5nICcgKyBjYWxsZXJQbHVnaW5OYW1lKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdGFyZ2V0IG9wdGlvbiBnaXZlbiB0byAnICsgY2FsbGVyUGx1Z2luTmFtZSArICcuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB0aGUgZWxlbWVudCBcXG4gICAgICBleGlzdHMgb24gdGhlIHBhZ2UsIG9yIHRoYXQgdGhlIHBsdWdpbiB5b3UgYXJlIHRhcmdldGluZyBoYXMgYmVlbiBpbnN0YWxsZWQuIENoZWNrIHRoYXQgdGhlIDxzY3JpcHQ+IHRhZyBpbml0aWFsaXppbmcgVXBweSBcXG4gICAgICBjb21lcyBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlLCBiZWZvcmUgdGhlIGNsb3NpbmcgPC9ib2R5PiB0YWcgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHJhbnNsb2FkaXQvdXBweS9pc3N1ZXMvMTA0MikuJyk7XG4gIH07XG5cbiAgUGx1Z2luLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4dGVuZCB0aGUgcmVuZGVyIG1ldGhvZCB0byBhZGQgeW91ciBwbHVnaW4gdG8gYSBET00gZWxlbWVudCcpO1xuICB9O1xuXG4gIFBsdWdpbi5wcm90b3R5cGUuYWRkVGFyZ2V0ID0gZnVuY3Rpb24gYWRkVGFyZ2V0KHBsdWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcignRXh0ZW5kIHRoZSBhZGRUYXJnZXQgbWV0aG9kIHRvIGFkZCB5b3VyIHBsdWdpbiB0byBhbm90aGVyIHBsdWdpblxcJ3MgdGFyZ2V0Jyk7XG4gIH07XG5cbiAgUGx1Z2luLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5pc1RhcmdldERPTUVsICYmIHRoaXMuZWwgJiYgdGhpcy5lbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICB9O1xuXG4gIFBsdWdpbi5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIGluc3RhbGwoKSB7fTtcblxuICBQbHVnaW4ucHJvdG90eXBlLnVuaW5zdGFsbCA9IGZ1bmN0aW9uIHVuaW5zdGFsbCgpIHtcbiAgICB0aGlzLnVubW91bnQoKTtcbiAgfTtcblxuICByZXR1cm4gUGx1Z2luO1xufSgpOyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFRyYW5zbGF0b3IgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvVHJhbnNsYXRvcicpO1xudmFyIGVlID0gcmVxdWlyZSgnbmFtZXNwYWNlLWVtaXR0ZXInKTtcbnZhciBjdWlkID0gcmVxdWlyZSgnY3VpZCcpO1xuLy8gY29uc3QgdGhyb3R0bGUgPSByZXF1aXJlKCdsb2Rhc2gudGhyb3R0bGUnKVxudmFyIHByZXR0eUJ5dGVzID0gcmVxdWlyZSgncHJldHRpZXItYnl0ZXMnKTtcbnZhciBtYXRjaCA9IHJlcXVpcmUoJ21pbWUtbWF0Y2gnKTtcbnZhciBEZWZhdWx0U3RvcmUgPSByZXF1aXJlKCdAdXBweS9zdG9yZS1kZWZhdWx0Jyk7XG52YXIgZ2V0RmlsZVR5cGUgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvZ2V0RmlsZVR5cGUnKTtcbnZhciBnZXRGaWxlTmFtZUFuZEV4dGVuc2lvbiA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9nZXRGaWxlTmFtZUFuZEV4dGVuc2lvbicpO1xudmFyIGdlbmVyYXRlRmlsZUlEID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL2dlbmVyYXRlRmlsZUlEJyk7XG52YXIgZ2V0VGltZVN0YW1wID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL2dldFRpbWVTdGFtcCcpO1xudmFyIFBsdWdpbiA9IHJlcXVpcmUoJy4vUGx1Z2luJyk7IC8vIEV4cG9ydGVkIGZyb20gaGVyZS5cblxuLyoqXG4gKiBVcHB5IENvcmUgbW9kdWxlLlxuICogTWFuYWdlcyBwbHVnaW5zLCBzdGF0ZSB1cGRhdGVzLCBhY3RzIGFzIGFuIGV2ZW50IGJ1cyxcbiAqIGFkZHMvcmVtb3ZlcyBmaWxlcyBhbmQgbWV0YWRhdGEuXG4gKi9cblxudmFyIFVwcHkgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAqIEluc3RhbnRpYXRlIFVwcHlcbiAgKiBAcGFyYW0ge29iamVjdH0gb3B0cyDigJQgVXBweSBvcHRpb25zXG4gICovXG4gIGZ1bmN0aW9uIFVwcHkob3B0cykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXBweSk7XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZSA9IHtcbiAgICAgIHN0cmluZ3M6IHtcbiAgICAgICAgeW91Q2FuT25seVVwbG9hZFg6IHtcbiAgICAgICAgICAwOiAnWW91IGNhbiBvbmx5IHVwbG9hZCAle3NtYXJ0X2NvdW50fSBmaWxlJyxcbiAgICAgICAgICAxOiAnWW91IGNhbiBvbmx5IHVwbG9hZCAle3NtYXJ0X2NvdW50fSBmaWxlcydcbiAgICAgICAgfSxcbiAgICAgICAgeW91SGF2ZVRvQXRMZWFzdFNlbGVjdFg6IHtcbiAgICAgICAgICAwOiAnWW91IGhhdmUgdG8gc2VsZWN0IGF0IGxlYXN0ICV7c21hcnRfY291bnR9IGZpbGUnLFxuICAgICAgICAgIDE6ICdZb3UgaGF2ZSB0byBzZWxlY3QgYXQgbGVhc3QgJXtzbWFydF9jb3VudH0gZmlsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIGV4Y2VlZHNTaXplOiAnVGhpcyBmaWxlIGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIHNpemUgb2YnLFxuICAgICAgICB5b3VDYW5Pbmx5VXBsb2FkRmlsZVR5cGVzOiAnWW91IGNhbiBvbmx5IHVwbG9hZDonLFxuICAgICAgICBjb21wYW5pb25FcnJvcjogJ0Nvbm5lY3Rpb24gd2l0aCBDb21wYW5pb24gZmFpbGVkJyxcbiAgICAgICAgZmFpbGVkVG9VcGxvYWQ6ICdGYWlsZWQgdG8gdXBsb2FkICV7ZmlsZX0nLFxuICAgICAgICBub0ludGVybmV0Q29ubmVjdGlvbjogJ05vIEludGVybmV0IGNvbm5lY3Rpb24nLFxuICAgICAgICBjb25uZWN0ZWRUb0ludGVybmV0OiAnQ29ubmVjdGVkIHRvIHRoZSBJbnRlcm5ldCcsXG4gICAgICAgIC8vIFN0cmluZ3MgZm9yIHJlbW90ZSBwcm92aWRlcnNcbiAgICAgICAgbm9GaWxlc0ZvdW5kOiAnWW91IGhhdmUgbm8gZmlsZXMgb3IgZm9sZGVycyBoZXJlJyxcbiAgICAgICAgc2VsZWN0WEZpbGVzOiB7XG4gICAgICAgICAgMDogJ1NlbGVjdCAle3NtYXJ0X2NvdW50fSBmaWxlJyxcbiAgICAgICAgICAxOiAnU2VsZWN0ICV7c21hcnRfY291bnR9IGZpbGVzJ1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICBsb2dPdXQ6ICdMb2cgb3V0J1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gICAgfTt2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBpZDogJ3VwcHknLFxuICAgICAgYXV0b1Byb2NlZWQ6IGZhbHNlLFxuICAgICAgYWxsb3dNdWx0aXBsZVVwbG9hZHM6IHRydWUsXG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICByZXN0cmljdGlvbnM6IHtcbiAgICAgICAgbWF4RmlsZVNpemU6IG51bGwsXG4gICAgICAgIG1heE51bWJlck9mRmlsZXM6IG51bGwsXG4gICAgICAgIG1pbk51bWJlck9mRmlsZXM6IG51bGwsXG4gICAgICAgIGFsbG93ZWRGaWxlVHlwZXM6IG51bGxcbiAgICAgIH0sXG4gICAgICBtZXRhOiB7fSxcbiAgICAgIG9uQmVmb3JlRmlsZUFkZGVkOiBmdW5jdGlvbiBvbkJlZm9yZUZpbGVBZGRlZChjdXJyZW50RmlsZSwgZmlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRGaWxlO1xuICAgICAgfSxcbiAgICAgIG9uQmVmb3JlVXBsb2FkOiBmdW5jdGlvbiBvbkJlZm9yZVVwbG9hZChmaWxlcykge1xuICAgICAgICByZXR1cm4gZmlsZXM7XG4gICAgICB9LFxuICAgICAgbG9jYWxlOiBkZWZhdWx0TG9jYWxlLFxuICAgICAgc3RvcmU6IERlZmF1bHRTdG9yZSgpXG5cbiAgICAgIC8vIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyB3aXRoIHRoZSBvbmVzIHNldCBieSB1c2VyXG4gICAgfTt0aGlzLm9wdHMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdHMpO1xuICAgIHRoaXMub3B0cy5yZXN0cmljdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMucmVzdHJpY3Rpb25zLCB0aGlzLm9wdHMucmVzdHJpY3Rpb25zKTtcblxuICAgIC8vIGkxOG5cbiAgICB0aGlzLnRyYW5zbGF0b3IgPSBuZXcgVHJhbnNsYXRvcihbZGVmYXVsdExvY2FsZSwgdGhpcy5vcHRzLmxvY2FsZV0pO1xuICAgIHRoaXMubG9jYWxlID0gdGhpcy50cmFuc2xhdG9yLmxvY2FsZTtcbiAgICB0aGlzLmkxOG4gPSB0aGlzLnRyYW5zbGF0b3IudHJhbnNsYXRlLmJpbmQodGhpcy50cmFuc2xhdG9yKTtcblxuICAgIC8vIENvbnRhaW5lciBmb3IgZGlmZmVyZW50IHR5cGVzIG9mIHBsdWdpbnNcbiAgICB0aGlzLnBsdWdpbnMgPSB7fTtcblxuICAgIHRoaXMuZ2V0U3RhdGUgPSB0aGlzLmdldFN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRQbHVnaW4gPSB0aGlzLmdldFBsdWdpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0RmlsZU1ldGEgPSB0aGlzLnNldEZpbGVNZXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRGaWxlU3RhdGUgPSB0aGlzLnNldEZpbGVTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9nID0gdGhpcy5sb2cuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluZm8gPSB0aGlzLmluZm8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGVJbmZvID0gdGhpcy5oaWRlSW5mby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRmlsZSA9IHRoaXMuYWRkRmlsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlRmlsZSA9IHRoaXMucmVtb3ZlRmlsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGF1c2VSZXN1bWUgPSB0aGlzLnBhdXNlUmVzdW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUHJvZ3Jlc3MgPSB0aGlzLl9jYWxjdWxhdGVQcm9ncmVzcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlT25saW5lU3RhdHVzID0gdGhpcy51cGRhdGVPbmxpbmVTdGF0dXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0UHJvZ3Jlc3MgPSB0aGlzLnJlc2V0UHJvZ3Jlc3MuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucGF1c2VBbGwgPSB0aGlzLnBhdXNlQWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXN1bWVBbGwgPSB0aGlzLnJlc3VtZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmV0cnlBbGwgPSB0aGlzLnJldHJ5QWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYW5jZWxBbGwgPSB0aGlzLmNhbmNlbEFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmV0cnlVcGxvYWQgPSB0aGlzLnJldHJ5VXBsb2FkLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGxvYWQgPSB0aGlzLnVwbG9hZC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5lbWl0dGVyID0gZWUoKTtcbiAgICB0aGlzLm9uID0gdGhpcy5vbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub2ZmID0gdGhpcy5vZmYuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uY2UgPSB0aGlzLmVtaXR0ZXIub25jZS5iaW5kKHRoaXMuZW1pdHRlcik7XG4gICAgdGhpcy5lbWl0ID0gdGhpcy5lbWl0dGVyLmVtaXQuYmluZCh0aGlzLmVtaXR0ZXIpO1xuXG4gICAgdGhpcy5wcmVQcm9jZXNzb3JzID0gW107XG4gICAgdGhpcy51cGxvYWRlcnMgPSBbXTtcbiAgICB0aGlzLnBvc3RQcm9jZXNzb3JzID0gW107XG5cbiAgICB0aGlzLnN0b3JlID0gdGhpcy5vcHRzLnN0b3JlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGx1Z2luczoge30sXG4gICAgICBmaWxlczoge30sXG4gICAgICBjdXJyZW50VXBsb2Fkczoge30sXG4gICAgICBhbGxvd05ld1VwbG9hZDogdHJ1ZSxcbiAgICAgIGNhcGFiaWxpdGllczoge1xuICAgICAgICByZXN1bWFibGVVcGxvYWRzOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHRvdGFsUHJvZ3Jlc3M6IDAsXG4gICAgICBtZXRhOiBfZXh0ZW5kcyh7fSwgdGhpcy5vcHRzLm1ldGEpLFxuICAgICAgaW5mbzoge1xuICAgICAgICBpc0hpZGRlbjogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fc3RvcmVVbnN1YnNjcmliZSA9IHRoaXMuc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uIChwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcGF0Y2gpIHtcbiAgICAgIF90aGlzLmVtaXQoJ3N0YXRlLXVwZGF0ZScsIHByZXZTdGF0ZSwgbmV4dFN0YXRlLCBwYXRjaCk7XG4gICAgICBfdGhpcy51cGRhdGVBbGwobmV4dFN0YXRlKTtcbiAgICB9KTtcblxuICAgIC8vIGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmdcbiAgICAvLyB0aGlzLnVwZGF0ZU51bSA9IDBcbiAgICBpZiAodGhpcy5vcHRzLmRlYnVnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB3aW5kb3dbJ3VwcHlMb2cnXSA9ICcnO1xuICAgICAgd2luZG93W3RoaXMub3B0cy5pZF0gPSB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX2FkZExpc3RlbmVycygpO1xuICB9XG5cbiAgVXBweS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmVtaXR0ZXIub24oZXZlbnQsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiBvZmYoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbWl0dGVyLm9mZihldmVudCwgY2FsbGJhY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG9uIGFsbCBwbHVnaW5zIGFuZCBydW4gYHVwZGF0ZWAgb24gdGhlbS5cbiAgICogQ2FsbGVkIGVhY2ggdGltZSBzdGF0ZSBjaGFuZ2VzLlxuICAgKlxuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLnVwZGF0ZUFsbCA9IGZ1bmN0aW9uIHVwZGF0ZUFsbChzdGF0ZSkge1xuICAgIHRoaXMuaXRlcmF0ZVBsdWdpbnMoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgcGx1Z2luLnVwZGF0ZShzdGF0ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgc3RhdGUgd2l0aCBhIHBhdGNoXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXRjaCB7Zm9vOiAnYmFyJ31cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKHBhdGNoKSB7XG4gICAgdGhpcy5zdG9yZS5zZXRTdGF0ZShwYXRjaCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCBzdGF0ZS5cbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgfTtcblxuICAvKipcbiAgKiBCYWNrIGNvbXBhdCBmb3Igd2hlbiB1cHB5LnN0YXRlIGlzIHVzZWQgaW5zdGVhZCBvZiB1cHB5LmdldFN0YXRlKCkuXG4gICovXG5cblxuICAvKipcbiAgKiBTaG9ydGhhbmQgdG8gc2V0IHN0YXRlIGZvciBhIHNwZWNpZmljIGZpbGUuXG4gICovXG4gIFVwcHkucHJvdG90eXBlLnNldEZpbGVTdGF0ZSA9IGZ1bmN0aW9uIHNldEZpbGVTdGF0ZShmaWxlSUQsIHN0YXRlKSB7XG4gICAgdmFyIF9leHRlbmRzMjtcblxuICAgIGlmICghdGhpcy5nZXRTdGF0ZSgpLmZpbGVzW2ZpbGVJRF0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuXFx1MjAxOXQgc2V0IHN0YXRlIGZvciAnICsgZmlsZUlEICsgJyAodGhlIGZpbGUgY291bGQgaGF2ZSBiZWVuIHJlbW92ZWQpJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWxlczogX2V4dGVuZHMoe30sIHRoaXMuZ2V0U3RhdGUoKS5maWxlcywgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbZmlsZUlEXSA9IF9leHRlbmRzKHt9LCB0aGlzLmdldFN0YXRlKCkuZmlsZXNbZmlsZUlEXSwgc3RhdGUpLCBfZXh0ZW5kczIpKVxuICAgIH0pO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnJlc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiByZXNldFByb2dyZXNzKCkge1xuICAgIHZhciBkZWZhdWx0UHJvZ3Jlc3MgPSB7XG4gICAgICBwZXJjZW50YWdlOiAwLFxuICAgICAgYnl0ZXNVcGxvYWRlZDogMCxcbiAgICAgIHVwbG9hZENvbXBsZXRlOiBmYWxzZSxcbiAgICAgIHVwbG9hZFN0YXJ0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgICB2YXIgZmlsZXMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5nZXRTdGF0ZSgpLmZpbGVzKTtcbiAgICB2YXIgdXBkYXRlZEZpbGVzID0ge307XG4gICAgT2JqZWN0LmtleXMoZmlsZXMpLmZvckVhY2goZnVuY3Rpb24gKGZpbGVJRCkge1xuICAgICAgdmFyIHVwZGF0ZWRGaWxlID0gX2V4dGVuZHMoe30sIGZpbGVzW2ZpbGVJRF0pO1xuICAgICAgdXBkYXRlZEZpbGUucHJvZ3Jlc3MgPSBfZXh0ZW5kcyh7fSwgdXBkYXRlZEZpbGUucHJvZ3Jlc3MsIGRlZmF1bHRQcm9ncmVzcyk7XG4gICAgICB1cGRhdGVkRmlsZXNbZmlsZUlEXSA9IHVwZGF0ZWRGaWxlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWxlczogdXBkYXRlZEZpbGVzLFxuICAgICAgdG90YWxQcm9ncmVzczogMFxuICAgIH0pO1xuXG4gICAgLy8gVE9ETyBEb2N1bWVudCBvbiB0aGUgd2Vic2l0ZVxuICAgIHRoaXMuZW1pdCgncmVzZXQtcHJvZ3Jlc3MnKTtcbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5hZGRQcmVQcm9jZXNzb3IgPSBmdW5jdGlvbiBhZGRQcmVQcm9jZXNzb3IoZm4pIHtcbiAgICB0aGlzLnByZVByb2Nlc3NvcnMucHVzaChmbik7XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUucmVtb3ZlUHJlUHJvY2Vzc29yID0gZnVuY3Rpb24gcmVtb3ZlUHJlUHJvY2Vzc29yKGZuKSB7XG4gICAgdmFyIGkgPSB0aGlzLnByZVByb2Nlc3NvcnMuaW5kZXhPZihmbik7XG4gICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICB0aGlzLnByZVByb2Nlc3NvcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5hZGRQb3N0UHJvY2Vzc29yID0gZnVuY3Rpb24gYWRkUG9zdFByb2Nlc3Nvcihmbikge1xuICAgIHRoaXMucG9zdFByb2Nlc3NvcnMucHVzaChmbik7XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUucmVtb3ZlUG9zdFByb2Nlc3NvciA9IGZ1bmN0aW9uIHJlbW92ZVBvc3RQcm9jZXNzb3IoZm4pIHtcbiAgICB2YXIgaSA9IHRoaXMucG9zdFByb2Nlc3NvcnMuaW5kZXhPZihmbik7XG4gICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICB0aGlzLnBvc3RQcm9jZXNzb3JzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUuYWRkVXBsb2FkZXIgPSBmdW5jdGlvbiBhZGRVcGxvYWRlcihmbikge1xuICAgIHRoaXMudXBsb2FkZXJzLnB1c2goZm4pO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnJlbW92ZVVwbG9hZGVyID0gZnVuY3Rpb24gcmVtb3ZlVXBsb2FkZXIoZm4pIHtcbiAgICB2YXIgaSA9IHRoaXMudXBsb2FkZXJzLmluZGV4T2YoZm4pO1xuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgdGhpcy51cGxvYWRlcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5zZXRNZXRhID0gZnVuY3Rpb24gc2V0TWV0YShkYXRhKSB7XG4gICAgdmFyIHVwZGF0ZWRNZXRhID0gX2V4dGVuZHMoe30sIHRoaXMuZ2V0U3RhdGUoKS5tZXRhLCBkYXRhKTtcbiAgICB2YXIgdXBkYXRlZEZpbGVzID0gX2V4dGVuZHMoe30sIHRoaXMuZ2V0U3RhdGUoKS5maWxlcyk7XG5cbiAgICBPYmplY3Qua2V5cyh1cGRhdGVkRmlsZXMpLmZvckVhY2goZnVuY3Rpb24gKGZpbGVJRCkge1xuICAgICAgdXBkYXRlZEZpbGVzW2ZpbGVJRF0gPSBfZXh0ZW5kcyh7fSwgdXBkYXRlZEZpbGVzW2ZpbGVJRF0sIHtcbiAgICAgICAgbWV0YTogX2V4dGVuZHMoe30sIHVwZGF0ZWRGaWxlc1tmaWxlSURdLm1ldGEsIGRhdGEpXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9nKCdBZGRpbmcgbWV0YWRhdGE6Jyk7XG4gICAgdGhpcy5sb2coZGF0YSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1ldGE6IHVwZGF0ZWRNZXRhLFxuICAgICAgZmlsZXM6IHVwZGF0ZWRGaWxlc1xuICAgIH0pO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnNldEZpbGVNZXRhID0gZnVuY3Rpb24gc2V0RmlsZU1ldGEoZmlsZUlELCBkYXRhKSB7XG4gICAgdmFyIHVwZGF0ZWRGaWxlcyA9IF9leHRlbmRzKHt9LCB0aGlzLmdldFN0YXRlKCkuZmlsZXMpO1xuICAgIGlmICghdXBkYXRlZEZpbGVzW2ZpbGVJRF0pIHtcbiAgICAgIHRoaXMubG9nKCdXYXMgdHJ5aW5nIHRvIHNldCBtZXRhZGF0YSBmb3IgYSBmaWxlIHRoYXTigJlzIG5vdCB3aXRoIHVzIGFueW1vcmU6ICcsIGZpbGVJRCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBuZXdNZXRhID0gX2V4dGVuZHMoe30sIHVwZGF0ZWRGaWxlc1tmaWxlSURdLm1ldGEsIGRhdGEpO1xuICAgIHVwZGF0ZWRGaWxlc1tmaWxlSURdID0gX2V4dGVuZHMoe30sIHVwZGF0ZWRGaWxlc1tmaWxlSURdLCB7XG4gICAgICBtZXRhOiBuZXdNZXRhXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzOiB1cGRhdGVkRmlsZXMgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhIGZpbGUgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZUlEIFRoZSBJRCBvZiB0aGUgZmlsZSBvYmplY3QgdG8gcmV0dXJuLlxuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLmdldEZpbGUgPSBmdW5jdGlvbiBnZXRGaWxlKGZpbGVJRCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0YXRlKCkuZmlsZXNbZmlsZUlEXTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGFsbCBmaWxlcyBpbiBhbiBhcnJheS5cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5nZXRGaWxlcyA9IGZ1bmN0aW9uIGdldEZpbGVzKCkge1xuICAgIHZhciBfZ2V0U3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgIGZpbGVzID0gX2dldFN0YXRlLmZpbGVzO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpbGVzKS5tYXAoZnVuY3Rpb24gKGZpbGVJRCkge1xuICAgICAgcmV0dXJuIGZpbGVzW2ZpbGVJRF07XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICogQ2hlY2sgaWYgbWluTnVtYmVyT2ZGaWxlcyByZXN0cmljdGlvbiBpcyByZWFjaGVkIGJlZm9yZSB1cGxvYWRpbmcuXG4gICpcbiAgKiBAcHJpdmF0ZVxuICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUuX2NoZWNrTWluTnVtYmVyT2ZGaWxlcyA9IGZ1bmN0aW9uIF9jaGVja01pbk51bWJlck9mRmlsZXMoZmlsZXMpIHtcbiAgICB2YXIgbWluTnVtYmVyT2ZGaWxlcyA9IHRoaXMub3B0cy5yZXN0cmljdGlvbnMubWluTnVtYmVyT2ZGaWxlcztcblxuICAgIGlmIChPYmplY3Qua2V5cyhmaWxlcykubGVuZ3RoIDwgbWluTnVtYmVyT2ZGaWxlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCcnICsgdGhpcy5pMThuKCd5b3VIYXZlVG9BdExlYXN0U2VsZWN0WCcsIHsgc21hcnRfY291bnQ6IG1pbk51bWJlck9mRmlsZXMgfSkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgKiBDaGVjayBpZiBmaWxlIHBhc3NlcyBhIHNldCBvZiByZXN0cmljdGlvbnMgc2V0IGluIG9wdGlvbnM6IG1heEZpbGVTaXplLFxuICAqIG1heE51bWJlck9mRmlsZXMgYW5kIGFsbG93ZWRGaWxlVHlwZXMuXG4gICpcbiAgKiBAcGFyYW0ge29iamVjdH0gZmlsZSBvYmplY3QgdG8gY2hlY2tcbiAgKiBAcHJpdmF0ZVxuICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUuX2NoZWNrUmVzdHJpY3Rpb25zID0gZnVuY3Rpb24gX2NoZWNrUmVzdHJpY3Rpb25zKGZpbGUpIHtcbiAgICB2YXIgX29wdHMkcmVzdHJpY3Rpb25zID0gdGhpcy5vcHRzLnJlc3RyaWN0aW9ucyxcbiAgICAgICAgbWF4RmlsZVNpemUgPSBfb3B0cyRyZXN0cmljdGlvbnMubWF4RmlsZVNpemUsXG4gICAgICAgIG1heE51bWJlck9mRmlsZXMgPSBfb3B0cyRyZXN0cmljdGlvbnMubWF4TnVtYmVyT2ZGaWxlcyxcbiAgICAgICAgYWxsb3dlZEZpbGVUeXBlcyA9IF9vcHRzJHJlc3RyaWN0aW9ucy5hbGxvd2VkRmlsZVR5cGVzO1xuXG5cbiAgICBpZiAobWF4TnVtYmVyT2ZGaWxlcykge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKS5maWxlcykubGVuZ3RoICsgMSA+IG1heE51bWJlck9mRmlsZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCcnICsgdGhpcy5pMThuKCd5b3VDYW5Pbmx5VXBsb2FkWCcsIHsgc21hcnRfY291bnQ6IG1heE51bWJlck9mRmlsZXMgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbGxvd2VkRmlsZVR5cGVzKSB7XG4gICAgICB2YXIgaXNDb3JyZWN0RmlsZVR5cGUgPSBhbGxvd2VkRmlsZVR5cGVzLmZpbHRlcihmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAvLyBpZiAoIWZpbGUudHlwZSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgLy8gaXMgdGhpcyBpcyBhIG1pbWUtdHlwZVxuICAgICAgICBpZiAodHlwZS5pbmRleE9mKCcvJykgPiAtMSkge1xuICAgICAgICAgIGlmICghZmlsZS50eXBlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoKGZpbGUudHlwZSwgdHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvdGhlcndpc2UgdGhpcyBpcyBsaWtlbHkgYW4gZXh0ZW5zaW9uXG4gICAgICAgIGlmICh0eXBlWzBdID09PSAnLicpIHtcbiAgICAgICAgICBpZiAoZmlsZS5leHRlbnNpb24gPT09IHR5cGUuc3Vic3RyKDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsZS5leHRlbnNpb247XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KS5sZW5ndGggPiAwO1xuXG4gICAgICBpZiAoIWlzQ29ycmVjdEZpbGVUeXBlKSB7XG4gICAgICAgIHZhciBhbGxvd2VkRmlsZVR5cGVzU3RyaW5nID0gYWxsb3dlZEZpbGVUeXBlcy5qb2luKCcsICcpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy5pMThuKCd5b3VDYW5Pbmx5VXBsb2FkRmlsZVR5cGVzJykgKyAnICcgKyBhbGxvd2VkRmlsZVR5cGVzU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF4RmlsZVNpemUpIHtcbiAgICAgIGlmIChmaWxlLmRhdGEuc2l6ZSA+IG1heEZpbGVTaXplKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLmkxOG4oJ2V4Y2VlZHNTaXplJykgKyAnICcgKyBwcmV0dHlCeXRlcyhtYXhGaWxlU2l6ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgKiBBZGQgYSBuZXcgZmlsZSB0byBgc3RhdGUuZmlsZXNgLiBUaGlzIHdpbGwgcnVuIGBvbkJlZm9yZUZpbGVBZGRlZGAsXG4gICogdHJ5IHRvIGd1ZXNzIGZpbGUgdHlwZSBpbiBhIGNsZXZlciB3YXksIGNoZWNrIGZpbGUgYWdhaW5zdCByZXN0cmljdGlvbnMsXG4gICogYW5kIHN0YXJ0IGFuIHVwbG9hZCBpZiBgYXV0b1Byb2NlZWQgPT09IHRydWVgLlxuICAqXG4gICogQHBhcmFtIHtvYmplY3R9IGZpbGUgb2JqZWN0IHRvIGFkZFxuICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUuYWRkRmlsZSA9IGZ1bmN0aW9uIGFkZEZpbGUoZmlsZSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzLFxuICAgICAgICBfZXh0ZW5kczM7XG5cbiAgICB2YXIgX2dldFN0YXRlMiA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgZmlsZXMgPSBfZ2V0U3RhdGUyLmZpbGVzLFxuICAgICAgICBhbGxvd05ld1VwbG9hZCA9IF9nZXRTdGF0ZTIuYWxsb3dOZXdVcGxvYWQ7XG5cbiAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IobXNnKSB7XG4gICAgICB2YXIgZXJyID0gKHR5cGVvZiBtc2cgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1zZykpID09PSAnb2JqZWN0JyA/IG1zZyA6IG5ldyBFcnJvcihtc2cpO1xuICAgICAgX3RoaXMyLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICBfdGhpczIuaW5mbyhlcnIubWVzc2FnZSwgJ2Vycm9yJywgNTAwMCk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfTtcblxuICAgIGlmIChhbGxvd05ld1VwbG9hZCA9PT0gZmFsc2UpIHtcbiAgICAgIG9uRXJyb3IobmV3IEVycm9yKCdDYW5ub3QgYWRkIG5ldyBmaWxlczogYWxyZWFkeSB1cGxvYWRpbmcuJykpO1xuICAgIH1cblxuICAgIHZhciBvbkJlZm9yZUZpbGVBZGRlZFJlc3VsdCA9IHRoaXMub3B0cy5vbkJlZm9yZUZpbGVBZGRlZChmaWxlLCBmaWxlcyk7XG5cbiAgICBpZiAob25CZWZvcmVGaWxlQWRkZWRSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmxvZygnTm90IGFkZGluZyBmaWxlIGJlY2F1c2Ugb25CZWZvcmVGaWxlQWRkZWQgcmV0dXJuZWQgZmFsc2UnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoKHR5cGVvZiBvbkJlZm9yZUZpbGVBZGRlZFJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob25CZWZvcmVGaWxlQWRkZWRSZXN1bHQpKSA9PT0gJ29iamVjdCcgJiYgb25CZWZvcmVGaWxlQWRkZWRSZXN1bHQpIHtcbiAgICAgIC8vIHdhcm5pbmcgYWZ0ZXIgdGhlIGNoYW5nZSBpbiAwLjI0XG4gICAgICBpZiAob25CZWZvcmVGaWxlQWRkZWRSZXN1bHQudGhlbikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvbkJlZm9yZUZpbGVBZGRlZCgpIHJldHVybmVkIGEgUHJvbWlzZSwgYnV0IHRoaXMgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZC4gSXQgbXVzdCBiZSBzeW5jaHJvbm91cy4nKTtcbiAgICAgIH1cbiAgICAgIGZpbGUgPSBvbkJlZm9yZUZpbGVBZGRlZFJlc3VsdDtcbiAgICB9XG5cbiAgICB2YXIgZmlsZVR5cGUgPSBnZXRGaWxlVHlwZShmaWxlKTtcbiAgICB2YXIgZmlsZU5hbWUgPSB2b2lkIDA7XG4gICAgaWYgKGZpbGUubmFtZSkge1xuICAgICAgZmlsZU5hbWUgPSBmaWxlLm5hbWU7XG4gICAgfSBlbHNlIGlmIChmaWxlVHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKSB7XG4gICAgICBmaWxlTmFtZSA9IGZpbGVUeXBlLnNwbGl0KCcvJylbMF0gKyAnLicgKyBmaWxlVHlwZS5zcGxpdCgnLycpWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWxlTmFtZSA9ICdub25hbWUnO1xuICAgIH1cbiAgICB2YXIgZmlsZUV4dGVuc2lvbiA9IGdldEZpbGVOYW1lQW5kRXh0ZW5zaW9uKGZpbGVOYW1lKS5leHRlbnNpb247XG4gICAgdmFyIGlzUmVtb3RlID0gZmlsZS5pc1JlbW90ZSB8fCBmYWxzZTtcblxuICAgIHZhciBmaWxlSUQgPSBnZW5lcmF0ZUZpbGVJRChmaWxlKTtcblxuICAgIHZhciBtZXRhID0gZmlsZS5tZXRhIHx8IHt9O1xuICAgIG1ldGEubmFtZSA9IGZpbGVOYW1lO1xuICAgIG1ldGEudHlwZSA9IGZpbGVUeXBlO1xuXG4gICAgdmFyIG5ld0ZpbGUgPSB7XG4gICAgICBzb3VyY2U6IGZpbGUuc291cmNlIHx8ICcnLFxuICAgICAgaWQ6IGZpbGVJRCxcbiAgICAgIG5hbWU6IGZpbGVOYW1lLFxuICAgICAgZXh0ZW5zaW9uOiBmaWxlRXh0ZW5zaW9uIHx8ICcnLFxuICAgICAgbWV0YTogX2V4dGVuZHMoe30sIHRoaXMuZ2V0U3RhdGUoKS5tZXRhLCBtZXRhKSxcbiAgICAgIHR5cGU6IGZpbGVUeXBlLFxuICAgICAgZGF0YTogZmlsZS5kYXRhLFxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgcGVyY2VudGFnZTogMCxcbiAgICAgICAgYnl0ZXNVcGxvYWRlZDogMCxcbiAgICAgICAgYnl0ZXNUb3RhbDogZmlsZS5kYXRhLnNpemUgfHwgMCxcbiAgICAgICAgdXBsb2FkQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICB1cGxvYWRTdGFydGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHNpemU6IGZpbGUuZGF0YS5zaXplIHx8IDAsXG4gICAgICBpc1JlbW90ZTogaXNSZW1vdGUsXG4gICAgICByZW1vdGU6IGZpbGUucmVtb3RlIHx8ICcnLFxuICAgICAgcHJldmlldzogZmlsZS5wcmV2aWV3XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jaGVja1Jlc3RyaWN0aW9ucyhuZXdGaWxlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbGVzOiBfZXh0ZW5kcyh7fSwgZmlsZXMsIChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW2ZpbGVJRF0gPSBuZXdGaWxlLCBfZXh0ZW5kczMpKVxuICAgIH0pO1xuXG4gICAgdGhpcy5lbWl0KCdmaWxlLWFkZGVkJywgbmV3RmlsZSk7XG4gICAgdGhpcy5sb2coJ0FkZGVkIGZpbGU6ICcgKyBmaWxlTmFtZSArICcsICcgKyBmaWxlSUQgKyAnLCBtaW1lIHR5cGU6ICcgKyBmaWxlVHlwZSk7XG5cbiAgICBpZiAodGhpcy5vcHRzLmF1dG9Qcm9jZWVkICYmICF0aGlzLnNjaGVkdWxlZEF1dG9Qcm9jZWVkKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlZEF1dG9Qcm9jZWVkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zY2hlZHVsZWRBdXRvUHJvY2VlZCA9IG51bGw7XG4gICAgICAgIF90aGlzMi51cGxvYWQoKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA0KTtcbiAgICB9XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUucmVtb3ZlRmlsZSA9IGZ1bmN0aW9uIHJlbW92ZUZpbGUoZmlsZUlEKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgX2dldFN0YXRlMyA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgZmlsZXMgPSBfZ2V0U3RhdGUzLmZpbGVzLFxuICAgICAgICBjdXJyZW50VXBsb2FkcyA9IF9nZXRTdGF0ZTMuY3VycmVudFVwbG9hZHM7XG5cbiAgICB2YXIgdXBkYXRlZEZpbGVzID0gX2V4dGVuZHMoe30sIGZpbGVzKTtcbiAgICB2YXIgcmVtb3ZlZEZpbGUgPSB1cGRhdGVkRmlsZXNbZmlsZUlEXTtcbiAgICBkZWxldGUgdXBkYXRlZEZpbGVzW2ZpbGVJRF07XG5cbiAgICAvLyBSZW1vdmUgdGhpcyBmaWxlIGZyb20gaXRzIGBjdXJyZW50VXBsb2FkYC5cbiAgICB2YXIgdXBkYXRlZFVwbG9hZHMgPSBfZXh0ZW5kcyh7fSwgY3VycmVudFVwbG9hZHMpO1xuICAgIHZhciByZW1vdmVVcGxvYWRzID0gW107XG4gICAgT2JqZWN0LmtleXModXBkYXRlZFVwbG9hZHMpLmZvckVhY2goZnVuY3Rpb24gKHVwbG9hZElEKSB7XG4gICAgICB2YXIgbmV3RmlsZUlEcyA9IGN1cnJlbnRVcGxvYWRzW3VwbG9hZElEXS5maWxlSURzLmZpbHRlcihmdW5jdGlvbiAodXBsb2FkRmlsZUlEKSB7XG4gICAgICAgIHJldHVybiB1cGxvYWRGaWxlSUQgIT09IGZpbGVJRDtcbiAgICAgIH0pO1xuICAgICAgLy8gUmVtb3ZlIHRoZSB1cGxvYWQgaWYgbm8gZmlsZXMgYXJlIGFzc29jaWF0ZWQgd2l0aCBpdCBhbnltb3JlLlxuICAgICAgaWYgKG5ld0ZpbGVJRHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVVwbG9hZHMucHVzaCh1cGxvYWRJRCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlZFVwbG9hZHNbdXBsb2FkSURdID0gX2V4dGVuZHMoe30sIGN1cnJlbnRVcGxvYWRzW3VwbG9hZElEXSwge1xuICAgICAgICBmaWxlSURzOiBuZXdGaWxlSURzXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFVwbG9hZHM6IHVwZGF0ZWRVcGxvYWRzLFxuICAgICAgZmlsZXM6IHVwZGF0ZWRGaWxlc1xuICAgIH0pO1xuXG4gICAgcmVtb3ZlVXBsb2Fkcy5mb3JFYWNoKGZ1bmN0aW9uICh1cGxvYWRJRCkge1xuICAgICAgX3RoaXMzLl9yZW1vdmVVcGxvYWQodXBsb2FkSUQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY2FsY3VsYXRlVG90YWxQcm9ncmVzcygpO1xuICAgIHRoaXMuZW1pdCgnZmlsZS1yZW1vdmVkJywgcmVtb3ZlZEZpbGUpO1xuICAgIHRoaXMubG9nKCdGaWxlIHJlbW92ZWQ6ICcgKyByZW1vdmVkRmlsZS5pZCk7XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUucGF1c2VSZXN1bWUgPSBmdW5jdGlvbiBwYXVzZVJlc3VtZShmaWxlSUQpIHtcbiAgICBpZiAoIXRoaXMuZ2V0U3RhdGUoKS5jYXBhYmlsaXRpZXMucmVzdW1hYmxlVXBsb2FkcyB8fCB0aGlzLmdldEZpbGUoZmlsZUlEKS51cGxvYWRDb21wbGV0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB3YXNQYXVzZWQgPSB0aGlzLmdldEZpbGUoZmlsZUlEKS5pc1BhdXNlZCB8fCBmYWxzZTtcbiAgICB2YXIgaXNQYXVzZWQgPSAhd2FzUGF1c2VkO1xuXG4gICAgdGhpcy5zZXRGaWxlU3RhdGUoZmlsZUlELCB7XG4gICAgICBpc1BhdXNlZDogaXNQYXVzZWRcbiAgICB9KTtcblxuICAgIHRoaXMuZW1pdCgndXBsb2FkLXBhdXNlJywgZmlsZUlELCBpc1BhdXNlZCk7XG5cbiAgICByZXR1cm4gaXNQYXVzZWQ7XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUucGF1c2VBbGwgPSBmdW5jdGlvbiBwYXVzZUFsbCgpIHtcbiAgICB2YXIgdXBkYXRlZEZpbGVzID0gX2V4dGVuZHMoe30sIHRoaXMuZ2V0U3RhdGUoKS5maWxlcyk7XG4gICAgdmFyIGluUHJvZ3Jlc3NVcGRhdGVkRmlsZXMgPSBPYmplY3Qua2V5cyh1cGRhdGVkRmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuICF1cGRhdGVkRmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkQ29tcGxldGUgJiYgdXBkYXRlZEZpbGVzW2ZpbGVdLnByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQ7XG4gICAgfSk7XG5cbiAgICBpblByb2dyZXNzVXBkYXRlZEZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHZhciB1cGRhdGVkRmlsZSA9IF9leHRlbmRzKHt9LCB1cGRhdGVkRmlsZXNbZmlsZV0sIHtcbiAgICAgICAgaXNQYXVzZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdXBkYXRlZEZpbGVzW2ZpbGVdID0gdXBkYXRlZEZpbGU7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzOiB1cGRhdGVkRmlsZXMgfSk7XG5cbiAgICB0aGlzLmVtaXQoJ3BhdXNlLWFsbCcpO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnJlc3VtZUFsbCA9IGZ1bmN0aW9uIHJlc3VtZUFsbCgpIHtcbiAgICB2YXIgdXBkYXRlZEZpbGVzID0gX2V4dGVuZHMoe30sIHRoaXMuZ2V0U3RhdGUoKS5maWxlcyk7XG4gICAgdmFyIGluUHJvZ3Jlc3NVcGRhdGVkRmlsZXMgPSBPYmplY3Qua2V5cyh1cGRhdGVkRmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuICF1cGRhdGVkRmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkQ29tcGxldGUgJiYgdXBkYXRlZEZpbGVzW2ZpbGVdLnByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQ7XG4gICAgfSk7XG5cbiAgICBpblByb2dyZXNzVXBkYXRlZEZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHZhciB1cGRhdGVkRmlsZSA9IF9leHRlbmRzKHt9LCB1cGRhdGVkRmlsZXNbZmlsZV0sIHtcbiAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgfSk7XG4gICAgICB1cGRhdGVkRmlsZXNbZmlsZV0gPSB1cGRhdGVkRmlsZTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXM6IHVwZGF0ZWRGaWxlcyB9KTtcblxuICAgIHRoaXMuZW1pdCgncmVzdW1lLWFsbCcpO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnJldHJ5QWxsID0gZnVuY3Rpb24gcmV0cnlBbGwoKSB7XG4gICAgdmFyIHVwZGF0ZWRGaWxlcyA9IF9leHRlbmRzKHt9LCB0aGlzLmdldFN0YXRlKCkuZmlsZXMpO1xuICAgIHZhciBmaWxlc1RvUmV0cnkgPSBPYmplY3Qua2V5cyh1cGRhdGVkRmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuIHVwZGF0ZWRGaWxlc1tmaWxlXS5lcnJvcjtcbiAgICB9KTtcblxuICAgIGZpbGVzVG9SZXRyeS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICB2YXIgdXBkYXRlZEZpbGUgPSBfZXh0ZW5kcyh7fSwgdXBkYXRlZEZpbGVzW2ZpbGVdLCB7XG4gICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgIH0pO1xuICAgICAgdXBkYXRlZEZpbGVzW2ZpbGVdID0gdXBkYXRlZEZpbGU7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWxlczogdXBkYXRlZEZpbGVzLFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9KTtcblxuICAgIHRoaXMuZW1pdCgncmV0cnktYWxsJywgZmlsZXNUb1JldHJ5KTtcblxuICAgIHZhciB1cGxvYWRJRCA9IHRoaXMuX2NyZWF0ZVVwbG9hZChmaWxlc1RvUmV0cnkpO1xuICAgIHJldHVybiB0aGlzLl9ydW5VcGxvYWQodXBsb2FkSUQpO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLmNhbmNlbEFsbCA9IGZ1bmN0aW9uIGNhbmNlbEFsbCgpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHRoaXMuZW1pdCgnY2FuY2VsLWFsbCcpO1xuXG4gICAgdmFyIGZpbGVzID0gT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpLmZpbGVzKTtcbiAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlSUQpIHtcbiAgICAgIF90aGlzNC5yZW1vdmVGaWxlKGZpbGVJRCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFsbG93TmV3VXBsb2FkOiB0cnVlLFxuICAgICAgdG90YWxQcm9ncmVzczogMCxcbiAgICAgIGVycm9yOiBudWxsXG4gICAgfSk7XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUucmV0cnlVcGxvYWQgPSBmdW5jdGlvbiByZXRyeVVwbG9hZChmaWxlSUQpIHtcbiAgICB2YXIgdXBkYXRlZEZpbGVzID0gX2V4dGVuZHMoe30sIHRoaXMuZ2V0U3RhdGUoKS5maWxlcyk7XG4gICAgdmFyIHVwZGF0ZWRGaWxlID0gX2V4dGVuZHMoe30sIHVwZGF0ZWRGaWxlc1tmaWxlSURdLCB7IGVycm9yOiBudWxsLCBpc1BhdXNlZDogZmFsc2UgfSk7XG4gICAgdXBkYXRlZEZpbGVzW2ZpbGVJRF0gPSB1cGRhdGVkRmlsZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbGVzOiB1cGRhdGVkRmlsZXNcbiAgICB9KTtcblxuICAgIHRoaXMuZW1pdCgndXBsb2FkLXJldHJ5JywgZmlsZUlEKTtcblxuICAgIHZhciB1cGxvYWRJRCA9IHRoaXMuX2NyZWF0ZVVwbG9hZChbZmlsZUlEXSk7XG4gICAgcmV0dXJuIHRoaXMuX3J1blVwbG9hZCh1cGxvYWRJRCk7XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLmNhbmNlbEFsbCgpO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLl9jYWxjdWxhdGVQcm9ncmVzcyA9IGZ1bmN0aW9uIF9jYWxjdWxhdGVQcm9ncmVzcyhmaWxlLCBkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmdldEZpbGUoZmlsZS5pZCkpIHtcbiAgICAgIHRoaXMubG9nKCdOb3Qgc2V0dGluZyBwcm9ncmVzcyBmb3IgYSBmaWxlIHRoYXQgaGFzIGJlZW4gcmVtb3ZlZDogJyArIGZpbGUuaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0RmlsZVN0YXRlKGZpbGUuaWQsIHtcbiAgICAgIHByb2dyZXNzOiBfZXh0ZW5kcyh7fSwgdGhpcy5nZXRGaWxlKGZpbGUuaWQpLnByb2dyZXNzLCB7XG4gICAgICAgIGJ5dGVzVXBsb2FkZWQ6IGRhdGEuYnl0ZXNVcGxvYWRlZCxcbiAgICAgICAgYnl0ZXNUb3RhbDogZGF0YS5ieXRlc1RvdGFsLFxuICAgICAgICBwZXJjZW50YWdlOiBNYXRoLmZsb29yKChkYXRhLmJ5dGVzVXBsb2FkZWQgLyBkYXRhLmJ5dGVzVG90YWwgKiAxMDApLnRvRml4ZWQoMikpXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgdGhpcy5fY2FsY3VsYXRlVG90YWxQcm9ncmVzcygpO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLl9jYWxjdWxhdGVUb3RhbFByb2dyZXNzID0gZnVuY3Rpb24gX2NhbGN1bGF0ZVRvdGFsUHJvZ3Jlc3MoKSB7XG4gICAgLy8gY2FsY3VsYXRlIHRvdGFsIHByb2dyZXNzLCB1c2luZyB0aGUgbnVtYmVyIG9mIGZpbGVzIGN1cnJlbnRseSB1cGxvYWRpbmcsXG4gICAgLy8gbXVsdGlwbGllZCBieSAxMDAgYW5kIHRoZSBzdW1tIG9mIGluZGl2aWR1YWwgcHJvZ3Jlc3Mgb2YgZWFjaCBmaWxlXG4gICAgdmFyIGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgdmFyIGluUHJvZ3Jlc3MgPSBmaWxlcy5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlLnByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5Qcm9ncmVzcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFByb2dyZXNzOiAwIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzaXplZEZpbGVzID0gaW5Qcm9ncmVzcy5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlLnByb2dyZXNzLmJ5dGVzVG90YWwgIT0gbnVsbDtcbiAgICB9KTtcbiAgICB2YXIgdW5zaXplZEZpbGVzID0gaW5Qcm9ncmVzcy5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlLnByb2dyZXNzLmJ5dGVzVG90YWwgPT0gbnVsbDtcbiAgICB9KTtcblxuICAgIGlmIChzaXplZEZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIHByb2dyZXNzTWF4ID0gaW5Qcm9ncmVzcy5sZW5ndGg7XG4gICAgICB2YXIgY3VycmVudFByb2dyZXNzID0gdW5zaXplZEZpbGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmaWxlKSB7XG4gICAgICAgIHJldHVybiBhY2MgKyBmaWxlLnByb2dyZXNzLnBlcmNlbnRhZ2U7XG4gICAgICB9LCAwKTtcbiAgICAgIHZhciBfdG90YWxQcm9ncmVzcyA9IE1hdGgucm91bmQoY3VycmVudFByb2dyZXNzIC8gcHJvZ3Jlc3NNYXggKiAxMDApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsUHJvZ3Jlc3M6IF90b3RhbFByb2dyZXNzIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b3RhbFNpemUgPSBzaXplZEZpbGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmaWxlKSB7XG4gICAgICByZXR1cm4gYWNjICsgZmlsZS5wcm9ncmVzcy5ieXRlc1RvdGFsO1xuICAgIH0sIDApO1xuICAgIHZhciBhdmVyYWdlU2l6ZSA9IHRvdGFsU2l6ZSAvIHNpemVkRmlsZXMubGVuZ3RoO1xuICAgIHRvdGFsU2l6ZSArPSBhdmVyYWdlU2l6ZSAqIHVuc2l6ZWRGaWxlcy5sZW5ndGg7XG5cbiAgICB2YXIgdXBsb2FkZWRTaXplID0gMDtcbiAgICBzaXplZEZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHVwbG9hZGVkU2l6ZSArPSBmaWxlLnByb2dyZXNzLmJ5dGVzVXBsb2FkZWQ7XG4gICAgfSk7XG4gICAgdW5zaXplZEZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHVwbG9hZGVkU2l6ZSArPSBhdmVyYWdlU2l6ZSAqIChmaWxlLnByb2dyZXNzLnBlcmNlbnRhZ2UgfHwgMCk7XG4gICAgfSk7XG5cbiAgICB2YXIgdG90YWxQcm9ncmVzcyA9IHRvdGFsU2l6ZSA9PT0gMCA/IDAgOiBNYXRoLnJvdW5kKHVwbG9hZGVkU2l6ZSAvIHRvdGFsU2l6ZSAqIDEwMCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdG90YWxQcm9ncmVzczogdG90YWxQcm9ncmVzcyB9KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGxpc3RlbmVycyBmb3IgYWxsIGdsb2JhbCBhY3Rpb25zLCBsaWtlOlxuICAgKiBgZXJyb3JgLCBgZmlsZS1yZW1vdmVkYCwgYHVwbG9hZC1wcm9ncmVzc2BcbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5fYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZExpc3RlbmVycygpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHRoaXMub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBfdGhpczUuc2V0U3RhdGUoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3VwbG9hZC1lcnJvcicsIGZ1bmN0aW9uIChmaWxlLCBlcnJvcikge1xuICAgICAgX3RoaXM1LnNldEZpbGVTdGF0ZShmaWxlLmlkLCB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgX3RoaXM1LnNldFN0YXRlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG5cbiAgICAgIHZhciBtZXNzYWdlID0gX3RoaXM1LmkxOG4oJ2ZhaWxlZFRvVXBsb2FkJywgeyBmaWxlOiBmaWxlLm5hbWUgfSk7XG4gICAgICBpZiAoKHR5cGVvZiBlcnJvciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZXJyb3IpKSA9PT0gJ29iamVjdCcgJiYgZXJyb3IubWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlID0geyBtZXNzYWdlOiBtZXNzYWdlLCBkZXRhaWxzOiBlcnJvci5tZXNzYWdlIH07XG4gICAgICB9XG4gICAgICBfdGhpczUuaW5mbyhtZXNzYWdlLCAnZXJyb3InLCA1MDAwKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3VwbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNS5zZXRTdGF0ZSh7IGVycm9yOiBudWxsIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbigndXBsb2FkLXN0YXJ0ZWQnLCBmdW5jdGlvbiAoZmlsZSwgdXBsb2FkKSB7XG4gICAgICBpZiAoIV90aGlzNS5nZXRGaWxlKGZpbGUuaWQpKSB7XG4gICAgICAgIF90aGlzNS5sb2coJ05vdCBzZXR0aW5nIHByb2dyZXNzIGZvciBhIGZpbGUgdGhhdCBoYXMgYmVlbiByZW1vdmVkOiAnICsgZmlsZS5pZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzNS5zZXRGaWxlU3RhdGUoZmlsZS5pZCwge1xuICAgICAgICBwcm9ncmVzczoge1xuICAgICAgICAgIHVwbG9hZFN0YXJ0ZWQ6IERhdGUubm93KCksXG4gICAgICAgICAgdXBsb2FkQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgIHBlcmNlbnRhZ2U6IDAsXG4gICAgICAgICAgYnl0ZXNVcGxvYWRlZDogMCxcbiAgICAgICAgICBieXRlc1RvdGFsOiBmaWxlLnNpemVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGxvYWQgcHJvZ3Jlc3MgZXZlbnRzIGNhbiBvY2N1ciBmcmVxdWVudGx5LCBlc3BlY2lhbGx5IHdoZW4geW91IGhhdmUgYSBnb29kXG4gICAgLy8gY29ubmVjdGlvbiB0byB0aGUgcmVtb3RlIHNlcnZlci4gVGhlcmVmb3JlLCB3ZSBhcmUgdGhyb3R0ZWxpbmcgdGhlbSB0b1xuICAgIC8vIHByZXZlbnQgYWNjZXNzaXZlIGZ1bmN0aW9uIGNhbGxzLlxuICAgIC8vIHNlZSBhbHNvOiBodHRwczovL2dpdGh1Yi5jb20vdHVzL3R1cy1qcy1jbGllbnQvY29tbWl0Lzk5NDBmMjdiMjM2MWZkN2UxMGJhNThiMDliNjBkODI0MjIxODNiYmJcbiAgICAvLyBjb25zdCBfdGhyb3R0bGVkQ2FsY3VsYXRlUHJvZ3Jlc3MgPSB0aHJvdHRsZSh0aGlzLl9jYWxjdWxhdGVQcm9ncmVzcywgMTAwLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlIH0pXG5cbiAgICB0aGlzLm9uKCd1cGxvYWQtcHJvZ3Jlc3MnLCB0aGlzLl9jYWxjdWxhdGVQcm9ncmVzcyk7XG5cbiAgICB0aGlzLm9uKCd1cGxvYWQtc3VjY2VzcycsIGZ1bmN0aW9uIChmaWxlLCB1cGxvYWRSZXNwLCB1cGxvYWRVUkwpIHtcbiAgICAgIHZhciBjdXJyZW50UHJvZ3Jlc3MgPSBfdGhpczUuZ2V0RmlsZShmaWxlLmlkKS5wcm9ncmVzcztcbiAgICAgIF90aGlzNS5zZXRGaWxlU3RhdGUoZmlsZS5pZCwge1xuICAgICAgICBwcm9ncmVzczogX2V4dGVuZHMoe30sIGN1cnJlbnRQcm9ncmVzcywge1xuICAgICAgICAgIHVwbG9hZENvbXBsZXRlOiB0cnVlLFxuICAgICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcbiAgICAgICAgICBieXRlc1VwbG9hZGVkOiBjdXJyZW50UHJvZ3Jlc3MuYnl0ZXNUb3RhbFxuICAgICAgICB9KSxcbiAgICAgICAgdXBsb2FkVVJMOiB1cGxvYWRVUkwsXG4gICAgICAgIGlzUGF1c2VkOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzNS5fY2FsY3VsYXRlVG90YWxQcm9ncmVzcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbigncHJlcHJvY2Vzcy1wcm9ncmVzcycsIGZ1bmN0aW9uIChmaWxlLCBwcm9ncmVzcykge1xuICAgICAgaWYgKCFfdGhpczUuZ2V0RmlsZShmaWxlLmlkKSkge1xuICAgICAgICBfdGhpczUubG9nKCdOb3Qgc2V0dGluZyBwcm9ncmVzcyBmb3IgYSBmaWxlIHRoYXQgaGFzIGJlZW4gcmVtb3ZlZDogJyArIGZpbGUuaWQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpczUuc2V0RmlsZVN0YXRlKGZpbGUuaWQsIHtcbiAgICAgICAgcHJvZ3Jlc3M6IF9leHRlbmRzKHt9LCBfdGhpczUuZ2V0RmlsZShmaWxlLmlkKS5wcm9ncmVzcywge1xuICAgICAgICAgIHByZXByb2Nlc3M6IHByb2dyZXNzXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3ByZXByb2Nlc3MtY29tcGxldGUnLCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgaWYgKCFfdGhpczUuZ2V0RmlsZShmaWxlLmlkKSkge1xuICAgICAgICBfdGhpczUubG9nKCdOb3Qgc2V0dGluZyBwcm9ncmVzcyBmb3IgYSBmaWxlIHRoYXQgaGFzIGJlZW4gcmVtb3ZlZDogJyArIGZpbGUuaWQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZmlsZXMgPSBfZXh0ZW5kcyh7fSwgX3RoaXM1LmdldFN0YXRlKCkuZmlsZXMpO1xuICAgICAgZmlsZXNbZmlsZS5pZF0gPSBfZXh0ZW5kcyh7fSwgZmlsZXNbZmlsZS5pZF0sIHtcbiAgICAgICAgcHJvZ3Jlc3M6IF9leHRlbmRzKHt9LCBmaWxlc1tmaWxlLmlkXS5wcm9ncmVzcylcbiAgICAgIH0pO1xuICAgICAgZGVsZXRlIGZpbGVzW2ZpbGUuaWRdLnByb2dyZXNzLnByZXByb2Nlc3M7XG5cbiAgICAgIF90aGlzNS5zZXRTdGF0ZSh7IGZpbGVzOiBmaWxlcyB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3Bvc3Rwcm9jZXNzLXByb2dyZXNzJywgZnVuY3Rpb24gKGZpbGUsIHByb2dyZXNzKSB7XG4gICAgICBpZiAoIV90aGlzNS5nZXRGaWxlKGZpbGUuaWQpKSB7XG4gICAgICAgIF90aGlzNS5sb2coJ05vdCBzZXR0aW5nIHByb2dyZXNzIGZvciBhIGZpbGUgdGhhdCBoYXMgYmVlbiByZW1vdmVkOiAnICsgZmlsZS5pZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzNS5zZXRGaWxlU3RhdGUoZmlsZS5pZCwge1xuICAgICAgICBwcm9ncmVzczogX2V4dGVuZHMoe30sIF90aGlzNS5nZXRTdGF0ZSgpLmZpbGVzW2ZpbGUuaWRdLnByb2dyZXNzLCB7XG4gICAgICAgICAgcG9zdHByb2Nlc3M6IHByb2dyZXNzXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3Bvc3Rwcm9jZXNzLWNvbXBsZXRlJywgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIGlmICghX3RoaXM1LmdldEZpbGUoZmlsZS5pZCkpIHtcbiAgICAgICAgX3RoaXM1LmxvZygnTm90IHNldHRpbmcgcHJvZ3Jlc3MgZm9yIGEgZmlsZSB0aGF0IGhhcyBiZWVuIHJlbW92ZWQ6ICcgKyBmaWxlLmlkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGZpbGVzID0gX2V4dGVuZHMoe30sIF90aGlzNS5nZXRTdGF0ZSgpLmZpbGVzKTtcbiAgICAgIGZpbGVzW2ZpbGUuaWRdID0gX2V4dGVuZHMoe30sIGZpbGVzW2ZpbGUuaWRdLCB7XG4gICAgICAgIHByb2dyZXNzOiBfZXh0ZW5kcyh7fSwgZmlsZXNbZmlsZS5pZF0ucHJvZ3Jlc3MpXG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSBmaWxlc1tmaWxlLmlkXS5wcm9ncmVzcy5wb3N0cHJvY2VzcztcbiAgICAgIC8vIFRPRE8gc2hvdWxkIHdlIHNldCBzb21lIGtpbmQgb2YgYGZ1bGx5Q29tcGxldGVgIHByb3BlcnR5IG9uIHRoZSBmaWxlIG9iamVjdFxuICAgICAgLy8gc28gaXQncyBlYXNpZXIgdG8gc2VlIHRoYXQgdGhlIGZpbGUgaXMgdXBsb2Fk4oCmZnVsbHkgY29tcGxldGXigKZyYXRoZXIgdGhhblxuICAgICAgLy8gd2hhdCB3ZSBoYXZlIHRvIGRvIG5vdyAoYHVwbG9hZENvbXBsZXRlICYmICFwb3N0cHJvY2Vzc2ApXG5cbiAgICAgIF90aGlzNS5zZXRTdGF0ZSh7IGZpbGVzOiBmaWxlcyB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3Jlc3RvcmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRmlsZXMgbWF5IGhhdmUgY2hhbmdlZC0tZW5zdXJlIHByb2dyZXNzIGlzIHN0aWxsIGFjY3VyYXRlLlxuICAgICAgX3RoaXM1Ll9jYWxjdWxhdGVUb3RhbFByb2dyZXNzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IGluZm9ybWVyIGlmIG9mZmxpbmVcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczUudXBkYXRlT25saW5lU3RhdHVzKCk7XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXM1LnVwZGF0ZU9ubGluZVN0YXR1cygpO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNS51cGRhdGVPbmxpbmVTdGF0dXMoKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS51cGRhdGVPbmxpbmVTdGF0dXMgPSBmdW5jdGlvbiB1cGRhdGVPbmxpbmVTdGF0dXMoKSB7XG4gICAgdmFyIG9ubGluZSA9IHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yLm9uTGluZSAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubmF2aWdhdG9yLm9uTGluZSA6IHRydWU7XG4gICAgaWYgKCFvbmxpbmUpIHtcbiAgICAgIHRoaXMuZW1pdCgnaXMtb2ZmbGluZScpO1xuICAgICAgdGhpcy5pbmZvKHRoaXMuaTE4bignbm9JbnRlcm5ldENvbm5lY3Rpb24nKSwgJ2Vycm9yJywgMCk7XG4gICAgICB0aGlzLndhc09mZmxpbmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXQoJ2lzLW9ubGluZScpO1xuICAgICAgaWYgKHRoaXMud2FzT2ZmbGluZSkge1xuICAgICAgICB0aGlzLmVtaXQoJ2JhY2stb25saW5lJyk7XG4gICAgICAgIHRoaXMuaW5mbyh0aGlzLmkxOG4oJ2Nvbm5lY3RlZFRvSW50ZXJuZXQnKSwgJ3N1Y2Nlc3MnLCAzMDAwKTtcbiAgICAgICAgdGhpcy53YXNPZmZsaW5lID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLmdldElEID0gZnVuY3Rpb24gZ2V0SUQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0cy5pZDtcbiAgfTtcblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgcGx1Z2luIHdpdGggQ29yZS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFBsdWdpbiBvYmplY3RcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRzXSBvYmplY3Qgd2l0aCBvcHRpb25zIHRvIGJlIHBhc3NlZCB0byBQbHVnaW5cbiAgICogQHJldHVybiB7T2JqZWN0fSBzZWxmIGZvciBjaGFpbmluZ1xuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShQbHVnaW4sIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIFBsdWdpbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIG1zZyA9ICdFeHBlY3RlZCBhIHBsdWdpbiBjbGFzcywgYnV0IGdvdCAnICsgKFBsdWdpbiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBQbHVnaW4gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKFBsdWdpbikpICsgJy4nICsgJyBQbGVhc2UgdmVyaWZ5IHRoYXQgdGhlIHBsdWdpbiB3YXMgaW1wb3J0ZWQgYW5kIHNwZWxsZWQgY29ycmVjdGx5Lic7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1zZyk7XG4gICAgfVxuXG4gICAgLy8gSW5zdGFudGlhdGVcbiAgICB2YXIgcGx1Z2luID0gbmV3IFBsdWdpbih0aGlzLCBvcHRzKTtcbiAgICB2YXIgcGx1Z2luSWQgPSBwbHVnaW4uaWQ7XG4gICAgdGhpcy5wbHVnaW5zW3BsdWdpbi50eXBlXSA9IHRoaXMucGx1Z2luc1twbHVnaW4udHlwZV0gfHwgW107XG5cbiAgICBpZiAoIXBsdWdpbklkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgcGx1Z2luIG11c3QgaGF2ZSBhbiBpZCcpO1xuICAgIH1cblxuICAgIGlmICghcGx1Z2luLnR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBwbHVnaW4gbXVzdCBoYXZlIGEgdHlwZScpO1xuICAgIH1cblxuICAgIHZhciBleGlzdHNQbHVnaW5BbHJlYWR5ID0gdGhpcy5nZXRQbHVnaW4ocGx1Z2luSWQpO1xuICAgIGlmIChleGlzdHNQbHVnaW5BbHJlYWR5KSB7XG4gICAgICB2YXIgX21zZyA9ICdBbHJlYWR5IGZvdW5kIGEgcGx1Z2luIG5hbWVkIFxcJycgKyBleGlzdHNQbHVnaW5BbHJlYWR5LmlkICsgJ1xcJy4gJyArICgnVHJpZWQgdG8gdXNlOiBcXCcnICsgcGx1Z2luSWQgKyAnXFwnLlxcbicpICsgJ1VwcHkgcGx1Z2lucyBtdXN0IGhhdmUgdW5pcXVlIFxcJ2lkXFwnIG9wdGlvbnMuIFNlZSBodHRwczovL3VwcHkuaW8vZG9jcy9wbHVnaW5zLyNpZC4nO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKF9tc2cpO1xuICAgIH1cblxuICAgIHRoaXMucGx1Z2luc1twbHVnaW4udHlwZV0ucHVzaChwbHVnaW4pO1xuICAgIHBsdWdpbi5pbnN0YWxsKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRmluZCBvbmUgUGx1Z2luIGJ5IG5hbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBwbHVnaW4gaWRcbiAgICogQHJldHVybiB7b2JqZWN0IHwgYm9vbGVhbn1cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5nZXRQbHVnaW4gPSBmdW5jdGlvbiBnZXRQbHVnaW4oaWQpIHtcbiAgICB2YXIgZm91bmRQbHVnaW4gPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0ZVBsdWdpbnMoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgaWYgKHBsdWdpbi5pZCA9PT0gaWQpIHtcbiAgICAgICAgZm91bmRQbHVnaW4gPSBwbHVnaW47XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmRQbHVnaW47XG4gIH07XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgdGhyb3VnaCBhbGwgYHVzZWBkIHBsdWdpbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZCB0aGF0IHdpbGwgYmUgcnVuIG9uIGVhY2ggcGx1Z2luXG4gICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUuaXRlcmF0ZVBsdWdpbnMgPSBmdW5jdGlvbiBpdGVyYXRlUGx1Z2lucyhtZXRob2QpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIE9iamVjdC5rZXlzKHRoaXMucGx1Z2lucykuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luVHlwZSkge1xuICAgICAgX3RoaXM2LnBsdWdpbnNbcGx1Z2luVHlwZV0uZm9yRWFjaChtZXRob2QpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmluc3RhbGwgYW5kIHJlbW92ZSBhIHBsdWdpbi5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGluc3RhbmNlIFRoZSBwbHVnaW4gaW5zdGFuY2UgdG8gcmVtb3ZlLlxuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLnJlbW92ZVBsdWdpbiA9IGZ1bmN0aW9uIHJlbW92ZVBsdWdpbihpbnN0YW5jZSkge1xuICAgIHRoaXMubG9nKCdSZW1vdmluZyBwbHVnaW4gJyArIGluc3RhbmNlLmlkKTtcbiAgICB0aGlzLmVtaXQoJ3BsdWdpbi1yZW1vdmUnLCBpbnN0YW5jZSk7XG5cbiAgICBpZiAoaW5zdGFuY2UudW5pbnN0YWxsKSB7XG4gICAgICBpbnN0YW5jZS51bmluc3RhbGwoKTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdCA9IHRoaXMucGx1Z2luc1tpbnN0YW5jZS50eXBlXS5zbGljZSgpO1xuICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5wbHVnaW5zW2luc3RhbmNlLnR5cGVdID0gbGlzdDtcbiAgICB9XG5cbiAgICB2YXIgdXBkYXRlZFN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgIGRlbGV0ZSB1cGRhdGVkU3RhdGUucGx1Z2luc1tpbnN0YW5jZS5pZF07XG4gICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVkU3RhdGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVbmluc3RhbGwgYWxsIHBsdWdpbnMgYW5kIGNsb3NlIGRvd24gdGhpcyBVcHB5IGluc3RhbmNlLlxuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICB0aGlzLmxvZygnQ2xvc2luZyBVcHB5IGluc3RhbmNlICcgKyB0aGlzLm9wdHMuaWQgKyAnOiByZW1vdmluZyBhbGwgZmlsZXMgYW5kIHVuaW5zdGFsbGluZyBwbHVnaW5zJyk7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICB0aGlzLl9zdG9yZVVuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLml0ZXJhdGVQbHVnaW5zKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIF90aGlzNy5yZW1vdmVQbHVnaW4ocGx1Z2luKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgKiBTZXQgaW5mbyBtZXNzYWdlIGluIGBzdGF0ZS5pbmZvYCwgc28gdGhhdCBVSSBwbHVnaW5zIGxpa2UgYEluZm9ybWVyYFxuICAqIGNhbiBkaXNwbGF5IHRoZSBtZXNzYWdlLlxuICAqXG4gICogQHBhcmFtIHtzdHJpbmcgfCBvYmplY3R9IG1lc3NhZ2UgTWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgYnkgdGhlIGluZm9ybWVyXG4gICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXVxuICAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb25dXG4gICovXG5cbiAgVXBweS5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uIGluZm8obWVzc2FnZSkge1xuICAgIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnaW5mbyc7XG4gICAgdmFyIGR1cmF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAzMDAwO1xuXG4gICAgdmFyIGlzQ29tcGxleE1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1lc3NhZ2UpKSA9PT0gJ29iamVjdCc7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluZm86IHtcbiAgICAgICAgaXNIaWRkZW46IGZhbHNlLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBtZXNzYWdlOiBpc0NvbXBsZXhNZXNzYWdlID8gbWVzc2FnZS5tZXNzYWdlIDogbWVzc2FnZSxcbiAgICAgICAgZGV0YWlsczogaXNDb21wbGV4TWVzc2FnZSA/IG1lc3NhZ2UuZGV0YWlscyA6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZW1pdCgnaW5mby12aXNpYmxlJyk7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5pbmZvVGltZW91dElEKTtcbiAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcbiAgICAgIHRoaXMuaW5mb1RpbWVvdXRJRCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBoaWRlIHRoZSBpbmZvcm1lciBhZnRlciBgZHVyYXRpb25gIG1pbGxpc2Vjb25kc1xuICAgIHRoaXMuaW5mb1RpbWVvdXRJRCA9IHNldFRpbWVvdXQodGhpcy5oaWRlSW5mbywgZHVyYXRpb24pO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLmhpZGVJbmZvID0gZnVuY3Rpb24gaGlkZUluZm8oKSB7XG4gICAgdmFyIG5ld0luZm8gPSBfZXh0ZW5kcyh7fSwgdGhpcy5nZXRTdGF0ZSgpLmluZm8sIHtcbiAgICAgIGlzSGlkZGVuOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmZvOiBuZXdJbmZvXG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdpbmZvLWhpZGRlbicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb2dzIHN0dWZmIHRvIGNvbnNvbGUsIG9ubHkgaWYgYGRlYnVnYCBpcyBzZXQgdG8gdHJ1ZS4gU2lsZW50IGluIHByb2R1Y3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gbXNnIHRvIGxvZ1xuICAgKiBAcGFyYW0ge1N0cmluZ30gW3R5cGVdIG9wdGlvbmFsIGBlcnJvcmAgb3IgYHdhcm5pbmdgXG4gICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gbG9nKG1zZywgdHlwZSkge1xuICAgIGlmICghdGhpcy5vcHRzLmRlYnVnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSAnW1VwcHldIFsnICsgZ2V0VGltZVN0YW1wKCkgKyAnXSAnICsgbXNnO1xuXG4gICAgd2luZG93Wyd1cHB5TG9nJ10gPSB3aW5kb3dbJ3VwcHlMb2cnXSArICdcXG4nICsgJ0RFQlVHIExPRzogJyArIG1zZztcblxuICAgIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnd2FybmluZycpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobXNnID09PSAnJyArIG1zZykge1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSAnW1VwcHldIFsnICsgZ2V0VGltZVN0YW1wKCkgKyAnXSc7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgIGNvbnNvbGUuZGlyKG1zZyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBPYnNvbGV0ZSwgZXZlbnQgbGlzdGVuZXJzIGFyZSBub3cgYWRkZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB0aGlzLmxvZygnQ2FsbGluZyBydW4oKSBpcyBubyBsb25nZXIgbmVjZXNzYXJ5LicsICd3YXJuaW5nJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc3RvcmUgYW4gdXBsb2FkIGJ5IGl0cyBJRC5cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5yZXN0b3JlID0gZnVuY3Rpb24gcmVzdG9yZSh1cGxvYWRJRCkge1xuICAgIHRoaXMubG9nKCdDb3JlOiBhdHRlbXB0aW5nIHRvIHJlc3RvcmUgdXBsb2FkIFwiJyArIHVwbG9hZElEICsgJ1wiJyk7XG5cbiAgICBpZiAoIXRoaXMuZ2V0U3RhdGUoKS5jdXJyZW50VXBsb2Fkc1t1cGxvYWRJRF0pIHtcbiAgICAgIHRoaXMuX3JlbW92ZVVwbG9hZCh1cGxvYWRJRCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdOb25leGlzdGVudCB1cGxvYWQnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3J1blVwbG9hZCh1cGxvYWRJRCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiB1cGxvYWQgZm9yIGEgYnVuY2ggb2YgZmlsZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZmlsZUlEcyBGaWxlIElEcyB0byBpbmNsdWRlIGluIHRoaXMgdXBsb2FkLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IElEIG9mIHRoaXMgdXBsb2FkLlxuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLl9jcmVhdGVVcGxvYWQgPSBmdW5jdGlvbiBfY3JlYXRlVXBsb2FkKGZpbGVJRHMpIHtcbiAgICB2YXIgX2V4dGVuZHM0O1xuXG4gICAgdmFyIF9nZXRTdGF0ZTQgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgIGFsbG93TmV3VXBsb2FkID0gX2dldFN0YXRlNC5hbGxvd05ld1VwbG9hZCxcbiAgICAgICAgY3VycmVudFVwbG9hZHMgPSBfZ2V0U3RhdGU0LmN1cnJlbnRVcGxvYWRzO1xuXG4gICAgaWYgKCFhbGxvd05ld1VwbG9hZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIGEgbmV3IHVwbG9hZDogYWxyZWFkeSB1cGxvYWRpbmcuJyk7XG4gICAgfVxuXG4gICAgdmFyIHVwbG9hZElEID0gY3VpZCgpO1xuXG4gICAgdGhpcy5lbWl0KCd1cGxvYWQnLCB7XG4gICAgICBpZDogdXBsb2FkSUQsXG4gICAgICBmaWxlSURzOiBmaWxlSURzXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFsbG93TmV3VXBsb2FkOiB0aGlzLm9wdHMuYWxsb3dNdWx0aXBsZVVwbG9hZHMgIT09IGZhbHNlLFxuXG4gICAgICBjdXJyZW50VXBsb2FkczogX2V4dGVuZHMoe30sIGN1cnJlbnRVcGxvYWRzLCAoX2V4dGVuZHM0ID0ge30sIF9leHRlbmRzNFt1cGxvYWRJRF0gPSB7XG4gICAgICAgIGZpbGVJRHM6IGZpbGVJRHMsXG4gICAgICAgIHN0ZXA6IDAsXG4gICAgICAgIHJlc3VsdDoge31cbiAgICAgIH0sIF9leHRlbmRzNCkpXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdXBsb2FkSUQ7XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUuX2dldFVwbG9hZCA9IGZ1bmN0aW9uIF9nZXRVcGxvYWQodXBsb2FkSUQpIHtcbiAgICB2YXIgX2dldFN0YXRlNSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgY3VycmVudFVwbG9hZHMgPSBfZ2V0U3RhdGU1LmN1cnJlbnRVcGxvYWRzO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRVcGxvYWRzW3VwbG9hZElEXTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGRhdGEgdG8gYW4gdXBsb2FkJ3MgcmVzdWx0IG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVwbG9hZElEIFRoZSBJRCBvZiB0aGUgdXBsb2FkLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBEYXRhIHByb3BlcnRpZXMgdG8gYWRkIHRvIHRoZSByZXN1bHQgb2JqZWN0LlxuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLmFkZFJlc3VsdERhdGEgPSBmdW5jdGlvbiBhZGRSZXN1bHREYXRhKHVwbG9hZElELCBkYXRhKSB7XG4gICAgdmFyIF9leHRlbmRzNTtcblxuICAgIGlmICghdGhpcy5fZ2V0VXBsb2FkKHVwbG9hZElEKSkge1xuICAgICAgdGhpcy5sb2coJ05vdCBzZXR0aW5nIHJlc3VsdCBmb3IgYW4gdXBsb2FkIHRoYXQgaGFzIGJlZW4gcmVtb3ZlZDogJyArIHVwbG9hZElEKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRVcGxvYWRzID0gdGhpcy5nZXRTdGF0ZSgpLmN1cnJlbnRVcGxvYWRzO1xuICAgIHZhciBjdXJyZW50VXBsb2FkID0gX2V4dGVuZHMoe30sIGN1cnJlbnRVcGxvYWRzW3VwbG9hZElEXSwge1xuICAgICAgcmVzdWx0OiBfZXh0ZW5kcyh7fSwgY3VycmVudFVwbG9hZHNbdXBsb2FkSURdLnJlc3VsdCwgZGF0YSlcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRVcGxvYWRzOiBfZXh0ZW5kcyh7fSwgY3VycmVudFVwbG9hZHMsIChfZXh0ZW5kczUgPSB7fSwgX2V4dGVuZHM1W3VwbG9hZElEXSA9IGN1cnJlbnRVcGxvYWQsIF9leHRlbmRzNSkpXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiB1cGxvYWQsIGVnLiBpZiBpdCBoYXMgYmVlbiBjYW5jZWxlZCBvciBjb21wbGV0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cGxvYWRJRCBUaGUgSUQgb2YgdGhlIHVwbG9hZC5cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5fcmVtb3ZlVXBsb2FkID0gZnVuY3Rpb24gX3JlbW92ZVVwbG9hZCh1cGxvYWRJRCkge1xuICAgIHZhciBjdXJyZW50VXBsb2FkcyA9IF9leHRlbmRzKHt9LCB0aGlzLmdldFN0YXRlKCkuY3VycmVudFVwbG9hZHMpO1xuICAgIGRlbGV0ZSBjdXJyZW50VXBsb2Fkc1t1cGxvYWRJRF07XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRVcGxvYWRzOiBjdXJyZW50VXBsb2Fkc1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSdW4gYW4gdXBsb2FkLiBUaGlzIHBpY2tzIHVwIHdoZXJlIGl0IGxlZnQgb2ZmIGluIGNhc2UgdGhlIHVwbG9hZCBpcyBiZWluZyByZXN0b3JlZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5fcnVuVXBsb2FkID0gZnVuY3Rpb24gX3J1blVwbG9hZCh1cGxvYWRJRCkge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgdmFyIHVwbG9hZERhdGEgPSB0aGlzLmdldFN0YXRlKCkuY3VycmVudFVwbG9hZHNbdXBsb2FkSURdO1xuICAgIHZhciByZXN0b3JlU3RlcCA9IHVwbG9hZERhdGEuc3RlcDtcblxuICAgIHZhciBzdGVwcyA9IFtdLmNvbmNhdCh0aGlzLnByZVByb2Nlc3NvcnMsIHRoaXMudXBsb2FkZXJzLCB0aGlzLnBvc3RQcm9jZXNzb3JzKTtcbiAgICB2YXIgbGFzdFN0ZXAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBzdGVwcy5mb3JFYWNoKGZ1bmN0aW9uIChmbiwgc3RlcCkge1xuICAgICAgLy8gU2tpcCB0aGlzIHN0ZXAgaWYgd2UgYXJlIHJlc3RvcmluZyBhbmQgaGF2ZSBhbHJlYWR5IGNvbXBsZXRlZCB0aGlzIHN0ZXAgYmVmb3JlLlxuICAgICAgaWYgKHN0ZXAgPCByZXN0b3JlU3RlcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxhc3RTdGVwID0gbGFzdFN0ZXAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfZXh0ZW5kczY7XG5cbiAgICAgICAgdmFyIF9nZXRTdGF0ZTYgPSBfdGhpczguZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgIGN1cnJlbnRVcGxvYWRzID0gX2dldFN0YXRlNi5jdXJyZW50VXBsb2FkcztcblxuICAgICAgICB2YXIgY3VycmVudFVwbG9hZCA9IF9leHRlbmRzKHt9LCBjdXJyZW50VXBsb2Fkc1t1cGxvYWRJRF0sIHtcbiAgICAgICAgICBzdGVwOiBzdGVwXG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpczguc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRVcGxvYWRzOiBfZXh0ZW5kcyh7fSwgY3VycmVudFVwbG9hZHMsIChfZXh0ZW5kczYgPSB7fSwgX2V4dGVuZHM2W3VwbG9hZElEXSA9IGN1cnJlbnRVcGxvYWQsIF9leHRlbmRzNikpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRPRE8gZ2l2ZSB0aGlzIHRoZSBgY3VycmVudFVwbG9hZGAgb2JqZWN0IGFzIGl0cyBvbmx5IHBhcmFtZXRlciBtYXliZT9cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdoZW4gbW9yZSBtZXRhZGF0YSBtYXkgYmUgYWRkZWQgdG8gdGhlIHVwbG9hZCB0aGlzIHdvdWxkIGtlZXAgZ2V0dGluZyBtb3JlIHBhcmFtZXRlcnNcbiAgICAgICAgcmV0dXJuIGZuKGN1cnJlbnRVcGxvYWQuZmlsZUlEcywgdXBsb2FkSUQpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBOb3QgcmV0dXJuaW5nIHRoZSBgY2F0Y2hgZWQgcHJvbWlzZSwgYmVjYXVzZSB3ZSBzdGlsbCB3YW50IHRvIHJldHVybiBhIHJlamVjdGVkXG4gICAgLy8gcHJvbWlzZSBmcm9tIHRoaXMgbWV0aG9kIGlmIHRoZSB1cGxvYWQgZmFpbGVkLlxuICAgIGxhc3RTdGVwLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIF90aGlzOC5lbWl0KCdlcnJvcicsIGVyciwgdXBsb2FkSUQpO1xuICAgICAgX3RoaXM4Ll9yZW1vdmVVcGxvYWQodXBsb2FkSUQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTdGVwLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgLy8gU2V0IHJlc3VsdCBkYXRhLlxuICAgICAgdmFyIF9nZXRTdGF0ZTcgPSBfdGhpczguZ2V0U3RhdGUoKSxcbiAgICAgICAgICBjdXJyZW50VXBsb2FkcyA9IF9nZXRTdGF0ZTcuY3VycmVudFVwbG9hZHM7XG5cbiAgICAgIHZhciBjdXJyZW50VXBsb2FkID0gY3VycmVudFVwbG9hZHNbdXBsb2FkSURdO1xuICAgICAgaWYgKCFjdXJyZW50VXBsb2FkKSB7XG4gICAgICAgIF90aGlzOC5sb2coJ05vdCBzZXR0aW5nIHJlc3VsdCBmb3IgYW4gdXBsb2FkIHRoYXQgaGFzIGJlZW4gcmVtb3ZlZDogJyArIHVwbG9hZElEKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlsZXMgPSBjdXJyZW50VXBsb2FkLmZpbGVJRHMubWFwKGZ1bmN0aW9uIChmaWxlSUQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzOC5nZXRGaWxlKGZpbGVJRCk7XG4gICAgICB9KTtcbiAgICAgIHZhciBzdWNjZXNzZnVsID0gZmlsZXMuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgIHJldHVybiAhZmlsZS5lcnJvcjtcbiAgICAgIH0pO1xuICAgICAgdmFyIGZhaWxlZCA9IGZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICByZXR1cm4gZmlsZS5lcnJvcjtcbiAgICAgIH0pO1xuICAgICAgX3RoaXM4LmFkZFJlc3VsdERhdGEodXBsb2FkSUQsIHsgc3VjY2Vzc2Z1bDogc3VjY2Vzc2Z1bCwgZmFpbGVkOiBmYWlsZWQsIHVwbG9hZElEOiB1cGxvYWRJRCB9KTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEVtaXQgY29tcGxldGlvbiBldmVudHMuXG4gICAgICAvLyBUaGlzIGlzIGluIGEgc2VwYXJhdGUgZnVuY3Rpb24gc28gdGhhdCB0aGUgYGN1cnJlbnRVcGxvYWRzYCB2YXJpYWJsZVxuICAgICAgLy8gYWx3YXlzIHJlZmVycyB0byB0aGUgbGF0ZXN0IHN0YXRlLiBJbiB0aGUgaGFuZGxlciByaWdodCBhYm92ZSBpdCByZWZlcnNcbiAgICAgIC8vIHRvIGFuIG91dGRhdGVkIG9iamVjdCB3aXRob3V0IHRoZSBgLnJlc3VsdGAgcHJvcGVydHkuXG4gICAgICB2YXIgX2dldFN0YXRlOCA9IF90aGlzOC5nZXRTdGF0ZSgpLFxuICAgICAgICAgIGN1cnJlbnRVcGxvYWRzID0gX2dldFN0YXRlOC5jdXJyZW50VXBsb2FkcztcblxuICAgICAgdmFyIGN1cnJlbnRVcGxvYWQgPSBjdXJyZW50VXBsb2Fkc1t1cGxvYWRJRF07XG4gICAgICB2YXIgcmVzdWx0ID0gY3VycmVudFVwbG9hZC5yZXN1bHQ7XG4gICAgICBfdGhpczguZW1pdCgnY29tcGxldGUnLCByZXN1bHQpO1xuXG4gICAgICBfdGhpczguX3JlbW92ZVVwbG9hZCh1cGxvYWRJRCk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGFuIHVwbG9hZCBmb3IgYWxsIHRoZSBmaWxlcyB0aGF0IGFyZSBub3QgY3VycmVudGx5IGJlaW5nIHVwbG9hZGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLnVwbG9hZCA9IGZ1bmN0aW9uIHVwbG9hZCgpIHtcbiAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgIGlmICghdGhpcy5wbHVnaW5zLnVwbG9hZGVyKSB7XG4gICAgICB0aGlzLmxvZygnTm8gdXBsb2FkZXIgdHlwZSBwbHVnaW5zIGFyZSB1c2VkJywgJ3dhcm5pbmcnKTtcbiAgICB9XG5cbiAgICB2YXIgZmlsZXMgPSB0aGlzLmdldFN0YXRlKCkuZmlsZXM7XG4gICAgdmFyIG9uQmVmb3JlVXBsb2FkUmVzdWx0ID0gdGhpcy5vcHRzLm9uQmVmb3JlVXBsb2FkKGZpbGVzKTtcblxuICAgIGlmIChvbkJlZm9yZVVwbG9hZFJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ05vdCBzdGFydGluZyB0aGUgdXBsb2FkIGJlY2F1c2Ugb25CZWZvcmVVcGxvYWQgcmV0dXJuZWQgZmFsc2UnKSk7XG4gICAgfVxuXG4gICAgaWYgKG9uQmVmb3JlVXBsb2FkUmVzdWx0ICYmICh0eXBlb2Ygb25CZWZvcmVVcGxvYWRSZXN1bHQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9uQmVmb3JlVXBsb2FkUmVzdWx0KSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyB3YXJuaW5nIGFmdGVyIHRoZSBjaGFuZ2UgaW4gMC4yNFxuICAgICAgaWYgKG9uQmVmb3JlVXBsb2FkUmVzdWx0LnRoZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb25CZWZvcmVVcGxvYWQoKSByZXR1cm5lZCBhIFByb21pc2UsIGJ1dCB0aGlzIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQuIEl0IG11c3QgYmUgc3luY2hyb25vdXMuJyk7XG4gICAgICB9XG5cbiAgICAgIGZpbGVzID0gb25CZWZvcmVVcGxvYWRSZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzOS5fY2hlY2tNaW5OdW1iZXJPZkZpbGVzKGZpbGVzKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZ2V0U3RhdGU5ID0gX3RoaXM5LmdldFN0YXRlKCksXG4gICAgICAgICAgY3VycmVudFVwbG9hZHMgPSBfZ2V0U3RhdGU5LmN1cnJlbnRVcGxvYWRzO1xuICAgICAgLy8gZ2V0IGEgbGlzdCBvZiBmaWxlcyB0aGF0IGFyZSBjdXJyZW50bHkgYXNzaWduZWQgdG8gdXBsb2Fkc1xuXG5cbiAgICAgIHZhciBjdXJyZW50bHlVcGxvYWRpbmdGaWxlcyA9IE9iamVjdC5rZXlzKGN1cnJlbnRVcGxvYWRzKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICAgICAgcmV0dXJuIHByZXYuY29uY2F0KGN1cnJlbnRVcGxvYWRzW2N1cnJdLmZpbGVJRHMpO1xuICAgICAgfSwgW10pO1xuXG4gICAgICB2YXIgd2FpdGluZ0ZpbGVJRHMgPSBbXTtcbiAgICAgIE9iamVjdC5rZXlzKGZpbGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlSUQpIHtcbiAgICAgICAgdmFyIGZpbGUgPSBfdGhpczkuZ2V0RmlsZShmaWxlSUQpO1xuICAgICAgICAvLyBpZiB0aGUgZmlsZSBoYXNuJ3Qgc3RhcnRlZCB1cGxvYWRpbmcgYW5kIGhhc24ndCBhbHJlYWR5IGJlZW4gYXNzaWduZWQgdG8gYW4gdXBsb2FkLi5cbiAgICAgICAgaWYgKCFmaWxlLnByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQgJiYgY3VycmVudGx5VXBsb2FkaW5nRmlsZXMuaW5kZXhPZihmaWxlSUQpID09PSAtMSkge1xuICAgICAgICAgIHdhaXRpbmdGaWxlSURzLnB1c2goZmlsZS5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2YXIgdXBsb2FkSUQgPSBfdGhpczkuX2NyZWF0ZVVwbG9hZCh3YWl0aW5nRmlsZUlEcyk7XG4gICAgICByZXR1cm4gX3RoaXM5Ll9ydW5VcGxvYWQodXBsb2FkSUQpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHZhciBtZXNzYWdlID0gKHR5cGVvZiBlcnIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGVycikpID09PSAnb2JqZWN0JyA/IGVyci5tZXNzYWdlIDogZXJyO1xuICAgICAgdmFyIGRldGFpbHMgPSAodHlwZW9mIGVyciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZXJyKSkgPT09ICdvYmplY3QnID8gZXJyLmRldGFpbHMgOiBudWxsO1xuICAgICAgX3RoaXM5LmxvZyhtZXNzYWdlICsgJyAnICsgZGV0YWlscyk7XG4gICAgICBfdGhpczkuaW5mbyh7IG1lc3NhZ2U6IG1lc3NhZ2UsIGRldGFpbHM6IGRldGFpbHMgfSwgJ2Vycm9yJywgNDAwMCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKHR5cGVvZiBlcnIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGVycikpID09PSAnb2JqZWN0JyA/IGVyciA6IG5ldyBFcnJvcihlcnIpKTtcbiAgICB9KTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoVXBweSwgW3tcbiAgICBrZXk6ICdzdGF0ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZSgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBVcHB5O1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHJldHVybiBuZXcgVXBweShvcHRzKTtcbn07XG5cbi8vIEV4cG9zZSBjbGFzcyBjb25zdHJ1Y3Rvci5cbm1vZHVsZS5leHBvcnRzLlVwcHkgPSBVcHB5O1xubW9kdWxlLmV4cG9ydHMuUGx1Z2luID0gUGx1Z2luOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgncHJlYWN0JyksXG4gICAgaCA9IF9yZXF1aXJlLmgsXG4gICAgQ29tcG9uZW50ID0gX3JlcXVpcmUuQ29tcG9uZW50O1xuXG52YXIgQWN0aW9uQnJvd3NlVGFnbGluZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBY3Rpb25Ccm93c2VUYWdsaW5lLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBY3Rpb25Ccm93c2VUYWdsaW5lKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbkJyb3dzZVRhZ2xpbmUpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5oYW5kbGVDbGljayA9IF90aGlzLmhhbmRsZUNsaWNrLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIEFjdGlvbkJyb3dzZVRhZ2xpbmUucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXYpIHtcbiAgICB0aGlzLmlucHV0LmNsaWNrKCk7XG4gIH07XG5cbiAgQWN0aW9uQnJvd3NlVGFnbGluZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGJyb3dzZSA9IGgoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgeyB0eXBlOiBcImJ1dHRvblwiLCBcImNsYXNzXCI6IFwidXBweS1EYXNoYm9hcmQtYnJvd3NlXCIsIG9uY2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2sgfSxcbiAgICAgIHRoaXMucHJvcHMuaTE4bignYnJvd3NlJylcbiAgICApO1xuXG4gICAgLy8gZW1wdHkgdmFsdWU9XCJcIiBvbiBmaWxlIGlucHV0LCBzbyB0aGF0IHRoZSBpbnB1dCBpcyBjbGVhcmVkIGFmdGVyIGEgZmlsZSBpcyBzZWxlY3RlZCxcbiAgICAvLyBiZWNhdXNlIFVwcHkgd2lsbCBiZSBoYW5kbGluZyB0aGUgdXBsb2FkIGFuZCBzbyB3ZSBjYW4gc2VsZWN0IHNhbWUgZmlsZVxuICAgIC8vIGFmdGVyIHJlbW92aW5nIOKAlCBvdGhlcndpc2UgYnJvd3NlciB0aGlua3MgaXTigJlzIGFscmVhZHkgc2VsZWN0ZWRcbiAgICByZXR1cm4gaChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IFwiY2xhc3NcIjogXCJ1cHB5LURhc2hib2FyZC1kcm9wRmlsZXNUaXRsZVwiIH0sXG4gICAgICB0aGlzLnByb3BzLmFjcXVpcmVycy5sZW5ndGggPT09IDAgPyB0aGlzLnByb3BzLmkxOG5BcnJheSgnZHJvcFBhc3RlJywgeyBicm93c2U6IGJyb3dzZSB9KSA6IHRoaXMucHJvcHMuaTE4bkFycmF5KCdkcm9wUGFzdGVJbXBvcnQnLCB7IGJyb3dzZTogYnJvd3NlIH0pLFxuICAgICAgaChcImlucHV0XCIsIHsgXCJjbGFzc1wiOiBcInVwcHktRGFzaGJvYXJkLWlucHV0XCIsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgdGFiaW5kZXg6IC0xLFxuICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgbmFtZTogXCJmaWxlc1tdXCIsXG4gICAgICAgIG11bHRpcGxlOiB0aGlzLnByb3BzLm1heE51bWJlck9mRmlsZXMgIT09IDEsXG4gICAgICAgIG9uY2hhbmdlOiB0aGlzLnByb3BzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICBhY2NlcHQ6IHRoaXMucHJvcHMuYWxsb3dlZEZpbGVUeXBlcyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGlucHV0KSB7XG4gICAgICAgICAgX3RoaXMyLmlucHV0ID0gaW5wdXQ7XG4gICAgICAgIH0gfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBBY3Rpb25Ccm93c2VUYWdsaW5lO1xufShDb21wb25lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdGlvbkJyb3dzZVRhZ2xpbmU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQWN0aW9uQnJvd3NlVGFnbGluZSA9IHJlcXVpcmUoJy4vQWN0aW9uQnJvd3NlVGFnbGluZScpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2ljb25zJyksXG4gICAgbG9jYWxJY29uID0gX3JlcXVpcmUubG9jYWxJY29uO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgncHJlYWN0JyksXG4gICAgaCA9IF9yZXF1aXJlMi5oLFxuICAgIENvbXBvbmVudCA9IF9yZXF1aXJlMi5Db21wb25lbnQ7XG5cbnZhciBwb3dlcmVkQnlVcHB5ID0gZnVuY3Rpb24gcG93ZXJlZEJ5VXBweShwcm9wcykge1xuICByZXR1cm4gaChcbiAgICAnYScsXG4gICAgeyB0YWJpbmRleDogJy0xJywgaHJlZjogJ2h0dHBzOi8vdXBweS5pbycsIHJlbDogJ25vcmVmZXJyZXIgbm9vcGVuZXInLCB0YXJnZXQ6ICdfYmxhbmsnLCAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmQtcG93ZXJlZEJ5JyB9LFxuICAgICdQb3dlcmVkIGJ5ICcsXG4gICAgaChcbiAgICAgICdzdmcnLFxuICAgICAgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsICdjbGFzcyc6ICdVcHB5SWNvbiB1cHB5LURhc2hib2FyZC1wb3dlcmVkQnlJY29uJywgd2lkdGg6ICcxMScsIGhlaWdodDogJzExJywgdmlld0JveDogJzAgMCAxMSAxMScsIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIH0sXG4gICAgICBoKCdwYXRoJywgeyBkOiAnTTcuMzY1IDEwLjVsLS4wMS00LjA0NWgyLjYxMkw1LjUuODA2bC00LjQ2NyA1LjY1aDIuNjA0bC4wMSA0LjA0NGgzLjcxOHonLCAnZmlsbC1ydWxlJzogJ2V2ZW5vZGQnIH0pXG4gICAgKSxcbiAgICBoKFxuICAgICAgJ3NwYW4nLFxuICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmQtcG93ZXJlZEJ5VXBweScgfSxcbiAgICAgICdVcHB5J1xuICAgIClcbiAgKTtcbn07XG5cbnZhciBBZGRGaWxlcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBZGRGaWxlcywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQWRkRmlsZXMocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWRkRmlsZXMpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5oYW5kbGVDbGljayA9IF90aGlzLmhhbmRsZUNsaWNrLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIEFkZEZpbGVzLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2KSB7XG4gICAgdGhpcy5pbnB1dC5jbGljaygpO1xuICB9O1xuXG4gIEFkZEZpbGVzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAvLyBjb25zdCBpc0hpZGRlbiA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZmlsZXMpLmxlbmd0aCA9PT0gMFxuICAgIHZhciBoYXNBY3F1aXJlcnMgPSB0aGlzLnByb3BzLmFjcXVpcmVycy5sZW5ndGggIT09IDA7XG5cbiAgICBpZiAoIWhhc0FjcXVpcmVycykge1xuICAgICAgcmV0dXJuIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyQWRkRmlsZXMnIH0sXG4gICAgICAgIGgoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRUYWJzJyB9LFxuICAgICAgICAgIGgoQWN0aW9uQnJvd3NlVGFnbGluZSwge1xuICAgICAgICAgICAgYWNxdWlyZXJzOiB0aGlzLnByb3BzLmFjcXVpcmVycyxcbiAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLnByb3BzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICAgICAgaTE4bjogdGhpcy5wcm9wcy5pMThuLFxuICAgICAgICAgICAgaTE4bkFycmF5OiB0aGlzLnByb3BzLmkxOG5BcnJheSxcbiAgICAgICAgICAgIGFsbG93ZWRGaWxlVHlwZXM6IHRoaXMucHJvcHMuYWxsb3dlZEZpbGVUeXBlcyxcbiAgICAgICAgICAgIG1heE51bWJlck9mRmlsZXM6IHRoaXMucHJvcHMubWF4TnVtYmVyT2ZGaWxlc1xuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIGgoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hckFkZEZpbGVzLWluZm8nIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5ub3RlICYmIGgoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkLW5vdGUnIH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLm5vdGVcbiAgICAgICAgICApLFxuICAgICAgICAgIHRoaXMucHJvcHMucHJvdWRseURpc3BsYXlQb3dlcmVkQnlVcHB5ICYmIHBvd2VyZWRCeVVwcHkodGhpcy5wcm9wcylcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBlbXB0eSB2YWx1ZT1cIlwiIG9uIGZpbGUgaW5wdXQsIHNvIHRoYXQgdGhlIGlucHV0IGlzIGNsZWFyZWQgYWZ0ZXIgYSBmaWxlIGlzIHNlbGVjdGVkLFxuICAgIC8vIGJlY2F1c2UgVXBweSB3aWxsIGJlIGhhbmRsaW5nIHRoZSB1cGxvYWQgYW5kIHNvIHdlIGNhbiBzZWxlY3Qgc2FtZSBmaWxlXG4gICAgLy8gYWZ0ZXIgcmVtb3Zpbmcg4oCUIG90aGVyd2lzZSBicm93c2VyIHRoaW5rcyBpdOKAmXMgYWxyZWFkeSBzZWxlY3RlZFxuICAgIHJldHVybiBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyQWRkRmlsZXMnIH0sXG4gICAgICBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRUYWJzJyB9LFxuICAgICAgICBoKEFjdGlvbkJyb3dzZVRhZ2xpbmUsIHtcbiAgICAgICAgICBhY3F1aXJlcnM6IHRoaXMucHJvcHMuYWNxdWlyZXJzLFxuICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLnByb3BzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICAgIGkxOG46IHRoaXMucHJvcHMuaTE4bixcbiAgICAgICAgICBpMThuQXJyYXk6IHRoaXMucHJvcHMuaTE4bkFycmF5LFxuICAgICAgICAgIGFsbG93ZWRGaWxlVHlwZXM6IHRoaXMucHJvcHMuYWxsb3dlZEZpbGVUeXBlcyxcbiAgICAgICAgICBtYXhOdW1iZXJPZkZpbGVzOiB0aGlzLnByb3BzLm1heE51bWJlck9mRmlsZXNcbiAgICAgICAgfSksXG4gICAgICAgIGgoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRUYWJzLWxpc3QnLCByb2xlOiAndGFibGlzdCcgfSxcbiAgICAgICAgICBoKFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZFRhYicsIHJvbGU6ICdwcmVzZW50YXRpb24nIH0sXG4gICAgICAgICAgICBoKFxuICAgICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgeyB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRUYWItYnRuJyxcbiAgICAgICAgICAgICAgICByb2xlOiAndGFiJyxcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogMCxcbiAgICAgICAgICAgICAgICBvbmNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrIH0sXG4gICAgICAgICAgICAgIGxvY2FsSWNvbigpLFxuICAgICAgICAgICAgICBoKFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkVGFiLW5hbWUnIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pMThuKCdteURldmljZScpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBoKCdpbnB1dCcsIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkLWlucHV0JyxcbiAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAgIHRhYmluZGV4OiAtMSxcbiAgICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICBuYW1lOiAnZmlsZXNbXScsXG4gICAgICAgICAgICAgIG11bHRpcGxlOiB0aGlzLnByb3BzLm1heE51bWJlck9mRmlsZXMgIT09IDEsXG4gICAgICAgICAgICAgIGFjY2VwdDogdGhpcy5wcm9wcy5hbGxvd2VkRmlsZVR5cGVzLFxuICAgICAgICAgICAgICBvbmNoYW5nZTogdGhpcy5wcm9wcy5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihpbnB1dCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5pbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICB9IH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLnByb3BzLmFjcXVpcmVycy5tYXAoZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIGgoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZFRhYicsIHJvbGU6ICdwcmVzZW50YXRpb24nIH0sXG4gICAgICAgICAgICAgIGgoXG4gICAgICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRUYWItYnRuJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgcm9sZTogJ3RhYicsXG4gICAgICAgICAgICAgICAgICB0YWJpbmRleDogMCxcbiAgICAgICAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC1wYW5lbC0tJyArIHRhcmdldC5pZCxcbiAgICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogX3RoaXMyLnByb3BzLmFjdGl2ZVBhbmVsLmlkID09PSB0YXJnZXQuaWQsXG4gICAgICAgICAgICAgICAgICBvbmNsaWNrOiBmdW5jdGlvbiBvbmNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLnByb3BzLnNob3dQYW5lbCh0YXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIHRhcmdldC5pY29uKCksXG4gICAgICAgICAgICAgICAgaChcbiAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRUYWItbmFtZScgfSxcbiAgICAgICAgICAgICAgICAgIHRhcmdldC5uYW1lXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hckFkZEZpbGVzLWluZm8nIH0sXG4gICAgICAgIHRoaXMucHJvcHMubm90ZSAmJiBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkLW5vdGUnIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5ub3RlXG4gICAgICAgICksXG4gICAgICAgIHRoaXMucHJvcHMucHJvdWRseURpc3BsYXlQb3dlcmVkQnlVcHB5ICYmIHBvd2VyZWRCeVVwcHkodGhpcy5wcm9wcylcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBBZGRGaWxlcztcbn0oQ29tcG9uZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZGRGaWxlczsiLCJ2YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdwcmVhY3QnKSxcbiAgICBoID0gX3JlcXVpcmUuaDtcblxudmFyIEFkZEZpbGVzID0gcmVxdWlyZSgnLi9BZGRGaWxlcycpO1xuXG52YXIgQWRkRmlsZXNQYW5lbCA9IGZ1bmN0aW9uIEFkZEZpbGVzUGFuZWwocHJvcHMpIHtcbiAgcmV0dXJuIGgoXG4gICAgJ2RpdicsXG4gICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmQtQWRkRmlsZXNQYW5lbCcsXG4gICAgICAnYXJpYS1oaWRkZW4nOiBwcm9wcy5zaG93QWRkRmlsZXNQYW5lbCB9LFxuICAgIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC1iYXInIH0sXG4gICAgICBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRDb250ZW50LXRpdGxlJywgcm9sZTogJ2hlYWRpbmcnLCAnYXJpYS1sZXZlbCc6ICdoMScgfSxcbiAgICAgICAgcHJvcHMuaTE4bignYWRkaW5nTW9yZUZpbGVzJylcbiAgICAgICksXG4gICAgICBoKFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRDb250ZW50LWJhY2snLFxuICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uIG9uY2xpY2soZXYpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy50b2dnbGVBZGRGaWxlc1BhbmVsKGZhbHNlKTtcbiAgICAgICAgICB9IH0sXG4gICAgICAgIHByb3BzLmkxOG4oJ2JhY2snKVxuICAgICAgKVxuICAgICksXG4gICAgaChBZGRGaWxlcywgcHJvcHMpXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkZEZpbGVzUGFuZWw7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIEZpbGVMaXN0ID0gcmVxdWlyZSgnLi9GaWxlTGlzdCcpO1xudmFyIEFkZEZpbGVzID0gcmVxdWlyZSgnLi9BZGRGaWxlcycpO1xudmFyIEFkZEZpbGVzUGFuZWwgPSByZXF1aXJlKCcuL0FkZEZpbGVzUGFuZWwnKTtcbnZhciBQYW5lbENvbnRlbnQgPSByZXF1aXJlKCcuL1BhbmVsQ29udGVudCcpO1xudmFyIFBhbmVsVG9wQmFyID0gcmVxdWlyZSgnLi9QYW5lbFRvcEJhcicpO1xudmFyIEZpbGVDYXJkID0gcmVxdWlyZSgnLi9GaWxlQ2FyZCcpO1xudmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG52YXIgaXNUb3VjaERldmljZSA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9pc1RvdWNoRGV2aWNlJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZS5oO1xuXG52YXIgUHJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgncHJlYWN0LWNzcy10cmFuc2l0aW9uLWdyb3VwJyk7XG5cbi8vIGh0dHA6Ly9kZXYuZWRlbnNwaWVrZXJtYW5uLmNvbS8yMDE2LzAyLzExL2ludHJvZHVjaW5nLWFjY2Vzc2libGUtbW9kYWwtZGlhbG9nXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2hvc2gvbWljcm9tb2RhbFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIERhc2hib2FyZChwcm9wcykge1xuICAvLyBpZiAoIXByb3BzLmlubGluZSAmJiBwcm9wcy5tb2RhbC5pc0hpZGRlbikge1xuICAvLyAgIHJldHVybiA8c3BhbiAvPlxuICAvLyB9XG5cbiAgdmFyIG5vRmlsZXMgPSBwcm9wcy50b3RhbEZpbGVDb3VudCA9PT0gMDtcblxuICB2YXIgZGFzaGJvYXJkQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyh7ICd1cHB5LVJvb3QnOiBwcm9wcy5pc1RhcmdldERPTUVsIH0sICd1cHB5LURhc2hib2FyZCcsIHsgJ1VwcHktLWlzVG91Y2hEZXZpY2UnOiBpc1RvdWNoRGV2aWNlKCkgfSwgeyAndXBweS1EYXNoYm9hcmQtLWFuaW1hdGVPcGVuQ2xvc2UnOiBwcm9wcy5hbmltYXRlT3BlbkNsb3NlIH0sIHsgJ3VwcHktRGFzaGJvYXJkLS1pc0Nsb3NpbmcnOiBwcm9wcy5pc0Nsb3NpbmcgfSwgeyAndXBweS1EYXNoYm9hcmQtLW1vZGFsJzogIXByb3BzLmlubGluZSB9LCB7ICd1cHB5LXNpemUtLW1kJzogcHJvcHMuY29udGFpbmVyV2lkdGggPiA1NzYgfSwgeyAndXBweS1zaXplLS1sZyc6IHByb3BzLmNvbnRhaW5lcldpZHRoID4gNzAwIH0sIHsgJ3VwcHktRGFzaGJvYXJkLS1pc0FkZEZpbGVzUGFuZWxWaXNpYmxlJzogcHJvcHMuc2hvd0FkZEZpbGVzUGFuZWwgfSk7XG5cbiAgcmV0dXJuIGgoXG4gICAgJ2RpdicsXG4gICAgeyAnY2xhc3MnOiBkYXNoYm9hcmRDbGFzc05hbWUsXG4gICAgICAnYXJpYS1oaWRkZW4nOiBwcm9wcy5pbmxpbmUgPyAnZmFsc2UnIDogcHJvcHMubW9kYWwuaXNIaWRkZW4sXG4gICAgICAnYXJpYS1sYWJlbCc6ICFwcm9wcy5pbmxpbmUgPyBwcm9wcy5pMThuKCdkYXNoYm9hcmRXaW5kb3dUaXRsZScpIDogcHJvcHMuaTE4bignZGFzaGJvYXJkVGl0bGUnKSxcbiAgICAgIG9ucGFzdGU6IHByb3BzLmhhbmRsZVBhc3RlIH0sXG4gICAgaCgnZGl2JywgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmQtb3ZlcmxheScsIHRhYmluZGV4OiAtMSwgb25jbGljazogcHJvcHMuaGFuZGxlQ2xpY2tPdXRzaWRlIH0pLFxuICAgIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkLWlubmVyJyxcbiAgICAgICAgJ2FyaWEtbW9kYWwnOiAhcHJvcHMuaW5saW5lICYmICd0cnVlJyxcbiAgICAgICAgcm9sZTogIXByb3BzLmlubGluZSAmJiAnZGlhbG9nJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogcHJvcHMuaW5saW5lICYmIHByb3BzLndpZHRoID8gcHJvcHMud2lkdGggOiAnJyxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmlubGluZSAmJiBwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiAnJ1xuICAgICAgICB9IH0sXG4gICAgICBoKFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmQtY2xvc2UnLFxuICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMuaTE4bignY2xvc2VNb2RhbCcpLFxuICAgICAgICAgIHRpdGxlOiBwcm9wcy5pMThuKCdjbG9zZU1vZGFsJyksXG4gICAgICAgICAgb25jbGljazogcHJvcHMuY2xvc2VNb2RhbCB9LFxuICAgICAgICBoKFxuICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICB7ICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9LFxuICAgICAgICAgICdcXHhENydcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZC1pbm5lcldyYXAnIH0sXG4gICAgICAgICFub0ZpbGVzICYmIHByb3BzLnNob3dTZWxlY3RlZEZpbGVzICYmIGgoUGFuZWxUb3BCYXIsIHByb3BzKSxcbiAgICAgICAgcHJvcHMuc2hvd1NlbGVjdGVkRmlsZXMgPyBub0ZpbGVzID8gaChBZGRGaWxlcywgcHJvcHMpIDogaChGaWxlTGlzdCwgcHJvcHMpIDogaChBZGRGaWxlcywgcHJvcHMpLFxuICAgICAgICBoKFxuICAgICAgICAgIFByZWFjdENTU1RyYW5zaXRpb25Hcm91cCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogJ3VwcHktdHJhbnNpdGlvbi1zbGlkZURvd25VcCcsXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiAyNTAsXG4gICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiAyNTAgfSxcbiAgICAgICAgICBwcm9wcy5zaG93QWRkRmlsZXNQYW5lbCA/IGgoQWRkRmlsZXNQYW5lbCwgX2V4dGVuZHMoeyBrZXk6ICdBZGRGaWxlc1BhbmVsJyB9LCBwcm9wcykpIDogbnVsbFxuICAgICAgICApLFxuICAgICAgICBoKFxuICAgICAgICAgIFByZWFjdENTU1RyYW5zaXRpb25Hcm91cCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogJ3VwcHktdHJhbnNpdGlvbi1zbGlkZURvd25VcCcsXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiAyNTAsXG4gICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiAyNTAgfSxcbiAgICAgICAgICBwcm9wcy5maWxlQ2FyZEZvciA/IGgoRmlsZUNhcmQsIF9leHRlbmRzKHsga2V5OiAnRmlsZUNhcmQnIH0sIHByb3BzKSkgOiBudWxsXG4gICAgICAgICksXG4gICAgICAgIGgoXG4gICAgICAgICAgUHJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiAndXBweS10cmFuc2l0aW9uLXNsaWRlRG93blVwJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDI1MCxcbiAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDI1MCB9LFxuICAgICAgICAgIHByb3BzLmFjdGl2ZVBhbmVsID8gaChQYW5lbENvbnRlbnQsIF9leHRlbmRzKHsga2V5OiAnUGFuZWxDb250ZW50JyB9LCBwcm9wcykpIDogbnVsbFxuICAgICAgICApLFxuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkLXByb2dyZXNzaW5kaWNhdG9ycycgfSxcbiAgICAgICAgICBwcm9wcy5wcm9ncmVzc2luZGljYXRvcnMubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5nZXRQbHVnaW4odGFyZ2V0LmlkKS5yZW5kZXIocHJvcHMuc3RhdGUpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG59OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGdldEZpbGVUeXBlSWNvbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldEZpbGVUeXBlSWNvbicpO1xudmFyIEZpbGVQcmV2aWV3ID0gcmVxdWlyZSgnLi9GaWxlUHJldmlldycpO1xudmFyIGlnbm9yZUV2ZW50ID0gcmVxdWlyZSgnLi4vdXRpbHMvaWdub3JlRXZlbnQuanMnKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgncHJlYWN0JyksXG4gICAgaCA9IF9yZXF1aXJlLmgsXG4gICAgQ29tcG9uZW50ID0gX3JlcXVpcmUuQ29tcG9uZW50O1xuXG52YXIgRmlsZUNhcmQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRmlsZUNhcmQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZpbGVDYXJkKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbGVDYXJkKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMubWV0YSA9IHt9O1xuXG4gICAgX3RoaXMudGVtcFN0b3JlTWV0YU9yU3VibWl0ID0gX3RoaXMudGVtcFN0b3JlTWV0YU9yU3VibWl0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnJlbmRlck1ldGFGaWVsZHMgPSBfdGhpcy5yZW5kZXJNZXRhRmllbGRzLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZVNhdmUgPSBfdGhpcy5oYW5kbGVTYXZlLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUNhbmNlbCA9IF90aGlzLmhhbmRsZUNhbmNlbC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBGaWxlQ2FyZC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpczIuZmlyc3RJbnB1dCkgcmV0dXJuO1xuICAgICAgX3RoaXMyLmZpcnN0SW5wdXQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIH0sIDE1MCk7XG4gIH07XG5cbiAgRmlsZUNhcmQucHJvdG90eXBlLnRlbXBTdG9yZU1ldGFPclN1Ym1pdCA9IGZ1bmN0aW9uIHRlbXBTdG9yZU1ldGFPclN1Ym1pdChldikge1xuICAgIHZhciBmaWxlID0gdGhpcy5wcm9wcy5maWxlc1t0aGlzLnByb3BzLmZpbGVDYXJkRm9yXTtcblxuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5zYXZlRmlsZUNhcmQodGhpcy5tZXRhLCBmaWxlLmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gICAgdmFyIG5hbWUgPSBldi50YXJnZXQuZGF0YXNldC5uYW1lO1xuICAgIHRoaXMubWV0YVtuYW1lXSA9IHZhbHVlO1xuICB9O1xuXG4gIEZpbGVDYXJkLnByb3RvdHlwZS5yZW5kZXJNZXRhRmllbGRzID0gZnVuY3Rpb24gcmVuZGVyTWV0YUZpZWxkcyhmaWxlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgbWV0YUZpZWxkcyA9IHRoaXMucHJvcHMubWV0YUZpZWxkcyB8fCBbXTtcbiAgICByZXR1cm4gbWV0YUZpZWxkcy5tYXAoZnVuY3Rpb24gKGZpZWxkLCBpKSB7XG4gICAgICByZXR1cm4gaChcbiAgICAgICAgJ2ZpZWxkc2V0JyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRGaWxlQ2FyZC1maWVsZHNldCcgfSxcbiAgICAgICAgaChcbiAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkRmlsZUNhcmQtbGFiZWwnIH0sXG4gICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICApLFxuICAgICAgICBoKCdpbnB1dCcsIHsgJ2NsYXNzJzogJ3VwcHktYy10ZXh0SW5wdXQgdXBweS1EYXNoYm9hcmRGaWxlQ2FyZC1pbnB1dCcsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICdkYXRhLW5hbWUnOiBmaWVsZC5pZCxcbiAgICAgICAgICB2YWx1ZTogZmlsZS5tZXRhW2ZpZWxkLmlkXSxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXG4gICAgICAgICAgb25rZXl1cDogX3RoaXMzLnRlbXBTdG9yZU1ldGFPclN1Ym1pdCxcbiAgICAgICAgICBvbmtleWRvd246IF90aGlzMy50ZW1wU3RvcmVNZXRhT3JTdWJtaXQsXG4gICAgICAgICAgb25rZXlwcmVzczogX3RoaXMzLnRlbXBTdG9yZU1ldGFPclN1Ym1pdCxcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIF90aGlzMy5maXJzdElucHV0ID0gZWw7XG4gICAgICAgICAgfSB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBGaWxlQ2FyZC5wcm90b3R5cGUuaGFuZGxlU2F2ZSA9IGZ1bmN0aW9uIGhhbmRsZVNhdmUoZXYpIHtcbiAgICB2YXIgZmlsZUlEID0gdGhpcy5wcm9wcy5maWxlQ2FyZEZvcjtcbiAgICB0aGlzLnByb3BzLnNhdmVGaWxlQ2FyZCh0aGlzLm1ldGEsIGZpbGVJRCk7XG4gIH07XG5cbiAgRmlsZUNhcmQucHJvdG90eXBlLmhhbmRsZUNhbmNlbCA9IGZ1bmN0aW9uIGhhbmRsZUNhbmNlbChldikge1xuICAgIHRoaXMubWV0YSA9IHt9O1xuICAgIHRoaXMucHJvcHMudG9nZ2xlRmlsZUNhcmQoKTtcbiAgfTtcblxuICBGaWxlQ2FyZC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBmaWxlID0gdGhpcy5wcm9wcy5maWxlc1t0aGlzLnByb3BzLmZpbGVDYXJkRm9yXTtcblxuICAgIHJldHVybiBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEZpbGVDYXJkJyxcbiAgICAgICAgb25EcmFnT3ZlcjogaWdub3JlRXZlbnQsXG4gICAgICAgIG9uRHJhZ0xlYXZlOiBpZ25vcmVFdmVudCxcbiAgICAgICAgb25Ecm9wOiBpZ25vcmVFdmVudCxcbiAgICAgICAgb25QYXN0ZTogaWdub3JlRXZlbnQgfSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtYmFyJyB9LFxuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC10aXRsZScsIHJvbGU6ICdoZWFkaW5nJywgJ2FyaWEtbGV2ZWwnOiAnaDEnIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5pMThuQXJyYXkoJ2VkaXRpbmcnLCB7XG4gICAgICAgICAgICBmaWxlOiBoKFxuICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC10aXRsZUZpbGUnIH0sXG4gICAgICAgICAgICAgIGZpbGUubWV0YSA/IGZpbGUubWV0YS5uYW1lIDogZmlsZS5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgaChcbiAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtYmFjaycsIHR5cGU6ICdidXR0b24nLCB0aXRsZTogdGhpcy5wcm9wcy5pMThuKCdmaW5pc2hFZGl0aW5nRmlsZScpLFxuICAgICAgICAgICAgb25jbGljazogdGhpcy5oYW5kbGVTYXZlIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5pMThuKCdkb25lJylcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEZpbGVDYXJkLWlubmVyJyB9LFxuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkRmlsZUNhcmQtcHJldmlldycsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogZ2V0RmlsZVR5cGVJY29uKGZpbGUudHlwZSkuY29sb3IgfSB9LFxuICAgICAgICAgIGgoRmlsZVByZXZpZXcsIHsgZmlsZTogZmlsZSB9KVxuICAgICAgICApLFxuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkRmlsZUNhcmQtaW5mbycgfSxcbiAgICAgICAgICB0aGlzLnJlbmRlck1ldGFGaWVsZHMoZmlsZSlcbiAgICAgICAgKSxcbiAgICAgICAgaChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZC1hY3Rpb25zJyB9LFxuICAgICAgICAgIGgoXG4gICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktdS1yZXNldCB1cHB5LWMtYnRuIHVwcHktYy1idG4tcHJpbWFyeSB1cHB5LURhc2hib2FyZC1hY3Rpb25zQnRuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgIG9uY2xpY2s6IHRoaXMuaGFuZGxlU2F2ZSB9LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pMThuKCdzYXZlQ2hhbmdlcycpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBoKFxuICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LXUtcmVzZXQgdXBweS1jLWJ0biB1cHB5LWMtYnRuLWxpbmsgdXBweS1EYXNoYm9hcmQtYWN0aW9uc0J0bicsXG4gICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICBvbmNsaWNrOiB0aGlzLmhhbmRsZUNhbmNlbCB9LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pMThuKCdjYW5jZWwnKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIEZpbGVDYXJkO1xufShDb21wb25lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbGVDYXJkOyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBnZXRGaWxlTmFtZUFuZEV4dGVuc2lvbiA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9nZXRGaWxlTmFtZUFuZEV4dGVuc2lvbicpO1xudmFyIHRydW5jYXRlU3RyaW5nID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJ1bmNhdGVTdHJpbmcnKTtcbnZhciBjb3B5VG9DbGlwYm9hcmQgPSByZXF1aXJlKCcuLi91dGlscy9jb3B5VG9DbGlwYm9hcmQnKTtcbnZhciBwcmV0dHlCeXRlcyA9IHJlcXVpcmUoJ3ByZXR0aWVyLWJ5dGVzJyk7XG52YXIgRmlsZUl0ZW1Qcm9ncmVzcyA9IHJlcXVpcmUoJy4vRmlsZUl0ZW1Qcm9ncmVzcycpO1xudmFyIGdldEZpbGVUeXBlSWNvbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldEZpbGVUeXBlSWNvbicpO1xudmFyIEZpbGVQcmV2aWV3ID0gcmVxdWlyZSgnLi9GaWxlUHJldmlldycpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2ljb25zJyksXG4gICAgaWNvbkNvcHkgPSBfcmVxdWlyZS5pY29uQ29weSxcbiAgICBpY29uUmV0cnkgPSBfcmVxdWlyZS5pY29uUmV0cnk7XG5cbnZhciBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgncHJlYWN0JyksXG4gICAgaCA9IF9yZXF1aXJlMi5oO1xuXG5mdW5jdGlvbiBGaWxlSXRlbVByb2dyZXNzV3JhcHBlcihwcm9wcykge1xuICBpZiAocHJvcHMuaGlkZVJldHJ5QnV0dG9uICYmIHByb3BzLmVycm9yKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHByb3BzLmlzVXBsb2FkZWQgfHwgcHJvcHMuYnVuZGxlZCB8fCBwcm9wcy5oaWRlUGF1c2VSZXN1bWVDYW5jZWxCdXR0b25zICYmICFwcm9wcy5lcnJvcikge1xuICAgIHJldHVybiBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tcHJvZ3Jlc3NJbmRpY2F0b3InIH0sXG4gICAgICBoKEZpbGVJdGVtUHJvZ3Jlc3MsIHtcbiAgICAgICAgcHJvZ3Jlc3M6IHByb3BzLmZpbGUucHJvZ3Jlc3MucGVyY2VudGFnZSxcbiAgICAgICAgZmlsZUlEOiBwcm9wcy5maWxlLmlkLFxuICAgICAgICBoaWRlUGF1c2VSZXN1bWVDYW5jZWxCdXR0b25zOiBwcm9wcy5oaWRlUGF1c2VSZXN1bWVDYW5jZWxCdXR0b25zLFxuICAgICAgICBidW5kbGVkOiBwcm9wcy5idW5kbGVkXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gaChcbiAgICAnYnV0dG9uJyxcbiAgICB7XG4gICAgICAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLXByb2dyZXNzSW5kaWNhdG9yJyxcbiAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5wcm9ncmVzc0luZGljYXRvclRpdGxlLFxuICAgICAgdGl0bGU6IHByb3BzLnByb2dyZXNzSW5kaWNhdG9yVGl0bGUsXG4gICAgICBvbmNsaWNrOiBwcm9wcy5vblBhdXNlUmVzdW1lQ2FuY2VsUmV0cnkgfSxcbiAgICBwcm9wcy5lcnJvciA/IHByb3BzLmhpZGVSZXRyeUJ1dHRvbiA/IG51bGwgOiBpY29uUmV0cnkoKSA6IGgoRmlsZUl0ZW1Qcm9ncmVzcywge1xuICAgICAgcHJvZ3Jlc3M6IHByb3BzLmZpbGUucHJvZ3Jlc3MucGVyY2VudGFnZSxcbiAgICAgIGZpbGVJRDogcHJvcHMuZmlsZS5pZCxcbiAgICAgIGhpZGVQYXVzZVJlc3VtZUNhbmNlbEJ1dHRvbnM6IHByb3BzLmhpZGVQYXVzZVJlc3VtZUNhbmNlbEJ1dHRvbnNcbiAgICB9KVxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbGVJdGVtKHByb3BzKSB7XG4gIHZhciBmaWxlID0gcHJvcHMuZmlsZTtcbiAgdmFyIGFjcXVpcmVycyA9IHByb3BzLmFjcXVpcmVycztcblxuICB2YXIgaXNQcm9jZXNzaW5nID0gZmlsZS5wcm9ncmVzcy5wcmVwcm9jZXNzIHx8IGZpbGUucHJvZ3Jlc3MucG9zdHByb2Nlc3M7XG4gIHZhciBpc1VwbG9hZGVkID0gZmlsZS5wcm9ncmVzcy51cGxvYWRDb21wbGV0ZSAmJiAhaXNQcm9jZXNzaW5nICYmICFmaWxlLmVycm9yO1xuICB2YXIgdXBsb2FkSW5Qcm9ncmVzc09yQ29tcGxldGUgPSBmaWxlLnByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQgfHwgaXNQcm9jZXNzaW5nO1xuICB2YXIgdXBsb2FkSW5Qcm9ncmVzcyA9IGZpbGUucHJvZ3Jlc3MudXBsb2FkU3RhcnRlZCAmJiAhZmlsZS5wcm9ncmVzcy51cGxvYWRDb21wbGV0ZSB8fCBpc1Byb2Nlc3Npbmc7XG4gIHZhciBpc1BhdXNlZCA9IGZpbGUuaXNQYXVzZWQgfHwgZmFsc2U7XG4gIHZhciBlcnJvciA9IGZpbGUuZXJyb3IgfHwgZmFsc2U7XG5cbiAgdmFyIGZpbGVOYW1lID0gZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24oZmlsZS5tZXRhLm5hbWUpLm5hbWU7XG4gIHZhciB0cnVuY2F0ZWRGaWxlTmFtZSA9IHByb3BzLmlzV2lkZSA/IHRydW5jYXRlU3RyaW5nKGZpbGVOYW1lLCAzMCkgOiBmaWxlTmFtZTtcblxuICBmdW5jdGlvbiBvblBhdXNlUmVzdW1lQ2FuY2VsUmV0cnkoZXYpIHtcbiAgICBpZiAoaXNVcGxvYWRlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGVycm9yICYmICFwcm9wcy5oaWRlUmV0cnlCdXR0b24pIHtcbiAgICAgIHByb3BzLnJldHJ5VXBsb2FkKGZpbGUuaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5oaWRlUGF1c2VSZXN1bWVDYW5jZWxCdXR0b25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLnJlc3VtYWJsZVVwbG9hZHMpIHtcbiAgICAgIHByb3BzLnBhdXNlVXBsb2FkKGZpbGUuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5jYW5jZWxVcGxvYWQoZmlsZS5pZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvZ3Jlc3NJbmRpY2F0b3JUaXRsZShwcm9wcykge1xuICAgIGlmIChpc1VwbG9hZGVkKSB7XG4gICAgICByZXR1cm4gcHJvcHMuaTE4bigndXBsb2FkQ29tcGxldGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBwcm9wcy5pMThuKCdyZXRyeVVwbG9hZCcpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5yZXN1bWFibGVVcGxvYWRzKSB7XG4gICAgICBpZiAoZmlsZS5pc1BhdXNlZCkge1xuICAgICAgICByZXR1cm4gcHJvcHMuaTE4bigncmVzdW1lVXBsb2FkJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcHMuaTE4bigncGF1c2VVcGxvYWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb3BzLmkxOG4oJ2NhbmNlbFVwbG9hZCcpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBkYXNoYm9hcmRJdGVtQ2xhc3MgPSBjbGFzc05hbWVzKCd1cHB5LURhc2hib2FyZEl0ZW0nLCB7ICdpcy1pbnByb2dyZXNzJzogdXBsb2FkSW5Qcm9ncmVzcyB9LCB7ICdpcy1wcm9jZXNzaW5nJzogaXNQcm9jZXNzaW5nIH0sIHsgJ2lzLWNvbXBsZXRlJzogaXNVcGxvYWRlZCB9LCB7ICdpcy1wYXVzZWQnOiBpc1BhdXNlZCB9LCB7ICdpcy1lcnJvcic6IGVycm9yIH0sIHsgJ2lzLXJlc3VtYWJsZSc6IHByb3BzLnJlc3VtYWJsZVVwbG9hZHMgfSwgeyAnaXMtYnVuZGxlZCc6IHByb3BzLmJ1bmRsZWRVcGxvYWQgfSk7XG5cbiAgcmV0dXJuIGgoXG4gICAgJ2xpJyxcbiAgICB7ICdjbGFzcyc6IGRhc2hib2FyZEl0ZW1DbGFzcywgaWQ6ICd1cHB5XycgKyBmaWxlLmlkLCB0aXRsZTogZmlsZS5tZXRhLm5hbWUgfSxcbiAgICBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tcHJldmlldycgfSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tcHJldmlld0lubmVyV3JhcCcsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogZ2V0RmlsZVR5cGVJY29uKGZpbGUudHlwZSkuY29sb3IgfSB9LFxuICAgICAgICBwcm9wcy5zaG93TGlua1RvRmlsZVVwbG9hZFJlc3VsdCAmJiBmaWxlLnVwbG9hZFVSTCA/IGgoJ2EnLCB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tcHJldmlld0xpbmsnLCBocmVmOiBmaWxlLnVwbG9hZFVSTCwgcmVsOiAnbm9yZWZlcnJlciBub29wZW5lcicsIHRhcmdldDogJ19ibGFuaycgfSkgOiBudWxsLFxuICAgICAgICBoKEZpbGVQcmV2aWV3LCB7IGZpbGU6IGZpbGUgfSlcbiAgICAgICksXG4gICAgICBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLXByb2dyZXNzJyB9LFxuICAgICAgICBoKEZpbGVJdGVtUHJvZ3Jlc3NXcmFwcGVyLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgcHJvZ3Jlc3NJbmRpY2F0b3JUaXRsZTogcHJvZ3Jlc3NJbmRpY2F0b3JUaXRsZShwcm9wcyksXG4gICAgICAgICAgb25QYXVzZVJlc3VtZUNhbmNlbFJldHJ5OiBvblBhdXNlUmVzdW1lQ2FuY2VsUmV0cnksXG4gICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSwgcHJvcHMpKVxuICAgICAgKVxuICAgICksXG4gICAgaChcbiAgICAgICdkaXYnLFxuICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLWluZm8nIH0sXG4gICAgICBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLW5hbWUnLCB0aXRsZTogZmlsZU5hbWUgfSxcbiAgICAgICAgcHJvcHMuc2hvd0xpbmtUb0ZpbGVVcGxvYWRSZXN1bHQgJiYgZmlsZS51cGxvYWRVUkwgPyBoKFxuICAgICAgICAgICdhJyxcbiAgICAgICAgICB7IGhyZWY6IGZpbGUudXBsb2FkVVJMLCByZWw6ICdub3JlZmVycmVyIG5vb3BlbmVyJywgdGFyZ2V0OiAnX2JsYW5rJyB9LFxuICAgICAgICAgIGZpbGUuZXh0ZW5zaW9uID8gdHJ1bmNhdGVkRmlsZU5hbWUgKyAnLicgKyBmaWxlLmV4dGVuc2lvbiA6IHRydW5jYXRlZEZpbGVOYW1lXG4gICAgICAgICkgOiBmaWxlLmV4dGVuc2lvbiA/IHRydW5jYXRlZEZpbGVOYW1lICsgJy4nICsgZmlsZS5leHRlbnNpb24gOiB0cnVuY2F0ZWRGaWxlTmFtZVxuICAgICAgKSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tc3RhdHVzJyB9LFxuICAgICAgICBmaWxlLmRhdGEuc2l6ZSA/IGgoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLXN0YXR1c1NpemUnIH0sXG4gICAgICAgICAgcHJldHR5Qnl0ZXMoZmlsZS5kYXRhLnNpemUpXG4gICAgICAgICkgOiBudWxsLFxuICAgICAgICBmaWxlLnNvdXJjZSAmJiBmaWxlLnNvdXJjZSAhPT0gcHJvcHMuaWQgJiYgaChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tc291cmNlSWNvbicgfSxcbiAgICAgICAgICBhY3F1aXJlcnMubWFwKGZ1bmN0aW9uIChhY3F1aXJlcikge1xuICAgICAgICAgICAgaWYgKGFjcXVpcmVyLmlkID09PSBmaWxlLnNvdXJjZSkge1xuICAgICAgICAgICAgICByZXR1cm4gaChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogcHJvcHMuaTE4bignZmlsZVNvdXJjZScsIHsgbmFtZTogYWNxdWlyZXIubmFtZSB9KSB9LFxuICAgICAgICAgICAgICAgIGFjcXVpcmVyLmljb24oKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgICF1cGxvYWRJblByb2dyZXNzT3JDb21wbGV0ZSAmJiBwcm9wcy5tZXRhRmllbGRzICYmIHByb3BzLm1ldGFGaWVsZHMubGVuZ3RoID8gaChcbiAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tZWRpdCcsXG4gICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMuaTE4bignZWRpdEZpbGUnKSxcbiAgICAgICAgICAgIHRpdGxlOiBwcm9wcy5pMThuKCdlZGl0RmlsZScpLFxuICAgICAgICAgICAgb25jbGljazogZnVuY3Rpb24gb25jbGljayhlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9wcy50b2dnbGVGaWxlQ2FyZChmaWxlLmlkKTtcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICBwcm9wcy5pMThuKCdlZGl0JylcbiAgICAgICAgKSA6IG51bGwsXG4gICAgICAgIHByb3BzLnNob3dMaW5rVG9GaWxlVXBsb2FkUmVzdWx0ICYmIGZpbGUudXBsb2FkVVJMID8gaChcbiAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tY29weUxpbmsnLFxuICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmkxOG4oJ2NvcHlMaW5rJyksXG4gICAgICAgICAgICB0aXRsZTogcHJvcHMuaTE4bignY29weUxpbmsnKSxcbiAgICAgICAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uIG9uY2xpY2soKSB7XG4gICAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZChmaWxlLnVwbG9hZFVSTCwgcHJvcHMuaTE4bignY29weUxpbmtUb0NsaXBib2FyZEZhbGxiYWNrJykpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHByb3BzLmxvZygnTGluayBjb3BpZWQgdG8gY2xpcGJvYXJkLicpO1xuICAgICAgICAgICAgICAgIHByb3BzLmluZm8ocHJvcHMuaTE4bignY29weUxpbmtUb0NsaXBib2FyZFN1Y2Nlc3MnKSwgJ2luZm8nLCAzMDAwKTtcbiAgICAgICAgICAgICAgfSkuY2F0Y2gocHJvcHMubG9nKTtcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICBpY29uQ29weSgpXG4gICAgICAgICkgOiAnJ1xuICAgICAgKVxuICAgICksXG4gICAgaChcbiAgICAgICdkaXYnLFxuICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLWFjdGlvbicgfSxcbiAgICAgICFpc1VwbG9hZGVkICYmIGgoXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tcmVtb3ZlJyxcbiAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmkxOG4oJ3JlbW92ZUZpbGUnKSxcbiAgICAgICAgICB0aXRsZTogcHJvcHMuaTE4bigncmVtb3ZlRmlsZScpLFxuICAgICAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uIG9uY2xpY2soKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMucmVtb3ZlRmlsZShmaWxlLmlkKTtcbiAgICAgICAgICB9IH0sXG4gICAgICAgIGgoXG4gICAgICAgICAgJ3N2ZycsXG4gICAgICAgICAgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsICdjbGFzcyc6ICdVcHB5SWNvbicsIHdpZHRoOiAnNjAnLCBoZWlnaHQ6ICc2MCcsIHZpZXdCb3g6ICcwIDAgNjAgNjAnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuICAgICAgICAgIGgoJ3BhdGgnLCB7IHN0cm9rZTogJyNGRkYnLCAnc3Ryb2tlLXdpZHRoJzogJzEnLCAnZmlsbC1ydWxlJzogJ25vbnplcm8nLCAndmVjdG9yLWVmZmVjdCc6ICdub24tc2NhbGluZy1zdHJva2UnLCBkOiAnTTMwIDFDMTQgMSAxIDE0IDEgMzBzMTMgMjkgMjkgMjkgMjktMTMgMjktMjlTNDYgMSAzMCAxeicgfSksXG4gICAgICAgICAgaCgncGF0aCcsIHsgZmlsbDogJyNGRkYnLCAndmVjdG9yLWVmZmVjdCc6ICdub24tc2NhbGluZy1zdHJva2UnLCBkOiAnTTQyIDM5LjY2N0wzOS42NjcgNDIgMzAgMzIuMzMzIDIwLjMzMyA0MiAxOCAzOS42NjcgMjcuNjY3IDMwIDE4IDIwLjMzMyAyMC4zMzMgMTggMzAgMjcuNjY3IDM5LjY2NyAxOCA0MiAyMC4zMzMgMzIuMzMzIDMweicgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn07IiwidmFyIF9yZXF1aXJlID0gcmVxdWlyZSgncHJlYWN0JyksXG4gICAgaCA9IF9yZXF1aXJlLmg7XG5cbi8vIGh0dHA6Ly9jb2RlcGVuLmlvL0hhcmtrby9wZW4vclZ4dk5NXG4vLyBodHRwczovL2Nzcy10cmlja3MuY29tL3N2Zy1saW5lLWFuaW1hdGlvbi13b3Jrcy9cbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2Vzd2FrL2FkNGVhNTdiY2Q1ZmY3YWE1ZDQyXG5cbi8vIGNpcmNsZSBsZW5ndGggZXF1YWxzIDIgKiBQSSAqIFJcblxuXG52YXIgY2lyY2xlTGVuZ3RoID0gMiAqIE1hdGguUEkgKiAxNTtcblxuLy8gc3Ryb2tlLWRhc2hvZmZzZXQgaXMgYSBwZXJjZW50YWdlIG9mIHRoZSBwcm9ncmVzcyBmcm9tIGNpcmNsZUxlbmd0aCxcbi8vIHN1YnN0cmFjdGVkIGZyb20gY2lyY2xlTGVuZ3RoLCBiZWNhdXNlIGl0cyBhbiBvZmZzZXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBoKFxuICAgIFwic3ZnXCIsXG4gICAgeyB3aWR0aDogXCI3MFwiLCBoZWlnaHQ6IFwiNzBcIiwgdmlld0JveDogXCIwIDAgMzYgMzZcIiwgXCJjbGFzc1wiOiBcIlVwcHlJY29uIFVwcHlJY29uLXByb2dyZXNzQ2lyY2xlXCIgfSxcbiAgICBoKFxuICAgICAgXCJnXCIsXG4gICAgICB7IFwiY2xhc3NcIjogXCJwcm9ncmVzcy1ncm91cFwiIH0sXG4gICAgICBoKFwiY2lyY2xlXCIsIHsgXCJjbGFzc1wiOiBcImJnXCIsIHI6IFwiMTVcIiwgY3g6IFwiMThcIiwgY3k6IFwiMThcIiwgXCJzdHJva2Utd2lkdGhcIjogXCIyXCIsIGZpbGw6IFwibm9uZVwiIH0pLFxuICAgICAgaChcImNpcmNsZVwiLCB7IFwiY2xhc3NcIjogXCJwcm9ncmVzc1wiLCByOiBcIjE1XCIsIGN4OiBcIjE4XCIsIGN5OiBcIjE4XCIsIHRyYW5zZm9ybTogXCJyb3RhdGUoLTkwLCAxOCwgMTgpXCIsIFwic3Ryb2tlLXdpZHRoXCI6IFwiMlwiLCBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgXCJzdHJva2UtZGFzaGFycmF5XCI6IGNpcmNsZUxlbmd0aCxcbiAgICAgICAgXCJzdHJva2UtZGFzaG9mZnNldFwiOiBjaXJjbGVMZW5ndGggLSBjaXJjbGVMZW5ndGggLyAxMDAgKiBwcm9wcy5wcm9ncmVzc1xuICAgICAgfSlcbiAgICApLFxuICAgICFwcm9wcy5oaWRlUGF1c2VSZXN1bWVDYW5jZWxCdXR0b25zICYmICFwcm9wcy5idW5kbGVkID8gaChcbiAgICAgIFwiZ1wiLFxuICAgICAgbnVsbCxcbiAgICAgIGgoXCJwb2x5Z29uXCIsIHsgXCJjbGFzc1wiOiBcInBsYXlcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgzLCAzKVwiLCBwb2ludHM6IFwiMTIgMjAgMTIgMTAgMjAgMTVcIiB9KSxcbiAgICAgIGgoXG4gICAgICAgIFwiZ1wiLFxuICAgICAgICB7IFwiY2xhc3NcIjogXCJwYXVzZVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDE0LjUsIDEzKVwiIH0sXG4gICAgICAgIGgoXCJyZWN0XCIsIHsgeDogXCIwXCIsIHk6IFwiMFwiLCB3aWR0aDogXCIyXCIsIGhlaWdodDogXCIxMFwiLCByeDogXCIwXCIgfSksXG4gICAgICAgIGgoXCJyZWN0XCIsIHsgeDogXCI1XCIsIHk6IFwiMFwiLCB3aWR0aDogXCIyXCIsIGhlaWdodDogXCIxMFwiLCByeDogXCIwXCIgfSlcbiAgICAgICksXG4gICAgICBoKFwicG9seWdvblwiLCB7IFwiY2xhc3NcIjogXCJjYW5jZWxcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyLCAyKVwiLCBwb2ludHM6IFwiMTkuODg1NjUxNiAxMS4wNjI1IDE2IDE0Ljk0ODE1MTYgMTIuMTAxOTczNyAxMS4wNjI1IDExLjA2MjUgMTIuMTE0MzQ4NCAxNC45NDgxNTE2IDE2IDExLjA2MjUgMTkuODk4MDI2MyAxMi4xMDE5NzM3IDIwLjkzNzUgMTYgMTcuMDUxODQ4NCAxOS44ODU2NTE2IDIwLjkzNzUgMjAuOTM3NSAxOS44OTgwMjYzIDE3LjA1MTg0ODQgMTYgMjAuOTM3NSAxMlwiIH0pXG4gICAgKSA6IG51bGwsXG4gICAgaChcInBvbHlnb25cIiwgeyBcImNsYXNzXCI6IFwiY2hlY2tcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyLCAzKVwiLCBwb2ludHM6IFwiMTQgMjIuNSA3IDE1LjI0NTcwNjUgOC45OTk4NTg1NyAxMy4xNzMyODE1IDE0IDE4LjM1NDcxMDQgMjIuOTcyOTg4MyA5IDI1IDExLjEwMDU2MzRcIiB9KVxuICApO1xufTsiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgRmlsZUl0ZW0gPSByZXF1aXJlKCcuL0ZpbGVJdGVtJyk7XG52YXIgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgncHJlYWN0JyksXG4gICAgaCA9IF9yZXF1aXJlLmg7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHZhciBub0ZpbGVzID0gcHJvcHMudG90YWxGaWxlQ291bnQgPT09IDA7XG4gIHZhciBkYXNoYm9hcmRGaWxlc0NsYXNzID0gY2xhc3NOYW1lcygndXBweS1EYXNoYm9hcmQtZmlsZXMnLCB7ICd1cHB5LURhc2hib2FyZC1maWxlcy0tbm9GaWxlcyc6IG5vRmlsZXMgfSk7XG5cbiAgcmV0dXJuIGgoXG4gICAgJ3VsJyxcbiAgICB7ICdjbGFzcyc6IGRhc2hib2FyZEZpbGVzQ2xhc3MgfSxcbiAgICBPYmplY3Qua2V5cyhwcm9wcy5maWxlcykubWFwKGZ1bmN0aW9uIChmaWxlSUQpIHtcbiAgICAgIHJldHVybiBoKEZpbGVJdGVtLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgYWNxdWlyZXJzOiBwcm9wcy5hY3F1aXJlcnMsXG4gICAgICAgIGZpbGU6IHByb3BzLmZpbGVzW2ZpbGVJRF1cbiAgICAgIH0pKTtcbiAgICB9KVxuICApO1xufTsiLCJ2YXIgZ2V0RmlsZVR5cGVJY29uID0gcmVxdWlyZSgnLi4vdXRpbHMvZ2V0RmlsZVR5cGVJY29uJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZS5oO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEZpbGVQcmV2aWV3KHByb3BzKSB7XG4gIHZhciBmaWxlID0gcHJvcHMuZmlsZTtcblxuICBpZiAoZmlsZS5wcmV2aWV3KSB7XG4gICAgcmV0dXJuIGgoJ2ltZycsIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkSXRlbS1wcmV2aWV3SW1nJywgYWx0OiBmaWxlLm5hbWUsIHNyYzogZmlsZS5wcmV2aWV3IH0pO1xuICB9XG5cbiAgdmFyIF9nZXRGaWxlVHlwZUljb24gPSBnZXRGaWxlVHlwZUljb24oZmlsZS50eXBlKSxcbiAgICAgIGNvbG9yID0gX2dldEZpbGVUeXBlSWNvbi5jb2xvcixcbiAgICAgIGljb24gPSBfZ2V0RmlsZVR5cGVJY29uLmljb247XG5cbiAgcmV0dXJuIGgoXG4gICAgJ2RpdicsXG4gICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLXByZXZpZXdJY29uV3JhcCcgfSxcbiAgICBoKFxuICAgICAgJ3NwYW4nLFxuICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLXByZXZpZXdJY29uJywgc3R5bGU6IHsgY29sb3I6IGNvbG9yIH0gfSxcbiAgICAgIGljb25cbiAgICApLFxuICAgIGgoXG4gICAgICAnc3ZnJyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkSXRlbS1wcmV2aWV3SWNvbkJnJywgd2lkdGg6ICc3MicsIGhlaWdodDogJzkzJywgdmlld0JveDogJzAgMCA3MiA5MycgfSxcbiAgICAgIGgoXG4gICAgICAgICdnJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaCgncGF0aCcsIHsgZDogJ00yNC4wOCA1aDM4LjkyMkEyLjk5NyAyLjk5NyAwIDAgMSA2NiA4LjAwM3Y3NC45OTRBMi45OTcgMi45OTcgMCAwIDEgNjMuMDA0IDg2SDguOTk2QTIuOTk4IDIuOTk4IDAgMCAxIDYgODMuMDFWMjIuMjM0TDI0LjA4IDV6JywgZmlsbDogJyNGRkYnIH0pLFxuICAgICAgICBoKCdwYXRoJywgeyBkOiAnTTI0IDVMNiAyMi4yNDhoMTUuMDA3QTIuOTk1IDIuOTk1IDAgMCAwIDI0IDE5LjI0NFY1eicsIGZpbGw6ICcjRTRFNEU0JyB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcbn07XG5cbi8vIDxzcGFuIGNsYXNzPVwidXBweS1EYXNoYm9hcmRJdGVtLXByZXZpZXdUeXBlXCI+e2ZpbGUuZXh0ZW5zaW9uICYmIGZpbGUuZXh0ZW5zaW9uLmxlbmd0aCA8IDUgPyBmaWxlLmV4dGVuc2lvbiA6IG51bGx9PC9zcGFuPiIsInZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZS5oO1xuXG52YXIgaWdub3JlRXZlbnQgPSByZXF1aXJlKCcuLi91dGlscy9pZ25vcmVFdmVudC5qcycpO1xuXG5mdW5jdGlvbiBQYW5lbENvbnRlbnQocHJvcHMpIHtcbiAgcmV0dXJuIGgoXG4gICAgJ2RpdicsXG4gICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRDb250ZW50LXBhbmVsJyxcbiAgICAgIHJvbGU6ICd0YWJwYW5lbCcsXG4gICAgICBpZDogcHJvcHMuYWN0aXZlUGFuZWwgJiYgJ3VwcHktRGFzaGJvYXJkQ29udGVudC1wYW5lbC0tJyArIHByb3BzLmFjdGl2ZVBhbmVsLmlkLFxuICAgICAgb25EcmFnT3ZlcjogaWdub3JlRXZlbnQsXG4gICAgICBvbkRyYWdMZWF2ZTogaWdub3JlRXZlbnQsXG4gICAgICBvbkRyb3A6IGlnbm9yZUV2ZW50LFxuICAgICAgb25QYXN0ZTogaWdub3JlRXZlbnQgfSxcbiAgICBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtYmFyJyB9LFxuICAgICAgaChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC10aXRsZScsIHJvbGU6ICdoZWFkaW5nJywgJ2FyaWEtbGV2ZWwnOiAnaDEnIH0sXG4gICAgICAgIHByb3BzLmkxOG4oJ2ltcG9ydEZyb20nLCB7IG5hbWU6IHByb3BzLmFjdGl2ZVBhbmVsLm5hbWUgfSlcbiAgICAgICksXG4gICAgICBoKFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRDb250ZW50LWJhY2snLFxuICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIG9uY2xpY2s6IHByb3BzLmhpZGVBbGxQYW5lbHMgfSxcbiAgICAgICAgcHJvcHMuaTE4bignZG9uZScpXG4gICAgICApXG4gICAgKSxcbiAgICBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtcGFuZWxCb2R5JyB9LFxuICAgICAgcHJvcHMuZ2V0UGx1Z2luKHByb3BzLmFjdGl2ZVBhbmVsLmlkKS5yZW5kZXIocHJvcHMuc3RhdGUpXG4gICAgKVxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbmVsQ29udGVudDsiLCJ2YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdwcmVhY3QnKSxcbiAgICBoID0gX3JlcXVpcmUuaDtcblxudmFyIHVwbG9hZFN0YXRlcyA9IHtcbiAgJ1NUQVRFX0VSUk9SJzogJ2Vycm9yJyxcbiAgJ1NUQVRFX1dBSVRJTkcnOiAnd2FpdGluZycsXG4gICdTVEFURV9QUkVQUk9DRVNTSU5HJzogJ3ByZXByb2Nlc3NpbmcnLFxuICAnU1RBVEVfVVBMT0FESU5HJzogJ3VwbG9hZGluZycsXG4gICdTVEFURV9QT1NUUFJPQ0VTU0lORyc6ICdwb3N0cHJvY2Vzc2luZycsXG4gICdTVEFURV9DT01QTEVURSc6ICdjb21wbGV0ZScsXG4gICdTVEFURV9QQVVTRUQnOiAncGF1c2VkJ1xufTtcblxuZnVuY3Rpb24gZ2V0VXBsb2FkaW5nU3RhdGUoaXNBbGxFcnJvcmVkLCBpc0FsbENvbXBsZXRlLCBpc0FsbFBhdXNlZCkge1xuICB2YXIgZmlsZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gIGlmIChpc0FsbEVycm9yZWQpIHtcbiAgICByZXR1cm4gdXBsb2FkU3RhdGVzLlNUQVRFX0VSUk9SO1xuICB9XG5cbiAgaWYgKGlzQWxsQ29tcGxldGUpIHtcbiAgICByZXR1cm4gdXBsb2FkU3RhdGVzLlNUQVRFX0NPTVBMRVRFO1xuICB9XG5cbiAgaWYgKGlzQWxsUGF1c2VkKSB7XG4gICAgcmV0dXJuIHVwbG9hZFN0YXRlcy5TVEFURV9QQVVTRUQ7XG4gIH1cblxuICB2YXIgc3RhdGUgPSB1cGxvYWRTdGF0ZXMuU1RBVEVfV0FJVElORztcbiAgdmFyIGZpbGVJRHMgPSBPYmplY3Qua2V5cyhmaWxlcyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZUlEcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwcm9ncmVzcyA9IGZpbGVzW2ZpbGVJRHNbaV1dLnByb2dyZXNzO1xuICAgIC8vIElmIEFOWSBmaWxlcyBhcmUgYmVpbmcgdXBsb2FkZWQgcmlnaHQgbm93LCBzaG93IHRoZSB1cGxvYWRpbmcgc3RhdGUuXG4gICAgaWYgKHByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQgJiYgIXByb2dyZXNzLnVwbG9hZENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4gdXBsb2FkU3RhdGVzLlNUQVRFX1VQTE9BRElORztcbiAgICB9XG4gICAgLy8gSWYgZmlsZXMgYXJlIGJlaW5nIHByZXByb2Nlc3NlZCBBTkQgcG9zdHByb2Nlc3NlZCBhdCB0aGlzIHRpbWUsIHdlIHNob3cgdGhlXG4gICAgLy8gcHJlcHJvY2VzcyBzdGF0ZS4gSWYgYW55IGZpbGVzIGFyZSBiZWluZyB1cGxvYWRlZCB3ZSBzaG93IHVwbG9hZGluZy5cbiAgICBpZiAocHJvZ3Jlc3MucHJlcHJvY2VzcyAmJiBzdGF0ZSAhPT0gdXBsb2FkU3RhdGVzLlNUQVRFX1VQTE9BRElORykge1xuICAgICAgc3RhdGUgPSB1cGxvYWRTdGF0ZXMuU1RBVEVfUFJFUFJPQ0VTU0lORztcbiAgICB9XG4gICAgLy8gSWYgTk8gZmlsZXMgYXJlIGJlaW5nIHByZXByb2Nlc3NlZCBvciB1cGxvYWRlZCByaWdodCBub3csIGJ1dCBzb21lIGZpbGVzIGFyZVxuICAgIC8vIGJlaW5nIHBvc3Rwcm9jZXNzZWQsIHNob3cgdGhlIHBvc3Rwcm9jZXNzIHN0YXRlLlxuICAgIGlmIChwcm9ncmVzcy5wb3N0cHJvY2VzcyAmJiBzdGF0ZSAhPT0gdXBsb2FkU3RhdGVzLlNUQVRFX1VQTE9BRElORyAmJiBzdGF0ZSAhPT0gdXBsb2FkU3RhdGVzLlNUQVRFX1BSRVBST0NFU1NJTkcpIHtcbiAgICAgIHN0YXRlID0gdXBsb2FkU3RhdGVzLlNUQVRFX1BPU1RQUk9DRVNTSU5HO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIFVwbG9hZFN0YXR1cyhwcm9wcykge1xuICB2YXIgdXBsb2FkaW5nU3RhdGUgPSBnZXRVcGxvYWRpbmdTdGF0ZShwcm9wcy5pc0FsbEVycm9yZWQsIHByb3BzLmlzQWxsQ29tcGxldGUsIHByb3BzLmlzQWxsUGF1c2VkLCBwcm9wcy5maWxlcyk7XG5cbiAgc3dpdGNoICh1cGxvYWRpbmdTdGF0ZSkge1xuICAgIGNhc2UgJ3VwbG9hZGluZyc6XG4gICAgICByZXR1cm4gcHJvcHMuaTE4bigndXBsb2FkaW5nWEZpbGVzJywgeyBzbWFydF9jb3VudDogcHJvcHMuaW5Qcm9ncmVzc05vdFBhdXNlZEZpbGVzLmxlbmd0aCB9KTtcbiAgICBjYXNlICdwcmVwcm9jZXNzaW5nJzpcbiAgICBjYXNlICdwb3N0cHJvY2Vzc2luZyc6XG4gICAgICByZXR1cm4gcHJvcHMuaTE4bigncHJvY2Vzc2luZ1hGaWxlcycsIHsgc21hcnRfY291bnQ6IHByb3BzLnByb2Nlc3NpbmdGaWxlcy5sZW5ndGggfSk7XG4gICAgY2FzZSAncGF1c2VkJzpcbiAgICAgIHJldHVybiBwcm9wcy5pMThuKCd1cGxvYWRQYXVzZWQnKTtcbiAgICBjYXNlICd3YWl0aW5nJzpcbiAgICAgIHJldHVybiBwcm9wcy5pMThuKCd4RmlsZXNTZWxlY3RlZCcsIHsgc21hcnRfY291bnQ6IHByb3BzLm5ld0ZpbGVzLmxlbmd0aCB9KTtcbiAgICBjYXNlICdjb21wbGV0ZSc6XG4gICAgICByZXR1cm4gcHJvcHMuaTE4bigndXBsb2FkQ29tcGxldGUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBQYW5lbFRvcEJhcihwcm9wcykge1xuICB2YXIgYWxsb3dOZXdVcGxvYWQgPSBwcm9wcy5hbGxvd05ld1VwbG9hZDtcbiAgLy8gVE9ETyBtYXliZSB0aGlzIHNob3VsZCBiZSBkb25lIGluIC4uL2luZGV4LmpzLCB0aGVuIGp1c3QgcGFzcyB0aGF0IGRvd24gYXMgYGFsbG93TmV3VXBsb2FkYFxuICBpZiAoYWxsb3dOZXdVcGxvYWQgJiYgcHJvcHMubWF4TnVtYmVyT2ZGaWxlcykge1xuICAgIGFsbG93TmV3VXBsb2FkID0gcHJvcHMudG90YWxGaWxlQ291bnQgPCBwcm9wcy5tYXhOdW1iZXJPZkZpbGVzO1xuICB9XG5cbiAgcmV0dXJuIGgoXG4gICAgJ2RpdicsXG4gICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRDb250ZW50LWJhcicgfSxcbiAgICBoKFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgIXByb3BzLmlzQWxsQ29tcGxldGUgPyBoKFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRDb250ZW50LWJhY2snLFxuICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIG9uY2xpY2s6IHByb3BzLmNhbmNlbEFsbCB9LFxuICAgICAgICBwcm9wcy5pMThuKCdjYW5jZWwnKVxuICAgICAgKSA6IG51bGxcbiAgICApLFxuICAgIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC10aXRsZScsIHJvbGU6ICdoZWFkaW5nJywgJ2FyaWEtbGV2ZWwnOiAnaDEnIH0sXG4gICAgICBoKFVwbG9hZFN0YXR1cywgcHJvcHMpXG4gICAgKSxcbiAgICBhbGxvd05ld1VwbG9hZCAmJiBoKFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtYWRkTW9yZScsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmkxOG4oJ2FkZE1vcmVGaWxlcycpLFxuICAgICAgICB0aXRsZTogcHJvcHMuaTE4bignYWRkTW9yZUZpbGVzJyksXG4gICAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uIG9uY2xpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLnRvZ2dsZUFkZEZpbGVzUGFuZWwodHJ1ZSk7XG4gICAgICAgIH0gfSxcbiAgICAgIGgoXG4gICAgICAgICdzdmcnLFxuICAgICAgICB7ICdjbGFzcyc6ICdVcHB5SWNvbicsIHdpZHRoOiAnMTUnLCBoZWlnaHQ6ICcxNScsIHZpZXdCb3g6ICcwIDAgMTMgMTMnLCB2ZXJzaW9uOiAnMS4xJywgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgfSxcbiAgICAgICAgaCgncGF0aCcsIHsgZDogJ003LDYgTDEzLDYgTDEzLDcgTDcsNyBMNywxMyBMNiwxMyBMNiw3IEwwLDcgTDAsNiBMNiw2IEw2LDAgTDcsMCBMNyw2IFonIH0pXG4gICAgICApXG4gICAgKVxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbmVsVG9wQmFyOyIsInZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZS5oO1xuXG4vLyBodHRwczovL2Nzcy10cmlja3MuY29tL2NyZWF0aW5nLXN2Zy1pY29uLXN5c3RlbS1yZWFjdC9cblxuZnVuY3Rpb24gZGVmYXVsdFRhYkljb24oKSB7XG4gIHJldHVybiBoKFxuICAgIFwic3ZnXCIsXG4gICAgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCB3aWR0aDogXCIzMFwiLCBoZWlnaHQ6IFwiMzBcIiwgdmlld0JveDogXCIwIDAgMzAgMzBcIiB9LFxuICAgIGgoXCJwYXRoXCIsIHsgZDogXCJNMTUgMzBjOC4yODQgMCAxNS02LjcxNiAxNS0xNSAwLTguMjg0LTYuNzE2LTE1LTE1LTE1QzYuNzE2IDAgMCA2LjcxNiAwIDE1YzAgOC4yODQgNi43MTYgMTUgMTUgMTV6bTQuMjU4LTEyLjY3NnY2Ljg0NmgtOC40MjZ2LTYuODQ2SDUuMjA0bDkuODItMTIuMzY0IDkuODIgMTIuMzY0SDE5LjI2elwiIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGljb25Db3B5KCkge1xuICByZXR1cm4gaChcbiAgICBcInN2Z1wiLFxuICAgIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgXCJjbGFzc1wiOiBcIlVwcHlJY29uXCIsIHdpZHRoOiBcIjUxXCIsIGhlaWdodDogXCI1MVwiLCB2aWV3Qm94OiBcIjAgMCA1MSA1MVwiIH0sXG4gICAgaChcInBhdGhcIiwgeyBkOiBcIk0xNy4yMSA0NS43NjVhNS4zOTQgNS4zOTQgMCAwIDEtNy42MiAwbC00LjEyLTQuMTIyYTUuMzkzIDUuMzkzIDAgMCAxIDAtNy42MThsNi43NzQtNi43NzUtMi40MDQtMi40MDQtNi43NzUgNi43NzZjLTMuNDI0IDMuNDI3LTMuNDI0IDkgMCAxMi40MjZsNC4xMiA0LjEyM2E4Ljc2NiA4Ljc2NiAwIDAgMCA2LjIxNiAyLjU3YzIuMjUgMCA0LjUtLjg1OCA2LjIxNC0yLjU3bDEzLjU1LTEzLjU1MmE4LjcyIDguNzIgMCAwIDAgMi41NzUtNi4yMTMgOC43MyA4LjczIDAgMCAwLTIuNTc1LTYuMjEzbC00LjEyMy00LjEyLTIuNDA0IDIuNDA0IDQuMTIzIDQuMTJhNS4zNTIgNS4zNTIgMCAwIDEgMS41OCAzLjgxYzAgMS40MzgtLjU2MiAyLjc5LTEuNTggMy44MDhsLTEzLjU1IDEzLjU1elwiIH0pLFxuICAgIGgoXCJwYXRoXCIsIHsgZDogXCJNNDQuMjU2IDIuODU4QTguNzI4IDguNzI4IDAgMCAwIDM4LjA0My4yODNoLS4wMDJhOC43MyA4LjczIDAgMCAwLTYuMjEyIDIuNTc0bC0xMy41NSAxMy41NWE4LjcyNSA4LjcyNSAwIDAgMC0yLjU3NSA2LjIxNCA4LjczIDguNzMgMCAwIDAgMi41NzQgNi4yMTZsNC4xMiA0LjEyIDIuNDA1LTIuNDAzLTQuMTItNC4xMmE1LjM1NyA1LjM1NyAwIDAgMS0xLjU4LTMuODEyYzAtMS40MzcuNTYyLTIuNzkgMS41OC0zLjgwOGwxMy41NS0xMy41NWE1LjM0OCA1LjM0OCAwIDAgMSAzLjgxLTEuNThjMS40NCAwIDIuNzkyLjU2MiAzLjgxIDEuNThsNC4xMiA0LjEyYzIuMSAyLjEgMi4xIDUuNTE4IDAgNy42MTdMMzkuMiAyMy43NzVsMi40MDQgMi40MDQgNi43NzUtNi43NzdjMy40MjYtMy40MjcgMy40MjYtOSAwLTEyLjQyNmwtNC4xMi00LjEyelwiIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGljb25SZXN1bWUoKSB7XG4gIHJldHVybiBoKFxuICAgIFwic3ZnXCIsXG4gICAgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBcImNsYXNzXCI6IFwiVXBweUljb25cIiwgd2lkdGg6IFwiMjVcIiwgaGVpZ2h0OiBcIjI1XCIsIHZpZXdCb3g6IFwiMCAwIDQ0IDQ0XCIgfSxcbiAgICBoKFwicG9seWdvblwiLCB7IFwiY2xhc3NcIjogXCJwbGF5XCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoNiwgNS41KVwiLCBwb2ludHM6IFwiMTMgMjEuNjY2NjY2NyAxMyAxMSAyMSAxNi4zMzMzMzMzXCIgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gaWNvblBhdXNlKCkge1xuICByZXR1cm4gaChcbiAgICBcInN2Z1wiLFxuICAgIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgXCJjbGFzc1wiOiBcIlVwcHlJY29uXCIsIHdpZHRoOiBcIjI1cHhcIiwgaGVpZ2h0OiBcIjI1cHhcIiwgdmlld0JveDogXCIwIDAgNDQgNDRcIiB9LFxuICAgIGgoXG4gICAgICBcImdcIixcbiAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxOCwgMTcpXCIsIFwiY2xhc3NcIjogXCJwYXVzZVwiIH0sXG4gICAgICBoKFwicmVjdFwiLCB7IHg6IFwiMFwiLCB5OiBcIjBcIiwgd2lkdGg6IFwiMlwiLCBoZWlnaHQ6IFwiMTBcIiwgcng6IFwiMFwiIH0pLFxuICAgICAgaChcInJlY3RcIiwgeyB4OiBcIjZcIiwgeTogXCIwXCIsIHdpZHRoOiBcIjJcIiwgaGVpZ2h0OiBcIjEwXCIsIHJ4OiBcIjBcIiB9KVxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gbG9jYWxJY29uKCkge1xuICByZXR1cm4gaChcbiAgICBcInN2Z1wiLFxuICAgIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgZmlsbDogXCIjNjA3ZDhiXCIsIHdpZHRoOiBcIjI3XCIsIGhlaWdodDogXCIyNVwiLCB2aWV3Qm94OiBcIjAgMCAyNyAyNVwiIH0sXG4gICAgaChcInBhdGhcIiwgeyBkOiBcIk01LjU4NiA5LjI4OGEuMzEzLjMxMyAwIDAgMCAuMjgyLjE3Nmg0Ljg0djMuOTIyYzAgMS41MTQgMS4yNSAyLjI0IDIuNzkyIDIuMjQgMS41NCAwIDIuNzktLjcyNiAyLjc5LTIuMjRWOS40NjRoNC44NGMuMTIyIDAgLjIzLS4wNjguMjg0LS4xNzZhLjMwNC4zMDQgMCAwIDAtLjA0Ni0uMzI0TDEzLjczNS4xMDZhLjMxNi4zMTYgMCAwIDAtLjQ3MiAwbC03LjYzIDguODU3YS4zMDIuMzAyIDAgMCAwLS4wNDcuMzI1elwiIH0pLFxuICAgIGgoXCJwYXRoXCIsIHsgZDogXCJNMjQuMyA1LjA5M2MtLjIxOC0uNzYtLjU0LTEuMTg3LTEuMjA4LTEuMTg3aC00Ljg1NmwxLjAxOCAxLjE4aDMuOTQ4bDIuMDQzIDExLjAzOGgtNy4xOTN2Mi43MjhIOS4xMTR2LTIuNzI1aC03LjM2bDIuNjYtMTEuMDRoMy4zM2wxLjAxOC0xLjE4SDMuOTA3Yy0uNjY4IDAtMS4wNi40Ni0xLjIxIDEuMTg2TDAgMTYuNDU2djcuMDYyQzAgMjQuMzM4LjY3NiAyNSAxLjUxIDI1aDIzLjk4Yy44MzMgMCAxLjUxLS42NjMgMS41MS0xLjQ4MnYtNy4wNjJMMjQuMyA1LjA5M3pcIiB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBpY29uUmV0cnkoKSB7XG4gIHJldHVybiBoKFxuICAgIFwic3ZnXCIsXG4gICAgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBcImNsYXNzXCI6IFwiVXBweUljb24gcmV0cnlcIiwgd2lkdGg6IFwiMjhcIiwgaGVpZ2h0OiBcIjMxXCIsIHZpZXdCb3g6IFwiMCAwIDE2IDE5XCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IFwiTTE2IDExYTggOCAwIDEgMS04LTh2MmE2IDYgMCAxIDAgNiA2aDJ6XCIgfSksXG4gICAgaChcInBhdGhcIiwgeyBkOiBcIk03LjkgM0gxMHYySDcuOXpcIiB9KSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IFwiTTguNTM2LjVsMy41MzUgMy41MzYtMS40MTQgMS40MTRMNy4xMiAxLjkxNHpcIiB9KSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IFwiTTEwLjY1NyAyLjYyMWwxLjQxNCAxLjQxNUw4LjUzNiA3LjU3IDcuMTIgNi4xNTd6XCIgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJY29uKCkge1xuICByZXR1cm4gaChcbiAgICBcInN2Z1wiLFxuICAgIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgXCJjbGFzc1wiOiBcIlVwcHlJY29uIFVwcHlJY29uLWNoZWNrXCIsIHdpZHRoOiBcIjEzXCIsIGhlaWdodDogXCI5XCIsIHZpZXdCb3g6IFwiMCAwIDEzIDlcIiB9LFxuICAgIGgoXCJwb2x5Z29uXCIsIHsgcG9pbnRzOiBcIjUgNy4yOTMgMS4zNTQgMy42NDcgMC42NDYgNC4zNTQgNSA4LjcwNyAxMi4zNTQgMS4zNTQgMTEuNjQ2IDAuNjQ3XCIgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gaWNvbkF1ZGlvKCkge1xuICByZXR1cm4gaChcbiAgICBcInN2Z1wiLFxuICAgIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgXCJjbGFzc1wiOiBcIlVwcHlJY29uXCIsIHdpZHRoOiBcIjU1XCIsIGhlaWdodDogXCI1NVwiLCB2aWV3Qm94OiBcIjAgMCA1NSA1NVwiIH0sXG4gICAgaChcInBhdGhcIiwgeyBkOiBcIk01Mi42Ni4yNWMtLjIxNi0uMTktLjUtLjI3Ni0uNzktLjI0MmwtMzEgNC4wMWExIDEgMCAwIDAtLjg3Ljk5MlY0MC42MjJDMTguMTc0IDM4LjQyOCAxNS4yNzMgMzcgMTIgMzdjLTUuNTE0IDAtMTAgNC4wMzctMTAgOXM0LjQ4NiA5IDEwIDkgMTAtNC4wMzcgMTAtOWMwLS4yMzItLjAyLS40Ni0uMDQtLjY4Ny4wMTQtLjA2NS4wNC0uMTI0LjA0LS4xOTJWMTYuMTJsMjktMy43NTN2MTguMjU3QzQ5LjE3NCAyOC40MjggNDYuMjczIDI3IDQzIDI3Yy01LjUxNCAwLTEwIDQuMDM3LTEwIDlzNC40ODYgOSAxMCA5YzUuNDY0IDAgOS45MTMtMy45NjYgOS45OTMtOC44NjcgMC0uMDEzLjAwNy0uMDI0LjAwNy0uMDM3VjFhLjk5OC45OTggMCAwIDAtLjM0LS43NXpNMTIgNTNjLTQuNDEgMC04LTMuMTQtOC03czMuNTktNyA4LTcgOCAzLjE0IDggNy0zLjU5IDctOCA3em0zMS0xMGMtNC40MSAwLTgtMy4xNC04LTdzMy41OS03IDgtNyA4IDMuMTQgOCA3LTMuNTkgNy04IDd6TTIyIDE0LjFWNS44OWwyOS0zLjc1M3Y4LjIxbC0yOSAzLjc1NHpcIiB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBpY29uVmlkZW8oKSB7XG4gIHJldHVybiBoKFxuICAgIFwic3ZnXCIsXG4gICAgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBcImNsYXNzXCI6IFwiVXBweUljb25cIiwgdmlld0JveDogXCIwIDAgNTggNThcIiB9LFxuICAgIGgoXCJwYXRoXCIsIHsgZDogXCJNMzYuNTM3IDI4LjE1NmwtMTEtN2ExLjAwNSAxLjAwNSAwIDAgMC0xLjAyLS4wMzNDMjQuMiAyMS4zIDI0IDIxLjYzNSAyNCAyMnYxNGExIDEgMCAwIDAgMS41MzcuODQ0bDExLTdhMS4wMDIgMS4wMDIgMCAwIDAgMC0xLjY4OHpNMjYgMzQuMThWMjMuODJMMzQuMTM3IDI5IDI2IDM0LjE4elwiIH0pLFxuICAgIGgoXCJwYXRoXCIsIHsgZDogXCJNNTcgNkgxYTEgMSAwIDAgMC0xIDF2NDRhMSAxIDAgMCAwIDEgMWg1NmExIDEgMCAwIDAgMS0xVjdhMSAxIDAgMCAwLTEtMXpNMTAgMjhIMnYtOWg4djl6bS04IDJoOHY5SDJ2LTl6bTEwIDEwVjhoMzR2NDJIMTJWNDB6bTQ0LTEyaC04di05aDh2OXptLTggMmg4djloLTh2LTl6bTgtMjJ2OWgtOFY4aDh6TTIgOGg4djlIMlY4em0wIDQydi05aDh2OUgyem01NCAwaC04di05aDh2OXpcIiB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBpY29uUERGKCkge1xuICByZXR1cm4gaChcbiAgICBcInN2Z1wiLFxuICAgIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgXCJjbGFzc1wiOiBcIlVwcHlJY29uXCIsIHZpZXdCb3g6IFwiMCAwIDM0MiAzMzVcIiB9LFxuICAgIGgoXCJwYXRoXCIsIHsgZDogXCJNMzI5LjMzNyAyMjcuODRjLTIuMSAxLjMtOC4xIDIuMS0xMS45IDIuMS0xMi40IDAtMjcuNi01LjctNDkuMS0xNC45IDguMy0uNiAxNS44LS45IDIyLjYtLjkgMTIuNCAwIDE2IDAgMjguMiAzLjEgMTIuMSAzIDEyLjIgOS4zIDEwLjIgMTAuNnptLTIxNS4xIDEuOWM0LjgtOC40IDkuNy0xNy4zIDE0LjctMjYuOCAxMi4yLTIzLjEgMjAtNDEuMyAyNS43LTU2LjIgMTEuNSAyMC45IDI1LjggMzguNiA0Mi41IDUyLjggMi4xIDEuOCA0LjMgMy41IDYuNyA1LjMtMzQuMSA2LjgtNjMuNiAxNS04OS42IDI0Ljl6bTM5LjgtMjE4LjljNi44IDAgMTAuNyAxNy4wNiAxMSAzMy4xNi4zIDE2LTMuNCAyNy4yLTguMSAzNS42LTMuOS0xMi40LTUuNy0zMS44LTUuNy00NC41IDAgMC0uMy0yNC4yNiAyLjgtMjQuMjZ6bS0xMzMuNCAzMDcuMmMzLjktMTAuNSAxOS4xLTMxLjMgNDEuNi00OS44IDEuNC0xLjEgNC45LTQuNCA4LjEtNy40LTIzLjUgMzcuNi0zOS4zIDUyLjUtNDkuNyA1Ny4yem0zMTUuMi0xMTIuM2MtNi44LTYuNy0yMi0xMC4yLTQ1LTEwLjUtMTUuNi0uMi0zNC4zIDEuMi01NC4xIDMuOS04LjgtNS4xLTE3LjktMTAuNi0yNS4xLTE3LjMtMTkuMi0xOC0zNS4yLTQyLjktNDUuMi03MC4zLjYtMi42IDEuMi00LjggMS43LTcuMSAwIDAgMTAuOC02MS41IDcuOS04Mi4zLS40LTIuOS0uNi0zLjctMS40LTUuOWwtLjktMi41Yy0yLjktNi43Ni04LjctMTMuOTYtMTcuOC0xMy41N2wtNS4zLS4xN2gtLjFjLTEwLjEgMC0xOC40IDUuMTctMjAuNSAxMi44NC02LjYgMjQuMy4yIDYwLjUgMTIuNSAxMDcuNGwtMy4yIDcuN2MtOC44IDIxLjQtMTkuOCA0My0yOS41IDYybC0xLjMgMi41Yy0xMC4yIDIwLTE5LjUgMzctMjcuOSA1MS40bC04LjcgNC42Yy0uNi40LTE1LjUgOC4yLTE5IDEwLjMtMjkuNiAxNy43LTQ5LjI4IDM3LjgtNTIuNTQgNTMuOC0xLjA0IDUtLjI2IDExLjUgNS4wMSAxNC42bDguNCA0LjJjMy42MyAxLjggNy41MyAyLjcgMTEuNDMgMi43IDIxLjEgMCA0NS42LTI2LjIgNzkuMy04NS4xIDM5LTEyLjcgODMuNC0yMy4zIDEyMi4zLTI5LjEgMjkuNiAxNi43IDY2IDI4LjMgODkgMjguMyA0LjEgMCA3LjYtLjQgMTAuNS0xLjIgNC40LTEuMSA4LjEtMy42IDEwLjQtNy4xIDQuNC02LjcgNS40LTE1LjkgNC4xLTI1LjQtLjMtMi44LTIuNi02LjMtNS04Ljd6XCIgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gaWNvbkZpbGUoKSB7XG4gIHJldHVybiBoKFxuICAgIFwic3ZnXCIsXG4gICAgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBcImNsYXNzXCI6IFwiVXBweUljb25cIiwgd2lkdGg6IFwiNDRcIiwgaGVpZ2h0OiBcIjU4XCIsIHZpZXdCb3g6IFwiMCAwIDQ0IDU4XCIgfSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IFwiTTI3LjQzNy41MTdhMSAxIDAgMCAwLS4wOTQuMDNINC4yNUMyLjAzNy41NDguMjE3IDIuMzY4LjIxNyA0LjU4djQ4LjQwNWMwIDIuMjEyIDEuODIgNC4wMyA0LjAzIDQuMDNIMzkuMDNjMi4yMSAwIDQuMDMtMS44MTggNC4wMy00LjAzVjE1LjYxYTEgMSAwIDAgMC0uMDMtLjI4IDEgMSAwIDAgMCAwLS4wOTMgMSAxIDAgMCAwLS4wMy0uMDMyIDEgMSAwIDAgMCAwLS4wMyAxIDEgMCAwIDAtLjAzMi0uMDYzIDEgMSAwIDAgMC0uMDMtLjA2MyAxIDEgMCAwIDAtLjAzMiAwIDEgMSAwIDAgMC0uMDMtLjA2MyAxIDEgMCAwIDAtLjAzMi0uMDMgMSAxIDAgMCAwLS4wMy0uMDYzIDEgMSAwIDAgMC0uMDYzLS4wNjJsLTE0LjU5My0xNGExIDEgMCAwIDAtLjA2Mi0uMDYyQTEgMSAwIDAgMCAyOCAuNzA4YTEgMSAwIDAgMC0uMzc0LS4xNTcgMSAxIDAgMCAwLS4xNTYgMCAxIDEgMCAwIDAtLjAzLS4wM2wtLjAwMy0uMDAzek00LjI1IDIuNTQ3aDIyLjIxOHY5Ljk3YzAgMi4yMSAxLjgyIDQuMDMgNC4wMyA0LjAzaDEwLjU2NHYzNi40MzhhMi4wMiAyLjAyIDAgMCAxLTIuMDMyIDIuMDMySDQuMjVjLTEuMTMgMC0yLjAzMi0uOS0yLjAzMi0yLjAzMlY0LjU4YzAtMS4xMy45MDItMi4wMzIgMi4wMy0yLjAzMnptMjQuMjE4IDEuMzQ1bDEwLjM3NSA5LjkzNy43NS43MThIMzAuNWMtMS4xMyAwLTIuMDMyLS45LTIuMDMyLTIuMDNWMy44OXpcIiB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBpY29uVGV4dCgpIHtcbiAgcmV0dXJuIGgoXG4gICAgXCJzdmdcIixcbiAgICB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIFwiY2xhc3NcIjogXCJVcHB5SWNvblwiLCB3aWR0aDogXCI2MlwiLCBoZWlnaHQ6IFwiNjJcIiwgdmlld0JveDogXCIwIDAgNjIgNjJcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LFxuICAgIGgoXCJwYXRoXCIsIHsgZDogXCJNNC4zMDkgNC4zMDloMjQuOTEydjUzLjM4MmgtNi41MjV2My41NTloMTYuNjA4di0zLjU1OWgtNi41MjVWNC4zMDloMjQuOTEydjEwLjY3NmgzLjU1OVYuNzVILjc1djE0LjIzNWgzLjU1OXpcIiwgXCJmaWxsLXJ1bGVcIjogXCJub256ZXJvXCIsIGZpbGw6IFwiIzAwMFwiIH0pXG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZWZhdWx0VGFiSWNvbjogZGVmYXVsdFRhYkljb24sXG4gIGljb25Db3B5OiBpY29uQ29weSxcbiAgaWNvblJlc3VtZTogaWNvblJlc3VtZSxcbiAgaWNvblBhdXNlOiBpY29uUGF1c2UsXG4gIGljb25SZXRyeTogaWNvblJldHJ5LFxuICBsb2NhbEljb246IGxvY2FsSWNvbixcbiAgY2hlY2tJY29uOiBjaGVja0ljb24sXG4gIGljb25BdWRpbzogaWNvbkF1ZGlvLFxuICBpY29uVmlkZW86IGljb25WaWRlbyxcbiAgaWNvblBERjogaWNvblBERixcbiAgaWNvbkZpbGU6IGljb25GaWxlLFxuICBpY29uVGV4dDogaWNvblRleHRcbn07IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdAdXBweS9jb3JlJyksXG4gICAgUGx1Z2luID0gX3JlcXVpcmUuUGx1Z2luO1xuXG52YXIgVHJhbnNsYXRvciA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9UcmFuc2xhdG9yJyk7XG52YXIgZHJhZ0Ryb3AgPSByZXF1aXJlKCdkcmFnLWRyb3AnKTtcbnZhciBEYXNoYm9hcmRVSSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9EYXNoYm9hcmQnKTtcbnZhciBTdGF0dXNCYXIgPSByZXF1aXJlKCdAdXBweS9zdGF0dXMtYmFyJyk7XG52YXIgSW5mb3JtZXIgPSByZXF1aXJlKCdAdXBweS9pbmZvcm1lcicpO1xudmFyIFRodW1ibmFpbEdlbmVyYXRvciA9IHJlcXVpcmUoJ0B1cHB5L3RodW1ibmFpbC1nZW5lcmF0b3InKTtcbnZhciBmaW5kQWxsRE9NRWxlbWVudHMgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvZmluZEFsbERPTUVsZW1lbnRzJyk7XG52YXIgdG9BcnJheSA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi90b0FycmF5Jyk7XG4vLyBjb25zdCBwcmV0dHlCeXRlcyA9IHJlcXVpcmUoJ3ByZXR0aWVyLWJ5dGVzJylcbnZhciBSZXNpemVPYnNlcnZlciA9IHJlcXVpcmUoJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCcpLmRlZmF1bHQgfHwgcmVxdWlyZSgncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJyk7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaWNvbnMnKSxcbiAgICBkZWZhdWx0VGFiSWNvbiA9IF9yZXF1aXJlMi5kZWZhdWx0VGFiSWNvbjtcblxuLy8gU29tZSBjb2RlIGZvciBtYW5hZ2luZyBmb2N1cyB3YXMgYWRvcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9naG9zaC9taWNyb21vZGFsXG4vLyBNSVQgbGljZW5jZSwgaHR0cHM6Ly9naXRodWIuY29tL2dob3NoL21pY3JvbW9kYWwvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuLy8gQ29weXJpZ2h0IChjKSAyMDE3IEluZHJhc2hpc2ggR2hvc2hcblxuXG52YXIgRk9DVVNBQkxFX0VMRU1FTlRTID0gWydhW2hyZWZdOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtpbmVydF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdhcmVhW2hyZWZdOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtpbmVydF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFtpbmVydF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbaW5lcnRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbaW5lcnRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2luZXJ0XSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2lmcmFtZTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaW5lcnRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnb2JqZWN0Om5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtpbmVydF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdlbWJlZDpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaW5lcnRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnW2NvbnRlbnRlZGl0YWJsZV06bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2luZXJ0XSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2luZXJ0XSk6bm90KFthcmlhLWhpZGRlbl0pJ107XG5cbnZhciBUQUJfS0VZID0gOTtcbnZhciBFU0NfS0VZID0gMjc7XG5cbi8qKlxuICogRGFzaGJvYXJkIFVJIHdpdGggcHJldmlld3MsIG1ldGFkYXRhIGVkaXRpbmcsIHRhYnMgZm9yIHZhcmlvdXMgc2VydmljZXMgYW5kIG1vcmVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX1BsdWdpbikge1xuICBfaW5oZXJpdHMoRGFzaGJvYXJkLCBfUGx1Z2luKTtcblxuICBmdW5jdGlvbiBEYXNoYm9hcmQodXBweSwgb3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXNoYm9hcmQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1BsdWdpbi5jYWxsKHRoaXMsIHVwcHksIG9wdHMpKTtcblxuICAgIF90aGlzLmlkID0gX3RoaXMub3B0cy5pZCB8fCAnRGFzaGJvYXJkJztcbiAgICBfdGhpcy50aXRsZSA9ICdEYXNoYm9hcmQnO1xuICAgIF90aGlzLnR5cGUgPSAnb3JjaGVzdHJhdG9yJztcbiAgICBfdGhpcy5tb2RhbE5hbWUgPSAndXBweS1EYXNoYm9hcmQnO1xuXG4gICAgdmFyIGRlZmF1bHRMb2NhbGUgPSB7XG4gICAgICBzdHJpbmdzOiB7XG4gICAgICAgIHNlbGVjdFRvVXBsb2FkOiAnU2VsZWN0IGZpbGVzIHRvIHVwbG9hZCcsXG4gICAgICAgIGNsb3NlTW9kYWw6ICdDbG9zZSBNb2RhbCcsXG4gICAgICAgIHVwbG9hZDogJ1VwbG9hZCcsXG4gICAgICAgIGltcG9ydEZyb206ICdJbXBvcnQgZnJvbSAle25hbWV9JyxcbiAgICAgICAgYWRkaW5nTW9yZUZpbGVzOiAnQWRkaW5nIG1vcmUgZmlsZXMnLFxuICAgICAgICBhZGRNb3JlRmlsZXM6ICdBZGQgbW9yZSBmaWxlcycsXG4gICAgICAgIGRhc2hib2FyZFdpbmRvd1RpdGxlOiAnVXBweSBEYXNoYm9hcmQgV2luZG93IChQcmVzcyBlc2NhcGUgdG8gY2xvc2UpJyxcbiAgICAgICAgZGFzaGJvYXJkVGl0bGU6ICdVcHB5IERhc2hib2FyZCcsXG4gICAgICAgIGNvcHlMaW5rVG9DbGlwYm9hcmRTdWNjZXNzOiAnTGluayBjb3BpZWQgdG8gY2xpcGJvYXJkJyxcbiAgICAgICAgY29weUxpbmtUb0NsaXBib2FyZEZhbGxiYWNrOiAnQ29weSB0aGUgVVJMIGJlbG93JyxcbiAgICAgICAgY29weUxpbms6ICdDb3B5IGxpbmsnLFxuICAgICAgICBmaWxlU291cmNlOiAnRmlsZSBzb3VyY2U6ICV7bmFtZX0nLFxuICAgICAgICBkb25lOiAnRG9uZScsXG4gICAgICAgIGJhY2s6ICdCYWNrJyxcbiAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICByZW1vdmVGaWxlOiAnUmVtb3ZlIGZpbGUnLFxuICAgICAgICBlZGl0RmlsZTogJ0VkaXQgZmlsZScsXG4gICAgICAgIGVkaXRpbmc6ICdFZGl0aW5nICV7ZmlsZX0nLFxuICAgICAgICBlZGl0OiAnRWRpdCcsXG4gICAgICAgIGZpbmlzaEVkaXRpbmdGaWxlOiAnRmluaXNoIGVkaXRpbmcgZmlsZScsXG4gICAgICAgIHNhdmVDaGFuZ2VzOiAnU2F2ZSBjaGFuZ2VzJyxcbiAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgbG9jYWxEaXNrOiAnTG9jYWwgRGlzaycsXG4gICAgICAgIG15RGV2aWNlOiAnTXkgRGV2aWNlJyxcbiAgICAgICAgZHJvcFBhc3RlSW1wb3J0OiAnRHJvcCBmaWxlcyBoZXJlLCBwYXN0ZSwgJXticm93c2V9IG9yIGltcG9ydCBmcm9tJyxcbiAgICAgICAgZHJvcFBhc3RlOiAnRHJvcCBmaWxlcyBoZXJlLCBwYXN0ZSBvciAle2Jyb3dzZX0nLFxuICAgICAgICBicm93c2U6ICdicm93c2UnLFxuICAgICAgICBmaWxlUHJvZ3Jlc3M6ICdGaWxlIHByb2dyZXNzOiB1cGxvYWQgc3BlZWQgYW5kIEVUQScsXG4gICAgICAgIG51bWJlck9mU2VsZWN0ZWRGaWxlczogJ051bWJlciBvZiBzZWxlY3RlZCBmaWxlcycsXG4gICAgICAgIHVwbG9hZEFsbE5ld0ZpbGVzOiAnVXBsb2FkIGFsbCBuZXcgZmlsZXMnLFxuICAgICAgICBlbXB0eUZvbGRlckFkZGVkOiAnTm8gZmlsZXMgd2VyZSBhZGRlZCBmcm9tIGVtcHR5IGZvbGRlcicsXG4gICAgICAgIHVwbG9hZENvbXBsZXRlOiAnVXBsb2FkIGNvbXBsZXRlJyxcbiAgICAgICAgdXBsb2FkUGF1c2VkOiAnVXBsb2FkIHBhdXNlZCcsXG4gICAgICAgIHJlc3VtZVVwbG9hZDogJ1Jlc3VtZSB1cGxvYWQnLFxuICAgICAgICBwYXVzZVVwbG9hZDogJ1BhdXNlIHVwbG9hZCcsXG4gICAgICAgIHJldHJ5VXBsb2FkOiAnUmV0cnkgdXBsb2FkJyxcbiAgICAgICAgY2FuY2VsVXBsb2FkOiAnQ2FuY2VsIHVwbG9hZCcsXG4gICAgICAgIHhGaWxlc1NlbGVjdGVkOiB7XG4gICAgICAgICAgMDogJyV7c21hcnRfY291bnR9IGZpbGUgc2VsZWN0ZWQnLFxuICAgICAgICAgIDE6ICcle3NtYXJ0X2NvdW50fSBmaWxlcyBzZWxlY3RlZCdcbiAgICAgICAgfSxcbiAgICAgICAgdXBsb2FkWEZpbGVzOiB7XG4gICAgICAgICAgMDogJ1VwbG9hZCAle3NtYXJ0X2NvdW50fSBmaWxlJyxcbiAgICAgICAgICAxOiAnVXBsb2FkICV7c21hcnRfY291bnR9IGZpbGVzJ1xuICAgICAgICB9LFxuICAgICAgICB1cGxvYWRpbmdYRmlsZXM6IHtcbiAgICAgICAgICAwOiAnVXBsb2FkaW5nICV7c21hcnRfY291bnR9IGZpbGUnLFxuICAgICAgICAgIDE6ICdVcGxvYWRpbmcgJXtzbWFydF9jb3VudH0gZmlsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHByb2Nlc3NpbmdYRmlsZXM6IHtcbiAgICAgICAgICAwOiAnUHJvY2Vzc2luZyAle3NtYXJ0X2NvdW50fSBmaWxlJyxcbiAgICAgICAgICAxOiAnUHJvY2Vzc2luZyAle3NtYXJ0X2NvdW50fSBmaWxlcydcbiAgICAgICAgfSxcbiAgICAgICAgdXBsb2FkWE5ld0ZpbGVzOiB7XG4gICAgICAgICAgMDogJ1VwbG9hZCArJXtzbWFydF9jb3VudH0gZmlsZScsXG4gICAgICAgICAgMTogJ1VwbG9hZCArJXtzbWFydF9jb3VudH0gZmlsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIGZvbGRlckFkZGVkOiB7XG4gICAgICAgICAgMDogJ0FkZGVkICV7c21hcnRfY291bnR9IGZpbGUgZnJvbSAle2ZvbGRlcn0nLFxuICAgICAgICAgIDE6ICdBZGRlZCAle3NtYXJ0X2NvdW50fSBmaWxlcyBmcm9tICV7Zm9sZGVyfSdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gICAgfTt2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICB0YXJnZXQ6ICdib2R5JyxcbiAgICAgIG1ldGFGaWVsZHM6IFtdLFxuICAgICAgdHJpZ2dlcjogJyN1cHB5LXNlbGVjdC1maWxlcycsXG4gICAgICBpbmxpbmU6IGZhbHNlLFxuICAgICAgd2lkdGg6IDc1MCxcbiAgICAgIGhlaWdodDogNTUwLFxuICAgICAgdGh1bWJuYWlsV2lkdGg6IDI4MCxcbiAgICAgIGRlZmF1bHRUYWJJY29uOiBkZWZhdWx0VGFiSWNvbixcbiAgICAgIHNob3dMaW5rVG9GaWxlVXBsb2FkUmVzdWx0OiB0cnVlLFxuICAgICAgc2hvd1Byb2dyZXNzRGV0YWlsczogZmFsc2UsXG4gICAgICBoaWRlVXBsb2FkQnV0dG9uOiBmYWxzZSxcbiAgICAgIGhpZGVSZXRyeUJ1dHRvbjogZmFsc2UsXG4gICAgICBoaWRlUGF1c2VSZXN1bWVDYW5jZWxCdXR0b25zOiBmYWxzZSxcbiAgICAgIGhpZGVQcm9ncmVzc0FmdGVyRmluaXNoOiBmYWxzZSxcbiAgICAgIG5vdGU6IG51bGwsXG4gICAgICBjbG9zZU1vZGFsT25DbGlja091dHNpZGU6IGZhbHNlLFxuICAgICAgY2xvc2VBZnRlckZpbmlzaDogZmFsc2UsXG4gICAgICBkaXNhYmxlU3RhdHVzQmFyOiBmYWxzZSxcbiAgICAgIGRpc2FibGVJbmZvcm1lcjogZmFsc2UsXG4gICAgICBkaXNhYmxlVGh1bWJuYWlsR2VuZXJhdG9yOiBmYWxzZSxcbiAgICAgIGRpc2FibGVQYWdlU2Nyb2xsV2hlbk1vZGFsT3BlbjogdHJ1ZSxcbiAgICAgIGFuaW1hdGVPcGVuQ2xvc2U6IHRydWUsXG4gICAgICBwcm91ZGx5RGlzcGxheVBvd2VyZWRCeVVwcHk6IHRydWUsXG4gICAgICBvblJlcXVlc3RDbG9zZU1vZGFsOiBmdW5jdGlvbiBvblJlcXVlc3RDbG9zZU1vZGFsKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgfSxcbiAgICAgIHNob3dTZWxlY3RlZEZpbGVzOiB0cnVlLFxuICAgICAgLy8gbG9jYWxlOiBkZWZhdWx0TG9jYWxlLFxuICAgICAgYnJvd3NlckJhY2tCdXR0b25DbG9zZTogZmFsc2VcblxuICAgICAgLy8gbWVyZ2UgZGVmYXVsdCBvcHRpb25zIHdpdGggdGhlIG9uZXMgc2V0IGJ5IHVzZXJcbiAgICB9O190aGlzLm9wdHMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdHMpO1xuXG4gICAgLy8gaTE4blxuICAgIF90aGlzLnRyYW5zbGF0b3IgPSBuZXcgVHJhbnNsYXRvcihbZGVmYXVsdExvY2FsZSwgX3RoaXMudXBweS5sb2NhbGUsIF90aGlzLm9wdHMubG9jYWxlXSk7XG4gICAgX3RoaXMuaTE4biA9IF90aGlzLnRyYW5zbGF0b3IudHJhbnNsYXRlLmJpbmQoX3RoaXMudHJhbnNsYXRvcik7XG4gICAgX3RoaXMuaTE4bkFycmF5ID0gX3RoaXMudHJhbnNsYXRvci50cmFuc2xhdGVBcnJheS5iaW5kKF90aGlzLnRyYW5zbGF0b3IpO1xuXG4gICAgX3RoaXMub3Blbk1vZGFsID0gX3RoaXMub3Blbk1vZGFsLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmNsb3NlTW9kYWwgPSBfdGhpcy5jbG9zZU1vZGFsLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnJlcXVlc3RDbG9zZU1vZGFsID0gX3RoaXMucmVxdWVzdENsb3NlTW9kYWwuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaXNNb2RhbE9wZW4gPSBfdGhpcy5pc01vZGFsT3Blbi5iaW5kKF90aGlzKTtcblxuICAgIF90aGlzLmFkZFRhcmdldCA9IF90aGlzLmFkZFRhcmdldC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5yZW1vdmVUYXJnZXQgPSBfdGhpcy5yZW1vdmVUYXJnZXQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGlkZUFsbFBhbmVscyA9IF90aGlzLmhpZGVBbGxQYW5lbHMuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuc2hvd1BhbmVsID0gX3RoaXMuc2hvd1BhbmVsLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmdldEZvY3VzYWJsZU5vZGVzID0gX3RoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSA9IF90aGlzLnNldEZvY3VzVG9GaXJzdE5vZGUuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlUG9wU3RhdGUgPSBfdGhpcy5oYW5kbGVQb3BTdGF0ZS5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5tYWludGFpbkZvY3VzID0gX3RoaXMubWFpbnRhaW5Gb2N1cy5iaW5kKF90aGlzKTtcblxuICAgIF90aGlzLmluaXRFdmVudHMgPSBfdGhpcy5pbml0RXZlbnRzLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBfdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUZpbGVBZGRlZCA9IF90aGlzLmhhbmRsZUZpbGVBZGRlZC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVDb21wbGV0ZSA9IF90aGlzLmhhbmRsZUNvbXBsZXRlLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSA9IF90aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy50b2dnbGVGaWxlQ2FyZCA9IF90aGlzLnRvZ2dsZUZpbGVDYXJkLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnRvZ2dsZUFkZEZpbGVzUGFuZWwgPSBfdGhpcy50b2dnbGVBZGRGaWxlc1BhbmVsLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZURyb3AgPSBfdGhpcy5oYW5kbGVEcm9wLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZVBhc3RlID0gX3RoaXMuaGFuZGxlUGFzdGUuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5yZW5kZXIgPSBfdGhpcy5yZW5kZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaW5zdGFsbCA9IF90aGlzLmluc3RhbGwuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5yZW1vdmVUYXJnZXQgPSBmdW5jdGlvbiByZW1vdmVUYXJnZXQocGx1Z2luKSB7XG4gICAgdmFyIHBsdWdpblN0YXRlID0gdGhpcy5nZXRQbHVnaW5TdGF0ZSgpO1xuICAgIC8vIGZpbHRlciBvdXQgdGhlIG9uZSB3ZSB3YW50IHRvIHJlbW92ZVxuICAgIHZhciBuZXdUYXJnZXRzID0gcGx1Z2luU3RhdGUudGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgcmV0dXJuIHRhcmdldC5pZCAhPT0gcGx1Z2luLmlkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRQbHVnaW5TdGF0ZSh7XG4gICAgICB0YXJnZXRzOiBuZXdUYXJnZXRzXG4gICAgfSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5hZGRUYXJnZXQgPSBmdW5jdGlvbiBhZGRUYXJnZXQocGx1Z2luKSB7XG4gICAgdmFyIGNhbGxlclBsdWdpbklkID0gcGx1Z2luLmlkIHx8IHBsdWdpbi5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIHZhciBjYWxsZXJQbHVnaW5OYW1lID0gcGx1Z2luLnRpdGxlIHx8IGNhbGxlclBsdWdpbklkO1xuICAgIHZhciBjYWxsZXJQbHVnaW5UeXBlID0gcGx1Z2luLnR5cGU7XG5cbiAgICBpZiAoY2FsbGVyUGx1Z2luVHlwZSAhPT0gJ2FjcXVpcmVyJyAmJiBjYWxsZXJQbHVnaW5UeXBlICE9PSAncHJvZ3Jlc3NpbmRpY2F0b3InICYmIGNhbGxlclBsdWdpblR5cGUgIT09ICdwcmVzZW50ZXInKSB7XG4gICAgICB2YXIgbXNnID0gJ0Rhc2hib2FyZDogTW9kYWwgY2FuIG9ubHkgYmUgdXNlZCBieSBwbHVnaW5zIG9mIHR5cGVzOiBhY3F1aXJlciwgcHJvZ3Jlc3NpbmRpY2F0b3IsIHByZXNlbnRlcic7XG4gICAgICB0aGlzLnVwcHkubG9nKG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICAgIGlkOiBjYWxsZXJQbHVnaW5JZCxcbiAgICAgIG5hbWU6IGNhbGxlclBsdWdpbk5hbWUsXG4gICAgICB0eXBlOiBjYWxsZXJQbHVnaW5UeXBlXG4gICAgfTtcblxuICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0UGx1Z2luU3RhdGUoKTtcbiAgICB2YXIgbmV3VGFyZ2V0cyA9IHN0YXRlLnRhcmdldHMuc2xpY2UoKTtcbiAgICBuZXdUYXJnZXRzLnB1c2godGFyZ2V0KTtcblxuICAgIHRoaXMuc2V0UGx1Z2luU3RhdGUoe1xuICAgICAgdGFyZ2V0czogbmV3VGFyZ2V0c1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5oaWRlQWxsUGFuZWxzID0gZnVuY3Rpb24gaGlkZUFsbFBhbmVscygpIHtcbiAgICB0aGlzLnNldFBsdWdpblN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhbmVsOiBmYWxzZSxcbiAgICAgIHNob3dBZGRGaWxlc1BhbmVsOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUuc2hvd1BhbmVsID0gZnVuY3Rpb24gc2hvd1BhbmVsKGlkKSB7XG4gICAgdmFyIF9nZXRQbHVnaW5TdGF0ZSA9IHRoaXMuZ2V0UGx1Z2luU3RhdGUoKSxcbiAgICAgICAgdGFyZ2V0cyA9IF9nZXRQbHVnaW5TdGF0ZS50YXJnZXRzO1xuXG4gICAgdmFyIGFjdGl2ZVBhbmVsID0gdGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgcmV0dXJuIHRhcmdldC50eXBlID09PSAnYWNxdWlyZXInICYmIHRhcmdldC5pZCA9PT0gaWQ7XG4gICAgfSlbMF07XG5cbiAgICB0aGlzLnNldFBsdWdpblN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhbmVsOiBhY3RpdmVQYW5lbFxuICAgIH0pO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUucmVxdWVzdENsb3NlTW9kYWwgPSBmdW5jdGlvbiByZXF1ZXN0Q2xvc2VNb2RhbCgpIHtcbiAgICBpZiAodGhpcy5vcHRzLm9uUmVxdWVzdENsb3NlTW9kYWwpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdHMub25SZXF1ZXN0Q2xvc2VNb2RhbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5nZXRGb2N1c2FibGVOb2RlcyA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZU5vZGVzKCkge1xuICAgIHZhciBub2RlcyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChGT0NVU0FCTEVfRUxFTUVOVFMpO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhub2RlcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBub2Rlc1trZXldO1xuICAgIH0pO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUuc2V0Rm9jdXNUb0ZpcnN0Tm9kZSA9IGZ1bmN0aW9uIHNldEZvY3VzVG9GaXJzdE5vZGUoKSB7XG4gICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGhpcy5nZXRGb2N1c2FibGVOb2RlcygpO1xuICAgIGlmIChmb2N1c2FibGVOb2Rlcy5sZW5ndGgpIGZvY3VzYWJsZU5vZGVzWzBdLmZvY3VzKCk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS51cGRhdGVCcm93c2VySGlzdG9yeSA9IGZ1bmN0aW9uIHVwZGF0ZUJyb3dzZXJIaXN0b3J5KCkge1xuICAgIC8vIEVuc3VyZSBoaXN0b3J5IHN0YXRlIGRvZXMgbm90IGFscmVhZHkgY29udGFpbiBvdXIgbW9kYWwgbmFtZSB0byBhdm9pZCBkb3VibGUtcHVzaGluZ1xuICAgIGlmICghaGlzdG9yeS5zdGF0ZSB8fCAhaGlzdG9yeS5zdGF0ZVt0aGlzLm1vZGFsTmFtZV0pIHtcbiAgICAgIHZhciBfaGlzdG9yeSRwdXNoU3RhdGU7XG5cbiAgICAgIC8vIFB1c2ggdG8gaGlzdG9yeSBzbyB0aGF0IHRoZSBwYWdlIGlzIG5vdCBsb3N0IG9uIGJyb3dzZXIgYmFjayBidXR0b24gcHJlc3NcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKChfaGlzdG9yeSRwdXNoU3RhdGUgPSB7fSwgX2hpc3RvcnkkcHVzaFN0YXRlW3RoaXMubW9kYWxOYW1lXSA9IHRydWUsIF9oaXN0b3J5JHB1c2hTdGF0ZSksICcnKTtcbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gZm9yIGJhY2sgYnV0dG9uIHByZXNzZXNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmhhbmRsZVBvcFN0YXRlLCBmYWxzZSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5oYW5kbGVQb3BTdGF0ZSA9IGZ1bmN0aW9uIGhhbmRsZVBvcFN0YXRlKGV2ZW50KSB7XG4gICAgLy8gQ2xvc2UgdGhlIG1vZGFsIGlmIHRoZSBoaXN0b3J5IHN0YXRlIG5vIGxvbmdlciBjb250YWlucyBvdXIgbW9kYWwgbmFtZVxuICAgIGlmICghZXZlbnQuc3RhdGUgfHwgIWV2ZW50LnN0YXRlW3RoaXMubW9kYWxOYW1lXSkge1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKHsgbWFudWFsQ2xvc2U6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIGJyb3dzZXIgYmFjayBidXR0b24gaXMgcHJlc3NlZCBhbmQgdXBweSBpcyBub3cgdGhlIGxhdGVzdCBlbnRyeSBpbiB0aGUgaGlzdG9yeSBidXQgdGhlIG1vZGFsIGlzIGNsb3NlZCwgZml4IHRoZSBoaXN0b3J5IGJ5IHJlbW92aW5nIHRoZSB1cHB5IGhpc3RvcnkgZW50cnlcbiAgICAvLyBUaGlzIG9jY3VycyB3aGVuIGFub3RoZXIgZW50cnkgaXMgYWRkZWQgaW50byB0aGUgaGlzdG9yeSBzdGF0ZSB3aGlsZSB0aGUgbW9kYWwgaXMgb3BlbiwgYW5kIHRoZW4gdGhlIG1vZGFsIGdldHMgbWFudWFsbHkgY2xvc2VkXG4gICAgLy8gU29sdmVzIFBSICM1NzUgKGh0dHBzOi8vZ2l0aHViLmNvbS90cmFuc2xvYWRpdC91cHB5L3B1bGwvNTc1KVxuICAgIGlmICghdGhpcy5pc01vZGFsT3BlbigpICYmIGV2ZW50LnN0YXRlICYmIGV2ZW50LnN0YXRlW3RoaXMubW9kYWxOYW1lXSkge1xuICAgICAgaGlzdG9yeS5nbygtMSk7XG4gICAgfVxuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUuc2V0Rm9jdXNUb0Jyb3dzZSA9IGZ1bmN0aW9uIHNldEZvY3VzVG9Ccm93c2UoKSB7XG4gICAgdmFyIGJyb3dzZUJ0biA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnVwcHktRGFzaGJvYXJkLWJyb3dzZScpO1xuICAgIGlmIChicm93c2VCdG4pIGJyb3dzZUJ0bi5mb2N1cygpO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUubWFpbnRhaW5Gb2N1cyA9IGZ1bmN0aW9uIG1haW50YWluRm9jdXMoZXZlbnQpIHtcbiAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7XG4gICAgdmFyIGZvY3VzZWRJdGVtSW5kZXggPSBmb2N1c2FibGVOb2Rlcy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgIGZvY3VzYWJsZU5vZGVzW2ZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICghZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUub3Blbk1vZGFsID0gZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgLy8gc2F2ZSBzY3JvbGwgcG9zaXRpb25cbiAgICB0aGlzLnNhdmVkU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAvLyBzYXZlIGFjdGl2ZSBlbGVtZW50LCBzbyB3ZSBjYW4gcmVzdG9yZSBmb2N1cyB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICAgIHRoaXMuc2F2ZWRBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLm9wdHMuZGlzYWJsZVBhZ2VTY3JvbGxXaGVuTW9kYWxPcGVuKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3VwcHktRGFzaGJvYXJkLWlzRml4ZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLmFuaW1hdGVPcGVuQ2xvc2UgJiYgdGhpcy5nZXRQbHVnaW5TdGF0ZSgpLmlzQ2xvc2luZykge1xuICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBfdGhpczIuc2V0UGx1Z2luU3RhdGUoe1xuICAgICAgICAgIGlzSGlkZGVuOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMyLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgIH07XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRQbHVnaW5TdGF0ZSh7XG4gICAgICAgIGlzSGlkZGVuOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5icm93c2VyQmFja0J1dHRvbkNsb3NlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUJyb3dzZXJIaXN0b3J5KCk7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIEVTQyBhbmQgVEFCIGtleXMgaW4gbW9kYWwgZGlhbG9nXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG5cbiAgICAvLyB0aGlzLnJlcmVuZGVyKHRoaXMudXBweS5nZXRTdGF0ZSgpKVxuICAgIHRoaXMuc2V0Rm9jdXNUb0Jyb3dzZSgpO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUuY2xvc2VNb2RhbCA9IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIF9vcHRzJG1hbnVhbENsb3NlID0gb3B0cy5tYW51YWxDbG9zZSxcbiAgICAgICAgbWFudWFsQ2xvc2UgPSBfb3B0cyRtYW51YWxDbG9zZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9vcHRzJG1hbnVhbENsb3NlO1xuXG5cbiAgICBpZiAodGhpcy5vcHRzLmRpc2FibGVQYWdlU2Nyb2xsV2hlbk1vZGFsT3Blbikge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd1cHB5LURhc2hib2FyZC1pc0ZpeGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5hbmltYXRlT3BlbkNsb3NlKSB7XG4gICAgICB0aGlzLnNldFBsdWdpblN0YXRlKHtcbiAgICAgICAgaXNDbG9zaW5nOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgX3RoaXMzLnNldFBsdWdpblN0YXRlKHtcbiAgICAgICAgICBpc0hpZGRlbjogdHJ1ZSxcbiAgICAgICAgICBpc0Nsb3Npbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpczMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFBsdWdpblN0YXRlKHtcbiAgICAgICAgaXNIaWRkZW46IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBFU0MgYW5kIFRBQiBrZXlzIGluIG1vZGFsIGRpYWxvZ1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuXG4gICAgdGhpcy5zYXZlZEFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblxuICAgIGlmIChtYW51YWxDbG9zZSkge1xuICAgICAgaWYgKHRoaXMub3B0cy5icm93c2VyQmFja0J1dHRvbkNsb3NlKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBsYXRlc3QgZW50cnkgaW4gdGhlIGhpc3Rvcnkgc3RhdGUgaXMgb3VyIG1vZGFsIG5hbWVcbiAgICAgICAgaWYgKGhpc3Rvcnkuc3RhdGUgJiYgaGlzdG9yeS5zdGF0ZVt0aGlzLm1vZGFsTmFtZV0pIHtcbiAgICAgICAgICAvLyBHbyBiYWNrIGluIGhpc3RvcnkgdG8gY2xlYXIgb3V0IHRoZSBlbnRyeSB3ZSBjcmVhdGVkICh1bHRpbWF0ZWx5IGNsb3NpbmcgdGhlIG1vZGFsKVxuICAgICAgICAgIGhpc3RvcnkuZ28oLTEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUuaXNNb2RhbE9wZW4gPSBmdW5jdGlvbiBpc01vZGFsT3BlbigpIHtcbiAgICByZXR1cm4gIXRoaXMuZ2V0UGx1Z2luU3RhdGUoKS5pc0hpZGRlbiB8fCBmYWxzZTtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgLy8gY2xvc2UgbW9kYWwgb24gZXNjIGtleSBwcmVzc1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NfS0VZKSB0aGlzLnJlcXVlc3RDbG9zZU1vZGFsKGV2ZW50KTtcbiAgICAvLyBtYWludGFpbkZvY3VzIG9uIHRhYiBrZXkgcHJlc3NcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gVEFCX0tFWSkgdGhpcy5tYWludGFpbkZvY3VzKGV2ZW50KTtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLmhhbmRsZUNsaWNrT3V0c2lkZSA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3V0c2lkZSgpIHtcbiAgICBpZiAodGhpcy5vcHRzLmNsb3NlTW9kYWxPbkNsaWNrT3V0c2lkZSkgdGhpcy5yZXF1ZXN0Q2xvc2VNb2RhbCgpO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUuaGFuZGxlUGFzdGUgPSBmdW5jdGlvbiBoYW5kbGVQYXN0ZShldikge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGZpbGVzID0gdG9BcnJheShldi5jbGlwYm9hcmREYXRhLml0ZW1zKTtcbiAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICBpZiAoZmlsZS5raW5kICE9PSAnZmlsZScpIHJldHVybjtcblxuICAgICAgdmFyIGJsb2IgPSBmaWxlLmdldEFzRmlsZSgpO1xuICAgICAgaWYgKCFibG9iKSB7XG4gICAgICAgIF90aGlzNC51cHB5LmxvZygnW0Rhc2hib2FyZF0gRmlsZSBwYXN0ZWQsIGJ1dCB0aGUgZmlsZSBibG9iIGlzIGVtcHR5Jyk7XG4gICAgICAgIF90aGlzNC51cHB5LmluZm8oJ0Vycm9yIHBhc3RpbmcgZmlsZScsICdlcnJvcicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpczQudXBweS5sb2coJ1tEYXNoYm9hcmRdIEZpbGUgcGFzdGVkJyk7XG4gICAgICB0cnkge1xuICAgICAgICBfdGhpczQudXBweS5hZGRGaWxlKHtcbiAgICAgICAgICBzb3VyY2U6IF90aGlzNC5pZCxcbiAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIGRhdGE6IGJsb2JcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gTm90aGluZywgcmVzdHJpY3Rpb24gZXJyb3JzIGhhbmRsZWQgaW4gQ29yZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUuaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShldikge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgZmlsZXMgPSB0b0FycmF5KGV2LnRhcmdldC5maWxlcyk7XG5cbiAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBfdGhpczUudXBweS5hZGRGaWxlKHtcbiAgICAgICAgICBzb3VyY2U6IF90aGlzNS5pZCxcbiAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIGRhdGE6IGZpbGVcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gTm90aGluZywgcmVzdHJpY3Rpb24gZXJyb3JzIGhhbmRsZWQgaW4gQ29yZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUuaW5pdEV2ZW50cyA9IGZ1bmN0aW9uIGluaXRFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAvLyBNb2RhbCBvcGVuIGJ1dHRvblxuICAgIHZhciBzaG93TW9kYWxUcmlnZ2VyID0gZmluZEFsbERPTUVsZW1lbnRzKHRoaXMub3B0cy50cmlnZ2VyKTtcbiAgICBpZiAoIXRoaXMub3B0cy5pbmxpbmUgJiYgc2hvd01vZGFsVHJpZ2dlcikge1xuICAgICAgc2hvd01vZGFsVHJpZ2dlci5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXM2Lm9wZW5Nb2RhbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0cy5pbmxpbmUgJiYgIXNob3dNb2RhbFRyaWdnZXIpIHtcbiAgICAgIHRoaXMudXBweS5sb2coJ0Rhc2hib2FyZCBtb2RhbCB0cmlnZ2VyIG5vdCBmb3VuZC4gTWFrZSBzdXJlIGB0cmlnZ2VyYCBpcyBzZXQgaW4gRGFzaGJvYXJkIG9wdGlvbnMgdW5sZXNzIHlvdSBhcmUgcGxhbm5pbmcgdG8gY2FsbCBvcGVuTW9kYWwoKSBtZXRob2QgeW91cnNlbGYnKTtcbiAgICB9XG5cbiAgICAvLyBEcmFnIERyb3BcbiAgICB0aGlzLnJlbW92ZURyYWdEcm9wTGlzdGVuZXIgPSBkcmFnRHJvcCh0aGlzLmVsLCBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgIF90aGlzNi5oYW5kbGVEcm9wKGZpbGVzKTtcbiAgICB9KTtcblxuICAgIC8vIFdhdGNoIGZvciBEYXNoYm9hcmQgY29udGFpbmVyIChgLnVwcHktRGFzaGJvYXJkLWlubmVyYCkgcmVzaXplXG4gICAgLy8gYW5kIHVwZGF0ZSBjb250YWluZXJXaWR0aC9jb250YWluZXJIZWlnaHQgaW4gcGx1Z2luIHN0YXRlIGFjY29yZGluZ2x5XG4gICAgdGhpcy5ybyA9IG5ldyBSZXNpemVPYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcywgb2JzZXJ2ZXIpIHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGVudHJpZXMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVudHJ5ID0gX3JlZjtcbiAgICAgICAgdmFyIF9lbnRyeSRjb250ZW50UmVjdCA9IGVudHJ5LmNvbnRlbnRSZWN0LFxuICAgICAgICAgICAgd2lkdGggPSBfZW50cnkkY29udGVudFJlY3Qud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQgPSBfZW50cnkkY29udGVudFJlY3QuaGVpZ2h0O1xuXG5cbiAgICAgICAgX3RoaXM2LnVwcHkubG9nKCdbRGFzaGJvYXJkXSByZXNpemVkOiAnICsgd2lkdGggKyAnIC8gJyArIGhlaWdodCk7XG5cbiAgICAgICAgX3RoaXM2LnNldFBsdWdpblN0YXRlKHtcbiAgICAgICAgICBjb250YWluZXJXaWR0aDogd2lkdGgsXG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5yby5vYnNlcnZlKHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnVwcHktRGFzaGJvYXJkLWlubmVyJykpO1xuXG4gICAgdGhpcy51cHB5Lm9uKCdwbHVnaW4tcmVtb3ZlJywgdGhpcy5yZW1vdmVUYXJnZXQpO1xuICAgIHRoaXMudXBweS5vbignZmlsZS1hZGRlZCcsIHRoaXMuaGFuZGxlRmlsZUFkZGVkKTtcbiAgICB0aGlzLnVwcHkub24oJ2NvbXBsZXRlJywgdGhpcy5oYW5kbGVDb21wbGV0ZSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5oYW5kbGVGaWxlQWRkZWQgPSBmdW5jdGlvbiBoYW5kbGVGaWxlQWRkZWQoKSB7XG4gICAgdGhpcy5oaWRlQWxsUGFuZWxzKCk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5oYW5kbGVDb21wbGV0ZSA9IGZ1bmN0aW9uIGhhbmRsZUNvbXBsZXRlKF9yZWYyKSB7XG4gICAgdmFyIGZhaWxlZCA9IF9yZWYyLmZhaWxlZCxcbiAgICAgICAgdXBsb2FkSUQgPSBfcmVmMi51cGxvYWRJRDtcblxuICAgIGlmICh0aGlzLm9wdHMuY2xvc2VBZnRlckZpbmlzaCAmJiBmYWlsZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBBbGwgdXBsb2FkcyBhcmUgZG9uZVxuICAgICAgdGhpcy5yZXF1ZXN0Q2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLnJlbW92ZUV2ZW50cyA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50cygpIHtcbiAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgIHZhciBzaG93TW9kYWxUcmlnZ2VyID0gZmluZEFsbERPTUVsZW1lbnRzKHRoaXMub3B0cy50cmlnZ2VyKTtcbiAgICBpZiAoIXRoaXMub3B0cy5pbmxpbmUgJiYgc2hvd01vZGFsVHJpZ2dlcikge1xuICAgICAgc2hvd01vZGFsVHJpZ2dlci5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXM3Lm9wZW5Nb2RhbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnJvLnVub2JzZXJ2ZSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy51cHB5LURhc2hib2FyZC1pbm5lcicpKTtcblxuICAgIHRoaXMucmVtb3ZlRHJhZ0Ryb3BMaXN0ZW5lcigpO1xuICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnRocm90dGxlZFVwZGF0ZURhc2hib2FyZEVsV2lkdGgpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5oYW5kbGVQb3BTdGF0ZSwgZmFsc2UpO1xuICAgIHRoaXMudXBweS5vZmYoJ3BsdWdpbi1yZW1vdmUnLCB0aGlzLnJlbW92ZVRhcmdldCk7XG4gICAgdGhpcy51cHB5Lm9mZignZmlsZS1hZGRlZCcsIHRoaXMuaGFuZGxlRmlsZUFkZGVkKTtcbiAgICB0aGlzLnVwcHkub2ZmKCdjb21wbGV0ZScsIHRoaXMuaGFuZGxlQ29tcGxldGUpO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUudG9nZ2xlRmlsZUNhcmQgPSBmdW5jdGlvbiB0b2dnbGVGaWxlQ2FyZChmaWxlSWQpIHtcbiAgICB0aGlzLnNldFBsdWdpblN0YXRlKHtcbiAgICAgIGZpbGVDYXJkRm9yOiBmaWxlSWQgfHwgZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLnRvZ2dsZUFkZEZpbGVzUGFuZWwgPSBmdW5jdGlvbiB0b2dnbGVBZGRGaWxlc1BhbmVsKHNob3cpIHtcbiAgICB0aGlzLnNldFBsdWdpblN0YXRlKHtcbiAgICAgIHNob3dBZGRGaWxlc1BhbmVsOiBzaG93XG4gICAgfSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5oYW5kbGVEcm9wID0gZnVuY3Rpb24gaGFuZGxlRHJvcChmaWxlcykge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgdGhpcy51cHB5LmxvZygnW0Rhc2hib2FyZF0gRmlsZXMgd2VyZSBkcm9wcGVkJyk7XG5cbiAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBfdGhpczgudXBweS5hZGRGaWxlKHtcbiAgICAgICAgICBzb3VyY2U6IF90aGlzOC5pZCxcbiAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIGRhdGE6IGZpbGVcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gTm90aGluZywgcmVzdHJpY3Rpb24gZXJyb3JzIGhhbmRsZWQgaW4gQ29yZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHN0YXRlKSB7XG4gICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICB2YXIgcGx1Z2luU3RhdGUgPSB0aGlzLmdldFBsdWdpblN0YXRlKCk7XG4gICAgdmFyIGZpbGVzID0gc3RhdGUuZmlsZXMsXG4gICAgICAgIGNhcGFiaWxpdGllcyA9IHN0YXRlLmNhcGFiaWxpdGllcyxcbiAgICAgICAgYWxsb3dOZXdVcGxvYWQgPSBzdGF0ZS5hbGxvd05ld1VwbG9hZDtcblxuICAgIC8vIFRPRE86IG1vdmUgdGhpcyB0byBDb3JlLCB0byBzaGFyZSBiZXR3ZWVuIFN0YXR1cyBCYXIgYW5kIERhc2hib2FyZFxuICAgIC8vIChhbmQgYW55IG90aGVyIHBsdWdpbiB0aGF0IG1pZ2h0IG5lZWQgaXQsIHRvbylcblxuICAgIHZhciBuZXdGaWxlcyA9IE9iamVjdC5rZXlzKGZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiAhZmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkU3RhcnRlZDtcbiAgICB9KTtcblxuICAgIHZhciB1cGxvYWRTdGFydGVkRmlsZXMgPSBPYmplY3Qua2V5cyhmaWxlcykuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gZmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkU3RhcnRlZDtcbiAgICB9KTtcblxuICAgIHZhciBwYXVzZWRGaWxlcyA9IE9iamVjdC5rZXlzKGZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlc1tmaWxlXS5pc1BhdXNlZDtcbiAgICB9KTtcblxuICAgIHZhciBjb21wbGV0ZUZpbGVzID0gT2JqZWN0LmtleXMoZmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuIGZpbGVzW2ZpbGVdLnByb2dyZXNzLnVwbG9hZENvbXBsZXRlO1xuICAgIH0pO1xuXG4gICAgdmFyIGVycm9yZWRGaWxlcyA9IE9iamVjdC5rZXlzKGZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlc1tmaWxlXS5lcnJvcjtcbiAgICB9KTtcblxuICAgIHZhciBpblByb2dyZXNzRmlsZXMgPSBPYmplY3Qua2V5cyhmaWxlcykuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gIWZpbGVzW2ZpbGVdLnByb2dyZXNzLnVwbG9hZENvbXBsZXRlICYmIGZpbGVzW2ZpbGVdLnByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQ7XG4gICAgfSk7XG5cbiAgICB2YXIgaW5Qcm9ncmVzc05vdFBhdXNlZEZpbGVzID0gaW5Qcm9ncmVzc0ZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuICFmaWxlc1tmaWxlXS5pc1BhdXNlZDtcbiAgICB9KTtcblxuICAgIHZhciBwcm9jZXNzaW5nRmlsZXMgPSBPYmplY3Qua2V5cyhmaWxlcykuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gZmlsZXNbZmlsZV0ucHJvZ3Jlc3MucHJlcHJvY2VzcyB8fCBmaWxlc1tmaWxlXS5wcm9ncmVzcy5wb3N0cHJvY2VzcztcbiAgICB9KTtcblxuICAgIHZhciBpc1VwbG9hZFN0YXJ0ZWQgPSB1cGxvYWRTdGFydGVkRmlsZXMubGVuZ3RoID4gMDtcblxuICAgIHZhciBpc0FsbENvbXBsZXRlID0gc3RhdGUudG90YWxQcm9ncmVzcyA9PT0gMTAwICYmIGNvbXBsZXRlRmlsZXMubGVuZ3RoID09PSBPYmplY3Qua2V5cyhmaWxlcykubGVuZ3RoICYmIHByb2Nlc3NpbmdGaWxlcy5sZW5ndGggPT09IDA7XG5cbiAgICB2YXIgaXNBbGxFcnJvcmVkID0gaXNVcGxvYWRTdGFydGVkICYmIGVycm9yZWRGaWxlcy5sZW5ndGggPT09IHVwbG9hZFN0YXJ0ZWRGaWxlcy5sZW5ndGg7XG5cbiAgICB2YXIgaXNBbGxQYXVzZWQgPSBpblByb2dyZXNzRmlsZXMubGVuZ3RoICE9PSAwICYmIHBhdXNlZEZpbGVzLmxlbmd0aCA9PT0gaW5Qcm9ncmVzc0ZpbGVzLmxlbmd0aDtcbiAgICAvLyBjb25zdCBpc0FsbFBhdXNlZCA9IGluUHJvZ3Jlc3NOb3RQYXVzZWRGaWxlcy5sZW5ndGggPT09IDAgJiZcbiAgICAvLyAgICFpc0FsbENvbXBsZXRlICYmXG4gICAgLy8gICAhaXNBbGxFcnJvcmVkICYmXG4gICAgLy8gICB1cGxvYWRTdGFydGVkRmlsZXMubGVuZ3RoID4gMFxuXG4gICAgLy8gbGV0IGluUHJvZ3Jlc3NOb3RQYXVzZWRGaWxlc0FycmF5ID0gW11cbiAgICAvLyBpblByb2dyZXNzTm90UGF1c2VkRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgIC8vICAgaW5Qcm9ncmVzc05vdFBhdXNlZEZpbGVzQXJyYXkucHVzaChmaWxlc1tmaWxlXSlcbiAgICAvLyB9KVxuXG4gICAgLy8gbGV0IHRvdGFsU2l6ZSA9IDBcbiAgICAvLyBsZXQgdG90YWxVcGxvYWRlZFNpemUgPSAwXG4gICAgLy8gaW5Qcm9ncmVzc05vdFBhdXNlZEZpbGVzQXJyYXkuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgIC8vICAgdG90YWxTaXplID0gdG90YWxTaXplICsgKGZpbGUucHJvZ3Jlc3MuYnl0ZXNUb3RhbCB8fCAwKVxuICAgIC8vICAgdG90YWxVcGxvYWRlZFNpemUgPSB0b3RhbFVwbG9hZGVkU2l6ZSArIChmaWxlLnByb2dyZXNzLmJ5dGVzVXBsb2FkZWQgfHwgMClcbiAgICAvLyB9KVxuICAgIC8vIHRvdGFsU2l6ZSA9IHByZXR0eUJ5dGVzKHRvdGFsU2l6ZSlcbiAgICAvLyB0b3RhbFVwbG9hZGVkU2l6ZSA9IHByZXR0eUJ5dGVzKHRvdGFsVXBsb2FkZWRTaXplKVxuXG4gICAgdmFyIGF0dGFjaFJlbmRlckZ1bmN0aW9uVG9UYXJnZXQgPSBmdW5jdGlvbiBhdHRhY2hSZW5kZXJGdW5jdGlvblRvVGFyZ2V0KHRhcmdldCkge1xuICAgICAgdmFyIHBsdWdpbiA9IF90aGlzOS51cHB5LmdldFBsdWdpbih0YXJnZXQuaWQpO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0YXJnZXQsIHtcbiAgICAgICAgaWNvbjogcGx1Z2luLmljb24gfHwgX3RoaXM5Lm9wdHMuZGVmYXVsdFRhYkljb24sXG4gICAgICAgIHJlbmRlcjogcGx1Z2luLnJlbmRlclxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBpc1N1cHBvcnRlZCA9IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKHRhcmdldCkge1xuICAgICAgdmFyIHBsdWdpbiA9IF90aGlzOS51cHB5LmdldFBsdWdpbih0YXJnZXQuaWQpO1xuICAgICAgLy8gSWYgdGhlIHBsdWdpbiBkb2VzIG5vdCBwcm92aWRlIGEgYHN1cHBvcnRlZGAgY2hlY2ssIGFzc3VtZSB0aGUgcGx1Z2luIHdvcmtzIGV2ZXJ5d2hlcmUuXG4gICAgICBpZiAodHlwZW9mIHBsdWdpbi5pc1N1cHBvcnRlZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwbHVnaW4uaXNTdXBwb3J0ZWQoKTtcbiAgICB9O1xuXG4gICAgdmFyIGFjcXVpcmVycyA9IHBsdWdpblN0YXRlLnRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHJldHVybiB0YXJnZXQudHlwZSA9PT0gJ2FjcXVpcmVyJyAmJiBpc1N1cHBvcnRlZCh0YXJnZXQpO1xuICAgIH0pLm1hcChhdHRhY2hSZW5kZXJGdW5jdGlvblRvVGFyZ2V0KTtcblxuICAgIHZhciBwcm9ncmVzc2luZGljYXRvcnMgPSBwbHVnaW5TdGF0ZS50YXJnZXRzLmZpbHRlcihmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnR5cGUgPT09ICdwcm9ncmVzc2luZGljYXRvcic7XG4gICAgfSkubWFwKGF0dGFjaFJlbmRlckZ1bmN0aW9uVG9UYXJnZXQpO1xuXG4gICAgdmFyIHN0YXJ0VXBsb2FkID0gZnVuY3Rpb24gc3RhcnRVcGxvYWQoZXYpIHtcbiAgICAgIF90aGlzOS51cHB5LnVwbG9hZCgpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgLy8gTG9nIGVycm9yLlxuICAgICAgICBfdGhpczkudXBweS5sb2coZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGNhbmNlbFVwbG9hZCA9IGZ1bmN0aW9uIGNhbmNlbFVwbG9hZChmaWxlSUQpIHtcbiAgICAgIF90aGlzOS51cHB5LnJlbW92ZUZpbGUoZmlsZUlEKTtcbiAgICB9O1xuXG4gICAgdmFyIHNhdmVGaWxlQ2FyZCA9IGZ1bmN0aW9uIHNhdmVGaWxlQ2FyZChtZXRhLCBmaWxlSUQpIHtcbiAgICAgIF90aGlzOS51cHB5LnNldEZpbGVNZXRhKGZpbGVJRCwgbWV0YSk7XG4gICAgICBfdGhpczkudG9nZ2xlRmlsZUNhcmQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERhc2hib2FyZFVJKHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIG1vZGFsOiBwbHVnaW5TdGF0ZSxcbiAgICAgIGZpbGVzOiBmaWxlcyxcbiAgICAgIG5ld0ZpbGVzOiBuZXdGaWxlcyxcbiAgICAgIHVwbG9hZFN0YXJ0ZWRGaWxlczogdXBsb2FkU3RhcnRlZEZpbGVzLFxuICAgICAgY29tcGxldGVGaWxlczogY29tcGxldGVGaWxlcyxcbiAgICAgIGVycm9yZWRGaWxlczogZXJyb3JlZEZpbGVzLFxuICAgICAgaW5Qcm9ncmVzc0ZpbGVzOiBpblByb2dyZXNzRmlsZXMsXG4gICAgICBpblByb2dyZXNzTm90UGF1c2VkRmlsZXM6IGluUHJvZ3Jlc3NOb3RQYXVzZWRGaWxlcyxcbiAgICAgIHByb2Nlc3NpbmdGaWxlczogcHJvY2Vzc2luZ0ZpbGVzLFxuICAgICAgaXNVcGxvYWRTdGFydGVkOiBpc1VwbG9hZFN0YXJ0ZWQsXG4gICAgICBpc0FsbENvbXBsZXRlOiBpc0FsbENvbXBsZXRlLFxuICAgICAgaXNBbGxFcnJvcmVkOiBpc0FsbEVycm9yZWQsXG4gICAgICBpc0FsbFBhdXNlZDogaXNBbGxQYXVzZWQsXG4gICAgICB0b3RhbEZpbGVDb3VudDogT2JqZWN0LmtleXMoZmlsZXMpLmxlbmd0aCxcbiAgICAgIHRvdGFsUHJvZ3Jlc3M6IHN0YXRlLnRvdGFsUHJvZ3Jlc3MsXG4gICAgICBhbGxvd05ld1VwbG9hZDogYWxsb3dOZXdVcGxvYWQsXG4gICAgICBhY3F1aXJlcnM6IGFjcXVpcmVycyxcbiAgICAgIGFjdGl2ZVBhbmVsOiBwbHVnaW5TdGF0ZS5hY3RpdmVQYW5lbCxcbiAgICAgIGFuaW1hdGVPcGVuQ2xvc2U6IHRoaXMub3B0cy5hbmltYXRlT3BlbkNsb3NlLFxuICAgICAgaXNDbG9zaW5nOiBwbHVnaW5TdGF0ZS5pc0Nsb3NpbmcsXG4gICAgICBnZXRQbHVnaW46IHRoaXMudXBweS5nZXRQbHVnaW4sXG4gICAgICBwcm9ncmVzc2luZGljYXRvcnM6IHByb2dyZXNzaW5kaWNhdG9ycyxcbiAgICAgIGF1dG9Qcm9jZWVkOiB0aGlzLnVwcHkub3B0cy5hdXRvUHJvY2VlZCxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgY2xvc2VNb2RhbDogdGhpcy5yZXF1ZXN0Q2xvc2VNb2RhbCxcbiAgICAgIGhhbmRsZUNsaWNrT3V0c2lkZTogdGhpcy5oYW5kbGVDbGlja091dHNpZGUsXG4gICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgIGhhbmRsZVBhc3RlOiB0aGlzLmhhbmRsZVBhc3RlLFxuICAgICAgaW5saW5lOiB0aGlzLm9wdHMuaW5saW5lLFxuICAgICAgc2hvd1BhbmVsOiB0aGlzLnNob3dQYW5lbCxcbiAgICAgIGhpZGVBbGxQYW5lbHM6IHRoaXMuaGlkZUFsbFBhbmVscyxcbiAgICAgIGxvZzogdGhpcy51cHB5LmxvZyxcbiAgICAgIGkxOG46IHRoaXMuaTE4bixcbiAgICAgIGkxOG5BcnJheTogdGhpcy5pMThuQXJyYXksXG4gICAgICBhZGRGaWxlOiB0aGlzLnVwcHkuYWRkRmlsZSxcbiAgICAgIHJlbW92ZUZpbGU6IHRoaXMudXBweS5yZW1vdmVGaWxlLFxuICAgICAgaW5mbzogdGhpcy51cHB5LmluZm8sXG4gICAgICBub3RlOiB0aGlzLm9wdHMubm90ZSxcbiAgICAgIG1ldGFGaWVsZHM6IHBsdWdpblN0YXRlLm1ldGFGaWVsZHMsXG4gICAgICByZXN1bWFibGVVcGxvYWRzOiBjYXBhYmlsaXRpZXMucmVzdW1hYmxlVXBsb2FkcyB8fCBmYWxzZSxcbiAgICAgIGJ1bmRsZWQ6IGNhcGFiaWxpdGllcy5idW5kbGVkIHx8IGZhbHNlLFxuICAgICAgc3RhcnRVcGxvYWQ6IHN0YXJ0VXBsb2FkLFxuICAgICAgcGF1c2VVcGxvYWQ6IHRoaXMudXBweS5wYXVzZVJlc3VtZSxcbiAgICAgIHJldHJ5VXBsb2FkOiB0aGlzLnVwcHkucmV0cnlVcGxvYWQsXG4gICAgICBjYW5jZWxVcGxvYWQ6IGNhbmNlbFVwbG9hZCxcbiAgICAgIGNhbmNlbEFsbDogdGhpcy51cHB5LmNhbmNlbEFsbCxcbiAgICAgIGZpbGVDYXJkRm9yOiBwbHVnaW5TdGF0ZS5maWxlQ2FyZEZvcixcbiAgICAgIHRvZ2dsZUZpbGVDYXJkOiB0aGlzLnRvZ2dsZUZpbGVDYXJkLFxuICAgICAgdG9nZ2xlQWRkRmlsZXNQYW5lbDogdGhpcy50b2dnbGVBZGRGaWxlc1BhbmVsLFxuICAgICAgc2hvd0FkZEZpbGVzUGFuZWw6IHBsdWdpblN0YXRlLnNob3dBZGRGaWxlc1BhbmVsLFxuICAgICAgc2F2ZUZpbGVDYXJkOiBzYXZlRmlsZUNhcmQsXG4gICAgICB3aWR0aDogdGhpcy5vcHRzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLm9wdHMuaGVpZ2h0LFxuICAgICAgc2hvd0xpbmtUb0ZpbGVVcGxvYWRSZXN1bHQ6IHRoaXMub3B0cy5zaG93TGlua1RvRmlsZVVwbG9hZFJlc3VsdCxcbiAgICAgIHByb3VkbHlEaXNwbGF5UG93ZXJlZEJ5VXBweTogdGhpcy5vcHRzLnByb3VkbHlEaXNwbGF5UG93ZXJlZEJ5VXBweSxcbiAgICAgIGN1cnJlbnRXaWR0aDogcGx1Z2luU3RhdGUuY29udGFpbmVyV2lkdGgsXG4gICAgICBpc1dpZGU6IHBsdWdpblN0YXRlLmNvbnRhaW5lcldpZHRoID4gNDAwLFxuICAgICAgY29udGFpbmVyV2lkdGg6IHBsdWdpblN0YXRlLmNvbnRhaW5lcldpZHRoLFxuICAgICAgaXNUYXJnZXRET01FbDogdGhpcy5pc1RhcmdldERPTUVsLFxuICAgICAgYWxsb3dlZEZpbGVUeXBlczogdGhpcy51cHB5Lm9wdHMucmVzdHJpY3Rpb25zLmFsbG93ZWRGaWxlVHlwZXMsXG4gICAgICBtYXhOdW1iZXJPZkZpbGVzOiB0aGlzLnVwcHkub3B0cy5yZXN0cmljdGlvbnMubWF4TnVtYmVyT2ZGaWxlcyxcbiAgICAgIHNob3dTZWxlY3RlZEZpbGVzOiB0aGlzLm9wdHMuc2hvd1NlbGVjdGVkRmlsZXNcbiAgICB9KTtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLmRpc2NvdmVyUHJvdmlkZXJQbHVnaW5zID0gZnVuY3Rpb24gZGlzY292ZXJQcm92aWRlclBsdWdpbnMoKSB7XG4gICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgdGhpcy51cHB5Lml0ZXJhdGVQbHVnaW5zKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIGlmIChwbHVnaW4gJiYgIXBsdWdpbi50YXJnZXQgJiYgcGx1Z2luLm9wdHMgJiYgcGx1Z2luLm9wdHMudGFyZ2V0ID09PSBfdGhpczEwLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIF90aGlzMTAuYWRkVGFyZ2V0KHBsdWdpbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5pbnN0YWxsID0gZnVuY3Rpb24gaW5zdGFsbCgpIHtcbiAgICB2YXIgX3RoaXMxMSA9IHRoaXM7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBzdGF0ZSBmb3IgRGFzaGJvYXJkXG4gICAgdGhpcy5zZXRQbHVnaW5TdGF0ZSh7XG4gICAgICBpc0hpZGRlbjogdHJ1ZSxcbiAgICAgIHNob3dGaWxlQ2FyZDogZmFsc2UsXG4gICAgICBzaG93QWRkRmlsZXNQYW5lbDogZmFsc2UsXG4gICAgICBhY3RpdmVQYW5lbDogZmFsc2UsXG4gICAgICBtZXRhRmllbGRzOiB0aGlzLm9wdHMubWV0YUZpZWxkcyxcbiAgICAgIHRhcmdldHM6IFtdXG4gICAgfSk7XG5cbiAgICB2YXIgX29wdHMgPSB0aGlzLm9wdHMsXG4gICAgICAgIGlubGluZSA9IF9vcHRzLmlubGluZSxcbiAgICAgICAgY2xvc2VBZnRlckZpbmlzaCA9IF9vcHRzLmNsb3NlQWZ0ZXJGaW5pc2g7XG5cbiAgICBpZiAoaW5saW5lICYmIGNsb3NlQWZ0ZXJGaW5pc2gpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW0Rhc2hib2FyZF0gYGNsb3NlQWZ0ZXJGaW5pc2g6IHRydWVgIGNhbm5vdCBiZSB1c2VkIG9uIGFuIGlubGluZSBEYXNoYm9hcmQsIGJlY2F1c2UgYW4gaW5saW5lIERhc2hib2FyZCBjYW5ub3QgYmUgY2xvc2VkIGF0IGFsbC4gRWl0aGVyIHNldCBgaW5saW5lOiBmYWxzZWAsIG9yIGRpc2FibGUgdGhlIGBjbG9zZUFmdGVyRmluaXNoYCBvcHRpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGFsbG93TXVsdGlwbGVVcGxvYWRzID0gdGhpcy51cHB5Lm9wdHMuYWxsb3dNdWx0aXBsZVVwbG9hZHM7XG5cbiAgICBpZiAoYWxsb3dNdWx0aXBsZVVwbG9hZHMgJiYgY2xvc2VBZnRlckZpbmlzaCkge1xuICAgICAgdGhpcy51cHB5LmxvZygnW0Rhc2hib2FyZF0gV2hlbiB1c2luZyBgY2xvc2VBZnRlckZpbmlzaGAsIHdlIHJlY29tbWVuZGVkIHNldHRpbmcgdGhlIGBhbGxvd011bHRpcGxlVXBsb2Fkc2Agb3B0aW9uIHRvIGBmYWxzZWAgaW4gdGhlIFVwcHkgY29uc3RydWN0b3IuIFNlZSBodHRwczovL3VwcHkuaW8vZG9jcy91cHB5LyNhbGxvd011bHRpcGxlVXBsb2Fkcy10cnVlJywgJ3dhcm5pbmcnKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5vcHRzLnRhcmdldDtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRoaXMubW91bnQodGFyZ2V0LCB0aGlzKTtcbiAgICB9XG5cbiAgICB2YXIgcGx1Z2lucyA9IHRoaXMub3B0cy5wbHVnaW5zIHx8IFtdO1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luSUQpIHtcbiAgICAgIHZhciBwbHVnaW4gPSBfdGhpczExLnVwcHkuZ2V0UGx1Z2luKHBsdWdpbklEKTtcbiAgICAgIGlmIChwbHVnaW4pIHtcbiAgICAgICAgcGx1Z2luLm1vdW50KF90aGlzMTEsIHBsdWdpbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMub3B0cy5kaXNhYmxlU3RhdHVzQmFyKSB7XG4gICAgICB0aGlzLnVwcHkudXNlKFN0YXR1c0Jhciwge1xuICAgICAgICBpZDogdGhpcy5pZCArICc6U3RhdHVzQmFyJyxcbiAgICAgICAgdGFyZ2V0OiB0aGlzLFxuICAgICAgICBoaWRlVXBsb2FkQnV0dG9uOiB0aGlzLm9wdHMuaGlkZVVwbG9hZEJ1dHRvbixcbiAgICAgICAgaGlkZVJldHJ5QnV0dG9uOiB0aGlzLm9wdHMuaGlkZVJldHJ5QnV0dG9uLFxuICAgICAgICBoaWRlUGF1c2VSZXN1bWVCdXR0b246IHRoaXMub3B0cy5oaWRlUGF1c2VSZXN1bWVCdXR0b24sXG4gICAgICAgIGhpZGVDYW5jZWxCdXR0b246IHRoaXMub3B0cy5oaWRlQ2FuY2VsQnV0dG9uLFxuICAgICAgICBzaG93UHJvZ3Jlc3NEZXRhaWxzOiB0aGlzLm9wdHMuc2hvd1Byb2dyZXNzRGV0YWlscyxcbiAgICAgICAgaGlkZUFmdGVyRmluaXNoOiB0aGlzLm9wdHMuaGlkZVByb2dyZXNzQWZ0ZXJGaW5pc2gsXG4gICAgICAgIGxvY2FsZTogdGhpcy5vcHRzLmxvY2FsZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdHMuZGlzYWJsZUluZm9ybWVyKSB7XG4gICAgICB0aGlzLnVwcHkudXNlKEluZm9ybWVyLCB7XG4gICAgICAgIGlkOiB0aGlzLmlkICsgJzpJbmZvcm1lcicsXG4gICAgICAgIHRhcmdldDogdGhpc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdHMuZGlzYWJsZVRodW1ibmFpbEdlbmVyYXRvcikge1xuICAgICAgdGhpcy51cHB5LnVzZShUaHVtYm5haWxHZW5lcmF0b3IsIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQgKyAnOlRodW1ibmFpbEdlbmVyYXRvcicsXG4gICAgICAgIHRodW1ibmFpbFdpZHRoOiB0aGlzLm9wdHMudGh1bWJuYWlsV2lkdGhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGlzY292ZXJQcm92aWRlclBsdWdpbnMoKTtcblxuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUudW5pbnN0YWxsID0gZnVuY3Rpb24gdW5pbnN0YWxsKCkge1xuICAgIHZhciBfdGhpczEyID0gdGhpcztcblxuICAgIGlmICghdGhpcy5vcHRzLmRpc2FibGVJbmZvcm1lcikge1xuICAgICAgdmFyIGluZm9ybWVyID0gdGhpcy51cHB5LmdldFBsdWdpbih0aGlzLmlkICsgJzpJbmZvcm1lcicpO1xuICAgICAgLy8gQ2hlY2tpbmcgaWYgdGhpcyBwbHVnaW4gZXhpc3RzLCBpbiBjYXNlIGl0IHdhcyByZW1vdmVkIGJ5IHVwcHktY29yZVxuICAgICAgLy8gYmVmb3JlIHRoZSBEYXNoYm9hcmQgd2FzLlxuICAgICAgaWYgKGluZm9ybWVyKSB0aGlzLnVwcHkucmVtb3ZlUGx1Z2luKGluZm9ybWVyKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0cy5kaXNhYmxlU3RhdHVzQmFyKSB7XG4gICAgICB2YXIgc3RhdHVzQmFyID0gdGhpcy51cHB5LmdldFBsdWdpbih0aGlzLmlkICsgJzpTdGF0dXNCYXInKTtcbiAgICAgIGlmIChzdGF0dXNCYXIpIHRoaXMudXBweS5yZW1vdmVQbHVnaW4oc3RhdHVzQmFyKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0cy5kaXNhYmxlVGh1bWJuYWlsR2VuZXJhdG9yKSB7XG4gICAgICB2YXIgdGh1bWJuYWlsID0gdGhpcy51cHB5LmdldFBsdWdpbih0aGlzLmlkICsgJzpUaHVtYm5haWxHZW5lcmF0b3InKTtcbiAgICAgIGlmICh0aHVtYm5haWwpIHRoaXMudXBweS5yZW1vdmVQbHVnaW4odGh1bWJuYWlsKTtcbiAgICB9XG5cbiAgICB2YXIgcGx1Z2lucyA9IHRoaXMub3B0cy5wbHVnaW5zIHx8IFtdO1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luSUQpIHtcbiAgICAgIHZhciBwbHVnaW4gPSBfdGhpczEyLnVwcHkuZ2V0UGx1Z2luKHBsdWdpbklEKTtcbiAgICAgIGlmIChwbHVnaW4pIHBsdWdpbi51bm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVubW91bnQoKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50cygpO1xuICB9O1xuXG4gIHJldHVybiBEYXNoYm9hcmQ7XG59KFBsdWdpbik7IiwiLyoqXG4gKiBDb3BpZXMgdGV4dCB0byBjbGlwYm9hcmQgYnkgY3JlYXRpbmcgYW4gYWxtb3N0IGludmlzaWJsZSB0ZXh0YXJlYSxcbiAqIGFkZGluZyB0ZXh0IHRoZXJlLCB0aGVuIHJ1bm5pbmcgZXhlY0NvbW1hbmQoJ2NvcHknKS5cbiAqIEZhbGxzIGJhY2sgdG8gcHJvbXB0KCkgd2hlbiB0aGUgZWFzeSB3YXkgZmFpbHMgKGhlbGxvLCBTYWZhcmkhKVxuICogRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMDgxMDMyMlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0VG9Db3B5XG4gKiBAcGFyYW0ge1N0cmluZ30gZmFsbGJhY2tTdHJpbmdcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKHRleHRUb0NvcHksIGZhbGxiYWNrU3RyaW5nKSB7XG4gIGZhbGxiYWNrU3RyaW5nID0gZmFsbGJhY2tTdHJpbmcgfHwgJ0NvcHkgdGhlIFVSTCBiZWxvdyc7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgd2lkdGg6ICcyZW0nLFxuICAgICAgaGVpZ2h0OiAnMmVtJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuXG4gICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0VG9Db3B5O1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuICAgIHRleHRBcmVhLnNlbGVjdCgpO1xuXG4gICAgdmFyIG1hZ2ljQ29weUZhaWxlZCA9IGZ1bmN0aW9uIG1hZ2ljQ29weUZhaWxlZCgpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xuICAgICAgd2luZG93LnByb21wdChmYWxsYmFja1N0cmluZywgdGV4dFRvQ29weSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgc3VjY2Vzc2Z1bCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcbiAgICAgICAgcmV0dXJuIG1hZ2ljQ29weUZhaWxlZCgnY29weSBjb21tYW5kIHVuYXZhaWxhYmxlJyk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcbiAgICAgIHJldHVybiBtYWdpY0NvcHlGYWlsZWQoZXJyKTtcbiAgICB9XG4gIH0pO1xufTsiLCJ2YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2ljb25zJyksXG4gICAgaWNvblRleHQgPSBfcmVxdWlyZS5pY29uVGV4dCxcbiAgICBpY29uQXVkaW8gPSBfcmVxdWlyZS5pY29uQXVkaW8sXG4gICAgaWNvblZpZGVvID0gX3JlcXVpcmUuaWNvblZpZGVvLFxuICAgIGljb25QREYgPSBfcmVxdWlyZS5pY29uUERGO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldEljb25CeU1pbWUoZmlsZVR5cGUpIHtcbiAgdmFyIGRlZmF1bHRDaG9pY2UgPSB7XG4gICAgY29sb3I6ICcjY2JjYmNiJyxcbiAgICBpY29uOiAnJ1xuICB9O1xuXG4gIGlmICghZmlsZVR5cGUpIHJldHVybiBkZWZhdWx0Q2hvaWNlO1xuXG4gIHZhciBmaWxlVHlwZUdlbmVyYWwgPSBmaWxlVHlwZS5zcGxpdCgnLycpWzBdO1xuICB2YXIgZmlsZVR5cGVTcGVjaWZpYyA9IGZpbGVUeXBlLnNwbGl0KCcvJylbMV07XG5cbiAgaWYgKGZpbGVUeXBlR2VuZXJhbCA9PT0gJ3RleHQnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiAnI2NiY2JjYicsXG4gICAgICBpY29uOiBpY29uVGV4dCgpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChmaWxlVHlwZUdlbmVyYWwgPT09ICdhdWRpbycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6ICcjMWFiYzljJyxcbiAgICAgIGljb246IGljb25BdWRpbygpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChmaWxlVHlwZUdlbmVyYWwgPT09ICd2aWRlbycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6ICcjMjk4MGI5JyxcbiAgICAgIGljb246IGljb25WaWRlbygpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChmaWxlVHlwZUdlbmVyYWwgPT09ICdhcHBsaWNhdGlvbicgJiYgZmlsZVR5cGVTcGVjaWZpYyA9PT0gJ3BkZicpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6ICcjZTc0YzNjJyxcbiAgICAgIGljb246IGljb25QREYoKVxuICAgIH07XG4gIH1cblxuICBpZiAoZmlsZVR5cGVHZW5lcmFsID09PSAnaW1hZ2UnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiAnI2YyZjJmMicsXG4gICAgICBpY29uOiAnJ1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdENob2ljZTtcbn07IiwiLy8gaWdub3JlIGRyb3AvcGFzdGUgZXZlbnRzIGlmIHRoZXkgYXJlIG5vdCBpbiBpbnB1dCBvciB0ZXh0YXJlYSDigJRcbi8vIG90aGVyd2lzZSB3aGVuIFVybCBwbHVnaW4gYWRkcyBkcm9wL3Bhc3RlIGxpc3RlbmVycyB0byB0aGlzLmVsLFxuLy8gZHJhZ2luZyBVSSBlbGVtZW50cyBvciBwYXN0aW5nIGFueXRoaW5nIGludG8gYW55IGZpZWxkIHRyaWdnZXJzIHRob3NlIGV2ZW50cyDigJRcbi8vIFVybCB0cmVhdHMgdGhlbSBhcyBVUkxzIHRoYXQgbmVlZCB0byBiZSBpbXBvcnRlZFxuXG5mdW5jdGlvbiBpZ25vcmVFdmVudChldikge1xuICB2YXIgdGFnTmFtZSA9IGV2LnRhcmdldC50YWdOYW1lO1xuICBpZiAodGFnTmFtZSA9PT0gJ0lOUFVUJyB8fCB0YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlnbm9yZUV2ZW50OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJ1bmNhdGVTdHJpbmcoc3RyLCBsZW5ndGgpIHtcbiAgaWYgKHN0ci5sZW5ndGggPiBsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBsZW5ndGggLyAyKSArICcuLi4nICsgc3RyLnN1YnN0cihzdHIubGVuZ3RoIC0gbGVuZ3RoIC8gNCwgc3RyLmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIHN0cjtcblxuICAvLyBtb3JlIHByZWNpc2UgdmVyc2lvbiBpZiBuZWVkZWRcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvODMxNTgzXG59OyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnQHVwcHkvY29yZScpLFxuICAgIFBsdWdpbiA9IF9yZXF1aXJlLlBsdWdpbjtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZTIuaDtcblxuLyoqXG4gKiBJbmZvcm1lclxuICogU2hvd3MgcmFkIG1lc3NhZ2UgYnViYmxlc1xuICogdXNlZCBsaWtlIHRoaXM6IGB1cHB5LmluZm8oJ2hlbGxvIHdvcmxkJywgJ2luZm8nLCA1MDAwKWBcbiAqIG9yIGZvciBlcnJvcnM6IGB1cHB5LmluZm8oJ0Vycm9yIHVwbG9hZGluZyBpbWcuanBnJywgJ2Vycm9yJywgNTAwMClgXG4gKlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX1BsdWdpbikge1xuICBfaW5oZXJpdHMoSW5mb3JtZXIsIF9QbHVnaW4pO1xuXG4gIGZ1bmN0aW9uIEluZm9ybWVyKHVwcHksIG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5mb3JtZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1BsdWdpbi5jYWxsKHRoaXMsIHVwcHksIG9wdHMpKTtcblxuICAgIF90aGlzLnR5cGUgPSAncHJvZ3Jlc3NpbmRpY2F0b3InO1xuICAgIF90aGlzLmlkID0gX3RoaXMub3B0cy5pZCB8fCAnSW5mb3JtZXInO1xuICAgIF90aGlzLnRpdGxlID0gJ0luZm9ybWVyJztcblxuICAgIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICB0eXBlQ29sb3JzOiB7XG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgICAgYmc6ICcjMDAwJ1xuICAgICAgICB9LFxuICAgICAgICB3YXJuaW5nOiB7XG4gICAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICAgIGJnOiAnI0Y2QTYyMydcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgICAgYmc6ICcjRDMyRjJGJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICAgIGJnOiAnIzFCQjI0MCdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBtZXJnZSBkZWZhdWx0IG9wdGlvbnMgd2l0aCB0aGUgb25lcyBzZXQgYnkgdXNlclxuICAgIH07X3RoaXMub3B0cyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0cyk7XG5cbiAgICBfdGhpcy5yZW5kZXIgPSBfdGhpcy5yZW5kZXIuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgSW5mb3JtZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihzdGF0ZSkge1xuICAgIHZhciBfc3RhdGUkaW5mbyA9IHN0YXRlLmluZm8sXG4gICAgICAgIGlzSGlkZGVuID0gX3N0YXRlJGluZm8uaXNIaWRkZW4sXG4gICAgICAgIG1lc3NhZ2UgPSBfc3RhdGUkaW5mby5tZXNzYWdlLFxuICAgICAgICBkZXRhaWxzID0gX3N0YXRlJGluZm8uZGV0YWlscztcbiAgICAvLyBjb25zdCBzdHlsZSA9IHtcbiAgICAvLyAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRzLnR5cGVDb2xvcnNbdHlwZV0uYmcsXG4gICAgLy8gICBjb2xvcjogdGhpcy5vcHRzLnR5cGVDb2xvcnNbdHlwZV0udGV4dFxuICAgIC8vIH1cblxuICAgIHJldHVybiBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5IHVwcHktSW5mb3JtZXInLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiBpc0hpZGRlbiB9LFxuICAgICAgaChcbiAgICAgICAgJ3AnLFxuICAgICAgICB7IHJvbGU6ICdhbGVydCcgfSxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgJyAnLFxuICAgICAgICBkZXRhaWxzICYmIGgoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogZGV0YWlscyxcbiAgICAgICAgICAgICdkYXRhLW1pY3JvdGlwLXBvc2l0aW9uJzogJ3RvcCcsXG4gICAgICAgICAgICAnZGF0YS1taWNyb3RpcC1zaXplJzogJ2xhcmdlJyxcbiAgICAgICAgICAgIHJvbGU6ICd0b29sdGlwJyB9LFxuICAgICAgICAgICc/J1xuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBJbmZvcm1lci5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMub3B0cy50YXJnZXQ7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy5tb3VudCh0YXJnZXQsIHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gSW5mb3JtZXI7XG59KFBsdWdpbik7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIHRocm90dGxlID0gcmVxdWlyZSgnbG9kYXNoLnRocm90dGxlJyk7XG52YXIgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcbnZhciBzdGF0dXNCYXJTdGF0ZXMgPSByZXF1aXJlKCcuL1N0YXR1c0JhclN0YXRlcycpO1xudmFyIHByZXR0eUJ5dGVzID0gcmVxdWlyZSgncHJldHRpZXItYnl0ZXMnKTtcbnZhciBwcmV0dHlFVEEgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvcHJldHR5RVRBJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZS5oO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVQcm9jZXNzaW5nUHJvZ3Jlc3MoZmlsZXMpIHtcbiAgLy8gQ29sbGVjdCBwcmUgb3IgcG9zdHByb2Nlc3NpbmcgcHJvZ3Jlc3Mgc3RhdGVzLlxuICB2YXIgcHJvZ3Jlc3NlcyA9IFtdO1xuICBPYmplY3Qua2V5cyhmaWxlcykuZm9yRWFjaChmdW5jdGlvbiAoZmlsZUlEKSB7XG4gICAgdmFyIHByb2dyZXNzID0gZmlsZXNbZmlsZUlEXS5wcm9ncmVzcztcblxuICAgIGlmIChwcm9ncmVzcy5wcmVwcm9jZXNzKSB7XG4gICAgICBwcm9ncmVzc2VzLnB1c2gocHJvZ3Jlc3MucHJlcHJvY2Vzcyk7XG4gICAgfVxuICAgIGlmIChwcm9ncmVzcy5wb3N0cHJvY2Vzcykge1xuICAgICAgcHJvZ3Jlc3Nlcy5wdXNoKHByb2dyZXNzLnBvc3Rwcm9jZXNzKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEluIHRoZSBmdXR1cmUgd2Ugc2hvdWxkIHByb2JhYmx5IGRvIHRoaXMgZGlmZmVyZW50bHkuIEZvciBub3cgd2UnbGwgdGFrZSB0aGVcbiAgLy8gbW9kZSBhbmQgbWVzc2FnZSBmcm9tIHRoZSBmaXJzdCBmaWxl4oCmXG4gIHZhciBfcHJvZ3Jlc3NlcyQgPSBwcm9ncmVzc2VzWzBdLFxuICAgICAgbW9kZSA9IF9wcm9ncmVzc2VzJC5tb2RlLFxuICAgICAgbWVzc2FnZSA9IF9wcm9ncmVzc2VzJC5tZXNzYWdlO1xuXG4gIHZhciB2YWx1ZSA9IHByb2dyZXNzZXMuZmlsdGVyKGlzRGV0ZXJtaW5hdGUpLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIHByb2dyZXNzLCBpbmRleCwgYWxsKSB7XG4gICAgcmV0dXJuIHRvdGFsICsgcHJvZ3Jlc3MudmFsdWUgLyBhbGwubGVuZ3RoO1xuICB9LCAwKTtcbiAgZnVuY3Rpb24gaXNEZXRlcm1pbmF0ZShwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb2RlOiBtb2RlLFxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVBhdXNlUmVzdW1lKHByb3BzKSB7XG4gIGlmIChwcm9wcy5pc0FsbENvbXBsZXRlKSByZXR1cm47XG5cbiAgaWYgKCFwcm9wcy5yZXN1bWFibGVVcGxvYWRzKSB7XG4gICAgcmV0dXJuIHByb3BzLmNhbmNlbEFsbCgpO1xuICB9XG5cbiAgaWYgKHByb3BzLmlzQWxsUGF1c2VkKSB7XG4gICAgcmV0dXJuIHByb3BzLnJlc3VtZUFsbCgpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzLnBhdXNlQWxsKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHByb3BzID0gcHJvcHMgfHwge307XG5cbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgbmV3RmlsZXMgPSBfcHJvcHMubmV3RmlsZXMsXG4gICAgICBhbGxvd05ld1VwbG9hZCA9IF9wcm9wcy5hbGxvd05ld1VwbG9hZCxcbiAgICAgIGlzVXBsb2FkSW5Qcm9ncmVzcyA9IF9wcm9wcy5pc1VwbG9hZEluUHJvZ3Jlc3MsXG4gICAgICBpc0FsbFBhdXNlZCA9IF9wcm9wcy5pc0FsbFBhdXNlZCxcbiAgICAgIHJlc3VtYWJsZVVwbG9hZHMgPSBfcHJvcHMucmVzdW1hYmxlVXBsb2FkcyxcbiAgICAgIGVycm9yID0gX3Byb3BzLmVycm9yLFxuICAgICAgaGlkZVVwbG9hZEJ1dHRvbiA9IF9wcm9wcy5oaWRlVXBsb2FkQnV0dG9uLFxuICAgICAgaGlkZVBhdXNlUmVzdW1lQnV0dG9uID0gX3Byb3BzLmhpZGVQYXVzZVJlc3VtZUJ1dHRvbixcbiAgICAgIGhpZGVDYW5jZWxCdXR0b24gPSBfcHJvcHMuaGlkZUNhbmNlbEJ1dHRvbixcbiAgICAgIGhpZGVSZXRyeUJ1dHRvbiA9IF9wcm9wcy5oaWRlUmV0cnlCdXR0b247XG5cblxuICB2YXIgdXBsb2FkU3RhdGUgPSBwcm9wcy51cGxvYWRTdGF0ZTtcblxuICB2YXIgcHJvZ3Jlc3NWYWx1ZSA9IHByb3BzLnRvdGFsUHJvZ3Jlc3M7XG4gIHZhciBwcm9ncmVzc01vZGUgPSB2b2lkIDA7XG4gIHZhciBwcm9ncmVzc0JhckNvbnRlbnQgPSB2b2lkIDA7XG5cbiAgaWYgKHVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfUFJFUFJPQ0VTU0lORyB8fCB1cGxvYWRTdGF0ZSA9PT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX1BPU1RQUk9DRVNTSU5HKSB7XG4gICAgdmFyIHByb2dyZXNzID0gY2FsY3VsYXRlUHJvY2Vzc2luZ1Byb2dyZXNzKHByb3BzLmZpbGVzKTtcbiAgICBwcm9ncmVzc01vZGUgPSBwcm9ncmVzcy5tb2RlO1xuICAgIGlmIChwcm9ncmVzc01vZGUgPT09ICdkZXRlcm1pbmF0ZScpIHtcbiAgICAgIHByb2dyZXNzVmFsdWUgPSBwcm9ncmVzcy52YWx1ZSAqIDEwMDtcbiAgICB9XG5cbiAgICBwcm9ncmVzc0JhckNvbnRlbnQgPSBQcm9ncmVzc0JhclByb2Nlc3NpbmcocHJvZ3Jlc3MpO1xuICB9IGVsc2UgaWYgKHVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfQ09NUExFVEUpIHtcbiAgICBwcm9ncmVzc0JhckNvbnRlbnQgPSBQcm9ncmVzc0JhckNvbXBsZXRlKHByb3BzKTtcbiAgfSBlbHNlIGlmICh1cGxvYWRTdGF0ZSA9PT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX1VQTE9BRElORykge1xuICAgIHByb2dyZXNzQmFyQ29udGVudCA9IFByb2dyZXNzQmFyVXBsb2FkaW5nKHByb3BzKTtcbiAgfSBlbHNlIGlmICh1cGxvYWRTdGF0ZSA9PT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX0VSUk9SKSB7XG4gICAgcHJvZ3Jlc3NWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBwcm9ncmVzc0JhckNvbnRlbnQgPSBQcm9ncmVzc0JhckVycm9yKHByb3BzKTtcbiAgfVxuXG4gIHZhciB3aWR0aCA9IHR5cGVvZiBwcm9ncmVzc1ZhbHVlID09PSAnbnVtYmVyJyA/IHByb2dyZXNzVmFsdWUgOiAxMDA7XG4gIHZhciBpc0hpZGRlbiA9IHVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfV0FJVElORyAmJiBwcm9wcy5oaWRlVXBsb2FkQnV0dG9uIHx8IHVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfV0FJVElORyAmJiAhcHJvcHMubmV3RmlsZXMgPiAwIHx8IHVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfQ09NUExFVEUgJiYgcHJvcHMuaGlkZUFmdGVyRmluaXNoO1xuXG4gIHZhciBzaG93VXBsb2FkQnRuID0gIWVycm9yICYmIG5ld0ZpbGVzICYmICFpc1VwbG9hZEluUHJvZ3Jlc3MgJiYgIWlzQWxsUGF1c2VkICYmIGFsbG93TmV3VXBsb2FkICYmICFoaWRlVXBsb2FkQnV0dG9uO1xuICB2YXIgc2hvd0NhbmNlbEJ0biA9ICFoaWRlQ2FuY2VsQnV0dG9uICYmIHVwbG9hZFN0YXRlICE9PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfV0FJVElORyAmJiB1cGxvYWRTdGF0ZSAhPT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX0NPTVBMRVRFO1xuICB2YXIgc2hvd1BhdXNlUmVzdW1lQnRuID0gcmVzdW1hYmxlVXBsb2FkcyAmJiAhaGlkZVBhdXNlUmVzdW1lQnV0dG9uICYmIHVwbG9hZFN0YXRlICE9PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfV0FJVElORyAmJiB1cGxvYWRTdGF0ZSAhPT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX1BSRVBST0NFU1NJTkcgJiYgdXBsb2FkU3RhdGUgIT09IHN0YXR1c0JhclN0YXRlcy5TVEFURV9QT1NUUFJPQ0VTU0lORyAmJiB1cGxvYWRTdGF0ZSAhPT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX0NPTVBMRVRFO1xuICB2YXIgc2hvd1JldHJ5QnRuID0gZXJyb3IgJiYgIWhpZGVSZXRyeUJ1dHRvbjtcblxuICB2YXIgcHJvZ3Jlc3NDbGFzc05hbWVzID0gJ3VwcHktU3RhdHVzQmFyLXByb2dyZXNzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArIChwcm9ncmVzc01vZGUgPyAnaXMtJyArIHByb2dyZXNzTW9kZSA6ICcnKTtcblxuICB2YXIgc3RhdHVzQmFyQ2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoeyAndXBweS1Sb290JzogcHJvcHMuaXNUYXJnZXRET01FbCB9LCAndXBweS1TdGF0dXNCYXInLCAnaXMtJyArIHVwbG9hZFN0YXRlKTtcblxuICByZXR1cm4gaChcbiAgICAnZGl2JyxcbiAgICB7ICdjbGFzcyc6IHN0YXR1c0JhckNsYXNzTmFtZXMsICdhcmlhLWhpZGRlbic6IGlzSGlkZGVuIH0sXG4gICAgaCgnZGl2JywgeyAnY2xhc3MnOiBwcm9ncmVzc0NsYXNzTmFtZXMsXG4gICAgICBzdHlsZTogeyB3aWR0aDogd2lkdGggKyAnJScgfSxcbiAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAnYXJpYS12YWx1ZW1pbic6ICcwJyxcbiAgICAgICdhcmlhLXZhbHVlbWF4JzogJzEwMCcsXG4gICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb2dyZXNzVmFsdWUgfSksXG4gICAgcHJvZ3Jlc3NCYXJDb250ZW50LFxuICAgIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLWFjdGlvbnMnIH0sXG4gICAgICBzaG93VXBsb2FkQnRuID8gaChVcGxvYWRCdG4sIF9leHRlbmRzKHt9LCBwcm9wcywgeyB1cGxvYWRTdGF0ZTogdXBsb2FkU3RhdGUgfSkpIDogbnVsbCxcbiAgICAgIHNob3dSZXRyeUJ0biA/IGgoUmV0cnlCdG4sIHByb3BzKSA6IG51bGwsXG4gICAgICBzaG93UGF1c2VSZXN1bWVCdG4gPyBoKFBhdXNlUmVzdW1lQnV0dG9uLCBwcm9wcykgOiBudWxsLFxuICAgICAgc2hvd0NhbmNlbEJ0biA/IGgoQ2FuY2VsQnRuLCBwcm9wcykgOiBudWxsXG4gICAgKVxuICApO1xufTtcblxudmFyIFVwbG9hZEJ0biA9IGZ1bmN0aW9uIFVwbG9hZEJ0bihwcm9wcykge1xuICB2YXIgdXBsb2FkQnRuQ2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoJ3VwcHktdS1yZXNldCcsICd1cHB5LWMtYnRuJywgJ3VwcHktU3RhdHVzQmFyLWFjdGlvbkJ0bicsICd1cHB5LVN0YXR1c0Jhci1hY3Rpb25CdG4tLXVwbG9hZCcsIHsgJ3VwcHktYy1idG4tcHJpbWFyeSc6IHByb3BzLnVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfV0FJVElORyB9KTtcblxuICByZXR1cm4gaChcbiAgICAnYnV0dG9uJyxcbiAgICB7IHR5cGU6ICdidXR0b24nLFxuICAgICAgJ2NsYXNzJzogdXBsb2FkQnRuQ2xhc3NOYW1lcyxcbiAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMuaTE4bigndXBsb2FkWEZpbGVzJywgeyBzbWFydF9jb3VudDogcHJvcHMubmV3RmlsZXMgfSksXG4gICAgICBvbmNsaWNrOiBwcm9wcy5zdGFydFVwbG9hZCB9LFxuICAgIHByb3BzLm5ld0ZpbGVzICYmIHByb3BzLmlzVXBsb2FkU3RhcnRlZCA/IHByb3BzLmkxOG4oJ3VwbG9hZFhOZXdGaWxlcycsIHsgc21hcnRfY291bnQ6IHByb3BzLm5ld0ZpbGVzIH0pIDogcHJvcHMuaTE4bigndXBsb2FkWEZpbGVzJywgeyBzbWFydF9jb3VudDogcHJvcHMubmV3RmlsZXMgfSlcbiAgKTtcbn07XG5cbnZhciBSZXRyeUJ0biA9IGZ1bmN0aW9uIFJldHJ5QnRuKHByb3BzKSB7XG4gIHJldHVybiBoKFxuICAgICdidXR0b24nLFxuICAgIHsgdHlwZTogJ2J1dHRvbicsXG4gICAgICAnY2xhc3MnOiAndXBweS11LXJlc2V0IHVwcHktYy1idG4gdXBweS1TdGF0dXNCYXItYWN0aW9uQnRuIHVwcHktU3RhdHVzQmFyLWFjdGlvbkJ0bi0tcmV0cnknLFxuICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5pMThuKCdyZXRyeVVwbG9hZCcpLFxuICAgICAgb25jbGljazogcHJvcHMucmV0cnlBbGwgfSxcbiAgICBwcm9wcy5pMThuKCdyZXRyeScpXG4gICk7XG59O1xuXG52YXIgQ2FuY2VsQnRuID0gZnVuY3Rpb24gQ2FuY2VsQnRuKHByb3BzKSB7XG4gIHJldHVybiBoKFxuICAgICdidXR0b24nLFxuICAgIHsgdHlwZTogJ2J1dHRvbicsXG4gICAgICAnY2xhc3MnOiAndXBweS11LXJlc2V0IHVwcHktU3RhdHVzQmFyLWFjdGlvbkNpcmNsZUJ0bicsXG4gICAgICB0aXRsZTogcHJvcHMuaTE4bignY2FuY2VsJyksXG4gICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmkxOG4oJ2NhbmNlbCcpLFxuICAgICAgb25jbGljazogcHJvcHMuY2FuY2VsQWxsIH0sXG4gICAgaChcbiAgICAgICdzdmcnLFxuICAgICAgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsICdjbGFzcyc6ICdVcHB5SWNvbicsIHdpZHRoOiAnOCcsIGhlaWdodDogJzgnLCB2aWV3Qm94OiAnMCAwIDggOCcsIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIH0sXG4gICAgICBoKCdwYXRoJywgeyBkOiAnTTUuMjEgNC4xMDRsMS42NTggMS42NTgtMS4xMDYgMS4xMDYtMS42NTgtMS42NTktMS42NTkgMS42NTlMMS4zNCA1Ljc2MmwxLjY1OC0xLjY1OEwxLjM0IDIuNDQ1IDIuNDQ1IDEuMzRsMS42NTkgMS42NThMNS43NjIgMS4zNGwxLjEwNiAxLjEwNS0xLjY1OSAxLjY1OXonLCAnZmlsbC1ydWxlJzogJ2V2ZW5vZGQnIH0pXG4gICAgKVxuICApO1xufTtcblxudmFyIFBhdXNlUmVzdW1lQnV0dG9uID0gZnVuY3Rpb24gUGF1c2VSZXN1bWVCdXR0b24ocHJvcHMpIHtcbiAgdmFyIGlzQWxsUGF1c2VkID0gcHJvcHMuaXNBbGxQYXVzZWQsXG4gICAgICBpMThuID0gcHJvcHMuaTE4bjtcblxuICB2YXIgdGl0bGUgPSBpc0FsbFBhdXNlZCA/IGkxOG4oJ3Jlc3VtZScpIDogaTE4bigncGF1c2UnKTtcblxuICByZXR1cm4gaChcbiAgICAnYnV0dG9uJyxcbiAgICB7IHRpdGxlOiB0aXRsZSwgJ2NsYXNzJzogJ3VwcHktdS1yZXNldCB1cHB5LVN0YXR1c0Jhci1hY3Rpb25DaXJjbGVCdG4nLCB0eXBlOiAnYnV0dG9uJywgb25jbGljazogZnVuY3Rpb24gb25jbGljaygpIHtcbiAgICAgICAgcmV0dXJuIHRvZ2dsZVBhdXNlUmVzdW1lKHByb3BzKTtcbiAgICAgIH0gfSxcbiAgICBpc0FsbFBhdXNlZCA/IGgoXG4gICAgICAnc3ZnJyxcbiAgICAgIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCAnY2xhc3MnOiAnVXBweUljb24nLCB3aWR0aDogJzgnLCBoZWlnaHQ6ICc4Jywgdmlld0JveDogJzAgMCA4IDgnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuICAgICAgaCgncGF0aCcsIHsgZDogJ002LjczNiAzLjg1MmwtNC40NzIgMi44NFYxLjA3NXonLCAnZmlsbC1ydWxlJzogJ2V2ZW5vZGQnIH0pXG4gICAgKSA6IGgoXG4gICAgICAnc3ZnJyxcbiAgICAgIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCAnY2xhc3MnOiAnVXBweUljb24nLCB3aWR0aDogJzgnLCBoZWlnaHQ6ICc4Jywgdmlld0JveDogJzAgMCA4IDgnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuICAgICAgaCgncGF0aCcsIHsgZDogJ00xIDFoMnY2SDF6TTUgMWgydjZINXonLCAnZmlsbC1ydWxlJzogJ2V2ZW5vZGQnIH0pXG4gICAgKVxuICApO1xufTtcblxudmFyIExvYWRpbmdTcGlubmVyID0gZnVuY3Rpb24gTG9hZGluZ1NwaW5uZXIocHJvcHMpIHtcbiAgcmV0dXJuIGgoXG4gICAgJ3N2ZycsXG4gICAgeyAnY2xhc3MnOiAndXBweS1TdGF0dXNCYXItc3Bpbm5lcicsIHdpZHRoOiAnMTQnLCBoZWlnaHQ6ICcxNCcsIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIH0sXG4gICAgaCgncGF0aCcsIHsgZDogJ00xMy45ODMgNi41NDdjLS4xMi0yLjUwOS0xLjY0LTQuODkzLTMuOTM5LTUuOTM2LTIuNDgtMS4xMjctNS40ODgtLjY1Ni03LjU1NiAxLjA5NEMuNTI0IDMuMzY3LS4zOTggNi4wNDguMTYyIDguNTYyYy41NTYgMi40OTUgMi40NiA0LjUyIDQuOTQgNS4xODMgMi45MzIuNzg0IDUuNjEtLjYwMiA3LjI1Ni0zLjAxNS0xLjQ5MyAxLjk5My0zLjc0NSAzLjMwOS02LjI5OCAyLjg2OC0yLjUxNC0uNDM0LTQuNTc4LTIuMzQ5LTUuMTUzLTQuODRhNi4yMjYgNi4yMjYgMCAwIDEgMi45OC02Ljc3OEM2LjM0LjU4NiA5Ljc0IDEuMSAxMS4zNzMgMy40OTNjLjQwNy41OTYuNjkzIDEuMjgyLjg0MiAxLjk4OC4xMjcuNTk4LjA3MyAxLjE5Ny4xNjEgMS43OTQuMDc4LjUyNS41NDMgMS4yNTcgMS4xNS44NjQuNTI1LS4zNDEuNDktMS4wNS40NTYtMS41OTItLjAwNy0uMTUuMDIuMyAwIDAnLCAnZmlsbC1ydWxlJzogJ2V2ZW5vZGQnIH0pXG4gICk7XG59O1xuXG52YXIgUHJvZ3Jlc3NCYXJQcm9jZXNzaW5nID0gZnVuY3Rpb24gUHJvZ3Jlc3NCYXJQcm9jZXNzaW5nKHByb3BzKSB7XG4gIHZhciB2YWx1ZSA9IE1hdGgucm91bmQocHJvcHMudmFsdWUgKiAxMDApO1xuXG4gIHJldHVybiBoKFxuICAgICdkaXYnLFxuICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLWNvbnRlbnQnIH0sXG4gICAgaChMb2FkaW5nU3Bpbm5lciwgcHJvcHMpLFxuICAgIHByb3BzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgPyB2YWx1ZSArICclIFxceEI3ICcgOiAnJyxcbiAgICBwcm9wcy5tZXNzYWdlXG4gICk7XG59O1xuXG52YXIgUHJvZ3Jlc3NEZXRhaWxzID0gZnVuY3Rpb24gUHJvZ3Jlc3NEZXRhaWxzKHByb3BzKSB7XG4gIHJldHVybiBoKFxuICAgICdkaXYnLFxuICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLXN0YXR1c1NlY29uZGFyeScgfSxcbiAgICBwcm9wcy5udW1VcGxvYWRzID4gMSAmJiBwcm9wcy5pMThuKCdmaWxlc1VwbG9hZGVkT2ZUb3RhbCcsIHsgY29tcGxldGU6IHByb3BzLmNvbXBsZXRlLCBzbWFydF9jb3VudDogcHJvcHMubnVtVXBsb2FkcyB9KSArICcgXFx4QjcgJyxcbiAgICBwcm9wcy5pMThuKCdkYXRhVXBsb2FkZWRPZlRvdGFsJywge1xuICAgICAgY29tcGxldGU6IHByZXR0eUJ5dGVzKHByb3BzLnRvdGFsVXBsb2FkZWRTaXplKSxcbiAgICAgIHRvdGFsOiBwcmV0dHlCeXRlcyhwcm9wcy50b3RhbFNpemUpXG4gICAgfSkgKyAnIFxceEI3ICcsXG4gICAgcHJvcHMuaTE4bigneFRpbWVMZWZ0JywgeyB0aW1lOiBwcmV0dHlFVEEocHJvcHMudG90YWxFVEEpIH0pXG4gICk7XG59O1xuXG52YXIgVXBsb2FkTmV3bHlBZGRlZEZpbGVzID0gZnVuY3Rpb24gVXBsb2FkTmV3bHlBZGRlZEZpbGVzKHByb3BzKSB7XG4gIHZhciB1cGxvYWRCdG5DbGFzc05hbWVzID0gY2xhc3NOYW1lcygndXBweS11LXJlc2V0JywgJ3VwcHktYy1idG4nLCAndXBweS1TdGF0dXNCYXItYWN0aW9uQnRuJyk7XG5cbiAgcmV0dXJuIGgoXG4gICAgJ2RpdicsXG4gICAgeyAnY2xhc3MnOiAndXBweS1TdGF0dXNCYXItc3RhdHVzU2Vjb25kYXJ5JyB9LFxuICAgIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLXN0YXR1c1NlY29uZGFyeUhpbnQnIH0sXG4gICAgICBwcm9wcy5pMThuKCd4TW9yZUZpbGVzQWRkZWQnLCB7IHNtYXJ0X2NvdW50OiBwcm9wcy5uZXdGaWxlcyB9KVxuICAgICksXG4gICAgaChcbiAgICAgICdidXR0b24nLFxuICAgICAgeyB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgJ2NsYXNzJzogdXBsb2FkQnRuQ2xhc3NOYW1lcyxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5pMThuKCd1cGxvYWRYRmlsZXMnLCB7IHNtYXJ0X2NvdW50OiBwcm9wcy5uZXdGaWxlcyB9KSxcbiAgICAgICAgb25jbGljazogcHJvcHMuc3RhcnRVcGxvYWQgfSxcbiAgICAgIHByb3BzLmkxOG4oJ3VwbG9hZCcpXG4gICAgKVxuICApO1xufTtcblxudmFyIFRocm90dGxlZFByb2dyZXNzRGV0YWlscyA9IHRocm90dGxlKFByb2dyZXNzRGV0YWlscywgNTAwLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlIH0pO1xuXG52YXIgUHJvZ3Jlc3NCYXJVcGxvYWRpbmcgPSBmdW5jdGlvbiBQcm9ncmVzc0JhclVwbG9hZGluZyhwcm9wcykge1xuICBpZiAoIXByb3BzLmlzVXBsb2FkU3RhcnRlZCB8fCBwcm9wcy5pc0FsbENvbXBsZXRlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgdGl0bGUgPSBwcm9wcy5pc0FsbFBhdXNlZCA/IHByb3BzLmkxOG4oJ3BhdXNlZCcpIDogcHJvcHMuaTE4bigndXBsb2FkaW5nJyk7XG4gIHZhciBzaG93VXBsb2FkTmV3bHlBZGRlZEZpbGVzID0gcHJvcHMubmV3RmlsZXMgJiYgcHJvcHMuaXNVcGxvYWRTdGFydGVkO1xuXG4gIHJldHVybiBoKFxuICAgICdkaXYnLFxuICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLWNvbnRlbnQnLCAnYXJpYS1sYWJlbCc6IHRpdGxlLCB0aXRsZTogdGl0bGUgfSxcbiAgICAhcHJvcHMuaXNBbGxQYXVzZWQgPyBoKExvYWRpbmdTcGlubmVyLCBwcm9wcykgOiBudWxsLFxuICAgIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLXN0YXR1cycgfSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LVN0YXR1c0Jhci1zdGF0dXNQcmltYXJ5JyB9LFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgJzogJyxcbiAgICAgICAgcHJvcHMudG90YWxQcm9ncmVzcyxcbiAgICAgICAgJyUnXG4gICAgICApLFxuICAgICAgIXByb3BzLmlzQWxsUGF1c2VkICYmICFzaG93VXBsb2FkTmV3bHlBZGRlZEZpbGVzICYmIHByb3BzLnNob3dQcm9ncmVzc0RldGFpbHMgPyBoKFRocm90dGxlZFByb2dyZXNzRGV0YWlscywgcHJvcHMpIDogbnVsbCxcbiAgICAgIHNob3dVcGxvYWROZXdseUFkZGVkRmlsZXMgPyBoKFVwbG9hZE5ld2x5QWRkZWRGaWxlcywgcHJvcHMpIDogbnVsbFxuICAgIClcbiAgKTtcbn07XG5cbnZhciBQcm9ncmVzc0JhckNvbXBsZXRlID0gZnVuY3Rpb24gUHJvZ3Jlc3NCYXJDb21wbGV0ZShfcmVmKSB7XG4gIHZhciB0b3RhbFByb2dyZXNzID0gX3JlZi50b3RhbFByb2dyZXNzLFxuICAgICAgaTE4biA9IF9yZWYuaTE4bjtcblxuICByZXR1cm4gaChcbiAgICAnZGl2JyxcbiAgICB7ICdjbGFzcyc6ICd1cHB5LVN0YXR1c0Jhci1jb250ZW50Jywgcm9sZTogJ3N0YXR1cycsIHRpdGxlOiBpMThuKCdjb21wbGV0ZScpIH0sXG4gICAgaChcbiAgICAgICdzdmcnLFxuICAgICAgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsICdjbGFzcyc6ICd1cHB5LVN0YXR1c0Jhci1zdGF0dXNJbmRpY2F0b3IgVXBweUljb24nLCB3aWR0aDogJzE4JywgaGVpZ2h0OiAnMTcnLCB2aWV3Qm94OiAnMCAwIDIzIDE3JyB9LFxuICAgICAgaCgncGF0aCcsIHsgZDogJ004Ljk0NCAxN0wwIDcuODY1bDIuNTU1LTIuNjEgNi4zOSA2LjUyNUwyMC40MSAwIDIzIDIuNjQ1eicgfSlcbiAgICApLFxuICAgIGkxOG4oJ2NvbXBsZXRlJylcbiAgKTtcbn07XG5cbnZhciBQcm9ncmVzc0JhckVycm9yID0gZnVuY3Rpb24gUHJvZ3Jlc3NCYXJFcnJvcihfcmVmMikge1xuICB2YXIgZXJyb3IgPSBfcmVmMi5lcnJvcixcbiAgICAgIHJldHJ5QWxsID0gX3JlZjIucmV0cnlBbGwsXG4gICAgICBoaWRlUmV0cnlCdXR0b24gPSBfcmVmMi5oaWRlUmV0cnlCdXR0b24sXG4gICAgICBpMThuID0gX3JlZjIuaTE4bjtcblxuICByZXR1cm4gaChcbiAgICAnZGl2JyxcbiAgICB7ICdjbGFzcyc6ICd1cHB5LVN0YXR1c0Jhci1jb250ZW50Jywgcm9sZTogJ2FsZXJ0JyB9LFxuICAgIGgoXG4gICAgICAnc3BhbicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LVN0YXR1c0Jhci1jb250ZW50UGFkZGluZycgfSxcbiAgICAgIGkxOG4oJ3VwbG9hZEZhaWxlZCcpLFxuICAgICAgJy4nXG4gICAgKSxcbiAgICBoKFxuICAgICAgJ3NwYW4nLFxuICAgICAgeyAnY2xhc3MnOiAndXBweS1TdGF0dXNCYXItZGV0YWlscycsXG4gICAgICAgICdhcmlhLWxhYmVsJzogZXJyb3IsXG4gICAgICAgICdkYXRhLW1pY3JvdGlwLXBvc2l0aW9uJzogJ3RvcCcsXG4gICAgICAgICdkYXRhLW1pY3JvdGlwLXNpemUnOiAnbGFyZ2UnLFxuICAgICAgICByb2xlOiAndG9vbHRpcCcgfSxcbiAgICAgICc/J1xuICAgIClcbiAgKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICdTVEFURV9FUlJPUic6ICdlcnJvcicsXG4gICdTVEFURV9XQUlUSU5HJzogJ3dhaXRpbmcnLFxuICAnU1RBVEVfUFJFUFJPQ0VTU0lORyc6ICdwcmVwcm9jZXNzaW5nJyxcbiAgJ1NUQVRFX1VQTE9BRElORyc6ICd1cGxvYWRpbmcnLFxuICAnU1RBVEVfUE9TVFBST0NFU1NJTkcnOiAncG9zdHByb2Nlc3NpbmcnLFxuICAnU1RBVEVfQ09NUExFVEUnOiAnY29tcGxldGUnXG59OyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnQHVwcHkvY29yZScpLFxuICAgIFBsdWdpbiA9IF9yZXF1aXJlLlBsdWdpbjtcblxudmFyIFRyYW5zbGF0b3IgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvVHJhbnNsYXRvcicpO1xudmFyIFN0YXR1c0JhclVJID0gcmVxdWlyZSgnLi9TdGF0dXNCYXInKTtcbnZhciBzdGF0dXNCYXJTdGF0ZXMgPSByZXF1aXJlKCcuL1N0YXR1c0JhclN0YXRlcycpO1xudmFyIGdldFNwZWVkID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL2dldFNwZWVkJyk7XG52YXIgZ2V0Qnl0ZXNSZW1haW5pbmcgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvZ2V0Qnl0ZXNSZW1haW5pbmcnKTtcblxuLyoqXG4gKiBTdGF0dXNCYXI6IHJlbmRlcnMgYSBzdGF0dXMgYmFyIHdpdGggdXBsb2FkL3BhdXNlL3Jlc3VtZS9jYW5jZWwvcmV0cnkgYnV0dG9ucyxcbiAqIHByb2dyZXNzIHBlcmNlbnRhZ2UgYW5kIHRpbWUgcmVtYWluaW5nLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChfUGx1Z2luKSB7XG4gIF9pbmhlcml0cyhTdGF0dXNCYXIsIF9QbHVnaW4pO1xuXG4gIGZ1bmN0aW9uIFN0YXR1c0Jhcih1cHB5LCBvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXR1c0Jhcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUGx1Z2luLmNhbGwodGhpcywgdXBweSwgb3B0cykpO1xuXG4gICAgX3RoaXMuaWQgPSBfdGhpcy5vcHRzLmlkIHx8ICdTdGF0dXNCYXInO1xuICAgIF90aGlzLnRpdGxlID0gJ1N0YXR1c0Jhcic7XG4gICAgX3RoaXMudHlwZSA9ICdwcm9ncmVzc2luZGljYXRvcic7XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZSA9IHtcbiAgICAgIHN0cmluZ3M6IHtcbiAgICAgICAgdXBsb2FkaW5nOiAnVXBsb2FkaW5nJyxcbiAgICAgICAgdXBsb2FkOiAnVXBsb2FkJyxcbiAgICAgICAgY29tcGxldGU6ICdDb21wbGV0ZScsXG4gICAgICAgIHVwbG9hZEZhaWxlZDogJ1VwbG9hZCBmYWlsZWQnLFxuICAgICAgICBwbGVhc2VQcmVzc1JldHJ5OiAnUGxlYXNlIHByZXNzIFJldHJ5IHRvIHVwbG9hZCBhZ2FpbicsXG4gICAgICAgIHBhdXNlZDogJ1BhdXNlZCcsXG4gICAgICAgIGVycm9yOiAnRXJyb3InLFxuICAgICAgICByZXRyeTogJ1JldHJ5JyxcbiAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgcGF1c2U6ICdQYXVzZScsXG4gICAgICAgIHJlc3VtZTogJ1Jlc3VtZScsXG4gICAgICAgIHByZXNzVG9SZXRyeTogJ1ByZXNzIHRvIHJldHJ5JyxcbiAgICAgICAgLy8gcmV0cnlVcGxvYWQ6ICdSZXRyeSB1cGxvYWQnLFxuICAgICAgICAvLyByZXN1bWVVcGxvYWQ6ICdSZXN1bWUgdXBsb2FkJyxcbiAgICAgICAgLy8gY2FuY2VsVXBsb2FkOiAnQ2FuY2VsIHVwbG9hZCcsXG4gICAgICAgIC8vIHBhdXNlVXBsb2FkOiAnUGF1c2UgdXBsb2FkJyxcbiAgICAgICAgZmlsZXNVcGxvYWRlZE9mVG90YWw6IHtcbiAgICAgICAgICAwOiAnJXtjb21wbGV0ZX0gb2YgJXtzbWFydF9jb3VudH0gZmlsZSB1cGxvYWRlZCcsXG4gICAgICAgICAgMTogJyV7Y29tcGxldGV9IG9mICV7c21hcnRfY291bnR9IGZpbGVzIHVwbG9hZGVkJ1xuICAgICAgICB9LFxuICAgICAgICBkYXRhVXBsb2FkZWRPZlRvdGFsOiAnJXtjb21wbGV0ZX0gb2YgJXt0b3RhbH0nLFxuICAgICAgICB4VGltZUxlZnQ6ICcle3RpbWV9IGxlZnQnLFxuICAgICAgICB1cGxvYWRYRmlsZXM6IHtcbiAgICAgICAgICAwOiAnVXBsb2FkICV7c21hcnRfY291bnR9IGZpbGUnLFxuICAgICAgICAgIDE6ICdVcGxvYWQgJXtzbWFydF9jb3VudH0gZmlsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHVwbG9hZFhOZXdGaWxlczoge1xuICAgICAgICAgIDA6ICdVcGxvYWQgKyV7c21hcnRfY291bnR9IGZpbGUnLFxuICAgICAgICAgIDE6ICdVcGxvYWQgKyV7c21hcnRfY291bnR9IGZpbGVzJ1xuICAgICAgICB9LFxuICAgICAgICB4TW9yZUZpbGVzQWRkZWQ6IHtcbiAgICAgICAgICAwOiAnJXtzbWFydF9jb3VudH0gbW9yZSBmaWxlIGFkZGVkJyxcbiAgICAgICAgICAxOiAnJXtzbWFydF9jb3VudH0gbW9yZSBmaWxlcyBhZGRlZCdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gICAgfTt2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICB0YXJnZXQ6ICdib2R5JyxcbiAgICAgIGhpZGVVcGxvYWRCdXR0b246IGZhbHNlLFxuICAgICAgaGlkZVJldHJ5QnV0dG9uOiBmYWxzZSxcbiAgICAgIGhpZGVQYXVzZVJlc3VtZUJ1dHRvbjogZmFsc2UsXG4gICAgICBoaWRlQ2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgICAgIHNob3dQcm9ncmVzc0RldGFpbHM6IGZhbHNlLFxuICAgICAgbG9jYWxlOiBkZWZhdWx0TG9jYWxlLFxuICAgICAgaGlkZUFmdGVyRmluaXNoOiB0cnVlXG5cbiAgICAgIC8vIG1lcmdlIGRlZmF1bHQgb3B0aW9ucyB3aXRoIHRoZSBvbmVzIHNldCBieSB1c2VyXG4gICAgfTtfdGhpcy5vcHRzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRzKTtcblxuICAgIF90aGlzLnRyYW5zbGF0b3IgPSBuZXcgVHJhbnNsYXRvcihbZGVmYXVsdExvY2FsZSwgX3RoaXMudXBweS5sb2NhbGUsIF90aGlzLm9wdHMubG9jYWxlXSk7XG4gICAgX3RoaXMuaTE4biA9IF90aGlzLnRyYW5zbGF0b3IudHJhbnNsYXRlLmJpbmQoX3RoaXMudHJhbnNsYXRvcik7XG5cbiAgICBfdGhpcy5zdGFydFVwbG9hZCA9IF90aGlzLnN0YXJ0VXBsb2FkLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnJlbmRlciA9IF90aGlzLnJlbmRlci5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5pbnN0YWxsID0gX3RoaXMuaW5zdGFsbC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTdGF0dXNCYXIucHJvdG90eXBlLmdldFRvdGFsU3BlZWQgPSBmdW5jdGlvbiBnZXRUb3RhbFNwZWVkKGZpbGVzKSB7XG4gICAgdmFyIHRvdGFsU3BlZWQgPSAwO1xuICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHRvdGFsU3BlZWQgPSB0b3RhbFNwZWVkICsgZ2V0U3BlZWQoZmlsZS5wcm9ncmVzcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvdGFsU3BlZWQ7XG4gIH07XG5cbiAgU3RhdHVzQmFyLnByb3RvdHlwZS5nZXRUb3RhbEVUQSA9IGZ1bmN0aW9uIGdldFRvdGFsRVRBKGZpbGVzKSB7XG4gICAgdmFyIHRvdGFsU3BlZWQgPSB0aGlzLmdldFRvdGFsU3BlZWQoZmlsZXMpO1xuICAgIGlmICh0b3RhbFNwZWVkID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgdG90YWxCeXRlc1JlbWFpbmluZyA9IGZpbGVzLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIGZpbGUpIHtcbiAgICAgIHJldHVybiB0b3RhbCArIGdldEJ5dGVzUmVtYWluaW5nKGZpbGUucHJvZ3Jlc3MpO1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodG90YWxCeXRlc1JlbWFpbmluZyAvIHRvdGFsU3BlZWQgKiAxMCkgLyAxMDtcbiAgfTtcblxuICBTdGF0dXNCYXIucHJvdG90eXBlLnN0YXJ0VXBsb2FkID0gZnVuY3Rpb24gc3RhcnRVcGxvYWQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcy51cHB5LnVwbG9hZCgpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIF90aGlzMi51cHB5LmxvZyhlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgIC8vIElnbm9yZVxuICAgIH0pO1xuICB9O1xuXG4gIFN0YXR1c0Jhci5wcm90b3R5cGUuZ2V0VXBsb2FkaW5nU3RhdGUgPSBmdW5jdGlvbiBnZXRVcGxvYWRpbmdTdGF0ZShpc0FsbEVycm9yZWQsIGlzQWxsQ29tcGxldGUsIGZpbGVzKSB7XG4gICAgaWYgKGlzQWxsRXJyb3JlZCkge1xuICAgICAgcmV0dXJuIHN0YXR1c0JhclN0YXRlcy5TVEFURV9FUlJPUjtcbiAgICB9XG5cbiAgICBpZiAoaXNBbGxDb21wbGV0ZSkge1xuICAgICAgcmV0dXJuIHN0YXR1c0JhclN0YXRlcy5TVEFURV9DT01QTEVURTtcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfV0FJVElORztcbiAgICB2YXIgZmlsZUlEcyA9IE9iamVjdC5rZXlzKGZpbGVzKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVJRHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwcm9ncmVzcyA9IGZpbGVzW2ZpbGVJRHNbaV1dLnByb2dyZXNzO1xuICAgICAgLy8gSWYgQU5ZIGZpbGVzIGFyZSBiZWluZyB1cGxvYWRlZCByaWdodCBub3csIHNob3cgdGhlIHVwbG9hZGluZyBzdGF0ZS5cbiAgICAgIGlmIChwcm9ncmVzcy51cGxvYWRTdGFydGVkICYmICFwcm9ncmVzcy51cGxvYWRDb21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX1VQTE9BRElORztcbiAgICAgIH1cbiAgICAgIC8vIElmIGZpbGVzIGFyZSBiZWluZyBwcmVwcm9jZXNzZWQgQU5EIHBvc3Rwcm9jZXNzZWQgYXQgdGhpcyB0aW1lLCB3ZSBzaG93IHRoZVxuICAgICAgLy8gcHJlcHJvY2VzcyBzdGF0ZS4gSWYgYW55IGZpbGVzIGFyZSBiZWluZyB1cGxvYWRlZCB3ZSBzaG93IHVwbG9hZGluZy5cbiAgICAgIGlmIChwcm9ncmVzcy5wcmVwcm9jZXNzICYmIHN0YXRlICE9PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfVVBMT0FESU5HKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX1BSRVBST0NFU1NJTkc7XG4gICAgICB9XG4gICAgICAvLyBJZiBOTyBmaWxlcyBhcmUgYmVpbmcgcHJlcHJvY2Vzc2VkIG9yIHVwbG9hZGVkIHJpZ2h0IG5vdywgYnV0IHNvbWUgZmlsZXMgYXJlXG4gICAgICAvLyBiZWluZyBwb3N0cHJvY2Vzc2VkLCBzaG93IHRoZSBwb3N0cHJvY2VzcyBzdGF0ZS5cbiAgICAgIGlmIChwcm9ncmVzcy5wb3N0cHJvY2VzcyAmJiBzdGF0ZSAhPT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX1VQTE9BRElORyAmJiBzdGF0ZSAhPT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX1BSRVBST0NFU1NJTkcpIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfUE9TVFBST0NFU1NJTkc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBTdGF0dXNCYXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihzdGF0ZSkge1xuICAgIHZhciBjYXBhYmlsaXRpZXMgPSBzdGF0ZS5jYXBhYmlsaXRpZXMsXG4gICAgICAgIGZpbGVzID0gc3RhdGUuZmlsZXMsXG4gICAgICAgIGFsbG93TmV3VXBsb2FkID0gc3RhdGUuYWxsb3dOZXdVcGxvYWQsXG4gICAgICAgIHRvdGFsUHJvZ3Jlc3MgPSBzdGF0ZS50b3RhbFByb2dyZXNzLFxuICAgICAgICBlcnJvciA9IHN0YXRlLmVycm9yO1xuXG4gICAgLy8gVE9ETzogbW92ZSB0aGlzIHRvIENvcmUsIHRvIHNoYXJlIGJldHdlZW4gU3RhdHVzIEJhciBhbmQgRGFzaGJvYXJkXG4gICAgLy8gKGFuZCBhbnkgb3RoZXIgcGx1Z2luIHRoYXQgbWlnaHQgbmVlZCBpdCwgdG9vKVxuXG4gICAgdmFyIG5ld0ZpbGVzID0gT2JqZWN0LmtleXMoZmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuICFmaWxlc1tmaWxlXS5wcm9ncmVzcy51cGxvYWRTdGFydGVkICYmICFmaWxlc1tmaWxlXS5wcm9ncmVzcy5wcmVwcm9jZXNzICYmICFmaWxlc1tmaWxlXS5wcm9ncmVzcy5wb3N0cHJvY2VzcztcbiAgICB9KTtcblxuICAgIHZhciB1cGxvYWRTdGFydGVkRmlsZXMgPSBPYmplY3Qua2V5cyhmaWxlcykuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gZmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkU3RhcnRlZDtcbiAgICB9KTtcblxuICAgIHZhciBwYXVzZWRGaWxlcyA9IHVwbG9hZFN0YXJ0ZWRGaWxlcy5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlc1tmaWxlXS5pc1BhdXNlZDtcbiAgICB9KTtcblxuICAgIHZhciBjb21wbGV0ZUZpbGVzID0gT2JqZWN0LmtleXMoZmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuIGZpbGVzW2ZpbGVdLnByb2dyZXNzLnVwbG9hZENvbXBsZXRlO1xuICAgIH0pO1xuXG4gICAgdmFyIGVycm9yZWRGaWxlcyA9IE9iamVjdC5rZXlzKGZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlc1tmaWxlXS5lcnJvcjtcbiAgICB9KTtcblxuICAgIHZhciBpblByb2dyZXNzRmlsZXMgPSBPYmplY3Qua2V5cyhmaWxlcykuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gIWZpbGVzW2ZpbGVdLnByb2dyZXNzLnVwbG9hZENvbXBsZXRlICYmIGZpbGVzW2ZpbGVdLnByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQ7XG4gICAgfSk7XG5cbiAgICB2YXIgaW5Qcm9ncmVzc05vdFBhdXNlZEZpbGVzID0gaW5Qcm9ncmVzc0ZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuICFmaWxlc1tmaWxlXS5pc1BhdXNlZDtcbiAgICB9KTtcblxuICAgIHZhciBzdGFydGVkRmlsZXMgPSBPYmplY3Qua2V5cyhmaWxlcykuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gZmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkU3RhcnRlZCB8fCBmaWxlc1tmaWxlXS5wcm9ncmVzcy5wcmVwcm9jZXNzIHx8IGZpbGVzW2ZpbGVdLnByb2dyZXNzLnBvc3Rwcm9jZXNzO1xuICAgIH0pO1xuXG4gICAgdmFyIHByb2Nlc3NpbmdGaWxlcyA9IE9iamVjdC5rZXlzKGZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlc1tmaWxlXS5wcm9ncmVzcy5wcmVwcm9jZXNzIHx8IGZpbGVzW2ZpbGVdLnByb2dyZXNzLnBvc3Rwcm9jZXNzO1xuICAgIH0pO1xuXG4gICAgdmFyIGluUHJvZ3Jlc3NOb3RQYXVzZWRGaWxlc0FycmF5ID0gaW5Qcm9ncmVzc05vdFBhdXNlZEZpbGVzLm1hcChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuIGZpbGVzW2ZpbGVdO1xuICAgIH0pO1xuXG4gICAgdmFyIHRvdGFsRVRBID0gdGhpcy5nZXRUb3RhbEVUQShpblByb2dyZXNzTm90UGF1c2VkRmlsZXNBcnJheSk7XG5cbiAgICAvLyB0b3RhbCBzaXplIGFuZCB1cGxvYWRlZCBzaXplXG4gICAgdmFyIHRvdGFsU2l6ZSA9IDA7XG4gICAgdmFyIHRvdGFsVXBsb2FkZWRTaXplID0gMDtcbiAgICBpblByb2dyZXNzTm90UGF1c2VkRmlsZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICB0b3RhbFNpemUgPSB0b3RhbFNpemUgKyAoZmlsZS5wcm9ncmVzcy5ieXRlc1RvdGFsIHx8IDApO1xuICAgICAgdG90YWxVcGxvYWRlZFNpemUgPSB0b3RhbFVwbG9hZGVkU2l6ZSArIChmaWxlLnByb2dyZXNzLmJ5dGVzVXBsb2FkZWQgfHwgMCk7XG4gICAgfSk7XG5cbiAgICB2YXIgaXNVcGxvYWRTdGFydGVkID0gdXBsb2FkU3RhcnRlZEZpbGVzLmxlbmd0aCA+IDA7XG5cbiAgICB2YXIgaXNBbGxDb21wbGV0ZSA9IHRvdGFsUHJvZ3Jlc3MgPT09IDEwMCAmJiBjb21wbGV0ZUZpbGVzLmxlbmd0aCA9PT0gT2JqZWN0LmtleXMoZmlsZXMpLmxlbmd0aCAmJiBwcm9jZXNzaW5nRmlsZXMubGVuZ3RoID09PSAwO1xuXG4gICAgdmFyIGlzQWxsRXJyb3JlZCA9IGlzVXBsb2FkU3RhcnRlZCAmJiBlcnJvcmVkRmlsZXMubGVuZ3RoID09PSB1cGxvYWRTdGFydGVkRmlsZXMubGVuZ3RoO1xuXG4gICAgdmFyIGlzQWxsUGF1c2VkID0gaW5Qcm9ncmVzc0ZpbGVzLmxlbmd0aCAhPT0gMCAmJiBwYXVzZWRGaWxlcy5sZW5ndGggPT09IGluUHJvZ3Jlc3NGaWxlcy5sZW5ndGg7XG4gICAgLy8gY29uc3QgaXNBbGxQYXVzZWQgPSBpblByb2dyZXNzRmlsZXMubGVuZ3RoID09PSAwICYmXG4gICAgLy8gICAhaXNBbGxDb21wbGV0ZSAmJlxuICAgIC8vICAgIWlzQWxsRXJyb3JlZCAmJlxuICAgIC8vICAgdXBsb2FkU3RhcnRlZEZpbGVzLmxlbmd0aCA+IDBcblxuICAgIHZhciBpc1VwbG9hZEluUHJvZ3Jlc3MgPSBpblByb2dyZXNzRmlsZXMubGVuZ3RoID4gMDtcblxuICAgIHZhciByZXN1bWFibGVVcGxvYWRzID0gY2FwYWJpbGl0aWVzLnJlc3VtYWJsZVVwbG9hZHMgfHwgZmFsc2U7XG5cbiAgICByZXR1cm4gU3RhdHVzQmFyVUkoe1xuICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgdXBsb2FkU3RhdGU6IHRoaXMuZ2V0VXBsb2FkaW5nU3RhdGUoaXNBbGxFcnJvcmVkLCBpc0FsbENvbXBsZXRlLCBzdGF0ZS5maWxlcyB8fCB7fSksXG4gICAgICBhbGxvd05ld1VwbG9hZDogYWxsb3dOZXdVcGxvYWQsXG4gICAgICB0b3RhbFByb2dyZXNzOiB0b3RhbFByb2dyZXNzLFxuICAgICAgdG90YWxTaXplOiB0b3RhbFNpemUsXG4gICAgICB0b3RhbFVwbG9hZGVkU2l6ZTogdG90YWxVcGxvYWRlZFNpemUsXG4gICAgICBpc0FsbENvbXBsZXRlOiBpc0FsbENvbXBsZXRlLFxuICAgICAgaXNBbGxQYXVzZWQ6IGlzQWxsUGF1c2VkLFxuICAgICAgaXNBbGxFcnJvcmVkOiBpc0FsbEVycm9yZWQsXG4gICAgICBpc1VwbG9hZFN0YXJ0ZWQ6IGlzVXBsb2FkU3RhcnRlZCxcbiAgICAgIGlzVXBsb2FkSW5Qcm9ncmVzczogaXNVcGxvYWRJblByb2dyZXNzLFxuICAgICAgY29tcGxldGU6IGNvbXBsZXRlRmlsZXMubGVuZ3RoLFxuICAgICAgbmV3RmlsZXM6IG5ld0ZpbGVzLmxlbmd0aCxcbiAgICAgIG51bVVwbG9hZHM6IHN0YXJ0ZWRGaWxlcy5sZW5ndGgsXG4gICAgICB0b3RhbEVUQTogdG90YWxFVEEsXG4gICAgICBmaWxlczogZmlsZXMsXG4gICAgICBpMThuOiB0aGlzLmkxOG4sXG4gICAgICBwYXVzZUFsbDogdGhpcy51cHB5LnBhdXNlQWxsLFxuICAgICAgcmVzdW1lQWxsOiB0aGlzLnVwcHkucmVzdW1lQWxsLFxuICAgICAgcmV0cnlBbGw6IHRoaXMudXBweS5yZXRyeUFsbCxcbiAgICAgIGNhbmNlbEFsbDogdGhpcy51cHB5LmNhbmNlbEFsbCxcbiAgICAgIHN0YXJ0VXBsb2FkOiB0aGlzLnN0YXJ0VXBsb2FkLFxuICAgICAgcmVzdW1hYmxlVXBsb2FkczogcmVzdW1hYmxlVXBsb2FkcyxcbiAgICAgIHNob3dQcm9ncmVzc0RldGFpbHM6IHRoaXMub3B0cy5zaG93UHJvZ3Jlc3NEZXRhaWxzLFxuICAgICAgaGlkZVVwbG9hZEJ1dHRvbjogdGhpcy5vcHRzLmhpZGVVcGxvYWRCdXR0b24sXG4gICAgICBoaWRlUmV0cnlCdXR0b246IHRoaXMub3B0cy5oaWRlUmV0cnlCdXR0b24sXG4gICAgICBoaWRlUGF1c2VSZXN1bWVCdXR0b246IHRoaXMub3B0cy5oaWRlUGF1c2VSZXN1bWVCdXR0b24sXG4gICAgICBoaWRlQ2FuY2VsQnV0dG9uOiB0aGlzLm9wdHMuaGlkZUNhbmNlbEJ1dHRvbixcbiAgICAgIGhpZGVBZnRlckZpbmlzaDogdGhpcy5vcHRzLmhpZGVBZnRlckZpbmlzaCxcbiAgICAgIGlzVGFyZ2V0RE9NRWw6IHRoaXMuaXNUYXJnZXRET01FbFxuICAgIH0pO1xuICB9O1xuXG4gIFN0YXR1c0Jhci5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMub3B0cy50YXJnZXQ7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy5tb3VudCh0YXJnZXQsIHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBTdGF0dXNCYXIucHJvdG90eXBlLnVuaW5zdGFsbCA9IGZ1bmN0aW9uIHVuaW5zdGFsbCgpIHtcbiAgICB0aGlzLnVubW91bnQoKTtcbiAgfTtcblxuICByZXR1cm4gU3RhdHVzQmFyO1xufShQbHVnaW4pOyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogRGVmYXVsdCBzdG9yZSB0aGF0IGtlZXBzIHN0YXRlIGluIGEgc2ltcGxlIG9iamVjdC5cbiAqL1xudmFyIERlZmF1bHRTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGVmYXVsdFN0b3JlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWZhdWx0U3RvcmUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gIH1cblxuICBEZWZhdWx0U3RvcmUucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH07XG5cbiAgRGVmYXVsdFN0b3JlLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKHBhdGNoKSB7XG4gICAgdmFyIHByZXZTdGF0ZSA9IF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlKTtcbiAgICB2YXIgbmV4dFN0YXRlID0gX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUsIHBhdGNoKTtcblxuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fcHVibGlzaChwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcGF0Y2gpO1xuICB9O1xuXG4gIERlZmF1bHRTdG9yZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuY2FsbGJhY2tzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIGxpc3RlbmVyLlxuICAgICAgX3RoaXMuY2FsbGJhY2tzLnNwbGljZShfdGhpcy5jYWxsYmFja3MuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xuICAgIH07XG4gIH07XG5cbiAgRGVmYXVsdFN0b3JlLnByb3RvdHlwZS5fcHVibGlzaCA9IGZ1bmN0aW9uIF9wdWJsaXNoKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBEZWZhdWx0U3RvcmU7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmYXVsdFN0b3JlKCkge1xuICByZXR1cm4gbmV3IERlZmF1bHRTdG9yZSgpO1xufTsiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ0B1cHB5L2NvcmUnKSxcbiAgICBQbHVnaW4gPSBfcmVxdWlyZS5QbHVnaW47XG5cbnZhciBkYXRhVVJJdG9CbG9iID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL2RhdGFVUkl0b0Jsb2InKTtcbnZhciBpc09iamVjdFVSTCA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9pc09iamVjdFVSTCcpO1xudmFyIGlzUHJldmlld1N1cHBvcnRlZCA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9pc1ByZXZpZXdTdXBwb3J0ZWQnKTtcblxuLyoqXG4gKiBUaGUgVGh1bWJuYWlsIEdlbmVyYXRvciBwbHVnaW5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChfUGx1Z2luKSB7XG4gIF9pbmhlcml0cyhUaHVtYm5haWxHZW5lcmF0b3IsIF9QbHVnaW4pO1xuXG4gIGZ1bmN0aW9uIFRodW1ibmFpbEdlbmVyYXRvcih1cHB5LCBvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRodW1ibmFpbEdlbmVyYXRvcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUGx1Z2luLmNhbGwodGhpcywgdXBweSwgb3B0cykpO1xuXG4gICAgX3RoaXMudHlwZSA9ICd0aHVtYm5haWwnO1xuICAgIF90aGlzLmlkID0gX3RoaXMub3B0cy5pZCB8fCAnVGh1bWJuYWlsR2VuZXJhdG9yJztcbiAgICBfdGhpcy50aXRsZSA9ICdUaHVtYm5haWwgR2VuZXJhdG9yJztcbiAgICBfdGhpcy5xdWV1ZSA9IFtdO1xuICAgIF90aGlzLnF1ZXVlUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIF90aGlzLmRlZmF1bHRUaHVtYm5haWxEaW1lbnNpb24gPSAyMDA7XG5cbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICB0aHVtYm5haWxXaWR0aDogbnVsbCxcbiAgICAgIHRodW1ibmFpbEhlaWdodDogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpcy5vcHRzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRzKTtcblxuICAgIF90aGlzLm9uRmlsZUFkZGVkID0gX3RoaXMub25GaWxlQWRkZWQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25GaWxlUmVtb3ZlZCA9IF90aGlzLm9uRmlsZVJlbW92ZWQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25SZXN0b3JlZCA9IF90aGlzLm9uUmVzdG9yZWQuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRodW1ibmFpbCBmb3IgdGhlIGdpdmVuIFVwcHkgZmlsZSBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7e2RhdGE6IEJsb2J9fSBmaWxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cblxuXG4gIFRodW1ibmFpbEdlbmVyYXRvci5wcm90b3R5cGUuY3JlYXRlVGh1bWJuYWlsID0gZnVuY3Rpb24gY3JlYXRlVGh1bWJuYWlsKGZpbGUsIHRhcmdldFdpZHRoLCB0YXJnZXRIZWlnaHQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBvcmlnaW5hbFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZS5kYXRhKTtcblxuICAgIHZhciBvbmxvYWQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlLnNyYyA9IG9yaWdpbmFsVXJsO1xuICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChvcmlnaW5hbFVybCk7XG4gICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgfSk7XG4gICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKG9yaWdpbmFsVXJsKTtcbiAgICAgICAgcmVqZWN0KGV2ZW50LmVycm9yIHx8IG5ldyBFcnJvcignQ291bGQgbm90IGNyZWF0ZSB0aHVtYm5haWwnKSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvbmxvYWQudGhlbihmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIHZhciBkaW1lbnNpb25zID0gX3RoaXMyLmdldFByb3BvcnRpb25hbERpbWVuc2lvbnMoaW1hZ2UsIHRhcmdldFdpZHRoLCB0YXJnZXRIZWlnaHQpO1xuICAgICAgdmFyIGNhbnZhcyA9IF90aGlzMi5yZXNpemVJbWFnZShpbWFnZSwgZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgcmV0dXJuIF90aGlzMi5jYW52YXNUb0Jsb2IoY2FudmFzLCAnaW1hZ2UvcG5nJyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoYmxvYikge1xuICAgICAgcmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmV3IGNhbGN1bGF0ZWQgZGltZW5zaW9ucyBmb3IgdGhlIGdpdmVuIGltYWdlIGFuZCBhIHRhcmdldCB3aWR0aFxuICAgKiBvciBoZWlnaHQuIElmIGJvdGggd2lkdGggYW5kIGhlaWdodCBhcmUgZ2l2ZW4sIG9ubHkgd2lkdGggaXMgdGFrZW4gaW50b1xuICAgKiBhY2NvdW50LiBJZiBuZWl0aGVyIHdpZHRoIG5vciBoZWlnaHQgYXJlIGdpdmVuLCB0aGUgZGVmYXVsdCBkaW1lbnNpb25cbiAgICogaXMgdXNlZC5cbiAgICovXG5cblxuICBUaHVtYm5haWxHZW5lcmF0b3IucHJvdG90eXBlLmdldFByb3BvcnRpb25hbERpbWVuc2lvbnMgPSBmdW5jdGlvbiBnZXRQcm9wb3J0aW9uYWxEaW1lbnNpb25zKGltZywgd2lkdGgsIGhlaWdodCkge1xuICAgIHZhciBhc3BlY3QgPSBpbWcud2lkdGggLyBpbWcuaGVpZ2h0O1xuXG4gICAgaWYgKHdpZHRoICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKHdpZHRoIC8gYXNwZWN0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGhlaWdodCAqIGFzcGVjdCksXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy5kZWZhdWx0VGh1bWJuYWlsRGltZW5zaW9uLFxuICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKHRoaXMuZGVmYXVsdFRodW1ibmFpbERpbWVuc2lvbiAvIGFzcGVjdClcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgdGhlIGltYWdlIGRvZXNu4oCZdCBleGNlZWQgYnJvd3Nlci9kZXZpY2UgY2FudmFzIGxpbWl0cy5cbiAgICogRm9yIGlvcyB3aXRoIDI1NiBSQU0gYW5kIGllXG4gICAqL1xuXG5cbiAgVGh1bWJuYWlsR2VuZXJhdG9yLnByb3RvdHlwZS5wcm90ZWN0ID0gZnVuY3Rpb24gcHJvdGVjdChpbWFnZSkge1xuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwODE0ODMvbWF4aW11bS1zaXplLW9mLWEtY2FudmFzLWVsZW1lbnRcblxuICAgIHZhciByYXRpbyA9IGltYWdlLndpZHRoIC8gaW1hZ2UuaGVpZ2h0O1xuXG4gICAgdmFyIG1heFNxdWFyZSA9IDUwMDAwMDA7IC8vIGlvcyBtYXggY2FudmFzIHNxdWFyZVxuICAgIHZhciBtYXhTaXplID0gNDA5NjsgLy8gaWUgbWF4IGNhbnZhcyBkaW1lbnNpb25zXG5cbiAgICB2YXIgbWF4VyA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KG1heFNxdWFyZSAqIHJhdGlvKSk7XG4gICAgdmFyIG1heEggPSBNYXRoLmZsb29yKG1heFNxdWFyZSAvIE1hdGguc3FydChtYXhTcXVhcmUgKiByYXRpbykpO1xuICAgIGlmIChtYXhXID4gbWF4U2l6ZSkge1xuICAgICAgbWF4VyA9IG1heFNpemU7XG4gICAgICBtYXhIID0gTWF0aC5yb3VuZChtYXhXIC8gcmF0aW8pO1xuICAgIH1cbiAgICBpZiAobWF4SCA+IG1heFNpemUpIHtcbiAgICAgIG1heEggPSBtYXhTaXplO1xuICAgICAgbWF4VyA9IE1hdGgucm91bmQocmF0aW8gKiBtYXhIKTtcbiAgICB9XG4gICAgaWYgKGltYWdlLndpZHRoID4gbWF4Vykge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzLndpZHRoID0gbWF4VztcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBtYXhIO1xuICAgICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBtYXhXLCBtYXhIKTtcbiAgICAgIGltYWdlID0gY2FudmFzO1xuICAgIH1cblxuICAgIHJldHVybiBpbWFnZTtcbiAgfTtcblxuICAvKipcbiAgICogUmVzaXplIGFuIGltYWdlIHRvIHRoZSB0YXJnZXQgYHdpZHRoYCBhbmQgYGhlaWdodGAuXG4gICAqXG4gICAqIFJldHVybnMgYSBDYW52YXMgd2l0aCB0aGUgcmVzaXplZCBpbWFnZSBvbiBpdC5cbiAgICovXG5cblxuICBUaHVtYm5haWxHZW5lcmF0b3IucHJvdG90eXBlLnJlc2l6ZUltYWdlID0gZnVuY3Rpb24gcmVzaXplSW1hZ2UoaW1hZ2UsIHRhcmdldFdpZHRoLCB0YXJnZXRIZWlnaHQpIHtcbiAgICAvLyBSZXNpemluZyBpbiBzdGVwcyByZWZhY3RvcmVkIHRvIHVzZSBhIHNvbHV0aW9uIGZyb21cbiAgICAvLyBodHRwczovL2Jsb2cudXBsb2FkY2FyZS5jb20vaW1hZ2UtcmVzaXplLWluLWJyb3dzZXJzLWlzLWJyb2tlbi1lMzhlZWQwOGRmMDFcblxuICAgIGltYWdlID0gdGhpcy5wcm90ZWN0KGltYWdlKTtcblxuICAgIC8vIFVzZSB0aGUgUG9seWZpbGwgZm9yIE1hdGgubG9nMigpIHNpbmNlIElFIGRvZXNuJ3Qgc3VwcG9ydCBsb2cyXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9sb2cyI1BvbHlmaWxsXG4gICAgdmFyIHN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKGltYWdlLndpZHRoIC8gdGFyZ2V0V2lkdGgpICogTWF0aC5MT0cyRSk7XG4gICAgaWYgKHN0ZXBzIDwgMSkge1xuICAgICAgc3RlcHMgPSAxO1xuICAgIH1cbiAgICB2YXIgc1cgPSB0YXJnZXRXaWR0aCAqIE1hdGgucG93KDIsIHN0ZXBzIC0gMSk7XG4gICAgdmFyIHNIID0gdGFyZ2V0SGVpZ2h0ICogTWF0aC5wb3coMiwgc3RlcHMgLSAxKTtcbiAgICB2YXIgeCA9IDI7XG5cbiAgICB3aGlsZSAoc3RlcHMtLSkge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzLndpZHRoID0gc1c7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gc0g7XG4gICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIHNXLCBzSCk7XG4gICAgICBpbWFnZSA9IGNhbnZhcztcblxuICAgICAgc1cgPSBNYXRoLnJvdW5kKHNXIC8geCk7XG4gICAgICBzSCA9IE1hdGgucm91bmQoc0ggLyB4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNhdmUgYSA8Y2FudmFzPiBlbGVtZW50J3MgY29udGVudCB0byBhIEJsb2Igb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXNcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG5cblxuICBUaHVtYm5haWxHZW5lcmF0b3IucHJvdG90eXBlLmNhbnZhc1RvQmxvYiA9IGZ1bmN0aW9uIGNhbnZhc1RvQmxvYihjYW52YXMsIHR5cGUsIHF1YWxpdHkpIHtcbiAgICBpZiAoY2FudmFzLnRvQmxvYikge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIGNhbnZhcy50b0Jsb2IocmVzb2x2ZSwgdHlwZSwgcXVhbGl0eSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRhdGFVUkl0b0Jsb2IoY2FudmFzLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSwge30pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHByZXZpZXcgVVJMIGZvciBhIGZpbGUuXG4gICAqL1xuXG5cbiAgVGh1bWJuYWlsR2VuZXJhdG9yLnByb3RvdHlwZS5zZXRQcmV2aWV3VVJMID0gZnVuY3Rpb24gc2V0UHJldmlld1VSTChmaWxlSUQsIHByZXZpZXcpIHtcbiAgICB0aGlzLnVwcHkuc2V0RmlsZVN0YXRlKGZpbGVJRCwgeyBwcmV2aWV3OiBwcmV2aWV3IH0pO1xuICB9O1xuXG4gIFRodW1ibmFpbEdlbmVyYXRvci5wcm90b3R5cGUuYWRkVG9RdWV1ZSA9IGZ1bmN0aW9uIGFkZFRvUXVldWUoaXRlbSkge1xuICAgIHRoaXMucXVldWUucHVzaChpdGVtKTtcbiAgICBpZiAodGhpcy5xdWV1ZVByb2Nlc3NpbmcgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpO1xuICAgIH1cbiAgfTtcblxuICBUaHVtYm5haWxHZW5lcmF0b3IucHJvdG90eXBlLnByb2Nlc3NRdWV1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NRdWV1ZSgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMucXVldWVQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMucXVldWUuc2hpZnQoKTtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RUaHVtYm5haWwoY3VycmVudCkuY2F0Y2goZnVuY3Rpb24gKGVycikge30pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaGFuZGxlLWNhbGxiYWNrLWVyclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLnByb2Nlc3NRdWV1ZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucXVldWVQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnVwcHkubG9nKCdbVGh1bWJuYWlsR2VuZXJhdG9yXSBFbXB0aWVkIHRodW1ibmFpbCBxdWV1ZScpO1xuICAgICAgdGhpcy51cHB5LmVtaXQoJ3RodW1ibmFpbDphbGwtZ2VuZXJhdGVkJyk7XG4gICAgfVxuICB9O1xuXG4gIFRodW1ibmFpbEdlbmVyYXRvci5wcm90b3R5cGUucmVxdWVzdFRodW1ibmFpbCA9IGZ1bmN0aW9uIHJlcXVlc3RUaHVtYm5haWwoZmlsZSkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgaWYgKGlzUHJldmlld1N1cHBvcnRlZChmaWxlLnR5cGUpICYmICFmaWxlLmlzUmVtb3RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVUaHVtYm5haWwoZmlsZSwgdGhpcy5vcHRzLnRodW1ibmFpbFdpZHRoLCB0aGlzLm9wdHMudGh1bWJuYWlsSGVpZ2h0KS50aGVuKGZ1bmN0aW9uIChwcmV2aWV3KSB7XG4gICAgICAgIF90aGlzNC5zZXRQcmV2aWV3VVJMKGZpbGUuaWQsIHByZXZpZXcpO1xuICAgICAgICBfdGhpczQudXBweS5sb2coJ1tUaHVtYm5haWxHZW5lcmF0b3JdIEdlbmVyYXRlZCB0aHVtYm5haWwgZm9yICcgKyBmaWxlLmlkKTtcbiAgICAgICAgX3RoaXM0LnVwcHkuZW1pdCgndGh1bWJuYWlsOmdlbmVyYXRlZCcsIF90aGlzNC51cHB5LmdldEZpbGUoZmlsZS5pZCksIHByZXZpZXcpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBfdGhpczQudXBweS5sb2coJ1tUaHVtYm5haWxHZW5lcmF0b3JdIEZhaWxlZCB0aHVtYm5haWwgZm9yICcgKyBmaWxlLmlkKTtcbiAgICAgICAgX3RoaXM0LnVwcHkubG9nKGVyciwgJ3dhcm5pbmcnKTtcbiAgICAgICAgX3RoaXM0LnVwcHkuZW1pdCgndGh1bWJuYWlsOmVycm9yJywgX3RoaXM0LnVwcHkuZ2V0RmlsZShmaWxlLmlkKSwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgVGh1bWJuYWlsR2VuZXJhdG9yLnByb3RvdHlwZS5vbkZpbGVBZGRlZCA9IGZ1bmN0aW9uIG9uRmlsZUFkZGVkKGZpbGUpIHtcbiAgICBpZiAoIWZpbGUucHJldmlldykge1xuICAgICAgdGhpcy5hZGRUb1F1ZXVlKGZpbGUpO1xuICAgIH1cbiAgfTtcblxuICBUaHVtYm5haWxHZW5lcmF0b3IucHJvdG90eXBlLm9uRmlsZVJlbW92ZWQgPSBmdW5jdGlvbiBvbkZpbGVSZW1vdmVkKGZpbGUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnF1ZXVlLmluZGV4T2YoZmlsZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5xdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIG9iamVjdCBVUkxzLlxuICAgIGlmIChmaWxlLnByZXZpZXcgJiYgaXNPYmplY3RVUkwoZmlsZS5wcmV2aWV3KSkge1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChmaWxlLnByZXZpZXcpO1xuICAgIH1cbiAgfTtcblxuICBUaHVtYm5haWxHZW5lcmF0b3IucHJvdG90eXBlLm9uUmVzdG9yZWQgPSBmdW5jdGlvbiBvblJlc3RvcmVkKCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIF91cHB5JGdldFN0YXRlID0gdGhpcy51cHB5LmdldFN0YXRlKCksXG4gICAgICAgIGZpbGVzID0gX3VwcHkkZ2V0U3RhdGUuZmlsZXM7XG5cbiAgICB2YXIgZmlsZUlEcyA9IE9iamVjdC5rZXlzKGZpbGVzKTtcbiAgICBmaWxlSURzLmZvckVhY2goZnVuY3Rpb24gKGZpbGVJRCkge1xuICAgICAgdmFyIGZpbGUgPSBfdGhpczUudXBweS5nZXRGaWxlKGZpbGVJRCk7XG4gICAgICBpZiAoIWZpbGUuaXNSZXN0b3JlZCkgcmV0dXJuO1xuICAgICAgLy8gT25seSBhZGQgYmxvYiBVUkxzOyB0aGV5IGFyZSBsaWtlbHkgaW52YWxpZCBhZnRlciBiZWluZyByZXN0b3JlZC5cbiAgICAgIGlmICghZmlsZS5wcmV2aWV3IHx8IGlzT2JqZWN0VVJMKGZpbGUucHJldmlldykpIHtcbiAgICAgICAgX3RoaXM1LmFkZFRvUXVldWUoZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgVGh1bWJuYWlsR2VuZXJhdG9yLnByb3RvdHlwZS5pbnN0YWxsID0gZnVuY3Rpb24gaW5zdGFsbCgpIHtcbiAgICB0aGlzLnVwcHkub24oJ2ZpbGUtYWRkZWQnLCB0aGlzLm9uRmlsZUFkZGVkKTtcbiAgICB0aGlzLnVwcHkub24oJ2ZpbGUtcmVtb3ZlZCcsIHRoaXMub25GaWxlUmVtb3ZlZCk7XG4gICAgdGhpcy51cHB5Lm9uKCdyZXN0b3JlZCcsIHRoaXMub25SZXN0b3JlZCk7XG4gIH07XG5cbiAgVGh1bWJuYWlsR2VuZXJhdG9yLnByb3RvdHlwZS51bmluc3RhbGwgPSBmdW5jdGlvbiB1bmluc3RhbGwoKSB7XG4gICAgdGhpcy51cHB5Lm9mZignZmlsZS1hZGRlZCcsIHRoaXMub25GaWxlQWRkZWQpO1xuICAgIHRoaXMudXBweS5vZmYoJ2ZpbGUtcmVtb3ZlZCcsIHRoaXMub25GaWxlUmVtb3ZlZCk7XG4gICAgdGhpcy51cHB5Lm9mZigncmVzdG9yZWQnLCB0aGlzLm9uUmVzdG9yZWQpO1xuICB9O1xuXG4gIHJldHVybiBUaHVtYm5haWxHZW5lcmF0b3I7XG59KFBsdWdpbik7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBUcmFuc2xhdGVzIHN0cmluZ3Mgd2l0aCBpbnRlcnBvbGF0aW9uICYgcGx1cmFsaXphdGlvbiBzdXBwb3J0LlxuICogRXh0ZW5zaWJsZSB3aXRoIGN1c3RvbSBkaWN0aW9uYXJpZXMgYW5kIHBsdXJhbGl6YXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIEJvcnJvd3MgaGVhdmlseSBmcm9tIGFuZCBpbnNwaXJlZCBieSBQb2x5Z2xvdCBodHRwczovL2dpdGh1Yi5jb20vYWlyYm5iL3BvbHlnbG90LmpzLFxuICogYmFzaWNhbGx5IGEgc3RyaXBwZWQtZG93biB2ZXJzaW9uIG9mIGl0LiBEaWZmZXJlbmNlczogcGx1cmFsaXphdGlvbiBmdW5jdGlvbnMgYXJlIG5vdCBoYXJkY29kZWRcbiAqIGFuZCBjYW4gYmUgZWFzaWx5IGFkZGVkIGFtb25nIHdpdGggZGljdGlvbmFyaWVzLCBuZXN0ZWQgb2JqZWN0cyBhcmUgdXNlZCBmb3IgcGx1cmFsaXphdGlvblxuICogYXMgb3Bwb3NlZCB0byBgfHx8fGAgZGVsaW1ldGVyXG4gKlxuICogVXNhZ2UgZXhhbXBsZTogYHRyYW5zbGF0b3IudHJhbnNsYXRlKCdmaWxlc19jaG9zZW4nLCB7c21hcnRfY291bnQ6IDN9KWBcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxBcnJheTxvYmplY3Q+fSBsb2NhbGUgTG9jYWxlIG9yIGxpc3Qgb2YgbG9jYWxlcy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRyYW5zbGF0b3IobG9jYWxlcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNsYXRvcik7XG5cbiAgICB0aGlzLmxvY2FsZSA9IHtcbiAgICAgIHN0cmluZ3M6IHt9LFxuICAgICAgcGx1cmFsaXplOiBmdW5jdGlvbiBwbHVyYWxpemUobikge1xuICAgICAgICBpZiAobiA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhbGVzKSkge1xuICAgICAgbG9jYWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9hcHBseShsb2NhbGUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGx5KGxvY2FsZXMpO1xuICAgIH1cbiAgfVxuXG4gIFRyYW5zbGF0b3IucHJvdG90eXBlLl9hcHBseSA9IGZ1bmN0aW9uIF9hcHBseShsb2NhbGUpIHtcbiAgICBpZiAoIWxvY2FsZSB8fCAhbG9jYWxlLnN0cmluZ3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgIHRoaXMubG9jYWxlID0gX2V4dGVuZHMoe30sIHByZXZMb2NhbGUsIHtcbiAgICAgIHN0cmluZ3M6IF9leHRlbmRzKHt9LCBwcmV2TG9jYWxlLnN0cmluZ3MsIGxvY2FsZS5zdHJpbmdzKVxuICAgIH0pO1xuICAgIHRoaXMubG9jYWxlLnBsdXJhbGl6ZSA9IGxvY2FsZS5wbHVyYWxpemUgfHwgcHJldkxvY2FsZS5wbHVyYWxpemU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2VzIGEgc3RyaW5nIHdpdGggcGxhY2Vob2xkZXIgdmFyaWFibGVzIGxpa2UgYCV7c21hcnRfY291bnR9IGZpbGUgc2VsZWN0ZWRgXG4gICAqIGFuZCByZXBsYWNlcyBpdCB3aXRoIHZhbHVlcyBmcm9tIG9wdGlvbnMgYHtzbWFydF9jb3VudDogNX1gXG4gICAqXG4gICAqIEBsaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS9haXJibmIvcG9seWdsb3QuanMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgKiB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9haXJibmIvcG9seWdsb3QuanMvYmxvYi9tYXN0ZXIvbGliL3BvbHlnbG90LmpzI0wyOTlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBocmFzZSB0aGF0IG5lZWRzIGludGVycG9sYXRpb24sIHdpdGggcGxhY2Vob2xkZXJzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIHdpdGggdmFsdWVzIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHJlcGxhY2UgcGxhY2Vob2xkZXJzXG4gICAqIEByZXR1cm4ge3N0cmluZ30gaW50ZXJwb2xhdGVkXG4gICAqL1xuXG5cbiAgVHJhbnNsYXRvci5wcm90b3R5cGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZShwaHJhc2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgX1N0cmluZyRwcm90b3R5cGUgPSBTdHJpbmcucHJvdG90eXBlLFxuICAgICAgICBzcGxpdCA9IF9TdHJpbmckcHJvdG90eXBlLnNwbGl0LFxuICAgICAgICByZXBsYWNlID0gX1N0cmluZyRwcm90b3R5cGUucmVwbGFjZTtcblxuICAgIHZhciBkb2xsYXJSZWdleCA9IC9cXCQvZztcbiAgICB2YXIgZG9sbGFyQmlsbHNZYWxsID0gJyQkJCQnO1xuICAgIHZhciBpbnRlcnBvbGF0ZWQgPSBbcGhyYXNlXTtcblxuICAgIGZvciAodmFyIGFyZyBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoYXJnICE9PSAnXycgJiYgb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShhcmcpKSB7XG4gICAgICAgIC8vIEVuc3VyZSByZXBsYWNlbWVudCB2YWx1ZSBpcyBlc2NhcGVkIHRvIHByZXZlbnQgc3BlY2lhbCAkLXByZWZpeGVkXG4gICAgICAgIC8vIHJlZ2V4IHJlcGxhY2UgdG9rZW5zLiB0aGUgXCIkJCQkXCIgaXMgbmVlZGVkIGJlY2F1c2UgZWFjaCBcIiRcIiBuZWVkcyB0b1xuICAgICAgICAvLyBiZSBlc2NhcGVkIHdpdGggXCIkXCIgaXRzZWxmLCBhbmQgd2UgbmVlZCB0d28gaW4gdGhlIHJlc3VsdGluZyBvdXRwdXQuXG4gICAgICAgIHZhciByZXBsYWNlbWVudCA9IG9wdGlvbnNbYXJnXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXBsYWNlbWVudCA9IHJlcGxhY2UuY2FsbChvcHRpb25zW2FyZ10sIGRvbGxhclJlZ2V4LCBkb2xsYXJCaWxsc1lhbGwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBgUmVnRXhwYCBlYWNoIHRpbWUgaW5zdGVhZCBvZiB1c2luZyBhIG1vcmUtZWZmaWNpZW50XG4gICAgICAgIC8vIHN0cmluZyByZXBsYWNlIHNvIHRoYXQgdGhlIHNhbWUgYXJndW1lbnQgY2FuIGJlIHJlcGxhY2VkIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIC8vIGluIHRoZSBzYW1lIHBocmFzZS5cbiAgICAgICAgaW50ZXJwb2xhdGVkID0gaW5zZXJ0UmVwbGFjZW1lbnQoaW50ZXJwb2xhdGVkLCBuZXcgUmVnRXhwKCclXFxcXHsnICsgYXJnICsgJ1xcXFx9JywgJ2cnKSwgcmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnBvbGF0ZWQ7XG5cbiAgICBmdW5jdGlvbiBpbnNlcnRSZXBsYWNlbWVudChzb3VyY2UsIHJ4LCByZXBsYWNlbWVudCkge1xuICAgICAgdmFyIG5ld1BhcnRzID0gW107XG4gICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgc3BsaXQuY2FsbChjaHVuaywgcngpLmZvckVhY2goZnVuY3Rpb24gKHJhdywgaSwgbGlzdCkge1xuICAgICAgICAgIGlmIChyYXcgIT09ICcnKSB7XG4gICAgICAgICAgICBuZXdQYXJ0cy5wdXNoKHJhdyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSW50ZXJsYWNlIHdpdGggdGhlIGByZXBsYWNlbWVudGAgdmFsdWVcbiAgICAgICAgICBpZiAoaSA8IGxpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbmV3UGFydHMucHVzaChyZXBsYWNlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld1BhcnRzO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIHRyYW5zbGF0ZSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyB3aXRoIHZhbHVlcyB0aGF0IHdpbGwgYmUgdXNlZCBsYXRlciB0byByZXBsYWNlIHBsYWNlaG9sZGVycyBpbiBzdHJpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfSB0cmFuc2xhdGVkIChhbmQgaW50ZXJwb2xhdGVkKVxuICAgKi9cblxuXG4gIFRyYW5zbGF0b3IucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIHRyYW5zbGF0ZShrZXksIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVBcnJheShrZXksIG9wdGlvbnMpLmpvaW4oJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYSB0cmFuc2xhdGlvbiBhbmQgcmV0dXJuIHRoZSB0cmFuc2xhdGVkIGFuZCBpbnRlcnBvbGF0ZWQgcGFydHMgYXMgYW4gYXJyYXkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgd2l0aCB2YWx1ZXMgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcmVwbGFjZSBwbGFjZWhvbGRlcnNcbiAgICogQHJldHVybiB7QXJyYXl9IFRoZSB0cmFuc2xhdGVkIGFuZCBpbnRlcnBvbGF0ZWQgcGFydHMsIGluIG9yZGVyLlxuICAgKi9cblxuXG4gIFRyYW5zbGF0b3IucHJvdG90eXBlLnRyYW5zbGF0ZUFycmF5ID0gZnVuY3Rpb24gdHJhbnNsYXRlQXJyYXkoa2V5LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMuc21hcnRfY291bnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgcGx1cmFsID0gdGhpcy5sb2NhbGUucGx1cmFsaXplKG9wdGlvbnMuc21hcnRfY291bnQpO1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGUodGhpcy5sb2NhbGUuc3RyaW5nc1trZXldW3BsdXJhbF0sIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRlKHRoaXMubG9jYWxlLnN0cmluZ3Nba2V5XSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zbGF0b3I7XG59KCk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkYXRhVVJJdG9CbG9iKGRhdGFVUkksIG9wdHMsIHRvRmlsZSkge1xuICAvLyBnZXQgdGhlIGJhc2U2NCBkYXRhXG4gIHZhciBkYXRhID0gZGF0YVVSSS5zcGxpdCgnLCcpWzFdO1xuXG4gIC8vIHVzZXIgbWF5IHByb3ZpZGUgbWltZSB0eXBlLCBpZiBub3QgZ2V0IGl0IGZyb20gZGF0YSBVUklcbiAgdmFyIG1pbWVUeXBlID0gb3B0cy5taW1lVHlwZSB8fCBkYXRhVVJJLnNwbGl0KCcsJylbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdO1xuXG4gIC8vIGRlZmF1bHQgdG8gcGxhaW4vdGV4dCBpZiBkYXRhIFVSSSBoYXMgbm8gbWltZVR5cGVcbiAgaWYgKG1pbWVUeXBlID09IG51bGwpIHtcbiAgICBtaW1lVHlwZSA9ICdwbGFpbi90ZXh0JztcbiAgfVxuXG4gIHZhciBiaW5hcnkgPSBhdG9iKGRhdGEpO1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaW5hcnkubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheS5wdXNoKGJpbmFyeS5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdG8gYSBGaWxlP1xuICBpZiAodG9GaWxlKSB7XG4gICAgcmV0dXJuIG5ldyBGaWxlKFtuZXcgVWludDhBcnJheShhcnJheSldLCBvcHRzLm5hbWUgfHwgJycsIHsgdHlwZTogbWltZVR5cGUgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KGFycmF5KV0sIHsgdHlwZTogbWltZVR5cGUgfSk7XG59OyIsInZhciB0aHJvdHRsZSA9IHJlcXVpcmUoJ2xvZGFzaC50aHJvdHRsZScpO1xuXG5mdW5jdGlvbiBfZW1pdFNvY2tldFByb2dyZXNzKHVwbG9hZGVyLCBwcm9ncmVzc0RhdGEsIGZpbGUpIHtcbiAgdmFyIHByb2dyZXNzID0gcHJvZ3Jlc3NEYXRhLnByb2dyZXNzLFxuICAgICAgYnl0ZXNVcGxvYWRlZCA9IHByb2dyZXNzRGF0YS5ieXRlc1VwbG9hZGVkLFxuICAgICAgYnl0ZXNUb3RhbCA9IHByb2dyZXNzRGF0YS5ieXRlc1RvdGFsO1xuXG4gIGlmIChwcm9ncmVzcykge1xuICAgIHVwbG9hZGVyLnVwcHkubG9nKCdVcGxvYWQgcHJvZ3Jlc3M6ICcgKyBwcm9ncmVzcyk7XG4gICAgdXBsb2FkZXIudXBweS5lbWl0KCd1cGxvYWQtcHJvZ3Jlc3MnLCBmaWxlLCB7XG4gICAgICB1cGxvYWRlcjogdXBsb2FkZXIsXG4gICAgICBieXRlc1VwbG9hZGVkOiBieXRlc1VwbG9hZGVkLFxuICAgICAgYnl0ZXNUb3RhbDogYnl0ZXNUb3RhbFxuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGUoX2VtaXRTb2NrZXRQcm9ncmVzcywgMzAwLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlIH0pOyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGlzRE9NRWxlbWVudCA9IHJlcXVpcmUoJy4vaXNET01FbGVtZW50Jyk7XG5cbi8qKlxuICogRmluZCBvbmUgb3IgbW9yZSBET00gZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRcbiAqIEByZXR1cm4ge0FycmF5fG51bGx9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmluZEFsbERPTUVsZW1lbnRzKGVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50KSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzLmxlbmd0aCA+IDAgPyBlbGVtZW50cyA6IG51bGw7XG4gIH1cblxuICBpZiAoKHR5cGVvZiBlbGVtZW50ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihlbGVtZW50KSkgPT09ICdvYmplY3QnICYmIGlzRE9NRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiBbZWxlbWVudF07XG4gIH1cbn07IiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgaXNET01FbGVtZW50ID0gcmVxdWlyZSgnLi9pc0RPTUVsZW1lbnQnKTtcblxuLyoqXG4gKiBGaW5kIGEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtOb2RlfHN0cmluZ30gZWxlbWVudFxuICogQHJldHVybiB7Tm9kZXxudWxsfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbmRET01FbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKCh0eXBlb2YgZWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZWxlbWVudCkpID09PSAnb2JqZWN0JyAmJiBpc0RPTUVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufTsiLCIvKipcbiAqIFRha2VzIGEgZmlsZSBvYmplY3QgYW5kIHR1cm5zIGl0IGludG8gZmlsZUlELCBieSBjb252ZXJ0aW5nIGZpbGUubmFtZSB0byBsb3dlcmNhc2UsXG4gKiByZW1vdmluZyBleHRyYSBjaGFyYWN0ZXJzIGFuZCBhZGRpbmcgdHlwZSwgc2l6ZSBhbmQgbGFzdE1vZGlmaWVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGZpbGVcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGZpbGVJRFxuICpcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZW5lcmF0ZUZpbGVJRChmaWxlKSB7XG4gIC8vIGZpbHRlciBpcyBuZWVkZWQgdG8gbm90IGpvaW4gZW1wdHkgdmFsdWVzIHdpdGggYC1gXG4gIHJldHVybiBbJ3VwcHknLCBmaWxlLm5hbWUgPyBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0vaWcsICcnKSA6ICcnLCBmaWxlLnR5cGUsIGZpbGUuZGF0YS5zaXplLCBmaWxlLmRhdGEubGFzdE1vZGlmaWVkXS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH0pLmpvaW4oJy0nKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRCeXRlc1JlbWFpbmluZyhmaWxlUHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIGZpbGVQcm9ncmVzcy5ieXRlc1RvdGFsIC0gZmlsZVByb2dyZXNzLmJ5dGVzVXBsb2FkZWQ7XG59OyIsIi8qKlxuKiBUYWtlcyBhIGZ1bGwgZmlsZW5hbWUgc3RyaW5nIGFuZCByZXR1cm5zIGFuIG9iamVjdCB7bmFtZSwgZXh0ZW5zaW9ufVxuKlxuKiBAcGFyYW0ge3N0cmluZ30gZnVsbEZpbGVOYW1lXG4qIEByZXR1cm4ge29iamVjdH0ge25hbWUsIGV4dGVuc2lvbn1cbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldEZpbGVOYW1lQW5kRXh0ZW5zaW9uKGZ1bGxGaWxlTmFtZSkge1xuICB2YXIgcmUgPSAvKD86XFwuKFteLl0rKSk/JC87XG4gIHZhciBmaWxlRXh0ID0gcmUuZXhlYyhmdWxsRmlsZU5hbWUpWzFdO1xuICB2YXIgZmlsZU5hbWUgPSBmdWxsRmlsZU5hbWUucmVwbGFjZSgnLicgKyBmaWxlRXh0LCAnJyk7XG4gIHJldHVybiB7XG4gICAgbmFtZTogZmlsZU5hbWUsXG4gICAgZXh0ZW5zaW9uOiBmaWxlRXh0XG4gIH07XG59OyIsInZhciBnZXRGaWxlTmFtZUFuZEV4dGVuc2lvbiA9IHJlcXVpcmUoJy4vZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24nKTtcbnZhciBtaW1lVHlwZXMgPSByZXF1aXJlKCcuL21pbWVUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldEZpbGVUeXBlKGZpbGUpIHtcbiAgdmFyIGZpbGVFeHRlbnNpb24gPSBmaWxlLm5hbWUgPyBnZXRGaWxlTmFtZUFuZEV4dGVuc2lvbihmaWxlLm5hbWUpLmV4dGVuc2lvbiA6IG51bGw7XG4gIGZpbGVFeHRlbnNpb24gPSBmaWxlRXh0ZW5zaW9uID8gZmlsZUV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpIDogbnVsbDtcblxuICBpZiAoZmlsZS5pc1JlbW90ZSkge1xuICAgIC8vIHNvbWUgcmVtb3RlIHByb3ZpZGVycyBkbyBub3Qgc3VwcG9ydCBmaWxlIHR5cGVzXG4gICAgcmV0dXJuIGZpbGUudHlwZSA/IGZpbGUudHlwZSA6IG1pbWVUeXBlc1tmaWxlRXh0ZW5zaW9uXTtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIG1pbWUgdHlwZSBpcyBzZXQgaW4gdGhlIGZpbGUgb2JqZWN0XG4gIGlmIChmaWxlLnR5cGUpIHtcbiAgICByZXR1cm4gZmlsZS50eXBlO1xuICB9XG5cbiAgLy8gc2VlIGlmIHdlIGNhbiBtYXAgZXh0ZW5zaW9uIHRvIGEgbWltZSB0eXBlXG4gIGlmIChmaWxlRXh0ZW5zaW9uICYmIG1pbWVUeXBlc1tmaWxlRXh0ZW5zaW9uXSkge1xuICAgIHJldHVybiBtaW1lVHlwZXNbZmlsZUV4dGVuc2lvbl07XG4gIH1cblxuICAvLyBpZiBhbGwgZmFpbHMsIGZhbGwgYmFjayB0byBhIGdlbmVyaWMgYnl0ZSBzdHJlYW0gdHlwZVxuICByZXR1cm4gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0U29ja2V0SG9zdCh1cmwpIHtcbiAgLy8gZ2V0IHRoZSBob3N0IGRvbWFpblxuICB2YXIgcmVnZXggPSAvXig/Omh0dHBzPzpcXC9cXC98XFwvXFwvKT8oPzpbXkBcXG5dK0ApPyg/Ond3d1xcLik/KFteXFxuXSspLztcbiAgdmFyIGhvc3QgPSByZWdleC5leGVjKHVybClbMV07XG4gIHZhciBzb2NrZXRQcm90b2NvbCA9IGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICd3c3MnIDogJ3dzJztcblxuICByZXR1cm4gc29ja2V0UHJvdG9jb2wgKyAnOi8vJyArIGhvc3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0U3BlZWQoZmlsZVByb2dyZXNzKSB7XG4gIGlmICghZmlsZVByb2dyZXNzLmJ5dGVzVXBsb2FkZWQpIHJldHVybiAwO1xuXG4gIHZhciB0aW1lRWxhcHNlZCA9IG5ldyBEYXRlKCkgLSBmaWxlUHJvZ3Jlc3MudXBsb2FkU3RhcnRlZDtcbiAgdmFyIHVwbG9hZFNwZWVkID0gZmlsZVByb2dyZXNzLmJ5dGVzVXBsb2FkZWQgLyAodGltZUVsYXBzZWQgLyAxMDAwKTtcbiAgcmV0dXJuIHVwbG9hZFNwZWVkO1xufTsiLCIvKipcbiAqIFJldHVybnMgYSB0aW1lc3RhbXAgaW4gdGhlIGZvcm1hdCBvZiBgaG91cnM6bWludXRlczpzZWNvbmRzYFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0VGltZVN0YW1wKCkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHZhciBob3VycyA9IHBhZChkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKSk7XG4gIHZhciBtaW51dGVzID0gcGFkKGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkpO1xuICB2YXIgc2Vjb25kcyA9IHBhZChkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpKTtcbiAgcmV0dXJuIGhvdXJzICsgJzonICsgbWludXRlcyArICc6JyArIHNlY29uZHM7XG59O1xuXG4vKipcbiAqIEFkZHMgemVybyB0byBzdHJpbmdzIHNob3J0ZXIgdGhhbiB0d28gY2hhcmFjdGVyc1xuKi9cbmZ1bmN0aW9uIHBhZChzdHIpIHtcbiAgcmV0dXJuIHN0ci5sZW5ndGggIT09IDIgPyAwICsgc3RyIDogc3RyO1xufSIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYSBET00gZWxlbWVudC4gRHVjay10eXBpbmcgYmFzZWQgb24gYG5vZGVUeXBlYC5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRE9NRWxlbWVudChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgPT09ICdvYmplY3QnICYmIG9iai5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREU7XG59OyIsIi8qKlxuICogQ2hlY2sgaWYgYSBVUkwgc3RyaW5nIGlzIGFuIG9iamVjdCBVUkwgZnJvbSBgVVJMLmNyZWF0ZU9iamVjdFVSTGAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc09iamVjdFVSTCh1cmwpIHtcbiAgcmV0dXJuIHVybC5pbmRleE9mKCdibG9iOicpID09PSAwO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUHJldmlld1N1cHBvcnRlZChmaWxlVHlwZSkge1xuICBpZiAoIWZpbGVUeXBlKSByZXR1cm4gZmFsc2U7XG4gIHZhciBmaWxlVHlwZVNwZWNpZmljID0gZmlsZVR5cGUuc3BsaXQoJy8nKVsxXTtcbiAgLy8gbGlzdCBvZiBpbWFnZXMgdGhhdCBicm93c2VycyBjYW4gcHJldmlld1xuICBpZiAoL14oanBlP2d8Z2lmfHBuZ3xzdmd8c3ZnXFwreG1sfGJtcCkkLy50ZXN0KGZpbGVUeXBlU3BlY2lmaWMpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzVG91Y2hEZXZpY2UoKSB7XG4gIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgLy8gd29ya3Mgb24gbW9zdCBicm93c2Vyc1xuICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM7IC8vIHdvcmtzIG9uIElFMTAvMTEgYW5kIFN1cmZhY2Vcbn07IiwiLyoqXG4gKiBMaW1pdCB0aGUgYW1vdW50IG9mIHNpbXVsdGFuZW91c2x5IHBlbmRpbmcgUHJvbWlzZXMuXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBwYXNzZWQgYSBmdW5jdGlvbiBgZm5gLFxuICogd2lsbCBtYWtlIHN1cmUgdGhhdCBhdCBtb3N0IGBsaW1pdGAgY2FsbHMgdG8gYGZuYCBhcmUgcGVuZGluZy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXRcbiAqIEByZXR1cm4ge2Z1bmN0aW9uKCl9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGltaXRQcm9taXNlcyhsaW1pdCkge1xuICB2YXIgcGVuZGluZyA9IDA7XG4gIHZhciBxdWV1ZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBjYWxsID0gZnVuY3Rpb24gY2FsbCgpIHtcbiAgICAgICAgcGVuZGluZysrO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgIHByb21pc2UudGhlbihvbmZpbmlzaCwgb25maW5pc2gpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChwZW5kaW5nID49IGxpbWl0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgcXVldWUucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsKCkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYWxsKCk7XG4gICAgfTtcbiAgfTtcbiAgZnVuY3Rpb24gb25maW5pc2goKSB7XG4gICAgcGVuZGluZy0tO1xuICAgIHZhciBuZXh0ID0gcXVldWUuc2hpZnQoKTtcbiAgICBpZiAobmV4dCkgbmV4dCgpO1xuICB9XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAnbWQnOiAndGV4dC9tYXJrZG93bicsXG4gICdtYXJrZG93bic6ICd0ZXh0L21hcmtkb3duJyxcbiAgJ21wNCc6ICd2aWRlby9tcDQnLFxuICAnbXAzJzogJ2F1ZGlvL21wMycsXG4gICdzdmcnOiAnaW1hZ2Uvc3ZnK3htbCcsXG4gICdqcGcnOiAnaW1hZ2UvanBlZycsXG4gICdwbmcnOiAnaW1hZ2UvcG5nJyxcbiAgJ2dpZic6ICdpbWFnZS9naWYnLFxuICAneWFtbCc6ICd0ZXh0L3lhbWwnLFxuICAneW1sJzogJ3RleHQveWFtbCcsXG4gICdjc3YnOiAndGV4dC9jc3YnLFxuICAnYXZpJzogJ3ZpZGVvL3gtbXN2aWRlbycsXG4gICdta3MnOiAndmlkZW8veC1tYXRyb3NrYScsXG4gICdta3YnOiAndmlkZW8veC1tYXRyb3NrYScsXG4gICdtb3YnOiAndmlkZW8vcXVpY2t0aW1lJyxcbiAgJ2RvYyc6ICdhcHBsaWNhdGlvbi9tc3dvcmQnLFxuICAnZG9jbSc6ICdhcHBsaWNhdGlvbi92bmQubXMtd29yZC5kb2N1bWVudC5tYWNyb2VuYWJsZWQuMTInLFxuICAnZG9jeCc6ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICdkb3QnOiAnYXBwbGljYXRpb24vbXN3b3JkJyxcbiAgJ2RvdG0nOiAnYXBwbGljYXRpb24vdm5kLm1zLXdvcmQudGVtcGxhdGUubWFjcm9lbmFibGVkLjEyJyxcbiAgJ2RvdHgnOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwudGVtcGxhdGUnLFxuICAneGxhJzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICd4bGFtJzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbC5hZGRpbi5tYWNyb2VuYWJsZWQuMTInLFxuICAneGxjJzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICd4bGYnOiAnYXBwbGljYXRpb24veC14bGlmZit4bWwnLFxuICAneGxtJzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICd4bHMnOiAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcbiAgJ3hsc2InOiAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnNoZWV0LmJpbmFyeS5tYWNyb2VuYWJsZWQuMTInLFxuICAneGxzbSc6ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwuc2hlZXQubWFjcm9lbmFibGVkLjEyJyxcbiAgJ3hsc3gnOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuICAneGx0JzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICd4bHRtJzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbC50ZW1wbGF0ZS5tYWNyb2VuYWJsZWQuMTInLFxuICAneGx0eCc6ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC50ZW1wbGF0ZScsXG4gICd4bHcnOiAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJ1xufTsiLCJ2YXIgc2Vjb25kc1RvVGltZSA9IHJlcXVpcmUoJy4vc2Vjb25kc1RvVGltZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHByZXR0eUVUQShzZWNvbmRzKSB7XG4gIHZhciB0aW1lID0gc2Vjb25kc1RvVGltZShzZWNvbmRzKTtcblxuICAvLyBPbmx5IGRpc3BsYXkgaG91cnMgYW5kIG1pbnV0ZXMgaWYgdGhleSBhcmUgZ3JlYXRlciB0aGFuIDAgYnV0IGFsd2F5c1xuICAvLyBkaXNwbGF5IG1pbnV0ZXMgaWYgaG91cnMgaXMgYmVpbmcgZGlzcGxheWVkXG4gIC8vIERpc3BsYXkgYSBsZWFkaW5nIHplcm8gaWYgdGhlIHRoZXJlIGlzIGEgcHJlY2VkaW5nIHVuaXQ6IDFtIDA1cywgYnV0IDVzXG4gIHZhciBob3Vyc1N0ciA9IHRpbWUuaG91cnMgPyB0aW1lLmhvdXJzICsgJ2ggJyA6ICcnO1xuICB2YXIgbWludXRlc1ZhbCA9IHRpbWUuaG91cnMgPyAoJzAnICsgdGltZS5taW51dGVzKS5zdWJzdHIoLTIpIDogdGltZS5taW51dGVzO1xuICB2YXIgbWludXRlc1N0ciA9IG1pbnV0ZXNWYWwgPyBtaW51dGVzVmFsICsgJ20gJyA6ICcnO1xuICB2YXIgc2Vjb25kc1ZhbCA9IG1pbnV0ZXNWYWwgPyAoJzAnICsgdGltZS5zZWNvbmRzKS5zdWJzdHIoLTIpIDogdGltZS5zZWNvbmRzO1xuICB2YXIgc2Vjb25kc1N0ciA9IHNlY29uZHNWYWwgKyAncyc7XG5cbiAgcmV0dXJuICcnICsgaG91cnNTdHIgKyBtaW51dGVzU3RyICsgc2Vjb25kc1N0cjtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZWNvbmRzVG9UaW1lKHJhd1NlY29uZHMpIHtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihyYXdTZWNvbmRzIC8gMzYwMCkgJSAyNDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHJhd1NlY29uZHMgLyA2MCkgJSA2MDtcbiAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKHJhd1NlY29uZHMgJSA2MCk7XG5cbiAgcmV0dXJuIHsgaG91cnM6IGhvdXJzLCBtaW51dGVzOiBtaW51dGVzLCBzZWNvbmRzOiBzZWNvbmRzIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHByb21pc2VzKSB7XG4gIHZhciByZXNvbHV0aW9ucyA9IFtdO1xuICB2YXIgcmVqZWN0aW9ucyA9IFtdO1xuICBmdW5jdGlvbiByZXNvbHZlZCh2YWx1ZSkge1xuICAgIHJlc29sdXRpb25zLnB1c2godmFsdWUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlamVjdGVkKGVycm9yKSB7XG4gICAgcmVqZWN0aW9ucy5wdXNoKGVycm9yKTtcbiAgfVxuXG4gIHZhciB3YWl0ID0gUHJvbWlzZS5hbGwocHJvbWlzZXMubWFwKGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihyZXNvbHZlZCwgcmVqZWN0ZWQpO1xuICB9KSk7XG5cbiAgcmV0dXJuIHdhaXQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3NmdWw6IHJlc29sdXRpb25zLFxuICAgICAgZmFpbGVkOiByZWplY3Rpb25zXG4gICAgfTtcbiAgfSk7XG59OyIsIi8qKlxuICogQ29udmVydHMgbGlzdCBpbnRvIGFycmF5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0FycmF5KGxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QgfHwgW10sIDApO1xufTsiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ0B1cHB5L2NvcmUnKSxcbiAgICBQbHVnaW4gPSBfcmVxdWlyZS5QbHVnaW47XG5cbnZhciBjdWlkID0gcmVxdWlyZSgnY3VpZCcpO1xudmFyIFRyYW5zbGF0b3IgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvVHJhbnNsYXRvcicpO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnQHVwcHkvY29tcGFuaW9uLWNsaWVudCcpLFxuICAgIFByb3ZpZGVyID0gX3JlcXVpcmUyLlByb3ZpZGVyLFxuICAgIFNvY2tldCA9IF9yZXF1aXJlMi5Tb2NrZXQ7XG5cbnZhciBlbWl0U29ja2V0UHJvZ3Jlc3MgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvZW1pdFNvY2tldFByb2dyZXNzJyk7XG52YXIgZ2V0U29ja2V0SG9zdCA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9nZXRTb2NrZXRIb3N0Jyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL3NldHRsZScpO1xudmFyIGxpbWl0UHJvbWlzZXMgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvbGltaXRQcm9taXNlcycpO1xuXG5mdW5jdGlvbiBidWlsZFJlc3BvbnNlRXJyb3IoeGhyLCBlcnJvcikge1xuICAvLyBObyBlcnJvciBtZXNzYWdlXG4gIGlmICghZXJyb3IpIGVycm9yID0gbmV3IEVycm9yKCdVcGxvYWQgZXJyb3InKTtcbiAgLy8gR290IGFuIGVycm9yIG1lc3NhZ2Ugc3RyaW5nXG4gIGlmICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnKSBlcnJvciA9IG5ldyBFcnJvcihlcnJvcik7XG4gIC8vIEdvdCBzb21ldGhpbmcgZWxzZVxuICBpZiAoIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgIGVycm9yID0gX2V4dGVuZHMobmV3IEVycm9yKCdVcGxvYWQgZXJyb3InKSwgeyBkYXRhOiBlcnJvciB9KTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSB4aHI7XG4gIHJldHVybiBlcnJvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX1BsdWdpbikge1xuICBfaW5oZXJpdHMoWEhSVXBsb2FkLCBfUGx1Z2luKTtcblxuICBmdW5jdGlvbiBYSFJVcGxvYWQodXBweSwgb3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBYSFJVcGxvYWQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1BsdWdpbi5jYWxsKHRoaXMsIHVwcHksIG9wdHMpKTtcblxuICAgIF90aGlzLnR5cGUgPSAndXBsb2FkZXInO1xuICAgIF90aGlzLmlkID0gJ1hIUlVwbG9hZCc7XG4gICAgX3RoaXMudGl0bGUgPSAnWEhSVXBsb2FkJztcblxuICAgIHZhciBkZWZhdWx0TG9jYWxlID0ge1xuICAgICAgc3RyaW5nczoge1xuICAgICAgICB0aW1lZE91dDogJ1VwbG9hZCBzdGFsbGVkIGZvciAle3NlY29uZHN9IHNlY29uZHMsIGFib3J0aW5nLidcbiAgICAgIH1cblxuICAgICAgLy8gRGVmYXVsdCBvcHRpb25zXG4gICAgfTt2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBmb3JtRGF0YTogdHJ1ZSxcbiAgICAgIGZpZWxkTmFtZTogJ2ZpbGVzW10nLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBtZXRhRmllbGRzOiBudWxsLFxuICAgICAgcmVzcG9uc2VVcmxGaWVsZE5hbWU6ICd1cmwnLFxuICAgICAgYnVuZGxlOiBmYWxzZSxcbiAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgbG9jYWxlOiBkZWZhdWx0TG9jYWxlLFxuICAgICAgdGltZW91dDogMzAgKiAxMDAwLFxuICAgICAgbGltaXQ6IDAsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnJyxcbiAgICAgIC8qKlxuICAgICAgICogQHR5cGVkZWYgcmVzcE9ialxuICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHJlc3BvbnNlVGV4dFxuICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXR1c1xuICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHN0YXR1c1RleHRcbiAgICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IGhlYWRlcnNcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzcG9uc2VUZXh0IHRoZSByZXNwb25zZSBib2R5IHN0cmluZ1xuICAgICAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdCB8IHJlc3BPYmp9IHJlc3BvbnNlIHRoZSByZXNwb25zZSBvYmplY3QgKFhIUiBvciBzaW1pbGFyKVxuICAgICAgICovXG4gICAgICBnZXRSZXNwb25zZURhdGE6IGZ1bmN0aW9uIGdldFJlc3BvbnNlRGF0YShyZXNwb25zZVRleHQsIHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciBwYXJzZWRSZXNwb25zZSA9IHt9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHBhcnNlZFJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZFJlc3BvbnNlO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJlc3BvbnNlVGV4dCB0aGUgcmVzcG9uc2UgYm9keSBzdHJpbmdcbiAgICAgICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3QgfCByZXNwT2JqfSByZXNwb25zZSB0aGUgcmVzcG9uc2Ugb2JqZWN0IChYSFIgb3Igc2ltaWxhcilcbiAgICAgICAqL1xuICAgICAgZ2V0UmVzcG9uc2VFcnJvcjogZnVuY3Rpb24gZ2V0UmVzcG9uc2VFcnJvcihyZXNwb25zZVRleHQsIHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1VwbG9hZCBlcnJvcicpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBNZXJnZSBkZWZhdWx0IG9wdGlvbnMgd2l0aCB0aGUgb25lcyBzZXQgYnkgdXNlclxuICAgIF90aGlzLm9wdHMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdHMpO1xuXG4gICAgLy8gaTE4blxuICAgIF90aGlzLnRyYW5zbGF0b3IgPSBuZXcgVHJhbnNsYXRvcihbZGVmYXVsdExvY2FsZSwgX3RoaXMudXBweS5sb2NhbGUsIF90aGlzLm9wdHMubG9jYWxlXSk7XG4gICAgX3RoaXMuaTE4biA9IF90aGlzLnRyYW5zbGF0b3IudHJhbnNsYXRlLmJpbmQoX3RoaXMudHJhbnNsYXRvcik7XG4gICAgX3RoaXMuaTE4bkFycmF5ID0gX3RoaXMudHJhbnNsYXRvci50cmFuc2xhdGVBcnJheS5iaW5kKF90aGlzLnRyYW5zbGF0b3IpO1xuXG4gICAgX3RoaXMuaGFuZGxlVXBsb2FkID0gX3RoaXMuaGFuZGxlVXBsb2FkLmJpbmQoX3RoaXMpO1xuXG4gICAgLy8gU2ltdWx0YW5lb3VzIHVwbG9hZCBsaW1pdGluZyBpcyBzaGFyZWQgYWNyb3NzIGFsbCB1cGxvYWRzIHdpdGggdGhpcyBwbHVnaW4uXG4gICAgaWYgKHR5cGVvZiBfdGhpcy5vcHRzLmxpbWl0ID09PSAnbnVtYmVyJyAmJiBfdGhpcy5vcHRzLmxpbWl0ICE9PSAwKSB7XG4gICAgICBfdGhpcy5saW1pdFVwbG9hZHMgPSBsaW1pdFByb21pc2VzKF90aGlzLm9wdHMubGltaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5saW1pdFVwbG9hZHMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMub3B0cy5idW5kbGUgJiYgIV90aGlzLm9wdHMuZm9ybURhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYG9wdHMuZm9ybURhdGFgIG11c3QgYmUgdHJ1ZSB3aGVuIGBvcHRzLmJ1bmRsZWAgaXMgZW5hYmxlZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgWEhSVXBsb2FkLnByb3RvdHlwZS5nZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucyhmaWxlKSB7XG4gICAgdmFyIG92ZXJyaWRlcyA9IHRoaXMudXBweS5nZXRTdGF0ZSgpLnhoclVwbG9hZDtcbiAgICB2YXIgb3B0cyA9IF9leHRlbmRzKHt9LCB0aGlzLm9wdHMsIG92ZXJyaWRlcyB8fCB7fSwgZmlsZS54aHJVcGxvYWQgfHwge30pO1xuICAgIG9wdHMuaGVhZGVycyA9IHt9O1xuICAgIF9leHRlbmRzKG9wdHMuaGVhZGVycywgdGhpcy5vcHRzLmhlYWRlcnMpO1xuICAgIGlmIChvdmVycmlkZXMpIHtcbiAgICAgIF9leHRlbmRzKG9wdHMuaGVhZGVycywgb3ZlcnJpZGVzLmhlYWRlcnMpO1xuICAgIH1cbiAgICBpZiAoZmlsZS54aHJVcGxvYWQpIHtcbiAgICAgIF9leHRlbmRzKG9wdHMuaGVhZGVycywgZmlsZS54aHJVcGxvYWQuaGVhZGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdHM7XG4gIH07XG5cbiAgLy8gSGVscGVyIHRvIGFib3J0IHVwbG9hZCByZXF1ZXN0cyBpZiB0aGVyZSBoYXMgbm90IGJlZW4gYW55IHByb2dyZXNzIGZvciBgdGltZW91dGAgbXMuXG4gIC8vIENyZWF0ZSBhbiBpbnN0YW5jZSB1c2luZyBgdGltZXIgPSBjcmVhdGVQcm9ncmVzc1RpbWVvdXQoMTAwMDAsIG9uVGltZW91dClgXG4gIC8vIENhbGwgYHRpbWVyLnByb2dyZXNzKClgIHRvIHNpZ25hbCB0aGF0IHRoZXJlIGhhcyBiZWVuIHByb2dyZXNzIG9mIGFueSBraW5kLlxuICAvLyBDYWxsIGB0aW1lci5kb25lKClgIHdoZW4gdGhlIHVwbG9hZCBoYXMgY29tcGxldGVkLlxuXG5cbiAgWEhSVXBsb2FkLnByb3RvdHlwZS5jcmVhdGVQcm9ncmVzc1RpbWVvdXQgPSBmdW5jdGlvbiBjcmVhdGVQcm9ncmVzc1RpbWVvdXQodGltZW91dCwgdGltZW91dEhhbmRsZXIpIHtcbiAgICB2YXIgdXBweSA9IHRoaXMudXBweTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGlzRG9uZSA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gb25UaW1lZE91dCgpIHtcbiAgICAgIHVwcHkubG9nKCdbWEhSVXBsb2FkXSB0aW1lZCBvdXQnKTtcbiAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihzZWxmLmkxOG4oJ3RpbWVkT3V0JywgeyBzZWNvbmRzOiBNYXRoLmNlaWwodGltZW91dCAvIDEwMDApIH0pKTtcbiAgICAgIHRpbWVvdXRIYW5kbGVyKGVycm9yKTtcbiAgICB9XG5cbiAgICB2YXIgYWxpdmVUaW1lciA9IG51bGw7XG4gICAgZnVuY3Rpb24gcHJvZ3Jlc3MoKSB7XG4gICAgICAvLyBTb21lIGJyb3dzZXJzIGZpcmUgYW5vdGhlciBwcm9ncmVzcyBldmVudCB3aGVuIHRoZSB1cGxvYWQgaXNcbiAgICAgIC8vIGNhbmNlbGxlZCwgc28gd2UgaGF2ZSB0byBpZ25vcmUgcHJvZ3Jlc3MgYWZ0ZXIgdGhlIHRpbWVyIHdhc1xuICAgICAgLy8gdG9sZCB0byBzdG9wLlxuICAgICAgaWYgKGlzRG9uZSkgcmV0dXJuO1xuXG4gICAgICBpZiAodGltZW91dCA+IDApIHtcbiAgICAgICAgaWYgKGFsaXZlVGltZXIpIGNsZWFyVGltZW91dChhbGl2ZVRpbWVyKTtcbiAgICAgICAgYWxpdmVUaW1lciA9IHNldFRpbWVvdXQob25UaW1lZE91dCwgdGltZW91dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIHVwcHkubG9nKCdbWEhSVXBsb2FkXSB0aW1lciBkb25lJyk7XG4gICAgICBpZiAoYWxpdmVUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoYWxpdmVUaW1lcik7XG4gICAgICAgIGFsaXZlVGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzLFxuICAgICAgZG9uZTogZG9uZVxuICAgIH07XG4gIH07XG5cbiAgWEhSVXBsb2FkLnByb3RvdHlwZS5jcmVhdGVGb3JtRGF0YVVwbG9hZCA9IGZ1bmN0aW9uIGNyZWF0ZUZvcm1EYXRhVXBsb2FkKGZpbGUsIG9wdHMpIHtcbiAgICB2YXIgZm9ybVBvc3QgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIHZhciBtZXRhRmllbGRzID0gQXJyYXkuaXNBcnJheShvcHRzLm1ldGFGaWVsZHMpID8gb3B0cy5tZXRhRmllbGRzXG4gICAgLy8gU2VuZCBhbG9uZyBhbGwgZmllbGRzIGJ5IGRlZmF1bHQuXG4gICAgOiBPYmplY3Qua2V5cyhmaWxlLm1ldGEpO1xuICAgIG1ldGFGaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgZm9ybVBvc3QuYXBwZW5kKGl0ZW0sIGZpbGUubWV0YVtpdGVtXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoZmlsZS5uYW1lKSB7XG4gICAgICBmb3JtUG9zdC5hcHBlbmQob3B0cy5maWVsZE5hbWUsIGZpbGUuZGF0YSwgZmlsZS5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybVBvc3QuYXBwZW5kKG9wdHMuZmllbGROYW1lLCBmaWxlLmRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtUG9zdDtcbiAgfTtcblxuICBYSFJVcGxvYWQucHJvdG90eXBlLmNyZWF0ZUJhcmVVcGxvYWQgPSBmdW5jdGlvbiBjcmVhdGVCYXJlVXBsb2FkKGZpbGUsIG9wdHMpIHtcbiAgICByZXR1cm4gZmlsZS5kYXRhO1xuICB9O1xuXG4gIFhIUlVwbG9hZC5wcm90b3R5cGUudXBsb2FkID0gZnVuY3Rpb24gdXBsb2FkKGZpbGUsIGN1cnJlbnQsIHRvdGFsKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgb3B0cyA9IHRoaXMuZ2V0T3B0aW9ucyhmaWxlKTtcblxuICAgIHRoaXMudXBweS5sb2coJ3VwbG9hZGluZyAnICsgY3VycmVudCArICcgb2YgJyArIHRvdGFsKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGRhdGEgPSBvcHRzLmZvcm1EYXRhID8gX3RoaXMyLmNyZWF0ZUZvcm1EYXRhVXBsb2FkKGZpbGUsIG9wdHMpIDogX3RoaXMyLmNyZWF0ZUJhcmVVcGxvYWQoZmlsZSwgb3B0cyk7XG5cbiAgICAgIHZhciB0aW1lciA9IF90aGlzMi5jcmVhdGVQcm9ncmVzc1RpbWVvdXQob3B0cy50aW1lb3V0LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICAgIF90aGlzMi51cHB5LmVtaXQoJ3VwbG9hZC1lcnJvcicsIGZpbGUsIGVycm9yKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBpZiAob3B0cy5yZXNwb25zZVR5cGUgIT09ICcnKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRzLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlkID0gY3VpZCgpO1xuXG4gICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBfdGhpczIudXBweS5sb2coJ1tYSFJVcGxvYWRdICcgKyBpZCArICcgc3RhcnRlZCcpO1xuICAgICAgICAvLyBCZWdpbiBjaGVja2luZyBmb3IgdGltZW91dHMgd2hlbiBsb2FkaW5nIHN0YXJ0cy5cbiAgICAgICAgdGltZXIucHJvZ3Jlc3MoKTtcbiAgICAgIH0pO1xuXG4gICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIF90aGlzMi51cHB5LmxvZygnW1hIUlVwbG9hZF0gJyArIGlkICsgJyBwcm9ncmVzczogJyArIGV2LmxvYWRlZCArICcgLyAnICsgZXYudG90YWwpO1xuICAgICAgICB0aW1lci5wcm9ncmVzcygpO1xuXG4gICAgICAgIGlmIChldi5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgX3RoaXMyLnVwcHkuZW1pdCgndXBsb2FkLXByb2dyZXNzJywgZmlsZSwge1xuICAgICAgICAgICAgdXBsb2FkZXI6IF90aGlzMixcbiAgICAgICAgICAgIGJ5dGVzVXBsb2FkZWQ6IGV2LmxvYWRlZCxcbiAgICAgICAgICAgIGJ5dGVzVG90YWw6IGV2LnRvdGFsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBfdGhpczIudXBweS5sb2coJ1tYSFJVcGxvYWRdICcgKyBpZCArICcgZmluaXNoZWQnKTtcbiAgICAgICAgdGltZXIuZG9uZSgpO1xuXG4gICAgICAgIGlmIChldi50YXJnZXQuc3RhdHVzID49IDIwMCAmJiBldi50YXJnZXQuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgdmFyIGJvZHkgPSBvcHRzLmdldFJlc3BvbnNlRGF0YSh4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICAgIHZhciB1cGxvYWRVUkwgPSBib2R5W29wdHMucmVzcG9uc2VVcmxGaWVsZE5hbWVdO1xuXG4gICAgICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgc3RhdHVzOiBldi50YXJnZXQuc3RhdHVzLFxuICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgIHVwbG9hZFVSTDogdXBsb2FkVVJMXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIF90aGlzMi51cHB5LnNldEZpbGVTdGF0ZShmaWxlLmlkLCB7IHJlc3BvbnNlOiByZXNwb25zZSB9KTtcblxuICAgICAgICAgIF90aGlzMi51cHB5LmVtaXQoJ3VwbG9hZC1zdWNjZXNzJywgZmlsZSwgYm9keSwgdXBsb2FkVVJMKTtcblxuICAgICAgICAgIGlmICh1cGxvYWRVUkwpIHtcbiAgICAgICAgICAgIF90aGlzMi51cHB5LmxvZygnRG93bmxvYWQgJyArIGZpbGUubmFtZSArICcgZnJvbSAnICsgZmlsZS51cGxvYWRVUkwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXNvbHZlKGZpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfYm9keSA9IG9wdHMuZ2V0UmVzcG9uc2VEYXRhKHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgICAgdmFyIGVycm9yID0gYnVpbGRSZXNwb25zZUVycm9yKHhociwgb3B0cy5nZXRSZXNwb25zZUVycm9yKHhoci5yZXNwb25zZVRleHQsIHhocikpO1xuXG4gICAgICAgICAgdmFyIF9yZXNwb25zZSA9IHtcbiAgICAgICAgICAgIHN0YXR1czogZXYudGFyZ2V0LnN0YXR1cyxcbiAgICAgICAgICAgIGJvZHk6IF9ib2R5XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIF90aGlzMi51cHB5LnNldEZpbGVTdGF0ZShmaWxlLmlkLCB7IHJlc3BvbnNlOiBfcmVzcG9uc2UgfSk7XG5cbiAgICAgICAgICBfdGhpczIudXBweS5lbWl0KCd1cGxvYWQtZXJyb3InLCBmaWxlLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgX3RoaXMyLnVwcHkubG9nKCdbWEhSVXBsb2FkXSAnICsgaWQgKyAnIGVycm9yZWQnKTtcbiAgICAgICAgdGltZXIuZG9uZSgpO1xuXG4gICAgICAgIHZhciBlcnJvciA9IGJ1aWxkUmVzcG9uc2VFcnJvcih4aHIsIG9wdHMuZ2V0UmVzcG9uc2VFcnJvcih4aHIucmVzcG9uc2VUZXh0LCB4aHIpKTtcbiAgICAgICAgX3RoaXMyLnVwcHkuZW1pdCgndXBsb2FkLWVycm9yJywgZmlsZSwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICB4aHIub3BlbihvcHRzLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBvcHRzLmVuZHBvaW50LCB0cnVlKTtcbiAgICAgIC8vIElFMTAgZG9lcyBub3QgYWxsb3cgc2V0dGluZyBgd2l0aENyZWRlbnRpYWxzYCBiZWZvcmUgYG9wZW4oKWAgaXMgY2FsbGVkLlxuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdHMud2l0aENyZWRlbnRpYWxzO1xuXG4gICAgICBPYmplY3Qua2V5cyhvcHRzLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIG9wdHMuaGVhZGVyc1toZWFkZXJdKTtcbiAgICAgIH0pO1xuXG4gICAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgICAgX3RoaXMyLnVwcHkub24oJ2ZpbGUtcmVtb3ZlZCcsIGZ1bmN0aW9uIChyZW1vdmVkRmlsZSkge1xuICAgICAgICBpZiAocmVtb3ZlZEZpbGUuaWQgPT09IGZpbGUuaWQpIHtcbiAgICAgICAgICB0aW1lci5kb25lKCk7XG4gICAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczIudXBweS5vbignY2FuY2VsLWFsbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZXIuZG9uZSgpO1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFhIUlVwbG9hZC5wcm90b3R5cGUudXBsb2FkUmVtb3RlID0gZnVuY3Rpb24gdXBsb2FkUmVtb3RlKGZpbGUsIGN1cnJlbnQsIHRvdGFsKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0cyA9IHRoaXMuZ2V0T3B0aW9ucyhmaWxlKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGZpZWxkcyA9IHt9O1xuICAgICAgdmFyIG1ldGFGaWVsZHMgPSBBcnJheS5pc0FycmF5KG9wdHMubWV0YUZpZWxkcykgPyBvcHRzLm1ldGFGaWVsZHNcbiAgICAgIC8vIFNlbmQgYWxvbmcgYWxsIGZpZWxkcyBieSBkZWZhdWx0LlxuICAgICAgOiBPYmplY3Qua2V5cyhmaWxlLm1ldGEpO1xuXG4gICAgICBtZXRhRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgZmllbGRzW25hbWVdID0gZmlsZS5tZXRhW25hbWVdO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBwcm92aWRlciA9IG5ldyBQcm92aWRlcihfdGhpczMudXBweSwgZmlsZS5yZW1vdGUucHJvdmlkZXJPcHRpb25zKTtcbiAgICAgIHByb3ZpZGVyLnBvc3QoZmlsZS5yZW1vdGUudXJsLCBfZXh0ZW5kcyh7fSwgZmlsZS5yZW1vdGUuYm9keSwge1xuICAgICAgICBlbmRwb2ludDogb3B0cy5lbmRwb2ludCxcbiAgICAgICAgc2l6ZTogZmlsZS5kYXRhLnNpemUsXG4gICAgICAgIGZpZWxkbmFtZTogb3B0cy5maWVsZE5hbWUsXG4gICAgICAgIG1ldGFkYXRhOiBmaWVsZHMsXG4gICAgICAgIGhlYWRlcnM6IG9wdHMuaGVhZGVyc1xuICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgdG9rZW4gPSByZXMudG9rZW47XG4gICAgICAgIHZhciBob3N0ID0gZ2V0U29ja2V0SG9zdChmaWxlLnJlbW90ZS5zZXJ2ZXJVcmwpO1xuICAgICAgICB2YXIgc29ja2V0ID0gbmV3IFNvY2tldCh7IHRhcmdldDogaG9zdCArICcvYXBpLycgKyB0b2tlbiB9KTtcblxuICAgICAgICBzb2NrZXQub24oJ3Byb2dyZXNzJywgZnVuY3Rpb24gKHByb2dyZXNzRGF0YSkge1xuICAgICAgICAgIHJldHVybiBlbWl0U29ja2V0UHJvZ3Jlc3MoX3RoaXMzLCBwcm9ncmVzc0RhdGEsIGZpbGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb2NrZXQub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHZhciByZXNwID0gb3B0cy5nZXRSZXNwb25zZURhdGEoZGF0YS5yZXNwb25zZS5yZXNwb25zZVRleHQsIGRhdGEucmVzcG9uc2UpO1xuICAgICAgICAgIHZhciB1cGxvYWRVUkwgPSByZXNwW29wdHMucmVzcG9uc2VVcmxGaWVsZE5hbWVdO1xuICAgICAgICAgIF90aGlzMy51cHB5LmVtaXQoJ3VwbG9hZC1zdWNjZXNzJywgZmlsZSwgcmVzcCwgdXBsb2FkVVJMKTtcbiAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb2NrZXQub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVyckRhdGEpIHtcbiAgICAgICAgICB2YXIgcmVzcCA9IGVyckRhdGEucmVzcG9uc2U7XG4gICAgICAgICAgdmFyIGVycm9yID0gcmVzcCA/IG9wdHMuZ2V0UmVzcG9uc2VFcnJvcihyZXNwLnJlc3BvbnNlVGV4dCwgcmVzcCkgOiBfZXh0ZW5kcyhuZXcgRXJyb3IoZXJyRGF0YS5lcnJvci5tZXNzYWdlKSwgeyBjYXVzZTogZXJyRGF0YS5lcnJvciB9KTtcbiAgICAgICAgICBfdGhpczMudXBweS5lbWl0KCd1cGxvYWQtZXJyb3InLCBmaWxlLCBlcnJvcik7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBYSFJVcGxvYWQucHJvdG90eXBlLnVwbG9hZEJ1bmRsZSA9IGZ1bmN0aW9uIHVwbG9hZEJ1bmRsZShmaWxlcykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBlbmRwb2ludCA9IF90aGlzNC5vcHRzLmVuZHBvaW50O1xuICAgICAgdmFyIG1ldGhvZCA9IF90aGlzNC5vcHRzLm1ldGhvZDtcblxuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlLCBpKSB7XG4gICAgICAgIHZhciBvcHRzID0gX3RoaXM0LmdldE9wdGlvbnMoZmlsZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChvcHRzLmZpZWxkTmFtZSwgZmlsZS5kYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBpZiAoX3RoaXM0Lm9wdHMucmVzcG9uc2VUeXBlICE9PSAnJykge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gX3RoaXM0Lm9wdHMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGltZXIgPSBfdGhpczQuY3JlYXRlUHJvZ3Jlc3NUaW1lb3V0KF90aGlzNC5vcHRzLnRpbWVvdXQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgICAgZW1pdEVycm9yKGVycm9yKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgZW1pdEVycm9yID0gZnVuY3Rpb24gZW1pdEVycm9yKGVycm9yKSB7XG4gICAgICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICBfdGhpczQudXBweS5lbWl0KCd1cGxvYWQtZXJyb3InLCBmaWxlLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdsb2Fkc3RhcnQnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgX3RoaXM0LnVwcHkubG9nKCdbWEhSVXBsb2FkXSBzdGFydGVkIHVwbG9hZGluZyBidW5kbGUnKTtcbiAgICAgICAgdGltZXIucHJvZ3Jlc3MoKTtcbiAgICAgIH0pO1xuXG4gICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHRpbWVyLnByb2dyZXNzKCk7XG5cbiAgICAgICAgaWYgKCFldi5sZW5ndGhDb21wdXRhYmxlKSByZXR1cm47XG5cbiAgICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgIF90aGlzNC51cHB5LmVtaXQoJ3VwbG9hZC1wcm9ncmVzcycsIGZpbGUsIHtcbiAgICAgICAgICAgIHVwbG9hZGVyOiBfdGhpczQsXG4gICAgICAgICAgICBieXRlc1VwbG9hZGVkOiBldi5sb2FkZWQgLyBldi50b3RhbCAqIGZpbGUuc2l6ZSxcbiAgICAgICAgICAgIGJ5dGVzVG90YWw6IGZpbGUuc2l6ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldikge1xuICAgICAgICB0aW1lci5kb25lKCk7XG5cbiAgICAgICAgaWYgKGV2LnRhcmdldC5zdGF0dXMgPj0gMjAwICYmIGV2LnRhcmdldC5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICB2YXIgcmVzcCA9IF90aGlzNC5vcHRzLmdldFJlc3BvbnNlRGF0YSh4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIF90aGlzNC51cHB5LmVtaXQoJ3VwbG9hZC1zdWNjZXNzJywgZmlsZSwgcmVzcCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBlcnJvciA9IF90aGlzNC5vcHRzLmdldFJlc3BvbnNlRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCwgeGhyKSB8fCBuZXcgRXJyb3IoJ1VwbG9hZCBlcnJvcicpO1xuICAgICAgICBlcnJvci5yZXF1ZXN0ID0geGhyO1xuICAgICAgICBlbWl0RXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdGltZXIuZG9uZSgpO1xuXG4gICAgICAgIHZhciBlcnJvciA9IF90aGlzNC5vcHRzLmdldFJlc3BvbnNlRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCwgeGhyKSB8fCBuZXcgRXJyb3IoJ1VwbG9hZCBlcnJvcicpO1xuICAgICAgICBlbWl0RXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczQudXBweS5vbignY2FuY2VsLWFsbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZXIuZG9uZSgpO1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB4aHIub3BlbihtZXRob2QudG9VcHBlckNhc2UoKSwgZW5kcG9pbnQsIHRydWUpO1xuICAgICAgLy8gSUUxMCBkb2VzIG5vdCBhbGxvdyBzZXR0aW5nIGB3aXRoQ3JlZGVudGlhbHNgIGJlZm9yZSBgb3BlbigpYCBpcyBjYWxsZWQuXG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gX3RoaXM0Lm9wdHMud2l0aENyZWRlbnRpYWxzO1xuXG4gICAgICBPYmplY3Qua2V5cyhfdGhpczQub3B0cy5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyLCBfdGhpczQub3B0cy5oZWFkZXJzW2hlYWRlcl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcblxuICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICBfdGhpczQudXBweS5lbWl0KCd1cGxvYWQtc3RhcnRlZCcsIGZpbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgWEhSVXBsb2FkLnByb3RvdHlwZS51cGxvYWRGaWxlcyA9IGZ1bmN0aW9uIHVwbG9hZEZpbGVzKGZpbGVzKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aW9ucyA9IGZpbGVzLm1hcChmdW5jdGlvbiAoZmlsZSwgaSkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBwYXJzZUludChpLCAxMCkgKyAxO1xuICAgICAgdmFyIHRvdGFsID0gZmlsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoZmlsZS5lcnJvcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZmlsZS5lcnJvcikpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChmaWxlLmlzUmVtb3RlKSB7XG4gICAgICAgIC8vIFdlIGVtaXQgdXBsb2FkLXN0YXJ0ZWQgaGVyZSwgc28gdGhhdCBpdCdzIGFsc28gZW1pdHRlZCBmb3IgZmlsZXNcbiAgICAgICAgLy8gdGhhdCBoYXZlIHRvIHdhaXQgZHVlIHRvIHRoZSBgbGltaXRgIG9wdGlvbi5cbiAgICAgICAgX3RoaXM1LnVwcHkuZW1pdCgndXBsb2FkLXN0YXJ0ZWQnLCBmaWxlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzNS51cGxvYWRSZW1vdGUuYmluZChfdGhpczUsIGZpbGUsIGN1cnJlbnQsIHRvdGFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzNS51cHB5LmVtaXQoJ3VwbG9hZC1zdGFydGVkJywgZmlsZSk7XG4gICAgICAgIHJldHVybiBfdGhpczUudXBsb2FkLmJpbmQoX3RoaXM1LCBmaWxlLCBjdXJyZW50LCB0b3RhbCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcHJvbWlzZXMgPSBhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICB2YXIgbGltaXRlZEFjdGlvbiA9IF90aGlzNS5saW1pdFVwbG9hZHMoYWN0aW9uKTtcbiAgICAgIHJldHVybiBsaW1pdGVkQWN0aW9uKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2V0dGxlKHByb21pc2VzKTtcbiAgfTtcblxuICBYSFJVcGxvYWQucHJvdG90eXBlLmhhbmRsZVVwbG9hZCA9IGZ1bmN0aW9uIGhhbmRsZVVwbG9hZChmaWxlSURzKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICBpZiAoZmlsZUlEcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudXBweS5sb2coJ1tYSFJVcGxvYWRdIE5vIGZpbGVzIHRvIHVwbG9hZCEnKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwcHkubG9nKCdbWEhSVXBsb2FkXSBVcGxvYWRpbmcuLi4nKTtcbiAgICB2YXIgZmlsZXMgPSBmaWxlSURzLm1hcChmdW5jdGlvbiAoZmlsZUlEKSB7XG4gICAgICByZXR1cm4gX3RoaXM2LnVwcHkuZ2V0RmlsZShmaWxlSUQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMub3B0cy5idW5kbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnVwbG9hZEJ1bmRsZShmaWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXBsb2FkRmlsZXMoZmlsZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH07XG5cbiAgWEhSVXBsb2FkLnByb3RvdHlwZS5pbnN0YWxsID0gZnVuY3Rpb24gaW5zdGFsbCgpIHtcbiAgICBpZiAodGhpcy5vcHRzLmJ1bmRsZSkge1xuICAgICAgdGhpcy51cHB5LnNldFN0YXRlKHtcbiAgICAgICAgY2FwYWJpbGl0aWVzOiBfZXh0ZW5kcyh7fSwgdGhpcy51cHB5LmdldFN0YXRlKCkuY2FwYWJpbGl0aWVzLCB7XG4gICAgICAgICAgYnVuZGxlZDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy51cHB5LmFkZFVwbG9hZGVyKHRoaXMuaGFuZGxlVXBsb2FkKTtcbiAgfTtcblxuICBYSFJVcGxvYWQucHJvdG90eXBlLnVuaW5zdGFsbCA9IGZ1bmN0aW9uIHVuaW5zdGFsbCgpIHtcbiAgICBpZiAodGhpcy5vcHRzLmJ1bmRsZSkge1xuICAgICAgdGhpcy51cHB5LnNldFN0YXRlKHtcbiAgICAgICAgY2FwYWJpbGl0aWVzOiBfZXh0ZW5kcyh7fSwgdGhpcy51cHB5LmdldFN0YXRlKCkuY2FwYWJpbGl0aWVzLCB7XG4gICAgICAgICAgYnVuZGxlZDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy51cHB5LnJlbW92ZVVwbG9hZGVyKHRoaXMuaGFuZGxlVXBsb2FkKTtcbiAgfTtcblxuICByZXR1cm4gWEhSVXBsb2FkO1xufShQbHVnaW4pOyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qKlxuICogY3VpZC5qc1xuICogQ29sbGlzaW9uLXJlc2lzdGFudCBVSUQgZ2VuZXJhdG9yIGZvciBicm93c2VycyBhbmQgbm9kZS5cbiAqIFNlcXVlbnRpYWwgZm9yIGZhc3QgZGIgbG9va3VwcyBhbmQgcmVjZW5jeSBzb3J0aW5nLlxuICogU2FmZSBmb3IgZWxlbWVudCBJRHMgYW5kIHNlcnZlci1zaWRlIGxvb2t1cHMuXG4gKlxuICogRXh0cmFjdGVkIGZyb20gQ0xDVFJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEVyaWMgRWxsaW90dCAyMDEyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbnZhciBmaW5nZXJwcmludCA9IHJlcXVpcmUoJy4vbGliL2ZpbmdlcnByaW50LmpzJyk7XG52YXIgcGFkID0gcmVxdWlyZSgnLi9saWIvcGFkLmpzJyk7XG5cbnZhciBjID0gMCxcbiAgYmxvY2tTaXplID0gNCxcbiAgYmFzZSA9IDM2LFxuICBkaXNjcmV0ZVZhbHVlcyA9IE1hdGgucG93KGJhc2UsIGJsb2NrU2l6ZSk7XG5cbmZ1bmN0aW9uIHJhbmRvbUJsb2NrICgpIHtcbiAgcmV0dXJuIHBhZCgoTWF0aC5yYW5kb20oKSAqXG4gICAgZGlzY3JldGVWYWx1ZXMgPDwgMClcbiAgICAudG9TdHJpbmcoYmFzZSksIGJsb2NrU2l6ZSk7XG59XG5cbmZ1bmN0aW9uIHNhZmVDb3VudGVyICgpIHtcbiAgYyA9IGMgPCBkaXNjcmV0ZVZhbHVlcyA/IGMgOiAwO1xuICBjKys7IC8vIHRoaXMgaXMgbm90IHN1YmxpbWluYWxcbiAgcmV0dXJuIGMgLSAxO1xufVxuXG5mdW5jdGlvbiBjdWlkICgpIHtcbiAgLy8gU3RhcnRpbmcgd2l0aCBhIGxvd2VyY2FzZSBsZXR0ZXIgbWFrZXNcbiAgLy8gaXQgSFRNTCBlbGVtZW50IElEIGZyaWVuZGx5LlxuICB2YXIgbGV0dGVyID0gJ2MnLCAvLyBoYXJkLWNvZGVkIGFsbG93cyBmb3Igc2VxdWVudGlhbCBhY2Nlc3NcblxuICAgIC8vIHRpbWVzdGFtcFxuICAgIC8vIHdhcm5pbmc6IHRoaXMgZXhwb3NlcyB0aGUgZXhhY3QgZGF0ZSBhbmQgdGltZVxuICAgIC8vIHRoYXQgdGhlIHVpZCB3YXMgY3JlYXRlZC5cbiAgICB0aW1lc3RhbXAgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkpLnRvU3RyaW5nKGJhc2UpLFxuXG4gICAgLy8gUHJldmVudCBzYW1lLW1hY2hpbmUgY29sbGlzaW9ucy5cbiAgICBjb3VudGVyID0gcGFkKHNhZmVDb3VudGVyKCkudG9TdHJpbmcoYmFzZSksIGJsb2NrU2l6ZSksXG5cbiAgICAvLyBBIGZldyBjaGFycyB0byBnZW5lcmF0ZSBkaXN0aW5jdCBpZHMgZm9yIGRpZmZlcmVudFxuICAgIC8vIGNsaWVudHMgKHNvIGRpZmZlcmVudCBjb21wdXRlcnMgYXJlIGZhciBsZXNzXG4gICAgLy8gbGlrZWx5IHRvIGdlbmVyYXRlIHRoZSBzYW1lIGlkKVxuICAgIHByaW50ID0gZmluZ2VycHJpbnQoKSxcblxuICAgIC8vIEdyYWIgc29tZSBtb3JlIGNoYXJzIGZyb20gTWF0aC5yYW5kb20oKVxuICAgIHJhbmRvbSA9IHJhbmRvbUJsb2NrKCkgKyByYW5kb21CbG9jaygpO1xuXG4gIHJldHVybiBsZXR0ZXIgKyB0aW1lc3RhbXAgKyBjb3VudGVyICsgcHJpbnQgKyByYW5kb207XG59XG5cbmN1aWQuc2x1ZyA9IGZ1bmN0aW9uIHNsdWcgKCkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKDM2KSxcbiAgICBjb3VudGVyID0gc2FmZUNvdW50ZXIoKS50b1N0cmluZygzNikuc2xpY2UoLTQpLFxuICAgIHByaW50ID0gZmluZ2VycHJpbnQoKS5zbGljZSgwLCAxKSArXG4gICAgICBmaW5nZXJwcmludCgpLnNsaWNlKC0xKSxcbiAgICByYW5kb20gPSByYW5kb21CbG9jaygpLnNsaWNlKC0yKTtcblxuICByZXR1cm4gZGF0ZS5zbGljZSgtMikgK1xuICAgIGNvdW50ZXIgKyBwcmludCArIHJhbmRvbTtcbn07XG5cbmN1aWQuaXNDdWlkID0gZnVuY3Rpb24gaXNDdWlkIChzdHJpbmdUb0NoZWNrKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nVG9DaGVjayAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTtcbiAgaWYgKHN0cmluZ1RvQ2hlY2suc3RhcnRzV2l0aCgnYycpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY3VpZC5pc1NsdWcgPSBmdW5jdGlvbiBpc1NsdWcgKHN0cmluZ1RvQ2hlY2spIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmdUb0NoZWNrICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3RyaW5nTGVuZ3RoID0gc3RyaW5nVG9DaGVjay5sZW5ndGg7XG4gIGlmIChzdHJpbmdMZW5ndGggPj0gNyAmJiBzdHJpbmdMZW5ndGggPD0gMTApIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jdWlkLmZpbmdlcnByaW50ID0gZmluZ2VycHJpbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gY3VpZDtcbiIsInZhciBwYWQgPSByZXF1aXJlKCcuL3BhZC5qcycpO1xuXG52YXIgZW52ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgPyB3aW5kb3cgOiBzZWxmO1xudmFyIGdsb2JhbENvdW50ID0gT2JqZWN0LmtleXMoZW52KS5sZW5ndGg7XG52YXIgbWltZVR5cGVzTGVuZ3RoID0gbmF2aWdhdG9yLm1pbWVUeXBlcyA/IG5hdmlnYXRvci5taW1lVHlwZXMubGVuZ3RoIDogMDtcbnZhciBjbGllbnRJZCA9IHBhZCgobWltZVR5cGVzTGVuZ3RoICtcbiAgbmF2aWdhdG9yLnVzZXJBZ2VudC5sZW5ndGgpLnRvU3RyaW5nKDM2KSArXG4gIGdsb2JhbENvdW50LnRvU3RyaW5nKDM2KSwgNCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmluZ2VycHJpbnQgKCkge1xuICByZXR1cm4gY2xpZW50SWQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYWQgKG51bSwgc2l6ZSkge1xuICB2YXIgcyA9ICcwMDAwMDAwMDAnICsgbnVtO1xuICByZXR1cm4gcy5zdWJzdHIocy5sZW5ndGggLSBzaXplKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGRyYWdEcm9wXG5cbnZhciBmbGF0dGVuID0gcmVxdWlyZSgnZmxhdHRlbicpXG52YXIgcGFyYWxsZWwgPSByZXF1aXJlKCdydW4tcGFyYWxsZWwnKVxuXG5mdW5jdGlvbiBkcmFnRHJvcCAoZWxlbSwgbGlzdGVuZXJzKSB7XG4gIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgc2VsZWN0b3IgPSBlbGVtXG4gICAgZWxlbSA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pXG4gICAgaWYgKCFlbGVtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIHNlbGVjdG9yICsgJ1wiIGRvZXMgbm90IG1hdGNoIGFueSBIVE1MIGVsZW1lbnRzJylcbiAgICB9XG4gIH1cblxuICBpZiAoIWVsZW0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGVsZW0gKyAnXCIgaXMgbm90IGEgdmFsaWQgSFRNTCBlbGVtZW50JylcbiAgfVxuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGlzdGVuZXJzID0geyBvbkRyb3A6IGxpc3RlbmVycyB9XG4gIH1cblxuICB2YXIgdGltZW91dFxuXG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgb25EcmFnRW50ZXIsIGZhbHNlKVxuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnT3ZlciwgZmFsc2UpXG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgb25EcmFnTGVhdmUsIGZhbHNlKVxuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKVxuXG4gIC8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBkcmFnLWRyb3AgbGlzdGVuZXJzXG4gIHJldHVybiBmdW5jdGlvbiByZW1vdmUgKCkge1xuICAgIHJlbW92ZURyYWdDbGFzcygpXG4gICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBvbkRyYWdFbnRlciwgZmFsc2UpXG4gICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZ092ZXIsIGZhbHNlKVxuICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgb25EcmFnTGVhdmUsIGZhbHNlKVxuICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdFbnRlciAoZSkge1xuICAgIGlmIChsaXN0ZW5lcnMub25EcmFnRW50ZXIpIHtcbiAgICAgIGxpc3RlbmVycy5vbkRyYWdFbnRlcihlKVxuICAgIH1cblxuICAgIC8vIFByZXZlbnQgZXZlbnRcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdPdmVyIChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5pdGVtcykge1xuICAgICAgLy8gT25seSBhZGQgXCJkcmFnXCIgY2xhc3Mgd2hlbiBgaXRlbXNgIGNvbnRhaW5zIGl0ZW1zIHRoYXQgYXJlIGFibGUgdG8gYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgdGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzIChmaWxlcyB2cy4gdGV4dClcbiAgICAgIHZhciBpdGVtcyA9IHRvQXJyYXkoZS5kYXRhVHJhbnNmZXIuaXRlbXMpXG4gICAgICB2YXIgZmlsZUl0ZW1zID0gaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmtpbmQgPT09ICdmaWxlJyB9KVxuICAgICAgdmFyIHRleHRJdGVtcyA9IGl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5raW5kID09PSAnc3RyaW5nJyB9KVxuXG4gICAgICBpZiAoZmlsZUl0ZW1zLmxlbmd0aCA9PT0gMCAmJiAhbGlzdGVuZXJzLm9uRHJvcFRleHQpIHJldHVyblxuICAgICAgaWYgKHRleHRJdGVtcy5sZW5ndGggPT09IDAgJiYgIWxpc3RlbmVycy5vbkRyb3ApIHJldHVyblxuICAgICAgaWYgKGZpbGVJdGVtcy5sZW5ndGggPT09IDAgJiYgdGV4dEl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgfVxuXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdkcmFnJylcbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcblxuICAgIGlmIChsaXN0ZW5lcnMub25EcmFnT3Zlcikge1xuICAgICAgbGlzdGVuZXJzLm9uRHJhZ092ZXIoZSlcbiAgICB9XG5cbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdMZWF2ZSAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChsaXN0ZW5lcnMub25EcmFnTGVhdmUpIHtcbiAgICAgIGxpc3RlbmVycy5vbkRyYWdMZWF2ZShlKVxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlbW92ZURyYWdDbGFzcywgNTApXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcCAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChsaXN0ZW5lcnMub25EcmFnTGVhdmUpIHtcbiAgICAgIGxpc3RlbmVycy5vbkRyYWdMZWF2ZShlKVxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIHJlbW92ZURyYWdDbGFzcygpXG5cbiAgICB2YXIgcG9zID0ge1xuICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgeTogZS5jbGllbnRZXG4gICAgfVxuXG4gICAgLy8gdGV4dCBkcm9wIHN1cHBvcnRcbiAgICB2YXIgdGV4dCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKVxuICAgIGlmICh0ZXh0ICYmIGxpc3RlbmVycy5vbkRyb3BUZXh0KSB7XG4gICAgICBsaXN0ZW5lcnMub25Ecm9wVGV4dCh0ZXh0LCBwb3MpXG4gICAgfVxuXG4gICAgLy8gZmlsZSBkcm9wIHN1cHBvcnRcbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcbiAgICAgIC8vIEhhbmRsZSBkaXJlY3RvcmllcyBpbiBDaHJvbWUgdXNpbmcgdGhlIHByb3ByaWV0YXJ5IEZpbGVTeXN0ZW0gQVBJXG4gICAgICB2YXIgaXRlbXMgPSB0b0FycmF5KGUuZGF0YVRyYW5zZmVyLml0ZW1zKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ua2luZCA9PT0gJ2ZpbGUnXG4gICAgICB9KVxuXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgICAgcGFyYWxsZWwoaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICBwcm9jZXNzRW50cnkoaXRlbS53ZWJraXRHZXRBc0VudHJ5KCksIGNiKVxuICAgICAgICB9XG4gICAgICB9KSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAvLyBUaGlzIGNhdGNoZXMgcGVybWlzc2lvbiBlcnJvcnMgd2l0aCBmaWxlOi8vIGluIENocm9tZS4gVGhpcyBzaG91bGQgbmV2ZXJcbiAgICAgICAgLy8gdGhyb3cgaW4gcHJvZHVjdGlvbiBjb2RlLCBzbyB0aGUgdXNlciBkb2VzIG5vdCBuZWVkIHRvIHVzZSB0cnktY2F0Y2guXG4gICAgICAgIGlmIChlcnIpIHRocm93IGVyclxuICAgICAgICBpZiAobGlzdGVuZXJzLm9uRHJvcCkge1xuICAgICAgICAgIGxpc3RlbmVycy5vbkRyb3AoZmxhdHRlbihyZXN1bHRzKSwgcG9zKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZmlsZXMgPSB0b0FycmF5KGUuZGF0YVRyYW5zZmVyLmZpbGVzKVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICBmaWxlLmZ1bGxQYXRoID0gJy8nICsgZmlsZS5uYW1lXG4gICAgICB9KVxuXG4gICAgICBpZiAobGlzdGVuZXJzLm9uRHJvcCkge1xuICAgICAgICBsaXN0ZW5lcnMub25Ecm9wKGZpbGVzLCBwb3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVEcmFnQ2xhc3MgKCkge1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZycpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0VudHJ5IChlbnRyeSwgY2IpIHtcbiAgdmFyIGVudHJpZXMgPSBbXVxuXG4gIGlmIChlbnRyeS5pc0ZpbGUpIHtcbiAgICBlbnRyeS5maWxlKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICBmaWxlLmZ1bGxQYXRoID0gZW50cnkuZnVsbFBhdGggLy8gcHJlc2VydmUgcGF0aGluZyBmb3IgY29uc3VtZXJcbiAgICAgIGNiKG51bGwsIGZpbGUpXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgY2IoZXJyKVxuICAgIH0pXG4gIH0gZWxzZSBpZiAoZW50cnkuaXNEaXJlY3RvcnkpIHtcbiAgICB2YXIgcmVhZGVyID0gZW50cnkuY3JlYXRlUmVhZGVyKClcbiAgICByZWFkRW50cmllcygpXG4gIH1cblxuICBmdW5jdGlvbiByZWFkRW50cmllcyAoKSB7XG4gICAgcmVhZGVyLnJlYWRFbnRyaWVzKGZ1bmN0aW9uIChlbnRyaWVzXykge1xuICAgICAgaWYgKGVudHJpZXNfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZW50cmllcyA9IGVudHJpZXMuY29uY2F0KHRvQXJyYXkoZW50cmllc18pKVxuICAgICAgICByZWFkRW50cmllcygpIC8vIGNvbnRpbnVlIHJlYWRpbmcgZW50cmllcyB1bnRpbCBgcmVhZEVudHJpZXNgIHJldHVybnMgbm8gbW9yZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZUVudHJpZXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBkb25lRW50cmllcyAoKSB7XG4gICAgcGFyYWxsZWwoZW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHByb2Nlc3NFbnRyeShlbnRyeSwgY2IpXG4gICAgICB9XG4gICAgfSksIGNiKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QgfHwgW10sIDApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZsYXR0ZW4obGlzdCwgZGVwdGgpIHtcbiAgZGVwdGggPSAodHlwZW9mIGRlcHRoID09ICdudW1iZXInKSA/IGRlcHRoIDogSW5maW5pdHk7XG5cbiAgaWYgKCFkZXB0aCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgICByZXR1cm4gbGlzdC5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gaTsgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgcmV0dXJuIF9mbGF0dGVuKGxpc3QsIDEpO1xuXG4gIGZ1bmN0aW9uIF9mbGF0dGVuKGxpc3QsIGQpIHtcbiAgICByZXR1cm4gbGlzdC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaXRlbSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkgJiYgZCA8IGRlcHRoKSB7XG4gICAgICAgIHJldHVybiBhY2MuY29uY2F0KF9mbGF0dGVuKGl0ZW0sIGQgKyAxKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoaXRlbSk7XG4gICAgICB9XG4gICAgfSwgW10pO1xuICB9XG59O1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwidmFyIHdpbGRjYXJkID0gcmVxdWlyZSgnd2lsZGNhcmQnKTtcbnZhciByZU1pbWVQYXJ0U3BsaXQgPSAvW1xcL1xcK1xcLl0vO1xuXG4vKipcbiAgIyBtaW1lLW1hdGNoXG5cbiAgQSBzaW1wbGUgZnVuY3Rpb24gdG8gY2hlY2tlciB3aGV0aGVyIGEgdGFyZ2V0IG1pbWUgdHlwZSBtYXRjaGVzIGEgbWltZS10eXBlXG4gIHBhdHRlcm4gKGUuZy4gaW1hZ2UvanBlZyBtYXRjaGVzIGltYWdlL2pwZWcgT1IgaW1hZ2UvKikuXG5cbiAgIyMgRXhhbXBsZSBVc2FnZVxuXG4gIDw8PCBleGFtcGxlLmpzXG5cbioqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHBhdHRlcm4pIHtcbiAgZnVuY3Rpb24gdGVzdChwYXR0ZXJuKSB7XG4gICAgdmFyIHJlc3VsdCA9IHdpbGRjYXJkKHBhdHRlcm4sIHRhcmdldCwgcmVNaW1lUGFydFNwbGl0KTtcblxuICAgIC8vIGVuc3VyZSB0aGF0IHdlIGhhdmUgYSB2YWxpZCBtaW1lIHR5cGUgKHNob3VsZCBoYXZlIHR3byBwYXJ0cylcbiAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPj0gMjtcbiAgfVxuXG4gIHJldHVybiBwYXR0ZXJuID8gdGVzdChwYXR0ZXJuLnNwbGl0KCc7JylbMF0pIDogdGVzdDtcbn07XG4iLCIvKipcbiogQ3JlYXRlIGFuIGV2ZW50IGVtaXR0ZXIgd2l0aCBuYW1lc3BhY2VzXG4qIEBuYW1lIGNyZWF0ZU5hbWVzcGFjZUVtaXR0ZXJcbiogQGV4YW1wbGVcbiogdmFyIGVtaXR0ZXIgPSByZXF1aXJlKCcuL2luZGV4JykoKVxuKlxuKiBlbWl0dGVyLm9uKCcqJywgZnVuY3Rpb24gKCkge1xuKiAgIGNvbnNvbGUubG9nKCdhbGwgZXZlbnRzIGVtaXR0ZWQnLCB0aGlzLmV2ZW50KVxuKiB9KVxuKlxuKiBlbWl0dGVyLm9uKCdleGFtcGxlJywgZnVuY3Rpb24gKCkge1xuKiAgIGNvbnNvbGUubG9nKCdleGFtcGxlIGV2ZW50IGVtaXR0ZWQnKVxuKiB9KVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlTmFtZXNwYWNlRW1pdHRlciAoKSB7XG4gIHZhciBlbWl0dGVyID0ge31cbiAgdmFyIF9mbnMgPSBlbWl0dGVyLl9mbnMgPSB7fVxuXG4gIC8qKlxuICAqIEVtaXQgYW4gZXZlbnQuIE9wdGlvbmFsbHkgbmFtZXNwYWNlIHRoZSBldmVudC4gSGFuZGxlcnMgYXJlIGZpcmVkIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgd2l0aCBleGFjdCBtYXRjaGVzIHRha2luZyBwcmVjZWRlbmNlLiBTZXBhcmF0ZSB0aGUgbmFtZXNwYWNlIGFuZCBldmVudCB3aXRoIGEgYDpgXG4gICogQG5hbWUgZW1pdFxuICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCDigJMgdGhlIG5hbWUgb2YgdGhlIGV2ZW50LCB3aXRoIG9wdGlvbmFsIG5hbWVzcGFjZVxuICAqIEBwYXJhbSB7Li4uKn0gZGF0YSDigJMgdXAgdG8gNiBhcmd1bWVudHMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBldmVudCBsaXN0ZW5lclxuICAqIEBleGFtcGxlXG4gICogZW1pdHRlci5lbWl0KCdleGFtcGxlJylcbiAgKiBlbWl0dGVyLmVtaXQoJ2RlbW86dGVzdCcpXG4gICogZW1pdHRlci5lbWl0KCdkYXRhJywgeyBleGFtcGxlOiB0cnVlfSwgJ2Egc3RyaW5nJywgMSlcbiAgKi9cbiAgZW1pdHRlci5lbWl0ID0gZnVuY3Rpb24gZW1pdCAoZXZlbnQsIGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUsIGFyZzYpIHtcbiAgICB2YXIgdG9FbWl0ID0gZ2V0TGlzdGVuZXJzKGV2ZW50KVxuXG4gICAgaWYgKHRvRW1pdC5sZW5ndGgpIHtcbiAgICAgIGVtaXRBbGwoZXZlbnQsIHRvRW1pdCwgW2FyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUsIGFyZzZdKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZSBlbiBldmVudCBsaXN0ZW5lci5cbiAgKiBAbmFtZSBvblxuICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICogQGV4YW1wbGVcbiAgKiBlbWl0dGVyLm9uKCdleGFtcGxlJywgZnVuY3Rpb24gKCkge30pXG4gICogZW1pdHRlci5vbignZGVtbycsIGZ1bmN0aW9uICgpIHt9KVxuICAqL1xuICBlbWl0dGVyLm9uID0gZnVuY3Rpb24gb24gKGV2ZW50LCBmbikge1xuICAgIGlmICghX2Zuc1tldmVudF0pIHtcbiAgICAgIF9mbnNbZXZlbnRdID0gW11cbiAgICB9XG5cbiAgICBfZm5zW2V2ZW50XS5wdXNoKGZuKVxuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlIGVuIGV2ZW50IGxpc3RlbmVyIHRoYXQgZmlyZXMgb25jZS5cbiAgKiBAbmFtZSBvbmNlXG4gICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgKiBAZXhhbXBsZVxuICAqIGVtaXR0ZXIub25jZSgnZXhhbXBsZScsIGZ1bmN0aW9uICgpIHt9KVxuICAqIGVtaXR0ZXIub25jZSgnZGVtbycsIGZ1bmN0aW9uICgpIHt9KVxuICAqL1xuICBlbWl0dGVyLm9uY2UgPSBmdW5jdGlvbiBvbmNlIChldmVudCwgZm4pIHtcbiAgICBmdW5jdGlvbiBvbmUgKCkge1xuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgZW1pdHRlci5vZmYoZXZlbnQsIG9uZSlcbiAgICB9XG4gICAgdGhpcy5vbihldmVudCwgb25lKVxuICB9XG5cbiAgLyoqXG4gICogU3RvcCBsaXN0ZW5pbmcgdG8gYW4gZXZlbnQuIFN0b3AgYWxsIGxpc3RlbmVycyBvbiBhbiBldmVudCBieSBvbmx5IHBhc3NpbmcgdGhlIGV2ZW50IG5hbWUuIFN0b3AgYSBzaW5nbGUgbGlzdGVuZXIgYnkgcGFzc2luZyB0aGF0IGV2ZW50IGhhbmRsZXIgYXMgYSBjYWxsYmFjay5cbiAgKiBZb3UgbXVzdCBiZSBleHBsaWNpdCBhYm91dCB3aGF0IHdpbGwgYmUgdW5zdWJzY3JpYmVkOiBgZW1pdHRlci5vZmYoJ2RlbW8nKWAgd2lsbCB1bnN1YnNjcmliZSBhbiBgZW1pdHRlci5vbignZGVtbycpYCBsaXN0ZW5lcixcbiAgKiBgZW1pdHRlci5vZmYoJ2RlbW86ZXhhbXBsZScpYCB3aWxsIHVuc3Vic2NyaWJlIGFuIGBlbWl0dGVyLm9uKCdkZW1vOmV4YW1wbGUnKWAgbGlzdGVuZXJcbiAgKiBAbmFtZSBvZmZcbiAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dIOKAkyB0aGUgc3BlY2lmaWMgaGFuZGxlclxuICAqIEBleGFtcGxlXG4gICogZW1pdHRlci5vZmYoJ2V4YW1wbGUnKVxuICAqIGVtaXR0ZXIub2ZmKCdkZW1vJywgZnVuY3Rpb24gKCkge30pXG4gICovXG4gIGVtaXR0ZXIub2ZmID0gZnVuY3Rpb24gb2ZmIChldmVudCwgZm4pIHtcbiAgICB2YXIga2VlcCA9IFtdXG5cbiAgICBpZiAoZXZlbnQgJiYgZm4pIHtcbiAgICAgIHZhciBmbnMgPSB0aGlzLl9mbnNbZXZlbnRdXG4gICAgICB2YXIgaSA9IDBcbiAgICAgIHZhciBsID0gZm5zID8gZm5zLmxlbmd0aCA6IDBcblxuICAgICAgZm9yIChpOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChmbnNbaV0gIT09IGZuKSB7XG4gICAgICAgICAga2VlcC5wdXNoKGZuc1tpXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGtlZXAubGVuZ3RoID8gdGhpcy5fZm5zW2V2ZW50XSA9IGtlZXAgOiBkZWxldGUgdGhpcy5fZm5zW2V2ZW50XVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdGVuZXJzIChlKSB7XG4gICAgdmFyIG91dCA9IF9mbnNbZV0gPyBfZm5zW2VdIDogW11cbiAgICB2YXIgaWR4ID0gZS5pbmRleE9mKCc6JylcbiAgICB2YXIgYXJncyA9IChpZHggPT09IC0xKSA/IFtlXSA6IFtlLnN1YnN0cmluZygwLCBpZHgpLCBlLnN1YnN0cmluZyhpZHggKyAxKV1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoX2ZucylcbiAgICB2YXIgaSA9IDBcbiAgICB2YXIgbCA9IGtleXMubGVuZ3RoXG5cbiAgICBmb3IgKGk7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldXG4gICAgICBpZiAoa2V5ID09PSAnKicpIHtcbiAgICAgICAgb3V0ID0gb3V0LmNvbmNhdChfZm5zW2tleV0pXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMiAmJiBhcmdzWzBdID09PSBrZXkpIHtcbiAgICAgICAgb3V0ID0gb3V0LmNvbmNhdChfZm5zW2tleV0pXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dFxuICB9XG5cbiAgZnVuY3Rpb24gZW1pdEFsbCAoZSwgZm5zLCBhcmdzKSB7XG4gICAgdmFyIGkgPSAwXG4gICAgdmFyIGwgPSBmbnMubGVuZ3RoXG5cbiAgICBmb3IgKGk7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICghZm5zW2ldKSBicmVha1xuICAgICAgZm5zW2ldLmV2ZW50ID0gZVxuICAgICAgZm5zW2ldLmFwcGx5KGZuc1tpXSwgYXJncylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW1pdHRlclxufVxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ3ByZWFjdCcpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ3ByZWFjdCddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwuUHJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwID0gZmFjdG9yeShnbG9iYWwucHJlYWN0KSk7XG59KHRoaXMsIChmdW5jdGlvbiAocHJlYWN0KSB7ICd1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ2V0S2V5KHZub2RlKSB7XG5cdHJldHVybiB2bm9kZS5hdHRyaWJ1dGVzICYmIHZub2RlLmF0dHJpYnV0ZXMua2V5O1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRCYXNlKGNvbXBvbmVudCkge1xuXHRyZXR1cm4gY29tcG9uZW50LmJhc2U7XG59XG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuXHRyZXR1cm4gY2hpbGRyZW4gJiYgY2hpbGRyZW5bMF07XG59XG5cbmZ1bmN0aW9uIGZpbHRlck51bGxDaGlsZHJlbihjaGlsZHJlbikge1xuXHRyZXR1cm4gY2hpbGRyZW4gJiYgY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG5cdFx0cmV0dXJuIGkgIT09IG51bGw7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kKGFyciwgaXRlcikge1xuXHRmb3IgKHZhciBpID0gYXJyLmxlbmd0aDsgaS0tOykge1xuXHRcdGlmIChpdGVyKGFycltpXSkpIHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXkpIHtcblx0cmV0dXJuIGZpbmQoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuIGdldEtleShjKSA9PT0ga2V5O1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaW5DaGlsZHJlbihjaGlsZHJlbiwgY2hpbGQpIHtcblx0cmV0dXJuIGluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwgZ2V0S2V5KGNoaWxkKSk7XG59XG5cbmZ1bmN0aW9uIGlzU2hvd25JbkNoaWxkcmVuQnlLZXkoY2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApIHtcblx0cmV0dXJuIGZpbmQoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuIGdldEtleShjKSA9PT0ga2V5ICYmIGMucHJvcHNbc2hvd1Byb3BdO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaXNTaG93bkluQ2hpbGRyZW4oY2hpbGRyZW4sIGNoaWxkLCBzaG93UHJvcCkge1xuXHRyZXR1cm4gaXNTaG93bkluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwgZ2V0S2V5KGNoaWxkKSwgc2hvd1Byb3ApO1xufVxuXG5mdW5jdGlvbiBtZXJnZUNoaWxkTWFwcGluZ3MocHJldiwgbmV4dCkge1xuXHR2YXIgcmV0ID0gW107XG5cblx0dmFyIG5leHRDaGlsZHJlblBlbmRpbmcgPSB7fSxcblx0ICAgIHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuXHRwcmV2LmZvckVhY2goZnVuY3Rpb24gKGMpIHtcblx0XHR2YXIga2V5ID0gZ2V0S2V5KGMpO1xuXHRcdGlmIChpbkNoaWxkcmVuQnlLZXkobmV4dCwga2V5KSkge1xuXHRcdFx0aWYgKHBlbmRpbmdDaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdFx0bmV4dENoaWxkcmVuUGVuZGluZ1trZXldID0gcGVuZGluZ0NoaWxkcmVuO1xuXHRcdFx0XHRwZW5kaW5nQ2hpbGRyZW4gPSBbXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cGVuZGluZ0NoaWxkcmVuLnB1c2goYyk7XG5cdFx0fVxuXHR9KTtcblxuXHRuZXh0LmZvckVhY2goZnVuY3Rpb24gKGMpIHtcblx0XHR2YXIga2V5ID0gZ2V0S2V5KGMpO1xuXHRcdGlmIChuZXh0Q2hpbGRyZW5QZW5kaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHJldCA9IHJldC5jb25jYXQobmV4dENoaWxkcmVuUGVuZGluZ1trZXldKTtcblx0XHR9XG5cdFx0cmV0LnB1c2goYyk7XG5cdH0pO1xuXG5cdHJldHVybiByZXQuY29uY2F0KHBlbmRpbmdDaGlsZHJlbik7XG59XG5cbnZhciBTUEFDRSA9ICcgJztcbnZhciBSRV9DTEFTUyA9IC9bXFxuXFx0XFxyXSsvZztcblxudmFyIG5vcm0gPSBmdW5jdGlvbiAoZWxlbUNsYXNzKSB7XG5cdHJldHVybiAoU1BBQ0UgKyBlbGVtQ2xhc3MgKyBTUEFDRSkucmVwbGFjZShSRV9DTEFTUywgU1BBQ0UpO1xufTtcblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG5cdGlmIChlbGVtLmNsYXNzTGlzdCkge1xuXHRcdHZhciBfZWxlbSRjbGFzc0xpc3Q7XG5cblx0XHQoX2VsZW0kY2xhc3NMaXN0ID0gZWxlbS5jbGFzc0xpc3QpLmFkZC5hcHBseShfZWxlbSRjbGFzc0xpc3QsIGNsYXNzTmFtZS5zcGxpdCgnICcpKTtcblx0fSBlbHNlIHtcblx0XHRlbGVtLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbSwgbmVlZGxlKSB7XG5cdG5lZWRsZSA9IG5lZWRsZS50cmltKCk7XG5cdGlmIChlbGVtLmNsYXNzTGlzdCkge1xuXHRcdHZhciBfZWxlbSRjbGFzc0xpc3QyO1xuXG5cdFx0KF9lbGVtJGNsYXNzTGlzdDIgPSBlbGVtLmNsYXNzTGlzdCkucmVtb3ZlLmFwcGx5KF9lbGVtJGNsYXNzTGlzdDIsIG5lZWRsZS5zcGxpdCgnICcpKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgZWxlbUNsYXNzID0gZWxlbS5jbGFzc05hbWUudHJpbSgpO1xuXHRcdHZhciBjbGFzc05hbWUgPSBub3JtKGVsZW1DbGFzcyk7XG5cdFx0bmVlZGxlID0gU1BBQ0UgKyBuZWVkbGUgKyBTUEFDRTtcblx0XHR3aGlsZSAoY2xhc3NOYW1lLmluZGV4T2YobmVlZGxlKSA+PSAwKSB7XG5cdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShuZWVkbGUsIFNQQUNFKTtcblx0XHR9XG5cdFx0ZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuXHR9XG59XG5cbnZhciBFVkVOVF9OQU1FX01BUCA9IHtcblx0dHJhbnNpdGlvbmVuZDoge1xuXHRcdHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcblx0XHRXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG5cdFx0TW96VHJhbnNpdGlvbjogJ21velRyYW5zaXRpb25FbmQnLFxuXHRcdE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQnLFxuXHRcdG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvbkVuZCdcblx0fSxcblxuXHRhbmltYXRpb25lbmQ6IHtcblx0XHRhbmltYXRpb246ICdhbmltYXRpb25lbmQnLFxuXHRcdFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG5cdFx0TW96QW5pbWF0aW9uOiAnbW96QW5pbWF0aW9uRW5kJyxcblx0XHRPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG5cdFx0bXNBbmltYXRpb246ICdNU0FuaW1hdGlvbkVuZCdcblx0fVxufTtcblxudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG5cdHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0ICAgIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG5cdGlmICghKCdBbmltYXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuXHRcdGRlbGV0ZSBFVkVOVF9OQU1FX01BUC5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuXHR9XG5cblx0aWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuXHRcdGRlbGV0ZSBFVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG5cdH1cblxuXHRmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG5cdFx0dmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcblx0XHRmb3IgKHZhciBzdHlsZU5hbWUgaW4gYmFzZUV2ZW50cykge1xuXHRcdFx0aWYgKHN0eWxlTmFtZSBpbiBzdHlsZSkge1xuXHRcdFx0XHRlbmRFdmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdGRldGVjdEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcblx0aWYgKCFlbmRFdmVudHMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuXHR9XG5cdGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihlbmRFdmVudCwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG5cdGlmICghZW5kRXZlbnRzLmxlbmd0aCkgcmV0dXJuO1xuXHRlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcblx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcblx0fSk7XG59XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgVElDSyA9IDE3O1xuXG52YXIgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRpbmhlcml0cyhDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCwgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQoKSB7XG5cdFx0dmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIENTU1RyYW5zaXRpb25Hcm91cENoaWxkKTtcblxuXHRcdGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdFx0XHRhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuXHRcdH1cblxuXHRcdHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmZsdXNoQ2xhc3NOYW1lUXVldWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoZ2V0Q29tcG9uZW50QmFzZShfdGhpcykpIHtcblx0XHRcdFx0YWRkQ2xhc3MoZ2V0Q29tcG9uZW50QmFzZShfdGhpcyksIF90aGlzLmNsYXNzTmFtZVF1ZXVlLmpvaW4oJyAnKSk7XG5cdFx0XHR9XG5cdFx0XHRfdGhpcy5jbGFzc05hbWVRdWV1ZS5sZW5ndGggPSAwO1xuXHRcdFx0X3RoaXMudGltZW91dCA9IG51bGw7XG5cdFx0fSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcblx0fVxuXG5cdENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS50cmFuc2l0aW9uID0gZnVuY3Rpb24gdHJhbnNpdGlvbihhbmltYXRpb25UeXBlLCBmaW5pc2hDYWxsYmFjaywgdGltZW91dCkge1xuXHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0dmFyIG5vZGUgPSBnZXRDb21wb25lbnRCYXNlKHRoaXMpO1xuXG5cdFx0dmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMubmFtZVthbmltYXRpb25UeXBlXSB8fCB0aGlzLnByb3BzLm5hbWUgKyAnLScgKyBhbmltYXRpb25UeXBlO1xuXHRcdHZhciBhY3RpdmVDbGFzc05hbWUgPSB0aGlzLnByb3BzLm5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXSB8fCBjbGFzc05hbWUgKyAnLWFjdGl2ZSc7XG5cdFx0dmFyIHRpbWVyID0gbnVsbDtcblxuXHRcdGlmICh0aGlzLmVuZExpc3RlbmVyKSB7XG5cdFx0XHR0aGlzLmVuZExpc3RlbmVyKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkgcmV0dXJuO1xuXG5cdFx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdFx0cmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcblx0XHRcdHJlbW92ZUNsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cdFx0XHRyZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIF90aGlzMi5lbmRMaXN0ZW5lcik7XG5cdFx0XHRfdGhpczIuZW5kTGlzdGVuZXIgPSBudWxsO1xuXG5cdFx0XHRpZiAoZmluaXNoQ2FsbGJhY2spIHtcblx0XHRcdFx0ZmluaXNoQ2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYgKHRpbWVvdXQpIHtcblx0XHRcdHRpbWVyID0gc2V0VGltZW91dCh0aGlzLmVuZExpc3RlbmVyLCB0aW1lb3V0KTtcblx0XHRcdHRoaXMudHJhbnNpdGlvblRpbWVvdXRzLnB1c2godGltZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIHRoaXMuZW5kTGlzdGVuZXIpO1xuXHRcdH1cblxuXHRcdGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG5cblx0XHR0aGlzLnF1ZXVlQ2xhc3MoYWN0aXZlQ2xhc3NOYW1lKTtcblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUucXVldWVDbGFzcyA9IGZ1bmN0aW9uIHF1ZXVlQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0dGhpcy5jbGFzc05hbWVRdWV1ZS5wdXNoKGNsYXNzTmFtZSk7XG5cblx0XHRpZiAoIXRoaXMudGltZW91dCkge1xuXHRcdFx0dGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLmZsdXNoQ2xhc3NOYW1lUXVldWUsIFRJQ0spO1xuXHRcdH1cblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG5cdFx0aWYgKHRoaXMudGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cdFx0XHR0aGlzLmNsYXNzTmFtZVF1ZXVlLmxlbmd0aCA9IDA7XG5cdFx0XHR0aGlzLnRpbWVvdXQgPSBudWxsO1xuXHRcdH1cblx0XHRpZiAodGhpcy5lbmRMaXN0ZW5lcikge1xuXHRcdFx0dGhpcy5lbmRMaXN0ZW5lcigpO1xuXHRcdH1cblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMuY2xhc3NOYW1lUXVldWUgPSBbXTtcblx0XHR0aGlzLnRyYW5zaXRpb25UaW1lb3V0cyA9IFtdO1xuXHR9O1xuXG5cdENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdGlmICh0aGlzLnRpbWVvdXQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXHRcdH1cblx0XHR0aGlzLnRyYW5zaXRpb25UaW1lb3V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0aW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxFbnRlciA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxFbnRlcihkb25lKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZW50ZXIpIHtcblx0XHRcdHRoaXMudHJhbnNpdGlvbignZW50ZXInLCBkb25lLCB0aGlzLnByb3BzLmVudGVyVGltZW91dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvbmUoKTtcblx0XHR9XG5cdH07XG5cblx0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMZWF2ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShkb25lKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMubGVhdmUpIHtcblx0XHRcdHRoaXMudHJhbnNpdGlvbignbGVhdmUnLCBkb25lLCB0aGlzLnByb3BzLmxlYXZlVGltZW91dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvbmUoKTtcblx0XHR9XG5cdH07XG5cblx0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRyZXR1cm4gb25seUNoaWxkKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXHR9O1xuXG5cdHJldHVybiBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZDtcbn0ocHJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBDU1NUcmFuc2l0aW9uR3JvdXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRpbmhlcml0cyhDU1NUcmFuc2l0aW9uR3JvdXAsIF9Db21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIENTU1RyYW5zaXRpb25Hcm91cChwcm9wcykge1xuXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIENTU1RyYW5zaXRpb25Hcm91cCk7XG5cblx0XHR2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzKSk7XG5cblx0XHRfdGhpcy5yZW5kZXJDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdFx0dmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHM7XG5cdFx0XHR2YXIgdHJhbnNpdGlvbk5hbWUgPSBfdGhpcyRwcm9wcy50cmFuc2l0aW9uTmFtZTtcblx0XHRcdHZhciB0cmFuc2l0aW9uRW50ZXIgPSBfdGhpcyRwcm9wcy50cmFuc2l0aW9uRW50ZXI7XG5cdFx0XHR2YXIgdHJhbnNpdGlvbkxlYXZlID0gX3RoaXMkcHJvcHMudHJhbnNpdGlvbkxlYXZlO1xuXHRcdFx0dmFyIHRyYW5zaXRpb25FbnRlclRpbWVvdXQgPSBfdGhpcyRwcm9wcy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0O1xuXHRcdFx0dmFyIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQgPSBfdGhpcyRwcm9wcy50cmFuc2l0aW9uTGVhdmVUaW1lb3V0O1xuXHRcdFx0dmFyIGtleSA9IGdldEtleShjaGlsZCk7XG5cdFx0XHRyZXR1cm4gcHJlYWN0LmgoXG5cdFx0XHRcdENTU1RyYW5zaXRpb25Hcm91cENoaWxkLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0a2V5OiBrZXksXG5cdFx0XHRcdFx0cmVmOiBmdW5jdGlvbiAoYykge1xuXHRcdFx0XHRcdFx0aWYgKCEoX3RoaXMucmVmc1trZXldID0gYykpIGNoaWxkID0gbnVsbDtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG5hbWU6IHRyYW5zaXRpb25OYW1lLFxuXHRcdFx0XHRcdGVudGVyOiB0cmFuc2l0aW9uRW50ZXIsXG5cdFx0XHRcdFx0bGVhdmU6IHRyYW5zaXRpb25MZWF2ZSxcblx0XHRcdFx0XHRlbnRlclRpbWVvdXQ6IHRyYW5zaXRpb25FbnRlclRpbWVvdXQsXG5cdFx0XHRcdFx0bGVhdmVUaW1lb3V0OiB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0IH0sXG5cdFx0XHRcdGNoaWxkXG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRfdGhpcy5yZWZzID0ge307XG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRjaGlsZHJlbjogKHByb3BzLmNoaWxkcmVuIHx8IFtdKS5zbGljZSgpXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRDU1NUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShfLCBfcmVmKSB7XG5cdFx0dmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcblxuXHRcdHJldHVybiBjaGlsZHJlbiAhPT0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzID0ge307XG5cdFx0dGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuXHRcdHRoaXMua2V5c1RvTGVhdmUgPSBbXTtcblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKF9yZWYyKSB7XG5cdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHR2YXIgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbjtcblx0XHR2YXIgZXhjbHVzaXZlID0gX3JlZjIuZXhjbHVzaXZlO1xuXHRcdHZhciBzaG93UHJvcCA9IF9yZWYyLnNob3dQcm9wO1xuXG5cdFx0dmFyIG5leHRDaGlsZE1hcHBpbmcgPSBmaWx0ZXJOdWxsQ2hpbGRyZW4oY2hpbGRyZW4gfHwgW10pLnNsaWNlKCk7XG5cblx0XHR2YXIgcHJldkNoaWxkTWFwcGluZyA9IGZpbHRlck51bGxDaGlsZHJlbihleGNsdXNpdmUgPyB0aGlzLnByb3BzLmNoaWxkcmVuIDogdGhpcy5zdGF0ZS5jaGlsZHJlbik7XG5cblx0XHR2YXIgbmV3Q2hpbGRyZW4gPSBtZXJnZUNoaWxkTWFwcGluZ3MocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZyk7XG5cblx0XHRpZiAoc2hvd1Byb3ApIHtcblx0XHRcdG5ld0NoaWxkcmVuID0gbmV3Q2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjKSB7XG5cdFx0XHRcdGlmICghYy5wcm9wc1tzaG93UHJvcF0gJiYgaXNTaG93bkluQ2hpbGRyZW4ocHJldkNoaWxkTWFwcGluZywgYywgc2hvd1Byb3ApKSB7XG5cdFx0XHRcdFx0dmFyIF9jbG9uZUVsZW1lbnQ7XG5cblx0XHRcdFx0XHRjID0gcHJlYWN0LmNsb25lRWxlbWVudChjLCAoX2Nsb25lRWxlbWVudCA9IHt9LCBfY2xvbmVFbGVtZW50W3Nob3dQcm9wXSA9IHRydWUsIF9jbG9uZUVsZW1lbnQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gYztcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChleGNsdXNpdmUpIHtcblx0XHRcdG5ld0NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzMi5zdG9wKGdldEtleShjKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgY2hpbGRyZW46IG5ld0NoaWxkcmVuIH0pO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblxuXHRcdG5leHRDaGlsZE1hcHBpbmcuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuXHRcdFx0dmFyIGtleSA9IGMua2V5O1xuXHRcdFx0dmFyIGhhc1ByZXYgPSBwcmV2Q2hpbGRNYXBwaW5nICYmIGluQ2hpbGRyZW4ocHJldkNoaWxkTWFwcGluZywgYyk7XG5cdFx0XHRpZiAoc2hvd1Byb3ApIHtcblx0XHRcdFx0aWYgKGhhc1ByZXYpIHtcblx0XHRcdFx0XHR2YXIgc2hvd0luUHJldiA9IGlzU2hvd25JbkNoaWxkcmVuKHByZXZDaGlsZE1hcHBpbmcsIGMsIHNob3dQcm9wKSxcblx0XHRcdFx0XHQgICAgc2hvd0luTm93ID0gYy5wcm9wc1tzaG93UHJvcF07XG5cdFx0XHRcdFx0aWYgKCFzaG93SW5QcmV2ICYmIHNob3dJbk5vdyAmJiAhX3RoaXMyLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0pIHtcblx0XHRcdFx0XHRcdF90aGlzMi5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCFoYXNQcmV2ICYmICFfdGhpczIuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSkge1xuXHRcdFx0XHRfdGhpczIua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cHJldkNoaWxkTWFwcGluZy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG5cdFx0XHR2YXIga2V5ID0gYy5rZXk7XG5cdFx0XHR2YXIgaGFzTmV4dCA9IG5leHRDaGlsZE1hcHBpbmcgJiYgaW5DaGlsZHJlbihuZXh0Q2hpbGRNYXBwaW5nLCBjKTtcblx0XHRcdGlmIChzaG93UHJvcCkge1xuXHRcdFx0XHRpZiAoaGFzTmV4dCkge1xuXHRcdFx0XHRcdHZhciBzaG93SW5OZXh0ID0gaXNTaG93bkluQ2hpbGRyZW4obmV4dENoaWxkTWFwcGluZywgYywgc2hvd1Byb3ApO1xuXHRcdFx0XHRcdHZhciBzaG93SW5Ob3cgPSBjLnByb3BzW3Nob3dQcm9wXTtcblx0XHRcdFx0XHRpZiAoIXNob3dJbk5leHQgJiYgc2hvd0luTm93ICYmICFfdGhpczIuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSkge1xuXHRcdFx0XHRcdFx0X3RoaXMyLmtleXNUb0xlYXZlLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIWhhc05leHQgJiYgIV90aGlzMi5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldKSB7XG5cdFx0XHRcdF90aGlzMi5rZXlzVG9MZWF2ZS5wdXNoKGtleSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Q1NTVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIoa2V5KSB7XG5cdFx0dmFyIF90aGlzMyA9IHRoaXM7XG5cblx0XHR0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0gPSB0cnVlO1xuXHRcdHZhciBjb21wb25lbnQgPSB0aGlzLnJlZnNba2V5XTtcblx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxFbnRlcikge1xuXHRcdFx0Y29tcG9uZW50LmNvbXBvbmVudFdpbGxFbnRlcihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpczMuX2hhbmRsZURvbmVFbnRlcmluZyhrZXkpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2hhbmRsZURvbmVFbnRlcmluZyhrZXkpO1xuXHRcdH1cblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLl9oYW5kbGVEb25lRW50ZXJpbmcgPSBmdW5jdGlvbiBfaGFuZGxlRG9uZUVudGVyaW5nKGtleSkge1xuXHRcdGRlbGV0ZSB0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cdFx0dmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSBmaWx0ZXJOdWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbiksXG5cdFx0ICAgIHNob3dQcm9wID0gdGhpcy5wcm9wcy5zaG93UHJvcDtcblx0XHRpZiAoIWN1cnJlbnRDaGlsZE1hcHBpbmcgfHwgIXNob3dQcm9wICYmICFpbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkTWFwcGluZywga2V5KSB8fCBzaG93UHJvcCAmJiAhaXNTaG93bkluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRNYXBwaW5nLCBrZXksIHNob3dQcm9wKSkge1xuXHRcdFx0dGhpcy5wZXJmb3JtTGVhdmUoa2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNoaWxkcmVuOiBjdXJyZW50Q2hpbGRNYXBwaW5nIH0pO1xuXHRcdH1cblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKGtleSkge1xuXHRcdGRlbGV0ZSB0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cdFx0dmFyIGNvbXBvbmVudCA9IHRoaXMucmVmc1trZXldO1xuXHRcdGlmIChjb21wb25lbnQpIGNvbXBvbmVudC5zdG9wKCk7XG5cdH07XG5cblx0Q1NTVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5wZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiBwZXJmb3JtTGVhdmUoa2V5KSB7XG5cdFx0dmFyIF90aGlzNCA9IHRoaXM7XG5cblx0XHR0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0gPSB0cnVlO1xuXHRcdHZhciBjb21wb25lbnQgPSB0aGlzLnJlZnNba2V5XTtcblx0XHRpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUpIHtcblx0XHRcdGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXM0Ll9oYW5kbGVEb25lTGVhdmluZyhrZXkpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2hhbmRsZURvbmVMZWF2aW5nKGtleSk7XG5cdFx0fVxuXHR9O1xuXG5cdENTU1RyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuX2hhbmRsZURvbmVMZWF2aW5nID0gZnVuY3Rpb24gX2hhbmRsZURvbmVMZWF2aW5nKGtleSkge1xuXHRcdGRlbGV0ZSB0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cdFx0dmFyIHNob3dQcm9wID0gdGhpcy5wcm9wcy5zaG93UHJvcCxcblx0XHQgICAgY3VycmVudENoaWxkTWFwcGluZyA9IGZpbHRlck51bGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKTtcblx0XHRpZiAoc2hvd1Byb3AgJiYgY3VycmVudENoaWxkTWFwcGluZyAmJiBpc1Nob3duSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZE1hcHBpbmcsIGtleSwgc2hvd1Byb3ApKSB7XG5cdFx0XHR0aGlzLnBlcmZvcm1FbnRlcihrZXkpO1xuXHRcdH0gZWxzZSBpZiAoIXNob3dQcm9wICYmIGN1cnJlbnRDaGlsZE1hcHBpbmcgJiYgaW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZE1hcHBpbmcsIGtleSkpIHtcblx0XHRcdHRoaXMucGVyZm9ybUVudGVyKGtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjaGlsZHJlbjogY3VycmVudENoaWxkTWFwcGluZyB9KTtcblx0XHR9XG5cdH07XG5cblx0Q1NTVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0dmFyIF90aGlzNSA9IHRoaXM7XG5cblx0XHR2YXIga2V5c1RvRW50ZXIgPSB0aGlzLmtleXNUb0VudGVyO1xuXHRcdHZhciBrZXlzVG9MZWF2ZSA9IHRoaXMua2V5c1RvTGVhdmU7XG5cblx0XHR0aGlzLmtleXNUb0VudGVyID0gW107XG5cdFx0a2V5c1RvRW50ZXIuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRcdFx0cmV0dXJuIF90aGlzNS5wZXJmb3JtRW50ZXIoayk7XG5cdFx0fSk7XG5cdFx0dGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuXHRcdGtleXNUb0xlYXZlLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0XHRcdHJldHVybiBfdGhpczUucGVyZm9ybUxlYXZlKGspO1xuXHRcdH0pO1xuXHR9O1xuXG5cdENTU1RyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKF9yZWYzLCBfcmVmNCkge1xuXHRcdHZhciBDb21wb25lbnQgPSBfcmVmMy5jb21wb25lbnQ7XG5cdFx0dmFyIHRyYW5zaXRpb25OYW1lID0gX3JlZjMudHJhbnNpdGlvbk5hbWU7XG5cdFx0dmFyIHRyYW5zaXRpb25FbnRlciA9IF9yZWYzLnRyYW5zaXRpb25FbnRlcjtcblx0XHR2YXIgdHJhbnNpdGlvbkxlYXZlID0gX3JlZjMudHJhbnNpdGlvbkxlYXZlO1xuXHRcdHZhciB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0ID0gX3JlZjMudHJhbnNpdGlvbkVudGVyVGltZW91dDtcblx0XHR2YXIgdHJhbnNpdGlvbkxlYXZlVGltZW91dCA9IF9yZWYzLnRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ7XG5cdFx0dmFyIGMgPSBfcmVmMy5jaGlsZHJlbjtcblx0XHR2YXIgcHJvcHMgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMywgWydjb21wb25lbnQnLCAndHJhbnNpdGlvbk5hbWUnLCAndHJhbnNpdGlvbkVudGVyJywgJ3RyYW5zaXRpb25MZWF2ZScsICd0cmFuc2l0aW9uRW50ZXJUaW1lb3V0JywgJ3RyYW5zaXRpb25MZWF2ZVRpbWVvdXQnLCAnY2hpbGRyZW4nXSk7XG5cdFx0dmFyIGNoaWxkcmVuID0gX3JlZjQuY2hpbGRyZW47XG5cblx0XHRyZXR1cm4gcHJlYWN0LmgoXG5cdFx0XHRDb21wb25lbnQsXG5cdFx0XHRwcm9wcyxcblx0XHRcdGZpbHRlck51bGxDaGlsZHJlbihjaGlsZHJlbikubWFwKHRoaXMucmVuZGVyQ2hpbGQpXG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4gQ1NTVHJhbnNpdGlvbkdyb3VwO1xufShwcmVhY3QuQ29tcG9uZW50KTtcbkNTU1RyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSB7XG5cdGNvbXBvbmVudDogJ3NwYW4nLFxuXHR0cmFuc2l0aW9uRW50ZXI6IHRydWUsXG5cdHRyYW5zaXRpb25MZWF2ZTogdHJ1ZVxufTtcblxucmV0dXJuIENTU1RyYW5zaXRpb25Hcm91cDtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC1jc3MtdHJhbnNpdGlvbi1ncm91cC5qcy5tYXBcbiIsInZhciBWTm9kZSA9IGZ1bmN0aW9uIFZOb2RlKCkge307XG5cbnZhciBvcHRpb25zID0ge307XG5cbnZhciBzdGFjayA9IFtdO1xuXG52YXIgRU1QVFlfQ0hJTERSRU4gPSBbXTtcblxuZnVuY3Rpb24gaChub2RlTmFtZSwgYXR0cmlidXRlcykge1xuXHR2YXIgY2hpbGRyZW4gPSBFTVBUWV9DSElMRFJFTixcblx0ICAgIGxhc3RTaW1wbGUsXG5cdCAgICBjaGlsZCxcblx0ICAgIHNpbXBsZSxcblx0ICAgIGk7XG5cdGZvciAoaSA9IGFyZ3VtZW50cy5sZW5ndGg7IGktLSA+IDI7KSB7XG5cdFx0c3RhY2sucHVzaChhcmd1bWVudHNbaV0pO1xuXHR9XG5cdGlmIChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXMuY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdGlmICghc3RhY2subGVuZ3RoKSBzdGFjay5wdXNoKGF0dHJpYnV0ZXMuY2hpbGRyZW4pO1xuXHRcdGRlbGV0ZSBhdHRyaWJ1dGVzLmNoaWxkcmVuO1xuXHR9XG5cdHdoaWxlIChzdGFjay5sZW5ndGgpIHtcblx0XHRpZiAoKGNoaWxkID0gc3RhY2sucG9wKCkpICYmIGNoaWxkLnBvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRmb3IgKGkgPSBjaGlsZC5sZW5ndGg7IGktLTspIHtcblx0XHRcdFx0c3RhY2sucHVzaChjaGlsZFtpXSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2YgY2hpbGQgPT09ICdib29sZWFuJykgY2hpbGQgPSBudWxsO1xuXG5cdFx0XHRpZiAoc2ltcGxlID0gdHlwZW9mIG5vZGVOYW1lICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGlmIChjaGlsZCA9PSBudWxsKSBjaGlsZCA9ICcnO2Vsc2UgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIGNoaWxkID0gU3RyaW5nKGNoaWxkKTtlbHNlIGlmICh0eXBlb2YgY2hpbGQgIT09ICdzdHJpbmcnKSBzaW1wbGUgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNpbXBsZSAmJiBsYXN0U2ltcGxlKSB7XG5cdFx0XHRcdGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdICs9IGNoaWxkO1xuXHRcdFx0fSBlbHNlIGlmIChjaGlsZHJlbiA9PT0gRU1QVFlfQ0hJTERSRU4pIHtcblx0XHRcdFx0Y2hpbGRyZW4gPSBbY2hpbGRdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdFx0XHR9XG5cblx0XHRcdGxhc3RTaW1wbGUgPSBzaW1wbGU7XG5cdFx0fVxuXHR9XG5cblx0dmFyIHAgPSBuZXcgVk5vZGUoKTtcblx0cC5ub2RlTmFtZSA9IG5vZGVOYW1lO1xuXHRwLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdHAuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGF0dHJpYnV0ZXM7XG5cdHAua2V5ID0gYXR0cmlidXRlcyA9PSBudWxsID8gdW5kZWZpbmVkIDogYXR0cmlidXRlcy5rZXk7XG5cblx0aWYgKG9wdGlvbnMudm5vZGUgIT09IHVuZGVmaW5lZCkgb3B0aW9ucy52bm9kZShwKTtcblxuXHRyZXR1cm4gcDtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKG9iaiwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xuICAgIG9ialtpXSA9IHByb3BzW2ldO1xuICB9cmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSkge1xuICBpZiAocmVmICE9IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSByZWYodmFsdWUpO2Vsc2UgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfVxufVxuXG52YXIgZGVmZXIgPSB0eXBlb2YgUHJvbWlzZSA9PSAnZnVuY3Rpb24nID8gUHJvbWlzZS5yZXNvbHZlKCkudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKSA6IHNldFRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMpIHtcbiAgcmV0dXJuIGgodm5vZGUubm9kZU5hbWUsIGV4dGVuZChleHRlbmQoe30sIHZub2RlLmF0dHJpYnV0ZXMpLCBwcm9wcyksIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogdm5vZGUuY2hpbGRyZW4pO1xufVxuXG52YXIgSVNfTk9OX0RJTUVOU0lPTkFMID0gL2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkL2k7XG5cbnZhciBpdGVtcyA9IFtdO1xuXG5mdW5jdGlvbiBlbnF1ZXVlUmVuZGVyKGNvbXBvbmVudCkge1xuXHRpZiAoIWNvbXBvbmVudC5fZGlydHkgJiYgKGNvbXBvbmVudC5fZGlydHkgPSB0cnVlKSAmJiBpdGVtcy5wdXNoKGNvbXBvbmVudCkgPT0gMSkge1xuXHRcdChvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nIHx8IGRlZmVyKShyZXJlbmRlcik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVyZW5kZXIoKSB7XG5cdHZhciBwO1xuXHR3aGlsZSAocCA9IGl0ZW1zLnBvcCgpKSB7XG5cdFx0aWYgKHAuX2RpcnR5KSByZW5kZXJDb21wb25lbnQocCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaXNTYW1lTm9kZVR5cGUobm9kZSwgdm5vZGUsIGh5ZHJhdGluZykge1xuXHRpZiAodHlwZW9mIHZub2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygdm5vZGUgPT09ICdudW1iZXInKSB7XG5cdFx0cmV0dXJuIG5vZGUuc3BsaXRUZXh0ICE9PSB1bmRlZmluZWQ7XG5cdH1cblx0aWYgKHR5cGVvZiB2bm9kZS5ub2RlTmFtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gIW5vZGUuX2NvbXBvbmVudENvbnN0cnVjdG9yICYmIGlzTmFtZWROb2RlKG5vZGUsIHZub2RlLm5vZGVOYW1lKTtcblx0fVxuXHRyZXR1cm4gaHlkcmF0aW5nIHx8IG5vZGUuX2NvbXBvbmVudENvbnN0cnVjdG9yID09PSB2bm9kZS5ub2RlTmFtZTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lZE5vZGUobm9kZSwgbm9kZU5hbWUpIHtcblx0cmV0dXJuIG5vZGUubm9ybWFsaXplZE5vZGVOYW1lID09PSBub2RlTmFtZSB8fCBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVQcm9wcyh2bm9kZSkge1xuXHR2YXIgcHJvcHMgPSBleHRlbmQoe30sIHZub2RlLmF0dHJpYnV0ZXMpO1xuXHRwcm9wcy5jaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xuXG5cdHZhciBkZWZhdWx0UHJvcHMgPSB2bm9kZS5ub2RlTmFtZS5kZWZhdWx0UHJvcHM7XG5cdGlmIChkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuXHRcdGZvciAodmFyIGkgaW4gZGVmYXVsdFByb3BzKSB7XG5cdFx0XHRpZiAocHJvcHNbaV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRwcm9wc1tpXSA9IGRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcHJvcHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vZGUobm9kZU5hbWUsIGlzU3ZnKSB7XG5cdHZhciBub2RlID0gaXNTdmcgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbm9kZU5hbWUpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG5cdG5vZGUubm9ybWFsaXplZE5vZGVOYW1lID0gbm9kZU5hbWU7XG5cdHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcblx0dmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBzZXRBY2Nlc3Nvcihub2RlLCBuYW1lLCBvbGQsIHZhbHVlLCBpc1N2Zykge1xuXHRpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIG5hbWUgPSAnY2xhc3MnO1xuXG5cdGlmIChuYW1lID09PSAna2V5Jykge30gZWxzZSBpZiAobmFtZSA9PT0gJ3JlZicpIHtcblx0XHRhcHBseVJlZihvbGQsIG51bGwpO1xuXHRcdGFwcGx5UmVmKHZhbHVlLCBub2RlKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnY2xhc3MnICYmICFpc1N2Zykge1xuXHRcdG5vZGUuY2xhc3NOYW1lID0gdmFsdWUgfHwgJyc7XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygb2xkID09PSAnc3RyaW5nJykge1xuXHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ID0gdmFsdWUgfHwgJyc7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRpZiAodHlwZW9mIG9sZCAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiBvbGQpIHtcblx0XHRcdFx0XHRpZiAoIShpIGluIHZhbHVlKSkgbm9kZS5zdHlsZVtpXSA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpIGluIHZhbHVlKSB7XG5cdFx0XHRcdG5vZGUuc3R5bGVbaV0gPSB0eXBlb2YgdmFsdWVbaV0gPT09ICdudW1iZXInICYmIElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGkpID09PSBmYWxzZSA/IHZhbHVlW2ldICsgJ3B4JyA6IHZhbHVlW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmIChuYW1lID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG5cdFx0aWYgKHZhbHVlKSBub2RlLmlubmVySFRNTCA9IHZhbHVlLl9faHRtbCB8fCAnJztcblx0fSBlbHNlIGlmIChuYW1lWzBdID09ICdvJyAmJiBuYW1lWzFdID09ICduJykge1xuXHRcdHZhciB1c2VDYXB0dXJlID0gbmFtZSAhPT0gKG5hbWUgPSBuYW1lLnJlcGxhY2UoL0NhcHR1cmUkLywgJycpKTtcblx0XHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygyKTtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICghb2xkKSBub2RlLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSwgdXNlQ2FwdHVyZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5LCB1c2VDYXB0dXJlKTtcblx0XHR9XG5cdFx0KG5vZGUuX2xpc3RlbmVycyB8fCAobm9kZS5fbGlzdGVuZXJzID0ge30pKVtuYW1lXSA9IHZhbHVlO1xuXHR9IGVsc2UgaWYgKG5hbWUgIT09ICdsaXN0JyAmJiBuYW1lICE9PSAndHlwZScgJiYgIWlzU3ZnICYmIG5hbWUgaW4gbm9kZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRub2RlW25hbWVdID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHRpZiAoKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSAmJiBuYW1lICE9ICdzcGVsbGNoZWNrJykgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIG5zID0gaXNTdmcgJiYgbmFtZSAhPT0gKG5hbWUgPSBuYW1lLnJlcGxhY2UoL154bGluazo/LywgJycpKTtcblxuXHRcdGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0aWYgKG5zKSBub2RlLnJlbW92ZUF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgbmFtZS50b0xvd2VyQ2FzZSgpKTtlbHNlIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpZiAobnMpIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBuYW1lLnRvTG93ZXJDYXNlKCksIHZhbHVlKTtlbHNlIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZXZlbnRQcm94eShlKSB7XG5cdHJldHVybiB0aGlzLl9saXN0ZW5lcnNbZS50eXBlXShvcHRpb25zLmV2ZW50ICYmIG9wdGlvbnMuZXZlbnQoZSkgfHwgZSk7XG59XG5cbnZhciBtb3VudHMgPSBbXTtcblxudmFyIGRpZmZMZXZlbCA9IDA7XG5cbnZhciBpc1N2Z01vZGUgPSBmYWxzZTtcblxudmFyIGh5ZHJhdGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaE1vdW50cygpIHtcblx0dmFyIGM7XG5cdHdoaWxlIChjID0gbW91bnRzLnNoaWZ0KCkpIHtcblx0XHRpZiAob3B0aW9ucy5hZnRlck1vdW50KSBvcHRpb25zLmFmdGVyTW91bnQoYyk7XG5cdFx0aWYgKGMuY29tcG9uZW50RGlkTW91bnQpIGMuY29tcG9uZW50RGlkTW91bnQoKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkaWZmKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsLCBwYXJlbnQsIGNvbXBvbmVudFJvb3QpIHtcblx0aWYgKCFkaWZmTGV2ZWwrKykge1xuXHRcdGlzU3ZnTW9kZSA9IHBhcmVudCAhPSBudWxsICYmIHBhcmVudC5vd25lclNWR0VsZW1lbnQgIT09IHVuZGVmaW5lZDtcblxuXHRcdGh5ZHJhdGluZyA9IGRvbSAhPSBudWxsICYmICEoJ19fcHJlYWN0YXR0cl8nIGluIGRvbSk7XG5cdH1cblxuXHR2YXIgcmV0ID0gaWRpZmYoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwsIGNvbXBvbmVudFJvb3QpO1xuXG5cdGlmIChwYXJlbnQgJiYgcmV0LnBhcmVudE5vZGUgIT09IHBhcmVudCkgcGFyZW50LmFwcGVuZENoaWxkKHJldCk7XG5cblx0aWYgKCEgLS1kaWZmTGV2ZWwpIHtcblx0XHRoeWRyYXRpbmcgPSBmYWxzZTtcblxuXHRcdGlmICghY29tcG9uZW50Um9vdCkgZmx1c2hNb3VudHMoKTtcblx0fVxuXG5cdHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGlkaWZmKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsLCBjb21wb25lbnRSb290KSB7XG5cdHZhciBvdXQgPSBkb20sXG5cdCAgICBwcmV2U3ZnTW9kZSA9IGlzU3ZnTW9kZTtcblxuXHRpZiAodm5vZGUgPT0gbnVsbCB8fCB0eXBlb2Ygdm5vZGUgPT09ICdib29sZWFuJykgdm5vZGUgPSAnJztcblxuXHRpZiAodHlwZW9mIHZub2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygdm5vZGUgPT09ICdudW1iZXInKSB7XG5cdFx0aWYgKGRvbSAmJiBkb20uc3BsaXRUZXh0ICE9PSB1bmRlZmluZWQgJiYgZG9tLnBhcmVudE5vZGUgJiYgKCFkb20uX2NvbXBvbmVudCB8fCBjb21wb25lbnRSb290KSkge1xuXHRcdFx0aWYgKGRvbS5ub2RlVmFsdWUgIT0gdm5vZGUpIHtcblx0XHRcdFx0ZG9tLm5vZGVWYWx1ZSA9IHZub2RlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRvdXQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2bm9kZSk7XG5cdFx0XHRpZiAoZG9tKSB7XG5cdFx0XHRcdGlmIChkb20ucGFyZW50Tm9kZSkgZG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG91dCwgZG9tKTtcblx0XHRcdFx0cmVjb2xsZWN0Tm9kZVRyZWUoZG9tLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRvdXRbJ19fcHJlYWN0YXR0cl8nXSA9IHRydWU7XG5cblx0XHRyZXR1cm4gb3V0O1xuXHR9XG5cblx0dmFyIHZub2RlTmFtZSA9IHZub2RlLm5vZGVOYW1lO1xuXHRpZiAodHlwZW9mIHZub2RlTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBidWlsZENvbXBvbmVudEZyb21WTm9kZShkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cdH1cblxuXHRpc1N2Z01vZGUgPSB2bm9kZU5hbWUgPT09ICdzdmcnID8gdHJ1ZSA6IHZub2RlTmFtZSA9PT0gJ2ZvcmVpZ25PYmplY3QnID8gZmFsc2UgOiBpc1N2Z01vZGU7XG5cblx0dm5vZGVOYW1lID0gU3RyaW5nKHZub2RlTmFtZSk7XG5cdGlmICghZG9tIHx8ICFpc05hbWVkTm9kZShkb20sIHZub2RlTmFtZSkpIHtcblx0XHRvdXQgPSBjcmVhdGVOb2RlKHZub2RlTmFtZSwgaXNTdmdNb2RlKTtcblxuXHRcdGlmIChkb20pIHtcblx0XHRcdHdoaWxlIChkb20uZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRvdXQuYXBwZW5kQ2hpbGQoZG9tLmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvbS5wYXJlbnROb2RlKSBkb20ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQob3V0LCBkb20pO1xuXG5cdFx0XHRyZWNvbGxlY3ROb2RlVHJlZShkb20sIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdHZhciBmYyA9IG91dC5maXJzdENoaWxkLFxuXHQgICAgcHJvcHMgPSBvdXRbJ19fcHJlYWN0YXR0cl8nXSxcblx0ICAgIHZjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xuXG5cdGlmIChwcm9wcyA9PSBudWxsKSB7XG5cdFx0cHJvcHMgPSBvdXRbJ19fcHJlYWN0YXR0cl8nXSA9IHt9O1xuXHRcdGZvciAodmFyIGEgPSBvdXQuYXR0cmlidXRlcywgaSA9IGEubGVuZ3RoOyBpLS07KSB7XG5cdFx0XHRwcm9wc1thW2ldLm5hbWVdID0gYVtpXS52YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIWh5ZHJhdGluZyAmJiB2Y2hpbGRyZW4gJiYgdmNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgdmNoaWxkcmVuWzBdID09PSAnc3RyaW5nJyAmJiBmYyAhPSBudWxsICYmIGZjLnNwbGl0VGV4dCAhPT0gdW5kZWZpbmVkICYmIGZjLm5leHRTaWJsaW5nID09IG51bGwpIHtcblx0XHRpZiAoZmMubm9kZVZhbHVlICE9IHZjaGlsZHJlblswXSkge1xuXHRcdFx0ZmMubm9kZVZhbHVlID0gdmNoaWxkcmVuWzBdO1xuXHRcdH1cblx0fSBlbHNlIGlmICh2Y2hpbGRyZW4gJiYgdmNoaWxkcmVuLmxlbmd0aCB8fCBmYyAhPSBudWxsKSB7XG5cdFx0XHRpbm5lckRpZmZOb2RlKG91dCwgdmNoaWxkcmVuLCBjb250ZXh0LCBtb3VudEFsbCwgaHlkcmF0aW5nIHx8IHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICE9IG51bGwpO1xuXHRcdH1cblxuXHRkaWZmQXR0cmlidXRlcyhvdXQsIHZub2RlLmF0dHJpYnV0ZXMsIHByb3BzKTtcblxuXHRpc1N2Z01vZGUgPSBwcmV2U3ZnTW9kZTtcblxuXHRyZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBpbm5lckRpZmZOb2RlKGRvbSwgdmNoaWxkcmVuLCBjb250ZXh0LCBtb3VudEFsbCwgaXNIeWRyYXRpbmcpIHtcblx0dmFyIG9yaWdpbmFsQ2hpbGRyZW4gPSBkb20uY2hpbGROb2Rlcyxcblx0ICAgIGNoaWxkcmVuID0gW10sXG5cdCAgICBrZXllZCA9IHt9LFxuXHQgICAga2V5ZWRMZW4gPSAwLFxuXHQgICAgbWluID0gMCxcblx0ICAgIGxlbiA9IG9yaWdpbmFsQ2hpbGRyZW4ubGVuZ3RoLFxuXHQgICAgY2hpbGRyZW5MZW4gPSAwLFxuXHQgICAgdmxlbiA9IHZjaGlsZHJlbiA/IHZjaGlsZHJlbi5sZW5ndGggOiAwLFxuXHQgICAgaixcblx0ICAgIGMsXG5cdCAgICBmLFxuXHQgICAgdmNoaWxkLFxuXHQgICAgY2hpbGQ7XG5cblx0aWYgKGxlbiAhPT0gMCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHZhciBfY2hpbGQgPSBvcmlnaW5hbENoaWxkcmVuW2ldLFxuXHRcdFx0ICAgIHByb3BzID0gX2NoaWxkWydfX3ByZWFjdGF0dHJfJ10sXG5cdFx0XHQgICAga2V5ID0gdmxlbiAmJiBwcm9wcyA/IF9jaGlsZC5fY29tcG9uZW50ID8gX2NoaWxkLl9jb21wb25lbnQuX19rZXkgOiBwcm9wcy5rZXkgOiBudWxsO1xuXHRcdFx0aWYgKGtleSAhPSBudWxsKSB7XG5cdFx0XHRcdGtleWVkTGVuKys7XG5cdFx0XHRcdGtleWVkW2tleV0gPSBfY2hpbGQ7XG5cdFx0XHR9IGVsc2UgaWYgKHByb3BzIHx8IChfY2hpbGQuc3BsaXRUZXh0ICE9PSB1bmRlZmluZWQgPyBpc0h5ZHJhdGluZyA/IF9jaGlsZC5ub2RlVmFsdWUudHJpbSgpIDogdHJ1ZSA6IGlzSHlkcmF0aW5nKSkge1xuXHRcdFx0XHRjaGlsZHJlbltjaGlsZHJlbkxlbisrXSA9IF9jaGlsZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAodmxlbiAhPT0gMCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmxlbjsgaSsrKSB7XG5cdFx0XHR2Y2hpbGQgPSB2Y2hpbGRyZW5baV07XG5cdFx0XHRjaGlsZCA9IG51bGw7XG5cblx0XHRcdHZhciBrZXkgPSB2Y2hpbGQua2V5O1xuXHRcdFx0aWYgKGtleSAhPSBudWxsKSB7XG5cdFx0XHRcdGlmIChrZXllZExlbiAmJiBrZXllZFtrZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRjaGlsZCA9IGtleWVkW2tleV07XG5cdFx0XHRcdFx0a2V5ZWRba2V5XSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRrZXllZExlbi0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKG1pbiA8IGNoaWxkcmVuTGVuKSB7XG5cdFx0XHRcdFx0Zm9yIChqID0gbWluOyBqIDwgY2hpbGRyZW5MZW47IGorKykge1xuXHRcdFx0XHRcdFx0aWYgKGNoaWxkcmVuW2pdICE9PSB1bmRlZmluZWQgJiYgaXNTYW1lTm9kZVR5cGUoYyA9IGNoaWxkcmVuW2pdLCB2Y2hpbGQsIGlzSHlkcmF0aW5nKSkge1xuXHRcdFx0XHRcdFx0XHRjaGlsZCA9IGM7XG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuW2pdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZiAoaiA9PT0gY2hpbGRyZW5MZW4gLSAxKSBjaGlsZHJlbkxlbi0tO1xuXHRcdFx0XHRcdFx0XHRpZiAoaiA9PT0gbWluKSBtaW4rKztcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdGNoaWxkID0gaWRpZmYoY2hpbGQsIHZjaGlsZCwgY29udGV4dCwgbW91bnRBbGwpO1xuXG5cdFx0XHRmID0gb3JpZ2luYWxDaGlsZHJlbltpXTtcblx0XHRcdGlmIChjaGlsZCAmJiBjaGlsZCAhPT0gZG9tICYmIGNoaWxkICE9PSBmKSB7XG5cdFx0XHRcdGlmIChmID09IG51bGwpIHtcblx0XHRcdFx0XHRkb20uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNoaWxkID09PSBmLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRcdFx0cmVtb3ZlTm9kZShmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb20uaW5zZXJ0QmVmb3JlKGNoaWxkLCBmKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChrZXllZExlbikge1xuXHRcdGZvciAodmFyIGkgaW4ga2V5ZWQpIHtcblx0XHRcdGlmIChrZXllZFtpXSAhPT0gdW5kZWZpbmVkKSByZWNvbGxlY3ROb2RlVHJlZShrZXllZFtpXSwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdHdoaWxlIChtaW4gPD0gY2hpbGRyZW5MZW4pIHtcblx0XHRpZiAoKGNoaWxkID0gY2hpbGRyZW5bY2hpbGRyZW5MZW4tLV0pICE9PSB1bmRlZmluZWQpIHJlY29sbGVjdE5vZGVUcmVlKGNoaWxkLCBmYWxzZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVjb2xsZWN0Tm9kZVRyZWUobm9kZSwgdW5tb3VudE9ubHkpIHtcblx0dmFyIGNvbXBvbmVudCA9IG5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGNvbXBvbmVudCkge1xuXHRcdHVubW91bnRDb21wb25lbnQoY29tcG9uZW50KTtcblx0fSBlbHNlIHtcblx0XHRpZiAobm9kZVsnX19wcmVhY3RhdHRyXyddICE9IG51bGwpIGFwcGx5UmVmKG5vZGVbJ19fcHJlYWN0YXR0cl8nXS5yZWYsIG51bGwpO1xuXG5cdFx0aWYgKHVubW91bnRPbmx5ID09PSBmYWxzZSB8fCBub2RlWydfX3ByZWFjdGF0dHJfJ10gPT0gbnVsbCkge1xuXHRcdFx0cmVtb3ZlTm9kZShub2RlKTtcblx0XHR9XG5cblx0XHRyZW1vdmVDaGlsZHJlbihub2RlKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihub2RlKSB7XG5cdG5vZGUgPSBub2RlLmxhc3RDaGlsZDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHR2YXIgbmV4dCA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xuXHRcdHJlY29sbGVjdE5vZGVUcmVlKG5vZGUsIHRydWUpO1xuXHRcdG5vZGUgPSBuZXh0O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRpZmZBdHRyaWJ1dGVzKGRvbSwgYXR0cnMsIG9sZCkge1xuXHR2YXIgbmFtZTtcblxuXHRmb3IgKG5hbWUgaW4gb2xkKSB7XG5cdFx0aWYgKCEoYXR0cnMgJiYgYXR0cnNbbmFtZV0gIT0gbnVsbCkgJiYgb2xkW25hbWVdICE9IG51bGwpIHtcblx0XHRcdHNldEFjY2Vzc29yKGRvbSwgbmFtZSwgb2xkW25hbWVdLCBvbGRbbmFtZV0gPSB1bmRlZmluZWQsIGlzU3ZnTW9kZSk7XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChuYW1lIGluIGF0dHJzKSB7XG5cdFx0aWYgKG5hbWUgIT09ICdjaGlsZHJlbicgJiYgbmFtZSAhPT0gJ2lubmVySFRNTCcgJiYgKCEobmFtZSBpbiBvbGQpIHx8IGF0dHJzW25hbWVdICE9PSAobmFtZSA9PT0gJ3ZhbHVlJyB8fCBuYW1lID09PSAnY2hlY2tlZCcgPyBkb21bbmFtZV0gOiBvbGRbbmFtZV0pKSkge1xuXHRcdFx0c2V0QWNjZXNzb3IoZG9tLCBuYW1lLCBvbGRbbmFtZV0sIG9sZFtuYW1lXSA9IGF0dHJzW25hbWVdLCBpc1N2Z01vZGUpO1xuXHRcdH1cblx0fVxufVxuXG52YXIgcmVjeWNsZXJDb21wb25lbnRzID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChDdG9yLCBwcm9wcywgY29udGV4dCkge1xuXHR2YXIgaW5zdCxcblx0ICAgIGkgPSByZWN5Y2xlckNvbXBvbmVudHMubGVuZ3RoO1xuXG5cdGlmIChDdG9yLnByb3RvdHlwZSAmJiBDdG9yLnByb3RvdHlwZS5yZW5kZXIpIHtcblx0XHRpbnN0ID0gbmV3IEN0b3IocHJvcHMsIGNvbnRleHQpO1xuXHRcdENvbXBvbmVudC5jYWxsKGluc3QsIHByb3BzLCBjb250ZXh0KTtcblx0fSBlbHNlIHtcblx0XHRpbnN0ID0gbmV3IENvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG5cdFx0aW5zdC5jb25zdHJ1Y3RvciA9IEN0b3I7XG5cdFx0aW5zdC5yZW5kZXIgPSBkb1JlbmRlcjtcblx0fVxuXG5cdHdoaWxlIChpLS0pIHtcblx0XHRpZiAocmVjeWNsZXJDb21wb25lbnRzW2ldLmNvbnN0cnVjdG9yID09PSBDdG9yKSB7XG5cdFx0XHRpbnN0Lm5leHRCYXNlID0gcmVjeWNsZXJDb21wb25lbnRzW2ldLm5leHRCYXNlO1xuXHRcdFx0cmVjeWNsZXJDb21wb25lbnRzLnNwbGljZShpLCAxKTtcblx0XHRcdHJldHVybiBpbnN0O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBpbnN0O1xufVxuXG5mdW5jdGlvbiBkb1JlbmRlcihwcm9wcywgc3RhdGUsIGNvbnRleHQpIHtcblx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBzZXRDb21wb25lbnRQcm9wcyhjb21wb25lbnQsIHByb3BzLCByZW5kZXJNb2RlLCBjb250ZXh0LCBtb3VudEFsbCkge1xuXHRpZiAoY29tcG9uZW50Ll9kaXNhYmxlKSByZXR1cm47XG5cdGNvbXBvbmVudC5fZGlzYWJsZSA9IHRydWU7XG5cblx0Y29tcG9uZW50Ll9fcmVmID0gcHJvcHMucmVmO1xuXHRjb21wb25lbnQuX19rZXkgPSBwcm9wcy5rZXk7XG5cdGRlbGV0ZSBwcm9wcy5yZWY7XG5cdGRlbGV0ZSBwcm9wcy5rZXk7XG5cblx0aWYgKHR5cGVvZiBjb21wb25lbnQuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAndW5kZWZpbmVkJykge1xuXHRcdGlmICghY29tcG9uZW50LmJhc2UgfHwgbW91bnRBbGwpIHtcblx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KSBjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0fSBlbHNlIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcykge1xuXHRcdFx0Y29tcG9uZW50LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMsIGNvbnRleHQpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChjb250ZXh0ICYmIGNvbnRleHQgIT09IGNvbXBvbmVudC5jb250ZXh0KSB7XG5cdFx0aWYgKCFjb21wb25lbnQucHJldkNvbnRleHQpIGNvbXBvbmVudC5wcmV2Q29udGV4dCA9IGNvbXBvbmVudC5jb250ZXh0O1xuXHRcdGNvbXBvbmVudC5jb250ZXh0ID0gY29udGV4dDtcblx0fVxuXG5cdGlmICghY29tcG9uZW50LnByZXZQcm9wcykgY29tcG9uZW50LnByZXZQcm9wcyA9IGNvbXBvbmVudC5wcm9wcztcblx0Y29tcG9uZW50LnByb3BzID0gcHJvcHM7XG5cblx0Y29tcG9uZW50Ll9kaXNhYmxlID0gZmFsc2U7XG5cblx0aWYgKHJlbmRlck1vZGUgIT09IDApIHtcblx0XHRpZiAocmVuZGVyTW9kZSA9PT0gMSB8fCBvcHRpb25zLnN5bmNDb21wb25lbnRVcGRhdGVzICE9PSBmYWxzZSB8fCAhY29tcG9uZW50LmJhc2UpIHtcblx0XHRcdHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIDEsIG1vdW50QWxsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW5xdWV1ZVJlbmRlcihjb21wb25lbnQpO1xuXHRcdH1cblx0fVxuXG5cdGFwcGx5UmVmKGNvbXBvbmVudC5fX3JlZiwgY29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgcmVuZGVyTW9kZSwgbW91bnRBbGwsIGlzQ2hpbGQpIHtcblx0aWYgKGNvbXBvbmVudC5fZGlzYWJsZSkgcmV0dXJuO1xuXG5cdHZhciBwcm9wcyA9IGNvbXBvbmVudC5wcm9wcyxcblx0ICAgIHN0YXRlID0gY29tcG9uZW50LnN0YXRlLFxuXHQgICAgY29udGV4dCA9IGNvbXBvbmVudC5jb250ZXh0LFxuXHQgICAgcHJldmlvdXNQcm9wcyA9IGNvbXBvbmVudC5wcmV2UHJvcHMgfHwgcHJvcHMsXG5cdCAgICBwcmV2aW91c1N0YXRlID0gY29tcG9uZW50LnByZXZTdGF0ZSB8fCBzdGF0ZSxcblx0ICAgIHByZXZpb3VzQ29udGV4dCA9IGNvbXBvbmVudC5wcmV2Q29udGV4dCB8fCBjb250ZXh0LFxuXHQgICAgaXNVcGRhdGUgPSBjb21wb25lbnQuYmFzZSxcblx0ICAgIG5leHRCYXNlID0gY29tcG9uZW50Lm5leHRCYXNlLFxuXHQgICAgaW5pdGlhbEJhc2UgPSBpc1VwZGF0ZSB8fCBuZXh0QmFzZSxcblx0ICAgIGluaXRpYWxDaGlsZENvbXBvbmVudCA9IGNvbXBvbmVudC5fY29tcG9uZW50LFxuXHQgICAgc2tpcCA9IGZhbHNlLFxuXHQgICAgc25hcHNob3QgPSBwcmV2aW91c0NvbnRleHQsXG5cdCAgICByZW5kZXJlZCxcblx0ICAgIGluc3QsXG5cdCAgICBjYmFzZTtcblxuXHRpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcykge1xuXHRcdHN0YXRlID0gZXh0ZW5kKGV4dGVuZCh7fSwgc3RhdGUpLCBjb21wb25lbnQuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkpO1xuXHRcdGNvbXBvbmVudC5zdGF0ZSA9IHN0YXRlO1xuXHR9XG5cblx0aWYgKGlzVXBkYXRlKSB7XG5cdFx0Y29tcG9uZW50LnByb3BzID0gcHJldmlvdXNQcm9wcztcblx0XHRjb21wb25lbnQuc3RhdGUgPSBwcmV2aW91c1N0YXRlO1xuXHRcdGNvbXBvbmVudC5jb250ZXh0ID0gcHJldmlvdXNDb250ZXh0O1xuXHRcdGlmIChyZW5kZXJNb2RlICE9PSAyICYmIGNvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUgJiYgY29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wcywgc3RhdGUsIGNvbnRleHQpID09PSBmYWxzZSkge1xuXHRcdFx0c2tpcCA9IHRydWU7XG5cdFx0fSBlbHNlIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZSkge1xuXHRcdFx0Y29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUocHJvcHMsIHN0YXRlLCBjb250ZXh0KTtcblx0XHR9XG5cdFx0Y29tcG9uZW50LnByb3BzID0gcHJvcHM7XG5cdFx0Y29tcG9uZW50LnN0YXRlID0gc3RhdGU7XG5cdFx0Y29tcG9uZW50LmNvbnRleHQgPSBjb250ZXh0O1xuXHR9XG5cblx0Y29tcG9uZW50LnByZXZQcm9wcyA9IGNvbXBvbmVudC5wcmV2U3RhdGUgPSBjb21wb25lbnQucHJldkNvbnRleHQgPSBjb21wb25lbnQubmV4dEJhc2UgPSBudWxsO1xuXHRjb21wb25lbnQuX2RpcnR5ID0gZmFsc2U7XG5cblx0aWYgKCFza2lwKSB7XG5cdFx0cmVuZGVyZWQgPSBjb21wb25lbnQucmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCk7XG5cblx0XHRpZiAoY29tcG9uZW50LmdldENoaWxkQ29udGV4dCkge1xuXHRcdFx0Y29udGV4dCA9IGV4dGVuZChleHRlbmQoe30sIGNvbnRleHQpLCBjb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KCkpO1xuXHRcdH1cblxuXHRcdGlmIChpc1VwZGF0ZSAmJiBjb21wb25lbnQuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpIHtcblx0XHRcdHNuYXBzaG90ID0gY29tcG9uZW50LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZpb3VzUHJvcHMsIHByZXZpb3VzU3RhdGUpO1xuXHRcdH1cblxuXHRcdHZhciBjaGlsZENvbXBvbmVudCA9IHJlbmRlcmVkICYmIHJlbmRlcmVkLm5vZGVOYW1lLFxuXHRcdCAgICB0b1VubW91bnQsXG5cdFx0ICAgIGJhc2U7XG5cblx0XHRpZiAodHlwZW9mIGNoaWxkQ29tcG9uZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cblx0XHRcdHZhciBjaGlsZFByb3BzID0gZ2V0Tm9kZVByb3BzKHJlbmRlcmVkKTtcblx0XHRcdGluc3QgPSBpbml0aWFsQ2hpbGRDb21wb25lbnQ7XG5cblx0XHRcdGlmIChpbnN0ICYmIGluc3QuY29uc3RydWN0b3IgPT09IGNoaWxkQ29tcG9uZW50ICYmIGNoaWxkUHJvcHMua2V5ID09IGluc3QuX19rZXkpIHtcblx0XHRcdFx0c2V0Q29tcG9uZW50UHJvcHMoaW5zdCwgY2hpbGRQcm9wcywgMSwgY29udGV4dCwgZmFsc2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9Vbm1vdW50ID0gaW5zdDtcblxuXHRcdFx0XHRjb21wb25lbnQuX2NvbXBvbmVudCA9IGluc3QgPSBjcmVhdGVDb21wb25lbnQoY2hpbGRDb21wb25lbnQsIGNoaWxkUHJvcHMsIGNvbnRleHQpO1xuXHRcdFx0XHRpbnN0Lm5leHRCYXNlID0gaW5zdC5uZXh0QmFzZSB8fCBuZXh0QmFzZTtcblx0XHRcdFx0aW5zdC5fcGFyZW50Q29tcG9uZW50ID0gY29tcG9uZW50O1xuXHRcdFx0XHRzZXRDb21wb25lbnRQcm9wcyhpbnN0LCBjaGlsZFByb3BzLCAwLCBjb250ZXh0LCBmYWxzZSk7XG5cdFx0XHRcdHJlbmRlckNvbXBvbmVudChpbnN0LCAxLCBtb3VudEFsbCwgdHJ1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGJhc2UgPSBpbnN0LmJhc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNiYXNlID0gaW5pdGlhbEJhc2U7XG5cblx0XHRcdHRvVW5tb3VudCA9IGluaXRpYWxDaGlsZENvbXBvbmVudDtcblx0XHRcdGlmICh0b1VubW91bnQpIHtcblx0XHRcdFx0Y2Jhc2UgPSBjb21wb25lbnQuX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbml0aWFsQmFzZSB8fCByZW5kZXJNb2RlID09PSAxKSB7XG5cdFx0XHRcdGlmIChjYmFzZSkgY2Jhc2UuX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0XHRcdGJhc2UgPSBkaWZmKGNiYXNlLCByZW5kZXJlZCwgY29udGV4dCwgbW91bnRBbGwgfHwgIWlzVXBkYXRlLCBpbml0aWFsQmFzZSAmJiBpbml0aWFsQmFzZS5wYXJlbnROb2RlLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaW5pdGlhbEJhc2UgJiYgYmFzZSAhPT0gaW5pdGlhbEJhc2UgJiYgaW5zdCAhPT0gaW5pdGlhbENoaWxkQ29tcG9uZW50KSB7XG5cdFx0XHR2YXIgYmFzZVBhcmVudCA9IGluaXRpYWxCYXNlLnBhcmVudE5vZGU7XG5cdFx0XHRpZiAoYmFzZVBhcmVudCAmJiBiYXNlICE9PSBiYXNlUGFyZW50KSB7XG5cdFx0XHRcdGJhc2VQYXJlbnQucmVwbGFjZUNoaWxkKGJhc2UsIGluaXRpYWxCYXNlKTtcblxuXHRcdFx0XHRpZiAoIXRvVW5tb3VudCkge1xuXHRcdFx0XHRcdGluaXRpYWxCYXNlLl9jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKGluaXRpYWxCYXNlLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodG9Vbm1vdW50KSB7XG5cdFx0XHR1bm1vdW50Q29tcG9uZW50KHRvVW5tb3VudCk7XG5cdFx0fVxuXG5cdFx0Y29tcG9uZW50LmJhc2UgPSBiYXNlO1xuXHRcdGlmIChiYXNlICYmICFpc0NoaWxkKSB7XG5cdFx0XHR2YXIgY29tcG9uZW50UmVmID0gY29tcG9uZW50LFxuXHRcdFx0ICAgIHQgPSBjb21wb25lbnQ7XG5cdFx0XHR3aGlsZSAodCA9IHQuX3BhcmVudENvbXBvbmVudCkge1xuXHRcdFx0XHQoY29tcG9uZW50UmVmID0gdCkuYmFzZSA9IGJhc2U7XG5cdFx0XHR9XG5cdFx0XHRiYXNlLl9jb21wb25lbnQgPSBjb21wb25lbnRSZWY7XG5cdFx0XHRiYXNlLl9jb21wb25lbnRDb25zdHJ1Y3RvciA9IGNvbXBvbmVudFJlZi5jb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdH1cblxuXHRpZiAoIWlzVXBkYXRlIHx8IG1vdW50QWxsKSB7XG5cdFx0bW91bnRzLnB1c2goY29tcG9uZW50KTtcblx0fSBlbHNlIGlmICghc2tpcCkge1xuXG5cdFx0aWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRVcGRhdGUpIHtcblx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRVcGRhdGUocHJldmlvdXNQcm9wcywgcHJldmlvdXNTdGF0ZSwgc25hcHNob3QpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5hZnRlclVwZGF0ZSkgb3B0aW9ucy5hZnRlclVwZGF0ZShjb21wb25lbnQpO1xuXHR9XG5cblx0d2hpbGUgKGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLnBvcCgpLmNhbGwoY29tcG9uZW50KTtcblx0fWlmICghZGlmZkxldmVsICYmICFpc0NoaWxkKSBmbHVzaE1vdW50cygpO1xufVxuXG5mdW5jdGlvbiBidWlsZENvbXBvbmVudEZyb21WTm9kZShkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCkge1xuXHR2YXIgYyA9IGRvbSAmJiBkb20uX2NvbXBvbmVudCxcblx0ICAgIG9yaWdpbmFsQ29tcG9uZW50ID0gYyxcblx0ICAgIG9sZERvbSA9IGRvbSxcblx0ICAgIGlzRGlyZWN0T3duZXIgPSBjICYmIGRvbS5fY29tcG9uZW50Q29uc3RydWN0b3IgPT09IHZub2RlLm5vZGVOYW1lLFxuXHQgICAgaXNPd25lciA9IGlzRGlyZWN0T3duZXIsXG5cdCAgICBwcm9wcyA9IGdldE5vZGVQcm9wcyh2bm9kZSk7XG5cdHdoaWxlIChjICYmICFpc093bmVyICYmIChjID0gYy5fcGFyZW50Q29tcG9uZW50KSkge1xuXHRcdGlzT3duZXIgPSBjLmNvbnN0cnVjdG9yID09PSB2bm9kZS5ub2RlTmFtZTtcblx0fVxuXG5cdGlmIChjICYmIGlzT3duZXIgJiYgKCFtb3VudEFsbCB8fCBjLl9jb21wb25lbnQpKSB7XG5cdFx0c2V0Q29tcG9uZW50UHJvcHMoYywgcHJvcHMsIDMsIGNvbnRleHQsIG1vdW50QWxsKTtcblx0XHRkb20gPSBjLmJhc2U7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG9yaWdpbmFsQ29tcG9uZW50ICYmICFpc0RpcmVjdE93bmVyKSB7XG5cdFx0XHR1bm1vdW50Q29tcG9uZW50KG9yaWdpbmFsQ29tcG9uZW50KTtcblx0XHRcdGRvbSA9IG9sZERvbSA9IG51bGw7XG5cdFx0fVxuXG5cdFx0YyA9IGNyZWF0ZUNvbXBvbmVudCh2bm9kZS5ub2RlTmFtZSwgcHJvcHMsIGNvbnRleHQpO1xuXHRcdGlmIChkb20gJiYgIWMubmV4dEJhc2UpIHtcblx0XHRcdGMubmV4dEJhc2UgPSBkb207XG5cblx0XHRcdG9sZERvbSA9IG51bGw7XG5cdFx0fVxuXHRcdHNldENvbXBvbmVudFByb3BzKGMsIHByb3BzLCAxLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cdFx0ZG9tID0gYy5iYXNlO1xuXG5cdFx0aWYgKG9sZERvbSAmJiBkb20gIT09IG9sZERvbSkge1xuXHRcdFx0b2xkRG9tLl9jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0cmVjb2xsZWN0Tm9kZVRyZWUob2xkRG9tLCBmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGRvbTtcbn1cblxuZnVuY3Rpb24gdW5tb3VudENvbXBvbmVudChjb21wb25lbnQpIHtcblx0aWYgKG9wdGlvbnMuYmVmb3JlVW5tb3VudCkgb3B0aW9ucy5iZWZvcmVVbm1vdW50KGNvbXBvbmVudCk7XG5cblx0dmFyIGJhc2UgPSBjb21wb25lbnQuYmFzZTtcblxuXHRjb21wb25lbnQuX2Rpc2FibGUgPSB0cnVlO1xuXG5cdGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQpIGNvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG5cdGNvbXBvbmVudC5iYXNlID0gbnVsbDtcblxuXHR2YXIgaW5uZXIgPSBjb21wb25lbnQuX2NvbXBvbmVudDtcblx0aWYgKGlubmVyKSB7XG5cdFx0dW5tb3VudENvbXBvbmVudChpbm5lcik7XG5cdH0gZWxzZSBpZiAoYmFzZSkge1xuXHRcdGlmIChiYXNlWydfX3ByZWFjdGF0dHJfJ10gIT0gbnVsbCkgYXBwbHlSZWYoYmFzZVsnX19wcmVhY3RhdHRyXyddLnJlZiwgbnVsbCk7XG5cblx0XHRjb21wb25lbnQubmV4dEJhc2UgPSBiYXNlO1xuXG5cdFx0cmVtb3ZlTm9kZShiYXNlKTtcblx0XHRyZWN5Y2xlckNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuXG5cdFx0cmVtb3ZlQ2hpbGRyZW4oYmFzZSk7XG5cdH1cblxuXHRhcHBseVJlZihjb21wb25lbnQuX19yZWYsIG51bGwpO1xufVxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpIHtcblx0dGhpcy5fZGlydHkgPSB0cnVlO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cblx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXG5cdHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9O1xuXG5cdHRoaXMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xufVxuXG5leHRlbmQoQ29tcG9uZW50LnByb3RvdHlwZSwge1xuXHRzZXRTdGF0ZTogZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKCF0aGlzLnByZXZTdGF0ZSkgdGhpcy5wcmV2U3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdHRoaXMuc3RhdGUgPSBleHRlbmQoZXh0ZW5kKHt9LCB0aGlzLnN0YXRlKSwgdHlwZW9mIHN0YXRlID09PSAnZnVuY3Rpb24nID8gc3RhdGUodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykgOiBzdGF0ZSk7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fSxcblx0Zm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKGNhbGxiYWNrKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0cmVuZGVyQ29tcG9uZW50KHRoaXMsIDIpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHt9XG59KTtcblxuZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnQsIG1lcmdlKSB7XG4gIHJldHVybiBkaWZmKG1lcmdlLCB2bm9kZSwge30sIGZhbHNlLCBwYXJlbnQsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4ge307XG59XG5cbnZhciBwcmVhY3QgPSB7XG5cdGg6IGgsXG5cdGNyZWF0ZUVsZW1lbnQ6IGgsXG5cdGNsb25lRWxlbWVudDogY2xvbmVFbGVtZW50LFxuXHRjcmVhdGVSZWY6IGNyZWF0ZVJlZixcblx0Q29tcG9uZW50OiBDb21wb25lbnQsXG5cdHJlbmRlcjogcmVuZGVyLFxuXHRyZXJlbmRlcjogcmVyZW5kZXIsXG5cdG9wdGlvbnM6IG9wdGlvbnNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWFjdDtcbmV4cG9ydCB7IGgsIGggYXMgY3JlYXRlRWxlbWVudCwgY2xvbmVFbGVtZW50LCBjcmVhdGVSZWYsIENvbXBvbmVudCwgcmVuZGVyLCByZXJlbmRlciwgb3B0aW9ucyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gcHJldHRpZXJCeXRlc1xuXG5mdW5jdGlvbiBwcmV0dGllckJ5dGVzIChudW0pIHtcbiAgaWYgKHR5cGVvZiBudW0gIT09ICdudW1iZXInIHx8IGlzTmFOKG51bSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIG51bWJlciwgZ290ICcgKyB0eXBlb2YgbnVtKVxuICB9XG5cbiAgdmFyIG5lZyA9IG51bSA8IDBcbiAgdmFyIHVuaXRzID0gWydCJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ11cblxuICBpZiAobmVnKSB7XG4gICAgbnVtID0gLW51bVxuICB9XG5cbiAgaWYgKG51bSA8IDEpIHtcbiAgICByZXR1cm4gKG5lZyA/ICctJyA6ICcnKSArIG51bSArICcgQidcbiAgfVxuXG4gIHZhciBleHBvbmVudCA9IE1hdGgubWluKE1hdGguZmxvb3IoTWF0aC5sb2cobnVtKSAvIE1hdGgubG9nKDEwMDApKSwgdW5pdHMubGVuZ3RoIC0gMSlcbiAgbnVtID0gTnVtYmVyKG51bSAvIE1hdGgucG93KDEwMDAsIGV4cG9uZW50KSlcbiAgdmFyIHVuaXQgPSB1bml0c1tleHBvbmVudF1cblxuICBpZiAobnVtID49IDEwIHx8IG51bSAlIDEgPT09IDApIHtcbiAgICAvLyBEbyBub3Qgc2hvdyBkZWNpbWFscyB3aGVuIHRoZSBudW1iZXIgaXMgdHdvLWRpZ2l0LCBvciBpZiB0aGUgbnVtYmVyIGhhcyBub1xuICAgIC8vIGRlY2ltYWwgY29tcG9uZW50LlxuICAgIHJldHVybiAobmVnID8gJy0nIDogJycpICsgbnVtLnRvRml4ZWQoMCkgKyAnICcgKyB1bml0XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChuZWcgPyAnLScgOiAnJykgKyBudW0udG9GaXhlZCgxKSArICcgJyArIHVuaXRcbiAgfVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc2hpbXMgdGhhdCBwcm92aWRlIG1pbmltYWwgZnVuY3Rpb25hbGl0eSBvZiB0aGUgRVM2IGNvbGxlY3Rpb25zLlxyXG4gKlxyXG4gKiBUaGVzZSBpbXBsZW1lbnRhdGlvbnMgYXJlIG5vdCBtZWFudCB0byBiZSB1c2VkIG91dHNpZGUgb2YgdGhlIFJlc2l6ZU9ic2VydmVyXHJcbiAqIG1vZHVsZXMgYXMgdGhleSBjb3ZlciBvbmx5IGEgbGltaXRlZCByYW5nZSBvZiB1c2UgY2FzZXMuXHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jLCB2YWxpZC1qc2RvYyAqL1xyXG52YXIgTWFwU2hpbSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIE1hcCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gTWFwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGluZGV4IGluIHByb3ZpZGVkIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIGtleS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5Pn0gYXJyXHJcbiAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0SW5kZXgoYXJyLCBrZXkpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gLTE7XHJcbiAgICAgICAgYXJyLnNvbWUoZnVuY3Rpb24gKGVudHJ5LCBpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoZW50cnlbMF0gPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19lbnRyaWVzX18ubGVuZ3RoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fX2VudHJpZXNfX1tpbmRleF07XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeVsxXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX19baW5kZXhdWzFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fLnB1c2goW2tleSwgdmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5fX2VudHJpZXNfXztcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgoZW50cmllcywga2V5KTtcclxuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgZW50cmllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEhfmdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5zcGxpY2UoMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW2N0eD1udWxsXVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGN0eCkge1xyXG4gICAgICAgICAgICBpZiAoY3R4ID09PSB2b2lkIDApIHsgY3R4ID0gbnVsbDsgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5fX2VudHJpZXNfXzsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY3R4LCBlbnRyeVsxXSwgZW50cnlbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gY2xhc3NfMTtcclxuICAgIH0oKSk7XHJcbn0pKCk7XG5cbi8qKlxyXG4gKiBEZXRlY3RzIHdoZXRoZXIgd2luZG93IGFuZCBkb2N1bWVudCBvYmplY3RzIGFyZSBhdmFpbGFibGUgaW4gY3VycmVudCBlbnZpcm9ubWVudC5cclxuICovXHJcbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCA9PT0gZG9jdW1lbnQ7XG5cbi8vIFJldHVybnMgZ2xvYmFsIG9iamVjdCBvZiBhIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbnZhciBnbG9iYWwkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcclxuICAgIHJldHVybiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xyXG59KSgpO1xuXG4vKipcclxuICogQSBzaGltIGZvciB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHdoaWNoIGZhbGxzIGJhY2sgdG8gdGhlIHNldFRpbWVvdXQgaWZcclxuICogZmlyc3Qgb25lIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJlcXVlc3RzJyBpZGVudGlmaWVyLlxyXG4gKi9cclxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLy8gSXQncyByZXF1aXJlZCB0byB1c2UgYSBib3VuZGVkIGZ1bmN0aW9uIGJlY2F1c2UgSUUgc29tZXRpbWVzIHRocm93c1xyXG4gICAgICAgIC8vIGFuIFwiSW52YWxpZCBjYWxsaW5nIG9iamVjdFwiIGVycm9yIGlmIHJBRiBpcyBpbnZva2VkIHdpdGhvdXQgdGhlIGdsb2JhbFxyXG4gICAgICAgIC8vIG9iamVjdCBvbiB0aGUgbGVmdCBoYW5kIHNpZGUuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKGdsb2JhbCQxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FsbGJhY2soRGF0ZS5ub3coKSk7IH0sIDEwMDAgLyA2MCk7IH07XHJcbn0pKCk7XG5cbi8vIERlZmluZXMgbWluaW11bSB0aW1lb3V0IGJlZm9yZSBhZGRpbmcgYSB0cmFpbGluZyBjYWxsLlxyXG52YXIgdHJhaWxpbmdUaW1lb3V0ID0gMjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGVuc3VyZXMgdGhhdCBwcm92aWRlZCBjYWxsYmFjayB3aWxsIGJlXHJcbiAqIGludm9rZWQgb25seSBvbmNlIGR1cmluZyB0aGUgc3BlY2lmaWVkIGRlbGF5IHBlcmlvZC5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBkZWxheSBwZXJpb2QuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSAtIERlbGF5IGFmdGVyIHdoaWNoIHRvIGludm9rZSBjYWxsYmFjay5cclxuICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gdGhyb3R0bGUgKGNhbGxiYWNrLCBkZWxheSkge1xyXG4gICAgdmFyIGxlYWRpbmdDYWxsID0gZmFsc2UsIHRyYWlsaW5nQ2FsbCA9IGZhbHNlLCBsYXN0Q2FsbFRpbWUgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBmdW5jdGlvbiBhbmQgc2NoZWR1bGVzIG5ldyBpbnZvY2F0aW9uIGlmXHJcbiAgICAgKiB0aGUgXCJwcm94eVwiIHdhcyBjYWxsZWQgZHVyaW5nIGN1cnJlbnQgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVBlbmRpbmcoKSB7XHJcbiAgICAgICAgaWYgKGxlYWRpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFpbGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgcHJveHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIGludm9rZWQgYWZ0ZXIgdGhlIHNwZWNpZmllZCBkZWxheS4gSXQgd2lsbCBmdXJ0aGVyIHBvc3Rwb25lXHJcbiAgICAgKiBpbnZvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBkZWxlZ2F0aW5nIGl0IHRvIHRoZVxyXG4gICAgICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB0aW1lb3V0Q2FsbGJhY2soKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEocmVzb2x2ZVBlbmRpbmcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTY2hlZHVsZXMgaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHByb3h5KCkge1xyXG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICAvLyBSZWplY3QgaW1tZWRpYXRlbHkgZm9sbG93aW5nIGNhbGxzLlxyXG4gICAgICAgICAgICBpZiAodGltZVN0YW1wIC0gbGFzdENhbGxUaW1lIDwgdHJhaWxpbmdUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2NoZWR1bGUgbmV3IGNhbGwgdG8gYmUgaW4gaW52b2tlZCB3aGVuIHRoZSBwZW5kaW5nIG9uZSBpcyByZXNvbHZlZC5cclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIFwidHJhbnNpdGlvbnNcIiB3aGljaCBuZXZlciBhY3R1YWxseSBzdGFydFxyXG4gICAgICAgICAgICAvLyBpbW1lZGlhdGVseSBzbyB0aGVyZSBpcyBhIGNoYW5jZSB0aGF0IHdlIG1pZ2h0IG1pc3Mgb25lIGlmIGNoYW5nZVxyXG4gICAgICAgICAgICAvLyBoYXBwZW5zIGFtaWRzIHRoZSBwZW5kaW5nIGludm9jYXRpb24uXHJcbiAgICAgICAgICAgIHRyYWlsaW5nQ2FsbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyYWlsaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRpbWVvdXRDYWxsYmFjaywgZGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lU3RhbXA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJveHk7XHJcbn1cblxuLy8gTWluaW11bSBkZWxheSBiZWZvcmUgaW52b2tpbmcgdGhlIHVwZGF0ZSBvZiBvYnNlcnZlcnMuXHJcbnZhciBSRUZSRVNIX0RFTEFZID0gMjA7XHJcbi8vIEEgbGlzdCBvZiBzdWJzdHJpbmdzIG9mIENTUyBwcm9wZXJ0aWVzIHVzZWQgdG8gZmluZCB0cmFuc2l0aW9uIGV2ZW50cyB0aGF0XHJcbi8vIG1pZ2h0IGFmZmVjdCBkaW1lbnNpb25zIG9mIG9ic2VydmVkIGVsZW1lbnRzLlxyXG52YXIgdHJhbnNpdGlvbktleXMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCcsICd3aWR0aCcsICdoZWlnaHQnLCAnc2l6ZScsICd3ZWlnaHQnXTtcclxuLy8gQ2hlY2sgaWYgTXV0YXRpb25PYnNlcnZlciBpcyBhdmFpbGFibGUuXHJcbnZhciBtdXRhdGlvbk9ic2VydmVyU3VwcG9ydGVkID0gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xyXG4vKipcclxuICogU2luZ2xldG9uIGNvbnRyb2xsZXIgY2xhc3Mgd2hpY2ggaGFuZGxlcyB1cGRhdGVzIG9mIFJlc2l6ZU9ic2VydmVyIGluc3RhbmNlcy5cclxuICovXHJcbnZhciBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcigpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciBET00gbGlzdGVuZXJzIGhhdmUgYmVlbiBhZGRlZC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRlbGxzIHRoYXQgY29udHJvbGxlciBoYXMgc3Vic2NyaWJlZCBmb3IgTXV0YXRpb24gRXZlbnRzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEtlZXBzIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgTXV0YXRpb25PYnNlcnZlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtNdXRhdGlvbk9ic2VydmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbnVsbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIGxpc3Qgb2YgY29ubmVjdGVkIG9ic2VydmVycy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZlclNQST59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnNfID0gW107XHJcbiAgICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmRfID0gdGhpcy5vblRyYW5zaXRpb25FbmRfLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoID0gdGhyb3R0bGUodGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIFJFRlJFU0hfREVMQVkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIG9ic2VydmVyIHRvIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgYWRkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIGlmICghfnRoaXMub2JzZXJ2ZXJzXy5pbmRleE9mKG9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyc18ucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBsaXN0ZW5lcnMgaWYgdGhleSBoYXZlbid0IGJlZW4gYWRkZWQgeWV0LlxyXG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdF8oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlclNQSX0gb2JzZXJ2ZXIgLSBPYnNlcnZlciB0byBiZSByZW1vdmVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnNfO1xyXG4gICAgICAgIHZhciBpbmRleCA9IG9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcclxuICAgICAgICAvLyBSZW1vdmUgb2JzZXJ2ZXIgaWYgaXQncyBwcmVzZW50IGluIHJlZ2lzdHJ5LlxyXG4gICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnMgaWYgY29udHJvbGxlciBoYXMgbm8gY29ubmVjdGVkIG9ic2VydmVycy5cclxuICAgICAgICBpZiAoIW9ic2VydmVycy5sZW5ndGggJiYgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdF8oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLiBJdCB3aWxsIGNvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpbnNvZmFyXHJcbiAgICAgKiBpdCBkZXRlY3RzIGNoYW5nZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY2hhbmdlc0RldGVjdGVkID0gdGhpcy51cGRhdGVPYnNlcnZlcnNfKCk7XHJcbiAgICAgICAgLy8gQ29udGludWUgcnVubmluZyB1cGRhdGVzIGlmIGNoYW5nZXMgaGF2ZSBiZWVuIGRldGVjdGVkIGFzIHRoZXJlIG1pZ2h0XHJcbiAgICAgICAgLy8gYmUgZnV0dXJlIG9uZXMgY2F1c2VkIGJ5IENTUyB0cmFuc2l0aW9ucy5cclxuICAgICAgICBpZiAoY2hhbmdlc0RldGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgZXZlcnkgb2JzZXJ2ZXIgZnJvbSBvYnNlcnZlcnMgbGlzdCBhbmQgbm90aWZpZXMgdGhlbSBvZiBxdWV1ZWRcclxuICAgICAqIGVudHJpZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIFwidHJ1ZVwiIGlmIGFueSBvYnNlcnZlciBoYXMgZGV0ZWN0ZWQgY2hhbmdlcyBpblxyXG4gICAgICogICAgICBkaW1lbnNpb25zIG9mIGl0J3MgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUudXBkYXRlT2JzZXJ2ZXJzXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBDb2xsZWN0IG9ic2VydmVycyB0aGF0IGhhdmUgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICB2YXIgYWN0aXZlT2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnNfLmZpbHRlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmdhdGhlckFjdGl2ZSgpLCBvYnNlcnZlci5oYXNBY3RpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBEZWxpdmVyIG5vdGlmaWNhdGlvbnMgaW4gYSBzZXBhcmF0ZSBjeWNsZSBpbiBvcmRlciB0byBhdm9pZCBhbnlcclxuICAgICAgICAvLyBjb2xsaXNpb25zIGJldHdlZW4gb2JzZXJ2ZXJzLCBlLmcuIHdoZW4gbXVsdGlwbGUgaW5zdGFuY2VzIG9mXHJcbiAgICAgICAgLy8gUmVzaXplT2JzZXJ2ZXIgYXJlIHRyYWNraW5nIHRoZSBzYW1lIGVsZW1lbnQgYW5kIHRoZSBjYWxsYmFjayBvZiBvbmVcclxuICAgICAgICAvLyBvZiB0aGVtIGNoYW5nZXMgY29udGVudCBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCB0YXJnZXQuIFNvbWV0aW1lc1xyXG4gICAgICAgIC8vIHRoaXMgbWF5IHJlc3VsdCBpbiBub3RpZmljYXRpb25zIGJlaW5nIGJsb2NrZWQgZm9yIHRoZSByZXN0IG9mIG9ic2VydmVycy5cclxuICAgICAgICBhY3RpdmVPYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgcmV0dXJuIG9ic2VydmVyLmJyb2FkY2FzdEFjdGl2ZSgpOyB9KTtcclxuICAgICAgICByZXR1cm4gYWN0aXZlT2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5jb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSBhZGRlZC5cclxuICAgICAgICBpZiAoIWlzQnJvd3NlciB8fCB0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWJzY3JpcHRpb24gdG8gdGhlIFwiVHJhbnNpdGlvbmVuZFwiIGV2ZW50IGlzIHVzZWQgYXMgYSB3b3JrYXJvdW5kIGZvclxyXG4gICAgICAgIC8vIGRlbGF5ZWQgdHJhbnNpdGlvbnMuIFRoaXMgd2F5IGl0J3MgcG9zc2libGUgdG8gY2FwdHVyZSBhdCBsZWFzdCB0aGVcclxuICAgICAgICAvLyBmaW5hbCBzdGF0ZSBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLm9uVHJhbnNpdGlvbkVuZF8pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIGlmIChtdXRhdGlvbk9ic2VydmVyU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5yZWZyZXNoKTtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8ub2JzZXJ2ZShkb2N1bWVudCwge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIERPTSBsaXN0ZW5lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmRpc2Nvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgcnVubmluZyBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IG9yIGlmIGxpc3RlbmVyc1xyXG4gICAgICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IHJlbW92ZWQuXHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLm9uVHJhbnNpdGlvbkVuZF8pO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uc09ic2VydmVyXykge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXy5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbnVsbDtcclxuICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBoYW5kbGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge1RyYW5zaXRpb25FdmVudH0gZXZlbnRcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLm9uVHJhbnNpdGlvbkVuZF8gPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgX2IgPSBfYS5wcm9wZXJ0eU5hbWUsIHByb3BlcnR5TmFtZSA9IF9iID09PSB2b2lkIDAgPyAnJyA6IF9iO1xyXG4gICAgICAgIC8vIERldGVjdCB3aGV0aGVyIHRyYW5zaXRpb24gbWF5IGFmZmVjdCBkaW1lbnNpb25zIG9mIGFuIGVsZW1lbnQuXHJcbiAgICAgICAgdmFyIGlzUmVmbG93UHJvcGVydHkgPSB0cmFuc2l0aW9uS2V5cy5zb21lKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEhfnByb3BlcnR5TmFtZS5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGlzUmVmbG93UHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpbnN0YW5jZSBvZiB0aGUgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VfKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VfID0gbmV3IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZV87XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb2xkcyByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xsZXIncyBpbnN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZSB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuaW5zdGFuY2VfID0gbnVsbDtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXI7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBEZWZpbmVzIG5vbi13cml0YWJsZS9lbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgdGhlIHByb3ZpZGVkIHRhcmdldCBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgLSBPYmplY3QgZm9yIHdoaWNoIHRvIGRlZmluZSBwcm9wZXJ0aWVzLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBQcm9wZXJ0aWVzIHRvIGJlIGRlZmluZWQuXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRhcmdldCBvYmplY3QuXHJcbiAqL1xyXG52YXIgZGVmaW5lQ29uZmlndXJhYmxlID0gKGZ1bmN0aW9uICh0YXJnZXQsIHByb3BzKSB7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMocHJvcHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfYVtfaV07XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wc1trZXldLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn0pO1xuXG4vKipcclxuICogUmV0dXJucyB0aGUgZ2xvYmFsIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggcHJvdmlkZWQgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gKi9cclxudmFyIGdldFdpbmRvd09mID0gKGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgIC8vIEFzc3VtZSB0aGF0IHRoZSBlbGVtZW50IGlzIGFuIGluc3RhbmNlIG9mIE5vZGUsIHdoaWNoIG1lYW5zIHRoYXQgaXRcclxuICAgIC8vIGhhcyB0aGUgXCJvd25lckRvY3VtZW50XCIgcHJvcGVydHkgZnJvbSB3aGljaCB3ZSBjYW4gcmV0cmlldmUgYVxyXG4gICAgLy8gY29ycmVzcG9uZGluZyBnbG9iYWwgb2JqZWN0LlxyXG4gICAgdmFyIG93bmVyR2xvYmFsID0gdGFyZ2V0ICYmIHRhcmdldC5vd25lckRvY3VtZW50ICYmIHRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgLy8gUmV0dXJuIHRoZSBsb2NhbCBnbG9iYWwgb2JqZWN0IGlmIGl0J3Mgbm90IHBvc3NpYmxlIGV4dHJhY3Qgb25lIGZyb21cclxuICAgIC8vIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICByZXR1cm4gb3duZXJHbG9iYWwgfHwgZ2xvYmFsJDE7XHJcbn0pO1xuXG4vLyBQbGFjZWhvbGRlciBvZiBhbiBlbXB0eSBjb250ZW50IHJlY3RhbmdsZS5cclxudmFyIGVtcHR5UmVjdCA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4vKipcclxuICogQ29udmVydHMgcHJvdmlkZWQgc3RyaW5nIHRvIGEgbnVtYmVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHZhbHVlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiB0b0Zsb2F0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMDtcclxufVxyXG4vKipcclxuICogRXh0cmFjdHMgYm9yZGVycyBzaXplIGZyb20gcHJvdmlkZWQgc3R5bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xyXG4gKiBAcGFyYW0gey4uLnN0cmluZ30gcG9zaXRpb25zIC0gQm9yZGVycyBwb3NpdGlvbnMgKHRvcCwgcmlnaHQsIC4uLilcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcykge1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBwb3NpdGlvbnNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9zaXRpb25zLnJlZHVjZShmdW5jdGlvbiAoc2l6ZSwgcG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbJ2JvcmRlci0nICsgcG9zaXRpb24gKyAnLXdpZHRoJ107XHJcbiAgICAgICAgcmV0dXJuIHNpemUgKyB0b0Zsb2F0KHZhbHVlKTtcclxuICAgIH0sIDApO1xyXG59XHJcbi8qKlxyXG4gKiBFeHRyYWN0cyBwYWRkaW5ncyBzaXplcyBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICogQHJldHVybnMge09iamVjdH0gUGFkZGluZ3MgYm94LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UGFkZGluZ3Moc3R5bGVzKSB7XHJcbiAgICB2YXIgcG9zaXRpb25zID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcclxuICAgIHZhciBwYWRkaW5ncyA9IHt9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBwb3NpdGlvbnNfMSA9IHBvc2l0aW9uczsgX2kgPCBwb3NpdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBwb3NpdGlvbnNfMVtfaV07XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydwYWRkaW5nLScgKyBwb3NpdGlvbl07XHJcbiAgICAgICAgcGFkZGluZ3NbcG9zaXRpb25dID0gdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFkZGluZ3M7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgY29udGVudCByZWN0YW5nbGUgb2YgcHJvdmlkZWQgU1ZHIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U1ZHR3JhcGhpY3NFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzXHJcbiAqICAgICAgdG8gYmUgY2FsY3VsYXRlZC5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICB2YXIgYmJveCA9IHRhcmdldC5nZXRCQm94KCk7XHJcbiAgICByZXR1cm4gY3JlYXRlUmVjdEluaXQoMCwgMCwgYmJveC53aWR0aCwgYmJveC5oZWlnaHQpO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIEhUTUxFbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGZvciB3aGljaCB0byBjYWxjdWxhdGUgdGhlIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgLy8gQ2xpZW50IHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgY2FuJ3QgYmVcclxuICAgIC8vIHVzZWQgZXhjbHVzaXZlbHkgYXMgdGhleSBwcm92aWRlIHJvdW5kZWQgdmFsdWVzLlxyXG4gICAgdmFyIGNsaWVudFdpZHRoID0gdGFyZ2V0LmNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgPSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xyXG4gICAgLy8gQnkgdGhpcyBjb25kaXRpb24gd2UgY2FuIGNhdGNoIGFsbCBub24tcmVwbGFjZWQgaW5saW5lLCBoaWRkZW4gYW5kXHJcbiAgICAvLyBkZXRhY2hlZCBlbGVtZW50cy4gVGhvdWdoIGVsZW1lbnRzIHdpdGggd2lkdGggJiBoZWlnaHQgcHJvcGVydGllcyBsZXNzXHJcbiAgICAvLyB0aGFuIDAuNSB3aWxsIGJlIGRpc2NhcmRlZCBhcyB3ZWxsLlxyXG4gICAgLy9cclxuICAgIC8vIFdpdGhvdXQgaXQgd2Ugd291bGQgbmVlZCB0byBpbXBsZW1lbnQgc2VwYXJhdGUgbWV0aG9kcyBmb3IgZWFjaCBvZlxyXG4gICAgLy8gdGhvc2UgY2FzZXMgYW5kIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHBlcmZvcm0gYSBwcmVjaXNlIGFuZCBwZXJmb3JtYW5jZVxyXG4gICAgLy8gZWZmZWN0aXZlIHRlc3QgZm9yIGhpZGRlbiBlbGVtZW50cy4gRS5nLiBldmVuIGpRdWVyeSdzICc6dmlzaWJsZScgZmlsdGVyXHJcbiAgICAvLyBnaXZlcyB3cm9uZyByZXN1bHRzIGZvciBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IGxlc3MgdGhhbiAwLjUuXHJcbiAgICBpZiAoIWNsaWVudFdpZHRoICYmICFjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgfVxyXG4gICAgdmFyIHN0eWxlcyA9IGdldFdpbmRvd09mKHRhcmdldCkuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xyXG4gICAgdmFyIHBhZGRpbmdzID0gZ2V0UGFkZGluZ3Moc3R5bGVzKTtcclxuICAgIHZhciBob3JpelBhZCA9IHBhZGRpbmdzLmxlZnQgKyBwYWRkaW5ncy5yaWdodDtcclxuICAgIHZhciB2ZXJ0UGFkID0gcGFkZGluZ3MudG9wICsgcGFkZGluZ3MuYm90dG9tO1xyXG4gICAgLy8gQ29tcHV0ZWQgc3R5bGVzIG9mIHdpZHRoICYgaGVpZ2h0IGFyZSBiZWluZyB1c2VkIGJlY2F1c2UgdGhleSBhcmUgdGhlXHJcbiAgICAvLyBvbmx5IGRpbWVuc2lvbnMgYXZhaWxhYmxlIHRvIEpTIHRoYXQgY29udGFpbiBub24tcm91bmRlZCB2YWx1ZXMuIEl0IGNvdWxkXHJcbiAgICAvLyBiZSBwb3NzaWJsZSB0byB1dGlsaXplIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaWYgb25seSBpdCdzIGRhdGEgd2Fzbid0XHJcbiAgICAvLyBhZmZlY3RlZCBieSBDU1MgdHJhbnNmb3JtYXRpb25zIGxldCBhbG9uZSBwYWRkaW5ncywgYm9yZGVycyBhbmQgc2Nyb2xsIGJhcnMuXHJcbiAgICB2YXIgd2lkdGggPSB0b0Zsb2F0KHN0eWxlcy53aWR0aCksIGhlaWdodCA9IHRvRmxvYXQoc3R5bGVzLmhlaWdodCk7XHJcbiAgICAvLyBXaWR0aCAmIGhlaWdodCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHdoZW4gdGhlICdib3JkZXItYm94JyBib3hcclxuICAgIC8vIG1vZGVsIGlzIGFwcGxpZWQgKGV4Y2VwdCBmb3IgSUUpLlxyXG4gICAgaWYgKHN0eWxlcy5ib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xyXG4gICAgICAgIC8vIEZvbGxvd2luZyBjb25kaXRpb25zIGFyZSByZXF1aXJlZCB0byBoYW5kbGUgSW50ZXJuZXQgRXhwbG9yZXIgd2hpY2hcclxuICAgICAgICAvLyBkb2Vzbid0IGluY2x1ZGUgcGFkZGluZ3MgYW5kIGJvcmRlcnMgdG8gY29tcHV0ZWQgQ1NTIGRpbWVuc2lvbnMuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBXZSBjYW4gc2F5IHRoYXQgaWYgQ1NTIGRpbWVuc2lvbnMgKyBwYWRkaW5ncyBhcmUgZXF1YWwgdG8gdGhlIFwiY2xpZW50XCJcclxuICAgICAgICAvLyBwcm9wZXJ0aWVzIHRoZW4gaXQncyBlaXRoZXIgSUUsIGFuZCB0aHVzIHdlIGRvbid0IG5lZWQgdG8gc3VidHJhY3RcclxuICAgICAgICAvLyBhbnl0aGluZywgb3IgYW4gZWxlbWVudCBtZXJlbHkgZG9lc24ndCBoYXZlIHBhZGRpbmdzL2JvcmRlcnMgc3R5bGVzLlxyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpICE9PSBjbGllbnRXaWR0aCkge1xyXG4gICAgICAgICAgICB3aWR0aCAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICdsZWZ0JywgJ3JpZ2h0JykgKyBob3JpelBhZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGgucm91bmQoaGVpZ2h0ICsgdmVydFBhZCkgIT09IGNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAndG9wJywgJ2JvdHRvbScpICsgdmVydFBhZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBGb2xsb3dpbmcgc3RlcHMgY2FuJ3QgYmUgYXBwbGllZCB0byB0aGUgZG9jdW1lbnQncyByb290IGVsZW1lbnQgYXMgaXRzXHJcbiAgICAvLyBjbGllbnRbV2lkdGgvSGVpZ2h0XSBwcm9wZXJ0aWVzIHJlcHJlc2VudCB2aWV3cG9ydCBhcmVhIG9mIHRoZSB3aW5kb3cuXHJcbiAgICAvLyBCZXNpZGVzLCBpdCdzIGFzIHdlbGwgbm90IG5lY2Vzc2FyeSBhcyB0aGUgPGh0bWw+IGl0c2VsZiBuZWl0aGVyIGhhc1xyXG4gICAgLy8gcmVuZGVyZWQgc2Nyb2xsIGJhcnMgbm9yIGl0IGNhbiBiZSBjbGlwcGVkLlxyXG4gICAgaWYgKCFpc0RvY3VtZW50RWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgLy8gSW4gc29tZSBicm93c2VycyAob25seSBpbiBGaXJlZm94LCBhY3R1YWxseSkgQ1NTIHdpZHRoICYgaGVpZ2h0XHJcbiAgICAgICAgLy8gaW5jbHVkZSBzY3JvbGwgYmFycyBzaXplIHdoaWNoIGNhbiBiZSByZW1vdmVkIGF0IHRoaXMgc3RlcCBhcyBzY3JvbGxcclxuICAgICAgICAvLyBiYXJzIGFyZSB0aGUgb25seSBkaWZmZXJlbmNlIGJldHdlZW4gcm91bmRlZCBkaW1lbnNpb25zICsgcGFkZGluZ3NcclxuICAgICAgICAvLyBhbmQgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLCB0aG91Z2ggdGhhdCBpcyBub3QgYWx3YXlzIHRydWUgaW4gQ2hyb21lLlxyXG4gICAgICAgIHZhciB2ZXJ0U2Nyb2xsYmFyID0gTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAtIGNsaWVudFdpZHRoO1xyXG4gICAgICAgIHZhciBob3JpelNjcm9sbGJhciA9IE1hdGgucm91bmQoaGVpZ2h0ICsgdmVydFBhZCkgLSBjbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgLy8gQ2hyb21lIGhhcyBhIHJhdGhlciB3ZWlyZCByb3VuZGluZyBvZiBcImNsaWVudFwiIHByb3BlcnRpZXMuXHJcbiAgICAgICAgLy8gRS5nLiBmb3IgYW4gZWxlbWVudCB3aXRoIGNvbnRlbnQgd2lkdGggb2YgMzE0LjJweCBpdCBzb21ldGltZXMgZ2l2ZXNcclxuICAgICAgICAvLyB0aGUgY2xpZW50IHdpZHRoIG9mIDMxNXB4IGFuZCBmb3IgdGhlIHdpZHRoIG9mIDMxNC43cHggaXQgbWF5IGdpdmVcclxuICAgICAgICAvLyAzMTRweC4gQW5kIGl0IGRvZXNuJ3QgaGFwcGVuIGFsbCB0aGUgdGltZS4gU28ganVzdCBpZ25vcmUgdGhpcyBkZWx0YVxyXG4gICAgICAgIC8vIGFzIGEgbm9uLXJlbGV2YW50LlxyXG4gICAgICAgIGlmIChNYXRoLmFicyh2ZXJ0U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICB3aWR0aCAtPSB2ZXJ0U2Nyb2xsYmFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnMoaG9yaXpTY3JvbGxiYXIpICE9PSAxKSB7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBob3JpelNjcm9sbGJhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3JlYXRlUmVjdEluaXQocGFkZGluZ3MubGVmdCwgcGFkZGluZ3MudG9wLCB3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgY2hlY2tlZC5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNTVkdHcmFwaGljc0VsZW1lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU29tZSBicm93c2VycywgbmFtZWx5IElFIGFuZCBFZGdlLCBkb24ndCBoYXZlIHRoZSBTVkdHcmFwaGljc0VsZW1lbnRcclxuICAgIC8vIGludGVyZmFjZS5cclxuICAgIGlmICh0eXBlb2YgU1ZHR3JhcGhpY3NFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLlNWR0dyYXBoaWNzRWxlbWVudDsgfTtcclxuICAgIH1cclxuICAgIC8vIElmIGl0J3Mgc28sIHRoZW4gY2hlY2sgdGhhdCBlbGVtZW50IGlzIGF0IGxlYXN0IGFuIGluc3RhbmNlIG9mIHRoZVxyXG4gICAgLy8gU1ZHRWxlbWVudCBhbmQgdGhhdCBpdCBoYXMgdGhlIFwiZ2V0QkJveFwiIG1ldGhvZC5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRyYS1wYXJlbnNcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiAodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdFbGVtZW50ICYmXHJcbiAgICAgICAgdHlwZW9mIHRhcmdldC5nZXRCQm94ID09PSAnZnVuY3Rpb24nKTsgfTtcclxufSkoKTtcclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYSBkb2N1bWVudCBlbGVtZW50ICg8aHRtbD4pLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgY2hlY2tlZC5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0RvY3VtZW50RWxlbWVudCh0YXJnZXQpIHtcclxuICAgIHJldHVybiB0YXJnZXQgPT09IGdldFdpbmRvd09mKHRhcmdldCkuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGFuIGFwcHJvcHJpYXRlIGNvbnRlbnQgcmVjdGFuZ2xlIGZvciBwcm92aWRlZCBodG1sIG9yIHN2ZyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgY29udGVudCByZWN0YW5nbGUgb2Ygd2hpY2ggbmVlZHMgdG8gYmUgY2FsY3VsYXRlZC5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xyXG4gICAgICAgIHJldHVybiBlbXB0eVJlY3Q7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTVkdHcmFwaGljc0VsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgIHJldHVybiBnZXRTVkdDb250ZW50UmVjdCh0YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50Q29udGVudFJlY3QodGFyZ2V0KTtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyByZWN0YW5nbGUgd2l0aCBhbiBpbnRlcmZhY2Ugb2YgdGhlIERPTVJlY3RSZWFkT25seS5cclxuICogU3BlYzogaHR0cHM6Ly9kcmFmdHMuZnh0Zi5vcmcvZ2VvbWV0cnkvI2RvbXJlY3RyZWFkb25seVxyXG4gKlxyXG4gKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIE9iamVjdCB3aXRoIHJlY3RhbmdsZSdzIHgveSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucy5cclxuICogQHJldHVybnMge0RPTVJlY3RSZWFkT25seX1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlYWRPbmx5UmVjdChfYSkge1xyXG4gICAgdmFyIHggPSBfYS54LCB5ID0gX2EueSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xyXG4gICAgLy8gSWYgRE9NUmVjdFJlYWRPbmx5IGlzIGF2YWlsYWJsZSB1c2UgaXQgYXMgYSBwcm90b3R5cGUgZm9yIHRoZSByZWN0YW5nbGUuXHJcbiAgICB2YXIgQ29uc3RyID0gdHlwZW9mIERPTVJlY3RSZWFkT25seSAhPT0gJ3VuZGVmaW5lZCcgPyBET01SZWN0UmVhZE9ubHkgOiBPYmplY3Q7XHJcbiAgICB2YXIgcmVjdCA9IE9iamVjdC5jcmVhdGUoQ29uc3RyLnByb3RvdHlwZSk7XHJcbiAgICAvLyBSZWN0YW5nbGUncyBwcm9wZXJ0aWVzIGFyZSBub3Qgd3JpdGFibGUgYW5kIG5vbi1lbnVtZXJhYmxlLlxyXG4gICAgZGVmaW5lQ29uZmlndXJhYmxlKHJlY3QsIHtcclxuICAgICAgICB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgIHRvcDogeSxcclxuICAgICAgICByaWdodDogeCArIHdpZHRoLFxyXG4gICAgICAgIGJvdHRvbTogaGVpZ2h0ICsgeSxcclxuICAgICAgICBsZWZ0OiB4XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZWN0O1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIERPTVJlY3RJbml0IG9iamVjdCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgZGltZW5zaW9ucyBhbmQgdGhlIHgveSBjb29yZGluYXRlcy5cclxuICogU3BlYzogaHR0cHM6Ly9kcmFmdHMuZnh0Zi5vcmcvZ2VvbWV0cnkvI2RpY3RkZWYtZG9tcmVjdGluaXRcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHggLSBYIGNvb3JkaW5hdGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWSBjb29yZGluYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSBSZWN0YW5nbGUncyB3aWR0aC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFJlY3RhbmdsZSdzIGhlaWdodC5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUmVjdEluaXQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xyXG59XG5cbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBjb21wdXRhdGlvbnMgb2YgdGhlIGNvbnRlbnQgcmVjdGFuZ2xlIG9mXHJcbiAqIHByb3ZpZGVkIERPTSBlbGVtZW50IGFuZCBmb3Iga2VlcGluZyB0cmFjayBvZiBpdCdzIGNoYW5nZXMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2YXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIG9ic2VydmVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCcm9hZGNhc3RlZCB3aWR0aCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnJvYWRjYXN0ZWQgaGVpZ2h0IG9mIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJyb2FkY2FzdEhlaWdodCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBsYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge0RPTVJlY3RJbml0fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY29udGVudFJlY3RfID0gY3JlYXRlUmVjdEluaXQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgY29udGVudCByZWN0YW5nbGUgYW5kIHRlbGxzIHdoZXRoZXIgaXQncyB3aWR0aCBvciBoZWlnaHQgcHJvcGVydGllc1xyXG4gICAgICogaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IGJyb2FkY2FzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gZ2V0Q29udGVudFJlY3QodGhpcy50YXJnZXQpO1xyXG4gICAgICAgIHRoaXMuY29udGVudFJlY3RfID0gcmVjdDtcclxuICAgICAgICByZXR1cm4gKHJlY3Qud2lkdGggIT09IHRoaXMuYnJvYWRjYXN0V2lkdGggfHxcclxuICAgICAgICAgICAgcmVjdC5oZWlnaHQgIT09IHRoaXMuYnJvYWRjYXN0SGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgJ2Jyb2FkY2FzdFdpZHRoJyBhbmQgJ2Jyb2FkY2FzdEhlaWdodCcgcHJvcGVydGllcyB3aXRoIGEgZGF0YVxyXG4gICAgICogZnJvbSB0aGUgY29ycmVzcG9uZGluZyBwcm9wZXJ0aWVzIG9mIHRoZSBsYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtET01SZWN0SW5pdH0gTGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmJyb2FkY2FzdFJlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmNvbnRlbnRSZWN0XztcclxuICAgICAgICB0aGlzLmJyb2FkY2FzdFdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgICAgICB0aGlzLmJyb2FkY2FzdEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiByZWN0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZhdGlvbjtcclxufSgpKTtcblxudmFyIFJlc2l6ZU9ic2VydmVyRW50cnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdGhhdCBpcyBiZWluZyBvYnNlcnZlZC5cclxuICAgICAqIEBwYXJhbSB7RE9NUmVjdEluaXR9IHJlY3RJbml0IC0gRGF0YSBvZiB0aGUgZWxlbWVudCdzIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckVudHJ5KHRhcmdldCwgcmVjdEluaXQpIHtcclxuICAgICAgICB2YXIgY29udGVudFJlY3QgPSBjcmVhdGVSZWFkT25seVJlY3QocmVjdEluaXQpO1xyXG4gICAgICAgIC8vIEFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlXHJcbiAgICAgICAgLy8gYW5kIGFyZSBhbHNvIG5vdCBlbnVtZXJhYmxlIGluIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBQcm9wZXJ0eSBhY2Nlc3NvcnMgYXJlIG5vdCBiZWluZyB1c2VkIGFzIHRoZXknZCByZXF1aXJlIHRvIGRlZmluZSBhXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBXZWFrTWFwIHN0b3JhZ2Ugd2hpY2ggbWF5IGNhdXNlIG1lbW9yeSBsZWFrcyBpbiBicm93c2VycyB0aGF0XHJcbiAgICAgICAgLy8gZG9uJ3Qgc3VwcG9ydCB0aGlzIHR5cGUgb2YgY29sbGVjdGlvbnMuXHJcbiAgICAgICAgZGVmaW5lQ29uZmlndXJhYmxlKHRoaXMsIHsgdGFyZ2V0OiB0YXJnZXQsIGNvbnRlbnRSZWN0OiBjb250ZW50UmVjdCB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckVudHJ5O1xyXG59KCkpO1xuXG52YXIgUmVzaXplT2JzZXJ2ZXJTUEkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNhbGxiYWNrfSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZFxyXG4gICAgICogICAgICB3aGVuIG9uZSBvZiB0aGUgb2JzZXJ2ZWQgZWxlbWVudHMgY2hhbmdlcyBpdCdzIGNvbnRlbnQgZGltZW5zaW9ucy5cclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfSBjb250cm9sbGVyIC0gQ29udHJvbGxlciBpbnN0YW5jZSB3aGljaFxyXG4gICAgICogICAgICBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHVwZGF0ZXMgb2Ygb2JzZXJ2ZXIuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyfSBjYWxsYmFja0N0eCAtIFJlZmVyZW5jZSB0byB0aGUgcHVibGljXHJcbiAgICAgKiAgICAgIFJlc2l6ZU9ic2VydmVyIGluc3RhbmNlIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlclNQSShjYWxsYmFjaywgY29udHJvbGxlciwgY2FsbGJhY2tDdHgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb2xsZWN0aW9uIG9mIHJlc2l6ZSBvYnNlcnZhdGlvbnMgdGhhdCBoYXZlIGRldGVjdGVkIGNoYW5nZXMgaW4gZGltZW5zaW9uc1xyXG4gICAgICAgICAqIG9mIGVsZW1lbnRzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge0FycmF5PFJlc2l6ZU9ic2VydmF0aW9uPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWdpc3RyeSBvZiB0aGUgUmVzaXplT2JzZXJ2YXRpb24gaW5zdGFuY2VzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge01hcDxFbGVtZW50LCBSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfID0gbmV3IE1hcFNoaW0oKTtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjYWxsYmFjayBwcm92aWRlZCBhcyBwYXJhbWV0ZXIgMSBpcyBub3QgYSBmdW5jdGlvbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja18gPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrQ3R4XyA9IGNhbGxiYWNrQ3R4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgb2JzZXJ2aW5nIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIG9ic2VydmVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgY3VycmVudCBlbnZpcm9ubWVudCBkb2Vzbid0IGhhdmUgdGhlIEVsZW1lbnQgaW50ZXJmYWNlLlxyXG4gICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgXCJFbGVtZW50XCIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbnMgPSB0aGlzLm9ic2VydmF0aW9uc187XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBlbGVtZW50IGlzIGFscmVhZHkgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgaWYgKG9ic2VydmF0aW9ucy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmF0aW9ucy5zZXQodGFyZ2V0LCBuZXcgUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5hZGRPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICAvLyBGb3JjZSB0aGUgdXBkYXRlIG9mIG9ic2VydmF0aW9ucy5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlZnJlc2goKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBzdG9wIG9ic2VydmluZy5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgY3VycmVudCBlbnZpcm9ubWVudCBkb2Vzbid0IGhhdmUgdGhlIEVsZW1lbnQgaW50ZXJmYWNlLlxyXG4gICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgXCJFbGVtZW50XCIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbnMgPSB0aGlzLm9ic2VydmF0aW9uc187XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBlbGVtZW50IGlzIG5vdCBiZWluZyBvYnNlcnZlZC5cclxuICAgICAgICBpZiAoIW9ic2VydmF0aW9ucy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmF0aW9ucy5kZWxldGUodGFyZ2V0KTtcclxuICAgICAgICBpZiAoIW9ic2VydmF0aW9ucy5zaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgb2JzZXJ2aW5nIGFsbCBlbGVtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsZWN0cyBvYnNlcnZhdGlvbiBpbnN0YW5jZXMgdGhlIGFzc29jaWF0ZWQgZWxlbWVudCBvZiB3aGljaCBoYXMgY2hhbmdlZFxyXG4gICAgICogaXQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmdhdGhlckFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2YXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmF0aW9uLmlzQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ucHVzaChvYnNlcnZhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZXMgaW5pdGlhbCBjYWxsYmFjayBmdW5jdGlvbiB3aXRoIGEgbGlzdCBvZiBSZXNpemVPYnNlcnZlckVudHJ5XHJcbiAgICAgKiBpbnN0YW5jZXMgY29sbGVjdGVkIGZyb20gYWN0aXZlIHJlc2l6ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5icm9hZGNhc3RBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBvYnNlcnZlciBkb2Vzbid0IGhhdmUgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICBpZiAoIXRoaXMuaGFzQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jYWxsYmFja0N0eF87XHJcbiAgICAgICAgLy8gQ3JlYXRlIFJlc2l6ZU9ic2VydmVyRW50cnkgaW5zdGFuY2UgZm9yIGV2ZXJ5IGFjdGl2ZSBvYnNlcnZhdGlvbi5cclxuICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5tYXAoZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVzaXplT2JzZXJ2ZXJFbnRyeShvYnNlcnZhdGlvbi50YXJnZXQsIG9ic2VydmF0aW9uLmJyb2FkY2FzdFJlY3QoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja18uY2FsbChjdHgsIGVudHJpZXMsIGN0eCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXJzIHRoZSBjb2xsZWN0aW9uIG9mIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5jbGVhckFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18uc3BsaWNlKDApO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVGVsbHMgd2hldGhlciBvYnNlcnZlciBoYXMgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmhhc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLmxlbmd0aCA+IDA7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyU1BJO1xyXG59KCkpO1xuXG4vLyBSZWdpc3RyeSBvZiBpbnRlcm5hbCBvYnNlcnZlcnMuIElmIFdlYWtNYXAgaXMgbm90IGF2YWlsYWJsZSB1c2UgY3VycmVudCBzaGltXHJcbi8vIGZvciB0aGUgTWFwIGNvbGxlY3Rpb24gYXMgaXQgaGFzIGFsbCByZXF1aXJlZCBtZXRob2RzIGFuZCBiZWNhdXNlIFdlYWtNYXBcclxuLy8gY2FuJ3QgYmUgZnVsbHkgcG9seWZpbGxlZCBhbnl3YXkuXHJcbnZhciBvYnNlcnZlcnMgPSB0eXBlb2YgV2Vha01hcCAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgV2Vha01hcCgpIDogbmV3IE1hcFNoaW0oKTtcclxuLyoqXHJcbiAqIFJlc2l6ZU9ic2VydmVyIEFQSS4gRW5jYXBzdWxhdGVzIHRoZSBSZXNpemVPYnNlcnZlciBTUEkgaW1wbGVtZW50YXRpb25cclxuICogZXhwb3Npbmcgb25seSB0aG9zZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGRlZmluZWQgaW4gdGhlIHNwZWMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNhbGxiYWNrfSBjYWxsYmFjayAtIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuXHJcbiAgICAgKiAgICAgIGRpbWVuc2lvbnMgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVzaXplT2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIHRoaXMpO1xyXG4gICAgICAgIG9ic2VydmVycy5zZXQodGhpcywgb2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xyXG59KCkpO1xyXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMgb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbltcclxuICAgICdvYnNlcnZlJyxcclxuICAgICd1bm9ic2VydmUnLFxyXG4gICAgJ2Rpc2Nvbm5lY3QnXHJcbl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XHJcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIChfYSA9IG9ic2VydmVycy5nZXQodGhpcykpW21ldGhvZF0uYXBwbHkoX2EsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59KTtcblxudmFyIGluZGV4ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEV4cG9ydCBleGlzdGluZyBpbXBsZW1lbnRhdGlvbiBpZiBhdmFpbGFibGUuXHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCQxLlJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlcjtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJ1blBhcmFsbGVsXG5cbmZ1bmN0aW9uIHJ1blBhcmFsbGVsICh0YXNrcywgY2IpIHtcbiAgdmFyIHJlc3VsdHMsIHBlbmRpbmcsIGtleXNcbiAgdmFyIGlzU3luYyA9IHRydWVcblxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICByZXN1bHRzID0gW11cbiAgICBwZW5kaW5nID0gdGFza3MubGVuZ3RoXG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHRhc2tzKVxuICAgIHJlc3VsdHMgPSB7fVxuICAgIHBlbmRpbmcgPSBrZXlzLmxlbmd0aFxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZSAoZXJyKSB7XG4gICAgZnVuY3Rpb24gZW5kICgpIHtcbiAgICAgIGlmIChjYikgY2IoZXJyLCByZXN1bHRzKVxuICAgICAgY2IgPSBudWxsXG4gICAgfVxuICAgIGlmIChpc1N5bmMpIHByb2Nlc3MubmV4dFRpY2soZW5kKVxuICAgIGVsc2UgZW5kKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhY2ggKGksIGVyciwgcmVzdWx0KSB7XG4gICAgcmVzdWx0c1tpXSA9IHJlc3VsdFxuICAgIGlmICgtLXBlbmRpbmcgPT09IDAgfHwgZXJyKSB7XG4gICAgICBkb25lKGVycilcbiAgICB9XG4gIH1cblxuICBpZiAoIXBlbmRpbmcpIHtcbiAgICAvLyBlbXB0eVxuICAgIGRvbmUobnVsbClcbiAgfSBlbHNlIGlmIChrZXlzKSB7XG4gICAgLy8gb2JqZWN0XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHRhc2tzW2tleV0oZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7IGVhY2goa2V5LCBlcnIsIHJlc3VsdCkgfSlcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIC8vIGFycmF5XG4gICAgdGFza3MuZm9yRWFjaChmdW5jdGlvbiAodGFzaywgaSkge1xuICAgICAgdGFzayhmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHsgZWFjaChpLCBlcnIsIHJlc3VsdCkgfSlcbiAgICB9KVxuICB9XG5cbiAgaXNTeW5jID0gZmFsc2Vcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qIGpzaGludCBub2RlOiB0cnVlICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICAjIHdpbGRjYXJkXG5cbiAgVmVyeSBzaW1wbGUgd2lsZGNhcmQgbWF0Y2hpbmcsIHdoaWNoIGlzIGRlc2lnbmVkIHRvIHByb3ZpZGUgdGhlIHNhbWVcbiAgZnVuY3Rpb25hbGl0eSB0aGF0IGlzIGZvdW5kIGluIHRoZVxuICBbZXZlXShodHRwczovL2dpdGh1Yi5jb20vYWRvYmUtd2VicGxhdGZvcm0vZXZlKSBldmVudGluZyBsaWJyYXJ5LlxuXG4gICMjIFVzYWdlXG5cbiAgSXQgd29ya3Mgd2l0aCBzdHJpbmdzOlxuXG4gIDw8PCBleGFtcGxlcy9zdHJpbmdzLmpzXG5cbiAgQXJyYXlzOlxuXG4gIDw8PCBleGFtcGxlcy9hcnJheXMuanNcblxuICBPYmplY3RzIChtYXRjaGluZyBhZ2FpbnN0IGtleXMpOlxuXG4gIDw8PCBleGFtcGxlcy9vYmplY3RzLmpzXG5cbiAgV2hpbGUgdGhlIGxpYnJhcnkgd29ya3MgaW4gTm9kZSwgaWYgeW91IGFyZSBhcmUgbG9va2luZyBmb3IgZmlsZS1iYXNlZFxuICB3aWxkY2FyZCBtYXRjaGluZyB0aGVuIHlvdSBzaG91bGQgaGF2ZSBhIGxvb2sgYXQ6XG5cbiAgPGh0dHBzOi8vZ2l0aHViLmNvbS9pc2FhY3Mvbm9kZS1nbG9iPlxuKiovXG5cbmZ1bmN0aW9uIFdpbGRjYXJkTWF0Y2hlcih0ZXh0LCBzZXBhcmF0b3IpIHtcbiAgdGhpcy50ZXh0ID0gdGV4dCA9IHRleHQgfHwgJyc7XG4gIHRoaXMuaGFzV2lsZCA9IH50ZXh0LmluZGV4T2YoJyonKTtcbiAgdGhpcy5zZXBhcmF0b3IgPSBzZXBhcmF0b3I7XG4gIHRoaXMucGFydHMgPSB0ZXh0LnNwbGl0KHNlcGFyYXRvcik7XG59XG5cbldpbGRjYXJkTWF0Y2hlci5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbihpbnB1dCkge1xuICB2YXIgbWF0Y2hlcyA9IHRydWU7XG4gIHZhciBwYXJ0cyA9IHRoaXMucGFydHM7XG4gIHZhciBpaTtcbiAgdmFyIHBhcnRzQ291bnQgPSBwYXJ0cy5sZW5ndGg7XG4gIHZhciB0ZXN0UGFydHM7XG5cbiAgaWYgKHR5cGVvZiBpbnB1dCA9PSAnc3RyaW5nJyB8fCBpbnB1dCBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgIGlmICghdGhpcy5oYXNXaWxkICYmIHRoaXMudGV4dCAhPSBpbnB1dCkge1xuICAgICAgbWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXN0UGFydHMgPSAoaW5wdXQgfHwgJycpLnNwbGl0KHRoaXMuc2VwYXJhdG9yKTtcbiAgICAgIGZvciAoaWkgPSAwOyBtYXRjaGVzICYmIGlpIDwgcGFydHNDb3VudDsgaWkrKykge1xuICAgICAgICBpZiAocGFydHNbaWldID09PSAnKicpICB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaWkgPCB0ZXN0UGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgbWF0Y2hlcyA9IHBhcnRzW2lpXSA9PT0gdGVzdFBhcnRzW2lpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaGVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgbWF0Y2hlcywgdGhlbiByZXR1cm4gdGhlIGNvbXBvbmVudCBwYXJ0c1xuICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMgJiYgdGVzdFBhcnRzO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgaW5wdXQuc3BsaWNlID09ICdmdW5jdGlvbicpIHtcbiAgICBtYXRjaGVzID0gW107XG5cbiAgICBmb3IgKGlpID0gaW5wdXQubGVuZ3RoOyBpaS0tOyApIHtcbiAgICAgIGlmICh0aGlzLm1hdGNoKGlucHV0W2lpXSkpIHtcbiAgICAgICAgbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aF0gPSBpbnB1dFtpaV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PSAnb2JqZWN0Jykge1xuICAgIG1hdGNoZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBpbnB1dCkge1xuICAgICAgaWYgKHRoaXMubWF0Y2goa2V5KSkge1xuICAgICAgICBtYXRjaGVzW2tleV0gPSBpbnB1dFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0ZXh0LCB0ZXN0LCBzZXBhcmF0b3IpIHtcbiAgdmFyIG1hdGNoZXIgPSBuZXcgV2lsZGNhcmRNYXRjaGVyKHRleHQsIHNlcGFyYXRvciB8fCAvW1xcL1xcLl0vKTtcbiAgaWYgKHR5cGVvZiB0ZXN0ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG1hdGNoZXIubWF0Y2godGVzdCk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcjtcbn07XG4iLCJjb25zdCBVcHB5ID0gcmVxdWlyZSgnQHVwcHkvY29yZScpXG5jb25zdCBYSFJVcGxvYWQgPSByZXF1aXJlKCdAdXBweS94aHItdXBsb2FkJylcbmNvbnN0IERhc2hib2FyZCA9IHJlcXVpcmUoJ0B1cHB5L2Rhc2hib2FyZCcpXG5jb25zdCBnZW5lcmF0ZUZpbGVJRCA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9nZW5lcmF0ZUZpbGVJRCcpXG5cbndpbmRvdy51cHB5ID0gIFVwcHkoKVxuLnVzZShEYXNoYm9hcmQsIHtcbiAgaW5saW5lOiB0cnVlLFxuICB0YXJnZXQ6ICcjZHJhZy1kcm9wLWFyZWEnLFxuICBzaG93TGlua1RvRmlsZVVwbG9hZFJlc3VsdDogdHJ1ZVxufSlcbi8vIC51c2UoVXBweS5UdXMsIHtlbmRwb2ludDogJ2h0dHBzOi8vbWFzdGVyLnR1cy5pby9maWxlcy8nfSlcbi51c2UoWEhSVXBsb2FkLCB7XG4gIGVuZHBvaW50OiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXBsb2FkL2RyaXZlL3YzL2ZpbGVzP3VwbG9hZFR5cGU9bWVkaWEnLFxuICBmb3JtRGF0YTogZmFsc2UsXG4gIGhlYWRlcnM6IHtcbiAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuXG4gICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdpbWFnZS9qcGVnJyAvKiBGSVhFRCEgd2l0aCBmaWxlLnhoclVwbG9hZC5oZWFkZXJzIHByb3BlcnR5Li4gOikge2V4aXN0LCBidXQgdW5kb2N1bWVudGVkfSBUTyBETzogRklYIFRISVMhIEl0IGhhcyB0byBiZSBkaWZmZXJlbnQgZm9yIGV2ZXJ5IGRpZmZlcmVudCBmaWxldHlwZSwgc28gaG93PyAqL1xuICB9XG59KVxuLm9uKCd1cGxvYWQtc3VjY2VzcycsIGZ1bmN0aW9uKGZpbGUsIHJlc3BvbnNlLCB1cGxvYWRVUkwpIHtcbiAgY29uc29sZS5sb2coJ0ZpbGUgdXBsb2FkZWQhIE5vdyB1cGRhdGluZyBtZXRhLWRhdGEuLi4nKVxuICAvLyB3ZSBoYXZlIGZpbGUubmFtZSwgcmVzcG9uc2UuaWRcblxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZHJpdmUvdjMvZmlsZXMvJyArIHJlc3BvbnNlLmlkICsgJz9hZGRQYXJlbnRzPScgKyBmb2xkZXJJZDtcblxuICBjb25zdCBmaWxlUmVzID0ge1xuICAgIG5hbWU6IGZpbGUubmFtZVxuICB9XG5cbiAgdXBweS5zZXRGaWxlU3RhdGUoZmlsZS5pZCwge3VwbG9hZFVSTDogYmFzZV91cmwgKyAncGljcy92aWV3ZXIvJyArIHJlc3BvbnNlLmlkfSlcblxuICBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhY2Nlc3NUb2tlbixcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZpbGVSZXMpXG4gIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgIGNvbnNvbGUubG9nKCdGaW5pc2hlZCB1cGRhdGluZyBtZXRhZGF0YSEnLCBqc29uKVxuICB9KVxuXG59KS5vbignZmlsZS1hZGRlZCcsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgY29uc29sZS5sb2coXCJhZGRlZCBmaWxlIG9mIHR5cGU6IFwiLCBmaWxlLnR5cGUpXG4gIGZpbGUueGhyVXBsb2FkLmhlYWRlcnMgPSB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6IGZpbGUudHlwZVxuICB9XG5cbiAgdXBweS5zZXRGaWxlU3RhdGUoZmlsZS5pZCwgZmlsZSlcbn0pXG5cbnVwcHkub24oJ2NvbXBsZXRlJywgKHJlc3VsdCkgPT4ge1xuY29uc29sZS5sb2coJ1VwbG9hZCBjb21wbGV0ZSEgV2XigJl2ZSB1cGxvYWRlZCB0aGVzZSBmaWxlczonLCByZXN1bHQuc3VjY2Vzc2Z1bClcbn0pXG5cbi8vIFNUQVJUIEZJTEUgTElTVElOR1xuXG5sZXQgdXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2RyaXZlL3YzL2ZpbGVzP3E9XFwnJyArIGZvbGRlcklkICsgJ1xcJyBpbiBwYXJlbnRzJztcbnVybCA9IGVuY29kZVVSSSh1cmwpO1xuZmV0Y2godXJsLCB7XG4gIG1ldGhvZDogJ0dFVCcsXG4gIGhlYWRlcnM6IHtcbiAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuXG4gIH1cbn0pXG4udGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4udGhlbiggZnVuY3Rpb24gKGpzb24pIHtcbiAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nLWJsb2NrJykudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgbGV0IGZpbGVQcm9taXNlcyA9IFtdXG4gICAganNvbi5maWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBmaWxlUHJvbWlzZXMucHVzaChcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2RyaXZlL3YzL2ZpbGVzLycgKyBmaWxlLmlkICsgXCI/ZmllbGRzPXRodW1ibmFpbExpbmssbWltZVR5cGUsaWQsbmFtZSxmaWxlRXh0ZW5zaW9uLHNpemUsbW9kaWZpZWRUaW1lXCIsIHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzVG9rZW5cbiAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiBQcm9taXNlLmFsbCggZmlsZVByb21pc2VzIClcbiAgfSlcbi50aGVuKCBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICBsaW5rcyA9IGZpbGVzLm1hcChhID0+IGEudGh1bWJuYWlsTGluaylcbiAgICBjb25zb2xlLmxvZyhcImxpbmtzXCIsIGxpbmtzKVxuXG4gICAgbGV0IGZpbGVzTGlzdCA9IHt9XG4gICAgZmlsZXMuZm9yRWFjaCggKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0ZpbGUgPSB7XG4gICAgICAgIHNvdXJjZTogJycsXG4gICAgICAgIGlkOiBnZW5lcmF0ZUZpbGVJRCh7Li4uZmlsZSwgZGF0YToge3NpemU6IGZpbGUuc2l6ZSwgbGFzdE1vZGlmaWVkOiBmaWxlLm1vZGlmaWVkVGltZX19KSxcbiAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBleHRlbnNpb246IGZpbGUuZmlsZUV4dGVuc2lvbiB8fCAnJyxcbiAgICAgICAgbWV0YTogT2JqZWN0LmFzc2lnbih7fSwgdXBweS5nZXRTdGF0ZSgpLm1ldGEsIHtuYW1lOiBmaWxlLm5hbWUsIHR5cGU6IGZpbGUubWltZVR5cGV9KSxcbiAgICAgICAgdHlwZTogZmlsZS5taW1lVHlwZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNpemU6IHBhcnNlSW50KGZpbGUuc2l6ZSksXG4gICAgICAgICAgbGFzdE1vZGlmaWVkOiBmaWxlLm1vZGlmaWVkVGltZVxuICAgICAgICB9LFxuICAgICAgICBwcm9ncmVzczoge1xuICAgICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcbiAgICAgICAgICBieXRlc1VwbG9hZGVkOiBmaWxlLnNpemUsXG4gICAgICAgICAgYnl0ZXNUb3RhbDogZmlsZS5zaXplIHx8IDAsXG4gICAgICAgICAgdXBsb2FkQ29tcGxldGU6IHRydWUsXG4gICAgICAgICAgdXBsb2FkU3RhcnRlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzaXplOiBmaWxlLnNpemUgfHwgMCxcbiAgICAgICAgLy8gaXNSZW1vdGU6IHRydWUsXG4gICAgICAgIC8vIHJlbW90ZTogZmlsZS5yZW1vdGUgfHwgJycsXG4gICAgICAgIHByZXZpZXc6IGZpbGUudGh1bWJuYWlsTGluayxcbiAgICAgICAgdXBsb2FkVVJMOiBiYXNlX3VybCArICdwaWNzL3ZpZXdlci8nICsgZmlsZS5pZFxuICAgICAgfVxuICAgICAgZmlsZXNMaXN0W25ld0ZpbGUuaWRdID0gbmV3RmlsZVxuICAgIH0pXG5cbiAgICB1cHB5LnNldFN0YXRlKHtcbiAgICAgIGZpbGVzOiB7XG4gICAgICAgIC4uLnVwcHkuZ2V0U3RhdGUoKS5maWxlcyxcbiAgICAgICAgLi4uZmlsZXNMaXN0XG4gICAgICB9XG4gICAgfSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9