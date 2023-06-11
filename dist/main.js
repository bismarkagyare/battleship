/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var initializeGame = function initializeGame() {
  var playerGameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10);
  var computerGameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10);

  // Place player's ships
  var playerShips = [new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](5),
  // Carrier
  new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](4),
  // Battleship
  new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3),
  // Cruiser
  new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3),
  // Submarine
  new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2) // Destroyer
  ];

  placeShipsRandomly(playerGameboard, playerShips);

  // Place computer's ships
  var computerShips = [new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](5), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](4), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2)];
  placeShipsRandomly(computerGameboard, computerShips);

  // Render the gameboards
  renderGameboard('player-board', playerGameboard);
  renderGameboard('computer-board', computerGameboard);
};
var placeShipsRandomly = function placeShipsRandomly(gameboard, ships) {
  var _iterator = _createForOfIteratorHelper(ships),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ship = _step.value;
      var startRow = void 0,
        startCol = void 0,
        orientation = void 0;
      do {
        startRow = getRandomCoordinate(gameboard.size);
        startCol = getRandomCoordinate(gameboard.size);
        orientation = getRandomOrientation();
      } while (!gameboard.placeShip(ship, startRow, startCol, orientation));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var getRandomCoordinate = function getRandomCoordinate(size) {
  return Math.floor(Math.random() * size);
};
var getRandomOrientation = function getRandomOrientation() {
  return Math.random() < 0.5 ? 'horizontal' : 'vertical';
};
var renderGameboard = function renderGameboard(containerId, gameboard) {
  var container = document.getElementById(containerId);
  container.innerHTML = '';
  for (var row = 0; row < gameboard.size; row++) {
    for (var col = 0; col < gameboard.size; col++) {
      var cell = document.createElement('div');
      cell.classList.add('board-cell');
      cell.dataset.row = row;
      cell.dataset.column = col;
      var ship = gameboard.getShipAt(row, col);
      if (ship !== null) {
        cell.classList.add('ship-cell');
      }
      var orientation = gameboard.getOrientationAt(row, col);
      var isHorizontal = orientation === 'horizontal';
      var isVertical = orientation === 'vertical';
      if (isHorizontal) {
        cell.classList.add('ship-cell-horizontal');
      } else if (isVertical) {
        cell.classList.add('ship-cell-vertical');
      }
      container.appendChild(cell);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeGame);

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
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
var Gameboard = /*#__PURE__*/function () {
  function Gameboard(size) {
    _classCallCheck(this, Gameboard);
    this.size = size;
    this.grid = this.createGrid();
  }
  _createClass(Gameboard, [{
    key: "createGrid",
    value: function createGrid() {
      var grid = [];
      for (var row = 0; row < this.size; row++) {
        var rowCells = [];
        for (var col = 0; col < this.size; col++) {
          rowCells.push({
            ship: null,
            isAttacked: false
          });
        }
        grid.push(rowCells);
      }
      return grid;
    }
  }, {
    key: "placeShip",
    value: function placeShip(ship, startRow, startCol, orientation) {
      var endRow = orientation === 'vertical' ? startRow + ship.length - 1 : startRow;
      var endCol = orientation === 'horizontal' ? startCol + ship.length - 1 : startCol;
      if (!this.isValidPosition(startRow, startCol, endRow, endCol)) {
        return false;
      }
      for (var row = startRow; row <= endRow; row++) {
        for (var col = startCol; col <= endCol; col++) {
          this.grid[row][col].ship = ship;
          this.grid[row][col].orientation = orientation;
        }
      }
      return true;
    }
  }, {
    key: "isValidPosition",
    value: function isValidPosition(startRow, startCol, endRow, endCol) {
      if (startRow < 0 || startRow >= this.size || startCol < 0 || startCol >= this.size || endRow < 0 || endRow >= this.size || endCol < 0 || endCol >= this.size) {
        return false;
      }
      for (var row = startRow; row <= endRow; row++) {
        for (var col = startCol; col <= endCol; col++) {
          if (this.grid[row][col].ship !== null) {
            return false;
          }
        }
      }
      return true;
    }
  }, {
    key: "getShipAt",
    value: function getShipAt(row, col) {
      return this.grid[row][col].ship;
    }
  }, {
    key: "getOrientationAt",
    value: function getOrientationAt(row, col) {
      return this.grid[row][col].orientation;
    }
  }]);
  return Gameboard;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

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
    this.hits = Array(length).fill(false);
  }
  _createClass(Ship, [{
    key: "hit",
    value: function hit(index) {
      this.hits[index] = true;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.hits.every(function (hit) {
        return hit;
      });
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
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");


(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUMsR0FBRyxJQUFJO0lBQ3pCO0VBQUM7SUFBQVosR0FBQTtJQUFBcEMsS0FBQSxFQUVELFNBQUFpRCxPQUFBLEVBQVM7TUFDUCxPQUFPLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxLQUFLLENBQUMsVUFBQ0gsR0FBRztRQUFBLE9BQUtBLEdBQUc7TUFBQSxFQUFDO0lBQ3RDO0VBQUM7RUFBQSxPQUFBaEUsSUFBQTtBQUFBO0FBR0gsaUVBQWVBLElBQUk7Ozs7Ozs7Ozs7O0FDZm5COzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFFYztBQUUzQ0Msd0RBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9hNWI0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoMTApO1xuICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoMTApO1xuXG4gIC8vIFBsYWNlIHBsYXllcidzIHNoaXBzXG4gIGNvbnN0IHBsYXllclNoaXBzID0gW1xuICAgIG5ldyBTaGlwKDUpLCAvLyBDYXJyaWVyXG4gICAgbmV3IFNoaXAoNCksIC8vIEJhdHRsZXNoaXBcbiAgICBuZXcgU2hpcCgzKSwgLy8gQ3J1aXNlclxuICAgIG5ldyBTaGlwKDMpLCAvLyBTdWJtYXJpbmVcbiAgICBuZXcgU2hpcCgyKSwgLy8gRGVzdHJveWVyXG4gIF07XG4gIHBsYWNlU2hpcHNSYW5kb21seShwbGF5ZXJHYW1lYm9hcmQsIHBsYXllclNoaXBzKTtcblxuICAvLyBQbGFjZSBjb21wdXRlcidzIHNoaXBzXG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBbbmV3IFNoaXAoNSksIG5ldyBTaGlwKDQpLCBuZXcgU2hpcCgzKSwgbmV3IFNoaXAoMyksIG5ldyBTaGlwKDIpXTtcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KGNvbXB1dGVyR2FtZWJvYXJkLCBjb21wdXRlclNoaXBzKTtcblxuICAvLyBSZW5kZXIgdGhlIGdhbWVib2FyZHNcbiAgcmVuZGVyR2FtZWJvYXJkKCdwbGF5ZXItYm9hcmQnLCBwbGF5ZXJHYW1lYm9hcmQpO1xuICByZW5kZXJHYW1lYm9hcmQoJ2NvbXB1dGVyLWJvYXJkJywgY29tcHV0ZXJHYW1lYm9hcmQpO1xufTtcblxuY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKGdhbWVib2FyZCwgc2hpcHMpID0+IHtcbiAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgbGV0IHN0YXJ0Um93LCBzdGFydENvbCwgb3JpZW50YXRpb247XG5cbiAgICBkbyB7XG4gICAgICBzdGFydFJvdyA9IGdldFJhbmRvbUNvb3JkaW5hdGUoZ2FtZWJvYXJkLnNpemUpO1xuICAgICAgc3RhcnRDb2wgPSBnZXRSYW5kb21Db29yZGluYXRlKGdhbWVib2FyZC5zaXplKTtcbiAgICAgIG9yaWVudGF0aW9uID0gZ2V0UmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICB9IHdoaWxlICghZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCBzdGFydFJvdywgc3RhcnRDb2wsIG9yaWVudGF0aW9uKSk7XG4gIH1cbn07XG5cbmNvbnN0IGdldFJhbmRvbUNvb3JkaW5hdGUgPSAoc2l6ZSkgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XG59O1xuXG5jb25zdCBnZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xufTtcblxuY29uc3QgcmVuZGVyR2FtZWJvYXJkID0gKGNvbnRhaW5lcklkLCBnYW1lYm9hcmQpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgZ2FtZWJvYXJkLnNpemU7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgZ2FtZWJvYXJkLnNpemU7IGNvbCsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNlbGwnKTtcbiAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgICBjZWxsLmRhdGFzZXQuY29sdW1uID0gY29sO1xuXG4gICAgICBjb25zdCBzaGlwID0gZ2FtZWJvYXJkLmdldFNoaXBBdChyb3csIGNvbCk7XG4gICAgICBpZiAoc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbCcpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IGdhbWVib2FyZC5nZXRPcmllbnRhdGlvbkF0KHJvdywgY29sKTtcbiAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICBjb25zdCBpc1ZlcnRpY2FsID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCc7XG5cbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLWNlbGwtaG9yaXpvbnRhbCcpO1xuICAgICAgfSBlbHNlIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1jZWxsLXZlcnRpY2FsJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVHYW1lO1xuIiwiY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5ncmlkID0gdGhpcy5jcmVhdGVHcmlkKCk7XG4gIH1cblxuICBjcmVhdGVHcmlkKCkge1xuICAgIGNvbnN0IGdyaWQgPSBbXTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuc2l6ZTsgcm93KyspIHtcbiAgICAgIGNvbnN0IHJvd0NlbGxzID0gW107XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNpemU7IGNvbCsrKSB7XG4gICAgICAgIHJvd0NlbGxzLnB1c2goeyBzaGlwOiBudWxsLCBpc0F0dGFja2VkOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICAgIGdyaWQucHVzaChyb3dDZWxscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyaWQ7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgc3RhcnRSb3csIHN0YXJ0Q29sLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IGVuZFJvdyA9IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8gc3RhcnRSb3cgKyBzaGlwLmxlbmd0aCAtIDEgOiBzdGFydFJvdztcbiAgICBjb25zdCBlbmRDb2wgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gc3RhcnRDb2wgKyBzaGlwLmxlbmd0aCAtIDEgOiBzdGFydENvbDtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkUG9zaXRpb24oc3RhcnRSb3csIHN0YXJ0Q29sLCBlbmRSb3csIGVuZENvbCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCByb3cgPSBzdGFydFJvdzsgcm93IDw9IGVuZFJvdzsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IHN0YXJ0Q29sOyBjb2wgPD0gZW5kQ29sOyBjb2wrKykge1xuICAgICAgICB0aGlzLmdyaWRbcm93XVtjb2xdLnNoaXAgPSBzaGlwO1xuICAgICAgICB0aGlzLmdyaWRbcm93XVtjb2xdLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpc1ZhbGlkUG9zaXRpb24oc3RhcnRSb3csIHN0YXJ0Q29sLCBlbmRSb3csIGVuZENvbCkge1xuICAgIGlmIChcbiAgICAgIHN0YXJ0Um93IDwgMCB8fFxuICAgICAgc3RhcnRSb3cgPj0gdGhpcy5zaXplIHx8XG4gICAgICBzdGFydENvbCA8IDAgfHxcbiAgICAgIHN0YXJ0Q29sID49IHRoaXMuc2l6ZSB8fFxuICAgICAgZW5kUm93IDwgMCB8fFxuICAgICAgZW5kUm93ID49IHRoaXMuc2l6ZSB8fFxuICAgICAgZW5kQ29sIDwgMCB8fFxuICAgICAgZW5kQ29sID49IHRoaXMuc2l6ZVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IHJvdyA9IHN0YXJ0Um93OyByb3cgPD0gZW5kUm93OyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gc3RhcnRDb2w7IGNvbCA8PSBlbmRDb2w7IGNvbCsrKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWRbcm93XVtjb2xdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldFNoaXBBdChyb3csIGNvbCkge1xuICAgIHJldHVybiB0aGlzLmdyaWRbcm93XVtjb2xdLnNoaXA7XG4gIH1cblxuICBnZXRPcmllbnRhdGlvbkF0KHJvdywgY29sKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZFtyb3ddW2NvbF0ub3JpZW50YXRpb247XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XG4gIH1cblxuICBoaXQoaW5kZXgpIHtcbiAgICB0aGlzLmhpdHNbaW5kZXhdID0gdHJ1ZTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzLmV2ZXJ5KChoaXQpID0+IGhpdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJztcblxuaW1wb3J0IGluaXRpYWxpemVHYW1lIGZyb20gJy4vbW9kdWxlcy9kb20nO1xuXG5pbml0aWFsaXplR2FtZSgpO1xuIl0sIm5hbWVzIjpbIkdhbWVib2FyZCIsIlNoaXAiLCJpbml0aWFsaXplR2FtZSIsInBsYXllckdhbWVib2FyZCIsImNvbXB1dGVyR2FtZWJvYXJkIiwicGxheWVyU2hpcHMiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJjb21wdXRlclNoaXBzIiwicmVuZGVyR2FtZWJvYXJkIiwiZ2FtZWJvYXJkIiwic2hpcHMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwic2hpcCIsInZhbHVlIiwic3RhcnRSb3ciLCJzdGFydENvbCIsIm9yaWVudGF0aW9uIiwiZ2V0UmFuZG9tQ29vcmRpbmF0ZSIsInNpemUiLCJnZXRSYW5kb21PcmllbnRhdGlvbiIsInBsYWNlU2hpcCIsImVyciIsImUiLCJmIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29udGFpbmVySWQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwicm93IiwiY29sIiwiY2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0IiwiY29sdW1uIiwiZ2V0U2hpcEF0IiwiZ2V0T3JpZW50YXRpb25BdCIsImlzSG9yaXpvbnRhbCIsImlzVmVydGljYWwiLCJhcHBlbmRDaGlsZCIsIl9jbGFzc0NhbGxDaGVjayIsImdyaWQiLCJjcmVhdGVHcmlkIiwiX2NyZWF0ZUNsYXNzIiwia2V5Iiwicm93Q2VsbHMiLCJwdXNoIiwiaXNBdHRhY2tlZCIsImVuZFJvdyIsImxlbmd0aCIsImVuZENvbCIsImlzVmFsaWRQb3NpdGlvbiIsImhpdHMiLCJBcnJheSIsImZpbGwiLCJoaXQiLCJpbmRleCIsImlzU3VuayIsImV2ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==