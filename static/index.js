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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function (obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '    <div>\n        <h1>hello world</h1>\n    </div>\n';

}
return __p
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
const footer = __webpack_require__(2);
const header = __webpack_require__(3);
const layout = __webpack_require__(4);

const info = {
    pageTitle: ''
};

const moduleExports = {
    /* 处理各个页面传入而又需要在公共区域用到的参数 */
    init({pageTitle}) {
        info.pageTitle = pageTitle; // 比如说页面名称，会在<title>或面包屑里用到
        return this;
    },

    /* 整合各公共组件和页面实际内容，最后生成完整的HTML文档 */
    run(content) {
        // const headerRenderData = Object.assign({}, info); // 页头组件需要加载css/js等，因此需要比较多的变量
        const renderData = {
            header: header(info),
            footer: footer(),
            content
        };
        return layout(renderData);
    }
};

module.exports = moduleExports;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '</body>\n</html>\n';

}
return __p
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!DOCTYPE html>\n<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->\n<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->\n<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->\n<!--[if gt IE 8]><!--> <html class="no-js" lang=""><!--<![endif]-->\n<head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n    <meta name="description" content="">\n    <meta name="author" content="">\n\n    <title>';
 if (pageTitle) { ;
__p +=
((__t = ( pageTitle )) == null ? '' : __t);
 } ;
__p += '</title>\n\n</head>\n<body>\n';

}
return __p
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p +=
((__t = ( header )) == null ? '' : __t) +
'\n' +
((__t = ( content )) == null ? '' : __t) +
'\n' +
((__t = ( footer )) == null ? '' : __t) +
'\n';

}
return __p
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const content = __webpack_require__(0);
const layout = __webpack_require__(1);

var pageTitle = '橙瓜-首页';


module.exports = layout.init({ pageTitle }).run(content());


/***/ })
/******/ ]);