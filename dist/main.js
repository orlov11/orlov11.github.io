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

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./sass/style.sass?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.sass */ \"./sass/style.sass\");\n\r\n\r\n\r\nfunction content(btnShow, btnHide, Content){\r\n\r\nconst btn = document.querySelector(btnShow),\r\n      btnHidden = document.querySelector(btnHide),\r\n      block = document.querySelector(Content)\r\n\r\n\r\n    function showAllContent() {\r\n        block.classList.add('maxHight')\r\n        btn.classList.add('none')\r\n        btnHidden.classList.add('block')\r\n    }   \r\n\r\n    function hideAllContent() {\r\n        block.classList.remove('maxHight')\r\n        btn.classList.remove('none')\r\n        btnHidden.classList.remove('block')\r\n        \r\n}\r\n\r\n    btn.addEventListener('click', ()=>{\r\n        showAllContent()\r\n    })\r\n\r\n    btnHidden.addEventListener('click', ()=>{\r\n        hideAllContent()\r\n    })\r\n}\r\n\r\nfunction popUpMenu(btnOpen, btnClosed, burgerHide, navHide, mainHide, footerHide, displayShow, displayHide){\r\n    \r\n    const btn = document.querySelector(btnOpen),\r\n    burger = document.querySelector(burgerHide),\r\n    nav = document.querySelector(navHide),\r\n    main = document.querySelector(mainHide),\r\n    footer = document.querySelector(footerHide),\r\n    close = document.querySelector(btnClosed)\r\n    \r\n    btn.addEventListener('click', ()=>{\r\n        burger.classList.remove(displayHide)\r\n        burger.classList.add(displayShow)\r\n        nav.classList.add(displayHide)\r\n        main.style.display = 'none'\r\n        footer.style.display = 'none' \r\n    })\r\n    \r\n    close.addEventListener('click', ()=>{\r\n        burger.classList.remove(displayShow)\r\n        nav.classList.remove(displayHide)\r\n        main.style.display = 'block'\r\n        footer.style.display = 'block'\r\n    })\r\n}\r\n\r\nfunction popUpOther(btnOpen, btnClosed, burgerHide, navHide, mainHide, footerHide, displayShow, displayHide, burg, allWrapper, black,closeBlock){\r\n    \r\n    const btn = document.querySelector(btnOpen),\r\n    burger = document.querySelector(burgerHide),\r\n    nav = document.querySelector(navHide),\r\n    main = document.querySelector(mainHide),\r\n    footer = document.querySelector(footerHide),\r\n    close = document.querySelector(btnClosed),\r\n    menu = document.querySelector(burg),\r\n    wrap = document.querySelector(allWrapper) \r\n    \r\n    btn.addEventListener('click', ()=>{\r\n        if(window.innerWidth > 1365){\r\n            burger.classList.add(displayShow)\r\n            nav.classList.add(displayHide)\r\n            main.style.display = 'none'\r\n            footer.style.display = 'none'\r\n            menu.classList.add(displayHide)     \r\n            wrap.classList.add(black)\r\n        } \r\n        else if(window.innerWidth < 1365){\r\n            burger.classList.add(displayShow)\r\n            nav.classList.add(displayHide)\r\n            menu.classList.add(displayHide)\r\n            main.style.display = 'none'\r\n            footer.style.display = 'none'    \r\n            wrap.classList.add(black)\r\n        }\r\n        \r\n        \r\n    })\r\n    \r\n    \r\n    close.addEventListener('click', ()=>{\r\n        if(window.innerWidth > 1365){\r\n            burger.classList.remove(displayShow)\r\n            nav.classList.remove(displayHide)\r\n            main.style.display = 'block'\r\n            footer.style.display = 'block'\r\n            menu.classList.remove(displayHide)\r\n            wrap.classList.remove(black)\r\n\r\n        } else if(window.innerWidth < 1365){\r\n            burger.classList.remove(displayShow)\r\n            nav.classList.remove(displayHide)\r\n            main.style.display = 'block'\r\n            footer.style.display = 'block'\r\n            wrap.classList.remove(black)\r\n            \r\n        }\r\n        menu.classList.remove(displayShow)\r\n    })\r\n\r\n    burger.addEventListener('click', (e)=>{\r\n        if(e.target == document.querySelector(closeBlock)){\r\n            if(window.innerWidth > 1365){\r\n                burger.classList.remove(displayShow)\r\n                nav.classList.remove(displayHide)\r\n                main.style.display = 'block'\r\n                footer.style.display = 'block'\r\n                menu.classList.remove(displayHide)\r\n                wrap.classList.remove(black)\r\n    \r\n            } else if(window.innerWidth < 1365){\r\n                burger.classList.remove(displayShow)\r\n                nav.classList.remove(displayHide)\r\n                main.style.display = 'block'\r\n                footer.style.display = 'block'\r\n                wrap.classList.remove(black)\r\n                \r\n            }\r\n            menu.classList.remove(displayShow)\r\n    \r\n        } else {\r\n            \r\n        }\r\n\r\n\r\n\r\n\r\n    })\r\n}\r\n\r\ncontent('.show','.hide','.repairs__wrapper--noswiper')\r\ncontent('.showw','.hidee','.blockk')\r\n\r\npopUpMenu('.btn-hamburger','.menu-min__close', '.burger', '.menu--width_320', 'main', 'footer', 'block', 'none')\r\n\r\n\r\n\r\npopUpOther('.call__open','.call__closed', '.call__block', '.menu--width_320', 'main', 'footer', 'flex', 'none', '.burger', '.wrapper__all','block','.call__block')\r\npopUpOther('#call__open','.call__closed', '.call__block', '.menu--width_320', 'main', 'footer', 'flex', 'none', '.burger', '.wrapper__all','block','.call__block')\r\n\r\n\r\npopUpOther('.feedback__open','.feedback__closed', '.feedback__block', '.menu--width_320', 'main', 'footer', 'flex', 'none', '.burger', '.wrapper__all','block','.feedback__block')\r\npopUpOther('#feedback__open','.feedback__closed', '.feedback__block', '.menu--width_320', 'main', 'footer', 'flex', 'none', '.burger', '.wrapper__all','block','.feedback__block')\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;