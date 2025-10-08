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
/***/ (() => {

eval("{var verificarPalindromo = function verificarPalindromo() {\n  var texto = document.getElementById(\"palabra\").value;\n  var limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');\n  var invertido = limpio.split('').reverse().join('');\n  if (limpio === invertido && limpio.length > 0) {\n    Swal.fire({\n      icon: \"success\",\n      title: \"¡Es un palíndromo!\",\n      text: \"\\\"\".concat(texto, \"\\\" se lee igual al rev\\xE9s.\"),\n      confirmButtonColor: \"#0984e3\"\n    });\n  } else {\n    Swal.fire({\n      icon: \"error\",\n      title: \"No es un palíndromo\",\n      text: \"Intenta con otra palabra o frase.\",\n      confirmButtonColor: \"#d63031\"\n    });\n  }\n};\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  document.querySelector(\"button.btn\").addEventListener(\"click\", verificarPalindromo);\n});\n\n//# sourceURL=webpack://unidad1/./src/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;