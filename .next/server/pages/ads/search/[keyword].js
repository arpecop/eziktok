"use strict";
(() => {
var exports = {};
exports.id = 890;
exports.ids = [890,448];
exports.modules = {

/***/ 4154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ads_AdItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3334);
/* harmony import */ var _components_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6367);
/* harmony import */ var _components_helpers_slug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7507);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8062);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5581);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_helpers_loadStaticFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4831);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3706);








const CatId = ({ current , items , keywords  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        disableContainer: false,
        title: current,
        description: keywords.join(" "),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_6__.AdsContainer, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fullgridcontaineritem",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-5xl -mt-2",
                        children: current
                    })
                }),
                items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ads_AdItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        ...item
                    }, item.id))
            ]
        })
    });
};
const getServerSideProps = async (req)=>{
    const reqs = req.query.keyword;
    const subcatid = reqs.split("_");
    const adsData = await (0,_components_helpers_loadStaticFile__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("adsData");
    const data = adsData.flatMap((x)=>{
        return x.items.map((z)=>{
            return {
                name: z.name,
                slug: z.slug,
                fields: z.fields.filter((x)=>x.name === "type" && x.options || x.name === "brand" && x.options)
            };
        });
    }).find((x)=>x.slug === subcatid[1]);
    const keywords = data?.fields.flatMap((x)=>x.options);
    const current = keywords.filter((word)=>{
        return (0,_components_helpers_slug__WEBPACK_IMPORTED_MODULE_7__/* .createSlug */ .q)(word || "") === subcatid[2];
    })[0];
    //const subcat = data.find((x) => x.slug === req.query.subcatid);
    const filter = current.split(" ").map((k)=>({
            query: {
                contains: k.toLowerCase()
            }
        }));
    //console.log(filter);
    const items = await aws_amplify__WEBPACK_IMPORTED_MODULE_4__.API.graphql((0,aws_amplify__WEBPACK_IMPORTED_MODULE_4__.graphqlOperation)(_components_db__WEBPACK_IMPORTED_MODULE_2__/* .queries.adsBySortID */ .o$.KH, {
        sortID:  false ? 0 : "ads",
        filter: {
            query: {
                contains: filter
            }
        },
        limit: 30,
        sortDirection: "DESC"
    }));
    return {
        props: {
            current,
            keywords,
            items: items.data.adsByDate.items
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatId);


/***/ }),

/***/ 5581:
/***/ ((module) => {

module.exports = require("aws-amplify");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 4029:
/***/ ((module) => {

module.exports = require("react-twemoji");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,62,367,60,706,507], () => (__webpack_exec__(4154)));
module.exports = __webpack_exports__;

})();