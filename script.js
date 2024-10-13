/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_my_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/my.js */ \"./src/js/my.js\");\n/* harmony import */ var _js_my_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_my_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _js_callbak_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/callbak.js */ \"./src/js/callbak.js\");\n/* harmony import */ var _js_callbak_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_callbak_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/dropdown.js */ \"./src/js/dropdown.js\");\n/* harmony import */ var _js_dropdown_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_dropdown_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://cps_service/./src/index.js?");

/***/ }),

/***/ "./src/js/callbak.js":
/*!***************************!*\
  !*** ./src/js/callbak.js ***!
  \***************************/
/***/ (() => {

eval("var feedbackBtn = document.querySelector(\".button-modal-popup\");\nvar html = document.querySelector(\"html\");\nvar windowWrapper = document.querySelector(\".modal-window\");\nvar closeBtnWindow = document.querySelector(\".btn-window\");\nvar windowsTitle = document.querySelector(\".window__title\");\nvar callForm = document.querySelectorAll(\".call-forms\");\nvar feedbackForms = document.querySelectorAll(\".feedback-form\");\nvar callBtn = document.querySelectorAll(\".prices__btn\");\nvar battonCall = document.querySelector(\".call_call\");\nbattonCall.addEventListener(\"click\", function () {\n  html.style.overflowY = \"hidden\";\n  windowWrapper.style = \"display:flex; top:0;\";\n  windowsTitle.innerHTML = \"Обратная связь\";\n  callForm.forEach(function (elem) {\n    elem.style.display = \"none\";\n  });\n  feedbackForms.forEach(function (elem) {\n    elem.style.display = \"block\";\n  });\n});\nfeedbackBtn.addEventListener(\"click\", function () {\n  html.style.overflowY = \"hidden\";\n  windowWrapper.style = \"display:flex; top:0;\";\n  windowsTitle.innerHTML = \"Обратная связь\";\n  callForm.forEach(function (elem) {\n    elem.style.display = \"none\";\n  });\n  feedbackForms.forEach(function (elem) {\n    elem.style.display = \"block\";\n  });\n});\ncallBtn.forEach(function (btns) {\n  btns.addEventListener(\"click\", function () {\n    html.style.overflowY = \"hidden\";\n    windowWrapper.style = \"display:flex; top:0;\";\n    windowsTitle.innerHTML = \"Заказать звонок\";\n    feedbackForms.forEach(function (elem) {\n      elem.style.display = \"none\";\n    });\n    callForm.forEach(function (elem) {\n      elem.style.display = \"block\";\n    });\n  });\n});\ncloseBtnWindow.addEventListener(\"click\", function () {\n  windowWrapper.style.display = \"none\";\n  html.style = \"none\";\n});\n\n//# sourceURL=webpack://cps_service/./src/js/callbak.js?");

/***/ }),

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/***/ (() => {

eval("var html = document.querySelector(\"html\");\nvar popupWrapper = document.querySelector(\".left_menu\");\nvar shadowWrapper = document.querySelector(\".wrapper-shadow-popup\");\nvar btnAside = document.querySelector(\".header_button_left\");\nvar headerButtonPopUp = document.querySelector(\".burger\");\nvar backgraundLeftSide = document.querySelector(\".wrapper-shadow-popup\");\nbtnAside.addEventListener(\"click\", function () {\n  html.style = \"\";\n  popupWrapper.style = \"display: none;\";\n  shadowWrapper.style = \"\";\n});\nbackgraundLeftSide.addEventListener(\"click\", function () {\n  html.style = \"\";\n  popupWrapper.style = \"display: none;\";\n  shadowWrapper.style = \"\";\n});\nheaderButtonPopUp.addEventListener(\"click\", function () {\n  html.style.overflowY = \"hidden\";\n  popupWrapper.style = \"display: block;\";\n  shadowWrapper.style = \"display: block; top:0; left:0; width: 100%; background: rgba(255, 255, 255, 0.9); z-index:1; height: 100%; position: absolute;\";\n});\n\n//# sourceURL=webpack://cps_service/./src/js/dropdown.js?");

/***/ }),

/***/ "./src/js/my.js":
/*!**********************!*\
  !*** ./src/js/my.js ***!
  \**********************/
/***/ (() => {

eval("var link = document.querySelector('link');\nfunction reloadWindow() {\n  window.addEventListener('resize', function () {\n    \"use strict\";\n\n    window.location.reload();\n  });\n}\nfunction updateWindow() {\n  if (window.innerWidth < 768) {\n    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';\n    reloadWindow();\n  } else {\n    reloadWindow();\n    link.href = '#';\n  }\n}\nupdateWindow();\nvar swiperCustom = document.querySelector('.swiper');\nvar swiper = new Swiper(swiperCustom, {\n  slidesPerView: 'auto',\n  spaceBetween: 0,\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true\n  }\n});\nfunction test() {\n  if (innerWidth >= 768) {\n    swiper.disable();\n  }\n}\ntest();\ndocument.querySelector('.reveal').addEventListener('click', function () {\n  var container = document.querySelector('.swiper-wrapper');\n  var button = this;\n  button.classList.toggle('active');\n  container.classList.toggle('active_click');\n  button.textContent !== 'Показать все' ? button.textContent = 'Показать все' : button.textContent = 'Скрыть';\n  console.log(button);\n});\n\n//swiper 2 \n\nfunction reloadWindow2() {\n  window.addEventListener('resize', function () {\n    \"use strict\";\n\n    window.location.reload();\n  });\n}\nfunction updateWindow2() {\n  if (window.innerWidth < 768) {\n    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';\n    reloadWindow2();\n  } else {\n    reloadWindow();\n    link.href = '#';\n  }\n}\nupdateWindow2();\nvar swiperCustom2 = document.querySelector('.swiper2');\nvar swiper2 = new Swiper(swiperCustom2, {\n  slidesPerView: 'auto',\n  spaceBetween: 0,\n  pagination: {\n    el: \".swiper-pagination2\",\n    clickable: true\n  }\n});\nfunction test2() {\n  if (innerWidth >= 768) {\n    swiper2.disable();\n  }\n}\ntest2();\n\n//\n\ndocument.querySelector('.reveal_technique').addEventListener('click', function () {\n  var container = document.querySelector('.technique_wrapper');\n  var button = this;\n  button.classList.toggle('active');\n  container.classList.toggle('active_click');\n  button.textContent !== 'Показать все' ? button.textContent = 'Показать все' : button.textContent = 'Скрыть';\n  console.log(button);\n});\n\n// swiper 3\nfunction reloadWindow3() {\n  window.addEventListener('resize', function () {\n    \"use strict\";\n\n    window.location.reload();\n  });\n}\nfunction updateWindow3() {\n  if (window.innerWidth < 768) {\n    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';\n    reloadWindow2();\n  } else {\n    reloadWindow();\n    link.href = '#';\n  }\n}\nupdateWindow3();\nvar swiperCustom3 = document.querySelector('.swiper3');\nvar swiper3 = new Swiper(swiperCustom3, {\n  slidesPerView: 'auto',\n  spaceBetween: 0,\n  pagination: {\n    el: \".swiper-pagination3\",\n    clickable: true\n  }\n});\nfunction test3() {\n  if (innerWidth >= 768) {\n    swiper3.disable();\n  }\n}\ntest3();\n\n// services  \nvar textSecont = document.querySelector(\".second-text\");\nvar textThree = document.querySelector(\".three-text\");\ndocument.querySelector('.read-more').addEventListener('click', function () {\n  var button = this;\n  if (innerWidth < 768) {\n    button.textContent !== 'Читать далее' ? (button.textContent = 'Читать далее', textThree.style = \"display:none\", textSecont.style = \"display:none\") : (button.textContent = 'Скрыть', textThree.style = \"display:block\", textSecont.style = \"display:block\");\n  } else if (innerWidth < 1440) {\n    button.textContent !== 'Читать далее' ? (button.textContent = 'Читать далее', textThree.style = \"display:none\") : (button.textContent = 'Скрыть', textThree.style = \"display:block\");\n  } else if (innerWidth > 1440) {}\n  // const container = document.querySelector('.text_conteiner');\n  button.classList.toggle('active');\n  // container.classList.toggle('active_click');\n});\n\n//# sourceURL=webpack://cps_service/./src/js/my.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/TTLakes-Regular.eot */ \"./src/font/TTLakes-Regular.eot\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/TTLakes-Regular.ttf */ \"./src/font/TTLakes-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../font/TTLakes-Regular.woff */ \"./src/font/TTLakes-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../font/TTLakes-Bold.eot */ \"./src/font/TTLakes-Bold.eot\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../font/TTLakes-Bold.ttf */ \"./src/font/TTLakes-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../font/TTLakes-Bold.woff */ \"./src/font/TTLakes-Bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../font/TTLakes-Medium.ttf */ \"./src/font/TTLakes-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../font/TTLakes-Medium.woff */ \"./src/font/TTLakes-Medium.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../image/expand.svg */ \"./src/image/expand.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../image/dropdown.svg */ \"./src/image/dropdown.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../image/Line.svg */ \"./src/image/Line.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n@font-face {\n  font-family: \"TTLakes\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"eot\"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"ttf\"), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(\"woff\");\n  font-weight: 300;\n}\n@font-face {\n  font-family: \"TTLakes\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format(\"eot\"), url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format(\"ttf\"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format(\"woff\");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"TTLakes\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format(\"eot\"), url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format(\"ttf\"), url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format(\"woff\");\n  font-weight: 400;\n}\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"TTLakes\";\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  list-style-type: none;\n}\n\n.container {\n  position: relative;\n  max-width: 1440px;\n  margin: auto;\n  background-image: linear-gradient(270deg, #f8f8f8 0%, #ffffff 98.61%);\n}\n\n.main {\n  display: block;\n  font-weight: 300;\n}\n@media (min-width: 1440px) {\n  .main {\n    margin-left: 320px;\n  }\n}\n\nh1 {\n  font-size: 28px;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 16px;\n  font-weight: 300;\n  color: #7e7e82;\n}\n\n.button {\n  display: flex;\n  background-color: #ff3e79;\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  border: 0px;\n  justify-content: center;\n  align-items: center;\n}\n\n.headr_button {\n  display: flex;\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 1px solid #eaeaea;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  overflow: visible;\n}\n\n.equipment_repair {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  border-radius: 6px;\n  border: 1px solid #eaeaea;\n  flex-direction: row-reverse;\n}\n\n.repair {\n  color: #1B1C21;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.go {\n  display: block;\n  padding-top: 88px;\n}\n\n.menu__item {\n  display: none;\n}\n\n.header {\n  padding: 19px 16px 19px 16px;\n}\n\n.menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-content: center;\n}\n.menu_item:nth-child(2) {\n  position: relative;\n}\n.menu_item:nth-child(2)::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 32px;\n  background-color: #eaeaea;\n  top: 11px;\n  right: -25px;\n  display: block;\n  border-radius: 10px;\n}\n\n.tablet {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .header {\n    padding-left: 24px;\n  }\n  .menu {\n    gap: 16px;\n    justify-content: flex-start;\n  }\n  .menu_item:nth-child(2) {\n    margin-left: 20px;\n  }\n  .menu_item:nth-child(2)::after {\n    top: 13px;\n    right: 116px;\n  }\n  .menu_item:nth-child(3) {\n    margin-left: calc(100% - 480px);\n  }\n  .menu_item:nth-child(5) {\n    margin-right: 20px;\n    position: relative;\n  }\n  .menu_item:nth-child(5)::after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: 2px;\n    height: 32px;\n    background-color: #eaeaea;\n    top: 3px;\n    right: -20px;\n    border-radius: 10px;\n  }\n  .tablet {\n    display: flex;\n    overflow: hidden;\n  }\n}\n@media (min-width: 1440px) {\n  .header {\n    display: none;\n  }\n  .menu__item {\n    display: flex;\n  }\n}\n.services {\n  padding-left: 16px;\n}\n\n.navig {\n  display: flex;\n  justify-content: space-between;\n  white-space: nowrap;\n  overflow-x: scroll;\n  padding: 0px 16px 24px 0px;\n}\n.navig::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.navig__link {\n  color: #7e7e82;\n  padding: 8px 16px 8px 16px;\n  gap: 1px;\n  position: relative;\n  font-weight: lighter;\n  font-size: 16px;\n}\n.navig__link:focus {\n  background-color: white;\n  border: 2px solid #b8ffec;\n  padding: 6px 14px 6px 14px;\n  border-radius: 6px;\n}\n\n.navig__button {\n  background-color: transparent;\n  border: none;\n  padding: 8px 0px 8px 0px;\n  border-radius: 6px;\n}\n\n.read-more {\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background-color: transparent;\n  font-size: 16px;\n  font-weight: 400;\n  border: none;\n  position: relative;\n  left: 30px;\n}\n.read-more::before {\n  transition: transform 0.3s ease-out;\n  position: absolute;\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_8___});\n  left: -30px;\n  top: -2px;\n}\n\n.read-more.active::before {\n  transform: rotate(180deg);\n  margin-top: -5px;\n}\n\n.wh-768,\n.wh-1120 {\n  display: none;\n}\n\n.main-content {\n  width: 100%;\n}\n.main-content__text {\n  font-size: 14px;\n  letter-spacing: 0.2px;\n}\n.main-content__text:first-child {\n  margin-bottom: 25px;\n}\n\n.first-screen__img {\n  width: 100%;\n  height: 100%;\n}\n\n.prices .swiper-pagination3 {\n  position: absolute;\n  margin-bottom: 318px !important;\n}\n\n@media (min-width: 768px) {\n  .services {\n    padding-left: 24px;\n  }\n  .tablet-2 {\n    display: flex;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n  .main-content {\n    width: 50%;\n  }\n  .text_content {\n    display: flex;\n    gap: 48px;\n  }\n  .text_content .imadge_png {\n    width: 50%;\n    padding-right: 20px;\n  }\n  .wh-768 {\n    display: block;\n  }\n}\n@media screen and (min-width: 1120px) {\n  .wh-1120 {\n    display: block;\n  }\n}\n@media (min-width: 1440px) {\n  .services {\n    padding-left: 34px;\n  }\n  .navig {\n    flex-wrap: wrap;\n  }\n  .main-title {\n    display: flex;\n    justify-content: space-between;\n    padding: 42px 30px 0px 0px;\n  }\n  .desc__top {\n    font-size: 16px;\n    font-weight: normal;\n    border-color: transparent;\n    padding: 8px 8px 8px 8px;\n  }\n  .button_top {\n    background-color: transparent;\n  }\n  .tablet-2 {\n    display: block;\n  }\n}\n.brand {\n  padding-left: 16px;\n  background-image: linear-gradient(270deg, #f8f8f8 0%, #ffffff 98.61%);\n}\n\n.title_header {\n  background-color: #ffffff;\n  color: #7e7e82;\n  border-top: 1px solid #d9fff5;\n  margin-top: 24px;\n  padding: 16px 0px 16px 0px;\n}\n\n.title {\n  background-color: #ffffff;\n}\n\n.header_swapper {\n  padding: 16px 0px 16px 0px;\n  gap: 16px;\n}\n\n.headr_button {\n  display: flex;\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 1px solid #eaeaea;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  margin-right: 16px;\n  width: 240px;\n  height: 72px;\n}\n\n.swiper-pagination {\n  --swiper-theme-color: #b5b6bc;\n  margin-bottom: -13px;\n}\n\n.menu_tablet {\n  display: none;\n}\n\n.reveal {\n  display: none;\n  border-color: transparent;\n  background-color: transparent;\n  font-size: 16px;\n  color: #1b1c21;\n  font-weight: 500;\n  margin-left: 57px;\n}\n.reveal::before {\n  transition: transform 0.3s ease-out;\n  position: absolute;\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_8___});\n  margin-left: -30px;\n}\n\n.reveal.active::before {\n  transform: rotate(180deg);\n  margin-top: -5px;\n}\n\n@media (min-width: 768px) {\n  .brand {\n    padding-left: 24px;\n  }\n  .swiper-wrapper {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    max-height: 176px;\n    overflow: hidden;\n    transition: max-height 0.5s;\n  }\n  .headr_button {\n    width: 224px;\n    margin-right: 24px;\n    margin-top: 16px;\n  }\n  .reveal {\n    display: block;\n  }\n  .active_click {\n    max-height: 356px;\n  }\n}\n@media (min-width: 1440px) {\n  .brand {\n    padding-left: 32px;\n  }\n  .headr_button {\n    width: 240px;\n    margin-right: 32px;\n  }\n}\n.technique {\n  padding-top: 24px;\n  padding-left: 16px;\n}\n\n.technique_title {\n  background-color: #ffffff;\n  padding: 16px 0px 16px 0px;\n  border-top: 1px solid #d9fff5;\n  margin-top: 24px;\n}\n\n.technique_wrapper {\n  padding-top: 24px;\n  padding-bottom: 16px;\n}\n\n.equipment_repair {\n  background-color: #ffffff;\n  width: 240px;\n  height: 160px;\n  margin-right: 16px;\n}\n\n.reveal_technique {\n  display: none;\n  border-color: transparent;\n  background-color: transparent;\n  font-size: 16px;\n  color: #1b1c21;\n  font-weight: 500;\n  padding: 24px 0px 32px 32px;\n}\n.reveal_technique::before {\n  transition: transform 0.3s ease-out;\n  position: absolute;\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_8___});\n  margin-left: -30px;\n}\n\n.reveal_technique.active::before {\n  transform: rotate(180deg);\n  margin-top: -5px;\n}\n\n@media (min-width: 768px) {\n  .technique {\n    padding-left: 24px;\n    padding-top: 0px;\n  }\n  .technique_title {\n    margin-top: 32px;\n  }\n  .reveal_technique {\n    display: flex;\n  }\n  .equipment_repair {\n    width: 224px;\n    margin-right: 24px;\n    margin-top: 16px;\n  }\n}\n@media (min-width: 1440px) {\n  .technique {\n    padding-left: 32px;\n  }\n  .technique_title {\n    margin-top: 50px;\n  }\n  .equipment_repair {\n    width: 240px;\n    margin-right: 32px;\n  }\n}\n.prices {\n  margin-bottom: 16px;\n  border-top: 1px solid #D9FFF5;\n}\n.prices .swiper-pagination3 {\n  position: absolute;\n  margin-bottom: -693px;\n}\n@media screen and (min-width: 426px) {\n  .prices {\n    margin-bottom: 24px;\n  }\n  .prices__table {\n    display: table;\n    width: calc(100% - 60px);\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 14px;\n    border-collapse: collapse;\n  }\n  .prices__table thead {\n    font-weight: 700;\n    color: #7e7e82;\n    text-align: left;\n  }\n  .prices__table tbody {\n    background-color: #fff;\n    border-left: 16px solid #fff;\n    border-right: 16px solid #fff;\n    border-radius: 6px;\n  }\n  .prices__table tbody .prices__t-row {\n    border-bottom: 1px solid #eaeaea;\n  }\n  .prices__table tbody .prices__t-row:last-child {\n    border-bottom: none;\n  }\n}\n@media screen and (min-width: 426px) and (min-width: 426px) {\n  .prices__table tbody {\n    display: table-row-group;\n  }\n}\n@media screen and (min-width: 426px) {\n  .prices__t-cell {\n    padding-top: 23px;\n    padding-left: 1px;\n    padding-bottom: 23px;\n    font-size: 14px;\n    font-weight: 400;\n  }\n  .prices__t-cell:nth-child(4) {\n    padding-right: 3px;\n    text-align: right;\n  }\n  .prices__btn {\n    margin-left: auto;\n  }\n}\n@media screen and (max-width: 425px) {\n  .prices__table {\n    display: block;\n    padding-left: 8px;\n    padding-right: 8px;\n    margin-bottom: 16px;\n    background-color: transparent;\n    overflow: hidden;\n  }\n  .prices__table tbody {\n    display: flex;\n  }\n  .prices__table thead {\n    display: none;\n  }\n  .prices__t-row {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    flex-shrink: 0;\n    width: 260px;\n    min-height: 200px;\n    padding: 16px;\n    margin-right: 16px;\n    background-color: #fff;\n    border-radius: 6px;\n  }\n  .prices__t-cell {\n    display: block;\n    font-size: 14px;\n    line-height: 18px;\n    letter-spacing: 0.2px;\n  }\n  .prices__t-cell:nth-child(1)::before {\n    content: \"Ремонтные услуги\";\n    display: block;\n    margin-bottom: 4px;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 16px;\n    color: #7e7e82;\n  }\n  .prices__t-cell:nth-child(2)::before {\n    content: \"Цена\";\n    display: block;\n    margin-bottom: 4px;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 16px;\n    color: #7e7e82;\n  }\n  .prices__t-cell:nth-child(3)::before {\n    content: \"Срок\";\n    display: block;\n    margin-bottom: 4px;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 16px;\n    color: #7e7e82;\n  }\n  .prices__t-cell:last-child {\n    position: absolute;\n    right: 16px;\n    bottom: 16px;\n  }\n  .prices__btn {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n  }\n}\n.prices__title {\n  padding: 16px;\n  margin-top: 0;\n  margin-bottom: 16px;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  text-transform: uppercase;\n  letter-spacing: -0.2px;\n  color: #7e7e82;\n}\n@media screen and (min-width: 321px) {\n  .prices__title {\n    padding: 16px 24px;\n    margin-bottom: 8px;\n  }\n}\n\n.prices__btn {\n  display: flex;\n  height: 32px;\n  width: 119px;\n  color: #FFFFFF;\n  background-color: #FF3E79;\n  border-radius: 16px;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  flex-direction: row-reverse;\n}\n.prices__btn::before {\n  display: flex;\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_9___});\n  margin-left: 17px;\n}\n\n.info {\n  padding-left: 16px;\n}\n\n.offer_button {\n  display: flex;\n  background-color: transparent;\n  border-color: transparent;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n\n.offer__link {\n  color: #1B1C21;\n  font-size: 16px;\n  max-width: 220px;\n  text-align: left;\n  padding-top: 16px;\n}\n.offer__link::after {\n  position: absolute;\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_10___});\n  margin-left: 4px;\n  margin-top: 2px;\n}\n\n.info_text {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  .info {\n    padding-left: 24PX;\n    max-width: 422px;\n  }\n}\n@media (min-width: 1440px) {\n  .info {\n    padding-left: 34px;\n  }\n}\n.footer {\n  padding-top: 51px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n.footer .text_footer {\n  font-size: 14px;\n  font-weight: 400;\n  color: #7E7E82;\n}\n\n@media (min-width: 768px) {\n  .footer {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    box-sizing: border-box;\n    flex-direction: row;\n  }\n  .text_footer {\n    max-width: 220px;\n    text-align: left;\n  }\n  .text_footer:last-child {\n    text-align: right;\n  }\n}\n@media (min-width: 1440px) {\n  .footer {\n    padding-left: 34px;\n  }\n  .text_footer {\n    max-width: 330px;\n  }\n}\n.left_menu {\n  position: fixed;\n  box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2);\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  width: 320px;\n  z-index: 1000;\n  left: auto;\n  height: 100vh;\n  display: none;\n  overflow-y: scroll;\n}\n\n.header_left {\n  padding-bottom: 28px;\n}\n\n.menu_header_left {\n  padding: 19px 24px 0px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header_button_left {\n  align-content: center;\n  left: 81px;\n}\n\n.logo {\n  align-content: center;\n  position: absolute;\n  top: 10px;\n  left: 81px;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.navig_left {\n  padding-left: 24px;\n}\n\n.navig_link_left {\n  display: flex;\n  background-color: transparent;\n  border-color: transparent;\n  flex-direction: column;\n  margin-bottom: 32px;\n  justify-content: start;\n  position: relative;\n  color: #1b1c21;\n  font-size: 16px;\n  font-weight: 400;\n}\n.navig_link_left:focus::before {\n  content: \"\";\n  height: 40px;\n  width: 4px;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  background-color: #41f6d7;\n  top: -10px;\n  left: -24px;\n  position: absolute;\n}\n.navig_link_left:focus {\n  color: #7e7e82;\n}\n\n.menu_main_left {\n  display: flex;\n  padding-left: 24px;\n  align-items: start;\n  gap: 16px;\n}\n\n.footer_info {\n  display: block;\n  padding-top: 16px;\n  padding-left: 24px;\n}\n\n.connection {\n  color: #1b1c21;\n}\n\n.phone {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.a_language {\n  color: #1b1c21;\n}\n.a_language:focus {\n  color: #7e7e82;\n}\n\n@media (min-width: 1440px) {\n  .left_menu {\n    display: block;\n    box-shadow: none;\n  }\n  .header_left {\n    padding-bottom: 43px;\n  }\n  .logo {\n    left: 24px;\n  }\n  .menu_main_left {\n    padding-top: 268px;\n  }\n  .desc__top_left {\n    display: none;\n  }\n  .footer_info {\n    padding-bottom: 24px;\n  }\n}\n.modal-window {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  z-index: 5;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.window-wrapper {\n  background: #fff;\n  display: grid;\n  border-left: solid 2px #d9fff5;\n  grid-template-columns: minmax(320px, 440px);\n  box-shadow: 0px -10px 25px #a0a0a0;\n}\n\n.window {\n  display: flex;\n  flex-direction: column;\n}\n.window__title {\n  color: #1b1c21;\n  font-size: 24px;\n  font-family: \"TTLakes bold\";\n  font-weight: 700;\n  line-height: 32px;\n  word-wrap: break-word;\n  margin: 40px 0 8px 30px;\n}\n.window__title::before {\n  display: block;\n  content: \" \";\n  position: absolute;\n  height: 40px;\n  width: 3px;\n  top: 32px;\n  right: 440px;\n  background: #41f6d7;\n  border-radius: 5px;\n}\n.window input {\n  width: 376px;\n  height: 48px;\n  margin: 16px auto;\n  background: white;\n  border-radius: 8px;\n  border: 1px #eaeaea solid;\n  padding-left: 12px;\n  color: #b5b6bc;\n  font-size: 16px;\n  font-family: \"TTLakes medium\";\n  font-weight: 500;\n  line-height: 24px;\n  word-wrap: break-word;\n}\n.window__text {\n  margin: 0 32px 16px 32px;\n  color: #7e7e82;\n  font-family: \"TTLakes medium\";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 16px;\n  word-wrap: break-word;\n}\n.window__text_pink {\n  color: #ff3e79;\n}\n\n.btn-window {\n  position: absolute;\n  right: 490px;\n  top: 32px;\n}\n\n.window-btn-wrapper {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.window-btn {\n  margin-right: 16px;\n  width: 136px;\n}\n\n.modal-window {\n  display: none;\n  z-index: 1000;\n}\n\n.window-btn {\n  display: flex;\n  height: 32px;\n  margin-right: 32px;\n  width: 136px;\n  background: #FF3E79;\n  border-radius: 16px;\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  line-height: 24px;\n  word-wrap: break-word;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  justify-content: space-around;\n}\n\n@media screen and (max-width: 540px) {\n  .btn-window {\n    position: inherit;\n    margin-top: 24px;\n    margin-left: 16px;\n  }\n  .window__title::before {\n    top: 100px;\n    right: 440px;\n  }\n}\n@media screen and (max-width: 400px) {\n  .window input {\n    width: auto;\n    margin: 16px 16px;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cps_service/./src/style/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://cps_service/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://cps_service/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://cps_service/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Imports\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./image/icon-menu.svg */ \"./src/image/icon-menu.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./image/Group.svg */ \"./src/image/Group.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./image/icon-call.svg */ \"./src/image/icon-call.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./image/icon-chat.svg */ \"./src/image/icon-chat.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./image/Group-profile.svg */ \"./src/image/Group-profile.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./image/Group-settings.svg */ \"./src/image/Group-settings.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./image/icon-search1.svg */ \"./src/image/icon-search1.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./image/MG3223.png */ \"./src/image/MG3223.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../src/image/Bitmap.svg */ \"./src/image/Bitmap.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./image/go.svg */ \"./src/image/go.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./image/Bitmap (1).svg */ \"./src/image/Bitmap (1).svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./image/Bitmap (2).svg */ \"./src/image/Bitmap (2).svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./image/Bitmap (3).svg */ \"./src/image/Bitmap (3).svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./image/Bitmap (4).svg */ \"./src/image/Bitmap (4).svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./image/Bitmap (5).svg */ \"./src/image/Bitmap (5).svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./image/Bitmap (6).svg */ \"./src/image/Bitmap (6).svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./image/Bitmap (7).svg */ \"./src/image/Bitmap (7).svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./image/Bitmap.svg */ \"./src/image/Bitmap.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./image/icon-X.svg */ \"./src/image/icon-X.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./image/icon-search.svg */ \"./src/image/icon-search.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../src/image/Group-profile.svg */ \"./src/image/Group-profile.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../src/image/icon-chat.svg */ \"./src/image/icon-chat.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./image/dropdown.svg */ \"./src/image/dropdown.svg\"), __webpack_require__.b);\n// Module\nvar code = `<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n    <link  rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css\"/>\r\n</head>\r\n<body>\r\n<div class=\"container\">\r\n    <header class=\"header\" >\r\n        <ul class=\"menu\">\r\n            <li class=\"menu_item\">\r\n                <button class=\"burger header_button button\">\r\n                    <img src=\"${___HTML_LOADER_IMPORT_0___}\" alt=\"menu\">\r\n                </button>\r\n            </li>\r\n            <li class=\"menu_item\">\r\n                <a href=\"#\" class=\"header_button\">\r\n                    <img src=\"${___HTML_LOADER_IMPORT_1___}\" alt=\"Group\">\r\n                </a>\r\n            </li>\r\n            <li class=\"menu_item\">\r\n                <button class=\"header_button tablet  button\">\r\n                    <img class=\"call_call\" src=\"${___HTML_LOADER_IMPORT_2___}\" alt=\"call\">\r\n                </button>\r\n            </li>\r\n            <li class=\"menu_item\">\r\n                <button class=\"header_button tablet button\">\r\n                    <img src=\"${___HTML_LOADER_IMPORT_3___}\" alt=\"checkstatus\">\r\n                </button>\r\n            </li>\r\n            <li class=\"menu_item\">\r\n                <button class=\"header_button tablet button\">\r\n                    <img src=\"${___HTML_LOADER_IMPORT_4___}\" alt=\"profile\">\r\n                </button>\r\n            </li>\r\n            <li class=\"menu_item\">\r\n                <button class=\"header_button button\">\r\n                    <img src=\"${___HTML_LOADER_IMPORT_5___}\" alt=\"settings\">\r\n                </button>\r\n            </li>\r\n            <li class=\"menu_item\">\r\n                <button class=\"header_button button\">\r\n                    <img src=\"${___HTML_LOADER_IMPORT_6___}\" alt=\"search\">\r\n                </button>\r\n            </li>\r\n        </ul>\r\n    </header>\r\n    <main class=\"main\">\r\n        <section class=\"services\"> \r\n        <div class=\"main-title\">\r\n            <h1 class=\"main-title__title\"> Услуги и сервисы</h1>\r\n                <div class=\"menu__item desc_top\">\r\n                <button class=\"desc__top button_top button-modal-popup\">Оставить заявку</button>\r\n                <button class=\"desc__top button\">\r\n                    <img src=\"${___HTML_LOADER_IMPORT_5___}\" alt=\"settings\">\r\n                </button>\r\n            <button class=\"desc__top button_top\">Статус ремонта</button>\r\n            <button class=\"desc__top button\">\r\n                    <img src=\"${___HTML_LOADER_IMPORT_6___}\" alt=\"search\">\r\n            </button>\r\n            </div>\r\n        </div>\r\n        <nav class=\"navig\">\r\n            <button class=\"navig__button\"><a href=\"#\" class=\"navig__link\">Ремонтируемые устройства</a></button>\r\n            <button class=\"navig__button\"><a href=\"#\" class=\"navig__link\">Дополнительные услуги</a></button>\r\n            <button class=\"navig__button\"><a href=\"#\" class=\"navig__link\">Цены на услуги</a></button>\r\n            <button class=\"navig__button\"><a href=\"#\" class=\"navig__link\">Адреса сервисных центров</a></button>\r\n            <button class=\"navig__button\"><a href=\"#\" class=\"navig__link\">Специальные цены</a></button>\r\n            <button class=\"navig__button \"><a href=\"#\" class=\"navig__link\">Отзывы</a></button>        \r\n        </nav>\r\n        <div class=\"first-screen-description\">\r\n            <div class=\"text_content\">\r\n                <div class=\"main-content\">\r\n                    <p class=\"main-content__text\">\r\n                        Мы являемся авторизованным сервисным центром по ремонту техники\r\n                        Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с\r\n                        официальной гарантией производителя. \r\n                    </p> \r\n                    <p class=\"main-content__text second-text wh-768\"> \r\n                      Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера,  \r\n                    </p>\r\n                    <p class=\"main-content__text three-text wh-1120\">\r\n                        что подтверждает большое количество постоянных клиентов. Мы\r\n                        гордимся тем, что к нам обращаются по рекомендациям и, в свою\r\n                        очередь, советуют нас родным и близким.</p>\r\n                    <button class=\"read-more\">Читать далее</button>\r\n                </div>\r\n                <div class=\"imadge_png\">\r\n                    <img class=\"first-screen__img\" src=\"${___HTML_LOADER_IMPORT_7___}\" alt=\"imadge\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </section>\r\n        <section class=\"brand\">\r\n            <div class=\"title_header\">\r\n                <h2 class=\"title\">РЕМОНТ ТЕХНИКИ РАЗЛИЧНЫХ БРЕНДОВ</h2>\r\n            </div>\r\n            <div class=\"swiper header_swapper\">\r\n                <div class=\"swiper-wrapper\">\r\n                    <button class=\"headr_button swiper-slide\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_8___}\" alt=\"\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\"> \r\n                    </button>\r\n                    <button class=\"headr_button swiper-slide\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_10___}\" alt=\"\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\"> \r\n                    </button>\r\n                    <button class=\"headr_button swiper-slide\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_11___}\" alt=\"\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\"> \r\n                    </button>\r\n                    <button class=\"headr_button swiper-slide\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_12___}\" alt=\"\">\r\n                        <img  src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\"> \r\n                    </button>            \r\n                    <button class=\"headr_button swiper-slide\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_13___}\" alt=\"\">\r\n                        <img  src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\"> \r\n                    </button>\r\n                    <button class=\"headr_button swiper-slide\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_14___}\" alt=\"\">\r\n                        <img  src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\"> \r\n                    </button>\r\n                    <button class=\"headr_button swiper-slide\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_15___}\" alt=\"\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\">\r\n                    </button>\r\n                    <button class=\"headr_button swiper-slide\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_16___}\" alt=\"\">\r\n                        <img  src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\">\r\n                    </button>\r\n                    <button class=\"headr_button swiper-slide\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_17___}\" alt=\"\">\r\n                        <img  src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\">\r\n                    </button>\r\n                    <button class=\"headr_button swiper-slide\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_10___}\" alt=\"\">\r\n                        <img  src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\">\r\n                    </button>\r\n                    <button class=\"headr_button swiper-slide\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_11___}\" alt=\"\">\r\n                        <img  src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\">\r\n                    </button>\r\n                </div>\r\n                <div class=\"swiper-pagination\"></div>\r\n                \r\n            </div>\r\n            <button class=\"reveal\">Показать все</button> \r\n        </section>\r\n\r\n     \r\n        <section class=\"technique\" >\r\n            <div class=\"swiper midle swiper2\">\r\n                <div class=\"technique_title\">\r\n                <h2 class=\"technique_repair\">РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ</h2>\r\n            </div>\r\n                <div class=\"swiper-wrapper technique_wrapper\">  \r\n                    <button class=\"equipment_repair swiper-slide\"><img class=\"go\" src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\"><a class=\"repair\" href=\"#\">Ремонт ноутбуков </a></button>\r\n                    <button class=\"equipment_repair swiper-slide\"><img class=\"go\"src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\"><a class=\"repair\" href=\"#\">Ремонт планшетов </a></button>\r\n                    <button class=\"equipment_repair swiper-slide\"><img class=\"go\"src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\"><a class=\"repair\" href=\"#\">Ремонт ПК </a></button>\r\n                    <button class=\"equipment_repair swiper-slide\"><img class=\"go\"src=\"${___HTML_LOADER_IMPORT_9___}\" alt=\"go\"><a class=\"repair\" href=\"#\">Ремонт  мониторов </a></button>              \r\n                </div>\r\n                <div class=\"swiper-pagination swiper-pagination2\"></div>\r\n                <button class=\"reveal_technique\">Показать все</button>\r\n            </div>\r\n        </section>\r\n    \r\n        <section class=\"prices\" >\r\n            <h2 class=\"prices__title\">ЦЕНЫ НА УСЛУГИ</h2>\r\n            <table class=\"prices__table swiper swiper3\">\r\n              <thead>\r\n                <tr class=\"prices__t-row swiper-slide\">\r\n                  <th class=\"prices__t-cell\">Ремонтные услуги</th>\r\n                  <th class=\"prices__t-cell\">Цена</th>\r\n                  <th class=\"prices__t-cell\">Срок</th>\r\n                  <th></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody class=\"prices__t-body swiper-wrapper \">\r\n                <tr class=\"prices__t-row swiper-slide\">\r\n                  <td class=\"prices__t-cell\">Диагностика</td>\r\n                  <td class=\"prices__t-cell\">Бесплатно</td>\r\n                  <td class=\"prices__t-cell\">30 мин</td>\r\n                  <td class=\"prices__t-cell\">\r\n                    <a class=\"order-btn prices__btn\" href=\"#\">ЗАКАЗАТЬ</a>\r\n                  </td>\r\n                </tr>\r\n                <tr class=\"prices__t-row swiper-slide\">\r\n                  <td class=\"prices__t-cell\">Замена дисплея</td>\r\n                  <td class=\"prices__t-cell\">1 000 ₽</td>\r\n                  <td class=\"prices__t-cell\">30-120 мин</td>\r\n                  <td class=\"prices__t-cell\">\r\n                    <a class=\"order-btn prices__btn\" href=\"#\">ЗАКАЗАТЬ</a>\r\n                  </td>\r\n                </tr>\r\n                <tr class=\"prices__t-row swiper-slide\">\r\n                  <td class=\"prices__t-cell\">Замена полифонического динамика</td>\r\n                  <td class=\"prices__t-cell\">1 000 ₽</td>\r\n                  <td class=\"prices__t-cell\">30-120 мин</td>\r\n                  <td class=\"prices__t-cell\">\r\n                    <a class=\"order-btn prices__btn\" href=\"#\">ЗАКАЗАТЬ</a>\r\n                  </td>\r\n                </tr>\r\n                <tr class=\"prices__t-row swiper-slide\">\r\n                  <td class=\"prices__t-cell\">\r\n                    Тестирование с выдачей технического заключения\r\n                  </td>\r\n                  <td class=\"prices__t-cell\">1 000 ₽</td>\r\n                  <td class=\"prices__t-cell\">30-120 мин</td>\r\n                  <td class=\"prices__t-cell\">\r\n                    <a class=\"order-btn prices__btn\" href=\"#\">ЗАКАЗАТЬ</a>\r\n                  </td>\r\n                </tr>\r\n                <tr class=\"prices__t-row\">\r\n                  <td class=\"prices__t-cell\">Замена программного обеспечения</td>\r\n                  <td class=\"prices__t-cell\">1 000 ₽</td>\r\n                  <td class=\"prices__t-cell\">30-120 мин</td>\r\n                  <td class=\"prices__t-cell\">\r\n                    <a class=\"order-btn prices__btn\" href=\"#\">ЗАКАЗАТЬ</a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n             \r\n            </table>\r\n            <div class=\"swiper-pagination swiper-pagination3\"></div> \r\n        </section>\r\n      \r\n        \r\n     ${\"<\" + \"script\"} src=\"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js\">${\"<\" + \"/script\"}>\r\n     \r\n    \r\n        <section class=\"info\">\r\n            <p class=\"info_text\">Все цены указаны с учетом НДС. \r\n                Стоимость ремонта указана на единичную услугу. \r\n                Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.\r\n            </p>\r\n            <button class=\"offer_button\"><a href=\"#\" class=\"offer__link\">Получить коммерческое предложение</a></button>\r\n        </section>\r\n\r\n        <footer class=\"footer\">\r\n            <a class=\"text_footer\" href=\"#\">\r\n                © 2019 CPS <br>\r\n                Разработано командой Apesong \r\n            </a>\r\n            <br>\r\n            <a class=\"text_footer\" href=\"#\">\r\n                Политика конфиденциальности\r\n    \r\n            </a>\r\n            <br>\r\n            <a class=\"text_footer\" href=\"#\">\r\n                Информация, размещенная на данной странице, не является публичной офертой\r\n            </a>\r\n        </footer>\r\n    </main>\r\n    \r\n    \r\n    \r\n        <aside class=\"left_menu\"> \r\n            <div class=\"header_left\">\r\n                <ul class=\"menu_header_left\">\r\n                    <li class=\"menu_item_left\">\r\n                        <button class=\"header_button_left button desc__top_left\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_18___}\" alt=\"clous\">\r\n                        </button>\r\n                    </li>\r\n               \r\n                    <li class=\"menu_icon_left\">\r\n                        <button class=\"header_button_left logo\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_1___}\" alt=\"logo\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"menu_item_left\">\r\n                        <button class=\"header_button_left button\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_19___}\" alt=\"Search\">\r\n                    </button>\r\n                    </li>\r\n                \r\n                </ul>\r\n            </div>\r\n            \r\n            <nav class=\"navig_left\">\r\n                <a href=\"#\" class=\"navig_link_left\">Ремонт техники</a>\r\n                <a href=\"#\" class=\"navig_link_left\">Услуги и сервисы</a>\r\n                <a href=\"#\" class=\"navig_link_left\">Корпоративным клиентам</a>\r\n                <a href=\"#\" class=\"navig_link_left\">Продавцам техники</a>\r\n                <a href=\"#\" class=\"navig_link_left\">Партнерам</a>\r\n                <a href=\"#\" class=\"navig_link_left\">Производителям</a>\r\n                <a href=\"#\" class=\"navig_link_left\">Наши сервисные центры</a>\r\n                <a href=\"#\" class=\"navig_link_left\">Контакты</a>\r\n            </nav>\r\n            <div class=\"bottom_menu_left\">\r\n                <ul class=\"menu_main_left\">\r\n                    <li class=\"menu_item_left\">\r\n                        <button class=\"main_button_left button\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_20___}\" alt=\"Звонок\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"menu_item_left\">\r\n                        <button class=\"main_button_left button\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_21___}\" alt=\"Чат\">\r\n                        </button>\r\n                    </li>\r\n                    <li class=\"menu_item_left\">\r\n                        <button class=\"main_button_left button\">\r\n                        <img src=\"${___HTML_LOADER_IMPORT_20___}\" alt=\"Профиль\">\r\n                        </button>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"footer_info\">\r\n                <a href=\"#\" class=\"connection\">mail@cps.com</a><br>\r\n                <a href=\"#\" class=\"connection phone\">8 800 890 8900</a> <br>\r\n                <a href=\"#\" class=\"a_language\">RU</a>\r\n                <a href=\"#\" class=\"a_language\">EN</a>\r\n                <a href=\"#\" class=\"a_language\">CH</a>  \r\n            </div>\r\n        </aside>\r\n        <div class=\"wrapper-shadow-popup\">\r\n        </div> \r\n\r\n    <div class=\"modal-window\">\r\n        <aside class=\"window-wrapper\">\r\n          <div class=\"window\">\r\n            <button class=\"btn btn-window button\">\r\n              <img src=\"${___HTML_LOADER_IMPORT_18___}\" alt=\"\">\r\n            </button>\r\n            <h3 class=\"window__title\"></h3>\r\n            <input type=\"text\" class=\"input-name feedback-form\" placeholder=\"Имя\">\r\n            <input type=\"tel\" class=\"input-phone feedback-form\" placeholder=\"Телефон\">\r\n            <input type=\"email\" class=\"input-name feedback-form\" placeholder=\"Электронная почта\">\r\n            <area shape=\"default\" coords=\"\" href=\"\" alt=\"\" class=\"call-forms\">\r\n            <input type=\"tel\" class=\"input-phone call-forms\" placeholder=\"Телефон\">\r\n            <p class=\"window__text\">Нажимая “отправить”, вы даете согласие на <span class=\"window__text_pink\">обработку\r\n              персональных данных</span> и соглашаетесь с нашей <span class=\"window__text_pink\">политикой конфиденциальности</span></p>\r\n            <div class=\"window-btn-wrapper\">\r\n              <button class=\"btn-price window-btn\">\r\n                Отправить\r\n                <img src=\"${___HTML_LOADER_IMPORT_22___}\" alt=\"\">\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </aside>\r\n      </div>\r\n    \r\n</div>`;\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://cps_service/./src/index.html?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://cps_service/./src/style/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://cps_service/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://cps_service/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://cps_service/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://cps_service/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://cps_service/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://cps_service/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/image/Bitmap (1).svg":
/*!**********************************!*\
  !*** ./src/image/Bitmap (1).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Bitmap (1).svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Bitmap_(1).svg?");

/***/ }),

/***/ "./src/image/Bitmap (2).svg":
/*!**********************************!*\
  !*** ./src/image/Bitmap (2).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Bitmap (2).svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Bitmap_(2).svg?");

/***/ }),

/***/ "./src/image/Bitmap (3).svg":
/*!**********************************!*\
  !*** ./src/image/Bitmap (3).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Bitmap (3).svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Bitmap_(3).svg?");

/***/ }),

/***/ "./src/image/Bitmap (4).svg":
/*!**********************************!*\
  !*** ./src/image/Bitmap (4).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Bitmap (4).svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Bitmap_(4).svg?");

/***/ }),

/***/ "./src/image/Bitmap (5).svg":
/*!**********************************!*\
  !*** ./src/image/Bitmap (5).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Bitmap (5).svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Bitmap_(5).svg?");

/***/ }),

/***/ "./src/image/Bitmap (6).svg":
/*!**********************************!*\
  !*** ./src/image/Bitmap (6).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Bitmap (6).svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Bitmap_(6).svg?");

/***/ }),

/***/ "./src/image/Bitmap (7).svg":
/*!**********************************!*\
  !*** ./src/image/Bitmap (7).svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Bitmap (7).svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Bitmap_(7).svg?");

/***/ }),

/***/ "./src/image/Bitmap.svg":
/*!******************************!*\
  !*** ./src/image/Bitmap.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Bitmap.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Bitmap.svg?");

/***/ }),

/***/ "./src/image/Group-profile.svg":
/*!*************************************!*\
  !*** ./src/image/Group-profile.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Group-profile.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Group-profile.svg?");

/***/ }),

/***/ "./src/image/Group-settings.svg":
/*!**************************************!*\
  !*** ./src/image/Group-settings.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Group-settings.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Group-settings.svg?");

/***/ }),

/***/ "./src/image/Group.svg":
/*!*****************************!*\
  !*** ./src/image/Group.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Group.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Group.svg?");

/***/ }),

/***/ "./src/image/Line.svg":
/*!****************************!*\
  !*** ./src/image/Line.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Line.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/Line.svg?");

/***/ }),

/***/ "./src/image/MG3223.png":
/*!******************************!*\
  !*** ./src/image/MG3223.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/MG3223.png\";\n\n//# sourceURL=webpack://cps_service/./src/image/MG3223.png?");

/***/ }),

/***/ "./src/image/dropdown.svg":
/*!********************************!*\
  !*** ./src/image/dropdown.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/dropdown.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/dropdown.svg?");

/***/ }),

/***/ "./src/image/expand.svg":
/*!******************************!*\
  !*** ./src/image/expand.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/expand.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/expand.svg?");

/***/ }),

/***/ "./src/image/go.svg":
/*!**************************!*\
  !*** ./src/image/go.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/go.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/go.svg?");

/***/ }),

/***/ "./src/image/icon-X.svg":
/*!******************************!*\
  !*** ./src/image/icon-X.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/icon-X.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/icon-X.svg?");

/***/ }),

/***/ "./src/image/icon-call.svg":
/*!*********************************!*\
  !*** ./src/image/icon-call.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/icon-call.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/icon-call.svg?");

/***/ }),

/***/ "./src/image/icon-chat.svg":
/*!*********************************!*\
  !*** ./src/image/icon-chat.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/icon-chat.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/icon-chat.svg?");

/***/ }),

/***/ "./src/image/icon-menu.svg":
/*!*********************************!*\
  !*** ./src/image/icon-menu.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/icon-menu.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/icon-menu.svg?");

/***/ }),

/***/ "./src/image/icon-search.svg":
/*!***********************************!*\
  !*** ./src/image/icon-search.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/icon-search.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/icon-search.svg?");

/***/ }),

/***/ "./src/image/icon-search1.svg":
/*!************************************!*\
  !*** ./src/image/icon-search1.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/icon-search1.svg\";\n\n//# sourceURL=webpack://cps_service/./src/image/icon-search1.svg?");

/***/ }),

/***/ "./src/font/TTLakes-Bold.eot":
/*!***********************************!*\
  !*** ./src/font/TTLakes-Bold.eot ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/TTLakes-Bold.eot\";\n\n//# sourceURL=webpack://cps_service/./src/font/TTLakes-Bold.eot?");

/***/ }),

/***/ "./src/font/TTLakes-Bold.ttf":
/*!***********************************!*\
  !*** ./src/font/TTLakes-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/TTLakes-Bold.ttf\";\n\n//# sourceURL=webpack://cps_service/./src/font/TTLakes-Bold.ttf?");

/***/ }),

/***/ "./src/font/TTLakes-Bold.woff":
/*!************************************!*\
  !*** ./src/font/TTLakes-Bold.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/TTLakes-Bold.woff\";\n\n//# sourceURL=webpack://cps_service/./src/font/TTLakes-Bold.woff?");

/***/ }),

/***/ "./src/font/TTLakes-Medium.ttf":
/*!*************************************!*\
  !*** ./src/font/TTLakes-Medium.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/TTLakes-Medium.ttf\";\n\n//# sourceURL=webpack://cps_service/./src/font/TTLakes-Medium.ttf?");

/***/ }),

/***/ "./src/font/TTLakes-Medium.woff":
/*!**************************************!*\
  !*** ./src/font/TTLakes-Medium.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/TTLakes-Medium.woff\";\n\n//# sourceURL=webpack://cps_service/./src/font/TTLakes-Medium.woff?");

/***/ }),

/***/ "./src/font/TTLakes-Regular.eot":
/*!**************************************!*\
  !*** ./src/font/TTLakes-Regular.eot ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/TTLakes-Regular.eot\";\n\n//# sourceURL=webpack://cps_service/./src/font/TTLakes-Regular.eot?");

/***/ }),

/***/ "./src/font/TTLakes-Regular.ttf":
/*!**************************************!*\
  !*** ./src/font/TTLakes-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/TTLakes-Regular.ttf\";\n\n//# sourceURL=webpack://cps_service/./src/font/TTLakes-Regular.ttf?");

/***/ }),

/***/ "./src/font/TTLakes-Regular.woff":
/*!***************************************!*\
  !*** ./src/font/TTLakes-Regular.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/TTLakes-Regular.woff\";\n\n//# sourceURL=webpack://cps_service/./src/font/TTLakes-Regular.woff?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;