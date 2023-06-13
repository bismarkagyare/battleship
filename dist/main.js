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
/* harmony import */ var _shipsPlacement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipsPlacement */ "./src/modules/shipsPlacement.js");



var initializeGame = function initializeGame() {
  var playerGameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10);
  var computerGameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10);

  // Place player's ships
  var playerShips = [new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](5), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](4), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2)];
  (0,_shipsPlacement__WEBPACK_IMPORTED_MODULE_2__["default"])(playerGameboard, playerShips);

  // Place computer's ships
  var computerShips = [new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](5), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](4), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3), new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2)];
  (0,_shipsPlacement__WEBPACK_IMPORTED_MODULE_2__["default"])(computerGameboard, computerShips);

  // Render the gameboards
  renderGameboard('player-board', playerGameboard);
  renderGameboard('computer-board', computerGameboard);
  randomizeShips(playerGameboard, playerShips, computerGameboard, computerShips);
};
var createCell = function createCell(row, col, gameboard) {
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
  return cell;
};
var renderGameboard = function renderGameboard(containerId, gameboard) {
  var container = document.getElementById(containerId);
  container.innerHTML = '';
  for (var row = 0; row < gameboard.size; row++) {
    for (var col = 0; col < gameboard.size; col++) {
      var cell = createCell(row, col, gameboard);
      container.appendChild(cell);
    }
  }
};
var randomizeShips = function randomizeShips(playerGameboard, playerShips, computerGameboard, computerShips) {
  var randomizeShipsBtn = document.querySelector('.random-btn');
  randomizeShipsBtn.addEventListener('click', function () {
    playerGameboard.clearGrid();
    computerGameboard.clearGrid();
    (0,_shipsPlacement__WEBPACK_IMPORTED_MODULE_2__["default"])(playerGameboard, playerShips);
    (0,_shipsPlacement__WEBPACK_IMPORTED_MODULE_2__["default"])(computerGameboard, computerShips);
    renderGameboard('player-board', playerGameboard);
    renderGameboard('computer-board', computerGameboard);
  });
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
    key: "clearGrid",
    value: function clearGrid() {
      for (var row = 0; row < this.size; row++) {
        for (var col = 0; col < this.size; col++) {
          this.grid[row][col].ship = null;
          this.grid[row][col].orientation = null;
        }
      }
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
    this.row = null;
    this.column = null;
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
  }, {
    key: "getPosition",
    value: function getPosition() {
      return {
        row: this.row,
        column: this.column
      };
    }
  }, {
    key: "setPosition",
    value: function setPosition(row, column) {
      this.row = row;
      this.column = column;
    }
  }]);
  return Ship;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/modules/shipsPlacement.js":
/*!***************************************!*\
  !*** ./src/modules/shipsPlacement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var placeShipsRandomly = function placeShipsRandomly(gameboard, ships) {
  ships.forEach(function (ship) {
    var startRow, startCol, orientation;
    do {
      startRow = getRandomCoordinate(gameboard.size);
      startCol = getRandomCoordinate(gameboard.size);
      orientation = getRandomOrientation();
    } while (!gameboard.placeShip(ship, startRow, startCol, orientation));
  });
};
var getRandomCoordinate = function getRandomCoordinate(size) {
  return Math.floor(Math.random() * size);
};
var getRandomOrientation = function getRandomOrientation() {
  return Math.random() < 0.5 ? 'horizontal' : 'vertical';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeShipsRandomly);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXBzUGxhY2VtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/YTViNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgcGxhY2VTaGlwc1JhbmRvbWx5IGZyb20gJy4vc2hpcHNQbGFjZW1lbnQnO1xuXG5jb25zdCBpbml0aWFsaXplR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgxMCk7XG4gIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgxMCk7XG5cbiAgLy8gUGxhY2UgcGxheWVyJ3Mgc2hpcHNcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBbbmV3IFNoaXAoNSksIG5ldyBTaGlwKDQpLCBuZXcgU2hpcCgzKSwgbmV3IFNoaXAoMyksIG5ldyBTaGlwKDIpXTtcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KHBsYXllckdhbWVib2FyZCwgcGxheWVyU2hpcHMpO1xuXG4gIC8vIFBsYWNlIGNvbXB1dGVyJ3Mgc2hpcHNcbiAgY29uc3QgY29tcHV0ZXJTaGlwcyA9IFtuZXcgU2hpcCg1KSwgbmV3IFNoaXAoNCksIG5ldyBTaGlwKDMpLCBuZXcgU2hpcCgzKSwgbmV3IFNoaXAoMildO1xuICBwbGFjZVNoaXBzUmFuZG9tbHkoY29tcHV0ZXJHYW1lYm9hcmQsIGNvbXB1dGVyU2hpcHMpO1xuXG4gIC8vIFJlbmRlciB0aGUgZ2FtZWJvYXJkc1xuICByZW5kZXJHYW1lYm9hcmQoJ3BsYXllci1ib2FyZCcsIHBsYXllckdhbWVib2FyZCk7XG4gIHJlbmRlckdhbWVib2FyZCgnY29tcHV0ZXItYm9hcmQnLCBjb21wdXRlckdhbWVib2FyZCk7XG5cbiAgcmFuZG9taXplU2hpcHMocGxheWVyR2FtZWJvYXJkLCBwbGF5ZXJTaGlwcywgY29tcHV0ZXJHYW1lYm9hcmQsIGNvbXB1dGVyU2hpcHMpO1xufTtcblxuY29uc3QgY3JlYXRlQ2VsbCA9IChyb3csIGNvbCwgZ2FtZWJvYXJkKSA9PiB7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gIGNlbGwuZGF0YXNldC5jb2x1bW4gPSBjb2w7XG5cbiAgY29uc3Qgc2hpcCA9IGdhbWVib2FyZC5nZXRTaGlwQXQocm93LCBjb2wpO1xuICBpZiAoc2hpcCAhPT0gbnVsbCkge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1jZWxsJyk7XG4gIH1cblxuICBjb25zdCBvcmllbnRhdGlvbiA9IGdhbWVib2FyZC5nZXRPcmllbnRhdGlvbkF0KHJvdywgY29sKTtcbiAgY29uc3QgaXNIb3Jpem9udGFsID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJztcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnO1xuXG4gIGlmIChpc0hvcml6b250YWwpIHtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbC1ob3Jpem9udGFsJyk7XG4gIH0gZWxzZSBpZiAoaXNWZXJ0aWNhbCkge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1jZWxsLXZlcnRpY2FsJyk7XG4gIH1cblxuICByZXR1cm4gY2VsbDtcbn07XG5cbmNvbnN0IHJlbmRlckdhbWVib2FyZCA9IChjb250YWluZXJJZCwgZ2FtZWJvYXJkKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGdhbWVib2FyZC5zaXplOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGdhbWVib2FyZC5zaXplOyBjb2wrKykge1xuICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwocm93LCBjb2wsIGdhbWVib2FyZCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCByYW5kb21pemVTaGlwcyA9IChwbGF5ZXJHYW1lYm9hcmQsIHBsYXllclNoaXBzLCBjb21wdXRlckdhbWVib2FyZCwgY29tcHV0ZXJTaGlwcykgPT4ge1xuICBjb25zdCByYW5kb21pemVTaGlwc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb20tYnRuJyk7XG4gIHJhbmRvbWl6ZVNoaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBsYXllckdhbWVib2FyZC5jbGVhckdyaWQoKTtcbiAgICBjb21wdXRlckdhbWVib2FyZC5jbGVhckdyaWQoKTtcblxuICAgIHBsYWNlU2hpcHNSYW5kb21seShwbGF5ZXJHYW1lYm9hcmQsIHBsYXllclNoaXBzKTtcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHkoY29tcHV0ZXJHYW1lYm9hcmQsIGNvbXB1dGVyU2hpcHMpO1xuXG4gICAgcmVuZGVyR2FtZWJvYXJkKCdwbGF5ZXItYm9hcmQnLCBwbGF5ZXJHYW1lYm9hcmQpO1xuICAgIHJlbmRlckdhbWVib2FyZCgnY29tcHV0ZXItYm9hcmQnLCBjb21wdXRlckdhbWVib2FyZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZUdhbWU7XG4iLCJjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmdyaWQgPSB0aGlzLmNyZWF0ZUdyaWQoKTtcbiAgfVxuXG4gIGNyZWF0ZUdyaWQoKSB7XG4gICAgY29uc3QgZ3JpZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyByb3crKykge1xuICAgICAgY29uc3Qgcm93Q2VsbHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcbiAgICAgICAgcm93Q2VsbHMucHVzaCh7IHNoaXA6IG51bGwsIGlzQXR0YWNrZWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgICAgZ3JpZC5wdXNoKHJvd0NlbGxzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JpZDtcbiAgfVxuXG4gIGNsZWFyR3JpZCgpIHtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnNpemU7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNpemU7IGNvbCsrKSB7XG4gICAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF0uc2hpcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF0ub3JpZW50YXRpb24gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCBzdGFydFJvdywgc3RhcnRDb2wsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgZW5kUm93ID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgPyBzdGFydFJvdyArIHNoaXAubGVuZ3RoIC0gMSA6IHN0YXJ0Um93O1xuICAgIGNvbnN0IGVuZENvbCA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBzdGFydENvbCArIHNoaXAubGVuZ3RoIC0gMSA6IHN0YXJ0Q29sO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWRQb3NpdGlvbihzdGFydFJvdywgc3RhcnRDb2wsIGVuZFJvdywgZW5kQ29sKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IHJvdyA9IHN0YXJ0Um93OyByb3cgPD0gZW5kUm93OyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gc3RhcnRDb2w7IGNvbCA8PSBlbmRDb2w7IGNvbCsrKSB7XG4gICAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF0uc2hpcCA9IHNoaXA7XG4gICAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF0ub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlzVmFsaWRQb3NpdGlvbihzdGFydFJvdywgc3RhcnRDb2wsIGVuZFJvdywgZW5kQ29sKSB7XG4gICAgaWYgKFxuICAgICAgc3RhcnRSb3cgPCAwIHx8XG4gICAgICBzdGFydFJvdyA+PSB0aGlzLnNpemUgfHxcbiAgICAgIHN0YXJ0Q29sIDwgMCB8fFxuICAgICAgc3RhcnRDb2wgPj0gdGhpcy5zaXplIHx8XG4gICAgICBlbmRSb3cgPCAwIHx8XG4gICAgICBlbmRSb3cgPj0gdGhpcy5zaXplIHx8XG4gICAgICBlbmRDb2wgPCAwIHx8XG4gICAgICBlbmRDb2wgPj0gdGhpcy5zaXplXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgcm93ID0gc3RhcnRSb3c7IHJvdyA8PSBlbmRSb3c7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSBzdGFydENvbDsgY29sIDw9IGVuZENvbDsgY29sKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtyb3ddW2NvbF0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0U2hpcEF0KHJvdywgY29sKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZFtyb3ddW2NvbF0uc2hpcDtcbiAgfVxuXG4gIGdldE9yaWVudGF0aW9uQXQocm93LCBjb2wpIHtcbiAgICByZXR1cm4gdGhpcy5ncmlkW3Jvd11bY29sXS5vcmllbnRhdGlvbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTtcbiAgICB0aGlzLnJvdyA9IG51bGw7XG4gICAgdGhpcy5jb2x1bW4gPSBudWxsO1xuICB9XG5cbiAgaGl0KGluZGV4KSB7XG4gICAgdGhpcy5oaXRzW2luZGV4XSA9IHRydWU7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cy5ldmVyeSgoaGl0KSA9PiBoaXQpO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHsgcm93OiB0aGlzLnJvdywgY29sdW1uOiB0aGlzLmNvbHVtbiB9O1xuICB9XG5cbiAgc2V0UG9zaXRpb24ocm93LCBjb2x1bW4pIHtcbiAgICB0aGlzLnJvdyA9IHJvdztcbiAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKGdhbWVib2FyZCwgc2hpcHMpID0+IHtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGxldCBzdGFydFJvdywgc3RhcnRDb2wsIG9yaWVudGF0aW9uO1xuXG4gICAgZG8ge1xuICAgICAgc3RhcnRSb3cgPSBnZXRSYW5kb21Db29yZGluYXRlKGdhbWVib2FyZC5zaXplKTtcbiAgICAgIHN0YXJ0Q29sID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZShnYW1lYm9hcmQuc2l6ZSk7XG4gICAgICBvcmllbnRhdGlvbiA9IGdldFJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgfSB3aGlsZSAoIWdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgc3RhcnRSb3csIHN0YXJ0Q29sLCBvcmllbnRhdGlvbikpO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldFJhbmRvbUNvb3JkaW5hdGUgPSAoc2l6ZSkgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XG59O1xuXG5jb25zdCBnZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxhY2VTaGlwc1JhbmRvbWx5O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuXG5pbXBvcnQgaW5pdGlhbGl6ZUdhbWUgZnJvbSAnLi9tb2R1bGVzL2RvbSc7XG5cbmluaXRpYWxpemVHYW1lKCk7XG4iXSwibmFtZXMiOlsiR2FtZWJvYXJkIiwiU2hpcCIsInBsYWNlU2hpcHNSYW5kb21seSIsImluaXRpYWxpemVHYW1lIiwicGxheWVyR2FtZWJvYXJkIiwiY29tcHV0ZXJHYW1lYm9hcmQiLCJwbGF5ZXJTaGlwcyIsImNvbXB1dGVyU2hpcHMiLCJyZW5kZXJHYW1lYm9hcmQiLCJyYW5kb21pemVTaGlwcyIsImNyZWF0ZUNlbGwiLCJyb3ciLCJjb2wiLCJnYW1lYm9hcmQiLCJjZWxsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImNvbHVtbiIsInNoaXAiLCJnZXRTaGlwQXQiLCJvcmllbnRhdGlvbiIsImdldE9yaWVudGF0aW9uQXQiLCJpc0hvcml6b250YWwiLCJpc1ZlcnRpY2FsIiwiY29udGFpbmVySWQiLCJjb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInNpemUiLCJhcHBlbmRDaGlsZCIsInJhbmRvbWl6ZVNoaXBzQnRuIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhckdyaWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJncmlkIiwiY3JlYXRlR3JpZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicm93Q2VsbHMiLCJwdXNoIiwiaXNBdHRhY2tlZCIsInBsYWNlU2hpcCIsInN0YXJ0Um93Iiwic3RhcnRDb2wiLCJlbmRSb3ciLCJsZW5ndGgiLCJlbmRDb2wiLCJpc1ZhbGlkUG9zaXRpb24iLCJoaXRzIiwiQXJyYXkiLCJmaWxsIiwiaGl0IiwiaW5kZXgiLCJpc1N1bmsiLCJldmVyeSIsImdldFBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJzaGlwcyIsImZvckVhY2giLCJnZXRSYW5kb21Db29yZGluYXRlIiwiZ2V0UmFuZG9tT3JpZW50YXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9