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
exports.id = "pages/api/qrcodes/[id]";
exports.ids = ["pages/api/qrcodes/[id]"];
exports.modules = {

/***/ "(api)/./pages/api/qrcodes/[id].js":
/*!***********************************!*\
  !*** ./pages/api/qrcodes/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const { id  } = req.query;\n    switch(req.method){\n        case \"GET\":\n            res.status(200).send(id);\n            break;\n        case \"PATCH\":\n            res.status(200).send({\n                ...req.body,\n                id\n            });\n            break;\n        case \"DELETE\":\n            res.status(204).send();\n            break;\n        default:\n            res.status(404).send();\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXJjb2Rlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDdEMsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBR0YsSUFBSUc7SUFFbkIsT0FBUUgsSUFBSUk7UUFDVixLQUFLO1lBQ0hILElBQUlJLE9BQU8sS0FBS0MsS0FBS0o7WUFDckI7UUFDRixLQUFLO1lBQ0hELElBQUlJLE9BQU8sS0FBS0MsS0FBSztnQkFBRSxHQUFHTixJQUFJTyxJQUFJO2dCQUFFTDtZQUFHO1lBQ3ZDO1FBQ0YsS0FBSztZQUNIRCxJQUFJSSxPQUFPLEtBQUtDO1lBQ2hCO1FBQ0Y7WUFDRUwsSUFBSUksT0FBTyxLQUFLQztZQUNoQjtJQUNKO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGl0Ly4vcGFnZXMvYXBpL3FyY29kZXMvW2lkXS5qcz9mOTVjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGlkKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQQVRDSFwiOlxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyAuLi5yZXEuYm9keSwgaWQgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiREVMRVRFXCI6XG4gICAgICByZXMuc3RhdHVzKDIwNCkuc2VuZCgpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCk7XG4gICAgICBicmVhaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/qrcodes/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/qrcodes/[id].js"));
module.exports = __webpack_exports__;

})();