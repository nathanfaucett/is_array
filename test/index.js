var tape = require("tape");


tape("should return true when the value is an Array", function(assert) {
    var isArray;

    Array.isArray = null;
    isArray = require("../src/index");

    assert.equal(isArray(null), false);
    assert.equal(isArray(undefined), false);
    assert.equal(isArray(0), false);
    assert.equal(isArray(""), false);
    assert.equal(isArray({}), false);
    assert.equal(isArray(/./), false);
    assert.equal(isArray(function noop() {}), false);

    assert.equal(isArray([]), true);

    assert.end();
});
