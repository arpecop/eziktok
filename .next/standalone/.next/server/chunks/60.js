"use strict";
exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 8660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_twemoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4029);
/* harmony import */ var react_twemoji__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_twemoji__WEBPACK_IMPORTED_MODULE_2__);



const CatButton = (item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        passHref: true,
        className: "flex items-center overflow-hidden rounded-md bg-slate-900 shadow-lg dark:bg-white border-2 mb-1",
        href: item.url,
        style: {
            borderColor: `#${item.color}`
        },
        children: [
            item.icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "heading flex h-14 w-14 min-h-14 items-center justify-center text-white relative",
                style: {
                    backgroundColor: `#${item.color}`
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_twemoji__WEBPACK_IMPORTED_MODULE_2___default()), {
                    options: {
                        className: "emoji w-12 h-12"
                    },
                    children: item.icon
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "min-h-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-1 px-2 font-bold leading-5 heading uppercase",
                children: item.name
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatButton);


/***/ }),

/***/ 4831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


const loadStaticFile = async (loc)=>{
    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), "public/data/");
    const dest = jsonDirectory + "" + loc + ".json";
    console.log(dest);
    return new Promise(async (resolve)=>{
        const data = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(dest, "utf-8");
        resolve(JSON.parse(data));
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadStaticFile);


/***/ })

};
;