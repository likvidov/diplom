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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validator */ \"./modules/validator.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst clientWidth = document.documentElement.clientWidth;\r\nconst windowY = window.screenY;\r\nconst someElem = document.body.classList.contains('balkony') ? [\r\n  {\r\n    type: 'input',\r\n    id: 'calc-total'\r\n  }\r\n] : '';\r\nconst smoothScroll = document.querySelector('.smooth-scroll');\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nclientWidth > 575 ? (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('benefits', '.benefits__item', 0, 3) : (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('benefits', '.benefits__item', 0, 1);\r\nclientWidth > 575 ? (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('services', '.col-md-12', 0, 2) : (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('services', '.col-md-12', 0, 2);\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('31 jule 2023');\r\n(0,_modules_validator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n  formId: 'order1',\r\n  someElem: someElem\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n  formId: 'order2',\r\n  someElem: someElem\r\n});\r\n\r\nwindow.addEventListener('scroll', () => {\r\n  window.scrollY > 660 ? smoothScroll.classList.remove('hide') : smoothScroll.classList.add('hide');\r\n})\r\n\r\nsmoothScroll.addEventListener('click', () => {\r\n  window.scrollTo({\r\n    top: 0,\r\n    left: 0,\r\n    behavior: 'smooth'\r\n  })\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const overlay = document.querySelector('.overlay');\r\n  const openModalBtn = document.querySelectorAll('div[data-modal]');\r\n  const modalCloseBtn = document.querySelectorAll('span[title=\"Close\"]');\r\n  const sertificateDocuments = document.querySelectorAll('.sertificate-document');\r\n\r\n  const showModal = (e) => {\r\n    e.preventDefault();\r\n\r\n    const modalId = e.target.closest('div').getAttribute('data-modal');\r\n    const modalElem = document.querySelector(`.${modalId}`);\r\n\r\n    modalElem.classList.add('show');\r\n    overlay.classList.add('show');\r\n    overlay.setAttribute('data-modal', modalId)\r\n  }\r\n\r\n  const closeModal = (e) => {\r\n    let modalElem = e.target.closest('.show');\r\n\r\n    if (e.target.hasAttribute('data-modal')) {\r\n      const modalId = e.target.getAttribute('data-modal');\r\n      modalElem = document.querySelector(`.${modalId}`);\r\n      overlay.removeAttribute('data-modal');\r\n      modalElem.classList.remove('show');\r\n    }\r\n\r\n    if (e.target.hasAttribute('data-img')) {\r\n      overlay.removeAttribute('data-img');\r\n      overlay.textContent = '';\r\n    }\r\n\r\n    overlay.classList.remove('show');\r\n  }\r\n\r\n  openModalBtn.forEach(btn => {\r\n    btn.addEventListener('click', showModal)\r\n  });\r\n  modalCloseBtn.forEach(btn => {\r\n    btn.addEventListener('click', closeModal)\r\n  });\r\n  overlay.addEventListener('click', closeModal);\r\n  sertificateDocuments.forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n\r\n      const url = e.target.parentNode.getAttribute('href');\r\n      const img = document.createElement('img')\r\n      img.setAttribute('src', url);\r\n      img.alt = 'document';\r\n      img.classList.add('img-thumbnail')\r\n\r\n      overlay.append(img)\r\n      overlay.classList.add('show');\r\n      overlay.setAttribute('data-img', true);\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement('div');\r\n  const loadText = 'Загрузка!';\r\n  const errorText = 'Ошибка...';\r\n  const successText = 'Спасибо! Наш менеджер с вами свяжется!';\r\n\r\n  const validate = (list) => {\r\n    let success = true;\r\n\r\n    list.forEach(input => {\r\n      if (input.value === \"\") {\r\n        success = false;\r\n      }\r\n\r\n      if (input.classList.contains('error')) {\r\n        success = false;\r\n      }\r\n    })\r\n\r\n    return success;\r\n  }\r\n\r\n  const sendData = (data) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\"\r\n      }\r\n    }).then(res => res.json())\r\n  }\r\n\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll('input');\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    statusBlock.innerHTML = loadText;\r\n    form.append(statusBlock);\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    })\r\n\r\n    if(someElem) {\r\n      someElem.forEach(elem => {\r\n        const element = document.getElementById(elem.id);\r\n  \r\n        if (elem.type === 'block') {\r\n          formBody[elem.id] = element.textContent;\r\n        } else if (elem.type === 'input') {\r\n          formBody[elem.id] = element.value;\r\n        }\r\n      })\r\n    }\r\n\r\n    if (validate(formElements)) {\r\n      sendData(formBody).then(data => {\r\n        statusBlock.textContent = successText;\r\n\r\n        formElements.forEach(input => {\r\n          input.value = '';\r\n        })\r\n      })\r\n        .catch(error => {\r\n          statusBlock.textContent = errorText;\r\n        })\r\n    } else {\r\n      statusBlock.textContent = errorText;\r\n    }\r\n  }\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error('Верните форму на место, пожалуйста)')\r\n    }\r\n\r\n    form.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n\r\n      submitForm();\r\n\r\n      setTimeout(() => form.removeChild(statusBlock), 2000)\r\n    })\r\n  } catch (error) {\r\n    throw new Error(error.message)\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (block, items, currentSlide = 0, countSlide = 3) => {\r\n  const sliderBlock = document.getElementById(block);\r\n  const slides = sliderBlock.querySelectorAll(items);\r\n\r\n  const showSlide = (elems, current) => {\r\n    elems.forEach((elem, i) => {\r\n      if (i === current) {\r\n        elem.classList.remove('hide');\r\n      }\r\n    });\r\n  }\r\n\r\n  const showSlides = (elems, countSlide, currentSlide) => {\r\n    let current = currentSlide;\r\n\r\n    elems.forEach(elem => {\r\n      elem.classList.add('hide');\r\n    })\r\n\r\n    for (let i = 0; i < countSlide; i++) {\r\n      showSlide(elems, current);\r\n      current++;\r\n      if (current == elems.length) current = 0;\r\n    }\r\n  }\r\n\r\n  sliderBlock.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.closest(`.${block}__arrow`)) return;\r\n\r\n    if (e.target.closest(`.${block}__arrow--right`)) {\r\n      currentSlide++;\r\n\r\n      if (currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n      }\r\n\r\n      showSlides(slides, countSlide, currentSlide);\r\n    } else if (e.target.closest(`.${block}__arrow--left`)) {\r\n      currentSlide--;\r\n\r\n      if (currentSlide < 0) {\r\n        currentSlide = slides.length - 1;\r\n      }\r\n\r\n      showSlides(slides, countSlide, currentSlide);\r\n    }\r\n\r\n  })\r\n\r\n  showSlides(slides, countSlide, currentSlide);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n  const timerDays = document.querySelector('.count_1>span');\r\n  const timerHours = document.querySelector('.count_2>span');\r\n  const timerMinutes = document.querySelector('.count_3>span');\r\n  const timerSeconds = document.querySelector('.count_4>span');\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    let seconds = Math.floor(timeRemaining % 60)\r\n\r\n    return { timeRemaining, days, hours, minutes, seconds }\r\n  }\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    if (getTime.timeRemaining < 0) {\r\n      clearInterval(idInterval)\r\n\r\n      getTime.hours = 0;\r\n      getTime.minutes = 0;\r\n      getTime.seconds = 0;\r\n    }\r\n\r\n    timerDays.textContent = getTime.days.toString().length === 1 ? '0' + getTime.days : getTime.days;\r\n    timerHours.textContent = getTime.hours.toString().length === 1 ? '0' + getTime.hours : getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes.toString().length === 1 ? '0' + getTime.minutes : getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds.toString().length === 1 ? '0' + getTime.seconds : getTime.seconds;\r\n  }\r\n\r\n  let idInterval = setInterval(updateClock, 1000);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validator.js":
/*!******************************!*\
  !*** ./modules/validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validator = () => {\r\n  const nameInputs = document.querySelectorAll('input[name=fio]');\r\n  const phoneInputs = document.querySelectorAll('input[name=phone]');\r\n\r\n  nameInputs.forEach(item => {\r\n    item.addEventListener('input', (e) => {\r\n      item.value = item.value.replace(/[^а-яa-z\\s]+/gim, \"\");\r\n\r\n      if (item.value.length < 2) {\r\n        item.classList.add('error');\r\n      } else {\r\n        item.classList.remove('error');\r\n      }\r\n\r\n      if (item.value == '') {\r\n        item.classList.remove('error');\r\n      }\r\n    })\r\n  })\r\n\r\n  phoneInputs.forEach(item => {\r\n    item.addEventListener('input', () => {\r\n      item.value = item.value.replace(/[^\\d\\(\\)\\-\\+]+/gi, \"\");\r\n\r\n      if (item.value.length >= 11 && item.value.length <= 16) {\r\n        item.classList.remove('error');\r\n      } else {\r\n        item.classList.add('error');\r\n      }\r\n\r\n      if (item.value == '') {\r\n        item.classList.remove('error');\r\n      }\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n//# sourceURL=webpack:///./modules/validator.js?");

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