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
/*! exports provided: db, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"db\", function() { return db; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst initalFirebase = {\n  apiKey: \"AIzaSyA46dZ9wf3h0qetT3hF2jCGdWXO4Bj2_-I\",\n  authDomain: \"bankapp-e4ada.firebaseapp.com\",\n  databaseURL: \"https://bankapp-e4ada.firebaseio.com\",\n  projectId: \"bankapp-e4ada\",\n  storageBucket: \"bankapp-e4ada.appspot.com\",\n  messagingSenderId: \"1089262483581\"\n};\n\nif (!firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"apps\"].length) {\n  firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"initializeApp\"](initalFirebase);\n} else {\n  firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"app\"](); // if already initialized, use that one\n}\n\nconst db = firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"firestore\"]();\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2ZpcmViYXNlLnRzeD9kNTQ4Il0sIm5hbWVzIjpbImluaXRhbEZpcmViYXNlIiwiYXBpS2V5IiwicHJvY2VzcyIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NFTkRFUl9JRCIsImZpcmViYXNlIiwibGVuZ3RoIiwiZGIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUc7QUFDckJDLFFBQU0sRUFBRUMseUNBRGE7QUFFckJDLFlBQVUsRUFBRUQsK0JBRlM7QUFHckJFLGFBQVcsRUFBRUYsc0NBSFE7QUFJckJHLFdBQVMsRUFBRUgsZUFKVTtBQUtyQkksZUFBYSxFQUFFSiwyQkFMTTtBQU1yQkssbUJBQWlCLEVBQUVMLGVBQTBDTTtBQU54QyxDQUF2Qjs7QUFTQSxJQUFJLENBQUNDLGlEQUFBLENBQWNDLE1BQW5CLEVBQTJCO0FBQ3pCRCw0REFBQSxDQUF1QlQsY0FBdkI7QUFDRCxDQUZELE1BRU87QUFDTFMsa0RBQUEsR0FESyxDQUNXO0FBQ2pCOztBQUVNLE1BQU1FLEVBQUUsR0FBR0Ysc0RBQUEsRUFBWDtBQUVRQSx3R0FBZiIsImZpbGUiOiIuL3NyYy9jb25maWcvZmlyZWJhc2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XG5cbmNvbnN0IGluaXRhbEZpcmViYXNlID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0tFWSxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfRE9NQUlOLFxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfREFUQUJBU0UsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TRU5ERVJfSUQsXG59O1xuXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoaW5pdGFsRmlyZWJhc2UpO1xufSBlbHNlIHtcbiAgZmlyZWJhc2UuYXBwKCk7IC8vIGlmIGFscmVhZHkgaW5pdGlhbGl6ZWQsIHVzZSB0aGF0IG9uZVxufVxuXG5leHBvcnQgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/firebase.tsx\n");

/***/ }),

/***/ "./src/hooks/useAuthentication.tsx":
/*!*****************************************!*\
  !*** ./src/hooks/useAuthentication.tsx ***!
  \*****************************************/
/*! exports provided: useAuthentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuthentication\", function() { return useAuthentication; });\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebase */ \"./src/config/firebase.tsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useAuthentication() {\n  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useHistory\"])();\n  const db = _config_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firestore();\n  const ref = db.collection(\"User\"); //すでにログインしているユーザーを識別する\n\n  const checkAuthentication = () => {\n    _config_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth().onAuthStateChanged(async usr => {\n      if (usr) {\n        history.push(`/home`);\n      }\n    });\n  };\n\n  return [{\n    checkAuthentication,\n    ref\n  }];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL3VzZUF1dGhlbnRpY2F0aW9uLnRzeD80NzI4Il0sIm5hbWVzIjpbInVzZUF1dGhlbnRpY2F0aW9uIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwicmVmIiwiY29sbGVjdGlvbiIsImNoZWNrQXV0aGVudGljYXRpb24iLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNyIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxTQUFTQSxpQkFBVCxHQUE2QjtBQUNsQyxRQUFNQyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCO0FBRUEsUUFBTUMsRUFBRSxHQUFHQyx3REFBUSxDQUFDQyxTQUFULEVBQVg7QUFDQSxRQUFNQyxHQUFHLEdBQUdILEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLE1BQWQsQ0FBWixDQUprQyxDQU1sQzs7QUFDQSxRQUFNQyxtQkFBbUIsR0FBRyxNQUFNO0FBQ2hDSiw0REFBUSxDQUFDSyxJQUFULEdBQWdCQyxrQkFBaEIsQ0FBbUMsTUFBT0MsR0FBUCxJQUFxQztBQUN0RSxVQUFJQSxHQUFKLEVBQVM7QUFDUFYsZUFBTyxDQUFDVyxJQUFSLENBQWMsT0FBZDtBQUNEO0FBQ0YsS0FKRDtBQUtELEdBTkQ7O0FBUUEsU0FBTyxDQUFDO0FBQUVKLHVCQUFGO0FBQXVCRjtBQUF2QixHQUFELENBQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9ob29rcy91c2VBdXRoZW50aWNhdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZVwiO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoZW50aWNhdGlvbigpIHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xuICBjb25zdCByZWYgPSBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKTtcblxuICAvL+OBmeOBp+OBq+ODreOCsOOCpOODs+OBl+OBpuOBhOOCi+ODpuODvOOCtuODvOOCkuitmOWIpeOBmeOCi1xuICBjb25zdCBjaGVja0F1dGhlbnRpY2F0aW9uID0gKCkgPT4ge1xuICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoYXN5bmMgKHVzcjogZmlyZWJhc2UuVXNlciB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1c3IpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKGAvaG9tZWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBbeyBjaGVja0F1dGhlbnRpY2F0aW9uLCByZWYgfV0gYXMgY29uc3Q7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useAuthentication.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var hooks_useAuthentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/useAuthentication */ \"./src/hooks/useAuthentication.tsx\");\nvar _jsxFileName = \"/Users/yoko/Desktop/YOKOHAMABANK/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Index = () => {\n  const {\n    Title\n  } = antd__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"];\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const [useAuthenticationContents] = Object(hooks_useAuthentication__WEBPACK_IMPORTED_MODULE_4__[\"useAuthentication\"])();\n\n  const submitHanfler = () => {\n    const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth.GoogleAuthProvider();\n    firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth().signInWithPopup(provider).then(result => {\n      var _result$user, _result$additionalUse;\n\n      const usersInfo = {\n        userID: [(_result$user = result.user) === null || _result$user === void 0 ? void 0 : _result$user.uid],\n        name: (_result$additionalUse = result.additionalUserInfo) === null || _result$additionalUse === void 0 ? void 0 : _result$additionalUse.username\n      };\n      useAuthenticationContents.ref.add(usersInfo);\n    }).then(() => {\n      // to do https://zenn.dev/d_suke/articles/0fc7670b2da750f6dd87 pregetch\n      router.push(`/home`);\n    }).catch(error => {\n      console.log(error);\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"bg-blue-5 text-white h-screen\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"grid grid-cols-8 gap-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"mt-80 m-auto col-span-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: \"text-white\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, \"\\u30ED\\u30B0\\u30A4\\u30F3\\u3057\\u3066\\u5BB6\\u8A08\\u7C3F\\u3092\\u8A18\\u9332\\u3057\\u3088\\u3046\\uFF01\")), __jsx(\"div\", {\n    className: \"pt-10 m-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: \"border-white transition delay-200 py-2 rounded-xl px-10 border-2 hover:bg-white hover:text-blue-5\",\n    onClick: submitHanfler,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"google\\u30ED\\u30B0\\u30A4\\u30F3\"))), __jsx(\"div\", {\n    className: \"col-span-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    className: \" h-screen\",\n    src: \"Img/undraw_mobile_login_ikmv.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSW5kZXgiLCJUaXRsZSIsIlR5cG9ncmFwaHkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoZW50aWNhdGlvbkNvbnRlbnRzIiwidXNlQXV0aGVudGljYXRpb24iLCJzdWJtaXRIYW5mbGVyIiwicHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzdWx0IiwidXNlcnNJbmZvIiwidXNlcklEIiwidXNlciIsInVpZCIsIm5hbWUiLCJhZGRpdGlvbmFsVXNlckluZm8iLCJ1c2VybmFtZSIsInJlZiIsImFkZCIsInB1c2giLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFlLEdBQUcsTUFBTTtBQUM1QixRQUFNO0FBQUVDO0FBQUYsTUFBWUMsK0NBQWxCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU0sQ0FBQ0MseUJBQUQsSUFBOEJDLGlGQUFpQixFQUFyRDs7QUFDQSxRQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUMxQixVQUFNQyxRQUFRLEdBQUcsSUFBSUMsbURBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxrQkFBbEIsRUFBakI7QUFDQUYsdURBQVEsQ0FDTEMsSUFESCxHQUVHRSxlQUZILENBRW1CSixRQUZuQixFQUdHSyxJQUhILENBR1NDLE1BQUQsSUFBWTtBQUFBOztBQUNoQixZQUFNQyxTQUFTLEdBQUc7QUFDaEJDLGNBQU0sRUFBRSxpQkFBQ0YsTUFBTSxDQUFDRyxJQUFSLGlEQUFDLGFBQWFDLEdBQWQsQ0FEUTtBQUVoQkMsWUFBSSwyQkFBRUwsTUFBTSxDQUFDTSxrQkFBVCwwREFBRSxzQkFBMkJDO0FBRmpCLE9BQWxCO0FBSUFoQiwrQkFBeUIsQ0FBQ2lCLEdBQTFCLENBQThCQyxHQUE5QixDQUFrQ1IsU0FBbEM7QUFDRCxLQVRILEVBVUdGLElBVkgsQ0FVUSxNQUFNO0FBQ1Y7QUFDQVYsWUFBTSxDQUFDcUIsSUFBUCxDQUFhLE9BQWI7QUFDRCxLQWJILEVBY0dDLEtBZEgsQ0FjVUMsS0FBRCxJQUFXO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEtBaEJIO0FBaUJELEdBbkJEOztBQW9CQSxTQUNFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3R0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsbUdBRFo7QUFFRSxXQUFPLEVBQUVuQixhQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsQ0FKRixDQURGLEVBY0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixPQUFHLEVBQUMsa0NBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWRGLENBREYsQ0FERjtBQXNCRCxDQTlDRDs7QUFnRGVQLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgdXNlQXV0aGVudGljYXRpb24gfSBmcm9tIFwiaG9va3MvdXNlQXV0aGVudGljYXRpb25cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5jb25zdCBJbmRleDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlQXV0aGVudGljYXRpb25Db250ZW50c10gPSB1c2VBdXRoZW50aWNhdGlvbigpO1xuICBjb25zdCBzdWJtaXRIYW5mbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJzSW5mbyA9IHtcbiAgICAgICAgICB1c2VySUQ6IFtyZXN1bHQudXNlcj8udWlkXSxcbiAgICAgICAgICBuYW1lOiByZXN1bHQuYWRkaXRpb25hbFVzZXJJbmZvPy51c2VybmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgdXNlQXV0aGVudGljYXRpb25Db250ZW50cy5yZWYuYWRkKHVzZXJzSW5mbyk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyB0byBkbyBodHRwczovL3plbm4uZGV2L2Rfc3VrZS9hcnRpY2xlcy8wZmM3NjcwYjJkYTc1MGY2ZGQ4NyBwcmVnZXRjaFxuICAgICAgICByb3V0ZXIucHVzaChgL2hvbWVgKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01IHRleHQtd2hpdGUgaC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtOCBnYXAtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTgwIG0tYXV0byBjb2wtc3Bhbi00XCI+XG4gICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPuODreOCsOOCpOODs+OBl+OBpuWutuioiOewv+OCkuiomOmMsuOBl+OCiOOBhu+8gTwvc3Bhbj5cbiAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTAgbS1hdXRvXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci13aGl0ZSB0cmFuc2l0aW9uIGRlbGF5LTIwMCBweS0yIHJvdW5kZWQteGwgcHgtMTAgYm9yZGVyLTIgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibHVlLTVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRIYW5mbGVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBnb29nbGXjg63jgrDjgqTjg7NcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCIgaC1zY3JlZW5cIiBzcmM9XCJJbWcvdW5kcmF3X21vYmlsZV9sb2dpbl9pa212LnBuZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

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

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCI/NTNiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1yb3V0ZXItZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ })

/******/ });