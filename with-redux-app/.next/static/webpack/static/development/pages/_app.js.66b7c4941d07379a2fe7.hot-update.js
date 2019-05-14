webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: reducer, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

 // import { composeWithDevTools } from 'redux-devtools-extension'

var exampleInitialState = {
  // lastUpdate: 0,
  // light: false,
  // count: 0,
  todos: ['css', 'html', 'vue'] // export const actionTypes = {
  //   TICK: 'TICK',
  //   INCREMENT: 'INCREMENT',
  //   DECREMENT: 'DECREMENT',
  //   RESET: 'RESET'
  // }
  // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    // case actionTypes.TICK:
    //   return Object.assign({}, state, {
    //     lastUpdate: action.ts,
    //     light: !!action.light
    //   })
    // case actionTypes.INCREMENT:
    //   return Object.assign({}, state, {
    //     count: state.count + 1
    //   })
    // case actionTypes.DECREMENT:
    //   return Object.assign({}, state, {
    //     count: state.count - 1
    //   })
    // case actionTypes.RESET:
    //   return Object.assign({}, state, {
    //     count: exampleInitialState.count
    //   })
    case 'ADD_TODO':
      var todos = state.todos.slice(0);
      todos.push(action.payload); // 深拷贝

      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        todos: todos
      });

    default:
      return state;
  }
}; // ACTIONS
// export const serverRenderClock = () => {
//   return { type: actionTypes.TICK, light: false, ts: Date.now() }
// }
// export const startClock = () => {
//   return { type: actionTypes.TICK, light: true, ts: Date.now() }
// }
// export const incrementCount = () => {
//   return { type: actionTypes.INCREMENT }
// }
// export const decrementCount = () => {
//   return { type: actionTypes.DECREMENT }
// }
// export const resetCount = () => {
//   return { type: actionTypes.RESET }
// }

function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, initialState // composeWithDevTools(applyMiddleware())
  );
}

/***/ })

})
//# sourceMappingURL=_app.js.66b7c4941d07379a2fe7.hot-update.js.map