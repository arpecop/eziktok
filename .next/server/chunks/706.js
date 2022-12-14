"use strict";
exports.id = 706;
exports.ids = [706];
exports.modules = {

/***/ 3334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6241);



const AdItem = ({ id , title , images , description , createdAt , condition , currency , price  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/ads/ad/${id}`,
        className: "w-full rounded-xl bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-0.5 transition-all hover:scale-[1.01] ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative flex h-full w-full flex-col justify-between rounded-lg bg-gray-900 first-letter: dark:bg-white",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex h-40 w-full overflow-hidden items-center justify-center relative",
                        children: [
                            condition === "NEW" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute top-2 left-2 p-0.5 bg-red-800 px-2 rounded-md text-xs text-slate-300",
                                children: "НОВ"
                            }),
                            images?.[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: images?.[0],
                                alt: "",
                                className: "rounded-t-md"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/no-image.png",
                                alt: "",
                                className: "rounded-t-md"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-xs absolute left-2 bottom-2",
                                children: (0,_helpers_date__WEBPACK_IMPORTED_MODULE_2__/* .convertToTimeago */ .u)(new Date(createdAt))
                            })
                        ]
                    }),
                    price && price > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute top-2 right-2 p-0.5 bg-red-800 px-2 rounded-md text-2xl font-light text-slate-300",
                        children: [
                            JSON.stringify(price),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute ml-1 text-sm",
                                children: currency || "лв."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ml-1 text-red-800 text-sm",
                                children: currency || "лв."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-lg font-bold text-white dark:text-gray-900 mx-2",
                        children: title.slice(0, 40)
                    }),
                    description && description.length > 100 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-sm text-white dark:text-gray-900 mx-2 ember",
                        children: [
                            description.slice(0, 100),
                            " ..."
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdItem);


/***/ }),

/***/ 6241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ convertToTimeago)
/* harmony export */ });
/* unused harmony export toSofiaTimeZone */
function toSofiaTimeZone(date) {
    let sofiaDate = new Date(date);
    if (date.getTimezoneOffset() === 120) {
        return date;
    }
    sofiaDate.setUTCHours(sofiaDate.getUTCHours() + 2);
    return sofiaDate;
}
const convertToTimeago = (past)=>{
    if (!(past instanceof Date)) {
        return "";
    }
    const timeDiff = toSofiaTimeZone(new Date()).getTime() - toSofiaTimeZone(past).getTime();
    const timeDiffInSeconds = timeDiff / 1000;
    switch(true){
        case timeDiffInSeconds < 60:
            return `преди ${Math.round(timeDiffInSeconds)} сек.`;
        case timeDiffInSeconds < 3600:
            return timeDiffInSeconds === 60 ? `преди 1 минута` : `преди ${Math.round(timeDiffInSeconds / 60)} мин.`;
        case timeDiffInSeconds < 86400:
            return timeDiffInSeconds === 3600 ? `преди 1 час` : `преди ${Math.round(timeDiffInSeconds / 3600)} часа`;
        default:
            return timeDiffInSeconds === 86400 ? `преди 1 ден` : `преди ${Math.round(timeDiffInSeconds / 86400)} дни`;
    }
};



/***/ }),

/***/ 3706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdsContainer": () => (/* binding */ AdsContainer),
/* harmony export */   "SideBarContainer": () => (/* binding */ SideBarContainer),
/* harmony export */   "default": () => (/* binding */ AdsHome),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ads_AdItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3334);
/* harmony import */ var _components_ads_CatButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8660);
/* harmony import */ var _components_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6367);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8062);
/* harmony import */ var _components_helpers_loadStaticFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4831);







function AdsHome({ cats , items  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Main__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        disableContainer: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SideBarContainer, {
                children: cats.map((item)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_ads_CatButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        ...item,
                        key: item.slug,
                        url: `/ads/cat/${item.slug}`
                    }))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdsContainer, {
                children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ads_AdItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        ...item
                    }, item.id))
            })
        ]
    });
}
const SideBarContainer = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "rounded-md order-last md:order-first justify-center w-full md:max-w-xs ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col md:flex-row ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "rounded-md px-2 order-first",
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:w-full m-2 rounded-md shrink bg-gradient-to-l md:bg-gradient-to-b from-fuchsia-500 via-red-600 to-orange-400 mr-2 dark:from-sky-400 dark:via-rose-400 dark:to-lime-400 order-first md:order-last flex-1 p-1 "
                })
            ]
        })
    });
const AdsContainer = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
            children: children
        })
    });
const getServerSideProps = async ()=>{
    const adsData = await (0,_components_helpers_loadStaticFile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("adsData");
    const items = await _components_db__WEBPACK_IMPORTED_MODULE_4__/* .API.graphql */ .bl.graphql((0,_components_db__WEBPACK_IMPORTED_MODULE_4__/* .graphqlOperation */ .wT)(_components_db__WEBPACK_IMPORTED_MODULE_4__/* .queries.adsBySortID */ .o$.KH, {
        sortID:  false ? 0 : "ads",
        limit: 30
    }));
    return {
        props: {
            cats: adsData.map((x)=>({
                    name: x.name,
                    slug: x.slug,
                    color: x.color,
                    icon: x.icon
                })),
            items: items.data.adsBySortID.items
        }
    };
};


/***/ })

};
;