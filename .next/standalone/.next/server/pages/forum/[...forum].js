"use strict";
(() => {
var exports = {};
exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 2499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6367);



const Forum = ({ topics  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Forum Topics"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: topics.map((topic)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            children: [
                                "xxx ",
                                topic.title
                            ]
                        })
                    }, topic.id))
            })
        ]
    });
};
const getServerSideProps = async ({ query  })=>{
    const insertx = await _components_db__WEBPACK_IMPORTED_MODULE_2__/* .API.graphql */ .bl.graphql((0,_components_db__WEBPACK_IMPORTED_MODULE_2__/* .graphqlOperation */ .wT)(`query MyQuery {
		listPosts(filter: {parrent: {eq: "cars"}}, limit: 5000) {
		  nextToken
		  items {
			title
			deepness
		  }
		}
	  }
`));
    //   const carsData = await loadStaticFile('carsData');
    //
    //   const mutationsx = carsData
    //     .flatMap((carx) => carx.items)
    //     .map((x) => ({
    //       input: {
    //         id: x.slug,
    //         title: x.name,
    //         deepness: 2,
    //         images: ['"https://eziktok.com/models/' + x.image + '"'],
    //         parrent: 'cars',
    //         from: 'admin',
    //       },
    //     }));
    //   console.log(mutationsx);
    //   forEach(mutationsx, async function (x) {
    //     await API.graphql(graphqlOperation(mutations.createPost, x))
    //       .then((data) => console.log(data))
    //       .catch((e) => console.log(e));
    //   });
    console.log(`one:createPost(input: {parrent: "cars", deepness: 9999, title: "test"}) { id }`);
    return {
        props: {
            topics: insertx.data.listPosts.items
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forum);


/***/ }),

/***/ 5581:
/***/ ((module) => {

module.exports = require("aws-amplify");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [367], () => (__webpack_exec__(2499)));
module.exports = __webpack_exports__;

})();