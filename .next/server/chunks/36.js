"use strict";
exports.id = 36;
exports.ids = [36];
exports.modules = {

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5581);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8969);




aws_amplify__WEBPACK_IMPORTED_MODULE_1__.Amplify.configure({
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
    ],
    aws_user_files_s3_bucket: "eziktokfriendly114941-staging",
    aws_user_files_s3_bucket_region: "eu-west-1",
    aws_appsync_graphqlEndpoint: "https://f64iubro75ad5lc77hqjepavdu.appsync-api.eu-west-1.amazonaws.com/graphql",
    aws_appsync_region: "eu-west-1",
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: "da2-cqo7gn4b4fcbfcl2miw67inaxy"
});
const Upload = ()=>{
    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const prefix = "https://eziktokfriendly114941-staging.s3.eu-west-1.amazonaws.com/public/";
    function resizeImage(image, name, w, h) {
        // Create a temporary canvas element
        const canvas = document.createElement("canvas");
        canvas.width = 300;
        canvas.height = 300;
        const ctx = canvas.getContext("2d");
        const aspectRatio = w / h;
        const imageWidth = aspectRatio > 1 ? canvas.width : canvas.height * aspectRatio;
        const imageHeight = aspectRatio > 1 ? canvas.width / aspectRatio : canvas.height;
        const x = (canvas.width - imageWidth) / 2;
        const y = (canvas.height - imageHeight) / 2;
        ctx.drawImage(image, 0, 0, w, h, x, y, imageWidth, imageHeight);
        canvas.toBlob(async function(blob) {
            const result = await aws_amplify__WEBPACK_IMPORTED_MODULE_1__.Storage.put(name, blob, {
                contentType: "image/jpg"
            });
            return `${prefix}${result.key}`;
        });
    // Return the resized image data as a data URL
    //return canvas.toDataURL();
    }
    const uploadImage = async (e)=>{
        const target = e.target;
        const file = target.files[0];
        const fileName = `${Date.now()}.${file.name.split(".").pop()}`;
        const result = await aws_amplify__WEBPACK_IMPORTED_MODULE_1__.Storage.put(fileName, file);
        const liveimg = `${prefix}${result.key}`;
        console.log(liveimg);
        setImages([
            liveimg,
            ...images
        ]);
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = liveimg;
        image.onload = ()=>{
            const resizedImageData = resizeImage(image, "t_" + fileName, image.width, image.height);
            console.log(resizedImageData);
        };
        setLoading(false);
        setInputValue("");
    };
    const handleDelete = (index)=>{
        setImages(images.filter((_, i)=>i !== index));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "md:flex mb-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full md:w-1/4 pr-2 align-top flex md:justify-end"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    onChange: (e)=>uploadImage(e),
                                    type: "file",
                                    value: inputValue,
                                    disabled: loading || images.length >= 5,
                                    className: "file-input file-input-bordered file-input-info w-full max-w-xs"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "pt-5 pl-2 text-xs",
                                    children: [
                                        images.length,
                                        " / 5"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-4",
                            children: images.map((url, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative mr-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute right-2 top-2 h-12 w-12 cursor-pointer rounded-full flex justify-center items-center bg-black",
                                            onClick: ()=>handleDelete(i),
                                            onKeyDown: ()=>handleDelete(i),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 1.5,
                                                stroke: "white",
                                                className: "w-10 h-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: url,
                                            alt: "",
                                            width: 220,
                                            height: "auto",
                                            className: "rounded-md"
                                        })
                                    ]
                                }, url))
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        value: images,
                        name: "images",
                        placeholder: "images",
                        options: images,
                        submitted: false,
                        required: false
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Upload);


/***/ })

};
;