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
exports.id = "pages/api/short-links/[id]";
exports.ids = ["pages/api/short-links/[id]"];
exports.modules = {

/***/ "(api)/./pages/api/short-links/[id].js":
/*!***************************************!*\
  !*** ./pages/api/short-links/[id].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    // return res.send(req.query);\n    // return res.send(req.body);\n    // return res.send(req.cookies);\n    switch(req.method){\n        case \"GET\":\n            res.send(\"ShortLink 조회\");\n            break;\n        case \"PATCH\":\n            res.send(\"ShortLink 수정\");\n            break;\n        default:\n            res.send();\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvcnQtbGlua3MvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3RDLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLE9BQVFELElBQUlFO1FBQ1YsS0FBSztZQUNIRCxJQUFJRSxLQUFLO1lBQ1Q7UUFDRixLQUFLO1lBQ0hGLElBQUlFLEtBQUs7WUFDVDtRQUNGO1lBQ0VGLElBQUlFO1lBQ0o7SUFDSjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL3BhZ2VzL2FwaS9zaG9ydC1saW5rcy9baWRdLmpzPzE3MGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIC8vIHJldHVybiByZXMuc2VuZChyZXEucXVlcnkpO1xyXG4gIC8vIHJldHVybiByZXMuc2VuZChyZXEuYm9keSk7XHJcbiAgLy8gcmV0dXJuIHJlcy5zZW5kKHJlcS5jb29raWVzKTtcclxuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgcmVzLnNlbmQoXCJTaG9ydExpbmsg7KGw7ZqMXCIpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJQQVRDSFwiOlxyXG4gICAgICByZXMuc2VuZChcIlNob3J0TGluayDsiJjsoJVcIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnNlbmQoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/short-links/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/short-links/[id].js"));
module.exports = __webpack_exports__;

})();