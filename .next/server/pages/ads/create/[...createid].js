"use strict";
(() => {
var exports = {};
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 8969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PlaceHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8240);




const Checkbox = ({ name , required , options , placeholder , submitted , value  })=>{
    const [selectedarr, setVal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const handleOnChange = (e)=>{
        const { checked , value  } = e.target;
        if (checked) {
            setVal([
                ...selectedarr,
                value
            ]);
        } else {
            setVal(selectedarr.filter((x)=>x !== value));
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setVal(value || []);
    }, [
        value
    ]);
    const isEmpty = submitted && required && selectedarr.length === 0;
    const [matches, setMatches] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("w-full gap-0 grid");
    const mediaQueries = [
        {
            minWidth: 300
        },
        {
            maxWidth: 400
        },
        {
            minWidth: 500
        },
        {
            maxWidth: 600
        },
        {
            minWidth: 700
        },
        {
            maxWidth: 800
        },
        {
            maxWidth: 900
        },
        {
            minWidth: 1000
        }
    ];
    const size = mediaQueries.map((query)=>(0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(query)).filter(Boolean).length;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMatches(`w-full gap-0 grid cols-${size}`);
    }, []);
    //flex flex-wrap w-full
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "md:flex mb-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PlaceHolder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                required: required,
                placeholder: placeholder || "",
                submitted: submitted
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: matches,
                children: options.map((optionval)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "label cursor-pointer flex justify-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name,
                                type: "checkbox",
                                ...!required ? {} : {
                                    required: true
                                },
                                checked: selectedarr.includes(optionval),
                                className: `checkbox ${isEmpty ? "checkbox-secondary border-2" : "checkbox-accent  border-2"}`,
                                value: optionval,
                                placeholder: placeholder,
                                onChange: (e)=>handleOnChange(e)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full truncate text-sm",
                                children: optionval
                            })
                        ]
                    }, optionval))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


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


/***/ }),

/***/ 1900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _createid_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "ulidx"
const external_ulidx_namespaceObject = require("ulidx");
// EXTERNAL MODULE: ./components/hooks/storage.ts
var storage = __webpack_require__(1578);
// EXTERNAL MODULE: ./components/Main.tsx + 4 modules
var Main = __webpack_require__(8062);
// EXTERNAL MODULE: external "aws-amplify"
var external_aws_amplify_ = __webpack_require__(5581);
;// CONCATENATED MODULE: external "aws-cognito-jwt-verifier"
const external_aws_cognito_jwt_verifier_namespaceObject = require("aws-cognito-jwt-verifier");
// EXTERNAL MODULE: ./components/db/index.ts + 2 modules
var db = __webpack_require__(6367);
;// CONCATENATED MODULE: ./components/utils/awsConfig.ts



const verify = new external_aws_cognito_jwt_verifier_namespaceObject.CognitoJwtVerifier();
const verifytoken = async (sub)=>{
    //fy.checkJwt(token, 'eu-west-1', 'eu-west-1_300BfRxxa');
    //const response = JSON.parse(tok);
    console.log(sub);
    //const decoded = jwt_decode(token);
    const existuser = await external_aws_amplify_.API.graphql((0,external_aws_amplify_.graphqlOperation)(db/* queries.getAd */.o$._l, {
        id: sub
    }));
    if (existuser.data.getAd) {
        return "";
    } else {
        throw {
            message: "моля оторизирайте се"
        };
    }
//return tok;
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/forms/inputs/Checkbox.tsx
var Checkbox = __webpack_require__(8969);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: ./components/forms/inputs/_PlaceHolder.tsx
var _PlaceHolder = __webpack_require__(8240);
;// CONCATENATED MODULE: ./components/forms/inputs/Radio.tsx




const Radio = ({ name , required , options , placeholder , submitted  })=>{
    const [val, setVal] = (0,external_react_.useState)("");
    const [matches, setMatches] = (0,external_react_.useState)("w-full gap-0 grid");
    const mediaQueries = [
        {
            minWidth: 300
        },
        {
            maxWidth: 400
        },
        {
            minWidth: 500
        },
        {
            maxWidth: 600
        },
        {
            minWidth: 700
        },
        {
            maxWidth: 800
        },
        {
            maxWidth: 900
        },
        {
            minWidth: 1000
        }
    ];
    const size = mediaQueries.map((query)=>(0,external_react_responsive_.useMediaQuery)(query)).filter(Boolean).length;
    (0,external_react_.useEffect)(()=>{
        setMatches(`w-full gap-0 grid cols-${size}`);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "md:flex md:items-center mb-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(_PlaceHolder/* default */.Z, {
                required: required,
                placeholder: placeholder || "",
                submitted: submitted
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: matches,
                children: options?.map((x)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center mb-2 od:bg-white even:bg-accent-black",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "radio",
                                name: name,
                                ...!required && required !== false ? {} : {
                                    required: true
                                },
                                placeholder: placeholder,
                                checked: val === x,
                                className: submitted && required ? "radio  radio-secondary  border-2" : "radio  radio-accent  border-2",
                                onChange: (e)=>setVal(e.target.value),
                                value: x
                            }, x),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "label-text ml-1 font-bold flex-col",
                                children: x
                            })
                        ]
                    }, x))
            })
        ]
    });
};
/* harmony default export */ const inputs_Radio = (Radio);

;// CONCATENATED MODULE: ./components/forms/inputs/Select.tsx



const Select = ({ name , required , options , placeholder , submitted  })=>{
    const [val, setVal] = (0,external_react_.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "md:flex mb-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(_PlaceHolder/* default */.Z, {
                required: required,
                placeholder: placeholder || "",
                submitted: submitted
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    className: `select select-bordered ${!val && submitted && required ? "inputerror border-2" : "select-success"}  bg-gray-800 dark:bg-white border-2 w-fit`,
                    name: name,
                    value: val,
                    onChange: (e)=>setVal(e.target.value),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            defaultValue: ""
                        }),
                        options?.map((x)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                defaultValue: x,
                                children: x
                            }, x))
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const inputs_Select = (Select);

// EXTERNAL MODULE: ./components/forms/inputs/Input.tsx
var Input = __webpack_require__(325);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ./components/forms/inputs/AllForms.tsx






const Upload = dynamic_default()(()=>__webpack_require__.e(/* import() */ 36).then(__webpack_require__.bind(__webpack_require__, 36)), {
    loadableGenerated: {
        modules: [
            "../components/forms/inputs/AllForms.tsx -> " + "/components/forms/inputs/Upload"
        ]
    },
    suspense: true
});

const onSubmit = async (e)=>{
    e.preventDefault();
    const submission = Object.values(e.target).filter((c)=>typeof c.tagName === "string" && (c.tagName.toLowerCase() === "input" || c.tagName.toLowerCase() === "textarea" || c.tagName.toLowerCase() === "select")).map((x)=>{
        return {
            type: x.type || x.tagName,
            name: x.name,
            checked: x.checked,
            value: x.value,
            placeholder: x.placeholder,
            alt: x.alt
        };
    });
    const chekerInputs = (0,external_lodash_.groupBy)(submission.filter((x)=>x.checked), (item)=>item.name || item.placeholder);
    const formInputs = (0,external_lodash_.keyBy)(submission.filter((item)=>{
        return item.type === "text" || item.type === "password" || item.type === "hidden" || item.type === "number" || item.type === "textarea" || item.type === "select";
    }), (item)=>item.name);
    return {
        ...chekerInputs,
        ...formInputs
    };
};
const FormInput = ({ inputschema , submitted  })=>{
    switch(inputschema.type){
        case "upload":
            return /*#__PURE__*/ jsx_runtime_.jsx(Upload, {});
        case "region":
            return /*#__PURE__*/ jsx_runtime_.jsx(inputs_Select, {
                name: "region",
                placeholder: "Регион",
                required: true,
                submitted: submitted,
                options: [
                    "1"
                ]
            });
        case "number":
            return /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                type: "number",
                name: inputschema.name,
                placeholder: inputschema.placeholder,
                required: inputschema.required,
                after: inputschema.after,
                submitted: submitted
            });
        case "textarea":
            return /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                type: "textarea",
                name: inputschema.name,
                placeholder: inputschema.placeholder,
                required: inputschema.required,
                submitted: submitted
            });
        case "textarea":
            return /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                type: "textarea",
                name: inputschema.name,
                placeholder: inputschema.placeholder,
                required: inputschema.required,
                submitted: submitted
            });
        case "select":
            return /*#__PURE__*/ jsx_runtime_.jsx(inputs_Select, {
                name: inputschema.name,
                placeholder: inputschema.placeholder,
                required: inputschema.required,
                submitted: submitted,
                options: inputschema.options
            });
        case "hidden":
            return /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                type: "hidden",
                name: inputschema.name,
                placeholder: inputschema.placeholder,
                required: false,
                value: inputschema.value
            });
        case "checkbox":
            return /*#__PURE__*/ jsx_runtime_.jsx(Checkbox/* default */.Z, {
                name: inputschema.name,
                placeholder: inputschema.placeholder,
                required: inputschema.required,
                options: inputschema.options || [
                    ""
                ],
                submitted: submitted
            });
        case "radio":
            return /*#__PURE__*/ jsx_runtime_.jsx(inputs_Radio, {
                name: inputschema.name,
                placeholder: inputschema.placeholder,
                required: inputschema.required,
                options: inputschema.options,
                submitted: submitted
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                type: "text",
                name: inputschema.name,
                placeholder: inputschema.placeholder,
                required: inputschema.required,
                after: inputschema.after,
                submitted: submitted
            });
    }
};
/* harmony default export */ const AllForms = (FormInput);

// EXTERNAL MODULE: ./components/helpers/loadStaticFile.ts
var loadStaticFile = __webpack_require__(4831);
// EXTERNAL MODULE: ./components/forms/Err.tsx
var Err = __webpack_require__(993);
;// CONCATENATED MODULE: ./pages/ads/create/[...createid].tsx











function CreatefreeAd({ data  }) {
    const [submitted, setSubmitted] = (0,external_react_.useState)(false);
    const [errorx, setError] = (0,external_react_.useState)(null);
    const [user] = (0,storage/* default */.Z)("user", null);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        !user?.username && setError({
            name: "UnauthorizedException",
            message: "Не сте оторизиран, моля влезте с акаунта си"
        });
    }, [
        user
    ]);
    const allfields = [
        {
            name: "title",
            placeholder: "Заглавие",
            type: "text",
            required: true
        },
        {
            name: "description",
            placeholder: "Описание",
            type: data?.hidedescription ? "hidden" : "textarea"
        },
        {
            name: "upload",
            placeholder: "Картинки",
            type: "upload"
        },
        data?.fields,
        {
            name: "price",
            placeholder: "Цена",
            type: data?.hideprice ? "hidden" : "text",
            after: "лв.",
            required: data?.hideprice ? undefined : true
        },
        {
            name: "phone",
            placeholder: "Телефон"
        }
    ].flat().filter(Boolean);
    //setSubmitted(true);
    //window.scrollTo({ top: 0, behavior: 'smooth' });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Main/* default */.Z, {
        children: [
            errorx && /*#__PURE__*/ jsx_runtime_.jsx(Err/* default */.Z, {
                err: errorx
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fullgridcontaineritem",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-5xl leadingtext",
                    children: data.name
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: (e)=>onSubmit(e).then(async (submitteddata)=>{
                        console.log(submitteddata);
                        setSubmitted(true);
                        try {
                            await verifytoken(user?.sub || "");
                            const input = {
                                id: (0,external_ulidx_namespaceObject.ulid)(),
                                sortID:  false ? 0 : "ads",
                                title: submitteddata.title?.value,
                                price: submitteddata.price.value ? Number(submitteddata.price.value) : 0,
                                condition: submitteddata.condition?.value || "USED",
                                data: JSON.stringify(submitteddata),
                                images: submitteddata.images?.map((i)=>i.value) || [],
                                parrent: data.parrent,
                                cat: data.slug,
                                type: data.slug,
                                query: JSON.stringify(submitteddata).replace(/[{}\[\]:",]/g, " "),
                                description: submitteddata.description?.value
                            };
                            console.log(input);
                            const insert = await db/* API.graphql */.bl.graphql((0,db/* graphqlOperation */.wT)(db/* mutations.createAd */.P$.Vl, {
                                input
                            }));
                            router.push("/ads/ad/" + insert.data.createAd.id);
                        } catch (e) {
                            console.log(e);
                            setError(e.message ? e : e.errors[0]);
                        }
                        //
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }),
                children: [
                    allfields.map((x)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "my-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(AllForms, {
                                inputschema: x,
                                submitted: submitted
                            })
                        }, x.name)),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-end ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "btn",
                            disabled: errorx ? true : false,
                            children: "Добави"
                        })
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async ({ query  })=>{
    const adsData = await (0,loadStaticFile/* default */.Z)("adsData");
    const data = adsData.find((x)=>x.slug === query.createid?.[0]);
    const subcat = data.items.find((x)=>x.slug === query.createid?.[1]);
    return {
        props: {
            data: subcat
        }
    };
};
/* harmony default export */ const _createid_ = (CreatefreeAd);


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

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,152,62,367,290], () => (__webpack_exec__(1900)));
module.exports = __webpack_exports__;

})();