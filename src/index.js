var isLength = require("is_length"),
    isObjectLike = require("is_object_like");


var objectToString = Object.prototype.toString;


module.exports = Array.isArray || function isArray(obj) {
    return (
        isObjectLike(obj) &&
        isLength(obj.length) &&
        objectToString.call(obj) === "[object Array]"
    ) || false;
};
