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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Translator = __webpack_require__(2);
var ee = __webpack_require__(8);
var cuid = __webpack_require__(9);
// const throttle = require('lodash.throttle')
var prettyBytes = __webpack_require__(5);
var match = __webpack_require__(22);
var DefaultStore = __webpack_require__(24);
var getFileType = __webpack_require__(25);
var getFileNameAndExtension = __webpack_require__(6);
var generateFileID = __webpack_require__(27);
var getTimeStamp = __webpack_require__(28);
var Plugin = __webpack_require__(29); // Exported from here.

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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(3),
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
/* 8 */
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
/* 9 */
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

var fingerprint = __webpack_require__(21);
var pad = __webpack_require__(10);

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
/* 10 */
/***/ (function(module, exports) {

module.exports = function pad (num, size) {
  var s = '000000000' + num;
  return s.substr(s.length - size);
};


/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var getFileTypeIcon = __webpack_require__(7);

var _require = __webpack_require__(0),
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionBrowseTagline = __webpack_require__(50);

var _require = __webpack_require__(3),
    localIcon = _require.localIcon;

var _require2 = __webpack_require__(0),
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
/* 17 */
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
/* 18 */
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
/* 19 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

const Uppy = __webpack_require__(1)
const XHRUpload = __webpack_require__(31)
const Dashboard = __webpack_require__(39)
const generateFileID = __webpack_require__(27)

window.uppy =  Uppy()
.use(Dashboard, {
  inline: true,
  target: '#drag-drop-area'
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

  this.setState({
    files: Object.assign({}, this.getState().files, {
      [fileID]: newFile
    })
  })
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
        preview: file.thumbnailLink
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


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var pad = __webpack_require__(10);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var wildcard = __webpack_require__(23);
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var getFileNameAndExtension = __webpack_require__(6);
var mimeTypes = __webpack_require__(26);

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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var preact = __webpack_require__(0);
var findDOMElement = __webpack_require__(30);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isDOMElement = __webpack_require__(11);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(1),
    Plugin = _require.Plugin;

var cuid = __webpack_require__(9);
var Translator = __webpack_require__(2);

var _require2 = __webpack_require__(32),
    Provider = _require2.Provider,
    Socket = _require2.Socket;

var emitSocketProgress = __webpack_require__(35);
var getSocketHost = __webpack_require__(36);
var settle = __webpack_require__(37);
var limitPromises = __webpack_require__(38);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

'use-strict';
/**
 * Manages communications with Companion
 */

var RequestClient = __webpack_require__(12);
var Provider = __webpack_require__(33);
var Socket = __webpack_require__(34);

module.exports = {
  RequestClient: RequestClient,
  Provider: Provider,
  Socket: Socket
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequestClient = __webpack_require__(12);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ee = __webpack_require__(8);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var throttle = __webpack_require__(13);

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
/* 36 */
/***/ (function(module, exports) {

module.exports = function getSocketHost(url) {
  // get the host domain
  var regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/;
  var host = regex.exec(url)[1];
  var socketProtocol = location.protocol === 'https:' ? 'wss' : 'ws';

  return socketProtocol + '://' + host;
};

/***/ }),
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(1),
    Plugin = _require.Plugin;

var Translator = __webpack_require__(2);
var dragDrop = __webpack_require__(40);
var DashboardUI = __webpack_require__(44);
var StatusBar = __webpack_require__(57);
var Informer = __webpack_require__(63);
var ThumbnailGenerator = __webpack_require__(64);
var findAllDOMElements = __webpack_require__(68);
var toArray = __webpack_require__(69);
// const prettyBytes = require('prettier-bytes')
var ResizeObserver = __webpack_require__(19).default || __webpack_require__(19);

var _require2 = __webpack_require__(3),
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = dragDrop

var flatten = __webpack_require__(41)
var parallel = __webpack_require__(42)

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
/* 41 */
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
/* 42 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43)))

/***/ }),
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FileList = __webpack_require__(45);
var AddFiles = __webpack_require__(16);
var AddFilesPanel = __webpack_require__(51);
var PanelContent = __webpack_require__(52);
var PanelTopBar = __webpack_require__(53);
var FileCard = __webpack_require__(54);
var classNames = __webpack_require__(4);
var isTouchDevice = __webpack_require__(55);

var _require = __webpack_require__(0),
    h = _require.h;

var PreactCSSTransitionGroup = __webpack_require__(56);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FileItem = __webpack_require__(46);
var classNames = __webpack_require__(4);

var _require = __webpack_require__(0),
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getFileNameAndExtension = __webpack_require__(6);
var truncateString = __webpack_require__(47);
var copyToClipboard = __webpack_require__(48);
var prettyBytes = __webpack_require__(5);
var FileItemProgress = __webpack_require__(49);
var getFileTypeIcon = __webpack_require__(7);
var FilePreview = __webpack_require__(15);

var _require = __webpack_require__(3),
    iconCopy = _require.iconCopy,
    iconRetry = _require.iconRetry;

var classNames = __webpack_require__(4);

var _require2 = __webpack_require__(0),
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
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(0),
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    h = _require.h;

var AddFiles = __webpack_require__(16);

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    h = _require.h;

var ignoreEvent = __webpack_require__(17);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFileTypeIcon = __webpack_require__(7);
var FilePreview = __webpack_require__(15);
var ignoreEvent = __webpack_require__(17);

var _require = __webpack_require__(0),
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
/* 55 */
/***/ (function(module, exports) {

module.exports = function isTouchDevice() {
  return 'ontouchstart' in window || // works on most browsers
  navigator.maxTouchPoints; // works on IE10/11 and Surface
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(0)) :
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(1),
    Plugin = _require.Plugin;

var Translator = __webpack_require__(2);
var StatusBarUI = __webpack_require__(58);
var statusBarStates = __webpack_require__(18);
var getSpeed = __webpack_require__(61);
var getBytesRemaining = __webpack_require__(62);

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var throttle = __webpack_require__(13);
var classNames = __webpack_require__(4);
var statusBarStates = __webpack_require__(18);
var prettyBytes = __webpack_require__(5);
var prettyETA = __webpack_require__(59);

var _require = __webpack_require__(0),
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var secondsToTime = __webpack_require__(60);

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
/* 60 */
/***/ (function(module, exports) {

module.exports = function secondsToTime(rawSeconds) {
  var hours = Math.floor(rawSeconds / 3600) % 24;
  var minutes = Math.floor(rawSeconds / 60) % 60;
  var seconds = Math.floor(rawSeconds % 60);

  return { hours: hours, minutes: minutes, seconds: seconds };
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function getSpeed(fileProgress) {
  if (!fileProgress.bytesUploaded) return 0;

  var timeElapsed = new Date() - fileProgress.uploadStarted;
  var uploadSpeed = fileProgress.bytesUploaded / (timeElapsed / 1000);
  return uploadSpeed;
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function getBytesRemaining(fileProgress) {
  return fileProgress.bytesTotal - fileProgress.bytesUploaded;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(1),
    Plugin = _require.Plugin;

var _require2 = __webpack_require__(0),
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(1),
    Plugin = _require.Plugin;

var dataURItoBlob = __webpack_require__(65);
var isObjectURL = __webpack_require__(66);
var isPreviewSupported = __webpack_require__(67);

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
/* 65 */
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
/* 66 */
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
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isDOMElement = __webpack_require__(11);

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
/* 69 */
/***/ (function(module, exports) {

/**
 * Converts list into array
*/
module.exports = function toArray(list) {
  return Array.prototype.slice.call(list || [], 0);
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2NvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvVHJhbnNsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi9jb21wb25lbnRzL2ljb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmV0dGllci1ieXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2dldEZpbGVOYW1lQW5kRXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL3V0aWxzL2dldEZpbGVUeXBlSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmFtZXNwYWNlLWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1aWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1aWQvbGliL3BhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2lzRE9NRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvY29tcGFuaW9uLWNsaWVudC9saWIvUmVxdWVzdENsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLnRocm90dGxlL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2Rhc2hib2FyZC9saWIvY29tcG9uZW50cy9GaWxlUHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi9jb21wb25lbnRzL0FkZEZpbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL3V0aWxzL2lnbm9yZUV2ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9zdGF0dXMtYmFyL2xpYi9TdGF0dXNCYXJTdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbC9kaXN0L1Jlc2l6ZU9ic2VydmVyLmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3VpZC9saWIvZmluZ2VycHJpbnQuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWltZS1tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2lsZGNhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3N0b3JlLWRlZmF1bHQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvZ2V0RmlsZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9taW1lVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9nZW5lcmF0ZUZpbGVJRC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2dldFRpbWVTdGFtcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvY29yZS9saWIvUGx1Z2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvZmluZERPTUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3hoci11cGxvYWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9jb21wYW5pb24tY2xpZW50L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvY29tcGFuaW9uLWNsaWVudC9saWIvUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2NvbXBhbmlvbi1jbGllbnQvbGliL1NvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2VtaXRTb2NrZXRQcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2dldFNvY2tldEhvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9saW1pdFByb21pc2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kcmFnLWRyb3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXR0ZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J1bi1wYXJhbGxlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL2NvbXBvbmVudHMvRmlsZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2Rhc2hib2FyZC9saWIvY29tcG9uZW50cy9GaWxlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi91dGlscy90cnVuY2F0ZVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi91dGlscy9jb3B5VG9DbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2Rhc2hib2FyZC9saWIvY29tcG9uZW50cy9GaWxlSXRlbVByb2dyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9kYXNoYm9hcmQvbGliL2NvbXBvbmVudHMvQWN0aW9uQnJvd3NlVGFnbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi9jb21wb25lbnRzL0FkZEZpbGVzUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2Rhc2hib2FyZC9saWIvY29tcG9uZW50cy9QYW5lbENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2Rhc2hib2FyZC9saWIvY29tcG9uZW50cy9QYW5lbFRvcEJhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvZGFzaGJvYXJkL2xpYi9jb21wb25lbnRzL0ZpbGVDYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvaXNUb3VjaERldmljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0LWNzcy10cmFuc2l0aW9uLWdyb3VwL2Rpc3QvcHJlYWN0LWNzcy10cmFuc2l0aW9uLWdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS9zdGF0dXMtYmFyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvc3RhdHVzLWJhci9saWIvU3RhdHVzQmFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvcHJldHR5RVRBLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvc2Vjb25kc1RvVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdXRpbHMvbGliL2dldFNwZWVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvZ2V0Qnl0ZXNSZW1haW5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L2luZm9ybWVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVwcHkvdGh1bWJuYWlsLWdlbmVyYXRvci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9kYXRhVVJJdG9CbG9iLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdXBweS91dGlscy9saWIvaXNPYmplY3RVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9pc1ByZXZpZXdTdXBwb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi9maW5kQWxsRE9NRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1cHB5L3V0aWxzL2xpYi90b0FycmF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSztBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esa0NBQWtDLDBEQUEwRDtBQUM1Rjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLEVBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0Esc0ZBQXNGO0FBQ3RGLEdBQUc7QUFDSCwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsS0FBSztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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O0FBQ3BDLFNBQVM7QUFDVDtBQUNBLHNCQUFzQixZQUFZLGFBQWEsT0FBTztBQUN0RCxzQkFBc0IsWUFBWSxjQUFjLE9BQU87QUFDdkQ7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHdCQUF3Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxrSkFBa0o7QUFDbEo7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWlFLGFBQWE7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFD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QUFDQTtBQUNBLCtEQUErRCxpQkFBaUI7QUFDaEY7O0FBRUEsNENBQTRDLGlCQUFpQjtBQUM3RCxFOzs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDUkEsb0dBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRLG1CQUFtQixtQkFBTyxDQUFDLEVBQWdCOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMCk7XG4iLCJ2YXIgVk5vZGUgPSBmdW5jdGlvbiBWTm9kZSgpIHt9O1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG52YXIgc3RhY2sgPSBbXTtcblxudmFyIEVNUFRZX0NISUxEUkVOID0gW107XG5cbmZ1bmN0aW9uIGgobm9kZU5hbWUsIGF0dHJpYnV0ZXMpIHtcblx0dmFyIGNoaWxkcmVuID0gRU1QVFlfQ0hJTERSRU4sXG5cdCAgICBsYXN0U2ltcGxlLFxuXHQgICAgY2hpbGQsXG5cdCAgICBzaW1wbGUsXG5cdCAgICBpO1xuXHRmb3IgKGkgPSBhcmd1bWVudHMubGVuZ3RoOyBpLS0gPiAyOykge1xuXHRcdHN0YWNrLnB1c2goYXJndW1lbnRzW2ldKTtcblx0fVxuXHRpZiAoYXR0cmlidXRlcyAmJiBhdHRyaWJ1dGVzLmNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRpZiAoIXN0YWNrLmxlbmd0aCkgc3RhY2sucHVzaChhdHRyaWJ1dGVzLmNoaWxkcmVuKTtcblx0XHRkZWxldGUgYXR0cmlidXRlcy5jaGlsZHJlbjtcblx0fVxuXHR3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG5cdFx0aWYgKChjaGlsZCA9IHN0YWNrLnBvcCgpKSAmJiBjaGlsZC5wb3AgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Zm9yIChpID0gY2hpbGQubGVuZ3RoOyBpLS07KSB7XG5cdFx0XHRcdHN0YWNrLnB1c2goY2hpbGRbaV0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIGNoaWxkID09PSAnYm9vbGVhbicpIGNoaWxkID0gbnVsbDtcblxuXHRcdFx0aWYgKHNpbXBsZSA9IHR5cGVvZiBub2RlTmFtZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpZiAoY2hpbGQgPT0gbnVsbCkgY2hpbGQgPSAnJztlbHNlIGlmICh0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSBjaGlsZCA9IFN0cmluZyhjaGlsZCk7ZWxzZSBpZiAodHlwZW9mIGNoaWxkICE9PSAnc3RyaW5nJykgc2ltcGxlID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzaW1wbGUgJiYgbGFzdFNpbXBsZSkge1xuXHRcdFx0XHRjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXSArPSBjaGlsZDtcblx0XHRcdH0gZWxzZSBpZiAoY2hpbGRyZW4gPT09IEVNUFRZX0NISUxEUkVOKSB7XG5cdFx0XHRcdGNoaWxkcmVuID0gW2NoaWxkXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHRcdFx0fVxuXG5cdFx0XHRsYXN0U2ltcGxlID0gc2ltcGxlO1xuXHRcdH1cblx0fVxuXG5cdHZhciBwID0gbmV3IFZOb2RlKCk7XG5cdHAubm9kZU5hbWUgPSBub2RlTmFtZTtcblx0cC5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHRwLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzID09IG51bGwgPyB1bmRlZmluZWQgOiBhdHRyaWJ1dGVzO1xuXHRwLmtleSA9IGF0dHJpYnV0ZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGF0dHJpYnV0ZXMua2V5O1xuXG5cdGlmIChvcHRpb25zLnZub2RlICE9PSB1bmRlZmluZWQpIG9wdGlvbnMudm5vZGUocCk7XG5cblx0cmV0dXJuIHA7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZChvYmosIHByb3BzKSB7XG4gIGZvciAodmFyIGkgaW4gcHJvcHMpIHtcbiAgICBvYmpbaV0gPSBwcm9wc1tpXTtcbiAgfXJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGFwcGx5UmVmKHJlZiwgdmFsdWUpIHtcbiAgaWYgKHJlZiAhPSBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT0gJ2Z1bmN0aW9uJykgcmVmKHZhbHVlKTtlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH1cbn1cblxudmFyIGRlZmVyID0gdHlwZW9mIFByb21pc2UgPT0gJ2Z1bmN0aW9uJyA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSkgOiBzZXRUaW1lb3V0O1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQodm5vZGUsIHByb3BzKSB7XG4gIHJldHVybiBoKHZub2RlLm5vZGVOYW1lLCBleHRlbmQoZXh0ZW5kKHt9LCB2bm9kZS5hdHRyaWJ1dGVzKSwgcHJvcHMpLCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHZub2RlLmNoaWxkcmVuKTtcbn1cblxudmFyIElTX05PTl9ESU1FTlNJT05BTCA9IC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZC9pO1xuXG52YXIgaXRlbXMgPSBbXTtcblxuZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjb21wb25lbnQpIHtcblx0aWYgKCFjb21wb25lbnQuX2RpcnR5ICYmIChjb21wb25lbnQuX2RpcnR5ID0gdHJ1ZSkgJiYgaXRlbXMucHVzaChjb21wb25lbnQpID09IDEpIHtcblx0XHQob3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyB8fCBkZWZlcikocmVyZW5kZXIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlcmVuZGVyKCkge1xuXHR2YXIgcDtcblx0d2hpbGUgKHAgPSBpdGVtcy5wb3AoKSkge1xuXHRcdGlmIChwLl9kaXJ0eSkgcmVuZGVyQ29tcG9uZW50KHApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGlzU2FtZU5vZGVUeXBlKG5vZGUsIHZub2RlLCBoeWRyYXRpbmcpIHtcblx0aWYgKHR5cGVvZiB2bm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZub2RlID09PSAnbnVtYmVyJykge1xuXHRcdHJldHVybiBub2RlLnNwbGl0VGV4dCAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cdGlmICh0eXBlb2Ygdm5vZGUubm9kZU5hbWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuICFub2RlLl9jb21wb25lbnRDb25zdHJ1Y3RvciAmJiBpc05hbWVkTm9kZShub2RlLCB2bm9kZS5ub2RlTmFtZSk7XG5cdH1cblx0cmV0dXJuIGh5ZHJhdGluZyB8fCBub2RlLl9jb21wb25lbnRDb25zdHJ1Y3RvciA9PT0gdm5vZGUubm9kZU5hbWU7XG59XG5cbmZ1bmN0aW9uIGlzTmFtZWROb2RlKG5vZGUsIG5vZGVOYW1lKSB7XG5cdHJldHVybiBub2RlLm5vcm1hbGl6ZWROb2RlTmFtZSA9PT0gbm9kZU5hbWUgfHwgbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBnZXROb2RlUHJvcHModm5vZGUpIHtcblx0dmFyIHByb3BzID0gZXh0ZW5kKHt9LCB2bm9kZS5hdHRyaWJ1dGVzKTtcblx0cHJvcHMuY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcblxuXHR2YXIgZGVmYXVsdFByb3BzID0gdm5vZGUubm9kZU5hbWUuZGVmYXVsdFByb3BzO1xuXHRpZiAoZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcblx0XHRmb3IgKHZhciBpIGluIGRlZmF1bHRQcm9wcykge1xuXHRcdFx0aWYgKHByb3BzW2ldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cHJvcHNbaV0gPSBkZWZhdWx0UHJvcHNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHByb3BzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb2RlKG5vZGVOYW1lLCBpc1N2Zykge1xuXHR2YXIgbm9kZSA9IGlzU3ZnID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5vZGVOYW1lKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuXHRub2RlLm5vcm1hbGl6ZWROb2RlTmFtZSA9IG5vZGVOYW1lO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG5cdHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gc2V0QWNjZXNzb3Iobm9kZSwgbmFtZSwgb2xkLCB2YWx1ZSwgaXNTdmcpIHtcblx0aWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSBuYW1lID0gJ2NsYXNzJztcblxuXHRpZiAobmFtZSA9PT0gJ2tleScpIHt9IGVsc2UgaWYgKG5hbWUgPT09ICdyZWYnKSB7XG5cdFx0YXBwbHlSZWYob2xkLCBudWxsKTtcblx0XHRhcHBseVJlZih2YWx1ZSwgbm9kZSk7XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NsYXNzJyAmJiAhaXNTdmcpIHtcblx0XHRub2RlLmNsYXNzTmFtZSA9IHZhbHVlIHx8ICcnO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICdzdHlsZScpIHtcblx0XHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG9sZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdG5vZGUuc3R5bGUuY3NzVGV4dCA9IHZhbHVlIHx8ICcnO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGQgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gb2xkKSB7XG5cdFx0XHRcdFx0aWYgKCEoaSBpbiB2YWx1ZSkpIG5vZGUuc3R5bGVbaV0gPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRub2RlLnN0eWxlW2ldID0gdHlwZW9mIHZhbHVlW2ldID09PSAnbnVtYmVyJyAmJiBJU19OT05fRElNRU5TSU9OQUwudGVzdChpKSA9PT0gZmFsc2UgPyB2YWx1ZVtpXSArICdweCcgOiB2YWx1ZVtpXTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdGlmICh2YWx1ZSkgbm9kZS5pbm5lckhUTUwgPSB2YWx1ZS5fX2h0bWwgfHwgJyc7XG5cdH0gZWxzZSBpZiAobmFtZVswXSA9PSAnbycgJiYgbmFtZVsxXSA9PSAnbicpIHtcblx0XHR2YXIgdXNlQ2FwdHVyZSA9IG5hbWUgIT09IChuYW1lID0gbmFtZS5yZXBsYWNlKC9DYXB0dXJlJC8sICcnKSk7XG5cdFx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMik7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRpZiAoIW9sZCkgbm9kZS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50UHJveHksIHVzZUNhcHR1cmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSwgdXNlQ2FwdHVyZSk7XG5cdFx0fVxuXHRcdChub2RlLl9saXN0ZW5lcnMgfHwgKG5vZGUuX2xpc3RlbmVycyA9IHt9KSlbbmFtZV0gPSB2YWx1ZTtcblx0fSBlbHNlIGlmIChuYW1lICE9PSAnbGlzdCcgJiYgbmFtZSAhPT0gJ3R5cGUnICYmICFpc1N2ZyAmJiBuYW1lIGluIG5vZGUpIHtcblx0XHR0cnkge1xuXHRcdFx0bm9kZVtuYW1lXSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0aWYgKCh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkgJiYgbmFtZSAhPSAnc3BlbGxjaGVjaycpIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBucyA9IGlzU3ZnICYmIG5hbWUgIT09IChuYW1lID0gbmFtZS5yZXBsYWNlKC9eeGxpbms6Py8sICcnKSk7XG5cblx0XHRpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdGlmIChucykgbm9kZS5yZW1vdmVBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIG5hbWUudG9Mb3dlckNhc2UoKSk7ZWxzZSBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0aWYgKG5zKSBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgbmFtZS50b0xvd2VyQ2FzZSgpLCB2YWx1ZSk7ZWxzZSBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGV2ZW50UHJveHkoZSkge1xuXHRyZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2UudHlwZV0ob3B0aW9ucy5ldmVudCAmJiBvcHRpb25zLmV2ZW50KGUpIHx8IGUpO1xufVxuXG52YXIgbW91bnRzID0gW107XG5cbnZhciBkaWZmTGV2ZWwgPSAwO1xuXG52YXIgaXNTdmdNb2RlID0gZmFsc2U7XG5cbnZhciBoeWRyYXRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hNb3VudHMoKSB7XG5cdHZhciBjO1xuXHR3aGlsZSAoYyA9IG1vdW50cy5zaGlmdCgpKSB7XG5cdFx0aWYgKG9wdGlvbnMuYWZ0ZXJNb3VudCkgb3B0aW9ucy5hZnRlck1vdW50KGMpO1xuXHRcdGlmIChjLmNvbXBvbmVudERpZE1vdW50KSBjLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGlmZihkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCwgcGFyZW50LCBjb21wb25lbnRSb290KSB7XG5cdGlmICghZGlmZkxldmVsKyspIHtcblx0XHRpc1N2Z01vZGUgPSBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQub3duZXJTVkdFbGVtZW50ICE9PSB1bmRlZmluZWQ7XG5cblx0XHRoeWRyYXRpbmcgPSBkb20gIT0gbnVsbCAmJiAhKCdfX3ByZWFjdGF0dHJfJyBpbiBkb20pO1xuXHR9XG5cblx0dmFyIHJldCA9IGlkaWZmKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsLCBjb21wb25lbnRSb290KTtcblxuXHRpZiAocGFyZW50ICYmIHJldC5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHBhcmVudC5hcHBlbmRDaGlsZChyZXQpO1xuXG5cdGlmICghIC0tZGlmZkxldmVsKSB7XG5cdFx0aHlkcmF0aW5nID0gZmFsc2U7XG5cblx0XHRpZiAoIWNvbXBvbmVudFJvb3QpIGZsdXNoTW91bnRzKCk7XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBpZGlmZihkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCwgY29tcG9uZW50Um9vdCkge1xuXHR2YXIgb3V0ID0gZG9tLFxuXHQgICAgcHJldlN2Z01vZGUgPSBpc1N2Z01vZGU7XG5cblx0aWYgKHZub2RlID09IG51bGwgfHwgdHlwZW9mIHZub2RlID09PSAnYm9vbGVhbicpIHZub2RlID0gJyc7XG5cblx0aWYgKHR5cGVvZiB2bm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZub2RlID09PSAnbnVtYmVyJykge1xuXHRcdGlmIChkb20gJiYgZG9tLnNwbGl0VGV4dCAhPT0gdW5kZWZpbmVkICYmIGRvbS5wYXJlbnROb2RlICYmICghZG9tLl9jb21wb25lbnQgfHwgY29tcG9uZW50Um9vdCkpIHtcblx0XHRcdGlmIChkb20ubm9kZVZhbHVlICE9IHZub2RlKSB7XG5cdFx0XHRcdGRvbS5ub2RlVmFsdWUgPSB2bm9kZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0b3V0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodm5vZGUpO1xuXHRcdFx0aWYgKGRvbSkge1xuXHRcdFx0XHRpZiAoZG9tLnBhcmVudE5vZGUpIGRvbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChvdXQsIGRvbSk7XG5cdFx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKGRvbSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0b3V0WydfX3ByZWFjdGF0dHJfJ10gPSB0cnVlO1xuXG5cdFx0cmV0dXJuIG91dDtcblx0fVxuXG5cdHZhciB2bm9kZU5hbWUgPSB2bm9kZS5ub2RlTmFtZTtcblx0aWYgKHR5cGVvZiB2bm9kZU5hbWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gYnVpbGRDb21wb25lbnRGcm9tVk5vZGUoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwpO1xuXHR9XG5cblx0aXNTdmdNb2RlID0gdm5vZGVOYW1lID09PSAnc3ZnJyA/IHRydWUgOiB2bm9kZU5hbWUgPT09ICdmb3JlaWduT2JqZWN0JyA/IGZhbHNlIDogaXNTdmdNb2RlO1xuXG5cdHZub2RlTmFtZSA9IFN0cmluZyh2bm9kZU5hbWUpO1xuXHRpZiAoIWRvbSB8fCAhaXNOYW1lZE5vZGUoZG9tLCB2bm9kZU5hbWUpKSB7XG5cdFx0b3V0ID0gY3JlYXRlTm9kZSh2bm9kZU5hbWUsIGlzU3ZnTW9kZSk7XG5cblx0XHRpZiAoZG9tKSB7XG5cdFx0XHR3aGlsZSAoZG9tLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0b3V0LmFwcGVuZENoaWxkKGRvbS5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdGlmIChkb20ucGFyZW50Tm9kZSkgZG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG91dCwgZG9tKTtcblxuXHRcdFx0cmVjb2xsZWN0Tm9kZVRyZWUoZG9tLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHR2YXIgZmMgPSBvdXQuZmlyc3RDaGlsZCxcblx0ICAgIHByb3BzID0gb3V0WydfX3ByZWFjdGF0dHJfJ10sXG5cdCAgICB2Y2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcblxuXHRpZiAocHJvcHMgPT0gbnVsbCkge1xuXHRcdHByb3BzID0gb3V0WydfX3ByZWFjdGF0dHJfJ10gPSB7fTtcblx0XHRmb3IgKHZhciBhID0gb3V0LmF0dHJpYnV0ZXMsIGkgPSBhLmxlbmd0aDsgaS0tOykge1xuXHRcdFx0cHJvcHNbYVtpXS5uYW1lXSA9IGFbaV0udmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFoeWRyYXRpbmcgJiYgdmNoaWxkcmVuICYmIHZjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHZjaGlsZHJlblswXSA9PT0gJ3N0cmluZycgJiYgZmMgIT0gbnVsbCAmJiBmYy5zcGxpdFRleHQgIT09IHVuZGVmaW5lZCAmJiBmYy5uZXh0U2libGluZyA9PSBudWxsKSB7XG5cdFx0aWYgKGZjLm5vZGVWYWx1ZSAhPSB2Y2hpbGRyZW5bMF0pIHtcblx0XHRcdGZjLm5vZGVWYWx1ZSA9IHZjaGlsZHJlblswXTtcblx0XHR9XG5cdH0gZWxzZSBpZiAodmNoaWxkcmVuICYmIHZjaGlsZHJlbi5sZW5ndGggfHwgZmMgIT0gbnVsbCkge1xuXHRcdFx0aW5uZXJEaWZmTm9kZShvdXQsIHZjaGlsZHJlbiwgY29udGV4dCwgbW91bnRBbGwsIGh5ZHJhdGluZyB8fCBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAhPSBudWxsKTtcblx0XHR9XG5cblx0ZGlmZkF0dHJpYnV0ZXMob3V0LCB2bm9kZS5hdHRyaWJ1dGVzLCBwcm9wcyk7XG5cblx0aXNTdmdNb2RlID0gcHJldlN2Z01vZGU7XG5cblx0cmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gaW5uZXJEaWZmTm9kZShkb20sIHZjaGlsZHJlbiwgY29udGV4dCwgbW91bnRBbGwsIGlzSHlkcmF0aW5nKSB7XG5cdHZhciBvcmlnaW5hbENoaWxkcmVuID0gZG9tLmNoaWxkTm9kZXMsXG5cdCAgICBjaGlsZHJlbiA9IFtdLFxuXHQgICAga2V5ZWQgPSB7fSxcblx0ICAgIGtleWVkTGVuID0gMCxcblx0ICAgIG1pbiA9IDAsXG5cdCAgICBsZW4gPSBvcmlnaW5hbENoaWxkcmVuLmxlbmd0aCxcblx0ICAgIGNoaWxkcmVuTGVuID0gMCxcblx0ICAgIHZsZW4gPSB2Y2hpbGRyZW4gPyB2Y2hpbGRyZW4ubGVuZ3RoIDogMCxcblx0ICAgIGosXG5cdCAgICBjLFxuXHQgICAgZixcblx0ICAgIHZjaGlsZCxcblx0ICAgIGNoaWxkO1xuXG5cdGlmIChsZW4gIT09IDApIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgX2NoaWxkID0gb3JpZ2luYWxDaGlsZHJlbltpXSxcblx0XHRcdCAgICBwcm9wcyA9IF9jaGlsZFsnX19wcmVhY3RhdHRyXyddLFxuXHRcdFx0ICAgIGtleSA9IHZsZW4gJiYgcHJvcHMgPyBfY2hpbGQuX2NvbXBvbmVudCA/IF9jaGlsZC5fY29tcG9uZW50Ll9fa2V5IDogcHJvcHMua2V5IDogbnVsbDtcblx0XHRcdGlmIChrZXkgIT0gbnVsbCkge1xuXHRcdFx0XHRrZXllZExlbisrO1xuXHRcdFx0XHRrZXllZFtrZXldID0gX2NoaWxkO1xuXHRcdFx0fSBlbHNlIGlmIChwcm9wcyB8fCAoX2NoaWxkLnNwbGl0VGV4dCAhPT0gdW5kZWZpbmVkID8gaXNIeWRyYXRpbmcgPyBfY2hpbGQubm9kZVZhbHVlLnRyaW0oKSA6IHRydWUgOiBpc0h5ZHJhdGluZykpIHtcblx0XHRcdFx0Y2hpbGRyZW5bY2hpbGRyZW5MZW4rK10gPSBfY2hpbGQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKHZsZW4gIT09IDApIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZsZW47IGkrKykge1xuXHRcdFx0dmNoaWxkID0gdmNoaWxkcmVuW2ldO1xuXHRcdFx0Y2hpbGQgPSBudWxsO1xuXG5cdFx0XHR2YXIga2V5ID0gdmNoaWxkLmtleTtcblx0XHRcdGlmIChrZXkgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoa2V5ZWRMZW4gJiYga2V5ZWRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0Y2hpbGQgPSBrZXllZFtrZXldO1xuXHRcdFx0XHRcdGtleWVkW2tleV0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0a2V5ZWRMZW4tLTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChtaW4gPCBjaGlsZHJlbkxlbikge1xuXHRcdFx0XHRcdGZvciAoaiA9IG1pbjsgaiA8IGNoaWxkcmVuTGVuOyBqKyspIHtcblx0XHRcdFx0XHRcdGlmIChjaGlsZHJlbltqXSAhPT0gdW5kZWZpbmVkICYmIGlzU2FtZU5vZGVUeXBlKGMgPSBjaGlsZHJlbltqXSwgdmNoaWxkLCBpc0h5ZHJhdGluZykpIHtcblx0XHRcdFx0XHRcdFx0Y2hpbGQgPSBjO1xuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbltqXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYgKGogPT09IGNoaWxkcmVuTGVuIC0gMSkgY2hpbGRyZW5MZW4tLTtcblx0XHRcdFx0XHRcdFx0aWYgKGogPT09IG1pbikgbWluKys7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRjaGlsZCA9IGlkaWZmKGNoaWxkLCB2Y2hpbGQsIGNvbnRleHQsIG1vdW50QWxsKTtcblxuXHRcdFx0ZiA9IG9yaWdpbmFsQ2hpbGRyZW5baV07XG5cdFx0XHRpZiAoY2hpbGQgJiYgY2hpbGQgIT09IGRvbSAmJiBjaGlsZCAhPT0gZikge1xuXHRcdFx0XHRpZiAoZiA9PSBudWxsKSB7XG5cdFx0XHRcdFx0ZG9tLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdFx0fSBlbHNlIGlmIChjaGlsZCA9PT0gZi5uZXh0U2libGluZykge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZG9tLmluc2VydEJlZm9yZShjaGlsZCwgZik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoa2V5ZWRMZW4pIHtcblx0XHRmb3IgKHZhciBpIGluIGtleWVkKSB7XG5cdFx0XHRpZiAoa2V5ZWRbaV0gIT09IHVuZGVmaW5lZCkgcmVjb2xsZWN0Tm9kZVRyZWUoa2V5ZWRbaV0sIGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHR3aGlsZSAobWluIDw9IGNoaWxkcmVuTGVuKSB7XG5cdFx0aWYgKChjaGlsZCA9IGNoaWxkcmVuW2NoaWxkcmVuTGVuLS1dKSAhPT0gdW5kZWZpbmVkKSByZWNvbGxlY3ROb2RlVHJlZShjaGlsZCwgZmFsc2UpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlY29sbGVjdE5vZGVUcmVlKG5vZGUsIHVubW91bnRPbmx5KSB7XG5cdHZhciBjb21wb25lbnQgPSBub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjb21wb25lbnQpIHtcblx0XHR1bm1vdW50Q29tcG9uZW50KGNvbXBvbmVudCk7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG5vZGVbJ19fcHJlYWN0YXR0cl8nXSAhPSBudWxsKSBhcHBseVJlZihub2RlWydfX3ByZWFjdGF0dHJfJ10ucmVmLCBudWxsKTtcblxuXHRcdGlmICh1bm1vdW50T25seSA9PT0gZmFsc2UgfHwgbm9kZVsnX19wcmVhY3RhdHRyXyddID09IG51bGwpIHtcblx0XHRcdHJlbW92ZU5vZGUobm9kZSk7XG5cdFx0fVxuXG5cdFx0cmVtb3ZlQ2hpbGRyZW4obm9kZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4obm9kZSkge1xuXHRub2RlID0gbm9kZS5sYXN0Q2hpbGQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0dmFyIG5leHQgPSBub2RlLnByZXZpb3VzU2libGluZztcblx0XHRyZWNvbGxlY3ROb2RlVHJlZShub2RlLCB0cnVlKTtcblx0XHRub2RlID0gbmV4dDtcblx0fVxufVxuXG5mdW5jdGlvbiBkaWZmQXR0cmlidXRlcyhkb20sIGF0dHJzLCBvbGQpIHtcblx0dmFyIG5hbWU7XG5cblx0Zm9yIChuYW1lIGluIG9sZCkge1xuXHRcdGlmICghKGF0dHJzICYmIGF0dHJzW25hbWVdICE9IG51bGwpICYmIG9sZFtuYW1lXSAhPSBudWxsKSB7XG5cdFx0XHRzZXRBY2Nlc3Nvcihkb20sIG5hbWUsIG9sZFtuYW1lXSwgb2xkW25hbWVdID0gdW5kZWZpbmVkLCBpc1N2Z01vZGUpO1xuXHRcdH1cblx0fVxuXG5cdGZvciAobmFtZSBpbiBhdHRycykge1xuXHRcdGlmIChuYW1lICE9PSAnY2hpbGRyZW4nICYmIG5hbWUgIT09ICdpbm5lckhUTUwnICYmICghKG5hbWUgaW4gb2xkKSB8fCBhdHRyc1tuYW1lXSAhPT0gKG5hbWUgPT09ICd2YWx1ZScgfHwgbmFtZSA9PT0gJ2NoZWNrZWQnID8gZG9tW25hbWVdIDogb2xkW25hbWVdKSkpIHtcblx0XHRcdHNldEFjY2Vzc29yKGRvbSwgbmFtZSwgb2xkW25hbWVdLCBvbGRbbmFtZV0gPSBhdHRyc1tuYW1lXSwgaXNTdmdNb2RlKTtcblx0XHR9XG5cdH1cbn1cblxudmFyIHJlY3ljbGVyQ29tcG9uZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQoQ3RvciwgcHJvcHMsIGNvbnRleHQpIHtcblx0dmFyIGluc3QsXG5cdCAgICBpID0gcmVjeWNsZXJDb21wb25lbnRzLmxlbmd0aDtcblxuXHRpZiAoQ3Rvci5wcm90b3R5cGUgJiYgQ3Rvci5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0aW5zdCA9IG5ldyBDdG9yKHByb3BzLCBjb250ZXh0KTtcblx0XHRDb21wb25lbnQuY2FsbChpbnN0LCBwcm9wcywgY29udGV4dCk7XG5cdH0gZWxzZSB7XG5cdFx0aW5zdCA9IG5ldyBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuXHRcdGluc3QuY29uc3RydWN0b3IgPSBDdG9yO1xuXHRcdGluc3QucmVuZGVyID0gZG9SZW5kZXI7XG5cdH1cblxuXHR3aGlsZSAoaS0tKSB7XG5cdFx0aWYgKHJlY3ljbGVyQ29tcG9uZW50c1tpXS5jb25zdHJ1Y3RvciA9PT0gQ3Rvcikge1xuXHRcdFx0aW5zdC5uZXh0QmFzZSA9IHJlY3ljbGVyQ29tcG9uZW50c1tpXS5uZXh0QmFzZTtcblx0XHRcdHJlY3ljbGVyQ29tcG9uZW50cy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRyZXR1cm4gaW5zdDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaW5zdDtcbn1cblxuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gc2V0Q29tcG9uZW50UHJvcHMoY29tcG9uZW50LCBwcm9wcywgcmVuZGVyTW9kZSwgY29udGV4dCwgbW91bnRBbGwpIHtcblx0aWYgKGNvbXBvbmVudC5fZGlzYWJsZSkgcmV0dXJuO1xuXHRjb21wb25lbnQuX2Rpc2FibGUgPSB0cnVlO1xuXG5cdGNvbXBvbmVudC5fX3JlZiA9IHByb3BzLnJlZjtcblx0Y29tcG9uZW50Ll9fa2V5ID0gcHJvcHMua2V5O1xuXHRkZWxldGUgcHJvcHMucmVmO1xuXHRkZWxldGUgcHJvcHMua2V5O1xuXG5cdGlmICh0eXBlb2YgY29tcG9uZW50LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRpZiAoIWNvbXBvbmVudC5iYXNlIHx8IG1vdW50QWxsKSB7XG5cdFx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCkgY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCgpO1xuXHRcdH0gZWxzZSBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMpIHtcblx0XHRcdGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzLCBjb250ZXh0KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoY29udGV4dCAmJiBjb250ZXh0ICE9PSBjb21wb25lbnQuY29udGV4dCkge1xuXHRcdGlmICghY29tcG9uZW50LnByZXZDb250ZXh0KSBjb21wb25lbnQucHJldkNvbnRleHQgPSBjb21wb25lbnQuY29udGV4dDtcblx0XHRjb21wb25lbnQuY29udGV4dCA9IGNvbnRleHQ7XG5cdH1cblxuXHRpZiAoIWNvbXBvbmVudC5wcmV2UHJvcHMpIGNvbXBvbmVudC5wcmV2UHJvcHMgPSBjb21wb25lbnQucHJvcHM7XG5cdGNvbXBvbmVudC5wcm9wcyA9IHByb3BzO1xuXG5cdGNvbXBvbmVudC5fZGlzYWJsZSA9IGZhbHNlO1xuXG5cdGlmIChyZW5kZXJNb2RlICE9PSAwKSB7XG5cdFx0aWYgKHJlbmRlck1vZGUgPT09IDEgfHwgb3B0aW9ucy5zeW5jQ29tcG9uZW50VXBkYXRlcyAhPT0gZmFsc2UgfHwgIWNvbXBvbmVudC5iYXNlKSB7XG5cdFx0XHRyZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCAxLCBtb3VudEFsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVucXVldWVSZW5kZXIoY29tcG9uZW50KTtcblx0XHR9XG5cdH1cblxuXHRhcHBseVJlZihjb21wb25lbnQuX19yZWYsIGNvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHJlbmRlck1vZGUsIG1vdW50QWxsLCBpc0NoaWxkKSB7XG5cdGlmIChjb21wb25lbnQuX2Rpc2FibGUpIHJldHVybjtcblxuXHR2YXIgcHJvcHMgPSBjb21wb25lbnQucHJvcHMsXG5cdCAgICBzdGF0ZSA9IGNvbXBvbmVudC5zdGF0ZSxcblx0ICAgIGNvbnRleHQgPSBjb21wb25lbnQuY29udGV4dCxcblx0ICAgIHByZXZpb3VzUHJvcHMgPSBjb21wb25lbnQucHJldlByb3BzIHx8IHByb3BzLFxuXHQgICAgcHJldmlvdXNTdGF0ZSA9IGNvbXBvbmVudC5wcmV2U3RhdGUgfHwgc3RhdGUsXG5cdCAgICBwcmV2aW91c0NvbnRleHQgPSBjb21wb25lbnQucHJldkNvbnRleHQgfHwgY29udGV4dCxcblx0ICAgIGlzVXBkYXRlID0gY29tcG9uZW50LmJhc2UsXG5cdCAgICBuZXh0QmFzZSA9IGNvbXBvbmVudC5uZXh0QmFzZSxcblx0ICAgIGluaXRpYWxCYXNlID0gaXNVcGRhdGUgfHwgbmV4dEJhc2UsXG5cdCAgICBpbml0aWFsQ2hpbGRDb21wb25lbnQgPSBjb21wb25lbnQuX2NvbXBvbmVudCxcblx0ICAgIHNraXAgPSBmYWxzZSxcblx0ICAgIHNuYXBzaG90ID0gcHJldmlvdXNDb250ZXh0LFxuXHQgICAgcmVuZGVyZWQsXG5cdCAgICBpbnN0LFxuXHQgICAgY2Jhc2U7XG5cblx0aWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMpIHtcblx0XHRzdGF0ZSA9IGV4dGVuZChleHRlbmQoe30sIHN0YXRlKSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpKTtcblx0XHRjb21wb25lbnQuc3RhdGUgPSBzdGF0ZTtcblx0fVxuXG5cdGlmIChpc1VwZGF0ZSkge1xuXHRcdGNvbXBvbmVudC5wcm9wcyA9IHByZXZpb3VzUHJvcHM7XG5cdFx0Y29tcG9uZW50LnN0YXRlID0gcHJldmlvdXNTdGF0ZTtcblx0XHRjb21wb25lbnQuY29udGV4dCA9IHByZXZpb3VzQ29udGV4dDtcblx0XHRpZiAocmVuZGVyTW9kZSAhPT0gMiAmJiBjb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlICYmIGNvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHMsIHN0YXRlLCBjb250ZXh0KSA9PT0gZmFsc2UpIHtcblx0XHRcdHNraXAgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUpIHtcblx0XHRcdGNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKHByb3BzLCBzdGF0ZSwgY29udGV4dCk7XG5cdFx0fVxuXHRcdGNvbXBvbmVudC5wcm9wcyA9IHByb3BzO1xuXHRcdGNvbXBvbmVudC5zdGF0ZSA9IHN0YXRlO1xuXHRcdGNvbXBvbmVudC5jb250ZXh0ID0gY29udGV4dDtcblx0fVxuXG5cdGNvbXBvbmVudC5wcmV2UHJvcHMgPSBjb21wb25lbnQucHJldlN0YXRlID0gY29tcG9uZW50LnByZXZDb250ZXh0ID0gY29tcG9uZW50Lm5leHRCYXNlID0gbnVsbDtcblx0Y29tcG9uZW50Ll9kaXJ0eSA9IGZhbHNlO1xuXG5cdGlmICghc2tpcCkge1xuXHRcdHJlbmRlcmVkID0gY29tcG9uZW50LnJlbmRlcihwcm9wcywgc3RhdGUsIGNvbnRleHQpO1xuXG5cdFx0aWYgKGNvbXBvbmVudC5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdGNvbnRleHQgPSBleHRlbmQoZXh0ZW5kKHt9LCBjb250ZXh0KSwgY29tcG9uZW50LmdldENoaWxkQ29udGV4dCgpKTtcblx0XHR9XG5cblx0XHRpZiAoaXNVcGRhdGUgJiYgY29tcG9uZW50LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKSB7XG5cdFx0XHRzbmFwc2hvdCA9IGNvbXBvbmVudC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2aW91c1Byb3BzLCBwcmV2aW91c1N0YXRlKTtcblx0XHR9XG5cblx0XHR2YXIgY2hpbGRDb21wb25lbnQgPSByZW5kZXJlZCAmJiByZW5kZXJlZC5ub2RlTmFtZSxcblx0XHQgICAgdG9Vbm1vdW50LFxuXHRcdCAgICBiYXNlO1xuXG5cdFx0aWYgKHR5cGVvZiBjaGlsZENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuXG5cdFx0XHR2YXIgY2hpbGRQcm9wcyA9IGdldE5vZGVQcm9wcyhyZW5kZXJlZCk7XG5cdFx0XHRpbnN0ID0gaW5pdGlhbENoaWxkQ29tcG9uZW50O1xuXG5cdFx0XHRpZiAoaW5zdCAmJiBpbnN0LmNvbnN0cnVjdG9yID09PSBjaGlsZENvbXBvbmVudCAmJiBjaGlsZFByb3BzLmtleSA9PSBpbnN0Ll9fa2V5KSB7XG5cdFx0XHRcdHNldENvbXBvbmVudFByb3BzKGluc3QsIGNoaWxkUHJvcHMsIDEsIGNvbnRleHQsIGZhbHNlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvVW5tb3VudCA9IGluc3Q7XG5cblx0XHRcdFx0Y29tcG9uZW50Ll9jb21wb25lbnQgPSBpbnN0ID0gY3JlYXRlQ29tcG9uZW50KGNoaWxkQ29tcG9uZW50LCBjaGlsZFByb3BzLCBjb250ZXh0KTtcblx0XHRcdFx0aW5zdC5uZXh0QmFzZSA9IGluc3QubmV4dEJhc2UgfHwgbmV4dEJhc2U7XG5cdFx0XHRcdGluc3QuX3BhcmVudENvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0XHRcdFx0c2V0Q29tcG9uZW50UHJvcHMoaW5zdCwgY2hpbGRQcm9wcywgMCwgY29udGV4dCwgZmFsc2UpO1xuXHRcdFx0XHRyZW5kZXJDb21wb25lbnQoaW5zdCwgMSwgbW91bnRBbGwsIHRydWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRiYXNlID0gaW5zdC5iYXNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYmFzZSA9IGluaXRpYWxCYXNlO1xuXG5cdFx0XHR0b1VubW91bnQgPSBpbml0aWFsQ2hpbGRDb21wb25lbnQ7XG5cdFx0XHRpZiAodG9Vbm1vdW50KSB7XG5cdFx0XHRcdGNiYXNlID0gY29tcG9uZW50Ll9jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5pdGlhbEJhc2UgfHwgcmVuZGVyTW9kZSA9PT0gMSkge1xuXHRcdFx0XHRpZiAoY2Jhc2UpIGNiYXNlLl9jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0XHRiYXNlID0gZGlmZihjYmFzZSwgcmVuZGVyZWQsIGNvbnRleHQsIG1vdW50QWxsIHx8ICFpc1VwZGF0ZSwgaW5pdGlhbEJhc2UgJiYgaW5pdGlhbEJhc2UucGFyZW50Tm9kZSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGluaXRpYWxCYXNlICYmIGJhc2UgIT09IGluaXRpYWxCYXNlICYmIGluc3QgIT09IGluaXRpYWxDaGlsZENvbXBvbmVudCkge1xuXHRcdFx0dmFyIGJhc2VQYXJlbnQgPSBpbml0aWFsQmFzZS5wYXJlbnROb2RlO1xuXHRcdFx0aWYgKGJhc2VQYXJlbnQgJiYgYmFzZSAhPT0gYmFzZVBhcmVudCkge1xuXHRcdFx0XHRiYXNlUGFyZW50LnJlcGxhY2VDaGlsZChiYXNlLCBpbml0aWFsQmFzZSk7XG5cblx0XHRcdFx0aWYgKCF0b1VubW91bnQpIHtcblx0XHRcdFx0XHRpbml0aWFsQmFzZS5fY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdFx0XHRyZWNvbGxlY3ROb2RlVHJlZShpbml0aWFsQmFzZSwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRvVW5tb3VudCkge1xuXHRcdFx0dW5tb3VudENvbXBvbmVudCh0b1VubW91bnQpO1xuXHRcdH1cblxuXHRcdGNvbXBvbmVudC5iYXNlID0gYmFzZTtcblx0XHRpZiAoYmFzZSAmJiAhaXNDaGlsZCkge1xuXHRcdFx0dmFyIGNvbXBvbmVudFJlZiA9IGNvbXBvbmVudCxcblx0XHRcdCAgICB0ID0gY29tcG9uZW50O1xuXHRcdFx0d2hpbGUgKHQgPSB0Ll9wYXJlbnRDb21wb25lbnQpIHtcblx0XHRcdFx0KGNvbXBvbmVudFJlZiA9IHQpLmJhc2UgPSBiYXNlO1xuXHRcdFx0fVxuXHRcdFx0YmFzZS5fY29tcG9uZW50ID0gY29tcG9uZW50UmVmO1xuXHRcdFx0YmFzZS5fY29tcG9uZW50Q29uc3RydWN0b3IgPSBjb21wb25lbnRSZWYuY29uc3RydWN0b3I7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFpc1VwZGF0ZSB8fCBtb3VudEFsbCkge1xuXHRcdG1vdW50cy5wdXNoKGNvbXBvbmVudCk7XG5cdH0gZWxzZSBpZiAoIXNraXApIHtcblxuXHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKSB7XG5cdFx0XHRjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKHByZXZpb3VzUHJvcHMsIHByZXZpb3VzU3RhdGUsIHNuYXBzaG90KTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMuYWZ0ZXJVcGRhdGUpIG9wdGlvbnMuYWZ0ZXJVcGRhdGUoY29tcG9uZW50KTtcblx0fVxuXG5cdHdoaWxlIChjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5wb3AoKS5jYWxsKGNvbXBvbmVudCk7XG5cdH1pZiAoIWRpZmZMZXZlbCAmJiAhaXNDaGlsZCkgZmx1c2hNb3VudHMoKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRDb21wb25lbnRGcm9tVk5vZGUoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwpIHtcblx0dmFyIGMgPSBkb20gJiYgZG9tLl9jb21wb25lbnQsXG5cdCAgICBvcmlnaW5hbENvbXBvbmVudCA9IGMsXG5cdCAgICBvbGREb20gPSBkb20sXG5cdCAgICBpc0RpcmVjdE93bmVyID0gYyAmJiBkb20uX2NvbXBvbmVudENvbnN0cnVjdG9yID09PSB2bm9kZS5ub2RlTmFtZSxcblx0ICAgIGlzT3duZXIgPSBpc0RpcmVjdE93bmVyLFxuXHQgICAgcHJvcHMgPSBnZXROb2RlUHJvcHModm5vZGUpO1xuXHR3aGlsZSAoYyAmJiAhaXNPd25lciAmJiAoYyA9IGMuX3BhcmVudENvbXBvbmVudCkpIHtcblx0XHRpc093bmVyID0gYy5jb25zdHJ1Y3RvciA9PT0gdm5vZGUubm9kZU5hbWU7XG5cdH1cblxuXHRpZiAoYyAmJiBpc093bmVyICYmICghbW91bnRBbGwgfHwgYy5fY29tcG9uZW50KSkge1xuXHRcdHNldENvbXBvbmVudFByb3BzKGMsIHByb3BzLCAzLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cdFx0ZG9tID0gYy5iYXNlO1xuXHR9IGVsc2Uge1xuXHRcdGlmIChvcmlnaW5hbENvbXBvbmVudCAmJiAhaXNEaXJlY3RPd25lcikge1xuXHRcdFx0dW5tb3VudENvbXBvbmVudChvcmlnaW5hbENvbXBvbmVudCk7XG5cdFx0XHRkb20gPSBvbGREb20gPSBudWxsO1xuXHRcdH1cblxuXHRcdGMgPSBjcmVhdGVDb21wb25lbnQodm5vZGUubm9kZU5hbWUsIHByb3BzLCBjb250ZXh0KTtcblx0XHRpZiAoZG9tICYmICFjLm5leHRCYXNlKSB7XG5cdFx0XHRjLm5leHRCYXNlID0gZG9tO1xuXG5cdFx0XHRvbGREb20gPSBudWxsO1xuXHRcdH1cblx0XHRzZXRDb21wb25lbnRQcm9wcyhjLCBwcm9wcywgMSwgY29udGV4dCwgbW91bnRBbGwpO1xuXHRcdGRvbSA9IGMuYmFzZTtcblxuXHRcdGlmIChvbGREb20gJiYgZG9tICE9PSBvbGREb20pIHtcblx0XHRcdG9sZERvbS5fY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKG9sZERvbSwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbmZ1bmN0aW9uIHVubW91bnRDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGlmIChvcHRpb25zLmJlZm9yZVVubW91bnQpIG9wdGlvbnMuYmVmb3JlVW5tb3VudChjb21wb25lbnQpO1xuXG5cdHZhciBiYXNlID0gY29tcG9uZW50LmJhc2U7XG5cblx0Y29tcG9uZW50Ll9kaXNhYmxlID0gdHJ1ZTtcblxuXHRpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50KSBjb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuXHRjb21wb25lbnQuYmFzZSA9IG51bGw7XG5cblx0dmFyIGlubmVyID0gY29tcG9uZW50Ll9jb21wb25lbnQ7XG5cdGlmIChpbm5lcikge1xuXHRcdHVubW91bnRDb21wb25lbnQoaW5uZXIpO1xuXHR9IGVsc2UgaWYgKGJhc2UpIHtcblx0XHRpZiAoYmFzZVsnX19wcmVhY3RhdHRyXyddICE9IG51bGwpIGFwcGx5UmVmKGJhc2VbJ19fcHJlYWN0YXR0cl8nXS5yZWYsIG51bGwpO1xuXG5cdFx0Y29tcG9uZW50Lm5leHRCYXNlID0gYmFzZTtcblxuXHRcdHJlbW92ZU5vZGUoYmFzZSk7XG5cdFx0cmVjeWNsZXJDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcblxuXHRcdHJlbW92ZUNoaWxkcmVuKGJhc2UpO1xuXHR9XG5cblx0YXBwbHlSZWYoY29tcG9uZW50Ll9fcmVmLCBudWxsKTtcbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMuX2RpcnR5ID0gdHJ1ZTtcblxuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblxuXHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fTtcblxuXHR0aGlzLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcbn1cblxuZXh0ZW5kKENvbXBvbmVudC5wcm90b3R5cGUsIHtcblx0c2V0U3RhdGU6IGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlLCBjYWxsYmFjaykge1xuXHRcdGlmICghdGhpcy5wcmV2U3RhdGUpIHRoaXMucHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHR0aGlzLnN0YXRlID0gZXh0ZW5kKGV4dGVuZCh7fSwgdGhpcy5zdGF0ZSksIHR5cGVvZiBzdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXRlKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpIDogc3RhdGUpO1xuXHRcdGlmIChjYWxsYmFjaykgdGhpcy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH0sXG5cdGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZShjYWxsYmFjaykge1xuXHRcdGlmIChjYWxsYmFjaykgdGhpcy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdHJlbmRlckNvbXBvbmVudCh0aGlzLCAyKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7fVxufSk7XG5cbmZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50LCBtZXJnZSkge1xuICByZXR1cm4gZGlmZihtZXJnZSwgdm5vZGUsIHt9LCBmYWxzZSwgcGFyZW50LCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcblx0cmV0dXJuIHt9O1xufVxuXG52YXIgcHJlYWN0ID0ge1xuXHRoOiBoLFxuXHRjcmVhdGVFbGVtZW50OiBoLFxuXHRjbG9uZUVsZW1lbnQ6IGNsb25lRWxlbWVudCxcblx0Y3JlYXRlUmVmOiBjcmVhdGVSZWYsXG5cdENvbXBvbmVudDogQ29tcG9uZW50LFxuXHRyZW5kZXI6IHJlbmRlcixcblx0cmVyZW5kZXI6IHJlcmVuZGVyLFxuXHRvcHRpb25zOiBvcHRpb25zXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcmVhY3Q7XG5leHBvcnQgeyBoLCBoIGFzIGNyZWF0ZUVsZW1lbnQsIGNsb25lRWxlbWVudCwgY3JlYXRlUmVmLCBDb21wb25lbnQsIHJlbmRlciwgcmVyZW5kZXIsIG9wdGlvbnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tanMubWFwXG4iLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUcmFuc2xhdG9yID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL1RyYW5zbGF0b3InKTtcbnZhciBlZSA9IHJlcXVpcmUoJ25hbWVzcGFjZS1lbWl0dGVyJyk7XG52YXIgY3VpZCA9IHJlcXVpcmUoJ2N1aWQnKTtcbi8vIGNvbnN0IHRocm90dGxlID0gcmVxdWlyZSgnbG9kYXNoLnRocm90dGxlJylcbnZhciBwcmV0dHlCeXRlcyA9IHJlcXVpcmUoJ3ByZXR0aWVyLWJ5dGVzJyk7XG52YXIgbWF0Y2ggPSByZXF1aXJlKCdtaW1lLW1hdGNoJyk7XG52YXIgRGVmYXVsdFN0b3JlID0gcmVxdWlyZSgnQHVwcHkvc3RvcmUtZGVmYXVsdCcpO1xudmFyIGdldEZpbGVUeXBlID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL2dldEZpbGVUeXBlJyk7XG52YXIgZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24gPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24nKTtcbnZhciBnZW5lcmF0ZUZpbGVJRCA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9nZW5lcmF0ZUZpbGVJRCcpO1xudmFyIGdldFRpbWVTdGFtcCA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9nZXRUaW1lU3RhbXAnKTtcbnZhciBQbHVnaW4gPSByZXF1aXJlKCcuL1BsdWdpbicpOyAvLyBFeHBvcnRlZCBmcm9tIGhlcmUuXG5cbi8qKlxuICogVXBweSBDb3JlIG1vZHVsZS5cbiAqIE1hbmFnZXMgcGx1Z2lucywgc3RhdGUgdXBkYXRlcywgYWN0cyBhcyBhbiBldmVudCBidXMsXG4gKiBhZGRzL3JlbW92ZXMgZmlsZXMgYW5kIG1ldGFkYXRhLlxuICovXG5cbnZhciBVcHB5ID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgKiBJbnN0YW50aWF0ZSBVcHB5XG4gICogQHBhcmFtIHtvYmplY3R9IG9wdHMg4oCUIFVwcHkgb3B0aW9uc1xuICAqL1xuICBmdW5jdGlvbiBVcHB5KG9wdHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVwcHkpO1xuXG4gICAgdmFyIGRlZmF1bHRMb2NhbGUgPSB7XG4gICAgICBzdHJpbmdzOiB7XG4gICAgICAgIHlvdUNhbk9ubHlVcGxvYWRYOiB7XG4gICAgICAgICAgMDogJ1lvdSBjYW4gb25seSB1cGxvYWQgJXtzbWFydF9jb3VudH0gZmlsZScsXG4gICAgICAgICAgMTogJ1lvdSBjYW4gb25seSB1cGxvYWQgJXtzbWFydF9jb3VudH0gZmlsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHlvdUhhdmVUb0F0TGVhc3RTZWxlY3RYOiB7XG4gICAgICAgICAgMDogJ1lvdSBoYXZlIHRvIHNlbGVjdCBhdCBsZWFzdCAle3NtYXJ0X2NvdW50fSBmaWxlJyxcbiAgICAgICAgICAxOiAnWW91IGhhdmUgdG8gc2VsZWN0IGF0IGxlYXN0ICV7c21hcnRfY291bnR9IGZpbGVzJ1xuICAgICAgICB9LFxuICAgICAgICBleGNlZWRzU2l6ZTogJ1RoaXMgZmlsZSBleGNlZWRzIG1heGltdW0gYWxsb3dlZCBzaXplIG9mJyxcbiAgICAgICAgeW91Q2FuT25seVVwbG9hZEZpbGVUeXBlczogJ1lvdSBjYW4gb25seSB1cGxvYWQ6JyxcbiAgICAgICAgY29tcGFuaW9uRXJyb3I6ICdDb25uZWN0aW9uIHdpdGggQ29tcGFuaW9uIGZhaWxlZCcsXG4gICAgICAgIGZhaWxlZFRvVXBsb2FkOiAnRmFpbGVkIHRvIHVwbG9hZCAle2ZpbGV9JyxcbiAgICAgICAgbm9JbnRlcm5ldENvbm5lY3Rpb246ICdObyBJbnRlcm5ldCBjb25uZWN0aW9uJyxcbiAgICAgICAgY29ubmVjdGVkVG9JbnRlcm5ldDogJ0Nvbm5lY3RlZCB0byB0aGUgSW50ZXJuZXQnLFxuICAgICAgICAvLyBTdHJpbmdzIGZvciByZW1vdGUgcHJvdmlkZXJzXG4gICAgICAgIG5vRmlsZXNGb3VuZDogJ1lvdSBoYXZlIG5vIGZpbGVzIG9yIGZvbGRlcnMgaGVyZScsXG4gICAgICAgIHNlbGVjdFhGaWxlczoge1xuICAgICAgICAgIDA6ICdTZWxlY3QgJXtzbWFydF9jb3VudH0gZmlsZScsXG4gICAgICAgICAgMTogJ1NlbGVjdCAle3NtYXJ0X2NvdW50fSBmaWxlcydcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgbG9nT3V0OiAnTG9nIG91dCdcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICAgIH07dmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgaWQ6ICd1cHB5JyxcbiAgICAgIGF1dG9Qcm9jZWVkOiBmYWxzZSxcbiAgICAgIGFsbG93TXVsdGlwbGVVcGxvYWRzOiB0cnVlLFxuICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgcmVzdHJpY3Rpb25zOiB7XG4gICAgICAgIG1heEZpbGVTaXplOiBudWxsLFxuICAgICAgICBtYXhOdW1iZXJPZkZpbGVzOiBudWxsLFxuICAgICAgICBtaW5OdW1iZXJPZkZpbGVzOiBudWxsLFxuICAgICAgICBhbGxvd2VkRmlsZVR5cGVzOiBudWxsXG4gICAgICB9LFxuICAgICAgbWV0YToge30sXG4gICAgICBvbkJlZm9yZUZpbGVBZGRlZDogZnVuY3Rpb24gb25CZWZvcmVGaWxlQWRkZWQoY3VycmVudEZpbGUsIGZpbGVzKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50RmlsZTtcbiAgICAgIH0sXG4gICAgICBvbkJlZm9yZVVwbG9hZDogZnVuY3Rpb24gb25CZWZvcmVVcGxvYWQoZmlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGZpbGVzO1xuICAgICAgfSxcbiAgICAgIGxvY2FsZTogZGVmYXVsdExvY2FsZSxcbiAgICAgIHN0b3JlOiBEZWZhdWx0U3RvcmUoKVxuXG4gICAgICAvLyBNZXJnZSBkZWZhdWx0IG9wdGlvbnMgd2l0aCB0aGUgb25lcyBzZXQgYnkgdXNlclxuICAgIH07dGhpcy5vcHRzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRzKTtcbiAgICB0aGlzLm9wdHMucmVzdHJpY3Rpb25zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLnJlc3RyaWN0aW9ucywgdGhpcy5vcHRzLnJlc3RyaWN0aW9ucyk7XG5cbiAgICAvLyBpMThuXG4gICAgdGhpcy50cmFuc2xhdG9yID0gbmV3IFRyYW5zbGF0b3IoW2RlZmF1bHRMb2NhbGUsIHRoaXMub3B0cy5sb2NhbGVdKTtcbiAgICB0aGlzLmxvY2FsZSA9IHRoaXMudHJhbnNsYXRvci5sb2NhbGU7XG4gICAgdGhpcy5pMThuID0gdGhpcy50cmFuc2xhdG9yLnRyYW5zbGF0ZS5iaW5kKHRoaXMudHJhbnNsYXRvcik7XG5cbiAgICAvLyBDb250YWluZXIgZm9yIGRpZmZlcmVudCB0eXBlcyBvZiBwbHVnaW5zXG4gICAgdGhpcy5wbHVnaW5zID0ge307XG5cbiAgICB0aGlzLmdldFN0YXRlID0gdGhpcy5nZXRTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEZpbGVNZXRhID0gdGhpcy5zZXRGaWxlTWV0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0RmlsZVN0YXRlID0gdGhpcy5zZXRGaWxlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZyA9IHRoaXMubG9nLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbmZvID0gdGhpcy5pbmZvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oaWRlSW5mbyA9IHRoaXMuaGlkZUluZm8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEZpbGUgPSB0aGlzLmFkZEZpbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUZpbGUgPSB0aGlzLnJlbW92ZUZpbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhdXNlUmVzdW1lID0gdGhpcy5wYXVzZVJlc3VtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVByb2dyZXNzID0gdGhpcy5fY2FsY3VsYXRlUHJvZ3Jlc3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZU9ubGluZVN0YXR1cyA9IHRoaXMudXBkYXRlT25saW5lU3RhdHVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldFByb2dyZXNzID0gdGhpcy5yZXNldFByb2dyZXNzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnBhdXNlQWxsID0gdGhpcy5wYXVzZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzdW1lQWxsID0gdGhpcy5yZXN1bWVBbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJldHJ5QWxsID0gdGhpcy5yZXRyeUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FuY2VsQWxsID0gdGhpcy5jYW5jZWxBbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJldHJ5VXBsb2FkID0gdGhpcy5yZXRyeVVwbG9hZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBsb2FkID0gdGhpcy51cGxvYWQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZW1pdHRlciA9IGVlKCk7XG4gICAgdGhpcy5vbiA9IHRoaXMub24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9mZiA9IHRoaXMub2ZmLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbmNlID0gdGhpcy5lbWl0dGVyLm9uY2UuYmluZCh0aGlzLmVtaXR0ZXIpO1xuICAgIHRoaXMuZW1pdCA9IHRoaXMuZW1pdHRlci5lbWl0LmJpbmQodGhpcy5lbWl0dGVyKTtcblxuICAgIHRoaXMucHJlUHJvY2Vzc29ycyA9IFtdO1xuICAgIHRoaXMudXBsb2FkZXJzID0gW107XG4gICAgdGhpcy5wb3N0UHJvY2Vzc29ycyA9IFtdO1xuXG4gICAgdGhpcy5zdG9yZSA9IHRoaXMub3B0cy5zdG9yZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBsdWdpbnM6IHt9LFxuICAgICAgZmlsZXM6IHt9LFxuICAgICAgY3VycmVudFVwbG9hZHM6IHt9LFxuICAgICAgYWxsb3dOZXdVcGxvYWQ6IHRydWUsXG4gICAgICBjYXBhYmlsaXRpZXM6IHtcbiAgICAgICAgcmVzdW1hYmxlVXBsb2FkczogZmFsc2VcbiAgICAgIH0sXG4gICAgICB0b3RhbFByb2dyZXNzOiAwLFxuICAgICAgbWV0YTogX2V4dGVuZHMoe30sIHRoaXMub3B0cy5tZXRhKSxcbiAgICAgIGluZm86IHtcbiAgICAgICAgaXNIaWRkZW46IHRydWUsXG4gICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgbWVzc2FnZTogJydcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX3N0b3JlVW5zdWJzY3JpYmUgPSB0aGlzLnN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAocHJldlN0YXRlLCBuZXh0U3RhdGUsIHBhdGNoKSB7XG4gICAgICBfdGhpcy5lbWl0KCdzdGF0ZS11cGRhdGUnLCBwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcGF0Y2gpO1xuICAgICAgX3RoaXMudXBkYXRlQWxsKG5leHRTdGF0ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nXG4gICAgLy8gdGhpcy51cGRhdGVOdW0gPSAwXG4gICAgaWYgKHRoaXMub3B0cy5kZWJ1ZyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgd2luZG93Wyd1cHB5TG9nJ10gPSAnJztcbiAgICAgIHdpbmRvd1t0aGlzLm9wdHMuaWRdID0gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIFVwcHkucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMuZW1pdHRlci5vZmYoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogSXRlcmF0ZSBvbiBhbGwgcGx1Z2lucyBhbmQgcnVuIGB1cGRhdGVgIG9uIHRoZW0uXG4gICAqIENhbGxlZCBlYWNoIHRpbWUgc3RhdGUgY2hhbmdlcy5cbiAgICpcbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS51cGRhdGVBbGwgPSBmdW5jdGlvbiB1cGRhdGVBbGwoc3RhdGUpIHtcbiAgICB0aGlzLml0ZXJhdGVQbHVnaW5zKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIHBsdWdpbi51cGRhdGUoc3RhdGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHN0YXRlIHdpdGggYSBwYXRjaFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGF0Y2gge2ZvbzogJ2Jhcid9XG4gICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShwYXRjaCkge1xuICAgIHRoaXMuc3RvcmUuc2V0U3RhdGUocGF0Y2gpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgc3RhdGUuXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gIH07XG5cbiAgLyoqXG4gICogQmFjayBjb21wYXQgZm9yIHdoZW4gdXBweS5zdGF0ZSBpcyB1c2VkIGluc3RlYWQgb2YgdXBweS5nZXRTdGF0ZSgpLlxuICAqL1xuXG5cbiAgLyoqXG4gICogU2hvcnRoYW5kIHRvIHNldCBzdGF0ZSBmb3IgYSBzcGVjaWZpYyBmaWxlLlxuICAqL1xuICBVcHB5LnByb3RvdHlwZS5zZXRGaWxlU3RhdGUgPSBmdW5jdGlvbiBzZXRGaWxlU3RhdGUoZmlsZUlELCBzdGF0ZSkge1xuICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICBpZiAoIXRoaXMuZ2V0U3RhdGUoKS5maWxlc1tmaWxlSURdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcdTIwMTl0IHNldCBzdGF0ZSBmb3IgJyArIGZpbGVJRCArICcgKHRoZSBmaWxlIGNvdWxkIGhhdmUgYmVlbiByZW1vdmVkKScpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlsZXM6IF9leHRlbmRzKHt9LCB0aGlzLmdldFN0YXRlKCkuZmlsZXMsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2ZpbGVJRF0gPSBfZXh0ZW5kcyh7fSwgdGhpcy5nZXRTdGF0ZSgpLmZpbGVzW2ZpbGVJRF0sIHN0YXRlKSwgX2V4dGVuZHMyKSlcbiAgICB9KTtcbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5yZXNldFByb2dyZXNzID0gZnVuY3Rpb24gcmVzZXRQcm9ncmVzcygpIHtcbiAgICB2YXIgZGVmYXVsdFByb2dyZXNzID0ge1xuICAgICAgcGVyY2VudGFnZTogMCxcbiAgICAgIGJ5dGVzVXBsb2FkZWQ6IDAsXG4gICAgICB1cGxvYWRDb21wbGV0ZTogZmFsc2UsXG4gICAgICB1cGxvYWRTdGFydGVkOiBmYWxzZVxuICAgIH07XG4gICAgdmFyIGZpbGVzID0gX2V4dGVuZHMoe30sIHRoaXMuZ2V0U3RhdGUoKS5maWxlcyk7XG4gICAgdmFyIHVwZGF0ZWRGaWxlcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGZpbGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlSUQpIHtcbiAgICAgIHZhciB1cGRhdGVkRmlsZSA9IF9leHRlbmRzKHt9LCBmaWxlc1tmaWxlSURdKTtcbiAgICAgIHVwZGF0ZWRGaWxlLnByb2dyZXNzID0gX2V4dGVuZHMoe30sIHVwZGF0ZWRGaWxlLnByb2dyZXNzLCBkZWZhdWx0UHJvZ3Jlc3MpO1xuICAgICAgdXBkYXRlZEZpbGVzW2ZpbGVJRF0gPSB1cGRhdGVkRmlsZTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlsZXM6IHVwZGF0ZWRGaWxlcyxcbiAgICAgIHRvdGFsUHJvZ3Jlc3M6IDBcbiAgICB9KTtcblxuICAgIC8vIFRPRE8gRG9jdW1lbnQgb24gdGhlIHdlYnNpdGVcbiAgICB0aGlzLmVtaXQoJ3Jlc2V0LXByb2dyZXNzJyk7XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUuYWRkUHJlUHJvY2Vzc29yID0gZnVuY3Rpb24gYWRkUHJlUHJvY2Vzc29yKGZuKSB7XG4gICAgdGhpcy5wcmVQcm9jZXNzb3JzLnB1c2goZm4pO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnJlbW92ZVByZVByb2Nlc3NvciA9IGZ1bmN0aW9uIHJlbW92ZVByZVByb2Nlc3Nvcihmbikge1xuICAgIHZhciBpID0gdGhpcy5wcmVQcm9jZXNzb3JzLmluZGV4T2YoZm4pO1xuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgdGhpcy5wcmVQcm9jZXNzb3JzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUuYWRkUG9zdFByb2Nlc3NvciA9IGZ1bmN0aW9uIGFkZFBvc3RQcm9jZXNzb3IoZm4pIHtcbiAgICB0aGlzLnBvc3RQcm9jZXNzb3JzLnB1c2goZm4pO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnJlbW92ZVBvc3RQcm9jZXNzb3IgPSBmdW5jdGlvbiByZW1vdmVQb3N0UHJvY2Vzc29yKGZuKSB7XG4gICAgdmFyIGkgPSB0aGlzLnBvc3RQcm9jZXNzb3JzLmluZGV4T2YoZm4pO1xuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgdGhpcy5wb3N0UHJvY2Vzc29ycy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLmFkZFVwbG9hZGVyID0gZnVuY3Rpb24gYWRkVXBsb2FkZXIoZm4pIHtcbiAgICB0aGlzLnVwbG9hZGVycy5wdXNoKGZuKTtcbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5yZW1vdmVVcGxvYWRlciA9IGZ1bmN0aW9uIHJlbW92ZVVwbG9hZGVyKGZuKSB7XG4gICAgdmFyIGkgPSB0aGlzLnVwbG9hZGVycy5pbmRleE9mKGZuKTtcbiAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgIHRoaXMudXBsb2FkZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUuc2V0TWV0YSA9IGZ1bmN0aW9uIHNldE1ldGEoZGF0YSkge1xuICAgIHZhciB1cGRhdGVkTWV0YSA9IF9leHRlbmRzKHt9LCB0aGlzLmdldFN0YXRlKCkubWV0YSwgZGF0YSk7XG4gICAgdmFyIHVwZGF0ZWRGaWxlcyA9IF9leHRlbmRzKHt9LCB0aGlzLmdldFN0YXRlKCkuZmlsZXMpO1xuXG4gICAgT2JqZWN0LmtleXModXBkYXRlZEZpbGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlSUQpIHtcbiAgICAgIHVwZGF0ZWRGaWxlc1tmaWxlSURdID0gX2V4dGVuZHMoe30sIHVwZGF0ZWRGaWxlc1tmaWxlSURdLCB7XG4gICAgICAgIG1ldGE6IF9leHRlbmRzKHt9LCB1cGRhdGVkRmlsZXNbZmlsZUlEXS5tZXRhLCBkYXRhKVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvZygnQWRkaW5nIG1ldGFkYXRhOicpO1xuICAgIHRoaXMubG9nKGRhdGEpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtZXRhOiB1cGRhdGVkTWV0YSxcbiAgICAgIGZpbGVzOiB1cGRhdGVkRmlsZXNcbiAgICB9KTtcbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5zZXRGaWxlTWV0YSA9IGZ1bmN0aW9uIHNldEZpbGVNZXRhKGZpbGVJRCwgZGF0YSkge1xuICAgIHZhciB1cGRhdGVkRmlsZXMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5nZXRTdGF0ZSgpLmZpbGVzKTtcbiAgICBpZiAoIXVwZGF0ZWRGaWxlc1tmaWxlSURdKSB7XG4gICAgICB0aGlzLmxvZygnV2FzIHRyeWluZyB0byBzZXQgbWV0YWRhdGEgZm9yIGEgZmlsZSB0aGF04oCZcyBub3Qgd2l0aCB1cyBhbnltb3JlOiAnLCBmaWxlSUQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbmV3TWV0YSA9IF9leHRlbmRzKHt9LCB1cGRhdGVkRmlsZXNbZmlsZUlEXS5tZXRhLCBkYXRhKTtcbiAgICB1cGRhdGVkRmlsZXNbZmlsZUlEXSA9IF9leHRlbmRzKHt9LCB1cGRhdGVkRmlsZXNbZmlsZUlEXSwge1xuICAgICAgbWV0YTogbmV3TWV0YVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogdXBkYXRlZEZpbGVzIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYSBmaWxlIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVJRCBUaGUgSUQgb2YgdGhlIGZpbGUgb2JqZWN0IHRvIHJldHVybi5cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5nZXRGaWxlID0gZnVuY3Rpb24gZ2V0RmlsZShmaWxlSUQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZSgpLmZpbGVzW2ZpbGVJRF07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgZmlsZXMgaW4gYW4gYXJyYXkuXG4gICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUuZ2V0RmlsZXMgPSBmdW5jdGlvbiBnZXRGaWxlcygpIHtcbiAgICB2YXIgX2dldFN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICBmaWxlcyA9IF9nZXRTdGF0ZS5maWxlcztcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWxlcykubWFwKGZ1bmN0aW9uIChmaWxlSUQpIHtcbiAgICAgIHJldHVybiBmaWxlc1tmaWxlSURdO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAqIENoZWNrIGlmIG1pbk51bWJlck9mRmlsZXMgcmVzdHJpY3Rpb24gaXMgcmVhY2hlZCBiZWZvcmUgdXBsb2FkaW5nLlxuICAqXG4gICogQHByaXZhdGVcbiAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLl9jaGVja01pbk51bWJlck9mRmlsZXMgPSBmdW5jdGlvbiBfY2hlY2tNaW5OdW1iZXJPZkZpbGVzKGZpbGVzKSB7XG4gICAgdmFyIG1pbk51bWJlck9mRmlsZXMgPSB0aGlzLm9wdHMucmVzdHJpY3Rpb25zLm1pbk51bWJlck9mRmlsZXM7XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoZmlsZXMpLmxlbmd0aCA8IG1pbk51bWJlck9mRmlsZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignJyArIHRoaXMuaTE4bigneW91SGF2ZVRvQXRMZWFzdFNlbGVjdFgnLCB7IHNtYXJ0X2NvdW50OiBtaW5OdW1iZXJPZkZpbGVzIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICogQ2hlY2sgaWYgZmlsZSBwYXNzZXMgYSBzZXQgb2YgcmVzdHJpY3Rpb25zIHNldCBpbiBvcHRpb25zOiBtYXhGaWxlU2l6ZSxcbiAgKiBtYXhOdW1iZXJPZkZpbGVzIGFuZCBhbGxvd2VkRmlsZVR5cGVzLlxuICAqXG4gICogQHBhcmFtIHtvYmplY3R9IGZpbGUgb2JqZWN0IHRvIGNoZWNrXG4gICogQHByaXZhdGVcbiAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLl9jaGVja1Jlc3RyaWN0aW9ucyA9IGZ1bmN0aW9uIF9jaGVja1Jlc3RyaWN0aW9ucyhmaWxlKSB7XG4gICAgdmFyIF9vcHRzJHJlc3RyaWN0aW9ucyA9IHRoaXMub3B0cy5yZXN0cmljdGlvbnMsXG4gICAgICAgIG1heEZpbGVTaXplID0gX29wdHMkcmVzdHJpY3Rpb25zLm1heEZpbGVTaXplLFxuICAgICAgICBtYXhOdW1iZXJPZkZpbGVzID0gX29wdHMkcmVzdHJpY3Rpb25zLm1heE51bWJlck9mRmlsZXMsXG4gICAgICAgIGFsbG93ZWRGaWxlVHlwZXMgPSBfb3B0cyRyZXN0cmljdGlvbnMuYWxsb3dlZEZpbGVUeXBlcztcblxuXG4gICAgaWYgKG1heE51bWJlck9mRmlsZXMpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkuZmlsZXMpLmxlbmd0aCArIDEgPiBtYXhOdW1iZXJPZkZpbGVzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignJyArIHRoaXMuaTE4bigneW91Q2FuT25seVVwbG9hZFgnLCB7IHNtYXJ0X2NvdW50OiBtYXhOdW1iZXJPZkZpbGVzIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWxsb3dlZEZpbGVUeXBlcykge1xuICAgICAgdmFyIGlzQ29ycmVjdEZpbGVUeXBlID0gYWxsb3dlZEZpbGVUeXBlcy5maWx0ZXIoZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgLy8gaWYgKCFmaWxlLnR5cGUpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIC8vIGlzIHRoaXMgaXMgYSBtaW1lLXR5cGVcbiAgICAgICAgaWYgKHR5cGUuaW5kZXhPZignLycpID4gLTEpIHtcbiAgICAgICAgICBpZiAoIWZpbGUudHlwZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHJldHVybiBtYXRjaChmaWxlLnR5cGUsIHR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3RoZXJ3aXNlIHRoaXMgaXMgbGlrZWx5IGFuIGV4dGVuc2lvblxuICAgICAgICBpZiAodHlwZVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgaWYgKGZpbGUuZXh0ZW5zaW9uID09PSB0eXBlLnN1YnN0cigxKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbGUuZXh0ZW5zaW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkubGVuZ3RoID4gMDtcblxuICAgICAgaWYgKCFpc0NvcnJlY3RGaWxlVHlwZSkge1xuICAgICAgICB2YXIgYWxsb3dlZEZpbGVUeXBlc1N0cmluZyA9IGFsbG93ZWRGaWxlVHlwZXMuam9pbignLCAnKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMuaTE4bigneW91Q2FuT25seVVwbG9hZEZpbGVUeXBlcycpICsgJyAnICsgYWxsb3dlZEZpbGVUeXBlc1N0cmluZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1heEZpbGVTaXplKSB7XG4gICAgICBpZiAoZmlsZS5kYXRhLnNpemUgPiBtYXhGaWxlU2l6ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy5pMThuKCdleGNlZWRzU2l6ZScpICsgJyAnICsgcHJldHR5Qnl0ZXMobWF4RmlsZVNpemUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICogQWRkIGEgbmV3IGZpbGUgdG8gYHN0YXRlLmZpbGVzYC4gVGhpcyB3aWxsIHJ1biBgb25CZWZvcmVGaWxlQWRkZWRgLFxuICAqIHRyeSB0byBndWVzcyBmaWxlIHR5cGUgaW4gYSBjbGV2ZXIgd2F5LCBjaGVjayBmaWxlIGFnYWluc3QgcmVzdHJpY3Rpb25zLFxuICAqIGFuZCBzdGFydCBhbiB1cGxvYWQgaWYgYGF1dG9Qcm9jZWVkID09PSB0cnVlYC5cbiAgKlxuICAqIEBwYXJhbSB7b2JqZWN0fSBmaWxlIG9iamVjdCB0byBhZGRcbiAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLmFkZEZpbGUgPSBmdW5jdGlvbiBhZGRGaWxlKGZpbGUpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcyxcbiAgICAgICAgX2V4dGVuZHMzO1xuXG4gICAgdmFyIF9nZXRTdGF0ZTIgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgIGZpbGVzID0gX2dldFN0YXRlMi5maWxlcyxcbiAgICAgICAgYWxsb3dOZXdVcGxvYWQgPSBfZ2V0U3RhdGUyLmFsbG93TmV3VXBsb2FkO1xuXG4gICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiBvbkVycm9yKG1zZykge1xuICAgICAgdmFyIGVyciA9ICh0eXBlb2YgbXNnID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtc2cpKSA9PT0gJ29iamVjdCcgPyBtc2cgOiBuZXcgRXJyb3IobXNnKTtcbiAgICAgIF90aGlzMi5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgX3RoaXMyLmluZm8oZXJyLm1lc3NhZ2UsICdlcnJvcicsIDUwMDApO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH07XG5cbiAgICBpZiAoYWxsb3dOZXdVcGxvYWQgPT09IGZhbHNlKSB7XG4gICAgICBvbkVycm9yKG5ldyBFcnJvcignQ2Fubm90IGFkZCBuZXcgZmlsZXM6IGFscmVhZHkgdXBsb2FkaW5nLicpKTtcbiAgICB9XG5cbiAgICB2YXIgb25CZWZvcmVGaWxlQWRkZWRSZXN1bHQgPSB0aGlzLm9wdHMub25CZWZvcmVGaWxlQWRkZWQoZmlsZSwgZmlsZXMpO1xuXG4gICAgaWYgKG9uQmVmb3JlRmlsZUFkZGVkUmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5sb2coJ05vdCBhZGRpbmcgZmlsZSBiZWNhdXNlIG9uQmVmb3JlRmlsZUFkZGVkIHJldHVybmVkIGZhbHNlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCh0eXBlb2Ygb25CZWZvcmVGaWxlQWRkZWRSZXN1bHQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9uQmVmb3JlRmlsZUFkZGVkUmVzdWx0KSkgPT09ICdvYmplY3QnICYmIG9uQmVmb3JlRmlsZUFkZGVkUmVzdWx0KSB7XG4gICAgICAvLyB3YXJuaW5nIGFmdGVyIHRoZSBjaGFuZ2UgaW4gMC4yNFxuICAgICAgaWYgKG9uQmVmb3JlRmlsZUFkZGVkUmVzdWx0LnRoZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb25CZWZvcmVGaWxlQWRkZWQoKSByZXR1cm5lZCBhIFByb21pc2UsIGJ1dCB0aGlzIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQuIEl0IG11c3QgYmUgc3luY2hyb25vdXMuJyk7XG4gICAgICB9XG4gICAgICBmaWxlID0gb25CZWZvcmVGaWxlQWRkZWRSZXN1bHQ7XG4gICAgfVxuXG4gICAgdmFyIGZpbGVUeXBlID0gZ2V0RmlsZVR5cGUoZmlsZSk7XG4gICAgdmFyIGZpbGVOYW1lID0gdm9pZCAwO1xuICAgIGlmIChmaWxlLm5hbWUpIHtcbiAgICAgIGZpbGVOYW1lID0gZmlsZS5uYW1lO1xuICAgIH0gZWxzZSBpZiAoZmlsZVR5cGUuc3BsaXQoJy8nKVswXSA9PT0gJ2ltYWdlJykge1xuICAgICAgZmlsZU5hbWUgPSBmaWxlVHlwZS5zcGxpdCgnLycpWzBdICsgJy4nICsgZmlsZVR5cGUuc3BsaXQoJy8nKVsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsZU5hbWUgPSAnbm9uYW1lJztcbiAgICB9XG4gICAgdmFyIGZpbGVFeHRlbnNpb24gPSBnZXRGaWxlTmFtZUFuZEV4dGVuc2lvbihmaWxlTmFtZSkuZXh0ZW5zaW9uO1xuICAgIHZhciBpc1JlbW90ZSA9IGZpbGUuaXNSZW1vdGUgfHwgZmFsc2U7XG5cbiAgICB2YXIgZmlsZUlEID0gZ2VuZXJhdGVGaWxlSUQoZmlsZSk7XG5cbiAgICB2YXIgbWV0YSA9IGZpbGUubWV0YSB8fCB7fTtcbiAgICBtZXRhLm5hbWUgPSBmaWxlTmFtZTtcbiAgICBtZXRhLnR5cGUgPSBmaWxlVHlwZTtcblxuICAgIHZhciBuZXdGaWxlID0ge1xuICAgICAgc291cmNlOiBmaWxlLnNvdXJjZSB8fCAnJyxcbiAgICAgIGlkOiBmaWxlSUQsXG4gICAgICBuYW1lOiBmaWxlTmFtZSxcbiAgICAgIGV4dGVuc2lvbjogZmlsZUV4dGVuc2lvbiB8fCAnJyxcbiAgICAgIG1ldGE6IF9leHRlbmRzKHt9LCB0aGlzLmdldFN0YXRlKCkubWV0YSwgbWV0YSksXG4gICAgICB0eXBlOiBmaWxlVHlwZSxcbiAgICAgIGRhdGE6IGZpbGUuZGF0YSxcbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHBlcmNlbnRhZ2U6IDAsXG4gICAgICAgIGJ5dGVzVXBsb2FkZWQ6IDAsXG4gICAgICAgIGJ5dGVzVG90YWw6IGZpbGUuZGF0YS5zaXplIHx8IDAsXG4gICAgICAgIHVwbG9hZENvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgdXBsb2FkU3RhcnRlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBzaXplOiBmaWxlLmRhdGEuc2l6ZSB8fCAwLFxuICAgICAgaXNSZW1vdGU6IGlzUmVtb3RlLFxuICAgICAgcmVtb3RlOiBmaWxlLnJlbW90ZSB8fCAnJyxcbiAgICAgIHByZXZpZXc6IGZpbGUucHJldmlld1xuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5fY2hlY2tSZXN0cmljdGlvbnMobmV3RmlsZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBvbkVycm9yKGVycik7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWxlczogX2V4dGVuZHMoe30sIGZpbGVzLCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tmaWxlSURdID0gbmV3RmlsZSwgX2V4dGVuZHMzKSlcbiAgICB9KTtcblxuICAgIHRoaXMuZW1pdCgnZmlsZS1hZGRlZCcsIG5ld0ZpbGUpO1xuICAgIHRoaXMubG9nKCdBZGRlZCBmaWxlOiAnICsgZmlsZU5hbWUgKyAnLCAnICsgZmlsZUlEICsgJywgbWltZSB0eXBlOiAnICsgZmlsZVR5cGUpO1xuXG4gICAgaWYgKHRoaXMub3B0cy5hdXRvUHJvY2VlZCAmJiAhdGhpcy5zY2hlZHVsZWRBdXRvUHJvY2VlZCkge1xuICAgICAgdGhpcy5zY2hlZHVsZWRBdXRvUHJvY2VlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2NoZWR1bGVkQXV0b1Byb2NlZWQgPSBudWxsO1xuICAgICAgICBfdGhpczIudXBsb2FkKCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNCk7XG4gICAgfVxuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnJlbW92ZUZpbGUgPSBmdW5jdGlvbiByZW1vdmVGaWxlKGZpbGVJRCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIF9nZXRTdGF0ZTMgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgIGZpbGVzID0gX2dldFN0YXRlMy5maWxlcyxcbiAgICAgICAgY3VycmVudFVwbG9hZHMgPSBfZ2V0U3RhdGUzLmN1cnJlbnRVcGxvYWRzO1xuXG4gICAgdmFyIHVwZGF0ZWRGaWxlcyA9IF9leHRlbmRzKHt9LCBmaWxlcyk7XG4gICAgdmFyIHJlbW92ZWRGaWxlID0gdXBkYXRlZEZpbGVzW2ZpbGVJRF07XG4gICAgZGVsZXRlIHVwZGF0ZWRGaWxlc1tmaWxlSURdO1xuXG4gICAgLy8gUmVtb3ZlIHRoaXMgZmlsZSBmcm9tIGl0cyBgY3VycmVudFVwbG9hZGAuXG4gICAgdmFyIHVwZGF0ZWRVcGxvYWRzID0gX2V4dGVuZHMoe30sIGN1cnJlbnRVcGxvYWRzKTtcbiAgICB2YXIgcmVtb3ZlVXBsb2FkcyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHVwZGF0ZWRVcGxvYWRzKS5mb3JFYWNoKGZ1bmN0aW9uICh1cGxvYWRJRCkge1xuICAgICAgdmFyIG5ld0ZpbGVJRHMgPSBjdXJyZW50VXBsb2Fkc1t1cGxvYWRJRF0uZmlsZUlEcy5maWx0ZXIoZnVuY3Rpb24gKHVwbG9hZEZpbGVJRCkge1xuICAgICAgICByZXR1cm4gdXBsb2FkRmlsZUlEICE9PSBmaWxlSUQ7XG4gICAgICB9KTtcbiAgICAgIC8vIFJlbW92ZSB0aGUgdXBsb2FkIGlmIG5vIGZpbGVzIGFyZSBhc3NvY2lhdGVkIHdpdGggaXQgYW55bW9yZS5cbiAgICAgIGlmIChuZXdGaWxlSURzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVVcGxvYWRzLnB1c2godXBsb2FkSUQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZWRVcGxvYWRzW3VwbG9hZElEXSA9IF9leHRlbmRzKHt9LCBjdXJyZW50VXBsb2Fkc1t1cGxvYWRJRF0sIHtcbiAgICAgICAgZmlsZUlEczogbmV3RmlsZUlEc1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRVcGxvYWRzOiB1cGRhdGVkVXBsb2FkcyxcbiAgICAgIGZpbGVzOiB1cGRhdGVkRmlsZXNcbiAgICB9KTtcblxuICAgIHJlbW92ZVVwbG9hZHMuZm9yRWFjaChmdW5jdGlvbiAodXBsb2FkSUQpIHtcbiAgICAgIF90aGlzMy5fcmVtb3ZlVXBsb2FkKHVwbG9hZElEKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NhbGN1bGF0ZVRvdGFsUHJvZ3Jlc3MoKTtcbiAgICB0aGlzLmVtaXQoJ2ZpbGUtcmVtb3ZlZCcsIHJlbW92ZWRGaWxlKTtcbiAgICB0aGlzLmxvZygnRmlsZSByZW1vdmVkOiAnICsgcmVtb3ZlZEZpbGUuaWQpO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnBhdXNlUmVzdW1lID0gZnVuY3Rpb24gcGF1c2VSZXN1bWUoZmlsZUlEKSB7XG4gICAgaWYgKCF0aGlzLmdldFN0YXRlKCkuY2FwYWJpbGl0aWVzLnJlc3VtYWJsZVVwbG9hZHMgfHwgdGhpcy5nZXRGaWxlKGZpbGVJRCkudXBsb2FkQ29tcGxldGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgd2FzUGF1c2VkID0gdGhpcy5nZXRGaWxlKGZpbGVJRCkuaXNQYXVzZWQgfHwgZmFsc2U7XG4gICAgdmFyIGlzUGF1c2VkID0gIXdhc1BhdXNlZDtcblxuICAgIHRoaXMuc2V0RmlsZVN0YXRlKGZpbGVJRCwge1xuICAgICAgaXNQYXVzZWQ6IGlzUGF1c2VkXG4gICAgfSk7XG5cbiAgICB0aGlzLmVtaXQoJ3VwbG9hZC1wYXVzZScsIGZpbGVJRCwgaXNQYXVzZWQpO1xuXG4gICAgcmV0dXJuIGlzUGF1c2VkO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnBhdXNlQWxsID0gZnVuY3Rpb24gcGF1c2VBbGwoKSB7XG4gICAgdmFyIHVwZGF0ZWRGaWxlcyA9IF9leHRlbmRzKHt9LCB0aGlzLmdldFN0YXRlKCkuZmlsZXMpO1xuICAgIHZhciBpblByb2dyZXNzVXBkYXRlZEZpbGVzID0gT2JqZWN0LmtleXModXBkYXRlZEZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiAhdXBkYXRlZEZpbGVzW2ZpbGVdLnByb2dyZXNzLnVwbG9hZENvbXBsZXRlICYmIHVwZGF0ZWRGaWxlc1tmaWxlXS5wcm9ncmVzcy51cGxvYWRTdGFydGVkO1xuICAgIH0pO1xuXG4gICAgaW5Qcm9ncmVzc1VwZGF0ZWRGaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICB2YXIgdXBkYXRlZEZpbGUgPSBfZXh0ZW5kcyh7fSwgdXBkYXRlZEZpbGVzW2ZpbGVdLCB7XG4gICAgICAgIGlzUGF1c2VkOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHVwZGF0ZWRGaWxlc1tmaWxlXSA9IHVwZGF0ZWRGaWxlO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogdXBkYXRlZEZpbGVzIH0pO1xuXG4gICAgdGhpcy5lbWl0KCdwYXVzZS1hbGwnKTtcbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5yZXN1bWVBbGwgPSBmdW5jdGlvbiByZXN1bWVBbGwoKSB7XG4gICAgdmFyIHVwZGF0ZWRGaWxlcyA9IF9leHRlbmRzKHt9LCB0aGlzLmdldFN0YXRlKCkuZmlsZXMpO1xuICAgIHZhciBpblByb2dyZXNzVXBkYXRlZEZpbGVzID0gT2JqZWN0LmtleXModXBkYXRlZEZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiAhdXBkYXRlZEZpbGVzW2ZpbGVdLnByb2dyZXNzLnVwbG9hZENvbXBsZXRlICYmIHVwZGF0ZWRGaWxlc1tmaWxlXS5wcm9ncmVzcy51cGxvYWRTdGFydGVkO1xuICAgIH0pO1xuXG4gICAgaW5Qcm9ncmVzc1VwZGF0ZWRGaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICB2YXIgdXBkYXRlZEZpbGUgPSBfZXh0ZW5kcyh7fSwgdXBkYXRlZEZpbGVzW2ZpbGVdLCB7XG4gICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgIH0pO1xuICAgICAgdXBkYXRlZEZpbGVzW2ZpbGVdID0gdXBkYXRlZEZpbGU7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzOiB1cGRhdGVkRmlsZXMgfSk7XG5cbiAgICB0aGlzLmVtaXQoJ3Jlc3VtZS1hbGwnKTtcbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5yZXRyeUFsbCA9IGZ1bmN0aW9uIHJldHJ5QWxsKCkge1xuICAgIHZhciB1cGRhdGVkRmlsZXMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5nZXRTdGF0ZSgpLmZpbGVzKTtcbiAgICB2YXIgZmlsZXNUb1JldHJ5ID0gT2JqZWN0LmtleXModXBkYXRlZEZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiB1cGRhdGVkRmlsZXNbZmlsZV0uZXJyb3I7XG4gICAgfSk7XG5cbiAgICBmaWxlc1RvUmV0cnkuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgdmFyIHVwZGF0ZWRGaWxlID0gX2V4dGVuZHMoe30sIHVwZGF0ZWRGaWxlc1tmaWxlXSwge1xuICAgICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICAgIGVycm9yOiBudWxsXG4gICAgICB9KTtcbiAgICAgIHVwZGF0ZWRGaWxlc1tmaWxlXSA9IHVwZGF0ZWRGaWxlO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlsZXM6IHVwZGF0ZWRGaWxlcyxcbiAgICAgIGVycm9yOiBudWxsXG4gICAgfSk7XG5cbiAgICB0aGlzLmVtaXQoJ3JldHJ5LWFsbCcsIGZpbGVzVG9SZXRyeSk7XG5cbiAgICB2YXIgdXBsb2FkSUQgPSB0aGlzLl9jcmVhdGVVcGxvYWQoZmlsZXNUb1JldHJ5KTtcbiAgICByZXR1cm4gdGhpcy5fcnVuVXBsb2FkKHVwbG9hZElEKTtcbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5jYW5jZWxBbGwgPSBmdW5jdGlvbiBjYW5jZWxBbGwoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLmVtaXQoJ2NhbmNlbC1hbGwnKTtcblxuICAgIHZhciBmaWxlcyA9IE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKS5maWxlcyk7XG4gICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZUlEKSB7XG4gICAgICBfdGhpczQucmVtb3ZlRmlsZShmaWxlSUQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhbGxvd05ld1VwbG9hZDogdHJ1ZSxcbiAgICAgIHRvdGFsUHJvZ3Jlc3M6IDAsXG4gICAgICBlcnJvcjogbnVsbFxuICAgIH0pO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnJldHJ5VXBsb2FkID0gZnVuY3Rpb24gcmV0cnlVcGxvYWQoZmlsZUlEKSB7XG4gICAgdmFyIHVwZGF0ZWRGaWxlcyA9IF9leHRlbmRzKHt9LCB0aGlzLmdldFN0YXRlKCkuZmlsZXMpO1xuICAgIHZhciB1cGRhdGVkRmlsZSA9IF9leHRlbmRzKHt9LCB1cGRhdGVkRmlsZXNbZmlsZUlEXSwgeyBlcnJvcjogbnVsbCwgaXNQYXVzZWQ6IGZhbHNlIH0pO1xuICAgIHVwZGF0ZWRGaWxlc1tmaWxlSURdID0gdXBkYXRlZEZpbGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWxlczogdXBkYXRlZEZpbGVzXG4gICAgfSk7XG5cbiAgICB0aGlzLmVtaXQoJ3VwbG9hZC1yZXRyeScsIGZpbGVJRCk7XG5cbiAgICB2YXIgdXBsb2FkSUQgPSB0aGlzLl9jcmVhdGVVcGxvYWQoW2ZpbGVJRF0pO1xuICAgIHJldHVybiB0aGlzLl9ydW5VcGxvYWQodXBsb2FkSUQpO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy5jYW5jZWxBbGwoKTtcbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5fY2FsY3VsYXRlUHJvZ3Jlc3MgPSBmdW5jdGlvbiBfY2FsY3VsYXRlUHJvZ3Jlc3MoZmlsZSwgZGF0YSkge1xuICAgIGlmICghdGhpcy5nZXRGaWxlKGZpbGUuaWQpKSB7XG4gICAgICB0aGlzLmxvZygnTm90IHNldHRpbmcgcHJvZ3Jlc3MgZm9yIGEgZmlsZSB0aGF0IGhhcyBiZWVuIHJlbW92ZWQ6ICcgKyBmaWxlLmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldEZpbGVTdGF0ZShmaWxlLmlkLCB7XG4gICAgICBwcm9ncmVzczogX2V4dGVuZHMoe30sIHRoaXMuZ2V0RmlsZShmaWxlLmlkKS5wcm9ncmVzcywge1xuICAgICAgICBieXRlc1VwbG9hZGVkOiBkYXRhLmJ5dGVzVXBsb2FkZWQsXG4gICAgICAgIGJ5dGVzVG90YWw6IGRhdGEuYnl0ZXNUb3RhbCxcbiAgICAgICAgcGVyY2VudGFnZTogTWF0aC5mbG9vcigoZGF0YS5ieXRlc1VwbG9hZGVkIC8gZGF0YS5ieXRlc1RvdGFsICogMTAwKS50b0ZpeGVkKDIpKVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIHRoaXMuX2NhbGN1bGF0ZVRvdGFsUHJvZ3Jlc3MoKTtcbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5fY2FsY3VsYXRlVG90YWxQcm9ncmVzcyA9IGZ1bmN0aW9uIF9jYWxjdWxhdGVUb3RhbFByb2dyZXNzKCkge1xuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBwcm9ncmVzcywgdXNpbmcgdGhlIG51bWJlciBvZiBmaWxlcyBjdXJyZW50bHkgdXBsb2FkaW5nLFxuICAgIC8vIG11bHRpcGxpZWQgYnkgMTAwIGFuZCB0aGUgc3VtbSBvZiBpbmRpdmlkdWFsIHByb2dyZXNzIG9mIGVhY2ggZmlsZVxuICAgIHZhciBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKTtcblxuICAgIHZhciBpblByb2dyZXNzID0gZmlsZXMuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gZmlsZS5wcm9ncmVzcy51cGxvYWRTdGFydGVkO1xuICAgIH0pO1xuXG4gICAgaWYgKGluUHJvZ3Jlc3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG90YWxQcm9ncmVzczogMCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2l6ZWRGaWxlcyA9IGluUHJvZ3Jlc3MuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gZmlsZS5wcm9ncmVzcy5ieXRlc1RvdGFsICE9IG51bGw7XG4gICAgfSk7XG4gICAgdmFyIHVuc2l6ZWRGaWxlcyA9IGluUHJvZ3Jlc3MuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gZmlsZS5wcm9ncmVzcy5ieXRlc1RvdGFsID09IG51bGw7XG4gICAgfSk7XG5cbiAgICBpZiAoc2l6ZWRGaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBwcm9ncmVzc01heCA9IGluUHJvZ3Jlc3MubGVuZ3RoO1xuICAgICAgdmFyIGN1cnJlbnRQcm9ncmVzcyA9IHVuc2l6ZWRGaWxlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZmlsZSkge1xuICAgICAgICByZXR1cm4gYWNjICsgZmlsZS5wcm9ncmVzcy5wZXJjZW50YWdlO1xuICAgICAgfSwgMCk7XG4gICAgICB2YXIgX3RvdGFsUHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKGN1cnJlbnRQcm9ncmVzcyAvIHByb2dyZXNzTWF4ICogMTAwKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFByb2dyZXNzOiBfdG90YWxQcm9ncmVzcyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdG90YWxTaXplID0gc2l6ZWRGaWxlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZmlsZSkge1xuICAgICAgcmV0dXJuIGFjYyArIGZpbGUucHJvZ3Jlc3MuYnl0ZXNUb3RhbDtcbiAgICB9LCAwKTtcbiAgICB2YXIgYXZlcmFnZVNpemUgPSB0b3RhbFNpemUgLyBzaXplZEZpbGVzLmxlbmd0aDtcbiAgICB0b3RhbFNpemUgKz0gYXZlcmFnZVNpemUgKiB1bnNpemVkRmlsZXMubGVuZ3RoO1xuXG4gICAgdmFyIHVwbG9hZGVkU2l6ZSA9IDA7XG4gICAgc2l6ZWRGaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICB1cGxvYWRlZFNpemUgKz0gZmlsZS5wcm9ncmVzcy5ieXRlc1VwbG9hZGVkO1xuICAgIH0pO1xuICAgIHVuc2l6ZWRGaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICB1cGxvYWRlZFNpemUgKz0gYXZlcmFnZVNpemUgKiAoZmlsZS5wcm9ncmVzcy5wZXJjZW50YWdlIHx8IDApO1xuICAgIH0pO1xuXG4gICAgdmFyIHRvdGFsUHJvZ3Jlc3MgPSB0b3RhbFNpemUgPT09IDAgPyAwIDogTWF0aC5yb3VuZCh1cGxvYWRlZFNpemUgLyB0b3RhbFNpemUgKiAxMDApO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsUHJvZ3Jlc3M6IHRvdGFsUHJvZ3Jlc3MgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBsaXN0ZW5lcnMgZm9yIGFsbCBnbG9iYWwgYWN0aW9ucywgbGlrZTpcbiAgICogYGVycm9yYCwgYGZpbGUtcmVtb3ZlZGAsIGB1cGxvYWQtcHJvZ3Jlc3NgXG4gICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUuX2FkZExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB0aGlzLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgX3RoaXM1LnNldFN0YXRlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCd1cGxvYWQtZXJyb3InLCBmdW5jdGlvbiAoZmlsZSwgZXJyb3IpIHtcbiAgICAgIF90aGlzNS5zZXRGaWxlU3RhdGUoZmlsZS5pZCwgeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgIF90aGlzNS5zZXRTdGF0ZSh7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuXG4gICAgICB2YXIgbWVzc2FnZSA9IF90aGlzNS5pMThuKCdmYWlsZWRUb1VwbG9hZCcsIHsgZmlsZTogZmlsZS5uYW1lIH0pO1xuICAgICAgaWYgKCh0eXBlb2YgZXJyb3IgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGVycm9yKSkgPT09ICdvYmplY3QnICYmIGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZSA9IHsgbWVzc2FnZTogbWVzc2FnZSwgZGV0YWlsczogZXJyb3IubWVzc2FnZSB9O1xuICAgICAgfVxuICAgICAgX3RoaXM1LmluZm8obWVzc2FnZSwgJ2Vycm9yJywgNTAwMCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCd1cGxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczUuc2V0U3RhdGUoeyBlcnJvcjogbnVsbCB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3VwbG9hZC1zdGFydGVkJywgZnVuY3Rpb24gKGZpbGUsIHVwbG9hZCkge1xuICAgICAgaWYgKCFfdGhpczUuZ2V0RmlsZShmaWxlLmlkKSkge1xuICAgICAgICBfdGhpczUubG9nKCdOb3Qgc2V0dGluZyBwcm9ncmVzcyBmb3IgYSBmaWxlIHRoYXQgaGFzIGJlZW4gcmVtb3ZlZDogJyArIGZpbGUuaWQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpczUuc2V0RmlsZVN0YXRlKGZpbGUuaWQsIHtcbiAgICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgICB1cGxvYWRTdGFydGVkOiBEYXRlLm5vdygpLFxuICAgICAgICAgIHVwbG9hZENvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICBwZXJjZW50YWdlOiAwLFxuICAgICAgICAgIGJ5dGVzVXBsb2FkZWQ6IDAsXG4gICAgICAgICAgYnl0ZXNUb3RhbDogZmlsZS5zaXplXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gdXBsb2FkIHByb2dyZXNzIGV2ZW50cyBjYW4gb2NjdXIgZnJlcXVlbnRseSwgZXNwZWNpYWxseSB3aGVuIHlvdSBoYXZlIGEgZ29vZFxuICAgIC8vIGNvbm5lY3Rpb24gdG8gdGhlIHJlbW90ZSBzZXJ2ZXIuIFRoZXJlZm9yZSwgd2UgYXJlIHRocm90dGVsaW5nIHRoZW0gdG9cbiAgICAvLyBwcmV2ZW50IGFjY2Vzc2l2ZSBmdW5jdGlvbiBjYWxscy5cbiAgICAvLyBzZWUgYWxzbzogaHR0cHM6Ly9naXRodWIuY29tL3R1cy90dXMtanMtY2xpZW50L2NvbW1pdC85OTQwZjI3YjIzNjFmZDdlMTBiYTU4YjA5YjYwZDgyNDIyMTgzYmJiXG4gICAgLy8gY29uc3QgX3Rocm90dGxlZENhbGN1bGF0ZVByb2dyZXNzID0gdGhyb3R0bGUodGhpcy5fY2FsY3VsYXRlUHJvZ3Jlc3MsIDEwMCwgeyBsZWFkaW5nOiB0cnVlLCB0cmFpbGluZzogdHJ1ZSB9KVxuXG4gICAgdGhpcy5vbigndXBsb2FkLXByb2dyZXNzJywgdGhpcy5fY2FsY3VsYXRlUHJvZ3Jlc3MpO1xuXG4gICAgdGhpcy5vbigndXBsb2FkLXN1Y2Nlc3MnLCBmdW5jdGlvbiAoZmlsZSwgdXBsb2FkUmVzcCwgdXBsb2FkVVJMKSB7XG4gICAgICB2YXIgY3VycmVudFByb2dyZXNzID0gX3RoaXM1LmdldEZpbGUoZmlsZS5pZCkucHJvZ3Jlc3M7XG4gICAgICBfdGhpczUuc2V0RmlsZVN0YXRlKGZpbGUuaWQsIHtcbiAgICAgICAgcHJvZ3Jlc3M6IF9leHRlbmRzKHt9LCBjdXJyZW50UHJvZ3Jlc3MsIHtcbiAgICAgICAgICB1cGxvYWRDb21wbGV0ZTogdHJ1ZSxcbiAgICAgICAgICBwZXJjZW50YWdlOiAxMDAsXG4gICAgICAgICAgYnl0ZXNVcGxvYWRlZDogY3VycmVudFByb2dyZXNzLmJ5dGVzVG90YWxcbiAgICAgICAgfSksXG4gICAgICAgIHVwbG9hZFVSTDogdXBsb2FkVVJMLFxuICAgICAgICBpc1BhdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczUuX2NhbGN1bGF0ZVRvdGFsUHJvZ3Jlc3MoKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3ByZXByb2Nlc3MtcHJvZ3Jlc3MnLCBmdW5jdGlvbiAoZmlsZSwgcHJvZ3Jlc3MpIHtcbiAgICAgIGlmICghX3RoaXM1LmdldEZpbGUoZmlsZS5pZCkpIHtcbiAgICAgICAgX3RoaXM1LmxvZygnTm90IHNldHRpbmcgcHJvZ3Jlc3MgZm9yIGEgZmlsZSB0aGF0IGhhcyBiZWVuIHJlbW92ZWQ6ICcgKyBmaWxlLmlkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3RoaXM1LnNldEZpbGVTdGF0ZShmaWxlLmlkLCB7XG4gICAgICAgIHByb2dyZXNzOiBfZXh0ZW5kcyh7fSwgX3RoaXM1LmdldEZpbGUoZmlsZS5pZCkucHJvZ3Jlc3MsIHtcbiAgICAgICAgICBwcmVwcm9jZXNzOiBwcm9ncmVzc1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdwcmVwcm9jZXNzLWNvbXBsZXRlJywgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIGlmICghX3RoaXM1LmdldEZpbGUoZmlsZS5pZCkpIHtcbiAgICAgICAgX3RoaXM1LmxvZygnTm90IHNldHRpbmcgcHJvZ3Jlc3MgZm9yIGEgZmlsZSB0aGF0IGhhcyBiZWVuIHJlbW92ZWQ6ICcgKyBmaWxlLmlkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGZpbGVzID0gX2V4dGVuZHMoe30sIF90aGlzNS5nZXRTdGF0ZSgpLmZpbGVzKTtcbiAgICAgIGZpbGVzW2ZpbGUuaWRdID0gX2V4dGVuZHMoe30sIGZpbGVzW2ZpbGUuaWRdLCB7XG4gICAgICAgIHByb2dyZXNzOiBfZXh0ZW5kcyh7fSwgZmlsZXNbZmlsZS5pZF0ucHJvZ3Jlc3MpXG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSBmaWxlc1tmaWxlLmlkXS5wcm9ncmVzcy5wcmVwcm9jZXNzO1xuXG4gICAgICBfdGhpczUuc2V0U3RhdGUoeyBmaWxlczogZmlsZXMgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdwb3N0cHJvY2Vzcy1wcm9ncmVzcycsIGZ1bmN0aW9uIChmaWxlLCBwcm9ncmVzcykge1xuICAgICAgaWYgKCFfdGhpczUuZ2V0RmlsZShmaWxlLmlkKSkge1xuICAgICAgICBfdGhpczUubG9nKCdOb3Qgc2V0dGluZyBwcm9ncmVzcyBmb3IgYSBmaWxlIHRoYXQgaGFzIGJlZW4gcmVtb3ZlZDogJyArIGZpbGUuaWQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpczUuc2V0RmlsZVN0YXRlKGZpbGUuaWQsIHtcbiAgICAgICAgcHJvZ3Jlc3M6IF9leHRlbmRzKHt9LCBfdGhpczUuZ2V0U3RhdGUoKS5maWxlc1tmaWxlLmlkXS5wcm9ncmVzcywge1xuICAgICAgICAgIHBvc3Rwcm9jZXNzOiBwcm9ncmVzc1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdwb3N0cHJvY2Vzcy1jb21wbGV0ZScsIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICBpZiAoIV90aGlzNS5nZXRGaWxlKGZpbGUuaWQpKSB7XG4gICAgICAgIF90aGlzNS5sb2coJ05vdCBzZXR0aW5nIHByb2dyZXNzIGZvciBhIGZpbGUgdGhhdCBoYXMgYmVlbiByZW1vdmVkOiAnICsgZmlsZS5pZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBmaWxlcyA9IF9leHRlbmRzKHt9LCBfdGhpczUuZ2V0U3RhdGUoKS5maWxlcyk7XG4gICAgICBmaWxlc1tmaWxlLmlkXSA9IF9leHRlbmRzKHt9LCBmaWxlc1tmaWxlLmlkXSwge1xuICAgICAgICBwcm9ncmVzczogX2V4dGVuZHMoe30sIGZpbGVzW2ZpbGUuaWRdLnByb2dyZXNzKVxuICAgICAgfSk7XG4gICAgICBkZWxldGUgZmlsZXNbZmlsZS5pZF0ucHJvZ3Jlc3MucG9zdHByb2Nlc3M7XG4gICAgICAvLyBUT0RPIHNob3VsZCB3ZSBzZXQgc29tZSBraW5kIG9mIGBmdWxseUNvbXBsZXRlYCBwcm9wZXJ0eSBvbiB0aGUgZmlsZSBvYmplY3RcbiAgICAgIC8vIHNvIGl0J3MgZWFzaWVyIHRvIHNlZSB0aGF0IHRoZSBmaWxlIGlzIHVwbG9hZOKApmZ1bGx5IGNvbXBsZXRl4oCmcmF0aGVyIHRoYW5cbiAgICAgIC8vIHdoYXQgd2UgaGF2ZSB0byBkbyBub3cgKGB1cGxvYWRDb21wbGV0ZSAmJiAhcG9zdHByb2Nlc3NgKVxuXG4gICAgICBfdGhpczUuc2V0U3RhdGUoeyBmaWxlczogZmlsZXMgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdyZXN0b3JlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEZpbGVzIG1heSBoYXZlIGNoYW5nZWQtLWVuc3VyZSBwcm9ncmVzcyBpcyBzdGlsbCBhY2N1cmF0ZS5cbiAgICAgIF90aGlzNS5fY2FsY3VsYXRlVG90YWxQcm9ncmVzcygpO1xuICAgIH0pO1xuXG4gICAgLy8gc2hvdyBpbmZvcm1lciBpZiBvZmZsaW5lXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXM1LnVwZGF0ZU9ubGluZVN0YXR1cygpO1xuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNS51cGRhdGVPbmxpbmVTdGF0dXMoKTtcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczUudXBkYXRlT25saW5lU3RhdHVzKCk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gIH07XG5cbiAgVXBweS5wcm90b3R5cGUudXBkYXRlT25saW5lU3RhdHVzID0gZnVuY3Rpb24gdXBkYXRlT25saW5lU3RhdHVzKCkge1xuICAgIHZhciBvbmxpbmUgPSB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvci5vbkxpbmUgIT09ICd1bmRlZmluZWQnID8gd2luZG93Lm5hdmlnYXRvci5vbkxpbmUgOiB0cnVlO1xuICAgIGlmICghb25saW5lKSB7XG4gICAgICB0aGlzLmVtaXQoJ2lzLW9mZmxpbmUnKTtcbiAgICAgIHRoaXMuaW5mbyh0aGlzLmkxOG4oJ25vSW50ZXJuZXRDb25uZWN0aW9uJyksICdlcnJvcicsIDApO1xuICAgICAgdGhpcy53YXNPZmZsaW5lID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0KCdpcy1vbmxpbmUnKTtcbiAgICAgIGlmICh0aGlzLndhc09mZmxpbmUpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdiYWNrLW9ubGluZScpO1xuICAgICAgICB0aGlzLmluZm8odGhpcy5pMThuKCdjb25uZWN0ZWRUb0ludGVybmV0JyksICdzdWNjZXNzJywgMzAwMCk7XG4gICAgICAgIHRoaXMud2FzT2ZmbGluZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uIGdldElEKCkge1xuICAgIHJldHVybiB0aGlzLm9wdHMuaWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHBsdWdpbiB3aXRoIENvcmUuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBQbHVnaW4gb2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0c10gb2JqZWN0IHdpdGggb3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gUGx1Z2luXG4gICAqIEByZXR1cm4ge09iamVjdH0gc2VsZiBmb3IgY2hhaW5pbmdcbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoUGx1Z2luLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBQbHVnaW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBtc2cgPSAnRXhwZWN0ZWQgYSBwbHVnaW4gY2xhc3MsIGJ1dCBnb3QgJyArIChQbHVnaW4gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgUGx1Z2luID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihQbHVnaW4pKSArICcuJyArICcgUGxlYXNlIHZlcmlmeSB0aGF0IHRoZSBwbHVnaW4gd2FzIGltcG9ydGVkIGFuZCBzcGVsbGVkIGNvcnJlY3RseS4nO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtc2cpO1xuICAgIH1cblxuICAgIC8vIEluc3RhbnRpYXRlXG4gICAgdmFyIHBsdWdpbiA9IG5ldyBQbHVnaW4odGhpcywgb3B0cyk7XG4gICAgdmFyIHBsdWdpbklkID0gcGx1Z2luLmlkO1xuICAgIHRoaXMucGx1Z2luc1twbHVnaW4udHlwZV0gPSB0aGlzLnBsdWdpbnNbcGx1Z2luLnR5cGVdIHx8IFtdO1xuXG4gICAgaWYgKCFwbHVnaW5JZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIHBsdWdpbiBtdXN0IGhhdmUgYW4gaWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIXBsdWdpbi50eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgcGx1Z2luIG11c3QgaGF2ZSBhIHR5cGUnKTtcbiAgICB9XG5cbiAgICB2YXIgZXhpc3RzUGx1Z2luQWxyZWFkeSA9IHRoaXMuZ2V0UGx1Z2luKHBsdWdpbklkKTtcbiAgICBpZiAoZXhpc3RzUGx1Z2luQWxyZWFkeSkge1xuICAgICAgdmFyIF9tc2cgPSAnQWxyZWFkeSBmb3VuZCBhIHBsdWdpbiBuYW1lZCBcXCcnICsgZXhpc3RzUGx1Z2luQWxyZWFkeS5pZCArICdcXCcuICcgKyAoJ1RyaWVkIHRvIHVzZTogXFwnJyArIHBsdWdpbklkICsgJ1xcJy5cXG4nKSArICdVcHB5IHBsdWdpbnMgbXVzdCBoYXZlIHVuaXF1ZSBcXCdpZFxcJyBvcHRpb25zLiBTZWUgaHR0cHM6Ly91cHB5LmlvL2RvY3MvcGx1Z2lucy8jaWQuJztcbiAgICAgIHRocm93IG5ldyBFcnJvcihfbXNnKTtcbiAgICB9XG5cbiAgICB0aGlzLnBsdWdpbnNbcGx1Z2luLnR5cGVdLnB1c2gocGx1Z2luKTtcbiAgICBwbHVnaW4uaW5zdGFsbCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmQgb25lIFBsdWdpbiBieSBuYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgcGx1Z2luIGlkXG4gICAqIEByZXR1cm4ge29iamVjdCB8IGJvb2xlYW59XG4gICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUuZ2V0UGx1Z2luID0gZnVuY3Rpb24gZ2V0UGx1Z2luKGlkKSB7XG4gICAgdmFyIGZvdW5kUGx1Z2luID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdGVQbHVnaW5zKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIGlmIChwbHVnaW4uaWQgPT09IGlkKSB7XG4gICAgICAgIGZvdW5kUGx1Z2luID0gcGx1Z2luO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kUGx1Z2luO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJdGVyYXRlIHRocm91Z2ggYWxsIGB1c2VgZCBwbHVnaW5zLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2QgdGhhdCB3aWxsIGJlIHJ1biBvbiBlYWNoIHBsdWdpblxuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLml0ZXJhdGVQbHVnaW5zID0gZnVuY3Rpb24gaXRlcmF0ZVBsdWdpbnMobWV0aG9kKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLnBsdWdpbnMpLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpblR5cGUpIHtcbiAgICAgIF90aGlzNi5wbHVnaW5zW3BsdWdpblR5cGVdLmZvckVhY2gobWV0aG9kKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogVW5pbnN0YWxsIGFuZCByZW1vdmUgYSBwbHVnaW4uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpbnN0YW5jZSBUaGUgcGx1Z2luIGluc3RhbmNlIHRvIHJlbW92ZS5cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5yZW1vdmVQbHVnaW4gPSBmdW5jdGlvbiByZW1vdmVQbHVnaW4oaW5zdGFuY2UpIHtcbiAgICB0aGlzLmxvZygnUmVtb3ZpbmcgcGx1Z2luICcgKyBpbnN0YW5jZS5pZCk7XG4gICAgdGhpcy5lbWl0KCdwbHVnaW4tcmVtb3ZlJywgaW5zdGFuY2UpO1xuXG4gICAgaWYgKGluc3RhbmNlLnVuaW5zdGFsbCkge1xuICAgICAgaW5zdGFuY2UudW5pbnN0YWxsKCk7XG4gICAgfVxuXG4gICAgdmFyIGxpc3QgPSB0aGlzLnBsdWdpbnNbaW5zdGFuY2UudHlwZV0uc2xpY2UoKTtcbiAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YoaW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMucGx1Z2luc1tpbnN0YW5jZS50eXBlXSA9IGxpc3Q7XG4gICAgfVxuXG4gICAgdmFyIHVwZGF0ZWRTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICBkZWxldGUgdXBkYXRlZFN0YXRlLnBsdWdpbnNbaW5zdGFuY2UuaWRdO1xuICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlZFN0YXRlKTtcbiAgfTtcblxuICAvKipcbiAgICogVW5pbnN0YWxsIGFsbCBwbHVnaW5zIGFuZCBjbG9zZSBkb3duIHRoaXMgVXBweSBpbnN0YW5jZS5cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgdGhpcy5sb2coJ0Nsb3NpbmcgVXBweSBpbnN0YW5jZSAnICsgdGhpcy5vcHRzLmlkICsgJzogcmVtb3ZpbmcgYWxsIGZpbGVzIGFuZCB1bmluc3RhbGxpbmcgcGx1Z2lucycpO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuXG4gICAgdGhpcy5fc3RvcmVVbnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5pdGVyYXRlUGx1Z2lucyhmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBfdGhpczcucmVtb3ZlUGx1Z2luKHBsdWdpbik7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICogU2V0IGluZm8gbWVzc2FnZSBpbiBgc3RhdGUuaW5mb2AsIHNvIHRoYXQgVUkgcGx1Z2lucyBsaWtlIGBJbmZvcm1lcmBcbiAgKiBjYW4gZGlzcGxheSB0aGUgbWVzc2FnZS5cbiAgKlxuICAqIEBwYXJhbSB7c3RyaW5nIHwgb2JqZWN0fSBtZXNzYWdlIE1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkIGJ5IHRoZSBpbmZvcm1lclxuICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV1cbiAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uXVxuICAqL1xuXG4gIFVwcHkucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHtcbiAgICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ2luZm8nO1xuICAgIHZhciBkdXJhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMzAwMDtcblxuICAgIHZhciBpc0NvbXBsZXhNZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtZXNzYWdlKSkgPT09ICdvYmplY3QnO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmZvOiB7XG4gICAgICAgIGlzSGlkZGVuOiBmYWxzZSxcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgbWVzc2FnZTogaXNDb21wbGV4TWVzc2FnZSA/IG1lc3NhZ2UubWVzc2FnZSA6IG1lc3NhZ2UsXG4gICAgICAgIGRldGFpbHM6IGlzQ29tcGxleE1lc3NhZ2UgPyBtZXNzYWdlLmRldGFpbHMgOiBudWxsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmVtaXQoJ2luZm8tdmlzaWJsZScpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuaW5mb1RpbWVvdXRJRCk7XG4gICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICB0aGlzLmluZm9UaW1lb3V0SUQgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaGlkZSB0aGUgaW5mb3JtZXIgYWZ0ZXIgYGR1cmF0aW9uYCBtaWxsaXNlY29uZHNcbiAgICB0aGlzLmluZm9UaW1lb3V0SUQgPSBzZXRUaW1lb3V0KHRoaXMuaGlkZUluZm8sIGR1cmF0aW9uKTtcbiAgfTtcblxuICBVcHB5LnByb3RvdHlwZS5oaWRlSW5mbyA9IGZ1bmN0aW9uIGhpZGVJbmZvKCkge1xuICAgIHZhciBuZXdJbmZvID0gX2V4dGVuZHMoe30sIHRoaXMuZ2V0U3RhdGUoKS5pbmZvLCB7XG4gICAgICBpc0hpZGRlbjogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5mbzogbmV3SW5mb1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnaW5mby1oaWRkZW4nKTtcbiAgfTtcblxuICAvKipcbiAgICogTG9ncyBzdHVmZiB0byBjb25zb2xlLCBvbmx5IGlmIGBkZWJ1Z2AgaXMgc2V0IHRvIHRydWUuIFNpbGVudCBpbiBwcm9kdWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG1zZyB0byBsb2dcbiAgICogQHBhcmFtIHtTdHJpbmd9IFt0eXBlXSBvcHRpb25hbCBgZXJyb3JgIG9yIGB3YXJuaW5nYFxuICAgKi9cblxuXG4gIFVwcHkucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIGxvZyhtc2csIHR5cGUpIHtcbiAgICBpZiAoIXRoaXMub3B0cy5kZWJ1Zykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0gJ1tVcHB5XSBbJyArIGdldFRpbWVTdGFtcCgpICsgJ10gJyArIG1zZztcblxuICAgIHdpbmRvd1sndXBweUxvZyddID0gd2luZG93Wyd1cHB5TG9nJ10gKyAnXFxuJyArICdERUJVRyBMT0c6ICcgKyBtc2c7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1zZyA9PT0gJycgKyBtc2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlID0gJ1tVcHB5XSBbJyArIGdldFRpbWVTdGFtcCgpICsgJ10nO1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICBjb25zb2xlLmRpcihtc2cpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogT2Jzb2xldGUsIGV2ZW50IGxpc3RlbmVycyBhcmUgbm93IGFkZGVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiBydW4oKSB7XG4gICAgdGhpcy5sb2coJ0NhbGxpbmcgcnVuKCkgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeS4nLCAnd2FybmluZycpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXN0b3JlIGFuIHVwbG9hZCBieSBpdHMgSUQuXG4gICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUucmVzdG9yZSA9IGZ1bmN0aW9uIHJlc3RvcmUodXBsb2FkSUQpIHtcbiAgICB0aGlzLmxvZygnQ29yZTogYXR0ZW1wdGluZyB0byByZXN0b3JlIHVwbG9hZCBcIicgKyB1cGxvYWRJRCArICdcIicpO1xuXG4gICAgaWYgKCF0aGlzLmdldFN0YXRlKCkuY3VycmVudFVwbG9hZHNbdXBsb2FkSURdKSB7XG4gICAgICB0aGlzLl9yZW1vdmVVcGxvYWQodXBsb2FkSUQpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignTm9uZXhpc3RlbnQgdXBsb2FkJykpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ydW5VcGxvYWQodXBsb2FkSUQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gdXBsb2FkIGZvciBhIGJ1bmNoIG9mIGZpbGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGZpbGVJRHMgRmlsZSBJRHMgdG8gaW5jbHVkZSBpbiB0aGlzIHVwbG9hZC5cbiAgICogQHJldHVybiB7c3RyaW5nfSBJRCBvZiB0aGlzIHVwbG9hZC5cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5fY3JlYXRlVXBsb2FkID0gZnVuY3Rpb24gX2NyZWF0ZVVwbG9hZChmaWxlSURzKSB7XG4gICAgdmFyIF9leHRlbmRzNDtcblxuICAgIHZhciBfZ2V0U3RhdGU0ID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICBhbGxvd05ld1VwbG9hZCA9IF9nZXRTdGF0ZTQuYWxsb3dOZXdVcGxvYWQsXG4gICAgICAgIGN1cnJlbnRVcGxvYWRzID0gX2dldFN0YXRlNC5jdXJyZW50VXBsb2FkcztcblxuICAgIGlmICghYWxsb3dOZXdVcGxvYWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBhIG5ldyB1cGxvYWQ6IGFscmVhZHkgdXBsb2FkaW5nLicpO1xuICAgIH1cblxuICAgIHZhciB1cGxvYWRJRCA9IGN1aWQoKTtcblxuICAgIHRoaXMuZW1pdCgndXBsb2FkJywge1xuICAgICAgaWQ6IHVwbG9hZElELFxuICAgICAgZmlsZUlEczogZmlsZUlEc1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhbGxvd05ld1VwbG9hZDogdGhpcy5vcHRzLmFsbG93TXVsdGlwbGVVcGxvYWRzICE9PSBmYWxzZSxcblxuICAgICAgY3VycmVudFVwbG9hZHM6IF9leHRlbmRzKHt9LCBjdXJyZW50VXBsb2FkcywgKF9leHRlbmRzNCA9IHt9LCBfZXh0ZW5kczRbdXBsb2FkSURdID0ge1xuICAgICAgICBmaWxlSURzOiBmaWxlSURzLFxuICAgICAgICBzdGVwOiAwLFxuICAgICAgICByZXN1bHQ6IHt9XG4gICAgICB9LCBfZXh0ZW5kczQpKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVwbG9hZElEO1xuICB9O1xuXG4gIFVwcHkucHJvdG90eXBlLl9nZXRVcGxvYWQgPSBmdW5jdGlvbiBfZ2V0VXBsb2FkKHVwbG9hZElEKSB7XG4gICAgdmFyIF9nZXRTdGF0ZTUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgIGN1cnJlbnRVcGxvYWRzID0gX2dldFN0YXRlNS5jdXJyZW50VXBsb2FkcztcblxuICAgIHJldHVybiBjdXJyZW50VXBsb2Fkc1t1cGxvYWRJRF07XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBkYXRhIHRvIGFuIHVwbG9hZCdzIHJlc3VsdCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cGxvYWRJRCBUaGUgSUQgb2YgdGhlIHVwbG9hZC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgRGF0YSBwcm9wZXJ0aWVzIHRvIGFkZCB0byB0aGUgcmVzdWx0IG9iamVjdC5cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS5hZGRSZXN1bHREYXRhID0gZnVuY3Rpb24gYWRkUmVzdWx0RGF0YSh1cGxvYWRJRCwgZGF0YSkge1xuICAgIHZhciBfZXh0ZW5kczU7XG5cbiAgICBpZiAoIXRoaXMuX2dldFVwbG9hZCh1cGxvYWRJRCkpIHtcbiAgICAgIHRoaXMubG9nKCdOb3Qgc2V0dGluZyByZXN1bHQgZm9yIGFuIHVwbG9hZCB0aGF0IGhhcyBiZWVuIHJlbW92ZWQ6ICcgKyB1cGxvYWRJRCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjdXJyZW50VXBsb2FkcyA9IHRoaXMuZ2V0U3RhdGUoKS5jdXJyZW50VXBsb2FkcztcbiAgICB2YXIgY3VycmVudFVwbG9hZCA9IF9leHRlbmRzKHt9LCBjdXJyZW50VXBsb2Fkc1t1cGxvYWRJRF0sIHtcbiAgICAgIHJlc3VsdDogX2V4dGVuZHMoe30sIGN1cnJlbnRVcGxvYWRzW3VwbG9hZElEXS5yZXN1bHQsIGRhdGEpXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50VXBsb2FkczogX2V4dGVuZHMoe30sIGN1cnJlbnRVcGxvYWRzLCAoX2V4dGVuZHM1ID0ge30sIF9leHRlbmRzNVt1cGxvYWRJRF0gPSBjdXJyZW50VXBsb2FkLCBfZXh0ZW5kczUpKVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gdXBsb2FkLCBlZy4gaWYgaXQgaGFzIGJlZW4gY2FuY2VsZWQgb3IgY29tcGxldGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXBsb2FkSUQgVGhlIElEIG9mIHRoZSB1cGxvYWQuXG4gICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUuX3JlbW92ZVVwbG9hZCA9IGZ1bmN0aW9uIF9yZW1vdmVVcGxvYWQodXBsb2FkSUQpIHtcbiAgICB2YXIgY3VycmVudFVwbG9hZHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5nZXRTdGF0ZSgpLmN1cnJlbnRVcGxvYWRzKTtcbiAgICBkZWxldGUgY3VycmVudFVwbG9hZHNbdXBsb2FkSURdO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50VXBsb2FkczogY3VycmVudFVwbG9hZHNcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogUnVuIGFuIHVwbG9hZC4gVGhpcyBwaWNrcyB1cCB3aGVyZSBpdCBsZWZ0IG9mZiBpbiBjYXNlIHRoZSB1cGxvYWQgaXMgYmVpbmcgcmVzdG9yZWQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgVXBweS5wcm90b3R5cGUuX3J1blVwbG9hZCA9IGZ1bmN0aW9uIF9ydW5VcGxvYWQodXBsb2FkSUQpIHtcbiAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgIHZhciB1cGxvYWREYXRhID0gdGhpcy5nZXRTdGF0ZSgpLmN1cnJlbnRVcGxvYWRzW3VwbG9hZElEXTtcbiAgICB2YXIgcmVzdG9yZVN0ZXAgPSB1cGxvYWREYXRhLnN0ZXA7XG5cbiAgICB2YXIgc3RlcHMgPSBbXS5jb25jYXQodGhpcy5wcmVQcm9jZXNzb3JzLCB0aGlzLnVwbG9hZGVycywgdGhpcy5wb3N0UHJvY2Vzc29ycyk7XG4gICAgdmFyIGxhc3RTdGVwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgc3RlcHMuZm9yRWFjaChmdW5jdGlvbiAoZm4sIHN0ZXApIHtcbiAgICAgIC8vIFNraXAgdGhpcyBzdGVwIGlmIHdlIGFyZSByZXN0b3JpbmcgYW5kIGhhdmUgYWxyZWFkeSBjb21wbGV0ZWQgdGhpcyBzdGVwIGJlZm9yZS5cbiAgICAgIGlmIChzdGVwIDwgcmVzdG9yZVN0ZXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsYXN0U3RlcCA9IGxhc3RTdGVwLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2V4dGVuZHM2O1xuXG4gICAgICAgIHZhciBfZ2V0U3RhdGU2ID0gX3RoaXM4LmdldFN0YXRlKCksXG4gICAgICAgICAgICBjdXJyZW50VXBsb2FkcyA9IF9nZXRTdGF0ZTYuY3VycmVudFVwbG9hZHM7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRVcGxvYWQgPSBfZXh0ZW5kcyh7fSwgY3VycmVudFVwbG9hZHNbdXBsb2FkSURdLCB7XG4gICAgICAgICAgc3RlcDogc3RlcFxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXM4LnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50VXBsb2FkczogX2V4dGVuZHMoe30sIGN1cnJlbnRVcGxvYWRzLCAoX2V4dGVuZHM2ID0ge30sIF9leHRlbmRzNlt1cGxvYWRJRF0gPSBjdXJyZW50VXBsb2FkLCBfZXh0ZW5kczYpKVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUT0RPIGdpdmUgdGhpcyB0aGUgYGN1cnJlbnRVcGxvYWRgIG9iamVjdCBhcyBpdHMgb25seSBwYXJhbWV0ZXIgbWF5YmU/XG4gICAgICAgIC8vIE90aGVyd2lzZSB3aGVuIG1vcmUgbWV0YWRhdGEgbWF5IGJlIGFkZGVkIHRvIHRoZSB1cGxvYWQgdGhpcyB3b3VsZCBrZWVwIGdldHRpbmcgbW9yZSBwYXJhbWV0ZXJzXG4gICAgICAgIHJldHVybiBmbihjdXJyZW50VXBsb2FkLmZpbGVJRHMsIHVwbG9hZElEKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gTm90IHJldHVybmluZyB0aGUgYGNhdGNoYGVkIHByb21pc2UsIGJlY2F1c2Ugd2Ugc3RpbGwgd2FudCB0byByZXR1cm4gYSByZWplY3RlZFxuICAgIC8vIHByb21pc2UgZnJvbSB0aGlzIG1ldGhvZCBpZiB0aGUgdXBsb2FkIGZhaWxlZC5cbiAgICBsYXN0U3RlcC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBfdGhpczguZW1pdCgnZXJyb3InLCBlcnIsIHVwbG9hZElEKTtcbiAgICAgIF90aGlzOC5fcmVtb3ZlVXBsb2FkKHVwbG9hZElEKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0U3RlcC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFNldCByZXN1bHQgZGF0YS5cbiAgICAgIHZhciBfZ2V0U3RhdGU3ID0gX3RoaXM4LmdldFN0YXRlKCksXG4gICAgICAgICAgY3VycmVudFVwbG9hZHMgPSBfZ2V0U3RhdGU3LmN1cnJlbnRVcGxvYWRzO1xuXG4gICAgICB2YXIgY3VycmVudFVwbG9hZCA9IGN1cnJlbnRVcGxvYWRzW3VwbG9hZElEXTtcbiAgICAgIGlmICghY3VycmVudFVwbG9hZCkge1xuICAgICAgICBfdGhpczgubG9nKCdOb3Qgc2V0dGluZyByZXN1bHQgZm9yIGFuIHVwbG9hZCB0aGF0IGhhcyBiZWVuIHJlbW92ZWQ6ICcgKyB1cGxvYWRJRCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbGVzID0gY3VycmVudFVwbG9hZC5maWxlSURzLm1hcChmdW5jdGlvbiAoZmlsZUlEKSB7XG4gICAgICAgIHJldHVybiBfdGhpczguZ2V0RmlsZShmaWxlSUQpO1xuICAgICAgfSk7XG4gICAgICB2YXIgc3VjY2Vzc2Z1bCA9IGZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICByZXR1cm4gIWZpbGUuZXJyb3I7XG4gICAgICB9KTtcbiAgICAgIHZhciBmYWlsZWQgPSBmaWxlcy5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIGZpbGUuZXJyb3I7XG4gICAgICB9KTtcbiAgICAgIF90aGlzOC5hZGRSZXN1bHREYXRhKHVwbG9hZElELCB7IHN1Y2Nlc3NmdWw6IHN1Y2Nlc3NmdWwsIGZhaWxlZDogZmFpbGVkLCB1cGxvYWRJRDogdXBsb2FkSUQgfSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBFbWl0IGNvbXBsZXRpb24gZXZlbnRzLlxuICAgICAgLy8gVGhpcyBpcyBpbiBhIHNlcGFyYXRlIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIGBjdXJyZW50VXBsb2Fkc2AgdmFyaWFibGVcbiAgICAgIC8vIGFsd2F5cyByZWZlcnMgdG8gdGhlIGxhdGVzdCBzdGF0ZS4gSW4gdGhlIGhhbmRsZXIgcmlnaHQgYWJvdmUgaXQgcmVmZXJzXG4gICAgICAvLyB0byBhbiBvdXRkYXRlZCBvYmplY3Qgd2l0aG91dCB0aGUgYC5yZXN1bHRgIHByb3BlcnR5LlxuICAgICAgdmFyIF9nZXRTdGF0ZTggPSBfdGhpczguZ2V0U3RhdGUoKSxcbiAgICAgICAgICBjdXJyZW50VXBsb2FkcyA9IF9nZXRTdGF0ZTguY3VycmVudFVwbG9hZHM7XG5cbiAgICAgIHZhciBjdXJyZW50VXBsb2FkID0gY3VycmVudFVwbG9hZHNbdXBsb2FkSURdO1xuICAgICAgdmFyIHJlc3VsdCA9IGN1cnJlbnRVcGxvYWQucmVzdWx0O1xuICAgICAgX3RoaXM4LmVtaXQoJ2NvbXBsZXRlJywgcmVzdWx0KTtcblxuICAgICAgX3RoaXM4Ll9yZW1vdmVVcGxvYWQodXBsb2FkSUQpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCBhbiB1cGxvYWQgZm9yIGFsbCB0aGUgZmlsZXMgdGhhdCBhcmUgbm90IGN1cnJlbnRseSBiZWluZyB1cGxvYWRlZC5cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG5cblxuICBVcHB5LnByb3RvdHlwZS51cGxvYWQgPSBmdW5jdGlvbiB1cGxvYWQoKSB7XG4gICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMucGx1Z2lucy51cGxvYWRlcikge1xuICAgICAgdGhpcy5sb2coJ05vIHVwbG9hZGVyIHR5cGUgcGx1Z2lucyBhcmUgdXNlZCcsICd3YXJuaW5nJyk7XG4gICAgfVxuXG4gICAgdmFyIGZpbGVzID0gdGhpcy5nZXRTdGF0ZSgpLmZpbGVzO1xuICAgIHZhciBvbkJlZm9yZVVwbG9hZFJlc3VsdCA9IHRoaXMub3B0cy5vbkJlZm9yZVVwbG9hZChmaWxlcyk7XG5cbiAgICBpZiAob25CZWZvcmVVcGxvYWRSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdOb3Qgc3RhcnRpbmcgdGhlIHVwbG9hZCBiZWNhdXNlIG9uQmVmb3JlVXBsb2FkIHJldHVybmVkIGZhbHNlJykpO1xuICAgIH1cblxuICAgIGlmIChvbkJlZm9yZVVwbG9hZFJlc3VsdCAmJiAodHlwZW9mIG9uQmVmb3JlVXBsb2FkUmVzdWx0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvbkJlZm9yZVVwbG9hZFJlc3VsdCkpID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gd2FybmluZyBhZnRlciB0aGUgY2hhbmdlIGluIDAuMjRcbiAgICAgIGlmIChvbkJlZm9yZVVwbG9hZFJlc3VsdC50aGVuKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29uQmVmb3JlVXBsb2FkKCkgcmV0dXJuZWQgYSBQcm9taXNlLCBidXQgdGhpcyBpcyBubyBsb25nZXIgc3VwcG9ydGVkLiBJdCBtdXN0IGJlIHN5bmNocm9ub3VzLicpO1xuICAgICAgfVxuXG4gICAgICBmaWxlcyA9IG9uQmVmb3JlVXBsb2FkUmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczkuX2NoZWNrTWluTnVtYmVyT2ZGaWxlcyhmaWxlcyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2dldFN0YXRlOSA9IF90aGlzOS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIGN1cnJlbnRVcGxvYWRzID0gX2dldFN0YXRlOS5jdXJyZW50VXBsb2FkcztcbiAgICAgIC8vIGdldCBhIGxpc3Qgb2YgZmlsZXMgdGhhdCBhcmUgY3VycmVudGx5IGFzc2lnbmVkIHRvIHVwbG9hZHNcblxuXG4gICAgICB2YXIgY3VycmVudGx5VXBsb2FkaW5nRmlsZXMgPSBPYmplY3Qua2V5cyhjdXJyZW50VXBsb2FkcykucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7XG4gICAgICAgIHJldHVybiBwcmV2LmNvbmNhdChjdXJyZW50VXBsb2Fkc1tjdXJyXS5maWxlSURzKTtcbiAgICAgIH0sIFtdKTtcblxuICAgICAgdmFyIHdhaXRpbmdGaWxlSURzID0gW107XG4gICAgICBPYmplY3Qua2V5cyhmaWxlcykuZm9yRWFjaChmdW5jdGlvbiAoZmlsZUlEKSB7XG4gICAgICAgIHZhciBmaWxlID0gX3RoaXM5LmdldEZpbGUoZmlsZUlEKTtcbiAgICAgICAgLy8gaWYgdGhlIGZpbGUgaGFzbid0IHN0YXJ0ZWQgdXBsb2FkaW5nIGFuZCBoYXNuJ3QgYWxyZWFkeSBiZWVuIGFzc2lnbmVkIHRvIGFuIHVwbG9hZC4uXG4gICAgICAgIGlmICghZmlsZS5wcm9ncmVzcy51cGxvYWRTdGFydGVkICYmIGN1cnJlbnRseVVwbG9hZGluZ0ZpbGVzLmluZGV4T2YoZmlsZUlEKSA9PT0gLTEpIHtcbiAgICAgICAgICB3YWl0aW5nRmlsZUlEcy5wdXNoKGZpbGUuaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmFyIHVwbG9hZElEID0gX3RoaXM5Ll9jcmVhdGVVcGxvYWQod2FpdGluZ0ZpbGVJRHMpO1xuICAgICAgcmV0dXJuIF90aGlzOS5fcnVuVXBsb2FkKHVwbG9hZElEKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB2YXIgbWVzc2FnZSA9ICh0eXBlb2YgZXJyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihlcnIpKSA9PT0gJ29iamVjdCcgPyBlcnIubWVzc2FnZSA6IGVycjtcbiAgICAgIHZhciBkZXRhaWxzID0gKHR5cGVvZiBlcnIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGVycikpID09PSAnb2JqZWN0JyA/IGVyci5kZXRhaWxzIDogbnVsbDtcbiAgICAgIF90aGlzOS5sb2cobWVzc2FnZSArICcgJyArIGRldGFpbHMpO1xuICAgICAgX3RoaXM5LmluZm8oeyBtZXNzYWdlOiBtZXNzYWdlLCBkZXRhaWxzOiBkZXRhaWxzIH0sICdlcnJvcicsIDQwMDApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCh0eXBlb2YgZXJyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihlcnIpKSA9PT0gJ29iamVjdCcgPyBlcnIgOiBuZXcgRXJyb3IoZXJyKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFVwcHksIFt7XG4gICAga2V5OiAnc3RhdGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdGUoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVXBweTtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0cykge1xuICByZXR1cm4gbmV3IFVwcHkob3B0cyk7XG59O1xuXG4vLyBFeHBvc2UgY2xhc3MgY29uc3RydWN0b3IuXG5tb2R1bGUuZXhwb3J0cy5VcHB5ID0gVXBweTtcbm1vZHVsZS5leHBvcnRzLlBsdWdpbiA9IFBsdWdpbjsiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIFRyYW5zbGF0ZXMgc3RyaW5ncyB3aXRoIGludGVycG9sYXRpb24gJiBwbHVyYWxpemF0aW9uIHN1cHBvcnQuXG4gKiBFeHRlbnNpYmxlIHdpdGggY3VzdG9tIGRpY3Rpb25hcmllcyBhbmQgcGx1cmFsaXphdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogQm9ycm93cyBoZWF2aWx5IGZyb20gYW5kIGluc3BpcmVkIGJ5IFBvbHlnbG90IGh0dHBzOi8vZ2l0aHViLmNvbS9haXJibmIvcG9seWdsb3QuanMsXG4gKiBiYXNpY2FsbHkgYSBzdHJpcHBlZC1kb3duIHZlcnNpb24gb2YgaXQuIERpZmZlcmVuY2VzOiBwbHVyYWxpemF0aW9uIGZ1bmN0aW9ucyBhcmUgbm90IGhhcmRjb2RlZFxuICogYW5kIGNhbiBiZSBlYXNpbHkgYWRkZWQgYW1vbmcgd2l0aCBkaWN0aW9uYXJpZXMsIG5lc3RlZCBvYmplY3RzIGFyZSB1c2VkIGZvciBwbHVyYWxpemF0aW9uXG4gKiBhcyBvcHBvc2VkIHRvIGB8fHx8YCBkZWxpbWV0ZXJcbiAqXG4gKiBVc2FnZSBleGFtcGxlOiBgdHJhbnNsYXRvci50cmFuc2xhdGUoJ2ZpbGVzX2Nob3NlbicsIHtzbWFydF9jb3VudDogM30pYFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fEFycmF5PG9iamVjdD59IGxvY2FsZSBMb2NhbGUgb3IgbGlzdCBvZiBsb2NhbGVzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVHJhbnNsYXRvcihsb2NhbGVzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2xhdG9yKTtcblxuICAgIHRoaXMubG9jYWxlID0ge1xuICAgICAgc3RyaW5nczoge30sXG4gICAgICBwbHVyYWxpemU6IGZ1bmN0aW9uIHBsdXJhbGl6ZShuKSB7XG4gICAgICAgIGlmIChuID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGxvY2FsZXMpKSB7XG4gICAgICBsb2NhbGVzLmZvckVhY2goZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX2FwcGx5KGxvY2FsZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwbHkobG9jYWxlcyk7XG4gICAgfVxuICB9XG5cbiAgVHJhbnNsYXRvci5wcm90b3R5cGUuX2FwcGx5ID0gZnVuY3Rpb24gX2FwcGx5KGxvY2FsZSkge1xuICAgIGlmICghbG9jYWxlIHx8ICFsb2NhbGUuc3RyaW5ncykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgdGhpcy5sb2NhbGUgPSBfZXh0ZW5kcyh7fSwgcHJldkxvY2FsZSwge1xuICAgICAgc3RyaW5nczogX2V4dGVuZHMoe30sIHByZXZMb2NhbGUuc3RyaW5ncywgbG9jYWxlLnN0cmluZ3MpXG4gICAgfSk7XG4gICAgdGhpcy5sb2NhbGUucGx1cmFsaXplID0gbG9jYWxlLnBsdXJhbGl6ZSB8fCBwcmV2TG9jYWxlLnBsdXJhbGl6ZTtcbiAgfTtcblxuICAvKipcbiAgICogVGFrZXMgYSBzdHJpbmcgd2l0aCBwbGFjZWhvbGRlciB2YXJpYWJsZXMgbGlrZSBgJXtzbWFydF9jb3VudH0gZmlsZSBzZWxlY3RlZGBcbiAgICogYW5kIHJlcGxhY2VzIGl0IHdpdGggdmFsdWVzIGZyb20gb3B0aW9ucyBge3NtYXJ0X2NvdW50OiA1fWBcbiAgICpcbiAgICogQGxpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL2FpcmJuYi9wb2x5Z2xvdC5qcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAqIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FpcmJuYi9wb2x5Z2xvdC5qcy9ibG9iL21hc3Rlci9saWIvcG9seWdsb3QuanMjTDI5OVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGhyYXNlIHRoYXQgbmVlZHMgaW50ZXJwb2xhdGlvbiwgd2l0aCBwbGFjZWhvbGRlcnNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgd2l0aCB2YWx1ZXMgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcmVwbGFjZSBwbGFjZWhvbGRlcnNcbiAgICogQHJldHVybiB7c3RyaW5nfSBpbnRlcnBvbGF0ZWRcbiAgICovXG5cblxuICBUcmFuc2xhdG9yLnByb3RvdHlwZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIGludGVycG9sYXRlKHBocmFzZSwgb3B0aW9ucykge1xuICAgIHZhciBfU3RyaW5nJHByb3RvdHlwZSA9IFN0cmluZy5wcm90b3R5cGUsXG4gICAgICAgIHNwbGl0ID0gX1N0cmluZyRwcm90b3R5cGUuc3BsaXQsXG4gICAgICAgIHJlcGxhY2UgPSBfU3RyaW5nJHByb3RvdHlwZS5yZXBsYWNlO1xuXG4gICAgdmFyIGRvbGxhclJlZ2V4ID0gL1xcJC9nO1xuICAgIHZhciBkb2xsYXJCaWxsc1lhbGwgPSAnJCQkJCc7XG4gICAgdmFyIGludGVycG9sYXRlZCA9IFtwaHJhc2VdO1xuXG4gICAgZm9yICh2YXIgYXJnIGluIG9wdGlvbnMpIHtcbiAgICAgIGlmIChhcmcgIT09ICdfJyAmJiBvcHRpb25zLmhhc093blByb3BlcnR5KGFyZykpIHtcbiAgICAgICAgLy8gRW5zdXJlIHJlcGxhY2VtZW50IHZhbHVlIGlzIGVzY2FwZWQgdG8gcHJldmVudCBzcGVjaWFsICQtcHJlZml4ZWRcbiAgICAgICAgLy8gcmVnZXggcmVwbGFjZSB0b2tlbnMuIHRoZSBcIiQkJCRcIiBpcyBuZWVkZWQgYmVjYXVzZSBlYWNoIFwiJFwiIG5lZWRzIHRvXG4gICAgICAgIC8vIGJlIGVzY2FwZWQgd2l0aCBcIiRcIiBpdHNlbGYsIGFuZCB3ZSBuZWVkIHR3byBpbiB0aGUgcmVzdWx0aW5nIG91dHB1dC5cbiAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gb3B0aW9uc1thcmddO1xuICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gcmVwbGFjZS5jYWxsKG9wdGlvbnNbYXJnXSwgZG9sbGFyUmVnZXgsIGRvbGxhckJpbGxzWWFsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgY3JlYXRlIGEgbmV3IGBSZWdFeHBgIGVhY2ggdGltZSBpbnN0ZWFkIG9mIHVzaW5nIGEgbW9yZS1lZmZpY2llbnRcbiAgICAgICAgLy8gc3RyaW5nIHJlcGxhY2Ugc28gdGhhdCB0aGUgc2FtZSBhcmd1bWVudCBjYW4gYmUgcmVwbGFjZWQgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgLy8gaW4gdGhlIHNhbWUgcGhyYXNlLlxuICAgICAgICBpbnRlcnBvbGF0ZWQgPSBpbnNlcnRSZXBsYWNlbWVudChpbnRlcnBvbGF0ZWQsIG5ldyBSZWdFeHAoJyVcXFxceycgKyBhcmcgKyAnXFxcXH0nLCAnZycpLCByZXBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycG9sYXRlZDtcblxuICAgIGZ1bmN0aW9uIGluc2VydFJlcGxhY2VtZW50KHNvdXJjZSwgcngsIHJlcGxhY2VtZW50KSB7XG4gICAgICB2YXIgbmV3UGFydHMgPSBbXTtcbiAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgICBzcGxpdC5jYWxsKGNodW5rLCByeCkuZm9yRWFjaChmdW5jdGlvbiAocmF3LCBpLCBsaXN0KSB7XG4gICAgICAgICAgaWYgKHJhdyAhPT0gJycpIHtcbiAgICAgICAgICAgIG5ld1BhcnRzLnB1c2gocmF3KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJbnRlcmxhY2Ugd2l0aCB0aGUgYHJlcGxhY2VtZW50YCB2YWx1ZVxuICAgICAgICAgIGlmIChpIDwgbGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBuZXdQYXJ0cy5wdXNoKHJlcGxhY2VtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3UGFydHM7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgdHJhbnNsYXRlIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIHdpdGggdmFsdWVzIHRoYXQgd2lsbCBiZSB1c2VkIGxhdGVyIHRvIHJlcGxhY2UgcGxhY2Vob2xkZXJzIGluIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRyYW5zbGF0ZWQgKGFuZCBpbnRlcnBvbGF0ZWQpXG4gICAqL1xuXG5cbiAgVHJhbnNsYXRvci5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gdHJhbnNsYXRlKGtleSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZUFycmF5KGtleSwgb3B0aW9ucykuam9pbignJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhIHRyYW5zbGF0aW9uIGFuZCByZXR1cm4gdGhlIHRyYW5zbGF0ZWQgYW5kIGludGVycG9sYXRlZCBwYXJ0cyBhcyBhbiBhcnJheS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyB3aXRoIHZhbHVlcyB0aGF0IHdpbGwgYmUgdXNlZCB0byByZXBsYWNlIHBsYWNlaG9sZGVyc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIHRyYW5zbGF0ZWQgYW5kIGludGVycG9sYXRlZCBwYXJ0cywgaW4gb3JkZXIuXG4gICAqL1xuXG5cbiAgVHJhbnNsYXRvci5wcm90b3R5cGUudHJhbnNsYXRlQXJyYXkgPSBmdW5jdGlvbiB0cmFuc2xhdGVBcnJheShrZXksIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5zbWFydF9jb3VudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBwbHVyYWwgPSB0aGlzLmxvY2FsZS5wbHVyYWxpemUob3B0aW9ucy5zbWFydF9jb3VudCk7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0ZSh0aGlzLmxvY2FsZS5zdHJpbmdzW2tleV1bcGx1cmFsXSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGUodGhpcy5sb2NhbGUuc3RyaW5nc1trZXldLCBvcHRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNsYXRvcjtcbn0oKTsiLCJ2YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdwcmVhY3QnKSxcbiAgICBoID0gX3JlcXVpcmUuaDtcblxuLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9jcmVhdGluZy1zdmctaWNvbi1zeXN0ZW0tcmVhY3QvXG5cbmZ1bmN0aW9uIGRlZmF1bHRUYWJJY29uKCkge1xuICByZXR1cm4gaChcbiAgICBcInN2Z1wiLFxuICAgIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgd2lkdGg6IFwiMzBcIiwgaGVpZ2h0OiBcIjMwXCIsIHZpZXdCb3g6IFwiMCAwIDMwIDMwXCIgfSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IFwiTTE1IDMwYzguMjg0IDAgMTUtNi43MTYgMTUtMTUgMC04LjI4NC02LjcxNi0xNS0xNS0xNUM2LjcxNiAwIDAgNi43MTYgMCAxNWMwIDguMjg0IDYuNzE2IDE1IDE1IDE1em00LjI1OC0xMi42NzZ2Ni44NDZoLTguNDI2di02Ljg0Nkg1LjIwNGw5LjgyLTEyLjM2NCA5LjgyIDEyLjM2NEgxOS4yNnpcIiB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBpY29uQ29weSgpIHtcbiAgcmV0dXJuIGgoXG4gICAgXCJzdmdcIixcbiAgICB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIFwiY2xhc3NcIjogXCJVcHB5SWNvblwiLCB3aWR0aDogXCI1MVwiLCBoZWlnaHQ6IFwiNTFcIiwgdmlld0JveDogXCIwIDAgNTEgNTFcIiB9LFxuICAgIGgoXCJwYXRoXCIsIHsgZDogXCJNMTcuMjEgNDUuNzY1YTUuMzk0IDUuMzk0IDAgMCAxLTcuNjIgMGwtNC4xMi00LjEyMmE1LjM5MyA1LjM5MyAwIDAgMSAwLTcuNjE4bDYuNzc0LTYuNzc1LTIuNDA0LTIuNDA0LTYuNzc1IDYuNzc2Yy0zLjQyNCAzLjQyNy0zLjQyNCA5IDAgMTIuNDI2bDQuMTIgNC4xMjNhOC43NjYgOC43NjYgMCAwIDAgNi4yMTYgMi41N2MyLjI1IDAgNC41LS44NTggNi4yMTQtMi41N2wxMy41NS0xMy41NTJhOC43MiA4LjcyIDAgMCAwIDIuNTc1LTYuMjEzIDguNzMgOC43MyAwIDAgMC0yLjU3NS02LjIxM2wtNC4xMjMtNC4xMi0yLjQwNCAyLjQwNCA0LjEyMyA0LjEyYTUuMzUyIDUuMzUyIDAgMCAxIDEuNTggMy44MWMwIDEuNDM4LS41NjIgMi43OS0xLjU4IDMuODA4bC0xMy41NSAxMy41NXpcIiB9KSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IFwiTTQ0LjI1NiAyLjg1OEE4LjcyOCA4LjcyOCAwIDAgMCAzOC4wNDMuMjgzaC0uMDAyYTguNzMgOC43MyAwIDAgMC02LjIxMiAyLjU3NGwtMTMuNTUgMTMuNTVhOC43MjUgOC43MjUgMCAwIDAtMi41NzUgNi4yMTQgOC43MyA4LjczIDAgMCAwIDIuNTc0IDYuMjE2bDQuMTIgNC4xMiAyLjQwNS0yLjQwMy00LjEyLTQuMTJhNS4zNTcgNS4zNTcgMCAwIDEtMS41OC0zLjgxMmMwLTEuNDM3LjU2Mi0yLjc5IDEuNTgtMy44MDhsMTMuNTUtMTMuNTVhNS4zNDggNS4zNDggMCAwIDEgMy44MS0xLjU4YzEuNDQgMCAyLjc5Mi41NjIgMy44MSAxLjU4bDQuMTIgNC4xMmMyLjEgMi4xIDIuMSA1LjUxOCAwIDcuNjE3TDM5LjIgMjMuNzc1bDIuNDA0IDIuNDA0IDYuNzc1LTYuNzc3YzMuNDI2LTMuNDI3IDMuNDI2LTkgMC0xMi40MjZsLTQuMTItNC4xMnpcIiB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBpY29uUmVzdW1lKCkge1xuICByZXR1cm4gaChcbiAgICBcInN2Z1wiLFxuICAgIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgXCJjbGFzc1wiOiBcIlVwcHlJY29uXCIsIHdpZHRoOiBcIjI1XCIsIGhlaWdodDogXCIyNVwiLCB2aWV3Qm94OiBcIjAgMCA0NCA0NFwiIH0sXG4gICAgaChcInBvbHlnb25cIiwgeyBcImNsYXNzXCI6IFwicGxheVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDYsIDUuNSlcIiwgcG9pbnRzOiBcIjEzIDIxLjY2NjY2NjcgMTMgMTEgMjEgMTYuMzMzMzMzM1wiIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGljb25QYXVzZSgpIHtcbiAgcmV0dXJuIGgoXG4gICAgXCJzdmdcIixcbiAgICB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIFwiY2xhc3NcIjogXCJVcHB5SWNvblwiLCB3aWR0aDogXCIyNXB4XCIsIGhlaWdodDogXCIyNXB4XCIsIHZpZXdCb3g6IFwiMCAwIDQ0IDQ0XCIgfSxcbiAgICBoKFxuICAgICAgXCJnXCIsXG4gICAgICB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMTgsIDE3KVwiLCBcImNsYXNzXCI6IFwicGF1c2VcIiB9LFxuICAgICAgaChcInJlY3RcIiwgeyB4OiBcIjBcIiwgeTogXCIwXCIsIHdpZHRoOiBcIjJcIiwgaGVpZ2h0OiBcIjEwXCIsIHJ4OiBcIjBcIiB9KSxcbiAgICAgIGgoXCJyZWN0XCIsIHsgeDogXCI2XCIsIHk6IFwiMFwiLCB3aWR0aDogXCIyXCIsIGhlaWdodDogXCIxMFwiLCByeDogXCIwXCIgfSlcbiAgICApXG4gICk7XG59XG5cbmZ1bmN0aW9uIGxvY2FsSWNvbigpIHtcbiAgcmV0dXJuIGgoXG4gICAgXCJzdmdcIixcbiAgICB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGZpbGw6IFwiIzYwN2Q4YlwiLCB3aWR0aDogXCIyN1wiLCBoZWlnaHQ6IFwiMjVcIiwgdmlld0JveDogXCIwIDAgMjcgMjVcIiB9LFxuICAgIGgoXCJwYXRoXCIsIHsgZDogXCJNNS41ODYgOS4yODhhLjMxMy4zMTMgMCAwIDAgLjI4Mi4xNzZoNC44NHYzLjkyMmMwIDEuNTE0IDEuMjUgMi4yNCAyLjc5MiAyLjI0IDEuNTQgMCAyLjc5LS43MjYgMi43OS0yLjI0VjkuNDY0aDQuODRjLjEyMiAwIC4yMy0uMDY4LjI4NC0uMTc2YS4zMDQuMzA0IDAgMCAwLS4wNDYtLjMyNEwxMy43MzUuMTA2YS4zMTYuMzE2IDAgMCAwLS40NzIgMGwtNy42MyA4Ljg1N2EuMzAyLjMwMiAwIDAgMC0uMDQ3LjMyNXpcIiB9KSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IFwiTTI0LjMgNS4wOTNjLS4yMTgtLjc2LS41NC0xLjE4Ny0xLjIwOC0xLjE4N2gtNC44NTZsMS4wMTggMS4xOGgzLjk0OGwyLjA0MyAxMS4wMzhoLTcuMTkzdjIuNzI4SDkuMTE0di0yLjcyNWgtNy4zNmwyLjY2LTExLjA0aDMuMzNsMS4wMTgtMS4xOEgzLjkwN2MtLjY2OCAwLTEuMDYuNDYtMS4yMSAxLjE4NkwwIDE2LjQ1NnY3LjA2MkMwIDI0LjMzOC42NzYgMjUgMS41MSAyNWgyMy45OGMuODMzIDAgMS41MS0uNjYzIDEuNTEtMS40ODJ2LTcuMDYyTDI0LjMgNS4wOTN6XCIgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gaWNvblJldHJ5KCkge1xuICByZXR1cm4gaChcbiAgICBcInN2Z1wiLFxuICAgIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgXCJjbGFzc1wiOiBcIlVwcHlJY29uIHJldHJ5XCIsIHdpZHRoOiBcIjI4XCIsIGhlaWdodDogXCIzMVwiLCB2aWV3Qm94OiBcIjAgMCAxNiAxOVwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sXG4gICAgaChcInBhdGhcIiwgeyBkOiBcIk0xNiAxMWE4IDggMCAxIDEtOC04djJhNiA2IDAgMSAwIDYgNmgyelwiIH0pLFxuICAgIGgoXCJwYXRoXCIsIHsgZDogXCJNNy45IDNIMTB2Mkg3Ljl6XCIgfSksXG4gICAgaChcInBhdGhcIiwgeyBkOiBcIk04LjUzNi41bDMuNTM1IDMuNTM2LTEuNDE0IDEuNDE0TDcuMTIgMS45MTR6XCIgfSksXG4gICAgaChcInBhdGhcIiwgeyBkOiBcIk0xMC42NTcgMi42MjFsMS40MTQgMS40MTVMOC41MzYgNy41NyA3LjEyIDYuMTU3elwiIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWNvbigpIHtcbiAgcmV0dXJuIGgoXG4gICAgXCJzdmdcIixcbiAgICB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIFwiY2xhc3NcIjogXCJVcHB5SWNvbiBVcHB5SWNvbi1jaGVja1wiLCB3aWR0aDogXCIxM1wiLCBoZWlnaHQ6IFwiOVwiLCB2aWV3Qm94OiBcIjAgMCAxMyA5XCIgfSxcbiAgICBoKFwicG9seWdvblwiLCB7IHBvaW50czogXCI1IDcuMjkzIDEuMzU0IDMuNjQ3IDAuNjQ2IDQuMzU0IDUgOC43MDcgMTIuMzU0IDEuMzU0IDExLjY0NiAwLjY0N1wiIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGljb25BdWRpbygpIHtcbiAgcmV0dXJuIGgoXG4gICAgXCJzdmdcIixcbiAgICB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIFwiY2xhc3NcIjogXCJVcHB5SWNvblwiLCB3aWR0aDogXCI1NVwiLCBoZWlnaHQ6IFwiNTVcIiwgdmlld0JveDogXCIwIDAgNTUgNTVcIiB9LFxuICAgIGgoXCJwYXRoXCIsIHsgZDogXCJNNTIuNjYuMjVjLS4yMTYtLjE5LS41LS4yNzYtLjc5LS4yNDJsLTMxIDQuMDFhMSAxIDAgMCAwLS44Ny45OTJWNDAuNjIyQzE4LjE3NCAzOC40MjggMTUuMjczIDM3IDEyIDM3Yy01LjUxNCAwLTEwIDQuMDM3LTEwIDlzNC40ODYgOSAxMCA5IDEwLTQuMDM3IDEwLTljMC0uMjMyLS4wMi0uNDYtLjA0LS42ODcuMDE0LS4wNjUuMDQtLjEyNC4wNC0uMTkyVjE2LjEybDI5LTMuNzUzdjE4LjI1N0M0OS4xNzQgMjguNDI4IDQ2LjI3MyAyNyA0MyAyN2MtNS41MTQgMC0xMCA0LjAzNy0xMCA5czQuNDg2IDkgMTAgOWM1LjQ2NCAwIDkuOTEzLTMuOTY2IDkuOTkzLTguODY3IDAtLjAxMy4wMDctLjAyNC4wMDctLjAzN1YxYS45OTguOTk4IDAgMCAwLS4zNC0uNzV6TTEyIDUzYy00LjQxIDAtOC0zLjE0LTgtN3MzLjU5LTcgOC03IDggMy4xNCA4IDctMy41OSA3LTggN3ptMzEtMTBjLTQuNDEgMC04LTMuMTQtOC03czMuNTktNyA4LTcgOCAzLjE0IDggNy0zLjU5IDctOCA3ek0yMiAxNC4xVjUuODlsMjktMy43NTN2OC4yMWwtMjkgMy43NTR6XCIgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gaWNvblZpZGVvKCkge1xuICByZXR1cm4gaChcbiAgICBcInN2Z1wiLFxuICAgIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgXCJjbGFzc1wiOiBcIlVwcHlJY29uXCIsIHZpZXdCb3g6IFwiMCAwIDU4IDU4XCIgfSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IFwiTTM2LjUzNyAyOC4xNTZsLTExLTdhMS4wMDUgMS4wMDUgMCAwIDAtMS4wMi0uMDMzQzI0LjIgMjEuMyAyNCAyMS42MzUgMjQgMjJ2MTRhMSAxIDAgMCAwIDEuNTM3Ljg0NGwxMS03YTEuMDAyIDEuMDAyIDAgMCAwIDAtMS42ODh6TTI2IDM0LjE4VjIzLjgyTDM0LjEzNyAyOSAyNiAzNC4xOHpcIiB9KSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IFwiTTU3IDZIMWExIDEgMCAwIDAtMSAxdjQ0YTEgMSAwIDAgMCAxIDFoNTZhMSAxIDAgMCAwIDEtMVY3YTEgMSAwIDAgMC0xLTF6TTEwIDI4SDJ2LTloOHY5em0tOCAyaDh2OUgydi05em0xMCAxMFY4aDM0djQySDEyVjQwem00NC0xMmgtOHYtOWg4djl6bS04IDJoOHY5aC04di05em04LTIydjloLThWOGg4ek0yIDhoOHY5SDJWOHptMCA0MnYtOWg4djlIMnptNTQgMGgtOHYtOWg4djl6XCIgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gaWNvblBERigpIHtcbiAgcmV0dXJuIGgoXG4gICAgXCJzdmdcIixcbiAgICB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIFwiY2xhc3NcIjogXCJVcHB5SWNvblwiLCB2aWV3Qm94OiBcIjAgMCAzNDIgMzM1XCIgfSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IFwiTTMyOS4zMzcgMjI3Ljg0Yy0yLjEgMS4zLTguMSAyLjEtMTEuOSAyLjEtMTIuNCAwLTI3LjYtNS43LTQ5LjEtMTQuOSA4LjMtLjYgMTUuOC0uOSAyMi42LS45IDEyLjQgMCAxNiAwIDI4LjIgMy4xIDEyLjEgMyAxMi4yIDkuMyAxMC4yIDEwLjZ6bS0yMTUuMSAxLjljNC44LTguNCA5LjctMTcuMyAxNC43LTI2LjggMTIuMi0yMy4xIDIwLTQxLjMgMjUuNy01Ni4yIDExLjUgMjAuOSAyNS44IDM4LjYgNDIuNSA1Mi44IDIuMSAxLjggNC4zIDMuNSA2LjcgNS4zLTM0LjEgNi44LTYzLjYgMTUtODkuNiAyNC45em0zOS44LTIxOC45YzYuOCAwIDEwLjcgMTcuMDYgMTEgMzMuMTYuMyAxNi0zLjQgMjcuMi04LjEgMzUuNi0zLjktMTIuNC01LjctMzEuOC01LjctNDQuNSAwIDAtLjMtMjQuMjYgMi44LTI0LjI2em0tMTMzLjQgMzA3LjJjMy45LTEwLjUgMTkuMS0zMS4zIDQxLjYtNDkuOCAxLjQtMS4xIDQuOS00LjQgOC4xLTcuNC0yMy41IDM3LjYtMzkuMyA1Mi41LTQ5LjcgNTcuMnptMzE1LjItMTEyLjNjLTYuOC02LjctMjItMTAuMi00NS0xMC41LTE1LjYtLjItMzQuMyAxLjItNTQuMSAzLjktOC44LTUuMS0xNy45LTEwLjYtMjUuMS0xNy4zLTE5LjItMTgtMzUuMi00Mi45LTQ1LjItNzAuMy42LTIuNiAxLjItNC44IDEuNy03LjEgMCAwIDEwLjgtNjEuNSA3LjktODIuMy0uNC0yLjktLjYtMy43LTEuNC01LjlsLS45LTIuNWMtMi45LTYuNzYtOC43LTEzLjk2LTE3LjgtMTMuNTdsLTUuMy0uMTdoLS4xYy0xMC4xIDAtMTguNCA1LjE3LTIwLjUgMTIuODQtNi42IDI0LjMuMiA2MC41IDEyLjUgMTA3LjRsLTMuMiA3LjdjLTguOCAyMS40LTE5LjggNDMtMjkuNSA2MmwtMS4zIDIuNWMtMTAuMiAyMC0xOS41IDM3LTI3LjkgNTEuNGwtOC43IDQuNmMtLjYuNC0xNS41IDguMi0xOSAxMC4zLTI5LjYgMTcuNy00OS4yOCAzNy44LTUyLjU0IDUzLjgtMS4wNCA1LS4yNiAxMS41IDUuMDEgMTQuNmw4LjQgNC4yYzMuNjMgMS44IDcuNTMgMi43IDExLjQzIDIuNyAyMS4xIDAgNDUuNi0yNi4yIDc5LjMtODUuMSAzOS0xMi43IDgzLjQtMjMuMyAxMjIuMy0yOS4xIDI5LjYgMTYuNyA2NiAyOC4zIDg5IDI4LjMgNC4xIDAgNy42LS40IDEwLjUtMS4yIDQuNC0xLjEgOC4xLTMuNiAxMC40LTcuMSA0LjQtNi43IDUuNC0xNS45IDQuMS0yNS40LS4zLTIuOC0yLjYtNi4zLTUtOC43elwiIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGljb25GaWxlKCkge1xuICByZXR1cm4gaChcbiAgICBcInN2Z1wiLFxuICAgIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgXCJjbGFzc1wiOiBcIlVwcHlJY29uXCIsIHdpZHRoOiBcIjQ0XCIsIGhlaWdodDogXCI1OFwiLCB2aWV3Qm94OiBcIjAgMCA0NCA1OFwiIH0sXG4gICAgaChcInBhdGhcIiwgeyBkOiBcIk0yNy40MzcuNTE3YTEgMSAwIDAgMC0uMDk0LjAzSDQuMjVDMi4wMzcuNTQ4LjIxNyAyLjM2OC4yMTcgNC41OHY0OC40MDVjMCAyLjIxMiAxLjgyIDQuMDMgNC4wMyA0LjAzSDM5LjAzYzIuMjEgMCA0LjAzLTEuODE4IDQuMDMtNC4wM1YxNS42MWExIDEgMCAwIDAtLjAzLS4yOCAxIDEgMCAwIDAgMC0uMDkzIDEgMSAwIDAgMC0uMDMtLjAzMiAxIDEgMCAwIDAgMC0uMDMgMSAxIDAgMCAwLS4wMzItLjA2MyAxIDEgMCAwIDAtLjAzLS4wNjMgMSAxIDAgMCAwLS4wMzIgMCAxIDEgMCAwIDAtLjAzLS4wNjMgMSAxIDAgMCAwLS4wMzItLjAzIDEgMSAwIDAgMC0uMDMtLjA2MyAxIDEgMCAwIDAtLjA2My0uMDYybC0xNC41OTMtMTRhMSAxIDAgMCAwLS4wNjItLjA2MkExIDEgMCAwIDAgMjggLjcwOGExIDEgMCAwIDAtLjM3NC0uMTU3IDEgMSAwIDAgMC0uMTU2IDAgMSAxIDAgMCAwLS4wMy0uMDNsLS4wMDMtLjAwM3pNNC4yNSAyLjU0N2gyMi4yMTh2OS45N2MwIDIuMjEgMS44MiA0LjAzIDQuMDMgNC4wM2gxMC41NjR2MzYuNDM4YTIuMDIgMi4wMiAwIDAgMS0yLjAzMiAyLjAzMkg0LjI1Yy0xLjEzIDAtMi4wMzItLjktMi4wMzItMi4wMzJWNC41OGMwLTEuMTMuOTAyLTIuMDMyIDIuMDMtMi4wMzJ6bTI0LjIxOCAxLjM0NWwxMC4zNzUgOS45MzcuNzUuNzE4SDMwLjVjLTEuMTMgMC0yLjAzMi0uOS0yLjAzMi0yLjAzVjMuODl6XCIgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gaWNvblRleHQoKSB7XG4gIHJldHVybiBoKFxuICAgIFwic3ZnXCIsXG4gICAgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBcImNsYXNzXCI6IFwiVXBweUljb25cIiwgd2lkdGg6IFwiNjJcIiwgaGVpZ2h0OiBcIjYyXCIsIHZpZXdCb3g6IFwiMCAwIDYyIDYyXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IFwiTTQuMzA5IDQuMzA5aDI0LjkxMnY1My4zODJoLTYuNTI1djMuNTU5aDE2LjYwOHYtMy41NTloLTYuNTI1VjQuMzA5aDI0LjkxMnYxMC42NzZoMy41NTlWLjc1SC43NXYxNC4yMzVoMy41NTl6XCIsIFwiZmlsbC1ydWxlXCI6IFwibm9uemVyb1wiLCBmaWxsOiBcIiMwMDBcIiB9KVxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVmYXVsdFRhYkljb246IGRlZmF1bHRUYWJJY29uLFxuICBpY29uQ29weTogaWNvbkNvcHksXG4gIGljb25SZXN1bWU6IGljb25SZXN1bWUsXG4gIGljb25QYXVzZTogaWNvblBhdXNlLFxuICBpY29uUmV0cnk6IGljb25SZXRyeSxcbiAgbG9jYWxJY29uOiBsb2NhbEljb24sXG4gIGNoZWNrSWNvbjogY2hlY2tJY29uLFxuICBpY29uQXVkaW86IGljb25BdWRpbyxcbiAgaWNvblZpZGVvOiBpY29uVmlkZW8sXG4gIGljb25QREY6IGljb25QREYsXG4gIGljb25GaWxlOiBpY29uRmlsZSxcbiAgaWNvblRleHQ6IGljb25UZXh0XG59OyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcHJldHRpZXJCeXRlc1xuXG5mdW5jdGlvbiBwcmV0dGllckJ5dGVzIChudW0pIHtcbiAgaWYgKHR5cGVvZiBudW0gIT09ICdudW1iZXInIHx8IGlzTmFOKG51bSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIG51bWJlciwgZ290ICcgKyB0eXBlb2YgbnVtKVxuICB9XG5cbiAgdmFyIG5lZyA9IG51bSA8IDBcbiAgdmFyIHVuaXRzID0gWydCJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ11cblxuICBpZiAobmVnKSB7XG4gICAgbnVtID0gLW51bVxuICB9XG5cbiAgaWYgKG51bSA8IDEpIHtcbiAgICByZXR1cm4gKG5lZyA/ICctJyA6ICcnKSArIG51bSArICcgQidcbiAgfVxuXG4gIHZhciBleHBvbmVudCA9IE1hdGgubWluKE1hdGguZmxvb3IoTWF0aC5sb2cobnVtKSAvIE1hdGgubG9nKDEwMDApKSwgdW5pdHMubGVuZ3RoIC0gMSlcbiAgbnVtID0gTnVtYmVyKG51bSAvIE1hdGgucG93KDEwMDAsIGV4cG9uZW50KSlcbiAgdmFyIHVuaXQgPSB1bml0c1tleHBvbmVudF1cblxuICBpZiAobnVtID49IDEwIHx8IG51bSAlIDEgPT09IDApIHtcbiAgICAvLyBEbyBub3Qgc2hvdyBkZWNpbWFscyB3aGVuIHRoZSBudW1iZXIgaXMgdHdvLWRpZ2l0LCBvciBpZiB0aGUgbnVtYmVyIGhhcyBub1xuICAgIC8vIGRlY2ltYWwgY29tcG9uZW50LlxuICAgIHJldHVybiAobmVnID8gJy0nIDogJycpICsgbnVtLnRvRml4ZWQoMCkgKyAnICcgKyB1bml0XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChuZWcgPyAnLScgOiAnJykgKyBudW0udG9GaXhlZCgxKSArICcgJyArIHVuaXRcbiAgfVxufVxuIiwiLyoqXG4qIFRha2VzIGEgZnVsbCBmaWxlbmFtZSBzdHJpbmcgYW5kIHJldHVybnMgYW4gb2JqZWN0IHtuYW1lLCBleHRlbnNpb259XG4qXG4qIEBwYXJhbSB7c3RyaW5nfSBmdWxsRmlsZU5hbWVcbiogQHJldHVybiB7b2JqZWN0fSB7bmFtZSwgZXh0ZW5zaW9ufVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24oZnVsbEZpbGVOYW1lKSB7XG4gIHZhciByZSA9IC8oPzpcXC4oW14uXSspKT8kLztcbiAgdmFyIGZpbGVFeHQgPSByZS5leGVjKGZ1bGxGaWxlTmFtZSlbMV07XG4gIHZhciBmaWxlTmFtZSA9IGZ1bGxGaWxlTmFtZS5yZXBsYWNlKCcuJyArIGZpbGVFeHQsICcnKTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmaWxlTmFtZSxcbiAgICBleHRlbnNpb246IGZpbGVFeHRcbiAgfTtcbn07IiwidmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9pY29ucycpLFxuICAgIGljb25UZXh0ID0gX3JlcXVpcmUuaWNvblRleHQsXG4gICAgaWNvbkF1ZGlvID0gX3JlcXVpcmUuaWNvbkF1ZGlvLFxuICAgIGljb25WaWRlbyA9IF9yZXF1aXJlLmljb25WaWRlbyxcbiAgICBpY29uUERGID0gX3JlcXVpcmUuaWNvblBERjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRJY29uQnlNaW1lKGZpbGVUeXBlKSB7XG4gIHZhciBkZWZhdWx0Q2hvaWNlID0ge1xuICAgIGNvbG9yOiAnI2NiY2JjYicsXG4gICAgaWNvbjogJydcbiAgfTtcblxuICBpZiAoIWZpbGVUeXBlKSByZXR1cm4gZGVmYXVsdENob2ljZTtcblxuICB2YXIgZmlsZVR5cGVHZW5lcmFsID0gZmlsZVR5cGUuc3BsaXQoJy8nKVswXTtcbiAgdmFyIGZpbGVUeXBlU3BlY2lmaWMgPSBmaWxlVHlwZS5zcGxpdCgnLycpWzFdO1xuXG4gIGlmIChmaWxlVHlwZUdlbmVyYWwgPT09ICd0ZXh0Jykge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjogJyNjYmNiY2InLFxuICAgICAgaWNvbjogaWNvblRleHQoKVxuICAgIH07XG4gIH1cblxuICBpZiAoZmlsZVR5cGVHZW5lcmFsID09PSAnYXVkaW8nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiAnIzFhYmM5YycsXG4gICAgICBpY29uOiBpY29uQXVkaW8oKVxuICAgIH07XG4gIH1cblxuICBpZiAoZmlsZVR5cGVHZW5lcmFsID09PSAndmlkZW8nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiAnIzI5ODBiOScsXG4gICAgICBpY29uOiBpY29uVmlkZW8oKVxuICAgIH07XG4gIH1cblxuICBpZiAoZmlsZVR5cGVHZW5lcmFsID09PSAnYXBwbGljYXRpb24nICYmIGZpbGVUeXBlU3BlY2lmaWMgPT09ICdwZGYnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiAnI2U3NGMzYycsXG4gICAgICBpY29uOiBpY29uUERGKClcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZpbGVUeXBlR2VuZXJhbCA9PT0gJ2ltYWdlJykge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjogJyNmMmYyZjInLFxuICAgICAgaWNvbjogJydcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRDaG9pY2U7XG59OyIsIi8qKlxuKiBDcmVhdGUgYW4gZXZlbnQgZW1pdHRlciB3aXRoIG5hbWVzcGFjZXNcbiogQG5hbWUgY3JlYXRlTmFtZXNwYWNlRW1pdHRlclxuKiBAZXhhbXBsZVxuKiB2YXIgZW1pdHRlciA9IHJlcXVpcmUoJy4vaW5kZXgnKSgpXG4qXG4qIGVtaXR0ZXIub24oJyonLCBmdW5jdGlvbiAoKSB7XG4qICAgY29uc29sZS5sb2coJ2FsbCBldmVudHMgZW1pdHRlZCcsIHRoaXMuZXZlbnQpXG4qIH0pXG4qXG4qIGVtaXR0ZXIub24oJ2V4YW1wbGUnLCBmdW5jdGlvbiAoKSB7XG4qICAgY29uc29sZS5sb2coJ2V4YW1wbGUgZXZlbnQgZW1pdHRlZCcpXG4qIH0pXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVOYW1lc3BhY2VFbWl0dGVyICgpIHtcbiAgdmFyIGVtaXR0ZXIgPSB7fVxuICB2YXIgX2ZucyA9IGVtaXR0ZXIuX2ZucyA9IHt9XG5cbiAgLyoqXG4gICogRW1pdCBhbiBldmVudC4gT3B0aW9uYWxseSBuYW1lc3BhY2UgdGhlIGV2ZW50LiBIYW5kbGVycyBhcmUgZmlyZWQgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB3aXRoIGV4YWN0IG1hdGNoZXMgdGFraW5nIHByZWNlZGVuY2UuIFNlcGFyYXRlIHRoZSBuYW1lc3BhY2UgYW5kIGV2ZW50IHdpdGggYSBgOmBcbiAgKiBAbmFtZSBlbWl0XG4gICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IOKAkyB0aGUgbmFtZSBvZiB0aGUgZXZlbnQsIHdpdGggb3B0aW9uYWwgbmFtZXNwYWNlXG4gICogQHBhcmFtIHsuLi4qfSBkYXRhIOKAkyB1cCB0byA2IGFyZ3VtZW50cyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGV2ZW50IGxpc3RlbmVyXG4gICogQGV4YW1wbGVcbiAgKiBlbWl0dGVyLmVtaXQoJ2V4YW1wbGUnKVxuICAqIGVtaXR0ZXIuZW1pdCgnZGVtbzp0ZXN0JylcbiAgKiBlbWl0dGVyLmVtaXQoJ2RhdGEnLCB7IGV4YW1wbGU6IHRydWV9LCAnYSBzdHJpbmcnLCAxKVxuICAqL1xuICBlbWl0dGVyLmVtaXQgPSBmdW5jdGlvbiBlbWl0IChldmVudCwgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSwgYXJnNikge1xuICAgIHZhciB0b0VtaXQgPSBnZXRMaXN0ZW5lcnMoZXZlbnQpXG5cbiAgICBpZiAodG9FbWl0Lmxlbmd0aCkge1xuICAgICAgZW1pdEFsbChldmVudCwgdG9FbWl0LCBbYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSwgYXJnNl0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlIGVuIGV2ZW50IGxpc3RlbmVyLlxuICAqIEBuYW1lIG9uXG4gICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgKiBAZXhhbXBsZVxuICAqIGVtaXR0ZXIub24oJ2V4YW1wbGUnLCBmdW5jdGlvbiAoKSB7fSlcbiAgKiBlbWl0dGVyLm9uKCdkZW1vJywgZnVuY3Rpb24gKCkge30pXG4gICovXG4gIGVtaXR0ZXIub24gPSBmdW5jdGlvbiBvbiAoZXZlbnQsIGZuKSB7XG4gICAgaWYgKCFfZm5zW2V2ZW50XSkge1xuICAgICAgX2Zuc1tldmVudF0gPSBbXVxuICAgIH1cblxuICAgIF9mbnNbZXZlbnRdLnB1c2goZm4pXG4gIH1cblxuICAvKipcbiAgKiBDcmVhdGUgZW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBmaXJlcyBvbmNlLlxuICAqIEBuYW1lIG9uY2VcbiAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAqIEBleGFtcGxlXG4gICogZW1pdHRlci5vbmNlKCdleGFtcGxlJywgZnVuY3Rpb24gKCkge30pXG4gICogZW1pdHRlci5vbmNlKCdkZW1vJywgZnVuY3Rpb24gKCkge30pXG4gICovXG4gIGVtaXR0ZXIub25jZSA9IGZ1bmN0aW9uIG9uY2UgKGV2ZW50LCBmbikge1xuICAgIGZ1bmN0aW9uIG9uZSAoKSB7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICBlbWl0dGVyLm9mZihldmVudCwgb25lKVxuICAgIH1cbiAgICB0aGlzLm9uKGV2ZW50LCBvbmUpXG4gIH1cblxuICAvKipcbiAgKiBTdG9wIGxpc3RlbmluZyB0byBhbiBldmVudC4gU3RvcCBhbGwgbGlzdGVuZXJzIG9uIGFuIGV2ZW50IGJ5IG9ubHkgcGFzc2luZyB0aGUgZXZlbnQgbmFtZS4gU3RvcCBhIHNpbmdsZSBsaXN0ZW5lciBieSBwYXNzaW5nIHRoYXQgZXZlbnQgaGFuZGxlciBhcyBhIGNhbGxiYWNrLlxuICAqIFlvdSBtdXN0IGJlIGV4cGxpY2l0IGFib3V0IHdoYXQgd2lsbCBiZSB1bnN1YnNjcmliZWQ6IGBlbWl0dGVyLm9mZignZGVtbycpYCB3aWxsIHVuc3Vic2NyaWJlIGFuIGBlbWl0dGVyLm9uKCdkZW1vJylgIGxpc3RlbmVyLFxuICAqIGBlbWl0dGVyLm9mZignZGVtbzpleGFtcGxlJylgIHdpbGwgdW5zdWJzY3JpYmUgYW4gYGVtaXR0ZXIub24oJ2RlbW86ZXhhbXBsZScpYCBsaXN0ZW5lclxuICAqIEBuYW1lIG9mZlxuICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl0g4oCTIHRoZSBzcGVjaWZpYyBoYW5kbGVyXG4gICogQGV4YW1wbGVcbiAgKiBlbWl0dGVyLm9mZignZXhhbXBsZScpXG4gICogZW1pdHRlci5vZmYoJ2RlbW8nLCBmdW5jdGlvbiAoKSB7fSlcbiAgKi9cbiAgZW1pdHRlci5vZmYgPSBmdW5jdGlvbiBvZmYgKGV2ZW50LCBmbikge1xuICAgIHZhciBrZWVwID0gW11cblxuICAgIGlmIChldmVudCAmJiBmbikge1xuICAgICAgdmFyIGZucyA9IHRoaXMuX2Zuc1tldmVudF1cbiAgICAgIHZhciBpID0gMFxuICAgICAgdmFyIGwgPSBmbnMgPyBmbnMubGVuZ3RoIDogMFxuXG4gICAgICBmb3IgKGk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGZuc1tpXSAhPT0gZm4pIHtcbiAgICAgICAgICBrZWVwLnB1c2goZm5zW2ldKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAga2VlcC5sZW5ndGggPyB0aGlzLl9mbnNbZXZlbnRdID0ga2VlcCA6IGRlbGV0ZSB0aGlzLl9mbnNbZXZlbnRdXG4gIH1cblxuICBmdW5jdGlvbiBnZXRMaXN0ZW5lcnMgKGUpIHtcbiAgICB2YXIgb3V0ID0gX2Zuc1tlXSA/IF9mbnNbZV0gOiBbXVxuICAgIHZhciBpZHggPSBlLmluZGV4T2YoJzonKVxuICAgIHZhciBhcmdzID0gKGlkeCA9PT0gLTEpID8gW2VdIDogW2Uuc3Vic3RyaW5nKDAsIGlkeCksIGUuc3Vic3RyaW5nKGlkeCArIDEpXVxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhfZm5zKVxuICAgIHZhciBpID0gMFxuICAgIHZhciBsID0ga2V5cy5sZW5ndGhcblxuICAgIGZvciAoaTsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgIGlmIChrZXkgPT09ICcqJykge1xuICAgICAgICBvdXQgPSBvdXQuY29uY2F0KF9mbnNba2V5XSlcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAyICYmIGFyZ3NbMF0gPT09IGtleSkge1xuICAgICAgICBvdXQgPSBvdXQuY29uY2F0KF9mbnNba2V5XSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0QWxsIChlLCBmbnMsIGFyZ3MpIHtcbiAgICB2YXIgaSA9IDBcbiAgICB2YXIgbCA9IGZucy5sZW5ndGhcblxuICAgIGZvciAoaTsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKCFmbnNbaV0pIGJyZWFrXG4gICAgICBmbnNbaV0uZXZlbnQgPSBlXG4gICAgICBmbnNbaV0uYXBwbHkoZm5zW2ldLCBhcmdzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbWl0dGVyXG59XG4iLCIvKipcbiAqIGN1aWQuanNcbiAqIENvbGxpc2lvbi1yZXNpc3RhbnQgVUlEIGdlbmVyYXRvciBmb3IgYnJvd3NlcnMgYW5kIG5vZGUuXG4gKiBTZXF1ZW50aWFsIGZvciBmYXN0IGRiIGxvb2t1cHMgYW5kIHJlY2VuY3kgc29ydGluZy5cbiAqIFNhZmUgZm9yIGVsZW1lbnQgSURzIGFuZCBzZXJ2ZXItc2lkZSBsb29rdXBzLlxuICpcbiAqIEV4dHJhY3RlZCBmcm9tIENMQ1RSXG4gKlxuICogQ29weXJpZ2h0IChjKSBFcmljIEVsbGlvdHQgMjAxMlxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG52YXIgZmluZ2VycHJpbnQgPSByZXF1aXJlKCcuL2xpYi9maW5nZXJwcmludC5qcycpO1xudmFyIHBhZCA9IHJlcXVpcmUoJy4vbGliL3BhZC5qcycpO1xuXG52YXIgYyA9IDAsXG4gIGJsb2NrU2l6ZSA9IDQsXG4gIGJhc2UgPSAzNixcbiAgZGlzY3JldGVWYWx1ZXMgPSBNYXRoLnBvdyhiYXNlLCBibG9ja1NpemUpO1xuXG5mdW5jdGlvbiByYW5kb21CbG9jayAoKSB7XG4gIHJldHVybiBwYWQoKE1hdGgucmFuZG9tKCkgKlxuICAgIGRpc2NyZXRlVmFsdWVzIDw8IDApXG4gICAgLnRvU3RyaW5nKGJhc2UpLCBibG9ja1NpemUpO1xufVxuXG5mdW5jdGlvbiBzYWZlQ291bnRlciAoKSB7XG4gIGMgPSBjIDwgZGlzY3JldGVWYWx1ZXMgPyBjIDogMDtcbiAgYysrOyAvLyB0aGlzIGlzIG5vdCBzdWJsaW1pbmFsXG4gIHJldHVybiBjIC0gMTtcbn1cblxuZnVuY3Rpb24gY3VpZCAoKSB7XG4gIC8vIFN0YXJ0aW5nIHdpdGggYSBsb3dlcmNhc2UgbGV0dGVyIG1ha2VzXG4gIC8vIGl0IEhUTUwgZWxlbWVudCBJRCBmcmllbmRseS5cbiAgdmFyIGxldHRlciA9ICdjJywgLy8gaGFyZC1jb2RlZCBhbGxvd3MgZm9yIHNlcXVlbnRpYWwgYWNjZXNzXG5cbiAgICAvLyB0aW1lc3RhbXBcbiAgICAvLyB3YXJuaW5nOiB0aGlzIGV4cG9zZXMgdGhlIGV4YWN0IGRhdGUgYW5kIHRpbWVcbiAgICAvLyB0aGF0IHRoZSB1aWQgd2FzIGNyZWF0ZWQuXG4gICAgdGltZXN0YW1wID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpKS50b1N0cmluZyhiYXNlKSxcblxuICAgIC8vIFByZXZlbnQgc2FtZS1tYWNoaW5lIGNvbGxpc2lvbnMuXG4gICAgY291bnRlciA9IHBhZChzYWZlQ291bnRlcigpLnRvU3RyaW5nKGJhc2UpLCBibG9ja1NpemUpLFxuXG4gICAgLy8gQSBmZXcgY2hhcnMgdG8gZ2VuZXJhdGUgZGlzdGluY3QgaWRzIGZvciBkaWZmZXJlbnRcbiAgICAvLyBjbGllbnRzIChzbyBkaWZmZXJlbnQgY29tcHV0ZXJzIGFyZSBmYXIgbGVzc1xuICAgIC8vIGxpa2VseSB0byBnZW5lcmF0ZSB0aGUgc2FtZSBpZClcbiAgICBwcmludCA9IGZpbmdlcnByaW50KCksXG5cbiAgICAvLyBHcmFiIHNvbWUgbW9yZSBjaGFycyBmcm9tIE1hdGgucmFuZG9tKClcbiAgICByYW5kb20gPSByYW5kb21CbG9jaygpICsgcmFuZG9tQmxvY2soKTtcblxuICByZXR1cm4gbGV0dGVyICsgdGltZXN0YW1wICsgY291bnRlciArIHByaW50ICsgcmFuZG9tO1xufVxuXG5jdWlkLnNsdWcgPSBmdW5jdGlvbiBzbHVnICgpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygzNiksXG4gICAgY291bnRlciA9IHNhZmVDb3VudGVyKCkudG9TdHJpbmcoMzYpLnNsaWNlKC00KSxcbiAgICBwcmludCA9IGZpbmdlcnByaW50KCkuc2xpY2UoMCwgMSkgK1xuICAgICAgZmluZ2VycHJpbnQoKS5zbGljZSgtMSksXG4gICAgcmFuZG9tID0gcmFuZG9tQmxvY2soKS5zbGljZSgtMik7XG5cbiAgcmV0dXJuIGRhdGUuc2xpY2UoLTIpICtcbiAgICBjb3VudGVyICsgcHJpbnQgKyByYW5kb207XG59O1xuXG5jdWlkLmlzQ3VpZCA9IGZ1bmN0aW9uIGlzQ3VpZCAoc3RyaW5nVG9DaGVjaykge1xuICBpZiAodHlwZW9mIHN0cmluZ1RvQ2hlY2sgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2U7XG4gIGlmIChzdHJpbmdUb0NoZWNrLnN0YXJ0c1dpdGgoJ2MnKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmN1aWQuaXNTbHVnID0gZnVuY3Rpb24gaXNTbHVnIChzdHJpbmdUb0NoZWNrKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nVG9DaGVjayAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTtcbiAgdmFyIHN0cmluZ0xlbmd0aCA9IHN0cmluZ1RvQ2hlY2subGVuZ3RoO1xuICBpZiAoc3RyaW5nTGVuZ3RoID49IDcgJiYgc3RyaW5nTGVuZ3RoIDw9IDEwKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY3VpZC5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGN1aWQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhZCAobnVtLCBzaXplKSB7XG4gIHZhciBzID0gJzAwMDAwMDAwMCcgKyBudW07XG4gIHJldHVybiBzLnN1YnN0cihzLmxlbmd0aCAtIHNpemUpO1xufTtcbiIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYSBET00gZWxlbWVudC4gRHVjay10eXBpbmcgYmFzZWQgb24gYG5vZGVUeXBlYC5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRE9NRWxlbWVudChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgPT09ICdvYmplY3QnICYmIG9iai5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREU7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuLy8gUmVtb3ZlIHRoZSB0cmFpbGluZyBzbGFzaCBzbyB3ZSBjYW4gYWx3YXlzIHNhZmVseSBhcHBlbmQgL3h5ei5cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gc3RyaXBTbGFzaCh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9cXC8kLywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVxdWVzdENsaWVudCh1cHB5LCBvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlcXVlc3RDbGllbnQpO1xuXG4gICAgdGhpcy51cHB5ID0gdXBweTtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMub25SZWNlaXZlUmVzcG9uc2UgPSB0aGlzLm9uUmVjZWl2ZVJlc3BvbnNlLmJpbmQodGhpcyk7XG4gIH1cblxuICBSZXF1ZXN0Q2xpZW50LnByb3RvdHlwZS5vblJlY2VpdmVSZXNwb25zZSA9IGZ1bmN0aW9uIG9uUmVjZWl2ZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy51cHB5LmdldFN0YXRlKCk7XG4gICAgdmFyIGNvbXBhbmlvbiA9IHN0YXRlLmNvbXBhbmlvbiB8fCB7fTtcbiAgICB2YXIgaG9zdCA9IHRoaXMub3B0cy5zZXJ2ZXJVcmw7XG4gICAgdmFyIGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgIC8vIFN0b3JlIHRoZSBzZWxmLWlkZW50aWZpZWQgZG9tYWluIG5hbWUgZm9yIHRoZSBDb21wYW5pb24gaW5zdGFuY2Ugd2UganVzdCBoaXQuXG4gICAgaWYgKGhlYWRlcnMuaGFzKCdpLWFtJykgJiYgaGVhZGVycy5nZXQoJ2ktYW0nKSAhPT0gY29tcGFuaW9uW2hvc3RdKSB7XG4gICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICB0aGlzLnVwcHkuc2V0U3RhdGUoe1xuICAgICAgICBjb21wYW5pb246IF9leHRlbmRzKHt9LCBjb21wYW5pb24sIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2hvc3RdID0gaGVhZGVycy5nZXQoJ2ktYW0nKSwgX2V4dGVuZHMyKSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG5cbiAgUmVxdWVzdENsaWVudC5wcm90b3R5cGUuX2dldFVybCA9IGZ1bmN0aW9uIF9nZXRVcmwodXJsKSB7XG4gICAgaWYgKC9eKGh0dHBzPzp8KVxcL1xcLy8udGVzdCh1cmwpKSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ob3N0bmFtZSArICcvJyArIHVybDtcbiAgfTtcblxuICBSZXF1ZXN0Q2xpZW50LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQocGF0aCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gZmV0Y2godGhpcy5fZ2V0VXJsKHBhdGgpLCB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KVxuICAgIC8vIEB0b2RvIHZhbGlkYXRlIHJlc3BvbnNlIHN0YXR1cyBiZWZvcmUgY2FsbGluZyBqc29uXG4gICAgLnRoZW4odGhpcy5vblJlY2VpdmVSZXNwb25zZSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBnZXQgJyArIF90aGlzLl9nZXRVcmwocGF0aCkgKyAnLiAnICsgZXJyKTtcbiAgICB9KTtcbiAgfTtcblxuICBSZXF1ZXN0Q2xpZW50LnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gcG9zdChwYXRoLCBkYXRhKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZmV0Y2godGhpcy5fZ2V0VXJsKHBhdGgpLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9KS50aGVuKHRoaXMub25SZWNlaXZlUmVzcG9uc2UpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPCAyMDAgfHwgcmVzLnN0YXR1cyA+IDMwMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwb3N0ICcgKyBfdGhpczIuX2dldFVybChwYXRoKSArICcuICcgKyByZXMuc3RhdHVzVGV4dCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwb3N0ICcgKyBfdGhpczIuX2dldFVybChwYXRoKSArICcuICcgKyBlcnIpO1xuICAgIH0pO1xuICB9O1xuXG4gIFJlcXVlc3RDbGllbnQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIF9kZWxldGUocGF0aCwgZGF0YSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZldGNoKHRoaXMuaG9zdG5hbWUgKyAnLycgKyBwYXRoLCB7XG4gICAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICBib2R5OiBkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBudWxsXG4gICAgfSkudGhlbih0aGlzLm9uUmVjZWl2ZVJlc3BvbnNlKVxuICAgIC8vIEB0b2RvIHZhbGlkYXRlIHJlc3BvbnNlIHN0YXR1cyBiZWZvcmUgY2FsbGluZyBqc29uXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZGVsZXRlICcgKyBfdGhpczMuX2dldFVybChwYXRoKSArICcuICcgKyBlcnIpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhSZXF1ZXN0Q2xpZW50LCBbe1xuICAgIGtleTogJ2hvc3RuYW1lJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfdXBweSRnZXRTdGF0ZSA9IHRoaXMudXBweS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIGNvbXBhbmlvbiA9IF91cHB5JGdldFN0YXRlLmNvbXBhbmlvbjtcblxuICAgICAgdmFyIGhvc3QgPSB0aGlzLm9wdHMuc2VydmVyVXJsO1xuICAgICAgcmV0dXJuIHN0cmlwU2xhc2goY29tcGFuaW9uICYmIGNvbXBhbmlvbltob3N0XSA/IGNvbXBhbmlvbltob3N0XSA6IGhvc3QpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RlZmF1bHRIZWFkZXJzJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGVhZGVycycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMsIHRoaXMub3B0cy5zZXJ2ZXJIZWFkZXJzIHx8IHt9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVxdWVzdENsaWVudDtcbn0oKTsiLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJ2YXIgZ2V0RmlsZVR5cGVJY29uID0gcmVxdWlyZSgnLi4vdXRpbHMvZ2V0RmlsZVR5cGVJY29uJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZS5oO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEZpbGVQcmV2aWV3KHByb3BzKSB7XG4gIHZhciBmaWxlID0gcHJvcHMuZmlsZTtcblxuICBpZiAoZmlsZS5wcmV2aWV3KSB7XG4gICAgcmV0dXJuIGgoJ2ltZycsIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkSXRlbS1wcmV2aWV3SW1nJywgYWx0OiBmaWxlLm5hbWUsIHNyYzogZmlsZS5wcmV2aWV3IH0pO1xuICB9XG5cbiAgdmFyIF9nZXRGaWxlVHlwZUljb24gPSBnZXRGaWxlVHlwZUljb24oZmlsZS50eXBlKSxcbiAgICAgIGNvbG9yID0gX2dldEZpbGVUeXBlSWNvbi5jb2xvcixcbiAgICAgIGljb24gPSBfZ2V0RmlsZVR5cGVJY29uLmljb247XG5cbiAgcmV0dXJuIGgoXG4gICAgJ2RpdicsXG4gICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLXByZXZpZXdJY29uV3JhcCcgfSxcbiAgICBoKFxuICAgICAgJ3NwYW4nLFxuICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLXByZXZpZXdJY29uJywgc3R5bGU6IHsgY29sb3I6IGNvbG9yIH0gfSxcbiAgICAgIGljb25cbiAgICApLFxuICAgIGgoXG4gICAgICAnc3ZnJyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkSXRlbS1wcmV2aWV3SWNvbkJnJywgd2lkdGg6ICc3MicsIGhlaWdodDogJzkzJywgdmlld0JveDogJzAgMCA3MiA5MycgfSxcbiAgICAgIGgoXG4gICAgICAgICdnJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaCgncGF0aCcsIHsgZDogJ00yNC4wOCA1aDM4LjkyMkEyLjk5NyAyLjk5NyAwIDAgMSA2NiA4LjAwM3Y3NC45OTRBMi45OTcgMi45OTcgMCAwIDEgNjMuMDA0IDg2SDguOTk2QTIuOTk4IDIuOTk4IDAgMCAxIDYgODMuMDFWMjIuMjM0TDI0LjA4IDV6JywgZmlsbDogJyNGRkYnIH0pLFxuICAgICAgICBoKCdwYXRoJywgeyBkOiAnTTI0IDVMNiAyMi4yNDhoMTUuMDA3QTIuOTk1IDIuOTk1IDAgMCAwIDI0IDE5LjI0NFY1eicsIGZpbGw6ICcjRTRFNEU0JyB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcbn07XG5cbi8vIDxzcGFuIGNsYXNzPVwidXBweS1EYXNoYm9hcmRJdGVtLXByZXZpZXdUeXBlXCI+e2ZpbGUuZXh0ZW5zaW9uICYmIGZpbGUuZXh0ZW5zaW9uLmxlbmd0aCA8IDUgPyBmaWxlLmV4dGVuc2lvbiA6IG51bGx9PC9zcGFuPiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEFjdGlvbkJyb3dzZVRhZ2xpbmUgPSByZXF1aXJlKCcuL0FjdGlvbkJyb3dzZVRhZ2xpbmUnKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9pY29ucycpLFxuICAgIGxvY2FsSWNvbiA9IF9yZXF1aXJlLmxvY2FsSWNvbjtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZTIuaCxcbiAgICBDb21wb25lbnQgPSBfcmVxdWlyZTIuQ29tcG9uZW50O1xuXG52YXIgcG93ZXJlZEJ5VXBweSA9IGZ1bmN0aW9uIHBvd2VyZWRCeVVwcHkocHJvcHMpIHtcbiAgcmV0dXJuIGgoXG4gICAgJ2EnLFxuICAgIHsgdGFiaW5kZXg6ICctMScsIGhyZWY6ICdodHRwczovL3VwcHkuaW8nLCByZWw6ICdub3JlZmVycmVyIG5vb3BlbmVyJywgdGFyZ2V0OiAnX2JsYW5rJywgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkLXBvd2VyZWRCeScgfSxcbiAgICAnUG93ZXJlZCBieSAnLFxuICAgIGgoXG4gICAgICAnc3ZnJyxcbiAgICAgIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCAnY2xhc3MnOiAnVXBweUljb24gdXBweS1EYXNoYm9hcmQtcG93ZXJlZEJ5SWNvbicsIHdpZHRoOiAnMTEnLCBoZWlnaHQ6ICcxMScsIHZpZXdCb3g6ICcwIDAgMTEgMTEnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuICAgICAgaCgncGF0aCcsIHsgZDogJ003LjM2NSAxMC41bC0uMDEtNC4wNDVoMi42MTJMNS41LjgwNmwtNC40NjcgNS42NWgyLjYwNGwuMDEgNC4wNDRoMy43MTh6JywgJ2ZpbGwtcnVsZSc6ICdldmVub2RkJyB9KVxuICAgICksXG4gICAgaChcbiAgICAgICdzcGFuJyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkLXBvd2VyZWRCeVVwcHknIH0sXG4gICAgICAnVXBweSdcbiAgICApXG4gICk7XG59O1xuXG52YXIgQWRkRmlsZXMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQWRkRmlsZXMsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFkZEZpbGVzKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFkZEZpbGVzKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuaGFuZGxlQ2xpY2sgPSBfdGhpcy5oYW5kbGVDbGljay5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBBZGRGaWxlcy5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhldikge1xuICAgIHRoaXMuaW5wdXQuY2xpY2soKTtcbiAgfTtcblxuICBBZGRGaWxlcy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgLy8gY29uc3QgaXNIaWRkZW4gPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmZpbGVzKS5sZW5ndGggPT09IDBcbiAgICB2YXIgaGFzQWNxdWlyZXJzID0gdGhpcy5wcm9wcy5hY3F1aXJlcnMubGVuZ3RoICE9PSAwO1xuXG4gICAgaWYgKCFoYXNBY3F1aXJlcnMpIHtcbiAgICAgIHJldHVybiBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hckFkZEZpbGVzJyB9LFxuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkVGFicycgfSxcbiAgICAgICAgICBoKEFjdGlvbkJyb3dzZVRhZ2xpbmUsIHtcbiAgICAgICAgICAgIGFjcXVpcmVyczogdGhpcy5wcm9wcy5hY3F1aXJlcnMsXG4gICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5wcm9wcy5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgICAgIGkxOG46IHRoaXMucHJvcHMuaTE4bixcbiAgICAgICAgICAgIGkxOG5BcnJheTogdGhpcy5wcm9wcy5pMThuQXJyYXksXG4gICAgICAgICAgICBhbGxvd2VkRmlsZVR5cGVzOiB0aGlzLnByb3BzLmFsbG93ZWRGaWxlVHlwZXMsXG4gICAgICAgICAgICBtYXhOdW1iZXJPZkZpbGVzOiB0aGlzLnByb3BzLm1heE51bWJlck9mRmlsZXNcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJBZGRGaWxlcy1pbmZvJyB9LFxuICAgICAgICAgIHRoaXMucHJvcHMubm90ZSAmJiBoKFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZC1ub3RlJyB9LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5ub3RlXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLnByb3BzLnByb3VkbHlEaXNwbGF5UG93ZXJlZEJ5VXBweSAmJiBwb3dlcmVkQnlVcHB5KHRoaXMucHJvcHMpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gZW1wdHkgdmFsdWU9XCJcIiBvbiBmaWxlIGlucHV0LCBzbyB0aGF0IHRoZSBpbnB1dCBpcyBjbGVhcmVkIGFmdGVyIGEgZmlsZSBpcyBzZWxlY3RlZCxcbiAgICAvLyBiZWNhdXNlIFVwcHkgd2lsbCBiZSBoYW5kbGluZyB0aGUgdXBsb2FkIGFuZCBzbyB3ZSBjYW4gc2VsZWN0IHNhbWUgZmlsZVxuICAgIC8vIGFmdGVyIHJlbW92aW5nIOKAlCBvdGhlcndpc2UgYnJvd3NlciB0aGlua3MgaXTigJlzIGFscmVhZHkgc2VsZWN0ZWRcbiAgICByZXR1cm4gaChcbiAgICAgICdkaXYnLFxuICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hckFkZEZpbGVzJyB9LFxuICAgICAgaChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkVGFicycgfSxcbiAgICAgICAgaChBY3Rpb25Ccm93c2VUYWdsaW5lLCB7XG4gICAgICAgICAgYWNxdWlyZXJzOiB0aGlzLnByb3BzLmFjcXVpcmVycyxcbiAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZTogdGhpcy5wcm9wcy5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgICBpMThuOiB0aGlzLnByb3BzLmkxOG4sXG4gICAgICAgICAgaTE4bkFycmF5OiB0aGlzLnByb3BzLmkxOG5BcnJheSxcbiAgICAgICAgICBhbGxvd2VkRmlsZVR5cGVzOiB0aGlzLnByb3BzLmFsbG93ZWRGaWxlVHlwZXMsXG4gICAgICAgICAgbWF4TnVtYmVyT2ZGaWxlczogdGhpcy5wcm9wcy5tYXhOdW1iZXJPZkZpbGVzXG4gICAgICAgIH0pLFxuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkVGFicy1saXN0Jywgcm9sZTogJ3RhYmxpc3QnIH0sXG4gICAgICAgICAgaChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRUYWInLCByb2xlOiAncHJlc2VudGF0aW9uJyB9LFxuICAgICAgICAgICAgaChcbiAgICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICAgIHsgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkVGFiLWJ0bicsXG4gICAgICAgICAgICAgICAgcm9sZTogJ3RhYicsXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgb25jbGljazogdGhpcy5oYW5kbGVDbGljayB9LFxuICAgICAgICAgICAgICBsb2NhbEljb24oKSxcbiAgICAgICAgICAgICAgaChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZFRhYi1uYW1lJyB9LFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaTE4bignbXlEZXZpY2UnKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaCgnaW5wdXQnLCB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZC1pbnB1dCcsXG4gICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgbmFtZTogJ2ZpbGVzW10nLFxuICAgICAgICAgICAgICBtdWx0aXBsZTogdGhpcy5wcm9wcy5tYXhOdW1iZXJPZkZpbGVzICE9PSAxLFxuICAgICAgICAgICAgICBhY2NlcHQ6IHRoaXMucHJvcHMuYWxsb3dlZEZpbGVUeXBlcyxcbiAgICAgICAgICAgICAgb25jaGFuZ2U6IHRoaXMucHJvcHMuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoaW5wdXQpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgfSB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgdGhpcy5wcm9wcy5hY3F1aXJlcnMubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBoKFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRUYWInLCByb2xlOiAncHJlc2VudGF0aW9uJyB9LFxuICAgICAgICAgICAgICBoKFxuICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkVGFiLWJ0bicsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgIHJvbGU6ICd0YWInLFxuICAgICAgICAgICAgICAgICAgdGFiaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtcGFuZWwtLScgKyB0YXJnZXQuaWQsXG4gICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IF90aGlzMi5wcm9wcy5hY3RpdmVQYW5lbC5pZCA9PT0gdGFyZ2V0LmlkLFxuICAgICAgICAgICAgICAgICAgb25jbGljazogZnVuY3Rpb24gb25jbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcy5zaG93UGFuZWwodGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICB0YXJnZXQuaWNvbigpLFxuICAgICAgICAgICAgICAgIGgoXG4gICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkVGFiLW5hbWUnIH0sXG4gICAgICAgICAgICAgICAgICB0YXJnZXQubmFtZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgaChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJBZGRGaWxlcy1pbmZvJyB9LFxuICAgICAgICB0aGlzLnByb3BzLm5vdGUgJiYgaChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZC1ub3RlJyB9LFxuICAgICAgICAgIHRoaXMucHJvcHMubm90ZVxuICAgICAgICApLFxuICAgICAgICB0aGlzLnByb3BzLnByb3VkbHlEaXNwbGF5UG93ZXJlZEJ5VXBweSAmJiBwb3dlcmVkQnlVcHB5KHRoaXMucHJvcHMpXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQWRkRmlsZXM7XG59KENvbXBvbmVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQWRkRmlsZXM7IiwiLy8gaWdub3JlIGRyb3AvcGFzdGUgZXZlbnRzIGlmIHRoZXkgYXJlIG5vdCBpbiBpbnB1dCBvciB0ZXh0YXJlYSDigJRcbi8vIG90aGVyd2lzZSB3aGVuIFVybCBwbHVnaW4gYWRkcyBkcm9wL3Bhc3RlIGxpc3RlbmVycyB0byB0aGlzLmVsLFxuLy8gZHJhZ2luZyBVSSBlbGVtZW50cyBvciBwYXN0aW5nIGFueXRoaW5nIGludG8gYW55IGZpZWxkIHRyaWdnZXJzIHRob3NlIGV2ZW50cyDigJRcbi8vIFVybCB0cmVhdHMgdGhlbSBhcyBVUkxzIHRoYXQgbmVlZCB0byBiZSBpbXBvcnRlZFxuXG5mdW5jdGlvbiBpZ25vcmVFdmVudChldikge1xuICB2YXIgdGFnTmFtZSA9IGV2LnRhcmdldC50YWdOYW1lO1xuICBpZiAodGFnTmFtZSA9PT0gJ0lOUFVUJyB8fCB0YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlnbm9yZUV2ZW50OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAnU1RBVEVfRVJST1InOiAnZXJyb3InLFxuICAnU1RBVEVfV0FJVElORyc6ICd3YWl0aW5nJyxcbiAgJ1NUQVRFX1BSRVBST0NFU1NJTkcnOiAncHJlcHJvY2Vzc2luZycsXG4gICdTVEFURV9VUExPQURJTkcnOiAndXBsb2FkaW5nJyxcbiAgJ1NUQVRFX1BPU1RQUk9DRVNTSU5HJzogJ3Bvc3Rwcm9jZXNzaW5nJyxcbiAgJ1NUQVRFX0NPTVBMRVRFJzogJ2NvbXBsZXRlJ1xufTsiLCIvKipcclxuICogQSBjb2xsZWN0aW9uIG9mIHNoaW1zIHRoYXQgcHJvdmlkZSBtaW5pbWFsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEVTNiBjb2xsZWN0aW9ucy5cclxuICpcclxuICogVGhlc2UgaW1wbGVtZW50YXRpb25zIGFyZSBub3QgbWVhbnQgdG8gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBSZXNpemVPYnNlcnZlclxyXG4gKiBtb2R1bGVzIGFzIHRoZXkgY292ZXIgb25seSBhIGxpbWl0ZWQgcmFuZ2Ugb2YgdXNlIGNhc2VzLlxyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYywgdmFsaWQtanNkb2MgKi9cclxudmFyIE1hcFNoaW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpbmRleCBpbiBwcm92aWRlZCBhcnJheSB0aGF0IG1hdGNoZXMgdGhlIHNwZWNpZmllZCBrZXkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEluZGV4KGFyciwga2V5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gICAgICAgIGFyci5zb21lKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5WzBdID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZW50cmllc19fLmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX19lbnRyaWVzX19baW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fW2luZGV4XVsxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5wdXNoKFtrZXksIHZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuX19lbnRyaWVzX187XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KGVudHJpZXMsIGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5nZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18uc3BsaWNlKDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtjdHg9bnVsbF1cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjdHgpIHtcclxuICAgICAgICAgICAgaWYgKGN0eCA9PT0gdm9pZCAwKSB7IGN0eCA9IG51bGw7IH1cclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX19lbnRyaWVzX187IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGN0eCwgZW50cnlbMV0sIGVudHJ5WzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzXzE7XHJcbiAgICB9KCkpO1xyXG59KSgpO1xuXG4vKipcclxuICogRGV0ZWN0cyB3aGV0aGVyIHdpbmRvdyBhbmQgZG9jdW1lbnQgb2JqZWN0cyBhcmUgYXZhaWxhYmxlIGluIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAqL1xyXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPT09IGRvY3VtZW50O1xuXG4vLyBSZXR1cm5zIGdsb2JhbCBvYmplY3Qgb2YgYSBjdXJyZW50IGVudmlyb25tZW50LlxyXG52YXIgZ2xvYmFsJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXHJcbiAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIEEgc2hpbSBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aGljaCBmYWxscyBiYWNrIHRvIHRoZSBzZXRUaW1lb3V0IGlmXHJcbiAqIGZpcnN0IG9uZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXF1ZXN0cycgaWRlbnRpZmllci5cclxuICovXHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIEl0J3MgcmVxdWlyZWQgdG8gdXNlIGEgYm91bmRlZCBmdW5jdGlvbiBiZWNhdXNlIElFIHNvbWV0aW1lcyB0aHJvd3NcclxuICAgICAgICAvLyBhbiBcIkludmFsaWQgY2FsbGluZyBvYmplY3RcIiBlcnJvciBpZiByQUYgaXMgaW52b2tlZCB3aXRob3V0IHRoZSBnbG9iYWxcclxuICAgICAgICAvLyBvYmplY3Qgb24gdGhlIGxlZnQgaGFuZCBzaWRlLlxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChnbG9iYWwkMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKERhdGUubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xyXG59KSgpO1xuXG4vLyBEZWZpbmVzIG1pbmltdW0gdGltZW91dCBiZWZvcmUgYWRkaW5nIGEgdHJhaWxpbmcgY2FsbC5cclxudmFyIHRyYWlsaW5nVGltZW91dCA9IDI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBlbnN1cmVzIHRoYXQgcHJvdmlkZWQgY2FsbGJhY2sgd2lsbCBiZVxyXG4gKiBpbnZva2VkIG9ubHkgb25jZSBkdXJpbmcgdGhlIHNwZWNpZmllZCBkZWxheSBwZXJpb2QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgZGVsYXkgcGVyaW9kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSBEZWxheSBhZnRlciB3aGljaCB0byBpbnZva2UgY2FsbGJhY2suXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIHRocm90dGxlIChjYWxsYmFjaywgZGVsYXkpIHtcclxuICAgIHZhciBsZWFkaW5nQ2FsbCA9IGZhbHNlLCB0cmFpbGluZ0NhbGwgPSBmYWxzZSwgbGFzdENhbGxUaW1lID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gYW5kIHNjaGVkdWxlcyBuZXcgaW52b2NhdGlvbiBpZlxyXG4gICAgICogdGhlIFwicHJveHlcIiB3YXMgY2FsbGVkIGR1cmluZyBjdXJyZW50IHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlc29sdmVQZW5kaW5nKCkge1xyXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhaWxpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIHByb3h5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkuIEl0IHdpbGwgZnVydGhlciBwb3N0cG9uZVxyXG4gICAgICogaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGVsZWdhdGluZyBpdCB0byB0aGVcclxuICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxKHJlc29sdmVQZW5kaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2NoZWR1bGVzIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwcm94eSgpIHtcclxuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgLy8gUmVqZWN0IGltbWVkaWF0ZWx5IGZvbGxvd2luZyBjYWxscy5cclxuICAgICAgICAgICAgaWYgKHRpbWVTdGFtcCAtIGxhc3RDYWxsVGltZSA8IHRyYWlsaW5nVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5ldyBjYWxsIHRvIGJlIGluIGludm9rZWQgd2hlbiB0aGUgcGVuZGluZyBvbmUgaXMgcmVzb2x2ZWQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciBcInRyYW5zaXRpb25zXCIgd2hpY2ggbmV2ZXIgYWN0dWFsbHkgc3RhcnRcclxuICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgc28gdGhlcmUgaXMgYSBjaGFuY2UgdGhhdCB3ZSBtaWdodCBtaXNzIG9uZSBpZiBjaGFuZ2VcclxuICAgICAgICAgICAgLy8gaGFwcGVucyBhbWlkcyB0aGUgcGVuZGluZyBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2ssIGRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdENhbGxUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3h5O1xyXG59XG5cbi8vIE1pbmltdW0gZGVsYXkgYmVmb3JlIGludm9raW5nIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLlxyXG52YXIgUkVGUkVTSF9ERUxBWSA9IDIwO1xyXG4vLyBBIGxpc3Qgb2Ygc3Vic3RyaW5ncyBvZiBDU1MgcHJvcGVydGllcyB1c2VkIHRvIGZpbmQgdHJhbnNpdGlvbiBldmVudHMgdGhhdFxyXG4vLyBtaWdodCBhZmZlY3QgZGltZW5zaW9ucyBvZiBvYnNlcnZlZCBlbGVtZW50cy5cclxudmFyIHRyYW5zaXRpb25LZXlzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3NpemUnLCAnd2VpZ2h0J107XHJcbi8vIENoZWNrIGlmIE11dGF0aW9uT2JzZXJ2ZXIgaXMgYXZhaWxhYmxlLlxyXG52YXIgbXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcclxuLyoqXHJcbiAqIFNpbmdsZXRvbiBjb250cm9sbGVyIGNsYXNzIHdoaWNoIGhhbmRsZXMgdXBkYXRlcyBvZiBSZXNpemVPYnNlcnZlciBpbnN0YW5jZXMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgRE9NIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUZWxscyB0aGF0IGNvbnRyb2xsZXIgaGFzIHN1YnNjcmliZWQgZm9yIE11dGF0aW9uIEV2ZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBLZWVwcyByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TXV0YXRpb25PYnNlcnZlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBsaXN0IG9mIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2ZXJTUEk+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzXyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kXyA9IHRoaXMub25UcmFuc2l0aW9uRW5kXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCA9IHRocm90dGxlKHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBSRUZSRVNIX0RFTEFZKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBvYnNlcnZlciB0byBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIGFkZGVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAoIX50aGlzLm9ic2VydmVyc18uaW5kZXhPZihvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNfLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuIGFkZGVkIHlldC5cclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgcmVtb3ZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXztcclxuICAgICAgICB2YXIgaW5kZXggPSBvYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgLy8gUmVtb3ZlIG9ic2VydmVyIGlmIGl0J3MgcHJlc2VudCBpbiByZWdpc3RyeS5cclxuICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIGlmIGNvbnRyb2xsZXIgaGFzIG5vIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZlcnMubGVuZ3RoICYmIHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy4gSXQgd2lsbCBjb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaW5zb2ZhclxyXG4gICAgICogaXQgZGV0ZWN0cyBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNoYW5nZXNEZXRlY3RlZCA9IHRoaXMudXBkYXRlT2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgIC8vIENvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpZiBjaGFuZ2VzIGhhdmUgYmVlbiBkZXRlY3RlZCBhcyB0aGVyZSBtaWdodFxyXG4gICAgICAgIC8vIGJlIGZ1dHVyZSBvbmVzIGNhdXNlZCBieSBDU1MgdHJhbnNpdGlvbnMuXHJcbiAgICAgICAgaWYgKGNoYW5nZXNEZXRlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGV2ZXJ5IG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QgYW5kIG5vdGlmaWVzIHRoZW0gb2YgcXVldWVkXHJcbiAgICAgKiBlbnRyaWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBcInRydWVcIiBpZiBhbnkgb2JzZXJ2ZXIgaGFzIGRldGVjdGVkIGNoYW5nZXMgaW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiBpdCdzIGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQ29sbGVjdCBvYnNlcnZlcnMgdGhhdCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdmFyIGFjdGl2ZU9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXy5maWx0ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5nYXRoZXJBY3RpdmUoKSwgb2JzZXJ2ZXIuaGFzQWN0aXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gRGVsaXZlciBub3RpZmljYXRpb25zIGluIGEgc2VwYXJhdGUgY3ljbGUgaW4gb3JkZXIgdG8gYXZvaWQgYW55XHJcbiAgICAgICAgLy8gY29sbGlzaW9ucyBiZXR3ZWVuIG9ic2VydmVycywgZS5nLiB3aGVuIG11bHRpcGxlIGluc3RhbmNlcyBvZlxyXG4gICAgICAgIC8vIFJlc2l6ZU9ic2VydmVyIGFyZSB0cmFja2luZyB0aGUgc2FtZSBlbGVtZW50IGFuZCB0aGUgY2FsbGJhY2sgb2Ygb25lXHJcbiAgICAgICAgLy8gb2YgdGhlbSBjaGFuZ2VzIGNvbnRlbnQgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgdGFyZ2V0LiBTb21ldGltZXNcclxuICAgICAgICAvLyB0aGlzIG1heSByZXN1bHQgaW4gbm90aWZpY2F0aW9ucyBiZWluZyBibG9ja2VkIGZvciB0aGUgcmVzdCBvZiBvYnNlcnZlcnMuXHJcbiAgICAgICAgYWN0aXZlT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBvYnNlcnZlci5icm9hZGNhc3RBY3RpdmUoKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZU9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgYWRkZWQuXHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3Vic2NyaXB0aW9uIHRvIHRoZSBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBpcyB1c2VkIGFzIGEgd29ya2Fyb3VuZCBmb3JcclxuICAgICAgICAvLyBkZWxheWVkIHRyYW5zaXRpb25zLiBUaGlzIHdheSBpdCdzIHBvc3NpYmxlIHRvIGNhcHR1cmUgYXQgbGVhc3QgdGhlXHJcbiAgICAgICAgLy8gZmluYWwgc3RhdGUgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLm9ic2VydmUoZG9jdW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kaXNjb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSByZW1vdmVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8ICF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8pIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtUcmFuc2l0aW9uRXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmRfID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EucHJvcGVydHlOYW1lLCBwcm9wZXJ0eU5hbWUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYjtcclxuICAgICAgICAvLyBEZXRlY3Qgd2hldGhlciB0cmFuc2l0aW9uIG1heSBhZmZlY3QgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgIHZhciBpc1JlZmxvd1Byb3BlcnR5ID0gdHJhbnNpdGlvbktleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5wcm9wZXJ0eU5hbWUuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc1JlZmxvd1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5zdGFuY2Ugb2YgdGhlIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlXykge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlXyA9IG5ldyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VfO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyJ3MgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGUge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmluc3RhbmNlXyA9IG51bGw7XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xyXG59KCkpO1xuXG4vKipcclxuICogRGVmaW5lcyBub24td3JpdGFibGUvZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm92aWRlZCB0YXJnZXQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gT2JqZWN0IGZvciB3aGljaCB0byBkZWZpbmUgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gUHJvcGVydGllcyB0byBiZSBkZWZpbmVkLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0LlxyXG4gKi9cclxudmFyIGRlZmluZUNvbmZpZ3VyYWJsZSA9IChmdW5jdGlvbiAodGFyZ2V0LCBwcm9wcykge1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHNba2V5XSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59KTtcblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGdsb2JhbCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbnZhciBnZXRXaW5kb3dPZiA9IChmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCB0aGUgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiBOb2RlLCB3aGljaCBtZWFucyB0aGF0IGl0XHJcbiAgICAvLyBoYXMgdGhlIFwib3duZXJEb2N1bWVudFwiIHByb3BlcnR5IGZyb20gd2hpY2ggd2UgY2FuIHJldHJpZXZlIGFcclxuICAgIC8vIGNvcnJlc3BvbmRpbmcgZ2xvYmFsIG9iamVjdC5cclxuICAgIHZhciBvd25lckdsb2JhbCA9IHRhcmdldCAmJiB0YXJnZXQub3duZXJEb2N1bWVudCAmJiB0YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIC8vIFJldHVybiB0aGUgbG9jYWwgZ2xvYmFsIG9iamVjdCBpZiBpdCdzIG5vdCBwb3NzaWJsZSBleHRyYWN0IG9uZSBmcm9tXHJcbiAgICAvLyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgcmV0dXJuIG93bmVyR2xvYmFsIHx8IGdsb2JhbCQxO1xyXG59KTtcblxuLy8gUGxhY2Vob2xkZXIgb2YgYW4gZW1wdHkgY29udGVudCByZWN0YW5nbGUuXHJcbnZhciBlbXB0eVJlY3QgPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuLyoqXHJcbiAqIENvbnZlcnRzIHByb3ZpZGVkIHN0cmluZyB0byBhIG51bWJlci5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIGJvcmRlcnMgc2l6ZSBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICogQHBhcmFtIHsuLi5zdHJpbmd9IHBvc2l0aW9ucyAtIEJvcmRlcnMgcG9zaXRpb25zICh0b3AsIHJpZ2h0LCAuLi4pXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb25zW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydib3JkZXItJyArIHBvc2l0aW9uICsgJy13aWR0aCddO1xyXG4gICAgICAgIHJldHVybiBzaXplICsgdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICB9LCAwKTtcclxufVxyXG4vKipcclxuICogRXh0cmFjdHMgcGFkZGluZ3Mgc2l6ZXMgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBhZGRpbmdzIGJveC5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBhZGRpbmdzKHN0eWxlcykge1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcbiAgICB2YXIgcGFkZGluZ3MgPSB7fTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcG9zaXRpb25zXzEgPSBwb3NpdGlvbnM7IF9pIDwgcG9zaXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zXzFbX2ldO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1sncGFkZGluZy0nICsgcG9zaXRpb25dO1xyXG4gICAgICAgIHBhZGRpbmdzW3Bvc2l0aW9uXSA9IHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZGRpbmdzO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIFNWRyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NWR0dyYXBoaWNzRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkc1xyXG4gKiAgICAgIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgdmFyIGJib3ggPSB0YXJnZXQuZ2V0QkJveCgpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KDAsIDAsIGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBIVE1MRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBmb3Igd2hpY2ggdG8gY2FsY3VsYXRlIHRoZSBjb250ZW50IHJlY3RhbmdsZS5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIC8vIENsaWVudCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGNhbid0IGJlXHJcbiAgICAvLyB1c2VkIGV4Y2x1c2l2ZWx5IGFzIHRoZXkgcHJvdmlkZSByb3VuZGVkIHZhbHVlcy5cclxuICAgIHZhciBjbGllbnRXaWR0aCA9IHRhcmdldC5jbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcclxuICAgIC8vIEJ5IHRoaXMgY29uZGl0aW9uIHdlIGNhbiBjYXRjaCBhbGwgbm9uLXJlcGxhY2VkIGlubGluZSwgaGlkZGVuIGFuZFxyXG4gICAgLy8gZGV0YWNoZWQgZWxlbWVudHMuIFRob3VnaCBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgbGVzc1xyXG4gICAgLy8gdGhhbiAwLjUgd2lsbCBiZSBkaXNjYXJkZWQgYXMgd2VsbC5cclxuICAgIC8vXHJcbiAgICAvLyBXaXRob3V0IGl0IHdlIHdvdWxkIG5lZWQgdG8gaW1wbGVtZW50IHNlcGFyYXRlIG1ldGhvZHMgZm9yIGVhY2ggb2ZcclxuICAgIC8vIHRob3NlIGNhc2VzIGFuZCBpdCdzIG5vdCBwb3NzaWJsZSB0byBwZXJmb3JtIGEgcHJlY2lzZSBhbmQgcGVyZm9ybWFuY2VcclxuICAgIC8vIGVmZmVjdGl2ZSB0ZXN0IGZvciBoaWRkZW4gZWxlbWVudHMuIEUuZy4gZXZlbiBqUXVlcnkncyAnOnZpc2libGUnIGZpbHRlclxyXG4gICAgLy8gZ2l2ZXMgd3JvbmcgcmVzdWx0cyBmb3IgZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBsZXNzIHRoYW4gMC41LlxyXG4gICAgaWYgKCFjbGllbnRXaWR0aCAmJiAhY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIHZhciBzdHlsZXMgPSBnZXRXaW5kb3dPZih0YXJnZXQpLmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcclxuICAgIHZhciBwYWRkaW5ncyA9IGdldFBhZGRpbmdzKHN0eWxlcyk7XHJcbiAgICB2YXIgaG9yaXpQYWQgPSBwYWRkaW5ncy5sZWZ0ICsgcGFkZGluZ3MucmlnaHQ7XHJcbiAgICB2YXIgdmVydFBhZCA9IHBhZGRpbmdzLnRvcCArIHBhZGRpbmdzLmJvdHRvbTtcclxuICAgIC8vIENvbXB1dGVkIHN0eWxlcyBvZiB3aWR0aCAmIGhlaWdodCBhcmUgYmVpbmcgdXNlZCBiZWNhdXNlIHRoZXkgYXJlIHRoZVxyXG4gICAgLy8gb25seSBkaW1lbnNpb25zIGF2YWlsYWJsZSB0byBKUyB0aGF0IGNvbnRhaW4gbm9uLXJvdW5kZWQgdmFsdWVzLiBJdCBjb3VsZFxyXG4gICAgLy8gYmUgcG9zc2libGUgdG8gdXRpbGl6ZSB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlmIG9ubHkgaXQncyBkYXRhIHdhc24ndFxyXG4gICAgLy8gYWZmZWN0ZWQgYnkgQ1NTIHRyYW5zZm9ybWF0aW9ucyBsZXQgYWxvbmUgcGFkZGluZ3MsIGJvcmRlcnMgYW5kIHNjcm9sbCBiYXJzLlxyXG4gICAgdmFyIHdpZHRoID0gdG9GbG9hdChzdHlsZXMud2lkdGgpLCBoZWlnaHQgPSB0b0Zsb2F0KHN0eWxlcy5oZWlnaHQpO1xyXG4gICAgLy8gV2lkdGggJiBoZWlnaHQgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB3aGVuIHRoZSAnYm9yZGVyLWJveCcgYm94XHJcbiAgICAvLyBtb2RlbCBpcyBhcHBsaWVkIChleGNlcHQgZm9yIElFKS5cclxuICAgIGlmIChzdHlsZXMuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcclxuICAgICAgICAvLyBGb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgcmVxdWlyZWQgdG8gaGFuZGxlIEludGVybmV0IEV4cGxvcmVyIHdoaWNoXHJcbiAgICAgICAgLy8gZG9lc24ndCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHRvIGNvbXB1dGVkIENTUyBkaW1lbnNpb25zLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgY2FuIHNheSB0aGF0IGlmIENTUyBkaW1lbnNpb25zICsgcGFkZGluZ3MgYXJlIGVxdWFsIHRvIHRoZSBcImNsaWVudFwiXHJcbiAgICAgICAgLy8gcHJvcGVydGllcyB0aGVuIGl0J3MgZWl0aGVyIElFLCBhbmQgdGh1cyB3ZSBkb24ndCBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAgICAgLy8gYW55dGhpbmcsIG9yIGFuIGVsZW1lbnQgbWVyZWx5IGRvZXNuJ3QgaGF2ZSBwYWRkaW5ncy9ib3JkZXJzIHN0eWxlcy5cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAhPT0gY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAnbGVmdCcsICdyaWdodCcpICsgaG9yaXpQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpICE9PSBjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3RvcCcsICdib3R0b20nKSArIHZlcnRQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRm9sbG93aW5nIHN0ZXBzIGNhbid0IGJlIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50J3Mgcm9vdCBlbGVtZW50IGFzIGl0c1xyXG4gICAgLy8gY2xpZW50W1dpZHRoL0hlaWdodF0gcHJvcGVydGllcyByZXByZXNlbnQgdmlld3BvcnQgYXJlYSBvZiB0aGUgd2luZG93LlxyXG4gICAgLy8gQmVzaWRlcywgaXQncyBhcyB3ZWxsIG5vdCBuZWNlc3NhcnkgYXMgdGhlIDxodG1sPiBpdHNlbGYgbmVpdGhlciBoYXNcclxuICAgIC8vIHJlbmRlcmVkIHNjcm9sbCBiYXJzIG5vciBpdCBjYW4gYmUgY2xpcHBlZC5cclxuICAgIGlmICghaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgIC8vIEluIHNvbWUgYnJvd3NlcnMgKG9ubHkgaW4gRmlyZWZveCwgYWN0dWFsbHkpIENTUyB3aWR0aCAmIGhlaWdodFxyXG4gICAgICAgIC8vIGluY2x1ZGUgc2Nyb2xsIGJhcnMgc2l6ZSB3aGljaCBjYW4gYmUgcmVtb3ZlZCBhdCB0aGlzIHN0ZXAgYXMgc2Nyb2xsXHJcbiAgICAgICAgLy8gYmFycyBhcmUgdGhlIG9ubHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHJvdW5kZWQgZGltZW5zaW9ucyArIHBhZGRpbmdzXHJcbiAgICAgICAgLy8gYW5kIFwiY2xpZW50XCIgcHJvcGVydGllcywgdGhvdWdoIHRoYXQgaXMgbm90IGFsd2F5cyB0cnVlIGluIENocm9tZS5cclxuICAgICAgICB2YXIgdmVydFNjcm9sbGJhciA9IE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgLSBjbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpIC0gY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vIENocm9tZSBoYXMgYSByYXRoZXIgd2VpcmQgcm91bmRpbmcgb2YgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIC8vIEUuZy4gZm9yIGFuIGVsZW1lbnQgd2l0aCBjb250ZW50IHdpZHRoIG9mIDMxNC4ycHggaXQgc29tZXRpbWVzIGdpdmVzXHJcbiAgICAgICAgLy8gdGhlIGNsaWVudCB3aWR0aCBvZiAzMTVweCBhbmQgZm9yIHRoZSB3aWR0aCBvZiAzMTQuN3B4IGl0IG1heSBnaXZlXHJcbiAgICAgICAgLy8gMzE0cHguIEFuZCBpdCBkb2Vzbid0IGhhcHBlbiBhbGwgdGhlIHRpbWUuIFNvIGp1c3QgaWdub3JlIHRoaXMgZGVsdGFcclxuICAgICAgICAvLyBhcyBhIG5vbi1yZWxldmFudC5cclxuICAgICAgICBpZiAoTWF0aC5hYnModmVydFNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gdmVydFNjcm9sbGJhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGhvcml6U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gaG9yaXpTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KHBhZGRpbmdzLmxlZnQsIHBhZGRpbmdzLnRvcCwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIFNWR0dyYXBoaWNzRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzU1ZHR3JhcGhpY3NFbGVtZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNvbWUgYnJvd3NlcnMsIG5hbWVseSBJRSBhbmQgRWRnZSwgZG9uJ3QgaGF2ZSB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50XHJcbiAgICAvLyBpbnRlcmZhY2UuXHJcbiAgICBpZiAodHlwZW9mIFNWR0dyYXBoaWNzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdHcmFwaGljc0VsZW1lbnQ7IH07XHJcbiAgICB9XHJcbiAgICAvLyBJZiBpdCdzIHNvLCB0aGVuIGNoZWNrIHRoYXQgZWxlbWVudCBpcyBhdCBsZWFzdCBhbiBpbnN0YW5jZSBvZiB0aGVcclxuICAgIC8vIFNWR0VsZW1lbnQgYW5kIHRoYXQgaXQgaGFzIHRoZSBcImdldEJCb3hcIiBtZXRob2QuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHRWxlbWVudCAmJlxyXG4gICAgICAgIHR5cGVvZiB0YXJnZXQuZ2V0QkJveCA9PT0gJ2Z1bmN0aW9uJyk7IH07XHJcbn0pKCk7XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGEgZG9jdW1lbnQgZWxlbWVudCAoPGh0bWw+KS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0ID09PSBnZXRXaW5kb3dPZih0YXJnZXQpLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBhbiBhcHByb3ByaWF0ZSBjb250ZW50IHJlY3RhbmdsZSBmb3IgcHJvdmlkZWQgaHRtbCBvciBzdmcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzU1ZHR3JhcGhpY3NFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCk7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgcmVjdGFuZ2xlIHdpdGggYW4gaW50ZXJmYWNlIG9mIHRoZSBET01SZWN0UmVhZE9ubHkuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkb21yZWN0cmVhZG9ubHlcclxuICpcclxuICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBPYmplY3Qgd2l0aCByZWN0YW5nbGUncyB4L3kgY29vcmRpbmF0ZXMgYW5kIGRpbWVuc2lvbnMuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0UmVhZE9ubHl9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWFkT25seVJlY3QoX2EpIHtcclxuICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgIC8vIElmIERPTVJlY3RSZWFkT25seSBpcyBhdmFpbGFibGUgdXNlIGl0IGFzIGEgcHJvdG90eXBlIGZvciB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgdmFyIENvbnN0ciA9IHR5cGVvZiBET01SZWN0UmVhZE9ubHkgIT09ICd1bmRlZmluZWQnID8gRE9NUmVjdFJlYWRPbmx5IDogT2JqZWN0O1xyXG4gICAgdmFyIHJlY3QgPSBPYmplY3QuY3JlYXRlKENvbnN0ci5wcm90b3R5cGUpO1xyXG4gICAgLy8gUmVjdGFuZ2xlJ3MgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlIGFuZCBub24tZW51bWVyYWJsZS5cclxuICAgIGRlZmluZUNvbmZpZ3VyYWJsZShyZWN0LCB7XHJcbiAgICAgICAgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICB0b3A6IHksXHJcbiAgICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcclxuICAgICAgICBib3R0b206IGhlaWdodCArIHksXHJcbiAgICAgICAgbGVmdDogeFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVjdDtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBET01SZWN0SW5pdCBvYmplY3QgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRpbWVuc2lvbnMgYW5kIHRoZSB4L3kgY29vcmRpbmF0ZXMuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkaWN0ZGVmLWRvbXJlY3Rpbml0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWCBjb29yZGluYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFkgY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gUmVjdGFuZ2xlJ3Mgd2lkdGguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBSZWN0YW5nbGUncyBoZWlnaHQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlY3RJbml0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcclxufVxuXG4vKipcclxuICogQ2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgY29tcHV0YXRpb25zIG9mIHRoZSBjb250ZW50IHJlY3RhbmdsZSBvZlxyXG4gKiBwcm92aWRlZCBET00gZWxlbWVudCBhbmQgZm9yIGtlZXBpbmcgdHJhY2sgb2YgaXQncyBjaGFuZ2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnJvYWRjYXN0ZWQgd2lkdGggb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIGhlaWdodCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtET01SZWN0SW5pdH1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIGFuZCB0ZWxscyB3aGV0aGVyIGl0J3Mgd2lkdGggb3IgaGVpZ2h0IHByb3BlcnRpZXNcclxuICAgICAqIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBicm9hZGNhc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IGdldENvbnRlbnRSZWN0KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IHJlY3Q7XHJcbiAgICAgICAgcmV0dXJuIChyZWN0LndpZHRoICE9PSB0aGlzLmJyb2FkY2FzdFdpZHRoIHx8XHJcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0ICE9PSB0aGlzLmJyb2FkY2FzdEhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzICdicm9hZGNhc3RXaWR0aCcgYW5kICdicm9hZGNhc3RIZWlnaHQnIHByb3BlcnRpZXMgd2l0aCBhIGRhdGFcclxuICAgICAqIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydGllcyBvZiB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9IExhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5icm9hZGNhc3RSZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5jb250ZW50UmVjdF87XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyRW50cnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRoYXQgaXMgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIERhdGEgb2YgdGhlIGVsZW1lbnQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQsIHJlY3RJbml0KSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRSZWN0ID0gY3JlYXRlUmVhZE9ubHlSZWN0KHJlY3RJbml0KTtcclxuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZVxyXG4gICAgICAgIC8vIGFuZCBhcmUgYWxzbyBub3QgZW51bWVyYWJsZSBpbiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUHJvcGVydHkgYWNjZXNzb3JzIGFyZSBub3QgYmVpbmcgdXNlZCBhcyB0aGV5J2QgcmVxdWlyZSB0byBkZWZpbmUgYVxyXG4gICAgICAgIC8vIHByaXZhdGUgV2Vha01hcCBzdG9yYWdlIHdoaWNoIG1heSBjYXVzZSBtZW1vcnkgbGVha3MgaW4gYnJvd3NlcnMgdGhhdFxyXG4gICAgICAgIC8vIGRvbid0IHN1cHBvcnQgdGhpcyB0eXBlIG9mIGNvbGxlY3Rpb25zLlxyXG4gICAgICAgIGRlZmluZUNvbmZpZ3VyYWJsZSh0aGlzLCB7IHRhcmdldDogdGFyZ2V0LCBjb250ZW50UmVjdDogY29udGVudFJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcclxufSgpKTtcblxudmFyIFJlc2l6ZU9ic2VydmVyU1BJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWRcclxuICAgICAqICAgICAgd2hlbiBvbmUgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZXMgaXQncyBjb250ZW50IGRpbWVuc2lvbnMuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn0gY29udHJvbGxlciAtIENvbnRyb2xsZXIgaW5zdGFuY2Ugd2hpY2hcclxuICAgICAqICAgICAgaXMgcmVzcG9uc2libGUgZm9yIHRoZSB1cGRhdGVzIG9mIG9ic2VydmVyLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlcn0gY2FsbGJhY2tDdHggLSBSZWZlcmVuY2UgdG8gdGhlIHB1YmxpY1xyXG4gICAgICogICAgICBSZXNpemVPYnNlcnZlciBpbnN0YW5jZSB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIGNhbGxiYWNrQ3R4KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29sbGVjdGlvbiBvZiByZXNpemUgb2JzZXJ2YXRpb25zIHRoYXQgaGF2ZSBkZXRlY3RlZCBjaGFuZ2VzIGluIGRpbWVuc2lvbnNcclxuICAgICAgICAgKiBvZiBlbGVtZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVnaXN0cnkgb2YgdGhlIFJlc2l6ZU9ic2VydmF0aW9uIGluc3RhbmNlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtNYXA8RWxlbWVudCwgUmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXyA9IG5ldyBNYXBTaGltKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXyA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja0N0eF8gPSBjYWxsYmFja0N0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmIChvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuc2V0KHRhcmdldCwgbmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8uYWRkT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgLy8gRm9yY2UgdGhlIHVwZGF0ZSBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gc3RvcCBvYnNlcnZpbmcuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBub3QgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIG9ic2VydmluZyBhbGwgZWxlbWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ29sbGVjdHMgb2JzZXJ2YXRpb24gaW5zdGFuY2VzIHRoZSBhc3NvY2lhdGVkIGVsZW1lbnQgb2Ygd2hpY2ggaGFzIGNoYW5nZWRcclxuICAgICAqIGl0J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5nYXRoZXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZhdGlvbi5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnB1c2gob2JzZXJ2YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIGluaXRpYWwgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhIGxpc3Qgb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeVxyXG4gICAgICogaW5zdGFuY2VzIGNvbGxlY3RlZCBmcm9tIGFjdGl2ZSByZXNpemUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuYnJvYWRjYXN0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgb2JzZXJ2ZXIgZG9lc24ndCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FsbGJhY2tDdHhfO1xyXG4gICAgICAgIC8vIENyZWF0ZSBSZXNpemVPYnNlcnZlckVudHJ5IGluc3RhbmNlIGZvciBldmVyeSBhY3RpdmUgb2JzZXJ2YXRpb24uXHJcbiAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubWFwKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob2JzZXJ2YXRpb24udGFyZ2V0LCBvYnNlcnZhdGlvbi5icm9hZGNhc3RSZWN0KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfLmNhbGwoY3R4LCBlbnRyaWVzLCBjdHgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyB0aGUgY29sbGVjdGlvbiBvZiBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuY2xlYXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnNwbGljZSgwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRlbGxzIHdoZXRoZXIgb2JzZXJ2ZXIgaGFzIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5oYXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNQSTtcclxufSgpKTtcblxuLy8gUmVnaXN0cnkgb2YgaW50ZXJuYWwgb2JzZXJ2ZXJzLiBJZiBXZWFrTWFwIGlzIG5vdCBhdmFpbGFibGUgdXNlIGN1cnJlbnQgc2hpbVxyXG4vLyBmb3IgdGhlIE1hcCBjb2xsZWN0aW9uIGFzIGl0IGhhcyBhbGwgcmVxdWlyZWQgbWV0aG9kcyBhbmQgYmVjYXVzZSBXZWFrTWFwXHJcbi8vIGNhbid0IGJlIGZ1bGx5IHBvbHlmaWxsZWQgYW55d2F5LlxyXG52YXIgb2JzZXJ2ZXJzID0gdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnID8gbmV3IFdlYWtNYXAoKSA6IG5ldyBNYXBTaGltKCk7XHJcbi8qKlxyXG4gKiBSZXNpemVPYnNlcnZlciBBUEkuIEVuY2Fwc3VsYXRlcyB0aGUgUmVzaXplT2JzZXJ2ZXIgU1BJIGltcGxlbWVudGF0aW9uXHJcbiAqIGV4cG9zaW5nIG9ubHkgdGhvc2UgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB0aGF0IGFyZSBkZWZpbmVkIGluIHRoZSBzcGVjLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlblxyXG4gICAgICogICAgICBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZU9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCB0aGlzKTtcclxuICAgICAgICBvYnNlcnZlcnMuc2V0KHRoaXMsIG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxufSgpKTtcclxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG5bXHJcbiAgICAnb2JzZXJ2ZScsXHJcbiAgICAndW5vYnNlcnZlJyxcclxuICAgICdkaXNjb25uZWN0J1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSBvYnNlcnZlcnMuZ2V0KHRoaXMpKVttZXRob2RdLmFwcGx5KF9hLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufSk7XG5cbnZhciBpbmRleCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBFeHBvcnQgZXhpc3RpbmcgaW1wbGVtZW50YXRpb24gaWYgYXZhaWxhYmxlLlxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiY29uc3QgVXBweSA9IHJlcXVpcmUoJ0B1cHB5L2NvcmUnKVxuY29uc3QgWEhSVXBsb2FkID0gcmVxdWlyZSgnQHVwcHkveGhyLXVwbG9hZCcpXG5jb25zdCBEYXNoYm9hcmQgPSByZXF1aXJlKCdAdXBweS9kYXNoYm9hcmQnKVxuY29uc3QgZ2VuZXJhdGVGaWxlSUQgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvZ2VuZXJhdGVGaWxlSUQnKVxuXG53aW5kb3cudXBweSA9ICBVcHB5KClcbi51c2UoRGFzaGJvYXJkLCB7XG4gIGlubGluZTogdHJ1ZSxcbiAgdGFyZ2V0OiAnI2RyYWctZHJvcC1hcmVhJ1xufSlcbi8vIC51c2UoVXBweS5UdXMsIHtlbmRwb2ludDogJ2h0dHBzOi8vbWFzdGVyLnR1cy5pby9maWxlcy8nfSlcbi51c2UoWEhSVXBsb2FkLCB7XG4gIGVuZHBvaW50OiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXBsb2FkL2RyaXZlL3YzL2ZpbGVzP3VwbG9hZFR5cGU9bWVkaWEnLFxuICBmb3JtRGF0YTogZmFsc2UsXG4gIGhlYWRlcnM6IHtcbiAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuXG4gICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdpbWFnZS9qcGVnJyAvKiBGSVhFRCEgd2l0aCBmaWxlLnhoclVwbG9hZC5oZWFkZXJzIHByb3BlcnR5Li4gOikge2V4aXN0LCBidXQgdW5kb2N1bWVudGVkfSBUTyBETzogRklYIFRISVMhIEl0IGhhcyB0byBiZSBkaWZmZXJlbnQgZm9yIGV2ZXJ5IGRpZmZlcmVudCBmaWxldHlwZSwgc28gaG93PyAqL1xuICB9XG59KVxuLm9uKCd1cGxvYWQtc3VjY2VzcycsIGZ1bmN0aW9uKGZpbGUsIHJlc3BvbnNlLCB1cGxvYWRVUkwpIHtcbiAgY29uc29sZS5sb2coJ0ZpbGUgdXBsb2FkZWQhIE5vdyB1cGRhdGluZyBtZXRhLWRhdGEuLi4nKVxuICAvLyB3ZSBoYXZlIGZpbGUubmFtZSwgcmVzcG9uc2UuaWRcblxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZHJpdmUvdjMvZmlsZXMvJyArIHJlc3BvbnNlLmlkICsgJz9hZGRQYXJlbnRzPScgKyBmb2xkZXJJZDtcblxuICBjb25zdCBmaWxlUmVzID0ge1xuICAgIG5hbWU6IGZpbGUubmFtZVxuICB9XG5cbiAgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzVG9rZW4sXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmaWxlUmVzKVxuICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICBjb25zb2xlLmxvZygnRmluaXNoZWQgdXBkYXRpbmcgbWV0YWRhdGEhJywganNvbilcbiAgfSlcblxufSkub24oJ2ZpbGUtYWRkZWQnLCBmdW5jdGlvbihmaWxlKSB7XG4gIGNvbnNvbGUubG9nKFwiYWRkZWQgZmlsZSBvZiB0eXBlOiBcIiwgZmlsZS50eXBlKVxuICBmaWxlLnhoclVwbG9hZC5oZWFkZXJzID0ge1xuICAgICdDb250ZW50LVR5cGUnOiBmaWxlLnR5cGVcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUoe1xuICAgIGZpbGVzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldFN0YXRlKCkuZmlsZXMsIHtcbiAgICAgIFtmaWxlSURdOiBuZXdGaWxlXG4gICAgfSlcbiAgfSlcbn0pXG5cbnVwcHkub24oJ2NvbXBsZXRlJywgKHJlc3VsdCkgPT4ge1xuY29uc29sZS5sb2coJ1VwbG9hZCBjb21wbGV0ZSEgV2XigJl2ZSB1cGxvYWRlZCB0aGVzZSBmaWxlczonLCByZXN1bHQuc3VjY2Vzc2Z1bClcbn0pXG5cbi8vIFNUQVJUIEZJTEUgTElTVElOR1xuXG5sZXQgdXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2RyaXZlL3YzL2ZpbGVzP3E9XFwnJyArIGZvbGRlcklkICsgJ1xcJyBpbiBwYXJlbnRzJztcbnVybCA9IGVuY29kZVVSSSh1cmwpO1xuZmV0Y2godXJsLCB7XG4gIG1ldGhvZDogJ0dFVCcsXG4gIGhlYWRlcnM6IHtcbiAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuXG4gIH1cbn0pXG4udGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4udGhlbiggZnVuY3Rpb24gKGpzb24pIHtcbiAgICBjb25zb2xlLmxvZyhqc29uKVxuXG4gICAgbGV0IGZpbGVQcm9taXNlcyA9IFtdXG4gICAganNvbi5maWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBmaWxlUHJvbWlzZXMucHVzaChcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2RyaXZlL3YzL2ZpbGVzLycgKyBmaWxlLmlkICsgXCI/ZmllbGRzPXRodW1ibmFpbExpbmssbWltZVR5cGUsaWQsbmFtZSxmaWxlRXh0ZW5zaW9uLHNpemUsbW9kaWZpZWRUaW1lXCIsIHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzVG9rZW5cbiAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiBQcm9taXNlLmFsbCggZmlsZVByb21pc2VzIClcbiAgfSlcbi50aGVuKCBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICBsaW5rcyA9IGZpbGVzLm1hcChhID0+IGEudGh1bWJuYWlsTGluaylcbiAgICBjb25zb2xlLmxvZyhcImxpbmtzXCIsIGxpbmtzKVxuXG4gICAgbGV0IGZpbGVzTGlzdCA9IHt9XG4gICAgZmlsZXMuZm9yRWFjaCggKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0ZpbGUgPSB7XG4gICAgICAgIHNvdXJjZTogJycsXG4gICAgICAgIGlkOiBnZW5lcmF0ZUZpbGVJRCh7Li4uZmlsZSwgZGF0YToge3NpemU6IGZpbGUuc2l6ZSwgbGFzdE1vZGlmaWVkOiBmaWxlLm1vZGlmaWVkVGltZX19KSxcbiAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBleHRlbnNpb246IGZpbGUuZmlsZUV4dGVuc2lvbiB8fCAnJyxcbiAgICAgICAgbWV0YTogT2JqZWN0LmFzc2lnbih7fSwgdXBweS5nZXRTdGF0ZSgpLm1ldGEsIHtuYW1lOiBmaWxlLm5hbWUsIHR5cGU6IGZpbGUubWltZVR5cGV9KSxcbiAgICAgICAgdHlwZTogZmlsZS5taW1lVHlwZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNpemU6IHBhcnNlSW50KGZpbGUuc2l6ZSksXG4gICAgICAgICAgbGFzdE1vZGlmaWVkOiBmaWxlLm1vZGlmaWVkVGltZVxuICAgICAgICB9LFxuICAgICAgICBwcm9ncmVzczoge1xuICAgICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcbiAgICAgICAgICBieXRlc1VwbG9hZGVkOiBmaWxlLnNpemUsXG4gICAgICAgICAgYnl0ZXNUb3RhbDogZmlsZS5zaXplIHx8IDAsXG4gICAgICAgICAgdXBsb2FkQ29tcGxldGU6IHRydWUsXG4gICAgICAgICAgdXBsb2FkU3RhcnRlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzaXplOiBmaWxlLnNpemUgfHwgMCxcbiAgICAgICAgLy8gaXNSZW1vdGU6IHRydWUsXG4gICAgICAgIC8vIHJlbW90ZTogZmlsZS5yZW1vdGUgfHwgJycsXG4gICAgICAgIHByZXZpZXc6IGZpbGUudGh1bWJuYWlsTGlua1xuICAgICAgfVxuICAgICAgZmlsZXNMaXN0W25ld0ZpbGUuaWRdID0gbmV3RmlsZVxuICAgIH0pXG5cbiAgICB1cHB5LnNldFN0YXRlKHtcbiAgICAgIGZpbGVzOiB7XG4gICAgICAgIC4uLnVwcHkuZ2V0U3RhdGUoKS5maWxlcyxcbiAgICAgICAgLi4uZmlsZXNMaXN0XG4gICAgICB9XG4gICAgfSlcbn0pXG4iLCJ2YXIgcGFkID0gcmVxdWlyZSgnLi9wYWQuanMnKTtcblxudmFyIGVudiA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gd2luZG93IDogc2VsZjtcbnZhciBnbG9iYWxDb3VudCA9IE9iamVjdC5rZXlzKGVudikubGVuZ3RoO1xudmFyIG1pbWVUeXBlc0xlbmd0aCA9IG5hdmlnYXRvci5taW1lVHlwZXMgPyBuYXZpZ2F0b3IubWltZVR5cGVzLmxlbmd0aCA6IDA7XG52YXIgY2xpZW50SWQgPSBwYWQoKG1pbWVUeXBlc0xlbmd0aCArXG4gIG5hdmlnYXRvci51c2VyQWdlbnQubGVuZ3RoKS50b1N0cmluZygzNikgK1xuICBnbG9iYWxDb3VudC50b1N0cmluZygzNiksIDQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbmdlcnByaW50ICgpIHtcbiAgcmV0dXJuIGNsaWVudElkO1xufTtcbiIsInZhciB3aWxkY2FyZCA9IHJlcXVpcmUoJ3dpbGRjYXJkJyk7XG52YXIgcmVNaW1lUGFydFNwbGl0ID0gL1tcXC9cXCtcXC5dLztcblxuLyoqXG4gICMgbWltZS1tYXRjaFxuXG4gIEEgc2ltcGxlIGZ1bmN0aW9uIHRvIGNoZWNrZXIgd2hldGhlciBhIHRhcmdldCBtaW1lIHR5cGUgbWF0Y2hlcyBhIG1pbWUtdHlwZVxuICBwYXR0ZXJuIChlLmcuIGltYWdlL2pwZWcgbWF0Y2hlcyBpbWFnZS9qcGVnIE9SIGltYWdlLyopLlxuXG4gICMjIEV4YW1wbGUgVXNhZ2VcblxuICA8PDwgZXhhbXBsZS5qc1xuXG4qKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBwYXR0ZXJuKSB7XG4gIGZ1bmN0aW9uIHRlc3QocGF0dGVybikge1xuICAgIHZhciByZXN1bHQgPSB3aWxkY2FyZChwYXR0ZXJuLCB0YXJnZXQsIHJlTWltZVBhcnRTcGxpdCk7XG5cbiAgICAvLyBlbnN1cmUgdGhhdCB3ZSBoYXZlIGEgdmFsaWQgbWltZSB0eXBlIChzaG91bGQgaGF2ZSB0d28gcGFydHMpXG4gICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID49IDI7XG4gIH1cblxuICByZXR1cm4gcGF0dGVybiA/IHRlc3QocGF0dGVybi5zcGxpdCgnOycpWzBdKSA6IHRlc3Q7XG59O1xuIiwiLyoganNoaW50IG5vZGU6IHRydWUgKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gICMgd2lsZGNhcmRcblxuICBWZXJ5IHNpbXBsZSB3aWxkY2FyZCBtYXRjaGluZywgd2hpY2ggaXMgZGVzaWduZWQgdG8gcHJvdmlkZSB0aGUgc2FtZVxuICBmdW5jdGlvbmFsaXR5IHRoYXQgaXMgZm91bmQgaW4gdGhlXG4gIFtldmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9hZG9iZS13ZWJwbGF0Zm9ybS9ldmUpIGV2ZW50aW5nIGxpYnJhcnkuXG5cbiAgIyMgVXNhZ2VcblxuICBJdCB3b3JrcyB3aXRoIHN0cmluZ3M6XG5cbiAgPDw8IGV4YW1wbGVzL3N0cmluZ3MuanNcblxuICBBcnJheXM6XG5cbiAgPDw8IGV4YW1wbGVzL2FycmF5cy5qc1xuXG4gIE9iamVjdHMgKG1hdGNoaW5nIGFnYWluc3Qga2V5cyk6XG5cbiAgPDw8IGV4YW1wbGVzL29iamVjdHMuanNcblxuICBXaGlsZSB0aGUgbGlicmFyeSB3b3JrcyBpbiBOb2RlLCBpZiB5b3UgYXJlIGFyZSBsb29raW5nIGZvciBmaWxlLWJhc2VkXG4gIHdpbGRjYXJkIG1hdGNoaW5nIHRoZW4geW91IHNob3VsZCBoYXZlIGEgbG9vayBhdDpcblxuICA8aHR0cHM6Ly9naXRodWIuY29tL2lzYWFjcy9ub2RlLWdsb2I+XG4qKi9cblxuZnVuY3Rpb24gV2lsZGNhcmRNYXRjaGVyKHRleHQsIHNlcGFyYXRvcikge1xuICB0aGlzLnRleHQgPSB0ZXh0ID0gdGV4dCB8fCAnJztcbiAgdGhpcy5oYXNXaWxkID0gfnRleHQuaW5kZXhPZignKicpO1xuICB0aGlzLnNlcGFyYXRvciA9IHNlcGFyYXRvcjtcbiAgdGhpcy5wYXJ0cyA9IHRleHQuc3BsaXQoc2VwYXJhdG9yKTtcbn1cblxuV2lsZGNhcmRNYXRjaGVyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gIHZhciBtYXRjaGVzID0gdHJ1ZTtcbiAgdmFyIHBhcnRzID0gdGhpcy5wYXJ0cztcbiAgdmFyIGlpO1xuICB2YXIgcGFydHNDb3VudCA9IHBhcnRzLmxlbmd0aDtcbiAgdmFyIHRlc3RQYXJ0cztcblxuICBpZiAodHlwZW9mIGlucHV0ID09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmhhc1dpbGQgJiYgdGhpcy50ZXh0ICE9IGlucHV0KSB7XG4gICAgICBtYXRjaGVzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlc3RQYXJ0cyA9IChpbnB1dCB8fCAnJykuc3BsaXQodGhpcy5zZXBhcmF0b3IpO1xuICAgICAgZm9yIChpaSA9IDA7IG1hdGNoZXMgJiYgaWkgPCBwYXJ0c0NvdW50OyBpaSsrKSB7XG4gICAgICAgIGlmIChwYXJ0c1tpaV0gPT09ICcqJykgIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIGlmIChpaSA8IHRlc3RQYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICBtYXRjaGVzID0gcGFydHNbaWldID09PSB0ZXN0UGFydHNbaWldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoZXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBtYXRjaGVzLCB0aGVuIHJldHVybiB0aGUgY29tcG9uZW50IHBhcnRzXG4gICAgICBtYXRjaGVzID0gbWF0Y2hlcyAmJiB0ZXN0UGFydHM7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBpbnB1dC5zcGxpY2UgPT0gJ2Z1bmN0aW9uJykge1xuICAgIG1hdGNoZXMgPSBbXTtcblxuICAgIGZvciAoaWkgPSBpbnB1dC5sZW5ndGg7IGlpLS07ICkge1xuICAgICAgaWYgKHRoaXMubWF0Y2goaW5wdXRbaWldKSkge1xuICAgICAgICBtYXRjaGVzW21hdGNoZXMubGVuZ3RoXSA9IGlucHV0W2lpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGlucHV0ID09ICdvYmplY3QnKSB7XG4gICAgbWF0Y2hlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIGlucHV0KSB7XG4gICAgICBpZiAodGhpcy5tYXRjaChrZXkpKSB7XG4gICAgICAgIG1hdGNoZXNba2V5XSA9IGlucHV0W2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRleHQsIHRlc3QsIHNlcGFyYXRvcikge1xuICB2YXIgbWF0Y2hlciA9IG5ldyBXaWxkY2FyZE1hdGNoZXIodGV4dCwgc2VwYXJhdG9yIHx8IC9bXFwvXFwuXS8pO1xuICBpZiAodHlwZW9mIHRlc3QgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbWF0Y2hlci5tYXRjaCh0ZXN0KTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVyO1xufTtcbiIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogRGVmYXVsdCBzdG9yZSB0aGF0IGtlZXBzIHN0YXRlIGluIGEgc2ltcGxlIG9iamVjdC5cbiAqL1xudmFyIERlZmF1bHRTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGVmYXVsdFN0b3JlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWZhdWx0U3RvcmUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gIH1cblxuICBEZWZhdWx0U3RvcmUucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH07XG5cbiAgRGVmYXVsdFN0b3JlLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKHBhdGNoKSB7XG4gICAgdmFyIHByZXZTdGF0ZSA9IF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlKTtcbiAgICB2YXIgbmV4dFN0YXRlID0gX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUsIHBhdGNoKTtcblxuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fcHVibGlzaChwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcGF0Y2gpO1xuICB9O1xuXG4gIERlZmF1bHRTdG9yZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuY2FsbGJhY2tzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIGxpc3RlbmVyLlxuICAgICAgX3RoaXMuY2FsbGJhY2tzLnNwbGljZShfdGhpcy5jYWxsYmFja3MuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xuICAgIH07XG4gIH07XG5cbiAgRGVmYXVsdFN0b3JlLnByb3RvdHlwZS5fcHVibGlzaCA9IGZ1bmN0aW9uIF9wdWJsaXNoKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBEZWZhdWx0U3RvcmU7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmYXVsdFN0b3JlKCkge1xuICByZXR1cm4gbmV3IERlZmF1bHRTdG9yZSgpO1xufTsiLCJ2YXIgZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24gPSByZXF1aXJlKCcuL2dldEZpbGVOYW1lQW5kRXh0ZW5zaW9uJyk7XG52YXIgbWltZVR5cGVzID0gcmVxdWlyZSgnLi9taW1lVHlwZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRGaWxlVHlwZShmaWxlKSB7XG4gIHZhciBmaWxlRXh0ZW5zaW9uID0gZmlsZS5uYW1lID8gZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24oZmlsZS5uYW1lKS5leHRlbnNpb24gOiBudWxsO1xuICBmaWxlRXh0ZW5zaW9uID0gZmlsZUV4dGVuc2lvbiA/IGZpbGVFeHRlbnNpb24udG9Mb3dlckNhc2UoKSA6IG51bGw7XG5cbiAgaWYgKGZpbGUuaXNSZW1vdGUpIHtcbiAgICAvLyBzb21lIHJlbW90ZSBwcm92aWRlcnMgZG8gbm90IHN1cHBvcnQgZmlsZSB0eXBlc1xuICAgIHJldHVybiBmaWxlLnR5cGUgPyBmaWxlLnR5cGUgOiBtaW1lVHlwZXNbZmlsZUV4dGVuc2lvbl07XG4gIH1cblxuICAvLyBjaGVjayBpZiBtaW1lIHR5cGUgaXMgc2V0IGluIHRoZSBmaWxlIG9iamVjdFxuICBpZiAoZmlsZS50eXBlKSB7XG4gICAgcmV0dXJuIGZpbGUudHlwZTtcbiAgfVxuXG4gIC8vIHNlZSBpZiB3ZSBjYW4gbWFwIGV4dGVuc2lvbiB0byBhIG1pbWUgdHlwZVxuICBpZiAoZmlsZUV4dGVuc2lvbiAmJiBtaW1lVHlwZXNbZmlsZUV4dGVuc2lvbl0pIHtcbiAgICByZXR1cm4gbWltZVR5cGVzW2ZpbGVFeHRlbnNpb25dO1xuICB9XG5cbiAgLy8gaWYgYWxsIGZhaWxzLCBmYWxsIGJhY2sgdG8gYSBnZW5lcmljIGJ5dGUgc3RyZWFtIHR5cGVcbiAgcmV0dXJuICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgJ21kJzogJ3RleHQvbWFya2Rvd24nLFxuICAnbWFya2Rvd24nOiAndGV4dC9tYXJrZG93bicsXG4gICdtcDQnOiAndmlkZW8vbXA0JyxcbiAgJ21wMyc6ICdhdWRpby9tcDMnLFxuICAnc3ZnJzogJ2ltYWdlL3N2Zyt4bWwnLFxuICAnanBnJzogJ2ltYWdlL2pwZWcnLFxuICAncG5nJzogJ2ltYWdlL3BuZycsXG4gICdnaWYnOiAnaW1hZ2UvZ2lmJyxcbiAgJ3lhbWwnOiAndGV4dC95YW1sJyxcbiAgJ3ltbCc6ICd0ZXh0L3lhbWwnLFxuICAnY3N2JzogJ3RleHQvY3N2JyxcbiAgJ2F2aSc6ICd2aWRlby94LW1zdmlkZW8nLFxuICAnbWtzJzogJ3ZpZGVvL3gtbWF0cm9za2EnLFxuICAnbWt2JzogJ3ZpZGVvL3gtbWF0cm9za2EnLFxuICAnbW92JzogJ3ZpZGVvL3F1aWNrdGltZScsXG4gICdkb2MnOiAnYXBwbGljYXRpb24vbXN3b3JkJyxcbiAgJ2RvY20nOiAnYXBwbGljYXRpb24vdm5kLm1zLXdvcmQuZG9jdW1lbnQubWFjcm9lbmFibGVkLjEyJyxcbiAgJ2RvY3gnOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxuICAnZG90JzogJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICdkb3RtJzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy13b3JkLnRlbXBsYXRlLm1hY3JvZW5hYmxlZC4xMicsXG4gICdkb3R4JzogJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLnRlbXBsYXRlJyxcbiAgJ3hsYSc6ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAneGxhbSc6ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwuYWRkaW4ubWFjcm9lbmFibGVkLjEyJyxcbiAgJ3hsYyc6ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAneGxmJzogJ2FwcGxpY2F0aW9uL3gteGxpZmYreG1sJyxcbiAgJ3hsbSc6ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAneGxzJzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICd4bHNiJzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbC5zaGVldC5iaW5hcnkubWFjcm9lbmFibGVkLjEyJyxcbiAgJ3hsc20nOiAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnNoZWV0Lm1hY3JvZW5hYmxlZC4xMicsXG4gICd4bHN4JzogJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyxcbiAgJ3hsdCc6ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAneGx0bSc6ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwudGVtcGxhdGUubWFjcm9lbmFibGVkLjEyJyxcbiAgJ3hsdHgnOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwudGVtcGxhdGUnLFxuICAneGx3JzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCdcbn07IiwiLyoqXG4gKiBUYWtlcyBhIGZpbGUgb2JqZWN0IGFuZCB0dXJucyBpdCBpbnRvIGZpbGVJRCwgYnkgY29udmVydGluZyBmaWxlLm5hbWUgdG8gbG93ZXJjYXNlLFxuICogcmVtb3ZpbmcgZXh0cmEgY2hhcmFjdGVycyBhbmQgYWRkaW5nIHR5cGUsIHNpemUgYW5kIGxhc3RNb2RpZmllZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBmaWxlXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBmaWxlSURcbiAqXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2VuZXJhdGVGaWxlSUQoZmlsZSkge1xuICAvLyBmaWx0ZXIgaXMgbmVlZGVkIHRvIG5vdCBqb2luIGVtcHR5IHZhbHVlcyB3aXRoIGAtYFxuICByZXR1cm4gWyd1cHB5JywgZmlsZS5uYW1lID8gZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldL2lnLCAnJykgOiAnJywgZmlsZS50eXBlLCBmaWxlLmRhdGEuc2l6ZSwgZmlsZS5kYXRhLmxhc3RNb2RpZmllZF0uZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9KS5qb2luKCctJyk7XG59OyIsIi8qKlxuICogUmV0dXJucyBhIHRpbWVzdGFtcCBpbiB0aGUgZm9ybWF0IG9mIGBob3VyczptaW51dGVzOnNlY29uZHNgXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRUaW1lU3RhbXAoKSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgdmFyIGhvdXJzID0gcGFkKGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYWQoZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKSk7XG4gIHZhciBzZWNvbmRzID0gcGFkKGRhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkpO1xuICByZXR1cm4gaG91cnMgKyAnOicgKyBtaW51dGVzICsgJzonICsgc2Vjb25kcztcbn07XG5cbi8qKlxuICogQWRkcyB6ZXJvIHRvIHN0cmluZ3Mgc2hvcnRlciB0aGFuIHR3byBjaGFyYWN0ZXJzXG4qL1xuZnVuY3Rpb24gcGFkKHN0cikge1xuICByZXR1cm4gc3RyLmxlbmd0aCAhPT0gMiA/IDAgKyBzdHIgOiBzdHI7XG59IiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgcHJlYWN0ID0gcmVxdWlyZSgncHJlYWN0Jyk7XG52YXIgZmluZERPTUVsZW1lbnQgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvZmluZERPTUVsZW1lbnQnKTtcblxuLyoqXG4gKiBEZWZlciBhIGZyZXF1ZW50IGNhbGwgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIGNhbGxpbmcgPSBudWxsO1xuICB2YXIgbGF0ZXN0QXJncyA9IG51bGw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGF0ZXN0QXJncyA9IGFyZ3M7XG4gICAgaWYgKCFjYWxsaW5nKSB7XG4gICAgICBjYWxsaW5nID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxpbmcgPSBudWxsO1xuICAgICAgICAvLyBBdCB0aGlzIHBvaW50IGBhcmdzYCBtYXkgYmUgZGlmZmVyZW50IGZyb20gdGhlIG1vc3RcbiAgICAgICAgLy8gcmVjZW50IHN0YXRlLCBpZiBtdWx0aXBsZSBjYWxscyBoYXBwZW5lZCBzaW5jZSB0aGlzIHRhc2tcbiAgICAgICAgLy8gd2FzIHF1ZXVlZC4gU28gd2UgdXNlIHRoZSBgbGF0ZXN0QXJnc2AsIHdoaWNoIGRlZmluaXRlbHlcbiAgICAgICAgLy8gaXMgdGhlIG1vc3QgcmVjZW50IGNhbGwuXG4gICAgICAgIHJldHVybiBmbi5hcHBseSh1bmRlZmluZWQsIGxhdGVzdEFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjYWxsaW5nO1xuICB9O1xufVxuXG4vKipcbiAqIEJvaWxlcnBsYXRlIHRoYXQgYWxsIFBsdWdpbnMgc2hhcmUgLSBhbmQgc2hvdWxkIG5vdCBiZSB1c2VkXG4gKiBkaXJlY3RseS4gSXQgYWxzbyBzaG93cyB3aGljaCBtZXRob2RzIGZpbmFsIHBsdWdpbnMgc2hvdWxkIGltcGxlbWVudC9vdmVycmlkZSxcbiAqIHRoaXMgZGVjaWRpbmcgb24gc3RydWN0dXJlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBtYWluIFVwcHkgY29yZSBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3Qgd2l0aCBwbHVnaW4gb3B0aW9uc1xuICogQHJldHVybiB7YXJyYXkgfCBzdHJpbmd9IGZpbGVzIG9yIHN1Y2Nlc3MvZmFpbCBtZXNzYWdlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQbHVnaW4odXBweSwgb3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQbHVnaW4pO1xuXG4gICAgdGhpcy51cHB5ID0gdXBweTtcbiAgICB0aGlzLm9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91bnQgPSB0aGlzLm1vdW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnN0YWxsID0gdGhpcy5pbnN0YWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy51bmluc3RhbGwgPSB0aGlzLnVuaW5zdGFsbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgUGx1Z2luLnByb3RvdHlwZS5nZXRQbHVnaW5TdGF0ZSA9IGZ1bmN0aW9uIGdldFBsdWdpblN0YXRlKCkge1xuICAgIHZhciBfdXBweSRnZXRTdGF0ZSA9IHRoaXMudXBweS5nZXRTdGF0ZSgpLFxuICAgICAgICBwbHVnaW5zID0gX3VwcHkkZ2V0U3RhdGUucGx1Z2lucztcblxuICAgIHJldHVybiBwbHVnaW5zW3RoaXMuaWRdIHx8IHt9O1xuICB9O1xuXG4gIFBsdWdpbi5wcm90b3R5cGUuc2V0UGx1Z2luU3RhdGUgPSBmdW5jdGlvbiBzZXRQbHVnaW5TdGF0ZSh1cGRhdGUpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgdmFyIF91cHB5JGdldFN0YXRlMiA9IHRoaXMudXBweS5nZXRTdGF0ZSgpLFxuICAgICAgICBwbHVnaW5zID0gX3VwcHkkZ2V0U3RhdGUyLnBsdWdpbnM7XG5cbiAgICB0aGlzLnVwcHkuc2V0U3RhdGUoe1xuICAgICAgcGx1Z2luczogX2V4dGVuZHMoe30sIHBsdWdpbnMsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3RoaXMuaWRdID0gX2V4dGVuZHMoe30sIHBsdWdpbnNbdGhpcy5pZF0sIHVwZGF0ZSksIF9leHRlbmRzMikpXG4gICAgfSk7XG4gIH07XG5cbiAgUGx1Z2luLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3VwZGF0ZVVJKSB7XG4gICAgICB0aGlzLl91cGRhdGVVSShzdGF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAqIENhbGxlZCB3aGVuIHBsdWdpbiBpcyBtb3VudGVkLCB3aGV0aGVyIGluIERPTSBvciBpbnRvIGFub3RoZXIgcGx1Z2luLlxuICAqIE5lZWRlZCBiZWNhdXNlIHNvbWV0aW1lcyBwbHVnaW5zIGFyZSBtb3VudGVkIHNlcGFyYXRlbHkvYWZ0ZXIgYGluc3RhbGxgLFxuICAqIHNvIHRoaXMuZWwgYW5kIHRoaXMucGFyZW50IG1pZ2h0IG5vdCBiZSBhdmFpbGFibGUgaW4gYGluc3RhbGxgLlxuICAqIFRoaXMgaXMgdGhlIGNhc2Ugd2l0aCBAdXBweS9yZWFjdCBwbHVnaW5zLCBmb3IgZXhhbXBsZS5cbiAgKi9cblxuXG4gIFBsdWdpbi5wcm90b3R5cGUub25Nb3VudCA9IGZ1bmN0aW9uIG9uTW91bnQoKSB7fTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgc3VwcGxpZWQgYHRhcmdldGAgaXMgYSBET00gZWxlbWVudCBvciBhbiBgb2JqZWN0YC5cbiAgICogSWYgaXTigJlzIGFuIG9iamVjdCDigJQgdGFyZ2V0IGlzIGEgcGx1Z2luLCBhbmQgd2Ugc2VhcmNoIGBwbHVnaW5zYFxuICAgKiBmb3IgYSBwbHVnaW4gd2l0aCBzYW1lIG5hbWUgYW5kIHJldHVybiBpdHMgdGFyZ2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHRhcmdldFxuICAgKlxuICAgKi9cblxuXG4gIFBsdWdpbi5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiBtb3VudCh0YXJnZXQsIHBsdWdpbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgY2FsbGVyUGx1Z2luTmFtZSA9IHBsdWdpbi5pZDtcblxuICAgIHZhciB0YXJnZXRFbGVtZW50ID0gZmluZERPTUVsZW1lbnQodGFyZ2V0KTtcblxuICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICB0aGlzLmlzVGFyZ2V0RE9NRWwgPSB0cnVlO1xuXG4gICAgICAvLyBBUEkgZm9yIHBsdWdpbnMgdGhhdCByZXF1aXJlIGEgc3luY2hyb25vdXMgcmVyZW5kZXIuXG4gICAgICB0aGlzLnJlcmVuZGVyID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIC8vIHBsdWdpbiBjb3VsZCBiZSByZW1vdmVkLCBidXQgdGhpcy5yZXJlbmRlciBpcyBkZWJvdW5jZWQgYmVsb3csXG4gICAgICAgIC8vIHNvIGl0IGNvdWxkIHN0aWxsIGJlIGNhbGxlZCBldmVuIGFmdGVyIHVwcHkucmVtb3ZlUGx1Z2luIG9yIHVwcHkuY2xvc2VcbiAgICAgICAgLy8gaGVuY2UgdGhlIGNoZWNrXG4gICAgICAgIGlmICghX3RoaXMudXBweS5nZXRQbHVnaW4oX3RoaXMuaWQpKSByZXR1cm47XG4gICAgICAgIF90aGlzLmVsID0gcHJlYWN0LnJlbmRlcihfdGhpcy5yZW5kZXIoc3RhdGUpLCB0YXJnZXRFbGVtZW50LCBfdGhpcy5lbCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fdXBkYXRlVUkgPSBkZWJvdW5jZSh0aGlzLnJlcmVuZGVyKTtcblxuICAgICAgdGhpcy51cHB5LmxvZygnSW5zdGFsbGluZyAnICsgY2FsbGVyUGx1Z2luTmFtZSArICcgdG8gYSBET00gZWxlbWVudCcpO1xuXG4gICAgICAvLyBjbGVhciBldmVyeXRoaW5nIGluc2lkZSB0aGUgdGFyZ2V0IGNvbnRhaW5lclxuICAgICAgaWYgKHRoaXMub3B0cy5yZXBsYWNlVGFyZ2V0Q29udGVudCkge1xuICAgICAgICB0YXJnZXRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsID0gcHJlYWN0LnJlbmRlcih0aGlzLnJlbmRlcih0aGlzLnVwcHkuZ2V0U3RhdGUoKSksIHRhcmdldEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLm9uTW91bnQoKTtcbiAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRQbHVnaW4gPSB2b2lkIDA7XG4gICAgaWYgKCh0eXBlb2YgdGFyZ2V0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0YXJnZXQpKSA9PT0gJ29iamVjdCcgJiYgdGFyZ2V0IGluc3RhbmNlb2YgUGx1Z2luKSB7XG4gICAgICAvLyBUYXJnZXRpbmcgYSBwbHVnaW4gKmluc3RhbmNlKlxuICAgICAgdGFyZ2V0UGx1Z2luID0gdGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gVGFyZ2V0aW5nIGEgcGx1Z2luIHR5cGVcbiAgICAgIHZhciBUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAvLyBGaW5kIHRoZSB0YXJnZXQgcGx1Z2luIGluc3RhbmNlLlxuICAgICAgdGhpcy51cHB5Lml0ZXJhdGVQbHVnaW5zKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgaWYgKHBsdWdpbiBpbnN0YW5jZW9mIFRhcmdldCkge1xuICAgICAgICAgIHRhcmdldFBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRQbHVnaW4pIHtcbiAgICAgIHRoaXMudXBweS5sb2coJ0luc3RhbGxpbmcgJyArIGNhbGxlclBsdWdpbk5hbWUgKyAnIHRvICcgKyB0YXJnZXRQbHVnaW4uaWQpO1xuICAgICAgdGhpcy5wYXJlbnQgPSB0YXJnZXRQbHVnaW47XG4gICAgICB0aGlzLmVsID0gdGFyZ2V0UGx1Z2luLmFkZFRhcmdldChwbHVnaW4pO1xuXG4gICAgICB0aGlzLm9uTW91bnQoKTtcbiAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxuICAgIHRoaXMudXBweS5sb2coJ05vdCBpbnN0YWxsaW5nICcgKyBjYWxsZXJQbHVnaW5OYW1lKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdGFyZ2V0IG9wdGlvbiBnaXZlbiB0byAnICsgY2FsbGVyUGx1Z2luTmFtZSArICcuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB0aGUgZWxlbWVudCBcXG4gICAgICBleGlzdHMgb24gdGhlIHBhZ2UsIG9yIHRoYXQgdGhlIHBsdWdpbiB5b3UgYXJlIHRhcmdldGluZyBoYXMgYmVlbiBpbnN0YWxsZWQuIENoZWNrIHRoYXQgdGhlIDxzY3JpcHQ+IHRhZyBpbml0aWFsaXppbmcgVXBweSBcXG4gICAgICBjb21lcyBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlLCBiZWZvcmUgdGhlIGNsb3NpbmcgPC9ib2R5PiB0YWcgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHJhbnNsb2FkaXQvdXBweS9pc3N1ZXMvMTA0MikuJyk7XG4gIH07XG5cbiAgUGx1Z2luLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4dGVuZCB0aGUgcmVuZGVyIG1ldGhvZCB0byBhZGQgeW91ciBwbHVnaW4gdG8gYSBET00gZWxlbWVudCcpO1xuICB9O1xuXG4gIFBsdWdpbi5wcm90b3R5cGUuYWRkVGFyZ2V0ID0gZnVuY3Rpb24gYWRkVGFyZ2V0KHBsdWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcignRXh0ZW5kIHRoZSBhZGRUYXJnZXQgbWV0aG9kIHRvIGFkZCB5b3VyIHBsdWdpbiB0byBhbm90aGVyIHBsdWdpblxcJ3MgdGFyZ2V0Jyk7XG4gIH07XG5cbiAgUGx1Z2luLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5pc1RhcmdldERPTUVsICYmIHRoaXMuZWwgJiYgdGhpcy5lbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICB9O1xuXG4gIFBsdWdpbi5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIGluc3RhbGwoKSB7fTtcblxuICBQbHVnaW4ucHJvdG90eXBlLnVuaW5zdGFsbCA9IGZ1bmN0aW9uIHVuaW5zdGFsbCgpIHtcbiAgICB0aGlzLnVubW91bnQoKTtcbiAgfTtcblxuICByZXR1cm4gUGx1Z2luO1xufSgpOyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGlzRE9NRWxlbWVudCA9IHJlcXVpcmUoJy4vaXNET01FbGVtZW50Jyk7XG5cbi8qKlxuICogRmluZCBhIERPTSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Tm9kZXxzdHJpbmd9IGVsZW1lbnRcbiAqIEByZXR1cm4ge05vZGV8bnVsbH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaW5kRE9NRWxlbWVudChlbGVtZW50KSB7XG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgfVxuXG4gIGlmICgodHlwZW9mIGVsZW1lbnQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gJ29iamVjdCcgJiYgaXNET01FbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn07IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdAdXBweS9jb3JlJyksXG4gICAgUGx1Z2luID0gX3JlcXVpcmUuUGx1Z2luO1xuXG52YXIgY3VpZCA9IHJlcXVpcmUoJ2N1aWQnKTtcbnZhciBUcmFuc2xhdG9yID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL1RyYW5zbGF0b3InKTtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ0B1cHB5L2NvbXBhbmlvbi1jbGllbnQnKSxcbiAgICBQcm92aWRlciA9IF9yZXF1aXJlMi5Qcm92aWRlcixcbiAgICBTb2NrZXQgPSBfcmVxdWlyZTIuU29ja2V0O1xuXG52YXIgZW1pdFNvY2tldFByb2dyZXNzID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL2VtaXRTb2NrZXRQcm9ncmVzcycpO1xudmFyIGdldFNvY2tldEhvc3QgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvZ2V0U29ja2V0SG9zdCcpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9zZXR0bGUnKTtcbnZhciBsaW1pdFByb21pc2VzID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL2xpbWl0UHJvbWlzZXMnKTtcblxuZnVuY3Rpb24gYnVpbGRSZXNwb25zZUVycm9yKHhociwgZXJyb3IpIHtcbiAgLy8gTm8gZXJyb3IgbWVzc2FnZVxuICBpZiAoIWVycm9yKSBlcnJvciA9IG5ldyBFcnJvcignVXBsb2FkIGVycm9yJyk7XG4gIC8vIEdvdCBhbiBlcnJvciBtZXNzYWdlIHN0cmluZ1xuICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykgZXJyb3IgPSBuZXcgRXJyb3IoZXJyb3IpO1xuICAvLyBHb3Qgc29tZXRoaW5nIGVsc2VcbiAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICBlcnJvciA9IF9leHRlbmRzKG5ldyBFcnJvcignVXBsb2FkIGVycm9yJyksIHsgZGF0YTogZXJyb3IgfSk7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0geGhyO1xuICByZXR1cm4gZXJyb3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF9QbHVnaW4pIHtcbiAgX2luaGVyaXRzKFhIUlVwbG9hZCwgX1BsdWdpbik7XG5cbiAgZnVuY3Rpb24gWEhSVXBsb2FkKHVwcHksIG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgWEhSVXBsb2FkKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9QbHVnaW4uY2FsbCh0aGlzLCB1cHB5LCBvcHRzKSk7XG5cbiAgICBfdGhpcy50eXBlID0gJ3VwbG9hZGVyJztcbiAgICBfdGhpcy5pZCA9ICdYSFJVcGxvYWQnO1xuICAgIF90aGlzLnRpdGxlID0gJ1hIUlVwbG9hZCc7XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZSA9IHtcbiAgICAgIHN0cmluZ3M6IHtcbiAgICAgICAgdGltZWRPdXQ6ICdVcGxvYWQgc3RhbGxlZCBmb3IgJXtzZWNvbmRzfSBzZWNvbmRzLCBhYm9ydGluZy4nXG4gICAgICB9XG5cbiAgICAgIC8vIERlZmF1bHQgb3B0aW9uc1xuICAgIH07dmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgZm9ybURhdGE6IHRydWUsXG4gICAgICBmaWVsZE5hbWU6ICdmaWxlc1tdJyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgbWV0YUZpZWxkczogbnVsbCxcbiAgICAgIHJlc3BvbnNlVXJsRmllbGROYW1lOiAndXJsJyxcbiAgICAgIGJ1bmRsZTogZmFsc2UsXG4gICAgICBoZWFkZXJzOiB7fSxcbiAgICAgIGxvY2FsZTogZGVmYXVsdExvY2FsZSxcbiAgICAgIHRpbWVvdXQ6IDMwICogMTAwMCxcbiAgICAgIGxpbWl0OiAwLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJycsXG4gICAgICAvKipcbiAgICAgICAqIEB0eXBlZGVmIHJlc3BPYmpcbiAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZXNwb25zZVRleHRcbiAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGF0dXNcbiAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdGF0dXNUZXh0XG4gICAgICAgKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBoZWFkZXJzXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJlc3BvbnNlVGV4dCB0aGUgcmVzcG9uc2UgYm9keSBzdHJpbmdcbiAgICAgICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3QgfCByZXNwT2JqfSByZXNwb25zZSB0aGUgcmVzcG9uc2Ugb2JqZWN0IChYSFIgb3Igc2ltaWxhcilcbiAgICAgICAqL1xuICAgICAgZ2V0UmVzcG9uc2VEYXRhOiBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGEocmVzcG9uc2VUZXh0LCByZXNwb25zZSkge1xuICAgICAgICB2YXIgcGFyc2VkUmVzcG9uc2UgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBwYXJzZWRSZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWRSZXNwb25zZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXNwb25zZVRleHQgdGhlIHJlc3BvbnNlIGJvZHkgc3RyaW5nXG4gICAgICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0IHwgcmVzcE9ian0gcmVzcG9uc2UgdGhlIHJlc3BvbnNlIG9iamVjdCAoWEhSIG9yIHNpbWlsYXIpXG4gICAgICAgKi9cbiAgICAgIGdldFJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIGdldFJlc3BvbnNlRXJyb3IocmVzcG9uc2VUZXh0LCByZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdVcGxvYWQgZXJyb3InKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gTWVyZ2UgZGVmYXVsdCBvcHRpb25zIHdpdGggdGhlIG9uZXMgc2V0IGJ5IHVzZXJcbiAgICBfdGhpcy5vcHRzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRzKTtcblxuICAgIC8vIGkxOG5cbiAgICBfdGhpcy50cmFuc2xhdG9yID0gbmV3IFRyYW5zbGF0b3IoW2RlZmF1bHRMb2NhbGUsIF90aGlzLnVwcHkubG9jYWxlLCBfdGhpcy5vcHRzLmxvY2FsZV0pO1xuICAgIF90aGlzLmkxOG4gPSBfdGhpcy50cmFuc2xhdG9yLnRyYW5zbGF0ZS5iaW5kKF90aGlzLnRyYW5zbGF0b3IpO1xuICAgIF90aGlzLmkxOG5BcnJheSA9IF90aGlzLnRyYW5zbGF0b3IudHJhbnNsYXRlQXJyYXkuYmluZChfdGhpcy50cmFuc2xhdG9yKTtcblxuICAgIF90aGlzLmhhbmRsZVVwbG9hZCA9IF90aGlzLmhhbmRsZVVwbG9hZC5iaW5kKF90aGlzKTtcblxuICAgIC8vIFNpbXVsdGFuZW91cyB1cGxvYWQgbGltaXRpbmcgaXMgc2hhcmVkIGFjcm9zcyBhbGwgdXBsb2FkcyB3aXRoIHRoaXMgcGx1Z2luLlxuICAgIGlmICh0eXBlb2YgX3RoaXMub3B0cy5saW1pdCA9PT0gJ251bWJlcicgJiYgX3RoaXMub3B0cy5saW1pdCAhPT0gMCkge1xuICAgICAgX3RoaXMubGltaXRVcGxvYWRzID0gbGltaXRQcm9taXNlcyhfdGhpcy5vcHRzLmxpbWl0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMubGltaXRVcGxvYWRzID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKF90aGlzLm9wdHMuYnVuZGxlICYmICFfdGhpcy5vcHRzLmZvcm1EYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BvcHRzLmZvcm1EYXRhYCBtdXN0IGJlIHRydWUgd2hlbiBgb3B0cy5idW5kbGVgIGlzIGVuYWJsZWQuJyk7XG4gICAgfVxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFhIUlVwbG9hZC5wcm90b3R5cGUuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldE9wdGlvbnMoZmlsZSkge1xuICAgIHZhciBvdmVycmlkZXMgPSB0aGlzLnVwcHkuZ2V0U3RhdGUoKS54aHJVcGxvYWQ7XG4gICAgdmFyIG9wdHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5vcHRzLCBvdmVycmlkZXMgfHwge30sIGZpbGUueGhyVXBsb2FkIHx8IHt9KTtcbiAgICBvcHRzLmhlYWRlcnMgPSB7fTtcbiAgICBfZXh0ZW5kcyhvcHRzLmhlYWRlcnMsIHRoaXMub3B0cy5oZWFkZXJzKTtcbiAgICBpZiAob3ZlcnJpZGVzKSB7XG4gICAgICBfZXh0ZW5kcyhvcHRzLmhlYWRlcnMsIG92ZXJyaWRlcy5oZWFkZXJzKTtcbiAgICB9XG4gICAgaWYgKGZpbGUueGhyVXBsb2FkKSB7XG4gICAgICBfZXh0ZW5kcyhvcHRzLmhlYWRlcnMsIGZpbGUueGhyVXBsb2FkLmhlYWRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRzO1xuICB9O1xuXG4gIC8vIEhlbHBlciB0byBhYm9ydCB1cGxvYWQgcmVxdWVzdHMgaWYgdGhlcmUgaGFzIG5vdCBiZWVuIGFueSBwcm9ncmVzcyBmb3IgYHRpbWVvdXRgIG1zLlxuICAvLyBDcmVhdGUgYW4gaW5zdGFuY2UgdXNpbmcgYHRpbWVyID0gY3JlYXRlUHJvZ3Jlc3NUaW1lb3V0KDEwMDAwLCBvblRpbWVvdXQpYFxuICAvLyBDYWxsIGB0aW1lci5wcm9ncmVzcygpYCB0byBzaWduYWwgdGhhdCB0aGVyZSBoYXMgYmVlbiBwcm9ncmVzcyBvZiBhbnkga2luZC5cbiAgLy8gQ2FsbCBgdGltZXIuZG9uZSgpYCB3aGVuIHRoZSB1cGxvYWQgaGFzIGNvbXBsZXRlZC5cblxuXG4gIFhIUlVwbG9hZC5wcm90b3R5cGUuY3JlYXRlUHJvZ3Jlc3NUaW1lb3V0ID0gZnVuY3Rpb24gY3JlYXRlUHJvZ3Jlc3NUaW1lb3V0KHRpbWVvdXQsIHRpbWVvdXRIYW5kbGVyKSB7XG4gICAgdmFyIHVwcHkgPSB0aGlzLnVwcHk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBpc0RvbmUgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIG9uVGltZWRPdXQoKSB7XG4gICAgICB1cHB5LmxvZygnW1hIUlVwbG9hZF0gdGltZWQgb3V0Jyk7XG4gICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3Ioc2VsZi5pMThuKCd0aW1lZE91dCcsIHsgc2Vjb25kczogTWF0aC5jZWlsKHRpbWVvdXQgLyAxMDAwKSB9KSk7XG4gICAgICB0aW1lb3V0SGFuZGxlcihlcnJvcik7XG4gICAgfVxuXG4gICAgdmFyIGFsaXZlVGltZXIgPSBudWxsO1xuICAgIGZ1bmN0aW9uIHByb2dyZXNzKCkge1xuICAgICAgLy8gU29tZSBicm93c2VycyBmaXJlIGFub3RoZXIgcHJvZ3Jlc3MgZXZlbnQgd2hlbiB0aGUgdXBsb2FkIGlzXG4gICAgICAvLyBjYW5jZWxsZWQsIHNvIHdlIGhhdmUgdG8gaWdub3JlIHByb2dyZXNzIGFmdGVyIHRoZSB0aW1lciB3YXNcbiAgICAgIC8vIHRvbGQgdG8gc3RvcC5cbiAgICAgIGlmIChpc0RvbmUpIHJldHVybjtcblxuICAgICAgaWYgKHRpbWVvdXQgPiAwKSB7XG4gICAgICAgIGlmIChhbGl2ZVRpbWVyKSBjbGVhclRpbWVvdXQoYWxpdmVUaW1lcik7XG4gICAgICAgIGFsaXZlVGltZXIgPSBzZXRUaW1lb3V0KG9uVGltZWRPdXQsIHRpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICB1cHB5LmxvZygnW1hIUlVwbG9hZF0gdGltZXIgZG9uZScpO1xuICAgICAgaWYgKGFsaXZlVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFsaXZlVGltZXIpO1xuICAgICAgICBhbGl2ZVRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlzRG9uZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2dyZXNzOiBwcm9ncmVzcyxcbiAgICAgIGRvbmU6IGRvbmVcbiAgICB9O1xuICB9O1xuXG4gIFhIUlVwbG9hZC5wcm90b3R5cGUuY3JlYXRlRm9ybURhdGFVcGxvYWQgPSBmdW5jdGlvbiBjcmVhdGVGb3JtRGF0YVVwbG9hZChmaWxlLCBvcHRzKSB7XG4gICAgdmFyIGZvcm1Qb3N0ID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICB2YXIgbWV0YUZpZWxkcyA9IEFycmF5LmlzQXJyYXkob3B0cy5tZXRhRmllbGRzKSA/IG9wdHMubWV0YUZpZWxkc1xuICAgIC8vIFNlbmQgYWxvbmcgYWxsIGZpZWxkcyBieSBkZWZhdWx0LlxuICAgIDogT2JqZWN0LmtleXMoZmlsZS5tZXRhKTtcbiAgICBtZXRhRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGZvcm1Qb3N0LmFwcGVuZChpdGVtLCBmaWxlLm1ldGFbaXRlbV0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGZpbGUubmFtZSkge1xuICAgICAgZm9ybVBvc3QuYXBwZW5kKG9wdHMuZmllbGROYW1lLCBmaWxlLmRhdGEsIGZpbGUubmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1Qb3N0LmFwcGVuZChvcHRzLmZpZWxkTmFtZSwgZmlsZS5kYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybVBvc3Q7XG4gIH07XG5cbiAgWEhSVXBsb2FkLnByb3RvdHlwZS5jcmVhdGVCYXJlVXBsb2FkID0gZnVuY3Rpb24gY3JlYXRlQmFyZVVwbG9hZChmaWxlLCBvcHRzKSB7XG4gICAgcmV0dXJuIGZpbGUuZGF0YTtcbiAgfTtcblxuICBYSFJVcGxvYWQucHJvdG90eXBlLnVwbG9hZCA9IGZ1bmN0aW9uIHVwbG9hZChmaWxlLCBjdXJyZW50LCB0b3RhbCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIG9wdHMgPSB0aGlzLmdldE9wdGlvbnMoZmlsZSk7XG5cbiAgICB0aGlzLnVwcHkubG9nKCd1cGxvYWRpbmcgJyArIGN1cnJlbnQgKyAnIG9mICcgKyB0b3RhbCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBkYXRhID0gb3B0cy5mb3JtRGF0YSA/IF90aGlzMi5jcmVhdGVGb3JtRGF0YVVwbG9hZChmaWxlLCBvcHRzKSA6IF90aGlzMi5jcmVhdGVCYXJlVXBsb2FkKGZpbGUsIG9wdHMpO1xuXG4gICAgICB2YXIgdGltZXIgPSBfdGhpczIuY3JlYXRlUHJvZ3Jlc3NUaW1lb3V0KG9wdHMudGltZW91dCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICBfdGhpczIudXBweS5lbWl0KCd1cGxvYWQtZXJyb3InLCBmaWxlLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgaWYgKG9wdHMucmVzcG9uc2VUeXBlICE9PSAnJykge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0cy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBpZCA9IGN1aWQoKTtcblxuICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdsb2Fkc3RhcnQnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgX3RoaXMyLnVwcHkubG9nKCdbWEhSVXBsb2FkXSAnICsgaWQgKyAnIHN0YXJ0ZWQnKTtcbiAgICAgICAgLy8gQmVnaW4gY2hlY2tpbmcgZm9yIHRpbWVvdXRzIHdoZW4gbG9hZGluZyBzdGFydHMuXG4gICAgICAgIHRpbWVyLnByb2dyZXNzKCk7XG4gICAgICB9KTtcblxuICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBfdGhpczIudXBweS5sb2coJ1tYSFJVcGxvYWRdICcgKyBpZCArICcgcHJvZ3Jlc3M6ICcgKyBldi5sb2FkZWQgKyAnIC8gJyArIGV2LnRvdGFsKTtcbiAgICAgICAgdGltZXIucHJvZ3Jlc3MoKTtcblxuICAgICAgICBpZiAoZXYubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIF90aGlzMi51cHB5LmVtaXQoJ3VwbG9hZC1wcm9ncmVzcycsIGZpbGUsIHtcbiAgICAgICAgICAgIHVwbG9hZGVyOiBfdGhpczIsXG4gICAgICAgICAgICBieXRlc1VwbG9hZGVkOiBldi5sb2FkZWQsXG4gICAgICAgICAgICBieXRlc1RvdGFsOiBldi50b3RhbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgX3RoaXMyLnVwcHkubG9nKCdbWEhSVXBsb2FkXSAnICsgaWQgKyAnIGZpbmlzaGVkJyk7XG4gICAgICAgIHRpbWVyLmRvbmUoKTtcblxuICAgICAgICBpZiAoZXYudGFyZ2V0LnN0YXR1cyA+PSAyMDAgJiYgZXYudGFyZ2V0LnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgIHZhciBib2R5ID0gb3B0cy5nZXRSZXNwb25zZURhdGEoeGhyLnJlc3BvbnNlVGV4dCwgeGhyKTtcbiAgICAgICAgICB2YXIgdXBsb2FkVVJMID0gYm9keVtvcHRzLnJlc3BvbnNlVXJsRmllbGROYW1lXTtcblxuICAgICAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgICAgIHN0YXR1czogZXYudGFyZ2V0LnN0YXR1cyxcbiAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICB1cGxvYWRVUkw6IHVwbG9hZFVSTFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBfdGhpczIudXBweS5zZXRGaWxlU3RhdGUoZmlsZS5pZCwgeyByZXNwb25zZTogcmVzcG9uc2UgfSk7XG5cbiAgICAgICAgICBfdGhpczIudXBweS5lbWl0KCd1cGxvYWQtc3VjY2VzcycsIGZpbGUsIGJvZHksIHVwbG9hZFVSTCk7XG5cbiAgICAgICAgICBpZiAodXBsb2FkVVJMKSB7XG4gICAgICAgICAgICBfdGhpczIudXBweS5sb2coJ0Rvd25sb2FkICcgKyBmaWxlLm5hbWUgKyAnIGZyb20gJyArIGZpbGUudXBsb2FkVVJMKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX2JvZHkgPSBvcHRzLmdldFJlc3BvbnNlRGF0YSh4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICAgIHZhciBlcnJvciA9IGJ1aWxkUmVzcG9uc2VFcnJvcih4aHIsIG9wdHMuZ2V0UmVzcG9uc2VFcnJvcih4aHIucmVzcG9uc2VUZXh0LCB4aHIpKTtcblxuICAgICAgICAgIHZhciBfcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBzdGF0dXM6IGV2LnRhcmdldC5zdGF0dXMsXG4gICAgICAgICAgICBib2R5OiBfYm9keVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBfdGhpczIudXBweS5zZXRGaWxlU3RhdGUoZmlsZS5pZCwgeyByZXNwb25zZTogX3Jlc3BvbnNlIH0pO1xuXG4gICAgICAgICAgX3RoaXMyLnVwcHkuZW1pdCgndXBsb2FkLWVycm9yJywgZmlsZSwgZXJyb3IpO1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIF90aGlzMi51cHB5LmxvZygnW1hIUlVwbG9hZF0gJyArIGlkICsgJyBlcnJvcmVkJyk7XG4gICAgICAgIHRpbWVyLmRvbmUoKTtcblxuICAgICAgICB2YXIgZXJyb3IgPSBidWlsZFJlc3BvbnNlRXJyb3IoeGhyLCBvcHRzLmdldFJlc3BvbnNlRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCwgeGhyKSk7XG4gICAgICAgIF90aGlzMi51cHB5LmVtaXQoJ3VwbG9hZC1lcnJvcicsIGZpbGUsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgeGhyLm9wZW4ob3B0cy5tZXRob2QudG9VcHBlckNhc2UoKSwgb3B0cy5lbmRwb2ludCwgdHJ1ZSk7XG4gICAgICAvLyBJRTEwIGRvZXMgbm90IGFsbG93IHNldHRpbmcgYHdpdGhDcmVkZW50aWFsc2AgYmVmb3JlIGBvcGVuKClgIGlzIGNhbGxlZC5cbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRzLndpdGhDcmVkZW50aWFscztcblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyLCBvcHRzLmhlYWRlcnNbaGVhZGVyXSk7XG4gICAgICB9KTtcblxuICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICAgIF90aGlzMi51cHB5Lm9uKCdmaWxlLXJlbW92ZWQnLCBmdW5jdGlvbiAocmVtb3ZlZEZpbGUpIHtcbiAgICAgICAgaWYgKHJlbW92ZWRGaWxlLmlkID09PSBmaWxlLmlkKSB7XG4gICAgICAgICAgdGltZXIuZG9uZSgpO1xuICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMyLnVwcHkub24oJ2NhbmNlbC1hbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWVyLmRvbmUoKTtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBYSFJVcGxvYWQucHJvdG90eXBlLnVwbG9hZFJlbW90ZSA9IGZ1bmN0aW9uIHVwbG9hZFJlbW90ZShmaWxlLCBjdXJyZW50LCB0b3RhbCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIG9wdHMgPSB0aGlzLmdldE9wdGlvbnMoZmlsZSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBmaWVsZHMgPSB7fTtcbiAgICAgIHZhciBtZXRhRmllbGRzID0gQXJyYXkuaXNBcnJheShvcHRzLm1ldGFGaWVsZHMpID8gb3B0cy5tZXRhRmllbGRzXG4gICAgICAvLyBTZW5kIGFsb25nIGFsbCBmaWVsZHMgYnkgZGVmYXVsdC5cbiAgICAgIDogT2JqZWN0LmtleXMoZmlsZS5tZXRhKTtcblxuICAgICAgbWV0YUZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGZpZWxkc1tuYW1lXSA9IGZpbGUubWV0YVtuYW1lXTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgUHJvdmlkZXIoX3RoaXMzLnVwcHksIGZpbGUucmVtb3RlLnByb3ZpZGVyT3B0aW9ucyk7XG4gICAgICBwcm92aWRlci5wb3N0KGZpbGUucmVtb3RlLnVybCwgX2V4dGVuZHMoe30sIGZpbGUucmVtb3RlLmJvZHksIHtcbiAgICAgICAgZW5kcG9pbnQ6IG9wdHMuZW5kcG9pbnQsXG4gICAgICAgIHNpemU6IGZpbGUuZGF0YS5zaXplLFxuICAgICAgICBmaWVsZG5hbWU6IG9wdHMuZmllbGROYW1lLFxuICAgICAgICBtZXRhZGF0YTogZmllbGRzLFxuICAgICAgICBoZWFkZXJzOiBvcHRzLmhlYWRlcnNcbiAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIHRva2VuID0gcmVzLnRva2VuO1xuICAgICAgICB2YXIgaG9zdCA9IGdldFNvY2tldEhvc3QoZmlsZS5yZW1vdGUuc2VydmVyVXJsKTtcbiAgICAgICAgdmFyIHNvY2tldCA9IG5ldyBTb2NrZXQoeyB0YXJnZXQ6IGhvc3QgKyAnL2FwaS8nICsgdG9rZW4gfSk7XG5cbiAgICAgICAgc29ja2V0Lm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uIChwcm9ncmVzc0RhdGEpIHtcbiAgICAgICAgICByZXR1cm4gZW1pdFNvY2tldFByb2dyZXNzKF90aGlzMywgcHJvZ3Jlc3NEYXRhLCBmaWxlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc29ja2V0Lm9uKCdzdWNjZXNzJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICB2YXIgcmVzcCA9IG9wdHMuZ2V0UmVzcG9uc2VEYXRhKGRhdGEucmVzcG9uc2UucmVzcG9uc2VUZXh0LCBkYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgICB2YXIgdXBsb2FkVVJMID0gcmVzcFtvcHRzLnJlc3BvbnNlVXJsRmllbGROYW1lXTtcbiAgICAgICAgICBfdGhpczMudXBweS5lbWl0KCd1cGxvYWQtc3VjY2VzcycsIGZpbGUsIHJlc3AsIHVwbG9hZFVSTCk7XG4gICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc29ja2V0Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJEYXRhKSB7XG4gICAgICAgICAgdmFyIHJlc3AgPSBlcnJEYXRhLnJlc3BvbnNlO1xuICAgICAgICAgIHZhciBlcnJvciA9IHJlc3AgPyBvcHRzLmdldFJlc3BvbnNlRXJyb3IocmVzcC5yZXNwb25zZVRleHQsIHJlc3ApIDogX2V4dGVuZHMobmV3IEVycm9yKGVyckRhdGEuZXJyb3IubWVzc2FnZSksIHsgY2F1c2U6IGVyckRhdGEuZXJyb3IgfSk7XG4gICAgICAgICAgX3RoaXMzLnVwcHkuZW1pdCgndXBsb2FkLWVycm9yJywgZmlsZSwgZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgWEhSVXBsb2FkLnByb3RvdHlwZS51cGxvYWRCdW5kbGUgPSBmdW5jdGlvbiB1cGxvYWRCdW5kbGUoZmlsZXMpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZW5kcG9pbnQgPSBfdGhpczQub3B0cy5lbmRwb2ludDtcbiAgICAgIHZhciBtZXRob2QgPSBfdGhpczQub3B0cy5tZXRob2Q7XG5cbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSwgaSkge1xuICAgICAgICB2YXIgb3B0cyA9IF90aGlzNC5nZXRPcHRpb25zKGZpbGUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQob3B0cy5maWVsZE5hbWUsIGZpbGUuZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgaWYgKF90aGlzNC5vcHRzLnJlc3BvbnNlVHlwZSAhPT0gJycpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IF90aGlzNC5vcHRzLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWVyID0gX3RoaXM0LmNyZWF0ZVByb2dyZXNzVGltZW91dChfdGhpczQub3B0cy50aW1lb3V0LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICAgIGVtaXRFcnJvcihlcnJvcik7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgdmFyIGVtaXRFcnJvciA9IGZ1bmN0aW9uIGVtaXRFcnJvcihlcnJvcikge1xuICAgICAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgX3RoaXM0LnVwcHkuZW1pdCgndXBsb2FkLWVycm9yJywgZmlsZSwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIF90aGlzNC51cHB5LmxvZygnW1hIUlVwbG9hZF0gc3RhcnRlZCB1cGxvYWRpbmcgYnVuZGxlJyk7XG4gICAgICAgIHRpbWVyLnByb2dyZXNzKCk7XG4gICAgICB9KTtcblxuICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGZ1bmN0aW9uIChldikge1xuICAgICAgICB0aW1lci5wcm9ncmVzcygpO1xuXG4gICAgICAgIGlmICghZXYubGVuZ3RoQ29tcHV0YWJsZSkgcmV0dXJuO1xuXG4gICAgICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICBfdGhpczQudXBweS5lbWl0KCd1cGxvYWQtcHJvZ3Jlc3MnLCBmaWxlLCB7XG4gICAgICAgICAgICB1cGxvYWRlcjogX3RoaXM0LFxuICAgICAgICAgICAgYnl0ZXNVcGxvYWRlZDogZXYubG9hZGVkIC8gZXYudG90YWwgKiBmaWxlLnNpemUsXG4gICAgICAgICAgICBieXRlc1RvdGFsOiBmaWxlLnNpemVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdGltZXIuZG9uZSgpO1xuXG4gICAgICAgIGlmIChldi50YXJnZXQuc3RhdHVzID49IDIwMCAmJiBldi50YXJnZXQuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgdmFyIHJlc3AgPSBfdGhpczQub3B0cy5nZXRSZXNwb25zZURhdGEoeGhyLnJlc3BvbnNlVGV4dCwgeGhyKTtcbiAgICAgICAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICBfdGhpczQudXBweS5lbWl0KCd1cGxvYWQtc3VjY2VzcycsIGZpbGUsIHJlc3ApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXJyb3IgPSBfdGhpczQub3B0cy5nZXRSZXNwb25zZUVycm9yKHhoci5yZXNwb25zZVRleHQsIHhocikgfHwgbmV3IEVycm9yKCdVcGxvYWQgZXJyb3InKTtcbiAgICAgICAgZXJyb3IucmVxdWVzdCA9IHhocjtcbiAgICAgICAgZW1pdEVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHRpbWVyLmRvbmUoKTtcblxuICAgICAgICB2YXIgZXJyb3IgPSBfdGhpczQub3B0cy5nZXRSZXNwb25zZUVycm9yKHhoci5yZXNwb25zZVRleHQsIHhocikgfHwgbmV3IEVycm9yKCdVcGxvYWQgZXJyb3InKTtcbiAgICAgICAgZW1pdEVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXM0LnVwcHkub24oJ2NhbmNlbC1hbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWVyLmRvbmUoKTtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICB9KTtcblxuICAgICAgeGhyLm9wZW4obWV0aG9kLnRvVXBwZXJDYXNlKCksIGVuZHBvaW50LCB0cnVlKTtcbiAgICAgIC8vIElFMTAgZG9lcyBub3QgYWxsb3cgc2V0dGluZyBgd2l0aENyZWRlbnRpYWxzYCBiZWZvcmUgYG9wZW4oKWAgaXMgY2FsbGVkLlxuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IF90aGlzNC5vcHRzLndpdGhDcmVkZW50aWFscztcblxuICAgICAgT2JqZWN0LmtleXMoX3RoaXM0Lm9wdHMuaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgX3RoaXM0Lm9wdHMuaGVhZGVyc1toZWFkZXJdKTtcbiAgICAgIH0pO1xuXG4gICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG5cbiAgICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgX3RoaXM0LnVwcHkuZW1pdCgndXBsb2FkLXN0YXJ0ZWQnLCBmaWxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFhIUlVwbG9hZC5wcm90b3R5cGUudXBsb2FkRmlsZXMgPSBmdW5jdGlvbiB1cGxvYWRGaWxlcyhmaWxlcykge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGlvbnMgPSBmaWxlcy5tYXAoZnVuY3Rpb24gKGZpbGUsIGkpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gcGFyc2VJbnQoaSwgMTApICsgMTtcbiAgICAgIHZhciB0b3RhbCA9IGZpbGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGZpbGUuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGZpbGUuZXJyb3IpKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsZS5pc1JlbW90ZSkge1xuICAgICAgICAvLyBXZSBlbWl0IHVwbG9hZC1zdGFydGVkIGhlcmUsIHNvIHRoYXQgaXQncyBhbHNvIGVtaXR0ZWQgZm9yIGZpbGVzXG4gICAgICAgIC8vIHRoYXQgaGF2ZSB0byB3YWl0IGR1ZSB0byB0aGUgYGxpbWl0YCBvcHRpb24uXG4gICAgICAgIF90aGlzNS51cHB5LmVtaXQoJ3VwbG9hZC1zdGFydGVkJywgZmlsZSk7XG4gICAgICAgIHJldHVybiBfdGhpczUudXBsb2FkUmVtb3RlLmJpbmQoX3RoaXM1LCBmaWxlLCBjdXJyZW50LCB0b3RhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczUudXBweS5lbWl0KCd1cGxvYWQtc3RhcnRlZCcsIGZpbGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM1LnVwbG9hZC5iaW5kKF90aGlzNSwgZmlsZSwgY3VycmVudCwgdG90YWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHByb21pc2VzID0gYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgdmFyIGxpbWl0ZWRBY3Rpb24gPSBfdGhpczUubGltaXRVcGxvYWRzKGFjdGlvbik7XG4gICAgICByZXR1cm4gbGltaXRlZEFjdGlvbigpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNldHRsZShwcm9taXNlcyk7XG4gIH07XG5cbiAgWEhSVXBsb2FkLnByb3RvdHlwZS5oYW5kbGVVcGxvYWQgPSBmdW5jdGlvbiBoYW5kbGVVcGxvYWQoZmlsZUlEcykge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgaWYgKGZpbGVJRHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnVwcHkubG9nKCdbWEhSVXBsb2FkXSBObyBmaWxlcyB0byB1cGxvYWQhJyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy51cHB5LmxvZygnW1hIUlVwbG9hZF0gVXBsb2FkaW5nLi4uJyk7XG4gICAgdmFyIGZpbGVzID0gZmlsZUlEcy5tYXAoZnVuY3Rpb24gKGZpbGVJRCkge1xuICAgICAgcmV0dXJuIF90aGlzNi51cHB5LmdldEZpbGUoZmlsZUlEKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdHMuYnVuZGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy51cGxvYWRCdW5kbGUoZmlsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwbG9hZEZpbGVzKGZpbGVzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9O1xuXG4gIFhIUlVwbG9hZC5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gICAgaWYgKHRoaXMub3B0cy5idW5kbGUpIHtcbiAgICAgIHRoaXMudXBweS5zZXRTdGF0ZSh7XG4gICAgICAgIGNhcGFiaWxpdGllczogX2V4dGVuZHMoe30sIHRoaXMudXBweS5nZXRTdGF0ZSgpLmNhcGFiaWxpdGllcywge1xuICAgICAgICAgIGJ1bmRsZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudXBweS5hZGRVcGxvYWRlcih0aGlzLmhhbmRsZVVwbG9hZCk7XG4gIH07XG5cbiAgWEhSVXBsb2FkLnByb3RvdHlwZS51bmluc3RhbGwgPSBmdW5jdGlvbiB1bmluc3RhbGwoKSB7XG4gICAgaWYgKHRoaXMub3B0cy5idW5kbGUpIHtcbiAgICAgIHRoaXMudXBweS5zZXRTdGF0ZSh7XG4gICAgICAgIGNhcGFiaWxpdGllczogX2V4dGVuZHMoe30sIHRoaXMudXBweS5nZXRTdGF0ZSgpLmNhcGFiaWxpdGllcywge1xuICAgICAgICAgIGJ1bmRsZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudXBweS5yZW1vdmVVcGxvYWRlcih0aGlzLmhhbmRsZVVwbG9hZCk7XG4gIH07XG5cbiAgcmV0dXJuIFhIUlVwbG9hZDtcbn0oUGx1Z2luKTsiLCIndXNlLXN0cmljdCc7XG4vKipcbiAqIE1hbmFnZXMgY29tbXVuaWNhdGlvbnMgd2l0aCBDb21wYW5pb25cbiAqL1xuXG52YXIgUmVxdWVzdENsaWVudCA9IHJlcXVpcmUoJy4vUmVxdWVzdENsaWVudCcpO1xudmFyIFByb3ZpZGVyID0gcmVxdWlyZSgnLi9Qcm92aWRlcicpO1xudmFyIFNvY2tldCA9IHJlcXVpcmUoJy4vU29ja2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBSZXF1ZXN0Q2xpZW50OiBSZXF1ZXN0Q2xpZW50LFxuICBQcm92aWRlcjogUHJvdmlkZXIsXG4gIFNvY2tldDogU29ja2V0XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUmVxdWVzdENsaWVudCA9IHJlcXVpcmUoJy4vUmVxdWVzdENsaWVudCcpO1xuXG52YXIgX2dldE5hbWUgPSBmdW5jdGlvbiBfZ2V0TmFtZShpZCkge1xuICByZXR1cm4gaWQuc3BsaXQoJy0nKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG4gIH0pLmpvaW4oJyAnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF9SZXF1ZXN0Q2xpZW50KSB7XG4gIF9pbmhlcml0cyhQcm92aWRlciwgX1JlcXVlc3RDbGllbnQpO1xuXG4gIGZ1bmN0aW9uIFByb3ZpZGVyKHVwcHksIG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvdmlkZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlcXVlc3RDbGllbnQuY2FsbCh0aGlzLCB1cHB5LCBvcHRzKSk7XG5cbiAgICBfdGhpcy5wcm92aWRlciA9IG9wdHMucHJvdmlkZXI7XG4gICAgX3RoaXMuaWQgPSBfdGhpcy5wcm92aWRlcjtcbiAgICBfdGhpcy5hdXRoUHJvdmlkZXIgPSBvcHRzLmF1dGhQcm92aWRlciB8fCBfdGhpcy5wcm92aWRlcjtcbiAgICBfdGhpcy5uYW1lID0gX3RoaXMub3B0cy5uYW1lIHx8IF9nZXROYW1lKF90aGlzLmlkKTtcbiAgICBfdGhpcy50b2tlbktleSA9ICdjb21wYW5pb24tJyArIF90aGlzLmlkICsgJy1hdXRoLXRva2VuJztcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvLyBAdG9kbyhpLm9sYXJld2FqdSkgY29uc2lkZXIgd2hldGhlciBvciBub3QgdGhpcyBtZXRob2Qgc2hvdWxkIGJlIGV4cG9zZWRcbiAgUHJvdmlkZXIucHJvdG90eXBlLnNldEF1dGhUb2tlbiA9IGZ1bmN0aW9uIHNldEF1dGhUb2tlbih0b2tlbikge1xuICAgIC8vIEB0b2RvKGkub2xhcmV3YWp1KSBhZGQgZmFsbGJhY2sgZm9yIE9PTSBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50b2tlbktleSwgdG9rZW4pO1xuICB9O1xuXG4gIFByb3ZpZGVyLnByb3RvdHlwZS5jaGVja0F1dGggPSBmdW5jdGlvbiBjaGVja0F1dGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuaWQgKyAnL2F1dGhvcml6ZWQnKS50aGVuKGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICByZXR1cm4gcGF5bG9hZC5hdXRoZW50aWNhdGVkO1xuICAgIH0pO1xuICB9O1xuXG4gIFByb3ZpZGVyLnByb3RvdHlwZS5hdXRoVXJsID0gZnVuY3Rpb24gYXV0aFVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3N0bmFtZSArICcvJyArIHRoaXMuaWQgKyAnL2Nvbm5lY3QnO1xuICB9O1xuXG4gIFByb3ZpZGVyLnByb3RvdHlwZS5maWxlVXJsID0gZnVuY3Rpb24gZmlsZVVybChpZCkge1xuICAgIHJldHVybiB0aGlzLmhvc3RuYW1lICsgJy8nICsgdGhpcy5pZCArICcvZ2V0LycgKyBpZDtcbiAgfTtcblxuICBQcm92aWRlci5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uIGxpc3QoZGlyZWN0b3J5KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuaWQgKyAnL2xpc3QvJyArIChkaXJlY3RvcnkgfHwgJycpKTtcbiAgfTtcblxuICBQcm92aWRlci5wcm90b3R5cGUubG9nb3V0ID0gZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHJlZGlyZWN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBsb2NhdGlvbi5ocmVmO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuaWQgKyAnL2xvZ291dD9yZWRpcmVjdD0nICsgcmVkaXJlY3QpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oX3RoaXMyLnRva2VuS2V5KTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH07XG5cbiAgUHJvdmlkZXIuaW5pdFBsdWdpbiA9IGZ1bmN0aW9uIGluaXRQbHVnaW4ocGx1Z2luLCBvcHRzLCBkZWZhdWx0T3B0cykge1xuICAgIHBsdWdpbi50eXBlID0gJ2FjcXVpcmVyJztcbiAgICBwbHVnaW4uZmlsZXMgPSBbXTtcbiAgICBpZiAoZGVmYXVsdE9wdHMpIHtcbiAgICAgIHBsdWdpbi5vcHRzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRzLCBvcHRzKTtcbiAgICB9XG4gICAgaWYgKG9wdHMuc2VydmVyUGF0dGVybikge1xuICAgICAgdmFyIHBhdHRlcm4gPSBvcHRzLnNlcnZlclBhdHRlcm47XG4gICAgICAvLyB2YWxpZGF0ZSBzZXJ2ZXJQYXR0ZXJuIHBhcmFtXG4gICAgICBpZiAodHlwZW9mIHBhdHRlcm4gIT09ICdzdHJpbmcnICYmICFBcnJheS5pc0FycmF5KHBhdHRlcm4pICYmICEocGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihwbHVnaW4uaWQgKyAnOiB0aGUgb3B0aW9uIFwic2VydmVyUGF0dGVyblwiIG11c3QgYmUgb25lIG9mIHN0cmluZywgQXJyYXksIFJlZ0V4cCcpO1xuICAgICAgfVxuICAgICAgcGx1Z2luLm9wdHMuc2VydmVyUGF0dGVybiA9IHBhdHRlcm47XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRvZXMgbm90IHN0YXJ0IHdpdGggaHR0cHM6Ly9cbiAgICAgIGlmICgvXig/IWh0dHBzPzpcXC9cXC8pLiokLy50ZXN0KG9wdHMuc2VydmVyVXJsKSkge1xuICAgICAgICBwbHVnaW4ub3B0cy5zZXJ2ZXJQYXR0ZXJuID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgb3B0cy5zZXJ2ZXJVcmwucmVwbGFjZSgvXlxcL1xcLy8sICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsdWdpbi5vcHRzLnNlcnZlclBhdHRlcm4gPSBvcHRzLnNlcnZlclVybDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFByb3ZpZGVyLCBbe1xuICAgIGtleTogJ2RlZmF1bHRIZWFkZXJzJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX1JlcXVlc3RDbGllbnQucHJvdG90eXBlLmRlZmF1bHRIZWFkZXJzLCB7ICd1cHB5LWF1dGgtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRva2VuS2V5KSB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHJvdmlkZXI7XG59KFJlcXVlc3RDbGllbnQpOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBlZSA9IHJlcXVpcmUoJ25hbWVzcGFjZS1lbWl0dGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBVcHB5U29ja2V0KG9wdHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVwcHlTb2NrZXQpO1xuXG4gICAgdGhpcy5xdWV1ZWQgPSBbXTtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldChvcHRzLnRhcmdldCk7XG4gICAgdGhpcy5lbWl0dGVyID0gZWUoKTtcblxuICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICB3aGlsZSAoX3RoaXMucXVldWVkLmxlbmd0aCA+IDAgJiYgX3RoaXMuaXNPcGVuKSB7XG4gICAgICAgIHZhciBmaXJzdCA9IF90aGlzLnF1ZXVlZFswXTtcbiAgICAgICAgX3RoaXMuc2VuZChmaXJzdC5hY3Rpb24sIGZpcnN0LnBheWxvYWQpO1xuICAgICAgICBfdGhpcy5xdWV1ZWQgPSBfdGhpcy5xdWV1ZWQuc2xpY2UoMSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHRoaXMuX2hhbmRsZU1lc3NhZ2UgPSB0aGlzLl9oYW5kbGVNZXNzYWdlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLl9oYW5kbGVNZXNzYWdlO1xuXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVtaXQgPSB0aGlzLmVtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uID0gdGhpcy5vbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25jZSA9IHRoaXMub25jZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VuZCA9IHRoaXMuc2VuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVXBweVNvY2tldC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgfTtcblxuICBVcHB5U29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gc2VuZChhY3Rpb24sIHBheWxvYWQpIHtcbiAgICAvLyBhdHRhY2ggdXVpZFxuXG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5xdWV1ZWQucHVzaCh7IGFjdGlvbjogYWN0aW9uLCBwYXlsb2FkOiBwYXlsb2FkIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICBwYXlsb2FkOiBwYXlsb2FkXG4gICAgfSkpO1xuICB9O1xuXG4gIFVwcHlTb2NrZXQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oYWN0aW9uLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKGFjdGlvbiwgaGFuZGxlcik7XG4gIH07XG5cbiAgVXBweVNvY2tldC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoYWN0aW9uLCBwYXlsb2FkKSB7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoYWN0aW9uLCBwYXlsb2FkKTtcbiAgfTtcblxuICBVcHB5U29ja2V0LnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShhY3Rpb24sIGhhbmRsZXIpIHtcbiAgICB0aGlzLmVtaXR0ZXIub25jZShhY3Rpb24sIGhhbmRsZXIpO1xuICB9O1xuXG4gIFVwcHlTb2NrZXQucHJvdG90eXBlLl9oYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24gX2hhbmRsZU1lc3NhZ2UoZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbWVzc2FnZSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICAgIHRoaXMuZW1pdChtZXNzYWdlLmFjdGlvbiwgbWVzc2FnZS5wYXlsb2FkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBVcHB5U29ja2V0O1xufSgpOyIsInZhciB0aHJvdHRsZSA9IHJlcXVpcmUoJ2xvZGFzaC50aHJvdHRsZScpO1xuXG5mdW5jdGlvbiBfZW1pdFNvY2tldFByb2dyZXNzKHVwbG9hZGVyLCBwcm9ncmVzc0RhdGEsIGZpbGUpIHtcbiAgdmFyIHByb2dyZXNzID0gcHJvZ3Jlc3NEYXRhLnByb2dyZXNzLFxuICAgICAgYnl0ZXNVcGxvYWRlZCA9IHByb2dyZXNzRGF0YS5ieXRlc1VwbG9hZGVkLFxuICAgICAgYnl0ZXNUb3RhbCA9IHByb2dyZXNzRGF0YS5ieXRlc1RvdGFsO1xuXG4gIGlmIChwcm9ncmVzcykge1xuICAgIHVwbG9hZGVyLnVwcHkubG9nKCdVcGxvYWQgcHJvZ3Jlc3M6ICcgKyBwcm9ncmVzcyk7XG4gICAgdXBsb2FkZXIudXBweS5lbWl0KCd1cGxvYWQtcHJvZ3Jlc3MnLCBmaWxlLCB7XG4gICAgICB1cGxvYWRlcjogdXBsb2FkZXIsXG4gICAgICBieXRlc1VwbG9hZGVkOiBieXRlc1VwbG9hZGVkLFxuICAgICAgYnl0ZXNUb3RhbDogYnl0ZXNUb3RhbFxuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGUoX2VtaXRTb2NrZXRQcm9ncmVzcywgMzAwLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlIH0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0U29ja2V0SG9zdCh1cmwpIHtcbiAgLy8gZ2V0IHRoZSBob3N0IGRvbWFpblxuICB2YXIgcmVnZXggPSAvXig/Omh0dHBzPzpcXC9cXC98XFwvXFwvKT8oPzpbXkBcXG5dK0ApPyg/Ond3d1xcLik/KFteXFxuXSspLztcbiAgdmFyIGhvc3QgPSByZWdleC5leGVjKHVybClbMV07XG4gIHZhciBzb2NrZXRQcm90b2NvbCA9IGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICd3c3MnIDogJ3dzJztcblxuICByZXR1cm4gc29ja2V0UHJvdG9jb2wgKyAnOi8vJyArIGhvc3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHByb21pc2VzKSB7XG4gIHZhciByZXNvbHV0aW9ucyA9IFtdO1xuICB2YXIgcmVqZWN0aW9ucyA9IFtdO1xuICBmdW5jdGlvbiByZXNvbHZlZCh2YWx1ZSkge1xuICAgIHJlc29sdXRpb25zLnB1c2godmFsdWUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlamVjdGVkKGVycm9yKSB7XG4gICAgcmVqZWN0aW9ucy5wdXNoKGVycm9yKTtcbiAgfVxuXG4gIHZhciB3YWl0ID0gUHJvbWlzZS5hbGwocHJvbWlzZXMubWFwKGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihyZXNvbHZlZCwgcmVqZWN0ZWQpO1xuICB9KSk7XG5cbiAgcmV0dXJuIHdhaXQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3NmdWw6IHJlc29sdXRpb25zLFxuICAgICAgZmFpbGVkOiByZWplY3Rpb25zXG4gICAgfTtcbiAgfSk7XG59OyIsIi8qKlxuICogTGltaXQgdGhlIGFtb3VudCBvZiBzaW11bHRhbmVvdXNseSBwZW5kaW5nIFByb21pc2VzLlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gcGFzc2VkIGEgZnVuY3Rpb24gYGZuYCxcbiAqIHdpbGwgbWFrZSBzdXJlIHRoYXQgYXQgbW9zdCBgbGltaXRgIGNhbGxzIHRvIGBmbmAgYXJlIHBlbmRpbmcuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxpbWl0XG4gKiBAcmV0dXJuIHtmdW5jdGlvbigpfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpbWl0UHJvbWlzZXMobGltaXQpIHtcbiAgdmFyIHBlbmRpbmcgPSAwO1xuICB2YXIgcXVldWUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FsbCA9IGZ1bmN0aW9uIGNhbGwoKSB7XG4gICAgICAgIHBlbmRpbmcrKztcbiAgICAgICAgdmFyIHByb21pc2UgPSBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICBwcm9taXNlLnRoZW4ob25maW5pc2gsIG9uZmluaXNoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9O1xuXG4gICAgICBpZiAocGVuZGluZyA+PSBsaW1pdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHF1ZXVlLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbCgpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FsbCgpO1xuICAgIH07XG4gIH07XG4gIGZ1bmN0aW9uIG9uZmluaXNoKCkge1xuICAgIHBlbmRpbmctLTtcbiAgICB2YXIgbmV4dCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgaWYgKG5leHQpIG5leHQoKTtcbiAgfVxufTsiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ0B1cHB5L2NvcmUnKSxcbiAgICBQbHVnaW4gPSBfcmVxdWlyZS5QbHVnaW47XG5cbnZhciBUcmFuc2xhdG9yID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL1RyYW5zbGF0b3InKTtcbnZhciBkcmFnRHJvcCA9IHJlcXVpcmUoJ2RyYWctZHJvcCcpO1xudmFyIERhc2hib2FyZFVJID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0Rhc2hib2FyZCcpO1xudmFyIFN0YXR1c0JhciA9IHJlcXVpcmUoJ0B1cHB5L3N0YXR1cy1iYXInKTtcbnZhciBJbmZvcm1lciA9IHJlcXVpcmUoJ0B1cHB5L2luZm9ybWVyJyk7XG52YXIgVGh1bWJuYWlsR2VuZXJhdG9yID0gcmVxdWlyZSgnQHVwcHkvdGh1bWJuYWlsLWdlbmVyYXRvcicpO1xudmFyIGZpbmRBbGxET01FbGVtZW50cyA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9maW5kQWxsRE9NRWxlbWVudHMnKTtcbnZhciB0b0FycmF5ID0gcmVxdWlyZSgnQHVwcHkvdXRpbHMvbGliL3RvQXJyYXknKTtcbi8vIGNvbnN0IHByZXR0eUJ5dGVzID0gcmVxdWlyZSgncHJldHRpZXItYnl0ZXMnKVxudmFyIFJlc2l6ZU9ic2VydmVyID0gcmVxdWlyZSgncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJykuZGVmYXVsdCB8fCByZXF1aXJlKCdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnKTtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pY29ucycpLFxuICAgIGRlZmF1bHRUYWJJY29uID0gX3JlcXVpcmUyLmRlZmF1bHRUYWJJY29uO1xuXG4vLyBTb21lIGNvZGUgZm9yIG1hbmFnaW5nIGZvY3VzIHdhcyBhZG9wdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2dob3NoL21pY3JvbW9kYWxcbi8vIE1JVCBsaWNlbmNlLCBodHRwczovL2dpdGh1Yi5jb20vZ2hvc2gvbWljcm9tb2RhbC9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgSW5kcmFzaGlzaCBHaG9zaFxuXG5cbnZhciBGT0NVU0FCTEVfRUxFTUVOVFMgPSBbJ2FbaHJlZl06bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2luZXJ0XSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2FyZWFbaHJlZl06bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2luZXJ0XSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW2luZXJ0XSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFtpbmVydF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFtpbmVydF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbaW5lcnRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnaWZyYW1lOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtpbmVydF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdvYmplY3Q6bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2luZXJ0XSk6bm90KFthcmlhLWhpZGRlbl0pJywgJ2VtYmVkOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtpbmVydF0pOm5vdChbYXJpYS1oaWRkZW5dKScsICdbY29udGVudGVkaXRhYmxlXTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaW5lcnRdKTpub3QoW2FyaWEtaGlkZGVuXSknLCAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaW5lcnRdKTpub3QoW2FyaWEtaGlkZGVuXSknXTtcblxudmFyIFRBQl9LRVkgPSA5O1xudmFyIEVTQ19LRVkgPSAyNztcblxuLyoqXG4gKiBEYXNoYm9hcmQgVUkgd2l0aCBwcmV2aWV3cywgbWV0YWRhdGEgZWRpdGluZywgdGFicyBmb3IgdmFyaW91cyBzZXJ2aWNlcyBhbmQgbW9yZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChfUGx1Z2luKSB7XG4gIF9pbmhlcml0cyhEYXNoYm9hcmQsIF9QbHVnaW4pO1xuXG4gIGZ1bmN0aW9uIERhc2hib2FyZCh1cHB5LCBvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhc2hib2FyZCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUGx1Z2luLmNhbGwodGhpcywgdXBweSwgb3B0cykpO1xuXG4gICAgX3RoaXMuaWQgPSBfdGhpcy5vcHRzLmlkIHx8ICdEYXNoYm9hcmQnO1xuICAgIF90aGlzLnRpdGxlID0gJ0Rhc2hib2FyZCc7XG4gICAgX3RoaXMudHlwZSA9ICdvcmNoZXN0cmF0b3InO1xuICAgIF90aGlzLm1vZGFsTmFtZSA9ICd1cHB5LURhc2hib2FyZCc7XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZSA9IHtcbiAgICAgIHN0cmluZ3M6IHtcbiAgICAgICAgc2VsZWN0VG9VcGxvYWQ6ICdTZWxlY3QgZmlsZXMgdG8gdXBsb2FkJyxcbiAgICAgICAgY2xvc2VNb2RhbDogJ0Nsb3NlIE1vZGFsJyxcbiAgICAgICAgdXBsb2FkOiAnVXBsb2FkJyxcbiAgICAgICAgaW1wb3J0RnJvbTogJ0ltcG9ydCBmcm9tICV7bmFtZX0nLFxuICAgICAgICBhZGRpbmdNb3JlRmlsZXM6ICdBZGRpbmcgbW9yZSBmaWxlcycsXG4gICAgICAgIGFkZE1vcmVGaWxlczogJ0FkZCBtb3JlIGZpbGVzJyxcbiAgICAgICAgZGFzaGJvYXJkV2luZG93VGl0bGU6ICdVcHB5IERhc2hib2FyZCBXaW5kb3cgKFByZXNzIGVzY2FwZSB0byBjbG9zZSknLFxuICAgICAgICBkYXNoYm9hcmRUaXRsZTogJ1VwcHkgRGFzaGJvYXJkJyxcbiAgICAgICAgY29weUxpbmtUb0NsaXBib2FyZFN1Y2Nlc3M6ICdMaW5rIGNvcGllZCB0byBjbGlwYm9hcmQnLFxuICAgICAgICBjb3B5TGlua1RvQ2xpcGJvYXJkRmFsbGJhY2s6ICdDb3B5IHRoZSBVUkwgYmVsb3cnLFxuICAgICAgICBjb3B5TGluazogJ0NvcHkgbGluaycsXG4gICAgICAgIGZpbGVTb3VyY2U6ICdGaWxlIHNvdXJjZTogJXtuYW1lfScsXG4gICAgICAgIGRvbmU6ICdEb25lJyxcbiAgICAgICAgYmFjazogJ0JhY2snLFxuICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgIHJlbW92ZUZpbGU6ICdSZW1vdmUgZmlsZScsXG4gICAgICAgIGVkaXRGaWxlOiAnRWRpdCBmaWxlJyxcbiAgICAgICAgZWRpdGluZzogJ0VkaXRpbmcgJXtmaWxlfScsXG4gICAgICAgIGVkaXQ6ICdFZGl0JyxcbiAgICAgICAgZmluaXNoRWRpdGluZ0ZpbGU6ICdGaW5pc2ggZWRpdGluZyBmaWxlJyxcbiAgICAgICAgc2F2ZUNoYW5nZXM6ICdTYXZlIGNoYW5nZXMnLFxuICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICBsb2NhbERpc2s6ICdMb2NhbCBEaXNrJyxcbiAgICAgICAgbXlEZXZpY2U6ICdNeSBEZXZpY2UnLFxuICAgICAgICBkcm9wUGFzdGVJbXBvcnQ6ICdEcm9wIGZpbGVzIGhlcmUsIHBhc3RlLCAle2Jyb3dzZX0gb3IgaW1wb3J0IGZyb20nLFxuICAgICAgICBkcm9wUGFzdGU6ICdEcm9wIGZpbGVzIGhlcmUsIHBhc3RlIG9yICV7YnJvd3NlfScsXG4gICAgICAgIGJyb3dzZTogJ2Jyb3dzZScsXG4gICAgICAgIGZpbGVQcm9ncmVzczogJ0ZpbGUgcHJvZ3Jlc3M6IHVwbG9hZCBzcGVlZCBhbmQgRVRBJyxcbiAgICAgICAgbnVtYmVyT2ZTZWxlY3RlZEZpbGVzOiAnTnVtYmVyIG9mIHNlbGVjdGVkIGZpbGVzJyxcbiAgICAgICAgdXBsb2FkQWxsTmV3RmlsZXM6ICdVcGxvYWQgYWxsIG5ldyBmaWxlcycsXG4gICAgICAgIGVtcHR5Rm9sZGVyQWRkZWQ6ICdObyBmaWxlcyB3ZXJlIGFkZGVkIGZyb20gZW1wdHkgZm9sZGVyJyxcbiAgICAgICAgdXBsb2FkQ29tcGxldGU6ICdVcGxvYWQgY29tcGxldGUnLFxuICAgICAgICB1cGxvYWRQYXVzZWQ6ICdVcGxvYWQgcGF1c2VkJyxcbiAgICAgICAgcmVzdW1lVXBsb2FkOiAnUmVzdW1lIHVwbG9hZCcsXG4gICAgICAgIHBhdXNlVXBsb2FkOiAnUGF1c2UgdXBsb2FkJyxcbiAgICAgICAgcmV0cnlVcGxvYWQ6ICdSZXRyeSB1cGxvYWQnLFxuICAgICAgICBjYW5jZWxVcGxvYWQ6ICdDYW5jZWwgdXBsb2FkJyxcbiAgICAgICAgeEZpbGVzU2VsZWN0ZWQ6IHtcbiAgICAgICAgICAwOiAnJXtzbWFydF9jb3VudH0gZmlsZSBzZWxlY3RlZCcsXG4gICAgICAgICAgMTogJyV7c21hcnRfY291bnR9IGZpbGVzIHNlbGVjdGVkJ1xuICAgICAgICB9LFxuICAgICAgICB1cGxvYWRYRmlsZXM6IHtcbiAgICAgICAgICAwOiAnVXBsb2FkICV7c21hcnRfY291bnR9IGZpbGUnLFxuICAgICAgICAgIDE6ICdVcGxvYWQgJXtzbWFydF9jb3VudH0gZmlsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHVwbG9hZGluZ1hGaWxlczoge1xuICAgICAgICAgIDA6ICdVcGxvYWRpbmcgJXtzbWFydF9jb3VudH0gZmlsZScsXG4gICAgICAgICAgMTogJ1VwbG9hZGluZyAle3NtYXJ0X2NvdW50fSBmaWxlcydcbiAgICAgICAgfSxcbiAgICAgICAgcHJvY2Vzc2luZ1hGaWxlczoge1xuICAgICAgICAgIDA6ICdQcm9jZXNzaW5nICV7c21hcnRfY291bnR9IGZpbGUnLFxuICAgICAgICAgIDE6ICdQcm9jZXNzaW5nICV7c21hcnRfY291bnR9IGZpbGVzJ1xuICAgICAgICB9LFxuICAgICAgICB1cGxvYWRYTmV3RmlsZXM6IHtcbiAgICAgICAgICAwOiAnVXBsb2FkICsle3NtYXJ0X2NvdW50fSBmaWxlJyxcbiAgICAgICAgICAxOiAnVXBsb2FkICsle3NtYXJ0X2NvdW50fSBmaWxlcydcbiAgICAgICAgfSxcbiAgICAgICAgZm9sZGVyQWRkZWQ6IHtcbiAgICAgICAgICAwOiAnQWRkZWQgJXtzbWFydF9jb3VudH0gZmlsZSBmcm9tICV7Zm9sZGVyfScsXG4gICAgICAgICAgMTogJ0FkZGVkICV7c21hcnRfY291bnR9IGZpbGVzIGZyb20gJXtmb2xkZXJ9J1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgICB9O3ZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIHRhcmdldDogJ2JvZHknLFxuICAgICAgbWV0YUZpZWxkczogW10sXG4gICAgICB0cmlnZ2VyOiAnI3VwcHktc2VsZWN0LWZpbGVzJyxcbiAgICAgIGlubGluZTogZmFsc2UsXG4gICAgICB3aWR0aDogNzUwLFxuICAgICAgaGVpZ2h0OiA1NTAsXG4gICAgICB0aHVtYm5haWxXaWR0aDogMjgwLFxuICAgICAgZGVmYXVsdFRhYkljb246IGRlZmF1bHRUYWJJY29uLFxuICAgICAgc2hvd0xpbmtUb0ZpbGVVcGxvYWRSZXN1bHQ6IHRydWUsXG4gICAgICBzaG93UHJvZ3Jlc3NEZXRhaWxzOiBmYWxzZSxcbiAgICAgIGhpZGVVcGxvYWRCdXR0b246IGZhbHNlLFxuICAgICAgaGlkZVJldHJ5QnV0dG9uOiBmYWxzZSxcbiAgICAgIGhpZGVQYXVzZVJlc3VtZUNhbmNlbEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgaGlkZVByb2dyZXNzQWZ0ZXJGaW5pc2g6IGZhbHNlLFxuICAgICAgbm90ZTogbnVsbCxcbiAgICAgIGNsb3NlTW9kYWxPbkNsaWNrT3V0c2lkZTogZmFsc2UsXG4gICAgICBjbG9zZUFmdGVyRmluaXNoOiBmYWxzZSxcbiAgICAgIGRpc2FibGVTdGF0dXNCYXI6IGZhbHNlLFxuICAgICAgZGlzYWJsZUluZm9ybWVyOiBmYWxzZSxcbiAgICAgIGRpc2FibGVUaHVtYm5haWxHZW5lcmF0b3I6IGZhbHNlLFxuICAgICAgZGlzYWJsZVBhZ2VTY3JvbGxXaGVuTW9kYWxPcGVuOiB0cnVlLFxuICAgICAgYW5pbWF0ZU9wZW5DbG9zZTogdHJ1ZSxcbiAgICAgIHByb3VkbHlEaXNwbGF5UG93ZXJlZEJ5VXBweTogdHJ1ZSxcbiAgICAgIG9uUmVxdWVzdENsb3NlTW9kYWw6IGZ1bmN0aW9uIG9uUmVxdWVzdENsb3NlTW9kYWwoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICB9LFxuICAgICAgc2hvd1NlbGVjdGVkRmlsZXM6IHRydWUsXG4gICAgICAvLyBsb2NhbGU6IGRlZmF1bHRMb2NhbGUsXG4gICAgICBicm93c2VyQmFja0J1dHRvbkNsb3NlOiBmYWxzZVxuXG4gICAgICAvLyBtZXJnZSBkZWZhdWx0IG9wdGlvbnMgd2l0aCB0aGUgb25lcyBzZXQgYnkgdXNlclxuICAgIH07X3RoaXMub3B0cyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0cyk7XG5cbiAgICAvLyBpMThuXG4gICAgX3RoaXMudHJhbnNsYXRvciA9IG5ldyBUcmFuc2xhdG9yKFtkZWZhdWx0TG9jYWxlLCBfdGhpcy51cHB5LmxvY2FsZSwgX3RoaXMub3B0cy5sb2NhbGVdKTtcbiAgICBfdGhpcy5pMThuID0gX3RoaXMudHJhbnNsYXRvci50cmFuc2xhdGUuYmluZChfdGhpcy50cmFuc2xhdG9yKTtcbiAgICBfdGhpcy5pMThuQXJyYXkgPSBfdGhpcy50cmFuc2xhdG9yLnRyYW5zbGF0ZUFycmF5LmJpbmQoX3RoaXMudHJhbnNsYXRvcik7XG5cbiAgICBfdGhpcy5vcGVuTW9kYWwgPSBfdGhpcy5vcGVuTW9kYWwuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuY2xvc2VNb2RhbCA9IF90aGlzLmNsb3NlTW9kYWwuYmluZChfdGhpcyk7XG4gICAgX3RoaXMucmVxdWVzdENsb3NlTW9kYWwgPSBfdGhpcy5yZXF1ZXN0Q2xvc2VNb2RhbC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5pc01vZGFsT3BlbiA9IF90aGlzLmlzTW9kYWxPcGVuLmJpbmQoX3RoaXMpO1xuXG4gICAgX3RoaXMuYWRkVGFyZ2V0ID0gX3RoaXMuYWRkVGFyZ2V0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnJlbW92ZVRhcmdldCA9IF90aGlzLnJlbW92ZVRhcmdldC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oaWRlQWxsUGFuZWxzID0gX3RoaXMuaGlkZUFsbFBhbmVscy5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5zaG93UGFuZWwgPSBfdGhpcy5zaG93UGFuZWwuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMgPSBfdGhpcy5nZXRGb2N1c2FibGVOb2Rlcy5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5zZXRGb2N1c1RvRmlyc3ROb2RlID0gX3RoaXMuc2V0Rm9jdXNUb0ZpcnN0Tm9kZS5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVQb3BTdGF0ZSA9IF90aGlzLmhhbmRsZVBvcFN0YXRlLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm1haW50YWluRm9jdXMgPSBfdGhpcy5tYWludGFpbkZvY3VzLmJpbmQoX3RoaXMpO1xuXG4gICAgX3RoaXMuaW5pdEV2ZW50cyA9IF90aGlzLmluaXRFdmVudHMuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlS2V5RG93biA9IF90aGlzLmhhbmRsZUtleURvd24uYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRmlsZUFkZGVkID0gX3RoaXMuaGFuZGxlRmlsZUFkZGVkLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUNvbXBsZXRlID0gX3RoaXMuaGFuZGxlQ29tcGxldGUuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gX3RoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnRvZ2dsZUZpbGVDYXJkID0gX3RoaXMudG9nZ2xlRmlsZUNhcmQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMudG9nZ2xlQWRkRmlsZXNQYW5lbCA9IF90aGlzLnRvZ2dsZUFkZEZpbGVzUGFuZWwuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRHJvcCA9IF90aGlzLmhhbmRsZURyb3AuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlUGFzdGUgPSBfdGhpcy5oYW5kbGVQYXN0ZS5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnJlbmRlciA9IF90aGlzLnJlbmRlci5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5pbnN0YWxsID0gX3RoaXMuaW5zdGFsbC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBEYXNoYm9hcmQucHJvdG90eXBlLnJlbW92ZVRhcmdldCA9IGZ1bmN0aW9uIHJlbW92ZVRhcmdldChwbHVnaW4pIHtcbiAgICB2YXIgcGx1Z2luU3RhdGUgPSB0aGlzLmdldFBsdWdpblN0YXRlKCk7XG4gICAgLy8gZmlsdGVyIG91dCB0aGUgb25lIHdlIHdhbnQgdG8gcmVtb3ZlXG4gICAgdmFyIG5ld1RhcmdldHMgPSBwbHVnaW5TdGF0ZS50YXJnZXRzLmZpbHRlcihmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlkICE9PSBwbHVnaW4uaWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFBsdWdpblN0YXRlKHtcbiAgICAgIHRhcmdldHM6IG5ld1RhcmdldHNcbiAgICB9KTtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLmFkZFRhcmdldCA9IGZ1bmN0aW9uIGFkZFRhcmdldChwbHVnaW4pIHtcbiAgICB2YXIgY2FsbGVyUGx1Z2luSWQgPSBwbHVnaW4uaWQgfHwgcGx1Z2luLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgdmFyIGNhbGxlclBsdWdpbk5hbWUgPSBwbHVnaW4udGl0bGUgfHwgY2FsbGVyUGx1Z2luSWQ7XG4gICAgdmFyIGNhbGxlclBsdWdpblR5cGUgPSBwbHVnaW4udHlwZTtcblxuICAgIGlmIChjYWxsZXJQbHVnaW5UeXBlICE9PSAnYWNxdWlyZXInICYmIGNhbGxlclBsdWdpblR5cGUgIT09ICdwcm9ncmVzc2luZGljYXRvcicgJiYgY2FsbGVyUGx1Z2luVHlwZSAhPT0gJ3ByZXNlbnRlcicpIHtcbiAgICAgIHZhciBtc2cgPSAnRGFzaGJvYXJkOiBNb2RhbCBjYW4gb25seSBiZSB1c2VkIGJ5IHBsdWdpbnMgb2YgdHlwZXM6IGFjcXVpcmVyLCBwcm9ncmVzc2luZGljYXRvciwgcHJlc2VudGVyJztcbiAgICAgIHRoaXMudXBweS5sb2cobXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgICAgaWQ6IGNhbGxlclBsdWdpbklkLFxuICAgICAgbmFtZTogY2FsbGVyUGx1Z2luTmFtZSxcbiAgICAgIHR5cGU6IGNhbGxlclBsdWdpblR5cGVcbiAgICB9O1xuXG4gICAgdmFyIHN0YXRlID0gdGhpcy5nZXRQbHVnaW5TdGF0ZSgpO1xuICAgIHZhciBuZXdUYXJnZXRzID0gc3RhdGUudGFyZ2V0cy5zbGljZSgpO1xuICAgIG5ld1RhcmdldHMucHVzaCh0YXJnZXQpO1xuXG4gICAgdGhpcy5zZXRQbHVnaW5TdGF0ZSh7XG4gICAgICB0YXJnZXRzOiBuZXdUYXJnZXRzXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLmhpZGVBbGxQYW5lbHMgPSBmdW5jdGlvbiBoaWRlQWxsUGFuZWxzKCkge1xuICAgIHRoaXMuc2V0UGx1Z2luU3RhdGUoe1xuICAgICAgYWN0aXZlUGFuZWw6IGZhbHNlLFxuICAgICAgc2hvd0FkZEZpbGVzUGFuZWw6IGZhbHNlXG4gICAgfSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5zaG93UGFuZWwgPSBmdW5jdGlvbiBzaG93UGFuZWwoaWQpIHtcbiAgICB2YXIgX2dldFBsdWdpblN0YXRlID0gdGhpcy5nZXRQbHVnaW5TdGF0ZSgpLFxuICAgICAgICB0YXJnZXRzID0gX2dldFBsdWdpblN0YXRlLnRhcmdldHM7XG5cbiAgICB2YXIgYWN0aXZlUGFuZWwgPSB0YXJnZXRzLmZpbHRlcihmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnR5cGUgPT09ICdhY3F1aXJlcicgJiYgdGFyZ2V0LmlkID09PSBpZDtcbiAgICB9KVswXTtcblxuICAgIHRoaXMuc2V0UGx1Z2luU3RhdGUoe1xuICAgICAgYWN0aXZlUGFuZWw6IGFjdGl2ZVBhbmVsXG4gICAgfSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5yZXF1ZXN0Q2xvc2VNb2RhbCA9IGZ1bmN0aW9uIHJlcXVlc3RDbG9zZU1vZGFsKCkge1xuICAgIGlmICh0aGlzLm9wdHMub25SZXF1ZXN0Q2xvc2VNb2RhbCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0cy5vblJlcXVlc3RDbG9zZU1vZGFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLmdldEZvY3VzYWJsZU5vZGVzID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKEZPQ1VTQUJMRV9FTEVNRU5UUyk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5vZGVzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG5vZGVzW2tleV07XG4gICAgfSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5zZXRGb2N1c1RvRmlyc3ROb2RlID0gZnVuY3Rpb24gc2V0Rm9jdXNUb0ZpcnN0Tm9kZSgpIHtcbiAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLmdldEZvY3VzYWJsZU5vZGVzKCk7XG4gICAgaWYgKGZvY3VzYWJsZU5vZGVzLmxlbmd0aCkgZm9jdXNhYmxlTm9kZXNbMF0uZm9jdXMoKTtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLnVwZGF0ZUJyb3dzZXJIaXN0b3J5ID0gZnVuY3Rpb24gdXBkYXRlQnJvd3Nlckhpc3RvcnkoKSB7XG4gICAgLy8gRW5zdXJlIGhpc3Rvcnkgc3RhdGUgZG9lcyBub3QgYWxyZWFkeSBjb250YWluIG91ciBtb2RhbCBuYW1lIHRvIGF2b2lkIGRvdWJsZS1wdXNoaW5nXG4gICAgaWYgKCFoaXN0b3J5LnN0YXRlIHx8ICFoaXN0b3J5LnN0YXRlW3RoaXMubW9kYWxOYW1lXSkge1xuICAgICAgdmFyIF9oaXN0b3J5JHB1c2hTdGF0ZTtcblxuICAgICAgLy8gUHVzaCB0byBoaXN0b3J5IHNvIHRoYXQgdGhlIHBhZ2UgaXMgbm90IGxvc3Qgb24gYnJvd3NlciBiYWNrIGJ1dHRvbiBwcmVzc1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoKF9oaXN0b3J5JHB1c2hTdGF0ZSA9IHt9LCBfaGlzdG9yeSRwdXNoU3RhdGVbdGhpcy5tb2RhbE5hbWVdID0gdHJ1ZSwgX2hpc3RvcnkkcHVzaFN0YXRlKSwgJycpO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiBmb3IgYmFjayBidXR0b24gcHJlc3Nlc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuaGFuZGxlUG9wU3RhdGUsIGZhbHNlKTtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLmhhbmRsZVBvcFN0YXRlID0gZnVuY3Rpb24gaGFuZGxlUG9wU3RhdGUoZXZlbnQpIHtcbiAgICAvLyBDbG9zZSB0aGUgbW9kYWwgaWYgdGhlIGhpc3Rvcnkgc3RhdGUgbm8gbG9uZ2VyIGNvbnRhaW5zIG91ciBtb2RhbCBuYW1lXG4gICAgaWYgKCFldmVudC5zdGF0ZSB8fCAhZXZlbnQuc3RhdGVbdGhpcy5tb2RhbE5hbWVdKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoeyBtYW51YWxDbG9zZTogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgYnJvd3NlciBiYWNrIGJ1dHRvbiBpcyBwcmVzc2VkIGFuZCB1cHB5IGlzIG5vdyB0aGUgbGF0ZXN0IGVudHJ5IGluIHRoZSBoaXN0b3J5IGJ1dCB0aGUgbW9kYWwgaXMgY2xvc2VkLCBmaXggdGhlIGhpc3RvcnkgYnkgcmVtb3ZpbmcgdGhlIHVwcHkgaGlzdG9yeSBlbnRyeVxuICAgIC8vIFRoaXMgb2NjdXJzIHdoZW4gYW5vdGhlciBlbnRyeSBpcyBhZGRlZCBpbnRvIHRoZSBoaXN0b3J5IHN0YXRlIHdoaWxlIHRoZSBtb2RhbCBpcyBvcGVuLCBhbmQgdGhlbiB0aGUgbW9kYWwgZ2V0cyBtYW51YWxseSBjbG9zZWRcbiAgICAvLyBTb2x2ZXMgUFIgIzU3NSAoaHR0cHM6Ly9naXRodWIuY29tL3RyYW5zbG9hZGl0L3VwcHkvcHVsbC81NzUpXG4gICAgaWYgKCF0aGlzLmlzTW9kYWxPcGVuKCkgJiYgZXZlbnQuc3RhdGUgJiYgZXZlbnQuc3RhdGVbdGhpcy5tb2RhbE5hbWVdKSB7XG4gICAgICBoaXN0b3J5LmdvKC0xKTtcbiAgICB9XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5zZXRGb2N1c1RvQnJvd3NlID0gZnVuY3Rpb24gc2V0Rm9jdXNUb0Jyb3dzZSgpIHtcbiAgICB2YXIgYnJvd3NlQnRuID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcudXBweS1EYXNoYm9hcmQtYnJvd3NlJyk7XG4gICAgaWYgKGJyb3dzZUJ0bikgYnJvd3NlQnRuLmZvY3VzKCk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5tYWludGFpbkZvY3VzID0gZnVuY3Rpb24gbWFpbnRhaW5Gb2N1cyhldmVudCkge1xuICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IHRoaXMuZ2V0Rm9jdXNhYmxlTm9kZXMoKTtcbiAgICB2YXIgZm9jdXNlZEl0ZW1JbmRleCA9IGZvY3VzYWJsZU5vZGVzLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgZm9jdXNhYmxlTm9kZXNbZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKCFldmVudC5zaGlmdEtleSAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSBmb2N1c2FibGVOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICBmb2N1c2FibGVOb2Rlc1swXS5mb2N1cygpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5vcGVuTW9kYWwgPSBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAvLyBzYXZlIHNjcm9sbCBwb3NpdGlvblxuICAgIHRoaXMuc2F2ZWRTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIC8vIHNhdmUgYWN0aXZlIGVsZW1lbnQsIHNvIHdlIGNhbiByZXN0b3JlIGZvY3VzIHdoZW4gbW9kYWwgaXMgY2xvc2VkXG4gICAgdGhpcy5zYXZlZEFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgaWYgKHRoaXMub3B0cy5kaXNhYmxlUGFnZVNjcm9sbFdoZW5Nb2RhbE9wZW4pIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndXBweS1EYXNoYm9hcmQtaXNGaXhlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMuYW5pbWF0ZU9wZW5DbG9zZSAmJiB0aGlzLmdldFBsdWdpblN0YXRlKCkuaXNDbG9zaW5nKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgIF90aGlzMi5zZXRQbHVnaW5TdGF0ZSh7XG4gICAgICAgICAgaXNIaWRkZW46IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpczIuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlciwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFBsdWdpblN0YXRlKHtcbiAgICAgICAgaXNIaWRkZW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLmJyb3dzZXJCYWNrQnV0dG9uQ2xvc2UpIHtcbiAgICAgIHRoaXMudXBkYXRlQnJvd3Nlckhpc3RvcnkoKTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgRVNDIGFuZCBUQUIga2V5cyBpbiBtb2RhbCBkaWFsb2dcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcblxuICAgIC8vIHRoaXMucmVyZW5kZXIodGhpcy51cHB5LmdldFN0YXRlKCkpXG4gICAgdGhpcy5zZXRGb2N1c1RvQnJvd3NlKCk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5jbG9zZU1vZGFsID0gZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgX29wdHMkbWFudWFsQ2xvc2UgPSBvcHRzLm1hbnVhbENsb3NlLFxuICAgICAgICBtYW51YWxDbG9zZSA9IF9vcHRzJG1hbnVhbENsb3NlID09PSB1bmRlZmluZWQgPyB0cnVlIDogX29wdHMkbWFudWFsQ2xvc2U7XG5cblxuICAgIGlmICh0aGlzLm9wdHMuZGlzYWJsZVBhZ2VTY3JvbGxXaGVuTW9kYWxPcGVuKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3VwcHktRGFzaGJvYXJkLWlzRml4ZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLmFuaW1hdGVPcGVuQ2xvc2UpIHtcbiAgICAgIHRoaXMuc2V0UGx1Z2luU3RhdGUoe1xuICAgICAgICBpc0Nsb3Npbmc6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBfdGhpczMuc2V0UGx1Z2luU3RhdGUoe1xuICAgICAgICAgIGlzSGlkZGVuOiB0cnVlLFxuICAgICAgICAgIGlzQ2xvc2luZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzMy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UGx1Z2luU3RhdGUoe1xuICAgICAgICBpc0hpZGRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIEVTQyBhbmQgVEFCIGtleXMgaW4gbW9kYWwgZGlhbG9nXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG5cbiAgICB0aGlzLnNhdmVkQWN0aXZlRWxlbWVudC5mb2N1cygpO1xuXG4gICAgaWYgKG1hbnVhbENsb3NlKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLmJyb3dzZXJCYWNrQnV0dG9uQ2xvc2UpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGxhdGVzdCBlbnRyeSBpbiB0aGUgaGlzdG9yeSBzdGF0ZSBpcyBvdXIgbW9kYWwgbmFtZVxuICAgICAgICBpZiAoaGlzdG9yeS5zdGF0ZSAmJiBoaXN0b3J5LnN0YXRlW3RoaXMubW9kYWxOYW1lXSkge1xuICAgICAgICAgIC8vIEdvIGJhY2sgaW4gaGlzdG9yeSB0byBjbGVhciBvdXQgdGhlIGVudHJ5IHdlIGNyZWF0ZWQgKHVsdGltYXRlbHkgY2xvc2luZyB0aGUgbW9kYWwpXG4gICAgICAgICAgaGlzdG9yeS5nbygtMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5pc01vZGFsT3BlbiA9IGZ1bmN0aW9uIGlzTW9kYWxPcGVuKCkge1xuICAgIHJldHVybiAhdGhpcy5nZXRQbHVnaW5TdGF0ZSgpLmlzSGlkZGVuIHx8IGZhbHNlO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAvLyBjbG9zZSBtb2RhbCBvbiBlc2Mga2V5IHByZXNzXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ19LRVkpIHRoaXMucmVxdWVzdENsb3NlTW9kYWwoZXZlbnQpO1xuICAgIC8vIG1haW50YWluRm9jdXMgb24gdGFiIGtleSBwcmVzc1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBUQUJfS0VZKSB0aGlzLm1haW50YWluRm9jdXMoZXZlbnQpO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUuaGFuZGxlQ2xpY2tPdXRzaWRlID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2tPdXRzaWRlKCkge1xuICAgIGlmICh0aGlzLm9wdHMuY2xvc2VNb2RhbE9uQ2xpY2tPdXRzaWRlKSB0aGlzLnJlcXVlc3RDbG9zZU1vZGFsKCk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5oYW5kbGVQYXN0ZSA9IGZ1bmN0aW9uIGhhbmRsZVBhc3RlKGV2KSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgZmlsZXMgPSB0b0FycmF5KGV2LmNsaXBib2FyZERhdGEuaXRlbXMpO1xuICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIGlmIChmaWxlLmtpbmQgIT09ICdmaWxlJykgcmV0dXJuO1xuXG4gICAgICB2YXIgYmxvYiA9IGZpbGUuZ2V0QXNGaWxlKCk7XG4gICAgICBpZiAoIWJsb2IpIHtcbiAgICAgICAgX3RoaXM0LnVwcHkubG9nKCdbRGFzaGJvYXJkXSBGaWxlIHBhc3RlZCwgYnV0IHRoZSBmaWxlIGJsb2IgaXMgZW1wdHknKTtcbiAgICAgICAgX3RoaXM0LnVwcHkuaW5mbygnRXJyb3IgcGFzdGluZyBmaWxlJywgJ2Vycm9yJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzNC51cHB5LmxvZygnW0Rhc2hib2FyZF0gRmlsZSBwYXN0ZWQnKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIF90aGlzNC51cHB5LmFkZEZpbGUoe1xuICAgICAgICAgIHNvdXJjZTogX3RoaXM0LmlkLFxuICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgZGF0YTogYmxvYlxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBOb3RoaW5nLCByZXN0cmljdGlvbiBlcnJvcnMgaGFuZGxlZCBpbiBDb3JlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5oYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGV2KSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBmaWxlcyA9IHRvQXJyYXkoZXYudGFyZ2V0LmZpbGVzKTtcblxuICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIF90aGlzNS51cHB5LmFkZEZpbGUoe1xuICAgICAgICAgIHNvdXJjZTogX3RoaXM1LmlkLFxuICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgZGF0YTogZmlsZVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBOb3RoaW5nLCByZXN0cmljdGlvbiBlcnJvcnMgaGFuZGxlZCBpbiBDb3JlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5pbml0RXZlbnRzID0gZnVuY3Rpb24gaW5pdEV2ZW50cygpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIC8vIE1vZGFsIG9wZW4gYnV0dG9uXG4gICAgdmFyIHNob3dNb2RhbFRyaWdnZXIgPSBmaW5kQWxsRE9NRWxlbWVudHModGhpcy5vcHRzLnRyaWdnZXIpO1xuICAgIGlmICghdGhpcy5vcHRzLmlubGluZSAmJiBzaG93TW9kYWxUcmlnZ2VyKSB7XG4gICAgICBzaG93TW9kYWxUcmlnZ2VyLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpczYub3Blbk1vZGFsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcHRzLmlubGluZSAmJiAhc2hvd01vZGFsVHJpZ2dlcikge1xuICAgICAgdGhpcy51cHB5LmxvZygnRGFzaGJvYXJkIG1vZGFsIHRyaWdnZXIgbm90IGZvdW5kLiBNYWtlIHN1cmUgYHRyaWdnZXJgIGlzIHNldCBpbiBEYXNoYm9hcmQgb3B0aW9ucyB1bmxlc3MgeW91IGFyZSBwbGFubmluZyB0byBjYWxsIG9wZW5Nb2RhbCgpIG1ldGhvZCB5b3Vyc2VsZicpO1xuICAgIH1cblxuICAgIC8vIERyYWcgRHJvcFxuICAgIHRoaXMucmVtb3ZlRHJhZ0Ryb3BMaXN0ZW5lciA9IGRyYWdEcm9wKHRoaXMuZWwsIGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgX3RoaXM2LmhhbmRsZURyb3AoZmlsZXMpO1xuICAgIH0pO1xuXG4gICAgLy8gV2F0Y2ggZm9yIERhc2hib2FyZCBjb250YWluZXIgKGAudXBweS1EYXNoYm9hcmQtaW5uZXJgKSByZXNpemVcbiAgICAvLyBhbmQgdXBkYXRlIGNvbnRhaW5lcldpZHRoL2NvbnRhaW5lckhlaWdodCBpbiBwbHVnaW4gc3RhdGUgYWNjb3JkaW5nbHlcbiAgICB0aGlzLnJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gZW50cmllcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZW50cnkgPSBfcmVmO1xuICAgICAgICB2YXIgX2VudHJ5JGNvbnRlbnRSZWN0ID0gZW50cnkuY29udGVudFJlY3QsXG4gICAgICAgICAgICB3aWR0aCA9IF9lbnRyeSRjb250ZW50UmVjdC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCA9IF9lbnRyeSRjb250ZW50UmVjdC5oZWlnaHQ7XG5cblxuICAgICAgICBfdGhpczYudXBweS5sb2coJ1tEYXNoYm9hcmRdIHJlc2l6ZWQ6ICcgKyB3aWR0aCArICcgLyAnICsgaGVpZ2h0KTtcblxuICAgICAgICBfdGhpczYuc2V0UGx1Z2luU3RhdGUoe1xuICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiB3aWR0aCxcbiAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IGhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJvLm9ic2VydmUodGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcudXBweS1EYXNoYm9hcmQtaW5uZXInKSk7XG5cbiAgICB0aGlzLnVwcHkub24oJ3BsdWdpbi1yZW1vdmUnLCB0aGlzLnJlbW92ZVRhcmdldCk7XG4gICAgdGhpcy51cHB5Lm9uKCdmaWxlLWFkZGVkJywgdGhpcy5oYW5kbGVGaWxlQWRkZWQpO1xuICAgIHRoaXMudXBweS5vbignY29tcGxldGUnLCB0aGlzLmhhbmRsZUNvbXBsZXRlKTtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLmhhbmRsZUZpbGVBZGRlZCA9IGZ1bmN0aW9uIGhhbmRsZUZpbGVBZGRlZCgpIHtcbiAgICB0aGlzLmhpZGVBbGxQYW5lbHMoKTtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLmhhbmRsZUNvbXBsZXRlID0gZnVuY3Rpb24gaGFuZGxlQ29tcGxldGUoX3JlZjIpIHtcbiAgICB2YXIgZmFpbGVkID0gX3JlZjIuZmFpbGVkLFxuICAgICAgICB1cGxvYWRJRCA9IF9yZWYyLnVwbG9hZElEO1xuXG4gICAgaWYgKHRoaXMub3B0cy5jbG9zZUFmdGVyRmluaXNoICYmIGZhaWxlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIEFsbCB1cGxvYWRzIGFyZSBkb25lXG4gICAgICB0aGlzLnJlcXVlc3RDbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUucmVtb3ZlRXZlbnRzID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgdmFyIHNob3dNb2RhbFRyaWdnZXIgPSBmaW5kQWxsRE9NRWxlbWVudHModGhpcy5vcHRzLnRyaWdnZXIpO1xuICAgIGlmICghdGhpcy5vcHRzLmlubGluZSAmJiBzaG93TW9kYWxUcmlnZ2VyKSB7XG4gICAgICBzaG93TW9kYWxUcmlnZ2VyLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpczcub3Blbk1vZGFsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMucm8udW5vYnNlcnZlKHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnVwcHktRGFzaGJvYXJkLWlubmVyJykpO1xuXG4gICAgdGhpcy5yZW1vdmVEcmFnRHJvcExpc3RlbmVyKCk7XG4gICAgLy8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudGhyb3R0bGVkVXBkYXRlRGFzaGJvYXJkRWxXaWR0aClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmhhbmRsZVBvcFN0YXRlLCBmYWxzZSk7XG4gICAgdGhpcy51cHB5Lm9mZigncGx1Z2luLXJlbW92ZScsIHRoaXMucmVtb3ZlVGFyZ2V0KTtcbiAgICB0aGlzLnVwcHkub2ZmKCdmaWxlLWFkZGVkJywgdGhpcy5oYW5kbGVGaWxlQWRkZWQpO1xuICAgIHRoaXMudXBweS5vZmYoJ2NvbXBsZXRlJywgdGhpcy5oYW5kbGVDb21wbGV0ZSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS50b2dnbGVGaWxlQ2FyZCA9IGZ1bmN0aW9uIHRvZ2dsZUZpbGVDYXJkKGZpbGVJZCkge1xuICAgIHRoaXMuc2V0UGx1Z2luU3RhdGUoe1xuICAgICAgZmlsZUNhcmRGb3I6IGZpbGVJZCB8fCBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUudG9nZ2xlQWRkRmlsZXNQYW5lbCA9IGZ1bmN0aW9uIHRvZ2dsZUFkZEZpbGVzUGFuZWwoc2hvdykge1xuICAgIHRoaXMuc2V0UGx1Z2luU3RhdGUoe1xuICAgICAgc2hvd0FkZEZpbGVzUGFuZWw6IHNob3dcbiAgICB9KTtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLmhhbmRsZURyb3AgPSBmdW5jdGlvbiBoYW5kbGVEcm9wKGZpbGVzKSB7XG4gICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICB0aGlzLnVwcHkubG9nKCdbRGFzaGJvYXJkXSBGaWxlcyB3ZXJlIGRyb3BwZWQnKTtcblxuICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIF90aGlzOC51cHB5LmFkZEZpbGUoe1xuICAgICAgICAgIHNvdXJjZTogX3RoaXM4LmlkLFxuICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgZGF0YTogZmlsZVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBOb3RoaW5nLCByZXN0cmljdGlvbiBlcnJvcnMgaGFuZGxlZCBpbiBDb3JlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoc3RhdGUpIHtcbiAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgIHZhciBwbHVnaW5TdGF0ZSA9IHRoaXMuZ2V0UGx1Z2luU3RhdGUoKTtcbiAgICB2YXIgZmlsZXMgPSBzdGF0ZS5maWxlcyxcbiAgICAgICAgY2FwYWJpbGl0aWVzID0gc3RhdGUuY2FwYWJpbGl0aWVzLFxuICAgICAgICBhbGxvd05ld1VwbG9hZCA9IHN0YXRlLmFsbG93TmV3VXBsb2FkO1xuXG4gICAgLy8gVE9ETzogbW92ZSB0aGlzIHRvIENvcmUsIHRvIHNoYXJlIGJldHdlZW4gU3RhdHVzIEJhciBhbmQgRGFzaGJvYXJkXG4gICAgLy8gKGFuZCBhbnkgb3RoZXIgcGx1Z2luIHRoYXQgbWlnaHQgbmVlZCBpdCwgdG9vKVxuXG4gICAgdmFyIG5ld0ZpbGVzID0gT2JqZWN0LmtleXMoZmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuICFmaWxlc1tmaWxlXS5wcm9ncmVzcy51cGxvYWRTdGFydGVkO1xuICAgIH0pO1xuXG4gICAgdmFyIHVwbG9hZFN0YXJ0ZWRGaWxlcyA9IE9iamVjdC5rZXlzKGZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlc1tmaWxlXS5wcm9ncmVzcy51cGxvYWRTdGFydGVkO1xuICAgIH0pO1xuXG4gICAgdmFyIHBhdXNlZEZpbGVzID0gT2JqZWN0LmtleXMoZmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuIGZpbGVzW2ZpbGVdLmlzUGF1c2VkO1xuICAgIH0pO1xuXG4gICAgdmFyIGNvbXBsZXRlRmlsZXMgPSBPYmplY3Qua2V5cyhmaWxlcykuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gZmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkQ29tcGxldGU7XG4gICAgfSk7XG5cbiAgICB2YXIgZXJyb3JlZEZpbGVzID0gT2JqZWN0LmtleXMoZmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuIGZpbGVzW2ZpbGVdLmVycm9yO1xuICAgIH0pO1xuXG4gICAgdmFyIGluUHJvZ3Jlc3NGaWxlcyA9IE9iamVjdC5rZXlzKGZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiAhZmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkQ29tcGxldGUgJiYgZmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkU3RhcnRlZDtcbiAgICB9KTtcblxuICAgIHZhciBpblByb2dyZXNzTm90UGF1c2VkRmlsZXMgPSBpblByb2dyZXNzRmlsZXMuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gIWZpbGVzW2ZpbGVdLmlzUGF1c2VkO1xuICAgIH0pO1xuXG4gICAgdmFyIHByb2Nlc3NpbmdGaWxlcyA9IE9iamVjdC5rZXlzKGZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlc1tmaWxlXS5wcm9ncmVzcy5wcmVwcm9jZXNzIHx8IGZpbGVzW2ZpbGVdLnByb2dyZXNzLnBvc3Rwcm9jZXNzO1xuICAgIH0pO1xuXG4gICAgdmFyIGlzVXBsb2FkU3RhcnRlZCA9IHVwbG9hZFN0YXJ0ZWRGaWxlcy5sZW5ndGggPiAwO1xuXG4gICAgdmFyIGlzQWxsQ29tcGxldGUgPSBzdGF0ZS50b3RhbFByb2dyZXNzID09PSAxMDAgJiYgY29tcGxldGVGaWxlcy5sZW5ndGggPT09IE9iamVjdC5rZXlzKGZpbGVzKS5sZW5ndGggJiYgcHJvY2Vzc2luZ0ZpbGVzLmxlbmd0aCA9PT0gMDtcblxuICAgIHZhciBpc0FsbEVycm9yZWQgPSBpc1VwbG9hZFN0YXJ0ZWQgJiYgZXJyb3JlZEZpbGVzLmxlbmd0aCA9PT0gdXBsb2FkU3RhcnRlZEZpbGVzLmxlbmd0aDtcblxuICAgIHZhciBpc0FsbFBhdXNlZCA9IGluUHJvZ3Jlc3NGaWxlcy5sZW5ndGggIT09IDAgJiYgcGF1c2VkRmlsZXMubGVuZ3RoID09PSBpblByb2dyZXNzRmlsZXMubGVuZ3RoO1xuICAgIC8vIGNvbnN0IGlzQWxsUGF1c2VkID0gaW5Qcm9ncmVzc05vdFBhdXNlZEZpbGVzLmxlbmd0aCA9PT0gMCAmJlxuICAgIC8vICAgIWlzQWxsQ29tcGxldGUgJiZcbiAgICAvLyAgICFpc0FsbEVycm9yZWQgJiZcbiAgICAvLyAgIHVwbG9hZFN0YXJ0ZWRGaWxlcy5sZW5ndGggPiAwXG5cbiAgICAvLyBsZXQgaW5Qcm9ncmVzc05vdFBhdXNlZEZpbGVzQXJyYXkgPSBbXVxuICAgIC8vIGluUHJvZ3Jlc3NOb3RQYXVzZWRGaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgLy8gICBpblByb2dyZXNzTm90UGF1c2VkRmlsZXNBcnJheS5wdXNoKGZpbGVzW2ZpbGVdKVxuICAgIC8vIH0pXG5cbiAgICAvLyBsZXQgdG90YWxTaXplID0gMFxuICAgIC8vIGxldCB0b3RhbFVwbG9hZGVkU2l6ZSA9IDBcbiAgICAvLyBpblByb2dyZXNzTm90UGF1c2VkRmlsZXNBcnJheS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgLy8gICB0b3RhbFNpemUgPSB0b3RhbFNpemUgKyAoZmlsZS5wcm9ncmVzcy5ieXRlc1RvdGFsIHx8IDApXG4gICAgLy8gICB0b3RhbFVwbG9hZGVkU2l6ZSA9IHRvdGFsVXBsb2FkZWRTaXplICsgKGZpbGUucHJvZ3Jlc3MuYnl0ZXNVcGxvYWRlZCB8fCAwKVxuICAgIC8vIH0pXG4gICAgLy8gdG90YWxTaXplID0gcHJldHR5Qnl0ZXModG90YWxTaXplKVxuICAgIC8vIHRvdGFsVXBsb2FkZWRTaXplID0gcHJldHR5Qnl0ZXModG90YWxVcGxvYWRlZFNpemUpXG5cbiAgICB2YXIgYXR0YWNoUmVuZGVyRnVuY3Rpb25Ub1RhcmdldCA9IGZ1bmN0aW9uIGF0dGFjaFJlbmRlckZ1bmN0aW9uVG9UYXJnZXQodGFyZ2V0KSB7XG4gICAgICB2YXIgcGx1Z2luID0gX3RoaXM5LnVwcHkuZ2V0UGx1Z2luKHRhcmdldC5pZCk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRhcmdldCwge1xuICAgICAgICBpY29uOiBwbHVnaW4uaWNvbiB8fCBfdGhpczkub3B0cy5kZWZhdWx0VGFiSWNvbixcbiAgICAgICAgcmVuZGVyOiBwbHVnaW4ucmVuZGVyXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGlzU3VwcG9ydGVkID0gZnVuY3Rpb24gaXNTdXBwb3J0ZWQodGFyZ2V0KSB7XG4gICAgICB2YXIgcGx1Z2luID0gX3RoaXM5LnVwcHkuZ2V0UGx1Z2luKHRhcmdldC5pZCk7XG4gICAgICAvLyBJZiB0aGUgcGx1Z2luIGRvZXMgbm90IHByb3ZpZGUgYSBgc3VwcG9ydGVkYCBjaGVjaywgYXNzdW1lIHRoZSBwbHVnaW4gd29ya3MgZXZlcnl3aGVyZS5cbiAgICAgIGlmICh0eXBlb2YgcGx1Z2luLmlzU3VwcG9ydGVkICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBsdWdpbi5pc1N1cHBvcnRlZCgpO1xuICAgIH07XG5cbiAgICB2YXIgYWNxdWlyZXJzID0gcGx1Z2luU3RhdGUudGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgcmV0dXJuIHRhcmdldC50eXBlID09PSAnYWNxdWlyZXInICYmIGlzU3VwcG9ydGVkKHRhcmdldCk7XG4gICAgfSkubWFwKGF0dGFjaFJlbmRlckZ1bmN0aW9uVG9UYXJnZXQpO1xuXG4gICAgdmFyIHByb2dyZXNzaW5kaWNhdG9ycyA9IHBsdWdpblN0YXRlLnRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHJldHVybiB0YXJnZXQudHlwZSA9PT0gJ3Byb2dyZXNzaW5kaWNhdG9yJztcbiAgICB9KS5tYXAoYXR0YWNoUmVuZGVyRnVuY3Rpb25Ub1RhcmdldCk7XG5cbiAgICB2YXIgc3RhcnRVcGxvYWQgPSBmdW5jdGlvbiBzdGFydFVwbG9hZChldikge1xuICAgICAgX3RoaXM5LnVwcHkudXBsb2FkKCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAvLyBMb2cgZXJyb3IuXG4gICAgICAgIF90aGlzOS51cHB5LmxvZyhlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgY2FuY2VsVXBsb2FkID0gZnVuY3Rpb24gY2FuY2VsVXBsb2FkKGZpbGVJRCkge1xuICAgICAgX3RoaXM5LnVwcHkucmVtb3ZlRmlsZShmaWxlSUQpO1xuICAgIH07XG5cbiAgICB2YXIgc2F2ZUZpbGVDYXJkID0gZnVuY3Rpb24gc2F2ZUZpbGVDYXJkKG1ldGEsIGZpbGVJRCkge1xuICAgICAgX3RoaXM5LnVwcHkuc2V0RmlsZU1ldGEoZmlsZUlELCBtZXRhKTtcbiAgICAgIF90aGlzOS50b2dnbGVGaWxlQ2FyZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGFzaGJvYXJkVUkoe1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgbW9kYWw6IHBsdWdpblN0YXRlLFxuICAgICAgZmlsZXM6IGZpbGVzLFxuICAgICAgbmV3RmlsZXM6IG5ld0ZpbGVzLFxuICAgICAgdXBsb2FkU3RhcnRlZEZpbGVzOiB1cGxvYWRTdGFydGVkRmlsZXMsXG4gICAgICBjb21wbGV0ZUZpbGVzOiBjb21wbGV0ZUZpbGVzLFxuICAgICAgZXJyb3JlZEZpbGVzOiBlcnJvcmVkRmlsZXMsXG4gICAgICBpblByb2dyZXNzRmlsZXM6IGluUHJvZ3Jlc3NGaWxlcyxcbiAgICAgIGluUHJvZ3Jlc3NOb3RQYXVzZWRGaWxlczogaW5Qcm9ncmVzc05vdFBhdXNlZEZpbGVzLFxuICAgICAgcHJvY2Vzc2luZ0ZpbGVzOiBwcm9jZXNzaW5nRmlsZXMsXG4gICAgICBpc1VwbG9hZFN0YXJ0ZWQ6IGlzVXBsb2FkU3RhcnRlZCxcbiAgICAgIGlzQWxsQ29tcGxldGU6IGlzQWxsQ29tcGxldGUsXG4gICAgICBpc0FsbEVycm9yZWQ6IGlzQWxsRXJyb3JlZCxcbiAgICAgIGlzQWxsUGF1c2VkOiBpc0FsbFBhdXNlZCxcbiAgICAgIHRvdGFsRmlsZUNvdW50OiBPYmplY3Qua2V5cyhmaWxlcykubGVuZ3RoLFxuICAgICAgdG90YWxQcm9ncmVzczogc3RhdGUudG90YWxQcm9ncmVzcyxcbiAgICAgIGFsbG93TmV3VXBsb2FkOiBhbGxvd05ld1VwbG9hZCxcbiAgICAgIGFjcXVpcmVyczogYWNxdWlyZXJzLFxuICAgICAgYWN0aXZlUGFuZWw6IHBsdWdpblN0YXRlLmFjdGl2ZVBhbmVsLFxuICAgICAgYW5pbWF0ZU9wZW5DbG9zZTogdGhpcy5vcHRzLmFuaW1hdGVPcGVuQ2xvc2UsXG4gICAgICBpc0Nsb3Npbmc6IHBsdWdpblN0YXRlLmlzQ2xvc2luZyxcbiAgICAgIGdldFBsdWdpbjogdGhpcy51cHB5LmdldFBsdWdpbixcbiAgICAgIHByb2dyZXNzaW5kaWNhdG9yczogcHJvZ3Jlc3NpbmRpY2F0b3JzLFxuICAgICAgYXV0b1Byb2NlZWQ6IHRoaXMudXBweS5vcHRzLmF1dG9Qcm9jZWVkLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBjbG9zZU1vZGFsOiB0aGlzLnJlcXVlc3RDbG9zZU1vZGFsLFxuICAgICAgaGFuZGxlQ2xpY2tPdXRzaWRlOiB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSxcbiAgICAgIGhhbmRsZUlucHV0Q2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgaGFuZGxlUGFzdGU6IHRoaXMuaGFuZGxlUGFzdGUsXG4gICAgICBpbmxpbmU6IHRoaXMub3B0cy5pbmxpbmUsXG4gICAgICBzaG93UGFuZWw6IHRoaXMuc2hvd1BhbmVsLFxuICAgICAgaGlkZUFsbFBhbmVsczogdGhpcy5oaWRlQWxsUGFuZWxzLFxuICAgICAgbG9nOiB0aGlzLnVwcHkubG9nLFxuICAgICAgaTE4bjogdGhpcy5pMThuLFxuICAgICAgaTE4bkFycmF5OiB0aGlzLmkxOG5BcnJheSxcbiAgICAgIGFkZEZpbGU6IHRoaXMudXBweS5hZGRGaWxlLFxuICAgICAgcmVtb3ZlRmlsZTogdGhpcy51cHB5LnJlbW92ZUZpbGUsXG4gICAgICBpbmZvOiB0aGlzLnVwcHkuaW5mbyxcbiAgICAgIG5vdGU6IHRoaXMub3B0cy5ub3RlLFxuICAgICAgbWV0YUZpZWxkczogcGx1Z2luU3RhdGUubWV0YUZpZWxkcyxcbiAgICAgIHJlc3VtYWJsZVVwbG9hZHM6IGNhcGFiaWxpdGllcy5yZXN1bWFibGVVcGxvYWRzIHx8IGZhbHNlLFxuICAgICAgYnVuZGxlZDogY2FwYWJpbGl0aWVzLmJ1bmRsZWQgfHwgZmFsc2UsXG4gICAgICBzdGFydFVwbG9hZDogc3RhcnRVcGxvYWQsXG4gICAgICBwYXVzZVVwbG9hZDogdGhpcy51cHB5LnBhdXNlUmVzdW1lLFxuICAgICAgcmV0cnlVcGxvYWQ6IHRoaXMudXBweS5yZXRyeVVwbG9hZCxcbiAgICAgIGNhbmNlbFVwbG9hZDogY2FuY2VsVXBsb2FkLFxuICAgICAgY2FuY2VsQWxsOiB0aGlzLnVwcHkuY2FuY2VsQWxsLFxuICAgICAgZmlsZUNhcmRGb3I6IHBsdWdpblN0YXRlLmZpbGVDYXJkRm9yLFxuICAgICAgdG9nZ2xlRmlsZUNhcmQ6IHRoaXMudG9nZ2xlRmlsZUNhcmQsXG4gICAgICB0b2dnbGVBZGRGaWxlc1BhbmVsOiB0aGlzLnRvZ2dsZUFkZEZpbGVzUGFuZWwsXG4gICAgICBzaG93QWRkRmlsZXNQYW5lbDogcGx1Z2luU3RhdGUuc2hvd0FkZEZpbGVzUGFuZWwsXG4gICAgICBzYXZlRmlsZUNhcmQ6IHNhdmVGaWxlQ2FyZCxcbiAgICAgIHdpZHRoOiB0aGlzLm9wdHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMub3B0cy5oZWlnaHQsXG4gICAgICBzaG93TGlua1RvRmlsZVVwbG9hZFJlc3VsdDogdGhpcy5vcHRzLnNob3dMaW5rVG9GaWxlVXBsb2FkUmVzdWx0LFxuICAgICAgcHJvdWRseURpc3BsYXlQb3dlcmVkQnlVcHB5OiB0aGlzLm9wdHMucHJvdWRseURpc3BsYXlQb3dlcmVkQnlVcHB5LFxuICAgICAgY3VycmVudFdpZHRoOiBwbHVnaW5TdGF0ZS5jb250YWluZXJXaWR0aCxcbiAgICAgIGlzV2lkZTogcGx1Z2luU3RhdGUuY29udGFpbmVyV2lkdGggPiA0MDAsXG4gICAgICBjb250YWluZXJXaWR0aDogcGx1Z2luU3RhdGUuY29udGFpbmVyV2lkdGgsXG4gICAgICBpc1RhcmdldERPTUVsOiB0aGlzLmlzVGFyZ2V0RE9NRWwsXG4gICAgICBhbGxvd2VkRmlsZVR5cGVzOiB0aGlzLnVwcHkub3B0cy5yZXN0cmljdGlvbnMuYWxsb3dlZEZpbGVUeXBlcyxcbiAgICAgIG1heE51bWJlck9mRmlsZXM6IHRoaXMudXBweS5vcHRzLnJlc3RyaWN0aW9ucy5tYXhOdW1iZXJPZkZpbGVzLFxuICAgICAgc2hvd1NlbGVjdGVkRmlsZXM6IHRoaXMub3B0cy5zaG93U2VsZWN0ZWRGaWxlc1xuICAgIH0pO1xuICB9O1xuXG4gIERhc2hib2FyZC5wcm90b3R5cGUuZGlzY292ZXJQcm92aWRlclBsdWdpbnMgPSBmdW5jdGlvbiBkaXNjb3ZlclByb3ZpZGVyUGx1Z2lucygpIHtcbiAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICB0aGlzLnVwcHkuaXRlcmF0ZVBsdWdpbnMoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgaWYgKHBsdWdpbiAmJiAhcGx1Z2luLnRhcmdldCAmJiBwbHVnaW4ub3B0cyAmJiBwbHVnaW4ub3B0cy50YXJnZXQgPT09IF90aGlzMTAuY29uc3RydWN0b3IpIHtcbiAgICAgICAgX3RoaXMxMC5hZGRUYXJnZXQocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBEYXNoYm9hcmQucHJvdG90eXBlLmluc3RhbGwgPSBmdW5jdGlvbiBpbnN0YWxsKCkge1xuICAgIHZhciBfdGhpczExID0gdGhpcztcblxuICAgIC8vIFNldCBkZWZhdWx0IHN0YXRlIGZvciBEYXNoYm9hcmRcbiAgICB0aGlzLnNldFBsdWdpblN0YXRlKHtcbiAgICAgIGlzSGlkZGVuOiB0cnVlLFxuICAgICAgc2hvd0ZpbGVDYXJkOiBmYWxzZSxcbiAgICAgIHNob3dBZGRGaWxlc1BhbmVsOiBmYWxzZSxcbiAgICAgIGFjdGl2ZVBhbmVsOiBmYWxzZSxcbiAgICAgIG1ldGFGaWVsZHM6IHRoaXMub3B0cy5tZXRhRmllbGRzLFxuICAgICAgdGFyZ2V0czogW11cbiAgICB9KTtcblxuICAgIHZhciBfb3B0cyA9IHRoaXMub3B0cyxcbiAgICAgICAgaW5saW5lID0gX29wdHMuaW5saW5lLFxuICAgICAgICBjbG9zZUFmdGVyRmluaXNoID0gX29wdHMuY2xvc2VBZnRlckZpbmlzaDtcblxuICAgIGlmIChpbmxpbmUgJiYgY2xvc2VBZnRlckZpbmlzaCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbRGFzaGJvYXJkXSBgY2xvc2VBZnRlckZpbmlzaDogdHJ1ZWAgY2Fubm90IGJlIHVzZWQgb24gYW4gaW5saW5lIERhc2hib2FyZCwgYmVjYXVzZSBhbiBpbmxpbmUgRGFzaGJvYXJkIGNhbm5vdCBiZSBjbG9zZWQgYXQgYWxsLiBFaXRoZXIgc2V0IGBpbmxpbmU6IGZhbHNlYCwgb3IgZGlzYWJsZSB0aGUgYGNsb3NlQWZ0ZXJGaW5pc2hgIG9wdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgYWxsb3dNdWx0aXBsZVVwbG9hZHMgPSB0aGlzLnVwcHkub3B0cy5hbGxvd011bHRpcGxlVXBsb2FkcztcblxuICAgIGlmIChhbGxvd011bHRpcGxlVXBsb2FkcyAmJiBjbG9zZUFmdGVyRmluaXNoKSB7XG4gICAgICB0aGlzLnVwcHkubG9nKCdbRGFzaGJvYXJkXSBXaGVuIHVzaW5nIGBjbG9zZUFmdGVyRmluaXNoYCwgd2UgcmVjb21tZW5kZWQgc2V0dGluZyB0aGUgYGFsbG93TXVsdGlwbGVVcGxvYWRzYCBvcHRpb24gdG8gYGZhbHNlYCBpbiB0aGUgVXBweSBjb25zdHJ1Y3Rvci4gU2VlIGh0dHBzOi8vdXBweS5pby9kb2NzL3VwcHkvI2FsbG93TXVsdGlwbGVVcGxvYWRzLXRydWUnLCAnd2FybmluZycpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXQgPSB0aGlzLm9wdHMudGFyZ2V0O1xuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy5tb3VudCh0YXJnZXQsIHRoaXMpO1xuICAgIH1cblxuICAgIHZhciBwbHVnaW5zID0gdGhpcy5vcHRzLnBsdWdpbnMgfHwgW107XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW5JRCkge1xuICAgICAgdmFyIHBsdWdpbiA9IF90aGlzMTEudXBweS5nZXRQbHVnaW4ocGx1Z2luSUQpO1xuICAgICAgaWYgKHBsdWdpbikge1xuICAgICAgICBwbHVnaW4ubW91bnQoX3RoaXMxMSwgcGx1Z2luKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5vcHRzLmRpc2FibGVTdGF0dXNCYXIpIHtcbiAgICAgIHRoaXMudXBweS51c2UoU3RhdHVzQmFyLCB7XG4gICAgICAgIGlkOiB0aGlzLmlkICsgJzpTdGF0dXNCYXInLFxuICAgICAgICB0YXJnZXQ6IHRoaXMsXG4gICAgICAgIGhpZGVVcGxvYWRCdXR0b246IHRoaXMub3B0cy5oaWRlVXBsb2FkQnV0dG9uLFxuICAgICAgICBoaWRlUmV0cnlCdXR0b246IHRoaXMub3B0cy5oaWRlUmV0cnlCdXR0b24sXG4gICAgICAgIGhpZGVQYXVzZVJlc3VtZUJ1dHRvbjogdGhpcy5vcHRzLmhpZGVQYXVzZVJlc3VtZUJ1dHRvbixcbiAgICAgICAgaGlkZUNhbmNlbEJ1dHRvbjogdGhpcy5vcHRzLmhpZGVDYW5jZWxCdXR0b24sXG4gICAgICAgIHNob3dQcm9ncmVzc0RldGFpbHM6IHRoaXMub3B0cy5zaG93UHJvZ3Jlc3NEZXRhaWxzLFxuICAgICAgICBoaWRlQWZ0ZXJGaW5pc2g6IHRoaXMub3B0cy5oaWRlUHJvZ3Jlc3NBZnRlckZpbmlzaCxcbiAgICAgICAgbG9jYWxlOiB0aGlzLm9wdHMubG9jYWxlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0cy5kaXNhYmxlSW5mb3JtZXIpIHtcbiAgICAgIHRoaXMudXBweS51c2UoSW5mb3JtZXIsIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQgKyAnOkluZm9ybWVyJyxcbiAgICAgICAgdGFyZ2V0OiB0aGlzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0cy5kaXNhYmxlVGh1bWJuYWlsR2VuZXJhdG9yKSB7XG4gICAgICB0aGlzLnVwcHkudXNlKFRodW1ibmFpbEdlbmVyYXRvciwge1xuICAgICAgICBpZDogdGhpcy5pZCArICc6VGh1bWJuYWlsR2VuZXJhdG9yJyxcbiAgICAgICAgdGh1bWJuYWlsV2lkdGg6IHRoaXMub3B0cy50aHVtYm5haWxXaWR0aFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNjb3ZlclByb3ZpZGVyUGx1Z2lucygpO1xuXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gIH07XG5cbiAgRGFzaGJvYXJkLnByb3RvdHlwZS51bmluc3RhbGwgPSBmdW5jdGlvbiB1bmluc3RhbGwoKSB7XG4gICAgdmFyIF90aGlzMTIgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLm9wdHMuZGlzYWJsZUluZm9ybWVyKSB7XG4gICAgICB2YXIgaW5mb3JtZXIgPSB0aGlzLnVwcHkuZ2V0UGx1Z2luKHRoaXMuaWQgKyAnOkluZm9ybWVyJyk7XG4gICAgICAvLyBDaGVja2luZyBpZiB0aGlzIHBsdWdpbiBleGlzdHMsIGluIGNhc2UgaXQgd2FzIHJlbW92ZWQgYnkgdXBweS1jb3JlXG4gICAgICAvLyBiZWZvcmUgdGhlIERhc2hib2FyZCB3YXMuXG4gICAgICBpZiAoaW5mb3JtZXIpIHRoaXMudXBweS5yZW1vdmVQbHVnaW4oaW5mb3JtZXIpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcHRzLmRpc2FibGVTdGF0dXNCYXIpIHtcbiAgICAgIHZhciBzdGF0dXNCYXIgPSB0aGlzLnVwcHkuZ2V0UGx1Z2luKHRoaXMuaWQgKyAnOlN0YXR1c0JhcicpO1xuICAgICAgaWYgKHN0YXR1c0JhcikgdGhpcy51cHB5LnJlbW92ZVBsdWdpbihzdGF0dXNCYXIpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcHRzLmRpc2FibGVUaHVtYm5haWxHZW5lcmF0b3IpIHtcbiAgICAgIHZhciB0aHVtYm5haWwgPSB0aGlzLnVwcHkuZ2V0UGx1Z2luKHRoaXMuaWQgKyAnOlRodW1ibmFpbEdlbmVyYXRvcicpO1xuICAgICAgaWYgKHRodW1ibmFpbCkgdGhpcy51cHB5LnJlbW92ZVBsdWdpbih0aHVtYm5haWwpO1xuICAgIH1cblxuICAgIHZhciBwbHVnaW5zID0gdGhpcy5vcHRzLnBsdWdpbnMgfHwgW107XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW5JRCkge1xuICAgICAgdmFyIHBsdWdpbiA9IF90aGlzMTIudXBweS5nZXRQbHVnaW4ocGx1Z2luSUQpO1xuICAgICAgaWYgKHBsdWdpbikgcGx1Z2luLnVubW91bnQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMudW5tb3VudCgpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRzKCk7XG4gIH07XG5cbiAgcmV0dXJuIERhc2hib2FyZDtcbn0oUGx1Z2luKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGRyYWdEcm9wXG5cbnZhciBmbGF0dGVuID0gcmVxdWlyZSgnZmxhdHRlbicpXG52YXIgcGFyYWxsZWwgPSByZXF1aXJlKCdydW4tcGFyYWxsZWwnKVxuXG5mdW5jdGlvbiBkcmFnRHJvcCAoZWxlbSwgbGlzdGVuZXJzKSB7XG4gIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgc2VsZWN0b3IgPSBlbGVtXG4gICAgZWxlbSA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pXG4gICAgaWYgKCFlbGVtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIHNlbGVjdG9yICsgJ1wiIGRvZXMgbm90IG1hdGNoIGFueSBIVE1MIGVsZW1lbnRzJylcbiAgICB9XG4gIH1cblxuICBpZiAoIWVsZW0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGVsZW0gKyAnXCIgaXMgbm90IGEgdmFsaWQgSFRNTCBlbGVtZW50JylcbiAgfVxuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGlzdGVuZXJzID0geyBvbkRyb3A6IGxpc3RlbmVycyB9XG4gIH1cblxuICB2YXIgdGltZW91dFxuXG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgb25EcmFnRW50ZXIsIGZhbHNlKVxuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnT3ZlciwgZmFsc2UpXG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgb25EcmFnTGVhdmUsIGZhbHNlKVxuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKVxuXG4gIC8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBkcmFnLWRyb3AgbGlzdGVuZXJzXG4gIHJldHVybiBmdW5jdGlvbiByZW1vdmUgKCkge1xuICAgIHJlbW92ZURyYWdDbGFzcygpXG4gICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBvbkRyYWdFbnRlciwgZmFsc2UpXG4gICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZ092ZXIsIGZhbHNlKVxuICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgb25EcmFnTGVhdmUsIGZhbHNlKVxuICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdFbnRlciAoZSkge1xuICAgIGlmIChsaXN0ZW5lcnMub25EcmFnRW50ZXIpIHtcbiAgICAgIGxpc3RlbmVycy5vbkRyYWdFbnRlcihlKVxuICAgIH1cblxuICAgIC8vIFByZXZlbnQgZXZlbnRcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdPdmVyIChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5pdGVtcykge1xuICAgICAgLy8gT25seSBhZGQgXCJkcmFnXCIgY2xhc3Mgd2hlbiBgaXRlbXNgIGNvbnRhaW5zIGl0ZW1zIHRoYXQgYXJlIGFibGUgdG8gYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgdGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzIChmaWxlcyB2cy4gdGV4dClcbiAgICAgIHZhciBpdGVtcyA9IHRvQXJyYXkoZS5kYXRhVHJhbnNmZXIuaXRlbXMpXG4gICAgICB2YXIgZmlsZUl0ZW1zID0gaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmtpbmQgPT09ICdmaWxlJyB9KVxuICAgICAgdmFyIHRleHRJdGVtcyA9IGl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5raW5kID09PSAnc3RyaW5nJyB9KVxuXG4gICAgICBpZiAoZmlsZUl0ZW1zLmxlbmd0aCA9PT0gMCAmJiAhbGlzdGVuZXJzLm9uRHJvcFRleHQpIHJldHVyblxuICAgICAgaWYgKHRleHRJdGVtcy5sZW5ndGggPT09IDAgJiYgIWxpc3RlbmVycy5vbkRyb3ApIHJldHVyblxuICAgICAgaWYgKGZpbGVJdGVtcy5sZW5ndGggPT09IDAgJiYgdGV4dEl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgfVxuXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdkcmFnJylcbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcblxuICAgIGlmIChsaXN0ZW5lcnMub25EcmFnT3Zlcikge1xuICAgICAgbGlzdGVuZXJzLm9uRHJhZ092ZXIoZSlcbiAgICB9XG5cbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdMZWF2ZSAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChsaXN0ZW5lcnMub25EcmFnTGVhdmUpIHtcbiAgICAgIGxpc3RlbmVycy5vbkRyYWdMZWF2ZShlKVxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlbW92ZURyYWdDbGFzcywgNTApXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcCAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChsaXN0ZW5lcnMub25EcmFnTGVhdmUpIHtcbiAgICAgIGxpc3RlbmVycy5vbkRyYWdMZWF2ZShlKVxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIHJlbW92ZURyYWdDbGFzcygpXG5cbiAgICB2YXIgcG9zID0ge1xuICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgeTogZS5jbGllbnRZXG4gICAgfVxuXG4gICAgLy8gdGV4dCBkcm9wIHN1cHBvcnRcbiAgICB2YXIgdGV4dCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKVxuICAgIGlmICh0ZXh0ICYmIGxpc3RlbmVycy5vbkRyb3BUZXh0KSB7XG4gICAgICBsaXN0ZW5lcnMub25Ecm9wVGV4dCh0ZXh0LCBwb3MpXG4gICAgfVxuXG4gICAgLy8gZmlsZSBkcm9wIHN1cHBvcnRcbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcbiAgICAgIC8vIEhhbmRsZSBkaXJlY3RvcmllcyBpbiBDaHJvbWUgdXNpbmcgdGhlIHByb3ByaWV0YXJ5IEZpbGVTeXN0ZW0gQVBJXG4gICAgICB2YXIgaXRlbXMgPSB0b0FycmF5KGUuZGF0YVRyYW5zZmVyLml0ZW1zKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ua2luZCA9PT0gJ2ZpbGUnXG4gICAgICB9KVxuXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgICAgcGFyYWxsZWwoaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICBwcm9jZXNzRW50cnkoaXRlbS53ZWJraXRHZXRBc0VudHJ5KCksIGNiKVxuICAgICAgICB9XG4gICAgICB9KSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAvLyBUaGlzIGNhdGNoZXMgcGVybWlzc2lvbiBlcnJvcnMgd2l0aCBmaWxlOi8vIGluIENocm9tZS4gVGhpcyBzaG91bGQgbmV2ZXJcbiAgICAgICAgLy8gdGhyb3cgaW4gcHJvZHVjdGlvbiBjb2RlLCBzbyB0aGUgdXNlciBkb2VzIG5vdCBuZWVkIHRvIHVzZSB0cnktY2F0Y2guXG4gICAgICAgIGlmIChlcnIpIHRocm93IGVyclxuICAgICAgICBpZiAobGlzdGVuZXJzLm9uRHJvcCkge1xuICAgICAgICAgIGxpc3RlbmVycy5vbkRyb3AoZmxhdHRlbihyZXN1bHRzKSwgcG9zKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZmlsZXMgPSB0b0FycmF5KGUuZGF0YVRyYW5zZmVyLmZpbGVzKVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICBmaWxlLmZ1bGxQYXRoID0gJy8nICsgZmlsZS5uYW1lXG4gICAgICB9KVxuXG4gICAgICBpZiAobGlzdGVuZXJzLm9uRHJvcCkge1xuICAgICAgICBsaXN0ZW5lcnMub25Ecm9wKGZpbGVzLCBwb3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVEcmFnQ2xhc3MgKCkge1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZycpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0VudHJ5IChlbnRyeSwgY2IpIHtcbiAgdmFyIGVudHJpZXMgPSBbXVxuXG4gIGlmIChlbnRyeS5pc0ZpbGUpIHtcbiAgICBlbnRyeS5maWxlKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICBmaWxlLmZ1bGxQYXRoID0gZW50cnkuZnVsbFBhdGggLy8gcHJlc2VydmUgcGF0aGluZyBmb3IgY29uc3VtZXJcbiAgICAgIGNiKG51bGwsIGZpbGUpXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgY2IoZXJyKVxuICAgIH0pXG4gIH0gZWxzZSBpZiAoZW50cnkuaXNEaXJlY3RvcnkpIHtcbiAgICB2YXIgcmVhZGVyID0gZW50cnkuY3JlYXRlUmVhZGVyKClcbiAgICByZWFkRW50cmllcygpXG4gIH1cblxuICBmdW5jdGlvbiByZWFkRW50cmllcyAoKSB7XG4gICAgcmVhZGVyLnJlYWRFbnRyaWVzKGZ1bmN0aW9uIChlbnRyaWVzXykge1xuICAgICAgaWYgKGVudHJpZXNfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZW50cmllcyA9IGVudHJpZXMuY29uY2F0KHRvQXJyYXkoZW50cmllc18pKVxuICAgICAgICByZWFkRW50cmllcygpIC8vIGNvbnRpbnVlIHJlYWRpbmcgZW50cmllcyB1bnRpbCBgcmVhZEVudHJpZXNgIHJldHVybnMgbm8gbW9yZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZUVudHJpZXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBkb25lRW50cmllcyAoKSB7XG4gICAgcGFyYWxsZWwoZW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHByb2Nlc3NFbnRyeShlbnRyeSwgY2IpXG4gICAgICB9XG4gICAgfSksIGNiKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QgfHwgW10sIDApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZsYXR0ZW4obGlzdCwgZGVwdGgpIHtcbiAgZGVwdGggPSAodHlwZW9mIGRlcHRoID09ICdudW1iZXInKSA/IGRlcHRoIDogSW5maW5pdHk7XG5cbiAgaWYgKCFkZXB0aCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgICByZXR1cm4gbGlzdC5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gaTsgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgcmV0dXJuIF9mbGF0dGVuKGxpc3QsIDEpO1xuXG4gIGZ1bmN0aW9uIF9mbGF0dGVuKGxpc3QsIGQpIHtcbiAgICByZXR1cm4gbGlzdC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaXRlbSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkgJiYgZCA8IGRlcHRoKSB7XG4gICAgICAgIHJldHVybiBhY2MuY29uY2F0KF9mbGF0dGVuKGl0ZW0sIGQgKyAxKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoaXRlbSk7XG4gICAgICB9XG4gICAgfSwgW10pO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBydW5QYXJhbGxlbFxuXG5mdW5jdGlvbiBydW5QYXJhbGxlbCAodGFza3MsIGNiKSB7XG4gIHZhciByZXN1bHRzLCBwZW5kaW5nLCBrZXlzXG4gIHZhciBpc1N5bmMgPSB0cnVlXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgcmVzdWx0cyA9IFtdXG4gICAgcGVuZGluZyA9IHRhc2tzLmxlbmd0aFxuICB9IGVsc2Uge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyh0YXNrcylcbiAgICByZXN1bHRzID0ge31cbiAgICBwZW5kaW5nID0ga2V5cy5sZW5ndGhcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUgKGVycikge1xuICAgIGZ1bmN0aW9uIGVuZCAoKSB7XG4gICAgICBpZiAoY2IpIGNiKGVyciwgcmVzdWx0cylcbiAgICAgIGNiID0gbnVsbFxuICAgIH1cbiAgICBpZiAoaXNTeW5jKSBwcm9jZXNzLm5leHRUaWNrKGVuZClcbiAgICBlbHNlIGVuZCgpXG4gIH1cblxuICBmdW5jdGlvbiBlYWNoIChpLCBlcnIsIHJlc3VsdCkge1xuICAgIHJlc3VsdHNbaV0gPSByZXN1bHRcbiAgICBpZiAoLS1wZW5kaW5nID09PSAwIHx8IGVycikge1xuICAgICAgZG9uZShlcnIpXG4gICAgfVxuICB9XG5cbiAgaWYgKCFwZW5kaW5nKSB7XG4gICAgLy8gZW1wdHlcbiAgICBkb25lKG51bGwpXG4gIH0gZWxzZSBpZiAoa2V5cykge1xuICAgIC8vIG9iamVjdFxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB0YXNrc1trZXldKGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkgeyBlYWNoKGtleSwgZXJyLCByZXN1bHQpIH0pXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBhcnJheVxuICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHRhc2ssIGkpIHtcbiAgICAgIHRhc2soZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7IGVhY2goaSwgZXJyLCByZXN1bHQpIH0pXG4gICAgfSlcbiAgfVxuXG4gIGlzU3luYyA9IGZhbHNlXG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIEZpbGVMaXN0ID0gcmVxdWlyZSgnLi9GaWxlTGlzdCcpO1xudmFyIEFkZEZpbGVzID0gcmVxdWlyZSgnLi9BZGRGaWxlcycpO1xudmFyIEFkZEZpbGVzUGFuZWwgPSByZXF1aXJlKCcuL0FkZEZpbGVzUGFuZWwnKTtcbnZhciBQYW5lbENvbnRlbnQgPSByZXF1aXJlKCcuL1BhbmVsQ29udGVudCcpO1xudmFyIFBhbmVsVG9wQmFyID0gcmVxdWlyZSgnLi9QYW5lbFRvcEJhcicpO1xudmFyIEZpbGVDYXJkID0gcmVxdWlyZSgnLi9GaWxlQ2FyZCcpO1xudmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG52YXIgaXNUb3VjaERldmljZSA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9pc1RvdWNoRGV2aWNlJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZS5oO1xuXG52YXIgUHJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgncHJlYWN0LWNzcy10cmFuc2l0aW9uLWdyb3VwJyk7XG5cbi8vIGh0dHA6Ly9kZXYuZWRlbnNwaWVrZXJtYW5uLmNvbS8yMDE2LzAyLzExL2ludHJvZHVjaW5nLWFjY2Vzc2libGUtbW9kYWwtZGlhbG9nXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2hvc2gvbWljcm9tb2RhbFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIERhc2hib2FyZChwcm9wcykge1xuICAvLyBpZiAoIXByb3BzLmlubGluZSAmJiBwcm9wcy5tb2RhbC5pc0hpZGRlbikge1xuICAvLyAgIHJldHVybiA8c3BhbiAvPlxuICAvLyB9XG5cbiAgdmFyIG5vRmlsZXMgPSBwcm9wcy50b3RhbEZpbGVDb3VudCA9PT0gMDtcblxuICB2YXIgZGFzaGJvYXJkQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyh7ICd1cHB5LVJvb3QnOiBwcm9wcy5pc1RhcmdldERPTUVsIH0sICd1cHB5LURhc2hib2FyZCcsIHsgJ1VwcHktLWlzVG91Y2hEZXZpY2UnOiBpc1RvdWNoRGV2aWNlKCkgfSwgeyAndXBweS1EYXNoYm9hcmQtLWFuaW1hdGVPcGVuQ2xvc2UnOiBwcm9wcy5hbmltYXRlT3BlbkNsb3NlIH0sIHsgJ3VwcHktRGFzaGJvYXJkLS1pc0Nsb3NpbmcnOiBwcm9wcy5pc0Nsb3NpbmcgfSwgeyAndXBweS1EYXNoYm9hcmQtLW1vZGFsJzogIXByb3BzLmlubGluZSB9LCB7ICd1cHB5LXNpemUtLW1kJzogcHJvcHMuY29udGFpbmVyV2lkdGggPiA1NzYgfSwgeyAndXBweS1zaXplLS1sZyc6IHByb3BzLmNvbnRhaW5lcldpZHRoID4gNzAwIH0sIHsgJ3VwcHktRGFzaGJvYXJkLS1pc0FkZEZpbGVzUGFuZWxWaXNpYmxlJzogcHJvcHMuc2hvd0FkZEZpbGVzUGFuZWwgfSk7XG5cbiAgcmV0dXJuIGgoXG4gICAgJ2RpdicsXG4gICAgeyAnY2xhc3MnOiBkYXNoYm9hcmRDbGFzc05hbWUsXG4gICAgICAnYXJpYS1oaWRkZW4nOiBwcm9wcy5pbmxpbmUgPyAnZmFsc2UnIDogcHJvcHMubW9kYWwuaXNIaWRkZW4sXG4gICAgICAnYXJpYS1sYWJlbCc6ICFwcm9wcy5pbmxpbmUgPyBwcm9wcy5pMThuKCdkYXNoYm9hcmRXaW5kb3dUaXRsZScpIDogcHJvcHMuaTE4bignZGFzaGJvYXJkVGl0bGUnKSxcbiAgICAgIG9ucGFzdGU6IHByb3BzLmhhbmRsZVBhc3RlIH0sXG4gICAgaCgnZGl2JywgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmQtb3ZlcmxheScsIHRhYmluZGV4OiAtMSwgb25jbGljazogcHJvcHMuaGFuZGxlQ2xpY2tPdXRzaWRlIH0pLFxuICAgIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkLWlubmVyJyxcbiAgICAgICAgJ2FyaWEtbW9kYWwnOiAhcHJvcHMuaW5saW5lICYmICd0cnVlJyxcbiAgICAgICAgcm9sZTogIXByb3BzLmlubGluZSAmJiAnZGlhbG9nJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogcHJvcHMuaW5saW5lICYmIHByb3BzLndpZHRoID8gcHJvcHMud2lkdGggOiAnJyxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmlubGluZSAmJiBwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiAnJ1xuICAgICAgICB9IH0sXG4gICAgICBoKFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmQtY2xvc2UnLFxuICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMuaTE4bignY2xvc2VNb2RhbCcpLFxuICAgICAgICAgIHRpdGxlOiBwcm9wcy5pMThuKCdjbG9zZU1vZGFsJyksXG4gICAgICAgICAgb25jbGljazogcHJvcHMuY2xvc2VNb2RhbCB9LFxuICAgICAgICBoKFxuICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICB7ICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9LFxuICAgICAgICAgICdcXHhENydcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZC1pbm5lcldyYXAnIH0sXG4gICAgICAgICFub0ZpbGVzICYmIHByb3BzLnNob3dTZWxlY3RlZEZpbGVzICYmIGgoUGFuZWxUb3BCYXIsIHByb3BzKSxcbiAgICAgICAgcHJvcHMuc2hvd1NlbGVjdGVkRmlsZXMgPyBub0ZpbGVzID8gaChBZGRGaWxlcywgcHJvcHMpIDogaChGaWxlTGlzdCwgcHJvcHMpIDogaChBZGRGaWxlcywgcHJvcHMpLFxuICAgICAgICBoKFxuICAgICAgICAgIFByZWFjdENTU1RyYW5zaXRpb25Hcm91cCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogJ3VwcHktdHJhbnNpdGlvbi1zbGlkZURvd25VcCcsXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiAyNTAsXG4gICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiAyNTAgfSxcbiAgICAgICAgICBwcm9wcy5zaG93QWRkRmlsZXNQYW5lbCA/IGgoQWRkRmlsZXNQYW5lbCwgX2V4dGVuZHMoeyBrZXk6ICdBZGRGaWxlc1BhbmVsJyB9LCBwcm9wcykpIDogbnVsbFxuICAgICAgICApLFxuICAgICAgICBoKFxuICAgICAgICAgIFByZWFjdENTU1RyYW5zaXRpb25Hcm91cCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogJ3VwcHktdHJhbnNpdGlvbi1zbGlkZURvd25VcCcsXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiAyNTAsXG4gICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiAyNTAgfSxcbiAgICAgICAgICBwcm9wcy5maWxlQ2FyZEZvciA/IGgoRmlsZUNhcmQsIF9leHRlbmRzKHsga2V5OiAnRmlsZUNhcmQnIH0sIHByb3BzKSkgOiBudWxsXG4gICAgICAgICksXG4gICAgICAgIGgoXG4gICAgICAgICAgUHJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiAndXBweS10cmFuc2l0aW9uLXNsaWRlRG93blVwJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDI1MCxcbiAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDI1MCB9LFxuICAgICAgICAgIHByb3BzLmFjdGl2ZVBhbmVsID8gaChQYW5lbENvbnRlbnQsIF9leHRlbmRzKHsga2V5OiAnUGFuZWxDb250ZW50JyB9LCBwcm9wcykpIDogbnVsbFxuICAgICAgICApLFxuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkLXByb2dyZXNzaW5kaWNhdG9ycycgfSxcbiAgICAgICAgICBwcm9wcy5wcm9ncmVzc2luZGljYXRvcnMubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5nZXRQbHVnaW4odGFyZ2V0LmlkKS5yZW5kZXIocHJvcHMuc3RhdGUpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG59OyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBGaWxlSXRlbSA9IHJlcXVpcmUoJy4vRmlsZUl0ZW0nKTtcbnZhciBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdwcmVhY3QnKSxcbiAgICBoID0gX3JlcXVpcmUuaDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgdmFyIG5vRmlsZXMgPSBwcm9wcy50b3RhbEZpbGVDb3VudCA9PT0gMDtcbiAgdmFyIGRhc2hib2FyZEZpbGVzQ2xhc3MgPSBjbGFzc05hbWVzKCd1cHB5LURhc2hib2FyZC1maWxlcycsIHsgJ3VwcHktRGFzaGJvYXJkLWZpbGVzLS1ub0ZpbGVzJzogbm9GaWxlcyB9KTtcblxuICByZXR1cm4gaChcbiAgICAndWwnLFxuICAgIHsgJ2NsYXNzJzogZGFzaGJvYXJkRmlsZXNDbGFzcyB9LFxuICAgIE9iamVjdC5rZXlzKHByb3BzLmZpbGVzKS5tYXAoZnVuY3Rpb24gKGZpbGVJRCkge1xuICAgICAgcmV0dXJuIGgoRmlsZUl0ZW0sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBhY3F1aXJlcnM6IHByb3BzLmFjcXVpcmVycyxcbiAgICAgICAgZmlsZTogcHJvcHMuZmlsZXNbZmlsZUlEXVxuICAgICAgfSkpO1xuICAgIH0pXG4gICk7XG59OyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBnZXRGaWxlTmFtZUFuZEV4dGVuc2lvbiA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9nZXRGaWxlTmFtZUFuZEV4dGVuc2lvbicpO1xudmFyIHRydW5jYXRlU3RyaW5nID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJ1bmNhdGVTdHJpbmcnKTtcbnZhciBjb3B5VG9DbGlwYm9hcmQgPSByZXF1aXJlKCcuLi91dGlscy9jb3B5VG9DbGlwYm9hcmQnKTtcbnZhciBwcmV0dHlCeXRlcyA9IHJlcXVpcmUoJ3ByZXR0aWVyLWJ5dGVzJyk7XG52YXIgRmlsZUl0ZW1Qcm9ncmVzcyA9IHJlcXVpcmUoJy4vRmlsZUl0ZW1Qcm9ncmVzcycpO1xudmFyIGdldEZpbGVUeXBlSWNvbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldEZpbGVUeXBlSWNvbicpO1xudmFyIEZpbGVQcmV2aWV3ID0gcmVxdWlyZSgnLi9GaWxlUHJldmlldycpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2ljb25zJyksXG4gICAgaWNvbkNvcHkgPSBfcmVxdWlyZS5pY29uQ29weSxcbiAgICBpY29uUmV0cnkgPSBfcmVxdWlyZS5pY29uUmV0cnk7XG5cbnZhciBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgncHJlYWN0JyksXG4gICAgaCA9IF9yZXF1aXJlMi5oO1xuXG5mdW5jdGlvbiBGaWxlSXRlbVByb2dyZXNzV3JhcHBlcihwcm9wcykge1xuICBpZiAocHJvcHMuaGlkZVJldHJ5QnV0dG9uICYmIHByb3BzLmVycm9yKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHByb3BzLmlzVXBsb2FkZWQgfHwgcHJvcHMuYnVuZGxlZCB8fCBwcm9wcy5oaWRlUGF1c2VSZXN1bWVDYW5jZWxCdXR0b25zICYmICFwcm9wcy5lcnJvcikge1xuICAgIHJldHVybiBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tcHJvZ3Jlc3NJbmRpY2F0b3InIH0sXG4gICAgICBoKEZpbGVJdGVtUHJvZ3Jlc3MsIHtcbiAgICAgICAgcHJvZ3Jlc3M6IHByb3BzLmZpbGUucHJvZ3Jlc3MucGVyY2VudGFnZSxcbiAgICAgICAgZmlsZUlEOiBwcm9wcy5maWxlLmlkLFxuICAgICAgICBoaWRlUGF1c2VSZXN1bWVDYW5jZWxCdXR0b25zOiBwcm9wcy5oaWRlUGF1c2VSZXN1bWVDYW5jZWxCdXR0b25zLFxuICAgICAgICBidW5kbGVkOiBwcm9wcy5idW5kbGVkXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gaChcbiAgICAnYnV0dG9uJyxcbiAgICB7XG4gICAgICAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLXByb2dyZXNzSW5kaWNhdG9yJyxcbiAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5wcm9ncmVzc0luZGljYXRvclRpdGxlLFxuICAgICAgdGl0bGU6IHByb3BzLnByb2dyZXNzSW5kaWNhdG9yVGl0bGUsXG4gICAgICBvbmNsaWNrOiBwcm9wcy5vblBhdXNlUmVzdW1lQ2FuY2VsUmV0cnkgfSxcbiAgICBwcm9wcy5lcnJvciA/IHByb3BzLmhpZGVSZXRyeUJ1dHRvbiA/IG51bGwgOiBpY29uUmV0cnkoKSA6IGgoRmlsZUl0ZW1Qcm9ncmVzcywge1xuICAgICAgcHJvZ3Jlc3M6IHByb3BzLmZpbGUucHJvZ3Jlc3MucGVyY2VudGFnZSxcbiAgICAgIGZpbGVJRDogcHJvcHMuZmlsZS5pZCxcbiAgICAgIGhpZGVQYXVzZVJlc3VtZUNhbmNlbEJ1dHRvbnM6IHByb3BzLmhpZGVQYXVzZVJlc3VtZUNhbmNlbEJ1dHRvbnNcbiAgICB9KVxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbGVJdGVtKHByb3BzKSB7XG4gIHZhciBmaWxlID0gcHJvcHMuZmlsZTtcbiAgdmFyIGFjcXVpcmVycyA9IHByb3BzLmFjcXVpcmVycztcblxuICB2YXIgaXNQcm9jZXNzaW5nID0gZmlsZS5wcm9ncmVzcy5wcmVwcm9jZXNzIHx8IGZpbGUucHJvZ3Jlc3MucG9zdHByb2Nlc3M7XG4gIHZhciBpc1VwbG9hZGVkID0gZmlsZS5wcm9ncmVzcy51cGxvYWRDb21wbGV0ZSAmJiAhaXNQcm9jZXNzaW5nICYmICFmaWxlLmVycm9yO1xuICB2YXIgdXBsb2FkSW5Qcm9ncmVzc09yQ29tcGxldGUgPSBmaWxlLnByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQgfHwgaXNQcm9jZXNzaW5nO1xuICB2YXIgdXBsb2FkSW5Qcm9ncmVzcyA9IGZpbGUucHJvZ3Jlc3MudXBsb2FkU3RhcnRlZCAmJiAhZmlsZS5wcm9ncmVzcy51cGxvYWRDb21wbGV0ZSB8fCBpc1Byb2Nlc3Npbmc7XG4gIHZhciBpc1BhdXNlZCA9IGZpbGUuaXNQYXVzZWQgfHwgZmFsc2U7XG4gIHZhciBlcnJvciA9IGZpbGUuZXJyb3IgfHwgZmFsc2U7XG5cbiAgdmFyIGZpbGVOYW1lID0gZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24oZmlsZS5tZXRhLm5hbWUpLm5hbWU7XG4gIHZhciB0cnVuY2F0ZWRGaWxlTmFtZSA9IHByb3BzLmlzV2lkZSA/IHRydW5jYXRlU3RyaW5nKGZpbGVOYW1lLCAzMCkgOiBmaWxlTmFtZTtcblxuICBmdW5jdGlvbiBvblBhdXNlUmVzdW1lQ2FuY2VsUmV0cnkoZXYpIHtcbiAgICBpZiAoaXNVcGxvYWRlZCkgcmV0dXJuO1xuXG4gICAgaWYgKGVycm9yICYmICFwcm9wcy5oaWRlUmV0cnlCdXR0b24pIHtcbiAgICAgIHByb3BzLnJldHJ5VXBsb2FkKGZpbGUuaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5oaWRlUGF1c2VSZXN1bWVDYW5jZWxCdXR0b25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLnJlc3VtYWJsZVVwbG9hZHMpIHtcbiAgICAgIHByb3BzLnBhdXNlVXBsb2FkKGZpbGUuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5jYW5jZWxVcGxvYWQoZmlsZS5pZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvZ3Jlc3NJbmRpY2F0b3JUaXRsZShwcm9wcykge1xuICAgIGlmIChpc1VwbG9hZGVkKSB7XG4gICAgICByZXR1cm4gcHJvcHMuaTE4bigndXBsb2FkQ29tcGxldGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBwcm9wcy5pMThuKCdyZXRyeVVwbG9hZCcpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5yZXN1bWFibGVVcGxvYWRzKSB7XG4gICAgICBpZiAoZmlsZS5pc1BhdXNlZCkge1xuICAgICAgICByZXR1cm4gcHJvcHMuaTE4bigncmVzdW1lVXBsb2FkJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcHMuaTE4bigncGF1c2VVcGxvYWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb3BzLmkxOG4oJ2NhbmNlbFVwbG9hZCcpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBkYXNoYm9hcmRJdGVtQ2xhc3MgPSBjbGFzc05hbWVzKCd1cHB5LURhc2hib2FyZEl0ZW0nLCB7ICdpcy1pbnByb2dyZXNzJzogdXBsb2FkSW5Qcm9ncmVzcyB9LCB7ICdpcy1wcm9jZXNzaW5nJzogaXNQcm9jZXNzaW5nIH0sIHsgJ2lzLWNvbXBsZXRlJzogaXNVcGxvYWRlZCB9LCB7ICdpcy1wYXVzZWQnOiBpc1BhdXNlZCB9LCB7ICdpcy1lcnJvcic6IGVycm9yIH0sIHsgJ2lzLXJlc3VtYWJsZSc6IHByb3BzLnJlc3VtYWJsZVVwbG9hZHMgfSwgeyAnaXMtYnVuZGxlZCc6IHByb3BzLmJ1bmRsZWRVcGxvYWQgfSk7XG5cbiAgcmV0dXJuIGgoXG4gICAgJ2xpJyxcbiAgICB7ICdjbGFzcyc6IGRhc2hib2FyZEl0ZW1DbGFzcywgaWQ6ICd1cHB5XycgKyBmaWxlLmlkLCB0aXRsZTogZmlsZS5tZXRhLm5hbWUgfSxcbiAgICBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tcHJldmlldycgfSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tcHJldmlld0lubmVyV3JhcCcsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogZ2V0RmlsZVR5cGVJY29uKGZpbGUudHlwZSkuY29sb3IgfSB9LFxuICAgICAgICBwcm9wcy5zaG93TGlua1RvRmlsZVVwbG9hZFJlc3VsdCAmJiBmaWxlLnVwbG9hZFVSTCA/IGgoJ2EnLCB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tcHJldmlld0xpbmsnLCBocmVmOiBmaWxlLnVwbG9hZFVSTCwgcmVsOiAnbm9yZWZlcnJlciBub29wZW5lcicsIHRhcmdldDogJ19ibGFuaycgfSkgOiBudWxsLFxuICAgICAgICBoKEZpbGVQcmV2aWV3LCB7IGZpbGU6IGZpbGUgfSlcbiAgICAgICksXG4gICAgICBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLXByb2dyZXNzJyB9LFxuICAgICAgICBoKEZpbGVJdGVtUHJvZ3Jlc3NXcmFwcGVyLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgcHJvZ3Jlc3NJbmRpY2F0b3JUaXRsZTogcHJvZ3Jlc3NJbmRpY2F0b3JUaXRsZShwcm9wcyksXG4gICAgICAgICAgb25QYXVzZVJlc3VtZUNhbmNlbFJldHJ5OiBvblBhdXNlUmVzdW1lQ2FuY2VsUmV0cnksXG4gICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSwgcHJvcHMpKVxuICAgICAgKVxuICAgICksXG4gICAgaChcbiAgICAgICdkaXYnLFxuICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLWluZm8nIH0sXG4gICAgICBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLW5hbWUnLCB0aXRsZTogZmlsZU5hbWUgfSxcbiAgICAgICAgcHJvcHMuc2hvd0xpbmtUb0ZpbGVVcGxvYWRSZXN1bHQgJiYgZmlsZS51cGxvYWRVUkwgPyBoKFxuICAgICAgICAgICdhJyxcbiAgICAgICAgICB7IGhyZWY6IGZpbGUudXBsb2FkVVJMLCByZWw6ICdub3JlZmVycmVyIG5vb3BlbmVyJywgdGFyZ2V0OiAnX2JsYW5rJyB9LFxuICAgICAgICAgIGZpbGUuZXh0ZW5zaW9uID8gdHJ1bmNhdGVkRmlsZU5hbWUgKyAnLicgKyBmaWxlLmV4dGVuc2lvbiA6IHRydW5jYXRlZEZpbGVOYW1lXG4gICAgICAgICkgOiBmaWxlLmV4dGVuc2lvbiA/IHRydW5jYXRlZEZpbGVOYW1lICsgJy4nICsgZmlsZS5leHRlbnNpb24gOiB0cnVuY2F0ZWRGaWxlTmFtZVxuICAgICAgKSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tc3RhdHVzJyB9LFxuICAgICAgICBmaWxlLmRhdGEuc2l6ZSA/IGgoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLXN0YXR1c1NpemUnIH0sXG4gICAgICAgICAgcHJldHR5Qnl0ZXMoZmlsZS5kYXRhLnNpemUpXG4gICAgICAgICkgOiBudWxsLFxuICAgICAgICBmaWxlLnNvdXJjZSAmJiBmaWxlLnNvdXJjZSAhPT0gcHJvcHMuaWQgJiYgaChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tc291cmNlSWNvbicgfSxcbiAgICAgICAgICBhY3F1aXJlcnMubWFwKGZ1bmN0aW9uIChhY3F1aXJlcikge1xuICAgICAgICAgICAgaWYgKGFjcXVpcmVyLmlkID09PSBmaWxlLnNvdXJjZSkge1xuICAgICAgICAgICAgICByZXR1cm4gaChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogcHJvcHMuaTE4bignZmlsZVNvdXJjZScsIHsgbmFtZTogYWNxdWlyZXIubmFtZSB9KSB9LFxuICAgICAgICAgICAgICAgIGFjcXVpcmVyLmljb24oKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgICF1cGxvYWRJblByb2dyZXNzT3JDb21wbGV0ZSAmJiBwcm9wcy5tZXRhRmllbGRzICYmIHByb3BzLm1ldGFGaWVsZHMubGVuZ3RoID8gaChcbiAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tZWRpdCcsXG4gICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMuaTE4bignZWRpdEZpbGUnKSxcbiAgICAgICAgICAgIHRpdGxlOiBwcm9wcy5pMThuKCdlZGl0RmlsZScpLFxuICAgICAgICAgICAgb25jbGljazogZnVuY3Rpb24gb25jbGljayhlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9wcy50b2dnbGVGaWxlQ2FyZChmaWxlLmlkKTtcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICBwcm9wcy5pMThuKCdlZGl0JylcbiAgICAgICAgKSA6IG51bGwsXG4gICAgICAgIHByb3BzLnNob3dMaW5rVG9GaWxlVXBsb2FkUmVzdWx0ICYmIGZpbGUudXBsb2FkVVJMID8gaChcbiAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tY29weUxpbmsnLFxuICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmkxOG4oJ2NvcHlMaW5rJyksXG4gICAgICAgICAgICB0aXRsZTogcHJvcHMuaTE4bignY29weUxpbmsnKSxcbiAgICAgICAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uIG9uY2xpY2soKSB7XG4gICAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZChmaWxlLnVwbG9hZFVSTCwgcHJvcHMuaTE4bignY29weUxpbmtUb0NsaXBib2FyZEZhbGxiYWNrJykpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHByb3BzLmxvZygnTGluayBjb3BpZWQgdG8gY2xpcGJvYXJkLicpO1xuICAgICAgICAgICAgICAgIHByb3BzLmluZm8ocHJvcHMuaTE4bignY29weUxpbmtUb0NsaXBib2FyZFN1Y2Nlc3MnKSwgJ2luZm8nLCAzMDAwKTtcbiAgICAgICAgICAgICAgfSkuY2F0Y2gocHJvcHMubG9nKTtcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICBpY29uQ29weSgpXG4gICAgICAgICkgOiAnJ1xuICAgICAgKVxuICAgICksXG4gICAgaChcbiAgICAgICdkaXYnLFxuICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRJdGVtLWFjdGlvbicgfSxcbiAgICAgICFpc1VwbG9hZGVkICYmIGgoXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEl0ZW0tcmVtb3ZlJyxcbiAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmkxOG4oJ3JlbW92ZUZpbGUnKSxcbiAgICAgICAgICB0aXRsZTogcHJvcHMuaTE4bigncmVtb3ZlRmlsZScpLFxuICAgICAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uIG9uY2xpY2soKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMucmVtb3ZlRmlsZShmaWxlLmlkKTtcbiAgICAgICAgICB9IH0sXG4gICAgICAgIGgoXG4gICAgICAgICAgJ3N2ZycsXG4gICAgICAgICAgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsICdjbGFzcyc6ICdVcHB5SWNvbicsIHdpZHRoOiAnNjAnLCBoZWlnaHQ6ICc2MCcsIHZpZXdCb3g6ICcwIDAgNjAgNjAnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuICAgICAgICAgIGgoJ3BhdGgnLCB7IHN0cm9rZTogJyNGRkYnLCAnc3Ryb2tlLXdpZHRoJzogJzEnLCAnZmlsbC1ydWxlJzogJ25vbnplcm8nLCAndmVjdG9yLWVmZmVjdCc6ICdub24tc2NhbGluZy1zdHJva2UnLCBkOiAnTTMwIDFDMTQgMSAxIDE0IDEgMzBzMTMgMjkgMjkgMjkgMjktMTMgMjktMjlTNDYgMSAzMCAxeicgfSksXG4gICAgICAgICAgaCgncGF0aCcsIHsgZmlsbDogJyNGRkYnLCAndmVjdG9yLWVmZmVjdCc6ICdub24tc2NhbGluZy1zdHJva2UnLCBkOiAnTTQyIDM5LjY2N0wzOS42NjcgNDIgMzAgMzIuMzMzIDIwLjMzMyA0MiAxOCAzOS42NjcgMjcuNjY3IDMwIDE4IDIwLjMzMyAyMC4zMzMgMTggMzAgMjcuNjY3IDM5LjY2NyAxOCA0MiAyMC4zMzMgMzIuMzMzIDMweicgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cnVuY2F0ZVN0cmluZyhzdHIsIGxlbmd0aCkge1xuICBpZiAoc3RyLmxlbmd0aCA+IGxlbmd0aCkge1xuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIGxlbmd0aCAvIDIpICsgJy4uLicgKyBzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSBsZW5ndGggLyA0LCBzdHIubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gc3RyO1xuXG4gIC8vIG1vcmUgcHJlY2lzZSB2ZXJzaW9uIGlmIG5lZWRlZFxuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84MzE1ODNcbn07IiwiLyoqXG4gKiBDb3BpZXMgdGV4dCB0byBjbGlwYm9hcmQgYnkgY3JlYXRpbmcgYW4gYWxtb3N0IGludmlzaWJsZSB0ZXh0YXJlYSxcbiAqIGFkZGluZyB0ZXh0IHRoZXJlLCB0aGVuIHJ1bm5pbmcgZXhlY0NvbW1hbmQoJ2NvcHknKS5cbiAqIEZhbGxzIGJhY2sgdG8gcHJvbXB0KCkgd2hlbiB0aGUgZWFzeSB3YXkgZmFpbHMgKGhlbGxvLCBTYWZhcmkhKVxuICogRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMDgxMDMyMlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0VG9Db3B5XG4gKiBAcGFyYW0ge1N0cmluZ30gZmFsbGJhY2tTdHJpbmdcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKHRleHRUb0NvcHksIGZhbGxiYWNrU3RyaW5nKSB7XG4gIGZhbGxiYWNrU3RyaW5nID0gZmFsbGJhY2tTdHJpbmcgfHwgJ0NvcHkgdGhlIFVSTCBiZWxvdyc7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgd2lkdGg6ICcyZW0nLFxuICAgICAgaGVpZ2h0OiAnMmVtJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgIH0pO1xuXG4gICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0VG9Db3B5O1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuICAgIHRleHRBcmVhLnNlbGVjdCgpO1xuXG4gICAgdmFyIG1hZ2ljQ29weUZhaWxlZCA9IGZ1bmN0aW9uIG1hZ2ljQ29weUZhaWxlZCgpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xuICAgICAgd2luZG93LnByb21wdChmYWxsYmFja1N0cmluZywgdGV4dFRvQ29weSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgc3VjY2Vzc2Z1bCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcbiAgICAgICAgcmV0dXJuIG1hZ2ljQ29weUZhaWxlZCgnY29weSBjb21tYW5kIHVuYXZhaWxhYmxlJyk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcbiAgICAgIHJldHVybiBtYWdpY0NvcHlGYWlsZWQoZXJyKTtcbiAgICB9XG4gIH0pO1xufTsiLCJ2YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdwcmVhY3QnKSxcbiAgICBoID0gX3JlcXVpcmUuaDtcblxuLy8gaHR0cDovL2NvZGVwZW4uaW8vSGFya2tvL3Blbi9yVnh2Tk1cbi8vIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc3ZnLWxpbmUtYW5pbWF0aW9uLXdvcmtzL1xuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZXN3YWsvYWQ0ZWE1N2JjZDVmZjdhYTVkNDJcblxuLy8gY2lyY2xlIGxlbmd0aCBlcXVhbHMgMiAqIFBJICogUlxuXG5cbnZhciBjaXJjbGVMZW5ndGggPSAyICogTWF0aC5QSSAqIDE1O1xuXG4vLyBzdHJva2UtZGFzaG9mZnNldCBpcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHByb2dyZXNzIGZyb20gY2lyY2xlTGVuZ3RoLFxuLy8gc3Vic3RyYWN0ZWQgZnJvbSBjaXJjbGVMZW5ndGgsIGJlY2F1c2UgaXRzIGFuIG9mZnNldFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIGgoXG4gICAgXCJzdmdcIixcbiAgICB7IHdpZHRoOiBcIjcwXCIsIGhlaWdodDogXCI3MFwiLCB2aWV3Qm94OiBcIjAgMCAzNiAzNlwiLCBcImNsYXNzXCI6IFwiVXBweUljb24gVXBweUljb24tcHJvZ3Jlc3NDaXJjbGVcIiB9LFxuICAgIGgoXG4gICAgICBcImdcIixcbiAgICAgIHsgXCJjbGFzc1wiOiBcInByb2dyZXNzLWdyb3VwXCIgfSxcbiAgICAgIGgoXCJjaXJjbGVcIiwgeyBcImNsYXNzXCI6IFwiYmdcIiwgcjogXCIxNVwiLCBjeDogXCIxOFwiLCBjeTogXCIxOFwiLCBcInN0cm9rZS13aWR0aFwiOiBcIjJcIiwgZmlsbDogXCJub25lXCIgfSksXG4gICAgICBoKFwiY2lyY2xlXCIsIHsgXCJjbGFzc1wiOiBcInByb2dyZXNzXCIsIHI6IFwiMTVcIiwgY3g6IFwiMThcIiwgY3k6IFwiMThcIiwgdHJhbnNmb3JtOiBcInJvdGF0ZSgtOTAsIDE4LCAxOClcIiwgXCJzdHJva2Utd2lkdGhcIjogXCIyXCIsIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICBcInN0cm9rZS1kYXNoYXJyYXlcIjogY2lyY2xlTGVuZ3RoLFxuICAgICAgICBcInN0cm9rZS1kYXNob2Zmc2V0XCI6IGNpcmNsZUxlbmd0aCAtIGNpcmNsZUxlbmd0aCAvIDEwMCAqIHByb3BzLnByb2dyZXNzXG4gICAgICB9KVxuICAgICksXG4gICAgIXByb3BzLmhpZGVQYXVzZVJlc3VtZUNhbmNlbEJ1dHRvbnMgJiYgIXByb3BzLmJ1bmRsZWQgPyBoKFxuICAgICAgXCJnXCIsXG4gICAgICBudWxsLFxuICAgICAgaChcInBvbHlnb25cIiwgeyBcImNsYXNzXCI6IFwicGxheVwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDMsIDMpXCIsIHBvaW50czogXCIxMiAyMCAxMiAxMCAyMCAxNVwiIH0pLFxuICAgICAgaChcbiAgICAgICAgXCJnXCIsXG4gICAgICAgIHsgXCJjbGFzc1wiOiBcInBhdXNlXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMTQuNSwgMTMpXCIgfSxcbiAgICAgICAgaChcInJlY3RcIiwgeyB4OiBcIjBcIiwgeTogXCIwXCIsIHdpZHRoOiBcIjJcIiwgaGVpZ2h0OiBcIjEwXCIsIHJ4OiBcIjBcIiB9KSxcbiAgICAgICAgaChcInJlY3RcIiwgeyB4OiBcIjVcIiwgeTogXCIwXCIsIHdpZHRoOiBcIjJcIiwgaGVpZ2h0OiBcIjEwXCIsIHJ4OiBcIjBcIiB9KVxuICAgICAgKSxcbiAgICAgIGgoXCJwb2x5Z29uXCIsIHsgXCJjbGFzc1wiOiBcImNhbmNlbFwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDIsIDIpXCIsIHBvaW50czogXCIxOS44ODU2NTE2IDExLjA2MjUgMTYgMTQuOTQ4MTUxNiAxMi4xMDE5NzM3IDExLjA2MjUgMTEuMDYyNSAxMi4xMTQzNDg0IDE0Ljk0ODE1MTYgMTYgMTEuMDYyNSAxOS44OTgwMjYzIDEyLjEwMTk3MzcgMjAuOTM3NSAxNiAxNy4wNTE4NDg0IDE5Ljg4NTY1MTYgMjAuOTM3NSAyMC45Mzc1IDE5Ljg5ODAyNjMgMTcuMDUxODQ4NCAxNiAyMC45Mzc1IDEyXCIgfSlcbiAgICApIDogbnVsbCxcbiAgICBoKFwicG9seWdvblwiLCB7IFwiY2xhc3NcIjogXCJjaGVja1wiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDIsIDMpXCIsIHBvaW50czogXCIxNCAyMi41IDcgMTUuMjQ1NzA2NSA4Ljk5OTg1ODU3IDEzLjE3MzI4MTUgMTQgMTguMzU0NzEwNCAyMi45NzI5ODgzIDkgMjUgMTEuMTAwNTYzNFwiIH0pXG4gICk7XG59OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgncHJlYWN0JyksXG4gICAgaCA9IF9yZXF1aXJlLmgsXG4gICAgQ29tcG9uZW50ID0gX3JlcXVpcmUuQ29tcG9uZW50O1xuXG52YXIgQWN0aW9uQnJvd3NlVGFnbGluZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBY3Rpb25Ccm93c2VUYWdsaW5lLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBY3Rpb25Ccm93c2VUYWdsaW5lKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbkJyb3dzZVRhZ2xpbmUpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5oYW5kbGVDbGljayA9IF90aGlzLmhhbmRsZUNsaWNrLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIEFjdGlvbkJyb3dzZVRhZ2xpbmUucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXYpIHtcbiAgICB0aGlzLmlucHV0LmNsaWNrKCk7XG4gIH07XG5cbiAgQWN0aW9uQnJvd3NlVGFnbGluZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGJyb3dzZSA9IGgoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgeyB0eXBlOiBcImJ1dHRvblwiLCBcImNsYXNzXCI6IFwidXBweS1EYXNoYm9hcmQtYnJvd3NlXCIsIG9uY2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2sgfSxcbiAgICAgIHRoaXMucHJvcHMuaTE4bignYnJvd3NlJylcbiAgICApO1xuXG4gICAgLy8gZW1wdHkgdmFsdWU9XCJcIiBvbiBmaWxlIGlucHV0LCBzbyB0aGF0IHRoZSBpbnB1dCBpcyBjbGVhcmVkIGFmdGVyIGEgZmlsZSBpcyBzZWxlY3RlZCxcbiAgICAvLyBiZWNhdXNlIFVwcHkgd2lsbCBiZSBoYW5kbGluZyB0aGUgdXBsb2FkIGFuZCBzbyB3ZSBjYW4gc2VsZWN0IHNhbWUgZmlsZVxuICAgIC8vIGFmdGVyIHJlbW92aW5nIOKAlCBvdGhlcndpc2UgYnJvd3NlciB0aGlua3MgaXTigJlzIGFscmVhZHkgc2VsZWN0ZWRcbiAgICByZXR1cm4gaChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IFwiY2xhc3NcIjogXCJ1cHB5LURhc2hib2FyZC1kcm9wRmlsZXNUaXRsZVwiIH0sXG4gICAgICB0aGlzLnByb3BzLmFjcXVpcmVycy5sZW5ndGggPT09IDAgPyB0aGlzLnByb3BzLmkxOG5BcnJheSgnZHJvcFBhc3RlJywgeyBicm93c2U6IGJyb3dzZSB9KSA6IHRoaXMucHJvcHMuaTE4bkFycmF5KCdkcm9wUGFzdGVJbXBvcnQnLCB7IGJyb3dzZTogYnJvd3NlIH0pLFxuICAgICAgaChcImlucHV0XCIsIHsgXCJjbGFzc1wiOiBcInVwcHktRGFzaGJvYXJkLWlucHV0XCIsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgdGFiaW5kZXg6IC0xLFxuICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgbmFtZTogXCJmaWxlc1tdXCIsXG4gICAgICAgIG11bHRpcGxlOiB0aGlzLnByb3BzLm1heE51bWJlck9mRmlsZXMgIT09IDEsXG4gICAgICAgIG9uY2hhbmdlOiB0aGlzLnByb3BzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICBhY2NlcHQ6IHRoaXMucHJvcHMuYWxsb3dlZEZpbGVUeXBlcyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGlucHV0KSB7XG4gICAgICAgICAgX3RoaXMyLmlucHV0ID0gaW5wdXQ7XG4gICAgICAgIH0gfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBBY3Rpb25Ccm93c2VUYWdsaW5lO1xufShDb21wb25lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdGlvbkJyb3dzZVRhZ2xpbmU7IiwidmFyIF9yZXF1aXJlID0gcmVxdWlyZSgncHJlYWN0JyksXG4gICAgaCA9IF9yZXF1aXJlLmg7XG5cbnZhciBBZGRGaWxlcyA9IHJlcXVpcmUoJy4vQWRkRmlsZXMnKTtcblxudmFyIEFkZEZpbGVzUGFuZWwgPSBmdW5jdGlvbiBBZGRGaWxlc1BhbmVsKHByb3BzKSB7XG4gIHJldHVybiBoKFxuICAgICdkaXYnLFxuICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkLUFkZEZpbGVzUGFuZWwnLFxuICAgICAgJ2FyaWEtaGlkZGVuJzogcHJvcHMuc2hvd0FkZEZpbGVzUGFuZWwgfSxcbiAgICBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtYmFyJyB9LFxuICAgICAgaChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC10aXRsZScsIHJvbGU6ICdoZWFkaW5nJywgJ2FyaWEtbGV2ZWwnOiAnaDEnIH0sXG4gICAgICAgIHByb3BzLmkxOG4oJ2FkZGluZ01vcmVGaWxlcycpXG4gICAgICApLFxuICAgICAgaChcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC1iYWNrJyxcbiAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICBvbmNsaWNrOiBmdW5jdGlvbiBvbmNsaWNrKGV2KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMudG9nZ2xlQWRkRmlsZXNQYW5lbChmYWxzZSk7XG4gICAgICAgICAgfSB9LFxuICAgICAgICBwcm9wcy5pMThuKCdiYWNrJylcbiAgICAgIClcbiAgICApLFxuICAgIGgoQWRkRmlsZXMsIHByb3BzKVxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZGRGaWxlc1BhbmVsOyIsInZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZS5oO1xuXG52YXIgaWdub3JlRXZlbnQgPSByZXF1aXJlKCcuLi91dGlscy9pZ25vcmVFdmVudC5qcycpO1xuXG5mdW5jdGlvbiBQYW5lbENvbnRlbnQocHJvcHMpIHtcbiAgcmV0dXJuIGgoXG4gICAgJ2RpdicsXG4gICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRDb250ZW50LXBhbmVsJyxcbiAgICAgIHJvbGU6ICd0YWJwYW5lbCcsXG4gICAgICBpZDogcHJvcHMuYWN0aXZlUGFuZWwgJiYgJ3VwcHktRGFzaGJvYXJkQ29udGVudC1wYW5lbC0tJyArIHByb3BzLmFjdGl2ZVBhbmVsLmlkLFxuICAgICAgb25EcmFnT3ZlcjogaWdub3JlRXZlbnQsXG4gICAgICBvbkRyYWdMZWF2ZTogaWdub3JlRXZlbnQsXG4gICAgICBvbkRyb3A6IGlnbm9yZUV2ZW50LFxuICAgICAgb25QYXN0ZTogaWdub3JlRXZlbnQgfSxcbiAgICBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtYmFyJyB9LFxuICAgICAgaChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC10aXRsZScsIHJvbGU6ICdoZWFkaW5nJywgJ2FyaWEtbGV2ZWwnOiAnaDEnIH0sXG4gICAgICAgIHByb3BzLmkxOG4oJ2ltcG9ydEZyb20nLCB7IG5hbWU6IHByb3BzLmFjdGl2ZVBhbmVsLm5hbWUgfSlcbiAgICAgICksXG4gICAgICBoKFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRDb250ZW50LWJhY2snLFxuICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIG9uY2xpY2s6IHByb3BzLmhpZGVBbGxQYW5lbHMgfSxcbiAgICAgICAgcHJvcHMuaTE4bignZG9uZScpXG4gICAgICApXG4gICAgKSxcbiAgICBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtcGFuZWxCb2R5JyB9LFxuICAgICAgcHJvcHMuZ2V0UGx1Z2luKHByb3BzLmFjdGl2ZVBhbmVsLmlkKS5yZW5kZXIocHJvcHMuc3RhdGUpXG4gICAgKVxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbmVsQ29udGVudDsiLCJ2YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdwcmVhY3QnKSxcbiAgICBoID0gX3JlcXVpcmUuaDtcblxudmFyIHVwbG9hZFN0YXRlcyA9IHtcbiAgJ1NUQVRFX0VSUk9SJzogJ2Vycm9yJyxcbiAgJ1NUQVRFX1dBSVRJTkcnOiAnd2FpdGluZycsXG4gICdTVEFURV9QUkVQUk9DRVNTSU5HJzogJ3ByZXByb2Nlc3NpbmcnLFxuICAnU1RBVEVfVVBMT0FESU5HJzogJ3VwbG9hZGluZycsXG4gICdTVEFURV9QT1NUUFJPQ0VTU0lORyc6ICdwb3N0cHJvY2Vzc2luZycsXG4gICdTVEFURV9DT01QTEVURSc6ICdjb21wbGV0ZScsXG4gICdTVEFURV9QQVVTRUQnOiAncGF1c2VkJ1xufTtcblxuZnVuY3Rpb24gZ2V0VXBsb2FkaW5nU3RhdGUoaXNBbGxFcnJvcmVkLCBpc0FsbENvbXBsZXRlLCBpc0FsbFBhdXNlZCkge1xuICB2YXIgZmlsZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gIGlmIChpc0FsbEVycm9yZWQpIHtcbiAgICByZXR1cm4gdXBsb2FkU3RhdGVzLlNUQVRFX0VSUk9SO1xuICB9XG5cbiAgaWYgKGlzQWxsQ29tcGxldGUpIHtcbiAgICByZXR1cm4gdXBsb2FkU3RhdGVzLlNUQVRFX0NPTVBMRVRFO1xuICB9XG5cbiAgaWYgKGlzQWxsUGF1c2VkKSB7XG4gICAgcmV0dXJuIHVwbG9hZFN0YXRlcy5TVEFURV9QQVVTRUQ7XG4gIH1cblxuICB2YXIgc3RhdGUgPSB1cGxvYWRTdGF0ZXMuU1RBVEVfV0FJVElORztcbiAgdmFyIGZpbGVJRHMgPSBPYmplY3Qua2V5cyhmaWxlcyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZUlEcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwcm9ncmVzcyA9IGZpbGVzW2ZpbGVJRHNbaV1dLnByb2dyZXNzO1xuICAgIC8vIElmIEFOWSBmaWxlcyBhcmUgYmVpbmcgdXBsb2FkZWQgcmlnaHQgbm93LCBzaG93IHRoZSB1cGxvYWRpbmcgc3RhdGUuXG4gICAgaWYgKHByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQgJiYgIXByb2dyZXNzLnVwbG9hZENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4gdXBsb2FkU3RhdGVzLlNUQVRFX1VQTE9BRElORztcbiAgICB9XG4gICAgLy8gSWYgZmlsZXMgYXJlIGJlaW5nIHByZXByb2Nlc3NlZCBBTkQgcG9zdHByb2Nlc3NlZCBhdCB0aGlzIHRpbWUsIHdlIHNob3cgdGhlXG4gICAgLy8gcHJlcHJvY2VzcyBzdGF0ZS4gSWYgYW55IGZpbGVzIGFyZSBiZWluZyB1cGxvYWRlZCB3ZSBzaG93IHVwbG9hZGluZy5cbiAgICBpZiAocHJvZ3Jlc3MucHJlcHJvY2VzcyAmJiBzdGF0ZSAhPT0gdXBsb2FkU3RhdGVzLlNUQVRFX1VQTE9BRElORykge1xuICAgICAgc3RhdGUgPSB1cGxvYWRTdGF0ZXMuU1RBVEVfUFJFUFJPQ0VTU0lORztcbiAgICB9XG4gICAgLy8gSWYgTk8gZmlsZXMgYXJlIGJlaW5nIHByZXByb2Nlc3NlZCBvciB1cGxvYWRlZCByaWdodCBub3csIGJ1dCBzb21lIGZpbGVzIGFyZVxuICAgIC8vIGJlaW5nIHBvc3Rwcm9jZXNzZWQsIHNob3cgdGhlIHBvc3Rwcm9jZXNzIHN0YXRlLlxuICAgIGlmIChwcm9ncmVzcy5wb3N0cHJvY2VzcyAmJiBzdGF0ZSAhPT0gdXBsb2FkU3RhdGVzLlNUQVRFX1VQTE9BRElORyAmJiBzdGF0ZSAhPT0gdXBsb2FkU3RhdGVzLlNUQVRFX1BSRVBST0NFU1NJTkcpIHtcbiAgICAgIHN0YXRlID0gdXBsb2FkU3RhdGVzLlNUQVRFX1BPU1RQUk9DRVNTSU5HO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIFVwbG9hZFN0YXR1cyhwcm9wcykge1xuICB2YXIgdXBsb2FkaW5nU3RhdGUgPSBnZXRVcGxvYWRpbmdTdGF0ZShwcm9wcy5pc0FsbEVycm9yZWQsIHByb3BzLmlzQWxsQ29tcGxldGUsIHByb3BzLmlzQWxsUGF1c2VkLCBwcm9wcy5maWxlcyk7XG5cbiAgc3dpdGNoICh1cGxvYWRpbmdTdGF0ZSkge1xuICAgIGNhc2UgJ3VwbG9hZGluZyc6XG4gICAgICByZXR1cm4gcHJvcHMuaTE4bigndXBsb2FkaW5nWEZpbGVzJywgeyBzbWFydF9jb3VudDogcHJvcHMuaW5Qcm9ncmVzc05vdFBhdXNlZEZpbGVzLmxlbmd0aCB9KTtcbiAgICBjYXNlICdwcmVwcm9jZXNzaW5nJzpcbiAgICBjYXNlICdwb3N0cHJvY2Vzc2luZyc6XG4gICAgICByZXR1cm4gcHJvcHMuaTE4bigncHJvY2Vzc2luZ1hGaWxlcycsIHsgc21hcnRfY291bnQ6IHByb3BzLnByb2Nlc3NpbmdGaWxlcy5sZW5ndGggfSk7XG4gICAgY2FzZSAncGF1c2VkJzpcbiAgICAgIHJldHVybiBwcm9wcy5pMThuKCd1cGxvYWRQYXVzZWQnKTtcbiAgICBjYXNlICd3YWl0aW5nJzpcbiAgICAgIHJldHVybiBwcm9wcy5pMThuKCd4RmlsZXNTZWxlY3RlZCcsIHsgc21hcnRfY291bnQ6IHByb3BzLm5ld0ZpbGVzLmxlbmd0aCB9KTtcbiAgICBjYXNlICdjb21wbGV0ZSc6XG4gICAgICByZXR1cm4gcHJvcHMuaTE4bigndXBsb2FkQ29tcGxldGUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBQYW5lbFRvcEJhcihwcm9wcykge1xuICB2YXIgYWxsb3dOZXdVcGxvYWQgPSBwcm9wcy5hbGxvd05ld1VwbG9hZDtcbiAgLy8gVE9ETyBtYXliZSB0aGlzIHNob3VsZCBiZSBkb25lIGluIC4uL2luZGV4LmpzLCB0aGVuIGp1c3QgcGFzcyB0aGF0IGRvd24gYXMgYGFsbG93TmV3VXBsb2FkYFxuICBpZiAoYWxsb3dOZXdVcGxvYWQgJiYgcHJvcHMubWF4TnVtYmVyT2ZGaWxlcykge1xuICAgIGFsbG93TmV3VXBsb2FkID0gcHJvcHMudG90YWxGaWxlQ291bnQgPCBwcm9wcy5tYXhOdW1iZXJPZkZpbGVzO1xuICB9XG5cbiAgcmV0dXJuIGgoXG4gICAgJ2RpdicsXG4gICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRDb250ZW50LWJhcicgfSxcbiAgICBoKFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgIXByb3BzLmlzQWxsQ29tcGxldGUgPyBoKFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRDb250ZW50LWJhY2snLFxuICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIG9uY2xpY2s6IHByb3BzLmNhbmNlbEFsbCB9LFxuICAgICAgICBwcm9wcy5pMThuKCdjYW5jZWwnKVxuICAgICAgKSA6IG51bGxcbiAgICApLFxuICAgIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC10aXRsZScsIHJvbGU6ICdoZWFkaW5nJywgJ2FyaWEtbGV2ZWwnOiAnaDEnIH0sXG4gICAgICBoKFVwbG9hZFN0YXR1cywgcHJvcHMpXG4gICAgKSxcbiAgICBhbGxvd05ld1VwbG9hZCAmJiBoKFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtYWRkTW9yZScsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmkxOG4oJ2FkZE1vcmVGaWxlcycpLFxuICAgICAgICB0aXRsZTogcHJvcHMuaTE4bignYWRkTW9yZUZpbGVzJyksXG4gICAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uIG9uY2xpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLnRvZ2dsZUFkZEZpbGVzUGFuZWwodHJ1ZSk7XG4gICAgICAgIH0gfSxcbiAgICAgIGgoXG4gICAgICAgICdzdmcnLFxuICAgICAgICB7ICdjbGFzcyc6ICdVcHB5SWNvbicsIHdpZHRoOiAnMTUnLCBoZWlnaHQ6ICcxNScsIHZpZXdCb3g6ICcwIDAgMTMgMTMnLCB2ZXJzaW9uOiAnMS4xJywgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgfSxcbiAgICAgICAgaCgncGF0aCcsIHsgZDogJ003LDYgTDEzLDYgTDEzLDcgTDcsNyBMNywxMyBMNiwxMyBMNiw3IEwwLDcgTDAsNiBMNiw2IEw2LDAgTDcsMCBMNyw2IFonIH0pXG4gICAgICApXG4gICAgKVxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbmVsVG9wQmFyOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGdldEZpbGVUeXBlSWNvbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldEZpbGVUeXBlSWNvbicpO1xudmFyIEZpbGVQcmV2aWV3ID0gcmVxdWlyZSgnLi9GaWxlUHJldmlldycpO1xudmFyIGlnbm9yZUV2ZW50ID0gcmVxdWlyZSgnLi4vdXRpbHMvaWdub3JlRXZlbnQuanMnKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgncHJlYWN0JyksXG4gICAgaCA9IF9yZXF1aXJlLmgsXG4gICAgQ29tcG9uZW50ID0gX3JlcXVpcmUuQ29tcG9uZW50O1xuXG52YXIgRmlsZUNhcmQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRmlsZUNhcmQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZpbGVDYXJkKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbGVDYXJkKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMubWV0YSA9IHt9O1xuXG4gICAgX3RoaXMudGVtcFN0b3JlTWV0YU9yU3VibWl0ID0gX3RoaXMudGVtcFN0b3JlTWV0YU9yU3VibWl0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnJlbmRlck1ldGFGaWVsZHMgPSBfdGhpcy5yZW5kZXJNZXRhRmllbGRzLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZVNhdmUgPSBfdGhpcy5oYW5kbGVTYXZlLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUNhbmNlbCA9IF90aGlzLmhhbmRsZUNhbmNlbC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBGaWxlQ2FyZC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpczIuZmlyc3RJbnB1dCkgcmV0dXJuO1xuICAgICAgX3RoaXMyLmZpcnN0SW5wdXQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIH0sIDE1MCk7XG4gIH07XG5cbiAgRmlsZUNhcmQucHJvdG90eXBlLnRlbXBTdG9yZU1ldGFPclN1Ym1pdCA9IGZ1bmN0aW9uIHRlbXBTdG9yZU1ldGFPclN1Ym1pdChldikge1xuICAgIHZhciBmaWxlID0gdGhpcy5wcm9wcy5maWxlc1t0aGlzLnByb3BzLmZpbGVDYXJkRm9yXTtcblxuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5zYXZlRmlsZUNhcmQodGhpcy5tZXRhLCBmaWxlLmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gICAgdmFyIG5hbWUgPSBldi50YXJnZXQuZGF0YXNldC5uYW1lO1xuICAgIHRoaXMubWV0YVtuYW1lXSA9IHZhbHVlO1xuICB9O1xuXG4gIEZpbGVDYXJkLnByb3RvdHlwZS5yZW5kZXJNZXRhRmllbGRzID0gZnVuY3Rpb24gcmVuZGVyTWV0YUZpZWxkcyhmaWxlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgbWV0YUZpZWxkcyA9IHRoaXMucHJvcHMubWV0YUZpZWxkcyB8fCBbXTtcbiAgICByZXR1cm4gbWV0YUZpZWxkcy5tYXAoZnVuY3Rpb24gKGZpZWxkLCBpKSB7XG4gICAgICByZXR1cm4gaChcbiAgICAgICAgJ2ZpZWxkc2V0JyxcbiAgICAgICAgeyAnY2xhc3MnOiAndXBweS1EYXNoYm9hcmRGaWxlQ2FyZC1maWVsZHNldCcgfSxcbiAgICAgICAgaChcbiAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkRmlsZUNhcmQtbGFiZWwnIH0sXG4gICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICApLFxuICAgICAgICBoKCdpbnB1dCcsIHsgJ2NsYXNzJzogJ3VwcHktYy10ZXh0SW5wdXQgdXBweS1EYXNoYm9hcmRGaWxlQ2FyZC1pbnB1dCcsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICdkYXRhLW5hbWUnOiBmaWVsZC5pZCxcbiAgICAgICAgICB2YWx1ZTogZmlsZS5tZXRhW2ZpZWxkLmlkXSxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXG4gICAgICAgICAgb25rZXl1cDogX3RoaXMzLnRlbXBTdG9yZU1ldGFPclN1Ym1pdCxcbiAgICAgICAgICBvbmtleWRvd246IF90aGlzMy50ZW1wU3RvcmVNZXRhT3JTdWJtaXQsXG4gICAgICAgICAgb25rZXlwcmVzczogX3RoaXMzLnRlbXBTdG9yZU1ldGFPclN1Ym1pdCxcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIF90aGlzMy5maXJzdElucHV0ID0gZWw7XG4gICAgICAgICAgfSB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBGaWxlQ2FyZC5wcm90b3R5cGUuaGFuZGxlU2F2ZSA9IGZ1bmN0aW9uIGhhbmRsZVNhdmUoZXYpIHtcbiAgICB2YXIgZmlsZUlEID0gdGhpcy5wcm9wcy5maWxlQ2FyZEZvcjtcbiAgICB0aGlzLnByb3BzLnNhdmVGaWxlQ2FyZCh0aGlzLm1ldGEsIGZpbGVJRCk7XG4gIH07XG5cbiAgRmlsZUNhcmQucHJvdG90eXBlLmhhbmRsZUNhbmNlbCA9IGZ1bmN0aW9uIGhhbmRsZUNhbmNlbChldikge1xuICAgIHRoaXMubWV0YSA9IHt9O1xuICAgIHRoaXMucHJvcHMudG9nZ2xlRmlsZUNhcmQoKTtcbiAgfTtcblxuICBGaWxlQ2FyZC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBmaWxlID0gdGhpcy5wcm9wcy5maWxlc1t0aGlzLnByb3BzLmZpbGVDYXJkRm9yXTtcblxuICAgIHJldHVybiBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEZpbGVDYXJkJyxcbiAgICAgICAgb25EcmFnT3ZlcjogaWdub3JlRXZlbnQsXG4gICAgICAgIG9uRHJhZ0xlYXZlOiBpZ25vcmVFdmVudCxcbiAgICAgICAgb25Ecm9wOiBpZ25vcmVFdmVudCxcbiAgICAgICAgb25QYXN0ZTogaWdub3JlRXZlbnQgfSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtYmFyJyB9LFxuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC10aXRsZScsIHJvbGU6ICdoZWFkaW5nJywgJ2FyaWEtbGV2ZWwnOiAnaDEnIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5pMThuQXJyYXkoJ2VkaXRpbmcnLCB7XG4gICAgICAgICAgICBmaWxlOiBoKFxuICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkQ29udGVudC10aXRsZUZpbGUnIH0sXG4gICAgICAgICAgICAgIGZpbGUubWV0YSA/IGZpbGUubWV0YS5uYW1lIDogZmlsZS5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgaChcbiAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZENvbnRlbnQtYmFjaycsIHR5cGU6ICdidXR0b24nLCB0aXRsZTogdGhpcy5wcm9wcy5pMThuKCdmaW5pc2hFZGl0aW5nRmlsZScpLFxuICAgICAgICAgICAgb25jbGljazogdGhpcy5oYW5kbGVTYXZlIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5pMThuKCdkb25lJylcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZEZpbGVDYXJkLWlubmVyJyB9LFxuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkRmlsZUNhcmQtcHJldmlldycsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogZ2V0RmlsZVR5cGVJY29uKGZpbGUudHlwZSkuY29sb3IgfSB9LFxuICAgICAgICAgIGgoRmlsZVByZXZpZXcsIHsgZmlsZTogZmlsZSB9KVxuICAgICAgICApLFxuICAgICAgICBoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktRGFzaGJvYXJkRmlsZUNhcmQtaW5mbycgfSxcbiAgICAgICAgICB0aGlzLnJlbmRlck1ldGFGaWVsZHMoZmlsZSlcbiAgICAgICAgKSxcbiAgICAgICAgaChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LURhc2hib2FyZC1hY3Rpb25zJyB9LFxuICAgICAgICAgIGgoXG4gICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgIHsgJ2NsYXNzJzogJ3VwcHktdS1yZXNldCB1cHB5LWMtYnRuIHVwcHktYy1idG4tcHJpbWFyeSB1cHB5LURhc2hib2FyZC1hY3Rpb25zQnRuJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgIG9uY2xpY2s6IHRoaXMuaGFuZGxlU2F2ZSB9LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pMThuKCdzYXZlQ2hhbmdlcycpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBoKFxuICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LXUtcmVzZXQgdXBweS1jLWJ0biB1cHB5LWMtYnRuLWxpbmsgdXBweS1EYXNoYm9hcmQtYWN0aW9uc0J0bicsXG4gICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICBvbmNsaWNrOiB0aGlzLmhhbmRsZUNhbmNlbCB9LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pMThuKCdjYW5jZWwnKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIEZpbGVDYXJkO1xufShDb21wb25lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbGVDYXJkOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNUb3VjaERldmljZSgpIHtcbiAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCAvLyB3b3JrcyBvbiBtb3N0IGJyb3dzZXJzXG4gIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50czsgLy8gd29ya3Mgb24gSUUxMC8xMSBhbmQgU3VyZmFjZVxufTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgncHJlYWN0JykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsncHJlYWN0J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbC5QcmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgPSBmYWN0b3J5KGdsb2JhbC5wcmVhY3QpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChwcmVhY3QpIHsgJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBnZXRLZXkodm5vZGUpIHtcblx0cmV0dXJuIHZub2RlLmF0dHJpYnV0ZXMgJiYgdm5vZGUuYXR0cmlidXRlcy5rZXk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudEJhc2UoY29tcG9uZW50KSB7XG5cdHJldHVybiBjb21wb25lbnQuYmFzZTtcbn1cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG5cdHJldHVybiBjaGlsZHJlbiAmJiBjaGlsZHJlblswXTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyTnVsbENoaWxkcmVuKGNoaWxkcmVuKSB7XG5cdHJldHVybiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcblx0XHRyZXR1cm4gaSAhPT0gbnVsbDtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGZpbmQoYXJyLCBpdGVyKSB7XG5cdGZvciAodmFyIGkgPSBhcnIubGVuZ3RoOyBpLS07KSB7XG5cdFx0aWYgKGl0ZXIoYXJyW2ldKSkgcmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpbkNoaWxkcmVuQnlLZXkoY2hpbGRyZW4sIGtleSkge1xuXHRyZXR1cm4gZmluZChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gZ2V0S2V5KGMpID09PSBrZXk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpbkNoaWxkcmVuKGNoaWxkcmVuLCBjaGlsZCkge1xuXHRyZXR1cm4gaW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBnZXRLZXkoY2hpbGQpKTtcbn1cblxuZnVuY3Rpb24gaXNTaG93bkluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwga2V5LCBzaG93UHJvcCkge1xuXHRyZXR1cm4gZmluZChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gZ2V0S2V5KGMpID09PSBrZXkgJiYgYy5wcm9wc1tzaG93UHJvcF07XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpc1Nob3duSW5DaGlsZHJlbihjaGlsZHJlbiwgY2hpbGQsIHNob3dQcm9wKSB7XG5cdHJldHVybiBpc1Nob3duSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBnZXRLZXkoY2hpbGQpLCBzaG93UHJvcCk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2LCBuZXh0KSB7XG5cdHZhciByZXQgPSBbXTtcblxuXHR2YXIgbmV4dENoaWxkcmVuUGVuZGluZyA9IHt9LFxuXHQgICAgcGVuZGluZ0NoaWxkcmVuID0gW107XG5cdHByZXYuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuXHRcdHZhciBrZXkgPSBnZXRLZXkoYyk7XG5cdFx0aWYgKGluQ2hpbGRyZW5CeUtleShuZXh0LCBrZXkpKSB7XG5cdFx0XHRpZiAocGVuZGluZ0NoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0XHRuZXh0Q2hpbGRyZW5QZW5kaW5nW2tleV0gPSBwZW5kaW5nQ2hpbGRyZW47XG5cdFx0XHRcdHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRwZW5kaW5nQ2hpbGRyZW4ucHVzaChjKTtcblx0XHR9XG5cdH0pO1xuXG5cdG5leHQuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuXHRcdHZhciBrZXkgPSBnZXRLZXkoYyk7XG5cdFx0aWYgKG5leHRDaGlsZHJlblBlbmRpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmV0ID0gcmV0LmNvbmNhdChuZXh0Q2hpbGRyZW5QZW5kaW5nW2tleV0pO1xuXHRcdH1cblx0XHRyZXQucHVzaChjKTtcblx0fSk7XG5cblx0cmV0dXJuIHJldC5jb25jYXQocGVuZGluZ0NoaWxkcmVuKTtcbn1cblxudmFyIFNQQUNFID0gJyAnO1xudmFyIFJFX0NMQVNTID0gL1tcXG5cXHRcXHJdKy9nO1xuXG52YXIgbm9ybSA9IGZ1bmN0aW9uIChlbGVtQ2xhc3MpIHtcblx0cmV0dXJuIChTUEFDRSArIGVsZW1DbGFzcyArIFNQQUNFKS5yZXBsYWNlKFJFX0NMQVNTLCBTUEFDRSk7XG59O1xuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcblx0aWYgKGVsZW0uY2xhc3NMaXN0KSB7XG5cdFx0dmFyIF9lbGVtJGNsYXNzTGlzdDtcblxuXHRcdChfZWxlbSRjbGFzc0xpc3QgPSBlbGVtLmNsYXNzTGlzdCkuYWRkLmFwcGx5KF9lbGVtJGNsYXNzTGlzdCwgY2xhc3NOYW1lLnNwbGl0KCcgJykpO1xuXHR9IGVsc2Uge1xuXHRcdGVsZW0uY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtLCBuZWVkbGUpIHtcblx0bmVlZGxlID0gbmVlZGxlLnRyaW0oKTtcblx0aWYgKGVsZW0uY2xhc3NMaXN0KSB7XG5cdFx0dmFyIF9lbGVtJGNsYXNzTGlzdDI7XG5cblx0XHQoX2VsZW0kY2xhc3NMaXN0MiA9IGVsZW0uY2xhc3NMaXN0KS5yZW1vdmUuYXBwbHkoX2VsZW0kY2xhc3NMaXN0MiwgbmVlZGxlLnNwbGl0KCcgJykpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBlbGVtQ2xhc3MgPSBlbGVtLmNsYXNzTmFtZS50cmltKCk7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IG5vcm0oZWxlbUNsYXNzKTtcblx0XHRuZWVkbGUgPSBTUEFDRSArIG5lZWRsZSArIFNQQUNFO1xuXHRcdHdoaWxlIChjbGFzc05hbWUuaW5kZXhPZihuZWVkbGUpID49IDApIHtcblx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKG5lZWRsZSwgU1BBQ0UpO1xuXHRcdH1cblx0XHRlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZS50cmltKCk7XG5cdH1cbn1cblxudmFyIEVWRU5UX05BTUVfTUFQID0ge1xuXHR0cmFuc2l0aW9uZW5kOiB7XG5cdFx0dHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuXHRcdFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcblx0XHRNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvbkVuZCcsXG5cdFx0T1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG5cdFx0bXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJ1xuXHR9LFxuXG5cdGFuaW1hdGlvbmVuZDoge1xuXHRcdGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG5cdFx0V2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcblx0XHRNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuXHRcdE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcblx0XHRtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uRW5kJ1xuXHR9XG59O1xuXG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcblx0dmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHQgICAgc3R5bGUgPSB0ZXN0RWwuc3R5bGU7XG5cblx0aWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG5cdFx0ZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG5cdH1cblxuXHRpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG5cdFx0ZGVsZXRlIEVWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcblx0fVxuXG5cdGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcblx0XHR2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuXHRcdGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG5cdFx0XHRpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG5cdFx0XHRcdGVuZEV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ZGV0ZWN0RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuXHRpZiAoIWVuZEV2ZW50cy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG5cdH1cblx0ZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGVuZEV2ZW50LCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcblx0aWYgKCFlbmRFdmVudHMubGVuZ3RoKSByZXR1cm47XG5cdGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuXHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbmRFdmVudCwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuXHR9KTtcbn1cblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBvYmplY3RXaXRob3V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciBUSUNLID0gMTc7XG5cbnZhciBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdGluaGVyaXRzKENTU1RyYW5zaXRpb25Hcm91cENoaWxkLCBfQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCgpIHtcblx0XHR2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQpO1xuXG5cdFx0Zm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0XHRcdGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuZmx1c2hDbGFzc05hbWVRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChnZXRDb21wb25lbnRCYXNlKF90aGlzKSkge1xuXHRcdFx0XHRhZGRDbGFzcyhnZXRDb21wb25lbnRCYXNlKF90aGlzKSwgX3RoaXMuY2xhc3NOYW1lUXVldWUuam9pbignICcpKTtcblx0XHRcdH1cblx0XHRcdF90aGlzLmNsYXNzTmFtZVF1ZXVlLmxlbmd0aCA9IDA7XG5cdFx0XHRfdGhpcy50aW1lb3V0ID0gbnVsbDtcblx0XHR9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuXHR9XG5cblx0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLnRyYW5zaXRpb24gPSBmdW5jdGlvbiB0cmFuc2l0aW9uKGFuaW1hdGlvblR5cGUsIGZpbmlzaENhbGxiYWNrLCB0aW1lb3V0KSB7XG5cdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHR2YXIgbm9kZSA9IGdldENvbXBvbmVudEJhc2UodGhpcyk7XG5cblx0XHR2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5uYW1lW2FuaW1hdGlvblR5cGVdIHx8IHRoaXMucHJvcHMubmFtZSArICctJyArIGFuaW1hdGlvblR5cGU7XG5cdFx0dmFyIGFjdGl2ZUNsYXNzTmFtZSA9IHRoaXMucHJvcHMubmFtZVthbmltYXRpb25UeXBlICsgJ0FjdGl2ZSddIHx8IGNsYXNzTmFtZSArICctYWN0aXZlJztcblx0XHR2YXIgdGltZXIgPSBudWxsO1xuXG5cdFx0aWYgKHRoaXMuZW5kTGlzdGVuZXIpIHtcblx0XHRcdHRoaXMuZW5kTGlzdGVuZXIoKTtcblx0XHR9XG5cblx0XHR0aGlzLmVuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcblx0XHRcdGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSByZXR1cm47XG5cblx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0XHRyZW1vdmVDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuXHRcdFx0cmVtb3ZlQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcblx0XHRcdHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgX3RoaXMyLmVuZExpc3RlbmVyKTtcblx0XHRcdF90aGlzMi5lbmRMaXN0ZW5lciA9IG51bGw7XG5cblx0XHRcdGlmIChmaW5pc2hDYWxsYmFjaykge1xuXHRcdFx0XHRmaW5pc2hDYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZiAodGltZW91dCkge1xuXHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuZW5kTGlzdGVuZXIsIHRpbWVvdXQpO1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uVGltZW91dHMucHVzaCh0aW1lcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgdGhpcy5lbmRMaXN0ZW5lcik7XG5cdFx0fVxuXG5cdFx0YWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcblxuXHRcdHRoaXMucXVldWVDbGFzcyhhY3RpdmVDbGFzc05hbWUpO1xuXHR9O1xuXG5cdENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS5xdWV1ZUNsYXNzID0gZnVuY3Rpb24gcXVldWVDbGFzcyhjbGFzc05hbWUpIHtcblx0XHR0aGlzLmNsYXNzTmFtZVF1ZXVlLnB1c2goY2xhc3NOYW1lKTtcblxuXHRcdGlmICghdGhpcy50aW1lb3V0KSB7XG5cdFx0XHR0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuZmx1c2hDbGFzc05hbWVRdWV1ZSwgVElDSyk7XG5cdFx0fVxuXHR9O1xuXG5cdENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcblx0XHRpZiAodGhpcy50aW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblx0XHRcdHRoaXMuY2xhc3NOYW1lUXVldWUubGVuZ3RoID0gMDtcblx0XHRcdHRoaXMudGltZW91dCA9IG51bGw7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmVuZExpc3RlbmVyKSB7XG5cdFx0XHR0aGlzLmVuZExpc3RlbmVyKCk7XG5cdFx0fVxuXHR9O1xuXG5cdENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5jbGFzc05hbWVRdWV1ZSA9IFtdO1xuXHRcdHRoaXMudHJhbnNpdGlvblRpbWVvdXRzID0gW107XG5cdH07XG5cblx0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0aWYgKHRoaXMudGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cdFx0fVxuXHRcdHRoaXMudHJhbnNpdGlvblRpbWVvdXRzLmZvckVhY2goZnVuY3Rpb24gKHRpbWVvdXQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR9KTtcblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUuY29tcG9uZW50V2lsbEVudGVyID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbEVudGVyKGRvbmUpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5lbnRlcikge1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uKCdlbnRlcicsIGRvbmUsIHRoaXMucHJvcHMuZW50ZXJUaW1lb3V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9uZSgpO1xuXHRcdH1cblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUuY29tcG9uZW50V2lsbExlYXZlID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbExlYXZlKGRvbmUpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5sZWF2ZSkge1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uKCdsZWF2ZScsIGRvbmUsIHRoaXMucHJvcHMubGVhdmVUaW1lb3V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9uZSgpO1xuXHRcdH1cblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdHJldHVybiBvbmx5Q2hpbGQodGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cdH07XG5cblx0cmV0dXJuIENTU1RyYW5zaXRpb25Hcm91cENoaWxkO1xufShwcmVhY3QuQ29tcG9uZW50KTtcblxudmFyIENTU1RyYW5zaXRpb25Hcm91cCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdGluaGVyaXRzKENTU1RyYW5zaXRpb25Hcm91cCwgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQ1NTVHJhbnNpdGlvbkdyb3VwKHByb3BzKSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTVHJhbnNpdGlvbkdyb3VwKTtcblxuXHRcdHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMpKTtcblxuXHRcdF90aGlzLnJlbmRlckNoaWxkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG5cdFx0XHR2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcztcblx0XHRcdHZhciB0cmFuc2l0aW9uTmFtZSA9IF90aGlzJHByb3BzLnRyYW5zaXRpb25OYW1lO1xuXHRcdFx0dmFyIHRyYW5zaXRpb25FbnRlciA9IF90aGlzJHByb3BzLnRyYW5zaXRpb25FbnRlcjtcblx0XHRcdHZhciB0cmFuc2l0aW9uTGVhdmUgPSBfdGhpcyRwcm9wcy50cmFuc2l0aW9uTGVhdmU7XG5cdFx0XHR2YXIgdHJhbnNpdGlvbkVudGVyVGltZW91dCA9IF90aGlzJHByb3BzLnRyYW5zaXRpb25FbnRlclRpbWVvdXQ7XG5cdFx0XHR2YXIgdHJhbnNpdGlvbkxlYXZlVGltZW91dCA9IF90aGlzJHByb3BzLnRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ7XG5cdFx0XHR2YXIga2V5ID0gZ2V0S2V5KGNoaWxkKTtcblx0XHRcdHJldHVybiBwcmVhY3QuaChcblx0XHRcdFx0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRrZXk6IGtleSxcblx0XHRcdFx0XHRyZWY6IGZ1bmN0aW9uIChjKSB7XG5cdFx0XHRcdFx0XHRpZiAoIShfdGhpcy5yZWZzW2tleV0gPSBjKSkgY2hpbGQgPSBudWxsO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bmFtZTogdHJhbnNpdGlvbk5hbWUsXG5cdFx0XHRcdFx0ZW50ZXI6IHRyYW5zaXRpb25FbnRlcixcblx0XHRcdFx0XHRsZWF2ZTogdHJhbnNpdGlvbkxlYXZlLFxuXHRcdFx0XHRcdGVudGVyVGltZW91dDogdHJhbnNpdGlvbkVudGVyVGltZW91dCxcblx0XHRcdFx0XHRsZWF2ZVRpbWVvdXQ6IHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQgfSxcblx0XHRcdFx0Y2hpbGRcblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdF90aGlzLnJlZnMgPSB7fTtcblx0XHRfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNoaWxkcmVuOiAocHJvcHMuY2hpbGRyZW4gfHwgW10pLnNsaWNlKClcblx0XHR9O1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdENTU1RyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKF8sIF9yZWYpIHtcblx0XHR2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuXG5cdFx0cmV0dXJuIGNoaWxkcmVuICE9PSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuXHR9O1xuXG5cdENTU1RyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXMgPSB7fTtcblx0XHR0aGlzLmtleXNUb0VudGVyID0gW107XG5cdFx0dGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuXHR9O1xuXG5cdENTU1RyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoX3JlZjIpIHtcblx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdHZhciBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuO1xuXHRcdHZhciBleGNsdXNpdmUgPSBfcmVmMi5leGNsdXNpdmU7XG5cdFx0dmFyIHNob3dQcm9wID0gX3JlZjIuc2hvd1Byb3A7XG5cblx0XHR2YXIgbmV4dENoaWxkTWFwcGluZyA9IGZpbHRlck51bGxDaGlsZHJlbihjaGlsZHJlbiB8fCBbXSkuc2xpY2UoKTtcblxuXHRcdHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gZmlsdGVyTnVsbENoaWxkcmVuKGV4Y2x1c2l2ZSA/IHRoaXMucHJvcHMuY2hpbGRyZW4gOiB0aGlzLnN0YXRlLmNoaWxkcmVuKTtcblxuXHRcdHZhciBuZXdDaGlsZHJlbiA9IG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2Q2hpbGRNYXBwaW5nLCBuZXh0Q2hpbGRNYXBwaW5nKTtcblxuXHRcdGlmIChzaG93UHJvcCkge1xuXHRcdFx0bmV3Q2hpbGRyZW4gPSBuZXdDaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGMpIHtcblx0XHRcdFx0aWYgKCFjLnByb3BzW3Nob3dQcm9wXSAmJiBpc1Nob3duSW5DaGlsZHJlbihwcmV2Q2hpbGRNYXBwaW5nLCBjLCBzaG93UHJvcCkpIHtcblx0XHRcdFx0XHR2YXIgX2Nsb25lRWxlbWVudDtcblxuXHRcdFx0XHRcdGMgPSBwcmVhY3QuY2xvbmVFbGVtZW50KGMsIChfY2xvbmVFbGVtZW50ID0ge30sIF9jbG9uZUVsZW1lbnRbc2hvd1Byb3BdID0gdHJ1ZSwgX2Nsb25lRWxlbWVudCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGV4Y2x1c2l2ZSkge1xuXHRcdFx0bmV3Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoYykge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMyLnN0b3AoZ2V0S2V5KGMpKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBjaGlsZHJlbjogbmV3Q2hpbGRyZW4gfSk7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXG5cdFx0bmV4dENoaWxkTWFwcGluZy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG5cdFx0XHR2YXIga2V5ID0gYy5rZXk7XG5cdFx0XHR2YXIgaGFzUHJldiA9IHByZXZDaGlsZE1hcHBpbmcgJiYgaW5DaGlsZHJlbihwcmV2Q2hpbGRNYXBwaW5nLCBjKTtcblx0XHRcdGlmIChzaG93UHJvcCkge1xuXHRcdFx0XHRpZiAoaGFzUHJldikge1xuXHRcdFx0XHRcdHZhciBzaG93SW5QcmV2ID0gaXNTaG93bkluQ2hpbGRyZW4ocHJldkNoaWxkTWFwcGluZywgYywgc2hvd1Byb3ApLFxuXHRcdFx0XHRcdCAgICBzaG93SW5Ob3cgPSBjLnByb3BzW3Nob3dQcm9wXTtcblx0XHRcdFx0XHRpZiAoIXNob3dJblByZXYgJiYgc2hvd0luTm93ICYmICFfdGhpczIuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSkge1xuXHRcdFx0XHRcdFx0X3RoaXMyLmtleXNUb0VudGVyLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIWhhc1ByZXYgJiYgIV90aGlzMi5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldKSB7XG5cdFx0XHRcdF90aGlzMi5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRwcmV2Q2hpbGRNYXBwaW5nLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcblx0XHRcdHZhciBrZXkgPSBjLmtleTtcblx0XHRcdHZhciBoYXNOZXh0ID0gbmV4dENoaWxkTWFwcGluZyAmJiBpbkNoaWxkcmVuKG5leHRDaGlsZE1hcHBpbmcsIGMpO1xuXHRcdFx0aWYgKHNob3dQcm9wKSB7XG5cdFx0XHRcdGlmIChoYXNOZXh0KSB7XG5cdFx0XHRcdFx0dmFyIHNob3dJbk5leHQgPSBpc1Nob3duSW5DaGlsZHJlbihuZXh0Q2hpbGRNYXBwaW5nLCBjLCBzaG93UHJvcCk7XG5cdFx0XHRcdFx0dmFyIHNob3dJbk5vdyA9IGMucHJvcHNbc2hvd1Byb3BdO1xuXHRcdFx0XHRcdGlmICghc2hvd0luTmV4dCAmJiBzaG93SW5Ob3cgJiYgIV90aGlzMi5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldKSB7XG5cdFx0XHRcdFx0XHRfdGhpczIua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghaGFzTmV4dCAmJiAhX3RoaXMyLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0pIHtcblx0XHRcdFx0X3RoaXMyLmtleXNUb0xlYXZlLnB1c2goa2V5KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIHBlcmZvcm1FbnRlcihrZXkpIHtcblx0XHR2YXIgX3RoaXMzID0gdGhpcztcblxuXHRcdHRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cdFx0dmFyIGNvbXBvbmVudCA9IHRoaXMucmVmc1trZXldO1xuXHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbEVudGVyKSB7XG5cdFx0XHRjb21wb25lbnQuY29tcG9uZW50V2lsbEVudGVyKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzMy5faGFuZGxlRG9uZUVudGVyaW5nKGtleSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5faGFuZGxlRG9uZUVudGVyaW5nKGtleSk7XG5cdFx0fVxuXHR9O1xuXG5cdENTU1RyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuX2hhbmRsZURvbmVFbnRlcmluZyA9IGZ1bmN0aW9uIF9oYW5kbGVEb25lRW50ZXJpbmcoa2V5KSB7XG5cdFx0ZGVsZXRlIHRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblx0XHR2YXIgY3VycmVudENoaWxkTWFwcGluZyA9IGZpbHRlck51bGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKSxcblx0XHQgICAgc2hvd1Byb3AgPSB0aGlzLnByb3BzLnNob3dQcm9wO1xuXHRcdGlmICghY3VycmVudENoaWxkTWFwcGluZyB8fCAhc2hvd1Byb3AgJiYgIWluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRNYXBwaW5nLCBrZXkpIHx8IHNob3dQcm9wICYmICFpc1Nob3duSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZE1hcHBpbmcsIGtleSwgc2hvd1Byb3ApKSB7XG5cdFx0XHR0aGlzLnBlcmZvcm1MZWF2ZShrZXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgY2hpbGRyZW46IGN1cnJlbnRDaGlsZE1hcHBpbmcgfSk7XG5cdFx0fVxuXHR9O1xuXG5cdENTU1RyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3Aoa2V5KSB7XG5cdFx0ZGVsZXRlIHRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblx0XHR2YXIgY29tcG9uZW50ID0gdGhpcy5yZWZzW2tleV07XG5cdFx0aWYgKGNvbXBvbmVudCkgY29tcG9uZW50LnN0b3AoKTtcblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLnBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZShrZXkpIHtcblx0XHR2YXIgX3RoaXM0ID0gdGhpcztcblxuXHRcdHRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cdFx0dmFyIGNvbXBvbmVudCA9IHRoaXMucmVmc1trZXldO1xuXHRcdGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmNvbXBvbmVudFdpbGxMZWF2ZSkge1xuXHRcdFx0Y29tcG9uZW50LmNvbXBvbmVudFdpbGxMZWF2ZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpczQuX2hhbmRsZURvbmVMZWF2aW5nKGtleSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5faGFuZGxlRG9uZUxlYXZpbmcoa2V5KTtcblx0XHR9XG5cdH07XG5cblx0Q1NTVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5faGFuZGxlRG9uZUxlYXZpbmcgPSBmdW5jdGlvbiBfaGFuZGxlRG9uZUxlYXZpbmcoa2V5KSB7XG5cdFx0ZGVsZXRlIHRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblx0XHR2YXIgc2hvd1Byb3AgPSB0aGlzLnByb3BzLnNob3dQcm9wLFxuXHRcdCAgICBjdXJyZW50Q2hpbGRNYXBwaW5nID0gZmlsdGVyTnVsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXHRcdGlmIChzaG93UHJvcCAmJiBjdXJyZW50Q2hpbGRNYXBwaW5nICYmIGlzU2hvd25JbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkTWFwcGluZywga2V5LCBzaG93UHJvcCkpIHtcblx0XHRcdHRoaXMucGVyZm9ybUVudGVyKGtleSk7XG5cdFx0fSBlbHNlIGlmICghc2hvd1Byb3AgJiYgY3VycmVudENoaWxkTWFwcGluZyAmJiBpbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkTWFwcGluZywga2V5KSkge1xuXHRcdFx0dGhpcy5wZXJmb3JtRW50ZXIoa2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNoaWxkcmVuOiBjdXJyZW50Q2hpbGRNYXBwaW5nIH0pO1xuXHRcdH1cblx0fTtcblxuXHRDU1NUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHR2YXIgX3RoaXM1ID0gdGhpcztcblxuXHRcdHZhciBrZXlzVG9FbnRlciA9IHRoaXMua2V5c1RvRW50ZXI7XG5cdFx0dmFyIGtleXNUb0xlYXZlID0gdGhpcy5rZXlzVG9MZWF2ZTtcblxuXHRcdHRoaXMua2V5c1RvRW50ZXIgPSBbXTtcblx0XHRrZXlzVG9FbnRlci5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRyZXR1cm4gX3RoaXM1LnBlcmZvcm1FbnRlcihrKTtcblx0XHR9KTtcblx0XHR0aGlzLmtleXNUb0xlYXZlID0gW107XG5cdFx0a2V5c1RvTGVhdmUuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRcdFx0cmV0dXJuIF90aGlzNS5wZXJmb3JtTGVhdmUoayk7XG5cdFx0fSk7XG5cdH07XG5cblx0Q1NTVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoX3JlZjMsIF9yZWY0KSB7XG5cdFx0dmFyIENvbXBvbmVudCA9IF9yZWYzLmNvbXBvbmVudDtcblx0XHR2YXIgdHJhbnNpdGlvbk5hbWUgPSBfcmVmMy50cmFuc2l0aW9uTmFtZTtcblx0XHR2YXIgdHJhbnNpdGlvbkVudGVyID0gX3JlZjMudHJhbnNpdGlvbkVudGVyO1xuXHRcdHZhciB0cmFuc2l0aW9uTGVhdmUgPSBfcmVmMy50cmFuc2l0aW9uTGVhdmU7XG5cdFx0dmFyIHRyYW5zaXRpb25FbnRlclRpbWVvdXQgPSBfcmVmMy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0O1xuXHRcdHZhciB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0ID0gX3JlZjMudHJhbnNpdGlvbkxlYXZlVGltZW91dDtcblx0XHR2YXIgYyA9IF9yZWYzLmNoaWxkcmVuO1xuXHRcdHZhciBwcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYzLCBbJ2NvbXBvbmVudCcsICd0cmFuc2l0aW9uTmFtZScsICd0cmFuc2l0aW9uRW50ZXInLCAndHJhbnNpdGlvbkxlYXZlJywgJ3RyYW5zaXRpb25FbnRlclRpbWVvdXQnLCAndHJhbnNpdGlvbkxlYXZlVGltZW91dCcsICdjaGlsZHJlbiddKTtcblx0XHR2YXIgY2hpbGRyZW4gPSBfcmVmNC5jaGlsZHJlbjtcblxuXHRcdHJldHVybiBwcmVhY3QuaChcblx0XHRcdENvbXBvbmVudCxcblx0XHRcdHByb3BzLFxuXHRcdFx0ZmlsdGVyTnVsbENoaWxkcmVuKGNoaWxkcmVuKS5tYXAodGhpcy5yZW5kZXJDaGlsZClcblx0XHQpO1xuXHR9O1xuXG5cdHJldHVybiBDU1NUcmFuc2l0aW9uR3JvdXA7XG59KHByZWFjdC5Db21wb25lbnQpO1xuQ1NTVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnc3BhbicsXG5cdHRyYW5zaXRpb25FbnRlcjogdHJ1ZSxcblx0dHJhbnNpdGlvbkxlYXZlOiB0cnVlXG59O1xuXG5yZXR1cm4gQ1NTVHJhbnNpdGlvbkdyb3VwO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0LWNzcy10cmFuc2l0aW9uLWdyb3VwLmpzLm1hcFxuIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdAdXBweS9jb3JlJyksXG4gICAgUGx1Z2luID0gX3JlcXVpcmUuUGx1Z2luO1xuXG52YXIgVHJhbnNsYXRvciA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9UcmFuc2xhdG9yJyk7XG52YXIgU3RhdHVzQmFyVUkgPSByZXF1aXJlKCcuL1N0YXR1c0JhcicpO1xudmFyIHN0YXR1c0JhclN0YXRlcyA9IHJlcXVpcmUoJy4vU3RhdHVzQmFyU3RhdGVzJyk7XG52YXIgZ2V0U3BlZWQgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvZ2V0U3BlZWQnKTtcbnZhciBnZXRCeXRlc1JlbWFpbmluZyA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9nZXRCeXRlc1JlbWFpbmluZycpO1xuXG4vKipcbiAqIFN0YXR1c0JhcjogcmVuZGVycyBhIHN0YXR1cyBiYXIgd2l0aCB1cGxvYWQvcGF1c2UvcmVzdW1lL2NhbmNlbC9yZXRyeSBidXR0b25zLFxuICogcHJvZ3Jlc3MgcGVyY2VudGFnZSBhbmQgdGltZSByZW1haW5pbmcuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF9QbHVnaW4pIHtcbiAgX2luaGVyaXRzKFN0YXR1c0JhciwgX1BsdWdpbik7XG5cbiAgZnVuY3Rpb24gU3RhdHVzQmFyKHVwcHksIG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdHVzQmFyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9QbHVnaW4uY2FsbCh0aGlzLCB1cHB5LCBvcHRzKSk7XG5cbiAgICBfdGhpcy5pZCA9IF90aGlzLm9wdHMuaWQgfHwgJ1N0YXR1c0Jhcic7XG4gICAgX3RoaXMudGl0bGUgPSAnU3RhdHVzQmFyJztcbiAgICBfdGhpcy50eXBlID0gJ3Byb2dyZXNzaW5kaWNhdG9yJztcblxuICAgIHZhciBkZWZhdWx0TG9jYWxlID0ge1xuICAgICAgc3RyaW5nczoge1xuICAgICAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcnLFxuICAgICAgICB1cGxvYWQ6ICdVcGxvYWQnLFxuICAgICAgICBjb21wbGV0ZTogJ0NvbXBsZXRlJyxcbiAgICAgICAgdXBsb2FkRmFpbGVkOiAnVXBsb2FkIGZhaWxlZCcsXG4gICAgICAgIHBsZWFzZVByZXNzUmV0cnk6ICdQbGVhc2UgcHJlc3MgUmV0cnkgdG8gdXBsb2FkIGFnYWluJyxcbiAgICAgICAgcGF1c2VkOiAnUGF1c2VkJyxcbiAgICAgICAgZXJyb3I6ICdFcnJvcicsXG4gICAgICAgIHJldHJ5OiAnUmV0cnknLFxuICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICBwYXVzZTogJ1BhdXNlJyxcbiAgICAgICAgcmVzdW1lOiAnUmVzdW1lJyxcbiAgICAgICAgcHJlc3NUb1JldHJ5OiAnUHJlc3MgdG8gcmV0cnknLFxuICAgICAgICAvLyByZXRyeVVwbG9hZDogJ1JldHJ5IHVwbG9hZCcsXG4gICAgICAgIC8vIHJlc3VtZVVwbG9hZDogJ1Jlc3VtZSB1cGxvYWQnLFxuICAgICAgICAvLyBjYW5jZWxVcGxvYWQ6ICdDYW5jZWwgdXBsb2FkJyxcbiAgICAgICAgLy8gcGF1c2VVcGxvYWQ6ICdQYXVzZSB1cGxvYWQnLFxuICAgICAgICBmaWxlc1VwbG9hZGVkT2ZUb3RhbDoge1xuICAgICAgICAgIDA6ICcle2NvbXBsZXRlfSBvZiAle3NtYXJ0X2NvdW50fSBmaWxlIHVwbG9hZGVkJyxcbiAgICAgICAgICAxOiAnJXtjb21wbGV0ZX0gb2YgJXtzbWFydF9jb3VudH0gZmlsZXMgdXBsb2FkZWQnXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFVcGxvYWRlZE9mVG90YWw6ICcle2NvbXBsZXRlfSBvZiAle3RvdGFsfScsXG4gICAgICAgIHhUaW1lTGVmdDogJyV7dGltZX0gbGVmdCcsXG4gICAgICAgIHVwbG9hZFhGaWxlczoge1xuICAgICAgICAgIDA6ICdVcGxvYWQgJXtzbWFydF9jb3VudH0gZmlsZScsXG4gICAgICAgICAgMTogJ1VwbG9hZCAle3NtYXJ0X2NvdW50fSBmaWxlcydcbiAgICAgICAgfSxcbiAgICAgICAgdXBsb2FkWE5ld0ZpbGVzOiB7XG4gICAgICAgICAgMDogJ1VwbG9hZCArJXtzbWFydF9jb3VudH0gZmlsZScsXG4gICAgICAgICAgMTogJ1VwbG9hZCArJXtzbWFydF9jb3VudH0gZmlsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHhNb3JlRmlsZXNBZGRlZDoge1xuICAgICAgICAgIDA6ICcle3NtYXJ0X2NvdW50fSBtb3JlIGZpbGUgYWRkZWQnLFxuICAgICAgICAgIDE6ICcle3NtYXJ0X2NvdW50fSBtb3JlIGZpbGVzIGFkZGVkJ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgICB9O3ZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIHRhcmdldDogJ2JvZHknLFxuICAgICAgaGlkZVVwbG9hZEJ1dHRvbjogZmFsc2UsXG4gICAgICBoaWRlUmV0cnlCdXR0b246IGZhbHNlLFxuICAgICAgaGlkZVBhdXNlUmVzdW1lQnV0dG9uOiBmYWxzZSxcbiAgICAgIGhpZGVDYW5jZWxCdXR0b246IGZhbHNlLFxuICAgICAgc2hvd1Byb2dyZXNzRGV0YWlsczogZmFsc2UsXG4gICAgICBsb2NhbGU6IGRlZmF1bHRMb2NhbGUsXG4gICAgICBoaWRlQWZ0ZXJGaW5pc2g6IHRydWVcblxuICAgICAgLy8gbWVyZ2UgZGVmYXVsdCBvcHRpb25zIHdpdGggdGhlIG9uZXMgc2V0IGJ5IHVzZXJcbiAgICB9O190aGlzLm9wdHMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdHMpO1xuXG4gICAgX3RoaXMudHJhbnNsYXRvciA9IG5ldyBUcmFuc2xhdG9yKFtkZWZhdWx0TG9jYWxlLCBfdGhpcy51cHB5LmxvY2FsZSwgX3RoaXMub3B0cy5sb2NhbGVdKTtcbiAgICBfdGhpcy5pMThuID0gX3RoaXMudHJhbnNsYXRvci50cmFuc2xhdGUuYmluZChfdGhpcy50cmFuc2xhdG9yKTtcblxuICAgIF90aGlzLnN0YXJ0VXBsb2FkID0gX3RoaXMuc3RhcnRVcGxvYWQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMucmVuZGVyID0gX3RoaXMucmVuZGVyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmluc3RhbGwgPSBfdGhpcy5pbnN0YWxsLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFN0YXR1c0Jhci5wcm90b3R5cGUuZ2V0VG90YWxTcGVlZCA9IGZ1bmN0aW9uIGdldFRvdGFsU3BlZWQoZmlsZXMpIHtcbiAgICB2YXIgdG90YWxTcGVlZCA9IDA7XG4gICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgdG90YWxTcGVlZCA9IHRvdGFsU3BlZWQgKyBnZXRTcGVlZChmaWxlLnByb2dyZXNzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG90YWxTcGVlZDtcbiAgfTtcblxuICBTdGF0dXNCYXIucHJvdG90eXBlLmdldFRvdGFsRVRBID0gZnVuY3Rpb24gZ2V0VG90YWxFVEEoZmlsZXMpIHtcbiAgICB2YXIgdG90YWxTcGVlZCA9IHRoaXMuZ2V0VG90YWxTcGVlZChmaWxlcyk7XG4gICAgaWYgKHRvdGFsU3BlZWQgPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciB0b3RhbEJ5dGVzUmVtYWluaW5nID0gZmlsZXMucmVkdWNlKGZ1bmN0aW9uICh0b3RhbCwgZmlsZSkge1xuICAgICAgcmV0dXJuIHRvdGFsICsgZ2V0Qnl0ZXNSZW1haW5pbmcoZmlsZS5wcm9ncmVzcyk7XG4gICAgfSwgMCk7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbEJ5dGVzUmVtYWluaW5nIC8gdG90YWxTcGVlZCAqIDEwKSAvIDEwO1xuICB9O1xuXG4gIFN0YXR1c0Jhci5wcm90b3R5cGUuc3RhcnRVcGxvYWQgPSBmdW5jdGlvbiBzdGFydFVwbG9hZCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLnVwcHkudXBsb2FkKCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgX3RoaXMyLnVwcHkubG9nKGVyci5zdGFjayB8fCBlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgLy8gSWdub3JlXG4gICAgfSk7XG4gIH07XG5cbiAgU3RhdHVzQmFyLnByb3RvdHlwZS5nZXRVcGxvYWRpbmdTdGF0ZSA9IGZ1bmN0aW9uIGdldFVwbG9hZGluZ1N0YXRlKGlzQWxsRXJyb3JlZCwgaXNBbGxDb21wbGV0ZSwgZmlsZXMpIHtcbiAgICBpZiAoaXNBbGxFcnJvcmVkKSB7XG4gICAgICByZXR1cm4gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX0VSUk9SO1xuICAgIH1cblxuICAgIGlmIChpc0FsbENvbXBsZXRlKSB7XG4gICAgICByZXR1cm4gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX0NPTVBMRVRFO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHN0YXR1c0JhclN0YXRlcy5TVEFURV9XQUlUSU5HO1xuICAgIHZhciBmaWxlSURzID0gT2JqZWN0LmtleXMoZmlsZXMpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZUlEcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHByb2dyZXNzID0gZmlsZXNbZmlsZUlEc1tpXV0ucHJvZ3Jlc3M7XG4gICAgICAvLyBJZiBBTlkgZmlsZXMgYXJlIGJlaW5nIHVwbG9hZGVkIHJpZ2h0IG5vdywgc2hvdyB0aGUgdXBsb2FkaW5nIHN0YXRlLlxuICAgICAgaWYgKHByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQgJiYgIXByb2dyZXNzLnVwbG9hZENvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfVVBMT0FESU5HO1xuICAgICAgfVxuICAgICAgLy8gSWYgZmlsZXMgYXJlIGJlaW5nIHByZXByb2Nlc3NlZCBBTkQgcG9zdHByb2Nlc3NlZCBhdCB0aGlzIHRpbWUsIHdlIHNob3cgdGhlXG4gICAgICAvLyBwcmVwcm9jZXNzIHN0YXRlLiBJZiBhbnkgZmlsZXMgYXJlIGJlaW5nIHVwbG9hZGVkIHdlIHNob3cgdXBsb2FkaW5nLlxuICAgICAgaWYgKHByb2dyZXNzLnByZXByb2Nlc3MgJiYgc3RhdGUgIT09IHN0YXR1c0JhclN0YXRlcy5TVEFURV9VUExPQURJTkcpIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfUFJFUFJPQ0VTU0lORztcbiAgICAgIH1cbiAgICAgIC8vIElmIE5PIGZpbGVzIGFyZSBiZWluZyBwcmVwcm9jZXNzZWQgb3IgdXBsb2FkZWQgcmlnaHQgbm93LCBidXQgc29tZSBmaWxlcyBhcmVcbiAgICAgIC8vIGJlaW5nIHBvc3Rwcm9jZXNzZWQsIHNob3cgdGhlIHBvc3Rwcm9jZXNzIHN0YXRlLlxuICAgICAgaWYgKHByb2dyZXNzLnBvc3Rwcm9jZXNzICYmIHN0YXRlICE9PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfVVBMT0FESU5HICYmIHN0YXRlICE9PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfUFJFUFJPQ0VTU0lORykge1xuICAgICAgICBzdGF0ZSA9IHN0YXR1c0JhclN0YXRlcy5TVEFURV9QT1NUUFJPQ0VTU0lORztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIFN0YXR1c0Jhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHN0YXRlKSB7XG4gICAgdmFyIGNhcGFiaWxpdGllcyA9IHN0YXRlLmNhcGFiaWxpdGllcyxcbiAgICAgICAgZmlsZXMgPSBzdGF0ZS5maWxlcyxcbiAgICAgICAgYWxsb3dOZXdVcGxvYWQgPSBzdGF0ZS5hbGxvd05ld1VwbG9hZCxcbiAgICAgICAgdG90YWxQcm9ncmVzcyA9IHN0YXRlLnRvdGFsUHJvZ3Jlc3MsXG4gICAgICAgIGVycm9yID0gc3RhdGUuZXJyb3I7XG5cbiAgICAvLyBUT0RPOiBtb3ZlIHRoaXMgdG8gQ29yZSwgdG8gc2hhcmUgYmV0d2VlbiBTdGF0dXMgQmFyIGFuZCBEYXNoYm9hcmRcbiAgICAvLyAoYW5kIGFueSBvdGhlciBwbHVnaW4gdGhhdCBtaWdodCBuZWVkIGl0LCB0b28pXG5cbiAgICB2YXIgbmV3RmlsZXMgPSBPYmplY3Qua2V5cyhmaWxlcykuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gIWZpbGVzW2ZpbGVdLnByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQgJiYgIWZpbGVzW2ZpbGVdLnByb2dyZXNzLnByZXByb2Nlc3MgJiYgIWZpbGVzW2ZpbGVdLnByb2dyZXNzLnBvc3Rwcm9jZXNzO1xuICAgIH0pO1xuXG4gICAgdmFyIHVwbG9hZFN0YXJ0ZWRGaWxlcyA9IE9iamVjdC5rZXlzKGZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlc1tmaWxlXS5wcm9ncmVzcy51cGxvYWRTdGFydGVkO1xuICAgIH0pO1xuXG4gICAgdmFyIHBhdXNlZEZpbGVzID0gdXBsb2FkU3RhcnRlZEZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuIGZpbGVzW2ZpbGVdLmlzUGF1c2VkO1xuICAgIH0pO1xuXG4gICAgdmFyIGNvbXBsZXRlRmlsZXMgPSBPYmplY3Qua2V5cyhmaWxlcykuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gZmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkQ29tcGxldGU7XG4gICAgfSk7XG5cbiAgICB2YXIgZXJyb3JlZEZpbGVzID0gT2JqZWN0LmtleXMoZmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuIGZpbGVzW2ZpbGVdLmVycm9yO1xuICAgIH0pO1xuXG4gICAgdmFyIGluUHJvZ3Jlc3NGaWxlcyA9IE9iamVjdC5rZXlzKGZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiAhZmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkQ29tcGxldGUgJiYgZmlsZXNbZmlsZV0ucHJvZ3Jlc3MudXBsb2FkU3RhcnRlZDtcbiAgICB9KTtcblxuICAgIHZhciBpblByb2dyZXNzTm90UGF1c2VkRmlsZXMgPSBpblByb2dyZXNzRmlsZXMuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gIWZpbGVzW2ZpbGVdLmlzUGF1c2VkO1xuICAgIH0pO1xuXG4gICAgdmFyIHN0YXJ0ZWRGaWxlcyA9IE9iamVjdC5rZXlzKGZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBmaWxlc1tmaWxlXS5wcm9ncmVzcy51cGxvYWRTdGFydGVkIHx8IGZpbGVzW2ZpbGVdLnByb2dyZXNzLnByZXByb2Nlc3MgfHwgZmlsZXNbZmlsZV0ucHJvZ3Jlc3MucG9zdHByb2Nlc3M7XG4gICAgfSk7XG5cbiAgICB2YXIgcHJvY2Vzc2luZ0ZpbGVzID0gT2JqZWN0LmtleXMoZmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuIGZpbGVzW2ZpbGVdLnByb2dyZXNzLnByZXByb2Nlc3MgfHwgZmlsZXNbZmlsZV0ucHJvZ3Jlc3MucG9zdHByb2Nlc3M7XG4gICAgfSk7XG5cbiAgICB2YXIgaW5Qcm9ncmVzc05vdFBhdXNlZEZpbGVzQXJyYXkgPSBpblByb2dyZXNzTm90UGF1c2VkRmlsZXMubWFwKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gZmlsZXNbZmlsZV07XG4gICAgfSk7XG5cbiAgICB2YXIgdG90YWxFVEEgPSB0aGlzLmdldFRvdGFsRVRBKGluUHJvZ3Jlc3NOb3RQYXVzZWRGaWxlc0FycmF5KTtcblxuICAgIC8vIHRvdGFsIHNpemUgYW5kIHVwbG9hZGVkIHNpemVcbiAgICB2YXIgdG90YWxTaXplID0gMDtcbiAgICB2YXIgdG90YWxVcGxvYWRlZFNpemUgPSAwO1xuICAgIGluUHJvZ3Jlc3NOb3RQYXVzZWRGaWxlc0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHRvdGFsU2l6ZSA9IHRvdGFsU2l6ZSArIChmaWxlLnByb2dyZXNzLmJ5dGVzVG90YWwgfHwgMCk7XG4gICAgICB0b3RhbFVwbG9hZGVkU2l6ZSA9IHRvdGFsVXBsb2FkZWRTaXplICsgKGZpbGUucHJvZ3Jlc3MuYnl0ZXNVcGxvYWRlZCB8fCAwKTtcbiAgICB9KTtcblxuICAgIHZhciBpc1VwbG9hZFN0YXJ0ZWQgPSB1cGxvYWRTdGFydGVkRmlsZXMubGVuZ3RoID4gMDtcblxuICAgIHZhciBpc0FsbENvbXBsZXRlID0gdG90YWxQcm9ncmVzcyA9PT0gMTAwICYmIGNvbXBsZXRlRmlsZXMubGVuZ3RoID09PSBPYmplY3Qua2V5cyhmaWxlcykubGVuZ3RoICYmIHByb2Nlc3NpbmdGaWxlcy5sZW5ndGggPT09IDA7XG5cbiAgICB2YXIgaXNBbGxFcnJvcmVkID0gaXNVcGxvYWRTdGFydGVkICYmIGVycm9yZWRGaWxlcy5sZW5ndGggPT09IHVwbG9hZFN0YXJ0ZWRGaWxlcy5sZW5ndGg7XG5cbiAgICB2YXIgaXNBbGxQYXVzZWQgPSBpblByb2dyZXNzRmlsZXMubGVuZ3RoICE9PSAwICYmIHBhdXNlZEZpbGVzLmxlbmd0aCA9PT0gaW5Qcm9ncmVzc0ZpbGVzLmxlbmd0aDtcbiAgICAvLyBjb25zdCBpc0FsbFBhdXNlZCA9IGluUHJvZ3Jlc3NGaWxlcy5sZW5ndGggPT09IDAgJiZcbiAgICAvLyAgICFpc0FsbENvbXBsZXRlICYmXG4gICAgLy8gICAhaXNBbGxFcnJvcmVkICYmXG4gICAgLy8gICB1cGxvYWRTdGFydGVkRmlsZXMubGVuZ3RoID4gMFxuXG4gICAgdmFyIGlzVXBsb2FkSW5Qcm9ncmVzcyA9IGluUHJvZ3Jlc3NGaWxlcy5sZW5ndGggPiAwO1xuXG4gICAgdmFyIHJlc3VtYWJsZVVwbG9hZHMgPSBjYXBhYmlsaXRpZXMucmVzdW1hYmxlVXBsb2FkcyB8fCBmYWxzZTtcblxuICAgIHJldHVybiBTdGF0dXNCYXJVSSh7XG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICB1cGxvYWRTdGF0ZTogdGhpcy5nZXRVcGxvYWRpbmdTdGF0ZShpc0FsbEVycm9yZWQsIGlzQWxsQ29tcGxldGUsIHN0YXRlLmZpbGVzIHx8IHt9KSxcbiAgICAgIGFsbG93TmV3VXBsb2FkOiBhbGxvd05ld1VwbG9hZCxcbiAgICAgIHRvdGFsUHJvZ3Jlc3M6IHRvdGFsUHJvZ3Jlc3MsXG4gICAgICB0b3RhbFNpemU6IHRvdGFsU2l6ZSxcbiAgICAgIHRvdGFsVXBsb2FkZWRTaXplOiB0b3RhbFVwbG9hZGVkU2l6ZSxcbiAgICAgIGlzQWxsQ29tcGxldGU6IGlzQWxsQ29tcGxldGUsXG4gICAgICBpc0FsbFBhdXNlZDogaXNBbGxQYXVzZWQsXG4gICAgICBpc0FsbEVycm9yZWQ6IGlzQWxsRXJyb3JlZCxcbiAgICAgIGlzVXBsb2FkU3RhcnRlZDogaXNVcGxvYWRTdGFydGVkLFxuICAgICAgaXNVcGxvYWRJblByb2dyZXNzOiBpc1VwbG9hZEluUHJvZ3Jlc3MsXG4gICAgICBjb21wbGV0ZTogY29tcGxldGVGaWxlcy5sZW5ndGgsXG4gICAgICBuZXdGaWxlczogbmV3RmlsZXMubGVuZ3RoLFxuICAgICAgbnVtVXBsb2Fkczogc3RhcnRlZEZpbGVzLmxlbmd0aCxcbiAgICAgIHRvdGFsRVRBOiB0b3RhbEVUQSxcbiAgICAgIGZpbGVzOiBmaWxlcyxcbiAgICAgIGkxOG46IHRoaXMuaTE4bixcbiAgICAgIHBhdXNlQWxsOiB0aGlzLnVwcHkucGF1c2VBbGwsXG4gICAgICByZXN1bWVBbGw6IHRoaXMudXBweS5yZXN1bWVBbGwsXG4gICAgICByZXRyeUFsbDogdGhpcy51cHB5LnJldHJ5QWxsLFxuICAgICAgY2FuY2VsQWxsOiB0aGlzLnVwcHkuY2FuY2VsQWxsLFxuICAgICAgc3RhcnRVcGxvYWQ6IHRoaXMuc3RhcnRVcGxvYWQsXG4gICAgICByZXN1bWFibGVVcGxvYWRzOiByZXN1bWFibGVVcGxvYWRzLFxuICAgICAgc2hvd1Byb2dyZXNzRGV0YWlsczogdGhpcy5vcHRzLnNob3dQcm9ncmVzc0RldGFpbHMsXG4gICAgICBoaWRlVXBsb2FkQnV0dG9uOiB0aGlzLm9wdHMuaGlkZVVwbG9hZEJ1dHRvbixcbiAgICAgIGhpZGVSZXRyeUJ1dHRvbjogdGhpcy5vcHRzLmhpZGVSZXRyeUJ1dHRvbixcbiAgICAgIGhpZGVQYXVzZVJlc3VtZUJ1dHRvbjogdGhpcy5vcHRzLmhpZGVQYXVzZVJlc3VtZUJ1dHRvbixcbiAgICAgIGhpZGVDYW5jZWxCdXR0b246IHRoaXMub3B0cy5oaWRlQ2FuY2VsQnV0dG9uLFxuICAgICAgaGlkZUFmdGVyRmluaXNoOiB0aGlzLm9wdHMuaGlkZUFmdGVyRmluaXNoLFxuICAgICAgaXNUYXJnZXRET01FbDogdGhpcy5pc1RhcmdldERPTUVsXG4gICAgfSk7XG4gIH07XG5cbiAgU3RhdHVzQmFyLnByb3RvdHlwZS5pbnN0YWxsID0gZnVuY3Rpb24gaW5zdGFsbCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5vcHRzLnRhcmdldDtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLm1vdW50KHRhcmdldCwgdGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIFN0YXR1c0Jhci5wcm90b3R5cGUudW5pbnN0YWxsID0gZnVuY3Rpb24gdW5pbnN0YWxsKCkge1xuICAgIHRoaXMudW5tb3VudCgpO1xuICB9O1xuXG4gIHJldHVybiBTdGF0dXNCYXI7XG59KFBsdWdpbik7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIHRocm90dGxlID0gcmVxdWlyZSgnbG9kYXNoLnRocm90dGxlJyk7XG52YXIgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcbnZhciBzdGF0dXNCYXJTdGF0ZXMgPSByZXF1aXJlKCcuL1N0YXR1c0JhclN0YXRlcycpO1xudmFyIHByZXR0eUJ5dGVzID0gcmVxdWlyZSgncHJldHRpZXItYnl0ZXMnKTtcbnZhciBwcmV0dHlFVEEgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvcHJldHR5RVRBJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZS5oO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVQcm9jZXNzaW5nUHJvZ3Jlc3MoZmlsZXMpIHtcbiAgLy8gQ29sbGVjdCBwcmUgb3IgcG9zdHByb2Nlc3NpbmcgcHJvZ3Jlc3Mgc3RhdGVzLlxuICB2YXIgcHJvZ3Jlc3NlcyA9IFtdO1xuICBPYmplY3Qua2V5cyhmaWxlcykuZm9yRWFjaChmdW5jdGlvbiAoZmlsZUlEKSB7XG4gICAgdmFyIHByb2dyZXNzID0gZmlsZXNbZmlsZUlEXS5wcm9ncmVzcztcblxuICAgIGlmIChwcm9ncmVzcy5wcmVwcm9jZXNzKSB7XG4gICAgICBwcm9ncmVzc2VzLnB1c2gocHJvZ3Jlc3MucHJlcHJvY2Vzcyk7XG4gICAgfVxuICAgIGlmIChwcm9ncmVzcy5wb3N0cHJvY2Vzcykge1xuICAgICAgcHJvZ3Jlc3Nlcy5wdXNoKHByb2dyZXNzLnBvc3Rwcm9jZXNzKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEluIHRoZSBmdXR1cmUgd2Ugc2hvdWxkIHByb2JhYmx5IGRvIHRoaXMgZGlmZmVyZW50bHkuIEZvciBub3cgd2UnbGwgdGFrZSB0aGVcbiAgLy8gbW9kZSBhbmQgbWVzc2FnZSBmcm9tIHRoZSBmaXJzdCBmaWxl4oCmXG4gIHZhciBfcHJvZ3Jlc3NlcyQgPSBwcm9ncmVzc2VzWzBdLFxuICAgICAgbW9kZSA9IF9wcm9ncmVzc2VzJC5tb2RlLFxuICAgICAgbWVzc2FnZSA9IF9wcm9ncmVzc2VzJC5tZXNzYWdlO1xuXG4gIHZhciB2YWx1ZSA9IHByb2dyZXNzZXMuZmlsdGVyKGlzRGV0ZXJtaW5hdGUpLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIHByb2dyZXNzLCBpbmRleCwgYWxsKSB7XG4gICAgcmV0dXJuIHRvdGFsICsgcHJvZ3Jlc3MudmFsdWUgLyBhbGwubGVuZ3RoO1xuICB9LCAwKTtcbiAgZnVuY3Rpb24gaXNEZXRlcm1pbmF0ZShwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb2RlOiBtb2RlLFxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVBhdXNlUmVzdW1lKHByb3BzKSB7XG4gIGlmIChwcm9wcy5pc0FsbENvbXBsZXRlKSByZXR1cm47XG5cbiAgaWYgKCFwcm9wcy5yZXN1bWFibGVVcGxvYWRzKSB7XG4gICAgcmV0dXJuIHByb3BzLmNhbmNlbEFsbCgpO1xuICB9XG5cbiAgaWYgKHByb3BzLmlzQWxsUGF1c2VkKSB7XG4gICAgcmV0dXJuIHByb3BzLnJlc3VtZUFsbCgpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzLnBhdXNlQWxsKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHByb3BzID0gcHJvcHMgfHwge307XG5cbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgbmV3RmlsZXMgPSBfcHJvcHMubmV3RmlsZXMsXG4gICAgICBhbGxvd05ld1VwbG9hZCA9IF9wcm9wcy5hbGxvd05ld1VwbG9hZCxcbiAgICAgIGlzVXBsb2FkSW5Qcm9ncmVzcyA9IF9wcm9wcy5pc1VwbG9hZEluUHJvZ3Jlc3MsXG4gICAgICBpc0FsbFBhdXNlZCA9IF9wcm9wcy5pc0FsbFBhdXNlZCxcbiAgICAgIHJlc3VtYWJsZVVwbG9hZHMgPSBfcHJvcHMucmVzdW1hYmxlVXBsb2FkcyxcbiAgICAgIGVycm9yID0gX3Byb3BzLmVycm9yLFxuICAgICAgaGlkZVVwbG9hZEJ1dHRvbiA9IF9wcm9wcy5oaWRlVXBsb2FkQnV0dG9uLFxuICAgICAgaGlkZVBhdXNlUmVzdW1lQnV0dG9uID0gX3Byb3BzLmhpZGVQYXVzZVJlc3VtZUJ1dHRvbixcbiAgICAgIGhpZGVDYW5jZWxCdXR0b24gPSBfcHJvcHMuaGlkZUNhbmNlbEJ1dHRvbixcbiAgICAgIGhpZGVSZXRyeUJ1dHRvbiA9IF9wcm9wcy5oaWRlUmV0cnlCdXR0b247XG5cblxuICB2YXIgdXBsb2FkU3RhdGUgPSBwcm9wcy51cGxvYWRTdGF0ZTtcblxuICB2YXIgcHJvZ3Jlc3NWYWx1ZSA9IHByb3BzLnRvdGFsUHJvZ3Jlc3M7XG4gIHZhciBwcm9ncmVzc01vZGUgPSB2b2lkIDA7XG4gIHZhciBwcm9ncmVzc0JhckNvbnRlbnQgPSB2b2lkIDA7XG5cbiAgaWYgKHVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfUFJFUFJPQ0VTU0lORyB8fCB1cGxvYWRTdGF0ZSA9PT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX1BPU1RQUk9DRVNTSU5HKSB7XG4gICAgdmFyIHByb2dyZXNzID0gY2FsY3VsYXRlUHJvY2Vzc2luZ1Byb2dyZXNzKHByb3BzLmZpbGVzKTtcbiAgICBwcm9ncmVzc01vZGUgPSBwcm9ncmVzcy5tb2RlO1xuICAgIGlmIChwcm9ncmVzc01vZGUgPT09ICdkZXRlcm1pbmF0ZScpIHtcbiAgICAgIHByb2dyZXNzVmFsdWUgPSBwcm9ncmVzcy52YWx1ZSAqIDEwMDtcbiAgICB9XG5cbiAgICBwcm9ncmVzc0JhckNvbnRlbnQgPSBQcm9ncmVzc0JhclByb2Nlc3NpbmcocHJvZ3Jlc3MpO1xuICB9IGVsc2UgaWYgKHVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfQ09NUExFVEUpIHtcbiAgICBwcm9ncmVzc0JhckNvbnRlbnQgPSBQcm9ncmVzc0JhckNvbXBsZXRlKHByb3BzKTtcbiAgfSBlbHNlIGlmICh1cGxvYWRTdGF0ZSA9PT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX1VQTE9BRElORykge1xuICAgIHByb2dyZXNzQmFyQ29udGVudCA9IFByb2dyZXNzQmFyVXBsb2FkaW5nKHByb3BzKTtcbiAgfSBlbHNlIGlmICh1cGxvYWRTdGF0ZSA9PT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX0VSUk9SKSB7XG4gICAgcHJvZ3Jlc3NWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBwcm9ncmVzc0JhckNvbnRlbnQgPSBQcm9ncmVzc0JhckVycm9yKHByb3BzKTtcbiAgfVxuXG4gIHZhciB3aWR0aCA9IHR5cGVvZiBwcm9ncmVzc1ZhbHVlID09PSAnbnVtYmVyJyA/IHByb2dyZXNzVmFsdWUgOiAxMDA7XG4gIHZhciBpc0hpZGRlbiA9IHVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfV0FJVElORyAmJiBwcm9wcy5oaWRlVXBsb2FkQnV0dG9uIHx8IHVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfV0FJVElORyAmJiAhcHJvcHMubmV3RmlsZXMgPiAwIHx8IHVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfQ09NUExFVEUgJiYgcHJvcHMuaGlkZUFmdGVyRmluaXNoO1xuXG4gIHZhciBzaG93VXBsb2FkQnRuID0gIWVycm9yICYmIG5ld0ZpbGVzICYmICFpc1VwbG9hZEluUHJvZ3Jlc3MgJiYgIWlzQWxsUGF1c2VkICYmIGFsbG93TmV3VXBsb2FkICYmICFoaWRlVXBsb2FkQnV0dG9uO1xuICB2YXIgc2hvd0NhbmNlbEJ0biA9ICFoaWRlQ2FuY2VsQnV0dG9uICYmIHVwbG9hZFN0YXRlICE9PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfV0FJVElORyAmJiB1cGxvYWRTdGF0ZSAhPT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX0NPTVBMRVRFO1xuICB2YXIgc2hvd1BhdXNlUmVzdW1lQnRuID0gcmVzdW1hYmxlVXBsb2FkcyAmJiAhaGlkZVBhdXNlUmVzdW1lQnV0dG9uICYmIHVwbG9hZFN0YXRlICE9PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfV0FJVElORyAmJiB1cGxvYWRTdGF0ZSAhPT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX1BSRVBST0NFU1NJTkcgJiYgdXBsb2FkU3RhdGUgIT09IHN0YXR1c0JhclN0YXRlcy5TVEFURV9QT1NUUFJPQ0VTU0lORyAmJiB1cGxvYWRTdGF0ZSAhPT0gc3RhdHVzQmFyU3RhdGVzLlNUQVRFX0NPTVBMRVRFO1xuICB2YXIgc2hvd1JldHJ5QnRuID0gZXJyb3IgJiYgIWhpZGVSZXRyeUJ1dHRvbjtcblxuICB2YXIgcHJvZ3Jlc3NDbGFzc05hbWVzID0gJ3VwcHktU3RhdHVzQmFyLXByb2dyZXNzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArIChwcm9ncmVzc01vZGUgPyAnaXMtJyArIHByb2dyZXNzTW9kZSA6ICcnKTtcblxuICB2YXIgc3RhdHVzQmFyQ2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoeyAndXBweS1Sb290JzogcHJvcHMuaXNUYXJnZXRET01FbCB9LCAndXBweS1TdGF0dXNCYXInLCAnaXMtJyArIHVwbG9hZFN0YXRlKTtcblxuICByZXR1cm4gaChcbiAgICAnZGl2JyxcbiAgICB7ICdjbGFzcyc6IHN0YXR1c0JhckNsYXNzTmFtZXMsICdhcmlhLWhpZGRlbic6IGlzSGlkZGVuIH0sXG4gICAgaCgnZGl2JywgeyAnY2xhc3MnOiBwcm9ncmVzc0NsYXNzTmFtZXMsXG4gICAgICBzdHlsZTogeyB3aWR0aDogd2lkdGggKyAnJScgfSxcbiAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAnYXJpYS12YWx1ZW1pbic6ICcwJyxcbiAgICAgICdhcmlhLXZhbHVlbWF4JzogJzEwMCcsXG4gICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb2dyZXNzVmFsdWUgfSksXG4gICAgcHJvZ3Jlc3NCYXJDb250ZW50LFxuICAgIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLWFjdGlvbnMnIH0sXG4gICAgICBzaG93VXBsb2FkQnRuID8gaChVcGxvYWRCdG4sIF9leHRlbmRzKHt9LCBwcm9wcywgeyB1cGxvYWRTdGF0ZTogdXBsb2FkU3RhdGUgfSkpIDogbnVsbCxcbiAgICAgIHNob3dSZXRyeUJ0biA/IGgoUmV0cnlCdG4sIHByb3BzKSA6IG51bGwsXG4gICAgICBzaG93UGF1c2VSZXN1bWVCdG4gPyBoKFBhdXNlUmVzdW1lQnV0dG9uLCBwcm9wcykgOiBudWxsLFxuICAgICAgc2hvd0NhbmNlbEJ0biA/IGgoQ2FuY2VsQnRuLCBwcm9wcykgOiBudWxsXG4gICAgKVxuICApO1xufTtcblxudmFyIFVwbG9hZEJ0biA9IGZ1bmN0aW9uIFVwbG9hZEJ0bihwcm9wcykge1xuICB2YXIgdXBsb2FkQnRuQ2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoJ3VwcHktdS1yZXNldCcsICd1cHB5LWMtYnRuJywgJ3VwcHktU3RhdHVzQmFyLWFjdGlvbkJ0bicsICd1cHB5LVN0YXR1c0Jhci1hY3Rpb25CdG4tLXVwbG9hZCcsIHsgJ3VwcHktYy1idG4tcHJpbWFyeSc6IHByb3BzLnVwbG9hZFN0YXRlID09PSBzdGF0dXNCYXJTdGF0ZXMuU1RBVEVfV0FJVElORyB9KTtcblxuICByZXR1cm4gaChcbiAgICAnYnV0dG9uJyxcbiAgICB7IHR5cGU6ICdidXR0b24nLFxuICAgICAgJ2NsYXNzJzogdXBsb2FkQnRuQ2xhc3NOYW1lcyxcbiAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMuaTE4bigndXBsb2FkWEZpbGVzJywgeyBzbWFydF9jb3VudDogcHJvcHMubmV3RmlsZXMgfSksXG4gICAgICBvbmNsaWNrOiBwcm9wcy5zdGFydFVwbG9hZCB9LFxuICAgIHByb3BzLm5ld0ZpbGVzICYmIHByb3BzLmlzVXBsb2FkU3RhcnRlZCA/IHByb3BzLmkxOG4oJ3VwbG9hZFhOZXdGaWxlcycsIHsgc21hcnRfY291bnQ6IHByb3BzLm5ld0ZpbGVzIH0pIDogcHJvcHMuaTE4bigndXBsb2FkWEZpbGVzJywgeyBzbWFydF9jb3VudDogcHJvcHMubmV3RmlsZXMgfSlcbiAgKTtcbn07XG5cbnZhciBSZXRyeUJ0biA9IGZ1bmN0aW9uIFJldHJ5QnRuKHByb3BzKSB7XG4gIHJldHVybiBoKFxuICAgICdidXR0b24nLFxuICAgIHsgdHlwZTogJ2J1dHRvbicsXG4gICAgICAnY2xhc3MnOiAndXBweS11LXJlc2V0IHVwcHktYy1idG4gdXBweS1TdGF0dXNCYXItYWN0aW9uQnRuIHVwcHktU3RhdHVzQmFyLWFjdGlvbkJ0bi0tcmV0cnknLFxuICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5pMThuKCdyZXRyeVVwbG9hZCcpLFxuICAgICAgb25jbGljazogcHJvcHMucmV0cnlBbGwgfSxcbiAgICBwcm9wcy5pMThuKCdyZXRyeScpXG4gICk7XG59O1xuXG52YXIgQ2FuY2VsQnRuID0gZnVuY3Rpb24gQ2FuY2VsQnRuKHByb3BzKSB7XG4gIHJldHVybiBoKFxuICAgICdidXR0b24nLFxuICAgIHsgdHlwZTogJ2J1dHRvbicsXG4gICAgICAnY2xhc3MnOiAndXBweS11LXJlc2V0IHVwcHktU3RhdHVzQmFyLWFjdGlvbkNpcmNsZUJ0bicsXG4gICAgICB0aXRsZTogcHJvcHMuaTE4bignY2FuY2VsJyksXG4gICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmkxOG4oJ2NhbmNlbCcpLFxuICAgICAgb25jbGljazogcHJvcHMuY2FuY2VsQWxsIH0sXG4gICAgaChcbiAgICAgICdzdmcnLFxuICAgICAgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsICdjbGFzcyc6ICdVcHB5SWNvbicsIHdpZHRoOiAnOCcsIGhlaWdodDogJzgnLCB2aWV3Qm94OiAnMCAwIDggOCcsIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIH0sXG4gICAgICBoKCdwYXRoJywgeyBkOiAnTTUuMjEgNC4xMDRsMS42NTggMS42NTgtMS4xMDYgMS4xMDYtMS42NTgtMS42NTktMS42NTkgMS42NTlMMS4zNCA1Ljc2MmwxLjY1OC0xLjY1OEwxLjM0IDIuNDQ1IDIuNDQ1IDEuMzRsMS42NTkgMS42NThMNS43NjIgMS4zNGwxLjEwNiAxLjEwNS0xLjY1OSAxLjY1OXonLCAnZmlsbC1ydWxlJzogJ2V2ZW5vZGQnIH0pXG4gICAgKVxuICApO1xufTtcblxudmFyIFBhdXNlUmVzdW1lQnV0dG9uID0gZnVuY3Rpb24gUGF1c2VSZXN1bWVCdXR0b24ocHJvcHMpIHtcbiAgdmFyIGlzQWxsUGF1c2VkID0gcHJvcHMuaXNBbGxQYXVzZWQsXG4gICAgICBpMThuID0gcHJvcHMuaTE4bjtcblxuICB2YXIgdGl0bGUgPSBpc0FsbFBhdXNlZCA/IGkxOG4oJ3Jlc3VtZScpIDogaTE4bigncGF1c2UnKTtcblxuICByZXR1cm4gaChcbiAgICAnYnV0dG9uJyxcbiAgICB7IHRpdGxlOiB0aXRsZSwgJ2NsYXNzJzogJ3VwcHktdS1yZXNldCB1cHB5LVN0YXR1c0Jhci1hY3Rpb25DaXJjbGVCdG4nLCB0eXBlOiAnYnV0dG9uJywgb25jbGljazogZnVuY3Rpb24gb25jbGljaygpIHtcbiAgICAgICAgcmV0dXJuIHRvZ2dsZVBhdXNlUmVzdW1lKHByb3BzKTtcbiAgICAgIH0gfSxcbiAgICBpc0FsbFBhdXNlZCA/IGgoXG4gICAgICAnc3ZnJyxcbiAgICAgIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCAnY2xhc3MnOiAnVXBweUljb24nLCB3aWR0aDogJzgnLCBoZWlnaHQ6ICc4Jywgdmlld0JveDogJzAgMCA4IDgnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuICAgICAgaCgncGF0aCcsIHsgZDogJ002LjczNiAzLjg1MmwtNC40NzIgMi44NFYxLjA3NXonLCAnZmlsbC1ydWxlJzogJ2V2ZW5vZGQnIH0pXG4gICAgKSA6IGgoXG4gICAgICAnc3ZnJyxcbiAgICAgIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCAnY2xhc3MnOiAnVXBweUljb24nLCB3aWR0aDogJzgnLCBoZWlnaHQ6ICc4Jywgdmlld0JveDogJzAgMCA4IDgnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuICAgICAgaCgncGF0aCcsIHsgZDogJ00xIDFoMnY2SDF6TTUgMWgydjZINXonLCAnZmlsbC1ydWxlJzogJ2V2ZW5vZGQnIH0pXG4gICAgKVxuICApO1xufTtcblxudmFyIExvYWRpbmdTcGlubmVyID0gZnVuY3Rpb24gTG9hZGluZ1NwaW5uZXIocHJvcHMpIHtcbiAgcmV0dXJuIGgoXG4gICAgJ3N2ZycsXG4gICAgeyAnY2xhc3MnOiAndXBweS1TdGF0dXNCYXItc3Bpbm5lcicsIHdpZHRoOiAnMTQnLCBoZWlnaHQ6ICcxNCcsIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIH0sXG4gICAgaCgncGF0aCcsIHsgZDogJ00xMy45ODMgNi41NDdjLS4xMi0yLjUwOS0xLjY0LTQuODkzLTMuOTM5LTUuOTM2LTIuNDgtMS4xMjctNS40ODgtLjY1Ni03LjU1NiAxLjA5NEMuNTI0IDMuMzY3LS4zOTggNi4wNDguMTYyIDguNTYyYy41NTYgMi40OTUgMi40NiA0LjUyIDQuOTQgNS4xODMgMi45MzIuNzg0IDUuNjEtLjYwMiA3LjI1Ni0zLjAxNS0xLjQ5MyAxLjk5My0zLjc0NSAzLjMwOS02LjI5OCAyLjg2OC0yLjUxNC0uNDM0LTQuNTc4LTIuMzQ5LTUuMTUzLTQuODRhNi4yMjYgNi4yMjYgMCAwIDEgMi45OC02Ljc3OEM2LjM0LjU4NiA5Ljc0IDEuMSAxMS4zNzMgMy40OTNjLjQwNy41OTYuNjkzIDEuMjgyLjg0MiAxLjk4OC4xMjcuNTk4LjA3MyAxLjE5Ny4xNjEgMS43OTQuMDc4LjUyNS41NDMgMS4yNTcgMS4xNS44NjQuNTI1LS4zNDEuNDktMS4wNS40NTYtMS41OTItLjAwNy0uMTUuMDIuMyAwIDAnLCAnZmlsbC1ydWxlJzogJ2V2ZW5vZGQnIH0pXG4gICk7XG59O1xuXG52YXIgUHJvZ3Jlc3NCYXJQcm9jZXNzaW5nID0gZnVuY3Rpb24gUHJvZ3Jlc3NCYXJQcm9jZXNzaW5nKHByb3BzKSB7XG4gIHZhciB2YWx1ZSA9IE1hdGgucm91bmQocHJvcHMudmFsdWUgKiAxMDApO1xuXG4gIHJldHVybiBoKFxuICAgICdkaXYnLFxuICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLWNvbnRlbnQnIH0sXG4gICAgaChMb2FkaW5nU3Bpbm5lciwgcHJvcHMpLFxuICAgIHByb3BzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgPyB2YWx1ZSArICclIFxceEI3ICcgOiAnJyxcbiAgICBwcm9wcy5tZXNzYWdlXG4gICk7XG59O1xuXG52YXIgUHJvZ3Jlc3NEZXRhaWxzID0gZnVuY3Rpb24gUHJvZ3Jlc3NEZXRhaWxzKHByb3BzKSB7XG4gIHJldHVybiBoKFxuICAgICdkaXYnLFxuICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLXN0YXR1c1NlY29uZGFyeScgfSxcbiAgICBwcm9wcy5udW1VcGxvYWRzID4gMSAmJiBwcm9wcy5pMThuKCdmaWxlc1VwbG9hZGVkT2ZUb3RhbCcsIHsgY29tcGxldGU6IHByb3BzLmNvbXBsZXRlLCBzbWFydF9jb3VudDogcHJvcHMubnVtVXBsb2FkcyB9KSArICcgXFx4QjcgJyxcbiAgICBwcm9wcy5pMThuKCdkYXRhVXBsb2FkZWRPZlRvdGFsJywge1xuICAgICAgY29tcGxldGU6IHByZXR0eUJ5dGVzKHByb3BzLnRvdGFsVXBsb2FkZWRTaXplKSxcbiAgICAgIHRvdGFsOiBwcmV0dHlCeXRlcyhwcm9wcy50b3RhbFNpemUpXG4gICAgfSkgKyAnIFxceEI3ICcsXG4gICAgcHJvcHMuaTE4bigneFRpbWVMZWZ0JywgeyB0aW1lOiBwcmV0dHlFVEEocHJvcHMudG90YWxFVEEpIH0pXG4gICk7XG59O1xuXG52YXIgVXBsb2FkTmV3bHlBZGRlZEZpbGVzID0gZnVuY3Rpb24gVXBsb2FkTmV3bHlBZGRlZEZpbGVzKHByb3BzKSB7XG4gIHZhciB1cGxvYWRCdG5DbGFzc05hbWVzID0gY2xhc3NOYW1lcygndXBweS11LXJlc2V0JywgJ3VwcHktYy1idG4nLCAndXBweS1TdGF0dXNCYXItYWN0aW9uQnRuJyk7XG5cbiAgcmV0dXJuIGgoXG4gICAgJ2RpdicsXG4gICAgeyAnY2xhc3MnOiAndXBweS1TdGF0dXNCYXItc3RhdHVzU2Vjb25kYXJ5JyB9LFxuICAgIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLXN0YXR1c1NlY29uZGFyeUhpbnQnIH0sXG4gICAgICBwcm9wcy5pMThuKCd4TW9yZUZpbGVzQWRkZWQnLCB7IHNtYXJ0X2NvdW50OiBwcm9wcy5uZXdGaWxlcyB9KVxuICAgICksXG4gICAgaChcbiAgICAgICdidXR0b24nLFxuICAgICAgeyB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgJ2NsYXNzJzogdXBsb2FkQnRuQ2xhc3NOYW1lcyxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5pMThuKCd1cGxvYWRYRmlsZXMnLCB7IHNtYXJ0X2NvdW50OiBwcm9wcy5uZXdGaWxlcyB9KSxcbiAgICAgICAgb25jbGljazogcHJvcHMuc3RhcnRVcGxvYWQgfSxcbiAgICAgIHByb3BzLmkxOG4oJ3VwbG9hZCcpXG4gICAgKVxuICApO1xufTtcblxudmFyIFRocm90dGxlZFByb2dyZXNzRGV0YWlscyA9IHRocm90dGxlKFByb2dyZXNzRGV0YWlscywgNTAwLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlIH0pO1xuXG52YXIgUHJvZ3Jlc3NCYXJVcGxvYWRpbmcgPSBmdW5jdGlvbiBQcm9ncmVzc0JhclVwbG9hZGluZyhwcm9wcykge1xuICBpZiAoIXByb3BzLmlzVXBsb2FkU3RhcnRlZCB8fCBwcm9wcy5pc0FsbENvbXBsZXRlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgdGl0bGUgPSBwcm9wcy5pc0FsbFBhdXNlZCA/IHByb3BzLmkxOG4oJ3BhdXNlZCcpIDogcHJvcHMuaTE4bigndXBsb2FkaW5nJyk7XG4gIHZhciBzaG93VXBsb2FkTmV3bHlBZGRlZEZpbGVzID0gcHJvcHMubmV3RmlsZXMgJiYgcHJvcHMuaXNVcGxvYWRTdGFydGVkO1xuXG4gIHJldHVybiBoKFxuICAgICdkaXYnLFxuICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLWNvbnRlbnQnLCAnYXJpYS1sYWJlbCc6IHRpdGxlLCB0aXRsZTogdGl0bGUgfSxcbiAgICAhcHJvcHMuaXNBbGxQYXVzZWQgPyBoKExvYWRpbmdTcGlubmVyLCBwcm9wcykgOiBudWxsLFxuICAgIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogJ3VwcHktU3RhdHVzQmFyLXN0YXR1cycgfSxcbiAgICAgIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6ICd1cHB5LVN0YXR1c0Jhci1zdGF0dXNQcmltYXJ5JyB9LFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgJzogJyxcbiAgICAgICAgcHJvcHMudG90YWxQcm9ncmVzcyxcbiAgICAgICAgJyUnXG4gICAgICApLFxuICAgICAgIXByb3BzLmlzQWxsUGF1c2VkICYmICFzaG93VXBsb2FkTmV3bHlBZGRlZEZpbGVzICYmIHByb3BzLnNob3dQcm9ncmVzc0RldGFpbHMgPyBoKFRocm90dGxlZFByb2dyZXNzRGV0YWlscywgcHJvcHMpIDogbnVsbCxcbiAgICAgIHNob3dVcGxvYWROZXdseUFkZGVkRmlsZXMgPyBoKFVwbG9hZE5ld2x5QWRkZWRGaWxlcywgcHJvcHMpIDogbnVsbFxuICAgIClcbiAgKTtcbn07XG5cbnZhciBQcm9ncmVzc0JhckNvbXBsZXRlID0gZnVuY3Rpb24gUHJvZ3Jlc3NCYXJDb21wbGV0ZShfcmVmKSB7XG4gIHZhciB0b3RhbFByb2dyZXNzID0gX3JlZi50b3RhbFByb2dyZXNzLFxuICAgICAgaTE4biA9IF9yZWYuaTE4bjtcblxuICByZXR1cm4gaChcbiAgICAnZGl2JyxcbiAgICB7ICdjbGFzcyc6ICd1cHB5LVN0YXR1c0Jhci1jb250ZW50Jywgcm9sZTogJ3N0YXR1cycsIHRpdGxlOiBpMThuKCdjb21wbGV0ZScpIH0sXG4gICAgaChcbiAgICAgICdzdmcnLFxuICAgICAgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsICdjbGFzcyc6ICd1cHB5LVN0YXR1c0Jhci1zdGF0dXNJbmRpY2F0b3IgVXBweUljb24nLCB3aWR0aDogJzE4JywgaGVpZ2h0OiAnMTcnLCB2aWV3Qm94OiAnMCAwIDIzIDE3JyB9LFxuICAgICAgaCgncGF0aCcsIHsgZDogJ004Ljk0NCAxN0wwIDcuODY1bDIuNTU1LTIuNjEgNi4zOSA2LjUyNUwyMC40MSAwIDIzIDIuNjQ1eicgfSlcbiAgICApLFxuICAgIGkxOG4oJ2NvbXBsZXRlJylcbiAgKTtcbn07XG5cbnZhciBQcm9ncmVzc0JhckVycm9yID0gZnVuY3Rpb24gUHJvZ3Jlc3NCYXJFcnJvcihfcmVmMikge1xuICB2YXIgZXJyb3IgPSBfcmVmMi5lcnJvcixcbiAgICAgIHJldHJ5QWxsID0gX3JlZjIucmV0cnlBbGwsXG4gICAgICBoaWRlUmV0cnlCdXR0b24gPSBfcmVmMi5oaWRlUmV0cnlCdXR0b24sXG4gICAgICBpMThuID0gX3JlZjIuaTE4bjtcblxuICByZXR1cm4gaChcbiAgICAnZGl2JyxcbiAgICB7ICdjbGFzcyc6ICd1cHB5LVN0YXR1c0Jhci1jb250ZW50Jywgcm9sZTogJ2FsZXJ0JyB9LFxuICAgIGgoXG4gICAgICAnc3BhbicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5LVN0YXR1c0Jhci1jb250ZW50UGFkZGluZycgfSxcbiAgICAgIGkxOG4oJ3VwbG9hZEZhaWxlZCcpLFxuICAgICAgJy4nXG4gICAgKSxcbiAgICBoKFxuICAgICAgJ3NwYW4nLFxuICAgICAgeyAnY2xhc3MnOiAndXBweS1TdGF0dXNCYXItZGV0YWlscycsXG4gICAgICAgICdhcmlhLWxhYmVsJzogZXJyb3IsXG4gICAgICAgICdkYXRhLW1pY3JvdGlwLXBvc2l0aW9uJzogJ3RvcCcsXG4gICAgICAgICdkYXRhLW1pY3JvdGlwLXNpemUnOiAnbGFyZ2UnLFxuICAgICAgICByb2xlOiAndG9vbHRpcCcgfSxcbiAgICAgICc/J1xuICAgIClcbiAgKTtcbn07IiwidmFyIHNlY29uZHNUb1RpbWUgPSByZXF1aXJlKCcuL3NlY29uZHNUb1RpbWUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwcmV0dHlFVEEoc2Vjb25kcykge1xuICB2YXIgdGltZSA9IHNlY29uZHNUb1RpbWUoc2Vjb25kcyk7XG5cbiAgLy8gT25seSBkaXNwbGF5IGhvdXJzIGFuZCBtaW51dGVzIGlmIHRoZXkgYXJlIGdyZWF0ZXIgdGhhbiAwIGJ1dCBhbHdheXNcbiAgLy8gZGlzcGxheSBtaW51dGVzIGlmIGhvdXJzIGlzIGJlaW5nIGRpc3BsYXllZFxuICAvLyBEaXNwbGF5IGEgbGVhZGluZyB6ZXJvIGlmIHRoZSB0aGVyZSBpcyBhIHByZWNlZGluZyB1bml0OiAxbSAwNXMsIGJ1dCA1c1xuICB2YXIgaG91cnNTdHIgPSB0aW1lLmhvdXJzID8gdGltZS5ob3VycyArICdoICcgOiAnJztcbiAgdmFyIG1pbnV0ZXNWYWwgPSB0aW1lLmhvdXJzID8gKCcwJyArIHRpbWUubWludXRlcykuc3Vic3RyKC0yKSA6IHRpbWUubWludXRlcztcbiAgdmFyIG1pbnV0ZXNTdHIgPSBtaW51dGVzVmFsID8gbWludXRlc1ZhbCArICdtICcgOiAnJztcbiAgdmFyIHNlY29uZHNWYWwgPSBtaW51dGVzVmFsID8gKCcwJyArIHRpbWUuc2Vjb25kcykuc3Vic3RyKC0yKSA6IHRpbWUuc2Vjb25kcztcbiAgdmFyIHNlY29uZHNTdHIgPSBzZWNvbmRzVmFsICsgJ3MnO1xuXG4gIHJldHVybiAnJyArIGhvdXJzU3RyICsgbWludXRlc1N0ciArIHNlY29uZHNTdHI7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2Vjb25kc1RvVGltZShyYXdTZWNvbmRzKSB7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IocmF3U2Vjb25kcyAvIDM2MDApICUgMjQ7XG4gIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcihyYXdTZWNvbmRzIC8gNjApICUgNjA7XG4gIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcihyYXdTZWNvbmRzICUgNjApO1xuXG4gIHJldHVybiB7IGhvdXJzOiBob3VycywgbWludXRlczogbWludXRlcywgc2Vjb25kczogc2Vjb25kcyB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFNwZWVkKGZpbGVQcm9ncmVzcykge1xuICBpZiAoIWZpbGVQcm9ncmVzcy5ieXRlc1VwbG9hZGVkKSByZXR1cm4gMDtcblxuICB2YXIgdGltZUVsYXBzZWQgPSBuZXcgRGF0ZSgpIC0gZmlsZVByb2dyZXNzLnVwbG9hZFN0YXJ0ZWQ7XG4gIHZhciB1cGxvYWRTcGVlZCA9IGZpbGVQcm9ncmVzcy5ieXRlc1VwbG9hZGVkIC8gKHRpbWVFbGFwc2VkIC8gMTAwMCk7XG4gIHJldHVybiB1cGxvYWRTcGVlZDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRCeXRlc1JlbWFpbmluZyhmaWxlUHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIGZpbGVQcm9ncmVzcy5ieXRlc1RvdGFsIC0gZmlsZVByb2dyZXNzLmJ5dGVzVXBsb2FkZWQ7XG59OyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnQHVwcHkvY29yZScpLFxuICAgIFBsdWdpbiA9IF9yZXF1aXJlLlBsdWdpbjtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ3ByZWFjdCcpLFxuICAgIGggPSBfcmVxdWlyZTIuaDtcblxuLyoqXG4gKiBJbmZvcm1lclxuICogU2hvd3MgcmFkIG1lc3NhZ2UgYnViYmxlc1xuICogdXNlZCBsaWtlIHRoaXM6IGB1cHB5LmluZm8oJ2hlbGxvIHdvcmxkJywgJ2luZm8nLCA1MDAwKWBcbiAqIG9yIGZvciBlcnJvcnM6IGB1cHB5LmluZm8oJ0Vycm9yIHVwbG9hZGluZyBpbWcuanBnJywgJ2Vycm9yJywgNTAwMClgXG4gKlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX1BsdWdpbikge1xuICBfaW5oZXJpdHMoSW5mb3JtZXIsIF9QbHVnaW4pO1xuXG4gIGZ1bmN0aW9uIEluZm9ybWVyKHVwcHksIG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5mb3JtZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1BsdWdpbi5jYWxsKHRoaXMsIHVwcHksIG9wdHMpKTtcblxuICAgIF90aGlzLnR5cGUgPSAncHJvZ3Jlc3NpbmRpY2F0b3InO1xuICAgIF90aGlzLmlkID0gX3RoaXMub3B0cy5pZCB8fCAnSW5mb3JtZXInO1xuICAgIF90aGlzLnRpdGxlID0gJ0luZm9ybWVyJztcblxuICAgIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICB0eXBlQ29sb3JzOiB7XG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgICAgYmc6ICcjMDAwJ1xuICAgICAgICB9LFxuICAgICAgICB3YXJuaW5nOiB7XG4gICAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICAgIGJnOiAnI0Y2QTYyMydcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgICAgYmc6ICcjRDMyRjJGJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICAgIGJnOiAnIzFCQjI0MCdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBtZXJnZSBkZWZhdWx0IG9wdGlvbnMgd2l0aCB0aGUgb25lcyBzZXQgYnkgdXNlclxuICAgIH07X3RoaXMub3B0cyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0cyk7XG5cbiAgICBfdGhpcy5yZW5kZXIgPSBfdGhpcy5yZW5kZXIuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgSW5mb3JtZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihzdGF0ZSkge1xuICAgIHZhciBfc3RhdGUkaW5mbyA9IHN0YXRlLmluZm8sXG4gICAgICAgIGlzSGlkZGVuID0gX3N0YXRlJGluZm8uaXNIaWRkZW4sXG4gICAgICAgIG1lc3NhZ2UgPSBfc3RhdGUkaW5mby5tZXNzYWdlLFxuICAgICAgICBkZXRhaWxzID0gX3N0YXRlJGluZm8uZGV0YWlscztcbiAgICAvLyBjb25zdCBzdHlsZSA9IHtcbiAgICAvLyAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRzLnR5cGVDb2xvcnNbdHlwZV0uYmcsXG4gICAgLy8gICBjb2xvcjogdGhpcy5vcHRzLnR5cGVDb2xvcnNbdHlwZV0udGV4dFxuICAgIC8vIH1cblxuICAgIHJldHVybiBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6ICd1cHB5IHVwcHktSW5mb3JtZXInLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiBpc0hpZGRlbiB9LFxuICAgICAgaChcbiAgICAgICAgJ3AnLFxuICAgICAgICB7IHJvbGU6ICdhbGVydCcgfSxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgJyAnLFxuICAgICAgICBkZXRhaWxzICYmIGgoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogZGV0YWlscyxcbiAgICAgICAgICAgICdkYXRhLW1pY3JvdGlwLXBvc2l0aW9uJzogJ3RvcCcsXG4gICAgICAgICAgICAnZGF0YS1taWNyb3RpcC1zaXplJzogJ2xhcmdlJyxcbiAgICAgICAgICAgIHJvbGU6ICd0b29sdGlwJyB9LFxuICAgICAgICAgICc/J1xuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBJbmZvcm1lci5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMub3B0cy50YXJnZXQ7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy5tb3VudCh0YXJnZXQsIHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gSW5mb3JtZXI7XG59KFBsdWdpbik7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdAdXBweS9jb3JlJyksXG4gICAgUGx1Z2luID0gX3JlcXVpcmUuUGx1Z2luO1xuXG52YXIgZGF0YVVSSXRvQmxvYiA9IHJlcXVpcmUoJ0B1cHB5L3V0aWxzL2xpYi9kYXRhVVJJdG9CbG9iJyk7XG52YXIgaXNPYmplY3RVUkwgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvaXNPYmplY3RVUkwnKTtcbnZhciBpc1ByZXZpZXdTdXBwb3J0ZWQgPSByZXF1aXJlKCdAdXBweS91dGlscy9saWIvaXNQcmV2aWV3U3VwcG9ydGVkJyk7XG5cbi8qKlxuICogVGhlIFRodW1ibmFpbCBHZW5lcmF0b3IgcGx1Z2luXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX1BsdWdpbikge1xuICBfaW5oZXJpdHMoVGh1bWJuYWlsR2VuZXJhdG9yLCBfUGx1Z2luKTtcblxuICBmdW5jdGlvbiBUaHVtYm5haWxHZW5lcmF0b3IodXBweSwgb3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaHVtYm5haWxHZW5lcmF0b3IpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1BsdWdpbi5jYWxsKHRoaXMsIHVwcHksIG9wdHMpKTtcblxuICAgIF90aGlzLnR5cGUgPSAndGh1bWJuYWlsJztcbiAgICBfdGhpcy5pZCA9IF90aGlzLm9wdHMuaWQgfHwgJ1RodW1ibmFpbEdlbmVyYXRvcic7XG4gICAgX3RoaXMudGl0bGUgPSAnVGh1bWJuYWlsIEdlbmVyYXRvcic7XG4gICAgX3RoaXMucXVldWUgPSBbXTtcbiAgICBfdGhpcy5xdWV1ZVByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICBfdGhpcy5kZWZhdWx0VGh1bWJuYWlsRGltZW5zaW9uID0gMjAwO1xuXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgdGh1bWJuYWlsV2lkdGg6IG51bGwsXG4gICAgICB0aHVtYm5haWxIZWlnaHQ6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMub3B0cyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0cyk7XG5cbiAgICBfdGhpcy5vbkZpbGVBZGRlZCA9IF90aGlzLm9uRmlsZUFkZGVkLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRmlsZVJlbW92ZWQgPSBfdGhpcy5vbkZpbGVSZW1vdmVkLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uUmVzdG9yZWQgPSBfdGhpcy5vblJlc3RvcmVkLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0aHVtYm5haWwgZm9yIHRoZSBnaXZlbiBVcHB5IGZpbGUgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge3tkYXRhOiBCbG9ifX0gZmlsZVxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG5cblxuICBUaHVtYm5haWxHZW5lcmF0b3IucHJvdG90eXBlLmNyZWF0ZVRodW1ibmFpbCA9IGZ1bmN0aW9uIGNyZWF0ZVRodW1ibmFpbChmaWxlLCB0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgb3JpZ2luYWxVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUuZGF0YSk7XG5cbiAgICB2YXIgb25sb2FkID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZS5zcmMgPSBvcmlnaW5hbFVybDtcbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwob3JpZ2luYWxVcmwpO1xuICAgICAgICByZXNvbHZlKGltYWdlKTtcbiAgICAgIH0pO1xuICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChvcmlnaW5hbFVybCk7XG4gICAgICAgIHJlamVjdChldmVudC5lcnJvciB8fCBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBjcmVhdGUgdGh1bWJuYWlsJykpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb25sb2FkLnRoZW4oZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICB2YXIgZGltZW5zaW9ucyA9IF90aGlzMi5nZXRQcm9wb3J0aW9uYWxEaW1lbnNpb25zKGltYWdlLCB0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0KTtcbiAgICAgIHZhciBjYW52YXMgPSBfdGhpczIucmVzaXplSW1hZ2UoaW1hZ2UsIGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgIHJldHVybiBfdGhpczIuY2FudmFzVG9CbG9iKGNhbnZhcywgJ2ltYWdlL3BuZycpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5ldyBjYWxjdWxhdGVkIGRpbWVuc2lvbnMgZm9yIHRoZSBnaXZlbiBpbWFnZSBhbmQgYSB0YXJnZXQgd2lkdGhcbiAgICogb3IgaGVpZ2h0LiBJZiBib3RoIHdpZHRoIGFuZCBoZWlnaHQgYXJlIGdpdmVuLCBvbmx5IHdpZHRoIGlzIHRha2VuIGludG9cbiAgICogYWNjb3VudC4gSWYgbmVpdGhlciB3aWR0aCBub3IgaGVpZ2h0IGFyZSBnaXZlbiwgdGhlIGRlZmF1bHQgZGltZW5zaW9uXG4gICAqIGlzIHVzZWQuXG4gICAqL1xuXG5cbiAgVGh1bWJuYWlsR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRQcm9wb3J0aW9uYWxEaW1lbnNpb25zID0gZnVuY3Rpb24gZ2V0UHJvcG9ydGlvbmFsRGltZW5zaW9ucyhpbWcsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgYXNwZWN0ID0gaW1nLndpZHRoIC8gaW1nLmhlaWdodDtcblxuICAgIGlmICh3aWR0aCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogTWF0aC5yb3VuZCh3aWR0aCAvIGFzcGVjdClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGhlaWdodCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogTWF0aC5yb3VuZChoZWlnaHQgKiBhc3BlY3QpLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHRoaXMuZGVmYXVsdFRodW1ibmFpbERpbWVuc2lvbixcbiAgICAgIGhlaWdodDogTWF0aC5yb3VuZCh0aGlzLmRlZmF1bHRUaHVtYm5haWxEaW1lbnNpb24gLyBhc3BlY3QpXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogTWFrZSBzdXJlIHRoZSBpbWFnZSBkb2VzbuKAmXQgZXhjZWVkIGJyb3dzZXIvZGV2aWNlIGNhbnZhcyBsaW1pdHMuXG4gICAqIEZvciBpb3Mgd2l0aCAyNTYgUkFNIGFuZCBpZVxuICAgKi9cblxuXG4gIFRodW1ibmFpbEdlbmVyYXRvci5wcm90b3R5cGUucHJvdGVjdCA9IGZ1bmN0aW9uIHByb3RlY3QoaW1hZ2UpIHtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MDgxNDgzL21heGltdW0tc2l6ZS1vZi1hLWNhbnZhcy1lbGVtZW50XG5cbiAgICB2YXIgcmF0aW8gPSBpbWFnZS53aWR0aCAvIGltYWdlLmhlaWdodDtcblxuICAgIHZhciBtYXhTcXVhcmUgPSA1MDAwMDAwOyAvLyBpb3MgbWF4IGNhbnZhcyBzcXVhcmVcbiAgICB2YXIgbWF4U2l6ZSA9IDQwOTY7IC8vIGllIG1heCBjYW52YXMgZGltZW5zaW9uc1xuXG4gICAgdmFyIG1heFcgPSBNYXRoLmZsb29yKE1hdGguc3FydChtYXhTcXVhcmUgKiByYXRpbykpO1xuICAgIHZhciBtYXhIID0gTWF0aC5mbG9vcihtYXhTcXVhcmUgLyBNYXRoLnNxcnQobWF4U3F1YXJlICogcmF0aW8pKTtcbiAgICBpZiAobWF4VyA+IG1heFNpemUpIHtcbiAgICAgIG1heFcgPSBtYXhTaXplO1xuICAgICAgbWF4SCA9IE1hdGgucm91bmQobWF4VyAvIHJhdGlvKTtcbiAgICB9XG4gICAgaWYgKG1heEggPiBtYXhTaXplKSB7XG4gICAgICBtYXhIID0gbWF4U2l6ZTtcbiAgICAgIG1heFcgPSBNYXRoLnJvdW5kKHJhdGlvICogbWF4SCk7XG4gICAgfVxuICAgIGlmIChpbWFnZS53aWR0aCA+IG1heFcpIHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IG1heFc7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gbWF4SDtcbiAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgbWF4VywgbWF4SCk7XG4gICAgICBpbWFnZSA9IGNhbnZhcztcbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSBhbiBpbWFnZSB0byB0aGUgdGFyZ2V0IGB3aWR0aGAgYW5kIGBoZWlnaHRgLlxuICAgKlxuICAgKiBSZXR1cm5zIGEgQ2FudmFzIHdpdGggdGhlIHJlc2l6ZWQgaW1hZ2Ugb24gaXQuXG4gICAqL1xuXG5cbiAgVGh1bWJuYWlsR2VuZXJhdG9yLnByb3RvdHlwZS5yZXNpemVJbWFnZSA9IGZ1bmN0aW9uIHJlc2l6ZUltYWdlKGltYWdlLCB0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0KSB7XG4gICAgLy8gUmVzaXppbmcgaW4gc3RlcHMgcmVmYWN0b3JlZCB0byB1c2UgYSBzb2x1dGlvbiBmcm9tXG4gICAgLy8gaHR0cHM6Ly9ibG9nLnVwbG9hZGNhcmUuY29tL2ltYWdlLXJlc2l6ZS1pbi1icm93c2Vycy1pcy1icm9rZW4tZTM4ZWVkMDhkZjAxXG5cbiAgICBpbWFnZSA9IHRoaXMucHJvdGVjdChpbWFnZSk7XG5cbiAgICAvLyBVc2UgdGhlIFBvbHlmaWxsIGZvciBNYXRoLmxvZzIoKSBzaW5jZSBJRSBkb2Vzbid0IHN1cHBvcnQgbG9nMlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvbG9nMiNQb2x5ZmlsbFxuICAgIHZhciBzdGVwcyA9IE1hdGguY2VpbChNYXRoLmxvZyhpbWFnZS53aWR0aCAvIHRhcmdldFdpZHRoKSAqIE1hdGguTE9HMkUpO1xuICAgIGlmIChzdGVwcyA8IDEpIHtcbiAgICAgIHN0ZXBzID0gMTtcbiAgICB9XG4gICAgdmFyIHNXID0gdGFyZ2V0V2lkdGggKiBNYXRoLnBvdygyLCBzdGVwcyAtIDEpO1xuICAgIHZhciBzSCA9IHRhcmdldEhlaWdodCAqIE1hdGgucG93KDIsIHN0ZXBzIC0gMSk7XG4gICAgdmFyIHggPSAyO1xuXG4gICAgd2hpbGUgKHN0ZXBzLS0pIHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHNXO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHNIO1xuICAgICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBzVywgc0gpO1xuICAgICAgaW1hZ2UgPSBjYW52YXM7XG5cbiAgICAgIHNXID0gTWF0aC5yb3VuZChzVyAvIHgpO1xuICAgICAgc0ggPSBNYXRoLnJvdW5kKHNIIC8geCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTYXZlIGEgPGNhbnZhcz4gZWxlbWVudCdzIGNvbnRlbnQgdG8gYSBCbG9iIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuXG5cbiAgVGh1bWJuYWlsR2VuZXJhdG9yLnByb3RvdHlwZS5jYW52YXNUb0Jsb2IgPSBmdW5jdGlvbiBjYW52YXNUb0Jsb2IoY2FudmFzLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgaWYgKGNhbnZhcy50b0Jsb2IpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBjYW52YXMudG9CbG9iKHJlc29sdmUsIHR5cGUsIHF1YWxpdHkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkYXRhVVJJdG9CbG9iKGNhbnZhcy50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSksIHt9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IHRoZSBwcmV2aWV3IFVSTCBmb3IgYSBmaWxlLlxuICAgKi9cblxuXG4gIFRodW1ibmFpbEdlbmVyYXRvci5wcm90b3R5cGUuc2V0UHJldmlld1VSTCA9IGZ1bmN0aW9uIHNldFByZXZpZXdVUkwoZmlsZUlELCBwcmV2aWV3KSB7XG4gICAgdGhpcy51cHB5LnNldEZpbGVTdGF0ZShmaWxlSUQsIHsgcHJldmlldzogcHJldmlldyB9KTtcbiAgfTtcblxuICBUaHVtYm5haWxHZW5lcmF0b3IucHJvdG90eXBlLmFkZFRvUXVldWUgPSBmdW5jdGlvbiBhZGRUb1F1ZXVlKGl0ZW0pIHtcbiAgICB0aGlzLnF1ZXVlLnB1c2goaXRlbSk7XG4gICAgaWYgKHRoaXMucXVldWVQcm9jZXNzaW5nID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5wcm9jZXNzUXVldWUoKTtcbiAgICB9XG4gIH07XG5cbiAgVGh1bWJuYWlsR2VuZXJhdG9yLnByb3RvdHlwZS5wcm9jZXNzUXVldWUgPSBmdW5jdGlvbiBwcm9jZXNzUXVldWUoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLnF1ZXVlUHJvY2Vzc2luZyA9IHRydWU7XG4gICAgaWYgKHRoaXMucXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0VGh1bWJuYWlsKGN1cnJlbnQpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHt9KSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGhhbmRsZS1jYWxsYmFjay1lcnJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5wcm9jZXNzUXVldWUoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnF1ZXVlUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy51cHB5LmxvZygnW1RodW1ibmFpbEdlbmVyYXRvcl0gRW1wdGllZCB0aHVtYm5haWwgcXVldWUnKTtcbiAgICAgIHRoaXMudXBweS5lbWl0KCd0aHVtYm5haWw6YWxsLWdlbmVyYXRlZCcpO1xuICAgIH1cbiAgfTtcblxuICBUaHVtYm5haWxHZW5lcmF0b3IucHJvdG90eXBlLnJlcXVlc3RUaHVtYm5haWwgPSBmdW5jdGlvbiByZXF1ZXN0VGh1bWJuYWlsKGZpbGUpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIGlmIChpc1ByZXZpZXdTdXBwb3J0ZWQoZmlsZS50eXBlKSAmJiAhZmlsZS5pc1JlbW90ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlVGh1bWJuYWlsKGZpbGUsIHRoaXMub3B0cy50aHVtYm5haWxXaWR0aCwgdGhpcy5vcHRzLnRodW1ibmFpbEhlaWdodCkudGhlbihmdW5jdGlvbiAocHJldmlldykge1xuICAgICAgICBfdGhpczQuc2V0UHJldmlld1VSTChmaWxlLmlkLCBwcmV2aWV3KTtcbiAgICAgICAgX3RoaXM0LnVwcHkubG9nKCdbVGh1bWJuYWlsR2VuZXJhdG9yXSBHZW5lcmF0ZWQgdGh1bWJuYWlsIGZvciAnICsgZmlsZS5pZCk7XG4gICAgICAgIF90aGlzNC51cHB5LmVtaXQoJ3RodW1ibmFpbDpnZW5lcmF0ZWQnLCBfdGhpczQudXBweS5nZXRGaWxlKGZpbGUuaWQpLCBwcmV2aWV3KTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgX3RoaXM0LnVwcHkubG9nKCdbVGh1bWJuYWlsR2VuZXJhdG9yXSBGYWlsZWQgdGh1bWJuYWlsIGZvciAnICsgZmlsZS5pZCk7XG4gICAgICAgIF90aGlzNC51cHB5LmxvZyhlcnIsICd3YXJuaW5nJyk7XG4gICAgICAgIF90aGlzNC51cHB5LmVtaXQoJ3RodW1ibmFpbDplcnJvcicsIF90aGlzNC51cHB5LmdldEZpbGUoZmlsZS5pZCksIGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIFRodW1ibmFpbEdlbmVyYXRvci5wcm90b3R5cGUub25GaWxlQWRkZWQgPSBmdW5jdGlvbiBvbkZpbGVBZGRlZChmaWxlKSB7XG4gICAgaWYgKCFmaWxlLnByZXZpZXcpIHtcbiAgICAgIHRoaXMuYWRkVG9RdWV1ZShmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgVGh1bWJuYWlsR2VuZXJhdG9yLnByb3RvdHlwZS5vbkZpbGVSZW1vdmVkID0gZnVuY3Rpb24gb25GaWxlUmVtb3ZlZChmaWxlKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5xdWV1ZS5pbmRleE9mKGZpbGUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhbiB1cCBvYmplY3QgVVJMcy5cbiAgICBpZiAoZmlsZS5wcmV2aWV3ICYmIGlzT2JqZWN0VVJMKGZpbGUucHJldmlldykpIHtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZS5wcmV2aWV3KTtcbiAgICB9XG4gIH07XG5cbiAgVGh1bWJuYWlsR2VuZXJhdG9yLnByb3RvdHlwZS5vblJlc3RvcmVkID0gZnVuY3Rpb24gb25SZXN0b3JlZCgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBfdXBweSRnZXRTdGF0ZSA9IHRoaXMudXBweS5nZXRTdGF0ZSgpLFxuICAgICAgICBmaWxlcyA9IF91cHB5JGdldFN0YXRlLmZpbGVzO1xuXG4gICAgdmFyIGZpbGVJRHMgPSBPYmplY3Qua2V5cyhmaWxlcyk7XG4gICAgZmlsZUlEcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlSUQpIHtcbiAgICAgIHZhciBmaWxlID0gX3RoaXM1LnVwcHkuZ2V0RmlsZShmaWxlSUQpO1xuICAgICAgaWYgKCFmaWxlLmlzUmVzdG9yZWQpIHJldHVybjtcbiAgICAgIC8vIE9ubHkgYWRkIGJsb2IgVVJMczsgdGhleSBhcmUgbGlrZWx5IGludmFsaWQgYWZ0ZXIgYmVpbmcgcmVzdG9yZWQuXG4gICAgICBpZiAoIWZpbGUucHJldmlldyB8fCBpc09iamVjdFVSTChmaWxlLnByZXZpZXcpKSB7XG4gICAgICAgIF90aGlzNS5hZGRUb1F1ZXVlKGZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFRodW1ibmFpbEdlbmVyYXRvci5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gICAgdGhpcy51cHB5Lm9uKCdmaWxlLWFkZGVkJywgdGhpcy5vbkZpbGVBZGRlZCk7XG4gICAgdGhpcy51cHB5Lm9uKCdmaWxlLXJlbW92ZWQnLCB0aGlzLm9uRmlsZVJlbW92ZWQpO1xuICAgIHRoaXMudXBweS5vbigncmVzdG9yZWQnLCB0aGlzLm9uUmVzdG9yZWQpO1xuICB9O1xuXG4gIFRodW1ibmFpbEdlbmVyYXRvci5wcm90b3R5cGUudW5pbnN0YWxsID0gZnVuY3Rpb24gdW5pbnN0YWxsKCkge1xuICAgIHRoaXMudXBweS5vZmYoJ2ZpbGUtYWRkZWQnLCB0aGlzLm9uRmlsZUFkZGVkKTtcbiAgICB0aGlzLnVwcHkub2ZmKCdmaWxlLXJlbW92ZWQnLCB0aGlzLm9uRmlsZVJlbW92ZWQpO1xuICAgIHRoaXMudXBweS5vZmYoJ3Jlc3RvcmVkJywgdGhpcy5vblJlc3RvcmVkKTtcbiAgfTtcblxuICByZXR1cm4gVGh1bWJuYWlsR2VuZXJhdG9yO1xufShQbHVnaW4pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGF0YVVSSXRvQmxvYihkYXRhVVJJLCBvcHRzLCB0b0ZpbGUpIHtcbiAgLy8gZ2V0IHRoZSBiYXNlNjQgZGF0YVxuICB2YXIgZGF0YSA9IGRhdGFVUkkuc3BsaXQoJywnKVsxXTtcblxuICAvLyB1c2VyIG1heSBwcm92aWRlIG1pbWUgdHlwZSwgaWYgbm90IGdldCBpdCBmcm9tIGRhdGEgVVJJXG4gIHZhciBtaW1lVHlwZSA9IG9wdHMubWltZVR5cGUgfHwgZGF0YVVSSS5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXTtcblxuICAvLyBkZWZhdWx0IHRvIHBsYWluL3RleHQgaWYgZGF0YSBVUkkgaGFzIG5vIG1pbWVUeXBlXG4gIGlmIChtaW1lVHlwZSA9PSBudWxsKSB7XG4gICAgbWltZVR5cGUgPSAncGxhaW4vdGV4dCc7XG4gIH1cblxuICB2YXIgYmluYXJ5ID0gYXRvYihkYXRhKTtcbiAgdmFyIGFycmF5ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXkucHVzaChiaW5hcnkuY2hhckNvZGVBdChpKSk7XG4gIH1cblxuICAvLyBDb252ZXJ0IHRvIGEgRmlsZT9cbiAgaWYgKHRvRmlsZSkge1xuICAgIHJldHVybiBuZXcgRmlsZShbbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXSwgb3B0cy5uYW1lIHx8ICcnLCB7IHR5cGU6IG1pbWVUeXBlIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShhcnJheSldLCB7IHR5cGU6IG1pbWVUeXBlIH0pO1xufTsiLCIvKipcbiAqIENoZWNrIGlmIGEgVVJMIHN0cmluZyBpcyBhbiBvYmplY3QgVVJMIGZyb20gYFVSTC5jcmVhdGVPYmplY3RVUkxgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNPYmplY3RVUkwodXJsKSB7XG4gIHJldHVybiB1cmwuaW5kZXhPZignYmxvYjonKSA9PT0gMDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1ByZXZpZXdTdXBwb3J0ZWQoZmlsZVR5cGUpIHtcbiAgaWYgKCFmaWxlVHlwZSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgZmlsZVR5cGVTcGVjaWZpYyA9IGZpbGVUeXBlLnNwbGl0KCcvJylbMV07XG4gIC8vIGxpc3Qgb2YgaW1hZ2VzIHRoYXQgYnJvd3NlcnMgY2FuIHByZXZpZXdcbiAgaWYgKC9eKGpwZT9nfGdpZnxwbmd8c3ZnfHN2Z1xcK3htbHxibXApJC8udGVzdChmaWxlVHlwZVNwZWNpZmljKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07IiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgaXNET01FbGVtZW50ID0gcmVxdWlyZSgnLi9pc0RPTUVsZW1lbnQnKTtcblxuLyoqXG4gKiBGaW5kIG9uZSBvciBtb3JlIERPTSBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudFxuICogQHJldHVybiB7QXJyYXl8bnVsbH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaW5kQWxsRE9NRWxlbWVudHMoZWxlbWVudCkge1xuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQpKTtcbiAgICByZXR1cm4gZWxlbWVudHMubGVuZ3RoID4gMCA/IGVsZW1lbnRzIDogbnVsbDtcbiAgfVxuXG4gIGlmICgodHlwZW9mIGVsZW1lbnQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGVsZW1lbnQpKSA9PT0gJ29iamVjdCcgJiYgaXNET01FbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtlbGVtZW50XTtcbiAgfVxufTsiLCIvKipcbiAqIENvbnZlcnRzIGxpc3QgaW50byBhcnJheVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9BcnJheShsaXN0KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0IHx8IFtdLCAwKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==