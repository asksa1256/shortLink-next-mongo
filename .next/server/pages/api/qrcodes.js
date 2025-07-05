"use strict";
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
exports.id = "pages/api/qrcodes";
exports.ids = ["pages/api/qrcodes"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/dbConnect.ts":
/*!*************************!*\
  !*** ./db/dbConnect.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    const MONGODB_URI = process.env.MONGODB_URI;\n    if (!MONGODB_URI) {\n        throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n    }\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9kYkNvbm5lY3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBS2hDLElBQUlDLFNBQVNDLE9BQU9GO0FBRXBCLElBQUksQ0FBQ0MsUUFBUTtJQUNYQSxTQUFTQyxPQUFPRixXQUFXO1FBQUVHLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRUEsZUFBZUM7SUFDYixNQUFNQyxjQUFjQyxRQUFRQyxJQUFJRjtJQUVoQyxJQUFJLENBQUNBLGFBQWE7UUFDaEIsTUFBTSxJQUFJRyxNQUNSO0lBRUo7SUFFQSxJQUFJUixPQUFPRSxNQUFNO1FBQ2YsT0FBT0YsT0FBT0U7SUFDaEI7SUFDQSxJQUFJLENBQUNGLE9BQU9HLFNBQVM7UUFDbkIsTUFBTU0sT0FBTztZQUNYQyxnQkFBZ0I7UUFDbEI7UUFDQVYsT0FBT0csVUFBVUosdURBQWdCWSxDQUFDTixhQUFhSSxNQUFNRyxLQUFLLENBQUNiO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUNBLElBQUk7UUFDRkMsT0FBT0UsT0FBTyxNQUFNRixPQUFPRztJQUM3QixFQUFFLE9BQU9VLEdBQUc7UUFDVmIsT0FBT0csVUFBVTtRQUNqQixNQUFNVTtJQUNSO0lBRUEsT0FBT2IsT0FBT0U7QUFDaEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0aXQvLi9kYi9kYkNvbm5lY3QudHM/ZDY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICB2YXIgbW9uZ29vc2U6IGFueTsgLy8gVGhpcyBtdXN0IGJlIGEgYHZhcmAgYW5kIG5vdCBhIGBsZXQgLyBjb25zdGBcclxufVxyXG5cclxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcclxuXHJcbmlmICghY2FjaGVkKSB7XHJcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICBjb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJITtcclxuXHJcbiAgaWYgKCFNT05HT0RCX1VSSSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsXCJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoY2FjaGVkLmNvbm4pIHtcclxuICAgIHJldHVybiBjYWNoZWQuY29ubjtcclxuICB9XHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/dbConnect.ts\n");

/***/ }),

/***/ "(api)/./pages/api/qrcodes/index.js":
/*!************************************!*\
  !*** ./pages/api/qrcodes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConnect */ \"(api)/./db/dbConnect.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    console.log((mongoose__WEBPACK_IMPORTED_MODULE_1___default().connection.readyState));\n    switch(req.method){\n        case \"GET\":\n            res.status(200).send([\n                {\n                    id: \"abc\",\n                    title: \"위키피디아 Next.js\",\n                    url: \"https://en.wikipedia.org/wiki/Next.js\"\n                },\n                {\n                    id: \"def\",\n                    title: \"코드잇 자유게시판\",\n                    url: \"https://codeit.kr/community/general\"\n                },\n                {\n                    id: \"ghi\",\n                    title: \"코드잇 질문답변\",\n                    url: \"https://www.codeit.kr/community/questions\"\n                }\n            ]);\n            break;\n        case \"POST\":\n            res.status(201).send({\n                title: \"위키피디아 Next.js\",\n                url: \"https://en.wikipedia.org/wiki/Next.js\"\n            });\n            break;\n        default:\n            res.status(404).send();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXJjb2Rlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQ1A7QUFFakIsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1KLHlEQUFTQTtJQUNmSyxRQUFRQyxJQUFJTCx1RUFBOEJPO0lBRTFDLE9BQVFMLElBQUlNO1FBQ1YsS0FBSztZQUNITCxJQUFJTSxPQUFPLEtBQUtDLEtBQUs7Z0JBQ25CO29CQUNFQyxJQUFJO29CQUNKQyxPQUFPO29CQUNQQyxLQUFLO2dCQUNQO2dCQUNBO29CQUNFRixJQUFJO29CQUNKQyxPQUFPO29CQUNQQyxLQUFLO2dCQUNQO2dCQUNBO29CQUNFRixJQUFJO29CQUNKQyxPQUFPO29CQUNQQyxLQUFLO2dCQUNQO2FBQ0Q7WUFDRDtRQUNGLEtBQUs7WUFDSFYsSUFBSU0sT0FBTyxLQUFLQyxLQUFLO2dCQUNuQkUsT0FBTztnQkFDUEMsS0FBSztZQUNQO1lBQ0E7UUFDRjtZQUNFVixJQUFJTSxPQUFPLEtBQUtDO0lBQ3BCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGl0Ly4vcGFnZXMvYXBpL3FyY29kZXMvaW5kZXguanM/MDJkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2RiL2RiQ29ubmVjdFwiO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgY29uc29sZS5sb2cobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlKTtcclxuXHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJhYmNcIixcclxuICAgICAgICAgIHRpdGxlOiBcIuychO2CpO2UvOuUlOyVhCBOZXh0LmpzXCIsXHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTmV4dC5qc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwiZGVmXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCLsvZTrk5zsnocg7J6Q7Jyg6rKM7Iuc7YyQXCIsXHJcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlaXQua3IvY29tbXVuaXR5L2dlbmVyYWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcImdoaVwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwi7L2U65Oc7J6HIOyniOusuOuLteuzgFwiLFxyXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmNvZGVpdC5rci9jb21tdW5pdHkvcXVlc3Rpb25zXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgcmVzLnN0YXR1cygyMDEpLnNlbmQoe1xyXG4gICAgICAgIHRpdGxlOiBcIuychO2CpO2UvOuUlOyVhCBOZXh0LmpzXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05leHQuanNcIixcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIm1vbmdvb3NlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsIm1ldGhvZCIsInN0YXR1cyIsInNlbmQiLCJpZCIsInRpdGxlIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/qrcodes/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/qrcodes/index.js"));
module.exports = __webpack_exports__;

})();