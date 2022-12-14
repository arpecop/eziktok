"use strict";
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const codes = {
    AuthError: "Потребителското име не може да бъде празно",
    InvalidParameterException: "Неуспешно доставяне на код - Моля попълнете всички полета",
    CodeDeliveryFailureException: "Неуспешно доставяне на код - моля, проверете имейла си и опитайте отново",
    CodeMismatchException: "Несъответствие на кода - Моля, проверете кода и опитайте отново",
    InvalidPasswordException: "Невалидна парола - Моля, проверете паролата си и опитайте отново",
    NotAuthorizedException: "Не е упълномощен - не сте упълномощени за достъп до този ресурс",
    PasswordResetRequiredException: "Изисква се нулиране на паролата - Моля, нулирайте паролата си и опитайте отново",
    TooManyFailedAttemptsException: "Твърде много неуспешни опити - акаунтът ви е заключен от съображения за сигурност. Моля, опитайте отново по-късно",
    TooManyRequestsException: "Твърде много заявки - моля, опитайте отново по-късно",
    UnauthorizedException: "Неупълномощен - не сте упълномощени за достъп до този ресурс",
    UsernameExistsException: "Потребителското име съществува - Моля, изберете друго потребителско име и опитайте отново",
    UserNotConfirmedException: "Потребителят не е потвърден - Моля, потвърдете акаунта си и опитайте отново",
    UserNotFoundException: "Потребителят не е намерен - Моля, проверете потребителското име и опитайте отново"
};
const Err = ({ err  })=>{
    const [close, setClose] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setClose(false);
    }, [
        err
    ]);
    return close ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `mx-auto-cols-auto stickyerror flex p-3 bg-pink-700 rounded-b-lg justify-center items-center`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pr-3 absolute left-3 cursor-pointer",
                onClick: ()=>setClose(true),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-10 w-10 shrink-0 cursor-pointer stroke-current",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: codes[err.name] ? codes[err.name] : err.message
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Err);


/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getStaticProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlaceHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8240);



const useAutosizeTextArea = (textAreaRef, value)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (textAreaRef) {
            textAreaRef.style.height = "0px";
            const scrollHeight = textAreaRef.scrollHeight;
            textAreaRef.style.height = `${scrollHeight}px`;
        }
    }, [
        textAreaRef,
        value
    ]);
};
const Input = ({ name , placeholder , type , value , required , after , submitted  })=>{
    const [val, setVal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value || "");
    const isEmpty = !val && required && submitted;
    const textAreaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    useAutosizeTextArea(textAreaRef.current, val);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: type === "hidden" ? "hidden" : "md:flex md:items-center mb-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PlaceHolder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                required: required,
                placeholder: placeholder || "",
                submitted: submitted
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex",
                children: [
                    type === "textarea" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        ...!required ? {} : {
                            required: true
                        },
                        ref: textAreaRef,
                        className: `${isEmpty ? "textarea-secondary border-2" : "textarea-accent"} textarea w-full  overflow-hidden border-2  h-14 bgaccent `,
                        value: val,
                        rows: 3,
                        name: name,
                        placeholder: placeholder,
                        onChange: (e)=>setVal(e.target.value)
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ...!required ? {} : {
                            required: true
                        },
                        type: type || "text",
                        placeholder: placeholder,
                        className: `${isEmpty ? "inputerror" : "inputx"} w-full flex-1 border-2`,
                        name: name,
                        value: val,
                        alt: after,
                        onChange: (e)=>setVal(e.target.value)
                    }),
                    after && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1 flex justify-center items-center pl-2 text-xs",
                        children: after
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);
async function getStaticProps() {
    return {
        props: {}
    };
}


/***/ }),

/***/ 8240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PlaceHolder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function PlaceHolder({ placeholder , required  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `w-full md:w-1/4 pr-2 align-top flex md:justify-end`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "self-start text-sm",
            children: [
                placeholder,
                " ",
                required !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-red-600",
                    children: "*"
                })
            ]
        })
    });
}


/***/ }),

/***/ 1578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Usage
// Hook
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{
        if (true) {
            return initialValue;
        }
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value)=>{
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (false) {}
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [
        storedValue,
        setValue
    ];
}


/***/ })

};
;