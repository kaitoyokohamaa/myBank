module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/firebase.tsx":
/*!*********************************!*\
  !*** ./src/config/firebase.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst initalFirebase = {\n  apiKey: \"AIzaSyA46dZ9wf3h0qetT3hF2jCGdWXO4Bj2_-I\",\n  authDomain: \"bankapp-e4ada.firebaseapp.com\",\n  databaseURL: \"https://bankapp-e4ada.firebaseio.com\",\n  projectId: \"bankapp-e4ada\",\n  storageBucket: \"bankapp-e4ada.appspot.com\",\n  messagingSenderId: \"1089262483581\"\n}; // firebase.initializeApp(initalFirebase);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(initalFirebase) : firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2ZpcmViYXNlLnRzeD9kNTQ4Il0sIm5hbWVzIjpbImluaXRhbEZpcmViYXNlIiwiYXBpS2V5IiwicHJvY2VzcyIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NFTkRFUl9JRCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhcHAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHO0FBQ3JCQyxRQUFNLEVBQUVDLHlDQURhO0FBRXJCQyxZQUFVLEVBQUVELCtCQUZTO0FBR3JCRSxhQUFXLEVBQUVGLHNDQUhRO0FBSXJCRyxXQUFTLEVBQUVILGVBSlU7QUFLckJJLGVBQWEsRUFBRUosMkJBTE07QUFNckJLLG1CQUFpQixFQUFFTCxlQUEwQ007QUFOeEMsQ0FBdkIsQyxDQVNBOztBQUVlLGdFQUFDQywrQ0FBUSxDQUFDQyxJQUFULENBQWNDLE1BQWYsR0FDWEYsK0NBQVEsQ0FBQ0csYUFBVCxDQUF1QlosY0FBdkIsQ0FEVyxHQUVYUywrQ0FBUSxDQUFDSSxHQUFULEVBRkoiLCJmaWxlIjoiLi9zcmMvY29uZmlnL2ZpcmViYXNlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5jb25zdCBpbml0YWxGaXJlYmFzZSA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9LRVksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0RPTUFJTixcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0RBVEFCQVNFLFxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU0VOREVSX0lELFxufTtcblxuLy8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChpbml0YWxGaXJlYmFzZSk7XG5cbmV4cG9ydCBkZWZhdWx0ICFmaXJlYmFzZS5hcHBzLmxlbmd0aFxuICA/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoaW5pdGFsRmlyZWJhc2UpXG4gIDogZmlyZWJhc2UuYXBwKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/firebase.tsx\n");

/***/ }),

/***/ "./src/hooks/useAuthentication.tsx":
/*!*****************************************!*\
  !*** ./src/hooks/useAuthentication.tsx ***!
  \*****************************************/
/*! exports provided: useAuthentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuthentication\", function() { return useAuthentication; });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config/firebase */ \"./src/config/firebase.tsx\");\n\n\nfunction useAuthentication() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])();\n  console.log(config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  const db = config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].firestore();\n  const ref = db.collection(\"User\"); //すでにログインしているユーザーを識別する\n\n  const checkAuthentication = () => {\n    config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth().onAuthStateChanged(async usr => {\n      if (usr) {\n        router.push(`/home`);\n      }\n    });\n  };\n\n  return [{\n    checkAuthentication,\n    ref\n  }];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlQXV0aGVudGljYXRpb24udHN4PzE2Y2MiXSwibmFtZXMiOlsidXNlQXV0aGVudGljYXRpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZmlyZWJhc2UiLCJkYiIsImZpcmVzdG9yZSIsInJlZiIsImNvbGxlY3Rpb24iLCJjaGVja0F1dGhlbnRpY2F0aW9uIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzciIsInB1c2giXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sU0FBU0EsaUJBQVQsR0FBNkI7QUFDbEMsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsdURBQVo7QUFDQSxRQUFNQyxFQUFFLEdBQUdELHVEQUFRLENBQUNFLFNBQVQsRUFBWDtBQUNBLFFBQU1DLEdBQUcsR0FBR0YsRUFBRSxDQUFDRyxVQUFILENBQWMsTUFBZCxDQUFaLENBTGtDLENBT2xDOztBQUNBLFFBQU1DLG1CQUFtQixHQUFHLE1BQU07QUFDaENMLDJEQUFRLENBQUNNLElBQVQsR0FBZ0JDLGtCQUFoQixDQUFtQyxNQUFPQyxHQUFQLElBQXFDO0FBQ3RFLFVBQUlBLEdBQUosRUFBUztBQUNQWixjQUFNLENBQUNhLElBQVAsQ0FBYSxPQUFiO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FORDs7QUFRQSxTQUFPLENBQUM7QUFBRUosdUJBQUY7QUFBdUJGO0FBQXZCLEdBQUQsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3VzZUF1dGhlbnRpY2F0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJjb25maWcvZmlyZWJhc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGhlbnRpY2F0aW9uKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zb2xlLmxvZyhmaXJlYmFzZSk7XG4gIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gIGNvbnN0IHJlZiA9IGRiLmNvbGxlY3Rpb24oXCJVc2VyXCIpO1xuXG4gIC8v44GZ44Gn44Gr44Ot44Kw44Kk44Oz44GX44Gm44GE44KL44Om44O844K244O844KS6K2Y5Yil44GZ44KLXG4gIGNvbnN0IGNoZWNrQXV0aGVudGljYXRpb24gPSAoKSA9PiB7XG4gICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChhc3luYyAodXNyOiBmaXJlYmFzZS5Vc2VyIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVzcikge1xuICAgICAgICByb3V0ZXIucHVzaChgL2hvbWVgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gW3sgY2hlY2tBdXRoZW50aWNhdGlvbiwgcmVmIH1dIGFzIGNvbnN0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useAuthentication.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var hooks_useAuthentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/useAuthentication */ \"./src/hooks/useAuthentication.tsx\");\nvar _jsxFileName = \"/Users/yoko/Desktop/YOKOHAMABANK/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Index = () => {\n  const {\n    Title\n  } = antd__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"];\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const [useAuthenticationContents] = Object(hooks_useAuthentication__WEBPACK_IMPORTED_MODULE_4__[\"useAuthentication\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    useAuthenticationContents.checkAuthentication();\n  }, []);\n\n  const submitHanfler = () => {\n    const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth.GoogleAuthProvider();\n    firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth().signInWithPopup(provider).then(result => {\n      var _result$user, _result$additionalUse, _result$additionalUse2;\n\n      const usersInfo = {\n        userID: [(_result$user = result.user) === null || _result$user === void 0 ? void 0 : _result$user.uid],\n        name: (_result$additionalUse = result.additionalUserInfo) === null || _result$additionalUse === void 0 ? void 0 : (_result$additionalUse2 = _result$additionalUse.profile) === null || _result$additionalUse2 === void 0 ? void 0 : _result$additionalUse2.name\n      };\n      useAuthenticationContents.ref.add(usersInfo);\n    }).then(() => {\n      // to do https://zenn.dev/d_suke/articles/0fc7670b2da750f6dd87 pregetch\n      router.push(`/home`);\n    }).catch(error => {\n      console.log(error);\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"bg-blue-5 text-white h-screen\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"grid grid-cols-8 gap-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"mt-80 m-auto col-span-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: \"text-white\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"\\u30ED\\u30B0\\u30A4\\u30F3\\u3057\\u3066\\u5BB6\\u8A08\\u7C3F\\u3092\\u8A18\\u9332\\u3057\\u3088\\u3046\\uFF01\")), __jsx(\"div\", {\n    className: \"pt-10 m-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: \"border-white transition delay-200 py-2 rounded-xl px-10 border-2 hover:bg-white hover:text-blue-5\",\n    onClick: submitHanfler,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, \"google\\u30ED\\u30B0\\u30A4\\u30F3\"))), __jsx(\"div\", {\n    className: \"col-span-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    className: \" h-screen\",\n    src: \"Img/undraw_mobile_login_ikmv.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSW5kZXgiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoZW50aWNhdGlvbkNvbnRlbnRzIiwidXNlQXV0aGVudGljYXRpb24iLCJ1c2VFZmZlY3QiLCJjaGVja0F1dGhlbnRpY2F0aW9uIiwic3VibWl0SGFuZmxlciIsInByb3ZpZGVyIiwiZmlyZWJhc2UiLCJhdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwidGhlbiIsInJlc3VsdCIsInVzZXJzSW5mbyIsInVzZXJJRCIsInVzZXIiLCJ1aWQiLCJuYW1lIiwiYWRkaXRpb25hbFVzZXJJbmZvIiwicHJvZmlsZSIsInJlZiIsImFkZCIsInB1c2giLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFlLEdBQUcsTUFBTTtBQUM1QixRQUFNO0FBQUVDO0FBQUYsTUFBWUMsK0NBQWxCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU0sQ0FBQ0MseUJBQUQsSUFBOEJDLGlGQUFpQixFQUFyRDtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZEYsNkJBQXlCLENBQUNHLG1CQUExQjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBR0EsUUFBTUMsYUFBYSxHQUFHLE1BQU07QUFDMUIsVUFBTUMsUUFBUSxHQUFHLElBQUlDLG1EQUFRLENBQUNDLElBQVQsQ0FBY0Msa0JBQWxCLEVBQWpCO0FBQ0FGLHVEQUFRLENBQ0xDLElBREgsR0FFR0UsZUFGSCxDQUVtQkosUUFGbkIsRUFHR0ssSUFISCxDQUdTQyxNQUFELElBQVk7QUFBQTs7QUFDaEIsWUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxjQUFNLEVBQUUsaUJBQUNGLE1BQU0sQ0FBQ0csSUFBUixpREFBQyxhQUFhQyxHQUFkLENBRFE7QUFFaEJDLFlBQUksMkJBQUVMLE1BQU0sQ0FBQ00sa0JBQVQsb0ZBQUUsc0JBQTJCQyxPQUE3QiwyREFBRSx1QkFBb0NGO0FBRjFCLE9BQWxCO0FBS0FoQiwrQkFBeUIsQ0FBQ21CLEdBQTFCLENBQThCQyxHQUE5QixDQUFrQ1IsU0FBbEM7QUFDRCxLQVZILEVBV0dGLElBWEgsQ0FXUSxNQUFNO0FBQ1Y7QUFDQVosWUFBTSxDQUFDdUIsSUFBUCxDQUFhLE9BQWI7QUFDRCxLQWRILEVBZUdDLEtBZkgsQ0FlVUMsS0FBRCxJQUFXO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEtBakJIO0FBa0JELEdBcEJEOztBQXFCQSxTQUNFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3R0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsbUdBRFo7QUFFRSxXQUFPLEVBQUVuQixhQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsQ0FKRixDQURGLEVBY0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixPQUFHLEVBQUMsa0NBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWRGLENBREYsQ0FERjtBQXNCRCxDQWxERDs7QUFvRGVULG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgdXNlQXV0aGVudGljYXRpb24gfSBmcm9tIFwiaG9va3MvdXNlQXV0aGVudGljYXRpb25cIjtcblxuY29uc3QgSW5kZXg6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZUF1dGhlbnRpY2F0aW9uQ29udGVudHNdID0gdXNlQXV0aGVudGljYXRpb24oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1c2VBdXRoZW50aWNhdGlvbkNvbnRlbnRzLmNoZWNrQXV0aGVudGljYXRpb24oKTtcbiAgfSwgW10pO1xuICBjb25zdCBzdWJtaXRIYW5mbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJzSW5mbyA9IHtcbiAgICAgICAgICB1c2VySUQ6IFtyZXN1bHQudXNlcj8udWlkXSxcbiAgICAgICAgICBuYW1lOiByZXN1bHQuYWRkaXRpb25hbFVzZXJJbmZvPy5wcm9maWxlPy5uYW1lLFxuICAgICAgICB9O1xuXG4gICAgICAgIHVzZUF1dGhlbnRpY2F0aW9uQ29udGVudHMucmVmLmFkZCh1c2Vyc0luZm8pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gdG8gZG8gaHR0cHM6Ly96ZW5uLmRldi9kX3N1a2UvYXJ0aWNsZXMvMGZjNzY3MGIyZGE3NTBmNmRkODcgcHJlZ2V0Y2hcbiAgICAgICAgcm91dGVyLnB1c2goYC9ob21lYCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNSB0ZXh0LXdoaXRlIGgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTggZ2FwLThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04MCBtLWF1dG8gY29sLXNwYW4tNFwiPlxuICAgICAgICAgIDxUaXRsZT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj7jg63jgrDjgqTjg7PjgZfjgablrrboqIjnsL/jgpLoqJjpjLLjgZfjgojjgYbvvIE8L3NwYW4+XG4gICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIG0tYXV0b1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItd2hpdGUgdHJhbnNpdGlvbiBkZWxheS0yMDAgcHktMiByb3VuZGVkLXhsIHB4LTEwIGJvcmRlci0yIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmx1ZS01XCJcbiAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0SGFuZmxlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZ29vZ2xl44Ot44Kw44Kk44OzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiIGgtc2NyZWVuXCIgc3JjPVwiSW1nL3VuZHJhd19tb2JpbGVfbG9naW5faWttdi5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/firestore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIj8wNjI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2ZpcmVzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/firestore\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });