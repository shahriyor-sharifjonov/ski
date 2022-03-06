/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n\r\n\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\r\n\r\n// import Swiper, { Navigation, Pagination } from 'swiper';\r\n\r\n// const swiper = new Swiper();\r\n\r\nconst headerButton = document.querySelector(\".header__button\");\r\nconst headerMenu = document.querySelector(\".header__menu\");\r\nlet menuOpened = false;\r\nconst menuToggle = () => {\r\n  menuOpened = !menuOpened;\r\n  headerButton.classList.toggle(\"open\");\r\n  headerMenu.classList.toggle(\"open\");\r\n};\r\n\r\nheaderButton.onclick = menuToggle;\r\n\r\nwindow.addEventListener('click', e => {\r\n    if (\r\n      menuOpened &&\r\n      !e.composedPath().includes(headerButton) &&\r\n      !e.composedPath().includes(headerMenu)\r\n    )\r\n      menuToggle();\r\n})\r\n\r\ndocument.querySelectorAll('.search').forEach(el => {\r\n    // variables\r\n    const button = el.querySelector('.search__toggle');\r\n    const content = el.querySelector('.search__content');\r\n    const list = el.querySelector('.search__list');\r\n    const input = el.querySelector('.search__content input');\r\n    const results = list.querySelectorAll('.search__list-item');\r\n\r\n    // open content\r\n    button.addEventListener('click', el => {\r\n        content.classList.add('active');\r\n    })\r\n\r\n    // open list\r\n    input.addEventListener('click', el => {\r\n        list.classList.add('active');\r\n    })\r\n\r\n    // change input value\r\n    results.forEach(el => {\r\n        el.addEventListener('click', e => {\r\n            const result = el.querySelector('.search__list-name').innerHTML;\r\n            input.value = result;\r\n            list.classList.remove('active');\r\n        })\r\n    })\r\n\r\n    // keydown action\r\n    document.addEventListener('keydown', function(e){\r\n        if(list.classList.contains('active')){\r\n            if(e.code == 'ArrowDown'){\r\n                for(let i = 0; i < results.length; i++){\r\n                    if(i !== results.length - 1){\r\n                        if(results[i].classList.contains('active')){\r\n                            results[i].classList.remove('active');\r\n                            results[i += 1].classList.add('active');\r\n                            const result = results[i].querySelector('.search__list-name').innerHTML;\r\n                            input.value = result;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            if(e.code == 'ArrowUp'){\r\n                for(let i = 0; i < results.length; i++){\r\n                    if(i !== 0){\r\n                        if(results[i].classList.contains('active')){\r\n                            results[i].classList.remove('active');\r\n                            results[i -= 1].classList.add('active');\r\n                            const result = results[i].querySelector('.search__list-name').innerHTML;\r\n                            input.value = result;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    })\r\n\r\n    // search disappears \r\n    document.addEventListener('click', e => {\r\n        if(list.classList.contains('active')){\r\n            if(!e.composedPath().includes(el)){\r\n                list.classList.remove('active');\r\n                content.classList.remove('active');\r\n            }\r\n        }\r\n    })\r\n})\r\n\r\n\r\ndocument.querySelectorAll('.dropdown').forEach(function (dropdownWrapper) {\r\n    const dropdownBtn = dropdownWrapper.querySelector('.dropdown__button');\r\n    const span = dropdownBtn.querySelector('span');\r\n    const dropdownList = dropdownWrapper.querySelector('.dropdown__list');\r\n    const dropdownItems = dropdownList.querySelectorAll('.dropdown__list-item');\r\n    const dropdownInput = dropdownWrapper.querySelector('.dropdown__input_hidden')\r\n    \r\n    dropdownBtn.addEventListener('click', function () {\r\n      dropdownList.classList.toggle('dropdown__list_visible');\r\n      this.classList.toggle('dropdown__button_active');\r\n    });\r\n    \r\n    dropdownItems.forEach(function(listItem) {\r\n      listItem.addEventListener('click', function (e) {\r\n        dropdownItems.forEach(function(el) {\r\n          el.classList.remove('dropdown__list-item_active');\r\n        })\r\n        e.target.classList.add('dropdown__list-item_active');\r\n        span.innerText = this.innerText;\r\n        dropdownInput.value = this.dataset.value;\r\n        dropdownList.classList.remove('dropdown__list_visible');\r\n      })\r\n    })\r\n    \r\n    document.addEventListener('click', function (e) {\r\n      if ( e.target !== dropdownBtn ){\r\n        dropdownBtn.classList.remove('dropdown__button_active');\r\n        dropdownList.classList.remove('dropdown__list_visible');\r\n      }\r\n    })\r\n    \r\n    document.addEventListener('keydown', function (e) {\r\n      if( e.key === 'Tab' || e.key === 'Escape' ) {\r\n        dropdownBtn.classList.remove('dropdown__button_active');\r\n        dropdownList.classList.remove('dropdown__list_visible');\r\n      }\r\n    }) \r\n})\n\n//# sourceURL=webpack://gulp-2022/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isWebp\": () => (/* binding */ isWebp)\n/* harmony export */ });\nfunction isWebp() {\r\n    function testWebP(callback) {\r\n        let webP = new Image();\r\n        webP.onload = webP.onerror = function () {\r\n            callback(webP.height == 2);\r\n        };\r\n        webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n    }\r\n    testWebP(function (support) {\r\n        let className = support === true ? 'webp' : 'no-webp';\r\n        document.documentElement.classList.add(className);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/functions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;