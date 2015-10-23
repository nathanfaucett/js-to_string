var tape = require("tape"),
    toString = require("..");


tape("toString(value) should convert value to a string if it is not one", function(assert) {
    assert.equal(toString(null), "");
    assert.equal(toString(undefined), "");
    assert.equal(toString({}), "[object Object]");
    assert.end();
});
