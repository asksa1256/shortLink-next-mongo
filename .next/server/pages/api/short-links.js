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
exports.id = "pages/api/short-links";
exports.ids = ["pages/api/short-links"];
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

/***/ "(api)/./db/models/ShortLink.ts":
/*!********************************!*\
  !*** ./db/models/ShortLink.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst shortLinkSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        default: \"\"\n    },\n    url: {\n        type: String,\n        default: \"\"\n    },\n    shortUrl: {\n        type: String,\n        default: \"\"\n    }\n}, {\n    timestamps: true\n});\nconst ShortLink = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.ShortLink) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"ShortLink\", shortLinkSchema); // 동일한 모델을 여러번 만들지 않기 위한 조건문\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortLink);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvU2hvcnRMaW5rLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUUzQyxNQUFNQyxrQkFBa0IsSUFBSUQsd0RBQWVFLENBQ3pDO0lBQ0VDLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsU0FBUztJQUFHO0lBQ25DQyxLQUFLO1FBQUVILE1BQU1DO1FBQVFDLFNBQVM7SUFBRztJQUNqQ0UsVUFBVTtRQUFFSixNQUFNQztRQUFRQyxTQUFTO0lBQUc7QUFDeEMsR0FDQTtJQUNFRyxZQUFZO0FBQ2Q7QUFHRixNQUFNQyxZQUNKVixrRUFBNEIsSUFBSUEscURBQWNZLENBQUMsYUFBYVgsa0JBQWtCLDRCQUE0QjtBQUU1RyxpRUFBZVMsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0aXQvLi9kYi9tb2RlbHMvU2hvcnRMaW5rLnRzPzE4ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IG1vbmdvIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBzaG9ydExpbmtTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIHRpdGxlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxyXG4gICAgdXJsOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LCAvLyDsm5Drs7gg7KO87IaMXHJcbiAgICBzaG9ydFVybDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSwgLy8g7Ken7JWE7KeEIOyjvFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSwgLy8g66qo6424IOyDneyEsSDsi5wgdGltZXN0YW1wIOywjeq4sCDshKTsoJVcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBTaG9ydExpbmsgPVxyXG4gIG1vbmdvb3NlLm1vZGVsc1tcIlNob3J0TGlua1wiXSB8fCBtb25nb29zZS5tb2RlbChcIlNob3J0TGlua1wiLCBzaG9ydExpbmtTY2hlbWEpOyAvLyDrj5nsnbztlZwg66qo64247J2EIOyXrOufrOuyiCDrp4zrk6Tsp4Ag7JWK6riwIOychO2VnCDsobDqsbTrrLhcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3J0TGluaztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwic2hvcnRMaW5rU2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInVybCIsInNob3J0VXJsIiwidGltZXN0YW1wcyIsIlNob3J0TGluayIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/models/ShortLink.ts\n");

/***/ }),

/***/ "(api)/./pages/api/short-links/index.js":
/*!****************************************!*\
  !*** ./pages/api/short-links/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConnect */ \"(api)/./db/dbConnect.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/db/models/ShortLink */ \"(api)/./db/models/ShortLink.ts\");\n\n\n\nasync function handler(req, res) {\n    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    switch(req.method){\n        case \"GET\":\n            const shortLinks = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n            res.send(shortLinks);\n            break;\n        case \"POST\":\n            const newShortLink = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(req.body);\n            res.status(201).send(newShortLink);\n            break;\n        default:\n            res.status(404).send();\n    }\n// return res.send(\"안녕 API!\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvcnQtbGlua3MvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDUDtBQUNjO0FBRS9CLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxNQUFNTCx5REFBU0E7SUFFZixPQUFRSSxJQUFJRTtRQUNWLEtBQUs7WUFDSCxNQUFNQyxhQUFhLE1BQU1MLGlFQUFjTTtZQUN2Q0gsSUFBSUksS0FBS0Y7WUFDVDtRQUNGLEtBQUs7WUFDSCxNQUFNRyxlQUFlLE1BQU1SLG1FQUFnQlMsQ0FBQ1AsSUFBSVE7WUFDaERQLElBQUlRLE9BQU8sS0FBS0osS0FBS0M7WUFDckI7UUFDRjtZQUNFTCxJQUFJUSxPQUFPLEtBQUtKO0lBQ3BCO0FBRUEsOEJBQThCO0FBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL3BhZ2VzL2FwaS9zaG9ydC1saW5rcy9pbmRleC5qcz9lNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvZGIvZGJDb25uZWN0XCI7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IFNob3J0TGluayBmcm9tIFwiQC9kYi9tb2RlbHMvU2hvcnRMaW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgYXdhaXQgZGJDb25uZWN0KCk7XHJcblxyXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICBjb25zdCBzaG9ydExpbmtzID0gYXdhaXQgU2hvcnRMaW5rLmZpbmQoKTtcclxuICAgICAgcmVzLnNlbmQoc2hvcnRMaW5rcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgY29uc3QgbmV3U2hvcnRMaW5rID0gYXdhaXQgU2hvcnRMaW5rLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKG5ld1Nob3J0TGluayk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoKTtcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiByZXMuc2VuZChcIuyViOuFlSBBUEkhXCIpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJtb25nb29zZSIsIlNob3J0TGluayIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzaG9ydExpbmtzIiwiZmluZCIsInNlbmQiLCJuZXdTaG9ydExpbmsiLCJjcmVhdGUiLCJib2R5Iiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/short-links/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/short-links/index.js"));
module.exports = __webpack_exports__;

})();