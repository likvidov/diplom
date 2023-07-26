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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\r\n\r\n\r\n\r\nlet clientWidth = document.documentElement.clientWidth;\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nclientWidth > 575 ? (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('benefits', '.benefits__item', 0, 3) : (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('benefits', '.benefits__item', 0, 1);\r\nclientWidth > 575 ? (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('services', '.col-md-12', 0, 2) : (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('services', '.service-block', 0, 2);\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('31 jule 2023');\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const overlay = document.querySelector('.overlay');\n  const openModalBtn = document.querySelectorAll('div[data-modal]');\n  const modalCloseBtn = document.querySelectorAll('span[title=\"Close\"]');\n\n  const showModal = (e) => {\n    e.preventDefault();\n\n    const modalId = e.target.closest('div').getAttribute('data-modal');\n    const modalElem = document.querySelector(`.${modalId}`);\n\n    modalElem.classList.add('show');\n    overlay.classList.add('show');\n    overlay.setAttribute('data-modal', modalId)\n  }\n\n  const closeModal = (e) => {\n    let modalElem = e.target.closest('.show');\n\n    if (e.target == overlay) {\n      const modalId = e.target.getAttribute('data-modal');\n      modalElem = document.querySelector(`.${modalId}`);\n    }\n\n    modalElem.classList.remove('show');\n    overlay.classList.remove('show');\n    overlay.removeAttribute('data-modal');\n  }\n\n  openModalBtn.forEach(btn => {\n    btn.addEventListener('click', showModal)\n  });\n  modalCloseBtn.forEach(btn => {\n    btn.addEventListener('click', closeModal)\n  });\n  overlay.addEventListener('click', closeModal);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (block, items, currentSlide = 0, countSlide = 3) => {\r\n  const sliderBlock = document.getElementById(block);\r\n  const slides = document.querySelectorAll(items);\r\n\r\n  const showSlide = (elems, current) => {\r\n    elems.forEach((elem, i) => {\r\n      if (i === current) {\r\n        elem.classList.remove('hide');\r\n      }\r\n    });\r\n  }\r\n\r\n  const showSlides = (elems, countSlide, currentSlide) => {\r\n    let current = currentSlide;\r\n\r\n    elems.forEach(elem => {\r\n      elem.classList.add('hide');\r\n    })\r\n\r\n    for (let i = 0; i < countSlide; i++) {\r\n      showSlide(elems, current);\r\n      current++;\r\n      if (current == elems.length) current = 0;\r\n    }\r\n  }\r\n\r\n  sliderBlock.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.closest(`.${block}__arrow`)) return;\r\n\r\n    if (e.target.closest(`.${block}__arrow--right`)) {\r\n      currentSlide++;\r\n\r\n      if (currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n      }\r\n\r\n      showSlides(slides, countSlide, currentSlide);\r\n    } else if (e.target.closest(`.${block}__arrow--left`)) {\r\n      currentSlide--;\r\n\r\n      if (currentSlide < 0) {\r\n        currentSlide = slides.length - 1;\r\n      }\r\n\r\n      showSlides(slides, countSlide, currentSlide);\r\n    }\r\n\r\n  })\r\n\r\n  showSlides(slides, countSlide, currentSlide);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n\n  const timerDays = document.querySelector('.count_1>span');\n  const timerHours = document.querySelector('.count_2>span');\n  const timerMinutes = document.querySelector('.count_3>span');\n  const timerSeconds = document.querySelector('.count_4>span');\n\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\n    let minutes = Math.floor((timeRemaining / 60) % 60)\n    let seconds = Math.floor(timeRemaining % 60)\n\n    return { timeRemaining, days, hours, minutes, seconds }\n  }\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining();\n\n    if (getTime.timeRemaining < 0) {\n      clearInterval(idInterval)\n\n      getTime.hours = 0;\n      getTime.minutes = 0;\n      getTime.seconds = 0;\n    }\n\n    timerDays.textContent = getTime.days.toString().length === 1 ? '0' + getTime.days : getTime.days;\n    timerHours.textContent = getTime.hours.toString().length === 1 ? '0' + getTime.hours : getTime.hours;\n    timerMinutes.textContent = getTime.minutes.toString().length === 1 ? '0' + getTime.minutes : getTime.minutes;\n    timerSeconds.textContent = getTime.seconds.toString().length === 1 ? '0' + getTime.seconds : getTime.seconds;\n  }\n\n  let idInterval = setInterval(updateClock, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;