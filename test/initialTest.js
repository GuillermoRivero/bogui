var expect    = require("chai").expect;

describe("Test Suite", function() {
    describe("Test module", function() {
        it("Check 1 + 1", function() {
            expect(1+1).to.equal(2);
        });
    });

    describe("Test module 2", function() {
        it("Check 2 * 2", function() {
            expect(2 * 2).to.equal(4);
        });
    });
});