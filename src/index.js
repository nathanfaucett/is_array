var isNative = require("is_native"),
    isLength = require("is_length"),
    isObjectLike = require("is_object_like");


var objectToString = Object.prototype.toString,
    nativeIsArray = Array.isArray,
    isArray;


if (isNative(nativeIsArray)) {
    isArray = nativeIsArray;
} else {
    isArray = function isArray(value) {
        return (
            isObjectLike(value) &&
            isLength(value.length) &&
            objectToString.call(value) === "[object Array]"
        ) || false;
    };
}

module.exports = isArray;
