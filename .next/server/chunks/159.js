"use strict";
exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 5159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const NotificationPermission = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Create and show the notification
        const notification = new Notification("Welcome back!", {
            body: "Looks like you didn't visit us since: some date"
        });
        notification.onerror = (error)=>{
            console.log("Error creating notification:", error);
        };
    }, []); // Empty array means the effect only runs on mount
    // Check if the browser supports the Notification API
    if (typeof Notification === "undefined") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "This browser does not support the Notification API."
        });
    }
    // Check if the user has already granted permission for notifications
    if (Notification.permission === "granted") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "You have already granted permission for notifications."
        });
    }
    // Ask for permission to send notifications
    const requestPermission = (event)=>{
        event.preventDefault();
        Notification.requestPermission().then((permission)=>{
            if (permission === "granted") {
                // Permission granted, create and show a notification
                const notification = new Notification("Hello world!");
                console.log(notification);
            //notification.show();
            }
        }).catch((error)=>{
            console.error("Error requesting permission for notifications:", error);
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: requestPermission,
        children: "Request permission to send notifications"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationPermission);


/***/ })

};
;