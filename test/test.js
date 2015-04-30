var assert = require("assert"),
    toString = require("../src/index");


describe("toString(value)", function() {
    it("should convert value to a string if it is not one", function() {
        assert.equal(toString(null), "");
        assert.equal(toString(undefined), "");
        assert.equal(toString({}), "[object Object]");
    });
});
