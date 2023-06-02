/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    _classCallCheck(this, Ship);
    this.length = length;
    this.hits = new Array(length).fill(false);
  }
  _createClass(Ship, [{
    key: "hit",
    value: function hit(index) {
      this.hits[index] = true;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.hits.every(function (cell) {
        return cell === true;
      });
    }

    // getIndexOfCell(row, column) {
    //   const { length } = this;
    //   const startColumn = this.coordinates.column;
    //   const startRow = this.coordinates.row;

    //   if (this.orientation === 'horizontal') {
    //     return column - startColumn;
    //   } else if (this.orientation === 'vertical') {
    //     return row - startRow;
    //   }
    //   return -1;
    // }
  }, {
    key: "getIndexOfCell",
    value: function getIndexOfCell(row, column) {
      var startColumn = this.coordinates.column;
      var startRow = this.coordinates.row;
      var index = this.orientation === 'horizontal' ? column - startColumn : row - startRow;
      return index >= 0 && index < this.length ? index : -1;
    }
  }]);
  return Ship;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ship */ "./src/modules/ship.js");


var ship = new _modules_ship__WEBPACK_IMPORTED_MODULE_1__["default"](3);
console.log(ship.length);
console.log(ship.hits);
console.log(ship.isSunk());
console.log(ship.hit(0));
console.log(ship.hit(1));
console.log(ship.hit(2));
console.log(ship.hits);
console.log(ship.isSunk());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2E1YjQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IG5ldyBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpO1xuICB9XG5cbiAgaGl0KGluZGV4KSB7XG4gICAgdGhpcy5oaXRzW2luZGV4XSA9IHRydWU7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cy5ldmVyeSgoY2VsbCkgPT4gY2VsbCA9PT0gdHJ1ZSk7XG4gIH1cblxuICAvLyBnZXRJbmRleE9mQ2VsbChyb3csIGNvbHVtbikge1xuICAvLyAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB0aGlzO1xuICAvLyAgIGNvbnN0IHN0YXJ0Q29sdW1uID0gdGhpcy5jb29yZGluYXRlcy5jb2x1bW47XG4gIC8vICAgY29uc3Qgc3RhcnRSb3cgPSB0aGlzLmNvb3JkaW5hdGVzLnJvdztcblxuICAvLyAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgLy8gICAgIHJldHVybiBjb2x1bW4gLSBzdGFydENvbHVtbjtcbiAgLy8gICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgLy8gICAgIHJldHVybiByb3cgLSBzdGFydFJvdztcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIC0xO1xuICAvLyB9XG5cbiAgZ2V0SW5kZXhPZkNlbGwocm93LCBjb2x1bW4pIHtcbiAgICBjb25zdCBzdGFydENvbHVtbiA9IHRoaXMuY29vcmRpbmF0ZXMuY29sdW1uO1xuICAgIGNvbnN0IHN0YXJ0Um93ID0gdGhpcy5jb29yZGluYXRlcy5yb3c7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBjb2x1bW4gLSBzdGFydENvbHVtbiA6IHJvdyAtIHN0YXJ0Um93O1xuXG4gICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmxlbmd0aCA/IGluZGV4IDogLTE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vbW9kdWxlcy9zaGlwJztcblxuY29uc3Qgc2hpcCA9IG5ldyBTaGlwKDMpO1xuY29uc29sZS5sb2coc2hpcC5sZW5ndGgpO1xuY29uc29sZS5sb2coc2hpcC5oaXRzKTtcbmNvbnNvbGUubG9nKHNoaXAuaXNTdW5rKCkpO1xuY29uc29sZS5sb2coc2hpcC5oaXQoMCkpO1xuY29uc29sZS5sb2coc2hpcC5oaXQoMSkpO1xuY29uc29sZS5sb2coc2hpcC5oaXQoMikpO1xuY29uc29sZS5sb2coc2hpcC5oaXRzKTtcbmNvbnNvbGUubG9nKHNoaXAuaXNTdW5rKCkpO1xuIl0sIm5hbWVzIjpbIlNoaXAiLCJsZW5ndGgiLCJfY2xhc3NDYWxsQ2hlY2siLCJoaXRzIiwiQXJyYXkiLCJmaWxsIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJoaXQiLCJpbmRleCIsImlzU3VuayIsImV2ZXJ5IiwiY2VsbCIsImdldEluZGV4T2ZDZWxsIiwicm93IiwiY29sdW1uIiwic3RhcnRDb2x1bW4iLCJjb29yZGluYXRlcyIsInN0YXJ0Um93Iiwib3JpZW50YXRpb24iLCJzaGlwIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=