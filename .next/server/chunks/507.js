"use strict";
exports.id = 507;
exports.ids = [507];
exports.modules = {

/***/ 7507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ createSlug)
/* harmony export */ });
function createSlug(string) {
    let slug = string.replace(/\s+/g, "-");
    slug = slug.toLowerCase();
    const CYRILLIC_TO_LATIN_MAP = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "iu",
        я: "ia"
    };
    // Replace spaces with dashes
    slug = Array.from(slug).map((ch)=>CYRILLIC_TO_LATIN_MAP[ch.toLowerCase()] || ch).join("");
    // Remove any remaining non-alphanumeric characters and replace them with a dash
    slug = slug.replace(/[^a-z0-9-]+/g, "-").replace(/[-]+/g, "-");
    return slug || "404";
}


/***/ })

};
;