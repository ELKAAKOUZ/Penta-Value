/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store.js":
/*!**********************!*\
  !*** ./app/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_advsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/advsSlice */ \"./slices/advsSlice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        advertisments: _slices_advsSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUNKO0FBQ3RDLEtBQUssQ0FBQ0UsS0FBSyxHQUFFRixnRUFBYyxDQUFDLENBQUM7SUFDaENHLE9BQU8sRUFBQyxDQUFDO1FBQ0xDLGFBQWEsRUFBQ0gseURBQVc7SUFDN0IsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9hcHAvc3RvcmUuanM/Y2FlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYWR2c1JlZHVjZXIgZnJvbSBcIi4uL3NsaWNlcy9hZHZzU2xpY2VcIjtcbmV4cG9ydCBjb25zdCBzdG9yZSA9Y29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6e1xuICAgICAgICBhZHZlcnRpc21lbnRzOmFkdnNSZWR1Y2VyLFxuICAgIH1cbn0pIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiYWR2c1JlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJhZHZlcnRpc21lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store */ \"./app/store.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n// function MyApp({ Component, pageProps }) {\n//   return (\n// <Provider store={store}>\n//    <Component {...pageProps} />\n// </Provider>\n//   )\n// }\n// export default MyApp\n\nfunction App({ Component , pageProps: { session , ...pageProps } ,  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n        session: session,\n        __source: {\n            fileName: \"/home/kano0o/g/Penta-Value/my_app/pages/_app.js\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n            store: _app_store__WEBPACK_IMPORTED_MODULE_3__.store,\n            __source: {\n                fileName: \"/home/kano0o/g/Penta-Value/my_app/pages/_app.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/home/kano0o/g/Penta-Value/my_app/pages/_app.js\",\n                    lineNumber: 26,\n                    columnNumber: 12\n                },\n                __self: this\n            })\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ007QUFDRjtBQUVsQyxFQUE2QztBQUU3QyxFQUFhO0FBQ1QsRUFBMkI7QUFDM0IsRUFBa0M7QUFDbEMsRUFBYztBQUNsQixFQUFNO0FBR04sRUFBSTtBQUVKLEVBQXVCO0FBQzBCO0FBRWxDLFFBQVEsQ0FBQ0csR0FBRyxDQUFDLENBQUMsQ0FDM0JDLFNBQVMsR0FDVEMsU0FBUyxFQUFFLENBQUMsQ0FBQ0MsT0FBTyxNQUFLRCxTQUFTLENBQUMsQ0FBQyxJQUN0QyxDQUFDLEVBQUUsQ0FBQztJQUNGLE1BQU0sc0VBQ0hILDREQUFlO1FBQUNJLE9BQU8sRUFBRUEsT0FBTzs7Ozs7Ozt1RkFDNUJOLGlEQUFRO1lBQUNDLEtBQUssRUFBRUEsNkNBQUs7Ozs7Ozs7MkZBQ2xCRyxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBSW5DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7c3RvcmV9IGZyb20gXCIuLi9hcHAvc3RvcmVcIjtcblxuLy8gZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbi8vICAgcmV0dXJuIChcbiAgICAvLyA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAvLyAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgLy8gPC9Qcm92aWRlcj5cbi8vICAgKVxuICBcbiAgXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE15QXBwXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHtcbiAgQ29tcG9uZW50LFxuICBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKVxufSJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiU2Vzc2lvblByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./slices/advsSlice.js":
/*!*****************************!*\
  !*** ./slices/advsSlice.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"advsSlice\": () => (/* binding */ advsSlice),\n/* harmony export */   \"selectItems\": () => (/* binding */ selectItems),\n/* harmony export */   \"toggle\": () => (/* binding */ toggle),\n/* harmony export */   \"addToItems\": () => (/* binding */ addToItems),\n/* harmony export */   \"removeFromItems\": () => (/* binding */ removeFromItems),\n/* harmony export */   \"editItem\": () => (/* binding */ editItem),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst advsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"advertisments\",\n    initialState: {\n        showEditForm: true,\n        advsItems: []\n    },\n    reducers: {\n        toggle: (state, action)=>{\n            state.showEditForm = !state.showEditForm;\n        },\n        addToItems: (state, action)=>{\n            const addedItem = action.payload;\n            state.advsItems = [\n                ...state.advsItems,\n                addedItem\n            ];\n        },\n        removeFromItems: (state, action)=>{\n            const { id  } = action.payload;\n            const newlist = state.advsItems.filter((item)=>item.id !== id\n            );\n            console.log(newlist);\n            state.advsItems = newlist;\n        },\n        editItem: (state, action)=>{\n            const editedItem = action.payload;\n            const existingItem = state.advsItems.find((item)=>item.id === editedItem.id\n            );\n            if (existingItem) {\n                existingItem.image = editedItem.image;\n                existingItem.video = editedItem.video;\n                existingItem.from_time = editedItem.from_time;\n                existingItem.to_time = editedItem.to_time;\n                console.log(existingItem);\n            }\n        }\n    }\n});\nconst selectItems = (state)=>state.advertisments.advsItems\n;\nconst { toggle , addToItems , removeFromItems , editItem  } = advsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (advsSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zbGljZXMvYWR2c1NsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QztBQUNyQyxLQUFLLENBQUNDLFNBQVMsR0FBRUQsNkRBQVcsQ0FBQyxDQUFDO0lBQ2hDRSxJQUFJLEVBQUMsQ0FBZTtJQUNwQkMsWUFBWSxFQUFDLENBQUM7UUFDVkMsWUFBWSxFQUFDLElBQUk7UUFDakJDLFNBQVMsRUFBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNEQyxRQUFRLEVBQUMsQ0FBQztRQUNQQyxNQUFNLEdBQUVDLEtBQUssRUFBQ0MsTUFBTSxHQUFHLENBQUM7WUFDcEJELEtBQUssQ0FBQ0osWUFBWSxJQUFFSSxLQUFLLENBQUNKLFlBQVk7UUFDMUMsQ0FBQztRQUNETSxVQUFVLEdBQUVGLEtBQUssRUFBQ0MsTUFBTSxHQUFHLENBQUM7WUFDeEIsS0FBSyxDQUFDRSxTQUFTLEdBQUNGLE1BQU0sQ0FBQ0csT0FBTztZQUM5QkosS0FBSyxDQUFDSCxTQUFTLEdBQUMsQ0FBQzttQkFBR0csS0FBSyxDQUFDSCxTQUFTO2dCQUFDTSxTQUFTO1lBQUEsQ0FBQztRQUNsRCxDQUFDO1FBQ0RFLGVBQWUsR0FBRUwsS0FBSyxFQUFDQyxNQUFNLEdBQUcsQ0FBQztZQUM3QixLQUFLLENBQUMsQ0FBQ0ssQ0FBQUEsRUFBRSxHQUFDLEdBQUNMLE1BQU0sQ0FBQ0csT0FBTztZQUN6QixLQUFLLENBQUNHLE9BQU8sR0FBQ1AsS0FBSyxDQUFDSCxTQUFTLENBQUNXLE1BQU0sRUFBRUMsSUFBSSxHQUN0Q0EsSUFBSSxDQUFDSCxFQUFFLEtBQUtBLEVBQUU7O1lBR2xCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osT0FBTztZQUNuQlAsS0FBSyxDQUFDSCxTQUFTLEdBQUNVLE9BQU87UUFDM0IsQ0FBQztRQUNESyxRQUFRLEdBQUVaLEtBQUssRUFBQ0MsTUFBTSxHQUFHLENBQUM7WUFDdEIsS0FBSyxDQUFDWSxVQUFVLEdBQUVaLE1BQU0sQ0FBQ0csT0FBTztZQUNoQyxLQUFLLENBQUNVLFlBQVksR0FBQ2QsS0FBSyxDQUFDSCxTQUFTLENBQUNrQixJQUFJLEVBQUVOLElBQUksR0FBRUEsSUFBSSxDQUFDSCxFQUFFLEtBQUtPLFVBQVUsQ0FBQ1AsRUFBRTs7WUFDeEUsRUFBRSxFQUFDUSxZQUFZLEVBQUMsQ0FBQztnQkFDYkEsWUFBWSxDQUFDRSxLQUFLLEdBQUNILFVBQVUsQ0FBQ0csS0FBSztnQkFDbkNGLFlBQVksQ0FBQ0csS0FBSyxHQUFDSixVQUFVLENBQUNJLEtBQUs7Z0JBQ25DSCxZQUFZLENBQUNJLFNBQVMsR0FBQ0wsVUFBVSxDQUFDSyxTQUFTO2dCQUMzQ0osWUFBWSxDQUFDSyxPQUFPLEdBQUNOLFVBQVUsQ0FBQ00sT0FBTztnQkFDdkNULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxZQUFZO1lBQzVCLENBQUM7UUFFTCxDQUFDO0lBQ0osQ0FBQztBQUVOLENBQUM7QUFDTSxLQUFLLENBQUNNLFdBQVcsSUFBRXBCLEtBQUssR0FBR0EsS0FBSyxDQUFDcUIsYUFBYSxDQUFDeEIsU0FBUzs7QUFDeEQsS0FBSyxDQUFDLENBQUNFLENBQUFBLE1BQU0sR0FBQ0csVUFBVSxHQUFDRyxlQUFlLEdBQUNPLFFBQVEsR0FBQyxHQUFDbkIsU0FBUyxDQUFDNkIsT0FBTztBQUMzRSxpRUFBZTdCLFNBQVMsQ0FBQzhCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NsaWNlcy9hZHZzU2xpY2UuanM/NWE5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVNsaWNlfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuZXhwb3J0IGNvbnN0IGFkdnNTbGljZSA9Y3JlYXRlU2xpY2Uoe1xuICAgICBuYW1lOlwiYWR2ZXJ0aXNtZW50c1wiLFxuICAgICBpbml0aWFsU3RhdGU6e1xuICAgICAgICAgc2hvd0VkaXRGb3JtOnRydWUsXG4gICAgICAgICBhZHZzSXRlbXM6W10sXG4gICAgIH0sXG4gICAgIHJlZHVjZXJzOntcbiAgICAgICAgdG9nZ2xlOihzdGF0ZSxhY3Rpb24pPT57XG4gICAgICAgICAgICBzdGF0ZS5zaG93RWRpdEZvcm09IXN0YXRlLnNob3dFZGl0Rm9ybVxuICAgICAgICB9LFxuICAgICAgICBhZGRUb0l0ZW1zOihzdGF0ZSxhY3Rpb24pPT57XG4gICAgICAgICAgICBjb25zdCBhZGRlZEl0ZW09YWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICBzdGF0ZS5hZHZzSXRlbXM9Wy4uLnN0YXRlLmFkdnNJdGVtcyxhZGRlZEl0ZW1dO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVGcm9tSXRlbXM6KHN0YXRlLGFjdGlvbik9PntcbiAgICAgICAgICAgIGNvbnN0IHtpZH09YWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICBjb25zdCBuZXdsaXN0PXN0YXRlLmFkdnNJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICBpdGVtLmlkICE9PSBpZFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdsaXN0KVxuICAgICAgICAgICAgc3RhdGUuYWR2c0l0ZW1zPW5ld2xpc3RcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdEl0ZW06KHN0YXRlLGFjdGlvbik9PntcbiAgICAgICAgICAgIGNvbnN0IGVkaXRlZEl0ZW0gPWFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdJdGVtPXN0YXRlLmFkdnNJdGVtcy5maW5kKChpdGVtPT5pdGVtLmlkID09PSBlZGl0ZWRJdGVtLmlkKSk7XG4gICAgICAgICAgICBpZihleGlzdGluZ0l0ZW0pe1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nSXRlbS5pbWFnZT1lZGl0ZWRJdGVtLmltYWdlO1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nSXRlbS52aWRlbz1lZGl0ZWRJdGVtLnZpZGVvO1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nSXRlbS5mcm9tX3RpbWU9ZWRpdGVkSXRlbS5mcm9tX3RpbWU7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdJdGVtLnRvX3RpbWU9ZWRpdGVkSXRlbS50b190aW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICB9XG5cbn0pXG5leHBvcnQgY29uc3Qgc2VsZWN0SXRlbXM9KHN0YXRlKT0+c3RhdGUuYWR2ZXJ0aXNtZW50cy5hZHZzSXRlbXM7XG5leHBvcnQgY29uc3Qge3RvZ2dsZSxhZGRUb0l0ZW1zLHJlbW92ZUZyb21JdGVtcyxlZGl0SXRlbX09YWR2c1NsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBhZHZzU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJhZHZzU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwic2hvd0VkaXRGb3JtIiwiYWR2c0l0ZW1zIiwicmVkdWNlcnMiLCJ0b2dnbGUiLCJzdGF0ZSIsImFjdGlvbiIsImFkZFRvSXRlbXMiLCJhZGRlZEl0ZW0iLCJwYXlsb2FkIiwicmVtb3ZlRnJvbUl0ZW1zIiwiaWQiLCJuZXdsaXN0IiwiZmlsdGVyIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJlZGl0SXRlbSIsImVkaXRlZEl0ZW0iLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiaW1hZ2UiLCJ2aWRlbyIsImZyb21fdGltZSIsInRvX3RpbWUiLCJzZWxlY3RJdGVtcyIsImFkdmVydGlzbWVudHMiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./slices/advsSlice.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();