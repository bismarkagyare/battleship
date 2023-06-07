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
  }, {
    key: "getIndexOfCell",
    value: function getIndexOfCell(column, row) {
      var columnIndex = column - this.coordinates.column;
      var rowIndex = row - this.coordinates.row;
      if (this.orientation === 'horizontal' && rowIndex === 0) {
        return columnIndex >= 0 && columnIndex < this.length ? columnIndex : -1;
      } else if (this.orientation === 'vertical' && columnIndex === 0) {
        return rowIndex >= 0 && rowIndex < this.length ? rowIndex : -1;
      }
      return -1;
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


console.log('hello world');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxJQUFJO0VBQ1IsU0FBQUEsS0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsSUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNFLElBQUksR0FBRyxJQUFJQyxLQUFLLENBQUNILE1BQU0sQ0FBQyxDQUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDO0VBQzNDO0VBQUNDLFlBQUEsQ0FBQU4sSUFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxJQUFJQyxLQUFLLEVBQUU7TUFDVCxJQUFJLENBQUNQLElBQUksQ0FBQ08sS0FBSyxDQUFDLEdBQUcsSUFBSTtJQUN6QjtFQUFDO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFHLE9BQUEsRUFBUztNQUNQLE9BQU8sSUFBSSxDQUFDUixJQUFJLENBQUNTLEtBQUssQ0FBQyxVQUFDQyxJQUFJO1FBQUEsT0FBS0EsSUFBSSxLQUFLLElBQUk7TUFBQSxFQUFDO0lBQ2pEO0VBQUM7SUFBQU4sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU0sZUFBZUMsTUFBTSxFQUFFQyxHQUFHLEVBQUU7TUFDMUIsSUFBTUMsV0FBVyxHQUFHRixNQUFNLEdBQUcsSUFBSSxDQUFDRyxXQUFXLENBQUNILE1BQU07TUFDcEQsSUFBTUksUUFBUSxHQUFHSCxHQUFHLEdBQUcsSUFBSSxDQUFDRSxXQUFXLENBQUNGLEdBQUc7TUFFM0MsSUFBSSxJQUFJLENBQUNJLFdBQVcsS0FBSyxZQUFZLElBQUlELFFBQVEsS0FBSyxDQUFDLEVBQUU7UUFDdkQsT0FBT0YsV0FBVyxJQUFJLENBQUMsSUFBSUEsV0FBVyxHQUFHLElBQUksQ0FBQ2hCLE1BQU0sR0FBR2dCLFdBQVcsR0FBRyxDQUFDLENBQUM7TUFDekUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDRyxXQUFXLEtBQUssVUFBVSxJQUFJSCxXQUFXLEtBQUssQ0FBQyxFQUFFO1FBQy9ELE9BQU9FLFFBQVEsSUFBSSxDQUFDLElBQUlBLFFBQVEsR0FBRyxJQUFJLENBQUNsQixNQUFNLEdBQUdrQixRQUFRLEdBQUcsQ0FBQyxDQUFDO01BQ2hFO01BRUEsT0FBTyxDQUFDLENBQUM7SUFDWDtFQUFDO0VBQUEsT0FBQW5CLElBQUE7QUFBQTtBQUdILGlFQUFlQSxJQUFJOzs7Ozs7Ozs7OztBQzVCbkI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNLO0FBRWxDcUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2E1YjQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IG5ldyBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpO1xuICB9XG5cbiAgaGl0KGluZGV4KSB7XG4gICAgdGhpcy5oaXRzW2luZGV4XSA9IHRydWU7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cy5ldmVyeSgoY2VsbCkgPT4gY2VsbCA9PT0gdHJ1ZSk7XG4gIH1cblxuICBnZXRJbmRleE9mQ2VsbChjb2x1bW4sIHJvdykge1xuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gY29sdW1uIC0gdGhpcy5jb29yZGluYXRlcy5jb2x1bW47XG4gICAgY29uc3Qgcm93SW5kZXggPSByb3cgLSB0aGlzLmNvb3JkaW5hdGVzLnJvdztcblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgcm93SW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiBjb2x1bW5JbmRleCA+PSAwICYmIGNvbHVtbkluZGV4IDwgdGhpcy5sZW5ndGggPyBjb2x1bW5JbmRleCA6IC0xO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiBjb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHJvd0luZGV4ID49IDAgJiYgcm93SW5kZXggPCB0aGlzLmxlbmd0aCA/IHJvd0luZGV4IDogLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL21vZHVsZXMvc2hpcCc7XG5cbmNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpO1xuIl0sIm5hbWVzIjpbIlNoaXAiLCJsZW5ndGgiLCJfY2xhc3NDYWxsQ2hlY2siLCJoaXRzIiwiQXJyYXkiLCJmaWxsIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJoaXQiLCJpbmRleCIsImlzU3VuayIsImV2ZXJ5IiwiY2VsbCIsImdldEluZGV4T2ZDZWxsIiwiY29sdW1uIiwicm93IiwiY29sdW1uSW5kZXgiLCJjb29yZGluYXRlcyIsInJvd0luZGV4Iiwib3JpZW50YXRpb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==