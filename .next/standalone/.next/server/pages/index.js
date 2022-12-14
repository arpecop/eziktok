"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/ads/Search.tsx
var Search = __webpack_require__(8147);
// EXTERNAL MODULE: ./components/Main.tsx + 4 modules
var Main = __webpack_require__(8062);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/elements/AnimIndexProducts.tsx



const AnimIndexProducts = ()=>{
    const imgclass = "w-12";
    const images = (0,external_react_.useMemo)(()=>[
            "/products/1.png",
            "/products/2.png",
            "/products/3.png",
            "/products/4.png",
            "/products/5.png",
            "/products/6.png",
            "/products/7.png",
            "/products/8.png",
            "/products/9.png",
            "/products/10.png",
            "/products/11.png",
            "/products/12.png",
            "/products/13.png",
            "/products/14.png",
            "/products/15.png",
            "/products/16.png",
            "/products/17.png",
            "/products/18.png",
            "/products/19.png",
            "/products/20.png",
            "/products/21.png"
        ], []);
    const [image1, setImage1] = (0,external_react_.useState)(images[0]);
    const [image2, setImage2] = (0,external_react_.useState)(images[1]);
    const [opacity, setOpacity] = (0,external_react_.useState)(1);
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            const random = (0,external_lodash_.shuffle)(images);
            setOpacity(1);
            setTimeout(()=>setOpacity(0), 1300);
            setImage1(random[0]);
            setImage2(random[1]);
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        images
    ]);
    (0,external_react_.useEffect)(()=>{
        images.map((imageUrl)=>{
            const img = new Image();
            img.src = imageUrl;
            return img;
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-center items-center flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-32 sm:w-36 md:w-44",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/team.png",
                    alt: "",
                    width: "600",
                    height: "406"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex z-20 justify-center items-center -mt-32 sm:-mt-36 md:-mt-44",
                style: {
                    animation: "rotateindex 12s linear infinite"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            transition: "opacity 0.5s ease-in-out"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: imgclass,
                            src: image1,
                            style: {
                                opacity,
                                transition: "opacity 3s ease-in-out"
                            },
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            transition: "opacity 0.5s ease-in-out"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: imgclass,
                            src: image2,
                            style: {
                                opacity,
                                transition: "opacity 3s ease-in-out"
                            },
                            alt: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    transform: "scale(0.5)",
                    animation: "zoom-in 0.5s linear forwards"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "heading font-black text-5xl md:text-6xl lg:text-8xl flex m-0 p-0 bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 text-transparent bg-clip-text dark:from-gray-700 dark:to-gray-900 background-animate z-30",
                    children: "ezikTok"
                })
            })
        ]
    });
};
/* harmony default export */ const elements_AnimIndexProducts = (AnimIndexProducts);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/index.tsx






const NotificationPermission = dynamic_default()(()=>__webpack_require__.e(/* import() */ 159).then(__webpack_require__.bind(__webpack_require__, 5159)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "/components/Notifications"
        ]
    },
    ssr: false
});
function Home() {
    const cats = [
        {
            slug: "AM",
            title: "Авто Мото",
            descr: "Всичко свързано с автомобилите",
            className: "bg-gradient-to-tr from-blue-400 via-cyan-700 to-orange-700 p-1 rounded-md",
            href: "/cars"
        },
        {
            slug: "AD",
            title: "Обяви",
            className: "bg-gradient-to-l from-pink-300 via-sky-500 to-orange-500 p-1 rounded-md",
            descr: "Купувам / продавам / Наеми / Услуги",
            href: "/ads"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(Main/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grow container mx-auto z-20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(elements_AnimIndexProducts, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Search/* default */.Z, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "font-bold text-2xl max-w-md md:text-3xl lg:text-5xl lg:max-w-2xl pb-4",
                            children: [
                                "пусни за продажба практически всичко за",
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2",
                                    children: [
                                        " ",
                                        "което се сетиш."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text opacity-90 max-w-sm lg:text-xl lg:max-w-2xl",
                            children: "ezikTok e сайт за безплатни обяви в категории: Недвижими имоти, Автомобили и авточасти, Eлектроника, Мода, За бебето и детето, Дом и градина, Свободно време, Домашни любимци, Услуги, Работа, Екскурзии и почивки. В езикТок можете да намерите интересни обяви за продажба на почти всичко, което търсите. Свържете се лесно и бързо с продавача и намерете атрактивни предложения на по-ниски цени отколкото в магазина. Ако искате да продадете нещо, добавете бързо, лесно и безплатно обява в езикТок. Купувайте и продавайте с езикТок!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(NotificationPermission, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid grid-cols-1 gap-4 md:grid-cols-2 mt-4 max-w-screen-md mx-auto",
                    children: cats.map((x)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            passHref: true,
                            className: x.className,
                            href: "/ads",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex max-h-24 items-center overflow-hidden rounded-md shadow-lg ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "heading flex h-24 min-w-24 w-24 items-center justify-center text-4xl text-white",
                                        children: x.slug
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "dark:bg-white bg-slate-900 rounded-r-md min-h-24 min-w-full",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "heading pl-2 text-3xl",
                                                children: x.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "pl-2 text-sm",
                                                children: x.descr
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, x.slug))
                })
            ]
        })
    });
}
async function getStaticProps() {
    return {
        props: {
            date: new Date().toString()
        }
    };
}


/***/ }),

/***/ 5581:
/***/ ((module) => {

module.exports = require("aws-amplify");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,152,62], () => (__webpack_exec__(4150)));
module.exports = __webpack_exports__;

})();