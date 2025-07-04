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

/***/ "(api)/./pages/api/qrcodes/index.js":
/*!************************************!*\
  !*** ./pages/api/qrcodes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            res.status(200).send([\n                {\n                    id: \"abc\",\n                    title: \"위키피디아 Next.js\",\n                    url: \"https://en.wikipedia.org/wiki/Next.js\"\n                },\n                {\n                    id: \"def\",\n                    title: \"코드잇 자유게시판\",\n                    url: \"https://codeit.kr/community/general\"\n                },\n                {\n                    id: \"ghi\",\n                    title: \"코드잇 질문답변\",\n                    url: \"https://www.codeit.kr/community/questions\"\n                }\n            ]);\n            break;\n        case \"POST\":\n            res.status(201).send({\n                title: \"위키피디아 Next.js\",\n                url: \"https://en.wikipedia.org/wiki/Next.js\"\n            });\n            break;\n        default:\n            res.status(404).send();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXJjb2Rlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3RDLE9BQVFELElBQUlFO1FBQ1YsS0FBSztZQUNIRCxJQUFJRSxPQUFPLEtBQUtDLEtBQUs7Z0JBQ25CO29CQUNFQyxJQUFJO29CQUNKQyxPQUFPO29CQUNQQyxLQUFLO2dCQUNQO2dCQUNBO29CQUNFRixJQUFJO29CQUNKQyxPQUFPO29CQUNQQyxLQUFLO2dCQUNQO2dCQUNBO29CQUNFRixJQUFJO29CQUNKQyxPQUFPO29CQUNQQyxLQUFLO2dCQUNQO2FBQ0Q7WUFDRDtRQUNGLEtBQUs7WUFDSE4sSUFBSUUsT0FBTyxLQUFLQyxLQUFLO2dCQUNuQkUsT0FBTztnQkFDUEMsS0FBSztZQUNQO1lBQ0E7UUFDRjtZQUNFTixJQUFJRSxPQUFPLEtBQUtDO0lBQ3BCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGl0Ly4vcGFnZXMvYXBpL3FyY29kZXMvaW5kZXguanM/MDJkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcImFiY1wiLFxuICAgICAgICAgIHRpdGxlOiBcIuychO2CpO2UvOuUlOyVhCBOZXh0LmpzXCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05leHQuanNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcImRlZlwiLFxuICAgICAgICAgIHRpdGxlOiBcIuy9lOuTnOyehyDsnpDsnKDqsozsi5ztjJBcIixcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlaXQua3IvY29tbXVuaXR5L2dlbmVyYWxcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcImdoaVwiLFxuICAgICAgICAgIHRpdGxlOiBcIuy9lOuTnOyehyDsp4jrrLjri7Xrs4BcIixcbiAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuY29kZWl0LmtyL2NvbW11bml0eS9xdWVzdGlvbnNcIixcbiAgICAgICAgfSxcbiAgICAgIF0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHtcbiAgICAgICAgdGl0bGU6IFwi7JyE7YKk7ZS865SU7JWEIE5leHQuanNcIixcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05leHQuanNcIixcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsImlkIiwidGl0bGUiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/qrcodes/index.js\n");

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