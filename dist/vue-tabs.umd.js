(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-tabs"] = factory();
	else
		root["vue-tabs"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1326":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9499");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("48ac1130", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "9499":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-tabs.stacked{display:flex}.vue-tabs .tabs__link{text-decoration:none;color:grey}.vue-tabs .nav{margin-bottom:0;margin-top:0;padding-left:0;list-style:none}.vue-tabs .nav:after,.vue-tabs .nav:before{content:\" \";display:table}.vue-tabs .nav:after{clear:both}.vue-tabs .nav>li{position:relative;display:block}.vue-tabs .nav>li>a{position:relative;display:block;padding:10px 15px}.vue-tabs .nav>li>a:focus,.vue-tabs .nav>li>a:hover{text-decoration:none;background-color:#eee}.vue-tabs .nav>li span.title{display:flex;justify-content:center}.vue-tabs .nav>li.disabled>a{color:#777}.vue-tabs .nav>li.disabled>a:focus,.vue-tabs .nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent;border-color:transparent}.vue-tabs .nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.vue-tabs .nav>li>a>img{max-width:none}.vue-tabs .nav-tabs{border-bottom:1px solid #ddd}.vue-tabs .nav-tabs>li{float:left;margin-bottom:-1px}.vue-tabs .nav-tabs>li>a{margin-right:2px;line-height:1.42857;border:1px solid transparent;border-radius:4px 4px 0 0}.vue-tabs .nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.vue-tabs .nav-tabs>li.active>a,.vue-tabs .nav-tabs>li.active>a:focus,.vue-tabs .nav-tabs>li.active>a:hover{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.vue-tabs .nav-pills>li{float:left}.vue-tabs .nav-pills>li>a{border-radius:4px}.vue-tabs .nav-pills>li+li{margin-left:2px}.vue-tabs .nav-pills>li.active>a,.vue-tabs .nav-pills>li.active>a:focus,.vue-tabs .nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.vue-tabs .nav-stacked>li{float:none}.vue-tabs .nav-stacked>li+li{margin-top:2px;margin-left:0}.vue-tabs .nav-justified,.vue-tabs .nav-tabs.nav-justified{width:100%}.vue-tabs .nav-justified>li,.vue-tabs .nav-tabs.nav-justified>li{float:none}.vue-tabs .nav-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.vue-tabs .nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.vue-tabs .nav-justified>li,.vue-tabs .nav-tabs.nav-justified>li{display:table-cell;width:1%}.vue-tabs .nav-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{margin-bottom:0}}.vue-tabs .nav-tabs-justified,.vue-tabs .nav-tabs.nav-justified{border-bottom:0}.vue-tabs .nav-tabs-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.vue-tabs .nav-tabs-justified>.active>a,.vue-tabs .nav-tabs-justified>.active>a:focus,.vue-tabs .nav-tabs-justified>.active>a:hover,.vue-tabs .nav-tabs.nav-justified>.active>a,.vue-tabs .nav-tabs.nav-justified>.active>a:focus,.vue-tabs .nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.vue-tabs .nav-tabs-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.vue-tabs .nav-tabs-justified>.active>a,.vue-tabs .nav-tabs-justified>.active>a:focus,.vue-tabs .nav-tabs-justified>.active>a:hover,.vue-tabs .nav-tabs.nav-justified>.active>a,.vue-tabs .nav-tabs.nav-justified>.active>a:focus,.vue-tabs .nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.vue-tabs .tab-content>.tab-pane{display:none}.vue-tabs .tab-content>.active{display:block}.vue-tabs section[aria-hidden=true]{display:none}", ""]);

// exports


/***/ }),

/***/ "b6af":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1326");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueTabs", function() { return /* reexport */ VueTabs; });
__webpack_require__.d(__webpack_exports__, "VTab", function() { return /* reexport */ VTab; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (false) {}

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74777eea-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueTabs.vue?vue&type=template&id=211e750c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-tabs",class:{ 'stacked': _vm.isStacked }},[_c('div',{class:{'nav-tabs-navigation': !this.isStacked, 'left-vertical-tabs': this.isStacked }},[_c('div',{staticClass:"nav-tabs-wrapper",class:{ 'stacked': _vm.isStacked }},[_c('ul',{class:_vm.classList,attrs:{"role":"tablist"}},_vm._l((_vm.tabs),function(tab,index){return _c('li',{key:tab.title,staticClass:"tab",class:{ 'active': _vm.activeTabIndex === index , 'disabled': tab.disabled },attrs:{"role":"tab","id":("t-" + (tab.tabId)),"aria-selected":_vm.activeTabIndex === index,"aria-controls":("p-" + (tab.tabId))},on:{"click":function($event){return _vm.navigateToTab(index, tab.route)}}},[_vm._v("=`${tab.icon}`>"),_c('span',{style:(_vm.getTitleStyles(index, tab))},[_vm._v(_vm._s(tab.title))])])}),0)])]),_c('div',{staticClass:"tab-content",class:{ 'right-text-tabs': this.isStacked }},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VueTabs.vue?vue&type=template&id=211e750c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueTabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var VueTabsvue_type_script_lang_js_ = ({
  name: 'vue-tabs',
  props: {
    activeTabColor: String,
    activeTextColor: String,
    disabledColor: String,
    disabledTextColor: String,

    /**
     * Tab title position: center | bottom | top
     */
    textPosition: {
      type: String,
      default: 'center'
    },

    /**
     * Tab type: tabs | pills
     */
    type: {
      type: String,
      default: 'tabs'
    },
    direction: {
      type: String,
      default: 'horizontal'
    },

    /**
     * Centers the tabs and makes the container div full width
     */
    centered: Boolean,
    value: [String, Number, Object]
  },

  data() {
    return {
      activeTabIndex: 0,
      tabs: []
    };
  },

  computed: {
    isTabShape() {
      return this.type === 'tabs';
    },

    isStacked() {
      return this.direction === 'vertical';
    },

    classList() {
      let navType = this.isTabShape ? 'nav-tabs' : 'nav-pills';
      let centerClass = this.centered ? 'nav-justified' : '';
      let isStacked = this.isStacked ? 'nav-stacked' : '';
      return `nav ${navType} ${centerClass} ${isStacked}`;
    },

    stackedClass() {
      return this.isStacked ? 'stacked' : '';
    },

    activeTabStyle() {
      return {
        backgroundColor: this.activeTabColor,
        color: this.activeTextColor
      };
    }

  },
  watch: {
    tabs(newList) {
      if (newList.length > 0 && !this.value) {
        if (newList.length <= this.activeTabIndex) {
          this.activateTab(this.activeTabIndex - 1);
        } else {
          this.activateTab(this.activeTabIndex);
        }
      }

      if (newList.length > 0 && this.value) {
        this.findTabAndActivate(this.value);
      }
    },

    value(newVal) {
      this.findTabAndActivate(newVal);
    }

  },
  methods: {
    navigateToTab(index, route) {
      this.changeTab(this.activeTabIndex, index, route);
    },

    activateTab(index) {
      this.activeTabIndex = index;
      let tab = this.tabs[index];
      tab.active = true;
      this.$emit('input', tab.title);
    },

    changeTab(oldIndex, newIndex) {
      let oldTab = this.tabs[oldIndex] || {};
      let newTab = this.tabs[newIndex];
      if (newTab.disabled) return;
      this.activeTabIndex = newIndex;
      oldTab.active = false;
      newTab.active = true;
      this.$emit('input', this.tabs[newIndex].title);
      this.$emit('tab-change', newIndex, newTab, oldTab);
    },

    addTab(item) {
      const index = this.$slots.default.indexOf(item.$vnode);
      this.tabs.splice(index, 0, item);
    },

    removeTab(item) {
      const tabs = this.tabs;
      const index = tabs.indexOf(item);

      if (index > -1) {
        tabs.splice(index, 1);
      }
    },

    getTabs() {
      if (this.$slots.default) {
        return this.$slots.default.filter(comp => comp.componentOptions);
      }

      return [];
    },

    findTabAndActivate(tabNameOrIndex) {
      let indexToActivate = this.tabs.findIndex((tab, index) => tab.title === tabNameOrIndex || index === tabNameOrIndex); // if somehow activeTabIndex is not reflected in the actual vue-tab instance, set it.

      if (indexToActivate === this.activeTabIndex && !this.tabs[this.activeTabIndex].active) {
        this.tabs[this.activeTabIndex].active = true;
      }

      if (indexToActivate !== -1) {
        this.changeTab(this.activeTabIndex, indexToActivate);
      } else {
        this.changeTab(this.activeTabIndex, 0);
      }
    },

    getTitleStyles(index, tab) {
      if (this.tabs.length === 0) {
        return {};
      }

      let {
        active,
        disabled
      } = tab;

      if (!active) {
        return {};
      }

      if (disabled) {
        return {
          backgroundColor: this.disabledColor,
          color: this.disabledTextColor
        };
      }

      return {
        backgroundColor: this.activeTabColor,
        color: tab.position === 'center' ? this.activeTextColor : this.activeTabColor
      };
    }

  }
});
// CONCATENATED MODULE: ./src/components/VueTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueTabsvue_type_script_lang_js_ = (VueTabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VueTabs.vue





/* normalize component */

var component = normalizeComponent(
  components_VueTabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueTabs = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74777eea-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VTab.vue?vue&type=template&id=627b6986&
var VTabvue_type_template_id_627b6986_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"tab-container",attrs:{"id":("p-" + _vm.tabId),"aria-labelledby":("t-" + _vm.tabId),"role":"tabpanel"}},[_vm._t("default")],2)}
var VTabvue_type_template_id_627b6986_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VTab.vue?vue&type=template&id=627b6986&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VTab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var VTabvue_type_script_lang_js_ = ({
  name: 'v-tab',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    tabData: {
      default: null
    },
    beforeChange: {
      type: Function
    },
    id: String,
    route: {
      type: [String, Object]
    },
    disabled: Boolean,
    transitionName: String,
    transitionMode: String
  },

  data() {
    return {
      active: false,
      validationError: null
    };
  },

  computed: {
    isValidParent() {
      return this.$parent.$options.name === 'vue-tabs';
    },

    hash() {
      return `#${this.id}`;
    },

    tabId() {
      return this.id ? this.id : this.title;
    }

  },

  mounted() {
    this.$parent.addTab(this);
  },

  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    this.$parent.removeTab(this);
  }

});
// CONCATENATED MODULE: ./src/components/VTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VTabvue_type_script_lang_js_ = (VTabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VTab.vue?vue&type=style&index=0&lang=css&
var VTabvue_type_style_index_0_lang_css_ = __webpack_require__("b6af");

// CONCATENATED MODULE: ./src/components/VTab.vue






/* normalize component */

var VTab_component = normalizeComponent(
  components_VTabvue_type_script_lang_js_,
  VTabvue_type_template_id_627b6986_render,
  VTabvue_type_template_id_627b6986_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VTab = (VTab_component.exports);
// CONCATENATED MODULE: ./src/components/index.js


const VueTabsPlugin = {
  install(Vue) {
    Vue.component('vue-tabs', VueTabs);
    Vue.component('v-tab', VTab);
  }

}; // Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTabsPlugin);
  window.VueTabs = VueTabsPlugin;
}

/* harmony default export */ var components = (VueTabsPlugin);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-tabs.umd.js.map