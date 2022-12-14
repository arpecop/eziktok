"use strict";
(() => {
var exports = {};
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 5364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@aws-amplify/auth"
const auth_namespaceObject = require("@aws-amplify/auth");
var auth_default = /*#__PURE__*/__webpack_require__.n(auth_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/forms/Err.tsx
var Err = __webpack_require__(993);
;// CONCATENATED MODULE: ./components/forms/SubForm.tsx


const SubForm = ({ button , showSocial  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-control mt-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "btn btn-primary",
                    type: "submit",
                    children: button
                })
            }),
            showSocial && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "divider font-light",
                        children: "ИЛИ"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-control",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            onClick: ()=>{
                                auth_namespaceObject.Auth.federatedSignIn({
                                    provider: "Google"
                                });
                            },
                            className: "btn border-none bg-white text-gray-900 hover:bg-white",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    width: 24,
                                    height: 24,
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "mr-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fill: "#4285F4",
                                            d: "M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fill: "#34A853",
                                            d: "M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24Z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fill: "#FBBC05",
                                            d: "M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09Z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fill: "#EA4335",
                                            d: "M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96Z"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mr-4",
                                    children: "Google"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-control mt-1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            onClick: ()=>{
                                auth_namespaceObject.Auth.federatedSignIn({
                                    provider: "Facebook"
                                });
                            },
                            className: "btn border-none bg-white text-gray-900 hover:bg-white",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "mr-1 fill-blue-700",
                                    width: 24,
                                    height: 24,
                                    role: "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                    })
                                }),
                                "Facebook"
                            ]
                        })
                    })
                ]
            })
        ]
    });
/* harmony default export */ const forms_SubForm = (SubForm);

// EXTERNAL MODULE: ./components/hooks/storage.ts
var storage = __webpack_require__(1578);
// EXTERNAL MODULE: ./components/forms/inputs/Input.tsx
var Input = __webpack_require__(325);
// EXTERNAL MODULE: ./components/db/index.ts + 2 modules
var db = __webpack_require__(6367);
;// CONCATENATED MODULE: ./pages/auth.tsx
/* eslint-disable react-hooks/exhaustive-deps */ //import Amplify from '@aws-amplify/auth';









auth_default().configure({
    aws_project_region: "eu-west-1",
    aws_cognito_identity_pool_id: "eu-west-1:2f394adb-6fe3-42e6-9cfb-e552b456a0a8",
    aws_cognito_region: "eu-west-1",
    aws_user_pools_id: "eu-west-1_R2tLVDqB0",
    aws_user_pools_web_client_id: "5k2d69fvijvdmpcml3a510eeqd",
    oauth: {
        domain: "rudixops.auth.eu-west-1.amazoncognito.com",
        scope: [
            "email",
            "openid",
            "profile"
        ],
        redirectSignIn: "http://localhost:3000/auth/,https://eziktok.com/auth/",
        redirectSignOut: "http://localhost:3000/auth/,https://eziktok.com/auth/",
        responseType: "token"
    },
    federationTarget: "COGNITO_USER_AND_IDENTITY_POOLS",
    aws_cognito_username_attributes: [],
    aws_cognito_social_providers: [
        "FACEBOOK",
        "GOOGLE"
    ],
    aws_cognito_signup_attributes: [
        "EMAIL"
    ],
    aws_cognito_mfa_configuration: "OFF",
    aws_cognito_mfa_types: [],
    aws_cognito_password_protection_settings: {
        passwordPolicyMinLength: 6,
        passwordPolicyCharacters: []
    },
    aws_cognito_verification_mechanisms: [
        "EMAIL"
    ]
});
const AuthPage = ({ refer  })=>{
    const router = (0,router_.useRouter)();
    const sekcia = router.query.sekcia;
    const x = sekcia ? sekcia : "signin";
    const [section, setSection] = (0,external_react_.useState)(x);
    const [errx, setErr] = (0,external_react_.useState)(null);
    const [state, setForm] = (0,external_react_.useState)({});
    const [user, setUser] = (0,storage/* default */.Z)("user", null);
    async function initialise() {
        const data = await auth_namespaceObject.Auth.currentAuthenticatedUser();
        console.log(data);
        try {
            await db/* API.graphql */.bl.graphql((0,db/* graphqlOperation */.wT)(db/* mutations.createAd */.P$.Vl, {
                input: {
                    id: data.attributes.sub,
                    sortID: "users",
                    condition: "USER",
                    title: data.username,
                    type: "user",
                    description: data.attributes.email || data.signInUserSession.idToken.payload.email || ""
                }
            }));
            router_default().push(refer);
            setUser({
                username: data.username,
                sub: data.attributes.sub
            });
        } catch (e) {
            router_default().push(refer);
            setUser({
                username: data.username,
                sub: data.attributes.sub
            });
        }
    }
    (0,external_react_.useEffect)(()=>{
        setErr(null);
    }, [
        section
    ]);
    const onSubmit = async (e)=>{
        e.preventDefault();
        const inputs = Object.values(e.target).filter((c)=>typeof c.tagName === "string" && c.tagName.toLowerCase() === "input").reduce((acc, curr)=>({
                ...acc,
                [curr.name]: curr.value
            }), {});
        const { action , username , password , email , emailcode  } = inputs;
        setForm({
            ...state,
            ...inputs
        });
        switch(action){
            case "signin":
                {
                    auth_namespaceObject.Auth.signIn(username, password).then(async ()=>initialise()).catch((e)=>setErr(e));
                    break;
                }
            case "signup":
                {
                    auth_namespaceObject.Auth.signUp({
                        username,
                        password,
                        attributes: {
                            email
                        }
                    }).then(async ()=>{
                        setSection("confirmsignup");
                    }).catch((e)=>setErr(e));
                    break;
                }
            case "confirmsignup":
                {
                    await auth_namespaceObject.Auth.confirmSignUp(username, emailcode).then(async ()=>await auth_namespaceObject.Auth.signIn(username, password).then(async ()=>initialise())).catch((e)=>setErr(e));
                    break;
                }
            case "forgot":
                {
                    auth_namespaceObject.Auth.forgotPassword(username).then(async ()=>{
                        setSection("forgotchange");
                    }).catch((e)=>setErr(e));
                    break;
                }
            case "forgotchange":
                {
                    auth_namespaceObject.Auth.forgotPasswordSubmit(username, emailcode, password).then(async ()=>{
                        setSection("signin");
                    }).catch((e)=>setErr(e));
                    break;
                }
            default:
                break;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            errx && /*#__PURE__*/ jsx_runtime_.jsx(Err/* default */.Z, {
                err: errx
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center items-center flex-col h-screen",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    method: "POST",
                    onSubmit: onSubmit,
                    children: [
                        section === "signin" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "username",
                                    placeholder: "Потр. име",
                                    value: state.username,
                                    required: false
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "password",
                                    placeholder: "Парола",
                                    type: "password",
                                    required: false
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "action",
                                    type: "hidden",
                                    value: "signin",
                                    required: false
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(forms_SubForm, {
                                    button: "Вход",
                                    showForgot: true,
                                    showSocial: true
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "z-40 mt-3 flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: ()=>setSection("signup"),
                                            className: "grow text-sm font-bold underline self-start cursor-pointer",
                                            children: "Регистрация"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: ()=>setSection("forgot"),
                                            className: "grow flex justify-end text-sm font-bold underline self-end cursor-pointer",
                                            children: "Забравена Парола?"
                                        })
                                    ]
                                })
                            ]
                        }),
                        section === "signup" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "username",
                                    placeholder: "Потр. име"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "email",
                                    placeholder: "E-mail"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "password",
                                    placeholder: "Парола",
                                    type: "password"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "passwordagain",
                                    placeholder: "Парола пак",
                                    type: "password"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "action",
                                    type: "hidden",
                                    value: "signup"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(forms_SubForm, {
                                    left: {
                                        text: "Вход",
                                        href: "/auth/?section=signin"
                                    },
                                    button: "Регистрация",
                                    showSocial: true
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "z-40 mt-3 flex",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        onClick: ()=>setSection("signin"),
                                        className: "grow text-sm font-bold underline self-start cursor-pointer",
                                        children: "Вече имам регистрация"
                                    })
                                })
                            ]
                        }),
                        section === "confirmsignup" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "username",
                                    value: state.username,
                                    type: "hidden"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "password",
                                    value: state.password,
                                    type: "hidden"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "emailcode",
                                    placeholder: "Въведи кода от електронната поща"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "action",
                                    type: "hidden",
                                    value: "confirmsignup"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(forms_SubForm, {
                                    button: "Потвърди "
                                })
                            ]
                        }),
                        section === "forgot" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "username",
                                    placeholder: "Потр. име"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "action",
                                    type: "hidden",
                                    value: "forgot"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(forms_SubForm, {
                                    button: "Възстанови парола"
                                })
                            ]
                        }),
                        section === "forgotchange" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "username",
                                    value: state.username,
                                    type: "hidden"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "emailcode",
                                    type: "number",
                                    placeholder: "Въведи кода от електронната поща",
                                    value: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "password",
                                    placeholder: "Парола",
                                    type: "password"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "passwordagain",
                                    placeholder: "Парола пак",
                                    type: "password"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "action",
                                    type: "hidden",
                                    value: "forgotchange"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(forms_SubForm, {
                                    button: "Смени Паролата"
                                })
                            ]
                        }),
                        section === "signout" && user && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                    name: "action",
                                    type: "hidden",
                                    value: "signout"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(forms_SubForm, {
                                    button: "Изход"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
async function getServerSideProps({ req  }) {
    const ref = req.headers.referer;
    console.log(ref);
    if (!ref.includes("auth") || !ref.includes("facebook") || !ref.includes("google")) {
        return {
            props: {
                refer: ref
            }
        };
    } else {
        return {
            props: {
                refer: "/"
            }
        };
    }
}
/* harmony default export */ const auth = (AuthPage);


/***/ }),

/***/ 5581:
/***/ ((module) => {

module.exports = require("aws-amplify");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [367,290], () => (__webpack_exec__(5364)));
module.exports = __webpack_exports__;

})();