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

/***/ "(api)/./db/models/QRCode.ts":
/*!*****************************!*\
  !*** ./db/models/QRCode.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst qrCodeSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        default: \"\"\n    },\n    url: {\n        type: String,\n        default: \"\"\n    }\n}, {\n    timestamps: true\n});\nconst QRCode = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.QRCode) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"QRCode\", qrCodeSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QRCode);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUVJDb2RlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxlQUFlLElBQUlELHdEQUFlRSxDQUN0QztJQUNFQyxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFNBQVM7SUFBRztJQUNuQ0MsS0FBSztRQUFFSCxNQUFNQztRQUFRQyxTQUFTO0lBQUc7QUFDbkMsR0FDQTtJQUNFRSxZQUFZO0FBQ2Q7QUFHRixNQUFNQyxTQUNKVCwrREFBeUIsSUFBSUEscURBQWNXLENBQUMsVUFBVVY7QUFFeEQsaUVBQWVRLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGl0Ly4vZGIvbW9kZWxzL1FSQ29kZS50cz8wNTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IHFyQ29kZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXHJcbiAgICB1cmw6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IFFSQ29kZSA9XHJcbiAgbW9uZ29vc2UubW9kZWxzW1wiUVJDb2RlXCJdIHx8IG1vbmdvb3NlLm1vZGVsKFwiUVJDb2RlXCIsIHFyQ29kZVNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRUkNvZGU7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInFyQ29kZVNjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ1cmwiLCJ0aW1lc3RhbXBzIiwiUVJDb2RlIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/models/QRCode.ts\n");

/***/ }),

/***/ "(api)/./pages/api/qrcodes/index.js":
/*!************************************!*\
  !*** ./pages/api/qrcodes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConnect */ \"(api)/./db/dbConnect.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_models_QRCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/db/models/QRCode */ \"(api)/./db/models/QRCode.ts\");\n\n\n\nasync function handler(req, res) {\n    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    // console.log(mongoose.connection.readyState);\n    // const props = Object.keys(QRCode.schema.paths);\n    // console.log(props);\n    const { id  } = req.query;\n    switch(req.method){\n        case \"GET\":\n            const qrcodes = await _db_models_QRCode__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n            res.send(qrcodes);\n            break;\n        case \"POST\":\n            const newQrcode = await _db_models_QRCode__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(req.body);\n            res.status(201).send(newQrcode);\n            break;\n        default:\n            res.status(404).send();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXJjb2Rlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNQO0FBQ1E7QUFFekIsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1MLHlEQUFTQTtJQUNmLCtDQUErQztJQUMvQyxrREFBa0Q7SUFDbEQsc0JBQXNCO0lBQ3RCLE1BQU0sRUFBRU0sR0FBRSxFQUFFLEdBQUdGLElBQUlHO0lBRW5CLE9BQVFILElBQUlJO1FBQ1YsS0FBSztZQUNILE1BQU1DLFVBQVUsTUFBTVAsOERBQVdRO1lBQ2pDTCxJQUFJTSxLQUFLRjtZQUNUO1FBRUYsS0FBSztZQUNILE1BQU1HLFlBQVksTUFBTVYsZ0VBQWFXLENBQUNULElBQUlVO1lBQzFDVCxJQUFJVSxPQUFPLEtBQUtKLEtBQUtDO1lBQ3JCO1FBRUY7WUFDRVAsSUFBSVUsT0FBTyxLQUFLSjtJQUNwQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL3BhZ2VzL2FwaS9xcmNvZGVzL2luZGV4LmpzPzAyZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9kYi9kYkNvbm5lY3RcIjtcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgUVJDb2RlIGZyb20gXCJAL2RiL21vZGVscy9RUkNvZGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAvLyBjb25zb2xlLmxvZyhtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUpO1xyXG4gIC8vIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoUVJDb2RlLnNjaGVtYS5wYXRocyk7XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgIGNvbnN0IHFyY29kZXMgPSBhd2FpdCBRUkNvZGUuZmluZCgpO1xyXG4gICAgICByZXMuc2VuZChxcmNvZGVzKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgY29uc3QgbmV3UXJjb2RlID0gYXdhaXQgUVJDb2RlLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKG5ld1FyY29kZSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJtb25nb29zZSIsIlFSQ29kZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwibWV0aG9kIiwicXJjb2RlcyIsImZpbmQiLCJzZW5kIiwibmV3UXJjb2RlIiwiY3JlYXRlIiwiYm9keSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/qrcodes/index.js\n");

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